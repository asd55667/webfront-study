PENDING = Symbol('')
RESOLVED = Symbol('')
REJECTED = Symbol('')

function Promise(executor) {
  if (typeof executor !== 'function') throw Error('')

  if (!(this instanceof Promise)) return new Promise(executor)

  const self = this
  self.callbacks = []
  self.status = PENDING

  function resolve(value) {
    setTimeout(() => {
      if (self.status !== PENDING) return
      self.status = RESOLVED
      self.data = value

      self.callbacks.forEach((cb) => {
        cb.onResolved(value)
      })
    })
  }

  function reject(reason) {
    setTimeout(() => {
      if (self.status !== PENDING) return

      self.status = REJECTED
      self.data = reason
      self.callbacks.forEach((cb) => {
        cb.onRejected(reason)
      })
    })
  }

  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err)
  }
}

function resolvePromise(promise, x, resolve, reject) {
  let then,
    thenCalledOrThrow = false
  if (promise === x) {
    return reject(new TypeError('circle'))
  }

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            resolvePromise(promise, y, resolve, reject)
          },
          (r) => {
            if (thenCalledOrThrow) return
            thenCalledOrThrow = true
            reject(r)
          },
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : (val) => val
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (err) => {
          throw err
        }

  const self = this
  let promise

  if (self.status === RESOLVED) {
    return (promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onResolved(self.data)
          resolvePromise(promise, x, resolve, reject)
        } catch (e) {
          return reject(e)
        }
      })
    }))
  }
  if (self.status === REJECTED) {
    return (promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onRejected(self.data)
          resolvePromise(promise, x, resolve, reject)
        } catch (e) {
          return reject(e)
        }
      })
    }))
  }
  if (self.status === PENDING) {
    return (promise = new Promise((resolve, reject) => {
      self.callbacks.push({
        onResolved: (value) => {
          try {
            const x = onResolved(value)
            resolvePromise(promise, x, resolve, reject)
          } catch (e) {
            return reject(e)
          }
        },
        onRejected: (reason) => {
          try {
            const x = onRejected(reason)
            resolvePromise(promise, x, resolve, reject)
          } catch (e) {
            return reject(e)
          }
        },
      })
    }))
  }
}


Promise.prototype.catch = function (err) {
  return Promise.then(null, onRejected)
}

Promise.prototype.finally = function (fn) {
  return this.then(
    (value) => {
      setTimeout(fn)
      return value
    },
    (err) => {
      setTimeout(fn)
      throw err
    },
  )
}

Promise.resolve = function (value) {
  var promise = new Promise((resolve, reject) => {
    resolvePromise(promise, value, resolve, reject)
  })
  return promise
}

Promise.reject = function (reason) {
  return new Promise((undefined, reject) => {
    reject(reason)
  })
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0
    const result = new Array(promises.length)
    promises.forEach((p) => {
      Promise.resolve(p).then(
        (value, idx) => {
          result[idx] = value
          count++
          if (count === promises.length) {
            return resolve(result)
          }
        },
        (reason) => {
          return reject(reason)
        },
      )
    })
  })
}

Promise.allSettled = function (promises) {
  let wrappedPromises = promises.map((p) =>
    Promise.resolve(p).then(
      (val) => ({ status: 'fulfilled', value: val }),
      (err) => ({ status: 'rejected', reason: err }),
    ),
  )
  return Promise.all(wrappedPromises)
}

Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    promise.forEach((p) => {
      Promise.resolve(p).then(
        (value) => {
          resolve(value)
        },
        (reason) => {
          reject(reason)
        },
      )
    })
  })
}

Promise.deferred = Promise.defer = function () {
  const dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}

module.exports = Promise
