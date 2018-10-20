<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>我的作品</el-breadcrumb-item>
        </el-breadcrumb>
        <el-table :data="list" stripe border class="bq-table">
            <el-table-column prop="id" label="作品编号"></el-table-column>
            <el-table-column prop="title" label="作品名称"></el-table-column>
            <el-table-column prop="desc" label="作品内容" width="180"></el-table-column>
            <el-table-column label="上传时间">
                <template slot-scope="scope">
                    <span>{{momentFormat(scope.row['create_at'])}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <div v-if="scope.row.status==='未保全'"><el-button type="text" @click="toApply(scope.row.id)">申请保全</el-button></div>
                    <div v-if="scope.row.status==='保全中'"><a :href="`/baoquan/bqpom?id=${scope.row.id}`" target="_blank"><el-button type="text">查看保全证书</el-button></a></div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  async asyncData({app, req, query}){
    let {data} = await app.$axios.get('/getZplist');
    return {
      list: data.data ? data.data : {}
    }
  },
  mounted () {
    this.$store.commit('changeTab', {tab: 'user'});
    this.$store.commit('changeSubTab', {subTab: 'user'});
  },
  data () {
    return {
      tableData: [{
        id: 1,
        name: '证据名称1',
        content: '取证内容',
        time: '2018-10-10 09:36:56',
        status: '未保全'
      },{
        id: 2,
        name: '证据名称1',
        content: '取证内容',
        time: '2018-10-10 09:36:56',
        status: '保全中'
      }]
    }
  },
  methods: {
    toApply(id){
      this.$router.push(`/baoquan/bqapply?id=${id}`);
    }
  }

}
</script>