/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：234
 */

"use strict";

export { i as a };
import r = require("./1506");
function i(e) {
  if ("string" !== typeof e) {
    throw new Error(r.a(7));
  }
  return e.charAt(0).toUpperCase() + e.slice(1);
}
export default i;