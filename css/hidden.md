# 隐藏元素

# opacity: 0;

- DOM 结构：透明度为 100%，元素隐藏，占据空间；
- 事件监听：可以进行 DOM 事件监听；
- 性 能：提升为合成层，不会触发重绘，性能较高；
- 继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；
- transition：opacity 可以延时显示和隐藏

# visibility: hidden;

- DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；
- 事件监听：无法进行 DOM 事件监听；
- 性 能：动态改变此属性时会引起重绘，性能较高；
- 继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；
- transition：visibility 会立即显示，隐藏时会延时

# display: none;

- DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；
- 事件监听：无法进行 DOM 事件监听；
- 性能：动态改变此属性时会引起重排，性能较差；
- 继承：不会被子元素继承，毕竟子类也不会被渲染；

# hidden 属性

直接隐藏元素, 跟 display 表现一致

# position

```css
 {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

- DOM 结构: 屏幕的可视区之外，占据空间
- 事件监听：可以进行 DOM 事件监听, 无法与其进行直接交互；
- 性能：本身渲染成本很高，重绘；

# clip-path

```css
clip-path: polygon(0 0, 0 0, 0 0, 0 0);
```

# overflow

```css
 {
  width: 0;
  height: 0;
  overflow: hidden;
}
```

# transform

```css
 {
  transform: translate(-9999px, -9999px);
  /* or */
  transform: scale(0);
}
```

# 纯文本的隐藏

```css
 {
  text-indent: -9999px;
  /* or */
  font-size: 0;
}
```

|  隐藏方式  | 占据原来的空间 | 直接跟用户交互 | 直接响应 DOM 事件 |
| :--------: | :------------: | :------------: | :---------------: |
|  opacity   |       是       |       是       |        是         |
| visibility |       是       |       否       |        否         |
|  display   |       否       |       否       |        否         |
|   hidden   |       否       |       否       |        否         |
|  position  |       否       |       否       |        否         |
| clip-path  |       是       |       否       |        否         |
|  overflow  |       否       |       否       |        否         |
| transform  |       是       |       否       |        否         |

# ref

[如何隐藏页面中的某个元素？(越多方式越好)](https://github.com/YvetteLau/Step-By-Step/issues/19#issuecomment-499141317)
