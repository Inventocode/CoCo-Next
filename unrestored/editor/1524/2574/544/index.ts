"use strict";

import * as r from "../11";
import * as o from "../10/index";
import * as i from "../1/index";
import * as a from "../1/index";
import * as s from "../7";
import * as c from "../27";
import * as l from "../0/index";
import * as u from "../0/index";
import * as d from "../8";
import * as p from "../8";
import * as f from "../5";
import * as h from "../90";
import * as m from "../263";
import * as g from "../13/index";
import * as _ from "../76";
import * as v from "../206/29/index";
import * as b from "./666";
import * as y from "./666";
import * as E from "../53";
import * as O from "./667";
import * as w from "./176";
import * as C from "./176";
var T = new function e() {
  var t = this;
  Object(c.a)(this, e);
  this.urlStore = void 0;
  this._state = void 0;
  this.execute = function () {
    var e = Object(s.a)(a.a.mark(function e(n, r) {
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
  var p = Object(v.c)(s);
  var f = Object(v.g)();
  if (f) {
    f = O.webviewRefusedUrl.some(function (e) {
      return s.startsWith(e);
    });
  }
  var h;
  var m = s;
  var g = m.startsWith("http://") && !Object(v.d)();
  var _ = Object(l.useState)("loading");
  var b = Object(o.a)(_, 2);
  var w = b[0];
  var S = b[1];
  var I = Object(l.useRef)(null);
  Object(l.useEffect)(function () {
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
    }, "\u52a0\u8f7d\u5931\u8d25"), d && u.a.createElement("span", {
      className: C.a.label
    }, "\u4f60\u8f93\u5165\u7684\u7f51\u5740\u6709\u9519\u8bef\uff0c\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7f51\u5740"), !d && f && u.a.createElement("span", {
      className: C.a.label
    }, "\u4f60\u8f93\u5165\u7684\u7f51\u5740\u505a\u4e86\u9650\u5236\u65e0\u6cd5\u6253\u5f00\uff0c\u53ef\u5728\u624b\u673a\u7aef\u6b63\u5e38\u6253\u5f00"), !d && !f && "error" === w && u.a.createElement("span", {
      className: C.a.label
    }, "\u8bf7\u68c0\u67e5\u662f\u5426\u8f93\u5165\u6b63\u786e\u7684\u7f51\u5740\uff0c", u.a.createElement("br", null), "\u5982\u679c\u7f51\u5740\u6b63\u786e\uff0c\u8bf7\u5c1d\u8bd5\u5728\u624b\u673a\u7aef\u6253\u5f00"), !d && !f && "http-protocol-error" === w && u.a.createElement("span", {
      className: C.a.label
    }, "\u7531\u4e8e\u6d4f\u89c8\u5668\u5b89\u5168\u7b56\u7565\uff0chttp://\u5f00\u5934\u7684\u7f51\u5740\u65e0\u6cd5\u5728\u6d4f\u89c8\u5668\u9884\u89c8\uff0c\u53ef\u5728\u624b\u673a\u7aef\u6b63\u5e38\u6253\u5f00"), p && u.a.createElement("span", {
      className: C.a.label
    }, "\u4f60\u8f93\u5165\u7684\u7f51\u5740\u65e0\u6cd5\u6253\u5f00"));
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
exports.a = function (e) {
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
    className: p()(C.a.webViewWidget, h.b, Object(r.a)({}, C.a.hide, !o)),
    style: {
      top: n.y,
      left: n.x,
      height: a.height,
      width: a.width,
      minWidth: "".concat(m.c, "px"),
      minHeight: "".concat(m.b, "px"),
      maxWidth: "".concat(_.e, "px"),
      maxHeight: "".concat(_.d, "px"),
      opacity: void 0 === i ? void 0 : i / 100
    }
  }, (s || d) && u.a.createElement("div", {
    className: C.a.mask
  }), l ? u.a.createElement(S, e) : u.a.createElement(I, null));
};