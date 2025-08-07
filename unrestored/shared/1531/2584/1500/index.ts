"use strict";

export { Je as a };
import r = require("../19");
import o = require("../29");
import i = require("../20");
import a = require("../80/index");
import s = require("../33/index");
import c = require("../54");
import l = require("react");
import u = require("../330");
var d = function () {
  if ("undefined" === typeof navigator || "undefined" === typeof window) {
    return false;
  }
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null === e || undefined === e ? undefined : e.substr(0, 4)));
};
import p = require("../108");
import f = require("../242/index");
function h(e, t) {
  if ("function" === typeof e) {
    e(t);
  } else {
    if ("object" === p.a(e) && e && "current" in e) {
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
import g = require("../8");
var _ = function __importDefault(module) {
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
}(g);
function v(e, t) {
  var n = t || {};
  var r = n.defaultValue;
  var o = n.value;
  var i = n.onChange;
  var a = n.postState;
  var c = l.useState(function () {
    return undefined !== o ? o : undefined !== r ? "function" === typeof r ? r() : r : "function" === typeof e ? e() : e;
  });
  var u = s.a(c, 2);
  var d = u[0];
  var p = u[1];
  var f = undefined !== o ? o : d;
  if (a) {
    f = a(f);
  }
  var h = l.useRef(true);
  l.useEffect(function () {
    if (h.current) {
      h.current = false;
    } else {
      if (undefined === o) {
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
import b = require("../783");
import y = require("./557");
import E = require("../733");
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
  return I = l.cloneElement(I, i.a(i.a({
    id: a,
    ref: m(t, j),
    disabled: c,
    tabIndex: u,
    autoComplete: p || "off",
    type: "search",
    autoFocus: d,
    className: _()("".concat(o, "-selection-search-input"), null === (n = I) || undefined === n || null === (r = n.props) || undefined === r ? undefined : r.className),
    style: i.a(i.a({}, L), {}, {
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
import T = require("../487");
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
  var j = undefined === A ? function (e) {
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
  var G = l.useState(0);
  var U = s.a(G, 2);
  var W = U[0];
  var H = U[1];
  var V = l.useState(false);
  var z = s.a(V, 2);
  var Y = z[0];
  var K = z[1];
  var q = "".concat(n, "-selection");
  var X = i || "tags" === p ? a : "";
  var Q = "tags" === p || f && (i || Y);
  function Z(e, t, n, r, i) {
    return l.createElement("span", {
      className: _()("".concat(q, "-item"), o.a({}, "".concat(q, "-item-disabled"), n)),
      title: "string" === typeof e || "number" === typeof e ? e.toString() : undefined
    }, l.createElement("span", {
      className: "".concat(q, "-item-content")
    }, t), r && l.createElement(E.a, {
      className: "".concat(q, "-item-remove"),
      onMouseDown: I,
      onClick: i,
      customizeIcon: O
    }, "×"));
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
      K(true);
    },
    onBlur: function () {
      K(false);
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
    attrs: b.a(e, true)
  }), l.createElement("span", {
    ref: F,
    className: "".concat(q, "-search-mirror"),
    "aria-hidden": true
  }, X, " "));
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
          selected: false
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
      return Z(t, t, false);
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
  var A = l.useState(false);
  var j = s.a(A, 2);
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
      R(false);
    }
  }, [k, v]);
  var L = !("combobox" !== d && !p) && !!M;
  var P = !D || "string" !== typeof D.label && "number" !== typeof D.label ? undefined : D.label.toString();
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
      R(true);
      w(e);
    },
    onPaste: T,
    onCompositionStart: S,
    onCompositionEnd: I,
    tabIndex: m,
    attrs: b.a(e, true),
    maxLength: k ? y : undefined
  })), !k && D && !L && l.createElement("span", {
    className: "".concat(n, "-selection-item"),
    title: P
  }, D.label), !D && !L && l.createElement("span", {
    className: "".concat(n, "-selection-placeholder")
  }, h));
};
function N() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 250;
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
  var n = l.useRef(null);
  var o = l.useRef(false);
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
  var y = s.a(b, 2);
  var E = y[0];
  var O = y[1];
  var w = l.useRef(null);
  var C = function (e) {
    if (false !== h(e, true, o.current)) {
      g(true);
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
        g(true);
      }
    },
    onInputMouseDown: function () {
      O(true);
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
      o.current = true;
    },
    onInputCompositionEnd: function (e) {
      o.current = false;
      if ("combobox" !== d) {
        C(e.target.value);
      }
    }
  };
  var S = a ? l.createElement(A, r.a({}, e, T)) : l.createElement(j, r.a({}, e, T));
  return l.createElement("div", {
    ref: v,
    className: "".concat(i, "-selector"),
    onClick: function (e) {
      if (e.target !== n.current) {
        if (undefined !== document.body.style.msTouchAction) {
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
          h("", true, false);
        }
        g();
      }
    }
  }, S);
};
var k = l.forwardRef(R);
k.displayName = "Selector";
var x = k;
import D = require("../95");
import M = require("../96");
import L = require("../103");
import P = require("../120");
import B = require("../140");
import F = require("../75/index");
var G = function __importDefault(module) {
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
}(F);
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
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1;
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
var Z = l.forwardRef(function (e, t) {
  var n = e.didUpdate;
  var r = e.getContainer;
  var o = e.children;
  var i = l.useRef();
  l.useImperativeHandle(t, function () {
    return {};
  });
  var a = l.useRef(false);
  if (!a.current && Q()) {
    i.current = r();
    a.current = true;
  }
  l.useEffect(function () {
    if (!(null === n || undefined === n)) {
      n(e);
    }
  });
  l.useEffect(function () {
    return function () {
      var e;
      var t;
      if (!(null === (e = i.current) || undefined === e || null === (t = e.parentNode) || undefined === t)) {
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
  return e ? "object" === p.a(e) ? e[t.replace(/-\w/g, function (e) {
    return e[1].toUpperCase();
  })] : "".concat(e, "-").concat(t) : null;
}
function de(e) {
  var t = l.useRef(false);
  var n = l.useState(e);
  var r = s.a(n, 2);
  var o = r[0];
  var i = r[1];
  l.useEffect(function () {
    return function () {
      t.current = true;
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
  var r = s.a(n, 2);
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
      var o = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 2;
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
  var c = s.a(a, 2);
  var u = c[0];
  var d = c[1];
  pe(function () {
    if ("none" !== o && "end" !== o) {
      var e = fe.indexOf(o);
      var n = fe[e + 1];
      var r = t(o);
      if (false === r) {
        i(n);
      } else {
        u(function (e) {
          function t() {
            if (!e.isCanceled()) {
              i(n);
            }
          }
          if (true === r) {
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
  var c = undefined === a || a;
  var u = r.motionAppear;
  var d = undefined === u || u;
  var p = r.motionLeave;
  var f = undefined === p || p;
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
  var N = s.a(j, 2);
  var R = N[0];
  var k = N[1];
  var x = de("none");
  var D = s.a(x, 2);
  var M = D[0];
  var L = D[1];
  var P = de(null);
  var B = s.a(P, 2);
  var F = B[0];
  var G = B[1];
  var U = l.useRef(false);
  var W = l.useRef(null);
  var H = l.useRef(false);
  var V = l.useRef(null);
  function z() {
    return n() || V.current;
  }
  var Y = l.useRef(false);
  function K(e) {
    var t;
    var n = z();
    if (!(e && !e.deadline && e.target !== n)) {
      if ("appear" === M && Y.current) {
        t = null === T || undefined === T ? undefined : T(n, e);
      } else {
        if ("enter" === M && Y.current) {
          t = null === S || undefined === S ? undefined : S(n, e);
        } else {
          if ("leave" === M && Y.current) {
            t = null === I || undefined === I ? undefined : I(n, e);
          }
        }
      }
      if (!(false === t || H.current)) {
        L("none");
        G(null);
      }
    }
  }
  var q = function (e) {
    var t = l.useRef();
    var n = l.useRef(e);
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
  var X = s.a(q, 1)[0];
  var Q = l.useMemo(function () {
    var e;
    var t;
    var n;
    switch (M) {
      case "appear":
        e = {};
        o.a(e, "prepare", g);
        o.a(e, "start", b);
        o.a(e, "active", O);
        return e;
      case "enter":
        t = {};
        o.a(t, "prepare", _);
        o.a(t, "start", y);
        o.a(t, "active", w);
        return t;
      case "leave":
        n = {};
        o.a(n, "prepare", v);
        o.a(n, "start", E);
        o.a(n, "active", C);
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
      G((null === (n = Q[ee]) || undefined === n ? undefined : n.call(Q, z(), null)) || null);
    }
    if ("active" === ee) {
      X(z());
      if (h > 0) {
        clearTimeout(W.current);
        W.current = setTimeout(function () {
          K({
            deadline: true
          });
        }, h);
      }
    }
    return true;
  });
  var J = s.a(Z, 2);
  var $ = J[0];
  var ee = J[1];
  var te = he(ee);
  Y.current = te;
  pe(function () {
    k(t);
    var n;
    var r = U.current;
    U.current = true;
    if (e) {
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
  l.useEffect(function () {
    if ("appear" === M && !d || "enter" === M && !c || "leave" === M && !f) {
      L("none");
    }
  }, [d, c, f]);
  l.useEffect(function () {
    return function () {
      clearTimeout(W.current);
      H.current = true;
    };
  }, []);
  l.useEffect(function () {
    if (undefined !== R && "none" === M) {
      if (!(null === A || undefined === A)) {
        A(R);
      }
    }
  }, [R, M]);
  var ne = F;
  if (Q.prepare && "start" === ee) {
    ne = i.a({
      transition: "none"
    }, ne);
  }
  return [M, ee, ne, null !== R && undefined !== R ? R : t];
}
var _e = function (e) {
  P.a(n, e);
  var t = B.a(n);
  function n() {
    D.a(this, n);
    return t.apply(this, arguments);
  }
  M.a(n, [{
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
  if ("object" === p.a(e)) {
    t = e.transitionSupport;
  }
  var r = l.forwardRef(function (e, t) {
    var r = e.visible;
    var a = undefined === r || r;
    var c = e.removeOnLeave;
    var u = undefined === c || c;
    var d = e.forceRender;
    var p = e.children;
    var f = e.motionName;
    var m = e.leavedClassName;
    var g = e.eventProps;
    var v = n(e);
    var b = l.useRef();
    var y = l.useRef();
    var E = ge(v, a, function () {
      try {
        return q(b.current || y.current);
      } catch (e) {
        return null;
      }
    }, e);
    var O = s.a(E, 4);
    var w = O[0];
    var C = O[1];
    var T = O[2];
    var S = O[3];
    var I = l.useRef(S);
    if (S) {
      I.current = true;
    }
    var A = l.useRef(t);
    A.current = t;
    var j;
    var N = l.useCallback(function (e) {
      b.current = e;
      h(A.current, e);
    }, []);
    var R = i.a(i.a({}, g), {}, {
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
        j = p(i.a(i.a({}, R), {}, {
          className: _()(ue(f, w), (k = {}, o.a(k, ue(f, "".concat(w, "-").concat(x)), x), o.a(k, f, "string" === typeof f), k)),
          style: T
        }), N);
      } else {
        j = S ? p(i.a({}, R), N) : !u && I.current ? p(i.a(i.a({}, R), {}, {
          className: m
        }), N) : d ? p(i.a(i.a({}, R), {}, {
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
  t = e && "object" === p.a(e) && "key" in e ? e : {
    key: e
  };
  return i.a(i.a({}, t), {}, {
    key: String(t.key)
  });
}
function ye() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  return e.map(be);
}
function Ee() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : [];
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : [];
  var n = [];
  var r = 0;
  var o = t.length;
  var a = ye(e);
  var s = ye(t);
  a.forEach(function (e) {
    for (var t = false, a = r; a < o; a += 1) {
      var c = s[a];
      if (c.key === e.key) {
        if (r < a) {
          n = n.concat(s.slice(r, a).map(function (e) {
            return i.a(i.a({}, e), {}, {
              status: "add"
            });
          }));
          r = a;
        }
        n.push(i.a(i.a({}, c), {}, {
          status: "keep"
        }));
        r += 1;
        t = true;
        break;
      }
    }
    if (!t) {
      n.push(i.a(i.a({}, e), {}, {
        status: "remove"
      }));
    }
  });
  if (r < o) {
    n = n.concat(s.slice(r).map(function (e) {
      return i.a(i.a({}, e), {}, {
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
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : ve;
  var n = function (e) {
    P.a(o, e);
    var n = B.a(o);
    function o() {
      var e;
      D.a(this, o);
      (e = n.apply(this, arguments)).state = {
        keyEntities: []
      };
      e.removeKey = function (t) {
        e.setState(function (e) {
          return {
            keyEntities: e.keyEntities.map(function (e) {
              return e.key !== t ? e : i.a(i.a({}, e), {}, {
                status: "removed"
              });
            })
          };
        });
      };
      return e;
    }
    M.a(o, [{
      key: "render",
      value: function () {
        var e = this;
        var n = this.state.keyEntities;
        var o = this.props;
        var i = o.component;
        var a = o.children;
        var s = o.onVisibleChanged;
        var u = c.a(o, ["component", "children", "onVisibleChanged"]);
        var d = i || l.Fragment;
        var p = {};
        Oe.forEach(function (e) {
          p[e] = u[e];
          delete u[e];
        });
        delete u.keys;
        return l.createElement(d, u, n.map(function (n) {
          var o = n.status;
          var i = c.a(n, ["status"]);
          var u = "add" === o || "keep" === o;
          return l.createElement(t, r.a({}, p, {
            key: i.key,
            visible: u,
            eventProps: i,
            onVisibleChanged: function (t) {
              if (!(null === s || undefined === s)) {
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
    d = i.a({
      motionAppear: true
    }, Ce({
      motion: s,
      prefixCls: t,
      transitionName: u,
      animation: c
    }));
  }
  return l.createElement(we, r.a({}, d, {
    visible: n,
    removeOnLeave: true
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
import Se = require("./555/index");
import Ie = require("../110");
var Ae = function __importDefault(module) {
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
}(Ie);
import je = require("../171");
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
  var T = l.useRef();
  var S = l.useRef();
  var I = l.useState();
  var A = s.a(I, 2);
  var j = A[0];
  var N = A[1];
  var R = function (e) {
    var t = l.useState({
      width: 0,
      height: 0
    });
    var n = s.a(t, 2);
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
  var k = s.a(R, 2);
  var x = k[0];
  var D = k[1];
  var M = function (e, t) {
    var n = l.useState(null);
    var r = s.a(n, 2);
    var o = r[0];
    var i = r[1];
    var a = l.useRef();
    var c = l.useRef(false);
    function u(e) {
      if (!c.current) {
        i(e);
      }
    }
    function d() {
      Y.cancel(a.current);
    }
    l.useEffect(function () {
      u("measure");
    }, [e]);
    l.useEffect(function () {
      switch (o) {
        case "measure":
          t();
      }
      if (o) {
        a.current = Y(je.a(Ae.a.mark(function e() {
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
    l.useEffect(function () {
      return function () {
        c.current = true;
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
        if (!(null === e || undefined === e)) {
          e();
        }
      });
    }];
  }(n, function () {
    if (p) {
      D(v());
    }
  });
  var L = s.a(M, 2);
  var P = L[0];
  var B = L[1];
  var F = l.useRef();
  function G() {
    var e;
    if (!(null === (e = T.current) || undefined === e)) {
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
          if (!(null === (e = F.current) || undefined === e)) {
            e.call(F);
          }
        });
      }
      if (!(null === y || undefined === y)) {
        y(e, t);
      }
    }
  }
  var W = i.a({}, Ce(e));
  function H() {
    return new Promise(function (e) {
      F.current = e;
    });
  }
  ["onAppearEnd", "onEnterEnd", "onLeaveEnd"].forEach(function (e) {
    var t = W[e];
    W[e] = function (e, n) {
      B();
      return null === t || undefined === t ? undefined : t(e, n);
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
  var V = i.a(i.a({}, x), {}, {
    zIndex: d,
    opacity: "motion" !== P && "stable" !== P && n ? 0 : undefined,
    pointerEvents: "stable" === P ? undefined : "none"
  }, c);
  var z = true;
  if (!(!(null === m || undefined === m ? undefined : m.points) || "align" !== P && "stable" !== P)) {
    z = false;
  }
  var K = u;
  if (l.Children.count(u) > 1) {
    K = l.createElement("div", {
      className: "".concat(o, "-content")
    }, u);
  }
  return l.createElement(we, r.a({
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
      monitorWindowResize: true,
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
      style: i.a(i.a({}, r), V)
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
  var u = (c = undefined === c ? {} : c).popupClassName;
  var d = c.popupStyle;
  var p = c.popupMotion;
  var f = undefined === p ? {} : p;
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
  var g = i.a({
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
  return l.createElement(we, r.a({
    visible: o,
    ref: m,
    removeOnLeave: true
  }, f), function (e, t) {
    var r = e.className;
    var o = e.style;
    var a = _()(n, u, r);
    return l.createElement("div", {
      ref: t,
      className: a,
      style: i.a(i.a({}, o), g)
    }, v);
  });
});
xe.displayName = "MobilePopupInner";
var De = xe;
var Me = ["visible", "mobile"];
var Le = l.forwardRef(function (e, t) {
  var n = e.visible;
  var o = e.mobile;
  var a = c.a(e, Me);
  var u = l.useState(n);
  var p = s.a(u, 2);
  var f = p[0];
  var h = p[1];
  var m = l.useState(false);
  var g = s.a(m, 2);
  var _ = g[0];
  var v = g[1];
  var b = i.a(i.a({}, a), {}, {
    visible: f
  });
  l.useEffect(function () {
    h(n);
    if (n && o) {
      v(d());
    }
  }, [n, o]);
  var y = _ ? l.createElement(De, r.a({}, b, {
    mobile: o,
    ref: t
  })) : l.createElement(ke, r.a({}, b, {
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
    P.a(o, t);
    var n = B.a(o);
    function o(e) {
      var t;
      var i;
      D.a(this, o);
      (t = n.call(this, e)).popupRef = l.createRef();
      t.triggerRef = l.createRef();
      t.attachId = undefined;
      t.clickOutsideHandler = undefined;
      t.touchOutsideHandler = undefined;
      t.contextMenuOutsideHandler1 = undefined;
      t.contextMenuOutsideHandler2 = undefined;
      t.mouseDownTimeout = undefined;
      t.focusTime = undefined;
      t.preClickTime = undefined;
      t.preTouchTime = undefined;
      t.delayTimer = undefined;
      t.hasPopupMouseDown = undefined;
      t.onMouseEnter = function (e) {
        var n = t.props.mouseEnterDelay;
        t.fireEvents("onMouseEnter", e);
        t.delaySetPopupVisible(true, n, n ? null : e);
      };
      t.onMouseMove = function (e) {
        t.fireEvents("onMouseMove", e);
        t.setPoint(e);
      };
      t.onMouseLeave = function (e) {
        t.fireEvents("onMouseLeave", e);
        t.delaySetPopupVisible(false, t.props.mouseLeaveDelay);
      };
      t.onPopupMouseEnter = function () {
        t.clearDelayTimer();
      };
      t.onPopupMouseLeave = function (e) {
        var n;
        if (!(e.relatedTarget && !e.relatedTarget.setTimeout && K(null === (n = t.popupRef.current) || undefined === n ? undefined : n.getElement(), e.relatedTarget))) {
          t.delaySetPopupVisible(false, t.props.mouseLeaveDelay);
        }
      };
      t.onFocus = function (e) {
        t.fireEvents("onFocus", e);
        t.clearDelayTimer();
        if (t.isFocusToShow()) {
          t.focusTime = Date.now();
          t.delaySetPopupVisible(true, t.props.focusDelay);
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
          t.delaySetPopupVisible(false, t.props.blurDelay);
        }
      };
      t.onContextMenu = function (e) {
        e.preventDefault();
        t.fireEvents("onContextMenu", e);
        t.setPopupVisible(true, e);
      };
      t.onContextMenuClose = function () {
        if (t.isContextMenuToShow()) {
          t.close();
        }
      };
      t.onClick = function (e) {
        t.fireEvents("onClick", e);
        if (t.focusTime) {
          var n;
          if (t.preClickTime && t.preTouchTime) {
            n = Math.min(t.preClickTime, t.preTouchTime);
          } else {
            if (t.preClickTime) {
              n = t.preClickTime;
            } else {
              if (t.preTouchTime) {
                n = t.preTouchTime;
              }
            }
          }
          if (Math.abs(n - t.focusTime) < 20) {
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
        t.hasPopupMouseDown = true;
        clearTimeout(t.mouseDownTimeout);
        t.mouseDownTimeout = window.setTimeout(function () {
          t.hasPopupMouseDown = false;
        }, 0);
        if (t.context) {
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
        return G.a.findDOMNode(L.a(t));
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
        return l.createElement(Pe, r.a({
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
    M.a(o, [{
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
        return (null === (e = this.popupRef.current) || undefined === e ? undefined : e.getElement()) || null;
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
          return i.a(i.a({}, r), n);
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
        this.clearDelayTimer();
        if (o) {
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
          if (!(null === (e = this.popupRef.current) || undefined === e)) {
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
        this.setPopupVisible(false);
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
        var h = i.a({}, d);
        if (function (e) {
          var t;
          var n;
          var r = f.isMemo(e) ? e.type.type : e.type;
          return !("function" === typeof r && !(null === (t = r.prototype) || undefined === t ? undefined : t.render)) && !("function" === typeof e && !(null === (n = e.prototype) || undefined === n ? undefined : n.render));
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
        if (undefined !== n && t.popupVisible !== n) {
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
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
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
  var v = undefined === g ? "ltr" : g;
  var b = e.placement;
  var y = e.dropdownMatchSelectWidth;
  var E = undefined === y || y;
  var O = e.dropdownRender;
  var w = e.dropdownAlign;
  var C = e.getPopupContainer;
  var T = e.empty;
  var S = e.getTriggerDOMNode;
  var I = e.onPopupVisibleChange;
  var A = c.a(e, Ve);
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
  var D = i.a({
    minWidth: d
  }, h);
  if ("number" === typeof E) {
    D.width = E;
  } else {
    if (E) {
      D.width = d;
    }
  }
  return l.createElement(He, r.a({}, A, {
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
    popupClassName: _()(m, o.a({}, "".concat(j, "-empty"), T)),
    popupStyle: D,
    getTriggerDOMNode: S,
    onPopupVisibleChange: I
  }), s);
};
var Ye = l.forwardRef(ze);
Ye.displayName = "SelectTrigger";
var Ke = Ye;
import qe = require("./1476");
import Xe = require("../519/index");
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
    var j = undefined === A ? t : A;
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
    var q = undefined === K ? "value" : K;
    var X = e.autoClearSearchValue;
    var Q = undefined === X || X;
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
    var ce = undefined === se ? "Not Found" : se;
    var le = e.optionLabelProp;
    var ue = e.backfill;
    e.tabIndex;
    var de = e.getInputElement;
    var pe = e.getRawInputElement;
    var fe = e.getPopupContainer;
    var he = e.placement;
    var me = e.listHeight;
    var ge = undefined === me ? 200 : me;
    var _e = e.listItemHeight;
    var ve = undefined === _e ? 20 : _e;
    var be = e.animation;
    var ye = e.transitionName;
    var Ee = e.virtual;
    var Oe = e.dropdownStyle;
    var we = e.dropdownClassName;
    var Ce = e.dropdownMatchSelectWidth;
    var Te = e.dropdownRender;
    var Se = e.dropdownAlign;
    var Ie = e.showAction;
    var Ae = undefined === Ie ? [] : Ie;
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
    var Ve = undefined === He ? {} : He;
    var ze = c.a(e, Qe);
    var Ye = Ve.mark === qe.a;
    var Je = w ? w(ze) : ze;
    Ze.forEach(function (e) {
      delete Je[e];
    });
    var $e = l.useRef(null);
    var et = l.useRef(null);
    var tt = l.useRef(null);
    var nt = l.useRef(null);
    var rt = l.useMemo(function () {
      return (Ne || []).some(function (e) {
        return ["\n", "\r\n"].includes(e);
      });
    }, [Ne]);
    var ot = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 10;
      var t = l.useState(false);
      var n = s.a(t, 2);
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
    var it = s.a(ot, 3);
    var at = it[0];
    var st = it[1];
    var ct = it[2];
    var lt = l.useState();
    var ut = s.a(lt, 2);
    var dt = ut[0];
    var pt = ut[1];
    l.useEffect(function () {
      pt("rc_select_".concat(T.a()));
    }, []);
    var ft = k || dt;
    var ht = le;
    if (undefined === ht) {
      ht = L ? "label" : "children";
    }
    var mt = "combobox" !== B && U;
    var gt = "tags" === B || "multiple" === B;
    var _t = undefined !== W ? W : gt || "combobox" === B;
    var vt = l.useState(false);
    var bt = s.a(vt, 2);
    var yt = bt[0];
    var Et = bt[1];
    l.useEffect(function () {
      Et(d());
    }, []);
    var Ot = l.useRef(null);
    l.useImperativeHandle(C, function () {
      var e;
      var t;
      var n;
      return {
        focus: null === (e = tt.current) || undefined === e ? undefined : e.focus,
        blur: null === (t = tt.current) || undefined === t ? undefined : t.blur,
        scrollTo: null === (n = nt.current) || undefined === n ? undefined : n.scrollTo
      };
    });
    var wt = v(G, {
      value: F
    });
    var Ct = s.a(wt, 2);
    var Tt = Ct[0];
    var St = Ct[1];
    var It = l.useMemo(function () {
      return T.e(Tt, {
        labelInValue: mt,
        combobox: "combobox" === B
      });
    }, [Tt, mt]);
    var At = s.a(It, 2);
    var jt = At[0];
    var Nt = At[1];
    var Rt = l.useMemo(function () {
      return new Set(jt);
    }, [jt]);
    var kt = l.useState(null);
    var xt = s.a(kt, 2);
    var Dt = xt[0];
    var Mt = xt[1];
    var Lt = l.useState("");
    var Pt = s.a(Lt, 2);
    var Bt = Pt[0];
    var Ft = Pt[1];
    var Gt = Bt;
    if ("combobox" === B && undefined !== Tt) {
      Gt = Tt;
    } else {
      if (undefined !== V) {
        Gt = V;
      } else {
        if (H) {
          Gt = H;
        }
      }
    }
    var Ut = l.useMemo(function () {
      var e = L;
      if (undefined === e) {
        e = p(P);
      }
      if ("tags" === B && O) {
        e = O(e, Tt, ht, U);
      }
      return e || [];
    }, [L, P, B, Tt]);
    var Wt = l.useMemo(function () {
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
    var Vt = l.useMemo(function () {
      if (!Gt || !_t) {
        return a.a(Ut);
      }
      var e = g(Gt, Ut, {
        optionFilterProp: q,
        filterOption: "combobox" === B && undefined === z ? function () {
          return true;
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
      return Y && Array.isArray(e) ? a.a(e).sort(Y) : e;
    }, [Ut, Gt, B, _t, Y]);
    var zt = l.useMemo(function () {
      return f(Vt, e);
    }, [Vt]);
    l.useEffect(function () {
      if (nt.current && nt.current.scrollTo) {
        nt.current.scrollTo(0);
      }
    }, [Gt]);
    var Yt = l.useMemo(function () {
      var e = jt.map(function (e) {
        var t = Ht([e]);
        var n = h(e, {
          options: t,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        });
        return i.a(i.a({}, n), {}, {
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
          return e.isCacheable && t ? i.a(i.a({}, e), {}, {
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
    var qt = l.useState([]);
    var Xt = s.a(qt, 2);
    var Qt = Xt[0];
    var Zt = Xt[1];
    var Jt = function (t) {
      if (!Ye || !Ve.skipTriggerChange) {
        var n = Ht(t);
        var r = T.f(Array.from(t), {
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
            var r = i.a({}, e);
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
    var nn = v(undefined, {
      defaultValue: M,
      value: D
    });
    var rn = s.a(nn, 2);
    var on = rn[0];
    var an = rn[1];
    var sn = on;
    var cn = !ce && !Vt.length;
    if (oe || cn && sn && "combobox" === B) {
      sn = false;
    }
    var ln;
    var un = !cn && sn;
    var dn = function (e) {
      var t = undefined !== e ? e : !sn;
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
            r.current.triggerOpen(false);
          }
        }
        window.addEventListener("mousedown", t);
        return function () {
          return window.removeEventListener("mousedown", t);
        };
      }, []);
    })(function () {
      var e;
      return [$e.current, null === (e = et.current) || undefined === e ? undefined : e.getPopupElement()];
    }, un, dn);
    var pn = function (e, t, n) {
      var r = true;
      var o = e;
      Mt(null);
      var i = n ? null : Xe.g(e, Ne);
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
        var c = Array.from(new Set([].concat(a.a(jt), a.a(s))));
        Jt(c);
        c.forEach(function (e) {
          Kt(e, true, "input");
        });
        dn(false);
        r = false;
      }
      Ft(o);
      if (Z && Gt !== o) {
        Z(o);
      }
      return r;
    };
    l.useEffect(function () {
      if (on && oe) {
        an(false);
      }
      if (oe) {
        st(false);
      }
    }, [oe]);
    l.useEffect(function () {
      if (!(sn || gt || "combobox" === B)) {
        pn("", false, false);
      }
    }, [sn]);
    var fn = N();
    var hn = s.a(fn, 2);
    var mn = hn[0];
    var gn = hn[1];
    var _n = l.useRef(false);
    var vn = [];
    l.useEffect(function () {
      return function () {
        vn.forEach(function (e) {
          return clearTimeout(e);
        });
        vn.splice(0, vn.length);
      };
    }, []);
    var bn = l.useState(0);
    var yn = s.a(bn, 2);
    var En = yn[0];
    var On = yn[1];
    var wn = undefined !== ae ? ae : "combobox" !== B;
    var Cn = l.useState(null);
    var Tn = s.a(Cn, 2);
    var Sn = Tn[0];
    var In = Tn[1];
    var An = l.useState({});
    var jn = s.a(An, 2)[1];
    S(function () {
      if (un) {
        var e;
        var t = Math.ceil(null === (e = $e.current) || undefined === e ? undefined : e.offsetWidth);
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
        $t(e, i.a(i.a({}, t), {}, {
          source: "option"
        }));
      },
      onToggleOpen: dn,
      onActiveValue: function (e, t) {
        var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
        var r = n.source;
        var o = undefined === r ? "keyboard" : r;
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
      virtual: false !== Ee && false !== Ce,
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
          pn("", false, false);
        },
        customizeIcon: ee
      }, "×");
    }
    var kn;
    var xn = undefined !== te ? te : ie || !gt && "combobox" !== B;
    if (xn) {
      kn = l.createElement(E.a, {
        className: _()("".concat(j, "-arrow"), o.a({}, "".concat(j, "-arrow-loading"), ie)),
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
    var Dn = _()(j, R, (I = {}, o.a(I, "".concat(j, "-focused"), at), o.a(I, "".concat(j, "-multiple"), gt), o.a(I, "".concat(j, "-single"), !gt), o.a(I, "".concat(j, "-allow-clear"), $), o.a(I, "".concat(j, "-show-arrow"), xn), o.a(I, "".concat(j, "-disabled"), oe), o.a(I, "".concat(j, "-loading"), ie), o.a(I, "".concat(j, "-open"), sn), o.a(I, "".concat(j, "-customize-input"), en), o.a(I, "".concat(j, "-show-search"), _t), I));
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
    }) : l.createElement(x, r.a({}, e, {
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
          var t = Array.from(new Set([].concat(a.a(jt), [e])));
          Jt(t);
          t.forEach(function (e) {
            Kt(e, true, "input");
          });
          Ft("");
        }
      },
      onSelect: function (e, t) {
        $t(e, i.a(i.a({}, t), {}, {
          source: "selection"
        }));
      },
      tokenWithEnter: rt
    })));
    return tn ? Mn : l.createElement("div", r.a({
      className: Dn
    }, Je, {
      ref: $e,
      onMouseDown: function (e) {
        var t;
        var n = e.target;
        var r = null === (t = et.current) || undefined === t ? undefined : t.getPopupElement();
        if (r && r.contains(n)) {
          var o = setTimeout(function () {
            var e;
            var t = vn.indexOf(o);
            if (!(-1 !== t && vn.splice(t, 1), ct(), yt || r.contains(document.activeElement))) {
              if (!(null === (e = tt.current) || undefined === e)) {
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
          Be.apply(undefined, [e].concat(a));
        }
      },
      onKeyDown: function (e) {
        var t;
        var n = mn();
        var r = e.which;
        if (r === u.a.ENTER) {
          if ("combobox" !== B) {
            e.preventDefault();
          }
          if (!sn) {
            dn(true);
          }
        }
        gn(!!Gt);
        if (r === u.a.BACKSPACE && !n && gt && !Gt && jt.length) {
          var o = T.c(Yt, jt);
          if (null !== o.removedValue) {
            Jt(o.values);
            Kt(o.removedValue, false, "input");
          }
        }
        for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) {
          a[s - 1] = arguments[s];
        }
        if (sn && nt.current) {
          (t = nt.current).onKeyDown.apply(t, [e].concat(a));
        }
        if (Pe) {
          Pe.apply(undefined, [e].concat(a));
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
          Le.apply(undefined, [e].concat(n));
        }
      },
      onFocus: function () {
        st(true);
        if (!oe) {
          if (De && !_n.current) {
            De.apply(undefined, arguments);
          }
          if (Ae.includes("focus")) {
            dn(true);
          }
        }
        _n.current = true;
      },
      onBlur: function () {
        st(false, function () {
          _n.current = false;
          dn(false);
        });
        if (!oe) {
          if (Gt) {
            if ("tags" === B) {
              pn("", false, false);
              Jt(Array.from(new Set([].concat(a.a(jt), [Gt]))));
            } else {
              if ("multiple" === B) {
                Ft("");
              }
            }
          }
          if (Me) {
            Me.apply(undefined, arguments);
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