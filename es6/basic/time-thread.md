# 定时器线程

宏任务队列包括：
script, setTimeout, setInterval, setImmediate, I/O, UI 渲染

微任务队列包括：

process.nextTick, MutationOberver, Promise

微任务队列执行顺序大于宏任务队列

执行顺序:
执行同步代码，这是宏任务
执行栈为空，查询是否有微任务要执行
必要时渲染 UI
进行下一轮的 EventLoop ，执行宏任务中的异步代码



setTimeout 出现误差是因为：

要先执行同步任务，才会执行异步任务；
异步任务中，微任务执行顺序大于宏任务执行顺序

如果当前 执行栈 所花费的时间大于 定时器 时间，那么定时器的回调在 宏任务(macrotask) 里，来不及去调用，所有这个时间会有误差

如果 timeout 嵌套大于 5 层，而时间间隔小于 4ms，则时间间隔增加到 4ms。

# [setTimeout 倒计时为什么会出现误差？](https://github.com/YvetteLau/Step-By-Step/issues/21#issuecomment-499396674)
