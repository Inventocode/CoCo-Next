"use strict";

export { callMethod } from "../../21/index";
export { getProperty } from "../../21/index";
export { onWidgetEvent } from "../../21/index";
export { setProperty } from "../../21/index";
export { ne as require };
export { ie as clearExternalModules };
export { re as requireExternalModule };
export { oe as getExternalModules };
export { ee as modules };
var r = {};
Object.defineProperty(r, "setHeader", {
  get: function () {
    return v;
  }
});
Object.defineProperty(r, "setDataSerializer", {
  get: function () {
    return b;
  }
});
Object.defineProperty(r, "setRequestTimeout", {
  get: function () {
    return y;
  }
});
Object.defineProperty(r, "getCookieString", {
  get: function () {
    return E;
  }
});
Object.defineProperty(r, "setCookie", {
  get: function () {
    return O;
  }
});
Object.defineProperty(r, "clearCookies", {
  get: function () {
    return w;
  }
});
Object.defineProperty(r, "removeCookies", {
  get: function () {
    return C;
  }
});
Object.defineProperty(r, "post", {
  get: function () {
    return S;
  }
});
Object.defineProperty(r, "get", {
  get: function () {
    return I;
  }
});
Object.defineProperty(r, "put", {
  get: function () {
    return A;
  }
});
Object.defineProperty(r, "patch", {
  get: function () {
    return j;
  }
});
Object.defineProperty(r, "head", {
  get: function () {
    return N;
  }
});
Object.defineProperty(r, "options", {
  get: function () {
    return R;
  }
});
Object.defineProperty(r, "downloadFile", {
  get: function () {
    return k;
  }
});
Object.defineProperty(r, "uploadFile", {
  get: function () {
    return x;
  }
});
Object.defineProperty(r, "abort", {
  get: function () {
    return D;
  }
});
var o = {};
Object.defineProperty(o, "wsConnect", {
  get: function () {
    return G;
  }
});
Object.defineProperty(o, "wsSend", {
  get: function () {
    return U;
  }
});
Object.defineProperty(o, "wsClose", {
  get: function () {
    return W;
  }
});
var i = {};
Object.defineProperty(i, "isStepCountingAvailable", {
  get: function () {
    return V;
  }
});
Object.defineProperty(i, "requestPermission", {
  get: function () {
    return z;
  }
});
Object.defineProperty(i, "startStepperUpdates", {
  get: function () {
    return Y;
  }
});
Object.defineProperty(i, "stopStepperUpdates", {
  get: function () {
    return K;
  }
});
var a = require("../../31/index");
var s = (module => {
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
})(a);
var c = require("./553/index");
var l = (module => {
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
})(c);
var u = require("./780/index");
var d = require("../../51/index");
var p = (module => {
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
})(d);
var f = require("../../550/411");
var h = (module => {
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
})(f);
var m = require("../483/index");
var g = require("./392");
var _ = window.cordova && window.cordova.plugin && window.cordova.plugin.http || {};
function v(e, t, n) {
  _.setHeader(e, t, n);
}
function b(e) {
  _.setDataSerializer(e);
}
function y(e) {
  _.setRequestTimeout(e);
}
function E(e) {
  return _.getCookieString(e);
}
function O(e, t, n) {
  _.setCookie(e, t, n || {});
}
function w() {
  _.clearCookies();
}
function C(e, t) {
  _.removeCookies(e, t);
}
function T() {}
function S(e, t, n, r, o) {
  return _.post(e, t, n, r || T, o || T);
}
function I(e, t, n, r, o) {
  return _.get(e, t || {}, n || {}, r || T, o || T);
}
function A(e, t, n, r, o) {
  return _.put(e, t, n, r || T, o || T);
}
function j(e, t, n, r, o) {
  return _.patch(e, t, n, r || T, o || T);
}
function N(e, t, n, r, o) {
  return _.head(e, t, n, r || T, o || T);
}
function R(e, t, n, r, o) {
  return _.options(e, t, n, r || T, o || T);
}
function k(e, t, n, r, o, i) {
  return _.downloadFile(e, t, n, r, o || T, i || T);
}
function x(e, t, n, r, o, i, a) {
  return _.uploadFile(e, t, n, r, o, i || T, a || T);
}
function D(e) {
  return _.abort(e);
}
var M = require("../../206/29/index");
if (!Object(M.d)()) {
  var L = {};
  var P = function (e) {
    var t = L[e];
    t.onmessage = void 0;
    t.onclose = void 0;
    L[e] = void 0;
  };
  var B = {
    wsConnect: function (e, t, n, r) {
      var o;
      var i = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      var a = new WebSocket(e.url);
      if (e.timeout && e.timeout > 0) {
        o = setTimeout(function () {
          a.close();
        }, e.timeout);
      }
      a.onopen = function () {
        if (o) {
          clearTimeout(o);
        }
        L[i] = a;
        (function (e, t, n) {
          var r = L[e];
          r.onmessage = function (n) {
            t({
              webSocketId: e,
              message: n.data,
              callbackMethod: "onMessage"
            });
          };
          r.onclose = function (t) {
            n({
              webSocketId: e,
              code: t.code,
              reason: t.reason,
              callbackMethod: "onClose"
            });
            P(e);
          };
        })(i, t, t);
        n({
          webSocketId: i,
          code: 0
        });
      };
      a.onerror = function () {
        r({
          webSocketId: i,
          code: 1006,
          reason: "Error connecting to " + e.url,
          callbackMethod: "onFail"
        });
      };
    },
    wsSend: function (e, t) {
      var n = L[e];
      if (n) {
        n.send(t);
      }
    },
    wsClose: function (e, t, n) {
      var r = L[e];
      if (r) {
        r.close(t, n);
        P(e);
      }
    }
  };
  window.CordovaWebsocketPlugin = B;
}
var F = require("../../15/index");
function G(e, t, n, r) {
  var o;
  if (!((null === (o = e.url) || void 0 === o ? void 0 : o.includes("codemao.cn")) || Object(F.O)(e.url || ""))) {
    window.CordovaWebsocketPlugin.wsConnect(e, function (e) {
      t(e);
    }, function (e) {
      n(e);
    }, function (e) {
      r(e);
    });
  }
}
function U(e, t) {
  window.CordovaWebsocketPlugin.wsSend(e, t);
}
function W(e, t, n) {
  t = t || 1e3;
  n = n || "bye";
  window.CordovaWebsocketPlugin.wsClose(e, t, n);
}
var H = require("./344");
function V() {
  return new Promise(function (e) {
    window.stepper.isStepCountingAvailable().then(function (t) {
      if (t) {
        console.log("isStepCountingAvailable Available !");
        e(!0);
      } else {
        console.log("isStepCountingAvailable Not available :-S");
        e(!1);
      }
    }).catch(function (t) {
      console.error("isStepCountingAvailable error", t);
      e(!1);
    });
  });
}
function z() {
  return new Promise(function (e) {
    window.stepper.requestPermission().then(function (t) {
      if (t) {
        console.log("requestPermission Authorized !");
        e(!0);
      } else {
        console.log("requestPermission Denied :-S");
        e(!1);
      }
    }).catch(function (t) {
      console.error("requestPermission error", t);
      e(!1);
    });
  });
}
function Y(e, t, n) {
  window.stepper.startStepperUpdates(e, t, n, {});
}
function K() {
  window.stepper.stopStepperUpdates();
}
var q = require("../../186/index");
var X = (module => {
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
})(q).a.create();
X.interceptors.request.use(function (e) {
  var t = e.url || "";
  if (e.baseURL) {
    t = e.baseURL + t.slice(1);
  }
  return Object(F.Y)(t) ? e : Promise.reject(new Error("auth failed"));
}, function (e) {
  return Promise.reject(e);
});
var Q = X;
var Z = require("../../21/index");
var J = require("./114");
var $ = {
  isNative: M.d,
  getWidgetImageUrl: J.b
};
var ee = new Map();
var te = {
  "crypto-js": {
    url: "https://static.codemao.cn/appcraft/modules/crypto-js/4.1.1/crypto-js.js",
    ref: "CryptoJS"
  }
};
function ne(e) {
  if (te[e]) {
    var t = te[e].ref;
    return window[t];
  }
  switch (e) {
    case "http":
      return r;
    case "lodash":
      return s.a;
    case "qrcode":
      return l.a;
    case "pedometer":
      return g;
    case "websocket":
      return o;
    case "brightness":
      return H;
    case "stepper":
      return i;
    case "axios":
      return Q;
    case "utils":
      return $;
    case "vika":
      return u.Vika;
    case "antd-mobile":
      return m;
    case "color":
      return p.a;
    case "html2canvas":
      return h.a;
    default:
      return {};
  }
}
function re(e) {
  if (te[e]) {
    var t = te[e].url;
    ee.set(e, t);
  }
}
function oe() {
  return Array.from(ee.values());
}
function ie() {
  ee.clear();
}