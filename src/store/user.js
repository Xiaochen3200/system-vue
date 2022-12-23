/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-16 09:20:43
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-16 10:48:55
 */
// 存储cookie
import Cookie from "js-cookie";

export default {
    namespaced: true,
    state: {
      token: "",
      username: "", //当前登录用户
      isCollapse:"" //menuList折叠与展开
    },
    mutations: {
      setToken(state, val) {
        console.log(val);
        state.token = val;
        Cookie.set("token", val);
      },
      setUserName(state, val) {
        state.username = val;
        sessionStorage.setItem("username", val);
      },
      getToken(state) {
        state.token = Cookie.get("token");
      },
      clearToken(state) {
        state.token = "";
        Cookie.remove("token");
      },
      clearAll(state) {
        (state.username = ""),
          sessionStorage.removeItem("username"),
          sessionStorage.clear();
      },
      setCollapse(state,val){
        state.isCollapse = val;
        console.log(state.isCollapse)
      }
    },
    actions: {
      // 请求都写在这里
    }
  };
  