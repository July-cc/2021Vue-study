<template>
  <header>
    <h2>我是头部</h2>
    <span>{{ count }}</span>
    <br />
    <!-- 使用 v-on: 指令绑定事件,可以简写成 @ -->
    <!-- template 中使用 script 内的内容的时候基本上都是直接使用 -->
    <!-- template 中指令后面的引号内都可以直接写 js -->
    <button v-on:click="add">+</button>
    <button @click="sub">-</button>
    <br />
    <!-- 样式消失   结构消失 -->
    <button @click="changeShow">切换出现和消失</button>
    <!-- <button @click="changeColor">切换背景色</button> -->
    <!-- vue 中的事件绑定可以直接写在标签上，不一定需要在 methods 内定义，直接写的话一般只写修改 data 的操作-->
    <button @click="active = !active">切换背景色</button>
    <!-- 将 show 这个 data 和 box 的样式挂钩 -->
    <!-- 样式的控制 -->
    <!-- 1.class 的绑定 -->
    <!-- 普通的 JS 语法实现 -->
    <!-- <div :class="show ? 'box' : 'box hide'"></div> -->
    <!-- 对象语法 -->
    <!-- <div :class="{ box: true, hide: !show }"></div> -->
    <!-- 数组语法 -->
    <!-- <div :class="['box', show ? '' : 'hide']"></div> -->
    <!-- 数组语法嵌套对象语法 -->
    <!-- <div :class="['box', { hide: !show }]"></div>
    <div :class="['box', { changecolor: !active }]"></div> -->
    <!-- <div :class="['box', { hide: !show,changecolor:!active }]"></div> -->
    <!-- 2.style 的绑定 -->
    <!-- 普通的 JS 语法实现 -->
    <!-- <div
      :style="`background-color:${active ? 'red' : 'orange'};`"
      :class="['box', { hide: !show }]"
    ></div> -->
    <!-- 对象语法 -->
    <!-- <div
      class="box"
      :style="{ backgroundColor: active ? 'red' : 'blue' }"
    ></div> -->
    <!-- 数组语法 就是可以使用多个对象语法 [{对象语法},{对象语法}]-->
    <!-- <div
      class="box"
      :style="[{ backgroundColor: active ? 'red' : 'blue' }]"
    ></div> -->
    <!-- 3.指令 v-show 实现 只是可以实现出现或消失 添加或者删除 display:none -->
    <!-- <div class="box" v-show="show"></div> -->

    <!-- 结构的添加和删除 -->
    <!-- 使用指令 v-if  v-else  v-else-if -->
    <div class="box" v-if="show"></div>
    <p v-else>box 消失了,我出现了</p>
    <!-- <div class="box" v-if="show"></div>
    <p v-else-if="true">box 消失了,我出现了</p> -->
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
  data() {
    return {
      count: 0,
      // 如何定义 DATA
      show: true,
      active: true,
    };
  },
  // 事件处理函数
  methods: {
    // 这里面写的方法就可以当做事件处理函数使用
    add() {
      console.log("我是加法");
      // 修改 data 直接修改即可
      // this.count = this.count + 1
      console.log(this);
      // this 指的是组件本身,基本上能获取所有内容
      this.count++;
    },
    sub() {
      const { count } = this;
      if (count > 0) {
        this.count--;
      }
    },
    changeShow() {
      this.show = !this.show;
    },
    // changeColor() {
    //   this.active = !this.active;
    // },
  },
};
</script>

<style>
header {
  width: calc(100% - 20px);
  padding: 20px 0;
  background-color: teal;
  margin: 10px auto;
  overflow: hidden;
}
header h2 {
  margin: 0;
}
header .box {
  width: 100px;
  height: 100px;
  background-color: orange;
  display: block;
}
.box.hide {
  display: none;
}
/* .box.changecolor {
  background-color: red;
} */
</style>
