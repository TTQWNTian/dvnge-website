export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/data/data/com.termux/files/home/dvnge-website/README.md"), meta: {"title":"首页"} }],
  ["/docs/", { loader: () => import(/* webpackChunkName: "docs_index.html" */"/data/data/com.termux/files/home/dvnge-website/docs/index.md"), meta: {"title":"Dvnge 文档"} }],
  ["/plugins/", { loader: () => import(/* webpackChunkName: "plugins_index.html" */"/data/data/com.termux/files/home/dvnge-website/plugins/index.md"), meta: {"title":"Dvnge 插件"} }],
  ["/docs/dvns/%E8%AF%AD%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "docs_dvns_语法.html" */"/data/data/com.termux/files/home/dvnge-website/docs/dvns/语法.md"), meta: {"title":"dvns 语法"} }],
  ["/docs/js/%E5%9F%BA%E7%A1%80%E5%B1%9E%E6%80%A7.html", { loader: () => import(/* webpackChunkName: "docs_js_基础属性.html" */"/data/data/com.termux/files/home/dvnge-website/docs/js/基础属性.md"), meta: {"title":"基础属性"} }],
  ["/docs/js/%E7%AB%8B%E7%BB%98.html", { loader: () => import(/* webpackChunkName: "docs_js_立绘.html" */"/data/data/com.termux/files/home/dvnge-website/docs/js/立绘.md"), meta: {"title":"立绘"} }],
  ["/docs/%E5%BC%80%E5%A7%8B/Dvnge%E7%9A%84%E6%96%87%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "docs_开始_Dvnge的文件.html" */"/data/data/com.termux/files/home/dvnge-website/docs/开始/Dvnge的文件.md"), meta: {"title":"Dvnge的文件"} }],
  ["/docs/%E5%BC%80%E5%A7%8B/%E4%BB%80%E4%B9%88%E6%98%AF%E8%8A%82%E7%82%B9.html", { loader: () => import(/* webpackChunkName: "docs_开始_什么是节点.html" */"/data/data/com.termux/files/home/dvnge-website/docs/开始/什么是节点.md"), meta: {"title":"什么是节点？"} }],
  ["/docs/%E5%BC%80%E5%A7%8B/%E7%AB%A0%E8%8A%82%E6%A6%82%E5%BF%B5.html", { loader: () => import(/* webpackChunkName: "docs_开始_章节概念.html" */"/data/data/com.termux/files/home/dvnge-website/docs/开始/章节概念.md"), meta: {"title":"章节概念"} }],
  ["/docs/%E8%BF%9B%E9%98%B6/%E6%B8%B8%E6%88%8F%E9%85%8D%E7%BD%AE.html", { loader: () => import(/* webpackChunkName: "docs_进阶_游戏配置.html" */"/data/data/com.termux/files/home/dvnge-website/docs/进阶/游戏配置.md"), meta: {"title":"游戏配置"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/data/data/com.termux/files/home/dvnge-website/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
