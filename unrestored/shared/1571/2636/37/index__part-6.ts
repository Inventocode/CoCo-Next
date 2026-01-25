/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：37__part-6
 */

"use strict"

import * as a from "../6"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_48_3_index from "../48/3/index"
import * as St from "../7"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_2680_index from "../2680/index"
import * as /* [auto-meaningful-name] */Terser from "terser"
import * as /* [auto-meaningful-name] */$$_627_index from "../627/index"
import * as /* [auto-meaningful-name] */$$_14 from "../14"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials from "../../../../../src/shared/utils/network/axios-with-credentials"
import * as /* [auto-meaningful-name] */$$_57_index from "../57/index"
var Mt = "".concat($$_57_index.a.serverHost, "/coconut")
function Lt(e) {
  return Pt.apply(this, arguments)
}
function Pt() {
  return (Pt = St.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    var /* [auto-meaningful-name] */e$sent$data$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(Mt + "/webdb/admin/dict", {
              params: {
                work_id: t
              }
            })
          case 2:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            (e$sent$data$data = e$sent$data.data).forEach(function (e) {
              return e.id = e.id.toString()
            })
            return e.abrupt("return", e$sent$data$data)
          case 8:
            $$_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Bt(e) {
  return Ft.apply(this, arguments)
}
function Ft() {
  return (Ft = St.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(Mt + "/webdb/admin/dict", {
              name: t
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.data.id + "")
          case 7:
            $$_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
            throw new TypeError(e$sent$data.msg)
          case 11:
            if (e.prev = 11, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 15
              break
            }
            throw e.t0
          case 15:
            throw new Error("网络错误")
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 11]])
  }))).apply(this, arguments)
}
function Gt(e, t, n) {
  return Wt.apply(this, arguments)
}
function Wt() {
  return (Wt = St.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "work_id=".concat(r) : ""
            e.prev = 1
            e.next = 4
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(Mt + "/webdb/admin/dict/".concat(t, "?").concat(o), {
              name: n
            })
          case 4:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            return e.abrupt("return", e$sent$data.success)
          case 8:
            throw new TypeError(e$sent$data.msg)
          case 11:
            if (e.prev = 11, e.t0 = e.catch(1), !(e.t0 instanceof TypeError)) {
              e.next = 15
              break
            }
            throw e.t0
          case 15:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 16:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 11]])
  }))).apply(this, arguments)
}
function Ut(e, t) {
  return Ht.apply(this, arguments)
}
function Ht() {
  return (Ht = St.a(RegeneratorRuntime1.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.delete(Mt + "/webdb/admin/dict/".concat(t))
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 7
              break
            }
            return e.abrupt("return", e$sent$data.success)
          case 7:
            throw new TypeError(e$sent$data.msg)
          case 10:
            if (e.prev = 10, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 14
              break
            }
            throw e.t0
          case 14:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 15:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 10]])
  }))).apply(this, arguments)
}
function Vt(e, t, n, r) {
  return zt.apply(this, arguments)
}
function zt() {
  return (zt = St.a(RegeneratorRuntime1.mark(function e(t, n, r, o) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.get(Mt + "/webdb/admin/dict/".concat(t), {
              params: {
                offset: n,
                limit: r,
                work_id: o
              },
              headers: {
                env: 2
              }
            })
          case 3:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            e$sent$data.data.items.forEach(function (e) {
              e.id += ""
            })
            return e.abrupt("return", e$sent$data.data)
          case 8:
            $$_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
            throw new TypeError(e$sent$data.msg)
          case 12:
            if (e.prev = 12, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 16
              break
            }
            throw e.t0
          case 16:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 12]])
  }))).apply(this, arguments)
}
function Yt(e, t, n) {
  return Kt.apply(this, arguments)
}
function Kt() {
  return (Kt = St.a(RegeneratorRuntime1.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$data
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "work_id=".concat(r) : ""
            e.prev = 1
            e.next = 4
            return $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.post(Mt + "/webdb/admin/dict/".concat(t, "/storevalues?").concat(o), a.a({}, n), {
              headers: {
                env: 2
              }
            })
          case 4:
            if (e$sent = e.sent, 200 !== (e$sent$data = e$sent.data).code) {
              e.next = 8
              break
            }
            return e.abrupt("return", e$sent$data.data)
          case 8:
            $$_14.a.condition(false, {
              type: "error",
              message: e$sent$data.msg
            })
            throw new TypeError(e$sent$data.msg)
          case 12:
            if (e.prev = 12, e.t0 = e.catch(1), !(e.t0 instanceof TypeError)) {
              e.next = 16
              break
            }
            throw e.t0
          case 16:
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 17:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[1, 12]])
  }))).apply(this, arguments)
}
function qt(e, t, n, r) {
  return Xt.apply(this, arguments)
}
function Xt() {
  return (Xt = St.a(RegeneratorRuntime1.mark(function e(t, n, r, o) {
    var i
    var a
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            i = o ? "work_id=".concat(o) : ""
            a = t.map(function (e) {
              return new Promise(function (t, o) {
                $$_$$_$$_$$_$$_src_shared_utils_network_axiosWithCredentials.a.put(Mt + "/webdb/admin/dict/migrate?".concat(i), {
                  db_id: e,
                  from_env: n,
                  to_env: r
                }).then(function () {
                  t(true)
                }).catch(function (e) {
                  return o(e)
                })
              })
            })
            return e.abrupt("return", Promise.all(a))
          case 3:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export { Lt }
export { Bt }
export { Gt }
export { Ut }
export { Vt }
export { Yt }
export { qt }
