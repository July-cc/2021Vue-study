// 模块导出了一个变量 firstName
let lastName = '大'
export let firstName = '袁'
export {lastName}
export {lastName as laName}

let a = 10
let b = 20  
let c = 30
let d = 10000
export {a, b, c}
export default d
// es6 模块的导出
// 1.命名导出
// 关键字  export
// 可以导出多次
// 2默认导出
// 关键字 export default
// 只能使用一次