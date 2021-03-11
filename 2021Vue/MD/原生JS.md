#$\color{red}{原生JS}$
##html + css + js(jquery vue react 小程序)

- jquery 有原生 js 编写的工具库 js 版本
- 严格区分大小写的
- 原生 js

##基础语法

**1. 变量 存储数据的容器**

- a.变量的声明 (必须声明，不允许重复声明) var
- b. 命名规范 (只能以 字母 下划线 $ 开头 ，只能以 字母 下划线 $ 数字组成,不能以关键字和保留字命名 ) 驼峰方式
- c. 变量的声明提升 (将变量的声明过程提升到当前 script 或者 function 的最前面 赋值过程不提升)

```java
var username = 10
var num2 = 100
console.log(num1)
console.log(a) // 结果是 undefined 变量声明了 未附初始值
 var a = 10
```

**2. 数据类型 (数字 number 字符串 string 布尔值 boolean null undefined 对象 object )**

```java
   var num = 1.2131
   var str = 'hello'
   var bool = false

   var cat = {
   name: '小黑',
   age: 3,
   say: function () {
   console.log('喵喵喵')
   }
   }
   $('span:nth-child(' + num + ')').css('color', 'red')
   var num = $('span:eq(1)').text()
   console.log(num)
   var res = 100 _ num
   var res1 = 200 _ num
```

**3. 数据类型之间的转换**

```java
   var num = \$('span:eq(1)').text()
```

- 一般来说从页面上获取的值都是字符串类型 除了索引值

- 数据类型的检测 typeof

```java
    console.log(typeof num)
```

- 隐式转换 乘法 除法 减法 取余 会自动将符号左右的值转换成数字类型再进行运算
- 加法如果左右出现了字符串的话会自动将另一个不是字符串的值转化成字符串再做拼接

```java
  var res = 100 + (num - 3)
  console.log(res)
```

- 将字符串转化成数字 parseInt parseFloat Number 方法
- 用法 parseInt(值) parseFloat(值) Number(值) 将该值转化成数字
- 转化规则 parseInt(值) parseFloat(值) 一个字符一个字符的转化只要满足数字要求就转化不满足就停止，第一个就不满足直接得结果 NaN (不是一个数字)
- 转化规则 Number 直接整体看能转就转换，不能直接得到 NaN

```java
  var num1 = parseInt(num)
  console.log(typeof num1)
  var str = true
  var num2 = parseInt(str)
  console.log(num2)
```

- 将数字转化成字符串 Sring(值) 值.toString()
  ```java
  var num = 10
  var res = String(num)
  var res = num.toString()
  console.log(typeof res)
  ```
- 转化成布尔值 Boolean(值) 隐式的布尔转换 if 语句 条件内的任何内容都会被转化成布尔值
- 只有一下会转化成 false (0 '' null undefined NaN )
  ```java
  var num = 100
  var bool = Boolean(num)
  console.log(bool)
  var num = ' '
  if (num) {
  console.log('出门戴口罩')
  } else {
  console.log('不带')
  }
  ```

**4. 运算符**

- 数学运算 + - \_ / %（取余

```java
    var num = 5765 % 3600
    console.log(num)
```

- 比较运算 > < >= <= == === != !==
- == 和 === 前面是比较值后面是比较值和数据类型
- 以后的判断相等要用 ===

```java
  if (10 !== '10') {
  console.log('测试')
  }
  var a = 10
  if (100 > a > 20) { } 错误的
```

- 逻辑运算 与 && 或|| 非 !

```java
var a = 10
if (a < 100 && a > 20) {}
```

- 自增自减 ++ -- ++ 和 -- 在数值的右侧(a++)先赋值后运算 反之先运算后赋值

```java
var a = 10
// var b = ++a
a++
console.log(a)
```

- 简写 += -= \_= /=

```java
var a = 10
a = a + 2
a += 2
console.log(a)
```

- 位运算符 >> 二进制运算
- 转义符 \ 将 js 带语义的符号转化成没有意义的

```java
console.log('\'')
```

- 语句 分支(if switch) 循环(do while for )

```java
    if
    var num = 77
    0-60  60-80  80-90  90-100
    if(条件1){

    }else if(条件2){

    }。。。
    else{

    }
```

- 只要一个条件成立了其他的就不会触发了

  ```java
  if (num < 60) {
    console.log('不及格')
  } else if (num < 80) {
    console.log('及格')
  } else if (num < 90) {
    console.log('良好')
  } else {
    console.log('优秀')
  }
  ```

- 变量 数据类型 数据类型的转换 运算符 语句
- switch 用来判断多个相等情况

```java
  var day = 1
  语法 switch(判断的值)
  switch (day) {
  // 当 day 等于 1 的时候
  case '1': console.log('星期一'); break;
  case 2: console.log('星期二'); break;
  default: console.log('上述条件都不成立');
  }
```

- 循环语句
- for
- for(三件事 1.次数初始值 2.次数限制 3.自增或自减){ 每次执行的内容 }
- 执行顺序 先读取初始值 0 看条件显示是否成立 成立的话直接执行 花括号的内容，接下来进行自加然后判断条件是否成立成立执行 花括号的内容。反复执行该操作直到条件不成立
- for 循环里面的关键字 continue 跳出当前次循环 break 跳出当前的 for 语句

```java
for (var i = 10; i > 0; i--) {
if (i === 5) {
continue
}
console.log(i)
}
? 控制台输出
```

- 使用 for 循环实现 1+。。。+ 100 的结果 累加的算法

```java
var res = 0
for (var i = 1; i <= 100; i++) {
res += i; //res = res + i
}
console.log(res);
```
