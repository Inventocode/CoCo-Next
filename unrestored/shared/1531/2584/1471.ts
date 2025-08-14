"use strict";

(function (e) {
  var r = require("./10/index");
  var o = require("react");
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
  var a = require("./16/index");
  var s = require("./8");
  var c = function __importDefault(module) {
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
  }(s);
  var l = require("./702");
  var u = require("./13/index");
  var d = require("../../../../src/shared/events/messages-wrapper");
  var p = require("./468");
  var f = function __importDefault(module) {
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
  }(p);
  var h = require("./5");
  var m = require("./9");
  var g = require("./190");
  var _ = require("./26/index");
  var v = require("./239");
  exports.a = o.memo(function () {
    var t;
    var n = o.useRef();
    var s = o.useRef(null);
    var p = o.useState(false);
    var b = r.a(p, 2);
    var y = b[0];
    var E = b[1];
    var O = o.useRef(null);
    var w = a.e(function (e) {
      return e.project.contextMenuInfo;
    }).toJS();
    var C = w.position;
    var T = w.visible;
    var S = w.widgetId;
    var I = m.Bb(S);
    var A = a.e(function (e) {
      return e.project.screens;
    });
    var j = null === (t = v.d()) || undefined === t ? undefined : t.id;
    o.useLayoutEffect(function () {
      var e = s.current;
      if (T && e) {
        var t = e.clientHeight;
        var n = window.innerHeight - (C.y + t);
        if (n < 0) {
          C.y += n;
        }
        e.style.top = C.y + "px";
        e.style.left = C.x + "px";
      }
    }, [T, C]);
    var N = l.a().formatMessage;
    var R = a.d();
    o.useEffect(function () {
      var t = function t() {
        e(function () {
          R(d.Wg());
          document.removeEventListener("mousedown", t, true);
        });
      };
      if (T) {
        document.addEventListener("mousedown", t, true);
      }
      return function () {
        return document.removeEventListener("mousedown", t, true);
      };
    }, [R, T]);
    var k = function (e) {
      R(d.Ef(m.w(S), e));
    };
    var x = function () {
      var e;
      var t = null === (e = n.current) || undefined === e ? undefined : e.id;
      if (j && t) {
        R(d.Mf(t, j));
      }
    };
    var D = function () {
      n.current = undefined;
    };
    o.useLayoutEffect(function () {
      var e = O.current;
      if (e) {
        if (y) {
          var t = e.getClientRects()[0];
          var n = t.height + t.y - window.innerHeight;
          if (n > 0) {
            e.style.top = e.offsetTop - n + "px";
          }
        } else {
          e.style.top = "10px";
        }
      }
    }, [y]);
    return i.a.createElement("div", {
      className: f.a.wrapper,
      ref: s,
      style: {
        display: T ? "block" : "none"
      }
    }, i.a.createElement("div", {
      className: c()(f.a.menuItem),
      onMouseDown: function () {
        R(d.Ef(m.w(S)));
      }
    }, N({
      id: "copyAndPaste"
    })), ![h.a, h.c].includes((null === I || undefined === I ? undefined : I.type) || "") && i.a.createElement("div", {
      className: c()(f.a.menuItem, f.a.copyTo),
      onMouseEnter: function () {
        E(true);
      },
      onMouseLeave: function () {
        E(false);
      }
    }, i.a.createElement("span", null, N({
      id: "copyTo"
    })), " ", i.a.createElement(u.j, {
      type: "icon-right"
    }), i.a.createElement("ul", {
      ref: O,
      className: f.a.screens,
      style: {
        display: y ? "block" : "none"
      }
    }, A.map(function (e, t) {
      return i.a.createElement("li", {
        key: e.get("id"),
        onMouseDown: k.bind(null, e.id)
      }, i.a.createElement("span", null, "".concat(t + 1, ".")), i.a.createElement("div", {
        className: f.a.screenSnapshot
      }, i.a.createElement("img", {
        src: e.get("snapshot"),
        alt: ""
      })), i.a.createElement("p", null, e.get("title")));
    }))), i.a.createElement("div", {
      onMouseDown: function () {
        var e = m.Fb(S || "");
        var t = N({
          id: "deleteWidget"
        }) + "“" + g.f(e, 10) + "”?";
        var r = _.z.checkFieldValueIsSelected("WIDGET_ID", S);
        var o = _.z.checkSomeFieldValueIsSelected("WIDGET_ID", m.U(S));
        if (r || o) {
          n.current = m.Bb(S);
          R(d.zh({
            onConfirm: x,
            onClose: D,
            allowText: N({
              id: "delete"
            }),
            title: t,
            isDangerous: true,
            content: N({
              id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
            })
          }));
        } else {
          if (j) {
            R(d.Mf(S, j));
          }
        }
      },
      className: c()(f.a.menuItem, f.a.delete)
    }, N({
      id: "delete"
    })));
  });
}).call(this, require("./795/625/index").setImmediate);