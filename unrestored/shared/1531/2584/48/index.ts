"use strict";

export { oe as b };
export { ie as a };
import r = require("../38/66");
import o = require("../155/index");
import i = require("../38/486/index");
import a = require("../38/343");
import s = require("../11");
import c = require("../6");
import l = require("../676/70");
import u = require("./72");
function d(e, t) {
  var n = t.id;
  var r = t.key;
  var o = t.value;
  var i = e.findIndex(function (e) {
    return e.id === n;
  });
  return i > -1 ? e.update(i, function (e) {
    return c.a(c.a({}, e), {}, s.a({}, r, o));
  }) : e;
}
var p = window.localStorage.getItem("LANGUAGE") || navigator.language;
var f = o.combineReducers({
  widgetMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : r.a.Map({});
    var t = arguments.length > 1 ? arguments[1] : undefined;
    switch (t.type) {
      case u.k:
        return e.delete(t.payload.id);
      case u.j:
        return e.set(t.payload.id, t.payload.widget);
      default:
        return e;
    }
  },
  screenList: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : r.a.List([]);
    var t = arguments.length > 1 ? arguments[1] : undefined;
    switch (t.type) {
      case u.l:
        return d(e, t.payload);
      default:
        return e;
    }
  },
  variableMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : undefined;
    t.type;
    return e;
  },
  imageFileMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : undefined;
    t.type;
    return e;
  },
  soundFileMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : undefined;
    t.type;
    return e;
  },
  iconFileMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : undefined;
    t.type;
    return e;
  },
  currentScreenId: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "";
    var t = arguments.length > 1 ? arguments[1] : undefined;
    switch (t.type) {
      case u.h:
        return t.payload.navigator;
      default:
        return e;
    }
  },
  currentScreenParam: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "";
    var t = arguments.length > 1 ? arguments[1] : undefined;
    switch (t.type) {
      case u.i:
        return t.payload.param;
      default:
        return e;
    }
  },
  httpClientMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : undefined;
    t.type;
    return e;
  },
  mediaMap: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
      cameraDirection: 0
    };
    var t = arguments.length > 1 ? arguments[1] : undefined;
    switch (t.type) {
      case u.f:
        return c.a({
          state: e
        }, t.payload);
      default:
        return e;
    }
  },
  emulatorPhoneInfo: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {
      dialPageVisible: false,
      callingPageVisible: false,
      contactPageVisible: false,
      sendSmsPageVisible: false,
      receiveSmsPageVisible: false,
      phoneDialWidgetId: "",
      contactWidgetId: "",
      smsWidgetId: "",
      phoneNumber: "",
      callType: "",
      callStatus: l.b.IDEL,
      sendSmsNumber: "",
      sendSmsContent: "",
      receiveSmsNumber: "",
      receiveSmsContent: ""
    };
    var t = arguments.length > 1 ? arguments[1] : undefined;
    switch (t.type) {
      case u.g:
        return c.a(c.a({}, e), t.payload);
      default:
        return e;
    }
  },
  language: function () {
    var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : p;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    t.type;
    return e;
  }
});
import h = require("regenerator-runtime");
var m = function __importDefault(module) {
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
}(h);
import g = require("../38/3");
import _ = require("../7");
import v = require("./209");
import b = require("./200");
import y = require("../14");
import E = require("./87");
import O = require("../28/index");
import w = require("./119/index");
var C = "".concat(b.a.serverHost, "/coconut");
var T = O.e() ? 0 : 1;
function S(e) {
  return I.apply(this, arguments);
}
function I() {
  return (I = _.a(m.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var i;
    var a;
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return w.a("dictId=".concat(t));
          case 3:
            n = e.sent;
            r = n.sign;
            o = n.timestamp;
            e.next = 8;
            return v.a.get(C + "/webdb/try/dict/".concat(t, "/keys"), {
              headers: c.a({
                env: T,
                sign: r,
                timestamp: o
              }, E.a())
            });
          case 8:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", a.data);
          case 12:
            y.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法获取所有键或者键值对个数"
            });
            throw new TypeError(a.msg);
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20;
              break;
            }
            throw e.t0;
          case 20:
            y.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法获取所有键或者键值对个数"
            });
            throw new Error("网络错误");
          case 22:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 16]]);
  }))).apply(this, arguments);
}
function A(e) {
  return j.apply(this, arguments);
}
function j() {
  return (j = _.a(m.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var i;
    var a;
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return w.a("dictId=".concat(t));
          case 3:
            n = e.sent;
            r = n.sign;
            o = n.timestamp;
            e.next = 8;
            return v.a.delete(C + "/webdb/try/dict/clear/".concat(t), {
              headers: c.a({
                env: T,
                sign: r,
                timestamp: o
              }, E.a())
            });
          case 8:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", a.success);
          case 12:
            y.a.condition(false, {
              type: "error",
              message: "无法清空所有键值对"
            });
            throw new TypeError(a.msg);
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20;
              break;
            }
            throw e.t0;
          case 20:
            y.a.condition(false, {
              type: "error",
              message: "网络通讯异常，无法清空所有键值对"
            });
            throw new Error("网络错误");
          case 22:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 16]]);
  }))).apply(this, arguments);
}
function N(e, t, n) {
  return R.apply(this, arguments);
}
function R() {
  return (R = _.a(m.a.mark(function e(t, n, r) {
    var o;
    var i;
    var a;
    var s;
    var l;
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return w.a("dictId=".concat(t, "&key=").concat(n));
          case 3:
            o = e.sent;
            i = o.sign;
            a = o.timestamp;
            e.next = 8;
            return v.a.get(C + "/webdb/try/dict/".concat(t, "/getvalue"), {
              params: {
                key: n
              },
              headers: c.a({
                env: T,
                sign: i,
                timestamp: a
              }, E.a())
            });
          case 8:
            if (s = e.sent, 200 !== (l = s.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", l.data);
          case 12:
            if (r && y.a.condition(false, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            }), 40400912 !== l.code) {
              e.next = 15;
              break;
            }
            return e.abrupt("return", []);
          case 15:
            throw new TypeError(l.msg);
          case 18:
            if (e.prev = 18, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 22;
              break;
            }
            throw e.t0;
          case 22:
            y.a.condition(false, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "获取",
                key: n
              }
            });
            throw new Error("网络错误");
          case 24:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 18]]);
  }))).apply(this, arguments);
}
function k(e, t, n, r) {
  return x.apply(this, arguments);
}
function x() {
  return (x = _.a(m.a.mark(function e(t, n, r, o) {
    var i;
    var a;
    var s;
    var l;
    var u;
    var d;
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            i = {
              key: n.toString(),
              type: o,
              value: r.toString()
            };
            e.next = 4;
            return w.a("".concat(JSON.stringify(i)));
          case 4:
            a = e.sent;
            s = a.sign;
            l = a.timestamp;
            e.next = 9;
            return v.a.post(C + "/webdb/try/dict/".concat(t, "/set"), {
              key: n,
              type: o,
              value: r
            }, {
              headers: c.a({
                env: T,
                sign: s,
                timestamp: l
              }, E.a())
            });
          case 9:
            if (u = e.sent, 200 !== (d = u.data).code) {
              e.next = 13;
              break;
            }
            return e.abrupt("return", d.success);
          case 13:
            if (40400914 === d.code) {
              y.a.condition(false, {
                type: "error",
                message: d.msg
              });
            } else {
              y.a.condition(false, {
                type: "error",
                messageId: "keyNotExists",
                values: {
                  key: n
                }
              });
            }
            throw new TypeError(d.msg);
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 21;
              break;
            }
            throw e.t0;
          case 21:
            y.a.condition(false, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "添加或者更新",
                key: n
              }
            });
            throw new Error("与服务器通讯出现错误时，通讯网络问题");
          case 23:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 17]]);
  }))).apply(this, arguments);
}
function D(e, t, n) {
  return M.apply(this, arguments);
}
function M() {
  return (M = _.a(m.a.mark(function e(t, n, r) {
    var o;
    var i;
    var a;
    var s;
    var l;
    return m.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            e.next = 3;
            return w.a("dictId=".concat(t, "&id=").concat(r, "&key=").concat(n));
          case 3:
            o = e.sent;
            i = o.sign;
            a = o.timestamp;
            e.next = 8;
            return v.a.delete(C + "/webdb/try/dict/".concat(t, "/remove?key=").concat(n, "&id=").concat(r), {
              headers: c.a({
                env: T,
                sign: i,
                timestamp: a
              }, E.a())
            });
          case 8:
            if (s = e.sent, 200 !== (l = s.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", l.success);
          case 12:
            y.a.condition(false, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            });
            throw new TypeError(l.msg);
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20;
              break;
            }
            throw e.t0;
          case 20:
            y.a.condition(false, {
              type: "error",
              messageId: "deleteNotNetwork",
              values: {
                type: "删除",
                key: n
              }
            });
            throw new Error("与服务器通讯出现错误时，通讯网络问题");
          case 22:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 16]]);
  }))).apply(this, arguments);
}
var L = m.a.mark(V);
var P = m.a.mark(z);
var B = m.a.mark(Y);
var F = m.a.mark(K);
var G = m.a.mark(q);
var U = m.a.mark(Q);
var W = m.a.mark(Z);
var H = m.a.mark(J);
function V(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c;
  return m.a.wrap(function (l) {
    for (;;) {
      switch (l.prev = l.next) {
        case 0:
          t = e.resolve;
          n = e.reject;
          r = e.payload;
          o = r.documentId;
          i = r.key;
          a = r.value;
          s = r.fieldType;
          l.prev = 2;
          l.next = 5;
          return g.b(k, o, i, a, s);
        case 5:
          c = l.sent;
          return l.abrupt("return", t(c));
        case 9:
          l.prev = 9;
          l.t0 = l.catch(2);
          n(l.t0.message);
        case 12:
        case "end":
          return l.stop();
      }
    }
  }, L, null, [[2, 9]]);
}
function z(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return m.a.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          t = e.resolve;
          n = e.reject;
          r = e.payload;
          o = r.documentId;
          i = r.key;
          a = r.id;
          c.prev = 2;
          c.next = 5;
          return g.b(D, o, i, a);
        case 5:
          s = c.sent;
          return c.abrupt("return", t(s));
        case 9:
          c.prev = 9;
          c.t0 = c.catch(2);
          n(c.t0.message);
        case 12:
        case "end":
          return c.stop();
      }
    }
  }, P, null, [[2, 9]]);
}
function Y(e) {
  var t;
  var n;
  var r;
  var o;
  return m.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = e.resolve;
          n = e.reject;
          r = e.payload.documentId;
          i.prev = 2;
          i.next = 5;
          return g.b(A, r);
        case 5:
          o = i.sent;
          return i.abrupt("return", t(o));
        case 9:
          i.prev = 9;
          i.t0 = i.catch(2);
          n(i.t0.message);
        case 12:
        case "end":
          return i.stop();
      }
    }
  }, B, null, [[2, 9]]);
}
function K(e) {
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  return m.a.wrap(function (c) {
    for (;;) {
      switch (c.prev = c.next) {
        case 0:
          t = e.resolve;
          n = e.reject;
          r = e.payload;
          o = r.documentId;
          i = r.key;
          a = r.isConsole;
          c.prev = 2;
          c.next = 5;
          return g.b(N, o, i, a);
        case 5:
          s = c.sent;
          return c.abrupt("return", t(s));
        case 9:
          c.prev = 9;
          c.t0 = c.catch(2);
          n(c.t0.message);
        case 12:
        case "end":
          return c.stop();
      }
    }
  }, F, null, [[2, 9]]);
}
function q(e) {
  var t;
  var n;
  var r;
  var o;
  return m.a.wrap(function (i) {
    for (;;) {
      switch (i.prev = i.next) {
        case 0:
          t = e.resolve;
          n = e.reject;
          r = e.payload.documentId;
          i.prev = 2;
          i.next = 5;
          return g.b(S, r);
        case 5:
          o = i.sent;
          return i.abrupt("return", t(o));
        case 9:
          i.prev = 9;
          i.t0 = i.catch(2);
          n(i.t0.message);
        case 12:
        case "end":
          return i.stop();
      }
    }
  }, G, null, [[2, 9]]);
}
var X = {
  ASYNC_SET_CLOUD_DOC_FIELD_VALUE: V,
  ASYNC_CLEAR_CLOUD_DOC_ALL_FIELD_VALUE: Y,
  ASYNC_DELETE_CLOUD_DOC_FIELD_VALUE: z,
  ASYNC_GET_CLOUD_DOC_FIELD_VALUE: K,
  ASYNC_GET_CLOUD_DOC_ALL_FIELD_VALUE: q
};
function Q() {
  return m.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return g.g([u.a, u.b, u.d, u.c, u.e], Z);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, U);
}
function Z(e) {
  var t;
  return m.a.wrap(function (n) {
    for (;;) {
      switch (n.prev = n.next) {
        case 0:
          if (!(t = X[e.type])) {
            n.next = 4;
            break;
          }
          n.next = 4;
          return g.b(t, e);
        case 4:
        case "end":
          return n.stop();
      }
    }
  }, W);
}
function J() {
  return m.a.wrap(function (e) {
    for (;;) {
      switch (e.prev = e.next) {
        case 0:
          e.next = 2;
          return g.a([g.d(Q)]);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, H);
}
var $;
var ee = i.a();
var te = o.createStore(f);
var ne = false;
try {
  $ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.compose;
  ne = false;
} catch (ae) {
  $ = undefined;
}
function re(e) {
  var t = new Map();
  for (var n in e) t.set(n, e[n]);
  return t;
}
function oe(e) {
  var t = e.screenList;
  var n = e.widgetMap;
  var i = e.variableMap;
  var s = e.imageFileMap;
  var c = e.soundFileMap;
  var l = e.iconFileMap;
  var u = e.initialScreenId;
  var d = e.version;
  a.c(n, d);
  var p = {
    screenList: r.a.List(t),
    widgetMap: r.a.Map(n),
    variableMap: i ? re(i) : undefined,
    imageFileMap: s ? re(s) : undefined,
    soundFileMap: c ? re(c) : undefined,
    iconFileMap: l ? re(l) : undefined,
    currentScreenId: u
  };
  te = ne && $ ? o.createStore(f, p, $(o.applyMiddleware(ee))) : o.createStore(f, p, o.applyMiddleware(ee));
  ee.run(J);
  return te;
}
function ie() {
  return te;
}
export default ie;