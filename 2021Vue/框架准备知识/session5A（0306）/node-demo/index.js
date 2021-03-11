// let a = 10
// let b = 20
// console.log(a + b)

// 这种方式属于什么导入方式
// 需要对应的什么导出方式
// es6 的导入方式
// 作为 npm 下载的属于第三方模块，导入的时候基本上都是默认导入
// import $ from 'jquery'

// node 模块的导入
// 将模块分为三大类
// 1. node 核心模块，无需下载直接使用，导入的时候直接使用模块名称
// let http = require('http')
// console.log(http);
// 2.第三方模块，使用 npm 工作下载的，导入的时候直接使用模块名称
// let $ = require("jquery")
// console.log($)
// 3.自定义模块，就是新建的 js 文件，导入的时候需要使用相对路径
// js 模块导入的时候可以省略后缀
let x = require('./about')
console.log(x);
