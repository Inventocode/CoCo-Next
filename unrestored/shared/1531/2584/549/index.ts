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
import u = require("../548/484/index");
import d = require("../548/485");
import p = require("../548/280");
import f = require("./1186/index");
import h = require("../16/index");
import m = require("../90");
import g = require("../236");
import _ = require("../5");
import v = require("../28/index");
import b = require("../53");
import y = require("./434");
var E = function __importDefault(module) {
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
}(y);
var _a;
_a = o.memo(function (e) {
  var t = e.id;
  var n = e.position;
  var a = e.visible;
  var c = e.attributes;
  var y = e.size;
  var O = e.onDatePickerChange;
  var w = c.backgroundColor;
  var C = c.color;
  var T = c.fontSize;
  var S = c.timeStamp;
  var I = o.useRef(null);
  var A = new Date(S);
  var j = h.e(function (e) {
    var t;
    return null === e || undefined === e || null === (t = e.project) || undefined === t ? undefined : t.playing;
  });
  var N = o.useRef(false);
  var R = function (e) {
    if (N.current) {
      e.preventDefault();
    }
  };
  o.useEffect(function () {
    if (v.b() && v.h()) {
      document.body.addEventListener("touchmove", R, {
        passive: false
      });
    }
    return function () {
      if (v.b() && v.h()) {
        document.body.removeEventListener("touchmove", R);
      }
    };
  });
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.J,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, r.a({}, E.a.hide, !a), E.a.timePicker),
    style: {
      top: n.y,
      left: n.x,
      width: y.width,
      height: y.height,
      textAlign: "center",
      fontSize: T,
      color: s()(C).toString(),
      backgroundColor: s()(w).toString(),
      borderRadius: "18px"
    },
    ref: I
  }, i.a.createElement(p.a, {
    utils: u.a,
    locale: d.a
  }, i.a.createElement(f.a, {
    value: A,
    onChange: function (e) {
      if (e && O) {
        O(e);
      }
    },
    TextFieldComponent: function (e) {
      return i.a.createElement("div", {
        style: {
          textAlign: "center",
          fontSize: T,
          color: C,
          backgroundColor: w,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "18px"
        },
        id: "time-picker-".concat(t),
        onClick: function () {
          if (null === e || undefined === e ? undefined : e.onClick) {
            e.onClick();
          }
        }
      }, (null === e || undefined === e ? undefined : e.value) || "");
    },
    cancelLabel: "取消",
    okLabel: "确定",
    onOpen: function () {
      N.current = true;
    },
    onClose: function () {
      N.current = false;
    }
  })), undefined !== j && !j && i.a.createElement("div", {
    className: l()(E.a.mask),
    onClick: function () {
      var e;
      var n = I.current;
      if (n) {
        if (n.dataset.clickType === b.h.CLICK) {
          if (!(null === (e = document.getElementById("time-picker-".concat(t))) || undefined === e)) {
            e.click();
          }
        }
      }
    }
  }));
});
export { _a as a };
export default _a;