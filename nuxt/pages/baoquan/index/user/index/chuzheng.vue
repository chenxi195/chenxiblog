<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>我的出证</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="list" stripe border class="bq-table">
            <el-table-column prop="id" label="出证编号"></el-table-column>
            <el-table-column prop="origin" label="存证来源"></el-table-column>
            <el-table-column prop="jiguan" label="出证机关"></el-table-column>
            <el-table-column label="创建日期">
                <template slot-scope="scope">
                    <span>{{momentFormat(scope.row['create_at'])}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div><el-button type="text" @click="dialogLog(scope.row.id)">查看日志</el-button></div>
                    <div><el-button type="text" @click="toApplyInfo(scope.row.id)">查看申请表单</el-button></div>
                    <div v-if="scope.row.status==='申请中'"><el-button type="text" @click="toApplyAgain(scope.row.id)">继续申请</el-button></div>
                    <div v-if="scope.row.status!=='申请中'"><el-button type="text" @click="toApplyProgress(scope.row.id)">查看进度</el-button></div>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="操作日志" :visible.sync="dialogVisible" width="30%">
            <div>
                张卡尔 发起出证申请 2018.10.21 16:05:12<br/>
                张卡尔 选择｛司法鉴定服务｝2018.10.21 16:03:38<br/>
                张卡尔 申请保全服务 2018.10.21 16:01:25<br/>
                张卡尔 完成申请表单 2018.10.21 16:03:00<br/>
                张卡尔 确认授权成功 2018.10.21 16:02:12<br/>
                ｛司法机构｝ 受理中 2018.10.21 16:20:00<br/>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
  async asyncData({app, req, query}){
    let {data} = await app.$axios.get('/getCzlist');
    return {
      list: data.data ? data.data : {}
    }
  },
  mounted () {
    this.$store.commit('changeTab', {tab: 'user'});
    this.$store.commit('changeSubTab', {subTab: 'chuzheng'});
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    toApplyInfo (id) {
      this.$router.push(`/baoquan/user/czapplyinfo?id=${id}`);
    },
    toApplyAgain (id) {
      this.$router.push(`/baoquan/czapply2?czid=${id}`);
    },
    toApplyProgress (id) {
      this.$router.push(`/baoquan/czapply7?id=${id}`);
    },
    dialogLog (id) {
        this.dialogVisible = true;
    }
  }
}
</script>