"use strict";

export { d as c };
export { p as a };
export { f as b };
var r = require("../../../6");
var o = require("../../../5");
var i = require("../12");
var a = require("../89");
var s = require("../../../15");
var c = require("./410");
var l = require("../../../36/345/114");
var u = require("../../../55");
function d(e, t, n, d) {
  var p;
  var f = Object(i.b)(e);
  if (!f) {
    console.error("getWidget error");
    return null;
  }
  var h = Object(s.q)(f);
  var m = Object(i.b)(h.parentId || "");
  if (!m) {
    console.error("getParentWidget error");
    return null;
  }
  var g = void 0 === n ? 1 : n + 1;
  var _ = a.d.get("".concat(m.id, "_").concat(t)) || {};
  if (_[g]) {
    h.attributes = Object(r.a)(Object(r.a)({}, h.attributes), _[g]);
  }
  var v = m;
  if (v.attributes.disabled && h.type === o.H) {
    if (["titleSlot"].includes(t)) {
      h.attributes.color = "#7C7C7C";
    } else {
      h.attributes.color = "#CACACA";
    }
  }
  if (void 0 === n) {
    return Object(c.c)({
      widget: h,
      forceRender: !0
    });
  }
  var b = null === (p = v.attributes.templateSlotMap[t]) || void 0 === p ? void 0 : p.dataBindings;
  if (d && b) {
    var y = d[b];
    if (h.type === o.H) {
      h.attributes.content = y || "";
    }
    if (h.type === o.v && y) {
      if (Object(l.b)(y)) {
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
  return Object(c.c)({
    widget: Object(r.a)(Object(r.a)({}, h), {}, {
      id: "".concat(e, "_").concat(n)
    }),
    forceRender: !0
  });
}
function p(e) {
  var t = {
    broken: !1,
    waiting: !1
  };
  var n = function () {
    t.broken = !0;
  };
  var r = function () {
    t.waiting = !1;
  };
  document.addEventListener("mouseup", n, {
    once: !0
  });
  document.addEventListener("touchend", n, {
    once: !0
  });
  !function n() {
    requestAnimationFrame(function () {
      if (!t.broken) {
        if (!t.waiting) {
          t.waiting = !0;
          e().finally(r);
        }
        n();
      }
    });
  }();
}
function f(e, t) {
  var n = !1;
  var r = {
    waiting: !1
  };
  var o = function () {
    r.waiting = !1;
  };
  !function i() {
    requestAnimationFrame(function () {
      var a = e();
      if (a && a !== n) {
        if (!r.waiting) {
          r.waiting = !0;
          t().finally(o);
        }
      }
      n = a;
      i();
    });
  }();
}
export default p;