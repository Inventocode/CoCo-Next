"use strict";

import * as r from "react";
import i from "react";
import "../../../shared/1531/2584/710/index";
import * as o from "../../../shared/1531/2584/75/index";
import a from "../../../shared/1531/2584/75/index";
import * as s from "../../../shared/1531/2584/28/index";
import * as u from "../../../shared/1531/2584/15";
import * as c from "../../../shared/1531/2584/68";
import * as l from "../../../shared/1531/2584/1/index";
import d from "../../../shared/1531/2584/1/index";
import * as f from "../../../shared/1531/2584/6";
import * as h from "../../../shared/1531/2584/7";
import * as p from "../../../shared/1531/2584/10/index";
import * as m from "../../../shared/1531/2584/8";
import b from "../../../shared/1531/2584/8";
import * as g from "./511/index";
import * as v from "../../../shared/1531/2584/177";
import * as _ from "../../../shared/1531/2584/729/index";
function y() {
  window.parent.postMessage({
    type: "ON_INIT_SUCCESS"
  }, "*");
}
function w() {
  window.parent.postMessage({
    type: "ON_LOAD_SUCCESS",
    payload: {
      keyboard_staus: "none"
    }
  }, "*");
}
function E() {
  window.parent.postMessage({
    type: "ON_LOAD_FAIL"
  }, "*");
}
function O() {
  window.parent.postMessage({
    type: "ON_PLAYER_START"
  }, "*");
}
function T(t) {
  window.addEventListener("message", function (e) {
    if ("RESET_PLAYER" === e.data.type) {
      t();
    }
  });
}
import * as A from "../../../shared/1531/2584/13/index";
import * as S from "./1020";
import I from "./1020";
import * as C from "../../../shared/1531/2584/289";
import * as j from "./527";
import M from "./527";
function k(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")");
}
var R = i.memo(function () {
  var t = Object(r.useState)();
  var e = Object(p.a)(t, 2);
  var n = e[0];
  var o = e[1];
  var a = Object(r.useState)(1);
  var s = Object(p.a)(a, 2);
  var u = s[0];
  var l = s[1];
  var m = Object(r.useState)(!1);
  var S = Object(p.a)(m, 2);
  var j = S[0];
  var R = S[1];
  var N = Object(r.useState)(!1);
  var x = Object(p.a)(N, 2);
  var D = x[0];
  var L = x[1];
  var B = Object(r.useState)(!0);
  var P = Object(p.a)(B, 2);
  var U = P[0];
  var F = P[1];
  var W = Object(r.useState)("");
  var H = Object(p.a)(W, 2);
  var V = H[0];
  var G = H[1];
  var z = Object(r.useRef)();
  var Y = Object(r.useRef)();
  var K = Object(r.useRef)();
  function X() {
    return (X = Object(h.a)(d.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      return d.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || void 0 === e ? void 0 : e[1])) {
                t.next = 22;
                break;
              }
              t.next = 4;
              return Object(v.g)(n);
            case 4:
              r = t.sent.data.bcmc_url;
              Object(C.a)(r);
              t.next = 8;
              return fetch(r);
            case 8:
              i = t.sent;
              t.next = 11;
              return i.json();
            case 11:
              o = t.sent;
              t.next = 14;
              return Object(C.b)();
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19;
                break;
              }
              t.next = 18;
              return Object(C.c)(o);
            case 18:
              o = t.sent;
            case 19:
              K.current = o;
              t.next = 23;
              break;
            case 22:
              E();
            case 23:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))).apply(this, arguments);
  }
  Object(r.useEffect)(function () {
    y();
    (function () {
      X.apply(this, arguments);
    })();
    T(function () {
      window.location.reload();
    });
    document.body.click();
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        G(t.data.payload);
        F(!1);
        var e = document.getElementById("editor-iframe");
        if (e) {
          document.body.removeChild(e);
        }
      }
    }, !1);
  }, []);
  Object(r.useEffect)(function () {
    if (!U && K.current) {
      if (K.current.blockCode) {
        K.current.blockCode = V;
      }
      o(Object(f.a)(Object(f.a)({}, K.current), {}, {
        shouldOpenEmulator: !0
      }));
      w();
      O();
    }
  }, [V, U]);
  Object(r.useEffect)(function () {
    function t() {
      var t = window.innerWidth;
      l(t > 1366 ? 1 : t > 992 ? .9 : t > 700 ? .83 : .57);
    }
    t();
    window.onresize = t;
  }, []);
  var q = function (t) {
    var e = t.data;
    if (e.type === c.b.DEVICE_VIBRATE) {
      var n = Date.now() + e.data.duration;
      if (Y.current && Y.current >= n) {
        return;
      }
      R(!0);
      window.clearTimeout(z.current);
      z.current = window.setTimeout(function () {
        return R(!1);
      }, e.data.duration);
      return void (Y.current = n);
    }
    if (e.type === c.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(z.current);
      Y.current = 0;
      R(!1);
    } else {
      if (e.type === c.b.EMULATOR && "string" === typeof e.data.visiblePanel) {
        L(!!e.data.visiblePanel);
      }
    }
  };
  Object(r.useEffect)(function () {
    window.addEventListener("message", q);
    return function () {
      window.removeEventListener("message", q);
    };
  }, []);
  return i.createElement("div", {
    className: M.community
  }, i.createElement("div", {
    id: "webPlayer",
    className: b(M.main),
    style: {
      transform: k(u),
      left: D ? "35%" : "50%"
    }
  }, i.createElement("div", {
    className: b(j && M.vibrate, M.playerWrapper)
  }, n && i.createElement(g.a, n)), i.createElement("div", {
    className: b(j && M.vibrate, M.deviceFrame)
  }), i.createElement("div", {
    className: M.emulatorWrapper
  }, i.createElement(_.a, {
    messageWindow: window
  }))), i.createElement("div", {
    className: M.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank");
    }
  }, i.createElement("img", {
    src: I,
    className: M.appUrlBtnImg,
    alt: ""
  }), i.createElement("span", null, "去CoCo制作"), i.createElement(A.j, {
    type: "icon-fold-left",
    className: M.appUrlBtnIcon
  })));
});
import * as N from "./528";
import x from "./528";
function D(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")");
}
var L = i.memo(function () {
  var t = Object(r.useState)();
  var e = Object(p.a)(t, 2);
  var n = e[0];
  var o = e[1];
  var a = Object(r.useState)(1);
  var s = Object(p.a)(a, 2);
  var l = s[0];
  var m = s[1];
  var y = Object(r.useState)(!1);
  var w = Object(p.a)(y, 2);
  var E = w[0];
  var O = w[1];
  var T = Object(r.useState)(!1);
  var S = Object(p.a)(T, 2);
  var j = S[0];
  var M = S[1];
  var k = Object(r.useState)(!0);
  var R = Object(p.a)(k, 2);
  var N = R[0];
  var L = R[1];
  var B = Object(r.useState)("");
  var P = Object(p.a)(B, 2);
  var U = P[0];
  var F = P[1];
  var W = Object(r.useRef)();
  var H = Object(r.useRef)();
  var V = Object(r.useRef)();
  function G() {
    return (G = Object(h.a)(d.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      return d.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || void 0 === e ? void 0 : e[1], (r = Object(u.N)(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 22;
                break;
              }
              t.next = 6;
              return Object(v.g)(n, 0);
            case 6:
              i = t.sent.data.bcmc_url;
              Object(C.a)(i);
              t.next = 10;
              return fetch(i);
            case 10:
              o = t.sent;
              t.next = 13;
              return o.json();
            case 13:
              a = t.sent;
              t.next = 16;
              return Object(C.b)();
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21;
                break;
              }
              t.next = 20;
              return Object(C.c)(a);
            case 20:
              a = t.sent;
            case 21:
              V.current = a;
            case 22:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))).apply(this, arguments);
  }
  var z = function (t) {
    var e = t.data;
    if (e.type === c.b.DEVICE_VIBRATE) {
      var n = Date.now() + e.data.duration;
      if (H.current && H.current >= n) {
        return;
      }
      O(!0);
      window.clearTimeout(W.current);
      W.current = window.setTimeout(function () {
        return O(!1);
      }, e.data.duration);
      return void (H.current = n);
    }
    if (e.type === c.b.DEVICE_NOT_VIBRATE) {
      window.clearTimeout(W.current);
      H.current = 0;
      O(!1);
    } else {
      if (e.type === c.b.EMULATOR && "string" === typeof e.data.visiblePanel) {
        M(!!e.data.visiblePanel);
      }
    }
  };
  Object(r.useEffect)(function () {
    !function () {
      G.apply(this, arguments);
    }();
    document.body.click();
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        F(t.data.payload);
        L(!1);
        var e = document.getElementById("editor-iframe");
        if (e) {
          document.body.removeChild(e);
        }
      }
    }, !1);
  }, []);
  Object(r.useEffect)(function () {
    if (!N && V.current) {
      if (V.current.blockCode) {
        V.current.blockCode = U;
      }
      o(Object(f.a)(Object(f.a)({}, V.current), {}, {
        shouldOpenEmulator: !0
      }));
    }
  }, [U, N]);
  Object(r.useEffect)(function () {
    window.addEventListener("message", z);
    return function () {
      window.removeEventListener("message", z);
    };
  }, []);
  Object(r.useEffect)(function () {
    function t() {
      var t = window.innerWidth;
      m(t > 1366 ? 1 : t > 992 ? .9 : t > 700 ? .83 : .57);
    }
    t();
    window.onresize = t;
  }, []);
  return i.createElement("div", {
    className: x.community
  }, i.createElement("div", {
    id: "webPlayer",
    className: b(x.main),
    style: {
      transform: D(l),
      left: j ? "35%" : "50%"
    }
  }, i.createElement("div", {
    className: b(E && x.vibrate, x.playerWrapper)
  }, n && i.createElement(g.a, n)), i.createElement("div", {
    className: b(E && x.vibrate, x.deviceFrame)
  }), i.createElement("div", {
    className: x.emulatorWrapper
  }, i.createElement(_.a, {
    messageWindow: window
  }))), i.createElement("div", {
    className: x.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank");
    }
  }, i.createElement("img", {
    src: I,
    className: x.appUrlBtnImg,
    alt: ""
  }), i.createElement("span", null, "去CoCo制作"), i.createElement(A.j, {
    type: "icon-fold-left",
    className: x.appUrlBtnIcon
  })));
});
import "../../../shared/1531/2584/1160";
var B = function (t) {
  var e = t.channel;
  return i.createElement(i.Fragment, null, function () {
    switch (e) {
      case c.a.H5:
        return i.createElement(L, null);
      default:
        return i.createElement(R, null);
    }
  }());
};
import * as P from "./1182";
import U from "./1182";
var F = i.memo(function () {
  var t = Object(r.useState)();
  var e = Object(p.a)(t, 2);
  var n = e[0];
  var o = e[1];
  var a = Object(r.useState)(!0);
  var s = Object(p.a)(a, 2);
  var u = s[0];
  var c = s[1];
  var l = Object(r.useState)("");
  var m = Object(p.a)(l, 2);
  var b = m[0];
  var _ = m[1];
  var A = Object(r.useRef)();
  function S() {
    return I.apply(this, arguments);
  }
  function I() {
    return (I = Object(h.a)(d.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      return d.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (!(n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || void 0 === e ? void 0 : e[1])) {
                t.next = 22;
                break;
              }
              t.next = 4;
              return Object(v.g)(n, 1);
            case 4:
              r = t.sent.data.bcmc_url;
              Object(C.a)(r);
              t.next = 8;
              return fetch(r);
            case 8:
              i = t.sent;
              t.next = 11;
              return i.json();
            case 11:
              o = t.sent;
              t.next = 14;
              return Object(C.b)();
            case 14:
              if (t.sent.includes(Number(n))) {
                t.next = 19;
                break;
              }
              t.next = 18;
              return Object(C.c)(o);
            case 18:
              o = t.sent;
            case 19:
              A.current = o;
              t.next = 23;
              break;
            case 22:
              E();
            case 23:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))).apply(this, arguments);
  }
  Object(r.useEffect)(function () {
    y();
    S();
    T(S);
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        _(t.data.payload);
        c(!1);
        var e = document.getElementById("editor-iframe");
        if (e) {
          document.body.removeChild(e);
        }
      }
    }, !1);
  }, []);
  Object(r.useEffect)(function () {
    if (!u && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = b;
      }
      o(Object(f.a)({}, A.current));
      w();
      O();
    }
  }, [b, u]);
  return n ? i.createElement("div", {
    className: U.community
  }, i.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: U.camera
  }), i.createElement(g.a, n)) : i.createElement(i.Fragment, null);
});
import * as W from "../../../shared/1531/2584/41";
import * as H from "../../../shared/1531/2584/59/index";
function V() {
  var t = Object(H.b)();
  var e = "https://".concat({
    development: "backend-dev",
    test: "backend-test",
    staging: "staging-api",
    production: "api"
  }[t] || "api", ".codemao.cn/tiger/wechat/config/js_sdk");
  var n = {
    url: window.location.href
  };
  return W.a.post(e, n).then(function () {
    var t = Object(h.a)(d.mark(function t(e) {
      return d.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (200 !== e.status) {
                t.next = 4;
                break;
              }
              return t.abrupt("return", Promise.resolve(e.data));
            case 4:
              return t.abrupt("return", Promise.reject("error"));
            case 5:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }()).catch(function (t) {
    return Promise.reject(t);
  });
}
import * as G from "../../../shared/1531/2584/327";
import * as z from "./1041";
import Y from "./1041";
function K(t, e, n) {
  return X.apply(this, arguments);
}
function X() {
  return (X = Object(h.a)(d.mark(function t(e, n, r) {
    var i;
    var o;
    var a;
    var s;
    var c;
    return d.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2;
            return Object(u.cb)("https://res2.wx.qq.com/open/js/jweixin-1.6.0.js");
          case 2:
            i = window.wx;
            t.prev = 3;
            t.next = 6;
            return V();
          case 6:
            o = t.sent;
            i.config({
              debug: !1,
              appId: o.appId,
              timestamp: o.timestamp,
              nonceStr: o.nonceStr,
              signature: o.signature,
              jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZon"]
            });
            t.next = 13;
            break;
          case 10:
            t.prev = 10;
            t.t0 = t.catch(3);
            console.error("getWeixinInfo error", t.t0);
          case 13:
            a = Object(u.N)(window.location.href);
            s = a.title || e;
            c = a.desc || n;
            i.ready(function () {
              i.onMenuShareAppMessage({
                title: s,
                desc: c,
                link: window.location.href,
                imgUrl: r
              });
              i.onMenuShareTimeline({
                title: c,
                link: window.location.href,
                imgUrl: r
              });
            });
          case 17:
          case "end":
            return t.stop();
        }
      }
    }, t, null, [[3, 10]]);
  }))).apply(this, arguments);
}
var q = i.memo(function () {
  var t = Object(r.useState)();
  var e = Object(p.a)(t, 2);
  var n = e[0];
  var o = e[1];
  var a = Object(r.useState)(!0);
  var s = Object(p.a)(a, 2);
  var c = s[0];
  var l = s[1];
  var m = Object(r.useState)(!0);
  var b = Object(p.a)(m, 2);
  var _ = b[0];
  var y = b[1];
  var w = Object(r.useState)("");
  var E = Object(p.a)(w, 2);
  var O = E[0];
  var T = E[1];
  var A = Object(r.useRef)();
  function S() {
    return (S = Object(h.a)(d.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var c;
      var f;
      return d.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              if (n = null === (e = window.location.pathname.match(/\/player\/([^/]*)/)) || void 0 === e ? void 0 : e[1], (r = Object(u.N)(window.location.href)).workId && (n = r.workId), !n) {
                t.next = 30;
                break;
              }
              t.next = 6;
              return Object(v.g)(n, 0);
            case 6:
              i = t.sent.data.bcmc_url;
              Object(C.a)(i);
              t.next = 10;
              return fetch(i);
            case 10:
              o = t.sent;
              t.next = 13;
              return o.json();
            case 13:
              a = t.sent;
              t.next = 16;
              return Object(C.b)();
            case 16:
              if (t.sent.includes(Number(n))) {
                t.next = 21;
                break;
              }
              t.next = 20;
              return Object(C.c)(a);
            case 20:
              a = t.sent;
            case 21:
              if (A.current = a, s = a.title || "CoCo", c = a.description || G.c, f = a.coverUrl || "", document.title || (document.title = s), !navigator.userAgent.toLowerCase().includes("micromessenger")) {
                t.next = 29;
                break;
              }
              t.next = 29;
              return K(s, c, f);
            case 29:
              l(!1);
            case 30:
            case "end":
              return t.stop();
          }
        }
      }, t);
    }))).apply(this, arguments);
  }
  Object(r.useEffect)(function () {
    !function () {
      S.apply(this, arguments);
    }();
    window.addEventListener("message", function (t) {
      if ("PLAYER_BLOCK_CODE" === t.data.type) {
        T(t.data.payload);
        y(!1);
        var e = document.getElementById("editor-iframe");
        if (e) {
          document.body.removeChild(e);
        }
      }
    }, !1);
  }, []);
  Object(r.useEffect)(function () {
    if (!_ && A.current) {
      if (A.current.blockCode) {
        A.current.blockCode = O;
      }
      o(Object(f.a)({}, A.current));
    }
  }, [O, _]);
  return n ? i.createElement("div", {
    className: Y.community
  }, c && i.createElement("img", {
    src: "https://static.codemao.cn/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif",
    alt: "loading",
    className: Y.loading
  }), i.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: Y.camera
  }), i.createElement(g.a, n)) : i.createElement(i.Fragment, null);
});
var Z = function (t) {
  var e = t.channel;
  return i.createElement(i.Fragment, null, function () {
    switch (e) {
      case c.a.H5:
        return i.createElement(q, null);
      default:
        return i.createElement(F, null);
    }
  }());
};
var J = i.memo(function () {
  var t = (Object(u.N)(window.location.href).channel || "").toUpperCase();
  window.history.pushState = function () {};
  window.history.replaceState = function () {};
  return Object(s.f)() ? i.createElement(Z, {
    channel: t
  }) : i.createElement(B, {
    channel: t
  });
});
a.render(i.createElement(J, null), document.getElementById("root"));