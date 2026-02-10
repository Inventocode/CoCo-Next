/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：111__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_57_index from "../../../../../src/shared/env"
import * as i from "../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as E from "../6"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_48_117 from "../48/117"
import * as /* [auto-meaningful-name] */$$_48_87 from "../48/87"
var T = "".concat($$_57_index.a.serverHost, "/coconut")
var S = 405e5
var A = $$_11.a({
  40400100: "用户未授权",
  40400915: "当前用户无操作权限",
  40400916: "行为空或不存在",
  40400917: "列为空或不存在",
  40400919: "容量已达上限",
  40400926: "数据源不存在",
  40400927: "超过最大数据库数量",
  40400931: "存储的数据超出单元格限制(1k个字符)"
}, S, "存储的数据超出当前列数，溢出部分存储失败")
function I(e) {
  return j.apply(this, arguments)
}
function j() {
  return (j = i.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
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
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n, {
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
  return (R = i.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/").concat(t, "/data_list?offset=0&limit=500")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(n, {
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
  return (x = i.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var c
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$sent1$data$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_48_117.a("id=".concat(t))
          case 2:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            c = "".concat(T, "/clouddb/v2/").concat(t, "/data_list?work_id=").concat(n, "&offset=0&limit=500")
            e.next = 8
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(c, {
              headers: {
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", null === (e$sent1$data$data = e$sent1$data.data) || undefined === e$sent1$data$data ? undefined : e$sent1$data$data.records.map(function (e) {
              return E.a({
                rowId: e.record_id
              }, e.values)
            }))
          case 12:
            throw new Error(e$sent1$data.msg)
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
  return (M = i.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var a
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$sent1$data$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_48_117.a("id=".concat(t, "&limit=500&offset=0"))
          case 2:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/list")
            e.next = 8
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(a, {
              params: {
                offset: 0,
                limit: 500
              },
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
            })
          case 8:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", null === (e$sent1$data$data = e$sent1$data.data) || undefined === e$sent1$data$data ? undefined : e$sent1$data$data.records.map(function (e) {
              return E.a({
                rowId: e.record_id
              }, e.values)
            }))
          case 12:
            throw new Error(e$sent1$data.msg)
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
  return (P = i.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/reference")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, {
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
  return (F = i.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/reference/batch")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(r, {
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
  return W.apply(this, arguments)
}
function W() {
  return (W = i.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/v2/copy")
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(n, {}, {
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
function U(e, t) {
  return H.apply(this, arguments)
}
function H() {
  return (H = i.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var i
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            r = "".concat(T, "/clouddb/runtime/").concat(t, "/insert")
            i = {
              values: n
            }
            e.next = 5
            return $$_48_117.a("".concat(JSON.stringify(i)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(r, i, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 20
              break
            }
            if ("插入数据与列属性不匹配" !== e$sent1$data.data) {
              e.next = 17
              break
            }
            e$sent1$data.code = S
            ae(e$sent1$data)
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
            }))
          case 17:
            return e.abrupt("return", e$sent1$data.data)
          case 20:
            ae(e$sent1$data)
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
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
  return (z = i.a(RegeneratorRuntime.mark(function e(t, n, r, i) {
    var a
    var c
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/delete")
            c = {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: r,
                    value: i.toString()
                  }
                ]
              }
            }
            e.next = 5
            return $$_48_117.a("".concat(JSON.stringify(c)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(a, c, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
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
function Y(e, t, n, r, o, i) {
  return K.apply(this, arguments)
}
function K() {
  return (K = i.a(RegeneratorRuntime.mark(function e(t, n, r, i, a, c) {
    var l
    var u
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            l = "".concat(T, "/clouddb/runtime/").concat(t, "/update")
            u = {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: r,
                    value: i.toString()
                  }
                ]
              },
              values: [
                {
                  column_id: a,
                  value: c.toString()
                }
              ]
            }
            e.next = 5
            return $$_48_117.a("".concat(JSON.stringify(u)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(l, u, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
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
function q(e, t, n, r) {
  return X.apply(this, arguments)
}
function X() {
  return (X = i.a(RegeneratorRuntime.mark(function e(t, n, r, i) {
    var a
    var c
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            a = "".concat(T, "/clouddb/runtime/").concat(t, "/select")
            c = {
              querys: {
                querys: [
                  {
                    column_id: n,
                    op: r,
                    value: i.toString()
                  }
                ]
              }
            }
            e.next = 5
            return $$_48_117.a("".concat(JSON.stringify(c)))
          case 5:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(a, {
              querys: {
                querys: [
                  {
                    op: r,
                    column_id: n,
                    value: i
                  }
                ]
              }
            }, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            ae(e$sent1$data)
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
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
  return (Z = i.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var l
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "row" === n ? "RECORD" : "COLUMN"
            e.next = 3
            return $$_48_117.a("id=".concat(t, "&type=").concat(r))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.prev = 6
            l = "".concat(T, "/clouddb/runtime/").concat(t, "/count?type=").concat(r)
            e.next = 10
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(l, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
            })
          case 10:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 16
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 16:
            ae(e$sent1$data)
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
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
  return ($ = i.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var a
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    var /* [auto-meaningful-name] */e$t0$response
    var /* [auto-meaningful-name] */e$t0$response$status
    var /* [auto-meaningful-name] */e$t0$response$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_48_117.a("id=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            a = "".concat(T, "/clouddb/v2/runtime/").concat(t, "/clear")
            e.next = 9
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(a, {}, {
              headers: E.a({
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a())
            })
          case 9:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 15
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 15:
            ae(e$sent1$data)
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
function ee(e) {
  return te.apply(this, arguments)
}
function te() {
  return (te = i.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(T, "/clouddb/v2/").concat(t, "/detail")
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
  return (re = i.a(RegeneratorRuntime.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(T, "/clouddb/v2/").concat(t, "/detail")
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
  return (ie = i.a(RegeneratorRuntime.mark(function e(t) {
    var n
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var c
    var /* [auto-meaningful-name] */e$sent1
    var /* [auto-meaningful-name] */e$sent1$data
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = {
              db_ids: t.join(",")
            }
            e.next = 3
            return $$_48_117.a("ids=[".concat(t.join(","), "]"))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            c = "".concat(T, "/clouddb/v2/runtime/list")
            e.next = 9
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(c, {
              headers: E.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_48_87.a()),
              params: n
            })
          case 9:
            if (e$sent1 = e.sent, 200 !== (e$sent1$data = e$sent1.data).code) {
              e.next = 15
              break
            }
            return e.abrupt("return", e$sent1$data.data)
          case 15:
            ae(e$sent1$data)
          case 16:
            throw new Error(JSON.stringify({
              msg: e$sent1$data.msg,
              code: e$sent1$data.code
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
  e.msg = A[e.code] || "network error"
}
export { S }
export { I }
export { N }
export { k }
export { D }
export { L }
export { B }
export { G }
export { U }
export { V }
export { Y }
export { q }
export { Q }
export { J }
export { ee }
export { ne }
export { oe }
