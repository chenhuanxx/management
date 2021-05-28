<template>
  <div class="left-menu" :class="{'left-menu-close': isCollapse, 'hide': hideNav}">
    <el-scrollbar style="height:100%" :native="false" wrap-style="overflow-x: hidden;">
      <i class="left-menu-change" @click="collapseMenu"></i>
      <el-menu
        background-color="#17212B"
        text-color="#BFCBD9"
        active-text-color="#3af"
        :unique-opened="true"
        default-active="0" ref="leftMenu" class="el-menu-vertical-demo" @select="menuChange" :collapse="isCollapse" :default-openeds="openeds">
        <el-menu-item index="0">
          <i class="menu-icon menu2"></i>
          <span slot="title">首页</span>
        </el-menu-item> 
        
        <el-menu-item index="1">
          <i class="menu-icon menu9"></i>
          <span slot="title">类别管理</span>
        </el-menu-item>
        
        <el-submenu index="2" >
          <template slot="title">
            <i class="menu-icon menu4"></i>
            <span slot="title">系统设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" class="subMenuItem ml15">权限管理</el-menu-item>
            <el-menu-item index="2-2" class="subMenuItem ml15">角色管理</el-menu-item>
            <el-menu-item index="2-3" class="subMenuItem ml15">用户管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        
        <el-menu-item index="3">
          <i class="menu-icon menu3"></i>
          <span slot="title">文档审核</span>
        </el-menu-item>
        
        <el-menu-item index="4">
          <i class="menu-icon menu4"></i>
          <span slot="title">交易记录</span>
        </el-menu-item>
    
        <el-menu-item index="7">
          <i class="menu-icon menu7"></i>
          <span slot="title">ol-map</span>
        </el-menu-item>
        
        <el-menu-item index="9">
          <i class="menu-icon menu9"></i>
          <span slot="title">map</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="menu-icon menu6"></i>
          <span slot="title">数据统计</span>
        </el-menu-item>

        <el-menu-item index="8">
          <i class="menu-icon menu6"></i>
          <span slot="title">新闻中心</span>
        </el-menu-item>
      </el-menu> 
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openeds: [],
      prevIndex: '0', // 记录上一个激活的菜单
      isCollapse: false // 是否折叠菜单
    }
  },
  components: {
  },
  props: {
    hideNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    menuChange (index, indexPath) {
      if (index < 0) {
        this.$refs.leftMenu.activeIndex = this.prevIndex
      } else {
        this.prevIndex = index
        this.toRoute()
      }
      if (index === '-1') {
        this.toBigScreen()
      }
    },
    findPermission (arr) {
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (this.$userInfo.permissions[arr[i]]) {
          return arr[i]
        }
      }
      return ''
    },
    toRoute () {
      let toPath = ''
      switch (this.prevIndex) {
        case '0':
          toPath = '/'
          break
        case '1':
          toPath = '/category-management'
          break
         case '2-1':
          toPath = '/authority-management'
          break
        case '2-2':
          toPath = '/role-management'
          break
        case '2-3':
          toPath = '/use-management'
          break
        case '3':
          toPath = '/document-review'
          break
        case '4':
          toPath = '/transaction-record'
          break
        case '5':
          toPath = '/statistics'
          break
        case '6':
          toPath = '/role-management'
          break
        case '7':
          toPath = '/ol-map'
          break
        
        case '9':
          toPath = '/map'
          break
        case '8':
          toPath = '/news-list'
          break
      }
      if (toPath) {
        this.$router.push(toPath)
      } else {
        this.$alert('菜单访问有误！', '警告', {
          type: 'warning'
        })
      }
    },
    changeNavState (index, subIndex) {
      this.openeds = [String(index)]
      let num = ''
      if (subIndex) {
        num = `${index}-${subIndex}`
      } else {
        num = index
      }
      this.prevIndex = `${num}`
      this.$refs.leftMenu.activeIndex = this.prevIndex
    },
    collapseMenu () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.$leftNav = 64
        this.$store.commit('HANDLE_LEFTNAVWIDTH', this.$leftNav)
      } else {
        this.$leftNav = 200
        this.$store.commit('HANDLE_LEFTNAVWIDTH', this.$leftNav)
      }
    }
  }
}
</script>
<style>
/*菜单小三角形*/
.el-menu--vertical:after {
  content: '';
  position: absolute;
  border-top: 20px solid transparent;
  border-right:20px solid #17212B;
  border-bottom:20px solid transparent;
  border-left:20px solid transparent;
  left: -30px;
  top: 10px;
}
.el-menu--vertical {
  margin-left: 20px;
}
.el-menu-item-group__title {
  display: none!important;
}
.el-menu {
    border-right: solid 1px #17212B;
}
</style>
<style lang="less" scoped>
  .left-menu {
    height: 100%;
    background: #17212B;
    .left-menu-change {
      display: inline-block;
      margin:30px 0 20px 20px; /*px*/
      width: 26px;/*px*/
      height: 24px;/*px*/
      background: url(../assets/left-menu-open.png) center no-repeat;
      background-size: cover;
      cursor: pointer;
    }
    .menu-icon {
      display: inline-block;
      margin: 0 7px 0 2px;/*px*/
      width: 20px;/*px*/
      height: 20px;/*px*/
      background: url(../assets/left-nav-default.png) no-repeat;
      background-size: 190px 190px;/*px*/
    }
    .el-menu-item.is-active,.el-submenu.is-active {
      background-image: url(../assets/left-nav-active-bg.png);
      background-repeat: no-repeat;
      background-size: 120px 100%;/*px*/
      .menu-icon {
        background-image: url(../assets/left-nav-active.png);
      }
    }
    .el-menu-item.is-disabled {
      .menu-icon {
        background-image: url(../assets/left-nav-disabled.png);
      }
    }
    .menu1 {
      background-position: -10px -10px; /*px*/
    }
    .menu2 {
      background-position: -10px -40px; /*px*/
    }
    .menu3 {
      background-position: -10px -70px; /*px*/
    }
    .menu4 {
      background-position: -100px -100px; /*px*/
    }
    .menu5 {
      background-position: -40px -10px; /*px*/
    }
    .menu6 {
      background-position: -40px -40px; /*px*/
    }
    .menu7 {
      background-position: -130px -70px; /*px*/
    }
    .menu8 {
      background-position: -70px -100px; /*px*/
    }
    .menu9 {
      background-position: -70px -10px; /*px*/
    }
    .menu10 {
      background-position: -70px -40px; /*px*/
    }
    .menu11 {
      background-position: -100px -70px; /*px*/
    }
    .menu12 {
      background-position: -160px -70px; /*px*/
    }
    .menu13 {
      background-position: -10px -100px; /*px*/
    }
    .menu14 {
      background-position: -130px -10px; /*px*/
    }
    .menu15 {
      background-position: -100px -10px; /*px*/
    }
    .menu16 {
      background-position: -100px -40px; /*px*/
    }
    .menu17 {
      background-position: -130px -40px; /*px*/
    }
    .menu18 {
      background-position: -160px -10px; /*px*/
    }
    .menu19 {
      background-position: -160px -40px; /*px*/
    }
  }
  .left-menu.left-menu-close {
    .left-menu-change {
      background-image: url(../assets/left-menu-close.png)
    }
  }
  .left-menu.hide {
    display: none;
  }
  .left-nav-line {
    border-top: 1px solid #090E13;/*px*/
    border-bottom: 1px solid #334455;/*px*/
    margin: 0 10px; /*px*/
  }
</style>
<style lang="less">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px; /*px*/
    min-height: 200px;/*px*/
  }
  .left-menu.left-menu-close {
    .el-submenu.is-active {
      .el-submenu__title {
        background: none!important;
      }
    }
  }
</style>
