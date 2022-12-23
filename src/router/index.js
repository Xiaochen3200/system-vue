/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-10 16:24:25
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-17 17:49:47
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from "js-cookie";
import Login from '../views/login'
import NotFound from '../layout/notfound.vue'
import User from "./modules/user";

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/",
    name: "",
    redirect: "/welcome",
    meta: {
      requireAuth: true,
      title: "Home",
    },
    component: () => import("../layout/index.vue"),
    children: [
      {
        path: "/welcome",
        name: "welcome",
        meta: {
          requireAuth: true,
        },
        component: () => import("../views/welcome.vue"),
      },
      ...User,
      // ...Roles,
      // ...Commodity,
      // ...DataList,
      // ...Order,
    ],
  },
  {
    path: "*",
    component: NotFound, //全部匹配的情况下，返回404，路由按顺序从上到下，依次匹配，最后一个*能匹配全部
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    const tokenStr = Cookies.get("token");
    let webName = sessionStorage.getItem("username");
    if (tokenStr && tokenStr.length > 0 && webName) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});

export default router
