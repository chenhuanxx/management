import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = (resolve) => require(['@/login/login'], resolve)
const BigScreen = (resolve) => require(['@/appMain/big-screen'], resolve)
// 主页
const Home = (resolve) => require(['@/pages/home'], resolve)
// 
const UseManagement = (resolve) => require(['@/pages/setting/use/use-management'], resolve)
const UseManagementDetail = (resolve) => require(['@/pages/setting/use/use-management-detail'], resolve)
const RoleManagement = (resolve) => require(['@/pages/setting/role/role-management'], resolve)
const AuthorityManagement = (resolve) => require(['@/pages/setting/authority/authority-management'], resolve)
const PersonalSetting = (resolve) => require(['@/pages/use/personal-setting'], resolve)
// 主要页面
const NewsList = (resolve) => require(['@/pages/news/news-list'], resolve)
const NewsDetail = (resolve) => require(['@/pages/news/news-detail'], resolve)
// 测试
const DocumentReview = (resolve) => require(['@/pages/document-review/document-review'], resolve)
const CategoryManagement = (resolve) => require(['@/pages/category/category-management'], resolve)

const DocumentReviewDetail = (resolve) => require(['@/pages/document-review/document-review-detail'], resolve)
const TransactionRecord = (resolve) => require(['@/pages/transaction-record/transaction-record'], resolve)
const Statistics = (resolve) => require(['@/pages/statistics/statistics'], resolve)
 
const Olmap = (resolve) => require(['@/pages/olmap/olmap'], resolve)

const Map = (resolve) => require(['@/pages/olmap/Map'], resolve)

Vue.use(VueRouter)
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/login',
    meta: {
      title: '概览'
    },
    component: Login
  },
  {
    path: '/big-screen',
    meta: {
      title: '大屏展示'
    },
    component: BigScreen
  },
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: Home
  }, 
  {
    path: '/personal-setting',
    meta: {
      title: '用户信息'
    },
    component: PersonalSetting
  },
  {
    path: '/use-management',
    meta: {
      title: '用户管理'
    },
    component: UseManagement
  },
  {
    path: '/use-management-detail/:type/:id?',
    meta: {
      title: '用户详情'
    },
    component: UseManagementDetail
  },
  {
    path: '/role-management',
    meta: {
      title: '角色管理'
    },
    component: RoleManagement
  },
  {
    path: '/authority-management',
    meta: {
      title: '权限管理'
    },
    component: AuthorityManagement
  },
  {
    path: '/news-list',
    meta: {
      title: '新闻中心'
    },
    component: NewsList
  },
  {
    path: '/news-detail/:type/:id?',
    meta: {
      title: '新闻详情'
    },
    component: NewsDetail
  },
  {
    path: '/use-management',
    meta: {
      title: '用户管理'
    },
    component: UseManagement
  },
  {
    path: '/category-management',
    meta: {
      title: '品类管理'
    },
    component: CategoryManagement
  }, 
  {
    path: '/document-review',
    meta: {
      title: '文档审核'
    },
    component: DocumentReview
  },
  {
    path: '/document-review-detail/:id?',
    meta: {
      title: '文档审核详情'
    },
    component: DocumentReviewDetail
  },
  {
    path: '/transaction-record',
    meta: {
      title: '交易记录'
    },
    component: TransactionRecord
  },
  {
    path: '/statistics',
    meta: {
      title: '交易记录'
    },
    component: Statistics
  },
  {
    path: '/personal-setting',
    meta: {
      title: '用户信息'
    },
    component: PersonalSetting
  },
  {
    path: '/ol-map',
    meta: {
      title: '地图'
    },
    component: Olmap
  },
  {
    path: '/map',
    meta: {
      title: 'Map'
    },
    component: Map
  }
  
]

export default new VueRouter({
  // mode: 'history',
  routes
})
