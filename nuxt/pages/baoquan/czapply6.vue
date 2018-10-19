<template>
    <div>
        <div class="czapply3-outer" style="background-color: #f6f6f6;height: 689px;">
            <div class="czapply3-header"></div>
            <img src="http://qn.chenxiblog.com/4.png"></div>
        <a href="javascript:;" @click="nextStep" class="czapply6-next-step"></a>
    </div>
    </div>
</template>
<script>
  export default {
    methods: {
      nextStep () {
        this.$router.push('/baoquan/user/chuzheng')
      }
    }
  }
</script>
<style lang="less" scoped>
    .czapply6-next-step {
        position: absolute;
        z-index: 1000;
        left: 850px;
        top: 390px;
        width: 200px;
        height: 40px;
        display: block;
    }

</style>