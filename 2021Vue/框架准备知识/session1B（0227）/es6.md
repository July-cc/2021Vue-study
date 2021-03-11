## es6 知识

#### let 和 const

创建变量的新语法,替换原来的 var

- const 适用于创建常量，不可修改

##### let const 与 var 的区别

- 自带块级作用域 {} 代表块
- 没有变量声明提升
- 不允许重复声明
- 定义的变量不属于顶层对象的属性

#### 变量的解构赋值

- 数组的解构赋值
  ```js
  let arr = [131, 182, 156]
  let [num1, num2, num3] = arr
  console.log(num1)
  console.log(num2)
  console.log(num3)
  ```
- 对象的解构赋值
  ```js
  let obj = {
    username: "小黑",
    userage: 20,
    sex: "女",
  }
  // 可以换名可以设置默认值
  let { userage: age, username, sex = "男" } = obj
  console.log(username, age, sex)
  ```
- 字符串的解构赋值
  ```js
  let str = "hello"
  let [a, b, c, d, e] = str
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  ```
- 函数参数的解构赋值
  ```js
  var obj = {
    username: "大白",
  }
  function say({ username }) {
    // let {username} = obj
    const str = "我叫" + username
    console.log(str)
  }
  say(obj)
  ```

#### 字符串的扩展

- 模板字符串(高级字符串拼接)

  ```js
  let goods = {
    goodsName: "iphone12",
    price: 10000,
  }
  // let htmlStr = '<div><h4>' + goods.goodsName + '</h4><span>' + goods.price + '</span></div>'
  let htmlStr = `<div class='goods'><h4>${goods.goodsName}</h4><span>${goods.price}</span></div>`
  console.log(htmlStr)
  ```

- padEnd padStart 填充
  ```js
  let str = "hello"
  let newStr = str.padEnd(8, "a")
  console.log(str)
  console.log(newStr)
  ```

#### 数组的扩展

- flat 数组的扁平化处理
  ```js
  let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]]
  console.log(arr.flat()) //不写就代表扁平化1层
  console.log(arr.flat(2)) //括号里数字填写几就是扁平化几层
  console.log(arr.flat(Infinity)) //不论多少层全部扁平化
  ```
- flatMap 数组的扁平化处理
  ```js
  let arr1 = [1, 2]
  let newArr1 = arr1.map(function (ele) {
    return [ele, ele * 2]
  })[([1, 2], [2, 4])]
  console.log(newArr1)
  let newArr1 = arr1.flatMap(function (ele) {
    return [ele, ele * 2]
  })
  console.log(newArr1)
  ```
- fill 根据指定的数据对数据进行初始化
  ```js
  let arr2 = [1, 2, 3]
  原来的被修改了
  console.log(arr2.fill(""))
  console.log(arr2.fill(7, 1, 2))
  ```

#### 对象的扩展

- 属性的简介表示法
  ```js
  let name = "大白"
  let age = 10
  let obj1 = {
    // 创建对象的时候如果属性值所代表的变量名和属性名相同的话可省略
    name,
    age,
    say() {
      console.log(this.name)
    },
  }
  console.log(obj1)
  ```

#### 扩展运算符 ...

- 数组的扩展
  ```js
  let arr = [1, 2, 3, 4, 5]
  //let arr1 = arr
  let arr1 = [...arr]
  arr1.push(6)
  console.log(arr)
  console.log(arr1)
  console.log(arr1 === arr)
  控制台分别输出什么
  ```
- 对象的扩展

  ```js
  let obj = {
    a: 10,
    b: 20,
  }
  let obj1 = { ...obj }
  obj1.a = 100
  console.log(obj)
  console.log(obj1)

  let goodsArr = [
    {
      name: "手机",
      price: 1000,
      id: 1,
    },
    {
      name: "平板",
      price: 2000,
      id: 2,
    },
    {
      name: "笔记本",
      price: 3000,
      id: 3,
    },
  ]
  let newArr = [...goodsArr]
  newArr[1].price = 2500
  console.log(newArr[1])
  console.log(goodsArr[1])
  //控制台输出 newarr === goodsArr 是相等的，都是2500元 拷贝的只是外面一层大壳子，里面的内容发生改变后原来的和拷贝的都会发生变化
  ```

#### 函数的扩展

- 函数参数的默认值
  ```js
  //函数的新写法 箭头函数
  // 箭头函数没有 function 不能是用 function 创建只能存储到变量中
  let add = (x, y = 20) => x + y
  let res = add(10)
  console.log(res)
  // 箭头函数分为箭头左右和右侧
  // 左侧是参数部分 默认使用 () 包裹，当只有一个参数的时候可以省略 () 直接写参数
  // 右侧是执行部分 默认使用 {} 包裹, 当函数右侧只有返回值的时候可以省略 {} 直接写返回值也不需要 return。
  // 当函数只返回对象的时候可以直接 ({})
  ```
- rest 参数
  ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用 arguments 对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

  ```js
  function fun(a, ...rest) {
    // rest 叫剩余参数
    console.log(rest)
  }
  fun(1, 2, 3, 4)

  function add(...values) {
    let sum = 0
    for (var val of values) {
      sum += val
    }
    return sum
  }
  console.log(add(2, 5, 3)) // 10
  ```

