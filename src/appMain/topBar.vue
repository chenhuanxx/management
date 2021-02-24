<template>
  <div class="topBar" :class="{'hide': hideNav}">
    <div class="topBar-left">
      <img  src="../assets/darkGreenIcon.png" width="100%"/>
      <span><marquee behavior="scroll">{{$userInfo.companyName}}</marquee></span>
    </div>
    <div class="topBar-right">
      <video id="big-screen-audio">
        <source src="../../static/big-screen-audio.mp3">
      </video>
      <span class="fullScreen" @click="toBigScreen">综合展示</span>
      <div class="user-menu">
        <label class="userIcon"></label>
        <span>{{$userInfo.userName}}</span>
        <i class="el-icon-caret-bottom"></i>
        <i class="el-icon-caret-top"></i>
        <div class="user-menu-list">
          <router-link to="/personal-setting">
            <i class="user-menu-list-icon user-menu-list-personal"></i>个人中心
          </router-link>
          <a class="caozuo" @click="loginOut">
            <i class="user-menu-list-icon user-menu-list-logout"></i>退出登录
          </a>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="noticeDialog" class="dialog_box noticeDialog" :close-on-click-modal="false">
      <div slot="title" class="dialog-header">
        <label class="title-desc"><span class="title-icon"></span>系统通知</label>
      </div>
      <div class="dialog-content">
        ccccc
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuIndex: -1,
      noticeList: [],
      unReadNum: 0,
      noticeDialog: false,
      noticeObj: {}
    }
  },
  props: {
    hideNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeNavState (index) {
      this.menuIndex = index
    },
    loginOut () {
      localStorage.removeItem('token')
      window.location.href = window.location.origin + '/login.html'
    },
    showNotice () {
      this.noticeDialog = true
    },
    getNoticeNum () {
    },
    showNoticeDetail (obj) {
    },
    toBigScreen () {
      const el = document.documentElement
      const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen
      if (typeof rfs !== 'undefined' && rfs) {
        rfs.call(el)
      }
      this.$router.push('/big-screen')
      document.querySelector('#big-screen-audio').play()
      document.querySelector('#big-screen-audio').muted = true
      document.querySelector('#big-screen-audio').pause()
    }
  }
}
</script>

<style lang="less" scoped="">
  #big-screen-audio {
    position: absolute;
    left: -9999px;
  }
  .caozuo {
    cursor: pointer;
  }
  .topBar {
    box-sizing: border-box;
    padding: 0 40px;
    height: 60px;/*px*/
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.10);/*px*/
    color: #334455;
    .topBar-left {
      display: flex;
      align-items: center;
      font-size: 20px;/*px*/
      font-weight: bolder;
      img {
        width: 40px;/*px*/
        height: 40px;/*px*/
        border-radius: 50%;/*px*/
        margin-right: 15px;/*px*/
      }
    }
    .topBar-right {
      display: flex;
      align-items: center;
      .fullScreen {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 20px 0 0;
        &:before {
           content: '';
           display: inline-block;
           width: 22px;
           height:22px;
           background: url('../assets/fullScreenIcon.png') center top no-repeat;
           background-size: 22px 22px;
           margin: 0 10px 0 0;
         }
      }
      .notice-icon {
        width: 24px;/*px*/
        height: 24px;/*px*/
        background: url('../assets/icon-top-message@3x.png') no-repeat;
        background-size: 100% 100%;
        position: relative;
        cursor: pointer;
        vertical-align: middle;
        .noticeNum {
          position: absolute;
          min-width: 12px;/*px*/
          height: 12px;/*px*/
          color: #fff;
          background: #ef5555;
          border-radius: 50px;/*px*/
          display: inline-block;
          font-size: 10px;/*px*/
          line-height: 12px;/*px*/
          text-align: center;
          padding: 0 2px;/*px*/
          top: -8px;/*px*/
          right: -8px;/*px*/
        }
      }
      .user-menu {
        position: relative;
        margin-left: 30px;/*px*/
        line-height: 60px;/*px*/
        i.el-icon-caret-bottom,i.el-icon-caret-top  {
          margin: 0 20px;/*px*/
        }
        i.el-icon-caret-top {
          display: none;
        }
      }
      .user-menu:hover {
        i.el-icon-caret-bottom {
          display: none;
        }
        i.el-icon-caret-top {
          display: inline-block;
        }
        .user-menu-list {
          display: block;
        }
      }
      .user-menu-list {
        display: none;
        position: absolute;
        left: 0;
        top: 52px;
        background: #fff;
        box-shadow: 0 0 5px 2px rgba(0,0,0,0.10);
        z-index: 9999;
        width: 100%;
        a {
          display: flex;
          align-items: center;
          height: 50px;
          color: #334455;
          .user-menu-list-icon {
            margin: 0 12px 0 20px;
            display: inline-block;
            width: 18px;
            height: 18px;
            background-repeat: no-repeat;
            background-size: 100% 100%
          }
          .user-menu-list-personal {
            background-image: url('../assets/user-menu-list-personal.png')
          }
          .user-menu-list-password {
            background-image: url('../assets/user-menu-list-password.png')
          }
          .user-menu-list-logout {
            background-image: url('../assets/user-menu-list-logout.png')
          }
        }
        a:hover {
          background: #F1F4F7;
        }
      }
    }
  }
  .topBar.hide {
    display: none;
  }
</style>
<style scoped>
  .userIcon {
    width: 24px;
    height: 24px;
    background-size: 100% 100%;
    margin-right: 10px;
    display: inline-block;
    background: url('../assets/userIcon.png') center top no-repeat;
    background-size: 24px 24px;
    vertical-align: middle;
    margin: -2px 5px 0 0;
}
  .left-content span {
    font-size: 16px;
    font-weight: 600;
  }
  .notice-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('../assets/icon-top-message@3x.png') center center no-repeat;
    background-size: 20px 20px;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
    margin: -2px 5px 0 5px;
  }
  
  .big-screen-icon {
    display: inline-block;
    width: 18px;/*px*/
    height: 18px;/*px*/
    background: url('../assets/icon-big-screen.svg') center top no-repeat;
    background-size: 100% 100%;
    /* margin: 21px 10px 0 12px; */
    margin-left: 5px;/*px*/
    margin-right: 5px;/*px*/
    cursor: pointer;
    vertical-align: middle;
    margin-top: -2px;/*px*/
  }
 .wrap-bigScreen {
    cursor: pointer;
    display: inline-block;
    padding: 0 15px;/*px*/
    height: 34px;/*px*/
    line-height: 34px;/*px*/
    margin-top: 13px;/*px*/
    background: #3af;/*px*/
    color: #fff;
    border-radius: 20px;/*px*/
    font-size: 12px;/*px*/
    margin-right: 10px;/*px*/
    box-shadow: 1px 2px 6px 0 rgba(104,192,254,1);/*px*/

  }

</style>
<style>
  .noticeDialog .el-dialog__headerbtn {
    position: absolute;
    right: 20px;/*px*/
    top: 25px;/*px*/
  }
  .noticeDialog .el-dialog__header {
    padding: 10px 20px;/*px*/
    background: #f7f7f7;
    border-bottom: 1px solid #ddd;/*px*/
  }
  .noticeDialog .el-dialog__header .title-desc {
    font-size: 20px;/*px*/
    color: #333;
  }
  .noticeDialog .dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 38px;/*px*/
  }
  .noticeDialog .dialog-content {
    min-height: 300px;/*px*/
    font-size: 16px;/*px*/
    color: #333;
  }
</style>
