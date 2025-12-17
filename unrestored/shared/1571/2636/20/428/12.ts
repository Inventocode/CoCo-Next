/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：12
 */

"use strict"

export { s as b }
export { c as a }
export { l as e }
export { u as c }
export { d as f }
export { p as g }
export { f as d }
export { h }
export { m as j }
export { g as k }
export { _ as l }
export { v as i }
import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_48_index from "../../48/index"
import * as /* [auto-meaningful-name] */$$_$$_48_72 from "../../48/72"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
function s(e) {
  return $$_$$_48_index.a().getState().widgetMap.get(e)
}
function c(e) {
  var t = $$_$$_48_index.a().getState().widgetMap.get(e)
  if (t && t.parentId) {
    return $$_$$_48_index.a().getState().widgetMap.get(t.parentId)
  }
}
function l(e) {
  var t
  return null === (t = s(e)) || undefined === t ? undefined : t.position
}
function u(e) {
  var t
  return null === (t = s(e)) || undefined === t ? undefined : t.animationRecord
}
function d(e) {
  var t
  return null === (t = s(e)) || undefined === t ? undefined : t.size
}
function p(e) {
  var t
  return null === (t = s(e)) || undefined === t ? undefined : t.visible
}
function f(e) {
  var t
  return null === (t = s(e)) || undefined === t ? undefined : t.attributes
}
function h(e, t) {
  var n = s(e)
  if (n) {
    var a = $$_$$_6.a($$_$$_6.a({}, n), {}, {
      attributes: $$_$$_6.a($$_$$_6.a({}, n.attributes), t)
    })
    $$_$$_48_index.a().dispatch($$_$$_48_72.v(e, a))
  }
}
function m(e, t) {
  var n = s(e)
  if (n) {
    if (undefined !== t.x) {
      if (!$$_$$_14.a.isNumber(t.x, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "X坐标"
        }
      })) {
        return
      }
      t.x = Math.round(t.x)
    }
    if (undefined !== t.y) {
      if (!$$_$$_14.a.isNumber(t.y, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "Y坐标"
        }
      })) {
        return
      }
      t.y = Math.round(t.y)
    }
    $$_$$_48_index.a().dispatch($$_$$_48_72.v(e, $$_$$_6.a($$_$$_6.a({}, n), {}, {
      position: $$_$$_6.a($$_$$_6.a({}, n.position), t)
    })))
  } else {
    console.error("updateWidgetPosition error, widget is undefined")
  }
}
function g(e, t) {
  var n = s(e)
  if (n) {
    var c = $$_$$_6.a({}, n.attributes)
    if (undefined !== t.height) {
      if (!$$_$$_14.a.isNumber(t.height, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "高度"
        }
      })) {
        return
      }
      t.height = Math.round(t.height)
      if (t.height < 0) {
        return void $$_$$_14.a.log({
          type: "warning",
          widgetId: e,
          messageId: "valueOutOfRange"
        })
      }
    }
    if (undefined !== t.width) {
      if (!$$_$$_14.a.isNumber(t.width, {
        type: "error",
        widgetId: e,
        messageId: "argNotNumber",
        values: {
          name: "宽度"
        }
      })) {
        return
      }
      t.width = Math.round(t.width)
      if (t.width < 0) {
        return void $$_$$_14.a.log({
          type: "warning",
          widgetId: e,
          messageId: "valueOutOfRange"
        })
      }
    }
    $$_$$_48_index.a().dispatch($$_$$_48_72.v(e, $$_$$_6.a($$_$$_6.a({}, n), {}, {
      attributes: $$_$$_6.a({}, c),
      size: $$_$$_6.a($$_$$_6.a({}, n.size), t)
    })))
  } else {
    console.error("updateWidgetSize error, widget is undefined")
  }
}
function _(e, t) {
  var n = s(e)
  if (n) {
    $$_$$_48_index.a().dispatch($$_$$_48_72.v(e, $$_$$_6.a($$_$$_6.a({}, n), {}, {
      visible: t
    })))
  }
}
function v(e, t) {
  var n = s(e)
  if (n) {
    $$_$$_48_index.a().dispatch($$_$$_48_72.v(e, $$_$$_6.a($$_$$_6.a({}, n), {}, {
      opacity: t
    })))
  }
}
export default c
