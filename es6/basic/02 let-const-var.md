|                | var | let | const |
| :------------- | :-: | :-: | :---: |
| 变量提升       |  Y  |  N  |   N   |
| 覆盖全局变量   |  Y  |  N  |   N   |
| 重复声明       |  Y  |  N  |   N   |
| 暂时性死区     |  N  |  Y  |   Y   |
| 块作用域       |  N  |  Y  |   Y   |
| 只声明不初始化 |  Y  |  Y  |   N   |
| 重新赋值       |  Y  |  Y  |   N   |

var 是 ES5 提出的，let 和 const 是 ES6 提出的

# 变量提升

function 优先于 var 提升且定义
var 声明可能会覆盖/污染 (当前)作用域的变量

```js
a = 10
var a

b = 10
let b //ReferenceError
```

```js
/* line n */ var myName = 'wcw'
//   ||
//    v
/* line 0 */ var myName = undefined
/* line n */ myName = 'wcw'

console.log(myName) // undefined
var myName = 'wcw'
console.log(myName) // wcw
```

# 覆盖全局变量

```js
var a = 10
console.log(window.a) //10
const b = 1
console.log(window.b) // undefined
let c = 1
console.log(window.c) // undefined
```

# 重复声明

let 和 const 不允许在相同作用域内, 重复声明一个变量

# 暂时性死区（temporal dead zone, TDZ）

块级作用域内存在 let 命令, 所声明的变量就“绑定”（binding）这个区域，不再受外部的影响

```js
var a = 10
if (true) {
  b = 20 // ReferenceError
  let b
}
```

# 块作用域

ES5 只有全局作用域和函数作用域， 没有块级作用域

```js
{
  let a = 10
  const b = 20
  var c = 30
}
console.log(a) //ReferenceError
console.log(b) //ReferenceError
console.log(c) //30
```

# 只声明不初始化

const 必须在声明的时候就初始化, 常用于 常量,匿名函数,箭头函数

# 重新赋值

# ref

[let、const、var 的区别有哪些？](https://github.com/YvetteLau/Step-By-Step/issues/16)
