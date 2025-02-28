# 为何选择 Python

>每个开发语言有各自擅长领域和使用场景，PHP 和 Python 并不完全互斥，甚至可以相互搭配，PHP 专注与 Web 开发，Python 专注于数据分析，机器学习和人工智能等等。当然 Pyhon 也可用于 Web 开发，可以借助 PyPy 或者 CPython 解释器加快运行速度，甚至可以借助 Jython 直接调用 Java 的各种类库。

## 安装 Python

### Anaconda

平常我们经常会遇到这种情况：一台电脑（服务器）要跑 `python` 的多个项目，但项目依赖的 `python` 的版本不一致，就像前端 `node` 那样，那么有没有像 `nvm` 那样管理 `node` 版本的管理器呢，答案是有的，他就是 `anaconda ` ，俗称大蟒蛇，[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/)可以加速下载，它包含了包管理器、环境管理器和 Python 发行版，包含众多开源包。

### [conda](https://docs.conda.io/projects/conda/en/stable/index.html)

>Conda provides package, dependency, and environment management for any language.

conda 是包及其依赖项和环境的管理工具。如果你需要的包要求不同版本的 Python ，你无需切换到不同的环境，因为 conda 同样是一个环境管理器。仅需要几条命令，你可以创建一个完全独立的环境来运行不同的 Python 版本，同时继续在你常规的环境中使用你常用的 Python 版本。

### pip

pip 是用于安装和管理软件包的包管理器。

#### conda 与 pip 的区别

pip:

- 不一定会展示所需其他依赖包。

- 安装包时或许会直接忽略依赖项而安装，仅在结果中提示错误。

conda:

- 列出所需其他依赖包。

- 安装包时自动安装其依赖项。

- 可以便捷地在包的不同版本中自由切换。

- conda结合了pip和virtualenv的功能。

- pip仅适用于python, conda适用于Python, R, Ruby, Lua, Scala, Java, JavaScript, C/C++, FORTRAN。

### VirtualEnv

VirtualEnv 是用于创建一个独立的 Python 环境的工具。VirtualEnv 将会为它自己的安装目录创建一个环境，这并不与其他 VirtualEnv 环境共享库；同时也可以选择性地不连接已安装的全局库。

它解决一下问题：

- 当一个程序需要使用 Python 2.7 版本，而另一个程序需要使用 Python 3.6 版本，如何同时使用这两个程序？如果将所有程序都安装在系统下的默认路径，如：/usr/lib/python2.7/site-packages，当不小心升级了本不该升级的程序时，将会对其他的程序造成影响。

- 如果想要安装程序并在程序运行时对其库或库的版本进行修改，都会导致程序的中断。

- 在共享主机时，无法在全局 site-packages 目录中安装包。


### Python 都安装了什么？

1、python 解释器

2、pip 包管理器，管理一些扩展包（安装目录为 lib/site-packages）

3、python 标准库，Lib 文件夹


## 安装 Anaconda

很简单，点击下载 exe 文件，然后进行一步一步安装即可。不过安装之后，需要更换一下镜像源，这样会加快包的下载安装速度。在用户目录下，编辑 `.condarc`文件，替换为以下内容。（Windows 用户无法直接创建名为 .condarc 的文件，可先执行 conda config --set show_channel_urls yes 生成该文件之后再修改。）

```
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  deepmodeling: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/
```

替换完以上内容之后，运行 `conda clean -i` 清除索引缓存，保证用的是镜像站提供的索引。

### [conda 环境管理](https://docs.conda.io/projects/conda/en/stable/commands/index.html)

- 检测 conda 版本

```
conda --version
```

- 查看 conda 帮助信息

```
conda -h
```

- 创建新环境

```
conda create -n <env_name> <package_names>

// 如果要安装指定的版本号，则只需要在包名后面以 = 和版本号的形式执行,创建多个包，则直接以空格隔开
conda create -n python3 python=3.5 numpy pandas 
```

- 切换环境

```
// 激活环境
conda activate <env_name>

// 退出当前环境
conda deactivate
```

- 显示已创建环境

```
conda env list

conda info -e
```

- 删除环境

```
conda remove -n <env_name> --all
```

### [conda 包管理（CURD）](https://docs.conda.io/projects/conda/en/stable/commands/index.html)

- 查询包

```
conda search
```

- 获取当前环境中已安装的包信息

```
conda list
```

- 在当前环境安装包

```
conda install <package_name>
```

- 指定环境安装包

```
conda install -n myenv numpy
```

- 当使用 conda install 无法进行安装时，可以使用 pip 进行安装

```
pip install
```

- 从当前环境删除包

```
conda remove <package_name>
```

- 从指定环境删除包，多个包使用空格

```
conda remove -n myenv <package_name>
```

- 删除所有包和环境自己

```
conda remove -n myenv --all
```

- 软件包更新

```
conda update -n myenv <package_name>
```


## 编辑器配置

### 选择解释器

首先在编辑器扩展中安装 Python 扩展，之后按如下操作：

1、`ctrl+shift+P` 打开命令面板。

2、接着输入 `Python: Select Interpreter`。

3、然后选择对应环境的解释器。

### 修改默认终端

再环境准备完成之后，使用编辑器打开项目，在右上角调试运行文件的时候，会报错，形如 :

::: danger 报错内容
conda-script.py: error: argument COMMAND: invalid choice: 'activate' (choose from 'clean', 'compare', 'config', 'create', 'info', 'init', 'install', 'list', 'notices', 'package', 'remove', 'uninstall', 'rename', 'run', 'search', 'update', 'upgrade', 'build', 'convert', 'debug', 'develop', 'doctor', 'index', 'inspect', 'metapackage', 'render', 'skeleton', 'repo', 'token', 'pack', 'env', 'server', 'content-trust', 'verify')
:::


有的说是环境变量的问题，有的说是 `conda activate` 命令失效了，全特么扯淡。归结原因就是因为终端不是 `anaconda prompt`。那么就设置成该终端即可。

方案如下：

1、`ctrl+shift+P` 打开命令面板。

2、接着输入 `terminal:select default profile`。

3、然后选择 cmd 方式打开。