# requestAnimationFrame (rAF)

60fps(16 毫秒/帧), 可以在内部决定安排渲染的最佳时间
常用于重新计算元素位置时
函数重新计算并在屏幕上呈现元素时，rAF 可以保证渲染的平滑或动画特效

> Examples

scroll
headroom.js

```js
let lastTime = 0
requestAnimationFrame = function (callback) {
  let curTime = new Date().getTime()
  let timeToCall = Math.max(0, 16 - (curTime - lastTime))
  const id = window.setTimeout(() => {
    callback(curTime + timeToCall)
  }, timeToCall)
  lastTime = curTime + timeToCall
  return id
}
cancelAnimationFrame = function (id) {
  window.clearTimeout(id)
}
```

[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)
