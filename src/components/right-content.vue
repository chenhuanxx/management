<template>
  <div class="app-right-container">
    <div class="top-bar-content">
      <top-bar></top-bar>
    </div>
    <div class="app-right-content" style="overflow-y: scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import topBar from './topBar'
  import {mapMutations} from 'vuex'
  import {SET_IS_COLLAPSE} from '../store/mutation-type'

  export default {
    components: {
      topBar
    },
    props: {
      breadcrumbs: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      ...mapMutations({
        setIsCollapse: SET_IS_COLLAPSE
      }),
      handlerCollapse () {
        this.setIsCollapse()
      },
      logout () {
        location.href = location.href.split('/#/')[0] + '/logout'
        console.log('logout')
      }
    }
  }
</script>
<style>
  .app-right-container {
    height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 868px;
  }

  .app-right__header-box {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .app-right-header {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
  }

  .app-right-content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .app-right__header-box__right-item .el-dropdown-link {
    cursor: default;
  }

  .icon-navlist {
    display: inline-block;
    background-image: url("../assets/icon-navlist.png");
    background-size: 100% 100%;
    width: 22px;
    height: 18px;
    box-sizing: border-box;
    margin-top: 4px;
    margin-right: 10px;
    margin-left: 20px;
    cursor: pointer;
  }
  .header__icon {
    display: inline-block;
    background-size: cover;
    width: 1.2em;
    height: 1.2em;
  }
  .icon_avatar {
    background-image: url("../assets/icon-account@2x.png");
    vertical-align: text-bottom;
  }
  .icon_msg {
    background-image: url("../assets/icon-msg@2x.png");
    vertical-align: middle;
    margin-left: 1em;
  }
  .icon_setting {
    background-image: url("../assets/icon-setting@2x.png");
    vertical-align: middle;
    margin-left: 1em;
  }

  .app-right-header .item-logo {
    width: 25px;
    height: 25px;
    vertical-align: middle;
    margin-top: -3px;
    margin-right: 5px;
    object-fit: cover;
  }

  .el-breadcrumb {
    font-size: 14px;
    color: #333333;
    line-height: normal;
  }

  .el-breadcrumb__item__inner, .el-breadcrumb__item__inner a {
    color: #333333;
    font-weight: 500;
  }

  .el-breadcrumb__separator {
    color: #333333;
  }

  .el-breadcrumb__item:last-child .el-breadcrumb__item__inner {
    color: #333333;
  }
</style>
