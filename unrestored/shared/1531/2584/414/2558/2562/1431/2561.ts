"use strict";

var r = require("../../../../0/1532/763");
var o = require("react");
function i(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) {
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var a = "function" === typeof Symbol && Symbol.for;
var s = a ? Symbol.for("react.portal") : 60106;
var c = a ? Symbol.for("react.fragment") : 60107;
var l = a ? Symbol.for("react.strict_mode") : 60108;
var u = a ? Symbol.for("react.profiler") : 60114;
var d = a ? Symbol.for("react.provider") : 60109;
var p = a ? Symbol.for("react.context") : 60110;
var f = a ? Symbol.for("react.concurrent_mode") : 60111;
var h = a ? Symbol.for("react.forward_ref") : 60112;
var m = a ? Symbol.for("react.suspense") : 60113;
var g = a ? Symbol.for("react.suspense_list") : 60120;
var _ = a ? Symbol.for("react.memo") : 60115;
var v = a ? Symbol.for("react.lazy") : 60116;
var b = a ? Symbol.for("react.block") : 60121;
var y = a ? Symbol.for("react.fundamental") : 60117;
var E = a ? Symbol.for("react.scope") : 60119;
function O(e) {
  if (null == e) {
    return null;
  }
  if ("function" === typeof e) {
    return e.displayName || e.name || null;
  }
  if ("string" === typeof e) {
    return e;
  }
  switch (e) {
    case c:
      return "Fragment";
    case s:
      return "Portal";
    case u:
      return "Profiler";
    case l:
      return "StrictMode";
    case m:
      return "Suspense";
    case g:
      return "SuspenseList";
  }
  if ("object" === typeof e) {
    switch (e.$$typeof) {
      case p:
        return "Context.Consumer";
      case d:
        return "Context.Provider";
      case h:
        var t = e.render;
        t = t.displayName || t.name || "";
        return e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
      case _:
        return O(e.type);
      case b:
        return O(e.render);
      case v:
        if (e = 1 === e._status ? e._result : null) {
          return O(e);
        }
    }
  }
  return null;
}
var w = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
if (!w.hasOwnProperty("ReactCurrentDispatcher")) {
  w.ReactCurrentDispatcher = {
    current: null
  };
}
if (!w.hasOwnProperty("ReactCurrentBatchConfig")) {
  w.ReactCurrentBatchConfig = {
    suspense: null
  };
}
var C = {};
function T(e, t) {
  for (var n = 0 | e._threadCount; n <= t; n++) {
    e[n] = e._currentValue2;
    e._threadCount = n + 1;
  }
}
for (var S = new Uint16Array(16), I = 0; 15 > I; I++) {
  S[I] = I + 1;
}
S[15] = 0;
var A = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var j = Object.prototype.hasOwnProperty;
var N = {};
var R = {};
function k(e) {
  return !!j.call(R, e) || !j.call(N, e) && (A.test(e) ? R[e] = true : (N[e] = true, false));
}
function x(e, t, n, r, o, i) {
  this.acceptsBooleans = 2 === t || 3 === t || 4 === t;
  this.attributeName = r;
  this.attributeNamespace = o;
  this.mustUseProperty = n;
  this.propertyName = e;
  this.type = t;
  this.sanitizeURL = i;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  D[e] = new x(e, 0, false, e, null, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var t = e[0];
  D[t] = new x(t, 1, false, e[1], null, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  D[e] = new x(e, 2, false, e.toLowerCase(), null, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  D[e] = new x(e, 2, false, e, null, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  D[e] = new x(e, 3, false, e.toLowerCase(), null, false);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  D[e] = new x(e, 3, true, e, null, false);
});
["capture", "download"].forEach(function (e) {
  D[e] = new x(e, 4, false, e, null, false);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  D[e] = new x(e, 6, false, e, null, false);
});
["rowSpan", "start"].forEach(function (e) {
  D[e] = new x(e, 5, false, e.toLowerCase(), null, false);
});
var M = /[\-:]([a-z])/g;
function L(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(M, L);
  D[t] = new x(t, 1, false, e, null, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(M, L);
  D[t] = new x(t, 1, false, e, "http://www.w3.org/1999/xlink", false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(M, L);
  D[t] = new x(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  D[e] = new x(e, 1, false, e.toLowerCase(), null, false);
});
D.xlinkHref = new x("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
["src", "href", "action", "formAction"].forEach(function (e) {
  D[e] = new x(e, 1, false, e.toLowerCase(), null, true);
});
var P = /["'&<>]/;
function B(e) {
  if ("boolean" === typeof e || "number" === typeof e) {
    return "" + e;
  }
  e = "" + e;
  var t = P.exec(e);
  if (t) {
    var n;
    var r = "";
    var o = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      if (o !== n) {
        r += e.substring(o, n);
      }
      o = n + 1;
      r += t;
    }
    e = o !== n ? r + e.substring(o, n) : r;
  }
  return e;
}
function F(e, t) {
  var n;
  var r = D.hasOwnProperty(e) ? D[e] : null;
  if (n = "style" !== e) {
    n = null !== r ? 0 === r.type : 2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]);
  }
  return n || function (e, t, n, r) {
    if (null === t || "undefined" === typeof t || function (e, t, n, r) {
      if (null !== n && 0 === n.type) {
        return false;
      }
      switch (typeof t) {
        case "function":
        case "symbol":
          return true;
        case "boolean":
          return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
        default:
          return false;
      }
    }(e, t, n, r)) {
      return true;
    }
    if (r) {
      return false;
    }
    if (null !== n) {
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return false === t;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    }
    return false;
  }(e, t, r, false) ? "" : null !== r ? (e = r.attributeName, 3 === (n = r.type) || 4 === n && true === t ? e + "=\"\"" : (r.sanitizeURL && (t = "" + t), e + "=\"" + B(t) + "\"")) : k(e) ? e + "=\"" + B(t) + "\"" : "";
}
var G = "function" === typeof Object.is ? Object.is : function (e, t) {
  return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t;
};
var U = null;
var W = null;
var H = null;
var V = false;
var z = false;
var Y = null;
var K = 0;
function q() {
  if (null === U) {
    throw Error(i(321));
  }
  return U;
}
function X() {
  if (0 < K) {
    throw Error(i(312));
  }
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}
function Q() {
  if (null === H) {
    if (null === W) {
      V = false;
      W = H = X();
    } else {
      V = true;
      H = W;
    }
  } else {
    if (null === H.next) {
      V = false;
      H = H.next = X();
    } else {
      V = true;
      H = H.next;
    }
  }
  return H;
}
function Z(e, t, n, r) {
  for (; z;) {
    z = false;
    K += 1;
    H = null;
    n = e(t, r);
  }
  W = U = null;
  K = 0;
  H = Y = null;
  return n;
}
function J(e, t) {
  return "function" === typeof t ? t(e) : t;
}
function $(e, t, n) {
  U = q();
  H = Q();
  if (V) {
    var r = H.queue;
    t = r.dispatch;
    if (null !== Y && undefined !== (n = Y.get(r))) {
      Y.delete(r);
      r = H.memoizedState;
      do {
        r = e(r, n.action);
        n = n.next;
      } while (null !== n);
      H.memoizedState = r;
      return [r, t];
    }
    return [H.memoizedState, t];
  }
  e = e === J ? "function" === typeof t ? t() : t : undefined !== n ? n(t) : t;
  H.memoizedState = e;
  e = (e = H.queue = {
    last: null,
    dispatch: null
  }).dispatch = ee.bind(null, U, e);
  return [H.memoizedState, e];
}
function ee(e, t, n) {
  if (!(25 > K)) {
    throw Error(i(301));
  }
  if (e === U) {
    z = true;
    e = {
      action: n,
      next: null
    };
    if (null === Y) {
      Y = new Map();
    }
    if (undefined === (n = Y.get(t))) {
      Y.set(t, e);
    } else {
      for (t = n; null !== t.next;) {
        t = t.next;
      }
      t.next = e;
    }
  }
}
function te() {}
var ne = 0;
var re = {
  readContext: function (e) {
    var t = ne;
    T(e, t);
    return e[t];
  },
  useContext: function (e) {
    q();
    var t = ne;
    T(e, t);
    return e[t];
  },
  useMemo: function (e, t) {
    U = q();
    t = undefined === t ? null : t;
    if (null !== (H = Q())) {
      var n = H.memoizedState;
      if (null !== n && null !== t) {
        e: {
          var r = n[1];
          if (null === r) {
            r = false;
          } else {
            for (var o = 0; o < r.length && o < t.length; o++) {
              if (!G(t[o], r[o])) {
                r = false;
                break e;
              }
            }
            r = true;
          }
        }
        if (r) {
          return n[0];
        }
      }
    }
    e = e();
    H.memoizedState = [e, t];
    return e;
  },
  useReducer: $,
  useRef: function (e) {
    U = q();
    var t = (H = Q()).memoizedState;
    return null === t ? (e = {
      current: e
    }, H.memoizedState = e) : t;
  },
  useState: function (e) {
    return $(J, e);
  },
  useLayoutEffect: function () {},
  useCallback: function (e) {
    return e;
  },
  useImperativeHandle: te,
  useEffect: te,
  useDebugValue: te,
  useResponder: function (e, t) {
    return {
      props: t,
      responder: e
    };
  },
  useDeferredValue: function (e) {
    q();
    return e;
  },
  useTransition: function () {
    q();
    return [function (e) {
      e();
    }, false];
  }
};
var oe = "http://www.w3.org/1999/xhtml";
function ie(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
var ae = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
var se = r({
  menuitem: true
}, ae);
var ce = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var le = ["Webkit", "ms", "Moz", "O"];
Object.keys(ce).forEach(function (e) {
  le.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1);
    ce[t] = ce[e];
  });
});
var ue = /([A-Z])/g;
var de = /^ms-/;
var pe = o.Children.toArray;
var fe = w.ReactCurrentDispatcher;
var he = {
  listing: true,
  pre: true,
  textarea: true
};
var me = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
var ge = {};
var _e = {};
var ve = Object.prototype.hasOwnProperty;
var be = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};
function ye(e, t) {
  if (undefined === e) {
    throw Error(i(152, O(t) || "Component"));
  }
}
function Ee(e, t, n) {
  function a(o, a) {
    var s = a.prototype && a.prototype.isReactComponent;
    var c = function (e, t, n, r) {
      if (r && "object" === typeof (r = e.contextType) && null !== r) {
        T(r, n);
        return r[n];
      }
      if (e = e.contextTypes) {
        for (var o in n = {}, e) n[o] = t[o];
        t = n;
      } else {
        t = C;
      }
      return t;
    }(a, t, n, s);
    var l = [];
    var u = false;
    var d = {
      isMounted: function () {
        return false;
      },
      enqueueForceUpdate: function () {
        if (null === l) {
          return null;
        }
      },
      enqueueReplaceState: function (e, t) {
        u = true;
        l = [t];
      },
      enqueueSetState: function (e, t) {
        if (null === l) {
          return null;
        }
        l.push(t);
      }
    };
    if (s) {
      s = new a(o.props, c, d);
      if ("function" === typeof a.getDerivedStateFromProps) {
        var p = a.getDerivedStateFromProps.call(null, o.props, s.state);
        if (null != p) {
          s.state = r({}, s.state, p);
        }
      }
    } else if (U = {}, s = a(o.props, c, d), null == (s = Z(a, o.props, s, c)) || null == s.render) {
      return void ye(e = s, a);
    }
    s.props = o.props;
    s.context = c;
    s.updater = d;
    if (undefined === (d = s.state)) {
      s.state = d = null;
    }
    if ("function" === typeof s.UNSAFE_componentWillMount || "function" === typeof s.componentWillMount) {
      if ("function" === typeof s.componentWillMount && "function" !== typeof a.getDerivedStateFromProps) {
        s.componentWillMount();
      }
      if ("function" === typeof s.UNSAFE_componentWillMount && "function" !== typeof a.getDerivedStateFromProps) {
        s.UNSAFE_componentWillMount();
      }
      if (l.length) {
        d = l;
        var f = u;
        l = null;
        u = false;
        if (f && 1 === d.length) {
          s.state = d[0];
        } else {
          p = f ? d[0] : s.state;
          var h = true;
          for (f = f ? 1 : 0; f < d.length; f++) {
            var m = d[f];
            if (null != (m = "function" === typeof m ? m.call(s, p, o.props, c) : m)) {
              if (h) {
                h = false;
                p = r({}, p, m);
              } else {
                r(p, m);
              }
            }
          }
          s.state = p;
        }
      } else {
        l = null;
      }
    }
    ye(e = s.render(), a);
    if ("function" === typeof s.getChildContext && "object" === typeof (o = a.childContextTypes)) {
      var g = s.getChildContext();
      for (var _ in g) if (!(_ in o)) {
        throw Error(i(108, O(a) || "Unknown", _));
      }
    }
    if (g) {
      t = r({}, t, g);
    }
  }
  for (; o.isValidElement(e);) {
    var s = e;
    var c = s.type;
    if ("function" !== typeof c) {
      break;
    }
    a(s, c);
  }
  return {
    child: e,
    context: t
  };
}
var Oe = function () {
  function e(e, t) {
    if (o.isValidElement(e)) {
      if (e.type !== c) {
        e = [e];
      } else {
        e = e.props.children;
        e = o.isValidElement(e) ? [e] : pe(e);
      }
    } else {
      e = pe(e);
    }
    e = {
      type: null,
      domNamespace: oe,
      children: e,
      childIndex: 0,
      context: C,
      footer: ""
    };
    var n = S[0];
    if (0 === n) {
      var r = S;
      var a = 2 * (n = r.length);
      if (!(65536 >= a)) {
        throw Error(i(304));
      }
      var s = new Uint16Array(a);
      for (s.set(r), (S = s)[0] = n + 1, r = n; r < a - 1; r++) {
        S[r] = r + 1;
      }
      S[a - 1] = 0;
    } else {
      S[0] = S[n];
    }
    this.threadID = n;
    this.stack = [e];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = t;
    this.suspenseDepth = 0;
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
  }
  var t = e.prototype;
  t.destroy = function () {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      var e = this.threadID;
      S[e] = S[0];
      S[0] = e;
    }
  };
  t.pushProvider = function (e) {
    var t = ++this.contextIndex;
    var n = e.type._context;
    var r = this.threadID;
    T(n, r);
    var o = n[r];
    this.contextStack[t] = n;
    this.contextValueStack[t] = o;
    n[r] = e.props.value;
  };
  t.popProvider = function () {
    var e = this.contextIndex;
    var t = this.contextStack[e];
    var n = this.contextValueStack[e];
    this.contextStack[e] = null;
    this.contextValueStack[e] = null;
    this.contextIndex--;
    t[this.threadID] = n;
  };
  t.clearProviders = function () {
    for (var e = this.contextIndex; 0 <= e; e--) {
      this.contextStack[e][this.threadID] = this.contextValueStack[e];
    }
  };
  t.read = function (e) {
    if (this.exhausted) {
      return null;
    }
    var t = ne;
    ne = this.threadID;
    var n = fe.current;
    fe.current = re;
    try {
      for (var r = [""], o = false; r[0].length < e;) {
        if (0 === this.stack.length) {
          this.exhausted = true;
          var a = this.threadID;
          S[a] = S[0];
          S[0] = a;
          break;
        }
        var s = this.stack[this.stack.length - 1];
        if (o || s.childIndex >= s.children.length) {
          var c = s.footer;
          if ("" !== c) {
            this.previousWasTextNode = false;
          }
          this.stack.pop();
          if ("select" === s.type) {
            this.currentSelectValue = null;
          } else if (null != s.type && null != s.type.type && s.type.type.$$typeof === d) {
            this.popProvider(s.type);
          } else if (s.type === m) {
            this.suspenseDepth--;
            var l = r.pop();
            if (o) {
              o = false;
              var u = s.fallbackFrame;
              if (!u) {
                throw Error(i(303));
              }
              this.stack.push(u);
              r[this.suspenseDepth] += "<!--$!-->";
              continue;
            }
            r[this.suspenseDepth] += l;
          }
          r[this.suspenseDepth] += c;
        } else {
          var p = s.children[s.childIndex++];
          var f = "";
          try {
            f += this.render(p, s.context, s.domNamespace);
          } catch (h) {
            if (null != h && "function" === typeof h.then) {
              throw Error(i(294));
            }
            throw h;
          }
          if (r.length <= this.suspenseDepth) {
            r.push("");
          }
          r[this.suspenseDepth] += f;
        }
      }
      return r[0];
    } finally {
      fe.current = n;
      ne = t;
    }
  };
  t.render = function (e, t, n) {
    if ("string" === typeof e || "number" === typeof e) {
      return "" === (n = "" + e) ? "" : this.makeStaticMarkup ? B(n) : this.previousWasTextNode ? "<!-- -->" + B(n) : (this.previousWasTextNode = true, B(n));
    }
    e = (t = Ee(e, t, this.threadID)).child;
    t = t.context;
    if (null === e || false === e) {
      return "";
    }
    if (!o.isValidElement(e)) {
      if (null != e && null != e.$$typeof) {
        if ((n = e.$$typeof) === s) {
          throw Error(i(257));
        }
        throw Error(i(258, n.toString()));
      }
      e = pe(e);
      this.stack.push({
        type: null,
        domNamespace: n,
        children: e,
        childIndex: 0,
        context: t,
        footer: ""
      });
      return "";
    }
    var a = e.type;
    if ("string" === typeof a) {
      return this.renderDOM(e, t, n);
    }
    switch (a) {
      case l:
      case f:
      case u:
      case g:
      case c:
        e = pe(e.props.children);
        this.stack.push({
          type: null,
          domNamespace: n,
          children: e,
          childIndex: 0,
          context: t,
          footer: ""
        });
        return "";
      case m:
        throw Error(i(294));
    }
    if ("object" === typeof a && null !== a) {
      switch (a.$$typeof) {
        case h:
          U = {};
          var b = a.render(e.props, e.ref);
          b = Z(a.render, e.props, b, e.ref);
          b = pe(b);
          this.stack.push({
            type: null,
            domNamespace: n,
            children: b,
            childIndex: 0,
            context: t,
            footer: ""
          });
          return "";
        case _:
          e = [o.createElement(a.type, r({
            ref: e.ref
          }, e.props))];
          this.stack.push({
            type: null,
            domNamespace: n,
            children: e,
            childIndex: 0,
            context: t,
            footer: ""
          });
          return "";
        case d:
          n = {
            type: e,
            domNamespace: n,
            children: a = pe(e.props.children),
            childIndex: 0,
            context: t,
            footer: ""
          };
          this.pushProvider(e);
          this.stack.push(n);
          return "";
        case p:
          a = e.type;
          b = e.props;
          var O = this.threadID;
          T(a, O);
          a = pe(b.children(a[O]));
          this.stack.push({
            type: e,
            domNamespace: n,
            children: a,
            childIndex: 0,
            context: t,
            footer: ""
          });
          return "";
        case y:
          throw Error(i(338));
        case v:
          switch (function (e) {
            if (-1 === e._status) {
              e._status = 0;
              var t = e._ctor;
              t = t();
              e._result = t;
              t.then(function (t) {
                if (0 === e._status) {
                  t = t.default;
                  e._status = 1;
                  e._result = t;
                }
              }, function (t) {
                if (0 === e._status) {
                  e._status = 2;
                  e._result = t;
                }
              });
            }
          }(a = e.type), a._status) {
            case 1:
              e = [o.createElement(a._result, r({
                ref: e.ref
              }, e.props))];
              this.stack.push({
                type: null,
                domNamespace: n,
                children: e,
                childIndex: 0,
                context: t,
                footer: ""
              });
              return "";
            case 2:
              throw a._result;
            default:
              throw Error(i(295));
          }
        case E:
          throw Error(i(343));
      }
    }
    throw Error(i(130, null == a ? a : typeof a, ""));
  };
  t.renderDOM = function (e, t, n) {
    var a = e.type.toLowerCase();
    if (n === oe) {
      ie(a);
    }
    if (!ge.hasOwnProperty(a)) {
      if (!me.test(a)) {
        throw Error(i(65, a));
      }
      ge[a] = true;
    }
    var s = e.props;
    if ("input" === a) {
      s = r({
        type: undefined
      }, s, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: null != s.value ? s.value : s.defaultValue,
        checked: null != s.checked ? s.checked : s.defaultChecked
      });
    } else if ("textarea" === a) {
      var c = s.value;
      if (null == c) {
        c = s.defaultValue;
        var l = s.children;
        if (null != l) {
          if (null != c) {
            throw Error(i(92));
          }
          if (Array.isArray(l)) {
            if (!(1 >= l.length)) {
              throw Error(i(93));
            }
            l = l[0];
          }
          c = "" + l;
        }
        if (null == c) {
          c = "";
        }
      }
      s = r({}, s, {
        value: undefined,
        children: "" + c
      });
    } else if ("select" === a) {
      this.currentSelectValue = null != s.value ? s.value : s.defaultValue;
      s = r({}, s, {
        value: undefined
      });
    } else if ("option" === a) {
      l = this.currentSelectValue;
      var u = function (e) {
        if (undefined === e || null === e) {
          return e;
        }
        var t = "";
        o.Children.forEach(e, function (e) {
          if (null != e) {
            t += e;
          }
        });
        return t;
      }(s.children);
      if (null != l) {
        var d = null != s.value ? s.value + "" : u;
        c = false;
        if (Array.isArray(l)) {
          for (var p = 0; p < l.length; p++) {
            if ("" + l[p] === d) {
              c = true;
              break;
            }
          }
        } else {
          c = "" + l === d;
        }
        s = r({
          selected: undefined,
          children: undefined
        }, s, {
          selected: c,
          children: u
        });
      }
    }
    if (c = s) {
      if (se[a] && (null != c.children || null != c.dangerouslySetInnerHTML)) {
        throw Error(i(137, a, ""));
      }
      if (null != c.dangerouslySetInnerHTML) {
        if (null != c.children) {
          throw Error(i(60));
        }
        if ("object" !== typeof c.dangerouslySetInnerHTML || !("__html" in c.dangerouslySetInnerHTML)) {
          throw Error(i(61));
        }
      }
      if (null != c.style && "object" !== typeof c.style) {
        throw Error(i(62, ""));
      }
    }
    for (y in c = s, l = this.makeStaticMarkup, u = 1 === this.stack.length, d = "<" + e.type, c) if (ve.call(c, y)) {
      var f = c[y];
      if (null != f) {
        if ("style" === y) {
          p = undefined;
          var h = "";
          var m = "";
          for (p in f) if (f.hasOwnProperty(p)) {
            var g = 0 === p.indexOf("--");
            var _ = f[p];
            if (null != _) {
              if (g) {
                var v = p;
              } else if (v = p, _e.hasOwnProperty(v)) {
                v = _e[v];
              } else {
                var b = v.replace(ue, "-$1").toLowerCase().replace(de, "-ms-");
                v = _e[v] = b;
              }
              h += m + v + ":";
              m = p;
              h += g = null == _ || "boolean" === typeof _ || "" === _ ? "" : g || "number" !== typeof _ || 0 === _ || ce.hasOwnProperty(m) && ce[m] ? ("" + _).trim() : _ + "px";
              m = ";";
            }
          }
          f = h || null;
        }
        p = null;
        e: if (g = a, _ = c, -1 === g.indexOf("-")) {
          g = "string" === typeof _.is;
        } else {
          switch (g) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              g = false;
              break e;
            default:
              g = true;
          }
        }
        if (g) {
          if (!be.hasOwnProperty(y)) {
            p = k(p = y) && null != f ? p + "=\"" + B(f) + "\"" : "";
          }
        } else {
          p = F(y, f);
        }
        if (p) {
          d += " " + p;
        }
      }
    }
    if (!l) {
      if (u) {
        d += " data-reactroot=\"\"";
      }
    }
    var y = d;
    c = "";
    if (ae.hasOwnProperty(a)) {
      y += "/>";
    } else {
      y += ">";
      c = "</" + e.type + ">";
    }
    e: {
      if (null != (l = s.dangerouslySetInnerHTML)) {
        if (null != l.__html) {
          l = l.__html;
          break e;
        }
      } else if ("string" === typeof (l = s.children) || "number" === typeof l) {
        l = B(l);
        break e;
      }
      l = null;
    }
    if (null != l) {
      s = [];
      if (he.hasOwnProperty(a) && "\n" === l.charAt(0)) {
        y += "\n";
      }
      y += l;
    } else {
      s = pe(s.children);
    }
    e = e.type;
    n = null == n || "http://www.w3.org/1999/xhtml" === n ? ie(e) : "http://www.w3.org/2000/svg" === n && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : n;
    this.stack.push({
      domNamespace: n,
      type: a,
      children: s,
      childIndex: 0,
      context: t,
      footer: c
    });
    this.previousWasTextNode = false;
    return y;
  };
  return e;
}();
var we = {
  renderToString: function (e) {
    e = new Oe(e, false);
    try {
      return e.read(1 / 0);
    } finally {
      e.destroy();
    }
  },
  renderToStaticMarkup: function (e) {
    e = new Oe(e, true);
    try {
      return e.read(1 / 0);
    } finally {
      e.destroy();
    }
  },
  renderToNodeStream: function () {
    throw Error(i(207));
  },
  renderToStaticNodeStream: function () {
    throw Error(i(208));
  },
  version: "16.13.1"
};
module.exports = we.default || we;