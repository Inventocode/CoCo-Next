/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：544
 */

"use strict"

import /* [auto-meaningful-name] */$$_11 = require("../11")
import /* [auto-meaningful-name] */$$_10_index = require("../10/index")
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var a = function __importDefault(module) {
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
import s = require("../7")
import /* [auto-meaningful-name] */$$_27 = require("../27")
import /* [auto-meaningful-name] */React = require("react")
var u = function __importDefault(module) {
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
}(React)
import d = require("../8")
var p = function __importDefault(module) {
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
}(d)
import f = require("../5")
import /* [auto-meaningful-name] */$$_90 = require("../90")
import /* [auto-meaningful-name] */$$_263 = require("../263")
import /* [auto-meaningful-name] */$$_13_index = require("../13/index")
import /* [auto-meaningful-name] */$$_76 = require("../76")
import /* [auto-meaningful-name] */$$_28_index = require("../28/index")
import /* [auto-meaningful-name] */$_666 = require("./666")
var y = function __importDefault(module) {
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
}($_666)
import /* [auto-meaningful-name] */$$_53 = require("../53")
import /* [auto-meaningful-name] */$_667 = require("./667")
import /* [auto-meaningful-name] */$_176 = require("./176")
var C = function __importDefault(module) {
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
}($_176)
var T = new function e() {
  var t = this
  $$_27.a(this, e)
  this.urlStore = undefined
  this._state = undefined
  this.execute = function () {
    var e = s.a(a.a.mark(function e(n, r) {
      var o
      return a.a.wrap(function (e) {
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
    h = u.a.createElement("div", {
      className: C.a.fail
    }, u.a.createElement("img", {
      className: C.a.image,
      src: y.a,
      alt: "failed"
    }), u.a.createElement("p", {
      className: C.a.title
    }, "加载失败"), d && u.a.createElement("span", {
      className: C.a.label
    }, "你输入的网址有错误，请输入正确的网址"), !d && f && u.a.createElement("span", {
      className: C.a.label
    }, "你输入的网址做了限制无法打开，可在手机端正常打开"), !d && !f && "error" === w && u.a.createElement("span", {
      className: C.a.label
    }, "请检查是否输入正确的网址，", u.a.createElement("br", null), "如果网址正确，请尝试在手机端打开"), !d && !f && "http-protocol-error" === w && u.a.createElement("span", {
      className: C.a.label
    }, "由于浏览器安全策略，http://开头的网址无法在浏览器预览，可在手机端正常打开"), p && u.a.createElement("span", {
      className: C.a.label
    }, "你输入的网址无法打开"))
  } else {
    if ("loading" === w) {
      h = u.a.createElement("div", {
        className: C.a.loaderBox
      }, u.a.createElement("div", {
        className: C.a.loader
      }))
    }
  }
  return u.a.createElement(u.a.Fragment, null, h, !g && !d && !p && "none" === w && u.a.createElement("iframe", {
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
  return u.a.createElement("div", {
    className: C.a.placeholderPoster
  }, u.a.createElement("div", {
    className: C.a.header
  }, u.a.createElement($$_13_index.j, {
    type: "icon-net"
  }), u.a.createElement("span", null, "www.codemao.cn")), u.a.createElement("div", {
    className: C.a.main
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
  return u.a.createElement("div", {
    id: t,
    "data-role": f.M,
    "data-widget-type": f.C,
    "data-min-width": $$_263.c,
    "data-max-width": $$_76.e,
    "data-max-height": $$_76.d,
    "data-min-height": $$_263.b,
    className: p()(C.a.webViewWidget, $$_90.b, $$_11.a({}, C.a.hide, !e$visible)),
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
  }, (e$isEditState || e$attributes$disabled) && u.a.createElement("div", {
    className: C.a.mask
  }), e$attributes$url ? u.a.createElement(S, e) : u.a.createElement(I, null))
}
export { _a as a }
export default _a
