/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1211
 */

"use strict"

export { A as a }
import * as /* [auto-meaningful-name] */$$_$$_35 from "../../35"
import { useMemo, createElement } from "react"
import "../../50/index"
import * as /* [auto-meaningful-name] */$$_278 from "../278"
import * as /* [auto-meaningful-name] */$$_$$_552_1214_98 from "../../552/1214/98"
import "../../19"
import "../../54"
import * as /* [auto-meaningful-name] */$$_$$_552_1214_709_index from "../../552/1214/709/index"
import * as /* [auto-meaningful-name] */$$_$$_552_1214_269_index from "../../552/1214/269/index"
import * as /* [auto-meaningful-name] */$_699_index from "./699/index"
import "../../552/1214/1004"
import "../../40/index"
import * as /* [auto-meaningful-name] */$$_$$_552_1214_789_index from "../../552/1214/789/index"
import "../../103"
import "../../106"
import "../../388"
import "../../362"
import "../../120"
var f = $$_$$_552_1214_709_index.a({
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
  var d = $$_278.b()
  var h = f()
  var p = useMemo(function () {
    return $_699_index.d(e$views)
  }, [e$views])
  var _ = useMemo(function () {
    return $_699_index.b(e$views)
  }, [e$views])
  return createElement($$_$$_552_1214_269_index.b, {
    isLandscape: e$isLandscape,
    className: $$_$$_552_1214_98.a(!p && h.toolbar, e$isLandscape && h.toolbarLandscape)
  }, createElement($$_$$_552_1214_269_index.c, {
    variant: p ? "h3" : "subtitle1",
    onClick: function () {
      return e$setOpenView("year")
    },
    selected: "year" === e$openView,
    label: d.getYearText(e$date)
  }), !p && !_ && createElement($$_$$_552_1214_269_index.c, {
    variant: "h4",
    selected: "date" === e$openView,
    onClick: function () {
      return e$setOpenView("date")
    },
    align: e$isLandscape ? "left" : "center",
    label: d.getDatePickerHeaderText(e$date),
    className: $$_$$_552_1214_98.a(e$isLandscape && h.dateLandscape)
  }), _ && createElement($$_$$_552_1214_269_index.c, {
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
        $$_$$_35.a(e, t, n[t])
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
}({}, $$_$$_552_1214_789_index.b, {
  openTo: "date",
  views: ["year", "date"]
})
function _(e) {
  var t = $$_278.b()
  return {
    getDefaultFormat: function () {
      return $_699_index.c(e.views, t)
    }
  }
}
var A = $$_$$_552_1214_269_index.g({
  useOptions: _,
  Input: $$_$$_552_1214_269_index.d,
  useState: $$_$$_552_1214_269_index.i,
  DefaultToolbarComponent: d
})
var g = $$_$$_552_1214_269_index.g({
  useOptions: _,
  Input: $$_$$_552_1214_269_index.a,
  useState: $$_$$_552_1214_269_index.e,
  DefaultToolbarComponent: d
})
A.defaultProps = p
g.defaultProps = p
export default A
