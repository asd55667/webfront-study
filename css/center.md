# 水平垂直居中

块级元素，设置宽高，需要谁居中，给其设置 margin: 0 auto
使用绝对定位：首先设置父元素为相对定位，再设置子元素为绝对定位，设置子元素的 left:50%，即让子元素的左上角水平居中；
行内元素：首先看它的父元素是不是块级元素，如果是，则直接给父元素设置 text-align: center; 如果不是，则先将其父元素设置为块级元素，再给父元素设置 text-align: center;
使用 flexbox 布局，只需要给待处理的块状元素的父元素添加属性 display: flex; justify-content: center;

# 实现
## 方法 1：绝对定位+margin:auto

```css
#app {
  width: 200px;
  height: 200px;
  background: green;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
```

## 方法 2：绝对定位+负 margin

```css
#app {
  width: 200px;
  height: 200px;
  background: green;

  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
```

## 方法 3：绝对定位+transform

```css
#app {
  width: 200px;
  height: 200px;
  background: green;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

## 方法 4：flex 布局

## 方法 5：table-cell 实现居中

# ref
[使用CSS让一个元素水平垂直居中](https://github.com/YvetteLau/Step-By-Step/issues/42#issuecomment-508598397)
[50 道 CSS 基础面试题（附答案）](https://segmentfault.com/a/1190000013325778)