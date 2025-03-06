# 并发编程

## 并发和并行是什么？

想象你在吃火锅：
- 并发：你一个人涮火锅，一会儿涮肉，一会儿涮菜，看起来是"同时"在煮很多食材
- 并行：你和朋友一起涮火锅，真的可以同时涮不同的食材

生活中的例子：
1. 并发：一个人同时玩手机和看电视，实际是在快速切换注意力
2. 并行：两个人，一个人看电视，一个人玩手机，真正的同时进行

## CPU 密集型任务和 I/O 密集型任务

### CPU 密集型任务
生活例子：
1. 打游戏：需要实时计算画面和物理效果
2. 做数学题：需要大脑持续运算
3. 剪视频：需要不断处理画面

代码示例：
```python
# CPU 密集型任务示例：计算大量数字的平方
def cpu_heavy_task():
    result = []
    for i in range(10**7):
        result.append(i * i)
    return result

# 使用多进程处理
from multiprocessing import Pool

def parallel_calculate():
    with Pool(4) as p:  # 创建4个进程
        result = p.map(cpu_heavy_task, range(4))
```

### I/O 密集型任务
生活例子：
1. 排队买奶茶：大部分时间在等待
2. 等公交车：主要是等待时间
3. 下载文件：主要在等待网络传输

代码示例：
```python
# I/O 密集型任务示例：下载多个网页
import aiohttp
import asyncio

async def download_page(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

# 使用协程并发下载多个网页
async def main():
    urls = [
        'http://example.com',
        'http://example.org',
        'http://example.net'
    ]
    tasks = [download_page(url) for url in urls]
    pages = await asyncio.gather(*tasks)
```

## 进程、线程和协程的实际应用

### 1. 进程（Process）- 披萨店的例子
想象你经营多家披萨店：
- 每家店都有独立的厨房（内存空间）
- 每家店都有自己的厨师（CPU 资源）
- 店铺之间通过电话联系（进程间通信）

代码示例：
```python
from multiprocessing import Process, Queue

def make_pizza(store_id, orders_queue):
    while True:
        order = orders_queue.get()
        print(f"店铺{store_id}正在制作{order}披萨")
        # 模拟制作披萨的过程
        time.sleep(2)

# 创建多家披萨店
orders = Queue()
stores = [
    Process(target=make_pizza, args=(i, orders))
    for i in range(3)
]

# 启动所有店铺
for store in stores:
    store.start()
```

### 2. 线程（Thread）- 餐厅服务员的例子
想象一个餐厅的多个服务员：
- 共用同一个厨房（共享内存）
- 服务员之间可以直接交流（共享变量）
- 需要协调使用餐具（线程同步）

代码示例：
```python
from threading import Thread, Lock

class Restaurant:
    def __init__(self):
        self.dishes_lock = Lock()
        self.clean_dishes = 20

    def serve_table(self, waiter_id):
        with self.dishes_lock:
            if self.clean_dishes > 0:
                print(f"服务员{waiter_id}取用了一个盘子")
                self.clean_dishes -= 1

# 创建餐厅和服务员
restaurant = Restaurant()
waiters = [
    Thread(target=restaurant.serve_table, args=(i,))
    for i in range(5)
]

# 服务员开始工作
for waiter in waiters:
    waiter.start()
```

### 3. 协程（Coroutine）- 前台接待员的例子
想象一个超高效的前台接待员：
- 同时处理多个客人的需求
- 当一个客人在思考时，立即服务其他客人
- 不会让任何客人等太久

代码示例：
```python
import asyncio

async def handle_customer(customer_id):
    print(f"开始服务客人{customer_id}")
    # 模拟客人思考点单
    await asyncio.sleep(1)
    print(f"客人{customer_id}点单完成")
    # 模拟准备订单
    await asyncio.sleep(0.5)
    print(f"客人{customer_id}的订单已完成")

async def receptionist():
    # 同时服务多个客人
    customers = [handle_customer(i) for i in range(5)]
    await asyncio.gather(*customers)

# 前台开始工作
asyncio.run(receptionist())
```

## 选择建议

1. 使用进程的场景：
   - 图像处理软件中的滤镜处理
   - 视频渲染
   - 大数据计算

2. 使用线程的场景：
   - 文件下载器（每个线程负责一个文件）
   - 网页爬虫（多个线程同时爬取）
   - 游戏中的音效处理

3. 使用协程的场景：
   - 聊天服务器（处理多个用户连接）
   - 网站后端服务（处理大量 HTTP 请求）
   - 实时数据推送

## 如何选择？

1. 如果是计算量大的任务（CPU 密集型）：
   - 选择多进程，因为可以真正利用多核 CPU

2. 如果是等待比较多的任务（I/O 密集型）：
   - 少量任务：用多线程就够了
   - 大量任务：用协程更好，因为协程切换成本更低

3. 简单判断口诀：
   - 计算多：开分店（进程）
   - 等待多：招员工（线程）或请超级员工（协程）

记住：不同的工具适合不同的场景，就像你不会用锤子来切菜一样！
