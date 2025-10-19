/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1189
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = function (e, t, n) {
  if (!e.props.bounds) {
    return [t, n];
  }
  var a = e.props.bounds;
  a = "string" === typeof a ? a : function (e) {
    return {
      left: e.left,
      top: e.top,
      right: e.right,
      bottom: e.bottom
    };
  }(a);
  var s = i(e);
  if ("string" === typeof a) {
    var c;
    var l = s.ownerDocument;
    var u = l.defaultView;
    if (!((c = "parent" === a ? s.parentNode : l.querySelector(a)) instanceof u.HTMLElement)) {
      throw new Error("Bounds selector \"" + a + "\" could not find an element.");
    }
    var d = u.getComputedStyle(s);
    var p = u.getComputedStyle(c);
    a = {
      left: -s.offsetLeft + (0, r.int)(p.paddingLeft) + (0, r.int)(d.marginLeft),
      top: -s.offsetTop + (0, r.int)(p.paddingTop) + (0, r.int)(d.marginTop),
      right: (0, o.innerWidth)(c) - (0, o.outerWidth)(s) - s.offsetLeft + (0, r.int)(p.paddingRight) - (0, r.int)(d.marginRight),
      bottom: (0, o.innerHeight)(c) - (0, o.outerHeight)(s) - s.offsetTop + (0, r.int)(p.paddingBottom) - (0, r.int)(d.marginBottom)
    };
  }
  if ((0, r.isNum)(a.right)) {
    t = Math.min(t, a.right);
  }
  if ((0, r.isNum)(a.bottom)) {
    n = Math.min(n, a.bottom);
  }
  if ((0, r.isNum)(a.left)) {
    t = Math.max(t, a.left);
  }
  if ((0, r.isNum)(a.top)) {
    n = Math.max(n, a.top);
  }
  return [t, n];
};
exports.snapToGrid = function (e, t, n) {
  var r = Math.round(t / e[0]) * e[0];
  var o = Math.round(n / e[1]) * e[1];
  return [r, o];
};
exports.canDragX = function (e) {
  return "both" === e.props.axis || "x" === e.props.axis;
};
exports.canDragY = function (e) {
  return "both" === e.props.axis || "y" === e.props.axis;
};
exports.getControlPosition = function (e, t, n) {
  var r = "number" === typeof t ? (0, o.getTouch)(e, t) : null;
  if ("number" === typeof t && !r) {
    return null;
  }
  var a = i(n);
  var s = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
  return (0, o.offsetXYFromParent)(r || e, s, n.props.scale);
};
exports.createCoreData = function (e, t, n) {
  var o = e.state;
  var a = !(0, r.isNum)(o.lastX);
  var s = i(e);
  return a ? {
    node: s,
    deltaX: 0,
    deltaY: 0,
    lastX: t,
    lastY: n,
    x: t,
    y: n
  } : {
    node: s,
    deltaX: t - o.lastX,
    deltaY: n - o.lastY,
    lastX: o.lastX,
    lastY: o.lastY,
    x: t,
    y: n
  };
};
exports.createDraggableData = function (e, t) {
  var n = e.props.scale;
  return {
    node: t.node,
    x: e.state.x + t.deltaX / n,
    y: e.state.y + t.deltaY / n,
    deltaX: t.deltaX / n,
    deltaY: t.deltaY / n,
    lastX: e.state.x,
    lastY: e.state.y
  };
};
var r = require("./928");
var o = require("./1049/index");
function i(e) {
  var t = e.findDOMNode();
  if (!t) {
    throw new Error("<DraggableCore>: Unmounted during event!");
  }
  return t;
}