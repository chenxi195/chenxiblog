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
                <a :href="data.imgUrl" target="_blank"><el-button type="text">{{data.imgUrl}}</el-button></a>
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
  async asyncData({app, req, query}){
    let zpid = req ? req.query.zpid : query.zpid;
    let id = req ? req.query.id : query.id;
    let url = zpid ? '/getZpdetail' : '/getQzdetail';
    let params = zpid ? {id: zpid} : {id: id};
    let {data} = await app.$axios.get(url, {params: params});
    return {
      data: data.data ? data.data : {},
      zpid: zpid,
      id: id
    }
  },
  mounted () {
    this.$store.commit('changeTab', {tab: 'fuwu'});
  },
  data () {
    return {
      form: {
        type: '版权争议',
        zpid: 0,
        id: 0,
        desc: ''
      }
    }
  },
  methods: {
    nextStep () {
      let model = {
        no: this.data.no,
        origin: this.zpid ? 'Cale' : '全景网',
        jiguan: '福建中证司法鉴定中心',
        type: this.form.type,
        desc: this.form.desc,
        imgUrl: this.data.imgUrl,
        status: '申请中'
      };

      this.$axios.post('/setCzData', model)
        .then(rs => {
          if(rs.data.success){
            this.$router.push(`/baoquan/czapply2?czid=${rs.data.data.id}`);
          }else{
            this.$message.error(rs.data.description)
          }
        })

    }
  }
}
</script>
<style lang="less" scoped>

</style>