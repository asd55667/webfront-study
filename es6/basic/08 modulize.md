# 模块化

# CommonJS

`同步加载`模块, 在服务端，模块以文件存储在本地磁盘， 在浏览器端， 网络加载模块应以异步的方式
输出值的拷贝、js 对象， 运行时加载
运行时加载， 可以根据代码逻辑不同， 按需加载模块， 必要时加载模块

```js
// module.js  or  module.cjs
module.exports = {}

// script.js
require('./module')
```

> 加载 ES6 模块

```js
;(async () => {
  await import('./my-app.mjs')
})()
```

# ES6

ES6 的模块不是对象，import 命令会被 JavaScript 引擎`静态分析`, 无法实现条件加载, `import` 指令需在代码逻辑之上
输出值的引用，指定输出的代码， 编译时加载
编译时输出接口， 静态分析时, 生成只读引用, 类似静态语言中的符号表

```js
// module.js or  module.ejs
export function module() {}
export default function func(){}

import module from './module'
import * from './module'
import func as _ from './module'

```

> 加载 CommonJS 模块

```js
import packageMain from './commonjs-package'
const { method } = packageMain
```

## 同时要支持 CommonJS 和 ES6

原始模块是 ES6 , 给出一个整体输出接口

```js
export default obj
```

原始模块是 CommonJS , 加一个包装层

```js
import cjsModule from '../index.js'
export const foo = cjsModule.foo
```

另一种做法, 指明加载入口

```json
"exports"：{
    "require": "./index.js"，
    "import": "./esm/wrapper.js"
}
```

# AMD

RequireJS 的规范
也支持 CMD 的写法，同时还支持将 require 作为依赖项传递
推崇依赖前置

注入依赖思想， 让多个 js 文件在 define()函数中以数组元素的形式进行注入， 然后在回调函数中被使用

API 默认是一个当多个用

# CMD

SeaJS 的规范
延迟执行
API 严格区分
推崇依赖就近

# ref

[前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.cn/post/6844903576309858318)
[Node.js 如何处理 ES6 模块](https://www.ruanyifeng.com/blog/2020/08/how-nodejs-use-es6-module.html)
[AMD 和 CMD 的区别有哪些？](https://www.zhihu.com/question/20351507)
[AMD 规范](https://github.com/amdjs/amdjs-api/wiki/AMD)
[CMD 规范](https://github.com/seajs/seajs/issues/242)
