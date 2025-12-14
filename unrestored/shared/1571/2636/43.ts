/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：43
 */

"use strict"

export { u as a }
export { d as g }
export { p as h }
export { f }
export { h as b }
export { g as e }
export { _ as c }
export { v as d }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as a from "./7"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as l from "./97"
var u = function () {
  var e
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$currentScreenIndex = $_37_index.d.getState().project.currentScreenIndex
  return null === (e = $_37_index.d.getState().project.screens.get($_37_index$d$getState$project$currentScreenIndex)) || undefined === e ? undefined : e.get("id")
}
var d = function (e) {
  var t
  var /* [auto-meaningful-name] */$_37_index$d$getState$project = $_37_index.d.getState().project
  var /* [auto-meaningful-name] */$_37_index$d$getState$project$currentScreenIndex = $_37_index$d$getState$project.currentScreenIndex
  return e === (null === (t = $_37_index$d$getState$project.screens.get($_37_index$d$getState$project$currentScreenIndex)) || undefined === t ? undefined : t.id)
}
var p = function (e) {
  return $_37_index.d.dispatch(e)
}
function f(e) {
  p($$_$$_$$_$$_src_shared_events_messagesWrapper.xh(e))
}
function h() {
  return m.apply(this, arguments)
}
function m() {
  return (m = a.a(_RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return l.c()
          case 2:
            e$sent = e.sent
            Object.entries(e$sent.screens).forEach(function (e) {
              $_10_index.a(e, 2)[1].snapshot = ""
            })
            return e.abrupt("return", e$sent)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function g() {
  var /* [auto-meaningful-name] */$_37_index$d$getState$common$userInfo
  return (null === ($_37_index$d$getState$common$userInfo = $_37_index.d.getState().common.userInfo) || undefined === $_37_index$d$getState$common$userInfo ? undefined : $_37_index$d$getState$common$userInfo.id) || -1
}
function _() {
  return $_37_index.d.getState().oTState.onlineCooperationUserColorRecord.toJSON()
}
function v() {
  return $_37_index.d.getState().oTState.userFocusOTInfoList.toJSON()
}
export default u
