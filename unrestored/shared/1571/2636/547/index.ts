/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：547
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as s from "../7"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import { useState, useRef, useEffect } from "react"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */React1 from "react"
import * as d from "../8"
import p from "../8"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_262 from "../262"
import * as /* [auto-meaningful-name] */$$_13_index from "../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_75 from "../75"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
import * as /* [auto-meaningful-name] */$_672 from "./672"
import /* [auto-meaningful-name] */$_6721 from "./672"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$_673 from "./673"
import * as /* [auto-meaningful-name] */$_176 from "./176"
import /* [auto-meaningful-name] */$_1761 from "./176"
var T = new function e() {
  var t = this
  $$_27.a(this, e)
  this.urlStore = undefined
  this._state = undefined
  this.execute = function () {
    var e = s.a(RegeneratorRuntime1.mark(function e(n, r) {
      var o
      return RegeneratorRuntime1.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (t.urlStore.push(n), "end" !== t._state) {
                e.next = 21
                break
              }
              t._state = "doing"
            case 3:
              if (!t.urlStore.length) {
                e.next = 20
                break
              }
              if (!I(o = t.urlStore.shift() || "")) {
                e.next = 17
                break
              }
              e.prev = 6
              e.next = 9
              return fetch(o, {
                mode: "no-cors",
                redirect: "manual"
              })
            case 9:
              r("success")
              e.next = 15
              break
            case 12:
              e.prev = 12
              e.t0 = e.catch(6)
              r("fail")
            case 15:
              e.next = 18
              break
            case 17:
              r("fail")
            case 18:
              e.next = 3
              break
            case 20:
              t._state = "end"
            case 21:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[6, 12]])
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  this.urlStore = []
  this._state = "end"
}()
function S(e) {
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$onLoad = e.onLoad
  var /* [auto-meaningful-name] */e$onError = e.onError
  var /* [auto-meaningful-name] */e$onLoading = e.onLoading
  var /* [auto-meaningful-name] */e$attributes$url = e$attributes.url
  var /* [auto-meaningful-name] */e$attributes$refreshTimestamp = e$attributes.refreshTimestamp
  var d = !$$_53.C.test(e$attributes$url)
  var p = $$_28_index.c(e$attributes$url)
  var f = $$_28_index.g()
  if (f) {
    f = $_673.webviewRefusedUrl.some(function (e) {
      return e$attributes$url.startsWith(e)
    })
  }
  var h
  var m = e$attributes$url
  var g = m.startsWith("http://") && !$$_28_index.d()
  var _ = useState("loading")
  var b = $$_10_index.a(_, 2)
  var w = b[0]
  var S = b[1]
  var A = useRef(null)
  useEffect(function () {
    if (g) {
      S("http-protocol-error")
    } else {
      if (!p) {
        S("loading")
        if (e$onLoading) {
          e$onLoading()
        }
        T.execute(m, function (e) {
          if ("success" === e) {
            S("none")
            if (e$onLoad) {
              e$onLoad()
            }
          } else {
            if ("fail" === e) {
              S("error")
              if (e$onError) {
                e$onError()
              }
            }
          }
        })
      }
    }
  }, [m, g, p])
  if ("error" === w || "http-protocol-error" === w || d || f || p) {
    h = React1.createElement("div", {
      className: $_1761.fail
    }, React1.createElement("img", {
      className: $_1761.image,
      src: $_6721,
      alt: "failed"
    }), React1.createElement("p", {
      className: $_1761.title
    }, "加载失败"), d && React1.createElement("span", {
      className: $_1761.label
    }, "你输入的网址有错误，请输入正确的网址"), !d && f && React1.createElement("span", {
      className: $_1761.label
    }, "你输入的网址做了限制无法打开，可在手机端正常打开"), !d && !f && "error" === w && React1.createElement("span", {
      className: $_1761.label
    }, "请检查是否输入正确的网址，", React1.createElement("br", null), "如果网址正确，请尝试在手机端打开"), !d && !f && "http-protocol-error" === w && React1.createElement("span", {
      className: $_1761.label
    }, "由于浏览器安全策略，http://开头的网址无法在浏览器预览，可在手机端正常打开"), p && React1.createElement("span", {
      className: $_1761.label
    }, "你输入的网址无法打开"))
  } else {
    if ("loading" === w) {
      h = React1.createElement("div", {
        className: $_1761.loaderBox
      }, React1.createElement("div", {
        className: $_1761.loader
      }))
    }
  }
  return React1.createElement(React1.Fragment, null, h, !g && !d && !p && "none" === w && React1.createElement("iframe", {
    ref: A,
    id: "iframe",
    title: "coco",
    sandbox: "allow-scripts allow-same-origin allow-forms",
    scrolling: e$isEditState ? "no" : "auto",
    src: m,
    width: "100%",
    height: "100%",
    style: {
      display: e$attributes$url ? "block" : "none"
    },
    key: e$attributes$refreshTimestamp
  }))
}
function A() {
  return React1.createElement("div", {
    className: $_1761.placeholderPoster
  }, React1.createElement("div", {
    className: $_1761.header
  }, React1.createElement($$_13_index.j, {
    type: "icon-net"
  }), React1.createElement("span", null, "www.codemao.cn")), React1.createElement("div", {
    className: $_1761.main
  }))
}
function I(e) {
  return 0 === e.indexOf("http://") || 0 === e.indexOf("https://")
}
var _a
_a = function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$position = e.position
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$opacity = e.opacity
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$isEditState = e.isEditState
  var /* [auto-meaningful-name] */e$attributes = e.attributes
  var /* [auto-meaningful-name] */e$attributes$url = e$attributes.url
  var /* [auto-meaningful-name] */e$attributes$disabled = e$attributes.disabled
  return React1.createElement("div", {
    id: t,
    "data-role": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.M,
    "data-widget-type": $$_$$_$$_$$_$$_src_editor_widget_builtIn_types.C,
    "data-min-width": $$_262.c,
    "data-max-width": $$_75.e,
    "data-max-height": $$_75.d,
    "data-min-height": $$_262.b,
    className: p($_1761.webViewWidget, $$_90.b, $$_11.a({}, $_1761.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat($$_262.c, "px"),
      minHeight: "".concat($$_262.b, "px"),
      maxWidth: "".concat($$_75.e, "px"),
      maxHeight: "".concat($$_75.d, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, (e$isEditState || e$attributes$disabled) && React1.createElement("div", {
    className: $_1761.mask
  }), e$attributes$url ? React1.createElement(S, e) : React1.createElement(A, null))
}
export { _a as a }
export default _a
