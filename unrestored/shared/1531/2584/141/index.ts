"use strict";

export { u as a };
export { d as b };
var r;
var o = require("./366");
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
var a = require("../28/index");
var s = require("../15/311");
var c = require("../59/index");
var l = Object(c.b)();
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
  is_track_single_page: !0,
  use_client_time: !0,
  show_log: !!Object(s.q)(window.location.href).showSensorsLog,
  send_type: Object(a.d)() ? "ajax" : "beacon",
  max_string_length: 5e3,
  heatmap: {
    clickmap: "default",
    scroll_notice_map: "default"
  }
});
var p = "editor";
if (Object(a.d)()) {
  p = "cordova-player";
}
if (null === (r = window.location) || void 0 === r ? void 0 : r.pathname.includes("/player/")) {
  p = "h5-player";
}
i.a.registerPage({
  $app_id: window.location.host,
  $app_name: "APP\u5de5\u5320",
  product_name: "APP\u5de5\u5320",
  page: p
});
i.a.quick("autoTrack");
export default u;