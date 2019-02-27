import {
  reqShopGoods,
  reqShopRatings,
  reqShopInfo
} from '../../api'
import {
  RESEIVE_SHOPGOODS,
  RESEIVE_SHOPRATINGS,
  RESEIVE_SHOPINFO
} from '../mutation-types'
const state = {
  shopGoods:[],
  shopRatings:[],
  shopInfo:{}
}
const getter = {

}
const actions = {
  async getShopGoods({commit}) {
    const result = await reqShopGoods()
    if(result.code===0) {
      commit(RESEIVE_SHOPGOODS,result.data)
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
}
export default {
  state,
  actions,
  mutations,
  getter
}
