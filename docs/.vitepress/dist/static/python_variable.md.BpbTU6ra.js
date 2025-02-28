import{_ as s,c as n,o as p,ag as e}from"./chunks/framework.C-XYIjD8.js";const u=JSON.parse('{"title":"常量与变量","description":"","frontmatter":{},"headers":[],"relativePath":"python/variable.md","filePath":"python/variable.md","lastUpdated":null}'),l={name:"python/variable.md"};function i(t,a,o,c,d,h){return p(),n("div",null,a[0]||(a[0]=[e(`<h1 id="常量与变量" tabindex="-1">常量与变量 <a class="header-anchor" href="#常量与变量" aria-label="Permalink to &quot;常量与变量&quot;">​</a></h1><h2 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h2><p>通常常量会放在模块的顶层，或者作为类的属性。</p><p>最佳实践：</p><ul><li><p>优先使用全大写命名约定（如 CONFIG_PATH）和模块隔离。</p></li><li><p>对需要严格保护的常量，可结合 enum、类属性或第三方库。</p></li><li><p>始终通过代码审查和团队规范确保常量不被意外修改。</p></li></ul><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><h3 id="变量的命名" tabindex="-1">变量的命名 <a class="header-anchor" href="#变量的命名" aria-label="Permalink to &quot;变量的命名&quot;">​</a></h3><p>Python 作为动态类型语言，变量不需要声明类型。</p><ul><li><p>命名需遵循 snake_case 风格（如 user_name），以字母或下划线开头，不能是数字或关键字，区分大小写。</p></li><li><p>Python 变量无需显式声明类型，类型在赋值时自动推断，且可随时改变。</p></li><li><p>Python 变量本质上是对内存中对象的引用，而不是直接存储数据的容器。</p></li></ul><h3 id="变量的作用域" tabindex="-1">变量的作用域： <a class="header-anchor" href="#变量的作用域" aria-label="Permalink to &quot;变量的作用域：&quot;">​</a></h3><ul><li><p>局部变量：在函数内部定义，仅在函数内有效。</p></li><li><p>全局变量：在模块或函数外定义，全局有效（需用 global 关键字在函数内修改）。</p></li><li><p>包变量：嵌套函数中通过 nonlocal 访问外层非全局变量。</p></li></ul><h3 id="可变与不可变变量" tabindex="-1">可变与不可变变量 <a class="header-anchor" href="#可变与不可变变量" aria-label="Permalink to &quot;可变与不可变变量&quot;">​</a></h3><p>不可变对象：赋值后值不可修改（如 int, str, tuple）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = 10</span></span>
<span class="line"><span>a += 5 # 实际是创建新对象 15，a 指向新对象</span></span></code></pre></div><p>可变对象：值可原地修改（如 list, dict, set）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>lst = [1,2,3]</span></span>
<span class="line"><span>lst.append(4) # 直接修改原对象，内存地址不变</span></span></code></pre></div><h3 id="变量的内存管理" tabindex="-1">变量的内存管理 <a class="header-anchor" href="#变量的内存管理" aria-label="Permalink to &quot;变量的内存管理&quot;">​</a></h3><p>Python 是通过 引用计数 和 垃圾回收 自动管理内存</p><ul><li><p>变量引用对象时，对象的引用计数增加。</p></li><li><p>当引用计数归零时，对象被自动回收。</p></li></ul><h3 id="变量与对象的交互" tabindex="-1">变量与对象的交互 <a class="header-anchor" href="#变量与对象的交互" aria-label="Permalink to &quot;变量与对象的交互&quot;">​</a></h3><ul><li>赋值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = [1,2] # 变量 a 指向列表对象</span></span></code></pre></div><ul><li>浅拷贝</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>b = a.copy() # b 是新的列表，但内部元素与原列表共享引用</span></span></code></pre></div><ul><li>深拷贝</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import copy</span></span>
<span class="line"><span></span></span>
<span class="line"><span>c = copy.deepcopy(a) # 完全独立的新对象</span></span></code></pre></div><h3 id="特殊变量" tabindex="-1">特殊变量 <a class="header-anchor" href="#特殊变量" aria-label="Permalink to &quot;特殊变量&quot;">​</a></h3><p>_(单下划线)：临时变量或忽略值</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>for _ in range(5):</span></span>
<span class="line"><span>    print(_)</span></span></code></pre></div><p>__name__：双下划线包围的变量通常是 Python 内置的特殊变量或方法。</p><p>私有变量：约定用单下划线前缀表示“私有”（如 _internal_data），但无强制限制。</p><h3 id="查看变量信息的方式" tabindex="-1">查看变量信息的方式 <a class="header-anchor" href="#查看变量信息的方式" aria-label="Permalink to &quot;查看变量信息的方式&quot;">​</a></h3><ul><li>查看变量的类型</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = 10</span></span>
<span class="line"><span>print(type(a))</span></span></code></pre></div><ul><li>查看变量的值</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = 10</span></span>
<span class="line"><span>print(repr(a))</span></span></code></pre></div><ul><li>内存地址</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>x = 42</span></span>
<span class="line"><span>print(hex(id(x)))  # 输出类似 0x7f8e1c012a70</span></span></code></pre></div><ul><li>引用计数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>x = [1, 2]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 传递对象给该函数时会临时增加一个引用，结果需减 1 才是实际值</span></span>
<span class="line"><span>print(sys.getrefcount(x) - 1)</span></span></code></pre></div><ul><li>判断是否为同一对象</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>a = [1, 2]</span></span>
<span class="line"><span>b = a</span></span>
<span class="line"><span>print(a is b)  # True</span></span></code></pre></div><ul><li>查看对象的属性和方法</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>x = &quot;hello&quot;</span></span>
<span class="line"><span>print(dir(x))  # 输出字符串的所有方法（如 upper, split 等）</span></span></code></pre></div><ul><li>查看实例的命名空间</li></ul><p>通过 vars() 或 __dict__ 查看对象的属性字典：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>class MyClass:</span></span>
<span class="line"><span>    def __init__(self):</span></span>
<span class="line"><span>        self.a = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>obj = MyClass()</span></span>
<span class="line"><span>print(vars(obj))    # 输出: {&#39;a&#39;: 1}</span></span>
<span class="line"><span>print(obj.__dict__) # 同上</span></span></code></pre></div><ul><li>查看对象的内存</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>x = [1, 2, 3]</span></span>
<span class="line"><span>print(sys.getsizeof(x))  # 输出列表自身占用的字节数</span></span></code></pre></div><ul><li>其他</li></ul><p>不可变对象的复用：如小整数（-5~256）、空元组等会被 Python 缓存复用。</p><p>深浅拷贝的影响：copy.copy() 和 copy.deepcopy() 会改变对象的内存地址。</p><p>动态语言的灵活性：某些对象（如类实例）可能动态添加属性，需结合 dir() 和 vars() 分析。</p>`,53)]))}const b=s(l,[["render",i]]);export{u as __pageData,b as default};
