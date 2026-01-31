/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-4
 */

"use strict"

var V
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import * as Z from "./97"
import * as /* [auto-meaningful-name] */$_525 from "./525"
import /* [auto-meaningful-name] */$_5251 from "./525"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as te from "./15"
!function (e) {
  e[e.SAVE_BTN = 0] = "SAVE_BTN"
  e[e.MY_PROJECT = 1] = "MY_PROJECT"
}(V || (V = {}))
var ne = React.memo(function (e) {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var /* [auto-meaningful-name] */e$time = e.time
  var /* [auto-meaningful-name] */e$currentTime = e.currentTime
  var /* [auto-meaningful-name] */e$renderType = e.renderType
  var i = function (e) {
    return $_710$a$formatMessage({
      id: e
    })
  }
  var a = e$time
  var s = e$currentTime
  var c = s - a
  var l = te.G(s, 0)
  var u = te.G(s, -1)
  var d = te.G(s, -2)
  var p = new Date(a)
  var f = ""
  var m = "".concat(i("MyProject.lastSaved"), " ")
  if (c < 6e4) {
    f = "".concat(i("MyProject.just"))
    if (e$renderType === V.SAVE_BTN) {
      f = "".concat(i("MyProject.justSaved"))
    }
  } else if (c < 36e5) {
    var g = Math.ceil(c / 60 / 1e3)
    g = Math.max(g, 1)
    g = Math.min(g, 59)
    f = "".concat(g).concat(i("MyProject.minute")).concat(i("MyProject.ago"))
    if (e$renderType === V.SAVE_BTN) {
      f = m + f
    }
  } else if (c < 216e5 || a > l) {
    var _ = Math.floor(c / 36e5)
    var v = Math.floor(c % 36e5 / 6e4)
    if (_) {
      f += "".concat(_).concat(i("MyProject.hour"))
    }
    if (v) {
      f += "".concat(v).concat(i("MyProject.minute"))
    }
    f += i("MyProject.ago")
    if (e$renderType === V.SAVE_BTN) {
      f = m + f
    }
  } else if (a > u) {
    f = i("MyProject.yesterday") + te.K(p)
    if (e$renderType === V.SAVE_BTN) {
      f = m + f
    }
  } else {
    if (a > d) {
      f = i("MyProject.theDayBeforeYesterday") + te.K(p)
      if (e$renderType === V.SAVE_BTN) {
        f = m + f
      }
    } else {
      f = "".concat(p.getFullYear()).concat(i("MyProject.year"))
      f += "".concat(p.getMonth() + 1).concat(i("MyProject.month"))
      f += "".concat(p.getDate()).concat(i("MyProject.day"))
      if (e$renderType === V.SAVE_BTN) {
        f = m + f
      }
    }
  }
  return React.createElement("span", null, f)
})
export { ne }
