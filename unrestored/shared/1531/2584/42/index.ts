/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：42
 */

"use strict"

export { b as g }
export { y as b }
export { E as a }
export { O as f }
export { w as c }
export { C as d }
export { T as e }
import r = require("../6")
import /* [auto-meaningful-name] */React = require("react")
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(React)
import a = require("../8")
var s = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(a)
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load = require("../../../../../src/shared/widget/custom/load")
import /* [auto-meaningful-name] */$$_15 = require("../15")
import u = require("../5")
import /* [auto-meaningful-name] */$$_10_index = require("../10/index")
import /* [auto-meaningful-name] */$$_16_index = require("../16/index")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../../src/shared/events/messages-wrapper")
require("./847")
import h = require("../9")
import /* [auto-meaningful-name] */$_669_index = require("./669/index")
import /* [auto-meaningful-name] */$$_35 = require("../35")
var _ = function (e) {
  var /* [auto-meaningful-name] */e$render = e.render
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var a = React.useState()
  var s = $$_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var _ = $$_16_index.d()
  var v = $$_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var b = v === e$widgetId
  var y = React.useCallback(function (e, t, r, o) {
    _($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(e$widgetId, e, t, r, o))
  }, [_, e$widgetId])
  var /* [auto-meaningful-name] */CocoWidgetWrapper = "coco-widget-wrapper"
  if (!(e$widgetType !== u.a && e$widgetType !== u.c)) {
    CocoWidgetWrapper = ""
  }
  var O = h.qb(e$widgetId)
  if ((null === O || undefined === O ? undefined : O.type) && [u.x, u.A].includes(O.type)) {
    CocoWidgetWrapper += " coco-child-widget"
    if (e$widgetType === u.v) {
      CocoWidgetWrapper += " coco-child-widget-full"
    }
    if (e$widgetId === v) {
      CocoWidgetWrapper += " coco-child-widget-selected"
    }
  }
  return i.a.createElement("div", {
    className: CocoWidgetWrapper
  }, c && i.a.createElement($_669_index.a, c), e$render(y, function (e, t, r) {
    if ($$_35.r(e$widgetId)) {
      l({
        target: e,
        callback: t,
        options: r
      })
    }
  }, b))
}
import /* [auto-meaningful-name] */$$_90 = require("../90")
var b = new Map()
var y = new Map()
var E = []
function O(e) {
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$forceRender = e.forceRender
  var /* [auto-meaningful-name] */e$zIndex = e.zIndex
  var a = undefined === e$zIndex ? 0 : e$zIndex
  if (e$forceRender || !e$widget.parentId) {
    var l = $$_35.Db(e$widget.type)
    if (!l) {
      return null
    }
    var /* [auto-meaningful-name] */l$component = l.component
    if ($$_$$_$$_$$_$$_src_shared_widget_custom_load.q(e$widget.type) && !l.isInvisibleWidget) {
      var p = new l$component(r.a(r.a({}, e$widget.attributes), {}, {
        __widgetId: e$widget.id,
        __widgetType: e$widget.type,
        __width: e$widget.size.width,
        __height: e$widget.size.height
      }))
      return i.a.createElement(_, {
        key: e$widget.id,
        widgetId: e$widget.id,
        widgetType: e$widget.type,
        render: function () {
          return i.a.createElement("div", {
            id: e$widget.id,
            style: {
              position: "absolute",
              left: e$widget.position.x,
              top: e$widget.position.y,
              display: e$widget.visible ? "block" : "none",
              width: e$widget.size.width,
              height: e$widget.size.height,
              opacity: l.isInvisibleWidget || undefined === e$widget.opacity ? undefined : e$widget.opacity / 100
            },
            className: s()($$_90.b),
            "data-role": u.M
          }, i.a.createElement("div", {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1e4
            }
          }), p.render())
        }
      })
    }
    return i.a.createElement(_, {
      key: e$widget.id,
      widgetId: e$widget.id,
      widgetType: e$widget.type,
      render: function (e, n, r) {
        return i.a.createElement(l$component, Object.assign({}, e$widget, {
          onChange: e,
          onEdit: n,
          zIndex: a,
          selected: r
        }))
      }
    })
  }
}
function w(e, t) {
  var n = $$_35.Cb(e)
  return n ? O({
    widget: n,
    forceRender: true,
    zIndex: t
  }) : null
}
function C(e) {
  var t = $$_35.Cb(e)
  return t ? O({
    widget: t,
    forceRender: true
  }) : null
}
function T(e, t, n, o) {
  var i
  var a = $$_35.Cb(e)
  if (!a) {
    return null
  }
  var s = $$_15.q(a)
  var c = $$_35.Cb(s.parentId || "")
  if (!c) {
    console.error("getParentWidget error")
    return null
  }
  var d = c
  if (d.attributes.disabled && s.type === u.H) {
    if (["titleSlot"].includes(t)) {
      s.attributes.color = "#7C7C7C"
    } else {
      s.attributes.color = "#CACACA"
    }
  }
  if (undefined === n) {
    return O({
      widget: s,
      forceRender: true
    })
  }
  var p = null === (i = d.attributes.templateSlotMap[t]) || undefined === i ? undefined : i.dataBindings
  if (o && p) {
    var f = o[p]
    if (s.type === u.H) {
      s.attributes.content = f || ""
    }
    if (s.type === u.v && f && $$_35.Fb(f)) {
      s.attributes.fileId = f
    }
  }
  return O({
    widget: r.a({}, s),
    forceRender: true
  })
}
export default E
