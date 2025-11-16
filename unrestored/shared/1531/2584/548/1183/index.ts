/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1183
 */

"use strict"

export { A as a }
import * as /* [auto-meaningful-name] */$$_$$_29 from "../../29"
import * as /* [auto-meaningful-name] */React from "react"
import "../../50/index"
import * as /* [auto-meaningful-name] */$$_280 from "../280"
import * as /* [auto-meaningful-name] */$_100 from "./100"
import "../../19"
import "../../54"
import * as /* [auto-meaningful-name] */$_701_index from "./701/index"
import * as /* [auto-meaningful-name] */$_270_index from "./270/index"
import * as /* [auto-meaningful-name] */$_691_index from "./691/index"
import "./983"
import "../../33/index"
import * as /* [auto-meaningful-name] */$_778_index from "./778/index"
import "../../95"
import "../../96"
import "../../322"
import "../../273"
import "../../120"
var f = $_701_index.a({
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
  var d = $$_280.b()
  var h = f()
  var p = React.useMemo(function () {
    return $_691_index.d(e$views)
  }, [e$views])
  var _ = React.useMemo(function () {
    return $_691_index.b(e$views)
  }, [e$views])
  return React.createElement($_270_index.b, {
    isLandscape: e$isLandscape,
    className: $_100.a(!p && h.toolbar, e$isLandscape && h.toolbarLandscape)
  }, React.createElement($_270_index.c, {
    variant: p ? "h3" : "subtitle1",
    onClick: function () {
      return e$setOpenView("year")
    },
    selected: "year" === e$openView,
    label: d.getYearText(e$date)
  }), !p && !_ && React.createElement($_270_index.c, {
    variant: "h4",
    selected: "date" === e$openView,
    onClick: function () {
      return e$setOpenView("date")
    },
    align: e$isLandscape ? "left" : "center",
    label: d.getDatePickerHeaderText(e$date),
    className: $_100.a(e$isLandscape && h.dateLandscape)
  }), _ && React.createElement($_270_index.c, {
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
        $$_$$_29.a(e, t, n[t])
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
}({}, $_778_index.b, {
  openTo: "date",
  views: ["year", "date"]
})
function _(e) {
  var t = $$_280.b()
  return {
    getDefaultFormat: function () {
      return $_691_index.c(e.views, t)
    }
  }
}
var A = $_270_index.g({
  useOptions: _,
  Input: $_270_index.d,
  useState: $_270_index.i,
  DefaultToolbarComponent: d
})
var g = $_270_index.g({
  useOptions: _,
  Input: $_270_index.a,
  useState: $_270_index.e,
  DefaultToolbarComponent: d
})
A.defaultProps = p
g.defaultProps = p
export default A
