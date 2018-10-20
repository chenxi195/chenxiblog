<template>
    <div class="cz-outer">
        <div class="cz-choose-outer">
            <el-steps :active="0" finish-status="success" class="cz-steps">
                <el-step title="步骤 1" description="申请保全"></el-step>
                <el-step title="步骤 2" description="查看保全证书"></el-step>
            </el-steps>
            <div style="width: 90%;margin: 0 auto;">
                <h3>保全是什么？</h3>
                <p>保全是对指定业务进行存证，实时记录用户发生的所有行为，固化电子数据形成全证据链条，通过区块链技术保证存证数据无法被篡改。最终为用户生成一份保全证书，当出现纠纷时，可作为呈堂供证。</p>
                <h3>为什么要保全？</h3>
                <p>当用户出现纠纷时，保全的用户可向司法机构提交保全证据，帮助申请仲裁委的仲裁书、司法鉴定中心的司法鉴定建议书、公证处的公证书，来维护自己的权益。</p>
            </div>
            <el-card class="box-card">
                <el-row>
                    <el-col :span="4">
                        <div class="cz-img"><img src="/img/bq/icon.png"/> </div>
                    </el-col>
                    <el-col :span="14" style="border-right: 1px #f2f2f2 dashed;">
                        <p class="cz-content-1">保全证书</p>
                        <p>一份实时记录用户行为信息的存证文档。当出现纠纷时，可作为呈堂供证。</p>
                        <p>&nbsp;</p>
                        <p>出证机构：知识工作者维权平台</p>
                        <p><el-checkbox v-model="type" label="我同意 《知识工作者维权平台用户须知》" name="type"></el-checkbox></p>
                    </el-col>
                    <el-col :span="6">
                        <div class="cz-content-right">
                            <p>法律效力</p>
                            <p><el-rate v-model="rate1"></el-rate></p>
                            <p><a :href="`/baoquan/bqpom?zpid=${zpid}`" target="_blank"><el-button type="warning" @click="applyBq" style="margin-top: 70px;">点击申请</el-button></a> </p>
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
        vm.zpid = to.query.id || 1;
      })
    },
    mounted () {
      this.$store.commit('changeTab', {tab: 'fuwu'});
    },
    data () {
      return {
        zpid: 0,
        rate1: 4,
        rate2: 5,
        type: true
      }
    },
    methods: {
      applyBq () {
        let model = {
          id: this.zpid,
          status: '保全中'
        };
        this.$axios.post('/updateZpdetail', model)
          .then(rs => {
            if(rs.data.success){
              this.$router.push('/baoquan/user');
            }else{
              this.$message.error(rs.data.description);
            }
          })
      }
    }


  }
</script>
<style lang="less" scoped>

</style>