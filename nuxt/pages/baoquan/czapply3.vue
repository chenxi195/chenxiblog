<template>
    <div>
        <div class="czapply3-outer">
            <div class="czapply3-header"></div>
            <img src="http://qn.chenxiblog.com/1.png">
            <a href="javascript:;" @click="nextStep" class="czapply3-next-step"></a>
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
  data () {
    return {
      zpid: 0,
      id: 0
    }
  },
    methods: {
      nextStep () {
        if(this.id){
          this.$router.push(`/baoquan/czapply4?id=${this.id}`)
        }else{
          this.$router.push(`/baoquan/czapply4?zpid=${this.zpid}`)
        }
      }
    }
}
</script>
<style lang="less" scoped>


.czapply3-next-step {
    position: absolute;
    z-index: 1000;
    left: 350px;
    top: 435px;
    width: 400px;
    height: 40px;
    display: block;
}

</style>