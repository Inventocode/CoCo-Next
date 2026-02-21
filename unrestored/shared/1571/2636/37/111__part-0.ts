/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：111__part-0
 */

"use strict"

import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as i from "../7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_env from "../../../../../src/shared/env"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../../src/shared/utils/network/axios-with-credentials"
var c = "".concat($$_$$_$$_$$_$$_src_shared_env.a.serverHost, "/coconut")
function l(e) {
  return u.apply(this, arguments)
}
function u() {
  return (u = i.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/admin/dict")
            r = {
              type: 1
            }
            if (t) {
              r.work_id = t
            }
            e.next = 5
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n, {
              params: r
            })
          case 5:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 9
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 9:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function d(e) {
  return p.apply(this, arguments)
}
function p() {
  return (p = i.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/admin/dict/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n, {
              params: {
                offset: 0,
                limit: 1e3
              },
              headers: {
                env: 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.items.map(function (e) {
              return {
                id: e.id,
                key: e.key
              }
            }))
          case 7:
            throw new Error(e$sent$data.msg)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function f(e, t) {
  return h.apply(this, arguments)
}
function h() {
  return (h = i.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/").concat(t, "/keys")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(r, {
              params: {
                offset: 0,
                limit: 1e3,
                work_id: n
              },
              headers: {
                env: 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.items.map(function (e) {
              return {
                id: e.id,
                key: e.key
              }
            }))
          case 7:
            throw new Error(e$sent$data.msg)
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function m(e, t) {
  return g.apply(this, arguments)
}
function g() {
  return (g = i.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/reference")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, {
              dict_ids: n
            }, {
              params: {
                work_id: t
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data)
          case 7:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function _(e, t) {
  return v.apply(this, arguments)
}
function v() {
  return (v = i.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/reference/batch")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(r, {
              params: {
                work_id: t,
                dict_ids: n.join(",")
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data)
          case 7:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function b(e) {
  return y.apply(this, arguments)
}
function y() {
  return (y = i.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/v2/admin/dict/copyBatch")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(n, {
              dict_ids: t
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 7:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 8:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { l }
export { d }
export { f }
export { m }
export { _ }
export { b }
