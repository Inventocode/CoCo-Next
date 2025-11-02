/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：113
 */

"use strict"

export { l as g }
export { d as f }
export { f as k }
export { m as d }
export { _ as v }
export { b }
export { S as a }
export { A as j }
export { N as h }
export { k as l }
export { D as p }
export { L as e }
export { B as w }
export { G as c }
export { W as r }
export { V as o }
export { Y as u }
export { q as s }
export { Q as t }
export { J as n }
export { ee as i }
export { ne as m }
export { oe as q }
import RegeneratorRuntime = require("regenerator-runtime");
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
import i = require("../7");
import a = require("../59/index");
import s = require("../../../../../src/shared/utils/network/axios-with-credentials");
var c = "".concat(a.a.serverHost, "/coconut")
function l(e) {
  return u.apply(this, arguments)
}
function u() {
  return (u = i.a(o.a.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
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
            return s.a.get(n, {
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
  return (p = i.a(o.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/admin/dict/").concat(t)
            e.next = 3
            return s.a.get(n, {
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
  return (h = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/").concat(t, "/keys")
            e.next = 3
            return s.a.get(r, {
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
  return (g = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/reference")
            e.next = 3
            return s.a.post(r, {
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
  return (v = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(c, "/webdb/v2/admin/reference/batch")
            e.next = 3
            return s.a.delete(r, {
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
  return (y = i.a(o.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(c, "/webdb/v2/admin/dict/copyBatch")
            e.next = 3
            return s.a.post(n, {
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
import E = require("../6");
import O = require("../11");
import w = require("../48/119/index");
import C = require("../48/87");
var T = "".concat(a.a.serverHost, "/coconut")
var S = 405e5
var I = O.a({
  40400100: "用户未授权",
  40400915: "当前用户无操作权限",
  40400916: "行为空或不存在",
  40400917: "列为空或不存在",
  40400919: "容量已达上限",
  40400926: "数据源不存在",
  40400927: "超过最大数据库数量",
  40400931: "存储的数据超出单元格限制(1k个字符)"
}, S, "存储的数据超出当前列数，溢出部分存储失败")
function A(e) {
  return j.apply(this, arguments)
}
function j() {
  return (j = i.a(o.a.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/user/list/detail")
            r = {
              type: 1
            }
            if (t) {
              r.work_id = t
            }
            e.next = 5
            return s.a.get(n, {
              headers: {
                env: 1
              },
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
function N(e) {
  return R.apply(this, arguments)
}
function R() {
  return (R = i.a(o.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/").concat(t, "/data_list?offset=0&limit=500")
            e.next = 3
            return s.a.get(n, {
              headers: {
                env: 1
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", null === (e$sent$data$data = e$sent$data.data) || undefined === e$sent$data$data ? undefined : e$sent$data$data.records.map(function (e) {
              return E.a({
                rowId: e.record_id
              }, e.values)
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
function k(e, t) {
  return x.apply(this, arguments)
}
function x() {
  return (x = i.a(o.a.mark(function e(t, n) {
    var /* [auto-meaningful-name] */_e$sent2
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var c
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return w.a("id=".concat(t))
          case 2:
            _e$sent2 = e.sent
            e$sent$sign = _e$sent2.sign
            e$sent$timestamp = _e$sent2.timestamp
            c = "".concat(T, "/clouddb/v2/").concat(t, "/data_list?work_id=").concat(n, "&offset=0&limit=500")
            e.next = 8
            return s.a.get(c, {
              headers: {
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }
            })
          case 8:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", null === (e$sent$data$data = e$sent$data.data) || undefined === e$sent$data$data ? undefined : e$sent$data$data.records.map(function (e) {
              return E.a({
                rowId: e.record_id
              }, e.values)
            }))
          case 12:
            throw new Error(e$sent$data.msg)
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function D(e) {
  return M.apply(this, arguments)
}
function M() {
  return (M = i.a(o.a.mark(function e(t) {
    var /* [auto-meaningful-name] */_e$sent4
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return w.a("id=".concat(t, "&limit=500&offset=0"))
          case 2:
            _e$sent4 = e.sent
            e$sent$sign = _e$sent4.sign
            e$sent$timestamp = _e$sent4.timestamp
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/list")
            e.next = 8
            return s.a.get(a, {
              params: {
                offset: 0,
                limit: 500
              },
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 8:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", null === (e$sent$data$data = e$sent$data.data) || undefined === e$sent$data$data ? undefined : e$sent$data$data.records.map(function (e) {
              return E.a({
                rowId: e.record_id
              }, e.values)
            }))
          case 12:
            throw new Error(e$sent$data.msg)
          case 13:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function L(e, t) {
  return P.apply(this, arguments)
}
function P() {
  return (P = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/reference")
            e.next = 3
            return s.a.post(r, {
              db_ids: n
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
function B(e, t) {
  return F.apply(this, arguments)
}
function F() {
  return (F = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/reference/batch")
            e.next = 3
            return s.a.delete(r, {
              params: {
                work_id: t,
                db_ids: n.join(",")
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
function G(e) {
  return U.apply(this, arguments)
}
function U() {
  return (U = i.a(o.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/v2/copy")
            e.next = 3
            return s.a.post(n, {}, {
              params: {
                db_ids: t.join(",")
              }
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
function W(e, t) {
  return H.apply(this, arguments)
}
function H() {
  return (H = i.a(o.a.mark(function e(t, n) {
    var r
    var i
    var /* [auto-meaningful-name] */_e$sent6
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            r = "".concat(T, "/clouddb/runtime/").concat(t, "/insert")
            i = {
              values: n
            }
            e.next = 5
            return w.a("".concat(JSON.stringify(i)))
          case 5:
            _e$sent6 = e.sent
            e$sent$sign = _e$sent6.sign
            e$sent$timestamp = _e$sent6.timestamp
            e.next = 10
            return s.a.post(r, i, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 10:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 20
              break
            }
            if ("插入数据与列属性不匹配" !== e$sent$data.data) {
              e.next = 17
              break
            }
            e$sent$data.code = S
            ae(e$sent$data)
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 17:
            return e.abrupt("return", e$sent$data.data)
          case 20:
            ae(e$sent$data)
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 22:
            e.next = 39
            break
          case 24:
            if (e.prev = 24, e.t0 = e.catch(0), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 38
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 35
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 35:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 36:
            e.next = 39
            break
          case 38:
            throw e.t0
          case 39:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 24]])
  }))).apply(this, arguments)
}
function V(e, t, n, r) {
  return z.apply(this, arguments)
}
function z() {
  return (z = i.a(o.a.mark(function e(t, n, r, i) {
    var a
    var c
    var /* [auto-meaningful-name] */_e$sent8
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/delete")
            c = {
              querys: {
                querys: [{
                  column_id: n,
                  op: r,
                  value: i.toString()
                }]
              }
            }
            e.next = 5
            return w.a("".concat(JSON.stringify(c)))
          case 5:
            _e$sent8 = e.sent
            e$sent$sign = _e$sent8.sign
            e$sent$timestamp = _e$sent8.timestamp
            e.next = 10
            return s.a.put(a, c, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 10:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
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
function Y(e, t, n, r, o, i) {
  return K.apply(this, arguments)
}
function K() {
  return (K = i.a(o.a.mark(function e(t, n, r, i, a, c) {
    var l
    var u
    var /* [auto-meaningful-name] */_e$sent16
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            l = "".concat(T, "/clouddb/runtime/").concat(t, "/update")
            u = {
              querys: {
                querys: [{
                  column_id: n,
                  op: r,
                  value: i.toString()
                }]
              },
              values: [{
                column_id: a,
                value: c.toString()
              }]
            }
            e.next = 5
            return w.a("".concat(JSON.stringify(u)))
          case 5:
            _e$sent16 = e.sent
            e$sent$sign = _e$sent16.sign
            e$sent$timestamp = _e$sent16.timestamp
            e.next = 10
            return s.a.put(l, u, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 10:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
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
function q(e, t, n, r) {
  return X.apply(this, arguments)
}
function X() {
  return (X = i.a(o.a.mark(function e(t, n, r, i) {
    var a
    var c
    var /* [auto-meaningful-name] */_e$sent23
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/select")
            c = {
              querys: {
                querys: [{
                  column_id: n,
                  op: r,
                  value: i.toString()
                }]
              }
            }
            e.next = 5
            return w.a("".concat(JSON.stringify(c)))
          case 5:
            _e$sent23 = e.sent
            e$sent$sign = _e$sent23.sign
            e$sent$timestamp = _e$sent23.timestamp
            e.next = 10
            return s.a.post(a, {
              querys: {
                querys: [{
                  op: r,
                  column_id: n,
                  value: i
                }]
              }
            }, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 10:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 16:
            ae(e$sent$data)
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 18:
            e.next = 35
            break
          case 20:
            if (e.prev = 20, e.t0 = e.catch(0), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 34
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 31
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 31:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 32:
            e.next = 35
            break
          case 34:
            throw e.t0
          case 35:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 20]])
  }))).apply(this, arguments)
}
function Q(e, t) {
  return Z.apply(this, arguments)
}
function Z() {
  return (Z = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */_e$sent27
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var l
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "row" === n ? "RECORD" : "COLUMN"
            e.next = 3
            return w.a("id=".concat(t, "&type=").concat(r))
          case 3:
            _e$sent27 = e.sent
            e$sent$sign = _e$sent27.sign
            e$sent$timestamp = _e$sent27.timestamp
            e.prev = 6
            l = "".concat(T, "/clouddb/runtime/").concat(t, "/count?type=").concat(r)
            e.next = 10
            return s.a.get(l, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 10:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 16:
            ae(e$sent$data)
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 18:
            e.next = 35
            break
          case 20:
            if (e.prev = 20, e.t0 = e.catch(6), console.error(e.t0), !(e$t0$response = e.t0.response)) {
              e.next = 34
              break
            }
            if (e$t0$response$status = e$t0$response.status, e$t0$response$data = e$t0$response.data, 403 !== e$t0$response$status) {
              e.next = 31
              break
            }
            throw new Error(JSON.stringify({
              msg: e$t0$response$data.msg,
              code: e$t0$response$data.code
            }))
          case 31:
            throw new Error(JSON.stringify({
              msg: "服务器错误",
              code: "E0"
            }))
          case 32:
            e.next = 35
            break
          case 34:
            throw e.t0
          case 35:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[6, 20]])
  }))).apply(this, arguments)
}
function J(e) {
  return $.apply(this, arguments)
}
function $() {
  return ($ = i.a(o.a.mark(function e(t) {
    var /* [auto-meaningful-name] */_e$sent31
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var a
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return w.a("id=".concat(t))
          case 3:
            _e$sent31 = e.sent
            e$sent$sign = _e$sent31.sign
            e$sent$timestamp = _e$sent31.timestamp
            a = "".concat(T, "/clouddb/v2/runtime/").concat(t, "/clear")
            e.next = 9
            return s.a.put(a, {}, {
              headers: E.a({
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a())
            })
          case 9:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 15
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 15:
            ae(e$sent$data)
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
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
function ee(e) {
  return te.apply(this, arguments)
}
function te() {
  return (te = i.a(o.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/v2/").concat(t, "/detail")
            e.next = 3
            return s.a.get(n, {
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
              e.next = 9
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 9:
            ae(e$sent$data)
          case 10:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ne(e, t) {
  return re.apply(this, arguments)
}
function re() {
  return (re = i.a(o.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/v2/").concat(t, "/detail")
            e.next = 3
            return s.a.get(r, {
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
              e.next = 9
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 9:
            ae(e$sent$data)
          case 10:
            throw new Error(e$sent$data.msg)
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function oe(e) {
  return ie.apply(this, arguments)
}
function ie() {
  return (ie = i.a(o.a.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */_e$sent37
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var c
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = {
              db_ids: t.join(",")
            }
            e.next = 3
            return w.a("ids=[".concat(t.join(","), "]"))
          case 3:
            _e$sent37 = e.sent
            e$sent$sign = _e$sent37.sign
            e$sent$timestamp = _e$sent37.timestamp
            c = "".concat(T, "/clouddb/v2/runtime/list")
            e.next = 9
            return s.a.get(c, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, C.a()),
              params: n
            })
          case 9:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 15
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 15:
            ae(e$sent$data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent$data.msg,
              code: e$sent$data.code
            }))
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ae(e) {
  e.msg = I[e.code] || "network error"
}
export default S
