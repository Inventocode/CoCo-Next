"use strict";

export { u as a };
export { d as g };
export { p as c };
export { h as d };
export { g as b };
export { v as f };
export { y as e };
var r;
import o = require("regenerator-runtime");
var i = function __importDefault(module) {
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
}(o);
import a = require("../6");
import s = require("../7");
import c = require("../41");
var l = require("../59/index").a.socketHost;
function u() {
  var e = {};
  if (r && (r.authorization && (e["x-coconut-authorization"] = r.authorization), r.device)) {
    var t = r.device;
    var n = t.groupId;
    var o = t.platform;
    var i = t.origin;
    e["X-CodeMao-Mobile-Requested"] = JSON.stringify({
      group_id: n,
      platform: o,
      origin: i
    });
  }
  return e;
}
function d(e) {
  r = e;
}
function p(e, t, n) {
  return f.apply(this, arguments);
}
function f() {
  return (f = s.a(i.a.mark(function e(t, n, r) {
    var o;
    var s;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = {
              room_name: t,
              work_id: n,
              user_limit: r
            };
            e.next = 3;
            return c.a.post(l + "/coconut/room", a.a({}, o), {
              headers: u()
            });
          case 3:
            if ((s = e.sent).data.success) {
              e.next = 6;
              break;
            }
            throw new Error(s.data.msg);
          case 6:
            return e.abrupt("return", s.data.data);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function h(e) {
  return m.apply(this, arguments);
}
function m() {
  return (m = s.a(i.a.mark(function e(t) {
    var n;
    var r;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = {
              username: t
            };
            e.next = 3;
            return c.a.put(l + "/coconut/room/username", a.a({}, n), {
              headers: u()
            });
          case 3:
            if ((r = e.sent).data.success) {
              e.next = 6;
              break;
            }
            throw new Error(r.data.msg);
          case 6:
            return e.abrupt("return", r.data.msg);
          case 7:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function g(e) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = s.a(i.a.mark(function e(t) {
    var n;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return c.a.get(l + "/coconut/room/allow_join?id=".concat(t), {
              headers: u()
            });
          case 2:
            if ((n = e.sent).data.success) {
              e.next = 5;
              break;
            }
            throw new Error(n.data.msg);
          case 5:
            return e.abrupt("return", n.data.data);
          case 6:
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
  return (b = s.a(i.a.mark(function e(t) {
    var n;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return c.a.get(l + "/coconut/room/users?id=".concat(t), {
              headers: u()
            });
          case 2:
            if ((n = e.sent).data.success) {
              e.next = 5;
              break;
            }
            throw new Error(n.data.msg);
          case 5:
            return e.abrupt("return", n.data.data);
          case 6:
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
  return (E = s.a(i.a.mark(function e(t) {
    var n;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return c.a.get(l + "/coconut/room?work_id=".concat(t), {
              headers: u()
            });
          case 2:
            if ((n = e.sent).data.success) {
              e.next = 5;
              break;
            }
            throw new Error(n.data.msg);
          case 5:
            return e.abrupt("return", n.data.data);
          case 6:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default u;