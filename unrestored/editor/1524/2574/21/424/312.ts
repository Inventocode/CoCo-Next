"use strict";

export { d as j };
export { p as g };
export { f as h };
export { h as i };
export { g as l };
export { _ as m };
export { v as f };
export { b as e };
export { y as c };
export { E as d };
export { w as k };
export { C as n };
export { T as b };
export { S as a };
import * as r from "../../16/index";
import * as o from "../../48/index";
import * as i from "../../206/29/index";
import * as a from "../../48/72";
import * as s from "../../91";
import * as c from "../../14";
import * as l from "../../15/index";
import * as u from "../../36/345/114";
function d(e, t) {
  var n = Object(o.a)().getState().screenList;
  if ("string" === typeof e || "number" === typeof e) {
    if ("number" === typeof e) {
      var r = e - 1;
      var i = n.get(r);
      if (!i) {
        return void c.a.log({
          type: "error",
          messageId: "screenIndexNotExist"
        });
      }
      p(null === i || void 0 === i ? void 0 : i.id, t);
    }
    if ("string" === typeof e) {
      var a = e;
      var s = n.findIndex(function (t) {
        return t.id === e || t.title === e;
      });
      if (-1 === s) {
        return void c.a.log({
          type: "error",
          messageId: "screenTitleNotExist"
        });
      }
      if (!e.includes("SCREEN")) {
        var l = n.get(s);
        a = (null === l || void 0 === l ? void 0 : l.id) || "";
      }
      p(a, t);
    }
  } else {
    c.a.log({
      type: "error",
      messageId: "screenTypeNotNumberAndString"
    });
  }
}
function p(e, t) {
  if (e) {
    var n = Object(o.a)();
    Object(r.b)(function () {
      n.dispatch(Object(a.t)(e));
      n.dispatch(Object(a.u)(void 0 !== t ? t : ""));
    });
    Object(s.b)(e, "screen", "", "");
  }
}
function f(e, t) {
  var n = Object(o.a)().getState().screenList;
  var r = n.findIndex(function (t) {
    return t.id === e;
  });
  var i = n.get(r + 1);
  if (i) {
    d(i.id, t);
  }
}
function h(e, t) {
  var n = Object(o.a)().getState().screenList;
  var r = n.findIndex(function (t) {
    return t.id === e;
  });
  var i = n.get(r - 1);
  if (i && r > 0) {
    d(i.id, t);
  }
}
function m(e) {
  return Object(o.a)().getState().screenList.find(function (t) {
    return t.id === e;
  });
}
function g(e, t) {
  if (Object(l.pb)(t)) {
    Object(o.a)().dispatch(Object(a.x)(e, "backgroundColor", t));
  } else {
    c.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    });
  }
}
function _(e, t) {
  if (Object(u.d)(t)) {
    Object(o.a)().dispatch(Object(a.x)(e, "backgroundImage", t));
  } else {
    c.a.log({
      messageId: "imageNotExists",
      type: "error",
      widgetId: e
    });
  }
}
function v(e) {
  var t = m(e);
  if (t) {
    return t.size.width;
  }
}
function b(e) {
  var t = m(e);
  if (t) {
    return t.size.width * Object(i.m)();
  }
}
function y(e) {
  var t = m(e);
  if (t) {
    return t.backgroundColor;
  }
}
function E(e) {
  var t = m(e);
  if (t) {
    return t.backgroundImage;
  }
}
var O = new Set();
function w(e) {
  O.add(e);
}
function C(e) {
  O.delete(e);
}
function T() {
  O.clear();
}
function S(e) {
  return O.has(e);
}