"use strict";

var r = {};
function i(e) {
  if (e) {
    e.value = !0;
  }
}
function o() {}
function a(e) {
  if (void 0 === e.size) {
    e.size = e.__iterate(c);
  }
  return e.size;
}
function s(e, t) {
  if ("number" !== typeof t) {
    var n = t >>> 0;
    if ("" + n !== t || 4294967295 === n) {
      return NaN;
    }
    t = n;
  }
  return t < 0 ? a(e) + t : t;
}
function c() {
  return !0;
}
function u(e, t, n) {
  return (0 === e && !d(e) || void 0 !== n && e <= -n) && (void 0 === t || void 0 !== n && t >= n);
}
function l(e, t) {
  return h(e, t, 0);
}
function f(e, t) {
  return h(e, t, t);
}
function h(e, t, n) {
  return void 0 === e ? n : d(e) ? t === 1 / 0 ? t : 0 | Math.max(0, t + e) : void 0 === t || t === e ? e : 0 | Math.min(t, e);
}
function d(e) {
  return e < 0 || 0 === e && 1 / e === -1 / 0;
}
function p(e) {
  return Boolean(e && e["@@__IMMUTABLE_ITERABLE__@@"]);
}
function _(e) {
  return Boolean(e && e["@@__IMMUTABLE_KEYED__@@"]);
}
function A(e) {
  return Boolean(e && e["@@__IMMUTABLE_INDEXED__@@"]);
}
function g(e) {
  return _(e) || A(e);
}
var v = function (e) {
  return p(e) ? e : j(e);
};
var m = function (e) {
  function t(e) {
    return _(e) ? e : L(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  return t;
}(v);
var y = function (e) {
  function t(e) {
    return A(e) ? e : U(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  return t;
}(v);
var b = function (e) {
  function t(e) {
    return p(e) && !g(e) ? e : H(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  return t;
}(v);
v.Keyed = m;
v.Indexed = y;
v.Set = b;
function w(e) {
  return Boolean(e && e["@@__IMMUTABLE_SEQ__@@"]);
}
function E(e) {
  return Boolean(e && e["@@__IMMUTABLE_RECORD__@@"]);
}
function x(e) {
  return p(e) || E(e);
}
var C = "@@__IMMUTABLE_ORDERED__@@";
function O(e) {
  return Boolean(e && e[C]);
}
var S = "function" === typeof Symbol && Symbol.iterator;
var k = S || "@@iterator";
var T = function (e) {
  this.next = e;
};
function B(e, t, n, r) {
  var i = 0 === e ? t : 1 === e ? n : [t, n];
  if (r) {
    r.value = i;
  } else {
    r = {
      value: i,
      done: !1
    };
  }
  return r;
}
function D() {
  return {
    value: void 0,
    done: !0
  };
}
function I(e) {
  return !!P(e);
}
function F(e) {
  return e && "function" === typeof e.next;
}
function R(e) {
  var t = P(e);
  return t && t.call(e);
}
function P(e) {
  var t = e && (S && e[S] || e["@@iterator"]);
  if ("function" === typeof t) {
    return t;
  }
}
T.prototype.toString = function () {
  return "[Iterator]";
};
T.KEYS = 0;
T.VALUES = 1;
T.ENTRIES = 2;
T.prototype.inspect = T.prototype.toSource = function () {
  return this.toString();
};
T.prototype[k] = function () {
  return this;
};
var N = Object.prototype.hasOwnProperty;
function M(e) {
  return !(!Array.isArray(e) && "string" !== typeof e) || e && "object" === typeof e && Number.isInteger(e.length) && e.length >= 0 && (0 === e.length ? 1 === Object.keys(e).length : e.hasOwnProperty(e.length - 1));
}
var j = function (e) {
  function t(e) {
    return null === e || void 0 === e ? W() : x(e) ? e.toSeq() : function (e) {
      var t = Y(e);
      if (t) {
        return t;
      }
      if ("object" === typeof e) {
        return new G(e);
      }
      throw new TypeError("Expected Array or collection object of values, or keyed object: " + e);
    }(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.toSeq = function () {
    return this;
  };
  t.prototype.toString = function () {
    return this.__toString("Seq {", "}");
  };
  t.prototype.cacheResult = function () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };
  t.prototype.__iterate = function (e, t) {
    var n = this._cache;
    if (n) {
      for (var r = n.length, i = 0; i !== r;) {
        var o = n[t ? r - ++i : i++];
        if (!1 === e(o[1], o[0], this)) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(e, t);
  };
  t.prototype.__iterator = function (e, t) {
    var n = this._cache;
    if (n) {
      var r = n.length;
      var i = 0;
      return new T(function () {
        if (i === r) {
          return {
            value: void 0,
            done: !0
          };
        }
        var o = n[t ? r - ++i : i++];
        return B(e, o[0], o[1]);
      });
    }
    return this.__iteratorUncached(e, t);
  };
  return t;
}(v);
var L = function (e) {
  function t(e) {
    return null === e || void 0 === e ? W().toKeyedSeq() : p(e) ? _(e) ? e.toSeq() : e.fromEntrySeq() : E(e) ? e.toSeq() : K(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.toKeyedSeq = function () {
    return this;
  };
  return t;
}(j);
var U = function (e) {
  function t(e) {
    return null === e || void 0 === e ? W() : p(e) ? _(e) ? e.entrySeq() : e.toIndexedSeq() : E(e) ? e.toSeq().entrySeq() : X(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return t(arguments);
  };
  t.prototype.toIndexedSeq = function () {
    return this;
  };
  t.prototype.toString = function () {
    return this.__toString("Seq [", "]");
  };
  return t;
}(j);
var H = function (e) {
  function t(e) {
    return (p(e) && !g(e) ? e : U(e)).toSetSeq();
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return t(arguments);
  };
  t.prototype.toSetSeq = function () {
    return this;
  };
  return t;
}(j);
j.isSeq = w;
j.Keyed = L;
j.Set = H;
j.Indexed = U;
j.prototype["@@__IMMUTABLE_SEQ__@@"] = !0;
var V = function (e) {
  function t(e) {
    this._array = e;
    this.size = e.length;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.get = function (e, t) {
    return this.has(e) ? this._array[s(this, e)] : t;
  };
  t.prototype.__iterate = function (e, t) {
    for (var n = this._array, r = n.length, i = 0; i !== r;) {
      var o = t ? r - ++i : i++;
      if (!1 === e(n[o], o, this)) {
        break;
      }
    }
    return i;
  };
  t.prototype.__iterator = function (e, t) {
    var n = this._array;
    var r = n.length;
    var i = 0;
    return new T(function () {
      if (i === r) {
        return {
          value: void 0,
          done: !0
        };
      }
      var o = t ? r - ++i : i++;
      return B(e, o, n[o]);
    });
  };
  return t;
}(U);
var G = function (e) {
  function t(e) {
    var t = Object.keys(e);
    this._object = e;
    this._keys = t;
    this.size = t.length;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.get = function (e, t) {
    return void 0 === t || this.has(e) ? this._object[e] : t;
  };
  t.prototype.has = function (e) {
    return N.call(this._object, e);
  };
  t.prototype.__iterate = function (e, t) {
    for (var n = this._object, r = this._keys, i = r.length, o = 0; o !== i;) {
      var a = r[t ? i - ++o : o++];
      if (!1 === e(n[a], a, this)) {
        break;
      }
    }
    return o;
  };
  t.prototype.__iterator = function (e, t) {
    var n = this._object;
    var r = this._keys;
    var i = r.length;
    var o = 0;
    return new T(function () {
      if (o === i) {
        return {
          value: void 0,
          done: !0
        };
      }
      var a = r[t ? i - ++o : o++];
      return B(e, a, n[a]);
    });
  };
  return t;
}(L);
G.prototype[C] = !0;
var z;
var Q = function (e) {
  function t(e) {
    this._collection = e;
    this.size = e.length || e.size;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.__iterateUncached = function (e, t) {
    if (t) {
      return this.cacheResult().__iterate(e, t);
    }
    var n = R(this._collection);
    var r = 0;
    if (F(n)) {
      for (var i; !(i = n.next()).done && !1 !== e(i.value, r++, this);) {
        ;
      }
    }
    return r;
  };
  t.prototype.__iteratorUncached = function (e, t) {
    if (t) {
      return this.cacheResult().__iterator(e, t);
    }
    var n = R(this._collection);
    if (!F(n)) {
      return new T(D);
    }
    var r = 0;
    return new T(function () {
      var t = n.next();
      return t.done ? t : B(e, r++, t.value);
    });
  };
  return t;
}(U);
function W() {
  return z || (z = new V([]));
}
function K(e) {
  var t = Array.isArray(e) ? new V(e) : I(e) ? new Q(e) : void 0;
  if (t) {
    return t.fromEntrySeq();
  }
  if ("object" === typeof e) {
    return new G(e);
  }
  throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + e);
}
function X(e) {
  var t = Y(e);
  if (t) {
    return t;
  }
  throw new TypeError("Expected Array or collection object of values: " + e);
}
function Y(e) {
  return M(e) ? new V(e) : I(e) ? new Q(e) : void 0;
}
function q(e) {
  return Boolean(e && e["@@__IMMUTABLE_MAP__@@"]);
}
function $(e) {
  return q(e) && O(e);
}
function J(e) {
  return Boolean(e && "function" === typeof e.equals && "function" === typeof e.hashCode);
}
function Z(e, t) {
  if (e === t || e !== e && t !== t) {
    return !0;
  }
  if (!e || !t) {
    return !1;
  }
  if ("function" === typeof e.valueOf && "function" === typeof t.valueOf) {
    if ((e = e.valueOf()) === (t = t.valueOf()) || e !== e && t !== t) {
      return !0;
    }
    if (!e || !t) {
      return !1;
    }
  }
  return !!(J(e) && J(t) && e.equals(t));
}
var ee = "function" === typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (e, t) {
  var n = 65535 & (e |= 0);
  var r = 65535 & (t |= 0);
  return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16 >>> 0) | 0;
};
function te(e) {
  return e >>> 1 & 1073741824 | 3221225471 & e;
}
var ne = Object.prototype.valueOf;
function re(e) {
  switch (typeof e) {
    case "boolean":
      return e ? 1108378657 : 1108378656;
    case "number":
      return function (e) {
        if (e !== e || e === 1 / 0) {
          return 0;
        }
        var t = 0 | e;
        if (t !== e) {
          t ^= 4294967295 * e;
        }
        for (; e > 4294967295;) {
          t ^= e /= 4294967295;
        }
        return te(t);
      }(e);
    case "string":
      return e.length > fe ? function (e) {
        var t = pe[e];
        if (void 0 === t) {
          t = ie(e);
          if (de === he) {
            de = 0;
            pe = {};
          }
          de++;
          pe[e] = t;
        }
        return t;
      }(e) : ie(e);
    case "object":
    case "function":
      return null === e ? 1108378658 : "function" === typeof e.hashCode ? te(e.hashCode(e)) : (e.valueOf !== ne && "function" === typeof e.valueOf && (e = e.valueOf(e)), function (e) {
        var t;
        if (ce && void 0 !== (t = se.get(e))) {
          return t;
        }
        if (void 0 !== (t = e[le])) {
          return t;
        }
        if (!ae) {
          if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[le])) {
            return t;
          }
          if (void 0 !== (t = function (e) {
            if (e && e.nodeType > 0) {
              switch (e.nodeType) {
                case 1:
                  return e.uniqueID;
                case 9:
                  return e.documentElement && e.documentElement.uniqueID;
              }
            }
          }(e))) {
            return t;
          }
        }
        t = ++ue;
        if (1073741824 & ue) {
          ue = 0;
        }
        if (ce) {
          se.set(e, t);
        } else {
          if (void 0 !== oe && !1 === oe(e)) {
            throw new Error("Non-extensible objects are not allowed as keys.");
          }
          if (ae) {
            Object.defineProperty(e, le, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: t
            });
          } else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) {
            e.propertyIsEnumerable = function () {
              return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
            };
            e.propertyIsEnumerable[le] = t;
          } else {
            if (void 0 === e.nodeType) {
              throw new Error("Unable to set a non-enumerable property on object.");
            }
            e[le] = t;
          }
        }
        return t;
      }(e));
    case "undefined":
      return 1108378659;
    default:
      if ("function" === typeof e.toString) {
        return ie(e.toString());
      }
      throw new Error("Value type " + typeof e + " cannot be hashed.");
  }
}
function ie(e) {
  for (var t = 0, n = 0; n < e.length; n++) {
    t = 31 * t + e.charCodeAt(n) | 0;
  }
  return te(t);
}
var oe = Object.isExtensible;
var ae = function () {
  try {
    Object.defineProperty({}, "@", {});
    return !0;
  } catch (e) {
    return !1;
  }
}();
var se;
var ce = "function" === typeof WeakMap;
if (ce) {
  se = new WeakMap();
}
var ue = 0;
var le = "__immutablehash__";
if ("function" === typeof Symbol) {
  le = Symbol(le);
}
var fe = 16;
var he = 255;
var de = 0;
var pe = {};
var _e = function (e) {
  function t(e, t) {
    this._iter = e;
    this._useKeys = t;
    this.size = e.size;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.get = function (e, t) {
    return this._iter.get(e, t);
  };
  t.prototype.has = function (e) {
    return this._iter.has(e);
  };
  t.prototype.valueSeq = function () {
    return this._iter.valueSeq();
  };
  t.prototype.reverse = function () {
    var e = this;
    var t = be(this, !0);
    if (!this._useKeys) {
      t.valueSeq = function () {
        return e._iter.toSeq().reverse();
      };
    }
    return t;
  };
  t.prototype.map = function (e, t) {
    var n = this;
    var r = ye(this, e, t);
    if (!this._useKeys) {
      r.valueSeq = function () {
        return n._iter.toSeq().map(e, t);
      };
    }
    return r;
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    return this._iter.__iterate(function (t, r) {
      return e(t, r, n);
    }, t);
  };
  t.prototype.__iterator = function (e, t) {
    return this._iter.__iterator(e, t);
  };
  return t;
}(L);
_e.prototype[C] = !0;
var Ae = function (e) {
  function t(e) {
    this._iter = e;
    this.size = e.size;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.includes = function (e) {
    return this._iter.includes(e);
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    var r = 0;
    if (t) {
      a(this);
    }
    return this._iter.__iterate(function (i) {
      return e(i, t ? n.size - ++r : r++, n);
    }, t);
  };
  t.prototype.__iterator = function (e, t) {
    var n = this;
    var r = this._iter.__iterator(1, t);
    var i = 0;
    if (t) {
      a(this);
    }
    return new T(function () {
      var o = r.next();
      return o.done ? o : B(e, t ? n.size - ++i : i++, o.value, o);
    });
  };
  return t;
}(U);
var ge = function (e) {
  function t(e) {
    this._iter = e;
    this.size = e.size;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.has = function (e) {
    return this._iter.includes(e);
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    return this._iter.__iterate(function (t) {
      return e(t, t, n);
    }, t);
  };
  t.prototype.__iterator = function (e, t) {
    var n = this._iter.__iterator(1, t);
    return new T(function () {
      var t = n.next();
      return t.done ? t : B(e, t.value, t.value, t);
    });
  };
  return t;
}(H);
var ve = function (e) {
  function t(e) {
    this._iter = e;
    this.size = e.size;
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.entrySeq = function () {
    return this._iter.toSeq();
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    return this._iter.__iterate(function (t) {
      if (t) {
        Ie(t);
        var r = p(t);
        return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n);
      }
    }, t);
  };
  t.prototype.__iterator = function (e, t) {
    var n = this._iter.__iterator(1, t);
    return new T(function () {
      for (;;) {
        var t = n.next();
        if (t.done) {
          return t;
        }
        var r = t.value;
        if (r) {
          Ie(r);
          var i = p(r);
          return B(e, i ? r.get(0) : r[0], i ? r.get(1) : r[1], t);
        }
      }
    });
  };
  return t;
}(L);
function me(e) {
  var t = Re(e);
  t._iter = e;
  t.size = e.size;
  t.flip = function () {
    return e;
  };
  t.reverse = function () {
    var t = e.reverse.apply(this);
    t.flip = function () {
      return e.reverse();
    };
    return t;
  };
  t.has = function (t) {
    return e.includes(t);
  };
  t.includes = function (t) {
    return e.has(t);
  };
  t.cacheResult = Pe;
  t.__iterateUncached = function (t, n) {
    var r = this;
    return e.__iterate(function (e, n) {
      return !1 !== t(n, e, r);
    }, n);
  };
  t.__iteratorUncached = function (t, n) {
    if (2 === t) {
      var r = e.__iterator(t, n);
      return new T(function () {
        var e = r.next();
        if (!e.done) {
          var t = e.value[0];
          e.value[0] = e.value[1];
          e.value[1] = t;
        }
        return e;
      });
    }
    return e.__iterator(1 === t ? 0 : 1, n);
  };
  return t;
}
function ye(e, t, n) {
  var i = Re(e);
  i.size = e.size;
  i.has = function (t) {
    return e.has(t);
  };
  i.get = function (i, o) {
    var a = e.get(i, r);
    return a === r ? o : t.call(n, a, i, e);
  };
  i.__iterateUncached = function (r, i) {
    var o = this;
    return e.__iterate(function (e, i, a) {
      return !1 !== r(t.call(n, e, i, a), i, o);
    }, i);
  };
  i.__iteratorUncached = function (r, i) {
    var o = e.__iterator(2, i);
    return new T(function () {
      var i = o.next();
      if (i.done) {
        return i;
      }
      var a = i.value;
      var s = a[0];
      return B(r, s, t.call(n, a[1], s, e), i);
    });
  };
  return i;
}
function be(e, t) {
  var n = this;
  var r = Re(e);
  r._iter = e;
  r.size = e.size;
  r.reverse = function () {
    return e;
  };
  if (e.flip) {
    r.flip = function () {
      var t = me(e);
      t.reverse = function () {
        return e.flip();
      };
      return t;
    };
  }
  r.get = function (n, r) {
    return e.get(t ? n : -1 - n, r);
  };
  r.has = function (n) {
    return e.has(t ? n : -1 - n);
  };
  r.includes = function (t) {
    return e.includes(t);
  };
  r.cacheResult = Pe;
  r.__iterate = function (n, r) {
    var i = this;
    var o = 0;
    if (r) {
      a(e);
    }
    return e.__iterate(function (e, a) {
      return n(e, t ? a : r ? i.size - ++o : o++, i);
    }, !r);
  };
  r.__iterator = function (r, i) {
    var o = 0;
    if (i) {
      a(e);
    }
    var s = e.__iterator(2, !i);
    return new T(function () {
      var e = s.next();
      if (e.done) {
        return e;
      }
      var a = e.value;
      return B(r, t ? a[0] : i ? n.size - ++o : o++, a[1], e);
    });
  };
  return r;
}
function we(e, t, n, i) {
  var o = Re(e);
  if (i) {
    o.has = function (i) {
      var o = e.get(i, r);
      return o !== r && !!t.call(n, o, i, e);
    };
    o.get = function (i, o) {
      var a = e.get(i, r);
      return a !== r && t.call(n, a, i, e) ? a : o;
    };
  }
  o.__iterateUncached = function (r, o) {
    var a = this;
    var s = 0;
    e.__iterate(function (e, o, c) {
      if (t.call(n, e, o, c)) {
        s++;
        return r(e, i ? o : s - 1, a);
      }
    }, o);
    return s;
  };
  o.__iteratorUncached = function (r, o) {
    var a = e.__iterator(2, o);
    var s = 0;
    return new T(function () {
      for (;;) {
        var o = a.next();
        if (o.done) {
          return o;
        }
        var c = o.value;
        var u = c[0];
        var l = c[1];
        if (t.call(n, l, u, e)) {
          return B(r, i ? u : s++, l, o);
        }
      }
    });
  };
  return o;
}
function Ee(e, t, n, r) {
  var i = e.size;
  if (u(t, n, i)) {
    return e;
  }
  var o = l(t, i);
  var a = f(n, i);
  if (o !== o || a !== a) {
    return Ee(e.toSeq().cacheResult(), t, n, r);
  }
  var c;
  var h = a - o;
  if (h === h) {
    c = h < 0 ? 0 : h;
  }
  var d = Re(e);
  d.size = 0 === c ? c : e.size && c || void 0;
  if (!r && w(e) && c >= 0) {
    d.get = function (t, n) {
      return (t = s(this, t)) >= 0 && t < c ? e.get(t + o, n) : n;
    };
  }
  d.__iterateUncached = function (t, n) {
    var i = this;
    if (0 === c) {
      return 0;
    }
    if (n) {
      return this.cacheResult().__iterate(t, n);
    }
    var a = 0;
    var s = !0;
    var u = 0;
    e.__iterate(function (e, n) {
      if (!s || !(s = a++ < o)) {
        u++;
        return !1 !== t(e, r ? n : u - 1, i) && u !== c;
      }
    });
    return u;
  };
  d.__iteratorUncached = function (t, n) {
    if (0 !== c && n) {
      return this.cacheResult().__iterator(t, n);
    }
    if (0 === c) {
      return new T(D);
    }
    var i = e.__iterator(t, n);
    var a = 0;
    var s = 0;
    return new T(function () {
      for (; a++ < o;) {
        i.next();
      }
      if (++s > c) {
        return {
          value: void 0,
          done: !0
        };
      }
      var e = i.next();
      return r || 1 === t || e.done ? e : B(t, s - 1, 0 === t ? void 0 : e.value[1], e);
    });
  };
  return d;
}
function xe(e, t, n, r) {
  var i = Re(e);
  i.__iterateUncached = function (i, o) {
    var a = this;
    if (o) {
      return this.cacheResult().__iterate(i, o);
    }
    var s = !0;
    var c = 0;
    e.__iterate(function (e, o, u) {
      if (!s || !(s = t.call(n, e, o, u))) {
        c++;
        return i(e, r ? o : c - 1, a);
      }
    });
    return c;
  };
  i.__iteratorUncached = function (i, o) {
    var a = this;
    if (o) {
      return this.cacheResult().__iterator(i, o);
    }
    var s = e.__iterator(2, o);
    var c = !0;
    var u = 0;
    return new T(function () {
      var e;
      var o;
      var l;
      do {
        if ((e = s.next()).done) {
          return r || 1 === i ? e : B(i, u++, 0 === i ? void 0 : e.value[1], e);
        }
        var f = e.value;
        o = f[0];
        l = f[1];
        if (c) {
          c = t.call(n, l, o, a);
        }
      } while (c);
      return 2 === i ? e : B(i, o, l, e);
    });
  };
  return i;
}
function Ce(e, t) {
  var n = _(e);
  var r = [e].concat(t).map(function (e) {
    if (p(e)) {
      if (n) {
        e = m(e);
      }
    } else {
      e = n ? K(e) : X(Array.isArray(e) ? e : [e]);
    }
    return e;
  }).filter(function (e) {
    return 0 !== e.size;
  });
  if (0 === r.length) {
    return e;
  }
  if (1 === r.length) {
    var i = r[0];
    if (i === e || n && _(i) || A(e) && A(i)) {
      return i;
    }
  }
  var o = new V(r);
  if (n) {
    o = o.toKeyedSeq();
  } else {
    if (!A(e)) {
      o = o.toSetSeq();
    }
  }
  (o = o.flatten(!0)).size = r.reduce(function (e, t) {
    if (void 0 !== e) {
      var n = t.size;
      if (void 0 !== n) {
        return e + n;
      }
    }
  }, 0);
  return o;
}
function Oe(e, t, n) {
  var r = Re(e);
  r.__iterateUncached = function (i, o) {
    if (o) {
      return this.cacheResult().__iterate(i, o);
    }
    var a = 0;
    var s = !1;
    (function e(c, u) {
      c.__iterate(function (o, c) {
        if ((!t || u < t) && p(o)) {
          e(o, u + 1);
        } else {
          a++;
          if (!1 === i(o, n ? c : a - 1, r)) {
            s = !0;
          }
        }
        return !s;
      }, o);
    })(e, 0);
    return a;
  };
  r.__iteratorUncached = function (r, i) {
    if (i) {
      return this.cacheResult().__iterator(r, i);
    }
    var o = e.__iterator(r, i);
    var a = [];
    var s = 0;
    return new T(function () {
      for (; o;) {
        var e = o.next();
        if (!1 === e.done) {
          var c = e.value;
          if (2 === r && (c = c[1]), t && !(a.length < t) || !p(c)) {
            return n ? e : B(r, s++, c, e);
          }
          a.push(o);
          o = c.__iterator(r, i);
        } else {
          o = a.pop();
        }
      }
      return {
        value: void 0,
        done: !0
      };
    });
  };
  return r;
}
function Se(e, t, n) {
  if (!t) {
    t = Ne;
  }
  var r = _(e);
  var i = 0;
  var o = e.toSeq().map(function (t, r) {
    return [r, t, i++, n ? n(t, r, e) : t];
  }).valueSeq().toArray();
  o.sort(function (e, n) {
    return t(e[3], n[3]) || e[2] - n[2];
  }).forEach(r ? function (e, t) {
    o[t].length = 2;
  } : function (e, t) {
    o[t] = e[1];
  });
  return r ? L(o) : A(e) ? U(o) : H(o);
}
function ke(e, t, n) {
  if (t || (t = Ne), n) {
    var r = e.toSeq().map(function (t, r) {
      return [t, n(t, r, e)];
    }).reduce(function (e, n) {
      return Te(t, e[1], n[1]) ? n : e;
    });
    return r && r[0];
  }
  return e.reduce(function (e, n) {
    return Te(t, e, n) ? n : e;
  });
}
function Te(e, t, n) {
  var r = e(n, t);
  return 0 === r && n !== t && (void 0 === n || null === n || n !== n) || r > 0;
}
function Be(e, t, n, r) {
  var i = Re(e);
  var o = new V(n).map(function (e) {
    return e.size;
  });
  i.size = r ? o.max() : o.min();
  i.__iterate = function (e, t) {
    for (var n, r = this.__iterator(1, t), i = 0; !(n = r.next()).done && !1 !== e(n.value, i++, this);) {
      ;
    }
    return i;
  };
  i.__iteratorUncached = function (e, i) {
    var o = n.map(function (e) {
      e = v(e);
      return R(i ? e.reverse() : e);
    });
    var a = 0;
    var s = !1;
    return new T(function () {
      var n;
      if (!s) {
        n = o.map(function (e) {
          return e.next();
        });
        s = r ? n.every(function (e) {
          return e.done;
        }) : n.some(function (e) {
          return e.done;
        });
      }
      return s ? {
        value: void 0,
        done: !0
      } : B(e, a++, t.apply(null, n.map(function (e) {
        return e.value;
      })));
    });
  };
  return i;
}
function De(e, t) {
  return e === t ? e : w(e) ? t : e.constructor(t);
}
function Ie(e) {
  if (e !== Object(e)) {
    throw new TypeError("Expected [K, V] tuple: " + e);
  }
}
function Fe(e) {
  return _(e) ? m : A(e) ? y : b;
}
function Re(e) {
  return Object.create((_(e) ? L : A(e) ? U : H).prototype);
}
function Pe() {
  return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : j.prototype.cacheResult.call(this);
}
function Ne(e, t) {
  return void 0 === e && void 0 === t ? 0 : void 0 === e ? 1 : void 0 === t ? -1 : e > t ? 1 : e < t ? -1 : 0;
}
function Me(e, t) {
  t = t || 0;
  for (var n = Math.max(0, e.length - t), r = new Array(n), i = 0; i < n; i++) {
    r[i] = e[i + t];
  }
  return r;
}
function je(e, t) {
  if (!e) {
    throw new Error(t);
  }
}
function Le(e) {
  je(e !== 1 / 0, "Cannot perform this action with an infinite size.");
}
function Ue(e) {
  if (M(e) && "string" !== typeof e) {
    return e;
  }
  if (O(e)) {
    return e.toArray();
  }
  throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + e);
}
function He(e) {
  return e && ("function" !== typeof e.constructor || "Object" === e.constructor.name);
}
function Ve(e) {
  return "object" === typeof e && (x(e) || Array.isArray(e) || He(e));
}
function Ge(e) {
  try {
    return "string" === typeof e ? JSON.stringify(e) : String(e);
  } catch (t) {
    return JSON.stringify(e);
  }
}
function ze(e, t) {
  return x(e) ? e.has(t) : Ve(e) && N.call(e, t);
}
function Qe(e, t, n) {
  return x(e) ? e.get(t, n) : ze(e, t) ? "function" === typeof e.get ? e.get(t) : e[t] : n;
}
function We(e) {
  if (Array.isArray(e)) {
    return Me(e);
  }
  var t = {};
  for (var n in e) if (N.call(e, n)) {
    t[n] = e[n];
  }
  return t;
}
function Ke(e, t) {
  if (!Ve(e)) {
    throw new TypeError("Cannot update non-data-structure value: " + e);
  }
  if (x(e)) {
    if (!e.remove) {
      throw new TypeError("Cannot update immutable value without .remove() method: " + e);
    }
    return e.remove(t);
  }
  if (!N.call(e, t)) {
    return e;
  }
  var n = We(e);
  if (Array.isArray(n)) {
    n.splice(t, 1);
  } else {
    delete n[t];
  }
  return n;
}
function Xe(e, t, n) {
  if (!Ve(e)) {
    throw new TypeError("Cannot update non-data-structure value: " + e);
  }
  if (x(e)) {
    if (!e.set) {
      throw new TypeError("Cannot update immutable value without .set() method: " + e);
    }
    return e.set(t, n);
  }
  if (N.call(e, t) && n === e[t]) {
    return e;
  }
  var r = We(e);
  r[t] = n;
  return r;
}
function Ye(e, t, n, i) {
  if (!i) {
    i = n;
    n = void 0;
  }
  var o = function e(t, n, i, o, a, s) {
    var c = n === r;
    if (o === i.length) {
      var u = c ? a : n;
      var l = s(u);
      return l === u ? n : l;
    }
    if (!c && !Ve(n)) {
      throw new TypeError("Cannot update within non-data-structure value in path [" + i.slice(0, o).map(Ge) + "]: " + n);
    }
    var f = i[o];
    var h = c ? r : Qe(n, f, r);
    var d = e(h === r ? t : x(h), h, i, o + 1, a, s);
    return d === h ? n : d === r ? Ke(n, f) : Xe(c ? t ? kt() : {} : n, f, d);
  }(x(e), e, Ue(t), 0, n, i);
  return o === r ? n : o;
}
function qe(e, t, n) {
  return Ye(e, t, r, function () {
    return n;
  });
}
function $e(e, t) {
  return qe(this, e, t);
}
function Je(e, t) {
  return Ye(e, t, function () {
    return r;
  });
}
function Ze(e) {
  return Je(this, e);
}
function et(e, t, n, r) {
  return Ye(e, [t], n, r);
}
function tt(e, t, n) {
  return 1 === arguments.length ? e(this) : et(this, e, t, n);
}
function nt(e, t, n) {
  return Ye(this, e, t, n);
}
function rt() {
  for (var e = [], t = arguments.length; t--;) {
    e[t] = arguments[t];
  }
  return ot(this, e);
}
function it(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  if ("function" !== typeof e) {
    throw new TypeError("Invalid merger function: " + e);
  }
  return ot(this, t, e);
}
function ot(e, t, n) {
  for (var i = [], o = 0; o < t.length; o++) {
    var a = m(t[o]);
    if (0 !== a.size) {
      i.push(a);
    }
  }
  return 0 === i.length ? e : 0 !== e.toSeq().size || e.__ownerID || 1 !== i.length ? e.withMutations(function (e) {
    for (var t = n ? function (t, i) {
        et(e, i, r, function (e) {
          return e === r ? t : n(e, t, i);
        });
      } : function (t, n) {
        e.set(n, t);
      }, o = 0; o < i.length; o++) {
      i[o].forEach(t);
    }
  }) : e.constructor(i[0]);
}
function at(e, t, n) {
  return st(e, t, function (e) {
    return function t(n, r, i) {
      return Ve(n) && Ve(r) ? st(n, [r], t) : e ? e(n, r, i) : r;
    };
  }(n));
}
function st(e, t, n) {
  if (!Ve(e)) {
    throw new TypeError("Cannot merge into non-data-structure value: " + e);
  }
  if (x(e)) {
    return "function" === typeof n && e.mergeWith ? e.mergeWith.apply(e, [n].concat(t)) : e.merge ? e.merge.apply(e, t) : e.concat.apply(e, t);
  }
  for (var r = Array.isArray(e), i = e, o = r ? y : m, a = r ? function (t) {
      if (i === e) {
        i = We(i);
      }
      i.push(t);
    } : function (t, r) {
      var o = N.call(i, r);
      var a = o && n ? n(i[r], t, r) : t;
      if (!(o && a === i[r])) {
        if (i === e) {
          i = We(i);
        }
        i[r] = a;
      }
    }, s = 0; s < t.length; s++) {
    o(t[s]).forEach(a);
  }
  return i;
}
function ct() {
  for (var e = [], t = arguments.length; t--;) {
    e[t] = arguments[t];
  }
  return at(this, e);
}
function ut(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  return at(this, t, e);
}
function lt(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  return Ye(this, e, kt(), function (e) {
    return st(e, t);
  });
}
function ft(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1];
  }
  return Ye(this, e, kt(), function (e) {
    return at(e, t);
  });
}
function ht(e) {
  var t = this.asMutable();
  e(t);
  return t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this;
}
function dt() {
  return this.__ownerID ? this : this.__ensureOwner(new o());
}
function pt() {
  return this.__ensureOwner();
}
function _t() {
  return this.__altered;
}
Ae.prototype.cacheResult = _e.prototype.cacheResult = ge.prototype.cacheResult = ve.prototype.cacheResult = Pe;
var At = function (e) {
  function t(t) {
    return null === t || void 0 === t ? kt() : q(t) && !O(t) ? t : kt().withMutations(function (n) {
      var r = e(t);
      Le(r.size);
      r.forEach(function (e, t) {
        return n.set(t, e);
      });
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return kt().withMutations(function (t) {
      for (var n = 0; n < e.length; n += 2) {
        if (n + 1 >= e.length) {
          throw new Error("Missing value for key: " + e[n]);
        }
        t.set(e[n], e[n + 1]);
      }
    });
  };
  t.prototype.toString = function () {
    return this.__toString("Map {", "}");
  };
  t.prototype.get = function (e, t) {
    return this._root ? this._root.get(0, void 0, e, t) : t;
  };
  t.prototype.set = function (e, t) {
    return Tt(this, e, t);
  };
  t.prototype.remove = function (e) {
    return Tt(this, e, r);
  };
  t.prototype.deleteAll = function (e) {
    var t = v(e);
    return 0 === t.size ? this : this.withMutations(function (e) {
      t.forEach(function (t) {
        return e.remove(t);
      });
    });
  };
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : kt();
  };
  t.prototype.sort = function (e) {
    return Zt(Se(this, e));
  };
  t.prototype.sortBy = function (e, t) {
    return Zt(Se(this, t, e));
  };
  t.prototype.map = function (e, t) {
    return this.withMutations(function (n) {
      n.forEach(function (r, i) {
        n.set(i, e.call(t, r, i, n));
      });
    });
  };
  t.prototype.__iterator = function (e, t) {
    return new xt(this, e, t);
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    var r = 0;
    if (this._root) {
      this._root.iterate(function (t) {
        r++;
        return e(t[1], t[0], n);
      }, t);
    }
    return r;
  };
  t.prototype.__ensureOwner = function (e) {
    return e === this.__ownerID ? this : e ? St(this.size, this._root, e, this.__hash) : 0 === this.size ? kt() : (this.__ownerID = e, this.__altered = !1, this);
  };
  return t;
}(m);
At.isMap = q;
var gt = At.prototype;
gt["@@__IMMUTABLE_MAP__@@"] = !0;
gt.delete = gt.remove;
gt.removeAll = gt.deleteAll;
gt.setIn = $e;
gt.removeIn = gt.deleteIn = Ze;
gt.update = tt;
gt.updateIn = nt;
gt.merge = gt.concat = rt;
gt.mergeWith = it;
gt.mergeDeep = ct;
gt.mergeDeepWith = ut;
gt.mergeIn = lt;
gt.mergeDeepIn = ft;
gt.withMutations = ht;
gt.wasAltered = _t;
gt.asImmutable = pt;
gt["@@transducer/init"] = gt.asMutable = dt;
gt["@@transducer/step"] = function (e, t) {
  return e.set(t[0], t[1]);
};
gt["@@transducer/result"] = function (e) {
  return e.asImmutable();
};
var vt = function (e, t) {
  this.ownerID = e;
  this.entries = t;
};
vt.prototype.get = function (e, t, n, r) {
  for (var i = this.entries, o = 0, a = i.length; o < a; o++) {
    if (Z(n, i[o][0])) {
      return i[o][1];
    }
  }
  return r;
};
vt.prototype.update = function (e, t, n, a, s, c, u) {
  for (var l = s === r, f = this.entries, h = 0, d = f.length; h < d && !Z(a, f[h][0]); h++) {
    ;
  }
  var p = h < d;
  if (p ? f[h][1] === s : l) {
    return this;
  }
  if (i(u), (l || !p) && i(c), !l || 1 !== f.length) {
    if (!p && !l && f.length >= Pt) {
      return function (e, t, n, r) {
        if (!e) {
          e = new o();
        }
        for (var i = new wt(e, re(n), [n, r]), a = 0; a < t.length; a++) {
          var s = t[a];
          i = i.update(e, 0, void 0, s[0], s[1]);
        }
        return i;
      }(e, f, a, s);
    }
    var _ = e && e === this.ownerID;
    var A = _ ? f : Me(f);
    if (p) {
      if (l) {
        if (h === d - 1) {
          A.pop();
        } else {
          A[h] = A.pop();
        }
      } else {
        A[h] = [a, s];
      }
    } else {
      A.push([a, s]);
    }
    return _ ? (this.entries = A, this) : new vt(e, A);
  }
};
var mt = function (e, t, n) {
  this.ownerID = e;
  this.bitmap = t;
  this.nodes = n;
};
mt.prototype.get = function (e, t, n, r) {
  if (void 0 === t) {
    t = re(n);
  }
  var i = 1 << (31 & (0 === e ? t : t >>> e));
  var o = this.bitmap;
  return 0 === (o & i) ? r : this.nodes[Ft(o & i - 1)].get(e + 5, t, n, r);
};
mt.prototype.update = function (e, t, n, i, o, a, s) {
  if (void 0 === n) {
    n = re(i);
  }
  var c = 31 & (0 === t ? n : n >>> t);
  var u = 1 << c;
  var l = this.bitmap;
  var f = 0 !== (l & u);
  if (!f && o === r) {
    return this;
  }
  var h = Ft(l & u - 1);
  var d = this.nodes;
  var p = f ? d[h] : void 0;
  var _ = Bt(p, e, t + 5, n, i, o, a, s);
  if (_ === p) {
    return this;
  }
  if (!f && _ && d.length >= Nt) {
    return function (e, t, n, r, i) {
      for (var o = 0, a = new Array(32), s = 0; 0 !== n; s++, n >>>= 1) {
        a[s] = 1 & n ? t[o++] : void 0;
      }
      a[r] = i;
      return new yt(e, o + 1, a);
    }(e, d, l, c, _);
  }
  if (f && !_ && 2 === d.length && Dt(d[1 ^ h])) {
    return d[1 ^ h];
  }
  if (f && _ && 1 === d.length && Dt(_)) {
    return _;
  }
  var A = e && e === this.ownerID;
  var g = f ? _ ? l : l ^ u : l | u;
  var v = f ? _ ? Rt(d, h, _, A) : function (e, t, n) {
    var r = e.length - 1;
    if (n && t === r) {
      e.pop();
      return e;
    }
    for (var i = new Array(r), o = 0, a = 0; a < r; a++) {
      if (a === t) {
        o = 1;
      }
      i[a] = e[a + o];
    }
    return i;
  }(d, h, A) : function (e, t, n, r) {
    var i = e.length + 1;
    if (r && t + 1 === i) {
      e[t] = n;
      return e;
    }
    for (var o = new Array(i), a = 0, s = 0; s < i; s++) {
      if (s === t) {
        o[s] = n;
        a = -1;
      } else {
        o[s] = e[s + a];
      }
    }
    return o;
  }(d, h, _, A);
  return A ? (this.bitmap = g, this.nodes = v, this) : new mt(e, g, v);
};
var yt = function (e, t, n) {
  this.ownerID = e;
  this.count = t;
  this.nodes = n;
};
yt.prototype.get = function (e, t, n, r) {
  if (void 0 === t) {
    t = re(n);
  }
  var i = 31 & (0 === e ? t : t >>> e);
  var o = this.nodes[i];
  return o ? o.get(e + 5, t, n, r) : r;
};
yt.prototype.update = function (e, t, n, i, o, a, s) {
  if (void 0 === n) {
    n = re(i);
  }
  var c = 31 & (0 === t ? n : n >>> t);
  var u = o === r;
  var l = this.nodes;
  var f = l[c];
  if (u && !f) {
    return this;
  }
  var h = Bt(f, e, t + 5, n, i, o, a, s);
  if (h === f) {
    return this;
  }
  var d = this.count;
  if (f) {
    if (!h && --d < Mt) {
      return function (e, t, n, r) {
        for (var i = 0, o = 0, a = new Array(n), s = 0, c = 1, u = t.length; s < u; s++, c <<= 1) {
          var l = t[s];
          if (void 0 !== l && s !== r) {
            i |= c;
            a[o++] = l;
          }
        }
        return new mt(e, i, a);
      }(e, l, d, c);
    }
  } else {
    d++;
  }
  var p = e && e === this.ownerID;
  var _ = Rt(l, c, h, p);
  return p ? (this.count = d, this.nodes = _, this) : new yt(e, d, _);
};
var bt = function (e, t, n) {
  this.ownerID = e;
  this.keyHash = t;
  this.entries = n;
};
bt.prototype.get = function (e, t, n, r) {
  for (var i = this.entries, o = 0, a = i.length; o < a; o++) {
    if (Z(n, i[o][0])) {
      return i[o][1];
    }
  }
  return r;
};
bt.prototype.update = function (e, t, n, o, a, s, c) {
  if (void 0 === n) {
    n = re(o);
  }
  var u = a === r;
  if (n !== this.keyHash) {
    return u ? this : (i(c), i(s), It(this, e, t, n, [o, a]));
  }
  for (var l = this.entries, f = 0, h = l.length; f < h && !Z(o, l[f][0]); f++) {
    ;
  }
  var d = f < h;
  if (d ? l[f][1] === a : u) {
    return this;
  }
  if (i(c), (u || !d) && i(s), u && 2 === h) {
    return new wt(e, this.keyHash, l[1 ^ f]);
  }
  var p = e && e === this.ownerID;
  var _ = p ? l : Me(l);
  if (d) {
    if (u) {
      if (f === h - 1) {
        _.pop();
      } else {
        _[f] = _.pop();
      }
    } else {
      _[f] = [o, a];
    }
  } else {
    _.push([o, a]);
  }
  return p ? (this.entries = _, this) : new bt(e, this.keyHash, _);
};
var wt = function (e, t, n) {
  this.ownerID = e;
  this.keyHash = t;
  this.entry = n;
};
wt.prototype.get = function (e, t, n, r) {
  return Z(n, this.entry[0]) ? this.entry[1] : r;
};
wt.prototype.update = function (e, t, n, o, a, s, c) {
  var u = a === r;
  var l = Z(o, this.entry[0]);
  return (l ? a === this.entry[1] : u) ? this : (i(c), u ? void i(s) : l ? e && e === this.ownerID ? (this.entry[1] = a, this) : new wt(e, this.keyHash, [o, a]) : (i(s), It(this, e, t, re(o), [o, a])));
};
vt.prototype.iterate = bt.prototype.iterate = function (e, t) {
  for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++) {
    if (!1 === e(n[t ? i - r : r])) {
      return !1;
    }
  }
};
mt.prototype.iterate = yt.prototype.iterate = function (e, t) {
  for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
    var o = n[t ? i - r : r];
    if (o && !1 === o.iterate(e, t)) {
      return !1;
    }
  }
};
wt.prototype.iterate = function (e, t) {
  return e(this.entry);
};
var Et;
var xt = function (e) {
  function t(e, t, n) {
    this._type = t;
    this._reverse = n;
    this._stack = e._root && Ot(e._root);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.next = function () {
    for (var e = this._type, t = this._stack; t;) {
      var n = t.node;
      var r = t.index++;
      var i = void 0;
      if (n.entry) {
        if (0 === r) {
          return Ct(e, n.entry);
        }
      } else if (n.entries) {
        if (r <= (i = n.entries.length - 1)) {
          return Ct(e, n.entries[this._reverse ? i - r : r]);
        }
      } else if (r <= (i = n.nodes.length - 1)) {
        var o = n.nodes[this._reverse ? i - r : r];
        if (o) {
          if (o.entry) {
            return Ct(e, o.entry);
          }
          t = this._stack = Ot(o, t);
        }
        continue;
      }
      t = this._stack = this._stack.__prev;
    }
    return {
      value: void 0,
      done: !0
    };
  };
  return t;
}(T);
function Ct(e, t) {
  return B(e, t[0], t[1]);
}
function Ot(e, t) {
  return {
    node: e,
    index: 0,
    __prev: t
  };
}
function St(e, t, n, r) {
  var i = Object.create(gt);
  i.size = e;
  i._root = t;
  i.__ownerID = n;
  i.__hash = r;
  i.__altered = !1;
  return i;
}
function kt() {
  return Et || (Et = St(0));
}
function Tt(e, t, n) {
  var i;
  var o;
  if (e._root) {
    var a = {
      value: !1
    };
    var s = {
      value: !1
    };
    if (i = Bt(e._root, e.__ownerID, 0, void 0, t, n, a, s), !s.value) {
      return e;
    }
    o = e.size + (a.value ? n === r ? -1 : 1 : 0);
  } else {
    if (n === r) {
      return e;
    }
    o = 1;
    i = new vt(e.__ownerID, [[t, n]]);
  }
  return e.__ownerID ? (e.size = o, e._root = i, e.__hash = void 0, e.__altered = !0, e) : i ? St(o, i) : kt();
}
function Bt(e, t, n, o, a, s, c, u) {
  return e ? e.update(t, n, o, a, s, c, u) : s === r ? e : (i(u), i(c), new wt(t, o, [a, s]));
}
function Dt(e) {
  return e.constructor === wt || e.constructor === bt;
}
function It(e, t, n, r, i) {
  if (e.keyHash === r) {
    return new bt(t, r, [e.entry, i]);
  }
  var o;
  var a = 31 & (0 === n ? e.keyHash : e.keyHash >>> n);
  var s = 31 & (0 === n ? r : r >>> n);
  var c = a === s ? [It(e, t, n + 5, r, i)] : (o = new wt(t, r, i), a < s ? [e, o] : [o, e]);
  return new mt(t, 1 << a | 1 << s, c);
}
function Ft(e) {
  e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135;
  e += e >> 8;
  return 127 & (e += e >> 16);
}
function Rt(e, t, n, r) {
  var i = r ? e : Me(e);
  i[t] = n;
  return i;
}
var Pt = 8;
var Nt = 16;
var Mt = 8;
function jt(e) {
  return Boolean(e && e["@@__IMMUTABLE_LIST__@@"]);
}
var Lt = function (e) {
  function t(t) {
    var n = Wt();
    if (null === t || void 0 === t) {
      return n;
    }
    if (jt(t)) {
      return t;
    }
    var r = e(t);
    var i = r.size;
    return 0 === i ? n : (Le(i), i > 0 && i < 32 ? Qt(0, i, 5, null, new Ht(r.toArray())) : n.withMutations(function (e) {
      e.setSize(i);
      r.forEach(function (t, n) {
        return e.set(n, t);
      });
    }));
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return this(arguments);
  };
  t.prototype.toString = function () {
    return this.__toString("List [", "]");
  };
  t.prototype.get = function (e, t) {
    if ((e = s(this, e)) >= 0 && e < this.size) {
      var n = Yt(this, e += this._origin);
      return n && n.array[31 & e];
    }
    return t;
  };
  t.prototype.set = function (e, t) {
    return function (e, t, n) {
      if ((t = s(e, t)) !== t) {
        return e;
      }
      if (t >= e.size || t < 0) {
        return e.withMutations(function (e) {
          if (t < 0) {
            qt(e, t).set(0, n);
          } else {
            qt(e, 0, t + 1).set(t, n);
          }
        });
      }
      t += e._origin;
      var r = e._tail;
      var i = e._root;
      var o = {
        value: !1
      };
      if (t >= $t(e._capacity)) {
        r = Kt(r, e.__ownerID, 0, t, n, o);
      } else {
        i = Kt(i, e.__ownerID, e._level, t, n, o);
      }
      if (!o.value) {
        return e;
      }
      if (e.__ownerID) {
        e._root = i;
        e._tail = r;
        e.__hash = void 0;
        e.__altered = !0;
        return e;
      }
      return Qt(e._origin, e._capacity, e._level, i, r);
    }(this, e, t);
  };
  t.prototype.remove = function (e) {
    return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this;
  };
  t.prototype.insert = function (e, t) {
    return this.splice(e, 0, t);
  };
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : Wt();
  };
  t.prototype.push = function () {
    var e = arguments;
    var t = this.size;
    return this.withMutations(function (n) {
      qt(n, 0, t + e.length);
      for (var r = 0; r < e.length; r++) {
        n.set(t + r, e[r]);
      }
    });
  };
  t.prototype.pop = function () {
    return qt(this, 0, -1);
  };
  t.prototype.unshift = function () {
    var e = arguments;
    return this.withMutations(function (t) {
      qt(t, -e.length);
      for (var n = 0; n < e.length; n++) {
        t.set(n, e[n]);
      }
    });
  };
  t.prototype.shift = function () {
    return qt(this, 1);
  };
  t.prototype.concat = function () {
    for (var t = arguments, n = [], r = 0; r < arguments.length; r++) {
      var i = t[r];
      var o = e("string" !== typeof i && I(i) ? i : [i]);
      if (0 !== o.size) {
        n.push(o);
      }
    }
    return 0 === n.length ? this : 0 !== this.size || this.__ownerID || 1 !== n.length ? this.withMutations(function (e) {
      n.forEach(function (t) {
        return t.forEach(function (t) {
          return e.push(t);
        });
      });
    }) : this.constructor(n[0]);
  };
  t.prototype.setSize = function (e) {
    return qt(this, 0, e);
  };
  t.prototype.map = function (e, t) {
    var n = this;
    return this.withMutations(function (r) {
      for (var i = 0; i < n.size; i++) {
        r.set(i, e.call(t, r.get(i), i, r));
      }
    });
  };
  t.prototype.slice = function (e, t) {
    var n = this.size;
    return u(e, t, n) ? this : qt(this, l(e, n), f(t, n));
  };
  t.prototype.__iterator = function (e, t) {
    var n = t ? this.size : 0;
    var r = zt(this, t);
    return new T(function () {
      var i = r();
      return i === Gt ? {
        value: void 0,
        done: !0
      } : B(e, t ? --n : n++, i);
    });
  };
  t.prototype.__iterate = function (e, t) {
    for (var n, r = t ? this.size : 0, i = zt(this, t); (n = i()) !== Gt && !1 !== e(n, t ? --r : r++, this);) {
      ;
    }
    return r;
  };
  t.prototype.__ensureOwner = function (e) {
    return e === this.__ownerID ? this : e ? Qt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : 0 === this.size ? Wt() : (this.__ownerID = e, this.__altered = !1, this);
  };
  return t;
}(y);
Lt.isList = jt;
var Ut = Lt.prototype;
Ut["@@__IMMUTABLE_LIST__@@"] = !0;
Ut.delete = Ut.remove;
Ut.merge = Ut.concat;
Ut.setIn = $e;
Ut.deleteIn = Ut.removeIn = Ze;
Ut.update = tt;
Ut.updateIn = nt;
Ut.mergeIn = lt;
Ut.mergeDeepIn = ft;
Ut.withMutations = ht;
Ut.wasAltered = _t;
Ut.asImmutable = pt;
Ut["@@transducer/init"] = Ut.asMutable = dt;
Ut["@@transducer/step"] = function (e, t) {
  return e.push(t);
};
Ut["@@transducer/result"] = function (e) {
  return e.asImmutable();
};
var Ht = function (e, t) {
  this.array = e;
  this.ownerID = t;
};
Ht.prototype.removeBefore = function (e, t, n) {
  if (n === t ? 1 << t : 0 === this.array.length) {
    return this;
  }
  var r = n >>> t & 31;
  if (r >= this.array.length) {
    return new Ht([], e);
  }
  var i;
  var o = 0 === r;
  if (t > 0) {
    var a = this.array[r];
    if ((i = a && a.removeBefore(e, t - 5, n)) === a && o) {
      return this;
    }
  }
  if (o && !i) {
    return this;
  }
  var s = Xt(this, e);
  if (!o) {
    for (var c = 0; c < r; c++) {
      s.array[c] = void 0;
    }
  }
  if (i) {
    s.array[r] = i;
  }
  return s;
};
Ht.prototype.removeAfter = function (e, t, n) {
  if (n === (t ? 1 << t : 0) || 0 === this.array.length) {
    return this;
  }
  var r;
  var i = n - 1 >>> t & 31;
  if (i >= this.array.length) {
    return this;
  }
  if (t > 0) {
    var o = this.array[i];
    if ((r = o && o.removeAfter(e, t - 5, n)) === o && i === this.array.length - 1) {
      return this;
    }
  }
  var a = Xt(this, e);
  a.array.splice(i + 1);
  if (r) {
    a.array[i] = r;
  }
  return a;
};
var Vt;
var Gt = {};
function zt(e, t) {
  var n = e._origin;
  var r = e._capacity;
  var i = $t(r);
  var o = e._tail;
  return a(e._root, e._level, 0);
  function a(e, s, c) {
    return 0 === s ? function (e, a) {
      var s = a === i ? o && o.array : e && e.array;
      var c = a > n ? 0 : n - a;
      var u = r - a;
      if (u > 32) {
        u = 32;
      }
      return function () {
        if (c === u) {
          return Gt;
        }
        var e = t ? --u : c++;
        return s && s[e];
      };
    }(e, c) : function (e, i, o) {
      var s;
      var c = e && e.array;
      var u = o > n ? 0 : n - o >> i;
      var l = 1 + (r - o >> i);
      if (l > 32) {
        l = 32;
      }
      return function () {
        for (;;) {
          if (s) {
            var e = s();
            if (e !== Gt) {
              return e;
            }
            s = null;
          }
          if (u === l) {
            return Gt;
          }
          var n = t ? --l : u++;
          s = a(c && c[n], i - 5, o + (n << i));
        }
      };
    }(e, s, c);
  }
}
function Qt(e, t, n, r, i, o, a) {
  var s = Object.create(Ut);
  s.size = t - e;
  s._origin = e;
  s._capacity = t;
  s._level = n;
  s._root = r;
  s._tail = i;
  s.__ownerID = o;
  s.__hash = a;
  s.__altered = !1;
  return s;
}
function Wt() {
  return Vt || (Vt = Qt(0, 0, 5));
}
function Kt(e, t, n, r, o, a) {
  var s;
  var c = r >>> n & 31;
  var u = e && c < e.array.length;
  if (!u && void 0 === o) {
    return e;
  }
  if (n > 0) {
    var l = e && e.array[c];
    var f = Kt(l, t, n - 5, r, o, a);
    return f === l ? e : ((s = Xt(e, t)).array[c] = f, s);
  }
  return u && e.array[c] === o ? e : (a && i(a), s = Xt(e, t), void 0 === o && c === s.array.length - 1 ? s.array.pop() : s.array[c] = o, s);
}
function Xt(e, t) {
  return t && e && t === e.ownerID ? e : new Ht(e ? e.array.slice() : [], t);
}
function Yt(e, t) {
  if (t >= $t(e._capacity)) {
    return e._tail;
  }
  if (t < 1 << e._level + 5) {
    for (var n = e._root, r = e._level; n && r > 0;) {
      n = n.array[t >>> r & 31];
      r -= 5;
    }
    return n;
  }
}
function qt(e, t, n) {
  if (void 0 !== t) {
    t |= 0;
  }
  if (void 0 !== n) {
    n |= 0;
  }
  var r = e.__ownerID || new o();
  var i = e._origin;
  var a = e._capacity;
  var s = i + t;
  var c = void 0 === n ? a : n < 0 ? a + n : i + n;
  if (s === i && c === a) {
    return e;
  }
  if (s >= c) {
    return e.clear();
  }
  for (var u = e._level, l = e._root, f = 0; s + f < 0;) {
    l = new Ht(l && l.array.length ? [void 0, l] : [], r);
    f += 1 << (u += 5);
  }
  if (f) {
    s += f;
    i += f;
    c += f;
    a += f;
  }
  for (var h = $t(a), d = $t(c); d >= 1 << u + 5;) {
    l = new Ht(l && l.array.length ? [l] : [], r);
    u += 5;
  }
  var p = e._tail;
  var _ = d < h ? Yt(e, c - 1) : d > h ? new Ht([], r) : p;
  if (p && d > h && s < a && p.array.length) {
    for (var A = l = Xt(l, r), g = u; g > 5; g -= 5) {
      var v = h >>> g & 31;
      A = A.array[v] = Xt(A.array[v], r);
    }
    A.array[h >>> 5 & 31] = p;
  }
  if (c < a && (_ = _ && _.removeAfter(r, 0, c)), s >= d) {
    s -= d;
    c -= d;
    u = 5;
    l = null;
    _ = _ && _.removeBefore(r, 0, s);
  } else if (s > i || d < h) {
    for (f = 0; l;) {
      var m = s >>> u & 31;
      if (m !== d >>> u & 31) {
        break;
      }
      if (m) {
        f += (1 << u) * m;
      }
      u -= 5;
      l = l.array[m];
    }
    if (l && s > i) {
      l = l.removeBefore(r, u, s - f);
    }
    if (l && d < h) {
      l = l.removeAfter(r, u, d - f);
    }
    if (f) {
      s -= f;
      c -= f;
    }
  }
  return e.__ownerID ? (e.size = c - s, e._origin = s, e._capacity = c, e._level = u, e._root = l, e._tail = _, e.__hash = void 0, e.__altered = !0, e) : Qt(s, c, u, l, _);
}
function $t(e) {
  return e < 32 ? 0 : e - 1 >>> 5 << 5;
}
var Jt;
var Zt = function (e) {
  function t(e) {
    return null === e || void 0 === e ? tn() : $(e) ? e : tn().withMutations(function (t) {
      var n = m(e);
      Le(n.size);
      n.forEach(function (e, n) {
        return t.set(n, e);
      });
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return this(arguments);
  };
  t.prototype.toString = function () {
    return this.__toString("OrderedMap {", "}");
  };
  t.prototype.get = function (e, t) {
    var n = this._map.get(e);
    return void 0 !== n ? this._list.get(n)[1] : t;
  };
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : tn();
  };
  t.prototype.set = function (e, t) {
    return nn(this, e, t);
  };
  t.prototype.remove = function (e) {
    return nn(this, e, r);
  };
  t.prototype.wasAltered = function () {
    return this._map.wasAltered() || this._list.wasAltered();
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    return this._list.__iterate(function (t) {
      return t && e(t[1], t[0], n);
    }, t);
  };
  t.prototype.__iterator = function (e, t) {
    return this._list.fromEntrySeq().__iterator(e, t);
  };
  t.prototype.__ensureOwner = function (e) {
    if (e === this.__ownerID) {
      return this;
    }
    var t = this._map.__ensureOwner(e);
    var n = this._list.__ensureOwner(e);
    return e ? en(t, n, e, this.__hash) : 0 === this.size ? tn() : (this.__ownerID = e, this._map = t, this._list = n, this);
  };
  return t;
}(At);
function en(e, t, n, r) {
  var i = Object.create(Zt.prototype);
  i.size = e ? e.size : 0;
  i._map = e;
  i._list = t;
  i.__ownerID = n;
  i.__hash = r;
  return i;
}
function tn() {
  return Jt || (Jt = en(kt(), Wt()));
}
function nn(e, t, n) {
  var i;
  var o;
  var a = e._map;
  var s = e._list;
  var c = a.get(t);
  var u = void 0 !== c;
  if (n === r) {
    if (!u) {
      return e;
    }
    if (s.size >= 32 && s.size >= 2 * a.size) {
      i = (o = s.filter(function (e, t) {
        return void 0 !== e && c !== t;
      })).toKeyedSeq().map(function (e) {
        return e[0];
      }).flip().toMap();
      if (e.__ownerID) {
        i.__ownerID = o.__ownerID = e.__ownerID;
      }
    } else {
      i = a.remove(t);
      o = c === s.size - 1 ? s.pop() : s.set(c, void 0);
    }
  } else if (u) {
    if (n === s.get(c)[1]) {
      return e;
    }
    i = a;
    o = s.set(c, [t, n]);
  } else {
    i = a.set(t, s.size);
    o = s.set(s.size, [t, n]);
  }
  return e.__ownerID ? (e.size = i.size, e._map = i, e._list = o, e.__hash = void 0, e) : en(i, o);
}
Zt.isOrderedMap = $;
Zt.prototype[C] = !0;
Zt.prototype.delete = Zt.prototype.remove;
function rn(e) {
  return Boolean(e && e["@@__IMMUTABLE_STACK__@@"]);
}
var on = function (e) {
  function t(e) {
    return null === e || void 0 === e ? un() : rn(e) ? e : un().pushAll(e);
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return this(arguments);
  };
  t.prototype.toString = function () {
    return this.__toString("Stack [", "]");
  };
  t.prototype.get = function (e, t) {
    var n = this._head;
    for (e = s(this, e); n && e--;) {
      n = n.next;
    }
    return n ? n.value : t;
  };
  t.prototype.peek = function () {
    return this._head && this._head.value;
  };
  t.prototype.push = function () {
    var e = arguments;
    if (0 === arguments.length) {
      return this;
    }
    for (var t = this.size + arguments.length, n = this._head, r = arguments.length - 1; r >= 0; r--) {
      n = {
        value: e[r],
        next: n
      };
    }
    return this.__ownerID ? (this.size = t, this._head = n, this.__hash = void 0, this.__altered = !0, this) : cn(t, n);
  };
  t.prototype.pushAll = function (t) {
    if (0 === (t = e(t)).size) {
      return this;
    }
    if (0 === this.size && rn(t)) {
      return t;
    }
    Le(t.size);
    var n = this.size;
    var r = this._head;
    t.__iterate(function (e) {
      n++;
      r = {
        value: e,
        next: r
      };
    }, !0);
    return this.__ownerID ? (this.size = n, this._head = r, this.__hash = void 0, this.__altered = !0, this) : cn(n, r);
  };
  t.prototype.pop = function () {
    return this.slice(1);
  };
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : un();
  };
  t.prototype.slice = function (t, n) {
    if (u(t, n, this.size)) {
      return this;
    }
    var r = l(t, this.size);
    if (f(n, this.size) !== this.size) {
      return e.prototype.slice.call(this, t, n);
    }
    for (var i = this.size - r, o = this._head; r--;) {
      o = o.next;
    }
    return this.__ownerID ? (this.size = i, this._head = o, this.__hash = void 0, this.__altered = !0, this) : cn(i, o);
  };
  t.prototype.__ensureOwner = function (e) {
    return e === this.__ownerID ? this : e ? cn(this.size, this._head, e, this.__hash) : 0 === this.size ? un() : (this.__ownerID = e, this.__altered = !1, this);
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    if (t) {
      return new V(this.toArray()).__iterate(function (t, r) {
        return e(t, r, n);
      }, t);
    }
    for (var r = 0, i = this._head; i && !1 !== e(i.value, r++, this);) {
      i = i.next;
    }
    return r;
  };
  t.prototype.__iterator = function (e, t) {
    if (t) {
      return new V(this.toArray()).__iterator(e, t);
    }
    var n = 0;
    var r = this._head;
    return new T(function () {
      if (r) {
        var t = r.value;
        r = r.next;
        return B(e, n++, t);
      }
      return {
        value: void 0,
        done: !0
      };
    });
  };
  return t;
}(y);
on.isStack = rn;
var an;
var sn = on.prototype;
function cn(e, t, n, r) {
  var i = Object.create(sn);
  i.size = e;
  i._head = t;
  i.__ownerID = n;
  i.__hash = r;
  i.__altered = !1;
  return i;
}
function un() {
  return an || (an = cn(0));
}
sn["@@__IMMUTABLE_STACK__@@"] = !0;
sn.shift = sn.pop;
sn.unshift = sn.push;
sn.unshiftAll = sn.pushAll;
sn.withMutations = ht;
sn.wasAltered = _t;
sn.asImmutable = pt;
sn["@@transducer/init"] = sn.asMutable = dt;
sn["@@transducer/step"] = function (e, t) {
  return e.unshift(t);
};
sn["@@transducer/result"] = function (e) {
  return e.asImmutable();
};
function ln(e) {
  return Boolean(e && e["@@__IMMUTABLE_SET__@@"]);
}
function fn(e) {
  return ln(e) && O(e);
}
function hn(e, t) {
  if (e === t) {
    return !0;
  }
  if (!p(t) || void 0 !== e.size && void 0 !== t.size && e.size !== t.size || void 0 !== e.__hash && void 0 !== t.__hash && e.__hash !== t.__hash || _(e) !== _(t) || A(e) !== A(t) || O(e) !== O(t)) {
    return !1;
  }
  if (0 === e.size && 0 === t.size) {
    return !0;
  }
  var n = !g(e);
  if (O(e)) {
    var i = e.entries();
    return t.every(function (e, t) {
      var r = i.next().value;
      return r && Z(r[1], e) && (n || Z(r[0], t));
    }) && i.next().done;
  }
  var o = !1;
  if (void 0 === e.size) {
    if (void 0 === t.size) {
      if ("function" === typeof e.cacheResult) {
        e.cacheResult();
      }
    } else {
      o = !0;
      var a = e;
      e = t;
      t = a;
    }
  }
  var s = !0;
  var c = t.__iterate(function (t, i) {
    if (n ? !e.has(t) : o ? !Z(t, e.get(i, r)) : !Z(e.get(i, r), t)) {
      s = !1;
      return !1;
    }
  });
  return s && e.size === c;
}
function dn(e, t) {
  var n = function (n) {
    e.prototype[n] = t[n];
  };
  Object.keys(t).forEach(n);
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(t).forEach(n);
  }
  return e;
}
function pn(e) {
  if (!e || "object" !== typeof e) {
    return e;
  }
  if (!p(e)) {
    if (!Ve(e)) {
      return e;
    }
    e = j(e);
  }
  if (_(e)) {
    var t = {};
    e.__iterate(function (e, n) {
      t[n] = pn(e);
    });
    return t;
  }
  var n = [];
  e.__iterate(function (e) {
    n.push(pn(e));
  });
  return n;
}
var _n = function (e) {
  function t(t) {
    return null === t || void 0 === t ? yn() : ln(t) && !O(t) ? t : yn().withMutations(function (n) {
      var r = e(t);
      Le(r.size);
      r.forEach(function (e) {
        return n.add(e);
      });
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return this(arguments);
  };
  t.fromKeys = function (e) {
    return this(m(e).keySeq());
  };
  t.intersect = function (e) {
    return (e = v(e).toArray()).length ? gn.intersect.apply(t(e.pop()), e) : yn();
  };
  t.union = function (e) {
    return (e = v(e).toArray()).length ? gn.union.apply(t(e.pop()), e) : yn();
  };
  t.prototype.toString = function () {
    return this.__toString("Set {", "}");
  };
  t.prototype.has = function (e) {
    return this._map.has(e);
  };
  t.prototype.add = function (e) {
    return vn(this, this._map.set(e, e));
  };
  t.prototype.remove = function (e) {
    return vn(this, this._map.remove(e));
  };
  t.prototype.clear = function () {
    return vn(this, this._map.clear());
  };
  t.prototype.map = function (e, t) {
    var n = this;
    var r = [];
    var i = [];
    this.forEach(function (o) {
      var a = e.call(t, o, o, n);
      if (a !== o) {
        r.push(o);
        i.push(a);
      }
    });
    return this.withMutations(function (e) {
      r.forEach(function (t) {
        return e.remove(t);
      });
      i.forEach(function (t) {
        return e.add(t);
      });
    });
  };
  t.prototype.union = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }
    return 0 === (t = t.filter(function (e) {
      return 0 !== e.size;
    })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function (n) {
      for (var r = 0; r < t.length; r++) {
        e(t[r]).forEach(function (e) {
          return n.add(e);
        });
      }
    }) : this.constructor(t[0]);
  };
  t.prototype.intersect = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }
    if (0 === t.length) {
      return this;
    }
    t = t.map(function (t) {
      return e(t);
    });
    var r = [];
    this.forEach(function (e) {
      if (!t.every(function (t) {
        return t.includes(e);
      })) {
        r.push(e);
      }
    });
    return this.withMutations(function (e) {
      r.forEach(function (t) {
        e.remove(t);
      });
    });
  };
  t.prototype.subtract = function () {
    for (var t = [], n = arguments.length; n--;) {
      t[n] = arguments[n];
    }
    if (0 === t.length) {
      return this;
    }
    t = t.map(function (t) {
      return e(t);
    });
    var r = [];
    this.forEach(function (e) {
      if (t.some(function (t) {
        return t.includes(e);
      })) {
        r.push(e);
      }
    });
    return this.withMutations(function (e) {
      r.forEach(function (t) {
        e.remove(t);
      });
    });
  };
  t.prototype.sort = function (e) {
    return jn(Se(this, e));
  };
  t.prototype.sortBy = function (e, t) {
    return jn(Se(this, t, e));
  };
  t.prototype.wasAltered = function () {
    return this._map.wasAltered();
  };
  t.prototype.__iterate = function (e, t) {
    var n = this;
    return this._map.__iterate(function (t) {
      return e(t, t, n);
    }, t);
  };
  t.prototype.__iterator = function (e, t) {
    return this._map.__iterator(e, t);
  };
  t.prototype.__ensureOwner = function (e) {
    if (e === this.__ownerID) {
      return this;
    }
    var t = this._map.__ensureOwner(e);
    return e ? this.__make(t, e) : 0 === this.size ? this.__empty() : (this.__ownerID = e, this._map = t, this);
  };
  return t;
}(b);
_n.isSet = ln;
var An;
var gn = _n.prototype;
function vn(e, t) {
  return e.__ownerID ? (e.size = t.size, e._map = t, e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t);
}
function mn(e, t) {
  var n = Object.create(gn);
  n.size = e ? e.size : 0;
  n._map = e;
  n.__ownerID = t;
  return n;
}
function yn() {
  return An || (An = mn(kt()));
}
gn["@@__IMMUTABLE_SET__@@"] = !0;
gn.delete = gn.remove;
gn.merge = gn.concat = gn.union;
gn.withMutations = ht;
gn.asImmutable = pt;
gn["@@transducer/init"] = gn.asMutable = dt;
gn["@@transducer/step"] = function (e, t) {
  return e.add(t);
};
gn["@@transducer/result"] = function (e) {
  return e.asImmutable();
};
gn.__empty = yn;
gn.__make = mn;
var bn;
var wn = function (e) {
  function t(e, n, r) {
    if (!(this instanceof t)) {
      return new t(e, n, r);
    }
    if (je(0 !== r, "Cannot step a Range by 0"), e = e || 0, void 0 === n && (n = 1 / 0), r = void 0 === r ? 1 : Math.abs(r), n < e && (r = -r), this._start = e, this._end = n, this._step = r, this.size = Math.max(0, Math.ceil((n - e) / r - 1) + 1), 0 === this.size) {
      if (bn) {
        return bn;
      }
      bn = this;
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.prototype.toString = function () {
    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
  };
  t.prototype.get = function (e, t) {
    return this.has(e) ? this._start + s(this, e) * this._step : t;
  };
  t.prototype.includes = function (e) {
    var t = (e - this._start) / this._step;
    return t >= 0 && t < this.size && t === Math.floor(t);
  };
  t.prototype.slice = function (e, n) {
    return u(e, n, this.size) ? this : (e = l(e, this.size), (n = f(n, this.size)) <= e ? new t(0, 0) : new t(this.get(e, this._end), this.get(n, this._end), this._step));
  };
  t.prototype.indexOf = function (e) {
    var t = e - this._start;
    if (t % this._step === 0) {
      var n = t / this._step;
      if (n >= 0 && n < this.size) {
        return n;
      }
    }
    return -1;
  };
  t.prototype.lastIndexOf = function (e) {
    return this.indexOf(e);
  };
  t.prototype.__iterate = function (e, t) {
    for (var n = this.size, r = this._step, i = t ? this._start + (n - 1) * r : this._start, o = 0; o !== n && !1 !== e(i, t ? n - ++o : o++, this);) {
      i += t ? -r : r;
    }
    return o;
  };
  t.prototype.__iterator = function (e, t) {
    var n = this.size;
    var r = this._step;
    var i = t ? this._start + (n - 1) * r : this._start;
    var o = 0;
    return new T(function () {
      if (o === n) {
        return {
          value: void 0,
          done: !0
        };
      }
      var a = i;
      i += t ? -r : r;
      return B(e, t ? n - ++o : o++, a);
    });
  };
  t.prototype.equals = function (e) {
    return e instanceof t ? this._start === e._start && this._end === e._end && this._step === e._step : hn(this, e);
  };
  return t;
}(U);
function En(e, t, n) {
  for (var i = Ue(t), o = 0; o !== i.length;) {
    if ((e = Qe(e, i[o++], r)) === r) {
      return n;
    }
  }
  return e;
}
function xn(e, t) {
  return En(this, e, t);
}
function Cn(e, t) {
  return En(e, t, r) !== r;
}
function On() {
  Le(this.size);
  var e = {};
  this.__iterate(function (t, n) {
    e[n] = t;
  });
  return e;
}
v.isIterable = p;
v.isKeyed = _;
v.isIndexed = A;
v.isAssociative = g;
v.isOrdered = O;
v.Iterator = T;
dn(v, {
  toArray: function () {
    Le(this.size);
    var e = new Array(this.size || 0);
    var t = _(this);
    var n = 0;
    this.__iterate(function (r, i) {
      e[n++] = t ? [i, r] : r;
    });
    return e;
  },
  toIndexedSeq: function () {
    return new Ae(this);
  },
  toJS: function () {
    return pn(this);
  },
  toKeyedSeq: function () {
    return new _e(this, !0);
  },
  toMap: function () {
    return At(this.toKeyedSeq());
  },
  toObject: On,
  toOrderedMap: function () {
    return Zt(this.toKeyedSeq());
  },
  toOrderedSet: function () {
    return jn(_(this) ? this.valueSeq() : this);
  },
  toSet: function () {
    return _n(_(this) ? this.valueSeq() : this);
  },
  toSetSeq: function () {
    return new ge(this);
  },
  toSeq: function () {
    return A(this) ? this.toIndexedSeq() : _(this) ? this.toKeyedSeq() : this.toSetSeq();
  },
  toStack: function () {
    return on(_(this) ? this.valueSeq() : this);
  },
  toList: function () {
    return Lt(_(this) ? this.valueSeq() : this);
  },
  toString: function () {
    return "[Collection]";
  },
  __toString: function (e, t) {
    return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t;
  },
  concat: function () {
    for (var e = [], t = arguments.length; t--;) {
      e[t] = arguments[t];
    }
    return De(this, Ce(this, e));
  },
  includes: function (e) {
    return this.some(function (t) {
      return Z(t, e);
    });
  },
  entries: function () {
    return this.__iterator(2);
  },
  every: function (e, t) {
    Le(this.size);
    var n = !0;
    this.__iterate(function (r, i, o) {
      if (!e.call(t, r, i, o)) {
        n = !1;
        return !1;
      }
    });
    return n;
  },
  filter: function (e, t) {
    return De(this, we(this, e, t, !0));
  },
  find: function (e, t, n) {
    var r = this.findEntry(e, t);
    return r ? r[1] : n;
  },
  forEach: function (e, t) {
    Le(this.size);
    return this.__iterate(t ? e.bind(t) : e);
  },
  join: function (e) {
    Le(this.size);
    e = void 0 !== e ? "" + e : ",";
    var t = "";
    var n = !0;
    this.__iterate(function (r) {
      if (n) {
        n = !1;
      } else {
        t += e;
      }
      t += null !== r && void 0 !== r ? r.toString() : "";
    });
    return t;
  },
  keys: function () {
    return this.__iterator(0);
  },
  map: function (e, t) {
    return De(this, ye(this, e, t));
  },
  reduce: function (e, t, n) {
    return Bn(this, e, t, n, arguments.length < 2, !1);
  },
  reduceRight: function (e, t, n) {
    return Bn(this, e, t, n, arguments.length < 2, !0);
  },
  reverse: function () {
    return De(this, be(this, !0));
  },
  slice: function (e, t) {
    return De(this, Ee(this, e, t, !0));
  },
  some: function (e, t) {
    return !this.every(Fn(e), t);
  },
  sort: function (e) {
    return De(this, Se(this, e));
  },
  values: function () {
    return this.__iterator(1);
  },
  butLast: function () {
    return this.slice(0, -1);
  },
  isEmpty: function () {
    return void 0 !== this.size ? 0 === this.size : !this.some(function () {
      return !0;
    });
  },
  count: function (e, t) {
    return a(e ? this.toSeq().filter(e, t) : this);
  },
  countBy: function (e, t) {
    return function (e, t, n) {
      var r = At().asMutable();
      e.__iterate(function (i, o) {
        r.update(t.call(n, i, o, e), 0, function (e) {
          return e + 1;
        });
      });
      return r.asImmutable();
    }(this, e, t);
  },
  equals: function (e) {
    return hn(this, e);
  },
  entrySeq: function () {
    var e = this;
    if (e._cache) {
      return new V(e._cache);
    }
    var t = e.toSeq().map(In).toIndexedSeq();
    t.fromEntrySeq = function () {
      return e.toSeq();
    };
    return t;
  },
  filterNot: function (e, t) {
    return this.filter(Fn(e), t);
  },
  findEntry: function (e, t, n) {
    var r = n;
    this.__iterate(function (n, i, o) {
      if (e.call(t, n, i, o)) {
        r = [i, n];
        return !1;
      }
    });
    return r;
  },
  findKey: function (e, t) {
    var n = this.findEntry(e, t);
    return n && n[0];
  },
  findLast: function (e, t, n) {
    return this.toKeyedSeq().reverse().find(e, t, n);
  },
  findLastEntry: function (e, t, n) {
    return this.toKeyedSeq().reverse().findEntry(e, t, n);
  },
  findLastKey: function (e, t) {
    return this.toKeyedSeq().reverse().findKey(e, t);
  },
  first: function (e) {
    return this.find(c, null, e);
  },
  flatMap: function (e, t) {
    return De(this, function (e, t, n) {
      var r = Fe(e);
      return e.toSeq().map(function (i, o) {
        return r(t.call(n, i, o, e));
      }).flatten(!0);
    }(this, e, t));
  },
  flatten: function (e) {
    return De(this, Oe(this, e, !0));
  },
  fromEntrySeq: function () {
    return new ve(this);
  },
  get: function (e, t) {
    return this.find(function (t, n) {
      return Z(n, e);
    }, void 0, t);
  },
  getIn: xn,
  groupBy: function (e, t) {
    return function (e, t, n) {
      var r = _(e);
      var i = (O(e) ? Zt() : At()).asMutable();
      e.__iterate(function (o, a) {
        i.update(t.call(n, o, a, e), function (e) {
          (e = e || []).push(r ? [a, o] : o);
          return e;
        });
      });
      var o = Fe(e);
      return i.map(function (t) {
        return De(e, o(t));
      }).asImmutable();
    }(this, e, t);
  },
  has: function (e) {
    return this.get(e, r) !== r;
  },
  hasIn: function (e) {
    return Cn(this, e);
  },
  isSubset: function (e) {
    e = "function" === typeof e.includes ? e : v(e);
    return this.every(function (t) {
      return e.includes(t);
    });
  },
  isSuperset: function (e) {
    return (e = "function" === typeof e.isSubset ? e : v(e)).isSubset(this);
  },
  keyOf: function (e) {
    return this.findKey(function (t) {
      return Z(t, e);
    });
  },
  keySeq: function () {
    return this.toSeq().map(Dn).toIndexedSeq();
  },
  last: function (e) {
    return this.toSeq().reverse().first(e);
  },
  lastKeyOf: function (e) {
    return this.toKeyedSeq().reverse().keyOf(e);
  },
  max: function (e) {
    return ke(this, e);
  },
  maxBy: function (e, t) {
    return ke(this, t, e);
  },
  min: function (e) {
    return ke(this, e ? Rn(e) : Nn);
  },
  minBy: function (e, t) {
    return ke(this, t ? Rn(t) : Nn, e);
  },
  rest: function () {
    return this.slice(1);
  },
  skip: function (e) {
    return 0 === e ? this : this.slice(Math.max(0, e));
  },
  skipLast: function (e) {
    return 0 === e ? this : this.slice(0, -Math.max(0, e));
  },
  skipWhile: function (e, t) {
    return De(this, xe(this, e, t, !0));
  },
  skipUntil: function (e, t) {
    return this.skipWhile(Fn(e), t);
  },
  sortBy: function (e, t) {
    return De(this, Se(this, t, e));
  },
  take: function (e) {
    return this.slice(0, Math.max(0, e));
  },
  takeLast: function (e) {
    return this.slice(-Math.max(0, e));
  },
  takeWhile: function (e, t) {
    return De(this, function (e, t, n) {
      var r = Re(e);
      r.__iterateUncached = function (r, i) {
        var o = this;
        if (i) {
          return this.cacheResult().__iterate(r, i);
        }
        var a = 0;
        e.__iterate(function (e, i, s) {
          return t.call(n, e, i, s) && ++a && r(e, i, o);
        });
        return a;
      };
      r.__iteratorUncached = function (r, i) {
        var o = this;
        if (i) {
          return this.cacheResult().__iterator(r, i);
        }
        var a = e.__iterator(2, i);
        var s = !0;
        return new T(function () {
          if (!s) {
            return {
              value: void 0,
              done: !0
            };
          }
          var e = a.next();
          if (e.done) {
            return e;
          }
          var i = e.value;
          var c = i[0];
          var u = i[1];
          return t.call(n, u, c, o) ? 2 === r ? e : B(r, c, u, e) : (s = !1, {
            value: void 0,
            done: !0
          });
        });
      };
      return r;
    }(this, e, t));
  },
  takeUntil: function (e, t) {
    return this.takeWhile(Fn(e), t);
  },
  update: function (e) {
    return e(this);
  },
  valueSeq: function () {
    return this.toIndexedSeq();
  },
  hashCode: function () {
    return this.__hash || (this.__hash = function (e) {
      if (e.size === 1 / 0) {
        return 0;
      }
      var t = O(e);
      var n = _(e);
      var r = t ? 1 : 0;
      return function (e, t) {
        t = ee(t, 3432918353);
        t = ee(t << 15 | t >>> -15, 461845907);
        t = ee(t << 13 | t >>> -13, 5);
        t = ee((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507);
        return t = te((t = ee(t ^ t >>> 13, 3266489909)) ^ t >>> 16);
      }(e.__iterate(n ? t ? function (e, t) {
        r = 31 * r + Mn(re(e), re(t)) | 0;
      } : function (e, t) {
        r = r + Mn(re(e), re(t)) | 0;
      } : t ? function (e) {
        r = 31 * r + re(e) | 0;
      } : function (e) {
        r = r + re(e) | 0;
      }), r);
    }(this));
  }
});
var Sn = v.prototype;
Sn["@@__IMMUTABLE_ITERABLE__@@"] = !0;
Sn[k] = Sn.values;
Sn.toJSON = Sn.toArray;
Sn.__toStringMapper = Ge;
Sn.inspect = Sn.toSource = function () {
  return this.toString();
};
Sn.chain = Sn.flatMap;
Sn.contains = Sn.includes;
dn(m, {
  flip: function () {
    return De(this, me(this));
  },
  mapEntries: function (e, t) {
    var n = this;
    var r = 0;
    return De(this, this.toSeq().map(function (i, o) {
      return e.call(t, [o, i], r++, n);
    }).fromEntrySeq());
  },
  mapKeys: function (e, t) {
    var n = this;
    return De(this, this.toSeq().flip().map(function (r, i) {
      return e.call(t, r, i, n);
    }).flip());
  }
});
var kn = m.prototype;
kn["@@__IMMUTABLE_KEYED__@@"] = !0;
kn[k] = Sn.entries;
kn.toJSON = On;
kn.__toStringMapper = function (e, t) {
  return Ge(t) + ": " + Ge(e);
};
dn(y, {
  toKeyedSeq: function () {
    return new _e(this, !1);
  },
  filter: function (e, t) {
    return De(this, we(this, e, t, !1));
  },
  findIndex: function (e, t) {
    var n = this.findEntry(e, t);
    return n ? n[0] : -1;
  },
  indexOf: function (e) {
    var t = this.keyOf(e);
    return void 0 === t ? -1 : t;
  },
  lastIndexOf: function (e) {
    var t = this.lastKeyOf(e);
    return void 0 === t ? -1 : t;
  },
  reverse: function () {
    return De(this, be(this, !1));
  },
  slice: function (e, t) {
    return De(this, Ee(this, e, t, !1));
  },
  splice: function (e, t) {
    var n = arguments.length;
    if (t = Math.max(t || 0, 0), 0 === n || 2 === n && !t) {
      return this;
    }
    e = l(e, e < 0 ? this.count() : this.size);
    var r = this.slice(0, e);
    return De(this, 1 === n ? r : r.concat(Me(arguments, 2), this.slice(e + t)));
  },
  findLastIndex: function (e, t) {
    var n = this.findLastEntry(e, t);
    return n ? n[0] : -1;
  },
  first: function (e) {
    return this.get(0, e);
  },
  flatten: function (e) {
    return De(this, Oe(this, e, !1));
  },
  get: function (e, t) {
    return (e = s(this, e)) < 0 || this.size === 1 / 0 || void 0 !== this.size && e > this.size ? t : this.find(function (t, n) {
      return n === e;
    }, void 0, t);
  },
  has: function (e) {
    return (e = s(this, e)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e));
  },
  interpose: function (e) {
    return De(this, function (e, t) {
      var n = Re(e);
      n.size = e.size && 2 * e.size - 1;
      n.__iterateUncached = function (n, r) {
        var i = this;
        var o = 0;
        e.__iterate(function (e) {
          return (!o || !1 !== n(t, o++, i)) && !1 !== n(e, o++, i);
        }, r);
        return o;
      };
      n.__iteratorUncached = function (n, r) {
        var i;
        var o = e.__iterator(1, r);
        var a = 0;
        return new T(function () {
          return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? B(n, a++, t) : B(n, a++, i.value, i);
        });
      };
      return n;
    }(this, e));
  },
  interleave: function () {
    var e = [this].concat(Me(arguments));
    var t = Be(this.toSeq(), U.of, e);
    var n = t.flatten(!0);
    if (t.size) {
      n.size = t.size * e.length;
    }
    return De(this, n);
  },
  keySeq: function () {
    return wn(0, this.size);
  },
  last: function (e) {
    return this.get(-1, e);
  },
  skipWhile: function (e, t) {
    return De(this, xe(this, e, t, !1));
  },
  zip: function () {
    var e = [this].concat(Me(arguments));
    return De(this, Be(this, Pn, e));
  },
  zipAll: function () {
    var e = [this].concat(Me(arguments));
    return De(this, Be(this, Pn, e, !0));
  },
  zipWith: function (e) {
    var t = Me(arguments);
    t[0] = this;
    return De(this, Be(this, e, t));
  }
});
var Tn = y.prototype;
function Bn(e, t, n, r, i, o) {
  Le(e.size);
  e.__iterate(function (e, o, a) {
    if (i) {
      i = !1;
      n = e;
    } else {
      n = t.call(r, n, e, o, a);
    }
  }, o);
  return n;
}
function Dn(e, t) {
  return t;
}
function In(e, t) {
  return [t, e];
}
function Fn(e) {
  return function () {
    return !e.apply(this, arguments);
  };
}
function Rn(e) {
  return function () {
    return -e.apply(this, arguments);
  };
}
function Pn() {
  return Me(arguments);
}
function Nn(e, t) {
  return e < t ? 1 : e > t ? -1 : 0;
}
function Mn(e, t) {
  return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0;
}
Tn["@@__IMMUTABLE_INDEXED__@@"] = !0;
Tn[C] = !0;
dn(b, {
  get: function (e, t) {
    return this.has(e) ? e : t;
  },
  includes: function (e) {
    return this.has(e);
  },
  keySeq: function () {
    return this.valueSeq();
  }
});
b.prototype.has = Sn.includes;
b.prototype.contains = b.prototype.includes;
dn(L, m.prototype);
dn(U, y.prototype);
dn(H, b.prototype);
var jn = function (e) {
  function t(e) {
    return null === e || void 0 === e ? Vn() : fn(e) ? e : Vn().withMutations(function (t) {
      var n = b(e);
      Le(n.size);
      n.forEach(function (e) {
        return t.add(e);
      });
    });
  }
  if (e) {
    t.__proto__ = e;
  }
  t.prototype = Object.create(e && e.prototype);
  t.prototype.constructor = t;
  t.of = function () {
    return this(arguments);
  };
  t.fromKeys = function (e) {
    return this(m(e).keySeq());
  };
  t.prototype.toString = function () {
    return this.__toString("OrderedSet {", "}");
  };
  return t;
}(_n);
jn.isOrderedSet = fn;
var Ln;
var Un = jn.prototype;
function Hn(e, t) {
  var n = Object.create(Un);
  n.size = e ? e.size : 0;
  n._map = e;
  n.__ownerID = t;
  return n;
}
function Vn() {
  return Ln || (Ln = Hn(tn()));
}
Un[C] = !0;
Un.zip = Tn.zip;
Un.zipWith = Tn.zipWith;
Un.__empty = Vn;
Un.__make = Hn;
var Gn = function (e, t) {
  var n;
  var r = function (o) {
    var a = this;
    if (o instanceof r) {
      return o;
    }
    if (!(this instanceof r)) {
      return new r(o);
    }
    if (!n) {
      n = !0;
      var s = Object.keys(e);
      var c = i._indices = {};
      i._name = t;
      i._keys = s;
      i._defaultValues = e;
      for (var u = 0; u < s.length; u++) {
        var l = s[u];
        c[l] = u;
        if (i[l]) {
          if ("object" === typeof console && console.warn) {
            console.warn("Cannot define " + Kn(this) + ' with property "' + l + '" since that property name is part of the Record API.');
          }
        } else {
          Yn(i, l);
        }
      }
    }
    this.__ownerID = void 0;
    this._values = Lt().withMutations(function (e) {
      e.setSize(a._keys.length);
      m(o).forEach(function (t, n) {
        e.set(a._indices[n], t === a._defaultValues[n] ? void 0 : t);
      });
    });
  };
  var i = r.prototype = Object.create(Qn);
  i.constructor = r;
  if (t) {
    r.displayName = t;
  }
  return r;
};
Gn.prototype.toString = function () {
  for (var e, t = Kn(this) + " { ", n = this._keys, r = 0, i = n.length; r !== i; r++) {
    t += (r ? ", " : "") + (e = n[r]) + ": " + Ge(this.get(e));
  }
  return t + " }";
};
Gn.prototype.equals = function (e) {
  return this === e || e && this._keys === e._keys && Xn(this).equals(Xn(e));
};
Gn.prototype.hashCode = function () {
  return Xn(this).hashCode();
};
Gn.prototype.has = function (e) {
  return this._indices.hasOwnProperty(e);
};
Gn.prototype.get = function (e, t) {
  if (!this.has(e)) {
    return t;
  }
  var n = this._indices[e];
  var r = this._values.get(n);
  return void 0 === r ? this._defaultValues[e] : r;
};
Gn.prototype.set = function (e, t) {
  if (this.has(e)) {
    var n = this._values.set(this._indices[e], t === this._defaultValues[e] ? void 0 : t);
    if (n !== this._values && !this.__ownerID) {
      return Wn(this, n);
    }
  }
  return this;
};
Gn.prototype.remove = function (e) {
  return this.set(e);
};
Gn.prototype.clear = function () {
  var e = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : Wn(this, e);
};
Gn.prototype.wasAltered = function () {
  return this._values.wasAltered();
};
Gn.prototype.toSeq = function () {
  return Xn(this);
};
Gn.prototype.toJS = function () {
  return pn(this);
};
Gn.prototype.entries = function () {
  return this.__iterator(2);
};
Gn.prototype.__iterator = function (e, t) {
  return Xn(this).__iterator(e, t);
};
Gn.prototype.__iterate = function (e, t) {
  return Xn(this).__iterate(e, t);
};
Gn.prototype.__ensureOwner = function (e) {
  if (e === this.__ownerID) {
    return this;
  }
  var t = this._values.__ensureOwner(e);
  return e ? Wn(this, t, e) : (this.__ownerID = e, this._values = t, this);
};
Gn.isRecord = E;
Gn.getDescriptiveName = Kn;
var zn;
var Qn = Gn.prototype;
function Wn(e, t, n) {
  var r = Object.create(Object.getPrototypeOf(e));
  r._values = t;
  r.__ownerID = n;
  return r;
}
function Kn(e) {
  return e.constructor.displayName || e.constructor.name || "Record";
}
function Xn(e) {
  return K(e._keys.map(function (t) {
    return [t, e.get(t)];
  }));
}
function Yn(e, t) {
  try {
    Object.defineProperty(e, t, {
      get: function () {
        return this.get(t);
      },
      set: function (e) {
        je(this.__ownerID, "Cannot set on an immutable record.");
        this.set(t, e);
      }
    });
  } catch (n) {}
}
function qn(e, t) {
  return _(t) ? t.toMap() : t.toList();
}
Qn["@@__IMMUTABLE_RECORD__@@"] = !0;
Qn.delete = Qn.remove;
Qn.deleteIn = Qn.removeIn = Ze;
Qn.getIn = xn;
Qn.hasIn = Sn.hasIn;
Qn.merge = rt;
Qn.mergeWith = it;
Qn.mergeIn = lt;
Qn.mergeDeep = ct;
Qn.mergeDeepWith = ut;
Qn.mergeDeepIn = ft;
Qn.setIn = $e;
Qn.update = tt;
Qn.updateIn = nt;
Qn.withMutations = ht;
Qn.asMutable = dt;
Qn.asImmutable = pt;
Qn[k] = Qn.entries;
Qn.toJSON = Qn.toObject = Sn.toObject;
Qn.inspect = Qn.toSource = function () {
  return this.toString();
};
var $n = {
  version: "4.0.0-rc.11",
  Collection: v,
  Iterable: v,
  Seq: j,
  Map: At,
  OrderedMap: Zt,
  List: Lt,
  Stack: on,
  Set: _n,
  OrderedSet: jn,
  Record: Gn,
  Range: wn,
  Repeat: function (e) {
    function t(e, n) {
      if (!(this instanceof t)) {
        return new t(e, n);
      }
      if (this._value = e, this.size = void 0 === n ? 1 / 0 : Math.max(0, n), 0 === this.size) {
        if (zn) {
          return zn;
        }
        zn = this;
      }
    }
    if (e) {
      t.__proto__ = e;
    }
    t.prototype = Object.create(e && e.prototype);
    t.prototype.constructor = t;
    t.prototype.toString = function () {
      return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
    };
    t.prototype.get = function (e, t) {
      return this.has(e) ? this._value : t;
    };
    t.prototype.includes = function (e) {
      return Z(this._value, e);
    };
    t.prototype.slice = function (e, n) {
      var r = this.size;
      return u(e, n, r) ? this : new t(this._value, f(n, r) - l(e, r));
    };
    t.prototype.reverse = function () {
      return this;
    };
    t.prototype.indexOf = function (e) {
      return Z(this._value, e) ? 0 : -1;
    };
    t.prototype.lastIndexOf = function (e) {
      return Z(this._value, e) ? this.size : -1;
    };
    t.prototype.__iterate = function (e, t) {
      for (var n = this.size, r = 0; r !== n && !1 !== e(this._value, t ? n - ++r : r++, this);) {
        ;
      }
      return r;
    };
    t.prototype.__iterator = function (e, t) {
      var n = this;
      var r = this.size;
      var i = 0;
      return new T(function () {
        return i === r ? {
          value: void 0,
          done: !0
        } : B(e, t ? r - ++i : i++, n._value);
      });
    };
    t.prototype.equals = function (e) {
      return e instanceof t ? Z(this._value, e._value) : hn(e);
    };
    return t;
  }(U),
  is: Z,
  fromJS: function (e, t) {
    return function e(t, n, r, i, o, a) {
      var s = Array.isArray(r) ? U : He(r) ? L : null;
      if (s) {
        if (~t.indexOf(r)) {
          throw new TypeError("Cannot convert circular structure to Immutable");
        }
        t.push(r);
        if (o && "" !== i) {
          o.push(i);
        }
        var c = n.call(a, i, s(r).map(function (i, a) {
          return e(t, n, i, a, o, r);
        }), o && o.slice());
        t.pop();
        if (o) {
          o.pop();
        }
        return c;
      }
      return r;
    }([], t || qn, e, "", t && t.length > 2 ? [] : void 0, {
      "": e
    });
  },
  hash: re,
  isImmutable: x,
  isCollection: p,
  isKeyed: _,
  isIndexed: A,
  isAssociative: g,
  isOrdered: O,
  isValueObject: J,
  isSeq: w,
  isList: jt,
  isMap: q,
  isOrderedMap: $,
  isStack: rn,
  isSet: ln,
  isOrderedSet: fn,
  isRecord: E,
  get: Qe,
  getIn: En,
  has: ze,
  hasIn: Cn,
  merge: function (e) {
    for (var t = [], n = arguments.length - 1; n-- > 0;) {
      t[n] = arguments[n + 1];
    }
    return st(e, t);
  },
  mergeDeep: function (e) {
    for (var t = [], n = arguments.length - 1; n-- > 0;) {
      t[n] = arguments[n + 1];
    }
    return at(e, t);
  },
  mergeWith: function (e, t) {
    for (var n = [], r = arguments.length - 2; r-- > 0;) {
      n[r] = arguments[r + 2];
    }
    return st(t, n, e);
  },
  mergeDeepWith: function (e, t) {
    for (var n = [], r = arguments.length - 2; r-- > 0;) {
      n[r] = arguments[r + 2];
    }
    return at(t, n, e);
  },
  remove: Ke,
  removeIn: Je,
  set: Xe,
  setIn: qe,
  update: et,
  updateIn: Ye
};
exports.a = $n;