/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-12 15:43:46
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-16 10:47:42
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 引入各个模块的vuex
// 例如：user.js ---
import user from "./user"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // 例如：user
    user
  }
})
