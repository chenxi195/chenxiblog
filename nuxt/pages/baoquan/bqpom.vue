<template>
    <div>
        <div class="bqpom-box">
            <div class="bqpom-title">
                电子数据保全证书
            </div>
            <div class="bqpom-title2">Electronic Data Storage Certificate</div>
            <div class="bqpom-content">
                <div style="margin-top: 50px;">
                    <span class="bqpom-content-left">保全编号: </span>
                    <span class="bqpom-content-right">234234456456</span>
                </div>
                <div>
                    <span class="bqpom-content-left">存证名称: </span>
                    <span class="bqpom-content-right">xxx图片</span>
                </div>
                <div>
                    <span class="bqpom-content-left">存证类型: </span>
                    <span class="bqpom-content-right">摄影图片</span>
                </div>
                <div>
                    <span class="bqpom-content-left">证书持有人: </span>
                    <span class="bqpom-content-right">Cale</span>
                </div>
                <div>
                    <span class="bqpom-content-left">证件类型: </span>
                    <span class="bqpom-content-right">个人身份证</span>
                </div>
                <div>
                    <span class="bqpom-content-left">证件号码: </span>
                    <span class="bqpom-content-right">522101111104152822</span>
                </div>
                <div>
                    <span class="bqpom-content-left">统一社会信用代码: </span>
                    <span class="bqpom-content-right">123002</span>
                </div>
                <div>
                    <span class="bqpom-content-left">保全来源: </span>
                    <span class="bqpom-content-right">知识工作者维权平台</span>
                </div>

                <div>
                    <span class="bqpom-content-left">保全时间: </span>
                    <span class="bqpom-content-right">2018年10月10日  09:00:12  768</span>
                </div>
                <div>
                    <span class="bqpom-content-left">有效期至: </span>
                    <span class="bqpom-content-right">2023年10月10日</span>
                </div>
                <div>
                    <span class="bqpom-content-left">数字指纹: </span>
                    <span class="bqpom-content-right">fsdfsdfsd86sd7fs877sd8f7s8s7d8f7s8fwwe87rw8e7r8s7df87s8df78sdf8s7df87s8df7kjkki23232ij3h4j3hkdud9ske</span>
                </div>
                <div>
                    <span class="bqpom-content-left">存证摘要: </span>
                    <span class="bqpom-content-right">nsidknodjouo13h3oi2h10nsidknodjouo1</span>
                </div>
                <div class="bqpom-content-ps">
                    <span class="bqpom-content-left">说明: </span>
                </div>
                <div class="bqpom-content-ps">
                    <span class="bqpom-content-left">1.保全人已经认可存证摘要对应的原文。</span>
                </div>
                <div class="bqpom-content-ps">
                    <span class="bqpom-content-left">2.本证书所列的电子数据，均使用了八戒保全提供的区块链技术进行保全，并已上传八戒保全存证区块链（联盟链），不可篡改 </span>
                </div>
                <div class="bqpom-content-ps">
                    <span class="bqpom-content-left">3.若需要验证电子数据的保全时间及内容的完整性，可凭此证书在baoquan.zbj.com进行验证。</span>
                </div>
            </div>
        </div>
        <div style="text-align: center;"><el-button @click="toCzapply()">申请出证</el-button></div>
    </div>

</template>
<script>
export default {
  methods: {
    toCzapply () {
      this.$router.push('/baoquan/czchoose')
    }
  }
}
</script>
<style lang="less" scoped>
.bqpom-box {
    width: 576px;
    height: 782px;
    margin: 50px auto 20px;
    border: 1px rgba(121, 121, 121, 1) solid;
    .bqpom-title {
        text-align: center;
        font-size: 32px;
        margin-top: 80px;
    }
    .bqpom-title2 {
        text-align: center;
        font-size: 20px;
    }
    .bqpom-content {
        span {display: inline-block;font-size: 14px;}
        .bqpom-content-left {width: 131px;margin-left: 120px;}
        .bqpom-content-right {width: 280px;word-break: break-all;}
        .bqpom-content-ps {
            .bqpom-content-left {width: 411px;margin-top: 10px;}
        }
    }
}
</style>