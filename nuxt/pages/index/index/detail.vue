<template>
    <section class="latest section">
        <div class="section-inner">
            <div class="content">
                <blog-breadcrumb :type="data.type" :title="data.title"></blog-breadcrumb>
                <div class="blog-content">
                    <h2 v-text="data.title" class="title"></h2>
                    <p><i class="el-icon-time"></i> {{momentFormat(data['created_at'])}}</p>
                    <div class="hr"></div>
                    <div v-html="data.content"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import blogBreadcrumb from '~/components/blog-breadcrumb.vue';
export default {
  async asyncData({req, query, app}){
    let id = req ? req.query.id : query.id;
    let {data} = await app.$axios.get('/getPageItem', {params: {id: id}});
    return {
      data: data.data
    }
  },
  components: {
    blogBreadcrumb
  },
  data () {
    return {

    }
  }
}
</script>