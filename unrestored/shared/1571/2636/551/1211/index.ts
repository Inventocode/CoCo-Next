/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1211
 */

"use strict"

export { A as a }
import * as /* [auto-meaningful-name] */Module_35 from /* 35 */"../../35"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* 50 */"../../50/index"
import * as /* [auto-meaningful-name] */Module_278 from /* 278 */"../278"
import * as /* [auto-meaningful-name] */Module_98 from /* 98 */"./98"
import /* 19 */"../../19"
import /* 54 */"../../54"
import * as /* [auto-meaningful-name] */Module_709 from /* 709 */"./709/index"
import * as /* [auto-meaningful-name] */Module_269 from /* 269 */"./269/index"
import * as /* [auto-meaningful-name] */Module_699 from /* 699 */"./699/index"
import /* 1004 */"./1004"
import /* 40 */"../../40/index"
import * as /* [auto-meaningful-name] */Module_789 from /* 789 */"./789/index"
import /* 103 */"../../103"
import /* 106 */"../../106"
import /* 388 */"../../388"
import /* 362 */"../../362"
import /* 120 */"../../120"
var f = Module_709.a({
  toolbar: {
    flexDirection: "column",
    alignItems: "flex-start"
  },
  toolbarLandscape: {
    padding: 16
  },
  dateLandscape: {
    marginRight: 16
  }
}, {
  name: "MuiPickersDatePickerRoot"
})
var d = function (e) {
  var /* [auto-meaningful-name] */e$date = e.date
  var /* [auto-meaningful-name] */e$views = e.views
  var /* [auto-meaningful-name] */e$setOpenView = e.setOpenView
  var /* [auto-meaningful-name] */e$isLandscape = e.isLandscape
  var /* [auto-meaningful-name] */e$openView = e.openView
  var d = Module_278.b()
  var h = f()
  var p = React.useMemo(function () {
    return Module_699.d(e$views)
  }, [e$views])
  var _ = React.useMemo(function () {
    return Module_699.b(e$views)
  }, [e$views])
  return React.createElement(Module_269.b, {
    isLandscape: e$isLandscape,
    className: Module_98.a(!p && h.toolbar, e$isLandscape && h.toolbarLandscape)
  }, React.createElement(Module_269.c, {
    variant: p ? "h3" : "subtitle1",
    onClick: function () {
      return e$setOpenView("year")
    },
    selected: "year" === e$openView,
    label: d.getYearText(e$date)
  }), !p && !_ && React.createElement(Module_269.c, {
    variant: "h4",
    selected: "date" === e$openView,
    onClick: function () {
      return e$setOpenView("date")
    },
    align: e$isLandscape ? "left" : "center",
    label: d.getDatePickerHeaderText(e$date),
    className: Module_98.a(e$isLandscape && h.dateLandscape)
  }), _ && React.createElement(Module_269.c, {
    variant: "h4",
    onClick: function () {
      return e$setOpenView("month")
    },
    selected: "month" === e$openView,
    label: d.getMonthText(e$date)
  }))
}
function h(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    if (t) {
      r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })
    }
    n.push.apply(n, r)
  }
  return n
}
var p = function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    if (t % 2) {
      h(n, true).forEach(function (t) {
        Module_35.a(e, t, n[t])
      })
    } else {
      if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      } else {
        h(n).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        })
      }
    }
  }
  return e
}({}, Module_789.b, {
  openTo: "date",
  views: ["year", "date"]
})
function _(e) {
  var t = Module_278.b()
  return {
    getDefaultFormat: function () {
      return Module_699.c(e.views, t)
    }
  }
}
var A = Module_269.g({
  useOptions: _,
  Input: Module_269.d,
  useState: Module_269.i,
  DefaultToolbarComponent: d
})
var g = Module_269.g({
  useOptions: _,
  Input: Module_269.a,
  useState: Module_269.e,
  DefaultToolbarComponent: d
})
A.defaultProps = p
g.defaultProps = p
export default A
