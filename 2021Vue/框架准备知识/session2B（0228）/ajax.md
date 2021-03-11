### ajax

异步的 javascript 请求，再不重新加载整个页面的情况下，向服务器发送请求获取数据进而更新部分网页的艺术。

```js
// https://www.vue-js.com/api/v1/topics
// 后台服务器数据接口 返回首页文章列表数据20条
// 想要获取后台数据
// 1. 请求类型
// 2. 请求地址
// 3. 是否支持跨域
// 4. 返回值的模版
// 需要后台提供对应的接口文档
```

#### ajax 的形式

- 原生 ajax

```js
// 原生 ajax
// XHR
// 创建请求对象

// GET 请求
let xhr = new XMLHttpRequest()
// open 方法创建相应请求,需要提供请求的类型，请求的地址，以及请求是否异步(必须异步) true 就是异步(可以省略)
// 类型  GET  POST  DELETE  PUT PATCH ...
// 以后的所有请求都是服务器向服务器发送请求
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts') //100篇文章
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1') // ID为1的文章
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments') // ID为1的文章评论
xhr.open('GET', 'http://jsonplaceholder.typicode.com/comments') // 网站所有评论
// GET 传递参数(?postId=1) 可以直接在请求地址后添加 ? 查询条件
xhr.open('GET', 'http://jsonplaceholder.typicode.com/comments?postId=1') // 网站所有评论中 postId=1 的评论
// // 连续请求需要加 &（https://www.vue-js.com/api/v1/topics?tab=good&limit=10）
// // send 方法将创建好的请求发出
xhr.send()
// // onreadystatechange 事件
// // 该事件实时监听请求过程，在请求的各个阶段反馈信息
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status === 200){
//     // 请求成功相应就绪，可以获取后台数据
    console.log(JSON.parse(xhr.responseText)[0].title)
//     // 获取的数据类型是 json 字符串类型
//     // json 数据和我们 js 的对象很像
//     // 我们需要将其转化成对象类型方便我们操作
//     // JSON.parse(json串) 将 json 串解析成对象
    let jp = JSON.parse(xhr.responseText)
    console.log(jp);
//     // JSON.stringFy(对象) 将对象转化成 json 串
    let js = JSON.stringify(jp)
    console.log(js);
//   }
// }

// POST 请求
let xhr = new XMLHttpRequest()
// 创建一篇新的文章
xhr.open("POST", "http://jsonplaceholder.typicode.com/posts")
//  在发出 post 请求的时候往往需要向后台传递数据
//   {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
// 向后台发送新的数据的时候不需要传递 id 属性
// 传递数据的时候必须以 json 字符串形式传递 （JSON.stringify()）
// json 格式的文件，和对象语法基本一样， 但是内部的所有内容必须是双引号，除数字和布尔值之外，每一项的最后一项不可以加逗号，不能写注释
// json 文件还被当作 ajax 请求传递数据的格式
xhr.send(
  JSON.stringify({
    "userId": 8,
    "title": "新建的ajax",
    "body": "新建的 ajax 小试牛刀",
  })
)

let xhr = new XMLHttpRequest()
xhr.open("POST", "http://localhost:3008/posts")
// // 使用原生的 ajax 发送 post 请求的时候，需要设置请求头（告知后台我传递的数据类型是 json）
xhr.setRequestHeader('content-type','application/json')
xhr.send(
  JSON.stringify({
    title: "全栈 基础教程",
    author: "小袁",
  })
)
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status >= 200){
    let jp = JSON.parse(xhr.responseText)
    console.log(jp);
  }
}

let xhr = new XMLHttpRequest()
xhr.open("GET", "http://localhost:3008/posts?id=1&id=2")
xhr.open("GET", "http://localhost:3008/posts?_page=1&_limit=5")
xhr.open("GET", "http://localhost:3008/posts?_page=2&_limit=5")
xhr.send()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status >= 200) {
    let jp = JSON.parse(xhr.responseText)
    console.log(jp)
  }
}
```

- jquery ajax

