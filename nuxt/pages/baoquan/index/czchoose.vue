<template>
<div class="cz-outer">
    <div class="cz-choose-outer">
        <h3>请选择司法出证类型：</h3>
        <el-card class="box-card">
            <el-row>
                <el-col :span="4">
                    <div class="cz-img"><img src="/img/bq/icon.png"/> </div>
                </el-col>
                <el-col :span="14" style="border-right: 1px #f2f2f2 dashed;">
                    <p class="cz-content-1">司法鉴定建议书</p>
                    <p>司法鉴定服务是由司法鉴定中心提供，管辖全国范围，依照法律、法规和规章规定的条件和程序，运用科学技术或者专门知识对诉讼涉及的专门性问题进行鉴别和判断，并制作表达鉴定意见的文书：司法鉴定建议书。司法鉴定建议书具有较高的法律效力，能辅助法院判决，增大胜诉的机会。</p>
                    <p>出证机构：<span>福建中证司法鉴定中心</span></p>
                    <p>出证费用：800元/次 <el-checkbox v-model="type" class="cz-content-checkbox" label="我同意 《司法鉴定用户须知》" name="type"></el-checkbox></p>
                </el-col>
                <el-col :span="6">
                    <div class="cz-content-right">
                        <p>法律效力</p>
                        <p><el-rate v-model="rate1"></el-rate></p>
                        <p><el-button type="warning" style="margin-top: 70px;" @click="toApply()">点击申请</el-button></p>
                    </div>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <el-row>
                <el-col :span="4">
                    <div class="cz-img"><img src="/img/bq/icon.png"/> </div>
                </el-col>
                <el-col :span="14" style="border-right: 1px #f2f2f2 dashed;">
                    <p class="cz-content-1">仲裁书</p>
                    <p>仲裁服务是由仲裁机构提供，管辖全国范围，并依照法律规定制作的具有法律效力的文书资料：仲裁裁决书。仲裁裁决书与法院判决书具有同等法律效力，若裁决败诉方不执行仲裁结果，则胜诉方有权可向法院申请强制执行。</p>
                    <p>出证机构：<span>广州仲裁委员会</span></p>
                    <p>出证费用：根据案件金额而定 <el-checkbox v-model="type" class="cz-content-checkbox" label="我同意 《司法鉴定用户须知》" name="type"></el-checkbox></p>
                </el-col>
                <el-col :span="6">
                    <div class="cz-content-right">
                        <p>法律效力</p>
                        <p><el-rate v-model="rate2"></el-rate></p>
                        <p><el-button type="warning" style="margin-top: 70px;" disabled>点击申请</el-button></p>
                    </div>
                </el-col>
            </el-row>
        </el-card>
        <el-card class="box-card">
            <el-row>
                <el-col :span="4">
                    <div class="cz-img"><img src="/img/bq/icon.png"/> </div>
                </el-col>
                <el-col :span="14" style="border-right: 1px #f2f2f2 dashed;">
                    <p class="cz-content-1">公证书</p>
                    <p>公证服务是由各地区公证处提供，有地域管辖范围限制，根据当事人申请，依照事实和法律，按照法定程序制作的具有特殊法律效力的司法证明书：公证书。公证书具有较高的证据效力、强制执行效力、法律行为成立的要件效力。</p>
                    <p>出证机构：<span>全国各地方公证处</span></p>
                    <p>出证费用：200元 <el-checkbox v-model="type" class="cz-content-checkbox" label="我同意 《司法鉴定用户须知》" name="type"></el-checkbox></p>
                </el-col>
                <el-col :span="6">
                    <div class="cz-content-right">
                        <p>法律效力</p>
                        <p><el-rate v-model="rate1"></el-rate></p>
                        <p><el-button type="warning" style="margin-top: 70px;" disabled >点击申请</el-button></p>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</div>
</template>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.zpid = to.query.zpid || 0;
      vm.id = to.query.id || 0;
    })
  },
    mounted () {
      this.$store.commit('changeTab', {tab: 'fuwu'});
    },
    data () {
      return {
        rate1: 4,
        rate2: 5,
        type: true,
        zpid: 0,
        id: 0
      }
    },
    methods: {
      toApply () {
        if(this.id){
          this.$router.push(`/baoquan/czapply?id=${this.id}`)
        }else{
          this.$router.push(`/baoquan/czapply?zpid=${this.zpid}`)
        }
      }
    }


}
</script>
<style lang="less" scoped>

</style>