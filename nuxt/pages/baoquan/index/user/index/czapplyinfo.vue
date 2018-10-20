<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user/chuzheng' }">我的出证</el-breadcrumb-item>
            <el-breadcrumb-item>我的申请表单</el-breadcrumb-item>
        </el-breadcrumb>
        <h3 style="margin: 30px 0;text-align: center;">申请表单</h3>
        <el-form ref="form" :model="form" label-width="80px" class="cz-apply-form">
            <el-form-item label="纠纷类型">
                <el-radio-group v-model="data.type" fill="#e6a23c">
                    <el-radio-button :label="data.type"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="出证原因">
                <el-input type="textarea" v-model="data.desc"></el-input>
            </el-form-item>
            <el-form-item label="送检文件">
                <a :href="data.imgUrl" target="_blank"><el-button type="text">{{data.imgUrl}}</el-button></a>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    async asyncData({app, req, query}){
      let id = req ? req.query.id : query.id;
      let {data} = await app.$axios.get('/getCzdetail?id='+id);
      return {
        data: data.data ? data.data : {}
      }
    },
    mounted () {
      this.$store.commit('changeTab', {tab: 'user'});
      this.$store.commit('changeSubTab', {tab: 'chuzheng'});
    },
    data () {
      return {
//        form: {
//          type: this.data.type,
//          desc: this.data.desc,
//          imgUrl: this.data.imgUrl
//        }
      }
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>

</style>