/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：43
 */

"use strict";

export { u as a };
export { d as g };
export { p as h };
export { f };
export { h as b };
export { g as e };
export { _ as c };
export { v as d };
import r = require("regenerator-runtime");
var o = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(r);
import i = require("./10/index");
import a = require("./7");
import s = require("../../../../src/shared/events/actions");
import c = require("../../../../src/shared/events/messages-wrapper");
import l = require("./99");
var u = function () {
  var e;
  var t = s.d.getState().project.currentScreenIndex;
  return null === (e = s.d.getState().project.screens.get(t)) || undefined === e ? undefined : e.get("id");
};
var d = function (e) {
  var t;
  var n = s.d.getState().project;
  var r = n.currentScreenIndex;
  return e === (null === (t = n.screens.get(r)) || undefined === t ? undefined : t.id);
};
var p = function (e) {
  return s.d.dispatch(e);
};
function f(e) {
  p(c.xh(e));
}
function h() {
  return m.apply(this, arguments);
}
function m() {
  return (m = a.a(o.a.mark(function e() {
    var t;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.c();
          case 2:
            t = e.sent;
            Object.entries(t.screens).forEach(function (e) {
              i.a(e, 2)[1].snapshot = "";
            });
            return e.abrupt("return", t);
          case 5:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function g() {
  var e;
  return (null === (e = s.d.getState().common.userInfo) || undefined === e ? undefined : e.id) || -1;
}
function _() {
  return s.d.getState().oTState.onlineCooperationUserColorRecord.toJSON();
}
function v() {
  return s.d.getState().oTState.userFocusOTInfoList.toJSON();
}
export default u;