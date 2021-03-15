<template>
  <!-- 1.第一种写法 -->
  <!-- <div class="content" v-html="htmlStr"> -->
  <!-- 当 template 想要解析 html 字符串的话需要使用 v-html 指令 -->
  <!-- {{htmlStr}} -->
  <!-- <h3>我是左侧第一个内容</h3> -->
  <!-- </div> -->
  <!-- 2.第二种写法 export default 里 props 不用接收-->
  <div class="content">
    <!-- 父组件传递的 slot prop 直接使用 slot 标签接收 -->
    <slot/>
  </div>
</template>

<script>
export default {
  name: "Content",
  // props:['htmlStr']
};
</script>

<style>
.content {
  width: 30%;
  height: 200px;
  background-color: green;
  float: left;
}
</style>