- 箭头函数 this 指向

  ```js
  // 箭头函数的普通函数的 this 指向问题
  // 普通函数的this指向 谁调用的就指向谁
  // 箭头函数的 this 创建的时候就定义好了
  let obj = {
    a: 10,
    fun: function () {
      console.log(this)
    },
  }
  let obj = {
    a: 10,
    fun: () => {
      console.log(this)
    },
  }
  obj.fun()
  let fun1 = obj.fun
  fun1()
  // 对象内定义方法的时候如果方法内部使用了 this 那么这个方法不能使用 箭头函数定义

  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    sayPoint = () => {
      console.log(`我是坐标(${this.x},${this.y})`)
    }
  }
  let p = new Point(10, 100)
  p.sayPoint()

  let arr = [1, 3124, 145, 123, 1225, 6, 7]
  let newArr = arr.filter(function (ele) {
    return ele < 10
  })
  let newArr = arr.filter((ele) => ele < 10)
  console.log(newArr)

  import { firstName } from "./js/es6.js"
  console.log(firstName)
  ```

#### symbol 数据类型

- ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
-

```js
let s1 = Symbol("foo")
let s2 = Symbol("foo")
console.log(s1)
console.log(s1.description)
console.log("hello")

let x = Symbol()

let obj = {}
let a = "say"
obj[a] = function () {}
// obj.a 输出的是a方法 obj[a] 输出的是say方法
obj[x] = "Hello!"
console.log(obj)
```

#### set 数据结构

- ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
  Set 本身是一个构造函数，用来生成 Set 数据结构。

  ```js
  let arr = [1, 2, 3]
  let arr1 = new Array(1, 2, 3)
  console.log(arr === arr1)
  console.log(arr1)

  let re = /^[0-9]{9}$/
  let re1 = new RegExp("^[0-9]{9}$")
  console.log(re)
  console.log(re1)

  const s = new Set()
  // set 内部不允许出现重复的成员
  // add 是 set 数据结构的一个方法，该方法的作用是向内部添加新的成员
  // size 属性返回set的个数
  // delete 方法
  // has 方法
  // clear 方法
  // forEach 方法
  ;[2, 3, 5, 4, 5, 2, 2].forEach(function (ele) {
    s.add(ele)
  })

  console.log(s)

  let newS = new Set([1, 2, 3, 4, 1])
  console.log(newS.size)
  应用
  数组去重
  let arr = [1, 23, 1, 412, 31, 23, 457, 5, 42, 2, 2, 2, 2, 2]
  console.log([...new Set(arr)])
  ```

#### class 类

- class

  ```js
  function Point(x, y) {
    this.x = x
    this.y = y
  }

  Point.prototype.toString = function () {
    return `(${this.x},${this.y})`
  }

  var p = new Point(1, 2)
  console.log(p)
  console.log(p.toString())
  let _color = "red"
  class Point {
    // 类的内部默认只能写方法
    // 类的内部必须存在 constructor 函数,当 new 的时候 constructor 函数被触发，该方法默认返回实例对象(this)
    // 除了 constructor 函数之外的函数都相当于公有方法
    z = 50
    constructor(x, y) {
      this.x = x
      this.y = y
      // this.z = 50
      console.log("constructor 函数执行了")
    }
    // get 给 color 属性定义初始值
    get color() {
      return _color
    }
    // set 给 color 属性设置值，该函数会在修改 color 属性的时候触发
    set color(new_value) {
      _color = new_value
    }
    toString() {
      return `(${this.x},${this.y})`
    }
    // 静态方法
    // 只有类本身可以访问，不会生成到类的实例上,只能通过类访问
    static sayHello() {
      console.log("hello")
    }
  }
  Point.prototype.say = function () {
    console.log("我是坐标")
  }
  let p = new Point(1, 2)
  p.color = "xxxx"
  console.log(p)
  console.log(p.toString())
  Point.sayHello()

  class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    sayPoint() {
      console.log(`我是坐标(${this.x},${this.y})`)
    }
  }
  let p = new Point(100, 20)
  console.log(p)
  p.sayPoint()
  ```

#### class 的继承

```js
// 类的继承是用关键字 extends
class ColorPoint extends Point {
  // 需要继承 Point 内的所有内容
  constructor(x, y, color) {
    // 当继承的类内部创建了 constructor 函数，那么该函数内部必须是使用 super 方法调用父类
    super(x, y)
    this.color = color
  }
}
let colorP = new ColorPoint(100, 200, "red")
console.log(colorP)
colorP.sayPoint()
```

#### es6 模块

##### 使用 webpack 编译打包 es6 模块语法

