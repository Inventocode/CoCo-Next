"use strict";

export { a as e };
export { s as d };
export { l as k };
export { u as n };
export { d as l };
export { p as j };
export { f as i };
export { h };
export { m as g };
export { g as o };
export { _ as s };
export { v as r };
export { b as m };
export { y as f };
export { E as a };
export { O as p };
export { w as q };
export { C as c };
export { T as b };
export { S as t };
var r = require("../10/index");
var o = require("../17/index");
var i = require("./127");
function a(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return {
    alt: "*",
    src: e,
    type: "field_icon",
    is_head: t
  };
}
function s(e, t, n) {
  return {
    type: "field_image",
    src: "".concat(e),
    width: t || "%{BKY_BLOCK_TYPE_ICON_WIDTH}",
    height: n || "%{BKY_BLOCK_TYPE_ICON_WIDTH}"
  };
}
function c(e) {
  return e && e.length ? e.join(", ") : "";
}
function l(e, t) {
  var n = e.map(function (e, t) {
    return e || "_unset_".concat(t);
  });
  return "async function(".concat(c(n), ") {").concat(t, "}");
}
function u(e, t, n, r) {
  var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  var i = c(t);
  var a = c(r);
  var s = o ? "CocoExtension." : "Coco.";
  var l = "".concat(s).concat(e, "(").concat(i);
  if (n && null !== n) {
    var u = t && t.length ? ", " : "";
    l += "".concat(u, " async function(").concat(a, ") {\n").concat(n, "}");
  }
  return l + ");\n";
}
function d(e, t, n) {
  var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  var o = JSON.stringify({
    blockId: t.id,
    blockType: t.type,
    screenId: n.getDynamicValue("__CURRENT_SCREEN_ID__")
  });
  var i = "await ".concat("Coco.", "withContextAsync(async ()=> { ").concat(r ? "return" : "", " ").concat(e, " }, ").concat(o, ")").concat(r ? "" : ";", " ");
  if (e.endsWith("\n")) {
    i += "\n";
  }
  return i;
}
function p(e, t, n, r) {
  var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
  var i = t ? c(t) : "";
  var a = o ? "CocoExtension." : "Coco.";
  var s = "await ".concat(a).concat(e, "(").concat(i);
  var l = c(r);
  if (n && null !== n) {
    var u = t && t.length ? ", " : "";
    s += "".concat(u, " async function(").concat(l, ") {\n").concat(n, "}");
  }
  return s + ");\n";
}
function f(e, t, n, r) {
  var o = "await ".concat(e, "(");
  if (t && (o += "async function(".concat(c(r), ") {\n").concat(t, "}")), n) {
    o += "".concat(t ? ", " : "").concat(c(n));
  }
  return o + ");\n";
}
function h(e, t) {
  return "/* ".concat(Object.entries(t).map(function (e) {
    var t = Object(r.a)(e, 2);
    var n = t[0];
    var o = t[1];
    return "".concat(n, "=").concat(o);
  }).join(";"), " */ ").concat(e);
}
function m(e, t) {
  return "async function () {\n    if (typeof (".concat(e, ') === "boolean") {\n      return ((').concat(e, ") === ").concat(t, ");\n    } else if (typeof (").concat(e, ') === "number" && ((').concat(e, ") === 0)) {\n      return (false === ").concat(t, ");\n    }\n    return (true === ").concat(t, ")\n  }");
}
function g(e) {
  return JSON.stringify(e);
}
function _(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  var r = t ? c(t) : "";
  var o = n ? "CocoExtension." : "Coco.";
  return "".concat(o).concat(e, "(").concat(r, ")");
}
function v(e, t) {
  var n = t ? c(t) : "";
  return "await ".concat("Coco.").concat(e, "(").concat(n, ")");
}
function b(e, t, n) {
  var r = t ? c(t) : "";
  var o = "".concat("Coco.").concat(e, "(").concat(r);
  if (n && null !== n) {
    var i = t && t.length ? ", " : "";
    o += "".concat(i, " asyncScheduler.plan(async function() {\n").concat(n, "})");
  }
  return o + ");\n";
}
function y(e, t) {
  var n = encodeURI(e).replace(/%/g, "$");
  return "$" + t.replace(/-/g, "$") + "_" + n;
}
var E = "_param_";
var O = o.Blink.di_container.get(i.BINDING.MutationAddButton);
var w = o.Blink.di_container.get(i.BINDING.MutationRemoveButton);
var C = o.Blink.di_container.get(i.BINDING.ChangeEvent);
function T(e, t, n, r) {
  if (!this.get_input(e)) {
    var i = this.rendered;
    this.rendered = !1;
    var a = t();
    if (i && (this.inputList.forEach(function (e) {
      return e.init();
    }), this.render(!0)), this.rendered && (this.cacheId[e] = this.cacheId[e] || o.Blink.utils.gen_uid()), this.cacheId[e]) {
      var s;
      var c;
      var l = o.Blink.utils.string_to_dom(n);
      if (l.setAttribute("id", this.cacheId[e]), void 0 !== r && l.firstElementChild && (l.firstElementChild.textContent = r), null === (s = a.connection) || void 0 === s || s.set_shadow_dom(l), null === (c = a.connection) || void 0 === c || c.respawn_shadow(), o.Blink.events.is_enabled()) {
        var u = C("mutation", {
          block: this,
          old_value: void 0,
          new_value: "1"
        });
        o.Blink.events.fire(u);
      }
      this.rendered = i;
    }
  }
}
function S(e, t, n) {
  var r;
  var i = this.get_input(e);
  if (i) {
    var a;
    var s = null === (r = i.connection) || void 0 === r ? void 0 : r.targetBlock();
    if (s && s.is_shadow()) {
      this.cacheId[e] = s.id;
      a = s.get_field_value(t) || "1";
    } else {
      var c;
      var l;
      var u = null === (c = i.connection) || void 0 === c ? void 0 : c.get_shadow_dom();
      this.cacheId[e] = (null === u || void 0 === u ? void 0 : u.getAttribute("id")) || o.Blink.utils.gen_uid();
      a = (null === u || void 0 === u || null === (l = u.querySelector('field[name="'.concat(t, '"]'))) || void 0 === l ? void 0 : l.textContent) || "1";
    }
    var d = this.rendered;
    if (this.rendered = !1, n(), d && (this.inputList.forEach(function (e) {
      return e.init();
    }), this.render(!0)), o.Blink.events.is_enabled()) {
      var p = C("mutation", {
        block: this,
        old_value: a,
        new_value: void 0
      });
      o.Blink.events.fire(p);
    }
    this.rendered = d;
  }
}
export default E;