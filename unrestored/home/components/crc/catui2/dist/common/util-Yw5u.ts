/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Yw5u
 */

"use strict"

/* harmony export (binding) */
/* unused harmony export isAndroid */
/* unused harmony export chromeVersion */
/* harmony export (binding) */
export { isIos }
/* harmony export (immutable) */
export { isCssFilterBlurCompatible }
/**
 * 当前是ios环境
 */
export { parseToSvg }
var isIos = function () {
  if (typeof navigator === "undefined") {
    return false
  }
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) ||
  // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document
}()
/**
 * 当前是Android环境
 */
var isAndroid = typeof navigator === "undefined" ? false : navigator.userAgent.toLowerCase().indexOf("android") > -1
/**
 * 当前chrome版本
 */
var chromeVersion = function () {
  if (typeof navigator === "undefined") {
    return false
  }
  var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
  return raw ? parseInt(raw[2], 10) : false
}()
/**
 * CSS filter blur属性在当前浏览器是否兼容
 * Android机型chromeium内核且版本低于50视为不兼容
 */
var isCssFilterBlurCompatible = function () {
  if (!isAndroid || chromeVersion === false) {
    return true
  }
  return chromeVersion >= 55
}() // SVG
var SVG_NS = "http://www.w3.org/2000/svg"
/**
 * 解析字符串为SVG
 *
 * @export
 * @param {string} str
 * @returns SVG element
 */
function parseToSvg(str) {
  // https://stackoverflow.com/questions/3642035/jquerys-append-not-working-with-svg-element
  var div = document.createElementNS(SVG_NS, "div")
  div.innerHTML = "<svg xmlns=".concat(SVG_NS, ">").concat(str, "</svg>")
  var frag = document.createDocumentFragment()
  while (div.firstChild && div.firstChild.firstChild) {
    frag.appendChild(div.firstChild.firstChild)
  }
  return frag
}

/***/
