<template>
<div v-loading="loading">
    <div class="item row" v-for="item in items" v-if="items.length">
        <div class="desc col-md-8 col-sm-8 col-xs-12">
            <h3 class="title"><a href="#" @click.prevent="goDetail(item.id)">{{item.title}}</a></h3>
            <p><i class="el-icon-time"></i> {{momentFormat(item['created_at'])}}</p>
            <p>{{item.summary}}</p>
            <p><a class="more-link" href="#" @click.prevent="goDetail(item.id)">阅读全文 <i class="fa el-icon-more"></i></a></p>
        </div><!--//desc-->
    </div><!--//item-->
    <div v-if="!items.length">
        <div class="no-data-text">没有数据....</div>
    </div>
    <el-pagination
            v-if="page"
            class="blog-pagination"
            small
            @current-change="handleCurrentChange"
            :current-page="page"
            :page-sizes="[15, 30, 60, 100]"
            layout="total, prev, pager, next, jumper"
            :total="total">
    </el-pagination>
</div>
</template>
<script>
export default {
  props: {
    type: {
      type: [Number, String],
      default: 'ALL'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      form: {
        type: this.type,
        title: this.title
      },
      loading: false,
      items: [],
      page: 0,
      total: 0,
      currentPageTotal: 0,
      pages: 0
    }
  },
  watch: {
    type (val){
      this.$set(this.form, 'title', '');
      this.form.type = val;
      this.requestList(1);
    },
    title (val){
      this.$set(this.form, 'type', 'ALL');
      this.form.title = val;
      this.requestList(1);
    }
  },
  mounted () {
    this.requestList(1);
  },
  methods: {
    requestList (page) {
      let self = this;
      let cPage = page || this.page || 1;
      let reqObj = Object.assign({page: cPage}, this.form);
      this.loading = true;
      this.$axios.get('/getPageList',{params: reqObj})
        .then(function(res){
          if(res.data.code==='1'){
            self.$set(self, 'items', res.data.data.items);
            self.$set(self, 'page', res.data.data.page);
            self.$set(self, 'total', res.data.data.total);
            self.$set(self, 'currentPageTotal', res.data.data.currentPageTotal);
            self.$set(self, 'pages', res.data.data.pages);
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
    },
    goDetail (id) {
      this.$router.push({path: '/detail', query: {id: id}});
    }
  }
}
</script>