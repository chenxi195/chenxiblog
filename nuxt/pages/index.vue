<template>
    <el-button type="default"  @click="handleClick">Click Me !</el-button>
</template>

<script>
  export default {
    methods: {
      handleClick () {
        alert(1)
      }
    }
  }
</script>
