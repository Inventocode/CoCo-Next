"use strict";

require("../935/index");
var r = require("../1626/86/index");
var o = require("./472");
var i = require("../1738/1249");
var a = require("../1738/398");
var s = require("../1731/752");
var c = require("../1738/531");
var l = require("./1216");
var u = require("../1738/423/index");
var d = require("../1738/635");
var p = require("../1738/332");
var f = require("./632");
var h = require("./824");
var m = require("../1659/241");
var g = require("../1626/231");
var _ = require("../1738/310");
var v = require("./575");
var b = require("./627");
var y = require("./933");
var E = require("./823");
var O = require("../1735/247/index");
var w = o("fetch");
var C = o("Request");
var T = C && C.prototype;
var S = o("Headers");
var I = O("iterator");
var A = u.set;
var j = u.getterFor("URLSearchParams");
var N = u.getterFor("URLSearchParamsIterator");
var R = /\+/g;
var k = Array(4);
var x = function (e) {
  return k[e - 1] || (k[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"));
};
var D = function (e) {
  try {
    return decodeURIComponent(e);
  } catch (t) {
    return e;
  }
};
var M = function (e) {
  var t = e.replace(R, " ");
  var n = 4;
  try {
    return decodeURIComponent(t);
  } catch (r) {
    for (; n;) {
      t = t.replace(x(n--), D);
    }
    return t;
  }
};
var L = /[!'()~]|%20/g;
var P = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+"
};
var B = function (e) {
  return P[e];
};
var F = function (e) {
  return encodeURIComponent(e).replace(L, B);
};
var G = function (e, t) {
  if (t) {
    for (var n, r, o = t.split("&"), i = 0; i < o.length;) {
      if ((n = o[i++]).length) {
        r = n.split("=");
        e.push({
          key: M(r.shift()),
          value: M(r.join("="))
        });
      }
    }
  }
};
var U = function (e) {
  this.entries.length = 0;
  G(this.entries, e);
};
var W = function (e, t) {
  if (e < t) {
    throw TypeError("Not enough arguments");
  }
};
var H = l(function (e, t) {
  A(this, {
    type: "URLSearchParamsIterator",
    iterator: y(j(e).entries),
    kind: t
  });
}, "Iterator", function () {
  var e = N(this);
  var t = e.kind;
  var n = e.iterator.next();
  var r = n.value;
  if (!n.done) {
    n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value];
  }
  return n;
});
var V = function () {
  d(this, V, "URLSearchParams");
  var e;
  var t;
  var n;
  var r;
  var o;
  var i;
  var a;
  var s;
  var c;
  var l = arguments.length > 0 ? arguments[0] : void 0;
  var u = this;
  var f = [];
  if (A(u, {
    type: "URLSearchParams",
    entries: f,
    updateURL: function () {},
    updateSearchParams: U
  }), void 0 !== l) {
    if (g(l)) {
      if ("function" === typeof (e = E(l))) {
        for (n = (t = y(l, e)).next; !(r = n.call(t)).done;) {
          if ((a = (i = (o = y(m(r.value))).next).call(o)).done || (s = i.call(o)).done || !i.call(o).done) {
            throw TypeError("Expected sequence with length 2");
          }
          f.push({
            key: _(a.value),
            value: _(s.value)
          });
        }
      } else {
        for (c in l) if (p(l, c)) {
          f.push({
            key: c,
            value: _(l[c])
          });
        }
      }
    } else {
      G(f, "string" === typeof l ? "?" === l.charAt(0) ? l.slice(1) : l : _(l));
    }
  }
};
var z = V.prototype;
if (s(z, {
  append: function (e, t) {
    W(arguments.length, 2);
    var n = j(this);
    n.entries.push({
      key: _(e),
      value: _(t)
    });
    n.updateURL();
  },
  delete: function (e) {
    W(arguments.length, 1);
    for (var t = j(this), n = t.entries, r = _(e), o = 0; o < n.length;) {
      if (n[o].key === r) {
        n.splice(o, 1);
      } else {
        o++;
      }
    }
    t.updateURL();
  },
  get: function (e) {
    W(arguments.length, 1);
    for (var t = j(this).entries, n = _(e), r = 0; r < t.length; r++) {
      if (t[r].key === n) {
        return t[r].value;
      }
    }
    return null;
  },
  getAll: function (e) {
    W(arguments.length, 1);
    for (var t = j(this).entries, n = _(e), r = [], o = 0; o < t.length; o++) {
      if (t[o].key === n) {
        r.push(t[o].value);
      }
    }
    return r;
  },
  has: function (e) {
    W(arguments.length, 1);
    for (var t = j(this).entries, n = _(e), r = 0; r < t.length;) {
      if (t[r++].key === n) {
        return !0;
      }
    }
    return !1;
  },
  set: function (e, t) {
    W(arguments.length, 1);
    for (var n, r = j(this), o = r.entries, i = !1, a = _(e), s = _(t), c = 0; c < o.length; c++) {
      if ((n = o[c]).key === a) {
        if (i) {
          o.splice(c--, 1);
        } else {
          i = !0;
          n.value = s;
        }
      }
    }
    if (!i) {
      o.push({
        key: a,
        value: s
      });
    }
    r.updateURL();
  },
  sort: function () {
    var e;
    var t;
    var n;
    var r = j(this);
    var o = r.entries;
    var i = o.slice();
    for (o.length = 0, n = 0; n < i.length; n++) {
      for (e = i[n], t = 0; t < n; t++) {
        if (o[t].key > e.key) {
          o.splice(t, 0, e);
          break;
        }
      }
      if (t === n) {
        o.push(e);
      }
    }
    r.updateURL();
  },
  forEach: function (e) {
    for (var t, n = j(this).entries, r = f(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) {
      r((t = n[o++]).value, t.key, this);
    }
  },
  keys: function () {
    return new H(this, "keys");
  },
  values: function () {
    return new H(this, "values");
  },
  entries: function () {
    return new H(this, "entries");
  }
}, {
  enumerable: !0
}), a(z, I, z.entries), a(z, "toString", function () {
  for (var e, t = j(this).entries, n = [], r = 0; r < t.length;) {
    e = t[r++];
    n.push(F(e.key) + "=" + F(e.value));
  }
  return n.join("&");
}, {
  enumerable: !0
}), c(V, "URLSearchParams"), r({
  global: !0,
  forced: !i
}, {
  URLSearchParams: V
}), !i && "function" == typeof S) {
  var Y = function (e) {
    if (g(e)) {
      var t;
      var n = e.body;
      if ("URLSearchParams" === h(n)) {
        if (!(t = e.headers ? new S(e.headers) : new S()).has("content-type")) {
          t.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
        }
        return v(e, {
          body: b(0, String(n)),
          headers: b(0, t)
        });
      }
    }
    return e;
  };
  if ("function" == typeof w && r({
    global: !0,
    enumerable: !0,
    forced: !0
  }, {
    fetch: function (e) {
      return w(e, arguments.length > 1 ? Y(arguments[1]) : {});
    }
  }), "function" == typeof C) {
    var K = function (e) {
      d(this, K, "Request");
      return new C(e, arguments.length > 1 ? Y(arguments[1]) : {});
    };
    T.constructor = K;
    K.prototype = T;
    r({
      global: !0,
      forced: !0
    }, {
      Request: K
    });
  }
}
module.exports = {
  URLSearchParams: V,
  getState: j
};