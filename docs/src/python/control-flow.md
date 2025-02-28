# 控制流

在 Python 中，控制流通常指的是程序执行的顺序，常见的有：

## 条件语句

```py
# 判断成绩等级
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")  # 输出: B
elif score >= 60:
    print("C")
else:
    print("不及格")


# 判断是否闰年
year = 2024
if year % 4 == 0:
    if year % 100 != 0 or year % 400 == 0:
        print("闰年")  # 输出: 闰年
    else:
        print("非闰年")
else:
    print("非闰年")
```

## 循环语句

```py
person = {"name": "Alice", "age": 30, "city": "New York"}
for key, value in person.items():
    print(f"{key}: {value}")
# 输出：
# name: Alice
# age: 30
# city: New York


# 计算 1+2+...+5
total = 0
count = 1
while count <= 5:
    total += count
    count += 1
print(total)  # 输出: 15

```


## 循环控制语句

```py
# 找到第一个能被 7 整除的数
for num in range(1, 100):
    if num % 7 == 0:
        print(f"找到 {num}")
        break  # 终止循环
# 输出: 找到 7


# 打印 1-10 中的奇数
for i in range(1, 11):
    if i % 2 == 0:
        continue  # 跳过偶数
    print(i)  # 输出: 1,3,5,7,9

```

## 异常处理

```
try:
    可能出错的代码
except 异常类型:
    出错时执行的代码
else:
    没有出错时执行的代码
finally:
    无论是否出错都会执行的代码
```

例如：

```py
try:
    result = 10 / 0
except ZeroDivisionError:
    print("除数不能为零")
finally:
    print("执行完毕")  # 输出：除数不能为零 执行完毕
```

## 上下文管理器

```
with 上下文管理器 as 变量:
    执行的代码
```

例如：

```py
with open("file.txt", "r") as file:
    content = file.read()
    print(content)
```

## 生成器

```
def 生成器函数():
    yield 值
```

例如

```py
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num)  # 输出：1 2 3 4 5
```

| 控制流类型   | 描述                         | 示例                             |
| ------------ | ---------------------------- | -------------------------------- |
| 条件语句     | 根据条件执行代码             | if x > 5: print("x > 5")         |
| for 循环     | 遍历序列，重复执行代码       | for i in range(5): print(i)      |
| while 循环   | 根据条件重复执行代码         | while x < 5: print(x)            |
| break        | 退出循环                     | if i == 5: break                 |
| continue     | 跳过当前循环，进入下一次循环 | if i == 2: continue              |
| else         | 循环正常结束后执行的代码     | for i in range(5): ... else: ... |
| 异常处理     | 捕获和处理运行时错误         | try: ... except: ...             |
| 上下文管理器 | 管理资源的分配和释放         | with open(...) as file: ...      |
| 生成器       | 逐步生成值，节省内存         | def gen(): yield 1               |
