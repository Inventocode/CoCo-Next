/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：48__part-0
 */

"use strict"

import * as r from "./66"
import * as /* [auto-meaningful-name] */Redux from "redux"
import * as /* [auto-meaningful-name] */$_486_index from "./486/index"
import * as /* [auto-meaningful-name] */$_343 from "./343"
import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as c from "../6"
import * as l from "./70"
import * as u from "./72"
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
export { f as "48__part-0__f" }
