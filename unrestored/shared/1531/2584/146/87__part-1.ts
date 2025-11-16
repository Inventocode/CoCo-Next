/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：87__part-1
 */

"use strict"

var r
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as a from "../6"
import * as s from "../7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../../src/shared/utils/network/axios-with-credentials"
var /* [auto-meaningful-name] */require$$_59_index$a$socketHost = require("../59/index").a.socketHost
function u() {
  var e = {}
  if (r && (r.authorization && (e["x-coconut-authorization"] = r.authorization), r.device)) {
    var /* [auto-meaningful-name] */r$device = r.device
    var /* [auto-meaningful-name] */r$device$groupId = r$device.groupId
    var /* [auto-meaningful-name] */r$device$platform = r$device.platform
    var /* [auto-meaningful-name] */r$device$origin = r$device.origin
    e["X-CodeMao-Mobile-Requested"] = JSON.stringify({
      group_id: r$device$groupId,
      platform: r$device$platform,
      origin: r$device$origin
    })
  }
  return e
}
function d(e) {
  r = e
}
function p(e, t, n) {
  return f.apply(this, arguments)
}
function f() {
  return (f = s.a(_RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = {
              room_name: t,
              work_id: n,
              user_limit: r
            }
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(require$$_59_index$a$socketHost + "/coconut/room", a.a({}, o), {
              headers: u()
            })
          case 3:
            if ((e$sent = e.sent).data.success) {
              e.next = 6
              break
            }
            throw new Error(e$sent.data.msg)
          case 6:
            return e.abrupt("return", e$sent.data.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function h(e) {
  return m.apply(this, arguments)
}
function m() {
  return (m = s.a(_RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = {
              username: t
            }
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(require$$_59_index$a$socketHost + "/coconut/room/username", a.a({}, n), {
              headers: u()
            })
          case 3:
            if ((e$sent = e.sent).data.success) {
              e.next = 6
              break
            }
            throw new Error(e$sent.data.msg)
          case 6:
            return e.abrupt("return", e$sent.data.msg)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function g(e) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = s.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(require$$_59_index$a$socketHost + "/coconut/room/allow_join?id=".concat(t), {
              headers: u()
            })
          case 2:
            if ((e$sent = e.sent).data.success) {
              e.next = 5
              break
            }
            throw new Error(e$sent.data.msg)
          case 5:
            return e.abrupt("return", e$sent.data.data)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function v(e) {
  return b.apply(this, arguments)
}
function b() {
  return (b = s.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(require$$_59_index$a$socketHost + "/coconut/room/users?id=".concat(t), {
              headers: u()
            })
          case 2:
            if ((e$sent = e.sent).data.success) {
              e.next = 5
              break
            }
            throw new Error(e$sent.data.msg)
          case 5:
            return e.abrupt("return", e$sent.data.data)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y(e) {
  return E.apply(this, arguments)
}
function E() {
  return (E = s.a(_RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(require$$_59_index$a$socketHost + "/coconut/room?work_id=".concat(t), {
              headers: u()
            })
          case 2:
            if ((e$sent = e.sent).data.success) {
              e.next = 5
              break
            }
            throw new Error(e$sent.data.msg)
          case 5:
            return e.abrupt("return", e$sent.data.data)
          case 6:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { u as "87__part-1__u" }
export { d as "87__part-1__d" }
export { p as "87__part-1__p" }
export { h as "87__part-1__h" }
export { g as "87__part-1__g" }
export { v as "87__part-1__v" }
export { y as "87__part-1__y" }
