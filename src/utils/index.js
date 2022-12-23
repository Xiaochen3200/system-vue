/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-11 00:00:14
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-13 21:12:45
 */
// 时间戳转换成 yyy-mm-dd hh:mm
export function formateDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "y+": data.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}
// 左边补0
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
// 数组去重封装
export function unique(arr) {
  return Array.from(new Set(arr));
}
