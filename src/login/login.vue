<template>
  <div id="login">
    <div class="login-con">
      <img class="hospital-logo" src="../assets/login/hospital-logo.png" />

      <el-form ref="login" :model="loginParam" :rules="loginRules" style="position: relative;">
        <el-form-item label="" prop="username">
          <el-input v-model="loginParam.username">
            <img class="input-icon" src="../assets/login/icon_user@2x.png" slot="prefix"/>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input v-model="loginParam.password" type="password" @keyup.native.13="login">
            <img class="input-icon" src="../assets/login/icon_pwd@2x.png" slot="prefix"/>
          </el-input>
        </el-form-item>
        <el-form-item label="" v-if="false" v-show="hospitalList.length > 0">
          <el-select  style="width: 100%;" v-model="loginParam.hospitalName">
            <el-option v-for="(item, index) in hospitalList" :label="item.hospitalName" :value="item.useName" :key="index"></el-option>
            <img class="input-icon" src="../assets/login/icon_hospital@2x.png" slot="prefix"/>
          </el-select>
        </el-form-item>
        <el-button type="primary" round class="login-btn" :loading="loading" @click="loginMain">登 录</el-button>
      </el-form>
    </div>
    <img class="login-warp" src="../assets/login/login_bg.jpg" />
    <p class="login-bottom">
      Copyright © 2017-2021 阿欢的管理后台demo
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hospitalList: [
        {
          hospitalName: '武汉',
          useName: '武汉'
        }
      ],
      showSlide: false,
      slide: {},
      drag: {
        diffX: 0,
        dragMax: 0
      },
      loading: false,
      loginParam: {
        hospitalName: '',
        username: '',
        password: '',
        loginType: 'hospital'
      },
      loginRules: {
        username: [
          {required: true, message: '请输入用户名'}
        ],
        password: [
          {required: true, message: '请输入密码'}
        ]
      }
    }
  },
  methods: {
    loginMain () {
      if (this.loginParam.username !== 'admin') {
        this.$message.warning('账号不存在')
        return false
      }
      if (this.loginParam.password !== '123456') {
        this.$message.warning('密码不正确')
        return false
      }
      this.loading = true
      this.$message.success('登录成功')
      setTimeout(() => {
        localStorage.setItem('token', 123456)
        window.location.href = window.location.origin + '/#/'
        this.loading = false
      }, 1000)
    }
  },
  mounted () {
  }
}
</script>
<style>
  .input-icon {
    width: 16px;/*px*/
    height: 20px;/*px*/
    margin: 10px 2px;/*px*/
  }
</style>
<style lang="less">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/login/back-login.jpg') no-repeat center center;
    background: #131212cf;
  }
  #login {
    position: relative;
    width: 1200px; /*px*/
    height: 600px; /*px*/
    display: flex;
    flex-direction: row;
    box-shadow: 0 8px 15px 5px rgba(222, 228, 233, 0.5); /*px*/
    border-radius: 20px; /*px*/
    overflow: hidden;
    background: #fff;
    .login-bottom {
      position: fixed;
      bottom: 40px;/*px*/
      left: 50%;
      color: #fff;
      transform: translateX(-50%);
    }
    .login-warp {
      width: 780px;/*px*/
      height: 600px;/*px*/
    }
    .login-con {
      flex: 1;
      padding: 30px 80px;/*px*/
      display: flex;
      flex-direction: column;
      justify-content: center;
      .hospital-logo {
        width: 260px;/*px*/
        margin-bottom: 30px;/*px*/
      }
      .login-btn {
        width: 100%;
        height: 50px;/*px*/
        border-radius: 25px;/*px*/
        margin-top: 10px;/*px*/
        font-size: 16px;/*px*/
      }
    }
    @media screen and (min-width: 1200px) and (max-width: 1500px) {
      width: 1000px; /*px*/
      height: 500px; /*px*/
      .login-warp {
        width: 600px;/*px*/
        height: 500px;/*px*/
      }
    }
    @media screen and (min-width: 0px) and (max-width: 1200px) {
      width: 420px; /*px*/
      height: 500px; /*px*/
      .login-warp {
        width: 0;/*px*/
        height: 0;/*px*/
      }
    }
  }
  .slide {
      user-select: none;
      z-index: 9;
      font-size: 14px;/*px*/
      position: absolute;
      width: 286px;/*px*/
      height: 100%;
      min-height: 250px;/*px*/
      left: 0;
      bottom: 0;
      background: #fff;
      box-shadow: 0 0 2px 2px #eee;/*px*/
      border: 1px solid #eee;/*px*/
      padding: 35px 12px;/*px*/
  }

  .slide .slide-close {
      cursor: pointer;
      position: absolute;
      right: 10px;/*px*/
      top: 10px;/*px*/
      display: block;
      width: 12px;/*px*/
      height: 12px;/*px*/
  }

  .slide-refresh {
      height: 25px;/*px*/
      margin-right: 15px;/*px*/
  }

  .slide-refresh .slide-refresh-left {
      float: left;
  }

  .slide-refresh .slide-refresh-right {
      float: right;
      padding-right: 0;
      cursor: pointer;
      color: #06c;
      position: relative;
  }

  .slide-refresh .slide-refresh-right img {
      height: 20px;/*px*/
      position: absolute;
      left: -24px;/*px*/
      top: 0;
  }

  .slide-img {
      height: 100px;/*px*/
      position: relative;
  }

  .slide-img-big {
      width: 100%;
      height: 100%;
  }

  .slide-img-small {
      width: 40px;/*px*/
      height: 40px;/*px*/
      position: absolute;
      left: 0;
      top: 0;
  }

  .slide-bottom {
      margin-top: 10px;/*px*/
      height: 40px;/*px*/
      line-height: 48px;/*px*/
      position: relative;
      border-radius: 20px;/*px*/
      background: #f5faff;
      text-align: center;
      color: #10b2fa;
  }

  .slide-drag-bg {
      height: 40px;/*px*/
      width: 100%;
      left: 0;
      top: 0;
      overflow: hidden;
      border-radius: 20px;/*px*/
      position: absolute;
  }

  .slide-drag-con {
      width: 0;
      height: 100%;
      background: #30b2fb;
  }

  .slide-drag-con.slide-error {
      background: #e4393c;
  }
  .hide {
      display: none;
  }
  .slide-drag-btn {
      margin-top: -6px;/*px*/
      margin-left: -8px;/*px*/
      width: 55px;/*px*/
      height: 55px;/*px*/
      border-radius: 40px;/*px*/
      cursor: pointer;
      touch-action: none;
      position: absolute;
      z-index: 10;
      left: 0;
      top: 0;
      background: url("https://ivs.jd.com/slide/i/jd-slide-btn2.png") no-repeat center;
  }
</style>
