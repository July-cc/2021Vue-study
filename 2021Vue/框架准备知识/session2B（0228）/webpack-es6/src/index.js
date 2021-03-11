// 导入a.js模块导出的变量
// 当导入模块的时候，如果模块是js文件可省略后缀
// import {firstName, lastName, laName} from './a'
// console.log(firstName)
// import {a, b, c} from './a'

import * as all from './a'
import x from './a'
import './b'
console.log(all);
console.log(all.a);
console.log(all.b);
console.log(all.c);
console.log(all.default);
console.log(x);
// console.log(add); //es6每个模块都是独立的作用域
// es6 模块的导入
// * 表示导出的所有
// as 是换名字
// 1.命名导入
// 导入的名称和导出的名称必须一致
// 2.默认导入
// 导入的时候随意命名