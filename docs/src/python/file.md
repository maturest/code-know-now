# 文件目录操作

## 1. 文件基础操作

### 1.1 打开文件
文件操作的基本模式：
- `r`: 只读模式（默认）
- `w`: 写入模式（覆盖）
- `a`: 追加模式
- `b`: 二进制模式（可与其他模式组合，如 `rb`, `wb`）
- `+`: 读写模式（可与其他模式组合，如 `r+`, `w+`）

```python
# 基本打开方式
file = open("example.txt", "r")  # 只读模式
file = open("example.txt", "w")  # 写入模式
file = open("example.txt", "a")  # 追加模式

# 处理编码
file = open("example.txt", "r", encoding="utf-8")  # 指定编码
```

### 1.2 读取文件

```python
# 1. 读取全部内容
with open("example.txt", "r", encoding="utf-8") as file:
    content = file.read()

# 2. 按行读取
with open("example.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()  # 读取所有行到列表
    
# 3. 逐行读取（内存友好）
with open("example.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip())  # strip() 去除行尾换行符

# 4. 读取指定字节数
with open("example.txt", "r", encoding="utf-8") as file:
    chunk = file.read(1024)  # 读取1024字节
```

### 1.3 写入文件

```python
# 1. 基本写入
with open("example.txt", "w", encoding="utf-8") as file:
    file.write("Hello, World!\n")
    file.write("Python 文件操作很简单！")

# 2. 写入多行
lines = ["第一行", "第二行", "第三行"]
with open("example.txt", "w", encoding="utf-8") as file:
    file.writelines(line + "\n" for line in lines)

# 3. 追加内容
with open("example.txt", "a", encoding="utf-8") as file:
    file.write("\n新的一行")
```

### 1.4 文件路径处理

```python
import os

# 构建跨平台的文件路径
path = os.path.join("folder", "subfolder", "file.txt")

# 获取路径信息
file_name = os.path.basename(path)  # 获取文件名
dir_name = os.path.dirname(path)    # 获取目录名
abs_path = os.path.abspath(path)    # 获取绝对路径

# 路径拆分
dir_path, file_name = os.path.split(path)  # 分离目录和文件
file_name, file_ext = os.path.splitext(file_name)  # 分离文件名和扩展名
```

### 1.5 异常处理

```python
try:
    with open("example.txt", "r", encoding="utf-8") as file:
        content = file.read()
except FileNotFoundError:
    print("文件不存在！")
except PermissionError:
    print("没有权限访问该文件！")
except UnicodeDecodeError:
    print("文件编码不匹配！")
```

## 2. 高级文件操作

### 2.1 文件管理

```python
import os
import shutil

# 文件操作
os.rename("old.txt", "new.txt")  # 重命名
shutil.copy2("source.txt", "backup.txt")  # 复制（保留元数据）
shutil.move("file.txt", "new_folder")  # 移动

# 文件夹操作
os.makedirs("nested/folders", exist_ok=True)  # 创建多级目录
shutil.copytree("src_folder", "dst_folder")  # 复制整个目录树
shutil.rmtree("old_folder")  # 删除目录及其内容
```

### 2.2 文件信息获取

```python
import os
import time

# 获取文件信息
file_stat = os.stat("example.txt")
size = file_stat.st_size  # 文件大小（字节）
modified_time = file_stat.st_mtime  # 最后修改时间
created_time = file_stat.st_ctime  # 创建时间

# 格式化时间
modified_time_str = time.strftime("%Y-%m-%d %H:%M:%S", 
                                time.localtime(modified_time))

# 检查文件权限
is_readable = os.access("example.txt", os.R_OK)
is_writable = os.access("example.txt", os.W_OK)
is_executable = os.access("example.txt", os.X_OK)
```

### 2.3 实用技巧

```python
# 1. 安全地删除文件
def safe_remove(file_path):
    try:
        if os.path.exists(file_path):
            os.remove(file_path)
            return True
    except Exception as e:
        print(f"删除失败：{e}")
    return False

# 2. 创建临时文件
import tempfile

with tempfile.NamedTemporaryFile(delete=False) as temp_file:
    temp_file.write(b"临时数据")
    temp_path = temp_file.name

# 3. 文件监控
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class MyHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if not event.is_directory:
            print(f"文件变化: {event.src_path}")
```

## 注意事项

1. 始终使用 `with` 语句操作文件，确保文件正确关闭
2. 处理大文件时使用分块读取，避免内存溢出
3. 涉及文件路径时使用 `os.path` 模块，确保跨平台兼容
4. 进行文件操作前检查文件是否存在和权限
5. 重要操作前做好备份，特别是删除和覆盖操作
6. 正确处理文件编码，避免乱码问题
7. 使用异常处理机制处理可能的错误情况

