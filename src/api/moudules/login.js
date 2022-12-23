/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-15 16:08:29
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-15 17:25:15
 */
import { post } from "../../utils/request"
const login = function (params) {
    return post('/api/private/v1/login', params)
}
export default { login }