<template>
    <div>
        <h3 style="margin-top: 0;">相似度： <span style="color: red;">90%</span></h3>
        <h4>对比日期：{{momentFormat(new Date())}}</h4>
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="diff-img"><img :src="currentRow.imgUrl" width="100%"/> </div>
                <div class="diff-text">我的作品</div>
            </el-col>
            <el-col :span="12">
                <div class="diff-img"><img :src="data.imgUrl" width="100%"/> </div>
                <div class="diff-text">取证截图</div>
            </el-col>
        </el-row>

    </div>
</template>
<script>

export default {
  props: {
    data: [Object],
    currentRow: [Object]
  },
}
</script>
<style lang="less" scoped>
    .diff-img {height: 300px;overflow-y:scroll;border: 1px #f2f2f2 solid;}
    .diff-text {text-align: center;line-height: 40px;}
</style>