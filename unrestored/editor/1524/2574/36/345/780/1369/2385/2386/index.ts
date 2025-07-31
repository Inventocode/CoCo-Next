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
exports.Datasheet = void 0;
var s = a(require("./2387"));
var c = require("../../969/index");
var u = require("./2388");
var l = require("./2389");
var f = require("./2390");
var h = function () {
  function e(e, t) {
    this.datasheetId = e;
    this.vika = t;
    this.datasheetId = e;
  }
  Object.defineProperty(e.prototype, "fields", {
    get: function () {
      return new u.FieldManager(this);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "views", {
    get: function () {
      return new f.ViewManager(this);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(e.prototype, "records", {
    get: function () {
      return new l.RecordManager(this);
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.upload = function (e, t) {
    return i(this, void 0, void 0, function () {
      var n;
      return o(this, function (i) {
        switch (i.label) {
          case 0:
            if (Array.isArray(e)) {
              e = e[0];
            }
            (n = new s.default()).append("file", e, t);
            return [4, this.vika.request({
              path: "/datasheets/" + this.datasheetId + "/attachments",
              method: "post",
              data: n,
              headers: r({
                "Content-Type": "multipart/form-data"
              }, n.getHeaders ? n.getHeaders() : {}),
              timeout: this.vika.config.requestTimeout || 10 * c.DEFAULT_REQUEST_TIMEOUT
            })];
          case 1:
            return [2, i.sent()];
        }
      });
    });
  };
  return e;
}();
exports.Datasheet = h;