<template>
  <div class="personal-setting">
    <el-breadcrumb separator=">" class="wrap-breadcrumb" >
      <el-breadcrumb-item v-for="(item, index) in breadCrumbList" :to="{ path: item.link}" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content-card">
      <div class="info-title">
        <span class="headImg"></span>
        <div class="info">
          <div class="name"><span style="font-size: 30px; font-weight: 400;">{{$userInfo.userName}}</span></div>
        </div>
      </div>
      <div class="info-content">
        <ul class="person-info" >
          <li class="item"><label>公司</label><span>{{$userInfo.companyName}}</span></li>
          <li class="item"><label>性别</label><span>{{$userInfo.sex}}</span></li>
          <li class="item"><label>手机号码</label><span>{{$userInfo.mobile}}</span></li>
          <li class="item"><label>邮箱</label><span>{{$userInfo.email}}</span></li>
          <li class="item"><label>用户账号</label><span>{{$userInfo.use}}</span></li>
        </ul>
        <div class="sign-info">
          <div>电子签名</div>
          <div class="sign-box">
            <img src="../../assets/login/hospital-logo.png" alt="">
          </div>
        </div>
      </div>
      <div style="margin-top: 10px;margin-left: 25%" >
        <el-button type="primary">编辑</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadCrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '个人设置',
          link: ''
        }
      ],
      showEdit: false
    }
  },
  methods: {},
  beforeMount () {
    this.$emit('navChange', false, 0)
  }
}
</script>
<style scoped lang="less">
  @media screen and (min-width: 1300px) and (max-width: 1500px) {
    .editButton {
      margin-top: 10px;margin-left: 17%
    }
  }
  @media screen and (min-width: 1500px) {
    .editButton {
      margin-top: 10px;margin-left: 20%
    }
  }
  .personal-setting {
    font-size: 14px;/*px*/
    .el-radio {
      line-height: unset!important;
    }
    .el-radio+.el-radio {
      margin-left: -30px;/*px*/
    }
  }
  .content-card {
    display: block;
    background: #fff;
    margin: 30px 0;
    padding: 30px 50px 60px 50px; /*px*/
  }
  .info-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .headImg {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url('../../assets/userIcon_lg.png') center top no-repeat;
    background-size: 40px 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .info-title .info {
    display: block;
    width: 100%;
    margin-left: 20px;
  }
  .info-title .info .name {
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 8px;
    align-items: flex-end;
    font-weight:600;
  }
  .info-title .info label {
    display: block;
    margin-top: 5px;
    font-weight: 600;
  }
  .info-content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  .info-content .person-info {
    display: inline-block;
    width: 450px;
  }
  .info-content .person-info .item {
    display: flex;
    width: 100%;
    height: 34px;
    line-height: 34px;
    margin-top: 10px;
  }
  .info-content .person-info .item label {
    display: inline-block;
    width: 100px;
  }
  .info-content .person-info .item span {
    display: block;
    width: 80%;
    border-bottom: 1px solid #ddd;
    text-indent: 10px;
  }
  .sign-info {
    margin-top: 20px;
  }
  .sign-info label {
    margin-right: 20px;
  }
  .sign-box {
    text-align: center;
    margin-top: 20px;
    width: 400px;
    height: 200px;
    padding-top: 50px;
    border: 1px solid rgb(43, 190, 183);
  }
</style>
