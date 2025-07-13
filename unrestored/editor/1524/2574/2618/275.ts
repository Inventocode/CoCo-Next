"use strict";

export { f as e };
export { h as g };
export { d as a };
export { p as d };
export { g as c };
export { v as f };
export { m as b };
import * as r from "../0/index";
import * as i from "./2579/index";
import * as o from "./2579/791";
import * as a from "./2579/791";
import * as s from "./2578";
import * as c from "./277";
var u = function () {
  return (u = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
var l = function () {
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
function f(e, t, n) {
  if (void 0 === n) {
    n = {};
  }
  return t.reduce(function (t, r) {
    if (r in e) {
      t[r] = e[r];
    } else {
      if (r in n) {
        t[r] = n[r];
      }
    }
    return t;
  }, {});
}
function h(e) {
  Object(s.a)(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.");
}
var d = {
  formats: {},
  messages: {},
  timeZone: void 0,
  textComponent: r.Fragment,
  defaultLocale: "en",
  defaultFormats: {},
  onError: function (e) {
    0;
  }
};
function p() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {}
  };
}
function _(e) {
  return {
    create: function () {
      return {
        has: function (t) {
          return t in e;
        },
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        }
      };
    }
  };
}
var A = a.a || o;
function g(e) {
  if (void 0 === e) {
    e = {
      dateTime: {},
      number: {},
      message: {},
      relativeTime: {},
      pluralRules: {},
      list: {},
      displayNames: {}
    };
  }
  var t = Intl.RelativeTimeFormat;
  var n = Intl.ListFormat;
  var r = Intl.DisplayNames;
  var o = A(function () {
    for (var e, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    return new ((e = Intl.DateTimeFormat).bind.apply(e, l([void 0], t)))();
  }, {
    cache: _(e.dateTime),
    strategy: A.strategies.variadic
  });
  var a = A(function () {
    for (var e, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    return new ((e = Intl.NumberFormat).bind.apply(e, l([void 0], t)))();
  }, {
    cache: _(e.number),
    strategy: A.strategies.variadic
  });
  var s = A(function () {
    for (var e, t = [], n = 0; n < arguments.length; n++) {
      t[n] = arguments[n];
    }
    return new ((e = Intl.PluralRules).bind.apply(e, l([void 0], t)))();
  }, {
    cache: _(e.pluralRules),
    strategy: A.strategies.variadic
  });
  return {
    getDateTimeFormat: o,
    getNumberFormat: a,
    getMessageFormat: A(function (e, t, n, r) {
      return new i.a(e, t, n, u({
        formatters: {
          getNumberFormat: a,
          getDateTimeFormat: o,
          getPluralRules: s
        }
      }, r || {}));
    }, {
      cache: _(e.message),
      strategy: A.strategies.variadic
    }),
    getRelativeTimeFormat: A(function () {
      for (var e = [], n = 0; n < arguments.length; n++) {
        e[n] = arguments[n];
      }
      return new (t.bind.apply(t, l([void 0], e)))();
    }, {
      cache: _(e.relativeTime),
      strategy: A.strategies.variadic
    }),
    getPluralRules: s,
    getListFormat: A(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      return new (n.bind.apply(n, l([void 0], e)))();
    }, {
      cache: _(e.list),
      strategy: A.strategies.variadic
    }),
    getDisplayNames: A(function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
      return new (r.bind.apply(r, l([void 0], e)))();
    }, {
      cache: _(e.displayNames),
      strategy: A.strategies.variadic
    })
  };
}
function v(e, t, n, r) {
  var i;
  var o = e && e[t];
  if (o && (i = o[n]), i) {
    return i;
  }
  r(new c.f("No " + t + " format named: " + n));
}
function m(e) {
  return function (t) {
    return e(r.Children.toArray(t));
  };
}