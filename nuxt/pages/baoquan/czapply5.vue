<template>
    <div>
        <div class="czapply3-outer" style="background-color: #f6f6f6;height: 1468px;">
            <div class="czapply3-header"></div>
            <img src="http://qn.chenxiblog.com/3.png">
            <a href="javascript:;" @click="nextStep" class="czapply5-next-step"></a>
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
    data () {
      return {
        czid: 0
      }
    },
    methods: {
      nextStep () {
        let model = {
          id: this.czid,
          status: '受理中'
        };

        this.$axios.post('/updateCzdetail', model)
          .then(rs => {
            if(rs.data.success){
              this.$router.push(`/baoquan/czapply6?czid=${this.czid}`)
            }else{
              this.$message.error(rs.data.description)
            }
          })
      }
    }
  }
</script>
<style lang="less" scoped>
    .czapply5-next-step {
        position: absolute;
        z-index: 1000;
        left: 450px;
        top: 1370px;
        width: 200px;
        height: 40px;
        display: block;
    }

</style>