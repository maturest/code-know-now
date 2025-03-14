import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Code & Know Now",
  description: "码上求知",
  base:'/code-know-now/',
  srcDir: './src',
  assetsDir: 'static',
  themeConfig: {
    logo: './static/logo.svg',
    //outlineTitle:'页面导航',
    outline: {
      level: [2, 3], // 显示 h2 和 h3 标题
      label: '页面导航' // 大纲标题文字
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Python', link: '/python' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar: {
      '/python/': [
        {
          text: '基础',
          collapsed:true,
          items: [
            { text: '环境配置', link: '/python/' },
            { text: '基础', link: '/python/basic' },
            { text: '常量与变量', link: '/python/variable' },
            { text: '运算符', link: '/python/operator'},
            { text: '控制流', link: '/python/control-flow'},
            { text: '函数', link: '/python/function'},
            { text: '面向对象', link: '/python/class' },
            { text: '异常', link: '/python/except' },
            { text: '模块与包', link: '/python/module'},
            { text: '文件管理', link: '/python/file'},
            { text: '进程', link: '/python/process'},
          ]
        },
        // {
        //   text: '进阶',
        //   collapsed:true,
        //   items: [
        //     { text: '环境配置', link: '/python/' },
        //     { text: '基础', link: '/python/basic' },
        //     { text: '类', link: '/python/class' }
        //   ]
        // }
      ],
    },
    aside: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maturest/code-know-now' }
    ],
    editLink: {
      pattern: 'https://github.com/maturest/code-know-now/edit/main/docs/src/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel:'返回顶部',
    search: {
      provider: 'local'
    }
  }
})
