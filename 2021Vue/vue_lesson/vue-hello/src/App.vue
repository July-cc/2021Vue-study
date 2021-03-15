<template>
  <div id="app">
    <!-- vue 的 template 内开始标签和结束标签之间如果没有内容，请将标签写成单闭合标签 -->
    <Header />
    <Left />
    <Right />
  </div>
</template>

<script>
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
export default {
  name: "App",
  components: {
    // 名：组件的值
    // 名其实就是一个自定义标签
    // Header: Header
    Header,
    Left,
    Right,
  },
};
</script>

<style>
</style>
