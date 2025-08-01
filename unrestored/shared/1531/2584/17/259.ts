if ("undefined" != typeof self) {
  self;
}
module.exports = function (e) {
  var t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    e[r].call(i.exports, i, i.exports, n);
    i.l = !0;
    return i.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, r) {
    if (!n.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }
  };
  n.r = function (e) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  };
  n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) {
      return e;
    }
    if (4 & t && "object" == typeof e && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) {
      for (var i in e) n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return r;
  };
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "";
  return n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.vec2 = void 0;
  var r = function (e) {
    if (e && e.__esModule) {
      return e;
    }
    var t = {};
    if (null != e) {
      for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = e[n];
      }
    }
    t.default = e;
    return t;
  }(n(1));
  t.vec2 = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.forEach = t.sqrLen = t.sqrDist = t.dist = t.div = t.mul = t.sub = t.len = void 0;
  t.create = i;
  t.clone = function (e) {
    var t = new r.ARRAY_TYPE(2);
    t[0] = e[0];
    t[1] = e[1];
    return t;
  };
  t.fromValues = function (e, t) {
    var n = new r.ARRAY_TYPE(2);
    n[0] = e;
    n[1] = t;
    return n;
  };
  t.copy = function (e, t) {
    e[0] = t[0];
    e[1] = t[1];
    return e;
  };
  t.set = function (e, t, n) {
    e[0] = t;
    e[1] = n;
    return e;
  };
  t.add = function (e, t, n) {
    e[0] = t[0] + n[0];
    e[1] = t[1] + n[1];
    return e;
  };
  t.subtract = o;
  t.multiply = a;
  t.divide = s;
  t.ceil = function (e, t) {
    e[0] = Math.ceil(t[0]);
    e[1] = Math.ceil(t[1]);
    return e;
  };
  t.floor = function (e, t) {
    e[0] = Math.floor(t[0]);
    e[1] = Math.floor(t[1]);
    return e;
  };
  t.min = function (e, t, n) {
    e[0] = Math.min(t[0], n[0]);
    e[1] = Math.min(t[1], n[1]);
    return e;
  };
  t.max = function (e, t, n) {
    e[0] = Math.max(t[0], n[0]);
    e[1] = Math.max(t[1], n[1]);
    return e;
  };
  t.round = function (e, t) {
    e[0] = Math.round(t[0]);
    e[1] = Math.round(t[1]);
    return e;
  };
  t.scale = function (e, t, n) {
    e[0] = t[0] * n;
    e[1] = t[1] * n;
    return e;
  };
  t.scaleAndAdd = function (e, t, n, r) {
    e[0] = t[0] + n[0] * r;
    e[1] = t[1] + n[1] * r;
    return e;
  };
  t.distance = c;
  t.squaredDistance = u;
  t.length = l;
  t.squaredLength = f;
  t.negate = function (e, t) {
    e[0] = -t[0];
    e[1] = -t[1];
    return e;
  };
  t.inverse = function (e, t) {
    e[0] = 1 / t[0];
    e[1] = 1 / t[1];
    return e;
  };
  t.normalize = function (e, t) {
    var n = t[0];
    var r = t[1];
    var i = n * n + r * r;
    if (i > 0) {
      i = 1 / Math.sqrt(i);
      e[0] = t[0] * i;
      e[1] = t[1] * i;
    }
    return e;
  };
  t.dot = function (e, t) {
    return e[0] * t[0] + e[1] * t[1];
  };
  t.cross = function (e, t, n) {
    var r = t[0] * n[1] - t[1] * n[0];
    e[0] = e[1] = 0;
    e[2] = r;
    return e;
  };
  t.lerp = function (e, t, n, r) {
    var i = t[0];
    var o = t[1];
    e[0] = i + r * (n[0] - i);
    e[1] = o + r * (n[1] - o);
    return e;
  };
  t.random = function (e, t) {
    t = t || 1;
    var n = 2 * r.RANDOM() * Math.PI;
    e[0] = Math.cos(n) * t;
    e[1] = Math.sin(n) * t;
    return e;
  };
  t.transformMat2 = function (e, t, n) {
    var r = t[0];
    var i = t[1];
    e[0] = n[0] * r + n[2] * i;
    e[1] = n[1] * r + n[3] * i;
    return e;
  };
  t.transformMat2d = function (e, t, n) {
    var r = t[0];
    var i = t[1];
    e[0] = n[0] * r + n[2] * i + n[4];
    e[1] = n[1] * r + n[3] * i + n[5];
    return e;
  };
  t.transformMat3 = function (e, t, n) {
    var r = t[0];
    var i = t[1];
    e[0] = n[0] * r + n[3] * i + n[6];
    e[1] = n[1] * r + n[4] * i + n[7];
    return e;
  };
  t.transformMat4 = function (e, t, n) {
    var r = t[0];
    var i = t[1];
    e[0] = n[0] * r + n[4] * i + n[12];
    e[1] = n[1] * r + n[5] * i + n[13];
    return e;
  };
  t.rotate = function (e, t, n, r) {
    var i = t[0] - n[0];
    var o = t[1] - n[1];
    var a = Math.sin(r);
    var s = Math.cos(r);
    e[0] = i * s - o * a + n[0];
    e[1] = i * a + o * s + n[1];
    return e;
  };
  t.angle = function (e, t) {
    var n = e[0];
    var r = e[1];
    var i = t[0];
    var o = t[1];
    var a = n * n + r * r;
    if (a > 0) {
      a = 1 / Math.sqrt(a);
    }
    var s = i * i + o * o;
    if (s > 0) {
      s = 1 / Math.sqrt(s);
    }
    var c = (n * i + r * o) * a * s;
    return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c);
  };
  t.str = function (e) {
    return "vec2(" + e[0] + ", " + e[1] + ")";
  };
  t.exactEquals = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  };
  t.equals = function (e, t) {
    var n = e[0];
    var i = e[1];
    var o = t[0];
    var a = t[1];
    return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a));
  };
  var r = function (e) {
    if (e && e.__esModule) {
      return e;
    }
    var t = {};
    if (null != e) {
      for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
        t[n] = e[n];
      }
    }
    t.default = e;
    return t;
  }(n(2));
  function i() {
    var e = new r.ARRAY_TYPE(2);
    if (r.ARRAY_TYPE != Float32Array) {
      e[0] = 0;
      e[1] = 0;
    }
    return e;
  }
  function o(e, t, n) {
    e[0] = t[0] - n[0];
    e[1] = t[1] - n[1];
    return e;
  }
  function a(e, t, n) {
    e[0] = t[0] * n[0];
    e[1] = t[1] * n[1];
    return e;
  }
  function s(e, t, n) {
    e[0] = t[0] / n[0];
    e[1] = t[1] / n[1];
    return e;
  }
  function c(e, t) {
    var n = t[0] - e[0];
    var r = t[1] - e[1];
    return Math.sqrt(n * n + r * r);
  }
  function u(e, t) {
    var n = t[0] - e[0];
    var r = t[1] - e[1];
    return n * n + r * r;
  }
  function l(e) {
    var t = e[0];
    var n = e[1];
    return Math.sqrt(t * t + n * n);
  }
  function f(e) {
    var t = e[0];
    var n = e[1];
    return t * t + n * n;
  }
  t.len = l;
  t.sub = o;
  t.mul = a;
  t.div = s;
  t.dist = c;
  t.sqrDist = u;
  t.sqrLen = f;
  t.forEach = function () {
    var e = i();
    return function (t, n, r, i, o, a) {
      var s;
      var c = void 0;
      for (n || (n = 2), r || (r = 0), s = i ? Math.min(i * n + r, t.length) : t.length, c = r; c < s; c += n) {
        e[0] = t[c];
        e[1] = t[c + 1];
        o(e, e, a);
        t[c] = e[0];
        t[c + 1] = e[1];
      }
      return t;
    };
  }();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  t.setMatrixArrayType = function (e) {
    t.ARRAY_TYPE = e;
  };
  t.toRadian = function (e) {
    return e * i;
  };
  t.equals = function (e, t) {
    return Math.abs(e - t) <= r * Math.max(1, Math.abs(e), Math.abs(t));
  };
  var r = t.EPSILON = 1e-6;
  t.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array;
  t.RANDOM = Math.random;
  var i = Math.PI / 180;
}]);