# 类的定义

类通常包含属性和行为方法，类名采用大驼峰的方式。当然类名要简洁并且简明释义。

## 类的基本定义和示例

### 基本语法
```python
class ClassName:
    # 类属性
    class_attribute = value
    
    # 构造方法
    def __init__(self, parameters):
        # 实例属性
        self.instance_attribute = value
        
    # 实例方法
    def instance_method(self):
        pass
        
    # 类方法
    @classmethod
    def class_method(cls):
        pass
        
    # 静态方法
    @staticmethod
    def static_method():
        pass
```

### 实际示例
```python
class Student:
    # 类属性
    school_name = "Python大学"
    
    def __init__(self, name, age):
        # 实例属性
        self.name = name
        self.age = age
        self._score = 0  # 受保护属性
        self.__id = None  # 私有属性
        
    # 实例方法
    def study(self, subject):
        print(f"{self.name} 正在学习 {subject}")
        
    # 使用property装饰器
    @property
    def score(self):
        return self._score
        
    @score.setter
    def score(self, value):
        if 0 <= value <= 100:
            self._score = value
        else:
            raise ValueError("分数必须在0-100之间")
            
    # 类方法
    @classmethod
    def change_school(cls, new_name):
        cls.school_name = new_name
        
    # 静态方法
    @staticmethod
    def is_adult(age):
        return age >= 18
```

## 类的定义方式

| 方式            | 特点                           | 适用场景                 |
| --------------- | ------------------------------ | ------------------------ |
| 基本定义        | 最常见的定义方式               | 大多数场景               |
| 动态定义属性    | 运行时动态添加属性             | 需要灵活扩展属性的场景   |
| @property       | 将方法变成属性，控制访问和修改 | 需要对属性进行控制的场景 |
| @classmethod    | 定义类方法，绑定到类           | 需要操作类属性的场景     |
| @staticmethod   | 定义静态方法，不依赖类或对象   | 需要定义工具方法的场景   |
| __slots__       | 限制实例属性，减少内存占用     | 需要优化内存的场景       |
| type 动态创建类 | 动态创建类                     | 需要动态生成类的场景     |
| dataclasses     | 简化数据类的定义               | 需要存储数据的场景       |
| 抽象类          | 定义接口或基类，不能被实例化   | 需要定义接口的场景       |
| 命名元组        | 轻量级的类，适合存储不可变数据 | 需要存储简单数据的场景   |

## 属性访问控制以及分类

| 属性类型   | 命名方式                                     | 访问权限                           | 特点                       |
| ---------- | -------------------------------------------- | ---------------------------------- | -------------------------- |
| 公有属性   | name                                         | 外部可以直接访问和修改             | 公开数据，无访问限制       |
| 受保护属性 | 单下划线开头，\_name                         | 外部可以访问，但不推荐             | 提示开发者内部使用         |
| 私有属性   | 双下划线开头，\_\_name                       | 外部无法直接访问，只能在类内部访问 | 隐藏实现细节，保护数据     |
| 类属性     | 直接定义在类中，而不是在 \_\_init\_\_ 方法中 | 通过类名或实例访问，所有实例共享   | 定义常量、共享数据、默认值 |

## 方法访问控制以及分类

方法的访问控制是通过命名方式来实现的。

| 方法类型   | 命名规则                            | 访问权限                           | 典型用途                   |
| ---------- | ----------------------------------- | ---------------------------------- | -------------------------- |
| 公有方法   | 直接命名，如 my_method              | 外部可以直接调用                   | 公开方法，无访问限制       |
| 受保护方法 | 单下划线开头，如 \_protected_method | 外部可以调用，但不建议             | 提示开发者内部使用         |
| 私有方法   | 双下划线开头，如 \_\_private_method | 外部无法直接调用，只能在类内部调用 | 隐藏实现细节，保护方法逻辑 |

方法可以分为实例方法，类方法，静态方法等。

| 方法类型 | 定义方式                    | 参数              | 调用方式           | 使用场景                       |
| -------- | --------------------------- | ----------------- | ------------------ | ------------------------------ |
| 实例方法 | 默认方法，第一个参数是 self | 第一个参数是 self | 通过实例调用       | 操作实例属性或实例状态         |
| 类方法   | 使用 @classmethod 装饰器    | 第一个参数是 cls  | 通过类名或实例调用 | 操作类属性或执行与类相关的操作 |
| 静态方法 | 使用 @staticmethod 装饰器   | 无默认参数        | 通过类名或实例调用 | 执行与类或实例无关的操作       |

## 类的三个基本特征

类的三个主要特征：封装，继承，多态。

### 1、封装

封装是指将属性和方法捆绑在一起，形成一个独立的单元。封装可以隐藏内部的实现细节，只暴露必要的接口给外部使用。简单理解：隐藏内部实现，提供公共接口。

### 2、继承

一个子类从父类继承属性和方法，可以复用父类的代码，并且可以在子类中添加新的属性和方法，或者重写父类的方法。简单理解：复用代码，扩展功能。

### 3、多态

多态是指同一个方法在不同的类中可以有不同的实现。简单理解：统一接口，不同实现。

## 魔术方法及其分类

### 1. **对象生命周期相关**

