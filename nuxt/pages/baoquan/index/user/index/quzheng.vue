<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>我的取证</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table
                :data="tableData"
                stripe
                border
                class="bq-table">
            <el-table-column
                    prop="id"
                    label="存证编号"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="证据名称"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="content"
                    label="取证内容"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="time"
                    label="存证时间">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态">
            </el-table-column>
            <el-table-column label="操作" class="bq-btns">
                <template slot-scope="scope">
                    <div v-if="scope.row.status === '保全中'">
                        <div><el-button type="text" @click="toPom(scope.row.id)">查看保全证书</el-button></div>
                        <div><el-button type="text" @click="toInfo(scope.row.id)">查看存证信息</el-button></div>
                        <div><el-button type="text" @click="toCzchoose(scope.row.id)">申请出证</el-button></div>
                    </div>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('changeTab', {tab: 'user'});
    this.$store.commit('changeSubTab', {subTab: 'quzheng'});
  },
  data () {
    return {
      tableData: [{
        id: 1,
        name: '证据名称1',
        content: '取证内容',
        time: '2018-10-10 09:36:56',
        status: '保全中'
      }]
    }
  },
  methods: {
    toPom (id) {
        this.$router.push(`/baoquan/bqpom?id=${id}`);
    },
    toCzchoose (id) {
      this.$router.push(`/baoquan/czchoose?id=${id}`);
    },
    toInfo (id) {
      this.$router.push(`/baoquan/user/czinfo?id=${id}`);
    }
  }
}
</script>