<template>
<div class="skillset" v-loading="loading">
    <div class="item" v-for="(item, index) in typeOptions">
        <h3 class="level-title">
            <a href="#" @click.prevent="typeSearch(item.no)">{{item.value}}</a>
            <span class="level-label">{{countArr[index]}}</span>
        </h3>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="percentArr[index]" status="success"></el-progress>
    </div>
</div>
</template>
<script>
import {typeArr} from '~/assets/js/type.js';
export default {
  mounted () {
    let self = this;
    this.loading = true;
    this.$axios.get('/getBaseInfo')
      .then(res => {
        if(res.data.code==='1'){
          let resData = res.data.data;
          self.$set(self, 'countArr', resData.countArr);
          self.$set(self, 'percentArr', resData.percentArr);
        }else{
          self.$message.error(res.data.description);
        }
        this.loading = false;
      })
      .catch(e => {
        this.$message({type: 'error', message: e.message});
      });
  },
  data () {
    return {
      form: {
        title: '',
        type: 'ALL'
      },
      loading: false,
      countArr: [],
      percentArr: [],
      typeOptions: typeArr
    }
  },
  methods: {
    typeSearch (val) {
      this.form.type = val;
      this.form.title = '';
      this.$router.push({path: '/list', query: this.form})
    }
  }
}
</script>