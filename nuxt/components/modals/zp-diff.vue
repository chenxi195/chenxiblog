<template>
    <div>
        <el-table border stripe :data="list" highlight-current-row @current-change="handleCurrentChange">
            <el-table-column label="选择">
                <template slot-scope="scope">
                    <div style="text-align: center;cursor: pointer;" v-if="currentRow && currentRow.id === scope.row.id">
                        <el-button type="success" icon="el-icon-check" circle size="mini"></el-button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="id" label="作品编号"></el-table-column>
            <el-table-column prop="title" label="作品名称"></el-table-column>
            <el-table-column label="作品内容">
                <template slot-scope="scope">
                    <img :src="scope.row.imgUrl" width="200"/>
                </template>
            </el-table-column>
            <el-table-column label="保全时间">
                <template slot-scope="scope">
                    <span>{{momentFormat(scope.row['create_at'])}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  props: {
    data: [Object]
  },
  mounted () {
    this.$axios.get('/getZplist')
      .then(rs => {
        if(rs.data.success){
          this.$set(this, 'list', rs.data.data);
        }else{
          this.$message.error(rs.data.description);
        }
      })
  },
  data () {
    return {
      list: [],
      currentRow: null
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
    }
  }
}
</script>