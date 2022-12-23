/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-17 17:48:15
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-18 10:38:44
 */
export default [
    {
      path: "/users",
      name: "users",
      meta: {
        requireAuth: true,
        title: "用户管理/用户列表",
        name: "用户列表",
      },
      component: () => import("../../views/user/index.vue"),
    },
  ];
  