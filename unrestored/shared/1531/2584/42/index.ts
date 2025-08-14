"use strict";

export { b as g };
export { y as b };
export { E as a };
export { O as f };
export { w as c };
export { C as d };
export { T as e };
import r = require("../6");
import o = require("react");
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
import a = require("../8");
var s = function __importDefault(module) {
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
}(a);
import c = require("../../../../../src/shared/widget/custom/load");
import l = require("../15");
import u = require("../5");
import d = require("../10/index");
import p = require("../16/index");
import f = require("../../../../../src/shared/events/messages-wrapper");
require("./847");
import h = require("../9");
import m = require("./669/index");
import g = require("../35");
var _ = function (e) {
  var t = e.render;
  var n = e.widgetId;
  var r = e.widgetType;
  var a = o.useState();
  var s = d.a(a, 2);
  var c = s[0];
  var l = s[1];
  var _ = p.d();
  var v = p.e(function (e) {
    return e.project.selectedWidgetId;
  });
  var b = v === n;
  var y = o.useCallback(function (e, t, r, o) {
    _(f.Lg(n, e, t, r, o));
  }, [_, n]);
  var E = "coco-widget-wrapper";
  if (!(r !== u.a && r !== u.c)) {
    E = "";
  }
  var O = h.qb(n);
  if ((null === O || undefined === O ? undefined : O.type) && [u.x, u.A].includes(O.type)) {
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
    if (g.r(n)) {
      l({
        target: e,
        callback: t,
        options: r
      });
    }
  }, b));
};
import v = require("../90");
var b = new Map();
var y = new Map();
var E = [];
function O(e) {
  var t = e.widget;
  var n = e.forceRender;
  var o = e.zIndex;
  var a = undefined === o ? 0 : o;
  if (n || !t.parentId) {
    var l = g.Db(t.type);
    if (!l) {
      return null;
    }
    var d = l.component;
    if (c.q(t.type) && !l.isInvisibleWidget) {
      var p = new d(r.a(r.a({}, t.attributes), {}, {
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
              opacity: l.isInvisibleWidget || undefined === t.opacity ? undefined : t.opacity / 100
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
  var n = g.Cb(e);
  return n ? O({
    widget: n,
    forceRender: true,
    zIndex: t
  }) : null;
}
function C(e) {
  var t = g.Cb(e);
  return t ? O({
    widget: t,
    forceRender: true
  }) : null;
}
function T(e, t, n, o) {
  var i;
  var a = g.Cb(e);
  if (!a) {
    return null;
  }
  var s = l.q(a);
  var c = g.Cb(s.parentId || "");
  if (!c) {
    console.error("getParentWidget error");
    return null;
  }
  var d = c;
  if (d.attributes.disabled && s.type === u.H) {
    if (["titleSlot"].includes(t)) {
      s.attributes.color = "#7C7C7C";
    } else {
      s.attributes.color = "#CACACA";
    }
  }
  if (undefined === n) {
    return O({
      widget: s,
      forceRender: true
    });
  }
  var p = null === (i = d.attributes.templateSlotMap[t]) || undefined === i ? undefined : i.dataBindings;
  if (o && p) {
    var f = o[p];
    if (s.type === u.H) {
      s.attributes.content = f || "";
    }
    if (s.type === u.v && f && g.Fb(f)) {
      s.attributes.fileId = f;
    }
  }
  return O({
    widget: r.a({}, s),
    forceRender: true
  });
}
export default E;