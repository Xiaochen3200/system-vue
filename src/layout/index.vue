<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-13 21:00:18
 * @LastEditors: Andy
 * @LastEditTime: 2022-09-03 10:19:40
-->

<template>
    <div class='layout'>
        <el-container>
            <transition name="hello" appear>
                <el-aside style="width: unset">
                    <NavMenu :isCollapse="isCollapse" />
                </el-aside>
            </transition>

            <el-container>
                <el-header>
                    <Header :isCollapse="isCollapse" @changeShowNav="changeShowNav" />
                </el-header>
                <el-main>
                    <WebMain />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './header.vue'
import NavMenu from "./nav-menu.vue"
import WebMain from "./webmain.vue";
export default {
    name: 'layout',
    data() {
        return {
            isCollapse: false
        }
    },
    // 父辈向子辈传参
    props: {},
    // 组件的引用
    components: { Header, NavMenu, WebMain },
    // 计算属性
    computed: {},
    // 监测变化
    watch: {},
    // 实例被创建之后执行代码
    created() { },
    // 方法
    methods: {// 控制navMenu折叠
        changeShowNav() {
            this.isCollapse = !this.isCollapse
        }
    },
    // 页面进入时加载内容
    mounted() {

    },
}
</script>
<style scoped lang='scss'>
.layout {
    height: 100%;
    .el-container {
        height: 100%;
        .el-aside {
            height: 100%;
        }
    }
    .el-header {
        padding: 0 10px;
        background: $blue;
        border-left: 1px solid #ffffff;
    }
}
</style>