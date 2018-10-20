<template>
    <div>
        <div class="qz-banner">
            <div class="item-text item-text-1">
                <h1>网页取证</h1>
                <h3>
                    通过对网页内容实时固化保全，当发生知识产权侵权、网站镜像仿冒、负面谣言传播、侮辱、诽谤、隐私窃取等场景时，网页取证可以帮您瞬间固化证据，并可在线司法出证，轻松解决取证、出证难题，保障用户权益
                </h3>
            </div>
            <div class="qz-box">
                <div class="qz-input-box">
                    <div class="qz-input-left">
                        <input type="text" v-model="url" @keyup.enter="qzClick" placeholder="请输入您想要取证的网址， 例如：http://www.quanjing.com/"/>
                    </div>
                    <div class="qz-input-right">
                        <a href="javascript:;" @click.prevent="qzClick" class="qz-link">{{qzText}}</a>
                    </div>
                </div>
            </div>
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
        <div class="bq-home-1 qz-content" style="background-color: #f2f2f2;">
            <div class="bq-home-1-title">
                <h3>应用场景</h3>
            </div>
            <el-row style="width: 90%;margin: 0 auto;">
                <el-col :span="6">
                    <el-card style="width: 90%;margin: 0 auto;">
                        <div class="bq-card-img">
                            <img src="/img/bq/icon.png" class="image">
                        </div>
                        <div class="bq-card-content">
                            <h4>图片盗用</h4>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card style="width: 90%;margin: 0 auto;">
                        <div class="bq-card-img">
                            <img src="/img/bq/icon.png" class="image">
                        </div>
                        <div class="bq-card-content">
                            <h4>文章抄袭</h4>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card style="width: 90%;margin: 0 auto;">
                        <div class="bq-card-img">
                            <img src="/img/bq/icon.png" class="image">
                        </div>
                        <div class="bq-card-content">
                            <h4>网站仿冒</h4>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card style="width: 90%;margin: 0 auto;">
                        <div class="bq-card-img">
                            <img src="/img/bq/icon.png" class="image">
                        </div>
                        <div class="bq-card-content">
                            <h4>违规信息抓取</h4>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
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
        qzText: '立即取证',
        url: ''
    }
  },
  methods: {
    qzClick () {
      if(this.url){
        let vm = this;
        vm.qzText = '取证中...';
        setTimeout(function () {
          vm.$router.push('/baoquan/qzdetail?id=1');
        }, 2000);
      }else{
        this.$message.error('请输入网站链接');
      }

    }
  }
}
</script>