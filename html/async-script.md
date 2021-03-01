# 异步加载 js 脚本

# async 属性

只能引入外部 js 脚本,
一旦下载完 渲染引擎中断 执行该脚本 再继续渲染 多个 async 不能保证加载顺序

```html
<script type="text/javascript" async src="async1.js"></script>
<script type="text/javascript" async src="async2.js"></script>
<!-- 
    async1 / async 2
    async2 / async 1
 -->
```

# defer 属性

只能引入外部 js 脚本, 可保证执行顺序, 在 dom 加载完毕后执行, window.onload 之前, 其他脚本之后
要等到整个页面在内存渲染结束(DOM 结构完全生成、以及其他脚本执行完成)才会执行, 多个 defer 会按照它们在页面中出现的顺序加载 再执行渲染

```html
<script>
  window.onload = function () {
    console.log('window.onload')
  }
</script>
<script src="defer.js" defer></script>
<script>
  console.log('normal')
</script>
<!-- 
    normal 
    defer.js
    window.onload
 -->
```

defer 和 async 的区别:

- defer 要等到整个页面在内存中正常渲染结束
- async 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染
- 如果有多个 defer 脚本，会按照它们在页面出现的顺序加载
- 多个 async 脚本不能保证加载顺序

# ajax 异步加载 js 代码 并用 eval 执行

```js
var xhr = new XMLHttpRequest()
xhr.open('get', 'async.js', true)
xhr.send()
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    eval(xhr.responseText)
  }
}
```

# 动态创建 script 标签

```js
var script = document.createElement('script')
script.src = 'async.js'
document.head.appendChild(script)
```

# iframe 引入 js

iframe 加载一个同源的子页面，让子页面的 js 影响当前的父页面

```js
var iframe = document.createElement('iframe')
document.body.appendChild(iframe)
var doc = iframe.contentWindow.document
doc.open().write('<body onload=function()>')
doc.close()
```

# ref

[异步加载 js 脚本的方法有哪些](https://github.com/YvetteLau/Step-By-Step/issues/26)
