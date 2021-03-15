<template>
  <div class="left">
    <h2>我是左侧</h2>
    <!-- content 组件是一个比较大的组件内部有很多样式,只是内容展示不一样,并不是文字不一样,而是标签不一样,有时候可能展示 p 有时候可能展示 H2 有时候可能展示 a -->
    <!-- 其实组件内部也可以使用 v-html 解析,但是不太推荐这这样用 -->
    <!-- <Content htmlStr="<p>展示的内容</p>" />
    <Content htmlStr="<h2>展示的内容</h2>" /> -->
    <!-- 将需要展示的不同 html 结构写在组件的开始标签和结束标签之间 -->
    <Content>
      <p>展示的内容</p>
    </Content>
    <Content>
      <h2>展示的内容</h2>
    </Content>
    <!-- 上面这种传递 prop 的方式称为 slot 插槽 -->
  </div>
</template>

<script>
import Content from './Content';
export default {
  name: "Left",
  components: {
    Content
  },
};
</script>

<style>
.left {
  width: 60%;
  height: 300px;
  background-color: red;
  text-align: center;
  float: left;
}
</style>