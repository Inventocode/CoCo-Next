"use strict";

var r = require("../11");
var o = require("../0/index");
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
var a = require("../51/index");
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
var c = require("../8");
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
var u = require("./484/index");
var d = require("./485");
var p = require("./280");
var f = require("./1183/index");
var h = require("../16/index");
var m = require("../90");
var g = require("../235");
var _ = require("../5");
var v = require("../53");
var b = require("./433");
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
_a = Object(o.memo)(function (e) {
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
  var S = Object(o.useRef)(null);
  var I = new Date(T);
  var A = Object(h.e)(function (e) {
    var t;
    return null === e || void 0 === e || null === (t = e.project) || void 0 === t ? void 0 : t.playing;
  });
  return i.a.createElement("div", {
    id: t,
    "data-role": _.M,
    "data-widget-type": _.n,
    "data-min-width": g.l,
    "data-max-width": g.j,
    "data-min-height": g.k,
    "data-max-height": g.i,
    className: l()(m.b, Object(r.a)({}, y.a.hide, !a), y.a.dataPicker),
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
    format: "yyyy\u5e74MM\u6708dd\u65e5",
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
          if (null === e || void 0 === e ? void 0 : e.onClick) {
            e.onClick();
          }
        }
      }, (null === e || void 0 === e ? void 0 : e.value) || "");
    },
    cancelLabel: "\u53d6\u6d88",
    okLabel: "\u786e\u5b9a"
  })), void 0 !== A && !A && i.a.createElement("div", {
    className: l()(y.a.mask),
    onClick: function () {
      var e;
      var n = S.current;
      if (n) {
        if (n.dataset.clickType === v.h.CLICK) {
          if (!(null === (e = document.getElementById("date-picker-".concat(t))) || void 0 === e)) {
            e.click();
          }
        }
      }
    }
  }));
});
export { _a as a };
export default _a;