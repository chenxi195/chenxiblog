<template>
    <div>this is cunzheng </div>
</template>
<script>
    export default {
      mounted () {
        this.$store.commit('changeTab', {tab: 'cunzheng'});
      },
    }
</script>