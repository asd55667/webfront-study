function asyncAdd(a, b, callback) {
  doAsyncWork(a, b).then((value) => callback(value))
}

// 代码补充
// asyncGetValue(1, 2).then((v) => console.log(v))
function asyncGetValue(a, b) {
  // .....
  return new Promise((res) => {
    asyncAdd(a, b, res)
  })
}

const list = [
  { a: 1, b: 2 },
  { a: 100, b: 200 },
  { a: 11, b: 21 },
  { a: 31, b: 41 },
  { a: 41, b: 51 },
]

function asyncGetValues(list) {
  // .....
  return Promise.all(
    list.map((x) => {
      return new Promise((res) => asyncAdd(x.a, x.b, res))
    }),
  )
}

// 并发控制
return new Promise((res) => {
  let cnt = 0
  let length = list.length
  let ansList = Array(length).fill(false)
  while (cnt < Math.min(length, maxConcurrent)) next()
  const next = () => {
    let current = cnt++
    let currentObj = list[current]
    addAsync(currentObj.a, currentObj.b, (value) => {
      ansList[current] = value
      if (cnt < length) next()
    })
    if (cnt >= length && ansList.filter((x) => x === false).length === 0)
      res(ansList)
  }
})
