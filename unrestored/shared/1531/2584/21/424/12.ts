/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：12
 */

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
import r = require("../../6");
import o = require("../../48/index");
import i = require("../../48/72");
import a = require("../../14");
function s(e) {
  return o.a().getState().widgetMap.get(e);
}
function c(e) {
  var t = o.a().getState().widgetMap.get(e);
  if (t && t.parentId) {
    return o.a().getState().widgetMap.get(t.parentId);
  }
}
function l(e) {
  var t;
  return null === (t = s(e)) || undefined === t ? undefined : t.position;
}
function u(e) {
  var t;
  return null === (t = s(e)) || undefined === t ? undefined : t.animationRecord;
}
function d(e) {
  var t;
  return null === (t = s(e)) || undefined === t ? undefined : t.size;
}
function p(e) {
  var t;
  return null === (t = s(e)) || undefined === t ? undefined : t.visible;
}
function f(e) {
  var t;
  return null === (t = s(e)) || undefined === t ? undefined : t.attributes;
}
function h(e, t) {
  var n = s(e);
  if (n) {
    var a = r.a(r.a({}, n), {}, {
      attributes: r.a(r.a({}, n.attributes), t)
    });
    o.a().dispatch(i.v(e, a));
  }
}
function m(e, t) {
  var n = s(e);
  if (n) {
    if (undefined !== t.x) {
      if (!a.a.isNumber(t.x, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "X坐标"
        }
      })) {
        return;
      }
      t.x = Math.round(t.x);
    }
    if (undefined !== t.y) {
      if (!a.a.isNumber(t.y, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "Y坐标"
        }
      })) {
        return;
      }
      t.y = Math.round(t.y);
    }
    o.a().dispatch(i.v(e, r.a(r.a({}, n), {}, {
      position: r.a(r.a({}, n.position), t)
    })));
  } else {
    console.error("updateWidgetPosition error, widget is undefined");
  }
}
function g(e, t) {
  var n = s(e);
  if (n) {
    var c = r.a({}, n.attributes);
    if (undefined !== t.height) {
      if (!a.a.isNumber(t.height, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "高度"
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
    if (undefined !== t.width) {
      if (!a.a.isNumber(t.width, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "宽度"
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
    o.a().dispatch(i.v(e, r.a(r.a({}, n), {}, {
      attributes: r.a({}, c),
      size: r.a(r.a({}, n.size), t)
    })));
  } else {
    console.error("updateWidgetSize error, widget is undefined");
  }
}
function _(e, t) {
  var n = s(e);
  if (n) {
    o.a().dispatch(i.v(e, r.a(r.a({}, n), {}, {
      visible: t
    })));
  }
}
function v(e, t) {
  var n = s(e);
  if (n) {
    o.a().dispatch(i.v(e, r.a(r.a({}, n), {}, {
      opacity: t
    })));
  }
}
export default c;