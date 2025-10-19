/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：544
 */

"use strict";

import r = require("../11");
import o = require("../10/index");
import i = require("regenerator-runtime");
var a = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(i);
import s = require("../7");
import c = require("../27");
import l = require("react");
var u = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(l);
import d = require("../8");
var p = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(d);
import f = require("../5");
import h = require("../90");
import m = require("../263");
import g = require("../13/index");
import _ = require("../76");
import v = require("../28/index");
import b = require("./666");
var y = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(b);
import E = require("../53");
import O = require("./667");
import w = require("./176");
var C = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default;
  } : function () {
    return module;
  };
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  });
  return defaultExport;
}(w);
var T = new function e() {
  var t = this;
  c.a(this, e);
  this.urlStore = undefined;
  this._state = undefined;
  this.execute = function () {
    var e = s.a(a.a.mark(function e(n, r) {
      var o;
      return a.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (t.urlStore.push(n), "end" !== t._state) {
                e.next = 21;
                break;
              }
              t._state = "doing";
            case 3:
              if (!t.urlStore.length) {
                e.next = 20;
                break;
              }
              if (!A(o = t.urlStore.shift() || "")) {
                e.next = 17;
                break;
              }
              e.prev = 6;
              e.next = 9;
              return fetch(o, {
                mode: "no-cors",
                redirect: "manual"
              });
            case 9:
              r("success");
              e.next = 15;
              break;
            case 12:
              e.prev = 12;
              e.t0 = e.catch(6);
              r("fail");
            case 15:
              e.next = 18;
              break;
            case 17:
              r("fail");
            case 18:
              e.next = 3;
              break;
            case 20:
              t._state = "end";
            case 21:
            case "end":
              return e.stop();
          }
        }
      }, e, null, [[6, 12]]);
    }));
    return function (t, n) {
      return e.apply(this, arguments);
    };
  }();
  this.urlStore = [];
  this._state = "end";
}();
function S(e) {
  var t = e.isEditState;
  var n = e.attributes;
  var r = e.onLoad;
  var i = e.onError;
  var a = e.onLoading;
  var s = n.url;
  var c = n.refreshTimestamp;
  var d = !E.C.test(s);
  var p = v.c(s);
  var f = v.g();
  if (f) {
    f = O.webviewRefusedUrl.some(function (e) {
      return s.startsWith(e);
    });
  }
  var h;
  var m = s;
  var g = m.startsWith("http://") && !v.d();
  var _ = l.useState("loading");
  var b = o.a(_, 2);
  var w = b[0];
  var S = b[1];
  var I = l.useRef(null);
  l.useEffect(function () {
    if (g) {
      S("http-protocol-error");
    } else {
      if (!p) {
        S("loading");
        if (a) {
          a();
        }
        T.execute(m, function (e) {
          if ("success" === e) {
            S("none");
            if (r) {
              r();
            }
          } else {
            if ("fail" === e) {
              S("error");
              if (i) {
                i();
              }
            }
          }
        });
      }
    }
  }, [m, g, p]);
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
    }, "你输入的网址无法打开"));
  } else {
    if ("loading" === w) {
      h = u.a.createElement("div", {
        className: C.a.loaderBox
      }, u.a.createElement("div", {
        className: C.a.loader
      }));
    }
  }
  return u.a.createElement(u.a.Fragment, null, h, !g && !d && !p && "none" === w && u.a.createElement("iframe", {
    ref: I,
    id: "iframe",
    title: "coco",
    sandbox: "allow-scripts allow-same-origin allow-forms",
    scrolling: t ? "no" : "auto",
    src: m,
    width: "100%",
    height: "100%",
    style: {
      display: s ? "block" : "none"
    },
    key: c
  }));
}
function I() {
  return u.a.createElement("div", {
    className: C.a.placeholderPoster
  }, u.a.createElement("div", {
    className: C.a.header
  }, u.a.createElement(g.j, {
    type: "icon-net"
  }), u.a.createElement("span", null, "www.codemao.cn")), u.a.createElement("div", {
    className: C.a.main
  }));
}
function A(e) {
  return 0 === e.indexOf("http://") || 0 === e.indexOf("https://");
}
var _a;
_a = function (e) {
  var t = e.id;
  var n = e.position;
  var o = e.visible;
  var i = e.opacity;
  var a = e.size;
  var s = e.isEditState;
  var c = e.attributes;
  var l = c.url;
  var d = c.disabled;
  return u.a.createElement("div", {
    id: t,
    "data-role": f.M,
    "data-widget-type": f.C,
    "data-min-width": m.c,
    "data-max-width": _.e,
    "data-max-height": _.d,
    "data-min-height": m.b,
    className: p()(C.a.webViewWidget, h.b, r.a({}, C.a.hide, !o)),
    style: {
      top: n.y,
      left: n.x,
      height: a.height,
      width: a.width,
      minWidth: "".concat(m.c, "px"),
      minHeight: "".concat(m.b, "px"),
      maxWidth: "".concat(_.e, "px"),
      maxHeight: "".concat(_.d, "px"),
      opacity: undefined === i ? undefined : i / 100
    }
  }, (s || d) && u.a.createElement("div", {
    className: C.a.mask
  }), l ? u.a.createElement(S, e) : u.a.createElement(I, null));
};
export { _a as a };
export default _a;