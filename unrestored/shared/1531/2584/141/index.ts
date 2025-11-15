/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：141
 */

"use strict"

export { u as a }
export { d as b }
var /* [auto-meaningful-name] */window$location
import /* [auto-meaningful-name] */$_366 = require("./366")
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_366)
import /* [auto-meaningful-name] */$$_28_index = require("../28/index")
import /* [auto-meaningful-name] */$_311 = require("./311")
import /* [auto-meaningful-name] */$$_59_index = require("../59/index")
var l = $$_59_index.b()
function u(e, t) {
  i.a.track(e, function (e) {
    if (!e) {
      return {}
    }
    var t = {}
    for (var n in e) t[n.replace(/([A-Z])/g, "_$1").toLowerCase()] = e[n]
    return t
  }(t))
}
function d(e) {
  i.a.login(e + "")
}
i.a.init({
  server_url: "development" === l || "test" === l ? "https://shence-data.codemao.cn/sa?project=default" : "https://shence-data.codemao.cn/sa?project=production",
  is_track_single_page: true,
  use_client_time: true,
  show_log: !!$_311.q(window.location.href).showSensorsLog,
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
i.a.registerPage({
  $app_id: window.location.host,
  $app_name: "APP工匠",
  product_name: "APP工匠",
  page: Editor
})
i.a.quick("autoTrack")
export default u
