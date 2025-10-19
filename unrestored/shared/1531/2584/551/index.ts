/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：551
 */

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
import c = require("color");
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
import u = require("../5");
import d = require("../90");
import p = require("../147");
import f = require("./246");
var h = function __importDefault(module) {
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
}(f);
import m = require("../6");
import g = require("../15");
import _ = require("../13/index");
import v = require("../379");
var b = function (e) {
  var t = e.mode;
  var n = e.text;
  var a = e.isSelected;
  var c = e.state;
  var l = e.color;
  var u = e.index;
  var d = e.onClick;
  var f = e.sizeType;
  var b = e.disabled;
  var y = o.useRef(null);
  var E = function (e) {
    var t = "";
    if ("correct" === e) {
      t = "icon-radio-correct";
    } else {
      if ("incorrect" === e) {
        t = "icon-radio-incorrect";
      }
    }
    return t ? i.a.createElement(_.j, {
      type: t
    }) : null;
  }(c);
  var O = function () {
    var e = function (e, t) {
      return t === v.a.BUTTON ? {
        default: {
          borderColor: g.hb(e, .8),
          backgroundColor: g.hb(e, .2),
          color: "inherit"
        },
        selected: {
          borderColor: g.v(e),
          backgroundColor: g.hb(e, .4),
          color: "inherit"
        },
        correct: {
          color: p.c,
          borderColor: g.hb(p.c, .8),
          backgroundColor: g.hb(p.c, .1)
        },
        inCorrect: {
          color: p.f,
          borderColor: g.hb(p.f, .8),
          backgroundColor: g.hb(p.f, .1)
        },
        disabled: {
          borderColor: "#e6e6e6",
          backgroundColor: "#e6e6e6",
          color: "inherit"
        }
      } : {
        default: {
          color: "inherit",
          borderColor: g.v(e),
          borderWidth: 1
        },
        selected: {
          color: "inherit",
          borderColor: g.v(e),
          borderWidth: 5
        },
        correct: {
          borderColor: g.v(p.c),
          color: g.v(p.c),
          backgroundColor: g.v(p.c),
          borderWidth: 1
        },
        inCorrect: {
          borderColor: g.v(p.f),
          color: g.v(p.f),
          backgroundColor: g.v(p.f),
          borderWidth: 1
        },
        disabled: {
          color: "#d9d9d9",
          borderColor: "#e6e6e6",
          borderWidth: 1
        }
      };
    }(l, t);
    switch (c) {
      case "correct":
        return e.correct;
      case "incorrect":
        return e.inCorrect;
      case "disabled":
        return e.disabled;
    }
    return b ? e.disabled : a ? e.selected : e.default;
  }();
  function w(e) {
    var t = y.current;
    if (t && d) {
      d(u, t);
    }
  }
  var C = p.g[f];
  return t === v.a.BUTTON ? i.a.createElement("button", {
    style: m.a(m.a({}, O), {}, {
      padding: C.optionPadding
    }),
    className: s()(h.a.buttonRadio, "radio-widget-button"),
    onClick: w
  }, i.a.createElement("p", {
    ref: y,
    style: {
      fontSize: C.optionFontSize
    }
  }, n), i.a.createElement("div", {
    className: h.a.buttonRadioInner,
    style: {
      color: null === O || undefined === O ? undefined : O.color,
      fontSize: C.iconFontSize
    }
  }, E)) : i.a.createElement("div", {
    style: {
      color: null === O || undefined === O ? undefined : O.color
    },
    className: h.a.defaultRadio,
    onClick: w
  }, i.a.createElement("div", {
    style: {
      backgroundColor: null === O || undefined === O ? undefined : O.backgroundColor,
      borderColor: null === O || undefined === O ? undefined : O.borderColor,
      borderWidth: null === O || undefined === O ? undefined : O.borderWidth,
      width: C.innerSize,
      height: C.innerSize
    },
    className: s()(h.a.inner, r.a({}, h.a.selected, a))
  }, E), i.a.createElement("p", {
    ref: y,
    style: {
      fontSize: C.optionFontSize
    }
  }, n));
};
var _a;
_a = function (e) {
  var t = e.id;
  var n = e.position;
  var o = e.visible;
  var a = e.opacity;
  var c = e.onHeadlineClick;
  var f = e.onOptionClick;
  var m = e.size;
  var g = e.attributes;
  var _ = g.options;
  var v = g.color;
  var y = g.mode;
  var E = g.headline;
  var O = g.sizeType;
  var w = g.headlineVisible;
  var C = g.disabled;
  var T = function (e, t) {
    if (f) {
      f(e, t);
    }
  };
  var S = p.g[O];
  return i.a.createElement("div", {
    id: t,
    "data-role": u.M,
    "data-widget-type": u.C,
    "data-min-width": S.minWidth,
    "data-max-width": S.maxWidth,
    className: s()(h.a.radioWidget, d.b, r.a({}, h.a.hide, !o)),
    style: {
      top: n.y,
      left: n.x,
      height: "auto",
      width: m.width,
      minWidth: "".concat(S.minWidth, "px"),
      maxWidth: "".concat(S.maxWidth, "px"),
      opacity: undefined === a ? undefined : a / 100
    },
    "data-lock-height": true
  }, w && i.a.createElement("div", {
    className: h.a.headline,
    onClick: function (e) {
      if (c) {
        c(e);
      }
    },
    style: {
      fontSize: S.headlineFontSize
    }
  }, E), i.a.createElement("ul", null, _.map(function (e, t) {
    return i.a.createElement("li", {
      key: t
    }, i.a.createElement(b, {
      sizeType: O,
      color: l()(v).toString(),
      text: e.content,
      mode: y,
      isSelected: !!e.isSelected,
      state: e.state,
      onClick: T,
      index: t,
      disabled: C
    }));
  })));
};
export { _a as a };
export default _a;