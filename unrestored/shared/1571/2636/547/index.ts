/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：547
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_111 from /* 11 */"../11"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../10/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import /* [auto-meaningful-name] */Classnames1 from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Src_editor_widget_builtIn_types from /* 5 */"../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../90"
import * as /* [auto-meaningful-name] */Module_262 from /* 262 */"../262"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../75"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../28/index"
import * as /* [auto-meaningful-name] */Module_672 from /* 672 */"./672"
import /* [auto-meaningful-name] */Module_6721 from /* 672 */"./672"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Module_673 from /* 673 */"./673"
import * as /* [auto-meaningful-name] */Module_176 from /* 176 */"./176"
import /* [auto-meaningful-name] */Module_1761 from /* 176 */"./176"
var T = new function e() {
  var t = this
  Module_27.a(this, e)
  this.urlStore = undefined
  this._state = undefined
  this.execute = function () {
    var e = Module_7.a(RegeneratorRuntime1.mark(function e(n, r) {
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
  var d = !Module_53.C.test(e$attributes$url)
  var p = Module_28.c(e$attributes$url)
  var f = Module_28.g()
  if (f) {
    f = Module_673.webviewRefusedUrl.some(function (e) {
      return e$attributes$url.startsWith(e)
    })
  }
  var h
  var m = e$attributes$url
  var g = m.startsWith("http://") && !Module_28.d()
  var _ = React.useState("loading")
  var b = Module_10.a(_, 2)
  var w = b[0]
  var S = b[1]
  var A = React.useRef(null)
  React.useEffect(function () {
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
      className: Module_1761.fail
    }, React1.createElement("img", {
      className: Module_1761.image,
      src: Module_6721,
      alt: "failed"
    }), React1.createElement("p", {
      className: Module_1761.title
    }, "加载失败"), d && React1.createElement("span", {
      className: Module_1761.label
    }, "你输入的网址有错误，请输入正确的网址"), !d && f && React1.createElement("span", {
      className: Module_1761.label
    }, "你输入的网址做了限制无法打开，可在手机端正常打开"), !d && !f && "error" === w && React1.createElement("span", {
      className: Module_1761.label
    }, "请检查是否输入正确的网址，", React1.createElement("br", null), "如果网址正确，请尝试在手机端打开"), !d && !f && "http-protocol-error" === w && React1.createElement("span", {
      className: Module_1761.label
    }, "由于浏览器安全策略，http://开头的网址无法在浏览器预览，可在手机端正常打开"), p && React1.createElement("span", {
      className: Module_1761.label
    }, "你输入的网址无法打开"))
  } else {
    if ("loading" === w) {
      h = React1.createElement("div", {
        className: Module_1761.loaderBox
      }, React1.createElement("div", {
        className: Module_1761.loader
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
    className: Module_1761.placeholderPoster
  }, React1.createElement("div", {
    className: Module_1761.header
  }, React1.createElement(Src_shared_ui_components_index.j, {
    type: "icon-net"
  }), React1.createElement("span", null, "www.codemao.cn")), React1.createElement("div", {
    className: Module_1761.main
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
    "data-role": Src_editor_widget_builtIn_types.M,
    "data-widget-type": Src_editor_widget_builtIn_types.C,
    "data-min-width": Module_262.c,
    "data-max-width": Module_75.e,
    "data-max-height": Module_75.d,
    "data-min-height": Module_262.b,
    className: Classnames1(Module_1761.webViewWidget, Module_90.b, Module_111.a({}, Module_1761.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat(Module_262.c, "px"),
      minHeight: "".concat(Module_262.b, "px"),
      maxWidth: "".concat(Module_75.e, "px"),
      maxHeight: "".concat(Module_75.d, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, (e$isEditState || e$attributes$disabled) && React1.createElement("div", {
    className: Module_1761.mask
  }), e$attributes$url ? React1.createElement(S, e) : React1.createElement(A, null))
}
export { _a as a }
export default _a
