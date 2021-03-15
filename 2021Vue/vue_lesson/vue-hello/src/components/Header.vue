<template>
  <header>
    <h2>我是头部</h2>
    <span>{{count}}</span>
    <br>
    <!-- 使用 v-on: 指令绑定事件,可以简写成 @ -->
    <!-- template 中使用 script 内的内容的时候基本上都是直接使用 -->
    <!-- template 中指令后面的引号内都可以直接写 js -->
    <button v-on:click="add">+</button>
    <button @click="sub">-</button>
  </header>
</template>

<script>
// vue 内如果想要视图（页面）发生改变 （比如购物车的数字变了、轮播图换图了、样式能处理的不算）那么必须由组件的 data 直接或者间接控制
// 数据 data
// 数据变化引起视图改变
// 1.创建 data 
// 2.将 data 展示到视图上
// 3.修改 data 
export default {
  name: "Header",
  // data 必须是一个函数,并且返回一个对象,对象下的属性就是 data 数据
  // data 的使用和我们介绍的 prop 的基本和使用一致
  data(){
    return{
      count:0
    }
  },
  // 事件处理函数
  methods: {
    // 这里面写的方法就可以当做事件处理函数使用
    add(){
      console.log('我是加法');
      // 修改 data 直接修改即可
      // this.count = this.count + 1
      this.count ++
    },
    sub(){
      this.count --
    }
  },
};
</script>

<style>
header {
  width: calc(100% - 20px);
  height: 100px;
  background-color: teal;
  margin: 10px auto;
  overflow: hidden;
}
header h2{
  margin: 0;
}
</style>
