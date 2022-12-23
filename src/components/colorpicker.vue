<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-21 02:14:30
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-21 02:37:00
-->
<!--
组件功能：主题颜色切换封装
组件开发人 ： chl
!-->
<template>
    <div class='colorPick'>
        <el-color-picker v-model="theme" class="theme-picker" :predefine="predefineColors" popper-class="theme-picker-dropdown">
        </el-color-picker>
    </div>
</template>

<script>
const ORIGINAL_THEME = "#409EFF";
export default {
    name: 'colorPick',
    data() {
        return {
            theme: ORIGINAL_THEME,
            
        }
    },
    // 父辈向子辈传参
    props: {},
    // 组件的引用
    components: {},
    // 计算属性
    computed: {},
    // 监测变化
    watch: {},
    // 实例被创建之后执行代码
    created() { },
    // 方法
    methods: {},
    // 页面进入时加载内容
    mounted() {
    },
}
</script>
<style scoped lang='scss'>
</style>