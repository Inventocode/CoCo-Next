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
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"./37/index"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"./97/index"
var u = function () {
  var e
  var /* [auto-meaningful-name] */Module_37$d$getState$project$currentScreenIndex = Module_37.d.getState().project.currentScreenIndex
  return null === (e = Module_37.d.getState().project.screens.get(Module_37$d$getState$project$currentScreenIndex)) || undefined === e ? undefined : e.get("id")
}
var d = function (e) {
  var t
  var /* [auto-meaningful-name] */Module_37$d$getState$project = Module_37.d.getState().project
  var /* [auto-meaningful-name] */Module_37$d$getState$project$currentScreenIndex = Module_37$d$getState$project.currentScreenIndex
  return e === (null === (t = Module_37$d$getState$project.screens.get(Module_37$d$getState$project$currentScreenIndex)) || undefined === t ? undefined : t.id)
}
var p = function (e) {
  return Module_37.d.dispatch(e)
}
function f(e) {
  p(Src_editor_redux_common_actions.xh(e))
}
function h() {
  return m.apply(this, arguments)
}
function m() {
  return (m = Module_7.a(RegeneratorRuntime1.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Module_97.c()
          case 2:
            e$sent = e.sent
            Object.entries(e$sent.screens).forEach(function (e) {
              Module_10.a(e, 2)[1].snapshot = ""
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
  var /* [auto-meaningful-name] */Module_37$d$getState$common$userInfo
  return (null === (Module_37$d$getState$common$userInfo = Module_37.d.getState().common.userInfo) || undefined === Module_37$d$getState$common$userInfo ? undefined : Module_37$d$getState$common$userInfo.id) || -1
}
function _() {
  return Module_37.d.getState().oTState.onlineCooperationUserColorRecord.toJSON()
}
function v() {
  return Module_37.d.getState().oTState.userFocusOTInfoList.toJSON()
}
export default u
