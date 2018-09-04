<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="blog-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: `/list?type=${type}`}">分类: {{breadText}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="title">{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
  import {typeArr} from '~/assets/js/type.js';
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
    computed: {
      breadText () {
        if(!this.type || this.type === 'ALL'){
          return '全部';
        }else{
          return typeArr.find(item=>item.no==this.type).value;
        }
      }
    }
  }
</script>