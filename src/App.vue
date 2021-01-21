<template>
  <div id="app" class="clearfix">
    <left-nav ref="leftnav" :hide-nav="hideNav" :nav-type="navType"></left-nav>
    <div class="right-content">
      <top-bar :hide-nav="hideNav"></top-bar>
      <el-scrollbar style="height:100%" :native="false" wrap-style="overflow-x: hidden;" ref="scrollBar">
        <div class="content">
          <router-view @navChange="leftNavChange" ref="pageContent"></router-view>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import leftNav from './appMain/leftNav'
import topBar from './appMain/topBar'

export default {
  name: 'app',
  components: {
    leftNav,
    topBar
  },
  data () {
    return {
      hideNav: false,
      navType: 'lg'
    }
  },
  methods: {
    leftNavChange (hideNav, navIndex, type, subNavIndex) {
      this.hideNav = hideNav
      this.navType = type || 'lg'
      if (navIndex || navIndex === 0) {
        this.$refs.leftnav.changeNavState(navIndex, subNavIndex)
      }
    }
  }
}
</script>

<style lang="less">
  @import '../style/newCommon.less';
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Microsoft YaHei';
    input, textarea, select{
      text-rendering: auto;
      color: initial;
      letter-spacing: normal;
      word-spacing: normal;
      text-transform: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      text-align: start;
      margin: 0em;
      font-size: 14px;
      font-family: 'Microsoft YaHei'!important;
    }
  }
</style>
<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    .right-content {
      flex: 1;
      overflow: hidden;
      background: #f7f8f9;
      display: flex;
      flex-direction: column;
      height: 100%;
      .content {
        min-width: 1000px;
        box-sizing: border-box;
        padding: 30px 60px 0;
      }
    }
  }
</style>
