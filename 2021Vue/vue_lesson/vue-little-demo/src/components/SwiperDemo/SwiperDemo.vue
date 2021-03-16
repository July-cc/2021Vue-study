<template>
  <div class="banner">
    <h2>轮播图</h2>
    <img
      :class="{ active: activeIndex === index }"
      v-for="(img, index) in imgArr"
      :key="img.id"
      :src="img.imgSrc"
      alt=""
    />
    <div class="left-arrow" @click="leftarrow">⬅︎</div>
    <div class="right-arrow" @click="rightarrow">➤</div>
    <div class="pagination">
      <li
        :class="{ active: activeIndex === num - 1 }"
        @click="activeIndex = num - 1"
        v-for="num in imgArr.length"
        :key="num"
      ></li>
      <!-- 事件传参方法 事件绑定的时候直接传递即可-->
      <!-- 事件函数内获取事件对象,如果绑定函数没有传递额外的参数,那么事件的第一个参数默认就会是 事件对象(event) -->
      <!-- 如果绑定函数的时候传递的参数,那么事件内想要使用事件对象的话,绑定的时候用 $event 当做实参传递使用 -->
      <!-- <li
        :class="{ active: activeIndex === num - 1 }" @click="changeActiveIndex(num - 1,$event)"
        v-for="num in imgArr.length"
        :key="num"
      ></li> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperDemo",
  data() {
    return {
      imgArr: [
        {
          id: 1,
          imgSrc:
            "https://img30.360buyimg.com/pop/s1180x940_jfs/t1/168418/6/12184/59941/604b2ad6E445a22f5/275a52f611453cb7.jpg.webp",
        },
        {
          id: 2,
          imgSrc:
            "https://img13.360buyimg.com/pop/s1180x940_jfs/t1/166807/10/13490/74503/60506da9E9a4c21cd/9728493e74a4b78e.jpg.webp",
        },
        {
          id: 3,
          imgSrc:
            "https://img11.360buyimg.com/pop/s1180x940_jfs/t1/155528/27/20653/57960/603da32dE09998612/5689d335e6a19f1f.jpg.webp",
        },
        {
          id: 4,
          imgSrc:
            "https://imgcps.jd.com/ling4/100008348542/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6ec/cb65b30a/cr/s/q.jpg",
        },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    leftarrow() {
      //   if (this.activeIndex < 1) {
      //     this.activeIndex = this.imgArr.length - 1;
      //   } else {
      //     this.activeIndex--;
      //   }
      const { activeIndex } = this;
      if (activeIndex > 0) {
        this.activeIndex--;
      } else {
        const { imgArr } = this;
        this.activeIndex = imgArr.length - 1;
      }
    },
    rightarrow() {
      //   if (this.activeIndex > this.imgArr.length - 2) {
      //     this.activeIndex = 0;
      //   } else {
      //     this.activeIndex++;
      //   }
      const { activeIndex, imgArr } = this;
      if (activeIndex === imgArr.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
    },
    changeActiveIndex(index) {
      this.activeIndex = index;
    },
    // changeActiveIndex(index,e){
    // console.log(e);
    //     this.activeIndex = index
    // }
  },
};
</script>

<style scpoed>
.banner {
  width: 590px;
  height: 470px;
  position: relative;
  margin: 0 auto;
}
.banner img {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0;
}
.banner img.active {
  z-index: 1;
  opacity: 1;
}
.banner .left-arrow,
.banner .right-arrow {
  width: 40px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: calc(50% - 40px);
  z-index: 2;
  font-size: 20px;
  color: cyan;
  cursor: pointer;
  user-select: none;
}
.banner .left-arrow {
  left: 0;
}
.banner .right-arrow {
  right: 0;
}
.banner .pagination {
  position: absolute;
  z-index: 2;
  margin: 0;
  padding-left: 0;
  list-style: none;
  left: 20px;
  bottom: 20px;
}
.banner .pagination li {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  margin-right: 10px;
  float: left;
  cursor: pointer;
}
.banner .pagination li.active {
  background-color: red;
}
</style>