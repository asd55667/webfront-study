# 隐式转换

涉及隐式转换最多的两个运算符 + 和 ==

三种转换：

## 将值转为原始值，ToPrimitive()

```js
ToPrimitive(input: any, PreferredType: (Number | String))

// PreferredType : Number
return Primitive ? Primitive :
        Object ? Object.valueOf() of Primitive => Primitive :
            Object.toString() of Primitive => Primitive : Error
// PreferredType : String
return Primitive ? Primitive :
        Object ? Object.toString() of Primitive => Primitive :
            Object.valueOf() of Primitive => Primitive : Error

// prototype.valueOf
Number、Boolean、String => Primitive
Date => Number => Primitive
Other => Other
```

## 将值转为数字 ToNumber()

```js
ToNumber(input: any)

undefined => NaN
null => +0
Boolean => truthy ? 1 : +0
Number => Number
String => isNumber ? Primitive : NaN
Object => ToPrimitive(Object, Number) => Primitive
```

## 将值转为字符串 ToString()

```js
ToString(input: any)

undefined => 'undefined'
null => 'null'
Boolean => truthy ? 'true' : 'false'
Number => Number.toString()
String => String
Object =>  ToPrimitive(Object, String) => Primitive.ToString()
```

# x == y

```js
type x === type y => x === y
undefined == null
x: Number == y: String => x == ToNumber(y)
x: Number == y: Boolean => x == ToNumber(y)
x: Number == y: Object => x == ToPrimitive(y)

```

# x + y

```js
x: Number + y : String => ToString(x) + y
x: Object + y:  String => ToString(x) + y

var x = {
  valueOf: ()=>{return 0}
}
var y = 'wcw'
x + y // wcw0

```

# Examples

```js
;[] == !{}
{
}
;+{}
```

## Question `a == 1 && a == 2 && a == 3` === true

```js
// toString
var a = {
  i: 1,
  toString: function () {
    return a.i++
  },
}

// valueOf
var a = {
  i: 1,
  valueOf() {
    return this.i++
  },
}
// Symbol.toPrimitive
var a = {
  i: 1,
  [Symbol.toPrimitive]() {
    return this.i++
  },
}

// defineProperty
var i = 1
Object.defineProperty(window, 'a', {
  get() {
    return i++
  },
})

// Proxy
var a = new Proxy(
  {},
  {
    i: 1,
    get: function () {
      return () => {
        this.i++
      }
    },
  },
)
```

# ref

[你所忽略的 js 隐式转换](https://juejin.cn/post/6844903557968166926)
[如何让 (a == 1 && a == 2 && a == 3) 的值为 true？](https://github.com/YvetteLau/Step-By-Step/issues/9#issuecomment-495684588)
