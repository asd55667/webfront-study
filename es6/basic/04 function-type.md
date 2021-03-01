# 普通函数

```js
function fn() {}

// constructor
function ctor(name) {
  this.name = name
}
```

# 箭头函数

- 箭头函数有更简洁的语法

- 不能作为构造函数，不可以使用 new 命令

- 箭头函数没有原型属性 prototype, 不能简单返回对象字面量

- 箭头函数不绑定 this 会捕获其所在的上下文的 this 值 作为自己的 this 值

- 箭头函数不绑定 arguments 箭头函数也没有 arguments.callee 和 arguments.caller

```js
const obj = {
  fn() {
    return () => {
      console.log(this === obj)
    }
  },
}

// ts compiler
var obj = {
  fn: function () {
    var _this = this
    return function () {
      console.log(_this === obj)
    }
  },
}
```

# 匿名函数

```js
annoymous = function () /* no name exists*/ {}
```

常用于无需语义的临时函数

临时回调

```js
setTimeout(function () {}, delay)
```

实例方法赋值

```js
instance.fn = function () {}
```

对象属性初始化

```js
obj = {
  fn: function () {},
}
```

函数表达式赋值

```js
let fn = function () {}
```

内嵌返回函数

```js
function fn() {
  return function () {}
}
```

新建块级作用域 函数上下文 闭包的使用

```js
function fn() {
  let closure
  ;(function () {
    op(closure)
  })()
}
```

## Question

```js
var func1 = (x) => x
var func2 = (x) => {x}
var func3 = (x) => ({ x })
console.log(func1(1))
console.log(func2(1))
console.log(func3(1))
```

# ref

[箭头函数和普通函数的区别](https://segmentfault.com/a/1190000021380336)
[js 中的匿名函数](https://www.cnblogs.com/ranyonsue/p/10181035.html)
