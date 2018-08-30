<template>
    <el-button type="default"  @click="handleClick">Click Me !</el-button>
</template>

<script>
  export default {
    mounted () {
      alert(1);
    },
    methods: {
      handleClick () {
        this.$axios.get('/getInfo')
          .then(res =>{console.log(res)})
          .catch(e=>{console.log(e)})
      }
    }
  }
</script>
