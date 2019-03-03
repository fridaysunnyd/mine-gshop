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
  REDUCE_FOOD_COUNT,
  CLEARCART
} from '../mutation-types'
const state = {
  shopGoods:[],
  shopRatings:[],
  shopInfo:{},
  cardFoods:[]
}
const getters = {
// 总数量
  totalFoodCount (state) {
    return state.cardFoods.reduce((pre, item) => pre + item.count, 0)
  },

  // 总价格
  totalFoodPrice (state) {
    return state.cardFoods.reduce((pre, item) => pre + item.count*item.price, 0)
  },
}
const actions = {
  async getShopGoods({commit},cb) {
    const result = await reqShopGoods()
    if(result.code===0) {
      commit(RESEIVE_SHOPGOODS,result.data)
      typeof cb && cb()
    }
  },
  async getShopRatings({commit},cb) {
    const result = await reqShopRatings()
    if(result.code===0) {
      commit(RESEIVE_SHOPRATINGS,result.data)
    }
    cb()
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
  },
  clearCart({commit}){
    commit(CLEARCART)
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
      state.cardFoods.push(data)
    }
  },
  [REDUCE_FOOD_COUNT] (state,data) {
    if(data.count > 0){
      data.count--
      if(data.count === 0){
        const index = state.cardFoods.indexOf(data)
        state.cardFoods.splice(index,1)
      }
    }
  },
  [CLEARCART] (state) {
    state.cardFoods.forEach((food,index) => food.count = 0 )
    state.cardFoods = []
  },
}
export default {
  state,
  actions,
  mutations,
  getters
}
