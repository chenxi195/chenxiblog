<template>
    <el-container>
        <el-header class="admin-header">
            <h2 class="h2">
                后台控制面板
                <el-button type="primary" class="add-btn" @click="addBlog">添加一篇博客</el-button>
            </h2>
        </el-header>
        <el-main>
            <el-form :inline="true" :model="search" class="filter-form" ref="search">
                <el-form-item label="文章标题" prop="title">
                    <el-input v-model="search.title" placeholder="请输入文章标题" @keyup.enter.native="onSearch('search')" @blur="onSearch('search')"></el-input>
                </el-form-item>
                <el-form-item label="文章类型" prop="type">
                    <el-select v-model="search.type" placeholder="请选择文章类型" @change="onSearch('search')">
                        <el-option v-for="item in typeOptions" :key="item.no" :label="item.value" :value="item.no"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="时间范围" prop="time">
                    <el-date-picker
                            v-model="search.time"
                            type="daterange"
                            align="right"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="timeOptions"
                            @change="onSearch('search')"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button @click="onReset('search')">重置</el-button>
                    <el-button type="primary" @click="onSearch('search')">搜索</el-button>
                </el-form-item>
            </el-form>
            <el-table border stripe :data="items"
                      v-loading="loading"
                      class="admin-table"
                      element-loading-text="拼命加载中"
                      :default-sort = "{prop: 'id', order: 'descending'}"
            >
                <el-table-column prop="id" sortable label="序号" width="80">
                    <template slot-scope="scope">
                        <span style="margin-right: 10px">{{ scope.row.id }}</span>
                        <i class="el-icon-star-on" style="color: red" v-if="scope.row.top==2"></i>
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column sortable label="创建时间">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i> {{momentFormat(scope.row['created_at'])}}
                    </template>
                </el-table-column>
                <el-table-column sortable label="修改时间">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i> {{momentFormat(scope.row['updated_at'])}}
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="info" @click="handleTop(scope.$index, scope.row)">{{scope.row.top==2 ? '取消置顶' : '置顶'}}</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    class="admin-pagination"
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    :page-sizes="[15, 30, 60, 100]"
                    layout="total, prev, pager, next, jumper"
                    :total="total">
            </el-pagination>

            <el-dialog title="添加一篇新博客" :visible.sync="dialogVisible" :close-on-click-modal="false">
                <edit-form :data="currentItem" ref="editForm"></edit-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleCreate" :loading="btnLoading">确 定</el-button>
                </div>
            </el-dialog>

        </el-main>
    </el-container>
</template>

<script>
  import editForm from '~/components/modals/edit-form.vue';
  import time from '~/assets/js/time.js';
  import {typeArr} from '~/assets/js/type.js';
  export default {
    async asyncData({app}){
      let {data} = await app.$axios.get('/getPageList');
      return data.data
    },
    head: {
      style: [
        { cssText: 'body { background-color: #fff }', type: 'text/css' }
      ]
    },
    components: {
      editForm
    },
    data () {
      return {
        loading: false,
        dialogVisible: false,
        btnLoading: false,
        search: {
          type: 'ALL',
          time: '',
          title: ''
        },
        currentItem: {},
        timeOptions: time,
        typeOptions: typeArr
      }
    },
    methods: {
      requestList (page) {
        let self = this;
        let cPage = page || this.page || 1;
        let reqObj = Object.assign({page: cPage}, self.search);
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
      onReset (form) {
        this.$refs[form].resetFields();
      },
      onSearch (form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.requestList(1);
          } else {
            this.$message.warning('请将信息填写正确再提交哦～');
            return false;
          }
        });
      },
      addBlog () {
        this.dialogVisible = true;
      },
      handleEdit (index, obj) {
        Object.assign(this.currentItem, obj);
        this.dialogVisible = true;
      },
      handleCreate () {
        let form = this.$refs['editForm'].form;

        this.btnLoading = true;
        this.$axios.post('/createOrSavePage', form)
          .then(rs => {
            let msgStatus = rs.data.code === '1' ? 'success' : 'error';
            this.$message({type: msgStatus,message: rs.data.description});
            this.btnLoading = false;
            if(rs.data.code === '1'){
              this.requestList(1);
              this.dialogVisible = false;
            }
          })
          .catch(e => {
            this.$message({type: 'error', message: e.message});
          });
      },
      handleDelete(index, obj) {
        this.$confirm('是否确定要删除这篇文章?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('/deletePage', {id: obj.id})
            .then(rs => {
              let msgStatus = rs.data.code === '1' ? 'success' : 'error';
              this.$message({type: msgStatus,message: rs.data.description});
              if(rs.data.code === '1'){
                this.requestList(this.page);
              }
            })
            .catch(e => {
              this.$message({type: 'error', message: e.message});
            })

        }).catch(() => {});
      },
      handleCurrentChange (val) {
        this.requestList(val);
      },
      handleTop (index, obj) {
        let isTop = obj.top == 1;
        let url = isTop ? '/setPageTop' : '/cancelPageTop';
        this.$axios.post(url, {id: obj.id})
          .then(rs => {
            let msgStatus = rs.data.code === '1' ? 'success' : 'error';
            this.$message({type: msgStatus,message: rs.data.description});
            if(rs.data.code === '1'){
              obj.top = isTop ? 2 : 1;
            }
          })
          .catch(e => {
            this.$message({type: 'error', message: e.message});
          });

      }
    }
  }
</script>
<style lang="less" scoped>
    .admin-table {
        width: 100%;
    }
    .admin-pagination {
        margin-top: 20px;
    }
    .add-btn {
        float: right;
        display: inline-block;
        margin-bottom: 15px;
    }
</style>