<template>
    <div>this is fuwu</div>
</template>
<script>
    export default {
      mounted () {
        this.$store.commit('changeTab', {tab: 'fuwu'});
      },
    }
</script>