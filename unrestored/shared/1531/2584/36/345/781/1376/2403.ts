"use strict";

var r = this && this.__assign || function () {
  return (r = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var i = this && this.__awaiter || function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var o = this && this.__generator || function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            n = 1;
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.isBrowser = exports.mergeConfig = exports.QPSController = exports.getResourceId = exports.chunks = exports.wait = void 0;
var a = require("./970/index");
var s = require("./index");
exports.wait = function (e) {
  return new Promise(function (t) {
    setTimeout(function () {
      t(void 0);
    }, e);
  });
};
exports.chunks = function (e, t) {
  for (var n = [], r = 0; r < e.length; r += t) {
    var i = e.slice(r, r + t);
    n.push(i);
  }
  return n;
};
exports.getResourceId = function (e) {
  if (!e) {
    return null;
  }
  var t = e.split("/");
  var n = t.findIndex(function (e) {
    return "datasheets" === e;
  });
  return n > -1 && t.length > n ? t[n + 1] : null;
};
exports.QPSController = function (e, n) {
  if (void 0 === e) {
    e = 5;
  }
  if (void 0 === n) {
    n = 50;
  }
  return function (r) {
    return i(void 0, void 0, void 0, function () {
      var i;
      var a;
      var c;
      var u;
      var l;
      var f;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            return (i = exports.getResourceId(r.url)) ? (a = new Date().getTime(), c = s.Vika.QPSMap.get(i) || {
              count: 1,
              lastReqTimestamp: a
            }, u = c.count, l = c.lastReqTimestamp, Math.floor(a / 1e3) <= Math.floor(l / 1e3) ? u < e ? u++ : (l = 1e3 * (Math.floor(l / 1e3) + 1), u = 1) : (l = a, u = 1), s.Vika.QPSMap.set(i, {
              count: u,
              lastReqTimestamp: l
            }), f = (f = l - a) > 0 ? f + n : 0, [4, exports.wait(f)]) : [2, r];
          case 1:
            o.sent();
            return [2, r];
        }
      });
    });
  };
};
exports.mergeConfig = function (e) {
  var t = {
    host: a.DEFAULT_HOST,
    fieldKey: "name",
    requestTimeout: a.DEFAULT_REQUEST_TIMEOUT,
    logLevel: "Warn",
    disableClientUserAgent: !1
  };
  return r(r({}, t), e);
};
exports.isBrowser = "undefined" !== typeof window;