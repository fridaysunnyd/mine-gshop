/*
包含n个用于直接更新状态数据的方法的对象
 */
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RESEIVE_SHOPGOODS,
  RESEIVE_SHOPRATINGS,
  RESEIVE_SHOPINFO
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
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
