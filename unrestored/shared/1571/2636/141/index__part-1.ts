/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：141__part-1
 */

"use strict"

var /* [auto-meaningful-name] */window$location
import * as /* [auto-meaningful-name] */Module_367 from /* 367 */"./367"
import /* [auto-meaningful-name] */Module_3671 from /* 367 */"./367"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_url from /* 312 */"../../../../../src/shared/tools/url"
import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../../src/shared/env"
var l = Src_shared_env.b()
function u(e, t) {
  Module_3671.track(e, function (e) {
    if (!e) {
      return {}
    }
    var t = {}
    for (var n in e) t[n.replace(/([A-Z])/g, "_$1").toLowerCase()] = e[n]
    return t
  }(t))
}
function d(e) {
  Module_3671.login(e + "")
}
Module_3671.init({
  server_url: "development" === l || "test" === l ? "https://shence-data.codemao.cn/sa?project=default" : "https://shence-data.codemao.cn/sa?project=production",
  is_track_single_page: true,
  use_client_time: true,
  show_log: !!Src_shared_tools_url.q(window.location.href).showSensorsLog,
  send_type: Module_28.d() ? "ajax" : "beacon",
  max_string_length: 5e3,
  heatmap: {
    clickmap: "default",
    scroll_notice_map: "default"
  }
})
var /* [auto-meaningful-name] */Editor = "editor"
if (Module_28.d()) {
  Editor = "cordova-player"
}
if (null === (window$location = window.location) || undefined === window$location ? undefined : window$location.pathname.includes("/player/")) {
  Editor = "h5-player"
}
Module_3671.registerPage({
  $app_id: window.location.host,
  $app_name: "APP工匠",
  product_name: "APP工匠",
  page: Editor
})
Module_3671.quick("autoTrack")
export { u }
export { d }
