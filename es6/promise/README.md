# [Promise A+](https://promisesaplus.com/)
Promise 缓解了回调地狱，链式写异步
## Terminology

1. “promise” is an object or function with a `then` method whose behavior conforms to this specification.
2. “thenable” is an object or function that defines a `then` method.
3. “value” is any legal JavaScript value (including `undefined`, a thenable, or a promise).
4. “exception” is a value that is thrown using the `throw` statement.
5. “reason” is a value that indicates why a promise was rejected.

## Requirements

### Promise States

- pending, may transition to either the fulfilled or rejected state.
- fulfilled
  - must not transition to any other state.
  - must have a value, which must not change
- rejected
  - must not transition to any other state.
  - must have a reason, which must not change.

### The `then` Method

### The Promise Resolution Procedure

# [Implement](https://github.com/xieranmaya/Promise3) [教程](https://github.com/xieranmaya/blog/issues/3)

![](./promise.png)

### 停止一个 Promise 异步链

```js
Promise.cancel = Promise.stop = function () {
  return new Promise(function () {})
}
```
### Promise的性能问题

### 防止最后一个Promise出错
```js
Promise.prototype.done = function(){
  return this.catch(function(e) { // 此处一定要确保这个函数不能再出错
    console.error(e)
  })
}
```

# [题目 (尚硅谷)](https://www.bilibili.com/video/BV1MJ41197Eu?p=39)

## q1

3 7 4 1 2 5

Loop1:

- Task: setTimeout(console.log(5); resolve(6);)
- microTask: p.resolve(1); f.resolve(2); p.then(console.log(arg);); f.then(console.log(arg);) // 3 7 4
  - f.resolve(2); p.then(console.log(1);); f.then(console.log(arg);)
  - p.then(console.log(1);); f.then(console.log(2);)
- Log: 3 7 4 1 2

Loop2:

- microTask: resolve(6);

- Log: 5

## q2

1 7 2 3 8 4 6 5 0

Loop1:

- Task: setTimeout(console.log(0))
- microTask: resolve(); p1.then(console.log(2)...); p3.then(console.log(8)); // 1 7

  - resolve(); p2.then(console.log(4)...) console.log(6); // 1 7 2 3 8
  - p2.then(console.log(5)) // 1 7 2 3 8 4 6

- Log: 1 7 2 3 8 4 6 5

Loop2:

- Log: 0
