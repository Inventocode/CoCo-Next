"use strict";

export { d as c };
export { p as l };
export { h as a };
export { g as e };
export { v as d };
export { y as i };
export { O as b };
export { C as h };
export { S as k };
export { A as m };
export { N as j };
export { k as g };
export { D as n };
export { L as f };
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
var a = require("./35/index");
var s = require("./98");
var c = require("./53");
var l = require("./59/index");
var u = require("./41");
function d(e, t, n, r, o, i, l, u, d, p, f, h) {
  var m = Object(s.d)();
  var g = Object(s.e)();
  var _ = {
    id: e,
    version: c.e,
    screenList: [],
    widgetMap: {},
    variableMap: {},
    gridMap: {},
    blockJsonMap: {},
    initialScreenId: d,
    apiToken: p,
    extensionWidgetList: m,
    unsafeExtensionWidgetList: g
  };
  r.forEach(function (e) {
    return _.variableMap[e.id] = e.defaultValue;
  });
  o.forEach(function (e) {
    return _.variableMap[e.id] = e.defaultValue;
  });
  h.forEach(function (e) {
    return _.variableMap[e.id] = e.defaultValue;
  });
  f.forEach(function (e) {
    var t = Object(a.Cb)(e);
    if (t) {
      _.widgetMap[e] = t;
    }
  });
  n.forEach(function (e) {
    var n;
    e.primitiveVariables.forEach(function (e) {
      return _.variableMap[e.id] = e.defaultValue;
    });
    e.arrayVariables.forEach(function (e) {
      return _.variableMap[e.id] = e.defaultValue;
    });
    e.objectVariables.forEach(function (e) {
      return _.variableMap[e.id] = e.defaultValue;
    });
    e.widgetIds.forEach(function (e) {
      var t = Object(a.Cb)(e);
      if (t) {
        _.widgetMap[e] = t;
      }
    });
    if (!(null === (n = e.invisibleWidgetIds) || void 0 === n)) {
      n.forEach(function (e) {
        var t = Object(a.Cb)(e);
        if (t) {
          _.widgetMap[e] = t;
        }
      });
    }
    _.screenList.push({
      id: e.id,
      title: e.title,
      type: e.type,
      position: e.position,
      size: e.size,
      widgetIds: e.widgetIds,
      invisibleWidgetIds: e.invisibleWidgetIds,
      backgroundColor: e.backgroundColor,
      backgroundImage: e.backgroundImage,
      backgroundImageResizeMode: e.backgroundImageResizeMode
    });
    var r = t.getWorkspaceDataByScreenId(e.id);
    if (r) {
      _.blockJsonMap[e.id] = r.getWorkspaceJson();
    }
    _.imageFileMap = i;
    _.soundFileMap = l;
    _.iconFileMap = u;
  });
  return _;
}
function p(e, t) {
  return f.apply(this, arguments);
}
function f() {
  return (f = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    var i;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch(l.a.serverHost + "/coconut/web/build", {
              method: "POST",
              credentials: "include",
              body: JSON.stringify({
                name: t.apkName,
                data: n,
                icon: t.apkIcon,
                appSplash: t.apkSplash,
                workId: n.id
              }),
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 2:
            r = e.sent;
            e.next = 5;
            return r.json();
          case 5:
            i = e.sent;
            return e.abrupt("return", i.data);
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
  return (m = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch(l.a.serverHost + "/coconut/web/build/progress?pack_label=" + t, {
              mode: "cors",
              method: "GET",
              cache: "no-cache",
              credentials: "include"
            });
          case 2:
            n = e.sent;
            e.next = 5;
            return n.json();
          case 5:
            r = e.sent;
            return e.abrupt("return", r.data);
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
  return (_ = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch(l.a.serverHost + "/coconut/web/apk/info/latest?work_id=" + t, {
              mode: "cors",
              method: "GET",
              cache: "no-cache",
              credentials: "include"
            });
          case 2:
            n = e.sent;
            e.next = 5;
            return n.json();
          case 5:
            r = e.sent;
            return e.abrupt("return", r.data);
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
  return (b = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch(l.a.serverHost + "/coconut/web/apk/pack/stop?pack_label=" + t, {
              mode: "cors",
              method: "put",
              cache: "no-cache",
              credentials: "include"
            });
          case 2:
            n = e.sent;
            e.next = 5;
            return n.json();
          case 5:
            r = e.sent;
            return e.abrupt("return", r.success);
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
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch(l.a.serverHost + "/coconut/web/apk/info?pack_label=" + encodeURIComponent(t), {
              mode: "cors",
              method: "GET",
              cache: "no-cache",
              credentials: "include"
            });
          case 2:
            n = e.sent;
            e.next = 5;
            return n.json();
          case 5:
            r = e.sent;
            return e.abrupt("return", {
              url: r.data.apk_url,
              version: r.data.version,
              expireTime: r.data.apk_download_url_expire_time
            });
          case 7:
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
  return (w = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch("/editor/service/compile", {
              mode: "same-origin",
              method: "POST",
              body: JSON.stringify({
                id: t,
                data: n
              }),
              headers: {
                "Content-Type": "application/json"
              }
            });
          case 2:
            r = e.sent;
            return e.abrupt("return", r.status);
          case 4:
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
  return (T = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch("/editor/service/code?id=".concat(t), {
              method: "GET"
            });
          case 2:
            n = e.sent;
            e.next = 5;
            return n.text();
          case 5:
            r = e.sent;
            return e.abrupt("return", r);
          case 7:
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
  return (I = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return fetch(l.a.serverHost + "/coconut/web/token?work_id=".concat(t), {
              mode: "cors",
              method: "GET",
              credentials: "include"
            });
          case 2:
            n = e.sent;
            e.next = 5;
            return n.json();
          case 5:
            r = e.sent;
            return e.abrupt("return", r.data);
          case 7:
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
  return (j = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i;
    var a;
    var s;
    var c;
    var d;
    var p;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = t.name;
            r = t.description;
            i = t.operation;
            a = t.coverUrl;
            s = t.bcmcUrl;
            c = t.playerUrl;
            d = t.workId;
            e.next = 3;
            return u.a.put(l.a.serverHost + "/coconut/web/work/".concat(d, "/publish"), {
              name: n,
              description: r,
              operation: i,
              cover_url: a,
              bcmc_url: s,
              player_url: c
            });
          case 3:
            p = e.sent;
            return e.abrupt("return", p.data);
          case 5:
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
  return (R = Object(i.a)(o.a.mark(function e(t) {
    var n;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return u.a.get(l.a.serverHost + "/coconut/web/work/".concat(t, "/info"));
          case 2:
            n = e.sent;
            return e.abrupt("return", n.data);
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function k(e) {
  return x.apply(this, arguments);
}
function x() {
  return (x = Object(i.a)(o.a.mark(function e(t) {
    var n;
    var r;
    var i = arguments;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = i.length > 1 && void 0 !== i[1] ? i[1] : 1;
            e.next = 3;
            return u.a.get(l.a.serverHost + "/coconut/web/work/".concat(t, "/load?channel=").concat(n));
          case 3:
            r = e.sent;
            return e.abrupt("return", r.data);
          case 5:
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
  return (M = Object(i.a)(o.a.mark(function e(t, n) {
    var r;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return u.a.put(l.a.serverHost + "/coconut/web/work/".concat(t, "/publish_h5"), {
              bcmc_url: n
            });
          case 2:
            r = e.sent;
            return e.abrupt("return", r.data);
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function L(e) {
  return P.apply(this, arguments);
}
function P() {
  return (P = Object(i.a)(o.a.mark(function e(t) {
    var n;
    return o.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return u.a.get(l.a.serverHost + "/coconut/web/work/archive/list/".concat(t, "?offset=0&limit=").concat(50));
          case 2:
            n = e.sent;
            return e.abrupt("return", n.data.data.items);
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default h;