| Python 魔法方法       | PHP 魔术方法    | 描述                                         |
| --------------------- | --------------- | -------------------------------------------- |
| `__init__(self, ...)` | `__construct()` | 构造函数，在创建对象时调用。                 |
| `__del__(self)`       | `__destruct()`  | 析构函数，在对象被销毁时调用。               |
| `__new__(cls, ...)`   | -               | 在 `__init__` 之前调用，用于控制对象的创建。 |

---

### 2. **字符串表示相关**

| Python 魔法方法  | PHP 魔术方法   | 描述                                              |
| ---------------- | -------------- | ------------------------------------------------- |
| `__str__(self)`  | `__toString()` | 返回对象的字符串表示，用于 `print()` 或 `str()`。 |
| `__repr__(self)` | -              | 返回对象的"官方"字符串表示，用于调试或 `repr()`。 |

---

### 3. **属性访问相关**

| Python 魔法方法                  | PHP 魔术方法 | 描述                                           |
| -------------------------------- | ------------ | ---------------------------------------------- |
| `__getattr__(self, name)`        | `__get()`    | 当访问不存在的属性时调用。                     |
| `__setattr__(self, name, value)` | `__set()`    | 当设置属性时调用。                             |
| `__delattr__(self, name)`        | `__unset()`  | 当删除属性时调用。                             |
| `__getattribute__(self, name)`   | -            | 当访问任何属性时调用（包括存在的和不存在的）。 |

---

### 4. **运算符重载相关**

| Python 魔法方法        | PHP 魔术方法 | 描述                      |
| ---------------------- | ------------ | ------------------------- |
| `__add__(self, other)` | -            | 定义 `+` 运算符的行为。   |
| `__sub__(self, other)` | -            | 定义 `-` 运算符的行为。   |
| `__eq__(self, other)`  | `__equals()` | 定义 `==` 运算符的行为。  |
| `__lt__(self, other)`  | -            | 定义 `<` 运算符的行为。   |
| `__len__(self)`        | -            | 定义 `len()` 函数的行为。 |

---

### 5. **容器类型相关**

| Python 魔法方法                 | PHP 魔术方法 | 描述                                                  |
| ------------------------------- | ------------ | ----------------------------------------------------- |
| `__getitem__(self, key)`        | `__get()`    | 定义通过索引访问元素的行为，例如 `obj[key]`。         |
| `__setitem__(self, key, value)` | `__set()`    | 定义通过索引设置元素的行为，例如 `obj[key] = value`。 |
| `__len__(self)`                 | -            | 定义容器的长度，例如 `len(obj)`。                     |
| `__contains__(self, item)`      | -            | 定义 `in` 运算符的行为，例如 `item in obj`。          |

---

### 6. **调用对象相关**

| Python 魔法方法       | PHP 魔术方法 | 描述                                       |
| --------------------- | ------------ | ------------------------------------------ |
| `__call__(self, ...)` | `__invoke()` | 使对象可以像函数一样被调用，例如 `obj()`。 |

---

### 7. **迭代器相关**

| Python 魔法方法  | PHP 魔术方法      | 描述                   |
| ---------------- | ----------------- | ---------------------- |
| `__iter__(self)` | `__getIterator()` | 返回一个迭代器对象。   |
| `__next__(self)` | -                 | 定义迭代器的下一个值。 |

## 高级特性示例

### 1. 使用 \_\_slots\_\_ 优化内存

```python
class OptimizedStudent:
    __slots__ = ['name', 'age', 'score']  # 限制只能使用这些属性
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.score = 0
```

### 2. 使用 dataclass 简化数据类

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float
    
    def distance_from_origin(self):
        return (self.x ** 2 + self.y ** 2) ** 0.5
```

### 3. 抽象基类示例

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
        
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
        
    def area(self):
        return self.width * self.height
        
    def perimeter(self):
        return 2 * (self.width + self.height)
```

### 4. 多重继承和 MRO（方法解析顺序）

```python
class A:
    def method(self):
        print("A method")

class B(A):
    def method(self):
        print("B method")
        super().method()

class C(A):
    def method(self):
        print("C method")
        super().method()

class D(B, C):
    pass

print(D().mro())
```

## 设计模式示例

### 1. 单例模式

```python
class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance
```

### 2. 工厂模式

```python
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

class AnimalFactory:
    @staticmethod
    def create_animal(animal_type):
        if animal_type == "dog":
            return Dog()
        elif animal_type == "cat":
            return Cat()
        raise ValueError("Unknown animal type")
```

## Python类的最佳实践

### 1. 命名规范
- 类名使用大驼峰命名（PascalCase）
- 方法和属性使用小写字母加下划线（snake_case）
- 私有属性和方法使用双下划线前缀
- 受保护的属性和方法使用单下划线前缀

### 2. 代码组织
- 将相关的类放在同一个模块中
- 使用继承时遵循"组合优于继承"原则
- 保持类的单一职责
- 类的方法应该相对独立且功能单一

### 3. 文档和注释
- 为类添加清晰的文档字符串（docstring）
- 为复杂的方法添加注释
- 使用类型提示提高代码可读性

### 4. 性能优化
- 合理使用 __slots__ 减少内存使用
- 避免过度使用魔术方法
- 注意循环引用问题
- 合理使用类属性和实例属性

### 5. 安全性
- 正确使用访问控制（私有、受保护属性）
- 验证输入参数
- 处理异常情况
- 避免直接访问私有属性

### 6. 可维护性
- 保持类的大小适中
- 避免过深的继承层次
- 使用描述性的命名
- 遵循 DRY（Don't Repeat Yourself）原则
