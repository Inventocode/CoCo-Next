"use strict";

export { b as g };
export { y as b };
export { E as a };
export { O as f };
export { w as c };
export { C as d };
export { T as e };
var r = require("../6");
var o = require("../0/index");
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
var a = require("../8");
var s = (module => {
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
})(a);
var c = require("../36/index");
var l = require("../15/index");
var u = require("../5");
var d = require("../10/index");
var p = require("../16/index");
var f = require("../2/index");
require("./846");
var h = require("../9");
var m = require("./669/index");
var g = require("../35/index");
var _ = function (e) {
  var t = e.render;
  var n = e.widgetId;
  var r = e.widgetType;
  var a = Object(o.useState)();
  var s = Object(d.a)(a, 2);
  var c = s[0];
  var l = s[1];
  var _ = Object(p.d)();
  var v = Object(p.e)(function (e) {
    return e.project.selectedWidgetId;
  });
  var b = v === n;
  var y = Object(o.useCallback)(function (e, t, r, o) {
    _(Object(f.Lg)(n, e, t, r, o));
  }, [_, n]);
  var E = "coco-widget-wrapper";
  if (!(r !== u.a && r !== u.c)) {
    E = "";
  }
  var O = Object(h.qb)(n);
  if ((null === O || void 0 === O ? void 0 : O.type) && [u.x, u.A].includes(O.type)) {
    E += " coco-child-widget";
    if (r === u.v) {
      E += " coco-child-widget-full";
    }
    if (n === v) {
      E += " coco-child-widget-selected";
    }
  }
  return i.a.createElement("div", {
    className: E
  }, c && i.a.createElement(m.a, c), t(y, function (e, t, r) {
    if (Object(g.r)(n)) {
      l({
        target: e,
        callback: t,
        options: r
      });
    }
  }, b));
};
var v = require("../90");
var b = new Map();
var y = new Map();
var E = [];
function O(e) {
  var t = e.widget;
  var n = e.forceRender;
  var o = e.zIndex;
  var a = void 0 === o ? 0 : o;
  if (n || !t.parentId) {
    var l = Object(g.Db)(t.type);
    if (!l) {
      return null;
    }
    var d = l.component;
    if (Object(c.q)(t.type) && !l.isInvisibleWidget) {
      var p = new d(Object(r.a)(Object(r.a)({}, t.attributes), {}, {
        __widgetId: t.id,
        __widgetType: t.type,
        __width: t.size.width,
        __height: t.size.height
      }));
      return i.a.createElement(_, {
        key: t.id,
        widgetId: t.id,
        widgetType: t.type,
        render: function () {
          return i.a.createElement("div", {
            id: t.id,
            style: {
              position: "absolute",
              left: t.position.x,
              top: t.position.y,
              display: t.visible ? "block" : "none",
              width: t.size.width,
              height: t.size.height,
              opacity: l.isInvisibleWidget || void 0 === t.opacity ? void 0 : t.opacity / 100
            },
            className: s()(v.b),
            "data-role": u.M
          }, i.a.createElement("div", {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1e4
            }
          }), p.render());
        }
      });
    }
    return i.a.createElement(_, {
      key: t.id,
      widgetId: t.id,
      widgetType: t.type,
      render: function (e, n, r) {
        return i.a.createElement(d, Object.assign({}, t, {
          onChange: e,
          onEdit: n,
          zIndex: a,
          selected: r
        }));
      }
    });
  }
}
function w(e, t) {
  var n = Object(g.Cb)(e);
  return n ? O({
    widget: n,
    forceRender: !0,
    zIndex: t
  }) : null;
}
function C(e) {
  var t = Object(g.Cb)(e);
  return t ? O({
    widget: t,
    forceRender: !0
  }) : null;
}
function T(e, t, n, o) {
  var i;
  var a = Object(g.Cb)(e);
  if (!a) {
    return null;
  }
  var s = Object(l.q)(a);
  var c = Object(g.Cb)(s.parentId || "");
  if (!c) {
    console.error("getParentWidget error");
    return null;
  }
  var d = c;
  if (d.attributes.disabled && s.type === u.H && (["titleSlot"].includes(t) ? s.attributes.color = "#7C7C7C" : s.attributes.color = "#CACACA"), void 0 === n) {
    return O({
      widget: s,
      forceRender: !0
    });
  }
  var p = null === (i = d.attributes.templateSlotMap[t]) || void 0 === i ? void 0 : i.dataBindings;
  if (o && p) {
    var f = o[p];
    if (s.type === u.H) {
      s.attributes.content = f || "";
    }
    if (s.type === u.v && f && Object(g.Fb)(f)) {
      s.attributes.fileId = f;
    }
  }
  return O({
    widget: Object(r.a)({}, s),
    forceRender: !0
  });
}
export default E;