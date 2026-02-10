/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：147
 */

"use strict"

export { h as b }
export { g as e }
export { v as g }
export { y as h }
export { O as q }
export { C as i }
export { S as r }
export { I as f }
export { N as c }
export { k as a }
export { D as d }
export { L as p }
export { B as l }
export { G as k }
export { U as o }
export { V as m }
export { Y as n }
export { q as j }
import * as r from "./6"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as a from "./7"
import * as /* [auto-meaningful-name] */$_28_index from "./28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$_57_index from "../../../../src/shared/env"
import * as /* [auto-meaningful-name] */$_48_87 from "./48/87"
import * as /* [auto-meaningful-name] */$_48_117 from "./48/117"
var p = "".concat($_57_index.a.serverHost, "/coconut")
var f = $_28_index.e() ? "dev" : "prod"
function h(e, t) {
  return m.apply(this, arguments)
}
function m() {
  return (m = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, {
              name: t,
              work_id: n
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 9
              break
            }
            return e.abrupt("return", {
              name: e$sent$data.data.name,
              id: e$sent$data.data.id
            })
          case 9:
            return e.abrupt("return", {
              name: "",
              id: ""
            })
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function g(e, t) {
  return _.apply(this, arguments)
}
function _() {
  return (_ = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/").concat(t, "/detail")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(r, {
              headers: {
                env: "dev" === n ? 0 : 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 7:
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
  return (b = a.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/user/list/detail")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n, {
              headers: {
                env: "dev" === t ? 0 : 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function y() {
  return E.apply(this, arguments)
}
function E() {
  return (E = a.a(RegeneratorRuntime1.mark(function e() {
    var t
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = "".concat(p, "/clouddb/user/list")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(t)
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function O(e, t, n, r) {
  return w.apply(this, arguments)
}
function w() {
  return (w = a.a(RegeneratorRuntime1.mark(function e(t, n, r, o) {
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            a = o ? "".concat(p, "/clouddb/").concat(t, "/columns?work_id=").concat(o) : "".concat(p, "/clouddb/").concat(t, "/columns")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(a, {
              columns: n
            }, {
              headers: {
                env: "dev" === r ? 0 : 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.columns)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function C(e, t, n, r, o) {
  return T.apply(this, arguments)
}
function T() {
  return (T = a.a(RegeneratorRuntime1.mark(function e(t, n, r, o, a) {
    var s
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = a ? "".concat(p, "/clouddb/").concat(t, "/import?work_id=").concat(a) : "".concat(p, "/clouddb/").concat(t, "/import")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(s, {
              primary_column: o,
              add_items: n
            }, {
              headers: {
                env: "dev" === r ? 0 : 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 9
              break
            }
            return e.abrupt("return", "")
          case 9:
            return e.abrupt("return", e$sent$data.msg)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function S(e, t, n, r, o) {
  return A.apply(this, arguments)
}
function A() {
  return (A = a.a(RegeneratorRuntime1.mark(function e(t, n, r, o, a) {
    var s
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = a ? "".concat(p, "/clouddb/").concat(t, "/datas?work_id=").concat(a) : "".concat(p, "/clouddb/").concat(t, "/datas")
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(s, {
              add_items: n.add,
              edit_items: n.update,
              delete_items: n.delete,
              primary_column: o
            }, {
              headers: {
                env: "dev" === r ? 0 : 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 9
              break
            }
            return e.abrupt("return", "")
          case 9:
            return e.abrupt("return", e$sent$data.msg)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function I(e, t, n, r) {
  return j.apply(this, arguments)
}
function j() {
  return (j = a.a(RegeneratorRuntime1.mark(function e(t, n, r, o) {
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            a = "".concat(p, "/clouddb/").concat(t, "/data_list?offset=").concat(r, "&limit=").concat(o)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(a, {
              headers: {
                env: "dev" === n ? 0 : 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.records)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function N(e) {
  return R.apply(this, arguments)
}
function R() {
  return (R = a.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(n)
          case 3:
            if (e$sent = e.sent, 200 !== e$sent.data.code) {
              e.next = 7
              break
            }
            return e.abrupt("return")
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function k(e, t) {
  return x.apply(this, arguments)
}
function x() {
  return (x = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/reference?work_id=").concat(n)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, {
              db_ids: t
            })
          case 3:
            if (e$sent = e.sent, 200 !== e$sent.data.code) {
              e.next = 7
              break
            }
            return e.abrupt("return")
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function D(e, t) {
  return M.apply(this, arguments)
}
function M() {
  return (M = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/reference?db_id=").concat(t, "&work_id=").concat(n)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(r)
          case 3:
            if (e$sent = e.sent, 200 !== e$sent.data.code) {
              e.next = 7
              break
            }
            return e.abrupt("return")
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function L(e, t, n) {
  return P.apply(this, arguments)
}
function P() {
  return (P = a.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "".concat(p, "/clouddb/").concat(t, "?work_id=").concat(r) : "".concat(p, "/clouddb/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(o, {
              name: n
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.name)
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function B(e, t) {
  return F.apply(this, arguments)
}
function F() {
  return (F = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var o
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            o = "".concat(p, "/clouddb/runtime/").concat(t, "/insert")
            a = {
              values: n
            }
            e.next = 5
            return $_48_117.a("".concat(JSON.stringify(a)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(o, a, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
            }))
          case 17:
            e.next = 34
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 33
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 30
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 30:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 31:
            e.next = 34
            break
          case 33:
            throw e.t0
          case 34:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 19]])
  }))).apply(this, arguments)
}
function G(e, t, n, r) {
  return W.apply(this, arguments)
}
function W() {
  return (W = a.a(RegeneratorRuntime1.mark(function e(t, n, o, a) {
    var s
    var l
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            s = "".concat(p, "/clouddb/runtime/").concat(t, "/delete")
            l = {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: o,
                    value: a.toString()
                  }
                ]
              }
            }
            e.next = 5
            return $_48_117.a("".concat(JSON.stringify(l)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(s, {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: o,
                    value: a
                  }
                ]
              }
            }, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
            }))
          case 17:
            e.next = 34
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 33
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 30
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 30:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 31:
            e.next = 34
            break
          case 33:
            throw e.t0
          case 34:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 19]])
  }))).apply(this, arguments)
}
function U(e, t, n, r, o, i) {
  return H.apply(this, arguments)
}
function H() {
  return (H = a.a(RegeneratorRuntime1.mark(function e(t, n, o, a, s, l) {
    var h
    var m
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            h = "".concat(p, "/clouddb/runtime/").concat(t, "/update")
            m = {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: o,
                    value: a.toString()
                  }
                ]
              },
              values: [
                {
                  column_id: s,
                  value: l.toString()
                }
              ]
            }
            e.next = 5
            return $_48_117.a("".concat(JSON.stringify(m)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(h, {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: o,
                    value: a
                  }
                ]
              },
              values: [
                {
                  column_id: s,
                  value: l
                }
              ]
            }, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
            }))
          case 17:
            e.next = 34
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 33
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 30
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 30:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 31:
            e.next = 34
            break
          case 33:
            throw e.t0
          case 34:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 19]])
  }))).apply(this, arguments)
}
function V(e, t, n, r) {
  return z.apply(this, arguments)
}
function z() {
  return (z = a.a(RegeneratorRuntime1.mark(function e(t, n, o, a) {
    var s
    var l
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            s = "".concat(p, "/clouddb/runtime/").concat(t, "/select")
            l = {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: o,
                    value: a.toString()
                  }
                ]
              }
            }
            e.next = 5
            return $_48_117.a("".concat(JSON.stringify(l)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(s, {
              querys: {
                querys: [
                  {
                    op: o,
                    column_id: n,
                    value: a
                  }
                ]
              }
            }, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
            }))
          case 17:
            e.next = 34
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 33
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 30
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 30:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 31:
            e.next = 34
            break
          case 33:
            throw e.t0
          case 34:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 19]])
  }))).apply(this, arguments)
}
function Y(e, t) {
  return K.apply(this, arguments)
}
function K() {
  return (K = a.a(RegeneratorRuntime1.mark(function e(t, n) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var h
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = "row" === n ? "RECORD" : "COLUMN"
            e.next = 3
            return $_48_117.a("id=".concat(t, "&type=").concat(o))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.prev = 6
            h = "".concat(p, "/clouddb/runtime/").concat(t, "/count?type=").concat(o)
            e.next = 10
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(h, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
            }))
          case 17:
            e.next = 34
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(6), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 33
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 30
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 30:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 31:
            e.next = 34
            break
          case 33:
            throw e.t0
          case 34:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[6, 19]])
  }))).apply(this, arguments)
}
function q(e) {
  return X.apply(this, arguments)
}
function X() {
  return (X = a.a(RegeneratorRuntime1.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/migrate?db_ids=").concat(t)
            e.next = 3
            return $$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(n)
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", "")
          case 7:
            if (40400923 !== e$sent$data.code) {
              e.next = 9
              break
            }
            return e.abrupt("return", "cloudDBPublishError.uniqueColumnError")
          case 9:
            return e.abrupt("return", "cloudDBPublishError.migrateError")
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default k
