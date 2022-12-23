<!--
组件功能：
组件开发人 ： chl
!-->
<template>
  <div class='webMain'>
      <transition name="fade" mode="out-in">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {

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
  created () {},
  // 方法
  methods: {},
  // 页面进入时加载内容
  mounted () {},
}
</script>
<style scoped lang='scss'>
.webMain{
    width: 100%;
    height: 100%;
    .fade-enter{
        opacity: 0;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-enter-active{
        transition: opacity 0.5s;
    }
    .fade-leave-active{
        opacity: 0;
        transition: opacity 0.5s;
    }
}
</style>