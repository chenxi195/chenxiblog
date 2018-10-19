<template>
<div class="qzdetail-outer">
    <el-row :gutter="30">
        <el-col :span="14">
            <div class="qzdetail-img-box">
                <img class="qzdetail-img" src="/img/1539870431354.png"/>
            </div>
        </el-col>
        <el-col :span="10">
            <div class="qzdetail-box">
                <div class="qzdetail-title">
                    <i class="el-icon-document"></i>
                    <span>取证信息</span>
                </div>
                <el-form ref="form" :model="form" label-width="80px" class="qzdetail-from">
                    <el-form-item label="网址地址">
                         http://baidu.com
                    </el-form-item>
                    <el-form-item label="网页标题">
                        全景网__中国领先的图片库和图片素材网站
                    </el-form-item>
                    <el-form-item label="取证时间" style="margin-top: 20px;">
                        2018-10-16  11:06:26  568
                    </el-form-item>
                    <el-form-item label="网页IP">
                        220.181.111.188
                    </el-form-item>
                    <el-form-item label="网站备案">
                        渝ICP备10202274-4号
                    </el-form-item>
                    <el-form-item label="浏览器">
                        谷歌浏览器v.180926
                    </el-form-item>
                    <el-form-item label="证据名称" style="margin-bottom: 20px;">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="证据备注" style="margin-bottom: 20px;">
                        <el-input type="textarea" v-model="form.note"></el-input>
                    </el-form-item>
                    <el-form-item label="" style="margin-bottom: 20px;">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="我同意 《知识工作者维权平台用户须知》" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="primary" @click.prevent="qzHandle">点击生成证据</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
    <div class="qzdetail-step">
        <el-steps :active="stepActive" align-center>
            <el-step title="中证司法鉴定中心" :icon="icon1" :description="desc1"></el-step>
            <el-step title="中证司法鉴定中心" :icon="icon2" :description="desc2"></el-step>
            <el-step title="公证云" :icon="icon3" :description="desc3"></el-step>
        </el-steps>
        <p class="qzdetail-step-warning">注：若抓取失败或不完整时，请重新抓取。</p>
    </div>
</div>
</template>
<script>

export default {
  mounted () {
    this.$store.commit('changeTab', {tab: 'qz'});
  },
  data () {
    return {
      stepActive: 0,
      desc1: '',
      desc2: '',
      desc3: '',
      icon1: '',
      icon2: '',
      icon3: '',
      form: {
        name: '',
        note: '',
        type: 0
      }
    }
  },
  methods: {
    qzHandle () {
      let vm = this;
      setTimeout(function () {
        vm.stepActive = 1;
        vm.desc1 = '上链成功！';
        vm.icon1 = 'el-icon-upload';
      }, 1000);
      setTimeout(function () {
        vm.stepActive = 2;
        vm.desc2 = '上链成功！';
        vm.icon2 = 'el-icon-upload';
      }, 2000);
      setTimeout(function () {
        vm.stepActive = 3;
        vm.desc3 = '上链成功！';
        vm.icon3 = 'el-icon-upload';
      }, 3000);
      setTimeout(function () {
        vm.$router.push('/baoquan/user/quzheng')
      },3500);
    }
  }
}
</script>