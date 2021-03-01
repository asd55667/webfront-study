# fast api

- `JSON.parse(JSON.stringify(obj))`
- lodash `_.cloneDeep()`
- `Object.assgin({},target)`
- jquery `$.extend`

# JSON.stringfy 和 JSON.parse 的弊端

- **1.如果 obj 里面有时间对象，则 JSON.stringify 后再 JSON.parse 的结果,时间将只是字符串的形式，而不是对象的形式**
- **2.如果 obj 里有 RegExp(正则表达式的缩写)、Error 对象，则序列化的结果将只得到空对象**
- **3、如果 obj 里有函数，undefined，则序列化的结果会把函数或 undefined 丢失；**
- **4、如果 obj 里有 NaN、Infinity 和-Infinity，则序列化的结果会变成 null**
- **5、JSON.stringify()只能序列化对象的可枚举的自有属性**

# deepCopy

```js
function find(arr, f) {
  return arr.filter(f)[0]
}

function deepCopy(obj, cache = []) {
  if (obj === null || typeof obj !== 'object' || obj instanceof Date) {
    return obj
  }
  const hit = find(cache, (c) => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  cache.push({
    original: obj,
    copy,
  })

  Object.keys(obj).forEach((key) => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}
```

# browser cloneNode

```js
function cloneNode(node, javascriptEnabled = true) {
  const clone =
    node.nodeType === 3
      ? document.createTextNode(node.nodeValue)
      : node.cloneNode(false)

  for (let child = node.firstChild; child; child = child.nextSibling) {
    if (
      javascriptEnabled === true ||
      child.nodeType !== 1 ||
      child.nodeName !== 'SCRIPT'
    ) {
      clone.appendChild(cloneNode(child, javascriptEnabled))
    }
  }

  if (node.nodeType === 1) {
    if (node.nodeName === 'CANVAS') {
      clone.width = node.width
      clone.height = node.height
      clone.getContent('2d').drawImage(node, 0, 0)
    } else if (node.nodeName === 'TEXTAREA' || node.nodeName === 'SELECT') {
      clone.value = node.value
    }
    clone.addEventListener(
      'load',
      function () {
        clone.scrollTop = node.scrollTop
        clone.scrollLeft = node.scrollLeft
      },
      true,
    )
  }
  return clone
}
```

# ref
[vuex utils](https://github.com/vuejs/vuex/blob/dev/src/util.js)
[深拷贝和浅拷贝的区别是什么？如何实现一个深拷贝](https://github.com/YvetteLau/Step-By-Step/issues/17)