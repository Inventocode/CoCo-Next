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
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
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
var a = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Vika = void 0;
var s = a(require("./2357/index"));
var c = a(require("./2374/index"));
var u = require("./969/index");
var l = require("./2385/index");
var f = require("./2391");
var h = require("./2392");
var d = require("./2393");
var p = function () {
  function e(e) {
    if (!(null === e || void 0 === e ? void 0 : e.token)) {
      throw new Error("\u8bf7\u4f20\u5165 API Token\u3002(\u767b\u9646 vika.cn \u5728\u5de6\u4e0b\u89d2\u7528\u6237\u4e2d\u5fc3\u83b7\u53d6)");
    }
    this.config = d.mergeConfig(e);
    this.axios = s.default.create({
      baseURL: e.host || u.DEFAULT_HOST,
      timeout: e.requestTimeout || u.DEFAULT_REQUEST_TIMEOUT,
      headers: {
        common: r(r({}, this.config.disableClientUserAgent ? {} : d.isBrowser ? {
          "X-Vika-User-Agent": "VikaJSSDK"
        } : {
          "User-Agent": "VikaJSSDK"
        }), {
          Authorization: "Bearer " + e.token
        })
      },
      paramsSerializer: function (e) {
        return c.default.stringify(e, {
          arrayFormat: "brackets"
        });
      }
    });
    if (this.config.adapter) {
      this.axios.defaults.adapter = this.config.adapter;
    }
    this.axios.interceptors.request.use(function (e) {
      return e;
    });
    this.axios.interceptors.request.use(d.QPSController());
    this.axios.interceptors.response.use(function (e) {
      return e;
    });
  }
  e.prototype.request = function (e) {
    var t;
    return i(this, void 0, void 0, function () {
      var n;
      var r;
      var i;
      var a;
      var s;
      var c;
      var u;
      var l;
      var f;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            n = e.path;
            r = e.params;
            i = e.method;
            a = e.data;
            s = e.headers;
            c = e.timeout;
            o.label = 1;
          case 1:
            o.trys.push([1, 3,, 4]);
            return [4, this.axios.request({
              timeout: c,
              url: n,
              method: i,
              params: r,
              data: a,
              headers: s
            })];
          case 2:
            u = o.sent().data;
            return [3, 4];
          case 3:
            l = o.sent();
            f = (null === (t = null === l || void 0 === l ? void 0 : l.response) || void 0 === t ? void 0 : t.data) || l;
            u = {
              success: !1,
              code: (null === f || void 0 === f ? void 0 : f.code) || 500,
              message: (null === f || void 0 === f ? void 0 : f.message) || "\u8bf7\u6c42\u53c2\u6570\u914d\u7f6e\u9519\u8bef"
            };
            return [3, 4];
          case 4:
            if (!u.success) {
              console.error("\u8bf7\u6c42\u53d1\u751f\u9519\u8bef\uff1a", u);
            }
            return [2, u];
        }
      });
    });
  };
  e.prototype.datasheet = function (e) {
    if (!e) {
      throw new Error("\u8bf7\u4f20\u5165\u7ef4\u683c\u8868Id, \u53ef\u4ee5\u4ece\u7ef4\u683c\u8868 url \u4e0a\u83b7\u53d6\uff0c\u7ef4\u683c\u8868 id \u901a\u5e38\u4ee5 dst \u5f00\u5934");
    }
    return new l.Datasheet(e, this);
  };
  Object.defineProperty(e.prototype, "nodes", {
    get: function () {
      return new f.NodeManager(this);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "spaces", {
    get: function () {
      return new h.SpaceManager(this);
    },
    enumerable: !1,
    configurable: !0
  });
  e.QPSMap = new Map();
  return e;
}();
exports.Vika = p;