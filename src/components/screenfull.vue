<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-18 09:38:21
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-18 10:09:34
-->
<!--
组件功能：
组件开发人 ： chl
!-->
<template>
    <div class='fullscreen'>
        <span v-if="isFullscreen" @click="changeFullscreen">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-suoxiao"></use>
            </svg>
        </span>
        <span v-else @click="changeFullscreen">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fangda"></use>
            </svg>
        </span>
    </div>
</template>

<script>
import screenfull from 'screenfull'
export default {
    name: 'fullscreen',
    data() {
        return {
            isFullscreen: false
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
    methods: {
        changeFullscreen() {
            screenfull.toggle()
            if (!screenfull.isEnabled) {
                this.$message.warning('暂不支持全屏')
            }
            this.isFullscreen = !this.isFullscreen
        }
    },
    // 页面进入时加载内容
    mounted() { },
}
</script>
<style scoped lang='scss'>
.fullscreen {
    .icon {
        height: 2.4rem;
    }
}
</style>