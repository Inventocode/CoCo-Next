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
var a = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.Vika = void 0;
var s = a(require("./2367/index"));
var c = a(require("./2384/index"));
var u = require("./970/index");
var l = require("./2395/index");
var f = require("./2401");
var d = require("./2402");
var h = require("./2403");
var p = function () {
  function e(e) {
    if (!(null === e || void 0 === e ? void 0 : e.token)) {
      throw new Error("请传入 API Token。(登陆 vika.cn 在左下角用户中心获取)");
    }
    this.config = h.mergeConfig(e);
    this.axios = s.default.create({
      baseURL: e.host || u.DEFAULT_HOST,
      timeout: e.requestTimeout || u.DEFAULT_REQUEST_TIMEOUT,
      headers: {
        common: r(r({}, this.config.disableClientUserAgent ? {} : h.isBrowser ? {
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
    this.axios.interceptors.request.use(h.QPSController());
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
              message: (null === f || void 0 === f ? void 0 : f.message) || "请求参数配置错误"
            };
            return [3, 4];
          case 4:
            if (!u.success) {
              console.error("请求发生错误：", u);
            }
            return [2, u];
        }
      });
    });
  };
  e.prototype.datasheet = function (e) {
    if (!e) {
      throw new Error("请传入维格表Id, 可以从维格表 url 上获取，维格表 id 通常以 dst 开头");
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
      return new d.SpaceManager(this);
    },
    enumerable: !1,
    configurable: !0
  });
  e.QPSMap = new Map();
  return e;
}();
exports.Vika = p;