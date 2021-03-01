# 跨站脚本攻击 Cross Site Script

一种代码注入攻击,通过向网站注入恶意的 HTML 代码

# XSS 类型:

## dom 型

> 攻击步骤：

通过一些 api 向网站注入一些恶意的 HTML 代码

取出和执行恶意代码由浏览器端完成，属于前端 JavaScript 自身的安全漏洞，而其他两种 XSS 都属于服务端的安全漏洞

> 预防:

在使用 .innerHTML、.outerHTML、document.write() 时要特别小心，不要把不可信的数据作为 HTML 插到页面上，而应尽量使用 .textContent、.setAttribute() 等
使用 Vue/React 技术栈，并且不使用 v-html/dangerouslySetInnerHTML 功能，就在前端 render 阶段避免 innerHTML、outerHTML 的 XSS 隐患。

## 持久型

> 攻击步骤：

攻击者通过把代码提交到后台数据库中;当用户下次打开的时候就会从后台接收这些恶意的代码

常见于带有用户保存数据的网站功能，比如论坛发帖、商品评价、用户私信等

> 预防:

改成纯前端渲染，把代码和数据分隔开

## 反射型

> 攻击步骤：

通过在请求地址上加入恶心的 HTML 代码

常见于通过 URL 传递参数的功能，如网站搜索、跳转等。由于需要用户主动打开恶意的 URL 才能生效，攻击者往往会结合多种手段诱导用户点击

> 预防:

用 encodeURIComponent 对 url 中的参数进行编码

## 其他 XSS 攻击防范

- Content Security Policy（CSP）
- 输入内容长度控制，增加 XSS 攻击的难度
- HTTP-only Cookie: 禁止 JavaScript 读取某些敏感 Cookie，攻击者完成 XSS 注入后也无法窃取此 Cookie
- 验证码：防止脚本冒充用户提交危险操作
- 对用户的输入使用 innerText 或者 textContent 进行设置，而不是使用 innerHTML 或者 outerHTML 进行设置
- 关键请求使用验证码，比如转账请求，避免恶意脚本发送这些关键请求

> 对用户输入转义(适用于所有类型的 xss 攻击)

```js
function escapeHTML(str) {
  str.replace(/[<>& "]/g, function (match) {
    switch (match) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case ' ':
        return '&nbsp;'
      case '"':
        return '&quot;'
    }
  })
}
```

# ref

[什么是 XSS 攻击，XSS 攻击可以分为哪几类？如何防范 XSS 攻击](https://github.com/YvetteLau/Step-By-Step/issues/18)
[XSS 跨站脚本攻击](https://fecommunity.github.io/front-end-interview/%E5%89%8D%E7%AB%AF%E7%9F%A5%E8%AF%86%E4%BD%93%E7%B3%BB/Web%E5%AE%89%E5%85%A8/1.XSS%E6%94%BB%E5%87%BB.html)