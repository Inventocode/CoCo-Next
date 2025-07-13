"use strict";

(function (e) {
  var r = require("./10/index");
  var o = require("./0/index");
  var i = n.n(o);
  var a = require("./16/index");
  var s = require("./8");
  var c = n.n(s);
  var l = require("./702");
  var u = require("./13/index");
  var d = require("./2/index");
  var p = require("./468");
  var f = n.n(p);
  var h = require("./5");
  var m = require("./9");
  var g = require("./190");
  var _ = require("./26/index");
  var v = require("./239");
  exports.a = Object(o.memo)(function () {
    var t;
    var n = Object(o.useRef)();
    var s = Object(o.useRef)(null);
    var p = Object(o.useState)(!1);
    var b = Object(r.a)(p, 2);
    var y = b[0];
    var E = b[1];
    var O = Object(o.useRef)(null);
    var w = Object(a.e)(function (e) {
      return e.project.contextMenuInfo;
    }).toJS();
    var C = w.position;
    var T = w.visible;
    var S = w.widgetId;
    var I = Object(m.Bb)(S);
    var A = Object(a.e)(function (e) {
      return e.project.screens;
    });
    var j = null === (t = Object(v.d)()) || void 0 === t ? void 0 : t.id;
    Object(o.useLayoutEffect)(function () {
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
    var N = Object(l.a)().formatMessage;
    var R = Object(a.d)();
    Object(o.useEffect)(function () {
      var t = function t() {
        e(function () {
          R(Object(d.Wg)());
          document.removeEventListener("mousedown", t, !0);
        });
      };
      if (T) {
        document.addEventListener("mousedown", t, !0);
      }
      return function () {
        return document.removeEventListener("mousedown", t, !0);
      };
    }, [R, T]);
    var k = function (e) {
      R(Object(d.Ef)(Object(m.w)(S), e));
    };
    var x = function () {
      var e;
      var t = null === (e = n.current) || void 0 === e ? void 0 : e.id;
      if (j && t) {
        R(Object(d.Mf)(t, j));
      }
    };
    var D = function () {
      n.current = void 0;
    };
    Object(o.useLayoutEffect)(function () {
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
        R(Object(d.Ef)(Object(m.w)(S)));
      }
    }, N({
      id: "copyAndPaste"
    })), ![h.a, h.c].includes((null === I || void 0 === I ? void 0 : I.type) || "") && i.a.createElement("div", {
      className: c()(f.a.menuItem, f.a.copyTo),
      onMouseEnter: function () {
        E(!0);
      },
      onMouseLeave: function () {
        E(!1);
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
        var e = Object(m.Fb)(S || "");
        var t = N({
          id: "deleteWidget"
        }) + "\u201c" + Object(g.f)(e, 10) + "\u201d?";
        var r = _.z.checkFieldValueIsSelected("WIDGET_ID", S);
        var o = _.z.checkSomeFieldValueIsSelected("WIDGET_ID", Object(m.U)(S));
        if (r || o) {
          n.current = Object(m.Bb)(S);
          R(Object(d.zh)({
            onConfirm: x,
            onClose: D,
            allowText: N({
              id: "delete"
            }),
            title: t,
            isDangerous: !0,
            content: N({
              id: o ? "deleteParentWidgetTips" : "deleteWidgetTips"
            })
          }));
        } else {
          if (j) {
            R(Object(d.Mf)(S, j));
          }
        }
      },
      className: c()(f.a.menuItem, f.a.delete)
    }, N({
      id: "delete"
    })));
  });
}).call(this, require("./794/625/index").setImmediate);