"use strict";

var r = {
  openServiceHost: "https://dev-open-service.codemao.cn",
  serverHost: "https://backend-dev.codemao.cn",
  apiOverseaServiceHost: "https://oversea-api.code.game",
  apiQiniuHost: "https://upload.qiniup.com/",
  pid: "7KeVbBdw",
  productCode: "appcraft",
  env: "dev",
  cdnPath: {
    root: "coco/",
    player: "coco/player/",
    playerUnstable: "coco/player/unstable"
  }
};
!function () {
  var e;
  var t;
  switch (function () {
    var e = window.document.querySelector("meta[name=environment]");
    if (e) {
      var t = e.getAttribute("content");
      if (t && "__ENVIRONMENT__" !== t && "undefined" !== t) {
        return t;
      }
    }
    var n = window.location.hostname;
    return n.startsWith("dev") || "localhost" === n ? "development" : n.startsWith("test") ? "test" : n.startsWith("staging") ? "staging" : n.startsWith("press") ? "press" : "production";
  }()) {
    case "press":
    case "pressure":
    case "test":
      e = "test-";
      t = "test";
      break;
    case "staging":
      e = "staging-";
      t = "staging";
      break;
    case "dev":
    case "development":
      e = "dev-";
      t = "dev";
      break;
    case "prod":
    case "production":
    default:
      e = "";
      t = "prod";
  }
  r.openServiceHost = "https://".concat(e, "open-service.codemao.cn");
  r.serverHost = "https://".concat(e, "api-creation.codemao.cn");
  r.apiOverseaServiceHost = "https://".concat(e, "oversea-api.code.game");
  r.env = t;
}();
exports.a = r;