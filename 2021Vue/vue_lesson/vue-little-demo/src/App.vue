<template>
  <div id="app">
    <!-- <button @click="show = false">销毁轮播图组件</button>
    <SwiperDemo v-if="show" /> -->
    <button @click="visibility = true">弹窗出现</button>
    <Dialog :visibility="visibility"/>
  </div>
</template>

<script>
import Dialog from "./components/DialogDemo/Dialog.vue";
// import SwiperDemo from "./components/SwiperDemo/SwiperDemo.vue";

export default {
  components: {
    // SwiperDemo
    Dialog,
  },
  name: "App",
  data() {
    return {
      // show: true,
      // 如果 data 和视图没有关系,那么修改的时候对应的生命周期并不会执行
      visibility:false
    };
  },
  updated() {
    console.log('App 更新');
  }
};
</script>

<style>
</style>
