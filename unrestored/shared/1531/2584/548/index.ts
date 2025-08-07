"use strict";

import r = require("../11");
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
import a = require("color");
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
import c = require("../8");
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
import u = require("./484/index");
import d = require("./485");
import p = require("./280");
import f = require("./1183/index");
import h = require("../16/index");
import m = require("../90");
import g = require("../235");
import _ = require("../5");
import v = require("../53");
import b = require("./433");
var y = function __importDefault(module) {
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
}(b);
var _a;
_a = o.memo(function (e) {
  var t = e.id;
  var n = e.position;
  var a = e.visible;
  var c = e.attributes;
  var b = e.size;
  var E = e.onDatePickerChange;
  var O = c.backgroundColor;
  var w = c.color;
  var C = c.fontSize;
  var T = c.timeStamp;
  var S = o.useRef(null);
  var I = new Date(T);
  var A = h.e(function (e) {
    var t;
    return null === e || undefined === e || null === (t = e.project) || undefined === t ? undefined : t.playing;
  });
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.n,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, r.a({}, y.a.hide, !a), y.a.dataPicker),
    style: {
      top: n.y,
      left: n.x,
      width: b.width,
      height: b.height,
      textAlign: "center",
      fontSize: C,
      color: s()(w).toString(),
      backgroundColor: s()(O).toString(),
      borderRadius: "18px"
    },
    ref: S
  }, i.a.createElement(p.a, {
    utils: u.a,
    locale: d.a
  }, i.a.createElement(f.a, {
    format: "yyyy年MM月dd日",
    value: I,
    onChange: function (e) {
      if (e && E) {
        E(e);
      }
    },
    TextFieldComponent: function (e) {
      return i.a.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: C,
          color: w,
          backgroundColor: O,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px"
        },
        id: "date-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick();
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "");
    },
    cancelLabel: "取消",
    okLabel: "确定"
  })), undefined !== A && !A && i.a.createElement("div", {
    className: l()(y.a.mask),
    onClick: function () {
      var e;
      var n = S.current;
      if (n) {
        if (n.dataset.clickType === v.h.CLICK) {
          if (!(null === (e = document.getElementById("date-picker-".concat(t))) || undefined === e)) {
            e.click();
          }
        }
      }
    }
  }));
});
export { _a as a };
export default _a;