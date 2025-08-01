"use strict";

export { s as b };
export { c as a };
export { l as e };
export { u as c };
export { d as f };
export { p as g };
export { f as d };
export { h };
export { m as j };
export { g as k };
export { _ as l };
export { v as i };
var r = require("../../6");
var o = require("../../48/index");
var i = require("../../48/72");
var a = require("../../14");
function s(e) {
  return Object(o.a)().getState().widgetMap.get(e);
}
function c(e) {
  var t = Object(o.a)().getState().widgetMap.get(e);
  if (t && t.parentId) {
    return Object(o.a)().getState().widgetMap.get(t.parentId);
  }
}
function l(e) {
  var t;
  return null === (t = s(e)) || void 0 === t ? void 0 : t.position;
}
function u(e) {
  var t;
  return null === (t = s(e)) || void 0 === t ? void 0 : t.animationRecord;
}
function d(e) {
  var t;
  return null === (t = s(e)) || void 0 === t ? void 0 : t.size;
}
function p(e) {
  var t;
  return null === (t = s(e)) || void 0 === t ? void 0 : t.visible;
}
function f(e) {
  var t;
  return null === (t = s(e)) || void 0 === t ? void 0 : t.attributes;
}
function h(e, t) {
  var n = s(e);
  if (n) {
    var a = Object(r.a)(Object(r.a)({}, n), {}, {
      attributes: Object(r.a)(Object(r.a)({}, n.attributes), t)
    });
    Object(o.a)().dispatch(Object(i.v)(e, a));
  }
}
function m(e, t) {
  var n = s(e);
  if (n) {
    if (void 0 !== t.x) {
      if (!a.a.isNumber(t.x, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "X\u5750\u6807"
        }
      })) {
        return;
      }
      t.x = Math.round(t.x);
    }
    if (void 0 !== t.y) {
      if (!a.a.isNumber(t.y, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "Y\u5750\u6807"
        }
      })) {
        return;
      }
      t.y = Math.round(t.y);
    }
    Object(o.a)().dispatch(Object(i.v)(e, Object(r.a)(Object(r.a)({}, n), {}, {
      position: Object(r.a)(Object(r.a)({}, n.position), t)
    })));
  } else {
    console.error("updateWidgetPosition error, widget is undefined");
  }
}
function g(e, t) {
  var n = s(e);
  if (n) {
    var c = Object(r.a)({}, n.attributes);
    if (void 0 !== t.height) {
      if (!a.a.isNumber(t.height, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "\u9ad8\u5ea6"
        }
      })) {
        return;
      }
      t.height = Math.round(t.height);
      if (t.height < 0) {
        return void a.a.log({
          type: "warning",
          widgetId: e,
          messageId: "valueOutOfRange"
        });
      }
    }
    if (void 0 !== t.width) {
      if (!a.a.isNumber(t.width, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "\u5bbd\u5ea6"
        }
      })) {
        return;
      }
      t.width = Math.round(t.width);
      if (t.width < 0) {
        return void a.a.log({
          type: "warning",
          widgetId: e,
          messageId: "valueOutOfRange"
        });
      }
    }
    Object(o.a)().dispatch(Object(i.v)(e, Object(r.a)(Object(r.a)({}, n), {}, {
      attributes: Object(r.a)({}, c),
      size: Object(r.a)(Object(r.a)({}, n.size), t)
    })));
  } else {
    console.error("updateWidgetSize error, widget is undefined");
  }
}
function _(e, t) {
  var n = s(e);
  if (n) {
    Object(o.a)().dispatch(Object(i.v)(e, Object(r.a)(Object(r.a)({}, n), {}, {
      visible: t
    })));
  }
}
function v(e, t) {
  var n = s(e);
  if (n) {
    Object(o.a)().dispatch(Object(i.v)(e, Object(r.a)(Object(r.a)({}, n), {}, {
      opacity: t
    })));
  }
}
export default c;