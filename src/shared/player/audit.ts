/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：288
 */

export { getWhitelist as b }

import * as CustomWidgetShop from "../widget/custom/shop"

export async function checkUnsafeExtension(bcmc) {
  let hasUnsafeExtension
  const bcmcString = JSON.stringify(bcmc)
  hasUnsafeExtension = true
  if (bcmcString.includes("UNSAFE_EXTENSION_") || bcmc?.unsafeExtensionWidgetList?.length) {
    console.info("当前作品包含自定义控件")
    hasUnsafeExtension = false
  } else if (bcmc?.extensionWidgetList?.length > 0) {
    let shopWidgetsUrl: string[] = []
    let currentPage = 1
    const pageSize = 100
    const response = await CustomWidgetShop.getList(currentPage, pageSize)
    shopWidgetsUrl = shopWidgetsUrl.concat(response.items.map((widget) => widget.resource_url))
    const total = Math.ceil(response.total / pageSize)
    if (total > 1) {
      currentPage += 1
      while (currentPage <= total) {
        shopWidgetsUrl = shopWidgetsUrl.concat(
          (await CustomWidgetShop.getList(currentPage, pageSize)).items.map(
            (widget) => widget.resource_url
          )
        )
        currentPage++
      }
    }
    if (bcmc.extensionWidgetList.filter((widget) => !shopWidgetsUrl.includes(widget.cdnUrl)).length > 0) {
      console.info("当前作品包含自定义控件")
      hasUnsafeExtension = false
    }
  }
  if (!hasUnsafeExtension) {
    document.body.classList.add("intercepting")
    bcmc.widgetMap = {}
    bcmc.extensionWidgetList = []
    bcmc.unsafeExtensionWidgetList = []
    bcmc.blockCode = ""
  }
  return bcmc
}

let whitelist: number[] = []

export async function getWhitelist() {
  if (whitelist.length > 0) {
    return whitelist
  }
  whitelist = await (await fetch("https://static.bcmcdn.com/coco/whitelist.json")).json()
  return whitelist
}

export function addEditorIframe(bcmUrl: string) {
  const iFrame = document.createElement("iframe")
  iFrame.src = `${window.location.origin}/editor?playerBcmUrl=${bcmUrl}`
  iFrame.style.display = "none"
  iFrame.id = "editor-iframe"
  document.body.appendChild(iFrame)
}
