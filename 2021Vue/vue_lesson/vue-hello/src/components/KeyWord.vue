<template>
  <span class="key_word">#{{word}}</span>
</template>

<script>
export default {
  name: "KeyWord",
  props: ["word"],
};
</script>

<style>
.key_word{
    color:#ccc;
    cursor: pointer;
    user-select: none;
}
.key_word:hover{
    color:teal;
    text-decoration: underline;
}
</style>