# Inheritance of js

```js
function Parent() {}
function Child() {}

Child.prototype = Parent.prototype
var child = new Child()
```

Child and Parent function share same prototype

```js
child // 'object'
// Child {}

Child
// ƒ Child(){}

child.prototype
// undefined

child.__proto__
Child.prototype
Parent.prototype
// {constructor: ƒ}

child.constructor
Parent
Parent.prototype.constructor
// ƒ Parent(){}

Child.constructor
Parent.constructor
Function.constructor
// ƒ Function() { [native code] }

Child.__proto__
Parent.__proto__
Function.prototype
// ƒ () { [native code] }

Parent.prototype.__proto__
// Object.prototype
```

```js
Child.prototype === Parent.prototype
// false

child.constructor
// ƒ Child() {}
```

# Boilerplate for subclassing

```js
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
const child = new Child()
```

# 原型链继承

多个实例共享原型链， 单个实例对原型链上的引用属性的修改， 会作用到所有实例

![](https://user-gold-cdn.xitu.io/2018/10/30/166c2c0107fd80c7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

```js
var Parent = function () {
  this.name = 'wcw'
}
Parent.prototype.getName = function () {
  return this.name
}

var Child = function () {
  this.age = 26
}

Child.prototype = new Parent()
Child.prototype.getAge = function () {
  return this.age
}
```

# 构造函数继承

复制父类的实例给子类, 只继承父类的实例属性, 不继承原型属性

```js
var Parent = function () {
  this.name = 'wcw'
}
Parent.prototype.getName = function () {
  return this.name
}
var Child = function () {
  Parent.call(this)
}
```

# 组合继承

```js
function Parent(name) {
  this.name = name
}
Parent.prototype.sayName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child
Child.prototype.sayAge = function () {
  console.log(this.age)
}
```

组合继承调用了两次父构造函数, 生成了两个实例属性, 实例覆盖了原型上的属性

# 寄生继承

get one copy of parent, and then mixin with child

```js
function Vehicle() {
  this.engines = 1
}

Vehicle.prototype.ignition = function () {
  console.log('ignition')
}

Vehicle.prototype.drive = function () {
  this.ignition()
  console.log('drive')
}

function Car() {
  var car = new Vehicle()
  car.wheels = 4
  var carDrive = car.drive
  car.drive = function () {
    carDrive.call(this)
    console.log(`${this.wheels} wheels`)
  }
  return car
}
```

# 组合寄生继承

## function class inherit

```js
function _extends(Child, Parent) {
  var prototype = Object.create(Parent.prototype)
  prototype.constructor = Child
  Child.prototype = prototype
  // static property
  Object.keys(Parent).forEach((key) => {
    Child[key] = Parent[key]
  })
}

function Parent(name) {
  this.name = name
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

//  'static' property on the constructor
// does not declare the variables in the class,  they will be globally scoped
// https://stackoverflow.com/questions/29852263/javascript-is-prototype-synonymous-with-static

Parent.sayHello = function () {
  console.log('hello')
}

// Properties on the prototype are instance properties
// all instances created from constructor will share a single copy of that method on the prototype.
Parent.prototype.sayName = function () {
  console.log('my name is ' + this.name)
}

_extends(Child, Parent)

Child.prototype.sayAge = function () {
  console.log('my age is ' + this.age)
}
```

## `ES6 extends` **寄生组合式继承**

- 子类构造函数的`__proto__`指向父类构造器，继承父类的静态方法
- 子类构造函数的`prototype`的`__proto__`指向父类构造器的`prototype`，继承父类的方法。
- 子类构造器里调用父类构造器，继承父类的属性。

```js
class Parent {
  constructor(name) {
    this.name = name
  }
  static sayHello() {
    console.log('hello')
  }
  sayName() {
    console.log('my name is ' + this.name)
    return this.name
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  sayAge() {
    console.log('my age is ' + this.age)
  }
}
```

## test cast

```js
let parent = new Parent('Parent')
let child = new Child('Child', 18)
console.log('parent: ', parent) // parent:  Parent {name: "Parent"}
Parent.sayHello() // hello
parent.sayName() // my name is Parent
console.log('child: ', child) // child:  Child {name: "Child", age: 18}
Child.sayHello() // hello
child.sayName() // my name is Child
child.sayAge() // my age is 18
```

# ref

[面试官问：JS 的继承](https://juejin.cn/post/6844903780035592205)
[寄生组合式继承的基本思想是什么？有哪些优缺点](https://github.com/YvetteLau/Step-By-Step/issues/38)
[JavaScript 常用八种继承方案](https://juejin.cn/post/6844903696111763470)
