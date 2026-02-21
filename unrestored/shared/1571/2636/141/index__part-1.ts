/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：141__part-1
 */

"use strict"

var /* [auto-meaningful-name] */window$location
import * as /* [auto-meaningful-name] */$_367 from "./367"
import /* [auto-meaningful-name] */$_3671 from "./367"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_tools_url from "../../../../../src/shared/tools/url"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_env from "../../../../../src/shared/env"
var l = $$_$$_$$_$$_$$_src_shared_env.b()
function u(e, t) {
  $_3671.track(e, function (e) {
    if (!e) {
      return {}
    }
    var t = {}
    for (var n in e) t[n.replace(/([A-Z])/g, "_$1").toLowerCase()] = e[n]
    return t
  }(t))
}
function d(e) {
  $_3671.login(e + "")
}
$_3671.init({
  server_url: "development" === l || "test" === l ? "https://shence-data.codemao.cn/sa?project=default" : "https://shence-data.codemao.cn/sa?project=production",
  is_track_single_page: true,
  use_client_time: true,
  show_log: !!$$_$$_$$_$$_$$_src_shared_tools_url.q(window.location.href).showSensorsLog,
  send_type: $$_28_index.d() ? "ajax" : "beacon",
  max_string_length: 5e3,
  heatmap: {
    clickmap: "default",
    scroll_notice_map: "default"
  }
})
var /* [auto-meaningful-name] */Editor = "editor"
if ($$_28_index.d()) {
  Editor = "cordova-player"
}
if (null === (window$location = window.location) || undefined === window$location ? undefined : window$location.pathname.includes("/player/")) {
  Editor = "h5-player"
}
$_3671.registerPage({
  $app_id: window.location.host,
  $app_name: "APP工匠",
  product_name: "APP工匠",
  page: Editor
})
$_3671.quick("autoTrack")
export { u }
export { d }
