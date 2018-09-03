<template>
    <el-container>
        <el-header class="admin-header">
            <h2 class="h2">
                后台控制面板
            </h2>
        </el-header>
        <el-main>
            <el-form :inline="true" :model="loginForm" class="login-form" ref="loginForm" @submit.native.prevent>
                <el-form-item label="操作密码" prop="password" label-width="200px">
                    <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        password: ''
      }
    }
  },
  methods: {
    submitForm (form) {
        this.$axios.post('/loginSubmit', {password: this.loginForm.password})
          .then(rs => {
            if(rs.data.code==='1'){
                window.location.href='/admin';
            }else{
              this.$message.error(rs.data.description);
            }
          })
          .catch(e => {
            this.$message({type: 'error', message: e.message});
          })
    }
  }
}
</script>
<style lang="less" scoped>
    .login-form {
        width: 600px;
        margin: 0 auto;
    }
</style>