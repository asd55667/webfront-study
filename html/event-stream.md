# 事件流

事件流描述的是从页面中接受事件的顺序,

当一个 HTML 元素产生一个事件时，该事件会在元素结点与根结点之间的路径传播，路径所经过的结点都会收到该事件，这个传播过程可称为 DOM 事件流

IE 的事件流是事件冒泡流, 其他的事件流是事件捕获流

![](https://user-images.githubusercontent.com/30641714/58937187-48f65400-87a4-11e9-8b81-c453d67b171a.png)

# 事件处理程序

HTML 事件处理程序
DOM0 级事件处理程序

内联模型、脚本模型

只支持冒泡阶段，跨浏览器优势，会以最快的速度绑定

事件流描述的是从页面中接受事件的顺序

> DOM2 级事件处理程序

捕获阶段、目标阶段、冒泡阶段

```js
addEventListener(event: /* 事件名 */, callback, useCapture = true : /* 让事件在捕获阶段触发 */))
removeEventListener(event: /* 事件名 */, callback, useCapture = true: /* 让事件在捕获阶段触发 */))
```

**event.stopPropagation** 会阻止冒泡

**event.stopImmediatePropagation** 目标阶段的节点绑定了多个事件，stopPropagation 不会生效

target 返回触发事件的元素

currentTarget 返回的是绑定事件的元素

> IE 事件处理程序

attachEvent()添加事件
detachEvent()删除事件
这两个方法接收相同的两个参数：事件处理程序名称与事件处理函数

# 事件对象

> DOM 中的事件对象

type 获取事件类型
target 事件目标
stopPropagation() 阻止事件冒泡
preventDefault() 阻止事件的默认行为

> IE 中的事件对象

type 获取事件类型
srcElement 事件目标
cancelBubble=true 阻止事件冒泡
returnValue=false 阻止事件的默认行为

# 事件代理

祖先级 DOM 元素绑定一个事件，当触发子孙级 DOM 元素的事件时，利用事件流的原理来触发绑定在祖先级 DOM 的事件

```html
<ul id="list">
  <li class="item-1">1</li>
  <li class="item-2">2</li>
  <li class="item-3">3</li>
  <li class="item-4">4</li>
  <li class="item-5">5</li>
</ul>
<p id="text">文本</p>

<script>
  var list = document.getElementById('list')
  list.addEventListener('click', (event) => {
    if (event.target.className.indexOf('item-') === 0) {
      text.innerHTML = event.target.innerHTML
    }
  })
</script>
```

# ref

[浏览器事件代理机制的原理是什么？](https://github.com/YvetteLau/Step-By-Step/issues/20#issuecomment-498941046)
