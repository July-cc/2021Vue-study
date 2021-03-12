<template>
  <div class="left">
    <h2>我是左侧</h2>
    <Leco />
    <Lect />
  </div>
</template>

<script>
import Leco from "./Leco";
import Lect from "./Lect";
export default {
  name: "Le",
  components: {
    Leco,
    Lect,
  },
};
</script>

<style>
.left {
  width: 60%;
  height: 300px;
  background-color: red;
  float: left;
  text-align: center;
}
</style>