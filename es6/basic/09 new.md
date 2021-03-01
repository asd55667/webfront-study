# new operator

- 创建了一个全新的对象。
- 这个对象会被执行`[[Prototype]]`（也就是`__proto__`）链接。
- 生成的新对象会绑定到函数调用的`this`。
- 通过`new`创建的每个对象将最终被`[[Prototype]]`链接到这个函数的`prototype`对象上。
- 如果函数没有返回对象类型`Object`(包含`Functoin`, `Array`, `Date`, `RegExg`, `Error`)，那么`new`表达式中的函数调用会自动返回这个新的对象
- 构造函数返回数值无意义，返回对象，那么这个对象会被正常使用

```js
function ctor(name) {
  this.name = name
}
var instance = new ctor()
// ctor {name: "wcw"}
instance.constructor === ctor
```

```js
function ctor(name) {
  this.name = name
  return { a: 1 } // function () {}
}
var instance = new ctor()
// ctor {a:1} or ƒ () {}
```

# implementation

```js
function _new(ctor) {
  if (typeof ctor !== 'function') throw Error('')

  let self = Object.create(ctor.prototype)
  const args = [].slice.call(arguments, 1)

  let binding = ctor.apply(self, args)

  if (
    binding !== null &&
    (typeof binding === 'object' || typeof binding === 'function')
  ) {
    return binding
  } else {
    return self
  }
}

_new(ctor)
_new(ctor, 'wcw')
```

# ref
[面试官问：能否模拟实现 JS 的 new 操作符](https://juejin.cn/post/6844903704663949325#heading-6)
