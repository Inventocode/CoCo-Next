"use strict";

export { p as s };
export { d as t };
export { a as k } from "../295/index";
export { g as n };
export { a as o } from "../536";
export { y as x };
export { a as j } from "../94/index";
export { w };
export { C as p };
export { X as q };
export { Q as r };
export { a as f } from "../537/index";
export { J as d };
export { oe as b };
export { ae as u };
export { se as e };
export { be as g };
export { we as l };
export { Ce as m };
export { Ie as y };
export { je as B };
export { Ne as h };
export { Re as i };
export { ke as A };
export { Pe as a };
export { Fe as v };
export { We as c };
export { a as z } from "../321";
import r = require("../10/index");
import o = require("../8");
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
import a = require("react");
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
require("./828");
var c = a.createContext(null);
var l = c.Provider;
var u = c;
var d = a.memo(function (e) {
  var t = e.children;
  var n = e.value;
  var r = e.disabled;
  var o = e.className;
  var c = a.useContext(u);
  var l = a.useCallback(function () {
    if (c) {
      c.value = n;
      c.onChange(n);
    }
  }, [c, n]);
  return s.a.createElement("button", {
    disabled: r,
    onClick: l,
    className: i()("coco-radio-item", o, {
      selected: (null === c || undefined === c ? undefined : c.value) === n
    })
  }, t || n);
});
var p = a.memo(function (e) {
  var t = e.children;
  var n = e.value;
  var o = e.onChange;
  var c = e.style;
  var u = e.defaultValue;
  var d = a.useState(u);
  var p = r.a(d, 2);
  var f = p[0];
  var h = p[1];
  a.useEffect(function () {
    if (undefined !== n) {
      h(n);
    }
  }, [n]);
  var m = a.useCallback(function (e) {
    if (undefined === n) {
      h(e);
    }
  }, [n]);
  var g = a.useCallback(function (e) {
    if (undefined !== e) {
      m(e);
      if (o) {
        o(e);
      }
    }
  }, [m, o]);
  return s.a.createElement(l, {
    value: {
      value: f,
      onChange: g
    }
  }, s.a.createElement("div", {
    className: i()("coco-radio", e.className, {
      "disabled-all": false
    }),
    style: c
  }, t));
});
import f = require("../295/index");
import h = require("../296");
import m = require("lodash");
require("./636");
var g = a.memo(function (e) {
  var t = e.onStep;
  var n = e.max;
  var r = e.min;
  var o = e.defaultValue;
  var i = e.disabled;
  var c = h.a(e, ["onStep", "max", "min", "defaultValue", "disabled"]);
  var l = Number(n) <= Number(o);
  var u = Number(r) >= Number(o);
  var d = Number(o);
  var p = a.useCallback(function (e) {
    if (!l && m.isFunction(t)) {
      t("".concat(d + 1), e, "up");
    }
  }, [l, t, d]);
  var g = a.useCallback(function (e) {
    if (!u && m.isFunction(t)) {
      t("".concat(d - 1), e, "down");
    }
  }, [u, t, d]);
  return s.a.createElement(f.a, Object.assign({}, c, {
    defaultValue: o,
    min: r,
    max: n,
    disabled: i,
    after: s.a.createElement("div", {
      className: "coco-number-input"
    }, s.a.createElement("span", {
      className: l || i ? "disable" : "",
      onClick: p
    }, s.a.createElement(E.a, {
      type: "icon-up"
    })), s.a.createElement("span", {
      className: u || i ? "disable" : "",
      onClick: g
    }, s.a.createElement(E.a, {
      type: "icon-down"
    })))
  }));
});
import _ = require("../536");
require("./1080");
import v = require("./769/index");
var b = function __importDefault(module) {
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
}(v);
require("./831");
var y = a.memo(function (e) {
  var t = e.step;
  var n = undefined === t ? 1 : t;
  var o = e.max;
  var c = undefined === o ? 100 : o;
  var l = e.min;
  var u = undefined === l ? 1 : l;
  var d = e.onChange;
  var p = e.value;
  var h = e.className;
  var m = e.isShowLeftInput;
  var g = e.isShowRightInput;
  var _ = e.inputAfter;
  var v = a.useRef(null);
  var y = a.useState(p || u);
  var E = r.a(y, 2);
  var O = E[0];
  var w = E[1];
  a.useEffect(function () {
    if (undefined !== p) {
      T(p.toString());
      w(p);
    }
  }, [p]);
  var C = a.useCallback(function (e) {
    T(e.toString());
    w(e);
    if (d) {
      d(e);
    }
  }, [d]);
  var T = function (e) {
    var t;
    var n = null === (t = v.current) || undefined === t ? undefined : t.input;
    if (n) {
      n.value = e.toString();
    }
  };
  var S = function (e) {
    w(Number(e));
    if (d) {
      d(Number(e));
    }
  };
  return s.a.createElement("div", {
    className: i()("coco-slider", h)
  }, m && s.a.createElement(f.a, {
    defaultValue: O,
    className: i()("coco-slider-input", "coco-slider-left-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: _
  }), s.a.createElement(b.a, {
    value: O,
    step: n,
    min: u,
    max: c,
    onChange: C
  }), g && s.a.createElement(f.a, {
    defaultValue: O,
    className: i()("coco-slider-input", "coco-slider-right-input"),
    type: "number",
    max: c,
    min: u,
    onChange: S,
    ref: v,
    after: _
  }));
});
import E = require("../94/index");
require("./637");
import O = require("../361");
var w = a.memo(function (e) {
  var t = e.style;
  var n = e.children;
  var o = e.value;
  var c = e.onChange;
  var l = e.className;
  var u = e.defaultValue;
  var d = e.open;
  var p = e.autoCloseWhenChanged;
  var f = undefined === p || p;
  var h = a.useState(o || u);
  var m = r.a(h, 2);
  var g = m[0];
  var _ = m[1];
  var v = a.useState(d);
  var b = r.a(v, 2);
  var y = b[0];
  var w = b[1];
  var C = a.useRef(null);
  var T = a.useState(null);
  var S = r.a(T, 2);
  var I = S[0];
  var A = S[1];
  a.useEffect(function () {
    if (undefined !== o) {
      _(o);
    }
  }, [o]);
  a.useEffect(function () {
    w(d);
  }, [d]);
  var j = a.useCallback(function (e) {
    if (undefined === o) {
      _(e);
    }
  }, [o]);
  var N = a.useCallback(function (e) {
    if (e) {
      A(e);
    }
  }, []);
  var R = a.useCallback(function () {
    w(!y);
  }, [y]);
  a.useEffect(function () {
    var e = function e(t) {
      var n = t.target;
      if (C.current && !C.current.contains(n)) {
        w(false);
        document.body.removeEventListener("click", e);
      }
    };
    if (y) {
      document.body.addEventListener("click", e);
    } else {
      document.body.removeEventListener("click", e);
    }
  }, [y]);
  return s.a.createElement(O.a, {
    value: {
      value: g,
      onChange: function (e) {
        j(e);
        if (c) {
          c(e);
        }
        if (f) {
          w(false);
        }
      },
      onChangeSelectorContent: N
    }
  }, s.a.createElement("div", {
    className: i()("coco-select", l),
    style: t,
    ref: C
  }, s.a.createElement("div", {
    className: i()("coco-select-selector", {
      active: y
    }),
    onClick: R
  }, s.a.createElement("div", {
    className: i()("coco-select-label")
  }, I), s.a.createElement(E.a, {
    type: "icon-up",
    className: i()("coco-select-arrow", {
      active: y
    })
  })), s.a.createElement("div", {
    className: i()("coco-select-options", [y ? "show" : "hide"])
  }, n)));
});
var C = a.memo(function (e) {
  var t = e.value;
  var n = e.suffix;
  var r = e.children;
  var o = e.className;
  var c = a.useContext(O.b);
  a.useEffect(function () {
    if ((null === c || undefined === c ? undefined : c.value) === t) {
      c.onChangeSelectorContent(r || t);
    }
  }, [c, r, t]);
  return s.a.createElement("div", {
    onClick: function () {
      if (!(null === c || undefined === c)) {
        c.onChange(t);
      }
    },
    className: i()({
      selected: (null === c || undefined === c ? undefined : c.value) === t
    }, o, "coco-option")
  }, r || s.a.createElement("div", {
    className: "coco-option-content"
  }, s.a.createElement("p", null, t), n));
});
import T = require("regenerator-runtime");
var S = function __importDefault(module) {
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
}(T);
import I = require("../7");
import A = require("../16/index");
import j = require("../702");
import N = require("../1185");
import R = require("color");
var k = function __importDefault(module) {
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
}(R);
import x = require("../../../../../src/shared/events/messages-wrapper");
import D = require("../133/342");
import M = require("../15");
require("./646");
function L(e) {
  return "#ffffff" === k()(e).hex().toLocaleLowerCase();
}
var P;
var B = a.memo(function (e) {
  var t = e.onClick;
  var n = e.color;
  var r = e.selected;
  var o = e.className;
  var a = M.i(n);
  return s.a.createElement("div", {
    onClick: function () {
      if (t) {
        t(n);
      }
    },
    style: {
      background: n
    },
    className: i()("color-palette-block", {
      selected: r
    }, o, a && "color-palette-transparent-block", !a && L(n) && "color-palette-white-block")
  }, a && s.a.createElement("div", {
    className: "coco-palette-bias"
  }), r && !a && s.a.createElement(E.a, {
    className: "coco-palette-icon-selected",
    type: "icon-selected"
  }));
});
import F = require("./785/index");
import G = require("./254/index");
import U = require("./225");
var W = function __importDefault(module) {
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
}(U);
!function (e) {
  e.HEX = "HEX";
  e.HSVA = "HSVA";
  e.RGBA = "RGBA";
}(P || (P = {}));
var H;
var V = [P.HEX, P.HSVA, P.RGBA];
var z = a.memo(function (e) {
  var t = e.color;
  var n = e.onChange;
  var o = a.useState(P.HEX);
  var i = r.a(o, 2);
  var c = i[0];
  var l = i[1];
  var u = a.useMemo(function () {
    var e = W()(t).toHex8();
    var n = W()(t).toHsv();
    n.a = Math.round(100 * n.a);
    var r = W()(t).toHsl();
    r.a = Math.round(100 * r.a);
    var o = W()(t).toRgb();
    o.a = Math.round(100 * o.a);
    return {
      hex: "#".concat(e),
      hsl: r,
      hsv: n,
      rgb: o
    };
  }, [t]);
  var d = u.hex;
  var p = u.hsl;
  var f = u.hsv;
  var h = u.rgb;
  var g = function (e) {
    var t;
    if (e.HEX) {
      if (W()(e.HEX).isValid()) {
        return void n({
          hex: W()(e.HEX).toHexString(),
          hsl: p,
          rgb: h
        });
      }
    } else if (e.R || e.G || e.B) {
      t = {
        r: e.R || h.r,
        g: e.G || h.g,
        b: e.B || h.b,
        source: "rgb"
      };
    } else {
      if (e.A) {
        if (e.A < 0) {
          e.A = 0;
        } else {
          if (e.A > 100) {
            e.A = 100;
          }
        }
        t = {
          h: f.h,
          s: f.s,
          v: f.v,
          a: e.A / 100,
          source: "hsv"
        };
      } else {
        if (e.H || e.S || e.V) {
          if (1 === Number(e.S)) {
            e.S = .01;
          } else {
            if (1 === Number(e.V)) {
              e.V = .01;
            }
          }
          t = {
            h: e.H || p.h,
            s: Number(m.isUndefined(e.S) ? f.s : e.S),
            v: Number(m.isUndefined(e.V) ? f.v : e.V),
            source: "hsv"
          };
        }
      }
    }
    if (t && M.kb(t)) {
      var r = M.C(t, e.H || f.h);
      n(r);
    }
  };
  return s.a.createElement("div", {
    className: "coco-platte-custom-input"
  }, s.a.createElement("div", {
    className: "coco-platte-input-box"
  }, c === P.HEX && s.a.createElement("div", {
    className: "coco-platte-hex-box"
  }, s.a.createElement(G.EditableInput, {
    label: "HEX",
    value: d,
    onChange: g
  })), c === P.HSVA && s.a.createElement("div", {
    className: "coco-platte-flex-box"
  }, s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "H",
    value: Math.round(f.h),
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "S",
    value: Math.round(100 * f.s),
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "V",
    value: Math.round(100 * f.v),
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "A",
    value: p.a,
    onChange: g
  }))), c === P.RGBA && s.a.createElement("div", {
    className: "coco-platte-flex-box"
  }, s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "R",
    value: h.r,
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "G",
    value: h.g,
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "B",
    value: h.b,
    onChange: g
  })), s.a.createElement("div", {
    className: "coco-platte-field"
  }, s.a.createElement(G.EditableInput, {
    label: "A",
    value: h.a,
    onChange: g
  })))), s.a.createElement("div", {
    className: "coco-platte-toggle-color-type"
  }, s.a.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) - 1;
      l(V[e = e < 0 ? 2 : e]);
    }
  }, s.a.createElement(E.a, {
    className: "coco-palette-arrow-up",
    type: "icon-fold"
  })), s.a.createElement("div", {
    className: "coco-platte-arrow-box",
    onClick: function () {
      var e = V.indexOf(c) + 1;
      e = e >= V.length ? 0 : e;
      l(V[e]);
    }
  }, s.a.createElement(E.a, {
    className: "coco-palette-arrow-down",
    type: "icon-fold"
  }))));
});
var Y = {
  default: {
    picker: {
      width: 248,
      padding: 0,
      background: "#fff",
      borderRadius: 0,
      boxShadow: "none",
      color: "#534C59"
    },
    saturation: {
      width: "100%",
      borderRadius: 4
    },
    sliders: {
      padding: 0
    },
    hue: {
      background: "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)"
    },
    controls: {
      width: 216,
      marginLeft: 32,
      marginTop: 15,
      marginBottom: 15
    },
    alpha: {
      marginTop: 8
    },
    color: {
      width: 30,
      height: 30,
      marginTop: -1,
      marginLeft: 10,
      border: "none"
    },
    activeColor: {
      width: 30,
      height: 30,
      borderRadius: 4
    }
  }
};
var K = a.memo(function (e) {
  var t = e.color;
  var n = e.handleColorChange;
  var r = function (e) {
    var t = e.hex;
    if (!M.i(t)) {
      t = undefined !== e.rgb.a ? "".concat(e.hex).concat(function (e) {
        var t = Math.round(255 * m.clamp(e, 0, 1));
        var n = t.toString(16);
        return t <= 15 ? "0".concat(n) : n;
      }(e.rgb.a)) : "".concat(e.hex, "FF");
    }
    n(t);
  };
  return s.a.createElement(s.a.Fragment, null, s.a.createElement(F.a, {
    onChange: r,
    color: t,
    presetColors: [],
    disableAlpha: false,
    styles: Y
  }), s.a.createElement(z, {
    color: t,
    onChange: r
  }));
});
var q = [];
var X = a.memo(a.forwardRef(function (e, t) {
  var o = e.value;
  var c = e.onChange;
  var l = e.onClose;
  var u = e.defaultValue;
  var d = undefined === u ? "#000000ff" : u;
  var p = e.style;
  var f = undefined === p ? {} : p;
  var h = a.useRef(null);
  var m = a.useRef(null);
  var g = a.useRef(false);
  var _ = A.d();
  var v = j.a().formatMessage;
  var b = a.useState(o || d);
  var y = r.a(b, 2);
  var O = y[0];
  var w = y[1];
  var C = a.useRef(O);
  if (0 === q.length) {
    q.push(O);
  }
  var T = function (e) {
    if (e !== O) {
      w(e);
      if (c) {
        c(e, g.current);
      }
      H = e;
    }
  };
  var R = function (e) {
    T(e);
  };
  a.useImperativeHandle(t, function () {
    return {
      setRGBA: w
    };
  });
  a.useEffect(function () {
    var e = function (e) {
      var n = e.target;
      var r = h.current;
      var o = m.current;
      if ((!r || !r.contains(n)) && (!o || !o.contains(n))) {
        if (l) {
          l(O);
        }
        _(x.hh());
        if (H) {
          var i = q.indexOf(H);
          if (i > -1) {
            q.splice(i, 1);
          }
          q.unshift(H);
        }
        if (q.length > 9) {
          q.splice(9);
        }
        t();
      }
    };
    var t = function () {
      document.body.removeEventListener("mousedown", e, {
        capture: true
      });
      document.body.removeEventListener("touchstart", e, {
        capture: true
      });
      document.body.removeEventListener("mousewheel", e, {
        capture: true
      });
    };
    document.body.addEventListener("mousedown", e, {
      capture: true
    });
    document.body.addEventListener("touchstart", e, {
      capture: true
    });
    document.body.addEventListener("mousewheel", e, {
      capture: true
    });
    return t;
  });
  a.useEffect(function () {
    C.current = O;
  }, [O]);
  a.useEffect(function () {
    var e = function () {
      g.current = true;
      document.addEventListener("mouseup", function () {
        g.current = false;
      }, {
        once: true
      });
    };
    document.addEventListener("mousedown", e);
    return function () {
      return document.removeEventListener("mousedown", e);
    };
  });
  var L = a.useCallback(function () {
    if (c) {
      c(C.current, g.current);
    }
  }, [c]);
  var P = a.useCallback(function (e) {
    if (false === e && c) {
      c(C.current, g.current);
    }
  }, [c]);
  var F = function () {
    var e = I.a(S.a.mark(function e() {
      var t;
      var n;
      var r;
      return S.a.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (window.EyeDropper) {
                e.next = 3;
                break;
              }
              _(x.mj({
                message: v({
                  id: "colorPicker.eyeDropperTips"
                })
              }));
              return e.abrupt("return", false);
            case 3:
              e.prev = 3;
              t = new window.EyeDropper();
              e.next = 7;
              return t.open().catch(function (e) {
                return console.info(e);
              });
            case 7:
              if (null === (n = e.sent) || undefined === n ? undefined : n.sRGBHex) {
                r = k()(n.sRGBHex).hex();
                T(r);
              }
              e.next = 14;
              break;
            case 11:
              e.prev = 11;
              e.t0 = e.catch(3);
              console.error("handleDrawColor", e.t0);
            case 14:
            case "end":
              return e.stop();
          }
        }
      }, e, null, [[3, 11]]);
    }));
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return s.a.createElement("div", {
    className: i()("coco-palette"),
    style: f,
    ref: h
  }, s.a.createElement("div", {
    className: "coco-palette-body"
  }, D.b.map(function (e, t) {
    return s.a.createElement(B, {
      onClick: R,
      key: t,
      color: e,
      selected: O === e,
      className: M.V(e) ? "coco-palette-light-color-selected" : "coco-palette-dark-color-selected"
    });
  })), s.a.createElement("div", {
    className: "coco-palette-history-color"
  }, s.a.createElement("span", {
    className: "coco-palette-history-title"
  }, v({
    id: "colorPicker.history"
  })), s.a.createElement("div", {
    className: "coco-palette-history-color-list"
  }, q.map(function (e, t) {
    return s.a.createElement(B, {
      onClick: R,
      key: t,
      color: e
    });
  }))), s.a.createElement(N.a, {
    placement: "rightBottom",
    overlayClassName: "coco-palette-picker",
    onVisibleChange: P,
    trigger: "click",
    content: s.a.createElement("div", {
      className: "coco-palette-picker-popover",
      ref: m,
      onBlur: L
    }, s.a.createElement("div", {
      className: "coco-palette-icon-picker-box",
      onClick: F
    }, s.a.createElement(E.a, {
      type: "icon-picker-color"
    })), s.a.createElement(K, {
      color: O,
      handleColorChange: T
    }))
  }, s.a.createElement("div", {
    className: "coco-palette-more-color-box"
  }, s.a.createElement("div", {
    className: "coco-palette-more-color"
  }, s.a.createElement("div", {
    className: "coco-palette-more-title-box"
  }, s.a.createElement("img", {
    alt: "",
    className: "coco-palette-more-image",
    src: require("./854")
  }), s.a.createElement("span", {
    className: "coco-palette-more-title"
  }, v({
    id: "colorPicker.more"
  }))), s.a.createElement(E.a, {
    className: "coco-palette-more-arrow",
    type: "icon-fold"
  })))));
}));
require("./855");
var Q = a.memo(a.forwardRef(function (e, t) {
  var n = e.children;
  var o = e.defaultVisible;
  var c = e.className;
  var l = e.style;
  var u = e.content;
  var d = e.onOpen;
  var p = e.onClose;
  var f = e.onHide;
  var h = e.contentClassName;
  var m = e.autoClose;
  var g = undefined === m || m;
  var _ = e.disabled;
  var v = undefined !== _ && _;
  var b = a.useState(!!o);
  var y = r.a(b, 2);
  var E = y[0];
  var O = y[1];
  var w = a.useRef(null);
  a.useEffect(function () {
    if (E && d) {
      d();
    }
  }, [E]);
  a.useLayoutEffect(function () {
    var e = function e(t) {
      var n = t.target;
      if (w.current && !w.current.contains(n)) {
        O(false);
        document.body.removeEventListener("click", e);
      }
    };
    if (E && g) {
      document.body.addEventListener("click", e);
    } else {
      if (p) {
        p();
      }
    }
    return function () {
      document.body.removeEventListener("click", e);
    };
  }, [E, p, g]);
  a.useImperativeHandle(t, function () {
    return {
      target: w.current,
      visible: E,
      showContent: function () {
        O(true);
        if (d) {
          d();
        }
      },
      hideContent: function () {
        O(false);
        if (f) {
          f();
        }
      }
    };
  });
  return s.a.createElement("div", {
    style: l,
    className: i()("coco-popover", c),
    ref: w
  }, s.a.createElement("div", {
    className: "coco-popover-children",
    onClick: function () {
      O(true);
    }
  }, n), s.a.createElement("div", {
    className: i()("coco-popover-content", h, [E ? "show" : "hide"])
  }, u), v && s.a.createElement("div", {
    className: "coco-popover-disabled-mask"
  }));
}));
import Z = require("../537/index");
require("./857");
var J = a.memo(s.a.forwardRef(function (e, t) {
  var n = e.type;
  var r = e.icon;
  var o = e.onClick;
  var c = e.disabled;
  var l = e.style;
  var u = undefined === l ? {} : l;
  var d = e.className;
  var p = e.danger;
  var f = e.children;
  var h = e.shape;
  var m = undefined === h ? "circle" : h;
  var g = a.useRef(null);
  a.useImperativeHandle(t, function () {
    return {
      button: g.current
    };
  });
  return s.a.createElement("button", {
    ref: g,
    className: i()("coco-button", function () {
      var e = "coco-button-";
      return (n ? e + n : "") + " " + (p ? e + "dangerous" : "") + " " + (m ? e + m : "");
    }(), d),
    disabled: c,
    style: u,
    onClick: o
  }, r && s.a.createElement(E.a, {
    type: r
  }), f);
}));
require("./858");
var $ = a.createContext(null);
var ee = $.Provider;
var te = $;
a.memo(function (e) {
  var t = e.children;
  var n = e.onSelect;
  var o = e.value;
  var c = e.defaultValue;
  var l = e.className;
  var u = e.style;
  var d = undefined === u ? {} : u;
  var p = e.open;
  var f = e.onBlur;
  var h = a.useState(o || c);
  var m = r.a(h, 2);
  var g = m[0];
  var _ = m[1];
  var v = a.useState(false);
  var b = r.a(v, 2);
  var y = b[0];
  var O = b[1];
  a.useEffect(function () {
    _(o);
  }, [o]);
  a.useEffect(function () {
    if (undefined !== p) {
      O(p);
    }
  }, [p]);
  a.useEffect(function () {
    var e;
    if (!(null === (e = S.current) || undefined === e)) {
      e.setAttribute("tabindex", "-1");
    }
  }, []);
  var w = a.useCallback(function (e) {
    if (undefined === p) {
      O(e);
    }
  }, [p]);
  var C = a.useCallback(function (e) {
    _(e);
    w(false);
    if (n) {
      n(e);
    }
  }, [n, w]);
  var T = a.useCallback(function () {
    w(!y);
  }, [y, w]);
  var S = a.useRef(null);
  var I = a.useCallback(function () {
    w(false);
    if (f) {
      f();
    }
  }, [f, w]);
  return s.a.createElement(ee, {
    value: {
      onSelect: C,
      selectedValue: g
    }
  }, s.a.createElement("div", {
    style: d,
    className: i()(l, "coco-tree-select"),
    onBlur: I,
    ref: S
  }, s.a.createElement("div", {
    className: "coco-tree-selector",
    onClick: T
  }, g, s.a.createElement("i", {
    className: i()("coco-tree-select-arrow", {
      active: y
    })
  }, s.a.createElement(E.a, {
    type: "icon-up"
  }))), s.a.createElement("div", {
    className: i()("coco-tree-select-list", {
      hide: !y
    })
  }, t)));
});
var ne = a.memo(function (e) {
  var t = e.title;
  var n = e.children;
  var o = e.disabled;
  var c = a.useState(false);
  var l = r.a(c, 2);
  var u = l[0];
  var d = l[1];
  var p = a.useCallback(function () {
    if (!o) {
      d(true);
    }
  }, [d, o]);
  var f = a.useCallback(function () {
    if (!o) {
      d(false);
    }
  }, [d, o]);
  return s.a.createElement("div", {
    className: i()("coco-tree-node"),
    onMouseEnter: p,
    onMouseLeave: f
  }, s.a.createElement("div", {
    className: i()("coco-tree-group-header", {
      disabled: o
    })
  }, s.a.createElement("span", null, t), s.a.createElement("i", {
    className: "coco-tree-node-arrows"
  }, s.a.createElement(E.a, {
    type: "icon-right"
  }))), s.a.createElement("div", {
    className: i()("coco-tree-group-main", {
      hide: !u
    })
  }, n));
});
var re = a.memo(function (e) {
  var t = e.value;
  var n = e.title;
  var r = e.content;
  var o = e.disabled;
  var c = a.useContext(te);
  var l = a.useCallback(function () {
    if (null === c || undefined === c ? undefined : c.onSelect) {
      c.onSelect(t);
    }
  }, [t, c]);
  return s.a.createElement("div", {
    className: i()("coco-tree-node-item", {
      selected: (null === c || undefined === c ? undefined : c.selectedValue) === t,
      disabled: o
    }),
    onClick: l,
    key: t
  }, r || s.a.createElement("span", null, n));
});
a.memo(function (e) {
  var t = e.children;
  var n = e.className;
  return s.a.createElement("div", {
    className: i()(n, "coco-tree-node")
  }, t ? s.a.createElement(ne, e) : s.a.createElement(re, e));
});
require("./859");
var oe = a.memo(function (e) {
  var t = e.type;
  var n = undefined === t ? "info" : t;
  var o = e.message;
  var c = e.showPrefixIcon;
  var l = undefined === c || c;
  var u = e.showCloseIcon;
  var d = undefined !== u && u;
  var p = e.visible;
  var f = e.onClose;
  var h = e.icon;
  var m = e.className;
  var g = a.useState(true);
  var _ = r.a(g, 2);
  var v = _[0];
  var b = _[1];
  a.useLayoutEffect(function () {
    if (undefined !== p) {
      b(p);
    }
  }, [p]);
  var y = a.useCallback(function (e) {
    if (undefined === p) {
      b(e);
    }
  }, [p]);
  var O = a.useMemo(function () {
    var e = "";
    var t = "";
    switch (n) {
      case "success":
        e = "icon-alert-success";
        t = "coco-alert-success";
        break;
      case "error":
        e = "icon-alert-error";
        t = "coco-alert-error";
        break;
      case "info":
        e = "icon-alert-info";
        t = "coco-alert-info";
    }
    return {
      icon: s.a.createElement(E.a, {
        type: e
      }),
      className: t
    };
  }, [n]);
  var w = a.useCallback(function () {
    y(false);
    if (f) {
      f();
    }
  }, [f, y]);
  return s.a.createElement("div", {
    className: i()("coco-alert", O.className, m, {
      hide: !v
    })
  }, s.a.createElement("div", {
    className: "coco-alert-content"
  }, s.a.createElement("div", {
    className: "coco-alert-icon"
  }, l && (h || O.icon)), s.a.createElement("span", null, o)), d && s.a.createElement("div", {
    className: "coco-alert-close",
    onClick: w
  }, s.a.createElement(E.a, {
    type: "icon-close"
  })));
});
import ie = require("../11");
require("./647");
var ae = a.memo(function (e) {
  var t;
  var n = e.children;
  var r = e.justify;
  var o = e.align;
  var a = e.className;
  var c = e.label;
  return s.a.createElement("div", {
    "data-row-label": c,
    className: i()("coco-row", a, (t = {}, ie.a(t, "coco-row-".concat(o), o), ie.a(t, "coco-row-".concat(r), r), t))
  }, n);
});
var se = a.memo(function (e) {
  var t = e.children;
  var n = e.span;
  if ("string" === typeof n) {
    var r = parseInt(n);
    n = isNaN(r) ? undefined : 48 * r / 100;
  }
  return s.a.createElement("div", {
    className: i()("coco-col", ie.a({}, "coco-col-".concat(n), undefined !== n))
  }, t);
});
import ce = require("../27");
import le = require("../40");
import ue = require("../57/index");
import de = require("../58/index");
var pe = a.createContext({
  draggedItemIndex: -1
});
var fe = pe.Consumer;
var he = pe.Provider;
require("./860");
function me(e) {
  return e.target.closest("[data-coco-draggable-index]");
}
function ge(e, t, n) {
  var r = n.offsetTop;
  var o = n.getBoundingClientRect();
  var i = o.height;
  var a = o.top;
  var s = e.y < a + i / 2 ? 0 : 1;
  t.style.top = r + s * i + "px";
  return s;
}
var _e = function (e) {
  ue.a(n, e);
  var t = de.a(n);
  function n(e) {
    var r;
    ce.a(this, n);
    (r = t.call(this, e)).separationLineRef = a.createRef();
    r.dragContentRef = a.createRef();
    r.dragWrapperRef = a.createRef();
    r._dragResult = undefined;
    r._mousedownTimeId = undefined;
    r._mousemoveTimeId = undefined;
    r.handleMouseDown = function (e) {
      if (0 === e.button) {
        var t = r.props;
        var o = t.onDragStart;
        var i = t.children;
        if (i && s.a.Children.count(i) > 1) {
          var a = me(e);
          var c = r.separationLineRef.current;
          var l = {
            x: e.clientX,
            y: e.clientY
          };
          if (r._mousedownTimeId) {
            clearTimeout(r._mousedownTimeId);
          }
          r._mousedownTimeId = setTimeout(function () {
            if (a && c) {
              var e = Number(a.dataset.cocoDraggableIndex);
              ge(l, c, a);
              r._dragResult.sourceIndex = e;
              r._dragResult.destinationIndex = e;
              r._setMouseCursor("grab");
              r.setState({
                draggedItemIndex: e
              });
              if (o) {
                o();
              }
            }
            document.addEventListener("mousemove", r.handleMouseMove);
          }, n.DELAY);
          document.addEventListener("mouseup", r.handleMouseUp);
        }
      }
    };
    r.handleMouseUp = function () {
      var e = r.props.onDragEnd;
      if (r._mousedownTimeId) {
        clearTimeout(r._mousedownTimeId);
      }
      if (r.state.isDragging && e) {
        e(r._dragResult);
      }
      r._initializeState();
      document.removeEventListener("mouseup", r.handleMouseUp);
      document.removeEventListener("mousemove", r.handleMouseMove);
    };
    r._initializeState = function () {
      r._dragResult.destinationIndex = -1;
      r._dragResult.sourceIndex = -1;
      r.setState({
        isDragging: false,
        draggedItemIndex: -1
      });
      r._setMouseCursor("initial");
    };
    r.handleMouseMove = function (e) {
      r._setScrollOffset();
      if (!r._mousemoveTimeId) {
        r._mousemoveTimeId = setTimeout(function () {
          r._mousemoveTimeId = null;
        }, 60);
        r.setState({
          isDragging: true
        });
        var t = me(e);
        var n = r.separationLineRef.current;
        if (t && n) {
          var o = ge({
            x: e.clientX,
            y: e.clientY
          }, n, t);
          var i = Number(t.dataset.cocoDraggableIndex) + o;
          if (r._dragResult.sourceIndex !== i && r._dragResult.sourceIndex + 1 !== i) {
            r._dragResult.destinationIndex = r._dragResult.sourceIndex < i ? i - 1 : i;
          } else {
            r._dragResult.destinationIndex = r._dragResult.sourceIndex;
          }
        }
      }
    };
    r._setScrollOffset = function () {
      var e = s.a.Children.count(r.props.children);
      var t = r.dragWrapperRef.current;
      var n = r.separationLineRef.current;
      var o = r.dragContentRef.current;
      if (t && n && o) {
        var i = o.getBoundingClientRect().height / e;
        var a = t.getBoundingClientRect().height;
        var c = n.offsetTop;
        var l = t.scrollTop;
        if (0 !== c) {
          if (a + l - i < c) {
            t.scrollTop += 10;
          } else {
            if (c - i < l) {
              t.scrollTop -= 10;
            }
          }
        }
      }
    };
    r._setMouseCursor = function (e) {
      document.body.style.cursor = e;
    };
    r.separationLineRef = s.a.createRef();
    r._dragResult = {
      sourceIndex: -1,
      destinationIndex: -1
    };
    r.state = {
      isDragging: false,
      draggedItemIndex: -1
    };
    return r;
  }
  le.a(n, [{
    key: "render",
    value: function () {
      var e = this.state;
      var t = e.isDragging;
      var n = e.draggedItemIndex;
      var r = this.props;
      var o = r.children;
      var a = r.className;
      return s.a.createElement(he, {
        value: {
          draggedItemIndex: n
        }
      }, s.a.createElement("div", {
        className: i()("coco-drag-context", a),
        ref: this.dragWrapperRef
      }, s.a.createElement("div", {
        onMouseDown: this.handleMouseDown,
        ref: this.dragContentRef
      }, o, s.a.createElement("div", {
        className: "coco-drag-context-line",
        ref: this.separationLineRef,
        style: {
          display: t ? "block" : "none"
        }
      }))));
    }
  }]);
  return n;
}(s.a.PureComponent);
_e.DELAY = 200;
a.memo(_e);
a.memo(function (e) {
  var t = e.index;
  var n = e.children;
  return s.a.createElement(fe, null, function (e) {
    var r = e.draggedItemIndex;
    return s.a.createElement("div", {
      className: i()("coco-draggable", {
        dragged: r === t
      }),
      "data-coco-draggable-index": t
    }, n);
  });
});
require("./861");
var ve;
var be = a.memo(function (e) {
  var t = e.children;
  var n = e.showDropdownIcon;
  var o = undefined === n || n;
  var c = e.overlay;
  var l = e.className;
  var u = e.onClick;
  var d = a.useState(false);
  var p = r.a(d, 2);
  var f = p[0];
  var h = p[1];
  var m = a.useRef(null);
  function g(e) {
    var t;
    var n;
    if (e) {
      if (!(null === (t = m.current) || undefined === t)) {
        t.showContent();
      }
    } else {
      if (!(null === (n = m.current) || undefined === n)) {
        n.hideContent();
      }
    }
  }
  return s.a.createElement("div", {
    className: i()("coco-dropdown", l),
    onClick: function () {
      var e;
      if (u) {
        u(!!(null === (e = m.current) || undefined === e ? undefined : e.visible), g);
      }
    }
  }, s.a.createElement(Q, {
    ref: m,
    contentClassName: "coco-dropdown-overlay",
    content: s.a.createElement("div", {
      onClick: function () {
        var e;
        if (!(null === (e = m.current) || undefined === e)) {
          e.hideContent();
        }
        h(false);
      }
    }, c),
    onOpen: function () {
      h(true);
    },
    onClose: function () {
      h(false);
    }
  }, s.a.createElement("div", {
    className: i()("coco-dropdown-selector", {
      "coco-dropdown-active": f
    }),
    onClick: function () {
      var e;
      var t;
      if (null === (e = m.current) || undefined === e ? undefined : e.visible) {
        if (!(null === (t = m.current) || undefined === t)) {
          t.hideContent();
        }
      }
    }
  }, t, o && s.a.createElement(E.a, {
    type: "icon-dropdown-down",
    className: i()("coco-dropdown-down-icon")
  }))));
});
var ye = a.createContext(null);
var Ee = ye.Provider;
var Oe = ye;
require("./862");
var we = a.memo(function (e) {
  var t = e.children;
  var n = e.onClick;
  return s.a.createElement(Ee, {
    value: {
      onClick: function (e) {
        if (n) {
          n(e);
        }
      }
    }
  }, s.a.createElement("div", {
    className: "coco-menu"
  }, t));
});
var Ce = a.memo(function (e) {
  var t = e.children;
  var n = e.value;
  var r = a.useContext(Oe);
  return s.a.createElement("div", {
    className: "coco-menu-item",
    onClick: function () {
      if (undefined !== n && r) {
        r.onClick(n);
      }
    }
  }, t);
});
import Te = require("./317");
var Se = function __importDefault(module) {
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
}(Te);
var Ie = a.memo(function (e) {
  var t;
  var n = e.value;
  var o = e.children;
  var c = e.subMenu;
  var l = e.onClick;
  var u = a.useRef(null);
  var d = a.useState("right");
  var p = r.a(d, 2);
  var f = p[0];
  var h = p[1];
  var m = a.useState(false);
  var g = r.a(m, 2);
  var _ = g[0];
  var v = g[1];
  var b = a.useMemo(function () {
    return M.p(v, 100);
  }, []);
  return s.a.createElement("div", {
    ref: u,
    className: Se.a.subMenuItemWrapper,
    onMouseEnter: function () {
      if (c) {
        b(function () {
          return true;
        });
        var e = u.current;
        if (e) {
          var t = e.getClientRects()[0];
          if (t.x + t.width + t.width < window.innerWidth) {
            h("right");
          } else {
            h("left");
          }
        }
      }
    },
    onMouseLeave: function () {
      if (c) {
        b(function () {
          return false;
        });
      }
    },
    onClick: function () {
      if (!c && n && l) {
        l(n);
      }
    }
  }, s.a.createElement(Ce, {
    value: n
  }, s.a.createElement("div", null, o, c && s.a.createElement("span", {
    className: Se.a.subMenuArrow
  }, s.a.createElement(E.a, {
    type: "icon-arrow-down"
  })))), c && s.a.createElement("div", {
    className: i()(Se.a.subMenuOverlay, (t = {}, ie.a(t, Se.a.visible, _), ie.a(t, Se.a.placementLeft, "left" === f), ie.a(t, Se.a.placementRight, "right" === f), t))
  }, c));
});
import Ae = require("../739/index");
require("./863");
var je = a.memo(function (e) {
  var t = e.children;
  var n = e.onChange;
  var o = e.onCancel;
  var c = e.multiple;
  var l = undefined !== c && c;
  var u = e.accept;
  var d = undefined === u ? "" : u;
  var p = e.className;
  var f = e.tooltip;
  var h = undefined === f ? "" : f;
  var m = e.style;
  var g = undefined === m ? {} : m;
  var _ = a.useRef(null);
  var v = a.useState(false);
  var b = r.a(v, 2);
  var y = b[0];
  var E = b[1];
  a.useEffect(function () {
    var e = function (e) {
      var t;
      if (y) {
        if (_.current && 0 === (null === (t = _.current.files) || undefined === t ? undefined : t.length) && o) {
          o();
        }
        E(false);
      }
    };
    window.addEventListener("focus", e);
    return function () {
      window.removeEventListener("focus", e);
    };
  }, [y, o]);
  return s.a.createElement("div", {
    onClick: function () {
      var e = _.current;
      if (e) {
        E(true);
        e.click();
      }
    },
    className: i()("coco-upload-button", p),
    style: g
  }, s.a.createElement(Ae.a, {
    placement: "right",
    title: h
  }, s.a.createElement("input", {
    type: "file",
    style: {
      display: "none"
    },
    onChange: function (e) {
      var t = e.target;
      if (t && n) {
        n(t.files);
        t.value = "";
      }
    },
    ref: _,
    multiple: l,
    accept: d
  }), s.a.createElement("div", {
    className: "coco-upload-button-content"
  }, t)));
});
var Ne = a.memo(function (e) {
  var t = e.children;
  var n = e.className;
  return s.a.createElement("div", {
    className: i()(n, "coco-form")
  }, t);
});
require("./864");
var Re = a.memo(function (e) {
  var t = e.children;
  var n = e.className;
  var r = e.label;
  var o = e.labelWidth;
  var a = e.align;
  var c = undefined === a ? "horizontal" : a;
  return s.a.createElement("div", {
    className: i()(n, "coco-form-item", ["horizontal" === c ? "coco-form-item-horizontal" : "coco-form-item-vertical"])
  }, r && s.a.createElement("p", {
    className: "coco-form-item-label",
    style: {
      width: o
    }
  }, r), s.a.createElement("div", {
    className: i()("coco-form-item-content")
  }, t));
});
require("./865");
var ke = a.memo(s.a.forwardRef(function (e, t) {
  var n = e.defaultValue;
  var o = e.value;
  var c = e.className;
  var l = e.placeholder;
  var u = undefined === l ? "" : l;
  var d = e.rows;
  var p = undefined === d ? 1 : d;
  var f = e.cols;
  var h = e.maxLength;
  var m = e.minLength;
  var g = e.autoComplete;
  var _ = undefined === g ? "on" : g;
  var v = e.onChange;
  var b = e.onFocus;
  var y = e.onBlur;
  var E = e.dependency;
  var O = e.disabled;
  var w = a.useRef(null);
  var C = a.useRef(null);
  var T = a.useRef(null);
  var S = a.useState(false);
  var I = r.a(S, 2);
  var A = I[0];
  var j = I[1];
  var N = a.useCallback(function (e) {
    var t = C.current;
    if (t) {
      t.innerHTML = e + "/" + h;
    }
  }, [h]);
  a.useEffect(function () {
    var e = w.current;
    if (e && undefined === o) {
      e.value = undefined === n ? "" : n.toString();
      N(e.value.length);
    }
  }, [w, N, E, o, n]);
  a.useEffect(function () {
    var e = w.current;
    if (undefined !== o && e) {
      e.value = o;
      N(o.toString().length);
    }
  }, [w, N, o]);
  var R = function () {
    var e = w.current;
    var t = T.current;
    if (e && t) {
      t.style.display = "block";
      var n = e.value.replace(/'\n'/g, "<br>");
      var r = getComputedStyle(e);
      t.innerHTML = M.t(n);
      t.style.width = r.width;
      t.style.lineHeight = r.lineHeight;
      t.style.minHeight = r.lineHeight;
      var o = t.clientHeight;
      t.style.display = "none";
      var i = o / parseInt(r.lineHeight);
      var a = e.value.split("\n").length;
      return Math.max(i, a);
    }
    return 1;
  };
  a.useImperativeHandle(t, function () {
    return {
      getRowCount: function () {
        return R();
      },
      setRows: function (e) {
        if (w.current) {
          w.current.rows = e;
        }
      }
    };
  });
  var k = {
    placeholder: u,
    rows: p,
    cols: f,
    maxLength: h,
    minLength: m,
    autoComplete: _,
    disabled: O,
    value: o
  };
  return s.a.createElement("div", {
    className: i()("coco-textarea", c)
  }, s.a.createElement("textarea", Object.assign({
    ref: w,
    onChange: function (e) {
      N(e.target.value.length);
      if (v) {
        v(e);
      }
    },
    onBlur: function (e) {
      var t = R();
      if (y) {
        y(e, t);
      }
      j(false);
    },
    onFocus: function (e) {
      if (b) {
        b(e);
      }
      j(true);
    }
  }, k)), s.a.createElement("div", {
    className: "coco-textarea-textCounter",
    ref: C,
    style: {
      display: A && h ? "block" : "none"
    }
  }), s.a.createElement("div", {
    className: "coco-textarea-rowCounter",
    ref: T
  }));
}));
require("../538/index");
import xe = require("./303/index");
var De = function __importDefault(module) {
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
}(xe);
require("./867");
var Me = "@__EMPTY_ADVANCE_TEXT_TIP_ID__@";
var Le = function () {
  var e;
  if (!(null === (e = document.getElementById(Me)) || undefined === e)) {
    e.remove();
  }
};
var Pe = function (e) {
  var t = e.text;
  var n = e.duration;
  var r = undefined === n ? 500 : n;
  var o = e.className;
  var c = a.useRef(null);
  a.useEffect(function () {
    return function () {
      Le();
    };
  });
  return s.a.createElement("div", {
    ref: c,
    onMouseMove: function (e) {
      var n = e.clientX;
      var o = e.clientY;
      function i(e) {
        var t = c.current;
        var n = e.target;
        if (!(t && n && t.contains(n))) {
          Le();
          clearTimeout(ve);
          document.removeEventListener("mousemove", i);
        }
      }
      if (ve) {
        clearTimeout(ve);
      }
      ve = setTimeout(function () {
        !function (e, t, n) {
          Le();
          Me = "coco-advanced-text-tip—" + De()();
          var r = document.createElement("div");
          r.innerHTML = e;
          r.className = "coco-advanced-text-tip";
          r.id = Me;
          r.style.top = n + 10 + "px";
          r.style.left = t + 10 + "px";
          document.body.appendChild(r);
        }(t, n, o);
        document.addEventListener("mousemove", i);
      }, r);
    },
    className: i()("icon-advanced-text", o)
  }, t);
};
require("./868");
var Be = M.p(function (e) {
  if (e) {
    e();
  }
}, 30, true);
var Fe = function (e) {
  var t = e.children;
  var n = e.onScrollBottom;
  var r = e.height;
  var o = e.classnames;
  var a = e.offsetY;
  var c = undefined === a ? 10 : a;
  return s.a.createElement("div", {
    style: {
      height: r
    },
    className: i()("coco-scroll-paginate", o),
    onScroll: function (e) {
      var t = e.currentTarget;
      if (t.scrollTop + r > t.scrollHeight - c && n) {
        Be(n);
      }
    }
  }, t);
};
import Ge = require("./782");
var Ue = function __importDefault(module) {
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
}(Ge);
require("./869");
var We = a.memo(a.forwardRef(function (e, t) {
  var o = e.sourceImage;
  var c = e.defaultScale;
  var l = undefined === c ? 1 : c;
  var u = e.width;
  var d = e.height;
  var p = e.border;
  var f = undefined === p ? 0 : p;
  var h = e.rotate;
  var m = undefined === h ? 0 : h;
  var g = e.step;
  var _ = undefined === g ? .01 : g;
  var v = e.minScale;
  var b = undefined === v ? 1 : v;
  var y = e.maxScale;
  var E = undefined === y ? 2 : y;
  var O = a.useRef(null);
  var w = a.useState(l);
  var C = r.a(w, 2);
  var T = C[0];
  var S = C[1];
  var I = function (e) {
    var t = T + ("in" === e ? 1 / 8 : -1 / 8);
    if (t < 1) {
      t = 1;
    }
    if (t > 2) {
      t = 2;
    }
    S(t);
  };
  a.useImperativeHandle(t, function () {
    return {
      target: O.current,
      setScale: function (e) {
        S(e);
      }
    };
  });
  return s.a.createElement("div", {
    className: "coco-avatar-editor"
  }, s.a.createElement(Ue.a, {
    ref: O,
    crossOrigin: "anonymous",
    image: o,
    width: u,
    height: d,
    border: f,
    rotate: m,
    scale: T,
    onLoadSuccess: function (e) {
      var t = Math.max(u / e.width, d / e.height);
      t = Math.min(t, E);
      t = Math.max(t, b);
      S(t);
    }
  }), s.a.createElement("div", {
    className: "coco-avatar-editor-scaleBar"
  }, s.a.createElement("span", {
    className: i()("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomOut"),
    onClick: function () {
      I("out");
    }
  }, s.a.createElement("img", {
    src: require("./870"),
    alt: "",
    className: "coco-avatar-editor-zoomOutIcon"
  })), s.a.createElement("input", {
    type: "range",
    step: _,
    min: b,
    max: E,
    value: T,
    onChange: function (e) {
      S(parseFloat(e.target.value));
    }
  }), s.a.createElement("span", {
    className: i()("coco-avatar-editor-zoomButton", "coco-avatar-editor-zoomIn"),
    onClick: function () {
      I("in");
    }
  }, s.a.createElement("img", {
    src: require("./871"),
    alt: "",
    className: "coco-avatar-editor-zoomInIcon"
  }))));
}));
import He = require("../321");
export default Pe;