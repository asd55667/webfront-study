import { Dep } from './dep'

function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export default function reactive(data) {
  if (isObject(data)) {
    Object.keys(data).forEach((key) => {
      defineReactive(data, key)
    })
  }
  return data
}

function defineReactive(data, key) {
  let oldVal = data[key]
  const dep = new Dep()

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend()
      return oldVal
    },
    set(value) {
      if (oldVal == value) return
      oldVal = value
      dep.notify()
    },
  })

  if (isObject(oldVal)) {
    reactive(oldVal)
  }
}
