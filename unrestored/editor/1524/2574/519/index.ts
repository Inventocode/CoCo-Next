"use strict";

export { d as a };
export { p as e };
export { h as d };
export { m as f };
export { _ as c };
export { v as g };
export { b as h };
export { y as b };
var r = require("../28");
var o = require("./772");
var i = require("../80/index");
var a = require("../108");
var s = require("../20");
var c = require("../397");
var l = require("../487");
function u(e, t) {
  var n;
  var r = e.key;
  if ("value" in e) {
    n = e.value;
  }
  return null !== r && void 0 !== r ? r : void 0 !== n ? n : "rc-index-key-".concat(t);
}
function d(e) {
  var t = e || {};
  return {
    label: t.label || "label",
    value: t.value || "value",
    options: t.options || "options"
  };
}
function p(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  var n = t.fieldNames;
  var r = [];
  var o = d(n);
  var i = o.label;
  var a = o.value;
  var s = o.options;
  function c(e, t) {
    e.forEach(function (e) {
      var n = e[i];
      if (t || !(s in e)) {
        r.push({
          key: u(e, r.length),
          groupOption: t,
          data: e,
          label: n,
          value: e[a]
        });
      } else {
        r.push({
          key: u(e, r.length),
          group: !0,
          data: e,
          label: n
        });
        c(e[s], !0);
      }
    });
  }
  c(e, !1);
  return r;
}
function f(e) {
  var t = Object(s.a)({}, e);
  if (!("props" in t)) {
    Object.defineProperty(t, "props", {
      get: function () {
        Object(c.a)(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
        return t;
      }
    });
  }
  return t;
}
function h(e, t) {
  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  var r = n.prevValueOptions;
  var o = void 0 === r ? [] : r;
  var i = new Map();
  t.forEach(function (e) {
    var t = e.data;
    var n = e.group;
    var r = e.value;
    if (!n) {
      i.set(r, t);
    }
  });
  return e.map(function (e) {
    var t = i.get(e);
    if (!t) {
      t = Object(s.a)({}, o.find(function (t) {
        return t._INTERNAL_OPTION_VALUE_ === e;
      }));
    }
    return f(t);
  });
}
var m = function (e, t) {
  var n = t.options;
  var r = t.prevValueMap;
  var o = t.labelInValue;
  var i = t.optionLabelProp;
  var s = h([e], n)[0];
  var l = {
    value: e
  };
  var u = o ? r.get(e) : void 0;
  if (u && "object" === Object(a.a)(u) && "label" in u) {
    l.label = u.label;
    if (s && "string" === typeof u.label && "string" === typeof s[i] && u.label.trim() !== s[i].trim()) {
      Object(c.a)(!1, "`label` of `value` is not same as `label` in Select options.");
    }
  } else {
    if (s && i in s) {
      l.label = s[i];
    } else {
      l.label = e;
      l.isCacheable = !0;
    }
  }
  l.key = l.value;
  return l;
};
function g(e) {
  return Object(l.d)(e).join("");
}
function _(e, t, n) {
  var r;
  var o = n.optionFilterProp;
  var a = n.filterOption;
  var c = [];
  return !1 === a ? Object(i.a)(t) : (r = "function" === typeof a ? a : function (e) {
    return function (t, n) {
      var r = t.toLowerCase();
      return "options" in n ? g(n.label).toLowerCase().includes(r) : g(n[e]).toLowerCase().includes(r);
    };
  }(o), t.forEach(function (t) {
    if ("options" in t) {
      if (r(e, t)) {
        c.push(t);
      } else {
        var n = t.options.filter(function (t) {
          return r(e, t);
        });
        if (n.length) {
          c.push(Object(s.a)(Object(s.a)({}, t), {}, {
            options: n
          }));
        }
      }
    } else if (r(e, f(t))) {
      c.push(t);
    }
  }), c);
}
function v(e, t) {
  if (!t || !t.length) {
    return null;
  }
  var n = !1;
  var r = function e(t, r) {
    var a = Object(o.a)(r);
    var s = a[0];
    var c = a.slice(1);
    if (!s) {
      return [t];
    }
    var l = t.split(s);
    n = n || l.length > 1;
    return l.reduce(function (t, n) {
      return [].concat(Object(i.a)(t), Object(i.a)(e(n, c)));
    }, []).filter(function (e) {
      return e;
    });
  }(e, t);
  return n ? r : null;
}
function b(e, t) {
  return h([e], t)[0].disabled;
}
function y(e, t, n, o) {
  var a = Object(l.d)(t).slice().sort();
  var s = Object(i.a)(e);
  var c = new Set();
  e.forEach(function (e) {
    if (e.options) {
      e.options.forEach(function (e) {
        c.add(e.value);
      });
    } else {
      c.add(e.value);
    }
  });
  a.forEach(function (e) {
    var t;
    var i = o ? e.value : e;
    if (!c.has(i)) {
      s.push(o ? (t = {}, Object(r.a)(t, n, e.label), Object(r.a)(t, "value", i), t) : {
        value: i
      });
    }
  });
  return s;
}
export default d;