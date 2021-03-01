# this 指向

# 全局环境中的 this

无论是否在严格模式下，在全局执行环境中（在任何函数体外部）
浏览器环境: 全局对象 window
node 环境: 空对象 {}

```js
console.log(this)
```

# 1. new 绑定

构造函数中没有返回 function 或者是 object，this 指向这个新对象

# 2. 显式绑定; call,apply,bind 调用, 绑定指定的对象

当第一个参数值是 undefined 或者 null, 值在调用时会被忽略, 应用默认绑定的规则

```js
function fn() {
  this.name = 'wcw'
}
obj = {}
fn.call(obj)
fn.apply(obj)
fn.bind(obj)
```

# 3. 隐式绑定

函数调用在对象上触发, 调用位置上存在上下文对象, 就近原则, this 指向最后调用它的对象

```js
var name = 'wcw'
function fn() {
  console.log(this.name)
}
fn()
obj = {
  name: 'qlp',
  fn,
}
obj.fn()
```

# 4. 默认绑定

1-3 无效时使用的默认规则, 通常是独立函数调用

严格模式；this 指向 undefined
非严格模式： this 指向执行全局对象

```js
var name = 'wcw'
function fn() {
  console.log(this.name)
  console.log(this.test)
}
fn()
// wcw \n undefined
```

# 5. 箭头函数

继承外层上下文绑定的 this
定义时所在的上下文，而不是使用时所在的上下文

```js
var name = 'wcw'
var fn = () => {
  console.log(this.name)
}
fn()
obj = {
  name: 'qlp',
  fn, // wcw
  fn1: function () {
    setTimeout(() => {
      // => bind to fn1
      console.log(this.name) // qlp
    })
    setTimeout(function () {
      console.log(this.name) // wcw  function default bind to global
    })
  },
}
obj.fn() // fn bind to global
obj.fn1() // fn1 bind to obj
```

# 优先级 #1 > #2 > #3 > #4

```js
var name = 'global'
function fn(name) {
  if (name) this.name = name
  console.log(this.name)
}
implicit = {
  name: 'implicit', // implicit.fn()
  fn,
}
explict = {
  name: 'explict', // fn.call(obj2)
  fn,
}

// explict #2 call显式绑定 > #3 隐式绑定
implicit.fn.call(explict)

// implicit #3 隐式绑定 > #4 默认绑定
implicit.fn()

// explict #2 call显式绑定 > #4 默认绑定
fn.call(explict)

var obj = {}
var explictFn = fn.bind(obj)
explictFn('explict')
// obj {name: "explict"}

// new constructor #1 new > #2 bind显式绑定
var newCtor = new explictFn('new')

// fn bind to global
var fn = () => {
  console.log(this.name)
}

// global 箭头函数的绑定无法被修改
fn.call(obj)
```

# Question

## q2

new 操作符调用构造函数, 多了构造函数的作用域

# ref

[JavaScript 的 this 原理是什么?](https://www.zhihu.com/question/353757734/answer/964557747)
[如何正确判断 this 的指向？（注意区分严格模式和非严格模式）](https://github.com/YvetteLau/Step-By-Step/issues/1)
[面试官问：JS 的 this 指向](https://juejin.cn/post/6844903746984476686)
[从这两套题，重新认识 JS 的 this、作用域、闭包、对象](https://segmentfault.com/a/1190000010981003)
[一道常被人轻视的前端JS面试题](https://www.cnblogs.com/xxcanghai/p/5189353.html)