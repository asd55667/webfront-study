# JSON with Padding JSONP

同源协议指的是页面若域名，端口，协议都相同, 为了保证用户信息的安全，防止恶意的网站窃取数据,

> 原理

script 标签的 src 属性引用资源不受同源限制， 网络请求的同时传一个 callback 回调方法名作为参数， 服务端接受函数名生成返回 json 格式资源的代码

jsonp 只能使用 GET 方法

```js
function jsonp({ url, params, callback }) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script') // 1
    window[callback] = function (data) {
      resolve(data)
      document.body.removeChild(script) // 4
    }

    params = { ...params, callback }
    let arrs = []

    for (let key of params) {
      arrs.push(`${key} = ${params[key]}`)
    }
    script.src = `${url}?${arrs.join('&')}` // 2
    document.getElementByTagName('head')[0].appendChild(script) // 3
  })
}

function fn(data) {
  console.log(data)
}

jsonp({
  url: 'http://localhost:300/jsonp',
  params: {},
  callback: 'fn',
}).then((data) => {
  console.log(data)
})

// server
let express = require('express')
let app = express()
app.get('/jsonp', (req, res) => {
  let { callback } = req.query
  res.send('response')
})
app.listen(3000)
```

# ref

[JSONP 原理及简单实现](https://github.com/YvetteLau/Step-By-Step/issues/30)
