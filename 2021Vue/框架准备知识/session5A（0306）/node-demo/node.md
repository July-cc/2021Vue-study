## node 的简单介绍

js 的运行环境
node 其实是主要为让 js 可以实现后台的功能，作为前端使用 node ，一般使用 node 的 npm 工具，这个工具提供了所有前端相关的包可以下载（并且这些包都享有模块功能），而且使用这个工具下载的话项目必须是 node 项目。

#### node 项目

- npm 下载包
- 帮助管理你的项目包（项目依赖，就是你下载的插件）

#### 如何创建 node 项目

- 直接给文件夹执行 `npm init -y` 命令即可，会自动生成一个 package.json 文件

#### 如何下载包

- npm install（可以简写成 i ）包名@版本
- 执行下载命令的时候可以添加一些命令参数
- --save 项目必须依赖包(dependencies 安装的参数
- -S 项目必须依赖包(dependencies)安装的参数
- --save-dev 项目工具包(devDependencies)安装的参数
- -D 项目工具包(devDependencies)安装的参数
- -g 全局安装

#### 如何卸载包

- npm uninstall 包名
- 卸载的时候也可以用上述参数

#### node 模块的分类以及导入导出
```js
// es6 的导入方式
// 作为 npm 下载的属于第三方模块，导入的时候基本上都是默认导入
import $ from 'jquery'
```
##### node 模块的导入,将模块分为三大类
```js
1. node 核心模块，无需下载直接使用，导入的时候直接使用模块名称
let http = require('http')
console.log(http);
2.第三方模块，使用 npm 工作下载的，导入的时候直接使用模块名称
let $ = require("jquery")
console.log($)
3.自定义模块，就是新建的 js 文件，导入的时候需要使用相对路径
// js 模块导入的时候可以省略后缀
let x = require('./about')
console.log(x);
```

#### 执行 `npm i` 命令可以将之前记录在 package.json 中的所有包全部下载下来，所以说项目合作的时候只需要除 node_modules 文件即可

#### 作为 node 项目，可以使用 package.json 内的 script 字段设置该项目的命令行简化命令，使用 npm 替你去执行一些命令
