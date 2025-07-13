"use strict";

import * as r from "../../1738/194";
import * as o from "../../1738/272";
import * as i from "../../1707/258/1224";
import * as a from "../../1735/422";
import * as s from "../../1731/752";
import * as c from "../../1626/167";
import * as l from "../../1738/635";
import * as u from "../../1556/473";
import * as d from "../../1728/257";
import * as p from "../../1701/576/1225";
import * as f from "./1575";
import * as h from "../../1623/495";
import * as m from "../../1659/634";
var g = require("../../1534/631").f;
var _ = require("../../1534/300/index").f;
import * as v from "../../1706/1062";
import * as b from "../../1738/531";
import * as y from "../../1738/423/index";
var E = y.get;
var O = y.set;
var w = r.ArrayBuffer;
var C = w;
var T = r.DataView;
var S = T && T.prototype;
var I = Object.prototype;
var A = r.RangeError;
var j = f.pack;
var N = f.unpack;
var R = function (e) {
  return [255 & e];
};
var k = function (e) {
  return [255 & e, e >> 8 & 255];
};
var x = function (e) {
  return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
};
var D = function (e) {
  return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
};
var M = function (e) {
  return j(e, 23, 4);
};
var L = function (e) {
  return j(e, 52, 8);
};
var P = function (e, t) {
  _(e.prototype, t, {
    get: function () {
      return E(this)[t];
    }
  });
};
var B = function (e, t, n, r) {
  var o = p(n);
  var i = E(e);
  if (o + t > i.byteLength) {
    throw A("Wrong index");
  }
  var a = E(i.buffer).bytes;
  var s = o + i.byteOffset;
  var c = a.slice(s, s + t);
  return r ? c : c.reverse();
};
var F = function (e, t, n, r, o, i) {
  var a = p(n);
  var s = E(e);
  if (a + t > s.byteLength) {
    throw A("Wrong index");
  }
  for (var c = E(s.buffer).bytes, l = a + s.byteOffset, u = r(+o), d = 0; d < t; d++) {
    c[l + d] = u[i ? d : t - d - 1];
  }
};
if (i) {
  if (!c(function () {
    w(1);
  }) || !c(function () {
    new w(-1);
  }) || c(function () {
    new w();
    new w(1.5);
    new w(NaN);
    return "ArrayBuffer" != w.name;
  })) {
    for (var G, U = (C = function (e) {
        l(this, C);
        return new w(p(e));
      }).prototype = w.prototype, W = g(w), H = 0; W.length > H;) {
      if (!((G = W[H++]) in C)) {
        a(C, G, w[G]);
      }
    }
    U.constructor = C;
  }
  if (m && h(S) !== I) {
    m(S, I);
  }
  var V = new T(new C(2));
  var z = S.setInt8;
  V.setInt8(0, 2147483648);
  V.setInt8(1, 2147483649);
  if (!(!V.getInt8(0) && V.getInt8(1))) {
    s(S, {
      setInt8: function (e, t) {
        z.call(this, e, t << 24 >> 24);
      },
      setUint8: function (e, t) {
        z.call(this, e, t << 24 >> 24);
      }
    }, {
      unsafe: !0
    });
  }
} else {
  C = function (e) {
    l(this, C, "ArrayBuffer");
    var t = p(e);
    O(this, {
      bytes: v.call(new Array(t), 0),
      byteLength: t
    });
    if (!o) {
      this.byteLength = t;
    }
  };
  T = function (e, t, n) {
    l(this, T, "DataView");
    l(e, C, "DataView");
    var r = E(e).byteLength;
    var i = u(t);
    if (i < 0 || i > r) {
      throw A("Wrong offset");
    }
    if (i + (n = void 0 === n ? r - i : d(n)) > r) {
      throw A("Wrong length");
    }
    O(this, {
      buffer: e,
      byteLength: n,
      byteOffset: i
    });
    if (!o) {
      this.buffer = e;
      this.byteLength = n;
      this.byteOffset = i;
    }
  };
  if (o) {
    P(C, "byteLength");
    P(T, "buffer");
    P(T, "byteLength");
    P(T, "byteOffset");
  }
  s(T.prototype, {
    getInt8: function (e) {
      return B(this, 1, e)[0] << 24 >> 24;
    },
    getUint8: function (e) {
      return B(this, 1, e)[0];
    },
    getInt16: function (e) {
      var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
      return (t[1] << 8 | t[0]) << 16 >> 16;
    },
    getUint16: function (e) {
      var t = B(this, 2, e, arguments.length > 1 ? arguments[1] : void 0);
      return t[1] << 8 | t[0];
    },
    getInt32: function (e) {
      return D(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0));
    },
    getUint32: function (e) {
      return D(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0)) >>> 0;
    },
    getFloat32: function (e) {
      return N(B(this, 4, e, arguments.length > 1 ? arguments[1] : void 0), 23);
    },
    getFloat64: function (e) {
      return N(B(this, 8, e, arguments.length > 1 ? arguments[1] : void 0), 52);
    },
    setInt8: function (e, t) {
      F(this, 1, e, R, t);
    },
    setUint8: function (e, t) {
      F(this, 1, e, R, t);
    },
    setInt16: function (e, t) {
      F(this, 2, e, k, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint16: function (e, t) {
      F(this, 2, e, k, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setInt32: function (e, t) {
      F(this, 4, e, x, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setUint32: function (e, t) {
      F(this, 4, e, x, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat32: function (e, t) {
      F(this, 4, e, M, t, arguments.length > 2 ? arguments[2] : void 0);
    },
    setFloat64: function (e, t) {
      F(this, 8, e, L, t, arguments.length > 2 ? arguments[2] : void 0);
    }
  });
}
b(C, "ArrayBuffer");
b(T, "DataView");
module.exports = {
  ArrayBuffer: C,
  DataView: T
};