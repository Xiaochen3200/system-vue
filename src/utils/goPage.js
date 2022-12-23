/*
 * @Descripttion: 代码书写✍️
 * @version:
 * @Author: 陈
 * @Date: 2022-08-16 14:31:51
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-16 14:31:58
 */
// 封装路由跳转方法
export default function goPage(param, replace) {
  if (typeof param === "string") {
    param = {
      path: param,
    };
  }
  // 判断是不是重定向
  if (replace) {
    this.$router.replace({
      path: param.path,
    });
    return;
  }
  if (param.path) {
    if (!param.query) {
      param.query = {};
    }
    param.query = {
      ...param.query,
      // 这里可以添加公共参数，每次跳转的时候都会附带上去
    };
    this.$router.push({
      path: param.path,
      query: param.query,
    });
  } else if (param.name) {
    this.$router.push({
      name: param.name,
      params: param.params,
    });
  } else if (param.outlink) {
    console.log("开始外部跳转");
  } else {
    console.log("param is null");
  }
}
