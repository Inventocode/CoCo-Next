/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2624
 */

"use strict";

function r(e) {
  var t = e.theme;
  var n = e.name;
  var r = e.props;
  if (!t || !t.props || !t.props[n]) {
    return r;
  }
  var i;
  var o = t.props[n];
  for (i in o) if (undefined === r[i]) {
    r[i] = o[i];
  }
  return r;
}
export { r as a };
export default r;