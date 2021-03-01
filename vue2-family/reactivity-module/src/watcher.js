import { pushTarget, popTarget } from './dep'

export default function Watcher(getter) {
  this.getter = getter
  this.update()
}

Watcher.prototype.update = function () {
  pushTarget(this)
  this.value = this.getter()
  popTarget()
}
