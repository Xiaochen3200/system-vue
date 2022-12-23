/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-12 15:43:46
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-17 23:33:28
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import api from "./api/index";
Vue.prototype.$axios = api;

import goPage from "./utils/goPage";
Vue.prototype.$goPage = goPage;

// 按需加载elementUI
import element from './element/index'
// 引入elementUI样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局样式
import '@/style/index.scss'

// 引入mock数据
require('./mock')

// 导入字体图标库
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont";

// 引入E charts


// 中英文切换
// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)
// const i18n = new VueI18n({
//   locale: localStorage.getItem('languageSet') || 'zh',   //从localStorage里获取用户中英文选择，没有则默认中文
//   messages: {
//     'zh': require('./language/zh'),
//     'en': require('./language/en')
//   }
// })

// 多语言配置
import i18n from './language/index'


Vue.use(element)

new Vue({
  router,
  store,
  i18n,   //把 i18n 挂载到 vue 根实例上
  render: h => h(App)
}).$mount('#app')
