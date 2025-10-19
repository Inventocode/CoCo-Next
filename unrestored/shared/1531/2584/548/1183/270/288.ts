/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：288
 */

"use strict";

export { o as a };
import r = require("react");
import i = require("./689");
function o(e, t) {
  return r.useMemo(function () {
    return null == e && null == t ? null : function (n) {
      i.a(e, n);
      i.a(t, n);
    };
  }, [e, t]);
}
export default o;