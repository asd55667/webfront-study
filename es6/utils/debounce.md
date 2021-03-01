# 防抖

将一段等间隔连续的函数调用压缩为一个
![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/04/debounce.png)

leading flag
![](https://i2.wp.com/css-tricks.com/wp-content/uploads/2016/04/debounce-leading.png)

> Examples

- 搜索框联想
- Ajax 请求下表单键盘输入事件的自动补全
- window resize

> leading flag with false

```js
function debounce(fn: Function, delay: Number): Function {
  let tick
  return function () {
    const self = this
    const args = arguments
    clearTimeout(tick)
    tick = setTimeout(() => {
      fn.apply(self, args)
    }, delay)
  }
}
```

```js
function debounce(fn: Function, delay: Number, leading: Boolean): Function {
  let tick, result
  return function () {
    const self = this
    const args = arguments
    clearTimeout(tick)
    if (leading) {
      const now = !tick
      tick = setTimeout(() => {
        tick = null
      }, delay)
      if (now) result = fn.apply(self, args)
    } else {
      tick = setTimeout(() => {
        fn.apply(self, args)
      }, delay)
    }
    return result
  }
}
```

# ref

[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
[防抖(debounce)函数的作用是什么？有哪些应用场景，请实现一个防抖函数](https://github.com/YvetteLau/Step-By-Step/issues/10)
