#$\color{red}{正则表达式 RegExp}$

<!-- [TOC] -->

##创建正则:

- 创建正则

  ```javascript
  var re = /ab/
  ```

###方法：检测方法（检测包含连续的）

- test 方法返回 true 或 false
  ```javascript
  var str = 'hello,world'
  var re - /h/
  re.test(str) 包含返回 true 不包含则返回 false
  ```
- exec 方法返回类数组或 null
  ```javascript
  re.exec(str)
  ```

###正则的规则

- 位数 [ ] 代表一位（括号内无论写多少个字符都是检测其中的某一位)
- {数字} 控制{ }前面的以为个数
- `^ 开头` `$ 结尾` `| 或` `() 分组的内容先计算`
- `\d` 和 `[0-9]` 一样 `\D 非\d`
- `\w` 一位数字、字母、下划线 `\W 非 \w`
- `\s` 一位空白符 `\S 非 \s`
- `(?=x)` 紧跟着小写字母 `x`
  ```javascript
  var str = "13856897894121213"
  ```
- 检测 11 位数字 必须以 1 开头
  ```javascript
  var re = /^1[0-9]{10}$/
  console.log(re.test(str))
  ```
- 检测两位只能是 qq 或 QQ
  ```javascript
  var str = "qq"
  ```
  ```javascript
  var re = /^qq|QQ$/ //以小写的qq开头 或  以大写的 QQ结尾
  var re = /^(qq|QQ)$/
  console.log(re.test(str))
  ```
- 76896798@qq.com
- qq 邮箱正则 4-12 位数字 + @ + (qq QQ) + . + (com COM)
  ```javascript
  var re = /^[0-9]{4,12}@(qq|QQ).(com|COM)$/
  var str = "76896798@qq.com"
  console.log(re.test(str))
  ```

* 检测一个字符串是否包含 \$
  ```javascript
  var re = /\$/
  var str = "dads$"
  console.log(re.exec(str))
  ```
* 检测字符串中是否存在紧跟着 ℃ 的数字
  ```javascript
  var str = "今天最高气温30℃"
  var re = /[0-9]{1,3}(?=℃)/
  console.log(re.exec(str))
  ```
  ```javascript
  var str = "你好"
  // [\u4e00-\u9fa5]  一位汉字
  var re = /[\u4e00-\u9fa5]{2}/
  console.log(re.test(str))
  ```
* 需要设置带变量的正则
  ```javascript
  var keyText = "javascript"
  var title = "javascript 从入门到放弃"
  var re = /keyText/ // 这种创建正则的方式就不行了
  var re = new RegExp("^" + keyText + "$") // 创建带变量的正则
  console.log(re.test(title))
  ```

####一般的正则表达式直接可以从网上查到 (身份证号正则 手机号正则)
