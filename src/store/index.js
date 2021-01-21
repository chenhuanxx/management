import Vue from 'vue'
import 'babel-polyfill'
import Vuex from 'vuex'
import {actions} from './actions'
// import * as getters from './getters'
import {mutations} from './mutations'

Vue.use(Vuex)
const state = {
  leftNavWidth: 200
}

export default new Vuex.Store({
  actions,
  // getters,
  mutations,
  modules: {
  },
  state
})
