/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：K/kJ
 */

"use strict"

/* harmony export (immutable) */
/* harmony export (immutable) */
export { getLanguage }
/* harmony import */
export { setLanguage }
import * as __WEBPACK_IMPORTED_MODULE_0__zh__ from "./zh-VBU7"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__en__ from "./en-mlbu"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__tw__ from "./tw-SWlx"
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_3__fr__ from "./fr-4zEI"
var language = {}
function getLanguage(key) {
  return language[key] || ""
}
function setLanguage(lang) {
  switch (lang) {
    case "zh":
      language = __WEBPACK_IMPORTED_MODULE_0__zh__.zh
      break
    case "en":
      language = __WEBPACK_IMPORTED_MODULE_1__en__.en
      break
    case "tw":
      language = __WEBPACK_IMPORTED_MODULE_2__tw__.tw
      break
    case "fr":
      language = __WEBPACK_IMPORTED_MODULE_3__fr__.fr
      break
    default:
      language = __WEBPACK_IMPORTED_MODULE_0__zh__.zh
      break
  }
}

/***/
