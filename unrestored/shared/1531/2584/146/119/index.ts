/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：119
 */

"use strict"

export { p as a }
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var o = function __importDefault(module) {
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
}(RegeneratorRuntime)
import /* [auto-meaningful-name] */$$_$$_7 = require("../../7")
import /* [auto-meaningful-name] */JsSha256 = require("js-sha256")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials = require("../../../../../../src/shared/utils/network/axios-with-credentials")
import /* [auto-meaningful-name] */$$_$$_59_index = require("../../59/index")
var l = "".concat($$_$$_59_index.a.serverHost, "/coconut")
var u = false
var d = 0
function p(e) {
  return f.apply(this, arguments)
}
function f() {
  return (f = $$_$$_7.a(o.a.mark(function e(t) {
    var n
    var r
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (u) {
              e.next = 3
              break
            }
            e.next = 3
            return h()
          case 3:
            "pBlYqXbJDu"
            n = Math.round(Date.now() / 1e3) + d
            r = JsSha256.sha256("".concat("pBlYqXbJDu").concat(n).concat(t)).toLocaleUpperCase()
            return e.abrupt("return", {
              sign: r,
              timestamp: n
            })
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function h() {
  return m.apply(this, arguments)
}
function m() {
  return (m = $$_$$_7.a(o.a.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var r
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get("".concat(l, "/clouddb/currentTime"))
          case 2:
            if (e$sent = e.sent, 200 === (e$sent$data = e$sent.data).code) {
              try {
                r = Math.round(Date.now() / 1e3)
                d = e$sent$data.data - r
                u = true
              } catch (o) {}
            }
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default p
