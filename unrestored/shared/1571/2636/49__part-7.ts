/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-7
 */

"use strict"

var zt
var Vt
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Module_43 from /* 43 */"./43"
import * as /* [auto-meaningful-name] */Module_24 from /* 24 */"./24/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"./39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"./27"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
function Kt(e, t) {
  var /* [auto-meaningful-name] */Module_24$a$client
  var r = Module_43.e()
  var o = Module_43.a() || ""
  if (!t) {
    e = Module_18.k
    t = ""
  }
  var i = {
    userId: r,
    path: {
      id: t,
      screenId: o,
      type: e
    }
  }
  if (!(null === (Module_24$a$client = Module_24.a.client) || undefined === Module_24$a$client)) {
    Module_24$a$client.emitCustomEvent({
      type: Vt.USER_FOCUS,
      data: i
    })
  }
  qt.runIntervalTask(i)
}
!function (e) {
  e.USER_FOCUS = "USER_FOCUS"
  e.CLOUD_DATABASE = "CLOUD_DATABASE"
  e.USER_COLORS = "USER_COLORS"
}(Vt || (Vt = {}));
(function (e) {
  e.CHANGE_NAME = "CHANGE_NAME"
  e.ADD_DOC = "ADD_DOC"
  e.INITIAL = "INITIAL"
  e.REPLACE_DATA = "REPLACE_DATA"
})(zt || (zt = {}))
var qt = new (function () {
  function e() {
    Module_27.a(this, e)
    this.intervalTime = 1e4
    this.currentUserFocusInfo = undefined
    this.timeId = undefined
    this.currentUserFocusInfo = {
      userId: -1,
      path: {
        screenId: "",
        id: "",
        type: ""
      }
    }
  }
  Module_39.a(e, [
    {
      key: "runIntervalTask",
      value: function (e) {
        var t = this
        this.currentUserFocusInfo = Module_6.a({}, e)
        if (this.timeId) {
          clearInterval(this.timeId)
        }
        this.timeId = setInterval(function () {
          var /* [auto-meaningful-name] */Module_24$a$client
          if (t.currentUserFocusInfo.path.type !== Module_18.k) {
            if (!(null === (Module_24$a$client = Module_24.a.client) || undefined === Module_24$a$client)) {
              Module_24$a$client.emitCustomEvent({
                type: Vt.USER_FOCUS,
                data: t.currentUserFocusInfo
              })
            }
          }
        }, this.intervalTime)
      }
    }
  ])
  return e
}())()
function Xt(e) {
  var /* [auto-meaningful-name] */Module_24$a$client
  if (!(null === (Module_24$a$client = Module_24.a.client) || undefined === Module_24$a$client)) {
    Module_24$a$client.emitCustomEvent({
      type: Vt.USER_COLORS,
      data: e
    })
  }
}
function Qt(e, t, n, r) {
  var /* [auto-meaningful-name] */Module_24$a$client
  if (!(null === (Module_24$a$client = Module_24.a.client) || undefined === Module_24$a$client)) {
    Module_24$a$client.emitCustomEvent({
      type: Vt.CLOUD_DATABASE,
      data: {
        type: e,
        id: t,
        name: n,
        fields: r
      }
    })
  }
}
export { Vt }
export { zt }
export { Kt }
export { Xt }
export { Qt }
