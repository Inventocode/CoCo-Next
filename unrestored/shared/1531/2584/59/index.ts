"use strict";

export { a as b };
var r = require("./767/index");
var o = function __importDefault(module) {
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
}(r);
var i = {
  openServiceHost: "https://dev-open-service.codemao.cn",
  serverHost: "https://backend-dev.codemao.cn",
  materialHost: "https://backend-dev.codemao.cn",
  socketHost: "https://socket-cr.codemao.cn",
  oTServerHost: "https://socketcoll.codemao.cn",
  oTSocketHost: "wss://socketcoll.codemao.cn:8098",
  pid: "7KeVbBdw",
  productCode: "appcraft",
  env: "dev"
};
function a() {
  var e = window.document.querySelector("meta[name=environment]");
  if (e) {
    var t = e.getAttribute("content");
    if (t && "__ENVIRONMENT__" !== t && "undefined" !== t) {
      return t;
    }
  }
  var n = window.location.hostname;
  return n.startsWith("dev") || "localhost" === n || o()(n) ? "development" : n.startsWith("test") ? "test" : n.startsWith("staging") ? "staging" : n.startsWith("press") ? "press" : "production";
}
!function () {
  var e;
  var t;
  var n;
  switch (a()) {
    case "press":
    case "pressure":
    case "test":
      e = "test-";
      t = "test-api";
      n = "test";
      break;
    case "staging":
      e = "staging-";
      t = "backend-test";
      n = "staging";
      break;
    case "dev":
    case "development":
      e = "dev-";
      t = "backend-dev";
      n = "dev";
      break;
    case "prod":
    case "production":
    default:
      e = "";
      t = "api";
      n = "prod";
  }
  i.openServiceHost = "https://".concat(e, "open-service.codemao.cn");
  i.serverHost = "https://".concat(e, "api-creation.codemao.cn");
  i.materialHost = "https://".concat(t, ".codemao.cn");
  i.socketHost = "https://".concat(e, "socket-cr.codemao.cn");
  i.oTServerHost = "https://".concat(e, "socketcoll.codemao.cn");
  i.oTSocketHost = "wss://".concat(e, "socketcoll.codemao.cn:8098");
  i.env = n;
}();
export { i as a };
export default i;