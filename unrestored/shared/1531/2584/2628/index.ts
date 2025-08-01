"use strict";

export { W as a };
var r = require("../0/index");
var i = require("./988");
var o = require("./275");
var a = require("./277");
var s = ["localeMatcher", "style", "currency", "currencyDisplay", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay"];
function c(e, t, n) {
  var r = e.locale;
  var i = e.formats;
  var a = e.onError;
  if (void 0 === n) {
    n = {};
  }
  var c = n.format;
  var u = c && Object(o.f)(i, "number", c, a) || {};
  return t(r, Object(o.e)(n, s, u));
}
function u(e, t, n, r) {
  if (void 0 === r) {
    r = {};
  }
  try {
    return c(e, t, r).format(n);
  } catch (i) {
    e.onError(new a.e("FORMAT_ERROR", "Error formatting number.", i));
  }
  return String(n);
}
function l(e, t, n, r) {
  if (void 0 === r) {
    r = {};
  }
  try {
    return c(e, t, r).formatToParts(n);
  } catch (i) {
    e.onError(new a.e("FORMAT_ERROR", "Error formatting number.", i));
  }
  return [];
}
var f = require("./796");
var d = ["numeric", "style"];
function h(e, t, n, r, i) {
  if (void 0 === i) {
    i = {};
  }
  if (!r) {
    r = "second";
  }
  if (!Intl.RelativeTimeFormat) {
    e.onError(new f.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', "MISSING_INTL_API"));
  }
  try {
    return function (e, t, n) {
      var r = e.locale;
      var i = e.formats;
      var a = e.onError;
      if (void 0 === n) {
        n = {};
      }
      var s = n.format;
      var c = !!s && Object(o.f)(i, "relative", s, a) || {};
      return t(r, Object(o.e)(n, d, c));
    }(e, t, i).format(n, r);
  } catch (s) {
    e.onError(new a.b("Error formatting relative time.", s));
  }
  return String(n);
}
var p = function () {
  return (p = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var _ = ["localeMatcher", "formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "fractionalSecondDigits", "calendar", "numberingSystem"];
function A(e, t, n, r) {
  var i = e.locale;
  var a = e.formats;
  var s = e.onError;
  var c = e.timeZone;
  if (void 0 === r) {
    r = {};
  }
  var u = r.format;
  var l = p(p({}, c && {
    timeZone: c
  }), u && Object(o.f)(a, t, u, s));
  var f = Object(o.e)(r, _, l);
  if (!("time" !== t || f.hour || f.minute || f.second)) {
    f = p(p({}, f), {
      hour: "numeric",
      minute: "numeric"
    });
  }
  return n(i, f);
}
function g(e, t, n, r) {
  if (void 0 === r) {
    r = {};
  }
  var i = "string" === typeof n ? new Date(n || 0) : n;
  try {
    return A(e, "date", t, r).format(i);
  } catch (o) {
    e.onError(new a.e("FORMAT_ERROR", "Error formatting date.", o));
  }
  return String(i);
}
function v(e, t, n, r) {
  if (void 0 === r) {
    r = {};
  }
  var i = "string" === typeof n ? new Date(n || 0) : n;
  try {
    return A(e, "time", t, r).format(i);
  } catch (o) {
    e.onError(new a.e("FORMAT_ERROR", "Error formatting time.", o));
  }
  return String(i);
}
function m(e, t, n, r) {
  if (void 0 === r) {
    r = {};
  }
  var i = "string" === typeof n ? new Date(n || 0) : n;
  try {
    return A(e, "date", t, r).formatToParts(i);
  } catch (o) {
    e.onError(new a.e("FORMAT_ERROR", "Error formatting date.", o));
  }
  return [];
}
function y(e, t, n, r) {
  if (void 0 === r) {
    r = {};
  }
  var i = "string" === typeof n ? new Date(n || 0) : n;
  try {
    return A(e, "time", t, r).formatToParts(i);
  } catch (o) {
    e.onError(new a.e("FORMAT_ERROR", "Error formatting time.", o));
  }
  return [];
}
var b = ["localeMatcher", "type"];
function w(e, t, n, r) {
  var i = e.locale;
  var s = e.onError;
  if (void 0 === r) {
    r = {};
  }
  if (!Intl.PluralRules) {
    s(new f.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', "MISSING_INTL_API"));
  }
  var c = Object(o.e)(r, b);
  try {
    return t(i, c).select(n);
  } catch (u) {
    s(new a.b("Error formatting plural.", u));
  }
  return "other";
}
var E;
var x;
var C = require("./2588");
var O = require("./2589/index");
var k = require("./1440/index");
!function (e) {
  e[e.literal = 0] = "literal";
  e[e.argument = 1] = "argument";
  e[e.number = 2] = "number";
  e[e.date = 3] = "date";
  e[e.time = 4] = "time";
  e[e.select = 5] = "select";
  e[e.plural = 6] = "plural";
  e[e.pound = 7] = "pound";
  e[e.tag = 8] = "tag";
}(E || (E = {}));
(function (e) {
  e[e.number = 0] = "number";
  e[e.dateTime = 1] = "dateTime";
})(x || (x = {}));
var S = function () {
  return (S = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var T = function () {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++) {
    e += arguments[t].length;
  }
  var r = Array(e);
  var i = 0;
  for (t = 0; t < n; t++) {
    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) {
      r[i] = o[a];
    }
  }
  return r;
};
function B(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    n[r] = S({
      timeZone: t
    }, e[r]);
    return n;
  }, {});
}
function D(e, t) {
  return Object.keys(S(S({}, e), t)).reduce(function (n, r) {
    n[r] = S(S({}, e[r] || {}), t[r] || {});
    return n;
  }, {});
}
function I(e, t) {
  if (!t) {
    return e;
  }
  var n = O.a.formats;
  return S(S(S({}, n), e), {
    date: D(B(n.date, t), B(e.date || {}, t)),
    time: D(B(n.time, t), B(e.time || {}, t))
  });
}
function F(e, t) {
  return Array.isArray(e) && t ? r.createElement.apply(r, T([r.Fragment, null], e)) : e;
}
function R(e, t, n, r) {
  var i = e.locale;
  var s = e.formats;
  var c = e.messages;
  var u = e.defaultLocale;
  var l = e.defaultFormats;
  var f = e.onError;
  var d = e.timeZone;
  var h = e.wrapRichTextChunksInFragment;
  if (void 0 === n) {
    n = {
      id: ""
    };
  }
  var p = n.id;
  var _ = n.defaultMessage;
  Object(C.a)(!!p, "[React Intl] An `id` must be provided to format a message.");
  var A = String(p);
  var g = c && Object.prototype.hasOwnProperty.call(c, A) && c[A];
  if (Array.isArray(g) && 1 === g.length && g[0].type === E.literal) {
    return g[0].value;
  }
  if (!r && g && "string" === typeof g) {
    return g.replace(/'\{(.*?)\}'/gi, "{$1}");
  }
  var v = r && function (e) {
    return Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      t[n] = Object(k.b)(r) ? Object(o.b)(r) : r;
      return t;
    }, {});
  }(r);
  if (s = I(s, d), l = I(l, d), !g) {
    if ((!_ || i && i.toLowerCase() !== u.toLowerCase()) && f(new a.d(n, i)), _) {
      try {
        return F(t.getMessageFormat(_, u, l).format(v), h);
      } catch (m) {
        f(new a.b('Error formatting default message for: "' + A + '", rendering default message verbatim', i, n, m));
        return _;
      }
    }
    return A;
  }
  try {
    return F(t.getMessageFormat(g, i, s, {
      formatters: t
    }).format(v), h);
  } catch (m) {
    f(new a.b('Error formatting message: "' + A + '", using ' + (_ ? "default message" : "id") + " as fallback.", i, n, m));
  }
  if (_) {
    try {
      return F(t.getMessageFormat(_, u, l).format(v), h);
    } catch (m) {
      f(new a.b('Error formatting the default message for: "' + A + '", rendering message verbatim', i, n, m));
    }
  }
  return g || _ || A;
}
var P = require("./1170");
var N = (module => {
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
})(P);
var M = ["localeMatcher", "type", "style"];
var j = Date.now();
function L(e, t, n, r) {
  var i = e.locale;
  var s = e.onError;
  if (void 0 === r) {
    r = {};
  }
  if (!Intl.ListFormat) {
    s(new f.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', "MISSING_INTL_API"));
  }
  var c = Object(o.e)(r, M);
  try {
    var u = {};
    var l = n.map(function (e, t) {
      if ("object" === typeof e) {
        var n = function (e) {
          return j + "_" + e + "_" + j;
        }(t);
        u[n] = e;
        return n;
      }
      return String(e);
    });
    return Object.keys(u).length ? t(i, c).formatToParts(l).reduce(function (e, t) {
      var n = t.value;
      if (u[n]) {
        e.push(u[n]);
      } else {
        if ("string" === typeof e[e.length - 1]) {
          e[e.length - 1] += n;
        } else {
          e.push(n);
        }
      }
      return e;
    }, []) : t(i, c).format(l);
  } catch (d) {
    s(new a.e("FORMAT_ERROR", "Error formatting list.", d));
  }
  return n;
}
var U = ["localeMatcher", "style", "type", "fallback"];
function H(e, t, n, r) {
  var i = e.locale;
  var s = e.onError;
  if (void 0 === r) {
    r = {};
  }
  if (!Intl.DisplayNames) {
    s(new f.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', "MISSING_INTL_API"));
  }
  var c = Object(o.e)(r, U);
  try {
    return t(i, c).of(n);
  } catch (u) {
    s(new a.e("FORMAT_ERROR", "Error formatting display name.", u));
  }
}
var V = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (t.hasOwnProperty(n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var G = function () {
  return (G = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var z = N.a || P;
function Q(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment
  };
}
function W(e, t) {
  var n = Object(o.c)(t);
  var r = G(G({}, o.a), e);
  var i = r.locale;
  var s = r.defaultLocale;
  var c = r.onError;
  if (i) {
    if (!Intl.NumberFormat.supportedLocalesOf(i).length && c) {
      c(new a.c('Missing locale data for locale: "' + i + '" in Intl.NumberFormat. Using default locale: "' + s + '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'));
    } else {
      if (!Intl.DateTimeFormat.supportedLocalesOf(i).length && c) {
        c(new a.c('Missing locale data for locale: "' + i + '" in Intl.DateTimeFormat. Using default locale: "' + s + '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'));
      }
    }
  } else {
    if (c) {
      c(new a.a('"locale" was not configured, using "' + s + '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'));
    }
    r.locale = r.defaultLocale || "en";
  }
  return G(G({}, r), {
    formatters: n,
    formatNumber: u.bind(null, r, n.getNumberFormat),
    formatNumberToParts: l.bind(null, r, n.getNumberFormat),
    formatRelativeTime: h.bind(null, r, n.getRelativeTimeFormat),
    formatDate: g.bind(null, r, n.getDateTimeFormat),
    formatDateToParts: m.bind(null, r, n.getDateTimeFormat),
    formatTime: v.bind(null, r, n.getDateTimeFormat),
    formatTimeToParts: y.bind(null, r, n.getDateTimeFormat),
    formatPlural: w.bind(null, r, n.getPluralRules),
    formatMessage: R.bind(null, r, n),
    formatList: L.bind(null, r, n.getListFormat),
    formatDisplayName: H.bind(null, r, n.getDisplayNames)
  });
}
var K = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this;
    t.cache = Object(o.d)();
    t.state = {
      cache: t.cache,
      intl: W(Q(t.props), t.cache),
      prevConfig: Q(t.props)
    };
    return t;
  }
  V(t, e);
  t.getDerivedStateFromProps = function (e, t) {
    var n = t.prevConfig;
    var r = t.cache;
    var i = Q(e);
    return z(n, i) ? null : {
      intl: W(i, r),
      prevConfig: i
    };
  };
  t.prototype.render = function () {
    Object(o.g)(this.state.intl);
    return r.createElement(i.b, {
      value: this.state.intl
    }, this.props.children);
  };
  t.displayName = "IntlProvider";
  t.defaultProps = o.a;
  return t;
}(r.PureComponent);
export { K as b };
export default W;