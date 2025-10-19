/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：450
 */

"use strict";

export { m as b };
export { g as i };
export { v as c };
export { b as g };
export { y as a };
export { E as m };
export { w as f };
export { S as n };
export { A as e };
export { N as d };
export { k as l };
export { x as h };
export { M as j };
export { P as k };
import r = require("../47");
import o = require("../10/index");
import i = require("regenerator-runtime");
var a = function __importDefault(module) {
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
}(i);
import s = require("../7");
import c = require("./282/index");
var l = function __importDefault(module) {
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
}(c);
import u = require("../../../../../src/shared/ui/language");
import d = require("../64");
import p = require("../53");
import f = require("../9");
import h = require("../141/311");
function m(e, t) {
  var n = document.createElement("a");
  document.body.appendChild(n);
  n.setAttribute("href", e);
  n.setAttribute("download", t);
  n.click();
  document.body.removeChild(n);
}
function g(e) {
  return _.apply(this, arguments);
}
function _() {
  return (_ = s.a(a.a.mark(function e(t) {
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            return e.abrupt("return", new Promise(function (e, n) {
              var r = new FileReader();
              r.readAsText(t);
              r.onload = function () {
                var t = this.result;
                if ("string" === typeof t) {
                  try {
                    var n = JSON.parse(t);
                    e(n);
                  } catch (r) {
                    e(null);
                  }
                }
              };
              r.onerror = function (e) {
                n(e);
              };
            }));
          case 1:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function v(e) {
  var t = new FileReader();
  t.readAsArrayBuffer(e);
  return new Promise(function (n, r) {
    t.onload = function (t) {
      var r;
      var o = null === (r = t.target) || undefined === r ? undefined : r.result;
      if (o) {
        n(new Blob([o], {
          type: e.type
        }));
      }
      n(null);
    };
    t.onerror = function (e) {
      r(e);
    };
  });
}
function b(e) {
  var t = document.createElement("img");
  t.src = e;
  return new Promise(function (e, n) {
    t.onload = function () {
      e({
        width: t.naturalWidth,
        height: t.naturalHeight
      });
    };
    t.onerror = function (e) {
      n(e);
    };
  });
}
function y(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [".gif", ".jpeg", ".png", ".svg", ".gif", ".bmp", ".jpg"];
  return t.includes(w(e.name)) ? new Promise(function (t) {
    var n = new window.Image();
    n.src = h.A(e);
    n.onload = function () {
      t(true);
    };
    n.onerror = function () {
      t(false);
    };
  }) : Promise.resolve(false);
}
function E(e, t, n) {
  return O.apply(this, arguments);
}
function O() {
  return (O = s.a(a.a.mark(function e(t, n, r) {
    var o;
    var i;
    var s;
    var c;
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            o = w(t.name);
            i = 1048576;
            s = {
              status: "fail",
              file: t,
              message: u.c(n, "illegalFormat").toString()
            };
            c = {
              status: "success",
              file: t,
              message: ""
            };
            e.next = 6;
            return y(t, r);
          case 6:
            if (e.sent) {
              e.next = 11;
              break;
            }
            return e.abrupt("return", s);
          case 11:
            if (".gif" === o) {
              if (Number(t.size) > 10 * i) {
                c.status = "fail";
                c.message = u.c(n, "tooLargeGifImage").toString();
              }
            } else {
              if (Number(t.size) > 5 * i) {
                c.status = "fail";
                c.message = u.c(n, "tooLargeImage").toString();
              }
            }
            if (!t.name.slice(0, t.name.lastIndexOf(".")).trim()) {
              c.status = "fail";
              c.message = u.c(n, "imageNameError").toString();
            }
            return e.abrupt("return", c);
          case 15:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function w(e) {
  var t = e.lastIndexOf(".");
  return t > -1 ? e.slice(t).toLowerCase() : "";
}
function C(e) {
  return T.apply(this, arguments);
}
function T() {
  return (T = s.a(a.a.mark(function e(t) {
    var n;
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (![".mp3", ".oga", ".wav", ".weba", ".aac"].includes(w(t.name))) {
              e.next = 5;
              break;
            }
            (n = document.createElement("audio")).src = h.A(t);
            return e.abrupt("return", new Promise(function (e) {
              n.oncanplay = function () {
                e(true);
              };
              n.onerror = function () {
                e(false);
              };
            }));
          case 5:
            return e.abrupt("return", Promise.resolve(false));
          case 6:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function S(e, t) {
  return I.apply(this, arguments);
}
function I() {
  return (I = s.a(a.a.mark(function e(t, n) {
    var r;
    var o;
    var i;
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = 1048576;
            o = {
              status: "fail",
              file: t,
              message: u.c(n, "illegalFormat").toString()
            };
            i = {
              status: "success",
              file: t,
              message: ""
            };
            e.next = 5;
            return C(t);
          case 5:
            if (e.sent) {
              e.next = 8;
              break;
            }
            return e.abrupt("return", o);
          case 8:
            if (Number(t.size) > 10 * r) {
              i.status = "fail";
              i.message = u.c(n, "tooLargeSound").toString();
            }
            if (!t.name.slice(0, t.name.lastIndexOf(".")).trim()) {
              i.status = "fail";
              i.message = u.c(n, "soundNameError").toString();
            }
            return e.abrupt("return", i);
          case 12:
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
  return (j = s.a(a.a.mark(function e(t) {
    var n;
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = document.createElement("audio");
            return e.abrupt("return", new Promise(function (e) {
              n.addEventListener("canplay", function () {
                e(n.duration);
              });
              n.src = t;
            }));
          case 2:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
function N(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 0;
  e = Math.round(e);
  t = Math.round(t);
  if (e < 0) {
    return "";
  }
  if (e < 60) {
    return "".concat(R(t, 2), ":").concat(R(e, 2));
  }
  var n = Math.floor(e / 60);
  var r = e % 60;
  return N(r, n);
}
function R(e, t) {
  if (e >= Math.pow(10, t)) {
    return e.toString();
  }
  var n = Array(t + 1).join("0") + e;
  return n.slice(n.length - t);
}
function k(e) {
  return !(Number(e.size) > 5242880);
}
function x(e, t, n, r) {
  return D.apply(this, arguments);
}
function D() {
  return (D = s.a(a.a.mark(function e(t, n, o, i) {
    var c;
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            c = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv"];
            e.next = 3;
            return new Promise(function (e, u) {
              var d;
              var h = w(n);
              var m = t.name.slice(0, n.length - h.length);
              var g = r.a(o);
              try {
                for (g.s(); !(d = g.n()).done;) {
                  if (!d.value.validator(m)) {
                    m = m.replace(p.z, "");
                    break;
                  }
                }
              } catch (b) {
                g.e(b);
              } finally {
                g.f();
              }
              if (m.length > 20) {
                m = m.slice(0, 20);
              }
              var _ = f.ac(m, i);
              var v = new FileReader();
              if (c.includes(t.type)) {
                v.onload = s.a(a.a.mark(function t() {
                  var n;
                  var r;
                  var o;
                  var i;
                  var s;
                  var c;
                  var u;
                  var d;
                  var p;
                  var f;
                  var h;
                  return a.a.wrap(function (t) {
                    for (;;) {
                      switch (t.prev = t.next) {
                        case 0:
                          if ((n = v.result) && "string" !== typeof n) {
                            for (r = l.a.read(n, {
                              type: "array"
                            }), o = r.Sheets[r.SheetNames[0]], i = l.a.utils.decode_range(o["!ref"] || ""), s = i.s.r; s <= i.e.r; ++s) {
                              for (c = i.s.c; c <= i.e.c; ++c) {
                                u = {
                                  c: c,
                                  r: s
                                };
                                d = l.a.utils.encode_cell(u);
                                if ((p = o[d]) && p.h) {
                                  p.w = undefined;
                                  p.v = p.h;
                                }
                                if (p && "s" !== p.t) {
                                  p.v = p.v.toString();
                                }
                              }
                            }
                            f = l.a.utils.sheet_to_json(o, {
                              header: 1
                            });
                            h = L(f, _);
                            e(h);
                          } else {
                            e(null);
                          }
                        case 2:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                }));
                v.readAsArrayBuffer(t);
              }
            });
          case 3:
            return e.abrupt("return", e.sent);
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
var M = function () {
  var e = s.a(a.a.mark(function e(t) {
    var n;
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/csv"];
            e.next = 3;
            return new Promise(function (e, r) {
              var o = new FileReader();
              if (n.includes(t.type)) {
                o.onload = s.a(a.a.mark(function t() {
                  var n;
                  var i;
                  var s;
                  var c;
                  var u;
                  var d;
                  var p;
                  var f;
                  var h;
                  var m;
                  var g;
                  return a.a.wrap(function (t) {
                    for (;;) {
                      switch (t.prev = t.next) {
                        case 0:
                          if ((n = o.result) && "string" !== typeof n) {
                            for (i = l.a.read(n, {
                              type: "array"
                            }), s = i.Sheets[i.SheetNames[0]], c = l.a.utils.decode_range(s["!ref"] || ""), u = c.s.r; u <= c.e.r; ++u) {
                              for (d = c.s.c; d <= c.e.c; ++d) {
                                p = {
                                  c: d,
                                  r: u
                                };
                                f = l.a.utils.encode_cell(p);
                                if ((h = s[f]) && h.w && h.w.length > 1e3) {
                                  r({
                                    error: "cell length larger than 1000"
                                  });
                                }
                                if (h && h.h) {
                                  h.w = undefined;
                                  h.v = h.h;
                                }
                                if (h && "s" !== h.t) {
                                  h.v = h.v.toString();
                                }
                              }
                            }
                            m = l.a.utils.sheet_to_json(s, {
                              header: 1
                            });
                            g = L(m, "test", true);
                            e(g);
                          } else {
                            r({
                              error: "buffer not string"
                            });
                          }
                        case 2:
                        case "end":
                          return t.stop();
                      }
                    }
                  }, t);
                }));
                o.readAsArrayBuffer(t);
              }
            });
          case 3:
            return e.abrupt("return", e.sent);
          case 4:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }));
  return function (t) {
    return e.apply(this, arguments);
  };
}();
function L(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
  var r = {
    id: "",
    name: t,
    header: {},
    data: []
  };
  var i = {};
  Object.entries(e[0]).forEach(function (e) {
    var t = o.a(e, 2);
    var a = t[0];
    var s = t[1];
    var c = d.a("COLUMN");
    i[a] = c;
    r.header[c] = {
      field: s,
      type: n ? "string" : ""
    };
  });
  e.splice(0, 1);
  Object.values(e).forEach(function (e) {
    var t = {};
    t.rowId = d.a("ROW");
    Object.entries(e).forEach(function (e) {
      var n = o.a(e, 2);
      var r = n[0];
      var a = n[1].replace("&#x000d;<br/>", " ");
      var s = i[r];
      t[s] = a;
    });
    r.data.push(t);
  });
  return r;
}
function P(e, t) {
  return B.apply(this, arguments);
}
function B() {
  return (B = s.a(a.a.mark(function e(t, n) {
    return a.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2;
            return new Promise(function (e, r) {
              try {
                var o = new Image();
                var i = document.createElement("canvas");
                var a = i.getContext("2d");
                o.src = t;
                o.setAttribute("crossOrigin", "Anonymous");
                o.onload = function () {
                  var t = this.width;
                  var r = this.height;
                  i.width = r;
                  i.height = t;
                  if (!(null === a || undefined === a)) {
                    a.translate(i.width / 2, i.height / 2);
                  }
                  if (!(null === a || undefined === a)) {
                    a.rotate(n * Math.PI / 180);
                  }
                  if (!(null === a || undefined === a)) {
                    a.drawImage(o, -t / 2, -r / 2);
                  }
                  e(i.toDataURL());
                };
              } catch (s) {
                r(s);
              }
            });
          case 2:
            return e.abrupt("return", e.sent);
          case 3:
          case "end":
            return e.stop();
        }
      }
    }, e);
  }))).apply(this, arguments);
}
export default y;