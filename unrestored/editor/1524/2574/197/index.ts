"use strict";

export { _ as a };
export { v as e };
export { y as c };
export { w as b };
export { I as f };
export { j as d };
import * as r from "../1/index";
import * as o from "../1/index";
import * as i from "../47";
import * as a from "../7";
import * as s from "../27";
import * as c from "../57/index";
import * as l from "../58/index";
import * as u from "./276";
import * as d from "./479/index";
import * as p from "../9";
import * as f from "../64";
import * as h from "../15/index";
import * as m from "../59/index";
var g = new d.a({
  env: m.a.env,
  projectName: m.a.productCode,
  config: {
    pid: m.a.pid,
    api: m.a.openServiceHost
  }
});
var _ = function (e) {
  Object(c.a)(n, e);
  var t = Object(l.a)(n);
  function n(e, r) {
    var o;
    Object(s.a)(this, n);
    (o = t.call(this, r)).uploadResult = e;
    return o;
  }
  return n;
}(Object(u.a)(Error));
function v(e) {
  return b.apply(this, arguments);
}
function b() {
  return (b = Object(a.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a = arguments;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = a.length > 1 && void 0 !== a[1] ? a[1] : "IMAGE";
            r = t instanceof File ? t.name : "";
            e.next = 4;
            return new Promise(function (e, o) {
              g.create(t, {
                filename: "".concat(m.a.productCode, "/").concat(Object(f.a)(n), "_").concat(Date.now()) + Object(h.I)(r),
                onsuccess: function (t) {
                  return e(t);
                },
                onerror: function (e) {
                  return o(e);
                }
              }).then(function (e) {
                return null === e || void 0 === e ? void 0 : e.start();
              }).catch(function (e) {
                return o(e);
              });
            });
          case 4:
            i = e.sent;
            return e.abrupt("return", i);
          case 6:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function y(e, t) {
  var n;
  var r = [];
  var o = Object(i.a)(e);
  try {
    for (o.s(); !(n = o.n()).done;) {
      var a = n.value;
      r.push(E(a, t));
    }
  } catch (s) {
    o.e(s);
  } finally {
    o.f();
  }
  return Promise.all(r);
}
function E(e, t) {
  return O.apply(this, arguments);
}
function O() {
  return (O = Object(a.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    var s;
    var c;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = t.cdnUrl, i = t.source, !t || r || !i) {
              e.next = 16;
              break;
            }
            if (a = null, !Object(h.R)(i)) {
              e.next = 7;
              break;
            }
            a = Object(h.o)(i, t.id);
            e.next = 11;
            break;
          case 7:
            if (!Object(h.P)(i)) {
              e.next = 11;
              break;
            }
            e.next = 10;
            return Object(h.f)(i, t.id);
          case 10:
            a = e.sent;
          case 11:
            if (!a) {
              e.next = 16;
              break;
            }
            e.next = 14;
            return v(a);
          case 14:
            if (s = e.sent) {
              c = s.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/");
              Object(p.bc)(t.id, c);
              if (t.groupId && void 0 !== t.groupImageIndex) {
                Object(p.cc)(t.groupId, t.groupImageIndex, c);
              }
              t.cdnUrl = c;
              if (n) {
                n(t);
              }
            }
          case 16:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function w(e, t) {
  return C.apply(this, arguments);
}
function C() {
  return (C = Object(a.a)(o.a.mark(function e(t, n) {
    var r;
    var a;
    var s;
    var c;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = [];
            a = Object(i.a)(t);
            try {
              for (a.s(); !(s = a.n()).done;) {
                c = s.value;
                r.push(T(c, n));
              }
            } catch (o) {
              a.e(o);
            } finally {
              a.f();
            }
            e.next = 5;
            return Promise.all(r);
          case 5:
            return e.abrupt("return", e.sent);
          case 6:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function T(e, t) {
  return S.apply(this, arguments);
}
function S() {
  return (S = Object(a.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    var s;
    var c;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = t.cdnUrl, i = t.source, !t || r || !i) {
              e.next = 16;
              break;
            }
            if (a = null, !Object(h.R)(i)) {
              e.next = 7;
              break;
            }
            a = Object(h.o)(i, t.id);
            e.next = 11;
            break;
          case 7:
            if (!Object(h.P)(i)) {
              e.next = 11;
              break;
            }
            e.next = 10;
            return Object(h.g)(i, t.id);
          case 10:
            a = e.sent;
          case 11:
            if (!a) {
              e.next = 16;
              break;
            }
            e.next = 14;
            return v(a);
          case 14:
            if (s = e.sent) {
              c = s.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/");
              t.cdnUrl = c;
              if (n) {
                n(t);
              }
            }
          case 16:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function I(e) {
  return A.apply(this, arguments);
}
function A() {
  return (A = Object(a.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = Object(h.m)(t), "screenshot.png", !n) {
              e.next = 10;
              break;
            }
            r = new File([n], "screenshot.png", {
              type: n.type
            });
            e.next = 6;
            return v(r);
          case 6:
            if (!(i = e.sent)) {
              e.next = 10;
              break;
            }
            a = i.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/");
            return e.abrupt("return", a);
          case 10:
            return e.abrupt("return", "");
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function j(e, t) {
  var n;
  var r = [];
  var o = Object(i.a)(e);
  try {
    for (o.s(); !(n = o.n()).done;) {
      var a = n.value;
      r.push(N(a, t));
    }
  } catch (s) {
    o.e(s);
  } finally {
    o.f();
  }
  return Promise.all(r);
}
function N(e, t) {
  return R.apply(this, arguments);
}
function R() {
  return (R = Object(a.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    var a;
    var s;
    var c;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = t.cdnUrl, i = t.source, !t || r || !i) {
              e.next = 16;
              break;
            }
            if (a = null, !Object(h.R)(i)) {
              e.next = 7;
              break;
            }
            a = Object(h.o)(i, t.name);
            e.next = 11;
            break;
          case 7:
            if (!Object(h.P)(i)) {
              e.next = 11;
              break;
            }
            e.next = 10;
            return Object(h.f)(i, t.name);
          case 10:
            a = e.sent;
          case 11:
            if (!a) {
              e.next = 16;
              break;
            }
            e.next = 14;
            return v(a, "SOUND");
          case 14:
            if (s = e.sent) {
              c = s.url.replace("https://static-creation.codemao.cn/", "https://creation.codemao.cn/");
              t.cdnUrl = c;
              if (n) {
                n(t);
              }
            }
          case 16:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}