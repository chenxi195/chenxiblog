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
                    <h2 class="heading">技术导航</h2>
                    <div class="content">
                        <blog-skills></blog-skills>
                    </div>
                </div>
            </aside>
            <aside class="info aside section">
                <div class="section-inner">
                    <h2 class="heading sr-only">联系我</h2>
                    <div class="content">
                        <ul class="list-unstyled">
                            <li><i class="fa el-icon-message"></i> <span class="sr-only">Email: </span><a href="#">chenxi195@gmail.com</a></li>
                            <li><i class="fa el-icon-view"></i> <span class="sr-only">Website: </span><a href="https://chenxiblog.com" target="_blank">https://chenxiblog.com</a></li>
                            <li><i class="fa el-icon-star-on"></i> <span class="sr-only">Github: </span><a href="https://github.com/chenxi195" target="_blank">https://github.com/chenxi195</a></li>
                            <li><i class="fa el-icon-star-on"></i> <span class="sr-only">Resume: </span><a href="/api/export/resume" target="_blank">Click Here</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </el-col>
    </el-row>
</template>
<script>
import blogSkills from '~/components/blog-skills.vue';
export default {
  data () {
    return {
      searchForm: {
        title: '',
        type: 'ALL'
      }
    }
  },
  components: {
    blogSkills
  },
  methods: {
    submitForm () {
      this.searchForm.type = 'ALL';
      this.$router.push({path: '/list', query: this.searchForm})
    }
  }
}
</script>