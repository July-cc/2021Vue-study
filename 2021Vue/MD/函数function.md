#$\color{red}{函数  Function}$

###函数 function

- **函数: 一组语句块的集合 功能**
- **创建 function(声明) 函数名 () { 功能 } ----> 函数式创建**
- **函数声明的时候不执行 调用函数的时候才会执行某个功能**
- **如何调用： 函数名()**
- **函数的参数:(实现功能需要的材料)**
- **函数的返回值: (将加工好的成品反馈回去)**
- **函数式创建函数时会有函数声明提升 将整个函数提升**
- **功能: 实现两个数的相加**

```java
function add(num1, num2) {
num1 num2 是形参并且参数是有先后顺序的
var res = num1 + num2
return res
}
```

- **需要传递参数 这个参数叫 实参 顺序传递**
- **如何获取返回值 函数调用之后调用的整体语句就会直接变成函数的返回值 直接使用即可**
- **变量式创建**

```java
    var add = function (num1, num2) {
      var res = num1 + num2
      return res
    }
    var result = add(10, 20)
    console.log(result)
```

- **函数 实现数字运算 提供 两个数字 以及一个符号**

```java
     var jisuan1
     jisuan1()
     //jisuan1 is not a function  意思是 jisuan1 不是一个函数不能加()  不能调用
     jisuan1 = function () {
       console.log(1)
     }

     jisuan2()
     function jisuan2() {
       console.log(2)
     }


     function jisuan(num1, sign, num2) {
       var res = 0
       switch (sign) {
         case '+':
           res = num1 + num2
           break;
         case '':
           res = num1 - num2
           break;
         case '*':
           res = num1 * num2
           break;
         case '/':
           res = num1 / num2
           break;
       }
       return res
     }
     console.log(jisuan(1, '+', 2))
```

- **函数的作用域**
- **js 内分成两个作用域**
  - **全局作用域(当前页面)**
  - **局部作用域(函数内部)**
    - **局部作用域声明的内容全局不可以访问，反之可以访问也可以修改**
    - **作用域嵌套的话内层作用域可以访问外层作用声明的内容，反之不可以**
    - **同级作用域不能相互访问**

```java
     $('.test').click(function () {
       var a = 10
       function add() {
         var b = 20
         console.log(a)
       }
       add()
       console.log(b)
     })

     if (true) {
        //创建了一个全局变量 aa
       var aa = 10
     }
     //访问全局变量 aa
     console.log(aa)

     var a = 100
     function test(a) {
        //函数参数(形参)相当于在函数内部声明一个变量
        //当函数调用的时候传递的实参相当于给这个变量赋值
       a = a + 1000
       console.log(a)
     }
     test(1)
```

- **函数: 功能复用**
