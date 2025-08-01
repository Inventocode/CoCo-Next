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
var a = this && this.__await || function (e) {
  return this instanceof a ? (this.v = e, this) : new a(e);
};
var s = this && this.__asyncGenerator || function (e, t, n) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var r;
  var i = n.apply(e, t || []);
  var o = [];
  r = {};
  s("next");
  s("throw");
  s("return");
  r[Symbol.asyncIterator] = function () {
    return this;
  };
  return r;
  function s(e) {
    if (i[e]) {
      r[e] = function (t) {
        return new Promise(function (n, r) {
          if (!(o.push([e, t, n, r]) > 1)) {
            c(e, t);
          }
        });
      };
    }
  }
  function c(e, t) {
    try {
      if ((n = i[e](t)).value instanceof a) {
        Promise.resolve(n.value.v).then(u, l);
      } else {
        f(o[0][2], n);
      }
    } catch (r) {
      f(o[0][3], r);
    }
    var n;
  }
  function u(e) {
    c("next", e);
  }
  function l(e) {
    c("throw", e);
  }
  function f(e, t) {
    e(t);
    o.shift();
    if (o.length) {
      c(o[0][0], o[0][1]);
    }
  }
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.RecordManager = void 0;
var c = require("../../970/index");
var u = function () {
  function e(e) {
    this.datasheet = e;
    this.datasheetId = e.datasheetId;
    this.vika = e.vika;
  }
  Object.defineProperty(e.prototype, "APIEndpoint", {
    get: function () {
      return "/datasheets/" + this.datasheetId + "/records";
    },
    enumerable: !1,
    configurable: !0
  });
  e.prototype.queryAll = function (e) {
    return s(this, arguments, function () {
      var t;
      var n;
      var i;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            t = 0;
            n = 0;
            o.label = 1;
          case 1:
            return [4, a(this.vika.request({
              path: this.APIEndpoint,
              params: r({
                pageSize: c.MAX_RECORD_SIZE,
                pageNum: ++t
              }, e),
              method: "get"
            }))];
          case 2:
            if (!(i = o.sent()).success) {
              throw Error(i.message);
            }
            n = i.data.total;
            return [4, a(i.data.records)];
          case 3:
            return [4, o.sent()];
          case 4:
            o.sent();
            o.label = 5;
          case 5:
            if (c.MAX_RECORD_SIZE * t <= n) {
              return [3, 1];
            }
            o.label = 6;
          case 6:
            return [2];
        }
      });
    });
  };
  e.prototype.query = function (e) {
    return i(this, void 0, void 0, function () {
      return o(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.vika.request({
              path: this.APIEndpoint,
              params: e,
              method: "get"
            })];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  };
  e.prototype.get = function (e) {
    return i(this, void 0, void 0, function () {
      var t;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            if (!(t = Array.isArray(e) ? e : [e]).length) {
              throw new TypeError("recordIds cant be empty");
            }
            return [4, this.vika.request({
              path: this.APIEndpoint,
              params: {
                recordIds: t
              },
              method: "get"
            })];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  e.prototype.create = function (e, t) {
    if (void 0 === t) {
      t = this.vika.config.fieldKey;
    }
    return i(this, void 0, void 0, function () {
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.vika.request({
              path: this.APIEndpoint,
              params: {
                fieldKey: t
              },
              method: "post",
              data: {
                records: e,
                fieldKey: t
              }
            })];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  e.prototype.update = function (e, t) {
    if (void 0 === t) {
      t = this.vika.config.fieldKey;
    }
    return i(this, void 0, void 0, function () {
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            if (!e.length) {
              throw new TypeError("records cant be empty");
            }
            return [4, this.vika.request({
              path: this.APIEndpoint,
              params: {
                fieldKey: t
              },
              method: "patch",
              data: {
                records: e,
                fieldKey: t
              }
            })];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  e.prototype.delete = function (e) {
    return i(this, void 0, void 0, function () {
      var t;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            t = Array.isArray(e) ? e : [e];
            return [4, this.vika.request({
              path: this.APIEndpoint,
              params: {
                recordIds: t
              },
              method: "delete"
            })];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  return e;
}();
exports.RecordManager = u;