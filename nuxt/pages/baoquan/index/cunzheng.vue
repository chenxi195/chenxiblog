<template>
    <div>
        <div class="qz-banner">
            <div class="item-text item-text-1">
                <h1>数据存证</h1>
                <h3>通过对网页内容实时固化保全，当发生知识产权侵权、网站镜像仿冒、负面谣言传播、侮辱、诽谤、隐私窃取等场景时，网页取证可以帮您瞬间固化证据，并可在线司法出证，轻松解决取证、出证难题，保障用户权益</h3>
            </div>
        </div>
        <div class="cz-upload">
            <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-success="handleUpload"
                    :on-error="handleUpload"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
        <div class="cz-steps-box">
            <el-steps :active="stepActive" align-center>
                <el-step title="中证司法鉴定中心" :icon="icon1" :description="desc1"></el-step>
                <el-step title="深圳国际仲裁委" :icon="icon2" :description="desc2"></el-step>
                <el-step title="公证云" :icon="icon3" :description="desc3"></el-step>
            </el-steps>
        </div>
        <div class="bq-home-1" style="margin-top: 100px;">
            <div class="bq-home-1-title">
                <h3>产品特点</h3>
            </div>
            <el-row>
                <el-col :span="6">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>专业取证</h4>
                        <p class="bq-home-1-content">独有网页取证技术，攻克抓取网页丢图或者抓取不完整难题。操作符合国家规范、标准</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>安全存证</h4>
                        <p class="bq-home-1-content">固化网页内容、IP、备案等信息，数据加密安全云存，确保完整、不被篡改。</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>维权出证</h4>
                        <p class="bq-home-1-content">完成取证后，无缝对接司法机构，司法报告确保法律效力，更可邮寄至指定地址。</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="bq-home-1-item">
                        <div class="icon-default">
                            <div class="ax-default">
                                <img src="/img/bq/icon-bg.png"/>
                            </div>
                            <div class="icon-img">
                                <img src="/img/bq/icon.png"/>
                            </div>
                        </div>
                        <h4>便捷使用</h4>
                        <p class="bq-home-1-content">支持浏览器插件，操作更加便捷。同时支持PC端、移动端或者直接登录平台端使用。</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('changeTab', {tab: 'cunzheng'});
  },
  data () {
    return {
      stepActive : 0,
      desc1: '',
      desc2: '',
      desc3: '',
      icon1: '',
      icon2: '',
      icon3: '',
    }
  },
  methods: {
    handleUpload () {
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
        vm.$router.push('/baoquan/user')
      },3500);
    }
  }
}
</script>
<style lang="less" scoped>
.cz-steps-box {
    width: 80%;
    margin: 50px auto;
}
.cz-upload {
    width: 360px;
    text-align: center;
    margin: 50px auto;
}
</style>