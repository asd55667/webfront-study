# Data Type

# Primitives 基本数据类型

nnusb null、Number、undefined、String、Boolean、 Symbol（ES6）、 BigInt（future val > 2^53)

# 复杂数据类型

Object
原生复杂数据类型有 Array、Function、Date、RegExp、 Set,Map(ES6)

# null 不是对象

不同的对象在底层都是用二进制来表示的
在 js 中二进制前 3 位是 0 即判断是为对象，null 的二进制表示是全 0

> primitives

- 000：对象(object)
- 1：整型(int)
- 010：双精度浮点型(double)
- 100：字符串(string)
- 110：布尔值(boolean)
- undefined (JSVAL_VOID)：-2 的 30 次方以内的整数。
- null (JSVAL_NULL) ：机器码 NULL 空指针，空指针引用 加上 对象标记还是 0，所以有 Number(null) === 0 跟 typeof null === 'object'

# 基本数据和复杂数据类型的区别

- 不同的内存分配
  基本数据类型： 存储在栈中的简单数据段；
  复杂数据类型： 存储在堆中的对象，栈中存储的变量的值是一个指针
- 不同的访问机制
  基本数据类型： 按值访问
  复杂数据类型： 按引用访问，JS 不允许直接访问保存在堆内存中的对象
- 复制变量时的不同
  基本数据类型： 值拷贝
  复杂数据类型： 浅拷贝、深拷贝
- 函数调用的参数传递
  基本数据类型： 传值调用
  复杂数据类型： 传址调用

# ref

[JS 中基本数据类型有哪几种？null 是对象吗？基本数据和复杂数据类型有什么区别？](https://github.com/YvetteLau/Step-By-Step/issues/5)
