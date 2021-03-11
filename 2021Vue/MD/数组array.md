#$\color{red}{数组  Array}$

####对象的一种

- **Array 数组: 数据的有序集合。 (一组数字，一组电话号码，一类文章，一类商品......)**

```java
    var numArr = [1, 3, 4, 2, 6, 7, 8, 5]
    // 如何访问数组内的数据
    console.log(numArr[3])
    // 如何修改
    // 1.直接进行赋值
    numArr[3] = 5
    console.log(numArr)
    // 2.通过数组的方法    mdn--->  javascript ---> 内置对象  ---> Array (属性   方法)
    //  push 方法 向数组的末尾添加一个或多个元素，并返回新数组的长度
    numArr.push(10)
    console.log(numArr)
```

- **[concat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)**
- **[push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)**
- **[pop](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)**
- **[shift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)**
- **[unshift](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)**
- **[reverse](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)**
- **[slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)**
- **[splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)**
- **[sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)**
- **[indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)**

---

- **对象 (内置对象 自定义对象 浏览器对象)**
- **内置对象只需要了解对象下的方法和属性**
- **数组 Array**

```java
var arr = [1, 2, 3, 4, 5, 6]
arr[0] = 0
arr[7] = 8
console.log(arr[6])
// 属性 length 数组的长度(元素个数)
console.log(arr.length)
```

- **对数组进行各种操作 需要使用数组定义好的各种方法**
- **学习对象下的方法:**
  - 方法是哪个对象的
  - 方法的作用
  - 方法有没有返回值
  - 是否修改原来的对象
- **push 向数组末尾添加一个或多个元素，并返回新数组的长度 (返回值是新数组的长度) 修改原来的数组**

```java
   arr.push(7)
   console.log(arr)
```

- **concat 连接两个或多个数组，并返回结果 不修改原来的数组**

```java
   var arr1 = [8, 9, 10]
   arr.concat(arr1)
   console.log(arr)
```

- **shift 删除数组内的第一个元素，并返回被删除的元素 修改原来的数组**

```java
   arr.shift()
   console.log(arr)
```

- **unshift 向数组开头添加一个或多个元素，并返回新数组的长度 修改原来的数组**

- **pop 删除数组内的最后一个元素，并返回被删除的元素 修改原来的**

- **reverse 颠倒数组内元素的顺序，并返回结果 修改原来的**

- **slice 数组的截取(根据下标或索引),返回截取的新数组，不修改原来的**
  - 用法
    1. 数组.slice(a,b) 包括 a 不包括 b
    2. 数组.slice(a) 从 a 截取到最后包括 a

```java
var newArr = arr.slice(0)
console.log(newArr)
```

- **splice 删除或添加一个或多个元素，并返回被删除的元素组成的数组 修改原来的**

```java
// 2，3，4，5，6，7
// 数组.splice(a,b,c) a 代表添加或删除的位置 b 删除的元素个数 c 被添加的元素
arr.splice(1, 0, 8)
console.log(arr)
```

- **indexOf 检测数组内是否包含某个元素，包含返回第一次匹配的位置，不包含返回 -1 ，不修改原来的数组**
- **[2,3,4,5,6] 匹配的规则就是 ===**
- **indexOf 方法不能用来检测对象数组是否包含某个对象**

```java
console.log(arr.indexOf('5'))
```

- **sort 对数组进行排序，返回排序后的数组,修改原数组**

```java
    var numArr = [12, 123, 5132, 67, 3, 853, 90]
    numArr.sort()  //不设置 sort 参数排序按照首字符排序  汉字除外
    numArr.sort(function (a, b) { return b - a })   //数字的大小排序
    console.log(numArr)
```

