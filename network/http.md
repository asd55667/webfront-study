## http 请求几种方法及区别，尤其 get/post 的幂等性

一个 HTTP 方法是**幂等**的，指的是同样的请求被执行一次与连续执行多次的效果是一样的，服务器的状态也是一样的。换句话说就是，幂等方法不应该具有副作用

[`GET`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/GET)，[`HEAD`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/HEAD)，[`PUT`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/PUT)和[`DELETE`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/DELETE) 等方法都是**幂等**的

[`POST`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods/POST) 方法不是。所有的 [safe](https://developer.mozilla.org/en-US/docs/Glossary/safe) 方法也都是幂等的。

幂等性只与后端服务器的实际状态有关

## http 状态码，尤其 301 和 302 区别，304

301 moved permanently 表示**永久重定向**

302 表示**临时性重定向**, 本次请求暂且使用**新 url**。302 与 301 的区别是，302 表示临时性重定向，重定向的 url 还有可能还会改变。

303 表示请求的资源路径发生改变，使用 GET 方法请求**新 url**。她与 302 的功能一样，但是明确指出使用 GET 方法请求**新 url**。

**304 not modified** 客户端发送附带条件的请求时（if-matched,if-modified-since,if-none-match,if-range,if-unmodified-since 任一个）服务器端允许请求访问资源，但因发生请求未满足条件的情况后，直接返回 304Modified（服务器端资源未改变，可直接使用客户端未过期的缓存）304 状态码返回时，不包含任何响应的主体部分。

## http1.0/1.1/2.0/3.0

**降低延迟**

多路复用、 多个请求 stream 共享一个 tcp 连接 解决了 HOL blocking

**请求优先级**

连接共享可能导致关键请求被阻塞、 SPYD 可以给每个 request 设置优先级

浏览器加载首页 首页的 html 内容优先展示 之后是各种静态资源 脚本加载

**首部压缩**

**https**

**服务端推送**

采用 SPYD 的网页 客户端收到 css 数据时， 服务端会推送对应 js 给客户端 客户端再度请求 js 文件时 可从缓存直接读

http2 的多路复用与 http1.1 长连接复用的区别

Http1 一个请求消耗一个连接

Http1.1 pipeline 串行单线程吃力 后面的请求需等待前面的请求返回 前面的超时后面的会阻塞

http2 某个请求的超时不会阻塞其他正常执行的请求


# http与https