<template>
    <div>
        <div class="czapply3-outer" style="background-color: #f6f6f6;height: 814px;">
            <div class="czapply3-header"></div>
            <img src="http://qn.chenxiblog.com/2.png">
            <a href="javascript:;" @click="nextStep" class="czapply4-next-step"></a>
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
        this.$router.push(`/baoquan/czapply5?czid=${this.czid}`)
      }
    }
  }
</script>
<style lang="less" scoped>

    .czapply4-next-step {
        position: absolute;
        z-index: 1000;
        left: 630px;
        top: 735px;
        width: 200px;
        height: 40px;
        display: block;
    }

</style>