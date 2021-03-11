#$\color{red}{对象  Object}$

- **对象：**
  - **自定义对象**
  - **内置对象**
  - **浏览器对象**
- **对象：属性的无序集合**
- **自定义对象**

```java
var cat = {
    // 属性   方法
    // 名 :  值 , 名 :  值 ,...
    name: '小花儿',
    age: 2,
    // say 方法 ：属性值是函数的属性称之为方法
    say: function () {
      console.log('我是小花儿，喵喵喵!!!')
    }
    }
```

- **获取对象内的属性 如何调用对象内的方法**

```java
  console.log(cat.age)
 cat.say()
```

- **修改对象内的内容 直接对象属性的属性值进行修改即可**

```java
    cat.age = 3
    cat.say = function () {
      console.log('喵喵喵!!!')
    }
    console.log(cat)
    cat.say() */
```

- **number**
- **string**
- **boolean**
- **undefined**
- **null**
- **object**
- **存储方式不一样: 对象的存储方式是在内存中(浏览器内)存储地址 每创建一个对象就会存储一个新的地址(不管对象里面的内容如何) 当两个对象进行比较的时候比较的是地址是否相同**
- **简单类型在浏览器中直接存储的是值本身**

```java
    var a = { name: 'lucy' }   //101
    var b = { name: 'lucy' }   //102
    // 将 a 地址的钥匙配了一把给了 c
    var c = a
    console.log(a === c)
```

- **内置对象(数组 日期 正则表达式 数学 字符串 数字 布尔 )**

  </script>
</body>

</html>
