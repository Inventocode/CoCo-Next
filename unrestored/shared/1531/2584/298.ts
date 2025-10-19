/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：298
 */

"use strict";

export { h };
export { g as f };
export { v as g };
export { y as c };
export { O as b };
export { C as d };
export { S as e };
export { A as a };
import r = require("./6");
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
import a = require("./7");
import s = require("./60");
import c = require("./197/index");
import l = require("../../../../src/shared/utils/network/axios-with-credentials");
import u = require("./59/index");
import d = require("./278");
var p = u.a.serverHost;
var f = u.a.oTServerHost;
function h(e) {
  return m.apply(this, arguments);
}
function m() {
  return (m = a.a(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = new Blob([t], {
              type: "application/json,charset=utf-8;"
            });
            r = new File([n], "project.json", {
              type: n.type
            });
            e.next = 4;
            return c.e(r, "JSON");
          case 4:
            o = e.sent;
            return e.abrupt("return", o.url);
          case 6:
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
  return (_ = a.a(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var a;
    var c;
    var u;
    var f;
    var h;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = t.name;
            r = t.bcmUrl;
            o = t.coverUrl;
            a = t.sourceTag;
            e.prev = 1;
            e.next = 4;
            return l.a.post(p + "/coconut/web/work", {
              name: n,
              preview_url: o,
              bcm_url: r,
              archive_version: "0.1.0",
              save_type: t.saveType || s.b.ByUser,
              work_source_label: a
            });
          case 4:
            if (!(null === (u = e.sent) || undefined === u || null === (c = u.data) || undefined === c ? undefined : c.data)) {
              e.next = 8;
              break;
            }
            f = u.data.data.work_id;
            return e.abrupt("return", f);
          case 8:
            console.error("saveProject error");
            throw new Error(d.a.SAVE_PROJECT_ERROR);
          case 12:
            if (e.prev = 12, e.t0 = e.catch(1), console.error("saveProject error", e.t0), 401 !== (null === (h = e.t0.response) || undefined === h ? undefined : h.status)) {
              e.next = 17;
              break;
            }
            throw new Error(d.a.USER_NOT_LOGIN);
          case 17:
            throw e.t0;
          case 18:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[1, 12]]);
  }))).apply(this, arguments);
}
function v(e) {
  return b.apply(this, arguments);
}
function b() {
  return (b = a.a(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var a;
    var c;
    var u;
    var f;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = t.name;
            r = t.bcmUrl;
            o = t.coverUrl;
            a = t.id;
            e.prev = 1;
            e.next = 4;
            return l.a.put(p + "/coconut/web/work", {
              id: a,
              name: n,
              preview_url: o,
              bcm_url: r,
              archive_version: "0.1.0",
              save_type: t.saveType || s.b.ByUser
            });
          case 4:
            if (null === (u = e.sent) || undefined === u || null === (c = u.data) || undefined === c ? undefined : c.data) {
              e.next = 7;
              break;
            }
            throw new Error(d.a.UPDATE_PROJECT_ERROR);
          case 7:
            e.next = 14;
            break;
          case 9:
            if (e.prev = 9, e.t0 = e.catch(1), 401 !== (null === (f = e.t0.response) || undefined === f ? undefined : f.status)) {
              e.next = 13;
              break;
            }
            throw new Error(d.a.USER_NOT_LOGIN);
          case 13:
            throw e.t0;
          case 14:
          case "end":
            return e.stop();
        }
      }
    }, e, null, [[1, 9]]);
  }))).apply(this, arguments);
}
function y(e, t, n) {
  return E.apply(this, arguments);
}
function E() {
  return (E = a.a(i.a.mark(function e(t, n, r) {
    var o;
    var a;
    var s;
    var c;
    var u;
    var d;
    var f;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = "?offset=".concat(t, "&limit=").concat(n) + (undefined !== r ? "&published=".concat(r) : "");
            a = "".concat(p, "/coconut/web/work/list").concat(o);
            e.next = 4;
            return l.a.get(a);
          case 4:
            if (s = e.sent, c = [], !(u = s.data)) {
              e.next = 12;
              break;
            }
            d = u.currentTime;
            f = u.data.items;
            if (Array.isArray(f)) {
              f.forEach(function (e) {
                var t = e.id;
                var n = e.work_id;
                var r = e.name;
                var o = e.cover_url;
                var i = e.preview_url;
                var a = e.updated_at;
                var s = e.is_coll_work;
                var l = e.published_at;
                var u = {
                  id: n || t,
                  name: r,
                  coverUrl: o,
                  previewUrl: i,
                  updateTime: 1e3 * a,
                  serverTime: 1e3 * d,
                  isCollWork: s,
                  publishedTime: l
                };
                c.push(u);
              });
            }
            return e.abrupt("return", {
              list: c,
              total: u.data.total
            });
          case 12:
            throw new Error("Get my project list error");
          case 13:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function O(e, t) {
  return w.apply(this, arguments);
}
function w() {
  return (w = a.a(i.a.mark(function e(t, n) {
    var r;
    var o;
    var a;
    var s;
    var c;
    var u;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return l.a.get("".concat(f, "/coll/coco/coll_works"), {
              params: {
                current_page: t,
                page_size: n
              }
            });
          case 2:
            if (o = e.sent, a = [], !(s = null === o || undefined === o || null === (r = o.data) || undefined === r ? undefined : r.data)) {
              e.next = 10;
              break;
            }
            c = Math.round(Date.now() / 1e3);
            u = s.items;
            if (Array.isArray(u)) {
              u.forEach(function (e) {
                var t = e.id;
                var n = e.name;
                var r = e.cover_url;
                var o = e.update_time;
                var i = e.is_coll_work;
                var s = e.published_at;
                var l = {
                  id: t.toString(),
                  name: n,
                  coverUrl: r,
                  updateTime: 1e3 * o,
                  serverTime: 1e3 * c,
                  isCollWork: i,
                  publishedTime: s
                };
                a.push(l);
              });
            }
            return e.abrupt("return", {
              list: a,
              total: s.total
            });
          case 10:
            throw new Error("Get my project list error");
          case 11:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function C(e) {
  return T.apply(this, arguments);
}
function T() {
  return (T = a.a(i.a.mark(function e(t) {
    var n;
    var o;
    var a;
    var s;
    var c;
    var u;
    var d;
    var f;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/coconut/web/work/").concat(t, "/content");
            e.next = 3;
            return l.a.get(n);
          case 3:
            if (o = e.sent, a = o.data, s = a.code, c = a.data) {
              e.next = 9;
              break;
            }
            return e.abrupt("return", {
              code: s,
              data: c
            });
          case 9:
            u = c.bcm_url;
            e.next = 12;
            return fetch(u);
          case 12:
            d = e.sent;
            e.next = 15;
            return d.json();
          case 15:
            f = e.sent;
            if (c.name && c.name !== f.title) {
              f.title = c.name;
            }
            return e.abrupt("return", {
              code: s,
              data: r.a(r.a({}, c), {}, {
                content: f
              })
            });
          case 18:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function S(e) {
  return I.apply(this, arguments);
}
function I() {
  return (I = a.a(i.a.mark(function e(t) {
    var n;
    var r;
    var o;
    var a;
    var s;
    var c;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/coconut/web/work/archive/").concat(t);
            e.next = 3;
            return l.a.get(n);
          case 3:
            r = e.sent;
            o = r.data.data;
            a = o.bcm_url;
            e.next = 8;
            return fetch(a);
          case 8:
            s = e.sent;
            e.next = 11;
            return s.json();
          case 11:
            c = e.sent;
            return e.abrupt("return", {
              content: c
            });
          case 13:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function A(e) {
  return j.apply(this, arguments);
}
function j() {
  return (j = a.a(i.a.mark(function e(t) {
    var n;
    var r;
    return i.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = "".concat(p, "/coconut/web/work/").concat(t);
            e.next = 3;
            return l.a.delete(n);
          case 3:
            r = e.sent;
            return e.abrupt("return", 200 === r.data.code);
          case 5:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default A;