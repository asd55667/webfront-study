# Closure 闭包的定义

闭包：函数可以访问它被创建时所处的上下文环境

外层函数嵌套内层函数
内层函数使用外层函数的局部变量
把内层函数作为外层函数的返回值

```js
function A() {
  let a = 1
  function B() {
    console.log(a)
  }
  return B
}
```

# 闭包原理

在预编译阶段，如果发现内部函数使用了外部函数的变量，则会在内存中创建一个“闭包”对象并保存对应变量值
如已存在，则只需要增加对应属性值

执行完后，函数执行上下文会被销毁，函数对“闭包”对象的引用也会被销毁，但内部函数还持用该“闭包”的引用，所以内部函数可以继续使用“外部函数”中的变量

# 闭包应用

- 封装私有变量

```js
function Person(name) {
  // 外层函数
  this.getName = function () {
    //内层函数
    return name
  }
}
```

- 模拟模块

```js
function module() {
  // 外层函数
  let inner = 1
  let increaseInner = function () {
    //内层函数
    inner++
  }
  let decreaseInner = function () {
    inner--
  }
  let getInner = function () {
    return inner
  }
  return {
    increaseInner,
    decreaseInner,
    getInner,
  }
}
```

- 块作用域

```js
for (var i = 0; i < 5; i++) {
  ;(function (i) {
    // 外层函数
    setTimeout(function () {
      // 内层函数
      console.log(i)
    }, 1000)
  })(i)
}
```

# 闭包的优缺点

> 优点

- 变量作为私有成员在独立的作用域
- 变量不污染全局
- 让变量的值始终保持在内存中

> 缺点

- 闭包的层级决定了引用的外部变量在查找时经过的作用域链长度， 影响性能
- 内部函数保存了对外部变量的引用，导致无法被垃圾回收，使用不当易造成内存泄露

# ref

[什么是闭包？闭包的作用是什么？](https://github.com/YvetteLau/Step-By-Step/issues/24#issuecomment-500413699)
[ 第 11 题：对闭包的看法，为什么要用闭包？说一下闭包原理以及应用场景](https://github.com/lgwebdream/FE-Interview/issues/17#issuecomment-647883805)
[【JS】深度解读阿里巴巴经典闭包面试题](https://www.bilibili.com/video/BV1xf4y1R7AH)