/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：146
 */

"use strict"

export { h as b }
export { g as e }
export { v as g }
export { y as h }
export { O as q }
export { C as i }
export { S as r }
export { A as f }
export { N as c }
export { k as a }
export { D as d }
export { L as p }
export { B as l }
export { G as k }
export { W as o }
export { V as m }
export { Y as n }
export { q as j }
import r = require("../6")
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
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
}(RegeneratorRuntime)
import a = require("../7")
import /* [auto-meaningful-name] */$$_28_index = require("../28/index")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials = require("../../../../../src/shared/utils/network/axios-with-credentials")
import /* [auto-meaningful-name] */$$_59_index = require("../59/index")
import u = require("./87")
import /* [auto-meaningful-name] */$_119_index = require("./119/index")
var p = "".concat($$_59_index.a.serverHost, "/coconut")
var f = $$_28_index.e() ? "dev" : "prod"
function h(e, t) {
  return m.apply(this, arguments)
}
function m() {
  return (m = a.a(i.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, {
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
  return (_ = a.a(i.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/").concat(t, "/detail")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(r, {
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
  return (b = a.a(i.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/user/list/detail")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n, {
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
  return (E = a.a(i.a.mark(function e() {
    var t
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = "".concat(p, "/clouddb/user/list")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(t)
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
  return (w = a.a(i.a.mark(function e(t, n, r, o) {
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            a = o ? "".concat(p, "/clouddb/").concat(t, "/columns?work_id=").concat(o) : "".concat(p, "/clouddb/").concat(t, "/columns")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(a, {
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
  return (T = a.a(i.a.mark(function e(t, n, r, o, a) {
    var s
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = a ? "".concat(p, "/clouddb/").concat(t, "/import?work_id=").concat(a) : "".concat(p, "/clouddb/").concat(t, "/import")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(s, {
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
  return I.apply(this, arguments)
}
function I() {
  return (I = a.a(i.a.mark(function e(t, n, r, o, a) {
    var s
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = a ? "".concat(p, "/clouddb/").concat(t, "/datas?work_id=").concat(a) : "".concat(p, "/clouddb/").concat(t, "/datas")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(s, {
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
function A(e, t, n, r) {
  return j.apply(this, arguments)
}
function j() {
  return (j = a.a(i.a.mark(function e(t, n, r, o) {
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            a = "".concat(p, "/clouddb/").concat(t, "/data_list?offset=").concat(r, "&limit=").concat(o)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(a, {
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
  return (R = a.a(i.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(n)
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
  return (x = a.a(i.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/reference?work_id=").concat(n)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, {
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
  return (M = a.a(i.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/reference?db_id=").concat(t, "&work_id=").concat(n)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(r)
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
  return (P = a.a(i.a.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "".concat(p, "/clouddb/").concat(t, "?work_id=").concat(r) : "".concat(p, "/clouddb/").concat(t)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(o, {
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
  return (F = a.a(i.a.mark(function e(t, n) {
    var o
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */_e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            o = "".concat(p, "/clouddb/runtime/").concat(t, "/insert")
            a = {
              values: n
            }
            e.next = 5
            return $_119_index.a("".concat(JSON.stringify(a)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(o, a, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, u.a())
            })
          case 10:
            if (_e$sent = e.sent, 200 !== (_e$sent$data = _e$sent.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", _e$sent$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: _e$sent$data.msg,
              code: _e$sent$data.code
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
  return U.apply(this, arguments)
}
function U() {
  return (U = a.a(i.a.mark(function e(t, n, o, a) {
    var s
    var l
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent2
    var /* [auto-meaningful-name] */_e$sent2$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            s = "".concat(p, "/clouddb/runtime/").concat(t, "/delete")
            l = {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a.toString()
                }]
              }
            }
            e.next = 5
            return $_119_index.a("".concat(JSON.stringify(l)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(s, {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a
                }]
              }
            }, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, u.a())
            })
          case 10:
            if (_e$sent2 = e.sent, 200 !== (_e$sent2$data = _e$sent2.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", _e$sent2$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: _e$sent2$data.msg,
              code: _e$sent2$data.code
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
function W(e, t, n, r, o, i) {
  return H.apply(this, arguments)
}
function H() {
  return (H = a.a(i.a.mark(function e(t, n, o, a, s, l) {
    var h
    var m
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent3
    var /* [auto-meaningful-name] */_e$sent3$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            h = "".concat(p, "/clouddb/runtime/").concat(t, "/update")
            m = {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a.toString()
                }]
              },
              values: [{
                column_id: s,
                value: l.toString()
              }]
            }
            e.next = 5
            return $_119_index.a("".concat(JSON.stringify(m)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(h, {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a
                }]
              },
              values: [{
                column_id: s,
                value: l
              }]
            }, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, u.a())
            })
          case 10:
            if (_e$sent3 = e.sent, 200 !== (_e$sent3$data = _e$sent3.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", _e$sent3$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: _e$sent3$data.msg,
              code: _e$sent3$data.code
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
  return (z = a.a(i.a.mark(function e(t, n, o, a) {
    var s
    var l
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent4
    var /* [auto-meaningful-name] */_e$sent4$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            s = "".concat(p, "/clouddb/runtime/").concat(t, "/select")
            l = {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a.toString()
                }]
              }
            }
            e.next = 5
            return $_119_index.a("".concat(JSON.stringify(l)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(s, {
              querys: {
                querys: [{
                  op: o,
                  column_id: n,
                  value: a
                }]
              }
            }, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, u.a())
            })
          case 10:
            if (_e$sent4 = e.sent, 200 !== (_e$sent4$data = _e$sent4.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", _e$sent4$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: _e$sent4$data.msg,
              code: _e$sent4$data.code
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
  return (K = a.a(i.a.mark(function e(t, n) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var h
    var /* [auto-meaningful-name] */_e$sent5
    var /* [auto-meaningful-name] */_e$sent5$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = "row" === n ? "RECORD" : "COLUMN"
            e.next = 3
            return $_119_index.a("id=".concat(t, "&type=").concat(o))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.prev = 6
            h = "".concat(p, "/clouddb/runtime/").concat(t, "/count?type=").concat(o)
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(h, {
              headers: r.a({
                env: "dev" === f ? 0 : 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, u.a())
            })
          case 10:
            if (_e$sent5 = e.sent, 200 !== (_e$sent5$data = _e$sent5.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", _e$sent5$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: _e$sent5$data.msg,
              code: _e$sent5$data.code
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
  return (X = a.a(i.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/migrate?db_ids=").concat(t)
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(n)
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
