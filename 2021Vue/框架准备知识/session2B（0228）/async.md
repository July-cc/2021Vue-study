##### async 函数

```js
// Generator 函数的语法糖 async 函数 异步的解决方案
const getPosts = () => {
  axios.get("ttp:localhost:3008/posts/1").then((res) => {
    console.log(res.data)
  })
}

// async function x(){

// }

// 第一种写法
const getPosts = async () => {
  const res = await axios.get("http:localhost:3008/posts/1")
  console.log(res.data)
}
getPosts()

// 第二种写法
const getPosts = async () => {
  const res = await axios.get("http:localhost:3008/posts/1")
  // res 就会得到成功的返回值，并且 await 之后的操作都必须在 await 后面的异步执行完毕之后再执行
  //   console.log(res.data);
  return res.data
}
// async函数返回一个 Promise 对象。
// async函数内部return语句返回的值，会成为then方法回调函数的参数。
getPosts().then((res) => {
  console.log(res)
})

// 错误处理
const getPosts = async () => {
  const res = await axios.get("http:localhost:3008/p22osts/1")
  return res.data
}
getPosts()
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    // 捕获失败
    console.log(err)
  })
```
