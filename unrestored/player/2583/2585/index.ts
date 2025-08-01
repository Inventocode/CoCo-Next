"use strict";

var r = require("../../../shared/1531/2584/0/index");
var i = function __importDefault(module) {
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
}(r);
require("../../../shared/1531/2584/710");
var o = require("../../../shared/1531/2584/75/index");
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
}(o);
var s = require("../../../shared/1531/2584/28/index");
var u = require("../../../shared/1531/2584/15/index");
var c = require("../../../shared/1531/2584/68");
var l = require("../../../shared/1531/2584/1/index");
var d = function __importDefault(module) {
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
var f = require("../../../shared/1531/2584/6");
var h = require("../../../shared/1531/2584/7");
var p = require("../../../shared/1531/2584/10/index");
var m = require("../../../shared/1531/2584/8");
var b = function __importDefault(module) {
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
}(m);
var g = require("./511/index");
var v = require("../../../shared/1531/2584/177");
var _ = require("../../../shared/1531/2584/729/index");
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
var A = require("../../../shared/1531/2584/13/index");
var S = require("./1020");
var I = function __importDefault(module) {
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
}(S);
var C = require("../../../shared/1531/2584/289");
var j = require("./527");
var M = function __importDefault(module) {
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
}(j);
function k(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")");
}
var R = i.a.memo(function () {
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
    return (X = Object(h.a)(d.a.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      return d.a.wrap(function (t) {
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
  return i.a.createElement("div", {
    className: M.a.community
  }, i.a.createElement("div", {
    id: "webPlayer",
    className: b()(M.a.main),
    style: {
      transform: k(u),
      left: D ? "35%" : "50%"
    }
  }, i.a.createElement("div", {
    className: b()(j && M.a.vibrate, M.a.playerWrapper)
  }, n && i.a.createElement(g.a, n)), i.a.createElement("div", {
    className: b()(j && M.a.vibrate, M.a.deviceFrame)
  }), i.a.createElement("div", {
    className: M.a.emulatorWrapper
  }, i.a.createElement(_.a, {
    messageWindow: window
  }))), i.a.createElement("div", {
    className: M.a.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank");
    }
  }, i.a.createElement("img", {
    src: I.a,
    className: M.a.appUrlBtnImg,
    alt: ""
  }), i.a.createElement("span", null, "\u53bbCoCo\u5236\u4f5c"), i.a.createElement(A.j, {
    type: "icon-fold-left",
    className: M.a.appUrlBtnIcon
  })));
});
var N = require("./528");
var x = function __importDefault(module) {
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
}(N);
function D(t) {
  return "translate(-50%, -50%) " + "scale(".concat(t, ")");
}
var L = i.a.memo(function () {
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
    return (G = Object(h.a)(d.a.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      return d.a.wrap(function (t) {
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
  return i.a.createElement("div", {
    className: x.a.community
  }, i.a.createElement("div", {
    id: "webPlayer",
    className: b()(x.a.main),
    style: {
      transform: D(l),
      left: j ? "35%" : "50%"
    }
  }, i.a.createElement("div", {
    className: b()(E && x.a.vibrate, x.a.playerWrapper)
  }, n && i.a.createElement(g.a, n)), i.a.createElement("div", {
    className: b()(E && x.a.vibrate, x.a.deviceFrame)
  }), i.a.createElement("div", {
    className: x.a.emulatorWrapper
  }, i.a.createElement(_.a, {
    messageWindow: window
  }))), i.a.createElement("div", {
    className: x.a.appUrlBtn,
    onClick: function () {
      window.open(window.location.origin.replace(/\d+/g, ""), "_blank");
    }
  }, i.a.createElement("img", {
    src: I.a,
    className: x.a.appUrlBtnImg,
    alt: ""
  }), i.a.createElement("span", null, "\u53bbCoCo\u5236\u4f5c"), i.a.createElement(A.j, {
    type: "icon-fold-left",
    className: x.a.appUrlBtnIcon
  })));
});
require("../../../shared/1531/2584/1160");
var B = function (t) {
  var e = t.channel;
  return i.a.createElement(i.a.Fragment, null, function () {
    switch (e) {
      case c.a.H5:
        return i.a.createElement(L, null);
      default:
        return i.a.createElement(R, null);
    }
  }());
};
var P = require("./1182");
var U = function __importDefault(module) {
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
}(P);
var F = i.a.memo(function () {
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
    return (I = Object(h.a)(d.a.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      return d.a.wrap(function (t) {
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
  return n ? i.a.createElement("div", {
    className: U.a.community
  }, i.a.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: U.a.camera
  }), i.a.createElement(g.a, n)) : i.a.createElement(i.a.Fragment, null);
});
var W = require("../../../shared/1531/2584/41");
var H = require("../../../shared/1531/2584/59/index");
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
    var t = Object(h.a)(d.a.mark(function t(e) {
      return d.a.wrap(function (t) {
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
var G = require("../../../shared/1531/2584/327");
var z = require("./1041");
var Y = function __importDefault(module) {
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
}(z);
function K(t, e, n) {
  return X.apply(this, arguments);
}
function X() {
  return (X = Object(h.a)(d.a.mark(function t(e, n, r) {
    var i;
    var o;
    var a;
    var s;
    var c;
    return d.a.wrap(function (t) {
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
var q = i.a.memo(function () {
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
    return (S = Object(h.a)(d.a.mark(function t() {
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var c;
      var f;
      return d.a.wrap(function (t) {
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
  return n ? i.a.createElement("div", {
    className: Y.a.community
  }, c && i.a.createElement("img", {
    src: "https://static.codemao.cn/crc-uploader/2021/12/35f947eec3186875243a6ffb6efd5cf5.gif",
    alt: "loading",
    className: Y.a.loading
  }), i.a.createElement("input", {
    type: "file",
    accept: "image/*",
    capture: "camera",
    id: "appcraft-camera-input",
    className: Y.a.camera
  }), i.a.createElement(g.a, n)) : i.a.createElement(i.a.Fragment, null);
});
var Z = function (t) {
  var e = t.channel;
  return i.a.createElement(i.a.Fragment, null, function () {
    switch (e) {
      case c.a.H5:
        return i.a.createElement(q, null);
      default:
        return i.a.createElement(F, null);
    }
  }());
};
var J = i.a.memo(function () {
  var t = (Object(u.N)(window.location.href).channel || "").toUpperCase();
  window.history.pushState = function () {};
  window.history.replaceState = function () {};
  return Object(s.f)() ? i.a.createElement(Z, {
    channel: t
  }) : i.a.createElement(B, {
    channel: t
  });
});
a.a.render(i.a.createElement(J, null), document.getElementById("root"));