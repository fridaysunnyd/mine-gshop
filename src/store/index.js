/*
vuex最核心的管理对象: store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import msite from './modules/msite.js'
import shop from './modules/shop.js'
import user from './modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    msite,
    shop,
    user
  }
})
