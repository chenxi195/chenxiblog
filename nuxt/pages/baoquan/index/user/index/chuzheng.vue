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
                杨俊 发起出证申请 2016.11.21 16:20:00  223  <br/>
                杨俊 选择｛司法鉴定服务｝2016.11.21 16:20:00  223<br/>
                杨俊 购买保全服务 2016.11.21 16:20:00  223 <br/>
                杨俊 完成申请表单 2016.11.21 16:20:00  223 <br/>
                杨俊 确认授权成功 2016.11.21 16:20:00  223 <br/>
                ｛司法机构｝
                受理中
                2016.11.21 16:20:00  223
                <br/>
                ｛司法机构｝
                鉴定成功
                2016.11.21 16:20:00  223
                <br/>
                ｛司法机构｝
                已撤销
                2016.11.21 16:20:00  223
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
      dialogVisible: false,
      tableData: [{
        id: 1,
        origin: '全景网',
        from: '重庆公证处',
        time: '2018-10-10 09:36:56',
        status: '申请中'
      },{
        id: 2,
        origin: '全景网',
        from: '重庆公证处',
        time: '2018-10-10 09:36:56',
        status: '受理中'
      },{
        id: 3,
        origin: '全景网',
        from: '重庆公证处',
        time: '2018-10-10 09:36:56',
        status: '已出证'
      }]
    }
  },
  methods: {
    toApplyInfo (id) {
      this.$router.push(`/baoquan/user/czapplyinfo?id=${id}`);
    },
    toApplyAgain (id) {
      this.$router.push(`/baoquan/czapply2?id=${id}`);
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