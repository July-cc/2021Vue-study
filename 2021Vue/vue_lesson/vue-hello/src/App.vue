<template>
  <div id="app">
    <!-- vue 的 template 内开始标签和结束标签之间如果没有内容，请将标签写成单闭合标签 -->
    <Header />
    <Left />
    <Right />
    <div v-if="arr.length" class="news-list">
      <div v-for="news in arr" :key="news.id" class="news">
        <div class="img"><img :src="news.imgSrc" alt="" /></div>
        <span>{{ news.date }}</span>
        <h4>{{ news.title }}</h4>
        <!-- <div v-for="(word,index) in news.keyword" :key="index" class="info">
          <span>#{{word}}</span>
        </div> -->
        <div class="info">
          <KeyWord
            v-for="(word, index) in news.keyword"
            :key="index"
            :word="word"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import KeyWord from "./components/KeyWord";
export default {
  name: "App",
  components: {
    // 名：组件的值
    // 名其实就是一个自定义标签
    // Header: Header
    Header,
    Left,
    Right,
    KeyWord,
  },
  data() {
    return {
      arr: [
        {
          id: 1,
          imgSrc:
            require('./assets/300x200.jpg'),
          date: "March 09, 2021",
          title: "Samsung Internet 14.0 Beta is Now Available",
          keyword: [
            "Samsung Internet",
            "Samsung Internet 14.0",
            "Update",
            "Privacy",
            "Multi-tasking",
          ],
        },
        {
          id: 2,
          imgSrc:
            "https://www.samsungmobilepress.com/asset/asset/83e72046-8bd8-41c2-8d93-ef1d18113bab/306x240.jpg",
          date: "March 12, 2021",
          title: "Upgrade Your Shots with the Galaxy S21 Series",
          keyword: [
            "Galaxy S21",
            "Galaxy S21 Ultra",
            "Galaxy S21 Series",
            "Camera",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>