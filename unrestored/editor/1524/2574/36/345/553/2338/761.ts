"use strict";

import * as r from "../../../../24/481/1123/758";
o.TYPED_ARRAY_SUPPORT = function () {
  try {
    var e = new Uint8Array(1);
    e.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return 42 === e.foo();
  } catch (t) {
    return !1;
  }
}();
var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
function o(e, t, n) {
  return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" === typeof e ? c(this, e) : function (e, t, n, r) {
    if ("number" === typeof t) {
      throw new TypeError('"value" argument must not be a number');
    }
    if ("undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer) {
      return function (e, t, n, r) {
        if (n < 0 || t.byteLength < n) {
          throw new RangeError("'offset' is out of bounds");
        }
        if (t.byteLength < n + (r || 0)) {
          throw new RangeError("'length' is out of bounds");
        }
        var i;
        i = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        if (o.TYPED_ARRAY_SUPPORT) {
          i.__proto__ = o.prototype;
        } else {
          i = u(e, i);
        }
        return i;
      }(e, t, n, r);
    }
    if ("string" === typeof t) {
      return function (e, t) {
        var n = 0 | f(t);
        var r = s(e, n);
        var i = r.write(t);
        if (i !== n) {
          r = r.slice(0, i);
        }
        return r;
      }(e, t);
    }
    return function (e, t) {
      if (o.isBuffer(t)) {
        var n = 0 | a(t.length);
        var r = s(e, n);
        if (!(0 === r.length)) {
          t.copy(r, 0, 0, n);
        }
        return r;
      }
      if (t) {
        if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) {
          return "number" !== typeof t.length || (i = t.length) !== i ? s(e, 0) : u(e, t);
        }
        if ("Buffer" === t.type && Array.isArray(t.data)) {
          return u(e, t.data);
        }
      }
      var i;
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(e, t);
  }(this, e, t, n) : new o(e, t, n);
}
function a(e) {
  if (e >= i) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
  }
  return 0 | e;
}
function s(e, t) {
  var n;
  if (o.TYPED_ARRAY_SUPPORT) {
    (n = new Uint8Array(t)).__proto__ = o.prototype;
  } else {
    if (null === (n = e)) {
      n = new o(t);
    }
    n.length = t;
  }
  return n;
}
function c(e, t) {
  var n = s(e, t < 0 ? 0 : 0 | a(t));
  if (!o.TYPED_ARRAY_SUPPORT) {
    for (var r = 0; r < t; ++r) {
      n[r] = 0;
    }
  }
  return n;
}
function u(e, t) {
  for (var n = t.length < 0 ? 0 : 0 | a(t.length), r = s(e, n), i = 0; i < n; i += 1) {
    r[i] = 255 & t[i];
  }
  return r;
}
function l(e, t) {
  var n;
  t = t || 1 / 0;
  for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
    if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
      if (!i) {
        if (n > 56319) {
          if ((t -= 3) > -1) {
            o.push(239, 191, 189);
          }
          continue;
        }
        if (a + 1 === r) {
          if ((t -= 3) > -1) {
            o.push(239, 191, 189);
          }
          continue;
        }
        i = n;
        continue;
      }
      if (n < 56320) {
        if ((t -= 3) > -1) {
          o.push(239, 191, 189);
        }
        i = n;
        continue;
      }
      n = 65536 + (i - 55296 << 10 | n - 56320);
    } else if (i && (t -= 3) > -1) {
      o.push(239, 191, 189);
    }
    if (i = null, n < 128) {
      if ((t -= 1) < 0) {
        break;
      }
      o.push(n);
    } else if (n < 2048) {
      if ((t -= 2) < 0) {
        break;
      }
      o.push(n >> 6 | 192, 63 & n | 128);
    } else if (n < 65536) {
      if ((t -= 3) < 0) {
        break;
      }
      o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
    } else {
      if (!(n < 1114112)) {
        throw new Error("Invalid code point");
      }
      if ((t -= 4) < 0) {
        break;
      }
      o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
    }
  }
  return o;
}
function f(e) {
  return o.isBuffer(e) ? e.length : "undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" !== typeof e && (e = "" + e), 0 === e.length ? 0 : l(e).length);
}
if (o.TYPED_ARRAY_SUPPORT) {
  o.prototype.__proto__ = Uint8Array.prototype;
  o.__proto__ = Uint8Array;
  if ("undefined" !== typeof Symbol && Symbol.species && o[Symbol.species] === o) {
    Object.defineProperty(o, Symbol.species, {
      value: null,
      configurable: !0,
      enumerable: !1,
      writable: !1
    });
  }
}
o.prototype.write = function (e, t, n) {
  if (void 0 === t || void 0 === n && "string" === typeof t) {
    n = this.length;
    t = 0;
  } else {
    if (isFinite(t)) {
      t |= 0;
      if (isFinite(n)) {
        n |= 0;
      } else {
        n = void 0;
      }
    }
  }
  var r = this.length - t;
  if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  return function (e, t, n, r) {
    return function (e, t, n, r) {
      for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) {
        t[i + n] = e[i];
      }
      return i;
    }(l(t, e.length - n), e, n, r);
  }(this, e, t, n);
};
o.prototype.slice = function (e, t) {
  var n;
  var r = this.length;
  if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), o.TYPED_ARRAY_SUPPORT) {
    (n = this.subarray(e, t)).__proto__ = o.prototype;
  } else {
    var i = t - e;
    n = new o(i, void 0);
    for (var a = 0; a < i; ++a) {
      n[a] = this[a + e];
    }
  }
  return n;
};
o.prototype.copy = function (e, t, n, r) {
  if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) {
    return 0;
  }
  if (0 === e.length || 0 === this.length) {
    return 0;
  }
  if (t < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (n < 0 || n >= this.length) {
    throw new RangeError("sourceStart out of bounds");
  }
  if (r < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  if (r > this.length) {
    r = this.length;
  }
  if (e.length - t < r - n) {
    r = e.length - t + n;
  }
  var i;
  var a = r - n;
  if (this === e && n < t && t < r) {
    for (i = a - 1; i >= 0; --i) {
      e[i + t] = this[i + n];
    }
  } else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT) {
    for (i = 0; i < a; ++i) {
      e[i + t] = this[i + n];
    }
  } else {
    Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
  }
  return a;
};
o.prototype.fill = function (e, t, n) {
  if ("string" === typeof e) {
    if ("string" === typeof t ? (t = 0, n = this.length) : "string" === typeof n && (n = this.length), 1 === e.length) {
      var r = e.charCodeAt(0);
      if (r < 256) {
        e = r;
      }
    }
  } else if ("number" === typeof e) {
    e &= 255;
  }
  if (t < 0 || this.length < t || this.length < n) {
    throw new RangeError("Out of range index");
  }
  if (n <= t) {
    return this;
  }
  var i;
  if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" === typeof e) {
    for (i = t; i < n; ++i) {
      this[i] = e;
    }
  } else {
    var a = o.isBuffer(e) ? e : new o(e);
    var s = a.length;
    for (i = 0; i < n - t; ++i) {
      this[i + t] = a[i % s];
    }
  }
  return this;
};
o.concat = function (e, t) {
  if (!r(e)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }
  if (0 === e.length) {
    return s(null, 0);
  }
  var n;
  if (void 0 === t) {
    for (t = 0, n = 0; n < e.length; ++n) {
      t += e[n].length;
    }
  }
  var i = c(null, t);
  var a = 0;
  for (n = 0; n < e.length; ++n) {
    var u = e[n];
    if (!o.isBuffer(u)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    u.copy(i, a);
    a += u.length;
  }
  return i;
};
o.byteLength = f;
o.prototype._isBuffer = !0;
o.isBuffer = function (e) {
  return !(null == e || !e._isBuffer);
};
e.exports.alloc = function (e) {
  var t = new o(e);
  t.fill(0);
  return t;
};
e.exports.from = function (e) {
  return new o(e);
};