/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：41
 */

"use strict"

import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import /* [auto-meaningful-name] */Axios1 from /* 129 */"axios"
import * as /* [auto-meaningful-name] */Ui_language from /* 23 */"../../ui/language"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */Editor_redux_common_actions from /* 2 */"../../../editor/redux/common/actions"
var c = Axios1.create({
  timeout: 2e4,
  withCredentials: true
})
c.interceptors.request.use(function (e) {
  return e
}, function (e) {
  return Promise.reject(e)
})
c.interceptors.response.use(function (e) {
  return e
}, function (e) {
  var t
  var /* [auto-meaningful-name] */t$connection
  if (!e.response && (!navigator.onLine || 0 === (null === (t = navigator) || undefined === t || null === (t$connection = t.connection) || undefined === t$connection ? undefined : t$connection.rtt))) {
    var r = Module_37.b()
    Module_37.c().dispatch(Editor_redux_common_actions.mj({
      message: Ui_language.c(r, "axios.weakNetworkTips").toString(),
      type: "error"
    }))
  }
  return Promise.reject(e)
})
export { c as a }
export default c
