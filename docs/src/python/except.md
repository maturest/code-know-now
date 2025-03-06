# Python 异常处理

## 什么是异常？

异常是程序运行时出现的错误或异常情况。它是 Python 提供的一种处理错误的机制，可以让我们更优雅地处理程序中的错误。

### 生活中的类比
- 就像我们日常生活中开车，可能会遇到红灯🚥（需要等待）
- 可能会遇到故障🔧（需要处理）
- 可能会遇到事故🚨（严重错误）

这些都是"异常情况"，需要我们采取相应的措施来处理。

## 为什么需要异常处理？

1. **程序健壮性**：
   - 就像汽车需要安全气囊一样，程序需要异常处理来保护
   - 防止程序因小错误而完全崩溃
   - 保证核心功能的正常运行

2. **用户体验**：
   - 优雅地处理错误，而不是直接崩溃
   - 向用户提供友好的错误提示
   - 引导用户进行正确的操作

3. **调试方便**：
   - 帮助开发者快速定位问题
   - 提供详细的错误信息和调用栈
   - 便于问题复现和修复

4. **业务逻辑处理**：
   - 某些业务逻辑本身就需要通过异常处理来实现
   - 区分正常流程和异常流程
   - 更清晰的代码结构

## Python 异常层次结构

```
BaseException
 ├── SystemExit                # 解释器请求退出
 ├── KeyboardInterrupt         # 用户中断执行(Ctrl+C)
 ├── GeneratorExit            # 生成器发生异常来通知退出
 └── Exception                # 常规异常的基类
      ├── StopIteration       # 迭代器没有更多的值
      ├── ArithmeticError    # 数学运算错误的基类
      │    ├── FloatingPointError
      │    ├── OverflowError
      │    └── ZeroDivisionError
      ├── AssertionError     # assert 语句失败
      ├── AttributeError     # 对象没有这个属性
      ├── ImportError       # 导入模块/对象失败
      ├── TypeError        # 对类型无效的操作
      └── ValueError      # 传入无效的参数
```

## Python 异常的基本语法

### 1. 基本结构
```python
try:
    # 可能出现异常的代码
    result = 10 / 0
except ZeroDivisionError:
    # 处理特定异常
    print("除数不能为0！")
except Exception as e:
    # 处理其他异常
    print(f"发生了其他错误：{e}")
else:
    # 没有异常时执行
    print("运行成功！")
finally:
    # 无论是否有异常都会执行
    print("清理工作...")
```

### 2. 异常的传递
```python
def func_a():
    return 1 / 0

def func_b():
    return func_a()

def main():
    try:
        func_b()
    except ZeroDivisionError as e:
        print(f"捕获到除零错误：{e}")
        print(f"错误类型：{type(e)}")
        print(f"调用栈：{e.__traceback__}")
```

## 常见的异常类型

| 异常类型 | 描述 | 示例 | 处理建议 |
|----------|------|------|----------|
| TypeError | 类型错误 | `"1" + 2` | 确保操作的类型兼容 |
| ValueError | 值错误 | `int("abc")` | 进行数据验证 |
| NameError | 名称未定义 | `print(undefined_var)` | 检查变量是否定义 |
| IndexError | 索引越界 | `list[100]` | 检查索引范围 |
| KeyError | 字典键不存在 | `dict["不存在的键"]` | 使用 dict.get() 方法 |
| FileNotFoundError | 文件不存在 | `open("不存在的文件.txt")` | 确保文件存在 |
| ZeroDivisionError | 除零错误 | `10 / 0` | 检查除数是否为零 |
| AttributeError | 属性不存在 | `"hello".undefined_method()` | 检查对象是否有该属性 |
| ImportError | 导入失败 | `import 不存在的模块` | 确保模块已安装 |

## 最佳实践

### 1. 具体异常优先
```python
try:
    # 某些操作
    pass
except ValueError:  # ✅ 优先捕获具体异常
    pass
except Exception:   # 最后捕获通用异常
    pass
```

### 2. 只捕获预期的异常
```python
# ✅ 好的做法
try:
    user_input = int(input("请输入数字："))
except ValueError:
    print("请输入有效的数字！")

# ❌ 不好的做法
try:
    user_input = int(input("请输入数字："))
except:  # 不要使用裸异常捕获
    print("出错了！")
```

### 3. 合理使用自定义异常

```python
class BusinessError(Exception):
    """自定义业务异常基类"""
    def __init__(self, message, code=None, data=None):
        self.message = message
        self.code = code
        self.data = data
        super().__init__(message)

class OrderError(BusinessError):
    """订单相关异常"""
    pass

class PaymentError(BusinessError):
    """支付相关异常"""
    pass

# 使用示例
def process_order(order):
    if order.amount < 0:
        raise OrderError("订单金额不能为负数", code="E001")
    if not order.payment_verified:
        raise PaymentError("支付验证失败", code="P001")
```

### 4. 异常链和上下文管理
```python
# 异常链
try:
    # 某些操作
    pass
except ValueError as e:
    raise BusinessError("业务处理失败") from e  # 保留原始异常信息

# 上下文管理
with open("file.txt") as f:  # 自动处理文件关闭
    content = f.read()
```

## 性能考虑

### 1. 异常不是流程控制
```python
# ❌ 不好的做法：使用异常控制流程
def get_user(user_dict, user_id):
    try:
        return user_dict[user_id]
    except KeyError:
        return None

# ✅ 好的做法：使用条件判断
def get_user(user_dict, user_id):
    return user_dict.get(user_id)
```

### 2. try 语句块要精确
```python
# ❌ 不好的做法：try 块太大
try:
    data = load_data()
    process_data(data)
    save_results(data)
except Exception:
    log_error()

# ✅ 好的做法：精确的异常处理
try:
    data = load_data()
except LoadError as e:
    log_load_error(e)
    return

try:
    process_data(data)
except ProcessError as e:
    log_process_error(e)
    return

try:
    save_results(data)
except SaveError as e:
    log_save_error(e)
    return
```

### 3. 异常处理的性能开销
```python
# 性能对比示例
import time

# 使用异常处理（较慢）
def find_with_exception(lst, value):
    try:
        return lst.index(value)
    except ValueError:
        return -1

# 使用条件判断（较快）
def find_with_condition(lst, value):
    return lst.index(value) if value in lst else -1
```

## 调试技巧

### 1. 使用 traceback 模块
```python
import traceback

try:
    # 某些操作
    pass
except Exception as e:
    # 打印详细的错误信息
    print("错误类型:", type(e).__name__)
    print("错误信息:", str(e))
    print("调用栈:")
    traceback.print_tb(e.__traceback__)
```

### 2. 使用日志记录异常
```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    # 某些操作
    pass
except Exception as e:
    logger.exception("操作失败")  # 自动记录堆栈信息
```

## 总结

1. **异常处理的核心原则**：
   - 异常处理是编写健壮代码的重要工具
   - 正确使用异常处理可以提高代码质量和可维护性
   - 异常处理不是用来处理正常的业务流程

2. **最佳实践要点**：
   - 只捕获具体的异常
   - 保持 try 块的精确性
   - 合理使用自定义异常
   - 保持异常链的完整性

3. **性能注意事项**：
   - 避免使用异常进行流程控制
   - 合理控制 try 块的范围
   - 在适当的场景使用条件判断替代异常捕获

4. **调试与维护**：
   - 使用日志记录异常信息
   - 保持异常信息的完整性
   - 提供清晰的错误提示

记住：异常处理的目的是让程序更健壮，而不是掩盖问题。好的异常处理应该让问题更容易被发现和解决！