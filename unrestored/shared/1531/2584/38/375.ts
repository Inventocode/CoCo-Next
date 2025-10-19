/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：375
 */

"use strict";

function r(e) {
  var t = [];
  try {
    var n = new RegExp("ql-font-(\\w*)", "g");
    var r = e.match(n);
    new Set(Array.from(r || [])).forEach(function (e) {
      return t.push(e.slice("ql-font-".length));
    });
  } catch (o) {}
  return t;
}
export { r as a };
export default r;