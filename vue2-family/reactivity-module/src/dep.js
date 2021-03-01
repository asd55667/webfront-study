export function Dep() {
  this.dep = new Set()
}

Dep.prototype.depend = function () {
  if (Dep.target) this.dep.add(Dep.target)
}

Dep.prototype.notify = function () {
  this.dep.forEach((watcher) => watcher.update())
}

Dep.target = null
const targetStack = []

export function pushTarget(_target) {
  if (Dep.target) targetStack.push(Dep.target)
  Dep.target = _target
}

export function popTarget() {
  Dep.target = targetStack.pop()
}
