/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-10 23:51:11
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-15 16:40:47
 */
import axios from 'axios'
import { Message,Loading } from 'element-ui'
import {serverUrl} from './common'
import router from "../router/index";
import Cookies from 'js-cookie'

const instance = axios.create({
    baseURL: serverUrl, //Url地址
    timeout: 5000 //请求超时time
  });
//定义loading变量
let loading;
function startLoading() {
    //使用Element loading-start 方法
    loading = Loading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(0, 0, 0, 0.7)"
    });
  }
  function endLoading() {
    //使用Element loading-close 方法
    loading.close();
  }
// 请求拦截  设置统一header
instance.interceptors.request.use(
    config => {
      // 加载
      startLoading();
      config.headers.Authorization = Cookies.get("token");
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  
  // 响应拦截  401 token过期处理
  instance.interceptors.response.use(
    response => {
      endLoading();
      return response;
    },
    error => {
      // 错误提醒
      endLoading();
      Message.error(error.response.data);
  
      const { status } = error.response;
      if (status == 401) {
        Message.error("token值无效,请重新登录");
        // 清除token
        // this.$store.commit("user/clearToken", "");
  
        // 页面跳转
        router.push("/login");
      }
  
      return Promise.reject(error);
    }
  );
  // 封装 get,post,put,delete 请求
export const get = (url, params) =>
instance.get(url, {
  params: params
})

export const post = (url, data) => instance.post(url, data);

export const put = (url, params) =>
instance.put(url, params);

export const deleta = (url, data) => instance.delete(url, data);

export default instance;

