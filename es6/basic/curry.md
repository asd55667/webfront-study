# 柯里化函数 curry

把接受多个参数的函数转变为接受一个单一参数的函数，并且返回接受余下的参数且返回结果的新函数

curry 主要作用:

- 参数复用
- 提前返回
- 延迟执行

```js
var curry = (fn) => {
  if (typeof fn !== 'function') {
    return new Error('No function provided')
  }
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn.apply(null, args.concat([].slice.call(arguments)))
      }
    }
    return fn.apply(null, args)
  }
}

const curry = (func, count = func.length, ...args) =>
  count <= args.length ? func(...args) : curry.bind(null, func, count, ...args)
const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0)
const add = curry(sum, 2)
console.log(add(1)(2))

// es5
var currying = function (fn) {
  if (typeof fn !== 'function') {
    return new Error('need function')
  }
  var args = []
  return function doCurrying() {
    if (arguments.length === 0) {
      return fn.apply(this, args)
    } else {
      ;[].push.apply(args, arguments)
      return doCurrying
    }
  }
}
```

# 参数长度固定

```js
const curry = (fn) =>
  (judge = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (...arg) => judge(...args, ...arg))
const add = (a, b, c) => a + b + c
const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3)) // 6
console.log(curryAdd(1, 2)(3)) // 6
console.log(curryAdd(1)(2, 3)) // 6
```

# 参数长度不固定

```js
function add(...args) {
  //求和
  return args.reduce((a, b) => a + b)
}

function currying(fn) {
  let args = []
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs]
      return temp
    } else {
      let val = fn.apply(this, args)
      args = [] //保证再次调用时清空
      return val
    }
  }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)()) //15
console.log(addCurry(1)(2)(3, 4, 5)()) //15
console.log(addCurry(1)(2, 3, 4, 5)()) //15


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    return Child;
}(Parent));

```

# ref

[编写一个通用的柯里化函数 currying](https://github.com/YvetteLau/Step-By-Step/issues/33)
[实现 add(1)(2)(3)](https://github.com/lgwebdream/FE-Interview/issues/21)

```

```
