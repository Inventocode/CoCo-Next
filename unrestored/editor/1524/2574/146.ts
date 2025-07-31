"use strict";

export { h as b };
export { g as e };
export { v as g };
export { y as h };
export { O as q };
export { C as i };
export { S as r };
export { A as f };
export { N as c };
export { k as a };
export { D as d };
export { L as p };
export { B as l };
export { G as k };
export { W as o };
export { V as m };
export { Y as n };
export { q as j };
var r = require("./6");
var o = require("./1/index");
var i = (module => {
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
})(o);
var a = require("./7");
var s = require("./206/29/index");
var c = require("./41");
var l = require("./59/index");
var u = require("./48/87");
var d = require("./48/119/index");
var p = "".concat(l.a.serverHost, "/coconut");
var f = Object(s.e)() ? "dev" : "prod";
function h(e, t) {
  return m.apply(this, arguments);
}
function m() {
  return (m = Object(a.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    var a;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb");
            e.next = 3;
            return c.a.post(r, {
              name: t,
              work_id: n
            });
          case 3:
            if (o = e.sent, 200 !== (a = o.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", {
              name: a.data.name,
              id: a.data.id
            });
          case 9:
            return e.abrupt("return", {
              name: "",
              id: ""
            });
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function g(e, t) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = Object(a.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    var a;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/").concat(t, "/detail");
            e.next = 3;
            return c.a.get(r, {
              headers: {
                env: "dev" === n ? 0 : 1
              }
            });
          case 3:
            if (o = e.sent, 200 !== (a = o.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", a.data);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function v(e) {
  return b.apply(this, arguments);
}
function b() {
  return (b = Object(a.a)(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/user/list/detail");
            e.next = 3;
            return c.a.get(n, {
              headers: {
                env: "dev" === t ? 0 : 1
              }
            });
          case 3:
            if (r = e.sent, 200 !== (o = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", o.data);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = Object(a.a)(i.a.mark(function e() {
    var t;
    var n;
    var r;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            t = "".concat(p, "/clouddb/user/list");
            e.next = 3;
            return c.a.get(t);
          case 3:
            if (n = e.sent, 200 !== (r = n.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", r.data);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function O(e, t, n, r) {
  return w.apply(this, arguments);
}
function w() {
  return (w = Object(a.a)(i.a.mark(function e(t, n, r, o) {
    var a;
    var s;
    var l;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            a = o ? "".concat(p, "/clouddb/").concat(t, "/columns?work_id=").concat(o) : "".concat(p, "/clouddb/").concat(t, "/columns");
            e.next = 3;
            return c.a.put(a, {
              columns: n
            }, {
              headers: {
                env: "dev" === r ? 0 : 1
              }
            });
          case 3:
            if (s = e.sent, 200 !== (l = s.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", l.data.columns);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function C(e, t, n, r, o) {
  return T.apply(this, arguments);
}
function T() {
  return (T = Object(a.a)(i.a.mark(function e(t, n, r, o, a) {
    var s;
    var l;
    var u;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = a ? "".concat(p, "/clouddb/").concat(t, "/import?work_id=").concat(a) : "".concat(p, "/clouddb/").concat(t, "/import");
            e.next = 3;
            return c.a.post(s, {
              primary_column: o,
              add_items: n
            }, {
              headers: {
                env: "dev" === r ? 0 : 1
              }
            });
          case 3:
            if (l = e.sent, 200 !== (u = l.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", "");
          case 9:
            return e.abrupt("return", u.msg);
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function S(e, t, n, r, o) {
  return I.apply(this, arguments);
}
function I() {
  return (I = Object(a.a)(i.a.mark(function e(t, n, r, o, a) {
    var s;
    var l;
    var u;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            s = a ? "".concat(p, "/clouddb/").concat(t, "/datas?work_id=").concat(a) : "".concat(p, "/clouddb/").concat(t, "/datas");
            e.next = 3;
            return c.a.put(s, {
              add_items: n.add,
              edit_items: n.update,
              delete_items: n.delete,
              primary_column: o
            }, {
              headers: {
                env: "dev" === r ? 0 : 1
              }
            });
          case 3:
            if (l = e.sent, 200 !== (u = l.data).code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", "");
          case 9:
            return e.abrupt("return", u.msg);
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function A(e, t, n, r) {
  return j.apply(this, arguments);
}
function j() {
  return (j = Object(a.a)(i.a.mark(function e(t, n, r, o) {
    var a;
    var s;
    var l;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            a = "".concat(p, "/clouddb/").concat(t, "/data_list?offset=").concat(r, "&limit=").concat(o);
            e.next = 3;
            return c.a.get(a, {
              headers: {
                env: "dev" === n ? 0 : 1
              }
            });
          case 3:
            if (s = e.sent, 200 !== (l = s.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", l.data.records);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function N(e) {
  return R.apply(this, arguments);
}
function R() {
  return (R = Object(a.a)(i.a.mark(function e(t) {
    var n;
    var r;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/").concat(t);
            e.next = 3;
            return c.a.delete(n);
          case 3:
            if (r = e.sent, 200 !== r.data.code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return");
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function k(e, t) {
  return x.apply(this, arguments);
}
function x() {
  return (x = Object(a.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/reference?work_id=").concat(n);
            e.next = 3;
            return c.a.post(r, {
              db_ids: t
            });
          case 3:
            if (o = e.sent, 200 !== o.data.code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return");
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function D(e, t) {
  return M.apply(this, arguments);
}
function M() {
  return (M = Object(a.a)(i.a.mark(function e(t, n) {
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = "".concat(p, "/clouddb/reference?db_id=").concat(t, "&work_id=").concat(n);
            e.next = 3;
            return c.a.delete(r);
          case 3:
            if (o = e.sent, 200 !== o.data.code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return");
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function L(e, t, n) {
  return P.apply(this, arguments);
}
function P() {
  return (P = Object(a.a)(i.a.mark(function e(t, n, r) {
    var o;
    var a;
    var s;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = r ? "".concat(p, "/clouddb/").concat(t, "?work_id=").concat(r) : "".concat(p, "/clouddb/").concat(t);
            e.next = 3;
            return c.a.put(o, {
              name: n
            });
          case 3:
            if (a = e.sent, 200 !== (s = a.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", s.data.name);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function B(e, t) {
  return F.apply(this, arguments);
}
function F() {
  return (F = Object(a.a)(i.a.mark(function e(t, n) {
    var o;
    var a;
    var s;
    var l;
    var h;
    var m;
    var g;
    var _;
    var v;
    var b;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            o = "".concat(p, "/clouddb/runtime/").concat(t, "/insert");
            a = {
              values: n
            };
            e.next = 5;
            return Object(d.a)("".concat(JSON.stringify(a)));
          case 5:
            s = e.sent;
            l = s.sign;
            h = s.timestamp;
            e.next = 10;
            return c.a.post(o, a, {
              headers: Object(r.a)({
                env: "dev" === f ? 0 : 1,
                sign: l,
                timestamp: h
              }, Object(u.a)())
            });
          case 10:
            if (m = e.sent, 200 !== (g = m.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", g.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: g.msg,
              code: g.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(_ = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (v = _.status, b = _.data, 403 !== v) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: b.msg,
              code: b.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function G(e, t, n, r) {
  return U.apply(this, arguments);
}
function U() {
  return (U = Object(a.a)(i.a.mark(function e(t, n, o, a) {
    var s;
    var l;
    var h;
    var m;
    var g;
    var _;
    var v;
    var b;
    var y;
    var E;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            s = "".concat(p, "/clouddb/runtime/").concat(t, "/delete");
            l = {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a.toString()
                }]
              }
            };
            e.next = 5;
            return Object(d.a)("".concat(JSON.stringify(l)));
          case 5:
            h = e.sent;
            m = h.sign;
            g = h.timestamp;
            e.next = 10;
            return c.a.put(s, {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a
                }]
              }
            }, {
              headers: Object(r.a)({
                env: "dev" === f ? 0 : 1,
                sign: m,
                timestamp: g
              }, Object(u.a)())
            });
          case 10:
            if (_ = e.sent, 200 !== (v = _.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", v.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: v.msg,
              code: v.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(b = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (y = b.status, E = b.data, 403 !== y) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: E.msg,
              code: E.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function W(e, t, n, r, o, i) {
  return H.apply(this, arguments);
}
function H() {
  return (H = Object(a.a)(i.a.mark(function e(t, n, o, a, s, l) {
    var h;
    var m;
    var g;
    var _;
    var v;
    var b;
    var y;
    var E;
    var O;
    var w;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            h = "".concat(p, "/clouddb/runtime/").concat(t, "/update");
            m = {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a.toString()
                }]
              },
              values: [{
                column_id: s,
                value: l.toString()
              }]
            };
            e.next = 5;
            return Object(d.a)("".concat(JSON.stringify(m)));
          case 5:
            g = e.sent;
            _ = g.sign;
            v = g.timestamp;
            e.next = 10;
            return c.a.put(h, {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a
                }]
              },
              values: [{
                column_id: s,
                value: l
              }]
            }, {
              headers: Object(r.a)({
                env: "dev" === f ? 0 : 1,
                sign: _,
                timestamp: v
              }, Object(u.a)())
            });
          case 10:
            if (b = e.sent, 200 !== (y = b.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", y.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: y.msg,
              code: y.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(E = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (O = E.status, w = E.data, 403 !== O) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: w.msg,
              code: w.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function V(e, t, n, r) {
  return z.apply(this, arguments);
}
function z() {
  return (z = Object(a.a)(i.a.mark(function e(t, n, o, a) {
    var s;
    var l;
    var h;
    var m;
    var g;
    var _;
    var v;
    var b;
    var y;
    var E;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0;
            s = "".concat(p, "/clouddb/runtime/").concat(t, "/select");
            l = {
              querys: {
                querys: [{
                  column_id: n,
                  op: o,
                  value: a.toString()
                }]
              }
            };
            e.next = 5;
            return Object(d.a)("".concat(JSON.stringify(l)));
          case 5:
            h = e.sent;
            m = h.sign;
            g = h.timestamp;
            e.next = 10;
            return c.a.post(s, {
              querys: {
                querys: [{
                  op: o,
                  column_id: n,
                  value: a
                }]
              }
            }, {
              headers: Object(r.a)({
                env: "dev" === f ? 0 : 1,
                sign: m,
                timestamp: g
              }, Object(u.a)())
            });
          case 10:
            if (_ = e.sent, 200 !== (v = _.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", v.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: v.msg,
              code: v.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(0), console.error(e.t0), !(b = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (y = b.status, E = b.data, 403 !== y) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: E.msg,
              code: E.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[0, 19]]);
  }))).apply(this, arguments);
}
function Y(e, t) {
  return K.apply(this, arguments);
}
function K() {
  return (K = Object(a.a)(i.a.mark(function e(t, n) {
    var o;
    var a;
    var s;
    var l;
    var h;
    var m;
    var g;
    var _;
    var v;
    var b;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = "row" === n ? "RECORD" : "COLUMN";
            e.next = 3;
            return Object(d.a)("id=".concat(t, "&type=").concat(o));
          case 3:
            a = e.sent;
            s = a.sign;
            l = a.timestamp;
            e.prev = 6;
            h = "".concat(p, "/clouddb/runtime/").concat(t, "/count?type=").concat(o);
            e.next = 10;
            return c.a.get(h, {
              headers: Object(r.a)({
                env: "dev" === f ? 0 : 1,
                sign: s,
                timestamp: l
              }, Object(u.a)())
            });
          case 10:
            if (m = e.sent, 200 !== (g = m.data).code) {
              e.next = 16;
              break;
            }
            return e.abrupt("return", g.data);
          case 16:
            throw new Error(JSON.stringify({
              msg: g.msg,
              code: g.code
            }));
          case 17:
            e.next = 34;
            break;
          case 19:
            if (e.prev = 19, e.t0 = e.catch(6), console.error(e.t0), !(_ = e.t0.response)) {
              e.next = 33;
              break;
            }
            if (v = _.status, b = _.data, 403 !== v) {
              e.next = 30;
              break;
            }
            throw new Error(JSON.stringify({
              msg: b.msg,
              code: b.code
            }));
          case 30:
            throw new Error(JSON.stringify({
              msg: "\u670d\u52a1\u5668\u9519\u8bef",
              code: "E0"
            }));
          case 31:
            e.next = 34;
            break;
          case 33:
            throw e.t0;
          case 34:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[6, 19]]);
  }))).apply(this, arguments);
}
function q(e) {
  return X.apply(this, arguments);
}
function X() {
  return (X = Object(a.a)(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/clouddb/migrate?db_ids=").concat(t);
            e.next = 3;
            return c.a.put(n);
          case 3:
            if (r = e.sent, 200 !== (o = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", "");
          case 7:
            if (40400923 !== o.code) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", "cloudDBPublishError.uniqueColumnError");
          case 9:
            return e.abrupt("return", "cloudDBPublishError.migrateError");
          case 10:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default k;