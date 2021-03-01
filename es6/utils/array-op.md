# 判断数组

```js
Array.isArray(input)

function isArray(input) {
  return Object.prototype.toString.call(input) === '[object Array]'
}
```

# 嵌套数组扁平化

```js
arr = [1, [2, [3, [4]], 5]]

//  es2019
arr.flat(2) //  [1, 2, 3, [4], 5]
arr.flat(3) //  [1, 2, 3, 4, 5]

flatten = (arr) =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

flatten = (arr) => {
  const _arr = []
  while (arr.length > 0) {
    const node = arr.pop()
    if (Object.prototype.toString.call(node) === '[array Object]') {
      arr.push(...node)
    } else {
      _arr.push(node)
    }
  }
  return _arr.reverse()
}
```

# 数组去重

```js
function unique(arr) {
  const seen = new Map()
  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))
}

function unique(arr) {
  return Array.from(new Set(arr))
}
```
