<template>
    <div style="min-height: 800px;">
        <div class="bq-home-1">
            <el-row style="margin: 50px auto;">
                <el-col :span="8">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>公证证书</h4>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>司法鉴定意见书</h4>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>仲裁裁决书</h4>
                    </div>
                </el-col>
            </el-row>
            <div class="fuwu-input-box">
                <el-input v-model="form.content" placeholder="请输入保全证书编号"></el-input>
                <el-button type="warning" class="fuwu-btn" @click="toCzchoose">申请出证</el-button>
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
        content: ''
      }
    }
  },
  methods: {
    toCzchoose () {
      this.$axios.get('/getZpListByZsid', {params: {zsid: this.form.content}})
        .then(rs => {
          if(rs.data.success && rs.data.data.length){
            this.$router.push(`/baoquan/czchoose?zpid=${rs.data.data[0].id}`);
          }else{
            this.$message.error('未查找到相应存证作品');
          }
        });
    }
  }
}
</script>
<style lang="less" scoped>
.fuwu-input-box {
    text-align: center;
    width: 600px;
    margin: 150px auto 50px;
}
.fuwu-btn {
    width: 100%;
    margin-top: 30px;
}
</style>