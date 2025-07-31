"use strict";

export { p as d };
export { h as e };
export { g as c };
export { v as b };
export { y as g };
export { O as a };
export { w as f };
var r = require("./1/index");
var o = (module => {
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
})(r);
var i = require("./7");
var a = require("./9");
var s = require("./64");
var c = require("./79");
var l = require("./41");
var u = require("./59/index");
var d = "".concat(u.a.serverHost, "/coconut");
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = Object(i.a)(o.a.mark(function e() {
    var t;
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.a.get(d + "/web/widget/labels");
          case 2:
            if (t = e.sent, 200 !== (n = t.data).code) {
              e.next = 7;
              break;
            }
            r = n.data;
            return e.abrupt("return", r);
          case 7:
            throw Error(n.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function h(e, t, n) {
  return m.apply(this, arguments);
}
function m() {
  return (m = Object(i.a)(o.a.mark(function e(t, n, r) {
    var i;
    var a;
    var s;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.a.get(d + "/web/widget/list", {
              params: {
                label_id: r,
                current_page: t,
                page_size: n
              }
            });
          case 2:
            if (i = e.sent, 200 !== (a = i.data).code) {
              e.next = 7;
              break;
            }
            s = a.data;
            return e.abrupt("return", s);
          case 7:
            throw Error(a.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function g(e, t, n) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = Object(i.a)(o.a.mark(function e(t, n, r) {
    var i;
    var a;
    var s;
    var c;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.a.get(d + "/web/user/widget/list", {
              params: {
                widget_type: r,
                current_page: t,
                page_size: n
              }
            });
          case 2:
            if (i = e.sent, a = i.data, s = [], 200 !== a.code) {
              e.next = 9;
              break;
            }
            c = a.data.items;
            if (Array.isArray(c)) {
              c.forEach(function (e) {
                var t = {
                  id: e.id,
                  type: e.widget_code,
                  widgetName: e.widget_name,
                  icon: e.icon,
                  cdnUrl: e.resource_url,
                  isInvisibleWidget: 2 === e.widget_type
                };
                s.push(t);
              });
            }
            return e.abrupt("return", {
              list: s,
              total: a.data.total
            });
          case 9:
            throw Error(a.msg);
          case 10:
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
  return (b = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.a.post(d + "/web/widget/buy", {
              widget_ids: t
            });
          case 2:
            if (n = e.sent, 200 !== (r = n.data).code) {
              e.next = 6;
              break;
            }
            return e.abrupt("return", r.success);
          case 6:
            throw Error(r.msg);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function y(e) {
  return E.apply(this, arguments);
}
function E() {
  return (E = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = t.join(",");
            e.next = 3;
            return l.a.delete(d + "/web/widget/remove", {
              params: {
                widget_ids: n
              }
            });
          case 3:
            if (r = e.sent, 200 !== (i = r.data).code) {
              e.next = 7;
              break;
            }
            return e.abrupt("return", i.success);
          case 7:
            throw Error(i.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function O(e, t) {
  var n = Object(a.Db)(e);
  if (n) {
    var r;
    if (!(t || (r = localStorage.getItem("guestId")))) {
      r = Object(s.a)("GUEST");
      localStorage.setItem("guestId", r);
    }
    var o = 1;
    if (Object(c.e)(e)) {
      o = 2;
      e = e.replace(c.a, "");
    } else {
      if (Object(c.d)(e)) {
        o = 3;
      }
    }
    l.a.post(u.a.serverHost + "/data-center/widget", {
      widget_code: e,
      widget_type: n.isInvisibleWidget ? 2 : 1,
      source_type: o,
      user_id: t ? t + "" : r
    });
  }
}
function w(e) {
  return C.apply(this, arguments);
}
function C() {
  return (C = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.a.get(u.a.serverHost + "/data-center/widget/total", {
              params: {
                widget_code_list: t.join(",")
              }
            });
          case 2:
            if (n = e.sent, 200 !== (r = n.data).code) {
              e.next = 7;
              break;
            }
            i = r.data.totalList;
            return e.abrupt("return", i);
          case 7:
            throw Error(r.msg);
          case 8:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default O;