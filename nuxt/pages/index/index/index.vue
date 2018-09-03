<template>
    <section class="latest section" v-loading="loading">
        <div class="section-inner">
            <div class="content">
                <div class="item featured ">
                    <h2 class="heading">最新文章</h2>
                    <div class="text-center">
                        <h3 class="title"><a href="" target="_blank">{{topObj.title}}</a></h3>
                        <p class="summary">{{topObj.summary}}</p>
                        <div class="featured-image">
                            <a href="#" target="_blank">
                                <img class="img-responsive project-image" src="/img/project-featured.png" alt="project name" style="width: 100%" />
                            </a>
                            <div class="ribbon">
                                <div class="text">New</div>
                            </div>
                        </div>

                        <div class="desc text-left">{{topObj.summary}}</div><!--//desc-->
                        <a class="btn btn-cta-secondary" href="#" target="_blank">阅读全文 <i class="fa el-icon-more"></i></a>
                    </div>

                </div><!--//item-->
                <hr class="divider" />
                <div class="item row" v-for="item in paginate.items" v-if="paginate.items.length">
                    <div class="desc col-md-8 col-sm-8 col-xs-12">
                        <h3 class="title"><a href="#" target="_blank">{{item.title}}</a></h3>
                        <p>{{item.summary}}</p>
                        <p><a class="more-link" href="#" target="_blank">阅读全文 <i class="fa el-icon-more"></i></a></p>
                    </div><!--//desc-->
                </div><!--//item-->
                <div v-if="!paginate.items.length">
                    <div class="no-data-text">没有数据....</div>
                </div>
                <el-pagination
                        class="blog-pagination"
                        @current-change="handleCurrentChange"
                        :current-page="paginate.page"
                        :page-sizes="[15, 30, 60, 100]"
                        layout="total, prev, pager, next, jumper"
                        :total="paginate.total">
                </el-pagination>
            </div><!--//content-->
        </div><!--//section-inner-->
    </section><!--//section-->
</template>
<script>
  export default {
    async asyncData({app}){
      let {data} = await app.$axios.get('/getFrontFirstPage');
      return data.data
    },
    mounted () {

    },
    data () {
      return {
        searchForm:{
          title: '',
          type: 'ALL'
        },
        loading: false
      }
    },
    methods: {
      requestList (page) {
        let self = this;
        let cPage = page || this.page || 1;
        let reqObj = Object.assign({page: cPage}, self.searchForm);
        this.loading = true;
        this.$axios.get('/getPageList',{params: reqObj})
          .then(function(res){
            if(res.data.code==='1'){
              self.$set(self.paginate, 'items', res.data.data.items);
              self.$set(self.paginate, 'page', res.data.data.page);
              self.$set(self.paginate, 'total', res.data.data.total);
              self.$set(self.paginate, 'currentPageTotal', res.data.data.currentPageTotal);
              self.$set(self.paginate, 'pages', res.data.data.pages);
              self.$set(self, 'loading', false);
            }else{
              self.$message.error(res.data.description);
            }
          })
          .catch(e => {
            this.$message({type: 'error', message: e.message});
          });
      },
      handleCurrentChange(val){
        this.requestList(val);
      }
    }
  }
</script>