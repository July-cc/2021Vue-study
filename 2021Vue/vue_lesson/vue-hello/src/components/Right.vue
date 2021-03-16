<template>
  <div class="right">
    <h2>我是右侧</h2>
    <Box
      imgTitle="Galaxy S21 Ultra"
      imgSrc="https://www.samsungmobilepress.com/asset/asset/8578e85c-4f8b-4652-8565-580aab3f8fc3/306x240.jpg"
    />
    <Box
      imgTitle="Galaxy S21+"
      imgSrc="https://www.samsungmobilepress.com/asset/asset/09d8258d-fc2a-4fa3-9495-d4fa1055f1b1/306x240.jpg"
    />
    <Box
      imgTitle="Galaxy S21"
      imgSrc="https://www.samsungmobilepress.com/asset/asset/cd35c15e-bf6d-4683-a774-986b517d4837/306x240.jpg"
    />

    <!-- 列表渲染   就是将数组数据渲染到页面上-->
    <div v-if="keyWords.length" class="keywords">
      <!-- 要根据数据渲染多个 keyword -->
      <!-- v-for 的使用 word in keywords -->
      <!-- keyWords 是自定义的变量名，代表数组内的项，称之为循环的参数还可以有 index 参数，就需要写成 (word,index) -->
      <!-- keywords 是数据数组 -->
      <!-- 使用 v-for 的时候必须添加 key 属性,而且 key 属性的属性值必须是在兄弟之间唯一的 -->
      <div class="keyword" v-for="(word, index) in keyWords" :key="index">
        <span>{{ index > 8 ? `${index + 1}` : `0${index + 1}` }}</span>
        <h4>{{ word }}</h4>
      </div>
      <!-- 其他的数据 v-for -->
      <!-- <div v-for="num in 4" :key="`0${num}`">{{num}}</div> -->
      <!-- 在兄弟之间 key 的值必须是唯一的要不就会报错
    <div v-for="(str,index) in hello" :key="index">{{str}}</div> -->
    </div>
    <div v-else>暂时没有数据</div>
    <!-- 不在同一级里 key 的值就无所谓了
  <div v-for="(str,index) in 'hello'" :key="index">{{str}}</div> -->

    <!-- 在 tenplate 标签上使用 v-for 可以渲染包含多个元素的内容 -->
    <!-- key 是不可以添加在 template 标签上的，必须加在里面元素内,而且最外层的每一个都要添加,还要唯一 -->
    <!-- <ul>
      <template v-for="item in list">
        <li :key="item.id">{{ item.id }}</li>
        <li :key="item.text">{{ item.text }}</li>
      </template>
    </ul> -->

    <!-- v-if 往往和 v-for 一起使用 -->
  </div>
</template>

<script>
import Box from "./Box";
export default {
  name: "Right",
  components: {
    Box,
  },
  data: () => ({
    keyWords: [
      "Galaxy s1",
      "Galaxy s2",
      "Galaxy s3",
      "Galaxy s4",
      "Galaxy s5",
      "Galaxy s6",
      "Galaxy s7",
      "Galaxy s8",
      "Galaxy s9",
      "Galaxy s10",
    ],
    list: [
      {
        id: 1,
        text: "666",
      },
      {
        id: 2,
        text: "777",
      },
      {
        id: 3,
        text: "888",
      },
    ],
  }),
};
</script>

<style>
.right {
  width: 40%;
  height: 300px;
  /* background-color: orange; */
  float: left;
}
.right h2,
.right .box {
  text-align: center;
}
.right .keywords h4 {
  display: inline-block;
  margin: 15px;
}
</style>