<template>
<div class="bq-outer">
    <el-row class="bq-header">
        <el-col :span="8"><h3>知识工作者维权平台</h3></el-col>
        <el-col :span="12">
            <el-menu
                    :default-active="tab"
                    class="bq-menu"
                    mode="horizontal"
                    router
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="home" :route="{path: '/baoquan'}" >首页 </el-menu-item>
                <el-menu-item index="cunzheng" :route="{path: '/baoquan/cunzheng'}">数据存证</el-menu-item>
                <el-menu-item index="qz" :route="{path: '/baoquan/qz'}">网页取证</el-menu-item>
                <el-menu-item index="fuwu" :route="{path: '/baoquan/fuwu'}">出证服务</el-menu-item>
                <el-menu-item index="user" :route="{path: '/baoquan/user'}">个人中心</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="4" class="bq-user">
            <el-button type="info" icon="el-icon-service" size="mini" circle></el-button> <span class="bq-username">Cale</span>
        </el-col>
    </el-row>
    <nuxt/>
    <div class="bq-footer">
        <span>Copyright 2005-2018 zbj.com 版权所有 渝ICP备10202274-4号 渝B2-20080005  渝公网安备 50019002500154号 重庆猪八戒网络有限公司</span>
    </div>
</div>
</template>
<script>
  import { mapState } from 'vuex';
export default {
  head: {
    title: '知识工作者维权平台'
  },
  computed: {
    ...mapState({
      tab: state => state.tab
    }),
  },
  data () {
    return {
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('/qzSubmit')
        .then(rs => {
          console.log(rs)
        })
        .catch(e=>{
          console.log(e)
        })
    }
  }
}
</script>
<style lang="less" scoped>
.bq-outer {
    .bq-header {
        background-color: #545c64;
        h3 {color: #fff;margin-top: 0;padding: 15px 0 0 15px;}
        .bq-menu {border-bottom: none;}
        .bq-user {
            padding-top: 17px;
            .bq-username {color: #fff; margin-left: 10px;}
        }
    }
    .bq-footer {
        padding: 20px 0;
        background-color: #545c64;
        text-align: center;
        span{color: #fff;font-size: 12px;}
    }
}
</style>
