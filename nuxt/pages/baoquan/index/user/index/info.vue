<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item>个人信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
            <el-col :span="3" style="padding-top: 10px;">
                <div class="user-avatar"><img src="/img/bq/icon.png"/> </div>
            </el-col>
            <el-col :span="21">
                <h4>注册信息</h4>
                <el-table :data="tableData" stripe border class="bq-table">
                    <el-table-column prop="id" label="用户ID"></el-table-column>
                    <el-table-column prop="nickname" label="用户昵称"></el-table-column>
                    <el-table-column prop="type" label="用户类型"></el-table-column>
                    <el-table-column prop="tel" label="绑定手机号"></el-table-column>
                    <el-table-column prop="mail" label="绑定邮箱"></el-table-column>
                </el-table>
                <br/>
                <h4>实名认证信息</h4>
                <el-table :data="realData" stripe border class="bq-table">
                    <el-table-column prop="name" label="用户姓名"></el-table-column>
                    <el-table-column prop="realId" label="身份证号码"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>

export default {

  mounted () {
    this.$store.commit('changeTab', {tab: 'user'});
    this.$store.commit('changeSubTab', {subTab: 'info'});
  },
  data () {
    return {
      tableData : [{
        id: '5675675',
        nickname: 'Cale',
        type: '普通用户',
        tel: '18580691630',
        mail: '354363750@qq.com'
      }],
      realData: [{
        name: '张卡尔',
        realId: '522101111104152822'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
    .user-avatar {
        width: 120px;
        background-color: #d3dce6;
        text-align: center;
        padding: 40px 0;
    }
</style>