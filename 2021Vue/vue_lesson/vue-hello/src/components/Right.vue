<template>
  <div class="right">
    <h2>我是右侧</h2>
    <Box />
    <Box />
    <Box />
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
  background-color: orange;
  float: left;
  text-align: center;
}
</style>