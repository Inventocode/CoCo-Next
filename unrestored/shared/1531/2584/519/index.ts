"use strict";

export { d as a };
export { p as e };
export { h as d };
export { m as f };
export { _ as c };
export { v as g };
export { b as h };
export { y as b };
import r = require("../29");
import o = require("./772");
import i = require("../80/index");
import a = require("../108");
import s = require("../20");
import c = require("../397");
import l = require("../487");
function u(e, t) {
  var n;
  var r = e.key;
  if ("value" in e) {
    n = e.value;
  }
  return null !== r && undefined !== r ? r : undefined !== n ? n : "rc-index-key-".concat(t);
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
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {};
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
          group: true,
          data: e,
          label: n
        });
        c(e[s], true);
      }
    });
  }
  c(e, false);
  return r;
}
function f(e) {
  var t = s.a({}, e);
  if (!("props" in t)) {
    Object.defineProperty(t, "props", {
      get: function () {
        c.a(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`.");
        return t;
      }
    });
  }
  return t;
}
function h(e, t) {
  var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {};
  var r = n.prevValueOptions;
  var o = undefined === r ? [] : r;
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
      t = s.a({}, o.find(function (t) {
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
  var u = o ? r.get(e) : undefined;
  if (u && "object" === a.a(u) && "label" in u) {
    l.label = u.label;
    if (s && "string" === typeof u.label && "string" === typeof s[i] && u.label.trim() !== s[i].trim()) {
      c.a(false, "`label` of `value` is not same as `label` in Select options.");
    }
  } else {
    if (s && i in s) {
      l.label = s[i];
    } else {
      l.label = e;
      l.isCacheable = true;
    }
  }
  l.key = l.value;
  return l;
};
function g(e) {
  return l.d(e).join("");
}
function _(e, t, n) {
  var r;
  var o = n.optionFilterProp;
  var a = n.filterOption;
  var c = [];
  return false === a ? i.a(t) : (r = "function" === typeof a ? a : function (e) {
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
          c.push(s.a(s.a({}, t), {}, {
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
  var n = false;
  var r = function e(t, r) {
    var a = o.a(r);
    var s = a[0];
    var c = a.slice(1);
    if (!s) {
      return [t];
    }
    var l = t.split(s);
    n = n || l.length > 1;
    return l.reduce(function (t, n) {
      return [].concat(i.a(t), i.a(e(n, c)));
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
  var a = l.d(t).slice().sort();
  var s = i.a(e);
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
      s.push(o ? (t = {}, r.a(t, n, e.label), r.a(t, "value", i), t) : {
        value: i
      });
    }
  });
  return s;
}
export default d;