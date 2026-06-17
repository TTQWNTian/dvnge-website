import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { copyCodePlugin } from '@vuepress/plugin-copy-code'
import { gitPlugin } from '@vuepress/plugin-git'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Dvnge',
  description: 'Dvnge视觉小说引擎的官方文档',

  theme: defaultTheme({
    logo: 'https://dvnge.ttqwn.top/favicon.png',

    // ====== 加上这两行 ======
    lastUpdated: true,
    contributors: true,
    // =======================

    navbar: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/Dvnge的文件.html' },
      { text: 'GitHub', link: 'https://github.com/TTQWNTian/Dvnge' },
    ],

    sidebar: [
      {
        text: '开始',
        collapsible: true,
        children: [
          '/docs/Dvnge的文件.md',
          '/docs/章节概念.md',
        ],
      },
      {
        text: '基础',
        collapsible: true,
        children: [
          '/docs/什么是节点.md',
          '/docs/基础属性.md',
          '/docs/立绘系统.md',
        ],
      },
    ],
  }),

  plugins: [
    shikiPlugin({
      theme: 'catppuccin-mocha',
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
    gitPlugin({
      createdTime: true,
      updatedTime: true,
      contributors: true,
    }),
    readingTimePlugin({
      wordPerMinute: 300,
    }),
  ],

  bundler: viteBundler(),
})