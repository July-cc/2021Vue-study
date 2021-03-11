#$\color{red}{for循环}$

```css
.banner {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 310px;
}

.banner > img {
  position: absolute;
  width: 600px;
  transition: left 0.5s;
}

.banner > img:nth-child(1) {
  left: 0px;
}

.banner > img:nth-child(2) {
  left: 200px;
}

.banner > img:nth-child(3) {
  left: 400px;
}

.banner > img:nth-child(4) {
  left: 600px;
}

.banner > img:nth-child(5) {
  left: 800px;
}
```

```html
<div class="banner">
  <!-- img*5[src='./img/slide-$.jpg'] -->
  <img src="./img/slide-1.jpg" alt="" />
  <img src="./img/slide-2.jpg" alt="" />
  <img src="./img/slide-3.jpg" alt="" />
  <img src="./img/slide-4.jpg" alt="" />
  <img src="./img/slide-5.jpg" alt="" />
</div>
```

- **讨论要实现效果 实现第三张图片出现 修改所有人的 left**
- **循环 反复做同一件事 ---> 让有顺序的人做重复的事**

```java
    $('.banner > img').mouseenter(function () {
      // 五件事都是修改left
      var ind = $(this).index()
      for (var i = 0; i < 5; i++) {
        // 1 张图   0
        // 2 张图   100
        // 3 张图   200
        // 4       800
        // 5        900
        if (i <= ind) {
          // 左边的
          $('.banner > img').eq(i).css('left', 100 * i)
        } else {
          $('.banner > img').eq(i).css('left', 600 + (i - 1) * 100)
        }
      }
    })
    $('.banner > img').mouseleave(function () {
      for (var i = 0; i < 5; i++) {
        $('.banner > img').eq(i).css('left', i * 200)
      }
    })
```

```java
 for 循环语句
 for (var i = 0; i < 10; i++) {
 console.log(i)
 }
 do while
 var i = 0
 while (i < 10) {
 i++;
 console.log(i)
 }
 do {
 i++
 console.log(i)
 } while (i < 10);
```
