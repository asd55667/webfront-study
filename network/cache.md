# 强缓存，协商缓存

具体判断使用那种缓存机制，通过 `http` `header`字段的不同

**强缓存**

`Expires` HTTP/1.0 绝对时间

Cache-Control` `HTTP/1.1 相对时间

- max-age 第一次的请求时间 和`max-age` 计算出资源过期时间
- public 时长为第一次请求资源时间与 max-age 之和

Cache-Control 的优先级高于 **Expires**

**协商缓存**

1、浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，会在 `Respone` 的 `Header` 的 `Last-Modified` 值设置为，该资源最后修改的时间；

2、第二次请求的时候，在 `Request` 的 `Header` 上加上 `If-Modified-Since`，值为上次请求资源的 `Last-Modified`；

3、服务器收到 `If-Modified-Since` 与服务器文件的 `Last-Modified` 比对，

- 命中：无变化则返回 `304`，不返回资源。浏览器收到 `304` 使用本地缓存；不更新 `Last-Modified`；
- 不命中：有变化返回 `200`，重新更新 `Last-Modified`、返回 `200`、返回资源。
- 200 304


[link](https://github.com/amandakelake/blog/issues/41)
