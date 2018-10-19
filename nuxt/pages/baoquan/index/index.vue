<template>
<div>
    <div class="bq-banner">
        <el-carousel :interval="8000" arrow="always" class="bq-carousel" height="400px">
            <el-carousel-item>
                <div class="item-text item-text-1">
                    <h1>知识工作者维权平台</h1>
                    <h3>
                        知识工作者维权平台是基于区块链技术为用户提供电子数据存证、取证、司法出证等服务的一站式维权平台。<br/>
                        核心价值在于让互联网服务快速无缝对接司法服务（公证、司法鉴定、在线仲裁等）
                    </h3>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-text item-text-2">
                    <h1>网页取证</h1>
                    <h3>在线截取文件证据，实时对比</h3>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-text item-text-3">
                    <h1>数据存证</h1>
                    <h3>自己的作品上传作品库，版权有保障</h3>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-text item-text-4">
                    <h1>出证服务</h1>
                    <h3>快速对接鉴定中心</h3>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="bq-home-1">
        <div class="bq-home-1-title">
            <h3>一站式维权服务</h3>
        </div>
        <el-row>
            <el-col :span="8">
                <div class="bq-home-1-item">
                    <div class="icon-default">
                        <div class="ax-default">
                            <img src="/img/bq/icon-bg.png"/>
                        </div>
                        <div class="icon-img">
                            <img src="/img/bq/icon.png"/>
                        </div>
                    </div>
                    <h4>数据存证</h4>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="bq-home-1-item">
                    <div class="icon-default">
                        <div class="ax-default">
                            <img src="/img/bq/icon-bg.png"/>
                        </div>
                        <div class="icon-img">
                            <img src="/img/bq/icon.png"/>
                        </div>
                    </div>
                    <h4>网页取证</h4>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="bq-home-1-item">
                    <div class="icon-default">
                        <div class="ax-default">
                            <img src="/img/bq/icon-bg.png"/>
                        </div>
                        <div class="icon-img">
                            <img src="/img/bq/icon.png"/>
                        </div>
                    </div>
                    <h4>出证服务</h4>
                </div>
            </el-col>
        </el-row>
    </div>
    <div class="bq-home-1" style="background-color: #f2f2f2;">
        <div class="bq-home-1-title">
            <h3>平台优势</h3>
        </div>
        <el-row style="width: 90%;margin: 0 auto;">
            <el-col :span="4">
                <el-card style="width: 90%;margin: 0 auto;">
                    <div class="bq-card-img">
                        <img src="/img/bq/icon.png" class="image">
                    </div>
                    <div class="bq-card-content">
                        <h4>快速接入</h4>
                        <div>
                            以接口方式为各类业务系统提供数据保全服务，不影响原有业务系统流程
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card style="width: 90%;margin: 0 auto;">
                    <div class="bq-card-img">
                        <img src="/img/bq/icon.png" class="image">
                    </div>
                    <div class="bq-card-content">
                        <h4>方便管理</h4>
                        <div>
                            满足不同渠道、不同业务，实现与业务系统快速集成与管理
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card style="width: 90%;margin: 0 auto;">
                    <div class="bq-card-img">
                        <img src="/img/bq/icon.png" class="image">
                    </div>
                    <div class="bq-card-content">
                        <h4>数据蜕变</h4>
                        <div>
                            让虚拟的互联网金融交易数据具备真实的、不可篡改的本质，最终实现电子数据向电子证据的转化
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card style="width: 90%;margin: 0 auto;">
                    <div class="bq-card-img">
                        <img src="/img/bq/icon.png" class="image">
                    </div>
                    <div class="bq-card-content">
                        <h4>法制化进程</h4>
                        <div>
                            利用第三方保全的办法记录亊实真相，通过司法途径将交易业务逐步向法制化迈进
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card style="width: 90%;margin: 0 auto;">
                    <div class="bq-card-img">
                        <img src="/img/bq/icon.png" class="image">
                    </div>
                    <div class="bq-card-content">
                        <h4>司法服务</h4>
                        <div>
                            减少银行在证据举证过程中的繁重工作，加强电子数据在案件审理中的司法力度
                        </div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="4">
                <el-card style="width: 90%;margin: 0 auto;">
                    <div class="bq-card-img">
                        <img src="/img/bq/icon.png" class="image">
                    </div>
                    <div class="bq-card-content">
                        <h4>司法保障</h4>
                        <div>
                            满足电子数据的法律效力，消除交易业务的法律风险，加强银行业务的司法保障
                        </div>
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
    this.$store.commit('changeTab', {tab: 'home'});
  }
}
</script>
