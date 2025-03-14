# 常量与变量

## 常量

通常常量会放在模块的顶层，或者作为类的属性。

最佳实践：

- 优先使用全大写命名约定（如 CONFIG_PATH）和模块隔离。

- 对需要严格保护的常量，可结合 enum、类属性或第三方库。

- 始终通过代码审查和团队规范确保常量不被意外修改。

## 变量

### 变量的命名

Python 作为动态类型语言，变量不需要声明类型。

- 命名需遵循 snake_case 风格（如 user_name），以字母或下划线开头，不能是数字或关键字，区分大小写。

- Python 变量无需显式声明类型，类型在赋值时自动推断，且可随时改变。

- Python 变量本质上是对内存中对象的引用，而不是直接存储数据的容器。

### 变量的作用域：

- 局部变量：在函数内部定义，仅在函数内有效。

- 全局变量：在模块或函数外定义，全局有效（需用 global 关键字在函数内修改）。

- 包变量：嵌套函数中通过 nonlocal 访问外层非全局变量。

### 可变与不可变变量

不可变对象：赋值后值不可修改（如 int, str, tuple）

```
a = 10
a += 5 # 实际是创建新对象 15，a 指向新对象
```

可变对象：值可原地修改（如 list, dict, set）。

```
lst = [1,2,3]
lst.append(4) # 直接修改原对象，内存地址不变
```

### 变量的内存管理

Python 是通过 引用计数 和 垃圾回收 自动管理内存

- 变量引用对象时，对象的引用计数增加。

- 当引用计数归零时，对象被自动回收。

### 变量与对象的交互

- 赋值

```
a = [1,2] # 变量 a 指向列表对象
```

- 浅拷贝

```
b = a.copy() # b 是新的列表，但内部元素与原列表共享引用
```

- 深拷贝

```
import copy

c = copy.deepcopy(a) # 完全独立的新对象
```

### 特殊变量

\_(单下划线)：临时变量或忽略值

```
for _ in range(5):
    print(_)
```

\_\_name\_\_：双下划线包围的变量通常是 Python 内置的特殊变量或方法。

私有变量：约定用单下划线前缀表示“私有”（如 \_internal_data），但无强制限制。

### 查看变量信息的方式

- 查看变量的类型

```
a = 10
print(type(a))
```

- 查看变量的值

```
a = 10
print(repr(a))
```

- 内存地址

```
x = 42
print(hex(id(x)))  # 输出类似 0x7f8e1c012a70
```

- 引用计数

```
import sys
x = [1, 2]

# 传递对象给该函数时会临时增加一个引用，结果需减 1 才是实际值
print(sys.getrefcount(x) - 1) 
```

- 判断是否为同一对象

```
a = [1, 2]
b = a
print(a is b)  # True
```

- 查看对象的属性和方法

```
x = "hello"
print(dir(x))  # 输出字符串的所有方法（如 upper, split 等）
```

- 查看实例的命名空间

通过 vars() 或 \_\_dict\_\_ 查看对象的属性字典：

```
class MyClass:
    def __init__(self):
        self.a = 1

obj = MyClass()
print(vars(obj))    # 输出: {'a': 1}
print(obj.__dict__) # 同上
```

- 查看对象的内存

```
import sys
x = [1, 2, 3]
print(sys.getsizeof(x))  # 输出列表自身占用的字节数
```

- 其他

不可变对象的复用：如小整数（-5~256）、空元组等会被 Python 缓存复用。

深浅拷贝的影响：copy.copy() 和 copy.deepcopy() 会改变对象的内存地址。

动态语言的灵活性：某些对象（如类实例）可能动态添加属性，需结合 dir() 和 vars() 分析。