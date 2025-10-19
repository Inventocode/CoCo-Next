/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：10
 */

"use strict";

export { a };
import r = require("./1438");
import i = require("./768");
import o = require("./1439");
function a(e, t) {
  return r.a(e) || function (e, t) {
    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
      var n = [];
      var r = true;
      var i = false;
      var o = undefined;
      try {
        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true) {
          ;
        }
      } catch (c) {
        i = true;
        o = c;
      } finally {
        try {
          if (!(r || null == s.return)) {
            s.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return n;
    }
  }(e, t) || i.a(e, t) || o.a();
}
export default a;