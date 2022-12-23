<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-17 17:49:00
 * @LastEditors: Andy
 * @LastEditTime: 2022-10-23 15:40:18
-->
<!--
组件功能：
组件开发人 ： chl
!-->
<template>
    <div class='user'>
        <div>用户列表</div>
        <el-button @click="handleGo">返回上一步</el-button>
    </div>
</template>

<script>
export default {
    name: 'userList',
    data() {
        return {

        }
    },
    // 父辈向子辈传参
    props: {},
    // 组件的引用
    components: {
    },
    // 计算属性
    computed: {},
    // 监测变化
    watch: {},
    // 实例被创建之后执行代码
    created() {

    },
    // 方法
    methods: {
        handleGo(){
            this.$router.push('/welcome')
        }
    },
    // 页面进入时加载内容
    mounted() {

    },
}
</script>
<style scoped lang='scss'>
</style>