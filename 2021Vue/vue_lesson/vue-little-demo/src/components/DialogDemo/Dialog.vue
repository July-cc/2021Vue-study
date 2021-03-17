<template>
  <div v-show="visibility" class="dialog-wrap">
    <!-- 遮罩 -->
    <div class="mask"></div>
    <!-- 弹窗 -->
    <div class="dialog">
      <span>x</span>
      <button @click="visibility = false">取消</button>
      <button>确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  // prop 的验证 类型检查
  // 接收 prop 的时候需要使用对象形式
  //   props:["visibility"],
  props: {
    visibility: {
      // type 值的类型 非必须
      // default 默认值 默认值是对象类型的时候必须使用函数返回该对象 非必须
      // requierd 必须传递 非必须
      type: Boolean,
      default: false,
      requierd: true,
      // validator 自定义验证函数 非必须
      // validator(value){
      //    return ["1","2"].includes(value)
      //   // value 指的就是传递过来的值
      // }
    },
  },
  updated() {
    console.log("dialog 更新");
  },
};
</script>

<style>
.dialog-wrap {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.dialog-wrap .mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog-wrap .dialog {
  width: 40%;
  position: absolute;
  height: 200px;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  top: 15vh;
}
</style>