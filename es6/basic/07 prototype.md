# 原型链

对象本身没有的属性, 会沿着原型链 \_\_proto\_\_ 继续搜索, 直到找到为止或者 \_\_proto\_\_ 为 null

**共享原型链**

```js
var obj = { name: 'obj' }
var obj2 = { name: 'obj2' }
obj.toString === obj2.toString

obj.toString() === obj.toString.call(obj)

[].push(1) === Array.prototype.push.call([], 1)

```

prototype 和 **\_\_proto\_\_** 的不同点在于 prototype 是构造函数的属性, 而 **\_\_proto\_\_** 是对象的属性

# 原型链继承

优点:
引用类型的方法被所有实例共享

缺点：
子类实例共享属性, 实例间的属性会互相影响

构造函数都有一个原型对象, 实例包含原定对象的内部指针, 如果让原型对象等于实例, 就完成了原型链的继承

```js
function Animal(name, six) {
  this.name = name
  this.six = six
}
Animal.prototype.cry = function () {
  return '嘤嘤嘤'
}

function Dog(name, age) {
  this.name = name
  this.age = age
}

Dog.prototype = new Animal('怪兽', '未知')
Dog.prototype.run = function () {
  return '鸭子类型'
}

var erHa = new Dog('哈士奇', 5)
console.info(erHa.name) // 哈士奇
console.info(erHa.six) // 未知
console.info(erHa.age) // 5
console.info(erHa.cry()) // 嘤嘤嘤
console.info(erHa.run()) // 鸭子类型
```

# ref

[原型链继承的优缺点是什么？使用原型链继承实现 Dog 继承 Animal](https://github.com/YvetteLau/Step-By-Step/issues/34)
