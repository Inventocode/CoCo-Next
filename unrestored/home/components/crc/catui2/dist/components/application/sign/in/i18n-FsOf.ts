/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：FsOf
 */

"use strict";

/* harmony export (immutable) */
/* harmony export (immutable) */
export { getLanguage };
/* harmony import */
export { setLanguage };
import * as __WEBPACK_IMPORTED_MODULE_0__zh__ from "./zh-DEy4";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_1__en__ from "./en-zqt2";
/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_2__tw__ from "./tw-WBWk";
var language = {};
function getLanguage(key) {
  return language[key] || "";
}
function setLanguage(lang) {
  switch (lang) {
    case "zh":
      language = __WEBPACK_IMPORTED_MODULE_0__zh__.zh;
      break;
    case "en":
      language = __WEBPACK_IMPORTED_MODULE_1__en__.en;
      break;
    case "tw":
      language = __WEBPACK_IMPORTED_MODULE_2__tw__.tw;
      break;
    default:
      language = __WEBPACK_IMPORTED_MODULE_0__zh__.zh;
      break;
  }
}

/***/