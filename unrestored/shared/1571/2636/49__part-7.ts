/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：49__part-7
 */

"use strict"

var zt
var Vt
import * as ht from "./18"
import * as Oe from "./43"
import * as /* [auto-meaningful-name] */$_24_index from "./24/index"
import * as Y from "./39"
import * as z from "./27"
import * as Yt from "./6"
function Kt(e, t) {
  var /* [auto-meaningful-name] */$_24_index$a$client
  var r = Oe.e()
  var o = Oe.a() || ""
  if (!t) {
    e = ht.k
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
  if (!(null === ($_24_index$a$client = $_24_index.a.client) || undefined === $_24_index$a$client)) {
    $_24_index$a$client.emitCustomEvent({
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
    z.a(this, e)
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
  Y.a(e, [
    {
      key: "runIntervalTask",
      value: function (e) {
        var t = this
        this.currentUserFocusInfo = Yt.a({}, e)
        if (this.timeId) {
          clearInterval(this.timeId)
        }
        this.timeId = setInterval(function () {
          var /* [auto-meaningful-name] */$_24_index$a$client
          if (t.currentUserFocusInfo.path.type !== ht.k) {
            if (!(null === ($_24_index$a$client = $_24_index.a.client) || undefined === $_24_index$a$client)) {
              $_24_index$a$client.emitCustomEvent({
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
  var /* [auto-meaningful-name] */$_24_index$a$client
  if (!(null === ($_24_index$a$client = $_24_index.a.client) || undefined === $_24_index$a$client)) {
    $_24_index$a$client.emitCustomEvent({
      type: Vt.USER_COLORS,
      data: e
    })
  }
}
function Qt(e, t, n, r) {
  var /* [auto-meaningful-name] */$_24_index$a$client
  if (!(null === ($_24_index$a$client = $_24_index.a.client) || undefined === $_24_index$a$client)) {
    $_24_index$a$client.emitCustomEvent({
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
