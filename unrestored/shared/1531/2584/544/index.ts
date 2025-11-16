/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：544
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_11 from "../11"
import * as /* [auto-meaningful-name] */$$_10_index from "../10/index"
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as s from "../7"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */React from "react"
import /* [auto-meaningful-name] */_React from "react"
import * as d from "../8"
import p from "../8"
import * as f from "../5"
import * as /* [auto-meaningful-name] */$$_90 from "../90"
import * as /* [auto-meaningful-name] */$$_263 from "../263"
import * as /* [auto-meaningful-name] */$$_13_index from "../13/index"
import * as /* [auto-meaningful-name] */$$_76 from "../76"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
import * as /* [auto-meaningful-name] */$_666 from "./666"
import /* [auto-meaningful-name] */_$_ from "./666"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$_667 from "./667"
import * as /* [auto-meaningful-name] */$_176 from "./176"
import /* [auto-meaningful-name] */_$_2 from "./176"
var T = new function e() {
  var t = this
  $$_27.a(this, e)
  this.urlStore = undefined
  this._state = undefined
  this.execute = function () {
    var e = s.a(_RegeneratorRuntime.mark(function e(n, r) {
      var o
      return _RegeneratorRuntime.wrap(function (e) {
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
              if (!A(o = t.urlStore.shift() || "")) {
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
    f = $_667.webviewRefusedUrl.some(function (e) {
      return e$attributes$url.startsWith(e)
    })
  }
  var h
  var m = e$attributes$url
  var g = m.startsWith("http://") && !$$_28_index.d()
  var _ = React.useState("loading")
  var b = $$_10_index.a(_, 2)
  var w = b[0]
  var S = b[1]
  var I = React.useRef(null)
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
    h = _React.createElement("div", {
      className: _$_2.fail
    }, _React.createElement("img", {
      className: _$_2.image,
      src: _$_,
      alt: "failed"
    }), _React.createElement("p", {
      className: _$_2.title
    }, "加载失败"), d && _React.createElement("span", {
      className: _$_2.label
    }, "你输入的网址有错误，请输入正确的网址"), !d && f && _React.createElement("span", {
      className: _$_2.label
    }, "你输入的网址做了限制无法打开，可在手机端正常打开"), !d && !f && "error" === w && _React.createElement("span", {
      className: _$_2.label
    }, "请检查是否输入正确的网址，", _React.createElement("br", null), "如果网址正确，请尝试在手机端打开"), !d && !f && "http-protocol-error" === w && _React.createElement("span", {
      className: _$_2.label
    }, "由于浏览器安全策略，http://开头的网址无法在浏览器预览，可在手机端正常打开"), p && _React.createElement("span", {
      className: _$_2.label
    }, "你输入的网址无法打开"))
  } else {
    if ("loading" === w) {
      h = _React.createElement("div", {
        className: _$_2.loaderBox
      }, _React.createElement("div", {
        className: _$_2.loader
      }))
    }
  }
  return _React.createElement(_React.Fragment, null, h, !g && !d && !p && "none" === w && _React.createElement("iframe", {
    ref: I,
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
function I() {
  return _React.createElement("div", {
    className: _$_2.placeholderPoster
  }, _React.createElement("div", {
    className: _$_2.header
  }, _React.createElement($$_13_index.j, {
    type: "icon-net"
  }), _React.createElement("span", null, "www.codemao.cn")), _React.createElement("div", {
    className: _$_2.main
  }))
}
function A(e) {
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
  return _React.createElement("div", {
    id: t,
    "data-role": f.M,
    "data-widget-type": f.C,
    "data-min-width": $$_263.c,
    "data-max-width": $$_76.e,
    "data-max-height": $$_76.d,
    "data-min-height": $$_263.b,
    className: p(_$_2.webViewWidget, $$_90.b, $$_11.a({}, _$_2.hide, !e$visible)),
    style: {
      top: e$position.y,
      left: e$position.x,
      height: e$size.height,
      width: e$size.width,
      minWidth: "".concat($$_263.c, "px"),
      minHeight: "".concat($$_263.b, "px"),
      maxWidth: "".concat($$_76.e, "px"),
      maxHeight: "".concat($$_76.d, "px"),
      opacity: undefined === e$opacity ? undefined : e$opacity / 100
    }
  }, (e$isEditState || e$attributes$disabled) && _React.createElement("div", {
    className: _$_2.mask
  }), e$attributes$url ? _React.createElement(S, e) : _React.createElement(I, null))
}
export { _a as a }
export default _a
