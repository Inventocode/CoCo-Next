/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：67
 */

"use strict";

export { d as c };
export { p as a };
export { f as b };
import r = require("../../../6");
import o = require("../../../5");
import i = require("../12");
import a = require("../89");
import s = require("../../../15");
import c = require("./410");
import l = require("../../../36/345/114");
import u = require("../../../55");
function d(e, t, n, d) {
  var p;
  var f = i.b(e);
  if (!f) {
    console.error("getWidget error");
    return null;
  }
  var h = s.q(f);
  var m = i.b(h.parentId || "");
  if (!m) {
    console.error("getParentWidget error");
    return null;
  }
  var g = undefined === n ? 1 : n + 1;
  var _ = a.d.get("".concat(m.id, "_").concat(t)) || {};
  if (_[g]) {
    h.attributes = r.a(r.a({}, h.attributes), _[g]);
  }
  var v = m;
  if (v.attributes.disabled && h.type === o.H) {
    if (["titleSlot"].includes(t)) {
      h.attributes.color = "#7C7C7C";
    } else {
      h.attributes.color = "#CACACA";
    }
  }
  if (undefined === n) {
    return c.c({
      widget: h,
      forceRender: true
    });
  }
  var b = null === (p = v.attributes.templateSlotMap[t]) || undefined === p ? undefined : p.dataBindings;
  if (d && b) {
    var y = d[b];
    if (h.type === o.H) {
      h.attributes.content = y || "";
    }
    if (h.type === o.v && y) {
      if (l.b(y)) {
        h.attributes.fileId = y;
      } else {
        u.b.widgetError({
          widgetId: h.parentId || "",
          widgetType: m.type,
          message: "ListViewerWidget.imageNotExists"
        });
      }
    }
  }
  return c.c({
    widget: r.a(r.a({}, h), {}, {
      id: "".concat(e, "_").concat(n)
    }),
    forceRender: true
  });
}
function p(e) {
  var t = {
    broken: false,
    waiting: false
  };
  var n = function () {
    t.broken = true;
  };
  var r = function () {
    t.waiting = false;
  };
  document.addEventListener("mouseup", n, {
    once: true
  });
  document.addEventListener("touchend", n, {
    once: true
  });
  !function n() {
    requestAnimationFrame(function () {
      if (!t.broken) {
        if (!t.waiting) {
          t.waiting = true;
          e().finally(r);
        }
        n();
      }
    });
  }();
}
function f(e, t) {
  var n = false;
  var r = {
    waiting: false
  };
  var o = function () {
    r.waiting = false;
  };
  !function i() {
    requestAnimationFrame(function () {
      var a = e();
      if (a && a !== n) {
        if (!r.waiting) {
          r.waiting = true;
          t().finally(o);
        }
      }
      n = a;
      i();
    });
  }();
}
export default p;