<template>
<div class="cz-outer">
    <div class="cz-choose-outer">
        <el-steps :active="1" finish-status="success" class="cz-steps">
            <el-step title="步骤 1" description="选择出证类型"></el-step>
            <el-step title="步骤 2" description="申请表单"></el-step>
            <el-step title="步骤 3" description="第三方授权"></el-step>
            <el-step title="步骤 4" description="出证结果"></el-step>
        </el-steps>
        <h3 style="margin: 30px 0;text-align: center;">申请表单</h3>
        <el-form ref="form" :model="form" label-width="80px" class="cz-apply-form">
            <el-form-item label="纠纷类型">
                <el-radio-group v-model="form.type" fill="#e6a23c">
                    <el-radio-button label="订单纠纷"></el-radio-button>
                    <el-radio-button label="合同违约"></el-radio-button>
                    <el-radio-button label="版权争议"></el-radio-button>
                    <el-radio-button label="金融业务"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="出证原因">
                <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item label="送检文件">
                <el-button type="text" disabled>存证信息.zip</el-button>
            </el-form-item>
            <el-form-item label="" style="text-align: center" label-width="0px">
                <el-button type="warning" style="width: 50%" @click="nextStep">确认申请</el-button>
            </el-form-item>
        </el-form>
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
    nextStep () {
      this.$router.push('/baoquan/czapply2')
    }
  }
}
</script>
<style lang="less" scoped>

</style>