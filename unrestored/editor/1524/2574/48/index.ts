"use strict";

export { oe as b };
export { ie as a };
import * as r from "../729/66";
import * as o from "../155/index";
import * as i from "../38/486";
import * as a from "../38/343";
import * as s from "../11";
import * as c from "../6";
import * as l from "../676/70";
import * as u from "./72";
function d(e, t) {
  var n = t.id;
  var r = t.key;
  var o = t.value;
  var i = e.findIndex(function (e) {
    return e.id === n;
  });
  return i > -1 ? e.update(i, function (e) {
    return Object(c.a)(Object(c.a)({}, e), {}, Object(s.a)({}, r, o));
  }) : e;
}
var p = window.localStorage.getItem("LANGUAGE") || navigator.language;
var f = Object(o.combineReducers)({
  widgetMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.a.Map({});
    var t = arguments.length > 1 ? arguments[1] : void 0;
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
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.a.List([]);
    var t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
      case u.l:
        return d(e, t.payload);
      default:
        return e;
    }
  },
  variableMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : void 0;
    t.type;
    return e;
  },
  imageFileMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : void 0;
    t.type;
    return e;
  },
  soundFileMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : void 0;
    t.type;
    return e;
  },
  iconFileMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : void 0;
    t.type;
    return e;
  },
  currentScreenId: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    var t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
      case u.h:
        return t.payload.navigator;
      default:
        return e;
    }
  },
  currentScreenParam: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    var t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
      case u.i:
        return t.payload.param;
      default:
        return e;
    }
  },
  httpClientMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map();
    var t = arguments.length > 1 ? arguments[1] : void 0;
    t.type;
    return e;
  },
  mediaMap: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      cameraDirection: 0
    };
    var t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
      case u.f:
        return Object(c.a)({
          state: e
        }, t.payload);
      default:
        return e;
    }
  },
  emulatorPhoneInfo: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      dialPageVisible: !1,
      callingPageVisible: !1,
      contactPageVisible: !1,
      sendSmsPageVisible: !1,
      receiveSmsPageVisible: !1,
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
    var t = arguments.length > 1 ? arguments[1] : void 0;
    switch (t.type) {
      case u.g:
        return Object(c.a)(Object(c.a)({}, e), t.payload);
      default:
        return e;
    }
  },
  language: function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
    var t = arguments.length > 1 ? arguments[1] : void 0;
    t.type;
    return e;
  }
});
import * as h from "../1/index";
import * as m from "../1/index";
import * as g from "../35/3/index";
import * as _ from "../7";
import * as v from "./209";
import * as b from "./200";
import * as y from "../14";
import * as E from "./87";
import * as O from "../206/29/index";
import * as w from "./119/index";
var C = "".concat(b.a.serverHost, "/coconut");
var T = Object(O.e)() ? 0 : 1;
function S(e) {
  return I.apply(this, arguments);
}
function I() {
  return (I = Object(_.a)(m.a.mark(function e(t) {
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
            return Object(w.a)("dictId=".concat(t));
          case 3:
            n = e.sent;
            r = n.sign;
            o = n.timestamp;
            e.next = 8;
            return v.a.get(C + "/webdb/try/dict/".concat(t, "/keys"), {
              headers: Object(c.a)({
                env: T,
                sign: r,
                timestamp: o
              }, Object(E.a)())
            });
          case 8:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", a.data);
          case 12:
            throw y.a.condition(!1, {
              type: "error",
              message: "\u7f51\u7edc\u901a\u8baf\u5f02\u5e38\uff0c\u65e0\u6cd5\u83b7\u53d6\u6240\u6709\u952e\u6216\u8005\u952e\u503c\u5bf9\u4e2a\u6570"
            }), new TypeError(a.msg);
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20;
              break;
            }
            throw e.t0;
          case 20:
            throw y.a.condition(!1, {
              type: "error",
              message: "\u7f51\u7edc\u901a\u8baf\u5f02\u5e38\uff0c\u65e0\u6cd5\u83b7\u53d6\u6240\u6709\u952e\u6216\u8005\u952e\u503c\u5bf9\u4e2a\u6570"
            }), new Error("\u7f51\u7edc\u9519\u8bef");
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
  return (j = Object(_.a)(m.a.mark(function e(t) {
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
            return Object(w.a)("dictId=".concat(t));
          case 3:
            n = e.sent;
            r = n.sign;
            o = n.timestamp;
            e.next = 8;
            return v.a.delete(C + "/webdb/try/dict/clear/".concat(t), {
              headers: Object(c.a)({
                env: T,
                sign: r,
                timestamp: o
              }, Object(E.a)())
            });
          case 8:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", a.success);
          case 12:
            throw y.a.condition(!1, {
              type: "error",
              message: "\u65e0\u6cd5\u6e05\u7a7a\u6240\u6709\u952e\u503c\u5bf9"
            }), new TypeError(a.msg);
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20;
              break;
            }
            throw e.t0;
          case 20:
            throw y.a.condition(!1, {
              type: "error",
              message: "\u7f51\u7edc\u901a\u8baf\u5f02\u5e38\uff0c\u65e0\u6cd5\u6e05\u7a7a\u6240\u6709\u952e\u503c\u5bf9"
            }), new Error("\u7f51\u7edc\u9519\u8bef");
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
  return (R = Object(_.a)(m.a.mark(function e(t, n, r) {
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
            return Object(w.a)("dictId=".concat(t, "&key=").concat(n));
          case 3:
            o = e.sent;
            i = o.sign;
            a = o.timestamp;
            e.next = 8;
            return v.a.get(C + "/webdb/try/dict/".concat(t, "/getvalue"), {
              params: {
                key: n
              },
              headers: Object(c.a)({
                env: T,
                sign: i,
                timestamp: a
              }, Object(E.a)())
            });
          case 8:
            if (s = e.sent, 200 !== (l = s.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", l.data);
          case 12:
            if (r && y.a.condition(!1, {
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
            throw y.a.condition(!1, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "\u83b7\u53d6",
                key: n
              }
            }), new Error("\u7f51\u7edc\u9519\u8bef");
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
  return (x = Object(_.a)(m.a.mark(function e(t, n, r, o) {
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
            return Object(w.a)("".concat(JSON.stringify(i)));
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
              headers: Object(c.a)({
                env: T,
                sign: s,
                timestamp: l
              }, Object(E.a)())
            });
          case 9:
            if (u = e.sent, 200 !== (d = u.data).code) {
              e.next = 13;
              break;
            }
            return e.abrupt("return", d.success);
          case 13:
            throw 40400914 === d.code ? y.a.condition(!1, {
              type: "error",
              message: d.msg
            }) : y.a.condition(!1, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            }), new TypeError(d.msg);
          case 17:
            if (e.prev = 17, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 21;
              break;
            }
            throw e.t0;
          case 21:
            throw y.a.condition(!1, {
              type: "error",
              messageId: "notNetwork",
              values: {
                type: "\u6dfb\u52a0\u6216\u8005\u66f4\u65b0",
                key: n
              }
            }), new Error("\u4e0e\u670d\u52a1\u5668\u901a\u8baf\u51fa\u73b0\u9519\u8bef\u65f6\uff0c\u901a\u8baf\u7f51\u7edc\u95ee\u9898");
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
  return (M = Object(_.a)(m.a.mark(function e(t, n, r) {
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
            return Object(w.a)("dictId=".concat(t, "&id=").concat(r, "&key=").concat(n));
          case 3:
            o = e.sent;
            i = o.sign;
            a = o.timestamp;
            e.next = 8;
            return v.a.delete(C + "/webdb/try/dict/".concat(t, "/remove?key=").concat(n, "&id=").concat(r), {
              headers: Object(c.a)({
                env: T,
                sign: i,
                timestamp: a
              }, Object(E.a)())
            });
          case 8:
            if (s = e.sent, 200 !== (l = s.data).code) {
              e.next = 12;
              break;
            }
            return e.abrupt("return", l.success);
          case 12:
            throw y.a.condition(!1, {
              type: "error",
              messageId: "keyNotExists",
              values: {
                key: n
              }
            }), new TypeError(l.msg);
          case 16:
            if (e.prev = 16, e.t0 = e.catch(0), !(e.t0 instanceof TypeError)) {
              e.next = 20;
              break;
            }
            throw e.t0;
          case 20:
            throw y.a.condition(!1, {
              type: "error",
              messageId: "deleteNotNetwork",
              values: {
                type: "\u5220\u9664",
                key: n
              }
            }), new Error("\u4e0e\u670d\u52a1\u5668\u901a\u8baf\u51fa\u73b0\u9519\u8bef\u65f6\uff0c\u901a\u8baf\u7f51\u7edc\u95ee\u9898");
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
          return Object(g.b)(k, o, i, a, s);
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
          return Object(g.b)(D, o, i, a);
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
          return Object(g.b)(A, r);
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
          return Object(g.b)(N, o, i, a);
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
          return Object(g.b)(S, r);
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
          return Object(g.g)([u.a, u.b, u.d, u.c, u.e], Z);
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
          return Object(g.b)(t, e);
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
          return Object(g.a)([Object(g.d)(Q)]);
        case 2:
        case "end":
          return e.stop();
      }
    }
  }, H);
}
var $;
var ee = Object(i.a)();
var te = Object(o.createStore)(f);
var ne = !1;
try {
  $ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.compose;
  ne = !1;
} catch (ae) {
  $ = void 0;
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
  Object(a.c)(n, d);
  var p = {
    screenList: r.a.List(t),
    widgetMap: r.a.Map(n),
    variableMap: i ? re(i) : void 0,
    imageFileMap: s ? re(s) : void 0,
    soundFileMap: c ? re(c) : void 0,
    iconFileMap: l ? re(l) : void 0,
    currentScreenId: u
  };
  te = ne && $ ? Object(o.createStore)(f, p, $(Object(o.applyMiddleware)(ee))) : Object(o.createStore)(f, p, Object(o.applyMiddleware)(ee));
  ee.run(J);
  return te;
}
function ie() {
  return te;
}