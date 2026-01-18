/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：41
 */

"use strict"

import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */Axios1 from "axios"
import * as /* [auto-meaningful-name] */$$_$$_ui_language from "../../ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_unrestored_shared_1571_2636_37_index from "../../../../unrestored/shared/1571/2636/37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_editor_redux_common_actions from "../../../editor/redux/common/actions"
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
    var r = $$_$$_$$_$$_unrestored_shared_1571_2636_37_index.b()
    $$_$$_$$_$$_unrestored_shared_1571_2636_37_index.c().dispatch($$_$$_$$_editor_redux_common_actions.mj({
      message: $$_$$_ui_language.c(r, "axios.weakNetworkTips").toString(),
      type: "error"
    }))
  }
  return Promise.reject(e)
})
export { c as a }
export default c
