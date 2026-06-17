export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"Dvnge\",\"description\":\"Dvnge视觉小说引擎的官方文档\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"Dvnge\",\"description\":\"Dvnge视觉小说引擎的官方文档\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
