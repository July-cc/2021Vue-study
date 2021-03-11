#$\color{red}{抽奖  Demo}$

- **开始标签内部写的所有东西都称之为标签的属性**

```html
<button class="btn">按钮(回答问题)</button>
<div class="show"></div>
```

```java
    // 有关抽奖
    var arr = ['iphone11', 'iphone12', 'iphone13', 'iphone14', 'iphone15']
    // 随机数  通过内置对象 数学对象  Math
    // 0~1 的随机数不包括 0 和 1   Math.random()
    // 下舍   Math.floor(值)    1.0910980179767   ----->   1
    // 上进   Math.ceil(值)     1.0910980179767   ----->   2
    // 四舍五入 Math.round(值)   1.3  ----  1     1.5 ---- 2
    // 获取一个 0 - 4 的随机整数  包括 0 和 4

    // 三个问题 只能点击按钮三次 每点击一次页面上输出一个奖品，第二次输出前面的奖品名还在

    var studentArr = []
    $('.btn').click(function () {
      var randomNum = Math.floor(Math.random() * arr.length)
      studentArr.push(arr[randomNum])
      $('.show').text(studentArr.join())
      // 将被选到的元素在数组中删除   ---  splice(a,b)
      arr.splice(randomNum, 1)
      $(this).attr('disabled', false)
      console.log(arr)
    })
```
