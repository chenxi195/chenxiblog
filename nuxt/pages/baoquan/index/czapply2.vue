<template>
    <div class="cz-outer">
        <div class="cz-choose-outer">
            <el-steps :active="2" finish-status="success" class="cz-steps">
                <el-step title="步骤 1" description="选择出证类型"></el-step>
                <el-step title="步骤 2" description="申请表单"></el-step>
                <el-step title="步骤 3" description="第三方授权"></el-step>
                <el-step title="步骤 4" description="出证结果"></el-step>
            </el-steps>
            <div class="sq-box">
                <h4>本次司法鉴定服务由福建中证司法鉴定中心提供，为确保正常出证，福建中证司法鉴定中心将获得以下权限：</h4>
                <div class="sq-img"><img src="/img/u279.png"/> </div>
                <div>
                    • 获取您的信息（帐户信息、实名信息）；<br/>
                    • 获取您申请出证相关的存证信息；<br/>
                    • 根据司法机构需要获取其他相关必要信息。<br/>
                </div>
                <div class="sq-btns">
                    <el-button @click="cancelSq()">取消</el-button>
                    <el-button type="warning" @click="sureSq()">确认授权</el-button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
  export default {
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.czid = to.query.czid || 0;
      })
    },
    mounted () {
      this.$store.commit('changeTab', {tab: 'fuwu'});
    },
    data () {
      return {
        czid: 0
      }
    },
    methods: {
      cancelSq () {
        this.$router.back();
      },
      sureSq () {
        this.$router.push(`/baoquan/czapply3?czid=${this.czid}`)
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