/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：239
 */

"use strict";

export { i as d };
export { a as e };
export { s as b };
export { c };
export { l as a };
import r = require("./16/index");
import o = require("./9");
function i() {
  return r.e(function (e) {
    var t = e.project;
    var n = t.screens;
    var r = t.currentScreenIndex;
    var o = n.get(r);
    if (r > -1 && o) {
      return o;
    }
  });
}
function a(e) {
  return r.e(function (t) {
    return t.project.screens.findIndex(function (t) {
      return t.id === e;
    });
  });
}
function s() {
  return r.e(function (e) {
    return e.common.editAreaUpdatedAt;
  });
}
function c() {
  return r.e(function (e) {
    return e.common.extensionListUpdateAt;
  });
}
function l() {
  var e = i();
  var t = [];
  if (e) {
    e.widgetIds.forEach(function (e) {
      var n = o.Bb(e);
      if (n) {
        var r = n.type;
        if (n && !t.includes(r)) {
          var i = o.Db(n.type);
          if (i && i.hasAnyWidget) {
            t.push(n.type);
          }
        }
      }
    });
  }
  return t;
}
export default l;