/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-17 23:32:10
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-17 23:44:30
 */
// 导入 Vue
import Vue from 'vue'
 
// 导入 vue-i18n 插件
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale' // 导入 Element 语言配置插件
import enLocale from 'element-ui/lib/locale/lang/en' // 导入 Element 英文包
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 导入 Element 中文包
import zh from './zh'
import en from './en'
import zhMenu from './zhmenu'
import enMenu from './enmenu'
 
Vue.use(VueI18n)
 
// 创建国际化插件的实例
const i18n = new VueI18n({
  locale: 'zh', // 设置地区，zh 表示中国地区
  // 设置地区信息
  messages: {
    en: {
      ...enLocale,
      ...en,
      ...enMenu
    },
    zh: {
      ...zhLocale,
      ...zh,
      ...zhMenu
    }
  }
})
 
// 配置 Element 语言转换关系
locale.i18n((key, value) => i18n.t(key, value))
 
export default i18n