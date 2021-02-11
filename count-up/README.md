# count-up

> A Vue.js project

refence [https://github.com/PanJiaChen/vue-countTo](https://github.com/PanJiaChen/vue-countTo)

# webpack

> entry

single string of filename
auto install in entry.js check global

> output

out-dir, out-bundle-file

pack for script tag, libary umd modulize

> loader

parse no js json file,

css, vue, img with dependency

> plugin

uglify html

> mode

production development
sourcemap

# rAF polyfill

> prefixer

> server-side

function placeholder

> browser-

search rAF of winodw with prefixer

requestAnimationFrame, cancelAnimationFrame

> polyfill with settimeout/cleartimeout

polyfill implement new feature of es6 with es5

rAF function / return id of settimeout
60fps macro job upbound to 16ms

# count component

display number's incremented change with js animation

incremented range | startVal ~ endVal
how long animation to display | duration

动画入口， start， 递归调用rAF，并保留回调句柄，
递归将在事件队列中加入一系列连续的定时函数， 定时线程间隔0～16ms通知触发线程，并将count回调放入执行队列，
rAF句柄为组件内共享数据，随执队列队尾的定时任务而变更引用
平均每秒钟执行60个宏任务，重绘60次displayValue

