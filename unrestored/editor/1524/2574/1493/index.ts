"use strict";

export { Je as a };
var r = require("../19");
var o = require("../28");
var i = require("../20");
var a = require("../80/index");
var s = require("../33/index");
var c = require("../54");
var l = require("../0/index");
var u = require("../330");
var d = function () {
  if ("undefined" === typeof navigator || "undefined" === typeof window) {
    return !1;
  }
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || void 0 === e ? void 0 : e.substr(0, 4)));
};
var p = require("../108");
var f = require("../242/index");
function h(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === Object(p.a)(e) && e && "current" in e) {
      e.current = t;
    }
  }
}
function m() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return function (e) {
    t.forEach(function (t) {
      h(t, e);
    });
  };
}
var g = require("../8");
var _ = (module => {
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
})(g);
function v(e, t) {
  var n = t || {};
  var r = n.defaultValue;
  var o = n.value;
  var i = n.onChange;
  var a = n.postState;
  var c = l.useState(function () {
    return void 0 !== o ? o : void 0 !== r ? "function" === typeof r ? r() : r : "function" === typeof e ? e() : e;
  });
  var u = Object(s.a)(c, 2);
  var d = u[0];
  var p = u[1];
  var f = void 0 !== o ? o : d;
  if (a) {
    f = a(f);
  }
  var h = l.useRef(!0);
  l.useEffect(function () {
    if (h.current) {
      h.current = !1;
    } else {
      if (void 0 === o) {
        p(o);
      }
    }
  }, [o]);
  return [f, function (e) {
    p(e);
    if (f !== e && i) {
      i(e, f);
    }
  }];
}
var b = require("../782");
var y = require("./557");
var E = require("../733");
var O = function (e, t) {
  var n;
  var r;
  var o = e.prefixCls;
  var a = e.id;
  var s = e.inputElement;
  var c = e.disabled;
  var u = e.tabIndex;
  var d = e.autoFocus;
  var p = e.autoComplete;
  var f = e.editable;
  var h = e.accessibilityIndex;
  var g = e.value;
  var v = e.maxLength;
  var b = e.onKeyDown;
  var y = e.onMouseDown;
  var E = e.onChange;
  var O = e.onPaste;
  var w = e.onCompositionStart;
  var C = e.onCompositionEnd;
  var T = e.open;
  var S = e.attrs;
  var I = s || l.createElement("input", null);
  var A = I;
  var j = A.ref;
  var N = A.props;
  var R = N.onKeyDown;
  var k = N.onChange;
  var x = N.onMouseDown;
  var D = N.onCompositionStart;
  var M = N.onCompositionEnd;
  var L = N.style;
  return I = l.cloneElement(I, Object(i.a)(Object(i.a)({
    id: a,
    ref: m(t, j),
    disabled: c,
    tabIndex: u,
    autoComplete: p || "off",
    type: "search",
    autoFocus: d,
    className: _()("".concat(o, "-selection-search-input"), null === (n = I) || void 0 === n || null === (r = n.props) || void 0 === r ? void 0 : r.className),
    style: Object(i.a)(Object(i.a)({}, L), {}, {
      opacity: f ? null : 0
    }),
    role: "combobox",
    "aria-expanded": T,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": "".concat(a, "_list_").concat(h)
  }, S), {}, {
    value: f ? g : "",
    maxLength: v,
    readOnly: !f,
    unselectable: f ? null : "on",
    onKeyDown: function (e) {
      b(e);
      if (R) {
        R(e);
      }
    },
    onMouseDown: function (e) {
      y(e);
      if (x) {
        x(e);
      }
    },
    onChange: function (e) {
      E(e);
      if (k) {
        k(e);
      }
    },
    onCompositionStart: function (e) {
      w(e);
      if (D) {
        D(e);
      }
    },
    onCompositionEnd: function (e) {
      C(e);
      if (M) {
        M(e);
      }
    },
    onPaste: O
  }));
};
var w = l.forwardRef(O);
w.displayName = "Input";
var C = w;
var T = require("../487");
function S(e, t) {
  if (T.b) {
    l.useLayoutEffect(e, t);
  } else {
    l.useEffect(e, t);
  }
}
var I = function (e) {
  e.preventDefault();
  e.stopPropagation();
};
var A = function (e) {
  var t = e.id;
  var n = e.prefixCls;
  var r = e.values;
  var i = e.open;
  var a = e.searchValue;
  var c = e.inputRef;
  var u = e.placeholder;
  var d = e.disabled;
  var p = e.mode;
  var f = e.showSearch;
  var h = e.autoFocus;
  var m = e.autoComplete;
  var g = e.accessibilityIndex;
  var v = e.tabIndex;
  var O = e.removeIcon;
  var w = e.maxTagCount;
  var T = e.maxTagTextLength;
  var A = e.maxTagPlaceholder;
  var j = void 0 === A ? function (e) {
    return "+ ".concat(e.length, " ...");
  } : A;
  var N = e.tagRender;
  var R = e.onToggleOpen;
  var k = e.onSelect;
  var x = e.onInputChange;
  var D = e.onInputPaste;
  var M = e.onInputKeyDown;
  var L = e.onInputMouseDown;
  var P = e.onInputCompositionStart;
  var B = e.onInputCompositionEnd;
  var F = l.useRef(null);
  var G = Object(l.useState)(0);
  var U = Object(s.a)(G, 2);
  var W = U[0];
  var H = U[1];
  var V = Object(l.useState)(!1);
  var z = Object(s.a)(V, 2);
  var Y = z[0];
  var K = z[1];
  var q = "".concat(n, "-selection");
  var X = i || "tags" === p ? a : "";
  var Q = "tags" === p || f && (i || Y);
  function Z(e, t, n, r, i) {
    return l.createElement("span", {
      className: _()("".concat(q, "-item"), Object(o.a)({}, "".concat(q, "-item-disabled"), n)),
      title: "string" === typeof e || "number" === typeof e ? e.toString() : void 0
    }, l.createElement("span", {
      className: "".concat(q, "-item-content")
    }, t), r && l.createElement(E.a, {
      className: "".concat(q, "-item-remove"),
      onMouseDown: I,
      onClick: i,
      customizeIcon: O
    }, "\xd7"));
  }
  S(function () {
    H(F.current.scrollWidth);
  }, [X]);
  var J = l.createElement("div", {
    className: "".concat(q, "-search"),
    style: {
      width: W
    },
    onFocus: function () {
      K(!0);
    },
    onBlur: function () {
      K(!1);
    }
  }, l.createElement(C, {
    ref: c,
    open: i,
    prefixCls: n,
    id: t,
    inputElement: null,
    disabled: d,
    autoFocus: h,
    autoComplete: m,
    editable: Q,
    accessibilityIndex: g,
    value: X,
    onKeyDown: M,
    onMouseDown: L,
    onChange: x,
    onPaste: D,
    onCompositionStart: P,
    onCompositionEnd: B,
    tabIndex: v,
    attrs: Object(b.a)(e, !0)
  }), l.createElement("span", {
    ref: F,
    className: "".concat(q, "-search-mirror"),
    "aria-hidden": !0
  }, X, "\xa0"));
  var $ = l.createElement(y.a, {
    prefixCls: "".concat(q, "-overflow"),
    data: r,
    renderItem: function (e) {
      var t = e.disabled;
      var n = e.label;
      var r = e.value;
      var o = !d && !t;
      var a = n;
      if ("number" === typeof T && ("string" === typeof n || "number" === typeof n)) {
        var s = String(a);
        if (s.length > T) {
          a = "".concat(s.slice(0, T), "...");
        }
      }
      var c = function (e) {
        if (e) {
          e.stopPropagation();
        }
        k(r, {
          selected: !1
        });
      };
      return "function" === typeof N ? function (e, t, n, r, o) {
        return l.createElement("span", {
          onMouseDown: function (e) {
            I(e);
            R(!i);
          }
        }, N({
          label: t,
          value: e,
          disabled: n,
          closable: r,
          onClose: o
        }));
      }(r, a, t, o, c) : Z(n, a, t, o, c);
    },
    renderRest: function (e) {
      var t = "function" === typeof j ? j(e) : j;
      return Z(t, t, !1);
    },
    suffix: J,
    itemKey: "key",
    maxCount: w
  });
  return l.createElement(l.Fragment, null, $, !r.length && !X && l.createElement("span", {
    className: "".concat(q, "-placeholder")
  }, u));
};
var j = function (e) {
  var t = e.inputElement;
  var n = e.prefixCls;
  var r = e.id;
  var o = e.inputRef;
  var i = e.disabled;
  var a = e.autoFocus;
  var c = e.autoComplete;
  var u = e.accessibilityIndex;
  var d = e.mode;
  var p = e.open;
  var f = e.values;
  var h = e.placeholder;
  var m = e.tabIndex;
  var g = e.showSearch;
  var _ = e.searchValue;
  var v = e.activeValue;
  var y = e.maxLength;
  var E = e.onInputKeyDown;
  var O = e.onInputMouseDown;
  var w = e.onInputChange;
  var T = e.onInputPaste;
  var S = e.onInputCompositionStart;
  var I = e.onInputCompositionEnd;
  var A = l.useState(!1);
  var j = Object(s.a)(A, 2);
  var N = j[0];
  var R = j[1];
  var k = "combobox" === d;
  var x = k || g;
  var D = f[0];
  var M = _ || "";
  if (k && v && !N) {
    M = v;
  }
  l.useEffect(function () {
    if (k) {
      R(!1);
    }
  }, [k, v]);
  var L = !("combobox" !== d && !p) && !!M;
  var P = !D || "string" !== typeof D.label && "number" !== typeof D.label ? void 0 : D.label.toString();
  return l.createElement(l.Fragment, null, l.createElement("span", {
    className: "".concat(n, "-selection-search")
  }, l.createElement(C, {
    ref: o,
    prefixCls: n,
    id: r,
    open: p,
    inputElement: t,
    disabled: i,
    autoFocus: a,
    autoComplete: c,
    editable: x,
    accessibilityIndex: u,
    value: M,
    onKeyDown: E,
    onMouseDown: O,
    onChange: function (e) {
      R(!0);
      w(e);
    },
    onPaste: T,
    onCompositionStart: S,
    onCompositionEnd: I,
    tabIndex: m,
    attrs: Object(b.a)(e, !0),
    maxLength: k ? y : void 0
  })), !k && D && !L && l.createElement("span", {
    className: "".concat(n, "-selection-item"),
    title: P
  }, D.label), !D && !L && l.createElement("span", {
    className: "".concat(n, "-selection-placeholder")
  }, h));
};
function N() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 250;
  var t = l.useRef(null);
  var n = l.useRef(null);
  function r(r) {
    if (r || null === t.current) {
      t.current = r;
    }
    window.clearTimeout(n.current);
    n.current = window.setTimeout(function () {
      t.current = null;
    }, e);
  }
  l.useEffect(function () {
    return function () {
      window.clearTimeout(n.current);
    };
  }, []);
  return [function () {
    return t.current;
  }, r];
}
var R = function (e, t) {
  var n = Object(l.useRef)(null);
  var o = Object(l.useRef)(!1);
  var i = e.prefixCls;
  var a = e.multiple;
  var c = e.open;
  var d = e.mode;
  var p = e.showSearch;
  var f = e.tokenWithEnter;
  var h = e.onSearch;
  var m = e.onSearchSubmit;
  var g = e.onToggleOpen;
  var _ = e.onInputKeyDown;
  var v = e.domRef;
  l.useImperativeHandle(t, function () {
    return {
      focus: function () {
        n.current.focus();
      },
      blur: function () {
        n.current.blur();
      }
    };
  });
  var b = N(0);
  var y = Object(s.a)(b, 2);
  var E = y[0];
  var O = y[1];
  var w = Object(l.useRef)(null);
  var C = function (e) {
    if (!1 !== h(e, !0, o.current)) {
      g(!0);
    }
  };
  var T = {
    inputRef: n,
    onInputKeyDown: function (e) {
      var t = e.which;
      if (!(t !== u.a.UP && t !== u.a.DOWN)) {
        e.preventDefault();
      }
      if (_) {
        _(e);
      }
      if (!(t !== u.a.ENTER || "tags" !== d || o.current || c)) {
        m(e.target.value);
      }
      if (![u.a.SHIFT, u.a.TAB, u.a.BACKSPACE, u.a.ESC].includes(t)) {
        g(!0);
      }
    },
    onInputMouseDown: function () {
      O(!0);
    },
    onInputChange: function (e) {
      var t = e.target.value;
      if (f && w.current && /[\r\n]/.test(w.current)) {
        var n = w.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
        t = t.replace(n, w.current);
      }
      w.current = null;
      C(t);
    },
    onInputPaste: function (e) {
      var t = e.clipboardData.getData("text");
      w.current = t;
    },
    onInputCompositionStart: function () {
      o.current = !0;
    },
    onInputCompositionEnd: function (e) {
      o.current = !1;
      if ("combobox" !== d) {
        C(e.target.value);
      }
    }
  };
  var S = a ? l.createElement(A, Object(r.a)({}, e, T)) : l.createElement(j, Object(r.a)({}, e, T));
  return l.createElement("div", {
    ref: v,
    className: "".concat(i, "-selector"),
    onClick: function (e) {
      if (e.target !== n.current) {
        if (void 0 !== document.body.style.msTouchAction) {
          setTimeout(function () {
            n.current.focus();
          });
        } else {
          n.current.focus();
        }
      }
    },
    onMouseDown: function (e) {
      var t = E();
      if (!(e.target === n.current || t)) {
        e.preventDefault();
      }
      if (!(("combobox" === d || p && t) && c)) {
        if (c) {
          h("", !0, !1);
        }
        g();
      }
    }
  }, S);
};
var k = l.forwardRef(R);
k.displayName = "Selector";
var x = k;
var D = require("../95");
var M = require("../96");
var L = require("../103");
var P = require("../120");
var B = require("../140");
var F = require("../75/index");
var G = (module => {
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
})(F);
var U = function (e) {
  return +setTimeout(e, 16);
};
var W = function (e) {
  return clearTimeout(e);
};
if ("undefined" !== typeof window && "requestAnimationFrame" in window) {
  U = function (e) {
    return window.requestAnimationFrame(e);
  };
  W = function (e) {
    return window.cancelAnimationFrame(e);
  };
}
var H = 0;
var V = new Map();
function z(e) {
  V.delete(e);
}
function Y(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
  var n = H += 1;
  function r(t) {
    if (0 === t) {
      z(n);
      e();
    } else {
      var o = U(function () {
        r(t - 1);
      });
      V.set(n, o);
    }
  }
  r(t);
  return n;
}
function K(e, t) {
  return !!e && e.contains(t);
}
function q(e) {
  return e instanceof HTMLElement ? e : G.a.findDOMNode(e);
}
function X(e, t, n, r) {
  var o = G.a.unstable_batchedUpdates ? function (e) {
    G.a.unstable_batchedUpdates(n, e);
  } : n;
  if (e.addEventListener) {
    e.addEventListener(t, o, r);
  }
  return {
    remove: function () {
      if (e.removeEventListener) {
        e.removeEventListener(t, o);
      }
    }
  };
}
function Q() {
  return !("undefined" === typeof window || !window.document || !window.document.createElement);
}
Y.cancel = function (e) {
  var t = V.get(e);
  z(t);
  return W(t);
};
var Z = Object(l.forwardRef)(function (e, t) {
  var n = e.didUpdate;
  var r = e.getContainer;
  var o = e.children;
  var i = Object(l.useRef)();
  Object(l.useImperativeHandle)(t, function () {
    return {};
  });
  var a = Object(l.useRef)(!1);
  if (!a.current && Q()) {
    i.current = r();
    a.current = !0;
  }
  Object(l.useEffect)(function () {
    if (!(null === n || void 0 === n)) {
      n(e);
    }
  });
  Object(l.useEffect)(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = i.current) || void 0 === e || null === (t = e.parentNode) || void 0 === t)) {
        t.removeChild(i.current);
      }
    };
  }, []);
  return i.current ? G.a.createPortal(o, i.current) : null;
});
function J(e, t, n) {
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function $(e, t) {
  var n = {};
  n[e.toLowerCase()] = t.toLowerCase();
  n["Webkit".concat(e)] = "webkit".concat(t);
  n["Moz".concat(e)] = "moz".concat(t);
  n["ms".concat(e)] = "MS".concat(t);
  n["O".concat(e)] = "o".concat(t.toLowerCase());
  return n;
}
var ee = function (e, t) {
  var n = {
    animationend: $("Animation", "AnimationEnd"),
    transitionend: $("Transition", "TransitionEnd")
  };
  if (e) {
    if (!("AnimationEvent" in t)) {
      delete n.animationend.animation;
    }
    if (!("TransitionEvent" in t)) {
      delete n.transitionend.transition;
    }
  }
  return n;
}(Q(), "undefined" !== typeof window ? window : {});
var te = {};
if (Q()) {
  var ne = document.createElement("div");
  te = ne.style;
}
var re = {};
function oe(e) {
  if (re[e]) {
    return re[e];
  }
  var t = ee[e];
  if (t) {
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in te) {
        re[e] = t[i];
        return re[e];
      }
    }
  }
  return "";
}
var ie = oe("animationend");
var ae = oe("transitionend");
var se = !(!ie || !ae);
var ce = ie || "animationend";
var le = ae || "transitionend";
function ue(e, t) {
  return e ? "object" === Object(p.a)(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function de(e) {
  var t = Object(l.useRef)(!1);
  var n = Object(l.useState)(e);
  var r = Object(s.a)(n, 2);
  var o = r[0];
  var i = r[1];
  Object(l.useEffect)(function () {
    return function () {
      t.current = !0;
    };
  }, []);
  return [o, function (e) {
    if (!t.current) {
      i(e);
    }
  }];
}
var pe = Q() ? l.useLayoutEffect : l.useEffect;
var fe = ["prepare", "start", "active", "end"];
function he(e) {
  return "active" === e || "end" === e;
}
var me = function (e, t) {
  var n = l.useState("none");
  var r = Object(s.a)(n, 2);
  var o = r[0];
  var i = r[1];
  var a = function () {
    var e = l.useRef(null);
    function t() {
      Y.cancel(e.current);
    }
    l.useEffect(function () {
      return function () {
        t();
      };
    }, []);
    return [function n(r) {
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      t();
      var i = Y(function () {
        if (o <= 1) {
          r({
            isCanceled: function () {
              return i !== e.current;
            }
          });
        } else {
          n(r, o - 1);
        }
      });
      e.current = i;
    }, t];
  }();
  var c = Object(s.a)(a, 2);
  var u = c[0];
  var d = c[1];
  pe(function () {
    if ("none" !== o && "end" !== o) {
      var e = fe.indexOf(o);
      var n = fe[e + 1];
      var r = t(o);
      if (!1 === r) {
        i(n);
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              i(n);
            }
          }
          if (!0 === r) {
            t();
          } else {
            Promise.resolve(r).then(t);
          }
        });
      }
    }
  }, [e, o]);
  l.useEffect(function () {
    return function () {
      d();
    };
  }, []);
  return [function () {
    i("prepare");
  }, o];
};
function ge(e, t, n, r) {
  var a = r.motionEnter;
  var c = void 0 === a || a;
  var u = r.motionAppear;
  var d = void 0 === u || u;
  var p = r.motionLeave;
  var f = void 0 === p || p;
  var h = r.motionDeadline;
  var m = r.motionLeaveImmediately;
  var g = r.onAppearPrepare;
  var _ = r.onEnterPrepare;
  var v = r.onLeavePrepare;
  var b = r.onAppearStart;
  var y = r.onEnterStart;
  var E = r.onLeaveStart;
  var O = r.onAppearActive;
  var w = r.onEnterActive;
  var C = r.onLeaveActive;
  var T = r.onAppearEnd;
  var S = r.onEnterEnd;
  var I = r.onLeaveEnd;
  var A = r.onVisibleChanged;
  var j = de();
  var N = Object(s.a)(j, 2);
  var R = N[0];
  var k = N[1];
  var x = de("none");
  var D = Object(s.a)(x, 2);
  var M = D[0];
  var L = D[1];
  var P = de(null);
  var B = Object(s.a)(P, 2);
  var F = B[0];
  var G = B[1];
  var U = Object(l.useRef)(!1);
  var W = Object(l.useRef)(null);
  var H = Object(l.useRef)(!1);
  var V = Object(l.useRef)(null);
  function z() {
    return n() || V.current;
  }
  var Y = Object(l.useRef)(!1);
  function K(e) {
    var t;
    var n = z();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && Y.current) {
        t = null === T || void 0 === T ? void 0 : T(n, e);
      } else {
        if ("enter" === M && Y.current) {
          t = null === S || void 0 === S ? void 0 : S(n, e);
        } else {
          if ("leave" === M && Y.current) {
            t = null === I || void 0 === I ? void 0 : I(n, e);
          }
        }
      }
      if (!(!1 === t || H.current)) {
        L("none");
        G(null);
      }
    }
  }
  var q = function (e) {
    var t = Object(l.useRef)();
    var n = Object(l.useRef)(e);
    n.current = e;
    var r = l.useCallback(function (e) {
      n.current(e);
    }, []);
    function o(e) {
      if (e) {
        e.removeEventListener(le, r);
        e.removeEventListener(ce, r);
      }
    }
    l.useEffect(function () {
      return function () {
        o(t.current);
      };
    }, []);
    return [function (e) {
      if (t.current && t.current !== e) {
        o(t.current);
      }
      if (e && e !== t.current) {
        e.addEventListener(le, r);
        e.addEventListener(ce, r);
        t.current = e;
      }
    }, o];
  }(K);
  var X = Object(s.a)(q, 1)[0];
  var Q = l.useMemo(function () {
    var e;
    var t;
    var n;
    switch (M) {
      case "appear":
        e = {};
        Object(o.a)(e, "prepare", g);
        Object(o.a)(e, "start", b);
        Object(o.a)(e, "active", O);
        return e;
      case "enter":
        t = {};
        Object(o.a)(t, "prepare", _);
        Object(o.a)(t, "start", y);
        Object(o.a)(t, "active", w);
        return t;
      case "leave":
        n = {};
        Object(o.a)(n, "prepare", v);
        Object(o.a)(n, "start", E);
        Object(o.a)(n, "active", C);
        return n;
      default:
        return {};
    }
  }, [M]);
  var Z = me(M, function (e) {
    if ("prepare" === e) {
      var t = Q.prepare;
      return !!t && t(z());
    }
    var n;
    if (ee in Q) {
      G((null === (n = Q[ee]) || void 0 === n ? void 0 : n.call(Q, z(), null)) || null);
    }
    if ("active" === ee) {
      X(z());
      if (h > 0) {
        clearTimeout(W.current);
        W.current = setTimeout(function () {
          K({
            deadline: !0
          });
        }, h);
      }
    }
    return !0;
  });
  var J = Object(s.a)(Z, 2);
  var $ = J[0];
  var ee = J[1];
  var te = he(ee);
  Y.current = te;
  pe(function () {
    k(t);
    var n;
    var r = U.current;
    if (U.current = !0, e) {
      if (!r && t && d) {
        n = "appear";
      }
      if (r && t && c) {
        n = "enter";
      }
      if (r && !t && f || !r && m && !t && f) {
        n = "leave";
      }
      if (n) {
        L(n);
        $();
      }
    }
  }, [t]);
  Object(l.useEffect)(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none");
    }
  }, [d, c, f]);
  Object(l.useEffect)(function () {
    return function () {
      clearTimeout(W.current);
      H.current = !0;
    };
  }, []);
  Object(l.useEffect)(function () {
    if (void 0 !== R && "none" === M) {
      if (!(null === A || void 0 === A)) {
        A(R);
      }
    }
  }, [R, M]);
  var ne = F;
  if (Q.prepare && "start" === ee) {
    ne = Object(i.a)({
      transition: "none"
    }, ne);
  }
  return [M, ee, ne, null !== R && void 0 !== R ? R : t];
}
var _e = function (e) {
  Object(P.a)(n, e);
  var t = Object(B.a)(n);
  function n() {
    Object(D.a)(this, n);
    return t.apply(this, arguments);
  }
  Object(M.a)(n, [{
    key: "render",
    value: function () {
      return this.props.children;
    }
  }]);
  return n;
}(l.Component);
var ve = function (e) {
  var t = e;
  function n(e) {
    return !(!e.motionName || !t);
  }
  if ("object" === Object(p.a)(e)) {
    t = e.transitionSupport;
  }
  var r = l.forwardRef(function (e, t) {
    var r = e.visible;
    var a = void 0 === r || r;
    var c = e.removeOnLeave;
    var u = void 0 === c || c;
    var d = e.forceRender;
    var p = e.children;
    var f = e.motionName;
    var m = e.leavedClassName;
    var g = e.eventProps;
    var v = n(e);
    var b = Object(l.useRef)();
    var y = Object(l.useRef)();
    var E = ge(v, a, function () {
      try {
        return q(b.current || y.current);
      } catch (e) {
        return null;
      }
    }, e);
    var O = Object(s.a)(E, 4);
    var w = O[0];
    var C = O[1];
    var T = O[2];
    var S = O[3];
    var I = l.useRef(S);
    if (S) {
      I.current = !0;
    }
    var A = Object(l.useRef)(t);
    A.current = t;
    var j;
    var N = l.useCallback(function (e) {
      b.current = e;
      h(A.current, e);
    }, []);
    var R = Object(i.a)(Object(i.a)({}, g), {}, {
      visible: a
    });
    if (p) {
      if ("none" !== w && n(e)) {
        var k;
        var x;
        if ("prepare" === C) {
          x = "prepare";
        } else {
          if (he(C)) {
            x = "active";
          } else {
            if ("start" === C) {
              x = "start";
            }
          }
        }
        j = p(Object(i.a)(Object(i.a)({}, R), {}, {
          className: _()(ue(f, w), (k = {}, Object(o.a)(k, ue(f, "".concat(w, "-").concat(x)), x), Object(o.a)(k, f, "string" === typeof f), k)),
          style: T
        }), N);
      } else {
        j = S ? p(Object(i.a)({}, R), N) : !u && I.current ? p(Object(i.a)(Object(i.a)({}, R), {}, {
          className: m
        }), N) : d ? p(Object(i.a)(Object(i.a)({}, R), {}, {
          style: {
            display: "none"
          }
        }), N) : null;
      }
    } else {
      j = null;
    }
    return l.createElement(_e, {
      ref: y
    }, j);
  });
  r.displayName = "CSSMotion";
  return r;
}(se);
function be(e) {
  var t;
  t = e && "object" === Object(p.a)(e) && "key" in e ? e : {
    key: e
  };
  return Object(i.a)(Object(i.a)({}, t), {}, {
    key: String(t.key)
  });
}
function ye() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  return e.map(be);
}
function Ee() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var o = t.length;
  var a = ye(e);
  var s = ye(t);
  a.forEach(function (e) {
    for (var t = !1, a = r; a < o; a += 1) {
      var c = s[a];
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return Object(i.a)(Object(i.a)({}, e), {}, {
              status: "add"
            });
          }));
          r = a;
        }
        n.push(Object(i.a)(Object(i.a)({}, c), {}, {
          status: "keep"
        }));
        r += 1;
        t = !0;
        break;
      }
    }
    if (!t) {
      n.push(Object(i.a)(Object(i.a)({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < o) {
    n = n.concat(s.slice(r).map(function (e) {
      return Object(i.a)(Object(i.a)({}, e), {}, {
        status: "add"
      });
    }));
  }
  var c = {};
  n.forEach(function (e) {
    var t = e.key;
    c[t] = (c[t] || 0) + 1;
  });
  var l = Object.keys(c).filter(function (e) {
    return c[e] > 1;
  });
  l.forEach(function (e) {
    (n = n.filter(function (t) {
      var n = t.key;
      var r = t.status;
      return n !== e || "remove" !== r;
    })).forEach(function (t) {
      if (t.key === e) {
        t.status = "keep";
      }
    });
  });
  return n;
}
var Oe = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
!function (e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ve;
  var n = function (e) {
    Object(P.a)(o, e);
    var n = Object(B.a)(o);
    function o() {
      var e;
      Object(D.a)(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : Object(i.a)(Object(i.a)({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    Object(M.a)(o, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var o = this.props;
        var i = o.component;
        var a = o.children;
        var s = o.onVisibleChanged;
        var u = Object(c.a)(o, ["component", "children", "onVisibleChanged"]);
        var d = i || l.Fragment;
        var p = {};
        Oe.forEach(function (e) {
          p[e] = u[e];
          delete u[e];
        });
        delete u.keys;
        return l.createElement(d, u, n.map(function (n) {
          var o = n.status;
          var i = Object(c.a)(n, ["status"]);
          var u = "add" === o || "keep" === o;
          return l.createElement(t, Object(r.a)({}, p, {
            key: i.key,
            visible: u,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === s || void 0 === s)) {
                s(t, {
                  key: i.key
                });
              }
              if (!t) {
                e.removeKey(i.key);
              }
            }
          }), a);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.keys;
        var r = t.keyEntities;
        var o = ye(n);
        return {
          keyEntities: Ee(r, o).filter(function (e) {
            var t = r.find(function (t) {
              var n = t.key;
              return e.key === n;
            });
            return !t || "removed" !== t.status || "remove" !== e.status;
          })
        };
      }
    }]);
    return o;
  }(l.Component);
  n.defaultProps = {
    component: "div"
  };
}(se);
var we = ve;
function Ce(e) {
  var t = e.prefixCls;
  var n = e.motion;
  var r = e.animation;
  var o = e.transitionName;
  return n || (r ? {
    motionName: "".concat(t, "-").concat(r)
  } : o ? {
    motionName: o
  } : null);
}
function Te(e) {
  var t = e.prefixCls;
  var n = e.visible;
  var o = e.zIndex;
  var a = e.mask;
  var s = e.maskMotion;
  var c = e.maskAnimation;
  var u = e.maskTransitionName;
  if (!a) {
    return null;
  }
  var d = {};
  if (s || u || c) {
    d = Object(i.a)({
      motionAppear: !0
    }, Ce({
      motion: s,
      prefixCls: t,
      transitionName: u,
      animation: c
    }));
  }
  return l.createElement(we, Object(r.a)({}, d, {
    visible: n,
    removeOnLeave: !0
  }), function (e) {
    var n = e.className;
    return l.createElement("div", {
      style: {
        zIndex: o
      },
      className: _()("".concat(t, "-mask"), n)
    });
  });
}
var Se = require("./555/index");
var Ie = require("../110");
var Ae = (module => {
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
})(Ie);
var je = require("../171");
var Ne = ["measure", "align", null, "motion"];
var Re = l.forwardRef(function (e, t) {
  var n = e.visible;
  var o = e.prefixCls;
  var a = e.className;
  var c = e.style;
  var u = e.children;
  var d = e.zIndex;
  var p = e.stretch;
  var f = e.destroyPopupOnHide;
  var h = e.forceRender;
  var m = e.align;
  var g = e.point;
  var v = e.getRootDomNode;
  var b = e.getClassNameFromAlign;
  var y = e.onAlign;
  var E = e.onMouseEnter;
  var O = e.onMouseLeave;
  var w = e.onMouseDown;
  var C = e.onTouchStart;
  var T = Object(l.useRef)();
  var S = Object(l.useRef)();
  var I = Object(l.useState)();
  var A = Object(s.a)(I, 2);
  var j = A[0];
  var N = A[1];
  var R = function (e) {
    var t = l.useState({
      width: 0,
      height: 0
    });
    var n = Object(s.a)(t, 2);
    var r = n[0];
    var o = n[1];
    return [l.useMemo(function () {
      var t = {};
      if (e) {
        var n = r.width;
        var o = r.height;
        if (-1 !== e.indexOf("height") && o) {
          t.height = o;
        } else {
          if (-1 !== e.indexOf("minHeight") && o) {
            t.minHeight = o;
          }
        }
        if (-1 !== e.indexOf("width") && n) {
          t.width = n;
        } else {
          if (-1 !== e.indexOf("minWidth") && n) {
            t.minWidth = n;
          }
        }
      }
      return t;
    }, [e, r]), function (e) {
      o({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
    }];
  }(p);
  var k = Object(s.a)(R, 2);
  var x = k[0];
  var D = k[1];
  var M = function (e, t) {
    var n = Object(l.useState)(null);
    var r = Object(s.a)(n, 2);
    var o = r[0];
    var i = r[1];
    var a = Object(l.useRef)();
    var c = Object(l.useRef)(!1);
    function u(e) {
      if (!c.current) {
        i(e);
      }
    }
    function d() {
      Y.cancel(a.current);
    }
    Object(l.useEffect)(function () {
      u("measure");
    }, [e]);
    Object(l.useEffect)(function () {
      switch (o) {
        case "measure":
          t();
      }
      if (o) {
        a.current = Y(Object(je.a)(Ae.a.mark(function e() {
          var t;
          var n;
          return Ae.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = Ne.indexOf(o);
                  if ((n = Ne[t + 1]) && -1 !== t) {
                    u(n);
                  }
                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })));
      }
    }, [o]);
    Object(l.useEffect)(function () {
      return function () {
        c.current = !0;
        d();
      };
    }, []);
    return [o, function (e) {
      d();
      a.current = Y(function () {
        u(function (e) {
          switch (o) {
            case "align":
              return "motion";
            case "motion":
              return "stable";
          }
          return e;
        });
        if (!(null === e || void 0 === e)) {
          e();
        }
      });
    }];
  }(n, function () {
    if (p) {
      D(v());
    }
  });
  var L = Object(s.a)(M, 2);
  var P = L[0];
  var B = L[1];
  var F = Object(l.useRef)();
  function G() {
    var e;
    if (!(null === (e = T.current) || void 0 === e)) {
      e.forceAlign();
    }
  }
  function U(e, t) {
    var n = b(t);
    if (j !== n) {
      N(n);
    }
    if ("align" === P) {
      if (j !== n) {
        Promise.resolve().then(function () {
          G();
        });
      } else {
        B(function () {
          var e;
          if (!(null === (e = F.current) || void 0 === e)) {
            e.call(F);
          }
        });
      }
      if (!(null === y || void 0 === y)) {
        y(e, t);
      }
    }
  }
  var W = Object(i.a)({}, Ce(e));
  function H() {
    return new Promise(function (e) {
      F.current = e;
    });
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = W[e];
    W[e] = function (e, n) {
      B();
      return null === t || void 0 === t ? void 0 : t(e, n);
    };
  });
  l.useEffect(function () {
    if (!(W.motionName || "motion" !== P)) {
      B();
    }
  }, [W.motionName, P]);
  l.useImperativeHandle(t, function () {
    return {
      forceAlign: G,
      getElement: function () {
        return S.current;
      }
    };
  });
  var V = Object(i.a)(Object(i.a)({}, x), {}, {
    zIndex: d,
    opacity: "motion" !== P && "stable" !== P && n ? 0 : void 0,
    pointerEvents: "stable" === P ? void 0 : "none"
  }, c);
  var z = !0;
  if (!(!(null === m || void 0 === m ? void 0 : m.points) || "align" !== P && "stable" !== P)) {
    z = !1;
  }
  var K = u;
  if (l.Children.count(u) > 1) {
    K = l.createElement("div", {
      className: "".concat(o, "-content")
    }, u);
  }
  return l.createElement(we, Object(r.a)({
    visible: n,
    ref: S,
    leavedClassName: "".concat(o, "-hidden")
  }, W, {
    onAppearPrepare: H,
    onEnterPrepare: H,
    removeOnLeave: f,
    forceRender: h
  }), function (e, t) {
    var n = e.className;
    var r = e.style;
    var s = _()(o, a, j, n);
    return l.createElement(Se.a, {
      target: g || v,
      key: "popup",
      ref: T,
      monitorWindowResize: !0,
      disabled: z,
      align: m,
      onAlign: U
    }, l.createElement("div", {
      ref: t,
      className: s,
      onMouseEnter: E,
      onMouseLeave: O,
      onMouseDownCapture: w,
      onTouchStartCapture: C,
      style: Object(i.a)(Object(i.a)({}, r), V)
    }, K));
  });
});
Re.displayName = "PopupInner";
var ke = Re;
var xe = l.forwardRef(function (e, t) {
  var n = e.prefixCls;
  var o = e.visible;
  var a = e.zIndex;
  var s = e.children;
  var c = e.mobile;
  var u = (c = void 0 === c ? {} : c).popupClassName;
  var d = c.popupStyle;
  var p = c.popupMotion;
  var f = void 0 === p ? {} : p;
  var h = c.popupRender;
  var m = l.useRef();
  l.useImperativeHandle(t, function () {
    return {
      forceAlign: function () {},
      getElement: function () {
        return m.current;
      }
    };
  });
  var g = Object(i.a)({
    zIndex: a
  }, d);
  var v = s;
  if (l.Children.count(s) > 1) {
    v = l.createElement("div", {
      className: "".concat(n, "-content")
    }, s);
  }
  if (h) {
    v = h(v);
  }
  return l.createElement(we, Object(r.a)({
    visible: o,
    ref: m,
    removeOnLeave: !0
  }, f), function (e, t) {
    var r = e.className;
    var o = e.style;
    var a = _()(n, u, r);
    return l.createElement("div", {
      ref: t,
      className: a,
      style: Object(i.a)(Object(i.a)({}, o), g)
    }, v);
  });
});
xe.displayName = "MobilePopupInner";
var De = xe;
var Me = ["visible", "mobile"];
var Le = l.forwardRef(function (e, t) {
  var n = e.visible;
  var o = e.mobile;
  var a = Object(c.a)(e, Me);
  var u = Object(l.useState)(n);
  var p = Object(s.a)(u, 2);
  var f = p[0];
  var h = p[1];
  var m = Object(l.useState)(!1);
  var g = Object(s.a)(m, 2);
  var _ = g[0];
  var v = g[1];
  var b = Object(i.a)(Object(i.a)({}, a), {}, {
    visible: f
  });
  Object(l.useEffect)(function () {
    h(n);
    if (n && o) {
      v(d());
    }
  }, [n, o]);
  var y = _ ? l.createElement(De, Object(r.a)({}, b, {
    mobile: o,
    ref: t
  })) : l.createElement(ke, Object(r.a)({}, b, {
    ref: t
  }));
  return l.createElement("div", null, l.createElement(Te, b), y);
});
Le.displayName = "Popup";
var Pe = Le;
var Be = l.createContext(null);
function Fe() {}
function Ge() {
  return "";
}
function Ue(e) {
  return e ? e.ownerDocument : window.document;
}
var We = ["onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur", "onContextMenu"];
var He = function (e) {
  var t = function (t) {
    Object(P.a)(o, t);
    var n = Object(B.a)(o);
    function o(e) {
      var t;
      var i;
      Object(D.a)(this, o);
      (t = n.call(this, e)).popupRef = l.createRef();
      t.triggerRef = l.createRef();
      t.attachId = void 0;
      t.clickOutsideHandler = void 0;
      t.touchOutsideHandler = void 0;
      t.contextMenuOutsideHandler1 = void 0;
      t.contextMenuOutsideHandler2 = void 0;
      t.mouseDownTimeout = void 0;
      t.focusTime = void 0;
      t.preClickTime = void 0;
      t.preTouchTime = void 0;
      t.delayTimer = void 0;
      t.hasPopupMouseDown = void 0;
      t.onMouseEnter = function (e) {
        var n = t.props.mouseEnterDelay;
        t.fireEvents("onMouseEnter", e);
        t.delaySetPopupVisible(!0, n, n ? null : e);
      };
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e);
        t.setPoint(e);
      };
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e);
        t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
      };
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer();
      };
      t.onPopupMouseLeave = function (e) {
        var n;
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && K(null === (n = t.popupRef.current) || void 0 === n ? void 0 : n.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
        }
      };
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e);
        t.clearDelayTimer();
        if (t.isFocusToShow()) {
          t.focusTime = Date.now();
          t.delaySetPopupVisible(!0, t.props.focusDelay);
        }
      };
      t.onMouseDown = function (e) {
        t.fireEvents("onMouseDown", e);
        t.preClickTime = Date.now();
      };
      t.onTouchStart = function (e) {
        t.fireEvents("onTouchStart", e);
        t.preTouchTime = Date.now();
      };
      t.onBlur = function (e) {
        t.fireEvents("onBlur", e);
        t.clearDelayTimer();
        if (t.isBlurToHide()) {
          t.delaySetPopupVisible(!1, t.props.blurDelay);
        }
      };
      t.onContextMenu = function (e) {
        e.preventDefault();
        t.fireEvents("onContextMenu", e);
        t.setPopupVisible(!0, e);
      };
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close();
        }
      };
      t.onClick = function (e) {
        if (t.fireEvents("onClick", e), t.focusTime) {
          var n;
          if (t.preClickTime && t.preTouchTime ? n = Math.min(t.preClickTime, t.preTouchTime) : t.preClickTime ? n = t.preClickTime : t.preTouchTime && (n = t.preTouchTime), Math.abs(n - t.focusTime) < 20) {
            return;
          }
          t.focusTime = 0;
        }
        t.preClickTime = 0;
        t.preTouchTime = 0;
        if (t.isClickToShow() && (t.isClickToHide() || t.isBlurToHide()) && e && e.preventDefault) {
          e.preventDefault();
        }
        var r = !t.state.popupVisible;
        if (t.isClickToHide() && !r || r && t.isClickToShow()) {
          t.setPopupVisible(!t.state.popupVisible, e);
        }
      };
      t.onPopupMouseDown = function () {
        var e;
        if (t.hasPopupMouseDown = !0, clearTimeout(t.mouseDownTimeout), t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = !1;
        }, 0), t.context) {
          (e = t.context).onPopupMouseDown.apply(e, arguments);
        }
      };
      t.onDocumentClick = function (e) {
        if (!t.props.mask || t.props.maskClosable) {
          var n = e.target;
          var r = t.getRootDomNode();
          var o = t.getPopupDomNode();
          if (!(K(r, n) && !t.isContextMenuOnly() || K(o, n) || t.hasPopupMouseDown)) {
            t.close();
          }
        }
      };
      t.getRootDomNode = function () {
        var e = t.props.getTriggerDOMNode;
        if (e) {
          return e(t.triggerRef.current);
        }
        try {
          var n = q(t.triggerRef.current);
          if (n) {
            return n;
          }
        } catch (r) {}
        return G.a.findDOMNode(Object(L.a)(t));
      };
      t.getPopupClassNameFromAlign = function (e) {
        var n = [];
        var r = t.props;
        var o = r.popupPlacement;
        var i = r.builtinPlacements;
        var a = r.prefixCls;
        var s = r.alignPoint;
        var c = r.getPopupClassNameFromAlign;
        if (o && i) {
          n.push(function (e, t, n, r) {
            for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
              var s = i[a];
              if (J(e[s].points, o, r)) {
                return "".concat(t, "-placement-").concat(s);
              }
            }
            return "";
          }(i, a, e, s));
        }
        if (c) {
          n.push(c(e));
        }
        return n.join(" ");
      };
      t.getComponent = function () {
        var e = t.props;
        var n = e.prefixCls;
        var o = e.destroyPopupOnHide;
        var i = e.popupClassName;
        var a = e.onPopupAlign;
        var s = e.popupMotion;
        var c = e.popupAnimation;
        var u = e.popupTransitionName;
        var d = e.popupStyle;
        var p = e.mask;
        var f = e.maskAnimation;
        var h = e.maskTransitionName;
        var m = e.maskMotion;
        var g = e.zIndex;
        var _ = e.popup;
        var v = e.stretch;
        var b = e.alignPoint;
        var y = e.mobile;
        var E = e.forceRender;
        var O = t.state;
        var w = O.popupVisible;
        var C = O.point;
        var T = t.getPopupAlign();
        var S = {};
        if (t.isMouseEnterToShow()) {
          S.onMouseEnter = t.onPopupMouseEnter;
        }
        if (t.isMouseLeaveToHide()) {
          S.onMouseLeave = t.onPopupMouseLeave;
        }
        S.onMouseDown = t.onPopupMouseDown;
        S.onTouchStart = t.onPopupMouseDown;
        return l.createElement(Pe, Object(r.a)({
          prefixCls: n,
          destroyPopupOnHide: o,
          visible: w,
          point: b && C,
          className: i,
          align: T,
          onAlign: a,
          animation: c,
          getClassNameFromAlign: t.getPopupClassNameFromAlign
        }, S, {
          stretch: v,
          getRootDomNode: t.getRootDomNode,
          style: d,
          mask: p,
          zIndex: g,
          transitionName: u,
          maskAnimation: f,
          maskTransitionName: h,
          maskMotion: m,
          ref: t.popupRef,
          motion: s,
          mobile: y,
          forceRender: E
        }), "function" === typeof _ ? _() : _);
      };
      t.attachParent = function (e) {
        Y.cancel(t.attachId);
        var n;
        var r = t.props;
        var o = r.getPopupContainer;
        var i = r.getDocument;
        var a = t.getRootDomNode();
        if (o) {
          if (a || 0 === o.length) {
            n = o(a);
          }
        } else {
          n = i(t.getRootDomNode()).body;
        }
        if (n) {
          n.appendChild(e);
        } else {
          t.attachId = Y(function () {
            t.attachParent(e);
          });
        }
      };
      t.getContainer = function () {
        var e = (0, t.props.getDocument)(t.getRootDomNode()).createElement("div");
        e.style.position = "absolute";
        e.style.top = "0";
        e.style.left = "0";
        e.style.width = "100%";
        t.attachParent(e);
        return e;
      };
      t.setPoint = function (e) {
        if (t.props.alignPoint && e) {
          t.setState({
            point: {
              pageX: e.pageX,
              pageY: e.pageY
            }
          });
        }
      };
      t.handlePortalUpdate = function () {
        if (t.state.prevPopupVisible !== t.state.popupVisible) {
          t.props.afterPopupVisibleChange(t.state.popupVisible);
        }
      };
      t.triggerContextValue = {
        onPopupMouseDown: t.onPopupMouseDown
      };
      i = "popupVisible" in e ? !!e.popupVisible : !!e.defaultPopupVisible;
      t.state = {
        prevPopupVisible: i,
        popupVisible: i
      };
      We.forEach(function (e) {
        t["fire".concat(e)] = function (n) {
          t.fireEvents(e, n);
        };
      });
      return t;
    }
    Object(M.a)(o, [{
      key: "componentDidMount",
      value: function () {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function () {
        var e;
        var t = this.props;
        if (this.state.popupVisible) {
          if (!(this.clickOutsideHandler || !this.isClickToHide() && !this.isContextMenuToShow())) {
            e = t.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = X(e, "mousedown", this.onDocumentClick);
          }
          if (!this.touchOutsideHandler) {
            e = e || t.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = X(e, "touchstart", this.onDocumentClick);
          }
          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            e = e || t.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = X(e, "scroll", this.onContextMenuClose);
          }
          return void (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow() && (this.contextMenuOutsideHandler2 = X(window, "blur", this.onContextMenuClose)));
        }
        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function () {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        Y.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function () {
        var e;
        return (null === (e = this.popupRef.current) || void 0 === e ? void 0 : e.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function () {
        var e = this.props;
        var t = e.popupPlacement;
        var n = e.popupAlign;
        var r = e.builtinPlacements;
        return t && r ? function (e, t, n) {
          var r = e[t] || {};
          return Object(i.a)(Object(i.a)({}, r), n);
        }(r, t, n) : n;
      }
    }, {
      key: "setPopupVisible",
      value: function (e, t) {
        var n = this.props.alignPoint;
        var r = this.state.popupVisible;
        this.clearDelayTimer();
        if (r !== e) {
          if (!("popupVisible" in this.props)) {
            this.setState({
              popupVisible: e,
              prevPopupVisible: r
            });
          }
          this.props.onPopupVisibleChange(e);
        }
        if (n && t && e) {
          this.setPoint(t);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function (e, t, n) {
        var r = this;
        var o = 1e3 * t;
        if (this.clearDelayTimer(), o) {
          var i = n ? {
            pageX: n.pageX,
            pageY: n.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            r.setPopupVisible(e, i);
            r.clearDelayTimer();
          }, o);
        } else {
          this.setPopupVisible(e, n);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function () {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function () {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }
        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }
        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }
        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function (e) {
        var t = this.props.children.props;
        var n = this.props;
        return t[e] && n[e] ? this["fire".concat(e)] : t[e] || n[e];
      }
    }, {
      key: "isClickToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
      }
    }, {
      key: "isContextMenuOnly",
      value: function () {
        var e = this.props.action;
        return "contextMenu" === e || 1 === e.length && "contextMenu" === e[0];
      }
    }, {
      key: "isContextMenuToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("contextMenu") || -1 !== n.indexOf("contextMenu");
      }
    }, {
      key: "isClickToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("click") || -1 !== n.indexOf("click");
      }
    }, {
      key: "isMouseEnterToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseEnter");
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("hover") || -1 !== n.indexOf("mouseLeave");
      }
    }, {
      key: "isFocusToShow",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.showAction;
        return -1 !== t.indexOf("focus") || -1 !== n.indexOf("focus");
      }
    }, {
      key: "isBlurToHide",
      value: function () {
        var e = this.props;
        var t = e.action;
        var n = e.hideAction;
        return -1 !== t.indexOf("focus") || -1 !== n.indexOf("blur");
      }
    }, {
      key: "forcePopupAlign",
      value: function () {
        var e;
        if (this.state.popupVisible) {
          if (!(null === (e = this.popupRef.current) || void 0 === e)) {
            e.forceAlign();
          }
        }
      }
    }, {
      key: "fireEvents",
      value: function (e, t) {
        var n = this.props.children.props[e];
        if (n) {
          n(t);
        }
        var r = this.props[e];
        if (r) {
          r(t);
        }
      }
    }, {
      key: "close",
      value: function () {
        this.setPopupVisible(!1);
      }
    }, {
      key: "render",
      value: function () {
        var t = this.state.popupVisible;
        var n = this.props;
        var r = n.children;
        var o = n.forceRender;
        var a = n.alignPoint;
        var s = n.className;
        var c = n.autoDestroy;
        var u = l.Children.only(r);
        var d = {
          key: "trigger"
        };
        if (this.isContextMenuToShow()) {
          d.onContextMenu = this.onContextMenu;
        } else {
          d.onContextMenu = this.createTwoChains("onContextMenu");
        }
        if (this.isClickToHide() || this.isClickToShow()) {
          d.onClick = this.onClick;
          d.onMouseDown = this.onMouseDown;
          d.onTouchStart = this.onTouchStart;
        } else {
          d.onClick = this.createTwoChains("onClick");
          d.onMouseDown = this.createTwoChains("onMouseDown");
          d.onTouchStart = this.createTwoChains("onTouchStart");
        }
        if (this.isMouseEnterToShow()) {
          d.onMouseEnter = this.onMouseEnter;
          if (a) {
            d.onMouseMove = this.onMouseMove;
          }
        } else {
          d.onMouseEnter = this.createTwoChains("onMouseEnter");
        }
        if (this.isMouseLeaveToHide()) {
          d.onMouseLeave = this.onMouseLeave;
        } else {
          d.onMouseLeave = this.createTwoChains("onMouseLeave");
        }
        if (this.isFocusToShow() || this.isBlurToHide()) {
          d.onFocus = this.onFocus;
          d.onBlur = this.onBlur;
        } else {
          d.onFocus = this.createTwoChains("onFocus");
          d.onBlur = this.createTwoChains("onBlur");
        }
        var p = _()(u && u.props && u.props.className, s);
        if (p) {
          d.className = p;
        }
        var h = Object(i.a)({}, d);
        if (function (e) {
          var t;
          var n;
          var r = Object(f.isMemo)(e) ? e.type.type : e.type;
          return !("function" === typeof r && !(null === (t = r.prototype) || void 0 === t ? void 0 : t.render)) && !("function" === typeof e && !(null === (n = e.prototype) || void 0 === n ? void 0 : n.render));
        }(u)) {
          h.ref = m(this.triggerRef, u.ref);
        }
        var g;
        var v = l.cloneElement(u, h);
        if (t || this.popupRef.current || o) {
          g = l.createElement(e, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }
        if (!t && c) {
          g = null;
        }
        return l.createElement(Be.Provider, {
          value: this.triggerContextValue
        }, v, g);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        var n = e.popupVisible;
        var r = {};
        if (void 0 !== n && t.popupVisible !== n) {
          r.popupVisible = n;
          r.prevPopupVisible = t.popupVisible;
        }
        return r;
      }
    }]);
    return o;
  }(l.Component);
  t.contextType = Be;
  t.defaultProps = {
    prefixCls: "rc-trigger-popup",
    getPopupClassNameFromAlign: Ge,
    getDocument: Ue,
    onPopupVisibleChange: Fe,
    afterPopupVisibleChange: Fe,
    onPopupAlign: Fe,
    popupClassName: "",
    mouseEnterDelay: 0,
    mouseLeaveDelay: .1,
    focusDelay: 0,
    blurDelay: .15,
    popupStyle: {},
    destroyPopupOnHide: !1,
    popupAlign: {},
    defaultPopupVisible: !1,
    mask: !1,
    maskClosable: !0,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: !1
  };
  return t;
}(Z);
var Ve = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange"];
var ze = function (e, t) {
  var n = e.prefixCls;
  e.disabled;
  var a = e.visible;
  var s = e.children;
  var u = e.popupElement;
  var d = e.containerWidth;
  var p = e.animation;
  var f = e.transitionName;
  var h = e.dropdownStyle;
  var m = e.dropdownClassName;
  var g = e.direction;
  var v = void 0 === g ? "ltr" : g;
  var b = e.placement;
  var y = e.dropdownMatchSelectWidth;
  var E = void 0 === y || y;
  var O = e.dropdownRender;
  var w = e.dropdownAlign;
  var C = e.getPopupContainer;
  var T = e.empty;
  var S = e.getTriggerDOMNode;
  var I = e.onPopupVisibleChange;
  var A = Object(c.a)(e, Ve);
  var j = "".concat(n, "-dropdown");
  var N = u;
  if (O) {
    N = O(u);
  }
  var R = l.useMemo(function () {
    return function (e) {
      var t = "number" !== typeof e ? 0 : 1;
      return {
        bottomLeft: {
          points: ["tl", "bl"],
          offset: [0, 4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        bottomRight: {
          points: ["tr", "br"],
          offset: [0, 4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        topLeft: {
          points: ["bl", "tl"],
          offset: [0, -4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        },
        topRight: {
          points: ["br", "tr"],
          offset: [0, -4],
          overflow: {
            adjustX: t,
            adjustY: 1
          }
        }
      };
    }(E);
  }, [E]);
  var k = p ? "".concat(j, "-").concat(p) : f;
  var x = l.useRef(null);
  l.useImperativeHandle(t, function () {
    return {
      getPopupElement: function () {
        return x.current;
      }
    };
  });
  var D = Object(i.a)({
    minWidth: d
  }, h);
  if ("number" === typeof E) {
    D.width = E;
  } else {
    if (E) {
      D.width = d;
    }
  }
  return l.createElement(He, Object(r.a)({}, A, {
    showAction: I ? ["click"] : [],
    hideAction: I ? ["click"] : [],
    popupPlacement: b || ("rtl" === v ? "bottomRight" : "bottomLeft"),
    builtinPlacements: R,
    prefixCls: j,
    popupTransitionName: k,
    popup: l.createElement("div", {
      ref: x
    }, N),
    popupAlign: w,
    popupVisible: a,
    getPopupContainer: C,
    popupClassName: _()(m, Object(o.a)({}, "".concat(j, "-empty"), T)),
    popupStyle: D,
    getTriggerDOMNode: S,
    onPopupVisibleChange: I
  }), s);
};
var Ye = l.forwardRef(ze);
Ye.displayName = "SelectTrigger";
var Ke = Ye;
var qe = require("./1469");
var Xe = require("../519/index");
var Qe = ["prefixCls", "className", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "filterSort", "optionFilterProp", "autoClearSearchValue", "onSearch", "fieldNames", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "tabIndex", "getInputElement", "getRawInputElement", "getPopupContainer", "placement", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"];
var Ze = ["removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "tabIndex"];
function Je(e) {
  var t = e.prefixCls;
  var n = e.components.optionList;
  var p = e.convertChildrenToData;
  var f = e.flattenOptions;
  var h = e.getLabeledValue;
  var g = e.filterOptions;
  var b = e.isValueDisabled;
  var y = e.findValueOption;
  e.warningProps;
  var O = e.fillOptionsWithMissingValue;
  var w = e.omitDOMProps;
  function C(e, C) {
    var I;
    var A = e.prefixCls;
    var j = void 0 === A ? t : A;
    var R = e.className;
    var k = e.id;
    var D = e.open;
    var M = e.defaultOpen;
    var L = e.options;
    var P = e.children;
    var B = e.mode;
    var F = e.value;
    var G = e.defaultValue;
    var U = e.labelInValue;
    var W = e.showSearch;
    var H = e.inputValue;
    var V = e.searchValue;
    var z = e.filterOption;
    var Y = e.filterSort;
    var K = e.optionFilterProp;
    var q = void 0 === K ? "value" : K;
    var X = e.autoClearSearchValue;
    var Q = void 0 === X || X;
    var Z = e.onSearch;
    var J = e.fieldNames;
    var $ = e.allowClear;
    var ee = e.clearIcon;
    var te = e.showArrow;
    var ne = e.inputIcon;
    var re = e.menuItemSelectedIcon;
    var oe = e.disabled;
    var ie = e.loading;
    var ae = e.defaultActiveFirstOption;
    var se = e.notFoundContent;
    var ce = void 0 === se ? "Not Found" : se;
    var le = e.optionLabelProp;
    var ue = e.backfill;
    e.tabIndex;
    var de = e.getInputElement;
    var pe = e.getRawInputElement;
    var fe = e.getPopupContainer;
    var he = e.placement;
    var me = e.listHeight;
    var ge = void 0 === me ? 200 : me;
    var _e = e.listItemHeight;
    var ve = void 0 === _e ? 20 : _e;
    var be = e.animation;
    var ye = e.transitionName;
    var Ee = e.virtual;
    var Oe = e.dropdownStyle;
    var we = e.dropdownClassName;
    var Ce = e.dropdownMatchSelectWidth;
    var Te = e.dropdownRender;
    var Se = e.dropdownAlign;
    var Ie = e.showAction;
    var Ae = void 0 === Ie ? [] : Ie;
    var je = e.direction;
    var Ne = e.tokenSeparators;
    var Re = e.tagRender;
    var ke = e.onPopupScroll;
    var xe = e.onDropdownVisibleChange;
    var De = e.onFocus;
    var Me = e.onBlur;
    var Le = e.onKeyUp;
    var Pe = e.onKeyDown;
    var Be = e.onMouseDown;
    var Fe = e.onChange;
    var Ge = e.onSelect;
    var Ue = e.onDeselect;
    var We = e.onClear;
    var He = e.internalProps;
    var Ve = void 0 === He ? {} : He;
    var ze = Object(c.a)(e, Qe);
    var Ye = Ve.mark === qe.a;
    var Je = w ? w(ze) : ze;
    Ze.forEach(function (e) {
      delete Je[e];
    });
    var $e = Object(l.useRef)(null);
    var et = Object(l.useRef)(null);
    var tt = Object(l.useRef)(null);
    var nt = Object(l.useRef)(null);
    var rt = Object(l.useMemo)(function () {
      return (Ne || []).some(function (e) {
        return ["\n", "\r\n"].includes(e);
      });
    }, [Ne]);
    var ot = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      var t = l.useState(!1);
      var n = Object(s.a)(t, 2);
      var r = n[0];
      var o = n[1];
      var i = l.useRef(null);
      var a = function () {
        window.clearTimeout(i.current);
      };
      l.useEffect(function () {
        return a;
      }, []);
      var c = function (t, n) {
        a();
        i.current = window.setTimeout(function () {
          o(t);
          if (n) {
            n();
          }
        }, e);
      };
      return [r, c, a];
    }();
    var it = Object(s.a)(ot, 3);
    var at = it[0];
    var st = it[1];
    var ct = it[2];
    var lt = Object(l.useState)();
    var ut = Object(s.a)(lt, 2);
    var dt = ut[0];
    var pt = ut[1];
    Object(l.useEffect)(function () {
      pt("rc_select_".concat(Object(T.a)()));
    }, []);
    var ft = k || dt;
    var ht = le;
    if (void 0 === ht) {
      ht = L ? "label" : "children";
    }
    var mt = "combobox" !== B && U;
    var gt = "tags" === B || "multiple" === B;
    var _t = void 0 !== W ? W : gt || "combobox" === B;
    var vt = Object(l.useState)(!1);
    var bt = Object(s.a)(vt, 2);
    var yt = bt[0];
    var Et = bt[1];
    Object(l.useEffect)(function () {
      Et(d());
    }, []);
    var Ot = Object(l.useRef)(null);
    l.useImperativeHandle(C, function () {
      var e;
      var t;
      var n;
      return {
        focus: null === (e = tt.current) || void 0 === e ? void 0 : e.focus,
        blur: null === (t = tt.current) || void 0 === t ? void 0 : t.blur,
        scrollTo: null === (n = nt.current) || void 0 === n ? void 0 : n.scrollTo
      };
    });
    var wt = v(G, {
      value: F
    });
    var Ct = Object(s.a)(wt, 2);
    var Tt = Ct[0];
    var St = Ct[1];
    var It = Object(l.useMemo)(function () {
      return Object(T.e)(Tt, {
        labelInValue: mt,
        combobox: "combobox" === B
      });
    }, [Tt, mt]);
    var At = Object(s.a)(It, 2);
    var jt = At[0];
    var Nt = At[1];
    var Rt = Object(l.useMemo)(function () {
      return new Set(jt);
    }, [jt]);
    var kt = Object(l.useState)(null);
    var xt = Object(s.a)(kt, 2);
    var Dt = xt[0];
    var Mt = xt[1];
    var Lt = Object(l.useState)("");
    var Pt = Object(s.a)(Lt, 2);
    var Bt = Pt[0];
    var Ft = Pt[1];
    var Gt = Bt;
    if ("combobox" === B && void 0 !== Tt) {
      Gt = Tt;
    } else {
      if (void 0 !== V) {
        Gt = V;
      } else {
        if (H) {
          Gt = H;
        }
      }
    }
    var Ut = Object(l.useMemo)(function () {
      var e = L;
      if (void 0 === e) {
        e = p(P);
      }
      if ("tags" === B && O) {
        e = O(e, Tt, ht, U);
      }
      return e || [];
    }, [L, P, B, Tt]);
    var Wt = Object(l.useMemo)(function () {
      return f(Ut, e);
    }, [Ut]);
    var Ht = function (e) {
      var t = l.useRef(null);
      var n = l.useMemo(function () {
        var t = new Map();
        e.forEach(function (e) {
          var n = e.value;
          t.set(n, e);
        });
        return t;
      }, [e]);
      t.current = n;
      return function (e) {
        return e.map(function (e) {
          return t.current.get(e);
        }).filter(Boolean);
      };
    }(Wt);
    var Vt = Object(l.useMemo)(function () {
      if (!Gt || !_t) {
        return Object(a.a)(Ut);
      }
      var e = g(Gt, Ut, {
        optionFilterProp: q,
        filterOption: "combobox" === B && void 0 === z ? function () {
          return !0;
        } : z
      });
      if ("tags" === B && e.every(function (e) {
        return e[q] !== Gt;
      })) {
        e.unshift({
          value: Gt,
          label: Gt,
          key: "__RC_SELECT_TAG_PLACEHOLDER__"
        });
      }
      return Y && Array.isArray(e) ? Object(a.a)(e).sort(Y) : e;
    }, [Ut, Gt, B, _t, Y]);
    var zt = Object(l.useMemo)(function () {
      return f(Vt, e);
    }, [Vt]);
    Object(l.useEffect)(function () {
      if (nt.current && nt.current.scrollTo) {
        nt.current.scrollTo(0);
      }
    }, [Gt]);
    var Yt = Object(l.useMemo)(function () {
      var e = jt.map(function (e) {
        var t = Ht([e]);
        var n = h(e, {
          options: t,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        });
        return Object(i.a)(Object(i.a)({}, n), {}, {
          disabled: b(e, t)
        });
      });
      return B || 1 !== e.length || null !== e[0].value || null !== e[0].label ? e : [];
    }, [Tt, Ut, B]);
    Yt = function (e) {
      var t = l.useRef(e);
      return l.useMemo(function () {
        var n = new Map();
        t.current.forEach(function (e) {
          var t = e.value;
          var r = e.label;
          if (t !== r) {
            n.set(t, r);
          }
        });
        var r = e.map(function (e) {
          var t = n.get(e.value);
          return e.isCacheable && t ? Object(i.a)(Object(i.a)({}, e), {}, {
            label: t
          }) : e;
        });
        t.current = r;
        return r;
      }, [e]);
    }(Yt);
    var Kt = function (t, n, r) {
      var o = Ht([t]);
      var i = y([t], o, {
        props: e
      })[0];
      if (!Ve.skipTriggerSelect) {
        var a = mt ? h(t, {
          options: o,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        }) : t;
        if (n && Ge) {
          Ge(a, i);
        } else {
          if (!n && Ue) {
            Ue(a, i);
          }
        }
      }
      if (Ye) {
        if (n && Ve.onRawSelect) {
          Ve.onRawSelect(t, i, r);
        } else {
          if (!n && Ve.onRawDeselect) {
            Ve.onRawDeselect(t, i, r);
          }
        }
      }
    };
    var qt = Object(l.useState)([]);
    var Xt = Object(s.a)(qt, 2);
    var Qt = Xt[0];
    var Zt = Xt[1];
    var Jt = function (t) {
      if (!Ye || !Ve.skipTriggerChange) {
        var n = Ht(t);
        var r = Object(T.f)(Array.from(t), {
          labelInValue: mt,
          options: n,
          getLabeledValue: h,
          prevValueMap: Nt,
          optionLabelProp: ht
        });
        var o = gt ? r : r[0];
        if (Fe && (0 !== jt.length || 0 !== r.length)) {
          var a = y(t, n, {
            prevValueOptions: Qt,
            props: e
          });
          Zt(a.map(function (e, n) {
            var r = Object(i.a)({}, e);
            Object.defineProperty(r, "_INTERNAL_OPTION_VALUE_", {
              get: function () {
                return t[n];
              }
            });
            return r;
          }));
          Fe(o, gt ? a : a[0]);
        }
        St(o);
      }
    };
    var $t = function (e, t) {
      var n;
      var r = t.selected;
      var o = t.source;
      if (!oe) {
        if (gt) {
          n = new Set(jt);
          if (r) {
            n.add(e);
          } else {
            n.delete(e);
          }
        } else {
          (n = new Set()).add(e);
        }
        if (gt || !gt && Array.from(jt)[0] !== e) {
          Jt(Array.from(n));
        }
        Kt(e, !gt || r, o);
        if ("combobox" === B) {
          Ft(String(e));
          Mt("");
        } else {
          if (!(gt && !Q)) {
            Ft("");
            Mt("");
          }
        }
      }
    };
    var en = "combobox" === B && "function" === typeof de && de() || null;
    var tn = "function" === typeof pe && pe();
    var nn = v(void 0, {
      defaultValue: M,
      value: D
    });
    var rn = Object(s.a)(nn, 2);
    var on = rn[0];
    var an = rn[1];
    var sn = on;
    var cn = !ce && !Vt.length;
    if (oe || cn && sn && "combobox" === B) {
      sn = !1;
    }
    var ln;
    var un = !cn && sn;
    var dn = function (e) {
      var t = void 0 !== e ? e : !sn;
      if (!(on === t || oe)) {
        an(t);
        if (xe) {
          xe(t);
        }
      }
    };
    if (tn) {
      ln = function (e) {
        dn(e);
      };
    }
    (function (e, t, n) {
      var r = l.useRef(null);
      r.current = {
        open: t,
        triggerOpen: n
      };
      l.useEffect(function () {
        function t(t) {
          var n = t.target;
          if (n.shadowRoot && t.composed) {
            n = t.composedPath()[0] || n;
          }
          if (r.current.open && e().filter(function (e) {
            return e;
          }).every(function (e) {
            return !e.contains(n) && e !== n;
          })) {
            r.current.triggerOpen(!1);
          }
        }
        window.addEventListener("mousedown", t);
        return function () {
          return window.removeEventListener("mousedown", t);
        };
      }, []);
    })(function () {
      var e;
      return [$e.current, null === (e = et.current) || void 0 === e ? void 0 : e.getPopupElement()];
    }, un, dn);
    var pn = function (e, t, n) {
      var r = !0;
      var o = e;
      Mt(null);
      var i = n ? null : Object(Xe.g)(e, Ne);
      var s = i;
      if ("combobox" === B) {
        if (t) {
          Jt([o]);
        }
      } else if (i) {
        o = "";
        if ("tags" !== B) {
          s = i.map(function (e) {
            var t = Wt.find(function (t) {
              return t.data[ht] === e;
            });
            return t ? t.data.value : null;
          }).filter(function (e) {
            return null !== e;
          });
        }
        var c = Array.from(new Set([].concat(Object(a.a)(jt), Object(a.a)(s))));
        Jt(c);
        c.forEach(function (e) {
          Kt(e, !0, "input");
        });
        dn(!1);
        r = !1;
      }
      Ft(o);
      if (Z && Gt !== o) {
        Z(o);
      }
      return r;
    };
    Object(l.useEffect)(function () {
      if (on && oe) {
        an(!1);
      }
      if (oe) {
        st(!1);
      }
    }, [oe]);
    Object(l.useEffect)(function () {
      if (!(sn || gt || "combobox" === B)) {
        pn("", !1, !1);
      }
    }, [sn]);
    var fn = N();
    var hn = Object(s.a)(fn, 2);
    var mn = hn[0];
    var gn = hn[1];
    var _n = Object(l.useRef)(!1);
    var vn = [];
    Object(l.useEffect)(function () {
      return function () {
        vn.forEach(function (e) {
          return clearTimeout(e);
        });
        vn.splice(0, vn.length);
      };
    }, []);
    var bn = Object(l.useState)(0);
    var yn = Object(s.a)(bn, 2);
    var En = yn[0];
    var On = yn[1];
    var wn = void 0 !== ae ? ae : "combobox" !== B;
    var Cn = Object(l.useState)(null);
    var Tn = Object(s.a)(Cn, 2);
    var Sn = Tn[0];
    var In = Tn[1];
    var An = Object(l.useState)({});
    var jn = Object(s.a)(An, 2)[1];
    S(function () {
      if (un) {
        var e;
        var t = Math.ceil(null === (e = $e.current) || void 0 === e ? void 0 : e.offsetWidth);
        if (!(Sn === t || Number.isNaN(t))) {
          In(t);
        }
      }
    }, [un]);
    var Nn;
    var Rn = l.createElement(n, {
      ref: nt,
      prefixCls: j,
      id: ft,
      open: sn,
      childrenAsData: !L,
      options: Vt,
      fieldNames: J,
      flattenOptions: zt,
      multiple: gt,
      values: Rt,
      height: ge,
      itemHeight: ve,
      onSelect: function (e, t) {
        $t(e, Object(i.a)(Object(i.a)({}, t), {}, {
          source: "option"
        }));
      },
      onToggleOpen: dn,
      onActiveValue: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        var r = n.source;
        var o = void 0 === r ? "keyboard" : r;
        On(t);
        if (ue && "combobox" === B && null !== e && "keyboard" === o) {
          Mt(String(e));
        }
      },
      defaultActiveFirstOption: wn,
      notFoundContent: ce,
      onScroll: ke,
      searchValue: Gt,
      menuItemSelectedIcon: re,
      virtual: !1 !== Ee && !1 !== Ce,
      onMouseEnter: function () {
        jn({});
      },
      direction: je
    });
    if (!oe && $ && (jt.length || Gt)) {
      Nn = l.createElement(E.a, {
        className: "".concat(j, "-clear"),
        onMouseDown: function () {
          if (Ye && Ve.onClear) {
            Ve.onClear();
          }
          if (We) {
            We();
          }
          Jt([]);
          pn("", !1, !1);
        },
        customizeIcon: ee
      }, "\xd7");
    }
    var kn;
    var xn = void 0 !== te ? te : ie || !gt && "combobox" !== B;
    if (xn) {
      kn = l.createElement(E.a, {
        className: _()("".concat(j, "-arrow"), Object(o.a)({}, "".concat(j, "-arrow-loading"), ie)),
        customizeIcon: ne,
        customizeIconProps: {
          loading: ie,
          searchValue: Gt,
          open: sn,
          focused: at,
          showSearch: _t
        }
      });
    }
    var Dn = _()(j, R, (I = {}, Object(o.a)(I, "".concat(j, "-focused"), at), Object(o.a)(I, "".concat(j, "-multiple"), gt), Object(o.a)(I, "".concat(j, "-single"), !gt), Object(o.a)(I, "".concat(j, "-allow-clear"), $), Object(o.a)(I, "".concat(j, "-show-arrow"), xn), Object(o.a)(I, "".concat(j, "-disabled"), oe), Object(o.a)(I, "".concat(j, "-loading"), ie), Object(o.a)(I, "".concat(j, "-open"), sn), Object(o.a)(I, "".concat(j, "-customize-input"), en), Object(o.a)(I, "".concat(j, "-show-search"), _t), I));
    var Mn = l.createElement(Ke, {
      ref: et,
      disabled: oe,
      prefixCls: j,
      visible: un,
      popupElement: Rn,
      containerWidth: Sn,
      animation: be,
      transitionName: ye,
      dropdownStyle: Oe,
      dropdownClassName: we,
      direction: je,
      dropdownMatchSelectWidth: Ce,
      dropdownRender: Te,
      dropdownAlign: Se,
      placement: he,
      getPopupContainer: fe,
      empty: !Ut.length,
      getTriggerDOMNode: function () {
        return Ot.current;
      },
      onPopupVisibleChange: ln
    }, tn ? l.cloneElement(tn, {
      ref: m(Ot, tn.props.ref)
    }) : l.createElement(x, Object(r.a)({}, e, {
      domRef: Ot,
      prefixCls: j,
      inputElement: en,
      ref: tt,
      id: ft,
      showSearch: _t,
      mode: B,
      accessibilityIndex: En,
      multiple: gt,
      tagRender: Re,
      values: Yt,
      open: sn,
      onToggleOpen: dn,
      searchValue: Gt,
      activeValue: Dt,
      onSearch: pn,
      onSearchSubmit: function (e) {
        if (e && e.trim()) {
          var t = Array.from(new Set([].concat(Object(a.a)(jt), [e])));
          Jt(t);
          t.forEach(function (e) {
            Kt(e, !0, "input");
          });
          Ft("");
        }
      },
      onSelect: function (e, t) {
        $t(e, Object(i.a)(Object(i.a)({}, t), {}, {
          source: "selection"
        }));
      },
      tokenWithEnter: rt
    })));
    return tn ? Mn : l.createElement("div", Object(r.a)({
      className: Dn
    }, Je, {
      ref: $e,
      onMouseDown: function (e) {
        var t;
        var n = e.target;
        var r = null === (t = et.current) || void 0 === t ? void 0 : t.getPopupElement();
        if (r && r.contains(n)) {
          var o = setTimeout(function () {
            var e;
            var t = vn.indexOf(o);
            if (!(-1 !== t && vn.splice(t, 1), ct(), yt || r.contains(document.activeElement))) {
              if (!(null === (e = tt.current) || void 0 === e)) {
                e.focus();
              }
            }
          });
          vn.push(o);
        }
        if (Be) {
          for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
            a[s - 1] = arguments[s];
          }
          Be.apply(void 0, [e].concat(a));
        }
      },
      onKeyDown: function (e) {
        var t;
        var n = mn();
        var r = e.which;
        if (r === u.a.ENTER && ("combobox" !== B && e.preventDefault(), sn || dn(!0)), gn(!!Gt), r === u.a.BACKSPACE && !n && gt && !Gt && jt.length) {
          var o = Object(T.c)(Yt, jt);
          if (null !== o.removedValue) {
            Jt(o.values);
            Kt(o.removedValue, !1, "input");
          }
        }
        for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
          a[s - 1] = arguments[s];
        }
        if (sn && nt.current) {
          (t = nt.current).onKeyDown.apply(t, [e].concat(a));
        }
        if (Pe) {
          Pe.apply(void 0, [e].concat(a));
        }
      },
      onKeyUp: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) {
          n[r - 1] = arguments[r];
        }
        var o;
        if (sn && nt.current) {
          (o = nt.current).onKeyUp.apply(o, [e].concat(n));
        }
        if (Le) {
          Le.apply(void 0, [e].concat(n));
        }
      },
      onFocus: function () {
        st(!0);
        if (!oe) {
          if (De && !_n.current) {
            De.apply(void 0, arguments);
          }
          if (Ae.includes("focus")) {
            dn(!0);
          }
        }
        _n.current = !0;
      },
      onBlur: function () {
        st(!1, function () {
          _n.current = !1;
          dn(!1);
        });
        if (!oe) {
          if (Gt) {
            if ("tags" === B) {
              pn("", !1, !1);
              Jt(Array.from(new Set([].concat(Object(a.a)(jt), [Gt]))));
            } else {
              if ("multiple" === B) {
                Ft("");
              }
            }
          }
          if (Me) {
            Me.apply(void 0, arguments);
          }
        }
      }
    }), at && !sn && l.createElement("span", {
      style: {
        width: 0,
        height: 0,
        display: "flex",
        overflow: "hidden",
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(jt.join(", "))), Mn, kn, Nn);
  }
  return l.forwardRef(C);
}
export default Je;