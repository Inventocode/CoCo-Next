/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：48
 */

"use strict"

export { oe as b }
export { ie as a }
import r = require("./66")
import /* [auto-meaningful-name] */Redux = require("redux")
import /* [auto-meaningful-name] */$_486_index = require("./486/index")
import /* [auto-meaningful-name] */$_343 = require("./343")
import /* [auto-meaningful-name] */$$_11 = require("../11")
import c = require("../6")
import l = require("./70")
import u = require("./72")
function d(e, t) {
  var n = t.id
  var /* [auto-meaningful-name] */t$key = t.key
  var /* [auto-meaningful-name] */t$value = t.value
  var i = e.findIndex(function (e) {
    return e.id === n
  })
  return i > -1 ? e.update(i, function (e) {
    return c.a(c.a({}, e), {}, $$_11.a({}, t$key, t$value))
  }) : e
}
var p = window.localStorage.getItem("LANGUAGE") || navigator.language
var f = Redux.combineReducers({
  widgetMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : r.a.Map({})
    var t = arguments.length > 1 ? arguments[1] : undefined
    switch (t.type) {
      case u.k:
        return e.delete(t.payload.id)
      case u.j:
        return e.set(t.payload.id, t.payload.widget)
      default:
        return e
    }
  },
  screenList: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : r.a.List([])
    var t = arguments.length > 1 ? arguments[1] : undefined
    switch (t.type) {
      case u.l:
        return d(e, t.payload)
      default:
        return e
    }
  },
  variableMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map()
    var t = arguments.length > 1 ? arguments[1] : undefined
    t.type
    return e
  },
  imageFileMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map()
    var t = arguments.length > 1 ? arguments[1] : undefined
    t.type
    return e
  },
  soundFileMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map()
    var t = arguments.length > 1 ? arguments[1] : undefined
    t.type
    return e
  },
  iconFileMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map()
    var t = arguments.length > 1 ? arguments[1] : undefined
    t.type
    return e
  },
  currentScreenId: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
    var t = arguments.length > 1 ? arguments[1] : undefined
    switch (t.type) {
      case u.h:
        return t.payload.navigator
      default:
        return e
    }
  },
  currentScreenParam: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : ""
    var t = arguments.length > 1 ? arguments[1] : undefined
    switch (t.type) {
      case u.i:
        return t.payload.param
      default:
        return e
    }
  },
  httpClientMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map()
    var t = arguments.length > 1 ? arguments[1] : undefined
    t.type
    return e
  },
  mediaMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
      cameraDirection: 0
    }
    var t = arguments.length > 1 ? arguments[1] : undefined
    switch (t.type) {
      case u.f:
        return c.a({
          state: e
        }, t.payload)
      default:
        return e
    }
  },
  emulatorPhoneInfo: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
      dialPageVisible: false,
      callingPageVisible: false,
      contactPageVisible: false,
      sendSmsPageVisible: false,
      receiveSmsPageVisible: false,
      phoneDialWidgetId: "",
      contactWidgetId: "",
      smsWidgetId: "",
      phoneNumber: "",
      callType: "",
      callStatus: l.b.IDEL,
      sendSmsNumber: "",
      sendSmsContent: "",
      receiveSmsNumber: "",
      receiveSmsContent: ""
    }
    var t = arguments.length > 1 ? arguments[1] : undefined
    switch (t.type) {
      case u.g:
        return c.a(c.a({}, e), t.payload)
      default:
        return e
    }
  },
  language: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : p
    var t = arguments.length > 1 ? arguments[1] : undefined
    t.type
    return e
  }
})
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var m = function __importDefault(module) {
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
import g = require("./3")
import _ = require("../7")
import /* [auto-meaningful-name] */$_209 = require("./209")
import /* [auto-meaningful-name] */$_200 = require("./200")
import /* [auto-meaningful-name] */$$_14 = require("../14")
import /* [auto-meaningful-name] */$$_146_87 = require("../146/87")
import /* [auto-meaningful-name] */$$_28_index = require("../28/index")
import /* [auto-meaningful-name] */$$_146_119_index = require("../146/119/index")
var C = "".concat($_200.a.serverHost, "/coconut")
var T = $$_28_index.e() ? 0 : 1
function S(e) {
  return I.apply(this, arguments)
}
function I() {
  return (I = _.a(m.a.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent
    var /* [auto-meaningful-name] */_e$sent$data
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_146_119_index.a("dictId=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $_209.a.get(C + "/webdb/try/dict/".concat(t, "/keys"), {
              headers: c.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_146_87.a())
            })
          case 8:
            if (_e$sent = e.sent, 200 !== (_e$sent$data = _e$sent.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", _e$sent$data.data)
          case 12:
            $$_14.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法获取所有键或者键值对个数"
            })
            throw new TypeError(_e$sent$data.msg)
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20
              break
            }
            throw e.t0
          case 20:
            $$_14.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法获取所有键或者键值对个数"
            })
            throw new Error("网络错误")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 16]])
  }))).apply(this, arguments)
}
function A(e) {
  return j.apply(this, arguments)
}
function j() {
  return (j = _.a(m.a.mark(function e(t) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent2
    var /* [auto-meaningful-name] */_e$sent2$data
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_146_119_index.a("dictId=".concat(t))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $_209.a.delete(C + "/webdb/try/dict/clear/".concat(t), {
              headers: c.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_146_87.a())
            })
          case 8:
            if (_e$sent2 = e.sent, 200 !== (_e$sent2$data = _e$sent2.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", _e$sent2$data.success)
          case 12:
            $$_14.a.condition(false, {
              type: "error",
              message: "无法清空所有键值对"
            })
            throw new TypeError(_e$sent2$data.msg)
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20
              break
            }
            throw e.t0
          case 20:
            $$_14.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法清空所有键值对"
            })
            throw new Error("网络错误")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 16]])
  }))).apply(this, arguments)
}
function N(e, t, n) {
  return R.apply(this, arguments)
}
function R() {
  return (R = _.a(m.a.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent3
    var /* [auto-meaningful-name] */_e$sent3$data
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_146_119_index.a("dictId=".concat(t, "&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $_209.a.get(C + "/webdb/try/dict/".concat(t, "/getvalue"), {
              params: {
                key: n
              },
              headers: c.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_146_87.a())
            })
          case 8:
            if (_e$sent3 = e.sent, 200 !== (_e$sent3$data = _e$sent3.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", _e$sent3$data.data)
          case 12:
            if (r && $$_14.a.condition(false, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            }), 40400912 !== _e$sent3$data.code) {
              e.next = 15
              break
            }
            return e.abrupt("return", [])
          case 15:
            throw new TypeError(_e$sent3$data.msg)
          case 18:
            if (e.prev = 18, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 22
              break
            }
            throw e.t0
          case 22:
            $$_14.a.condition(false, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "获取",
                key: n
              }
            })
            throw new Error("网络错误")
          case 24:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 18]])
  }))).apply(this, arguments)
}
function k(e, t, n, r) {
  return x.apply(this, arguments)
}
function x() {
  return (x = _.a(m.a.mark(function e(t, n, r, o) {
    var i
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent4
    var /* [auto-meaningful-name] */_e$sent4$data
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            i = {
              key: n.toString(),
              type: o,
              value: r.toString()
            }
            e.next = 4
            return $$_146_119_index.a("".concat(JSON.stringify(i)))
          case 4:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 9
            return $_209.a.post(C + "/webdb/try/dict/".concat(t, "/set"), {
              key: n,
              type: o,
              value: r
            }, {
              headers: c.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_146_87.a())
            })
          case 9:
            if (_e$sent4 = e.sent, 200 !== (_e$sent4$data = _e$sent4.data).code) {
              e.next = 13
              break
            }
            return e.abrupt("return", _e$sent4$data.success)
          case 13:
            if (40400914 === _e$sent4$data.code) {
              $$_14.a.condition(false, {
                type: "error",
                message: _e$sent4$data.msg
              })
            } else {
              $$_14.a.condition(false, {
                type: "error",
                messageId: "keyNotExists",
                values: {
                  key: n
                }
              })
            }
            throw new TypeError(_e$sent4$data.msg)
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 21
              break
            }
            throw e.t0
          case 21:
            $$_14.a.condition(false, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "添加或者更新",
                key: n
              }
            })
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 23:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 17]])
  }))).apply(this, arguments)
}
function D(e, t, n) {
  return M.apply(this, arguments)
}
function M() {
  return (M = _.a(m.a.mark(function e(t, n, r) {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$sign
    var /* [auto-meaningful-name] */e$sent$timestamp
    var /* [auto-meaningful-name] */_e$sent5
    var /* [auto-meaningful-name] */_e$sent5$data
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return $$_146_119_index.a("dictId=".concat(t, "&id=").concat(r, "&key=").concat(n))
          case 3:
            e$sent = e.sent
            e$sent$sign = e$sent.sign
            e$sent$timestamp = e$sent.timestamp
            e.next = 8
            return $_209.a.delete(C + "/webdb/try/dict/".concat(t, "/remove?key=").concat(n, "&id=").concat(r), {
              headers: c.a({
                env: T,
                sign: e$sent$sign,
                timestamp: e$sent$timestamp
              }, $$_146_87.a())
            })
          case 8:
            if (_e$sent5 = e.sent, 200 !== (_e$sent5$data = _e$sent5.data).code) {
              e.next = 12
              break
            }
            return e.abrupt("return", _e$sent5$data.success)
          case 12:
            $$_14.a.condition(false, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            })
            throw new TypeError(_e$sent5$data.msg)
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20
              break
            }
            throw e.t0
          case 20:
            $$_14.a.condition(false, {
              type: "error",
              messageId: "deleteNotNetwork",
              values: {
                type: "删除",
                key: n
              }
            })
            throw new Error("与服务器通讯出现错误时，通讯网络问题")
          case 22:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 16]])
  }))).apply(this, arguments)
}
var L = m.a.mark(V)
var P = m.a.mark(z)
var B = m.a.mark(Y)
var F = m.a.mark(K)
var G = m.a.mark(q)
var U = m.a.mark(Q)
var W = m.a.mark(Z)
var H = m.a.mark(J)
function V(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$value
  var /* [auto-meaningful-name] */e$payload$fieldType
  var /* [auto-meaningful-name] */l$sent
  return m.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload = e.payload
          e$payload$documentId = e$payload.documentId
          e$payload$key = e$payload.key
          e$payload$value = e$payload.value
          e$payload$fieldType = e$payload.fieldType
          l.prev = 2
          l.next = 5
          return g.b(k, e$payload$documentId, e$payload$key, e$payload$value, e$payload$fieldType)
        case 5:
          l$sent = l.sent
          return l.abrupt("return", e$resolve(l$sent))
        case 9:
          l.prev = 9
          l.t0 = l.catch(2)
          e$reject(l.t0.message)
        case 12:
        case "end":
          return l.stop()
      }
    }
  }, L, null, [[2, 9]])
}
function z(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$id
  var /* [auto-meaningful-name] */c$sent
  return m.a.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload = e.payload
          e$payload$documentId = e$payload.documentId
          e$payload$key = e$payload.key
          e$payload$id = e$payload.id
          c.prev = 2
          c.next = 5
          return g.b(D, e$payload$documentId, e$payload$key, e$payload$id)
        case 5:
          c$sent = c.sent
          return c.abrupt("return", e$resolve(c$sent))
        case 9:
          c.prev = 9
          c.t0 = c.catch(2)
          e$reject(c.t0.message)
        case 12:
        case "end":
          return c.stop()
      }
    }
  }, P, null, [[2, 9]])
}
function Y(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */i$sent
  return m.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload$documentId = e.payload.documentId
          i.prev = 2
          i.next = 5
          return g.b(A, e$payload$documentId)
        case 5:
          i$sent = i.sent
          return i.abrupt("return", e$resolve(i$sent))
        case 9:
          i.prev = 9
          i.t0 = i.catch(2)
          e$reject(i.t0.message)
        case 12:
        case "end":
          return i.stop()
      }
    }
  }, B, null, [[2, 9]])
}
function K(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */e$payload$key
  var /* [auto-meaningful-name] */e$payload$isConsole
  var /* [auto-meaningful-name] */c$sent
  return m.a.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload = e.payload
          e$payload$documentId = e$payload.documentId
          e$payload$key = e$payload.key
          e$payload$isConsole = e$payload.isConsole
          c.prev = 2
          c.next = 5
          return g.b(N, e$payload$documentId, e$payload$key, e$payload$isConsole)
        case 5:
          c$sent = c.sent
          return c.abrupt("return", e$resolve(c$sent))
        case 9:
          c.prev = 9
          c.t0 = c.catch(2)
          e$reject(c.t0.message)
        case 12:
        case "end":
          return c.stop()
      }
    }
  }, F, null, [[2, 9]])
}
function q(e) {
  var /* [auto-meaningful-name] */e$resolve
  var /* [auto-meaningful-name] */e$reject
  var /* [auto-meaningful-name] */e$payload$documentId
  var /* [auto-meaningful-name] */i$sent
  return m.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          e$resolve = e.resolve
          e$reject = e.reject
          e$payload$documentId = e.payload.documentId
          i.prev = 2
          i.next = 5
          return g.b(S, e$payload$documentId)
        case 5:
          i$sent = i.sent
          return i.abrupt("return", e$resolve(i$sent))
        case 9:
          i.prev = 9
          i.t0 = i.catch(2)
          e$reject(i.t0.message)
        case 12:
        case "end":
          return i.stop()
      }
    }
  }, G, null, [[2, 9]])
}
var X = {
  ASYNC_SET_CLOUD_DOC_FIELD_VALUE: V,
  ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE: Y,
  ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE: z,
  ASYNC_GET_CLOUD_DOC_FIELD_VALUE: K,
  ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE: q
}
function Q() {
  return m.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return g.g([u.a, u.b, u.d, u.c, u.e], Z)
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, U)
}
function Z(e) {
  var t
  return m.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          if (!(t = X[e.type])) {
            n.next = 4
            break
          }
          n.next = 4
          return g.b(t, e)
        case 4:
        case "end":
          return n.stop()
      }
    }
  }, W)
}
function J() {
  return m.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2
          return g.a([g.d(Q)])
        case 2:
        case "end":
          return e.stop()
      }
    }
  }, H)
}
var $
var ee = $_486_index.a()
var te = Redux.createStore(f)
var ne = false
try {
  $ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.compose
  ne = false
} catch (ae) {
  $ = undefined
}
function re(e) {
  var t = new Map()
  for (var n in e) t.set(n, e[n])
  return t
}
function oe(e) {
  var /* [auto-meaningful-name] */e$screenList = e.screenList
  var /* [auto-meaningful-name] */e$widgetMap = e.widgetMap
  var /* [auto-meaningful-name] */e$variableMap = e.variableMap
  var /* [auto-meaningful-name] */e$imageFileMap = e.imageFileMap
  var /* [auto-meaningful-name] */e$soundFileMap = e.soundFileMap
  var /* [auto-meaningful-name] */e$iconFileMap = e.iconFileMap
  var /* [auto-meaningful-name] */e$initialScreenId = e.initialScreenId
  var /* [auto-meaningful-name] */e$version = e.version
  $_343.c(e$widgetMap, e$version)
  var p = {
    screenList: r.a.List(e$screenList),
    widgetMap: r.a.Map(e$widgetMap),
    variableMap: e$variableMap ? re(e$variableMap) : undefined,
    imageFileMap: e$imageFileMap ? re(e$imageFileMap) : undefined,
    soundFileMap: e$soundFileMap ? re(e$soundFileMap) : undefined,
    iconFileMap: e$iconFileMap ? re(e$iconFileMap) : undefined,
    currentScreenId: e$initialScreenId
  }
  te = ne && $ ? Redux.createStore(f, p, $(Redux.applyMiddleware(ee))) : Redux.createStore(f, p, Redux.applyMiddleware(ee))
  ee.run(J)
  return te
}
function ie() {
  return te
}
export default ie
