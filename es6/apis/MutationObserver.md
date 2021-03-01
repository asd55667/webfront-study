# MutationObserver

```js
// microtask中执行
var mo = new MutationObserver(callback)

var domTarget = 你想要监听的 dom 节点
mo.observe(domTarget, {
characterData: true //说明监听文本内容的修改。
})
```
