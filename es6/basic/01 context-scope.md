# **执行上下文栈(Execution Context Stack)**

ECMA 的上下文有三种类型：`global`, `function` 和 `eval`

`function` 可能产生无限的上下文环境, 如递归

一个`执行上下文`可以激活另一个`上下文`, `上下文堆栈`实现方式是栈

激活方`调用者(caller)`与被激活方`调用者(callee)`

`caller` 暂停自身, 将控制权交给这个 `callee`

![](https://camo.githubusercontent.com/5daaa1d220334674c7e738e3d8f1e73024dfd352bb1628a8ec5f70bc6e36dcbb/68747470733a2f2f7069633030322e636e626c6f67732e636f6d2f696d616765732f323031312f3334393439312f323031313132333131333137353431382e706e67)

# **作用域链(Scope Chains)**

js 存在`全局作用域`和`函数作用域`两种类型的作用域

作用域链是一个 `对象列表`(list of objects) ，用以检索上下文代码中出现的 `标识符`(identifiers 如`变量名`、`函数声明`和`参数`) 。

包括:

- 函数自身`变量对象` (variable object, VO)
- 父级变量对象 VO(`变量声明`和`函数声明`以及`函数形参声明`)
- 活动对象

变量在自己的作用域中没找到, 再在父级中寻找, 直到最顶层

被引用的自身作用域外的变量为`自由变量`

查找标识符时, 从作用域链的活动对象开始, 直到作用域链的顶部

```js
var x = 10

;(function foo() {
  var y = 20
  ;(function bar() {
    var z = 30
    console.log(x + y + z)
  })()
})()
```

![](https://camo.githubusercontent.com/ed325818923893c3731f43da6fd618e2ba150231139acdfc23c42ad6f3c53600/68747470733a2f2f7069633030322e636e626c6f67732e636f6d2f696d616765732f323031312f3334393439312f323031313132333131333533343136332e706e67)

ES6 let 和 const 新增块级作用域

## 特殊案例

```js
try {
  throw new Error()
} catch (err) {
  var test = 'test'
  console.log(err)
}

console.log(test) // test
console.log(err) // ReferenceError: err is not defined
```

## 多源的作用域

```js
// a.js
let name = 'wcw'
```

```js
// b.js
console.log(name)
```

**多文件**
多文件共享同一全局作用域

```html
<head>
  <script src="a.js" defer></script>
  <script src="b.js" defer></script>
</head>
<!-- 
  b.js  => wcw
 -->
```

**多模块**

```html
<head>
  <script src="a.js" module></script>
  <script src="b.js" module></script>
</head>
<!-- 
  b.js  => ReferenceError: name is not defined
 -->
```

# ref

[说一说你对 JS 上下文栈和作用域链的理解？](https://github.com/YvetteLau/Step-By-Step/issues/14#issuecomment-496344075)
[深入理解 JavaScript 系列（10）：JavaScript 核心（晋级高手必读篇）](https://www.cnblogs.com/TomXu/archive/2012/01/12/2308594.html)

