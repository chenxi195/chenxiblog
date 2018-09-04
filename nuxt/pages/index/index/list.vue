<template>
    <section class="latest section">
        <div class="section-inner">
            <div class="content">
                <blog-breadcrumb :type="type"></blog-breadcrumb>
                <blog-list :type="type" :title="title"></blog-list>
            </div>
        </div>
    </section>
</template>
<script>
import blogList from '~/components/blog-list.vue';
import blogBreadcrumb from '~/components/blog-breadcrumb.vue';
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
        vm.title = to.query.title || '';
        vm.type = to.query.type || 'ALL';
      })
    },
  components: {
    blogList,
    blogBreadcrumb
  },
  watch: {
    $route(){
      this.title = this.$route.query.title || '';
      this.type = this.$route.query.type || 'ALL';
    }
  },
  data () {
    return {
      title: '',
      type: 'ALL'
    }
  },
  methods: {

  }
}
</script>