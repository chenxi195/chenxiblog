<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>我的取证</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="list" stripe border class="bq-table">
            <el-table-column prop="id" label="取证编号"></el-table-column>
            <el-table-column prop="zjname" label="证据名称"></el-table-column>
            <el-table-column prop="desc" label="证据备注" width="180"></el-table-column>
            <el-table-column label="取证时间">
                <template slot-scope="scope">
                    <span>{{momentFormat(scope.row['create_at'])}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column label="操作" class="bq-btns">
                <template slot-scope="scope">
                    <div v-if="scope.row.status === '保全中'">
                        <div>
                            <a :href="`/baoquan/bqpom?id=${scope.row.id}`" target="_blank">
                                <el-button type="text">查看保全证书</el-button>
                            </a>
                        </div>
                        <div><el-button type="text" @click="toInfo(scope.row)">查看取证信息</el-button></div>
                        <div><el-button type="text" @click="zpDiff(scope.row)">对比作品</el-button></div>
                        <div><el-button type="text" @click="toCzchoose(scope.row.id)">申请出证</el-button></div>
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="对比作品" :visible.sync="dialogVisible" :close-on-click-modal="false">
            <zp-diff :data="currentItem" ref="zpDiff"></zp-diff>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDiff" :loading="btnLoading">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="对比结果" :visible.sync="dialogVisible2" :close-on-click-modal="false">
            <zp-diff-result :data="currentItem" :currentRow="selectedDiff" ref="zpDiff"></zp-diff-result>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>
<script>
  import zpDiff from '~/components/modals/zp-diff.vue';
  import zpDiffResult from '~/components/modals/zp-diff-result.vue';
export default {
  async asyncData({app, req, query}){
    let {data} = await app.$axios.get('/getQzlist');
    return {
      list: data.data ? data.data : {}
    }
  },
  components: {
    zpDiff,
    zpDiffResult
  },
  mounted () {
    this.$store.commit('changeTab', {tab: 'user'});
    this.$store.commit('changeSubTab', {subTab: 'quzheng'});
  },
  data () {
    return {
      btnLoading: false,
      dialogVisible: false,
      dialogVisible2: false,
      currentItem: null,
      selectedDiff: null
    }
  },
  methods: {
    toCzchoose (id) {
      this.$router.push(`/baoquan/czchoose?id=${id}`);
    },
    toInfo (obj) {
      this.$router.push(`/baoquan/user/czinfo?id=${obj.id}&img=${obj.imgUrl}`);
    },
    zpDiff (obj) {
        this.currentItem = obj;
        this.dialogVisible = true;
    },
    handleDiff () {
        this.selectedDiff = this.$refs['zpDiff'].currentRow;
        if(!this.selectedDiff){
          this.$message.error('请选择一个比对作品');
        }else{
          this.dialogVisible2 = true;
          this.dialogVisible = false;
        }

    }
  }
}
</script>