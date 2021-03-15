<template>
  <div class="right">
    <h2>我是右侧</h2>
    <Box imgTitle="Galaxy S21 Ultra" imgSrc="https://www.samsungmobilepress.com/asset/asset/8578e85c-4f8b-4652-8565-580aab3f8fc3/306x240.jpg" />
    <Box imgTitle="Galaxy S21+" imgSrc="https://www.samsungmobilepress.com/asset/asset/09d8258d-fc2a-4fa3-9495-d4fa1055f1b1/306x240.jpg" />
    <Box imgTitle="Galaxy S21" imgSrc="https://www.samsungmobilepress.com/asset/asset/cd35c15e-bf6d-4683-a774-986b517d4837/306x240.jpg" />
  </div>
</template>

<script>
import Box from "./Box";
export default {
  name: "Right",
  components: {
    Box,
  },
};
</script>

<style>
.right {
  width: 40%;
  height: 300px;
  /* background-color: orange; */
  float: left;
  text-align: center;
}
</style>