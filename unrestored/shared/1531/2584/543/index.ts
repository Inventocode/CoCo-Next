/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：543
 */

"use strict";

import r = require("../6");
import o = require("../11");
import i = require("react");
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
import s = require("color");
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
import l = require("../8");
var u = function __importDefault(module) {
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
}(l);
import d = require("../5");
import p = require("../15");
import f = require("../35");
import h = require("../90");
import m = require("../321");
import g = require("../83");
import _ = require("./380");
var v = function __importDefault(module) {
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
}(_);
var _a;
_a = function (e) {
  var t = e.position;
  var n = e.size;
  var s = e.id;
  var l = e.visible;
  var _ = e.opacity;
  var b = e.attributes;
  var y = e.iconFile;
  var E = e.onClick;
  var O = e.onMouseDown;
  var w = e.onMouseUp;
  var C = b.color;
  var T = b.mode;
  var S = b.disabled;
  var I = b.text;
  var A = b.sizeType;
  var j = b.iconId;
  var N = i.useRef(null);
  var R = i.useRef(null);
  var k = f.O(T) === g.a.ICON;
  var x = i.useMemo(function () {
    var e = function (e, t) {
      var n;
      var r = c()(t).toString();
      return (n = {}, o.a(n, g.b.CONTAINED_TEXT, {
        default: {
          backgroundColor: r,
          color: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), o.a(n, g.b.OUTLINED_TEXT, {
        default: {
          borderColor: r,
          color: r,
          background: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), o.a(n, g.b.CONTAINED_ICON, {
        default: {
          backgroundColor: r,
          color: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          backgroundColor: "#cccccc",
          color: "#e6e6e6"
        }
      }), o.a(n, g.b.OUTLINED_ICON, {
        default: {
          borderColor: r,
          color: r,
          background: p.Z(r) ? p.a : "#ffffff"
        },
        disabled: {
          background: "#ffffff",
          borderColor: "#e9e9e9",
          color: "#e9e9e9"
        }
      }), n)[e];
    }(T, C);
    return S ? e.disabled : e.default;
  }, [T, C, S]);
  var D = i.useMemo(function () {
    return f.Q(A, T);
  }, [T, A]);
  var M = D.height;
  var L = D.fontSize;
  var P = D.minWidth;
  var B = D.maxWidth;
  return a.a.createElement("button", {
    id: s,
    className: u()(h.b, v.a.buttonWidget, o.a({}, v.a.hide, !l)),
    "data-role": d.M,
    "data-widget-type": d.d,
    "data-lock-height": true,
    "data-min-width": P,
    "data-max-width": B,
    ref: N,
    onClick: function () {
      var e = R.current;
      if (E) {
        E(e);
      }
    },
    onMouseDown: function () {
      if (O) {
        O();
      }
    },
    onMouseUp: function () {
      if (w) {
        w();
      }
    },
    style: r.a({
      borderRadius: k ? M / 2 : M / 4,
      top: t.y,
      left: t.x,
      height: M,
      width: n.width,
      fontSize: L,
      opacity: undefined === _ ? undefined : _ / 100
    }, x)
  }, k ? a.a.createElement(m.a, {
    icon: y || f.fb(j)
  }) : a.a.createElement("div", {
    className: u()(v.a.inputWrapper)
  }, a.a.createElement("div", {
    className: v.a.text,
    ref: R
  }, I)));
};
export { _a as a };
export default _a;