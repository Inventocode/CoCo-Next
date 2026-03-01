/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-180
 */

"use strict"

import { Ue } from "./index__part-9"
var nj
var tj
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"./141/index"
import * as /* [auto-meaningful-name] */Src_shared_env from /* 57 */"../../../../src/shared/env"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1206 from /* 1206 */"./1206/index"
import * as /* [auto-meaningful-name] */Module_162 from /* 162 */"./162"
import * as /* [auto-meaningful-name] */Module_1207 from /* 1207 */"./1207"
import /* [auto-meaningful-name] */Module_12071 from /* 1207 */"./1207"
function dj(e) {
  switch (e) {
    case "zh":
    case "zh-CN":
      return "zh"
    case "tw":
    case "zh-TW":
      return "tw"
    case "en":
    case "en-US":
    default:
      return "en"
  }
}
function pj(e) {
  switch (e) {
    case "dev":
      return "development"
    case "test":
      return "test"
    case "staging":
      return "staging"
    case "prod":
      return "production"
    default:
      return "development"
  }
}
var mj = React1.memo(function (e) {
  var t = useDispatch()
  var n = useSelector(function (e) {
    return e.common.language
  })
  var r = useSelector(function (e) {
    return e.common.signInDialogInfo
  })
  var /* [auto-meaningful-name] */r$visible = r.visible
  var /* [auto-meaningful-name] */r$onSuccess = r.onSuccess
  var a = React1.useState(false)
  var s = Module_10.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = React1.useRef(null)
  React1.useEffect(function () {
    if (r$visible) {
      nj = setTimeout(function () {
        l(false)
        t(Src_editor_redux_common_actions.Zg())
        t(Src_editor_redux_common_actions.mj({
          type: "error",
          message: "登录页面加载失败，请稍后重试!"
        }))
      }, 5e3)
    }
  }, [r$visible, t])
  var d = React1.useCallback(Module_7.a(RegeneratorRuntime.mark(function e() {
    var n
    var r
    var /* [auto-meaningful-name] */e$sent
    var i = arguments
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = !(i.length > 0 && undefined !== i[0]) || i[0]
            r = i.length > 1 ? i[1] : undefined
            if (n) {
              t(Src_editor_redux_common_actions.Zg())
            }
            e.prev = 3
            e.next = 6
            return Ue()
          case 6:
            if (!(e$sent = e.sent).id) {
              e.next = 17
              break
            }
            t(Src_editor_redux_common_actions.wg(e$sent))
            Module_141.b(e$sent.id)
            if (r) {
              p(r, true, !n, "")
            }
            t(Src_editor_redux_common_actions.cg())
            t(Src_editor_redux_common_actions.dg())
            t(Module_162.D())
            return e.abrupt("return", true)
          case 17:
            Module_9.J()
            t(Src_editor_redux_common_actions.wg(null))
            if (r) {
              p(r, false, !n, "")
            }
          case 20:
            e.next = 27
            break
          case 22:
            e.prev = 22
            e.t0 = e.catch(3)
            Module_9.J()
            t(Src_editor_redux_common_actions.hi())
            if (r) {
              p(r, false, !n, e.t0.message)
            }
          case 27:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[3, 22]])
  })), [t])
  function p(e, t, n, r) {
    Module_141.a("LoginResult", {
      loginMethod: e,
      isSuccess: t,
      isRegister: n,
      failReason: r
    })
  }
  React1.useEffect(function () {
    d(false, "")
  }, [d])
  var m = React1.useCallback(function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(n) {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return d(true, n)
            case 2:
              if (!e.sent) {
                e.next = 7
                break
              }
              if (r$onSuccess) {
                r$onSuccess()
              }
              t(Src_editor_redux_common_actions.bg())
              t(Src_editor_redux_common_actions.cg())
              l(false)
            case 7:
              t(Src_editor_redux_common_actions.Zg())
            case 8:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }(), [t, r$onSuccess, d])
  var g = React1.useCallback(function (e) {
    var /* [auto-meaningful-name] */e$error
    var /* [auto-meaningful-name] */e$error1
    var /* [auto-meaningful-name] */e$error1$error_body
    p((null === e || undefined === e ? undefined : e.source) || "", false, "register" === (null === e || undefined === e ? undefined : e.source), (null === e || undefined === e || null === (e$error = e.error) || undefined === e$error ? undefined : e$error.msg) || (null === e || undefined === e || null === (e$error1 = e.error) || undefined === e$error1 || null === (e$error1$error_body = e$error1.error_body) || undefined === e$error1$error_body ? undefined : e$error1$error_body.catastrophe))
  }, [])
  React1.useEffect(function () {
    tj = Module_1206.createCodemaoLoginIframeApi({
      onEvent: function (e) {
        !function (e) {
          switch (e.event) {
            case "IFRAME_READY":
              l(true)
              if (nj) {
                clearTimeout(nj)
              }
              break
            case "PASSWORD_LOGIN_SUCCESS":
              m("pwd-login")
              break
            case "PASSWORD_LOGIN_FAILURE":
              g(e.value)
              break
            case "SMS_LOGIN_SUCCESS":
              m("sms-login")
              break
            case "SMS_LOGIN_FAILURE":
              g(e.value)
              break
            case "THIRD_PARTY_LOGIN_SUCCESS":
              m("third-login")
              break
            case "THIRD_PARTY_LOGIN_FAILURE":
              g(e.value)
              break
            case "REGISTER_SUCCESS":
              m("pwd-login")
              break
            case "REGISTER_FAILURE":
              g(e.value)
              break
            case "REGISTER_CONFIRM":
            case "BIND_PHONE_SUCCESS":
              break
            case "CLOSE_ANIMATION_END":
              t(Src_editor_redux_common_actions.Zg())
              l(false)
              break
            case "REPORT":
              break
            default:
              console.info("未知事件:", e)
          }
        }(e)
      }
    }, {
      getWindow: function () {
        var /* [auto-meaningful-name] */u$current
        return null === (u$current = u.current) || undefined === u$current ? undefined : u$current.contentWindow
      }
    })
    return function () {
      var e
      if (!(null === (e = tj) || undefined === e)) {
        e.dispose()
      }
    }
  }, [d, t, g, m])
  var v = Module_1206.getCodemaoLoginIframeUrl({
    env: pj(Src_shared_env.a.env),
    language: dj(n),
    onlyLogin: false,
    disableThirdParty: false,
    ageLimit: false,
    theme: "violet",
    pageView: "login",
    pid: Src_shared_env.a.pid,
    productCode: Src_shared_env.a.productCode
  })
  return r$visible ? React.createElement("div", {
    className: Classnames(Module_12071.wrapper, c && Module_12071.ready)
  }, React.createElement("iframe", {
    allow: "autoplay; fullscreen; clipboard-read; clipboard-write; encrypted-media; microphone; geolocation; camera",
    ref: u,
    src: v,
    style: {
      border: "none",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: c ? "block" : "none"
    },
    title: "codemao-login iframe"
  })) : null
})
export { mj }
