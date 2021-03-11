#$\color{red}{运算demo}$

```html
<input class="num1" type="text" />
<input class="sign" type="text" />
<input class="num2" type="text" />
<button class="result">=</button>
<input class="res" type="text" />
```

```jav
<script src="./js/jquery-3.4.1.min.js"></script>
```

- **输入数字 1 和 数字 2**
- **点击 = 输出结果 1.点击事件 2.获取数值 和 符号 3.判断符号是什么符号然后计算，之后将结果给 input**

```java
$('.result').click(function () {
      var num1 = $('.num1').val()
var num2 = $('.num2').val()
      var sign = $('.sign').val()
switch (sign) {
// sign === '+' 判断
case '+': $('.res').val(num1 * 1 + num2 * 1); break;
// break 跳出 或 结束当前 switch 语句
case '-': $('.res').val(num1 - num2); break;
}
})
```
