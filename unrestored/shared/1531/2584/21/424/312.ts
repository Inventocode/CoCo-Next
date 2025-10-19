/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：312
 */

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
import r = require("../../16/index");
import o = require("../../48/index");
import i = require("../../28/index");
import a = require("../../48/72");
import s = require("../../91");
import c = require("../../14");
import l = require("../../15");
import u = require("../../36/345/114");
function d(e, t) {
  var n = o.a().getState().screenList;
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
      p(null === i || undefined === i ? undefined : i.id, t);
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
        a = (null === l || undefined === l ? undefined : l.id) || "";
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
    var n = o.a();
    r.b(function () {
      n.dispatch(a.t(e));
      n.dispatch(a.u(undefined !== t ? t : ""));
    });
    s.b(e, "screen", "", "");
  }
}
function f(e, t) {
  var n = o.a().getState().screenList;
  var r = n.findIndex(function (t) {
    return t.id === e;
  });
  var i = n.get(r + 1);
  if (i) {
    d(i.id, t);
  }
}
function h(e, t) {
  var n = o.a().getState().screenList;
  var r = n.findIndex(function (t) {
    return t.id === e;
  });
  var i = n.get(r - 1);
  if (i && r > 0) {
    d(i.id, t);
  }
}
function m(e) {
  return o.a().getState().screenList.find(function (t) {
    return t.id === e;
  });
}
function g(e, t) {
  if (l.pb(t)) {
    o.a().dispatch(a.x(e, "backgroundColor", t));
  } else {
    c.a.log({
      type: "warning",
      messageId: "argNotColor",
      widgetId: e
    });
  }
}
function _(e, t) {
  if (u.d(t)) {
    o.a().dispatch(a.x(e, "backgroundImage", t));
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
    return t.size.width * i.n();
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
export default S;