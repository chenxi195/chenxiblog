<template>
    <div>
        <el-row :gutter="30">
            <el-col :span="3">
                <el-menu
                        :default-active="subTab"
                        router
                        class="bq-user-menu"
                        background-color="#d3dce6"
                        text-color="#606266"
                        active-text-color="#000">
                    <el-menu-item index="user"  :route="{path: '/baoquan/user'}">
                        <i class="el-icon-menu"></i>
                        <span slot="title">我的作品</span>
                    </el-menu-item>
                    <el-menu-item index="quzheng"  :route="{path: '/baoquan/user/quzheng'}">
                        <i class="el-icon-document"></i>
                        <span slot="title">我的取证</span>
                    </el-menu-item>
                    <el-menu-item index="chuzheng"  :route="{path: '/baoquan/user/chuzheng'}">
                        <i class="el-icon-tickets"></i>
                        <span slot="title">我的出证</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="21">

                <nuxt/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      subTab: state => state.subTab
    }),
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
    .bq-user-menu {
        min-height: 800px;
    }
</style>