- **[forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)**
- **[join](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)**
- **[filter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)**
- **[every](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)**
- **[find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)**
- **[fineIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fineIndex)**
- **[map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**
- **[reduce](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)**
- **[includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)**

```java
    //forEach
    var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // 将数组内的内容创建成一个列表展示出来
    // 后台传递过来一个数组 让我们前端将数组内的内容展示到页面上
    // 方案
    // 1. 依次输出数组内的元素     数组的遍历
    // 2. 每次输出的时候将输出的内容创建成一个新的 li
    // 创建新的空标签   var li = $('<li>')
    // 3. 将创建好的 li 添加到页面的 ul 内
```

```java
    $('.list').append(li) // 添加到最后面当作最后一个子级
```

```java
    for (var i = 0; i < numArr.length; i++) {
    console.log(numArr[i])
    var li = $('<li>')
    li.text(numArr[i])
    $('.list').append(li)
    }
```

- **value 代表数组内的元素**
- **index 代表数组元素的索引**
- **array 代表原数组**
- **上述三个参数名字随便定义 但是顺序不能变**
  - **不用的参数可以省略 但是比如我想使用 index 参数，不想使用 value 参数 只能写成 function(value,index){}**

```java
     numArr.forEach(function (value) {
       var li = $('<li>')
       li.text(value)
       $('.list').append(li)
     })
```

#$\color{red}{购物车  数组}$

```html
<div class="content">
  <!-- 生成三个 div -->
  <!-- <div class="goods">
      <img  src="" alt="">
      <span >$1000</span>
      <p ></p>
    </div> -->
</div>
```

- **对象数组**

```java
    var goodsArr = [
      {
        goodsName: '三星手机 S10',
        goodsPrice: 9999,
        goodsInfo: '贼拉好',
        goodsPic: 'https://img13.360buyimg.com/n7/jfs/t1/78070/33/7757/189352/5d5b612fE5c86d0c0/8426a625f7216e70.jpg'
      },
      {
        goodsName: '三星手机 S11',
        goodsPrice: 9998,
        goodsInfo: '贼拉好1',
        goodsPic: 'https://img13.360buyimg.com/n7/jfs/t1/78070/33/7757/189352/5d5b612fE5c86d0c0/8426a625f7216e70.jpg'
      },
      {
        goodsName: '三星手机 S12',
        goodsPrice: 9997,
        goodsInfo: '贼拉好2',
        goodsPic: 'https://img13.360buyimg.com/n7/jfs/t1/78070/33/7757/189352/5d5b612fE5c86d0c0/8426a625f7216e70.jpg'
      }
    ]
```

- **依次输出商品名称**

```java
    goodsArr.forEach(function (val, ind) {
      console.log(val.goodsPrice)
      var goodsDiv = $('<div>')
      // 字符串拼接
      // 字符串模板   `<img src='${val.goodsPic}' />`
      <img src='val.goodsPic' />
      goodsDiv.html('<img src="' + val.goodsPic + '" /><span class="price">' + val.goodsPrice + '</span><p>' + val.goodsInfo + '</p>')
      goodsDiv.html(`<img  src='${val.goodsPic}' /><span class='price'>${val.goodsPrice}</span>`)
      $('.content').append(goodsDiv)
     })
```

####数组的方法

- **`filter` 筛选数组内满足条件的元素组成新的数组，返回新数组 不修改原来的**

```java
     var numArr = [576, 713, 67, 35, 878]
     // 筛选出数组为奇数的
     var newArr = numArr.filter(function (value, index, array) {
        进行一些列操作
       return value % 2 === 1
     })
     console.log(newArr)

     var goodsArr = [
       {
         goodsName: '三星手机 S10',
         goodsPrice: 10000,
         goodsInfo: '贼拉好',
         goodsPic: 'https://img13.360buyimg.com/n7/jfs/t1/78070/33/7757/189352/5d5b612fE5c86d0c0/8426a625f7216e70.jpg'
       },
       {
         goodsName: '三星手机 S11',
         goodsPrice: 998,
         goodsInfo: '贼拉好1',
         goodsPic: 'https://img13.360buyimg.com/n7/jfs/t1/78070/33/7757/189352/5d5b612fE5c86d0c0/8426a625f7216e70.jpg'
       },
       {
         goodsName: '三星手机 S12',
         goodsPrice: 499,
         goodsInfo: '贼拉好2',
         goodsPic: 'https://img13.360buyimg.com/n7/jfs/t1/78070/33/7757/189352/5d5b612fE5c86d0c0/8426a625f7216e70.jpg'
       }
     ]
```

- **筛选出价格在区间 500 - 1000 范围内的商品数组**

```java
  var newGoodsArr = goodsArr.filter(function (val) {
  var price = val.goodsPrice
  - 函数的返回值必须函数的最后面
    return price > 500 && price < 1000
    })
    console.log(newGoodsArr)
```

- **`find findIndex` 查找数组中是否存在(不一定是相等，可能是满足一个条件)某个元素, 存在的话 find 方法返回查找到第一个满足条件元素， findIndex 返回查找到第一个满足条件元素的索引。 不存在的话 find 返回 undefined ，findIndex 返回 -1,不修改原数组**

```java
var arr = [20, 21, 25, 18]
var number = arr.find(function (value) {
return value > 28
})
console.log(number)
var students = [
{
name: '丽丽',
age: 18
},
{
name: '小兰',
age: 20
},
{
name: '小王',
age: 21
}
]
var number1 = students.find(function (value) {
return value.age > 19
})
console.log(number1)
```

- **`every` 检测数组内的所有元素是否全部满足一个条件，满足的话返回 true 不满足返回 false 不修改原数组**

```java
var arr2 = [124, 52, 634, 134, 528]
var result = arr2.every(function (value) {
return value % 2 === 0
})
console.log(result)
```

- **`map` 数组的映射，将数组转换成新的数组，新数组内的值和原数组内的值是一一对应的(通过某个操作) 返回新数组 不修改原数组**

```java
var arr3 = [2, 8, 10]
var newArr = arr3.map(function (value) {
  // return 出去的值就是新数组内的值
  return value \* value
  })
  console.log(newArr)
```

- **`join` 将数组内的元素使用某个字符拼接成字符串 返回拼接后的字符串 原数组不变**

```java
var arr = [1, 2, 3, 4]
var str = arr.join('-')
console.log(str)
```

- **`reduce`**

- **`sort` 排序方法 应用于对象数组**

```java
    var students = [
      {
        number: 1000,
        name: '小红1'
      },
      {
        number: 1301,
        name: '小红2'
      },
      {
        number: 1202,
        name: '小红3'
      }
    ]
  // a ,b 其实代表的是相邻数组内的元素
  var newArr = students.sort(function (a, b) { return a.number - b.number })
  console.log(newArr)
```

<!-- ```java
// [1,123,6,42,78,343,67,345,90,45] 请对数组进行大小排序禁止使用 sort 方法
``` -->

- **冒泡排序**

```java
var numArr = [312, 56, 37, 589, 35, 78, 90, 675]
console.log(numArr)
for (var j = 0; j < numArr.length - 1; j++) {
  for (var i = 0; i < numArr.length - 1 - j; i++) {
    if (numArr[i] > numArr[i + 1]) {
  调换位置
      var num = numArr[i + 1]
      numArr[i + 1] = numArr[i]
      numArr[i] = num
    }
  }
}
console.log(numArr)
```

- **去重操作**

```java
var numArr = [4, 2, 2, 1, 35, 1, 90, 4, 2, 2, 2]
for (var j = 0; j < numArr.length - 1; j++) {
  for (var n = 0; n < numArr.length - 1 - j; n++) {
    if (numArr[n] > numArr[n + 1]) {
    // 调换位置
      var num = numArr[n + 1]
      numArr[n + 1] = numArr[n]
      numArr[n] = num
    }
  }
}
// [1, 1, 2, 2, 2, 2, 2, 4, 4, 35, 90]
// m = 0    [1, 2, 2, 2, 2, 2, 4, 4, 35, 90]
for (var m = 0; m < numArr.length - 1; m++) {
  if (numArr[m] === numArr[m + 1]) {
    numArr.splice(m, 1)
    m--
  }
}
console.log(numArr)

var numArr = [1, 1, 2, 2, 2, 2, 2, 4, 4, 35, 90]
var newArr = []
for (var i = 0; i < numArr.length; i++) {
// 判断现在 i 对应的 numArr 数组内的数是否在 newArr 中存在
  if (newArr.indexOf(numArr[i]) === -1) {
    newArr.push(numArr[i])
  }
}
console.log(newArr)
```
