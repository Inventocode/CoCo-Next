/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1471
 */

"use strict"

import /* [auto-meaningful-name] */$_10_index = require("./10/index")
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
import /* [auto-meaningful-name] */$_16_index = require("./16/index")
import s = require("./8")
var c = function __importDefault(module) {
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
}(s)
import /* [auto-meaningful-name] */$_702 = require("./702")
import /* [auto-meaningful-name] */$_13_index = require("./13/index")
import /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../src/shared/events/messages-wrapper")
import /* [auto-meaningful-name] */$_468 = require("./468")
var f = function __importDefault(module) {
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
}($_468)
import h = require("./5")
import m = require("./9")
import /* [auto-meaningful-name] */$_190 = require("./190")
import /* [auto-meaningful-name] */$_26_index = require("./26/index")
import /* [auto-meaningful-name] */$_239 = require("./239")
var _a
_a = React.memo(function () {
  var t
  var n = React.useRef()
  var s = React.useRef(null)
  var p = React.useState(false)
  var b = $_10_index.a(p, 2)
  var y = b[0]
  var E = b[1]
  var O = React.useRef(null)
  var w = $_16_index.e(function (e) {
    return e.project.contextMenuInfo
  }).toJS()
  var /* [auto-meaningful-name] */w$position = w.position
  var /* [auto-meaningful-name] */w$visible = w.visible
  var /* [auto-meaningful-name] */w$widgetId = w.widgetId
  var I = m.Bb(w$widgetId)
  var A = $_16_index.e(function (e) {
    return e.project.screens
  })
  var j = null === (t = $_239.d()) || undefined === t ? undefined : t.id
  React.useLayoutEffect(function () {
    var /* [auto-meaningful-name] */s$current = s.current
    if (w$visible && s$current) {
      var /* [auto-meaningful-name] */s$current$clientHeight = s$current.clientHeight
      var n = window.innerHeight - (w$position.y + s$current$clientHeight)
      if (n < 0) {
        w$position.y += n
      }
      s$current.style.top = w$position.y + "px"
      s$current.style.left = w$position.x + "px"
    }
  }, [w$visible, w$position])
  var /* [auto-meaningful-name] */$_702$a$formatMessage = $_702.a().formatMessage
  var R = $_16_index.d()
  React.useEffect(function () {
    var t = function t() {
      setImmediate(function () {
        R($$_$$_$$_$$_src_shared_events_messagesWrapper.Wg())
        document.removeEventListener("mousedown", t, true)
      })
    }
    if (w$visible) {
      document.addEventListener("mousedown", t, true)
    }
    return function () {
      return document.removeEventListener("mousedown", t, true)
    }
  }, [R, w$visible])
  var k = function (e) {
    R($$_$$_$$_$$_src_shared_events_messagesWrapper.Ef(m.w(w$widgetId), e))
  }
  var x = function () {
    var /* [auto-meaningful-name] */n$current
    var t = null === (n$current = n.current) || undefined === n$current ? undefined : n$current.id
    if (j && t) {
      R($$_$$_$$_$$_src_shared_events_messagesWrapper.Mf(t, j))
    }
  }
  var D = function () {
    n.current = undefined
  }
  React.useLayoutEffect(function () {
    var /* [auto-meaningful-name] */O$current = O.current
    if (O$current) {
      if (y) {
        var t = O$current.getClientRects()[0]
        var n = t.height + t.y - window.innerHeight
        if (n > 0) {
          O$current.style.top = O$current.offsetTop - n + "px"
        }
      } else {
        O$current.style.top = "10px"
      }
    }
  }, [y])
  return i.a.createElement("div", {
    className: f.a.wrapper,
    ref: s,
    style: {
      display: w$visible ? "block" : "none"
    }
  }, i.a.createElement("div", {
    className: c()(f.a.menuItem),
    onMouseDown: function () {
      R($$_$$_$$_$$_src_shared_events_messagesWrapper.Ef(m.w(w$widgetId)))
    }
  }, $_702$a$formatMessage({
    id: "copyAndPaste"
  })), ![h.a, h.c].includes((null === I || undefined === I ? undefined : I.type) || "") && i.a.createElement("div", {
    className: c()(f.a.menuItem, f.a.copyTo),
    onMouseEnter: function () {
      E(true)
    },
    onMouseLeave: function () {
      E(false)
    }
  }, i.a.createElement("span", null, $_702$a$formatMessage({
    id: "copyTo"
  })), " ", i.a.createElement($_13_index.j, {
    type: "icon-right"
  }), i.a.createElement("ul", {
    ref: O,
    className: f.a.screens,
    style: {
      display: y ? "block" : "none"
    }
  }, A.map(function (e, t) {
    return i.a.createElement("li", {
      key: e.get("id"),
      onMouseDown: k.bind(null, e.id)
    }, i.a.createElement("span", null, "".concat(t + 1, ".")), i.a.createElement("div", {
      className: f.a.screenSnapshot
    }, i.a.createElement("img", {
      src: e.get("snapshot"),
      alt: ""
    })), i.a.createElement("p", null, e.get("title")))
  }))), i.a.createElement("div", {
    onMouseDown: function () {
      var e = m.Fb(w$widgetId || "")
      var t = $_702$a$formatMessage({
        id: "deleteWidget"
      }) + "“" + $_190.f(e, 10) + "”?"
      var r = $_26_index.z.checkFieldValueIsSelected("WIDGET_ID", w$widgetId)
      var o = $_26_index.z.checkSomeFieldValueIsSelected("WIDGET_ID", m.U(w$widgetId))
      if (r || o) {
        n.current = m.Bb(w$widgetId)
        R($$_$$_$$_$$_src_shared_events_messagesWrapper.zh({
          onConfirm: x,
          onClose: D,
          allowText: $_702$a$formatMessage({
            id: "delete"
          }),
          title: t,
          isDangerous: true,
          content: $_702$a$formatMessage({
            id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        if (j) {
          R($$_$$_$$_$$_src_shared_events_messagesWrapper.Mf(w$widgetId, j))
        }
      }
    },
    className: c()(f.a.menuItem, f.a.delete)
  }, $_702$a$formatMessage({
    id: "delete"
  })))
})
export { _a as a }
export default _a
