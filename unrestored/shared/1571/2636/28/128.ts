/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：128
 */

"use strict"

var r = {
  openServiceHost: "https://dev-open-service.codemao.cn",
  serverHost: "https://backend-dev.codemao.cn",
  apiOverseaServiceHost: "https://oversea-api.code.game",
  apiQiniuHost: "https://upload.qiniup.com/",
  shequHost: "https://shequ.codemao.cn",
  tigerHost: "https://api.codemao.cn",
  pid: "7KeVbBdw",
  productCode: "appcraft",
  env: "dev",
  cdnPath: {
    root: "coco/",
    player: "coco/player/",
    playerUnstable: "coco/player/unstable",
    userFiles: "user_files"
  }
}
!function () {
  var e
  var t
  var n
  switch (function () {
    var e = window.document.querySelector("meta[name=environment]")
    if (e) {
      var t = e.getAttribute("content")
      if (t && "__ENVIRONMENT__" !== t && "undefined" !== t) {
        return t
      }
    }
    var /* [auto-meaningful-name] */window$location$hostname = window.location.hostname
    return window$location$hostname.startsWith("dev") || "localhost" === window$location$hostname ? "development" : window$location$hostname.startsWith("test") ? "test" : window$location$hostname.startsWith("staging") ? "staging" : window$location$hostname.startsWith("press") ? "press" : "production"
  }()) {
    case "press":
    case "pressure":
    case "test":
      e = "test-"
      t = "test-api.codemao.cn"
      n = "test"
      break
    case "staging":
      e = "staging-"
      t = "backend-test.codemao.cn"
      n = "staging"
      break
    case "dev":
    case "development":
      e = "dev-"
      t = "backend-dev.codemao.cn"
      n = "dev"
      break
    case "prod":
    case "production":
    default:
      e = ""
      t = "api.codemao.cn"
      n = "prod"
  }
  r.openServiceHost = "https://".concat(e, "open-service.codemao.cn")
  r.serverHost = "https://".concat(e, "api-creation.codemao.cn")
  r.apiOverseaServiceHost = "https://".concat(e, "oversea-api.code.game")
  r.shequHost = "https://".concat(e, "shequ.codemao.cn")
  r.tigerHost = "https://".concat(t)
  r.env = n
}()
exports.a = r
