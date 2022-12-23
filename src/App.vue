<!--
 * @Descripttion: 代码书写✍️
 * @version: 
 * @Author: 陈
 * @Date: 2022-08-12 15:43:46
 * @LastEditors: Andy
 * @LastEditTime: 2022-08-17 16:47:01
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
html,body{
  height: 100%;
  margin: 0;
  padding: 0;
}
.icon{
  width: 1em;
  height: 1em;
  vertical-align: -0.5em;
  fill: currentColor;
  overflow: hidden;
}
</style>
