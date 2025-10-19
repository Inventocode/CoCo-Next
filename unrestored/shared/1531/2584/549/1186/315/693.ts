/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：693
 */

"use strict";

export { r as b };
export { i as a };
var r = function (e) {
  return e.scrollTop;
};
function i(e, t) {
  var n = e.timeout;
  var r = e.style;
  var i = undefined === r ? {} : r;
  return {
    duration: i.transitionDuration || "number" === typeof n ? n : n[t.mode] || 0,
    delay: i.transitionDelay
  };
}
export default i;