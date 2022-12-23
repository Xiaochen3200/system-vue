/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-11 00:30:10
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-13 21:13:06
 */
// 获取存储token,判断是否登录
export const isLogined = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};

// 存储token
export const setToken = token => {
  localStorage.setItem("token", token);
};

// 读取token
export const getToken = token => {
  return localStorage.getItem("token");
};

// 移除token
export const removeToken = token => {
  localStorage.removeItem("token");
};
