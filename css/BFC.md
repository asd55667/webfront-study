# 块级格式化上下文 (block formating context, BFC)

规定了内部 Block-level Box 布局的独立渲染区域, 与区域外部毫不相干

# **BFC 定位方案**：

内部的盒子会以垂直分布
Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
BFC 的区域不会与 float box 重叠。
独立的渲染容器，不受外部影响，不影响外部
计算 BFC 的高度时, 浮动元素高度也计算在内

# **触发 BFC**

- 根元素 html
- float:both,left,right; 不为 none（默认）
- overflow:hidden,auto,scroll(除了 visible); 不为 visible（默认）
- display 的值为 inline-block、table-cell、table-caption
- position 的值为 absolute 或 fixed

# **BFC 作用**

- 实现更健壮、更智能的自适应布局

- 清除浮动

- 消除 margin 重叠

父级相对于浏览器进行定位, 但子级没有相对于父级定位，margin 重叠， 取二者其大，不会累加

解决方法：
在重合元素外包裹一层容器，并触发该容器的 BFC

# ref

[什么是 BFC？BFC 的规则是什么？如何创建 BFC？](https://github.com/YvetteLau/Step-By-Step/issues/15)
[50 道 CSS 基础面试题](https://segmentfault.com/a/1190000013325778)
[(2019)[前端]面试题[1]：CSS BFC 是什么【BFC 详解】](https://cloud.tencent.com/developer/article/1538354)
