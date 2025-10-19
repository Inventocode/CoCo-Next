/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514
 */

"use strict";

export { o as a };
import r = require("react");
var i = r.createContext(undefined);
var o = function (e) {
  var t = e.children;
  var n = e.size;
  return r.createElement(i.Consumer, null, function (e) {
    return r.createElement(i.Provider, {
      value: n || e
    }, t);
  });
};
export { i as b };
export default o;