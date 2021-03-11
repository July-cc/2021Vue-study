#$\color{red}{倒计时  Demo}$

```java
  <h2>倒计时</h2>
  <div class="time"></div>
```

- **倒计时功能,已知结束的时间 16:00**

```java
    var targetHour = 15
    var targetMinute = 30
    var targetSecond = 35
    function showTime() {
      var nowDate = new Date()
      var hour = nowDate.getHours()
      var minute = nowDate.getMinutes()
      var second = nowDate.getSeconds()
      // 将两个时间换算成秒数再做差  然后就得到剩余的总秒数了  将该秒数进行换算并展示即可
      var targetSeconds = targetHour * 3600 + targetMinute * 60 + targetSecond
      var nowSeconds = hour * 3600 + minute * 60 + second
      var showSeconds = targetSeconds - nowSeconds
      if (showSeconds === 0) {
        clearInterval(run)
        $('.time').text('倒计时结束')
        return
      }
      var showHour = Math.floor(showSeconds / 3600)
      var showMinute = Math.floor(showSeconds % 3600 / 60)
      var showSecond = showSeconds % 3600 % 60
      $('.time').text(`${showHour}:${showMinute}:${showSecond}`)
    }
    showTime()
    var run = setInterval(showTime, 1000);
```

- **使用 clearInterval 停止 setInterval**
- **使用 clearInterval(setInterval 的返回值)**
- **将 setInterval 的返回值赋值给一个变量 使用 clearInterval 停止该变量即可**
