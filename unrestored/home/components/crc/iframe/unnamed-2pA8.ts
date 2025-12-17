/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2pA8
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createCodemaoLoginIframeApi = createCodemaoLoginIframeApi
exports.createCodemaoLoginParentApi = createCodemaoLoginParentApi
exports.getCodemaoLoginIframeUrl = getCodemaoLoginIframeUrl
var base_1 = require("./unnamed-S9_H")
var iframe_1 = require("./unnamed-IKhi")
var utils_1 = require("./utils/1-MMZc")
const iframeApiSpec = new base_1.ApiSpec("codemao-login", {})
const parentApiSpec = new base_1.ApiSpec(iframeApiSpec.namespace, {
  onEvent: new base_1.MethodType()
})
function createCodemaoLoginIframeApi(handler, options) {
  return (0, iframe_1.createIframeApi)(iframeApiSpec, handler, options)
}
function createCodemaoLoginParentApi(handler, options) {
  return (0, iframe_1.createIframeApi)(parentApiSpec, handler, options)
}
function getCodemaoLoginIframeUrl(data) {
  const urlParams = new URLSearchParams()
  if (data.onlyLogin !== undefined) {
    urlParams.set("onlyLogin", String(data.onlyLogin))
  }
  if (data.language !== undefined) {
    urlParams.set("language", data.language)
  }
  if (data.disableThirdParty !== undefined) {
    urlParams.set("disableThirdParty", String(data.disableThirdParty))
  }
  if (data.ageLimit !== undefined) {
    urlParams.set("ageLimit", String(data.ageLimit))
  }
  if (data.pageView !== undefined) {
    urlParams.set("pageView", data.pageView)
  }
  if (data.headImg !== undefined && data.headImg.startsWith("http")) {
    urlParams.set("headImg", data.headImg)
  }
  if (data.theme !== undefined) {
    urlParams.set("theme", data.theme)
  }
  if (data.env !== undefined) {
    urlParams.set("env", data.env)
  }
  if (data.pid !== undefined) {
    urlParams.set("pid", data.pid)
  }
  if (data.productCode !== undefined) {
    urlParams.set("productCode", data.productCode)
  }
  if (data.platform !== undefined) {
    urlParams.set("platform", data.platform)
  }
  // 添加额外参数（优先级低，如果与上述参数冲突，会被覆盖）
  if (data && Array.isArray(data.params)) {
    data.params.forEach(({
      type,
      value
    }) => {
      // 只有当该参数不存在时才添加，确保其他参数优先级更高
      if (!urlParams.has(type)) {
        urlParams.set(type, value)
      }
    })
  }
  const paramString = urlParams.toString()
  const param = paramString ? `?${paramString}` : ""
  return (0, utils_1.getServiceOrigin)(data.env === "development" ? "dev" : data.env, `shequ.codemao.cn/codemao_login${param}`)
}

/***/
