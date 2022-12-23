/*
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-16 15:35:58
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-16 15:37:16
 */
import { get } from "../../utils/request"
const getMenu = function (data) {
    return get('/api/private/v1/menus', data)
}
export default { getMenu }