```js
// jquery ajax
// $.ajax() $.get $.post

// jquery 的 get 请求
// get 传递参数可以直接写在地址后面的 ? 部分，也可以直接写在 $.get 方法的参数内 当成对象传递
$.get("http://localhost:3008/posts", function (data) {
  console.log(data)
})
$.get("http://localhost:3008/posts?id=2", function (data) {
  console.log(data)
})
// 还可以写成箭头函数
$.get("http://localhost:3008/posts?id=2", (data) => {
  console.log(data)
})
$.get("http://localhost:3008/posts", { id: 3 }, function (data) {
  console.log(data)
})

// jquery 的 post 请求
$.post(
  "http://localhost:3008/posts",
  { title: "ajax 进阶", author: "老袁" },
  function (data) {
    console.log(data)
  }
)
$.post(
  "http://localhost:3008/posts",
  { title: "ajax 进阶 1", author: "老袁 1" },
  (data) => {
    console.log(data)
  }
)

// jquery 的 ajax GET请求
$.ajax({
  // 请求地址
  url: "http://localhost:3008/posts",
  // 请求类型
  type: "GET",
  // 请求传递的参数
  data: { id: 5 },
  // 请求成功的回调函数
  success: function (data) {
    console.log("请求成功，拿到数据")
    console.log(data)
  },
  // 请求失败的回调函数
  error: function (err) {
    console.log("请求失败")
    console.log(err)
  },
  // 请求完成的回调函数
  complete: function () {
    console.log("请求完成✅")
  },
})

// jquery 的 ajax POST请求
$.ajax({
  url: "http://localhost:3008/posts",
  type: "POST",
  data: {
    title: "react",
    author: "圆圆圆",
  },
  success(data) {
    console.log("post请求成功")
    console.log(data)
  },
  error(err) {
    console.log("post请求失败")
    console.log(err)
  },
  complete() {
    console.log("请求完成")
  },
})
```

- fetch 请求

```js
// fetch 请求
// get 请求
// 第一种写法
fetch("http://localhost:3008/posts")
  .then(function (response) {
    // response 请求成功的响应，响应里面有一个 json 方法
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  })

fetch("http://localhost:3008/posts", {
  method: "GET",
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((data) => console.log("Success:", data))

// post 请求
fetch("http://localhost:3008/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "小程序",
    author: "小黑",
  }),
  headers: new Headers({
    "Content-Type": "application/json",
  }),
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((data) => console.log("Success:", data))
```

- axios

```js
// axios 请求 专门发送请求的插件
// get 请求
axios
  .get("http://localhost:3008/posts")
  // 成功
  .then((res) => {
    // 返回的 res 并不是想要的数据，而是经过 axios 封装之后的数据，里面的 data 属性才是后台反馈的数据
    // 这个封装好的数据里面包含了一些信息
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
// 传递参数可以写在地址的 ? 部分
axios
  .get("http://localhost:3008/posts?id=2")
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
// 也可以写在第二个参数对象内，但是需要写在对象下的 params 属性下
axios
  .get("http://localhost:3008/posts", {
    params: {
      id: 1,
    },
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })
// post 请求
axios
  .post("http://localhost:3008/posts", {
    title: "vue vue",
    author: "小白",
  })
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err)
  })

// axios 并发多个请求 axios.all()
// 有两个请求我们想要在两个请求全部结束之后再去执行其他操作
axios.get("http://localhost:3008/posts?id=1").then((res) => {
  console.log(res, "我是先发的请求")
})
axios.get("http://localhost:3008/posts?id=6").then((res) => {
  console.log(res, "我是后发的请求")
})
// 这样的操作并不是谁先发的请求就先拿到谁的数据，也要看拿的数据大小，数据小的可能会先拿到

// 需要将多个请求添加到数组中，然后使用 axios.all([]) 方法并发
axios
  .all([
    axios.get("http://localhost:3008/posts?id=1"),
    axios.get("http://localhost:3008/posts?id=6"),
  ])
  .then((res) => {
    console.log(res)
    console.log(res[0])
    console.log(res[1])
    console.log(res[0].data)
    console.log(res[0].data[0])
    console.log(res[1].data)
    console.log(res[1].data[0])
  })

// 提取公共的 axios 配置
// 方案一
// 创建实例
// 可以使用自定义配置新建一个 axios 实例  axios.create([])
const instance = axios.create({
  // 基础 url 规定了所有请求的前缀
  baseURL: "http://localhost:3008",
  // 设置超时的时间
  timeout: 1000,
})
instance.get("/posts?id=1").then((res) => {
  console.log(res.data)
  console.log(res.data[0])
})

// 方案二
// 根据 api 配置默认值
// 配置 axios 的默认值
axios.defaults.baseURL = "http://localhost:3008"
axios.get("/posts?id=2").then((res) => {
  console.log(res.data)
  console.log(res.data[0])
})

// axios 拦截器

// 请求拦截器
// 添加请求拦截器
axios.interceptors.request.use(
  // 在发送请求之前做些什么
  // axios 请求的配置，可以根据配置，去对应的修改一些配置然后将修改之后的配置 return
  function (config) {
    // 在发送请求之前做些什么
    console.log(config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

axios.get("http://localhost:3008/posts?id=2").then((res) => {
  console.log(res.data)
  console.log(res.data[0])
})

// 响应拦截器
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // response 指的就是请求的结果（axios 封装之后的结果）
    // return 一个新的数据就会修改请求的结果
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
axios.get("http://localhost:3008/posts?id=2").then((res) => {
  console.log(res)
})
```
