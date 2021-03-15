<template>
  <div class="box">
    <!-- src 属性经过指令包裹之后引号内可以直接写 js -->
    <!-- v-bind: 可以简写成 : -->
    <!-- <img v-bind:src="imgSrc" alt=""> -->
    <img :src="imgSrc" alt="">
    <p>{{imgTitle}}</p>
  </div>
</template>

<script>
export default {
  name: "Box",
  // 这样 imgTitle 就接收父组件传递的相应的数据，这个数据可以认为是一个该组件内的全局变量随意使用。
  // prop 数据的使用
  // 1. 在 template 中直接使用，需要遵循 vue 的模板语法
  // 2. 在 script 中需要使用 this.xxx
  props:['imgTitle','imgSrc']
};
</script>

<style scoped>
.box {
  width: calc(33% - 10px);
  float: left;
  overflow: hidden;
  background-color: #000;
  margin: 5px;
}
.box img{
  width: 100%;
}
.box p{
  color: #fff;
}
</style>