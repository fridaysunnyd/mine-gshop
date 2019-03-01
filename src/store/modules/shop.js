import Vue from 'vue'
import {
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../../api'
import {
  RESEIVE_SHOPGOODS,
  RESEIVE_SHOPRATINGS,
  RESEIVE_SHOPINFO,
  ADD_FOOD_COUNT,
  REDUCE_FOOD_COUNT
} from '../mutation-types'
const state = {
  shopGoods:[],
  shopRatings:[],
  shopInfo:{}
}
const getter = {

}
const actions = {
  async getShopGoods({commit},cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
      commit(RESEIVE_SHOPGOODS,result.data)
      typeof cb && cb()
    }
  },
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code===0) {
      commit(RESEIVE_SHOPRATINGS,result.data)
    }
  },
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      commit(RESEIVE_SHOPINFO,result.data)
    }
  },
  updateFoodCount({commit},{isAdd,food}){
    if (isAdd) {
      commit(ADD_FOOD_COUNT, food)
    } else {
      commit(REDUCE_FOOD_COUNT, food)
    }
  }
}
const mutations = {
  [RESEIVE_SHOPGOODS] (state,data) {
    state.shopGoods = data
  },
  [RESEIVE_SHOPRATINGS] (state,data) {
    state.shopRatings = data
  },
  [RESEIVE_SHOPINFO] (state,data) {
    state.shopInfo = data
  },
  [ADD_FOOD_COUNT] (state,data) {
    if (data.count) {
      data.count++
    } else {
      Vue.set(data, 'count', 1)
    }
  },
  [REDUCE_FOOD_COUNT] (state,data) {
    if(data.count > 0){
      data.count--
    }
  },
}
export default {
  state,
  actions,
  mutations,
  getter
}
