/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：424__part-23
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_146_87 from "../../146/87"
import * as /* [auto-meaningful-name] */$$_$$_6 from "../../6"
import * as /* [auto-meaningful-name] */$$_$$_48_200 from "../../48/200"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_48_209 from "../../48/209"
import * as /* [auto-meaningful-name] */$$_$$_146_119_index from "../../146/119/index"
var gp = "".concat($$_$$_48_200.a.serverHost, "/coconut")
function _p(e, t, n) {
  return vp.apply(this, arguments)
}
function vp() {
  return (vp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n, r) {
    var o
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */_e$sent$data
    var /* [auto-meaningful-name] */d$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            o = {
              key: n.toString(),
              type: "string",
              value: r
            }
            e.next = 4
            return $$_$$_146_119_index.a("".concat(JSON.stringify(o)))
          case 4:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 9
            return $$_$$_48_209.a.post(gp + "/webdb/try/dict/".concat(t, "/set"), {
              key: n,
              type: "string",
              value: r
            }, {
              headers: $$_$$_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_$$_146_87.a())
            })
          case 9:
            if (_e$sent = e.sent, 200 !== (_e$sent$data = _e$sent.data).code) {
              e.next = 15
              break
            }
            return e.abrupt("return", _e$sent$data.data)
          case 15:
            if (40400914 === _e$sent$data.code) {
              _e$sent$data.msg = "容量已达上限"
            }
            throw new Error(_e$sent$data.msg)
          case 17:
            e.next = 25
            break
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (d$data = e$t0$response.data) || undefined === d$data ? undefined : d$data.msg)) {
              e.next = 24
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 24:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 25:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 19]])
  }))).apply(this, arguments)
}
function bp(e, t) {
  return yp.apply(this, arguments)
}
function yp() {
  return (yp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent2
    var /* [auto-meaningful-name] */_e$sent2$data
    var /* [auto-meaningful-name] */l$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_146_119_index.a("dictId=".concat(t, "&id=&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $$_$$_48_209.a.delete(gp + "/webdb/try/dict/".concat(t, "/remove?key=").concat(n, "&id="), {
              headers: $$_$$_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_$$_146_87.a())
            })
          case 8:
            if (_e$sent2 = e.sent, 200 !== (_e$sent2$data = _e$sent2.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", _e$sent2$data.data)
          case 14:
            throw new Error(_e$sent2$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (l$data = e$t0$response.data) || undefined === l$data ? undefined : l$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function Ep(e, t) {
  return Op.apply(this, arguments)
}
function Op() {
  return (Op = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent3
    var /* [auto-meaningful-name] */_e$sent3$data
    var /* [auto-meaningful-name] */l$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_146_119_index.a("dictId=".concat(t, "&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $$_$$_48_209.a.get(gp + "/webdb/try/dict/".concat(t, "/getvalue"), {
              params: {
                key: n
              },
              headers: $$_$$_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_$$_146_87.a())
            })
          case 8:
            if (_e$sent3 = e.sent, 200 !== (_e$sent3$data = _e$sent3.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", _e$sent3$data.data)
          case 14:
            throw new Error(_e$sent3$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (l$data = e$t0$response.data) || undefined === l$data ? undefined : l$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function wp(e) {
  return Cp.apply(this, arguments)
}
function Cp() {
  return (Cp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent4
    var /* [auto-meaningful-name] */_e$sent4$data
    var /* [auto-meaningful-name] */c$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_146_119_index.a("dictId=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $$_$$_48_209.a.get(gp + "/webdb/try/dict/".concat(t, "/keys"), {
              headers: $$_$$_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_$$_146_87.a())
            })
          case 8:
            if (_e$sent4 = e.sent, 200 !== (_e$sent4$data = _e$sent4.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", _e$sent4$data.data)
          case 14:
            throw new Error(_e$sent4$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (c$data = e$t0$response.data) || undefined === c$data ? undefined : c$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function Tp(e) {
  return Sp.apply(this, arguments)
}
function Sp() {
  return (Sp = $$_$$_7.a(RegeneratorRuntime.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent5
    var /* [auto-meaningful-name] */_e$sent5$data
    var /* [auto-meaningful-name] */c$data
    var /* [auto-meaningful-name] */e$t0$response
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_$$_146_119_index.a("dictId=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $$_$$_48_209.a.delete(gp + "/webdb/try/dict/clear/".concat(t), {
              headers: $$_$$_6.a({
                env: 1,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_$$_146_87.a())
            })
          case 8:
            if (_e$sent5 = e.sent, 200 !== (_e$sent5$data = _e$sent5.data).code) {
              e.next = 14
              break
            }
            return e.abrupt("return", _e$sent5$data.data)
          case 14:
            throw new Error(_e$sent5$data.msg)
          case 15:
            e.next = 23
            break
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(null === (e$t0$response = e.t0.response) || undefined === e$t0$response || null === (c$data = e$t0$response.data) || undefined === c$data ? undefined : c$data.msg)) {
              e.next = 22
              break
            }
            throw new Error(JSON.stringify(null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.data))
          case 22:
            throw new Error(JSON.stringify({
              code: null === e$t0$response || undefined === e$t0$response ? undefined : e$t0$response.status,
              msg: e.t0.message
            }))
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
export { _p as "424__part-23___p" }
export { bp as "424__part-23__bp" }
export { Ep as "424__part-23__Ep" }
export { wp as "424__part-23__wp" }
export { Tp as "424__part-23__Tp" }
