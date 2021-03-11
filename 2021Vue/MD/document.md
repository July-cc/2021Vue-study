#$\color{red}{浏览器对象}$

```html
<h1 class="title" id="title">hello</h1>
<form action="">
  <!-- name 属性作用  当时使用表单方式(现在基本上不使用了)向后台提交信息时，格式是name 写上后台需要的名字 -->
  <textarea name="comment" id="" cols="30" rows="10"></textarea>
  <input type="submit" />
</form>
```

- **`document` 浏览器提供了一些列方案让我们开发者使用 `js` 去操作浏览器内的各个元素**
- **当你通过浏览器提供的方案对页面进行修改的时候(修改了某个 `div` 的背景色)，浏览器可能会对整个页面进行处理**
- **有一些操作会引起浏览的重绘或回流 (有关优化方面的事，目前我们开不出来)**
- **`dom` 浏览将整个面分成多个 dom 节点 比如 某个 `div` 标签就是一个元素节点 属性节点`(href src)` 文本节点(标签之间的内容)**
- **获取元素节点**

  - **1. 通过元素的 id 名**
  - **var titleDom = document.getElementById('title')**
  - **2. 通过元素的 class 名**
  - **只要是能获取多个的方法就获取的是类数组 不直接获取标签本身 想要获取的话 通过下标或索引获取**
  - **var titleDom = document.getElementsByClassName('title')[0]**
  - **3. 通过标签名**
  - **var titleDom = document.getElementsByTagName('h1')[0]**
  - **4. 通过元素的 name 属性()**
  - **var textareaDom = document.getElementsByName('comment')[0]**
  - **5. 通过选择器获取**
  - **只能获取匹配到的第一个**
  - **var titleDom = document.querySelector('.title')**
  - **获取匹配到的所有**
    var titleDom = document.querySelectorAll('.title')[0]
    console.log(titleDom)

    </script>
  </body>

</html>
