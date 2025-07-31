"use strict";

export { u as a };
export { d as g };
export { p as h };
export { f };
export { h as b };
export { g as e };
export { _ as c };
export { v as d };
var r = require("./1/index");
var o = (module => {
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
})(r);
var i = require("./10/index");
var a = require("./7");
var s = require("./38/index");
var c = require("./2/index");
var l = require("./99");
var u = function () {
  var e;
  var t = s.d.getState().project.currentScreenIndex;
  return null === (e = s.d.getState().project.screens.get(t)) || void 0 === e ? void 0 : e.get("id");
};
var d = function (e) {
  var t;
  var n = s.d.getState().project;
  var r = n.currentScreenIndex;
  return e === (null === (t = n.screens.get(r)) || void 0 === t ? void 0 : t.id);
};
var p = function (e) {
  return s.d.dispatch(e);
};
function f(e) {
  p(Object(c.xh)(e));
}
function h() {
  return m.apply(this, arguments);
}
function m() {
  return (m = Object(a.a)(o.a.mark(function e() {
    var t;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return Object(l.c)();
          case 2:
            t = e.sent;
            Object.entries(t.screens).forEach(function (e) {
              Object(i.a)(e, 2)[1].snapshot = "";
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
  return (null === (e = s.d.getState().common.userInfo) || void 0 === e ? void 0 : e.id) || -1;
}
function _() {
  return s.d.getState().oTState.onlineCooperationUserColorRecord.toJSON();
}
function v() {
  return s.d.getState().oTState.userFocusOTInfoList.toJSON();
}
export default u;