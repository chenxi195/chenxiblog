<template>
    <el-row :gutter="15">
        <el-col :md="16" :sm="24" :xs="24">
            <nuxt/>
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
        </el-col>
    </el-row>
</template>
<script>
export default {
  async asyncData({app}){
    let {data} = await app.$axios.get('/getBaseInfo');
    return data.data
  },
  data () {
    return {
      searchForm: {
        title: '',
        type: 'ALL'
      }
    }
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
  methods: {
    submitForm () {
      this.searchForm.type = 'ALL';
      this.$router.push({path: '/list', query: this.searchForm})
    },
    typeSearch (val) {
      this.searchForm.type = val;
      this.searchForm.title = '';
      this.$router.push({path: '/list', query: this.searchForm})
    }
  }
}
</script>