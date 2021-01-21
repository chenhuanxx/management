import Vue from 'vue'
import App from './App'
import router from './router'
import Api from './api/api'
import store from './store/index'
import 'es6-promise/auto'
import fixedButton from '@/components/fixedButton'
Vue.component('fixed-button', fixedButton)
Vue.config.productionTip = false
Vue.prototype.$api = Api
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    window.location.href = window.location.origin + '/login.html'
  }
})
Vue.prototype.$leftNav = 200
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    "inline": true,
    "button": true,
    "navbar": true,
    "title": true,
    "toolbar": true,
    "tooltip": true,
    "movable": true,
    "zoomable": true,
    "rotatable": true,
    "scalable": true,
    "transition": true,
    "fullscreen": true,
    "keyboard": true,
    "url": "data-source"
  }
});
//引用富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
 //引入富文本css
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
//富文本编辑器添加实例
Vue.use(VueQuillEditor, /* { default global options } */)
Vue.prototype.$userInfo = {
  address: '湖北荆州',
  use: 'admin',
  userName: '陈欢',
  sex: '男',
  mobile: '13294140901',
  email: '645036583@qq.com',
  companyName: 'DEMO公司'
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