- 安装 node
- 安装命令行工具 gitbash
- 新建一个文件夹(webpack-es6)
- 在文件夹内打开命令行工具执行 `npm init -y` 命令。该命令的作用是将这个文件夹变成 node 项目，从而可以让这个项目使用 npm 下载对应的包。
- 项目内安装 webpack 执行 `npm install webpack webpack-cli --save-dev`
- 在项目的根目录下新建 `index.html` `src/index.js` `a.js`，在 a.js 内写一些 es6 模块代码(导出变量), index.js 内导出 a.js 模块内的导出。
- 在项目根目录下打开命令行工具执行 `npx webpack` 命令。该命令的默认作用是将项目下的 src 文件夹下的 index.js 打包编译到 dist 文件夹下的 main.js,然后 index.html 引入打包好之后的 js 文件，在浏览器中查看。
- 如果更改 index.js 以及 a.js 需要重新执行 npx webpack 编译

##### es6 模块的导入导出

- 命名
- 默认

```js
//导出
// 模块导出了一个变量 firstName
let lastName = "大"
export let firstName = "袁"
export { lastName }
export { lastName as laName }

let a = 10
let b = 20
let c = 30
let d = 10000
export { a, b, c }
export default d
// es6 模块的导出
// 1.命名导出
// 关键字  export
// 可以导出多次
// 2默认导出
// 关键字 export default
// 只能使用一次

// 导入
// 导入a.js模块导出的变量
// 当导入模块的时候，如果模块是js文件可省略后缀
// import {firstName, lastName, laName} from './a'
// console.log(firstName)
// import {a, b, c} from './a'

import * as all from "./a"
import x from "./a"
console.log(all)
console.log(all.a)
console.log(all.b)
console.log(all.c)
console.log(all.default)
console.log(x)
// es6 模块的导入
// * 表示导出的所有
// as 是换名字
// 1.命名导入
// 导入的名称和导出的名称必须一致
// 2.默认导入
// 导入的时候随意命名
```

##### promise 异步解决方案

```js
// promise 异步解决方案
// new Promise 的时候，传递的参数会自动执行
const promise = new Promise(function (resolve, reject) {
  console.log("异步操作执行中")
  setTimeout(() => {
    // 异步完成
    console.log("异步操作执行完毕")
    resolve()
  }, 1000)
})
promise.then(() => {
  console.log("异步执行完毕之后，执行其他的操作")
})
const promise = new Promise(function (resolve, reject) {
  console.log("异步操作执行中")
  let a = 10
  setTimeout(() => {
    // 异步完成
    a++
    if (a > 10) {
      console.log("异步操作执行成功")
      resolve("成功啦")
    } else {
      console.log("异步操作执行失败")
      reject("出错啦")
    }
  }, 1000)
})
// then 传递的函数其实是传递给了 promise 中的 resolve
// catch 传递的函数其实是传递给了 promise 中的 reject
promise
  .then((res) => {
    console.log("异步执行完毕之后，执行其他的操作")
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// 封装
let promiseFun = () => {
  return new Promise(function (resolve, reject) {
    console.log("异步操作执行中")
    let a = 10
    setTimeout(() => {
      // 异步完成
      a++
      if (a > 10) {
        console.log("异步操作执行成功")
        resolve("成功啦")
      } else {
        console.log("异步操作执行失败")
        reject("出错啦")
      }
    }, 1000)
  })
}
promiseFun()
  .then((res) => {
    console.log("异步执行完毕之后，执行其他的操作")
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// 使用 promise 封装一下原生 ajax get 请求
// getPosts 就是一个原生的 get 请求方法
let getPosts = (url) =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()
    // onreadystatechange 是属于监听请求的整个过程， onload 是属于监听请求是否成功
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 请求成功
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject("出错啦")
      }
    }
  })
getPosts("http://localhost:3008/posts")
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

// 先请求第一个文章数据，请求成功之后再请求第二个文章数据，然后再请求第三个文章数据
let getPosts = (url) =>
  new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()
    // pending 状态 异步进行中
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // fulfilled 状态 异步结束 已成功了
        resolve(JSON.parse(xhr.responseText))
      } else {
        // rejected 状态 已失败了
        reject("出错啦")
      }
    }
  })
// .then .catch 两个方法是属于 promise 构造函数原型下的方法
// 正确的都可以请求到数据，错误的则会从 catch 下一个 then 方法请求到数据
getPosts("http://localhost:3008/posts/1")
  .then((res) => {
    console.log(res)
    // then 方法内的函数如果设置返回新的 promise 实例的话，那么就相当于给 then 方法设置了返回值
    return getPosts("http://localhost:3008/posts/2")
  })
  .catch((err) => {
    console.log(err)
    // catch 方法也会默认返回一个新的 promise 实例，这个新的 promise 实例内部什么都没有，会自动向下执行 then 方法
  })
  .then((res) => {
    console.log(res)
    return getPosts("http://localhost:3008/posts/3")
  })
  .then((res) => {
    console.log(res)
  })

// .finally() 方法 请求结束之后执行的
getPosts("http://localhost:3008/posts/1")
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    console.log("请求结束之后执行的")
  })

// Promise.all  方法  并发 promise
let allP = Promise.all([
  getPosts("http:localhost:3008/posts/1"),
  getPosts("http:localhost:3008/posts/2"),
  getPosts("http:localhost:3008/posts/3"),
])
allP.then((res) => {
  // 全部成功，获取到的是所有 resolve 函数的参数集合
  console.log(res)
})
```
