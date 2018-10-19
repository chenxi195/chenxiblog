<template>
    <div class="cz-outer">
        <div class="cz-choose-outer">
            <el-steps :active="4" finish-status="success" class="cz-steps">
                <el-step title="步骤 1" description="选择出证类型"></el-step>
                <el-step title="步骤 2" description="申请表单"></el-step>
                <el-step title="步骤 3" description="第三方授权"></el-step>
                <el-step title="步骤 4" description="出证结果"></el-step>
            </el-steps>
            <div class="sq-box">
                <h4 style="text-align: center">受理中</h4>
                <div style="text-align: center;">
                    司法鉴定中心出证周期一般在两周左右，请耐性等待。
                    申请出证的相关进展，司法鉴定中心会电话联系您！
                    客服热线：400-801-5888</div>
                <div class="sq-btns">
                    <el-button @click="cancelSq()">返回</el-button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
  export default {
    mounted () {
      this.$store.commit('changeTab', {tab: 'fuwu'});
    },
    data () {
      return {
        form: {
          type: '版权争议'
        }
      }
    },
    methods: {
      cancelSq () {
        this.$router.push('/baoquan/user/chuzheng')
      }
    }
  }
</script>
<style lang="less" scoped>
    .sq-box {
        width: 500px;box-shadow: 0 0 5px #ccc;margin: 0px auto;padding: 40px 100px;
    h4 {line-height: 30px;}
    .sq-img {text-align: center;margin: 20px auto;}
    .sq-btns {
        margin-top: 40px;
        text-align: center;
    }
    }
</style>