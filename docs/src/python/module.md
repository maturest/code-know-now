包是一个包含多个模块的目录，目录中必须包含一个 \_\_init\_\_.py 文件（可以是空文件）

```
mypackage
    __init__.py
    module1.py
    module2.py
```

每个模块都有一个 \_\_name\_\_ 属性：

如果模块是直接运行的，\_\_name\_\_ 的值为 "\_\_main\_\_"。

如果模块是被导入的，\_\_name\_\_ 的值为模块名。

模块的最佳实践如下

- 模块命名：使用小写字母和下划线，避免与 Python 关键字冲突。

- 模块文档：在模块开头添加文档字符串，说明模块的功能。

- 避免循环导入：模块 A 导入模块 B，模块 B 又导入模块 A，会导致错误。

- 使用 `if __name__ == "__main__"`：将模块的可执行代码放在 `if __name__ == "__main__"` 块中。

| 概念             | 描述                      | 示例                        |
| ---------------- | ------------------------- | --------------------------- |
| 模块             | 一个 .py 文件，包含代码   | mymodule.py                 |
| 导入模块         | 使用 import 语句          | import mymodule             |
| 导入部分内容     | 使用 from ... import ...  | from mymodule import greet  |
| 模块别名         | 使用 as 关键字            | import mymodule as mm       |
| 模块搜索路径     | sys.path 查看模块搜索路径 | import sys; print(sys.path) |
| 标准库模块       | Python 自带的模块         | import math                 |
| 第三方模块       | 通过 pip 安装的模块       | import requests             |
| 包的 \_\_init\_\_.py | 包目录中的初始化文件      | mypackage/\_\_init\_\_.py       |
