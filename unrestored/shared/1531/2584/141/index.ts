"use strict";

export { u as a };
export { d as b };
var r;
import o = require("./366");
var i = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(o);
import a = require("../28/index");
import s = require("./311");
import c = require("../59/index");
var l = c.b();
function u(e, t) {
  i.a.track(e, function (e) {
    if (!e) {
      return {};
    }
    var t = {};
    for (var n in e) t[n.replace(/([A-Z])/g, "_$1").toLowerCase()] = e[n];
    return t;
  }(t));
}
function d(e) {
  i.a.login(e + "");
}
i.a.init({
  server_url: "development" === l || "test" === l ? "https://shence-data.codemao.cn/sa?project=default" : "https://shence-data.codemao.cn/sa?project=production",
  is_track_single_page: true,
  use_client_time: true,
  show_log: !!s.q(window.location.href).showSensorsLog,
  send_type: a.d() ? "ajax" : "beacon",
  max_string_length: 5e3,
  heatmap: {
    clickmap: "default",
    scroll_notice_map: "default"
  }
});
var p = "editor";
if (a.d()) {
  p = "cordova-player";
}
if (null === (r = window.location) || undefined === r ? undefined : r.pathname.includes("/player/")) {
  p = "h5-player";
}
i.a.registerPage({
  $app_id: window.location.host,
  $app_name: "APP工匠",
  product_name: "APP工匠",
  page: p
});
i.a.quick("autoTrack");
export default u;