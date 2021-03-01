# 防抖

时间间隔内函数至多只允许执行一次

> Examples

Infinite scrolling

```js
function throttle(fn, delay) {
  let tick
  return function () {
    const self = this
    const args = arguments
    if (!tick) {
      tick = setTimeout(() => {
        tick = null
        fn.apply(self, args)
      }, delay)
    }
  }
}
```

# ref

[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
[第 9 题：介绍防抖节流原理、区别以及应用，并用 JavaScript 进行实现](https://github.com/lgwebdream/FE-Interview/issues/15)
[节流(throttle)函数的作用是什么？有哪些应用场景，请实现一个节流函数](https://github.com/YvetteLau/Step-By-Step/issues/12)
