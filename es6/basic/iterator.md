# 可迭代对象

![](https://user-images.githubusercontent.com/20392340/59477966-3063f900-8e8a-11e9-9f99-1bc8abab170d.png)

```js
function makeIterator(array) {
  var nextIndex = 0
  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true }
    },
  }
}
// 使用 next 方法依次访问对象中的键值
var it = makeIterator(['step', 'by', 'step'])
console.log(it.next().value) // 'step'
console.log(it.next().value) // 'by'
console.log(it.next().value) // 'step'
console.log(it.next().value) // undefined
console.log(it.next().done) // true
```

# ref

[可迭代对象有什么特点？](https://github.com/YvetteLau/Step-By-Step/issues/28)
