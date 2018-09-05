<template>
    <section class="latest section">
        <div class="section-inner">
            <div class="content">
                <div class="item featured " v-if="topObj">
                    <div class="text-center">
                        <h3 class="title"><a href="#" @click.prevent="goDetail(topObj.id)">{{topObj.title}}</a></h3>
                        <p class="summary">{{topObj.summary}}</p>
                        <div class="featured-image">
                            <a href="#" @click.prevent="goDetail(topObj.id)">
                                <img class="img-responsive project-image" src="/img/project-featured.png" alt="project name" style="width: 100%" />
                            </a>
                            <div class="ribbon">
                                <div class="text">New</div>
                            </div>
                        </div>

                        <div class="desc text-left">{{topObj.summary}}</div><!--//desc-->
                        <a class="btn btn-cta-secondary" href="#" @click.prevent="goDetail(topObj.id)">阅读全文 <i class="fa el-icon-more"></i></a>
                    </div>

                </div>
                <hr class="divider" />
                <blog-list :type="searchForm.type" :title="searchForm.title"></blog-list>
            </div>
        </div>
    </section>
</template>
<script>
  import blogList from '~/components/blog-list.vue';
  export default {
    async asyncData({app}){
      let {data} = await app.$axios.get('/getTopPage');
      return {
        topObj: data.data
      }
    },
    components: {
      blogList
    },
    data () {
      return {
        searchForm:{
          title: '',
          type: 'ALL'
        }
      }
    },
    methods: {
      goDetail (id) {
        this.$router.push({path: '/detail', query: {id: id}});
      }
    }
  }
</script>