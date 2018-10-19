<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bq-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/baoquan' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/baoquan/user' }">个人中心</el-breadcrumb-item>
            <el-breadcrumb-item :to="{path: '/baoquan/user/quzheng'}">我的取证</el-breadcrumb-item>
            <el-breadcrumb-item>存证信息</el-breadcrumb-item>
        </el-breadcrumb>

        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="联盟链信息" name="1">
                <el-table :data="tableData" stripe border class="bq-table">
                    <el-table-column prop="desc" label="存证摘要"></el-table-column>
                    <el-table-column prop="time" label="上链时间"></el-table-column>
                    <el-table-column prop="address" label="链上地址"></el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="用户信息" name="2">
                <el-table :data="userData" stripe border class="bq-table">
                    <el-table-column prop="id" label="用户ID"></el-table-column>
                    <el-table-column prop="name" label="用户名称"></el-table-column>
                    <el-table-column prop="message" label="用户信息"></el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="实名信息" name="3">
                <el-table :data="realData" stripe border class="bq-table">
                    <el-table-column prop="id" label="用户ID"></el-table-column>
                    <el-table-column label="实名信息">
                        <template slot-scope="scope">
                            <p>在 {{scope.row.time}} 以 "{{scope.row.style}}" 进行了认证。</p>
                            <p>认证信息如下：</p>
                            <p>姓名：{{scope.row.name}}</p>
                            <p>身份证号码：{{scope.row.realNo}}</p>
                        </template>
                    </el-table-column>
                </el-table>
            </el-collapse-item>
            <el-collapse-item title="用户行为信息" name="4">
                (一) 用户名为“｛用户名-18580691630｝”的用户注册数据、认证数据；<br/>
                (二) 用户名为“｛用户名-18580691630｝”的用户于｛二〇一八年十月二十日｝上传了名为“｛摄影作品｝”的作品；<br/>
                (三) 用户名为“｛用户名-18580691630｝”的用户于｛二〇一八年十月二十一日｝截取了名为“｛存证截图｝”的图片；<br/>
                (四) 用户名为“｛用户名-18580691630｝”的用户于｛二〇一八年十月二十一日｝对名为“｛存证截图｝”的图片进行了作品对比；<br/>
                (五) 用户名为“｛用户名-18580691630｝”的用户于｛二〇一八年十月二十一日｝对名为“｛存证截图｝”的图片进行了出证；<br/>
            </el-collapse-item>
            <el-collapse-item title="内容附件" name="5">
                <el-button type="text" disabled>IMG009342.png</el-button>
            </el-collapse-item>
            <el-collapse-item title="其他内容" name="6">
                <div>无</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
  export default {
    mounted () {
      this.$store.commit('changeTab', {tab: 'user'});
      this.$store.commit('changeSubTab', {subTab: 'quzheng'});
    },
    data () {
      return {
        activeNames: ['1', '2', '3', '4', '5', '6'],
        tableData: [{desc: '', time: '2018-10-10 09:36:56',address: ''}],
        userData: [{
          id: 5675675,
          name: 'Cale',
          message: '用户名为“18580691630”在“2018-10-21 16:01:23”通过IP地址为“218.242.31.94”的电脑登录了知识工作者维权平台个人账户。'
        },{
          id: 5675675,
          name: 'Cale',
          message: '用户名为“18580691630”在“2018-10-20 16:01:23”通过IP地址为“218.242.31.94”的电脑以“手机注册”的方式注册了知识工作者维权平台个人账户。'
        }],
        realData: [{
          id: 5675675,
          time: '2018-10-20 16:01:24',
          style: '身份证认证',
          name: '张卡尔',
          realNo: '522101111104152822'
        }]
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>