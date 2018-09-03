<template>
    <div>
        <header class="header">
            <div class="container">
                <a href="/"><img class="profile-image img-responsive pull-left" src="/img/blog-logo.jpg" alt="James Lee" /></a>
                <div class="profile-content pull-left">
                    <h1 class="name"><a href="/">前端茶座</a> </h1>
                    <h2 class="desc">前端开发工程师的技术博客</h2>
                    <!--<ul class="social list-inline">-->
                        <!--<li><a href="#"><i class="fa fa-twitter"></i></a></li>-->
                        <!--<li><a href="#"><i class="fa fa-google-plus"></i></a></li>-->
                        <!--<li><a href="#"><i class="fa fa-linkedin"></i></a></li>-->
                        <!--<li><a href="#"><i class="fa fa-github-alt"></i></a></li>-->
                        <!--<li class="last-item"><a href="#"><i class="fa fa-hacker-news"></i></a></li>-->
                    <!--</ul>-->
                </div><!--//profile-->
                <!--<a class="btn btn-cta-primary pull-right" href="http://themes.3rdwavemedia.com/" target="_blank"><i class="fa fa-paper-plane"></i> Contact Me</a>-->
                <!--<el-button type="success" class="btn pull-right"><i class="fa fa-paper-plane"></i> Contact Me</el-button>-->
            </div>
        </header>
        <div class="container sections-wrapper">
            <el-row :gutter="15">
                <el-col :md="16" :sm="24" :xs="24">
                    <section class="latest section" v-loading="loading">
                        <div class="section-inner">
                            <h2 class="heading">最新文章</h2>
                            <div class="content">

                                <div class="item featured text-center">
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
                </el-col>
                <el-col :md="8" :sm="24" :xs="24">
                    <aside class="info aside section">
                        <div class="section-inner">
                            <el-form :inline="true" :model="searchForm" class="search-form" ref="searchForm" @submit.native.prevent>
                                <el-form-item label="" prop="text" label-width="200px">
                                    <el-input type="text" v-model="searchForm.title" placeholder="请输入搜索关键字" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" @click="submitForm()" class="search-btn">搜索</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </aside>
                    <aside class="skills aside section">
                        <div class="section-inner">
                            <h2 class="heading"><a href="/">相关技术</a></h2>
                            <div class="content">
                                <div class="skillset">
                                    <div class="item">
                                        <h3 class="level-title">
                                            <a href="#" @click.prevent="typeSearch(1)">Nodejs</a>
                                            <span class="level-label">{{type1Count}}</span>
                                        </h3>
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="type1Percent" status="success"></el-progress>
                                    </div><!--//item-->
                                    <div class="item">
                                        <h3 class="level-title">
                                            <a href="#" @click.prevent="typeSearch(2)">Javascript &amp; jQuery &amp; MVVM</a>
                                            <span class="level-label">{{type2Count}}</span>
                                        </h3>
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="type2Percent" status="success"></el-progress>
                                    </div><!--//item-->
                                    <div class="item">
                                        <h3 class="level-title">
                                            <a href="#" @click.prevent="typeSearch(3)">HTML5, CSS3, SASS &amp; LESS</a>
                                            <span class="level-label">{{type3Count}}</span>
                                        </h3>
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="type3Percent" status="success"></el-progress>
                                    </div><!--//item-->
                                    <div class="item">
                                        <h3 class="level-title">
                                            <a href="#" @click.prevent="typeSearch(4)">Others</a>
                                            <span class="level-label">{{type4Count}}</span>
                                        </h3>
                                        <el-progress :text-inside="true" :stroke-width="18" :percentage="type4Percent" status="success"></el-progress>
                                    </div><!--//item-->
                                </div>
                            </div><!--//content-->
                        </div><!--//section-inner-->
                    </aside><!--//section-->
                    <aside class="info aside section">
                        <div class="section-inner">
                            <h2 class="heading sr-only">联系我们</h2>
                            <div class="content">
                                <ul class="list-unstyled">
                                    <li><i class="fa el-icon-message"></i> <span class="sr-only">Email: </span><a href="#">chenxi195@gmail.com</a></li>
                                    <li><i class="fa el-icon-view"></i> <span class="sr-only">Website: </span><a href="http://www.chenxiblog.com" target="_blank">http://www.chenxiblog.com</a></li>
                                    <li><i class="fa el-icon-star-on"></i> <span class="sr-only">Github: </span><a href="https://github.com/chenxi195" target="_blank">https://github.com/chenxi195</a></li>
                                </ul>
                            </div><!--//content-->
                        </div><!--//section-inner-->
                    </aside><!--//aside-->
                    <aside class="info aside section">
                        <div class="section-inner">
                            <el-form :inline="true" :model="searchForm" class="search-form" ref="searchForm" @submit.native.prevent>
                                <el-form-item label="" prop="text" label-width="200px">
                                    <el-input type="text" v-model="searchForm.title" placeholder="请输入搜索关键字" auto-complete="off"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="success" @click="submitForm()" class="search-btn">搜索</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </aside>
                </el-col>
            </el-row>
        </div>
        <footer class="footer">
            <div class="container text-center">
                <small class="copyright">Developed by <a href="https://github.com/chenxi195" target="_blank">chenxi195</a></small>
            </div><!--//container-->
        </footer>
    </div>
</template>

<script>
  export default {
    async asyncData({app}){
      let {data} = await app.$axios.get('/getFrontFirstPage');
      return data.data
    },
    head: {
      style: [
        { cssText: 'body { background-color: #DAE3E7 }', type: 'text/css' }
      ]
    },
    mounted () {

    },
    computed: {
      type1Percent () {
        return Math.floor((this.type1Count/this.allCount)*100);
      },
      type2Percent () {
        return Math.floor((this.type2Count/this.allCount)*100);
      },
      type3Percent () {
        return Math.floor((this.type3Count/this.allCount)*100);
      },
      type4Percent () {
        return Math.floor((this.type4Count/this.allCount)*100);
      }
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
      submitForm () {
        this.searchForm.type = 'ALL';
        this.requestList(1);
      },
      typeSearch (val) {
        this.searchForm.type = val;
        this.searchForm.title = '';
        this.requestList(1);
      },
      handleCurrentChange(val){
        this.requestList(val);
      }
    }
  }
</script>
