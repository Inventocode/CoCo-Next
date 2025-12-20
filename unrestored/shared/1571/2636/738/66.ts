/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：66
 */

"use strict"

var r = {}
function i(e) {
  if (e) {
    e.value = true
  }
}
function o() {}
function a(e) {
  if (undefined === e.size) {
    e.size = e.__iterate(c)
  }
  return e.size
}
function s(e, t) {
  if ("number" !== typeof t) {
    var n = t >>> 0
    if ("" + n !== t || 4294967295 === n) {
      return NaN
    }
    t = n
  }
  return t < 0 ? a(e) + t : t
}
function c() {
  return true
}
function u(e, t, n) {
  return (0 === e && !h(e) || undefined !== n && e <= -n) && (undefined === t || undefined !== n && t >= n)
}
function l(e, t) {
  return d(e, t, 0)
}
function f(e, t) {
  return d(e, t, t)
}
function d(e, t, n) {
  return undefined === e ? n : h(e) ? t === 1 / 0 ? t : 0 | Math.max(0, t + e) : undefined === t || t === e ? e : 0 | Math.min(t, e)
}
function h(e) {
  return e < 0 || 0 === e && 1 / e === -1 / 0
}
function p(e) {
  return Boolean(e && e["@@__IMMUTABLE_ITERABLE__@@"])
}
function _(e) {
  return Boolean(e && e["@@__IMMUTABLE_KEYED__@@"])
}
function A(e) {
  return Boolean(e && e["@@__IMMUTABLE_INDEXED__@@"])
}
function g(e) {
  return _(e) || A(e)
}
var v = function (e) {
  return p(e) ? e : L(e)
}
var m = function (e) {
  function t(e) {
    return _(e) ? e : j(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  return t
}(v)
var y = function (e) {
  function t(e) {
    return A(e) ? e : U(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  return t
}(v)
var b = function (e) {
  function t(e) {
    return p(e) && !g(e) ? e : H(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  return t
}(v)
v.Keyed = m
v.Indexed = y
v.Set = b
function w(e) {
  return Boolean(e && e["@@__IMMUTABLE_SEQ__@@"])
}
function E(e) {
  return Boolean(e && e["@@__IMMUTABLE_RECORD__@@"])
}
function x(e) {
  return p(e) || E(e)
}
var /* [auto-meaningful-name] */__IMMUTABLE_ORDERED__ = "@@__IMMUTABLE_ORDERED__@@"
function O(e) {
  return Boolean(e && e[__IMMUTABLE_ORDERED__])
}
var k = "function" === typeof Symbol && Symbol.iterator
var S = k || "@@iterator"
var T = function (e) {
  this.next = e
}
function B(e, t, n, r) {
  var i = 0 === e ? t : 1 === e ? n : [t, n]
  if (r) {
    r.value = i
  } else {
    r = {
      value: i,
      done: false
    }
  }
  return r
}
function D() {
  return {
    value: undefined,
    done: true
  }
}
function I(e) {
  return !!P(e)
}
function R(e) {
  return e && "function" === typeof e.next
}
function F(e) {
  var t = P(e)
  return t && t.call(e)
}
function P(e) {
  var t = e && (k && e[k] || e["@@iterator"])
  if ("function" === typeof t) {
    return t
  }
}
T.prototype.toString = function () {
  return "[Iterator]"
}
T.KEYS = 0
T.VALUES = 1
T.ENTRIES = 2
T.prototype.inspect = T.prototype.toSource = function () {
  return this.toString()
}
T.prototype[S] = function () {
  return this
}
var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
function M(e) {
  return !(!Array.isArray(e) && "string" !== typeof e) || e && "object" === typeof e && Number.isInteger(e.length) && e.length >= 0 && (0 === e.length ? 1 === Object.keys(e).length : e.hasOwnProperty(e.length - 1))
}
var L = function (e) {
  function t(e) {
    return null === e || undefined === e ? W() : x(e) ? e.toSeq() : function (e) {
      var t = Y(e)
      if (t) {
        return t
      }
      if ("object" === typeof e) {
        return new G(e)
      }
      throw new TypeError("Expected Array or collection object of values, or keyed object: " + e)
    }(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.toSeq = function () {
    return this
  }
  t.prototype.toString = function () {
    return this.__toString("Seq {", "}")
  }
  t.prototype.cacheResult = function () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray()
      this.size = this._cache.length
    }
    return this
  }
  t.prototype.__iterate = function (e, t) {
    var /* [auto-meaningful-name] */this$_cache = this._cache
    if (this$_cache) {
      for (var /* [auto-meaningful-name] */this$_cache$length = this$_cache.length, i = 0; i !== this$_cache$length;) {
        var o = this$_cache[t ? this$_cache$length - ++i : i++]
        if (false === e(o[1], o[0], this)) {
          break
        }
      }
      return i
    }
    return this.__iterateUncached(e, t)
  }
  t.prototype.__iterator = function (e, t) {
    var /* [auto-meaningful-name] */this$_cache = this._cache
    if (this$_cache) {
      var /* [auto-meaningful-name] */this$_cache$length = this$_cache.length
      var i = 0
      return new T(function () {
        if (i === this$_cache$length) {
          return {
            value: undefined,
            done: true
          }
        }
        var o = this$_cache[t ? this$_cache$length - ++i : i++]
        return B(e, o[0], o[1])
      })
    }
    return this.__iteratorUncached(e, t)
  }
  return t
}(v)
var j = function (e) {
  function t(e) {
    return null === e || undefined === e ? W().toKeyedSeq() : p(e) ? _(e) ? e.toSeq() : e.fromEntrySeq() : E(e) ? e.toSeq() : K(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.toKeyedSeq = function () {
    return this
  }
  return t
}(L)
var U = function (e) {
  function t(e) {
    return null === e || undefined === e ? W() : p(e) ? _(e) ? e.entrySeq() : e.toIndexedSeq() : E(e) ? e.toSeq().entrySeq() : X(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return t(arguments)
  }
  t.prototype.toIndexedSeq = function () {
    return this
  }
  t.prototype.toString = function () {
    return this.__toString("Seq [", "]")
  }
  return t
}(L)
var H = function (e) {
  function t(e) {
    return (p(e) && !g(e) ? e : U(e)).toSetSeq()
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return t(arguments)
  }
  t.prototype.toSetSeq = function () {
    return this
  }
  return t
}(L)
L.isSeq = w
L.Keyed = j
L.Set = H
L.Indexed = U
L.prototype["@@__IMMUTABLE_SEQ__@@"] = true
var V = function (e) {
  function t(e) {
    this._array = e
    this.size = e.length
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.get = function (e, t) {
    return this.has(e) ? this._array[s(this, e)] : t
  }
  t.prototype.__iterate = function (e, t) {
    for (var /* [auto-meaningful-name] */this$_array = this._array, /* [auto-meaningful-name] */this$_array$length = this$_array.length, i = 0; i !== this$_array$length;) {
      var o = t ? this$_array$length - ++i : i++
      if (false === e(this$_array[o], o, this)) {
        break
      }
    }
    return i
  }
  t.prototype.__iterator = function (e, t) {
    var /* [auto-meaningful-name] */this$_array = this._array
    var /* [auto-meaningful-name] */this$_array$length = this$_array.length
    var i = 0
    return new T(function () {
      if (i === this$_array$length) {
        return {
          value: undefined,
          done: true
        }
      }
      var o = t ? this$_array$length - ++i : i++
      return B(e, o, this$_array[o])
    })
  }
  return t
}(U)
var G = function (e) {
  function t(e) {
    var t = Object.keys(e)
    this._object = e
    this._keys = t
    this.size = t.length
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.get = function (e, t) {
    return undefined === t || this.has(e) ? this._object[e] : t
  }
  t.prototype.has = function (e) {
    return Object$prototype$hasOwnProperty.call(this._object, e)
  }
  t.prototype.__iterate = function (e, t) {
    for (var /* [auto-meaningful-name] */this$_object = this._object, /* [auto-meaningful-name] */this$_keys = this._keys, /* [auto-meaningful-name] */this$_keys$length = this$_keys.length, o = 0; o !== this$_keys$length;) {
      var a = this$_keys[t ? this$_keys$length - ++o : o++]
      if (false === e(this$_object[a], a, this)) {
        break
      }
    }
    return o
  }
  t.prototype.__iterator = function (e, t) {
    var /* [auto-meaningful-name] */this$_object = this._object
    var /* [auto-meaningful-name] */this$_keys = this._keys
    var /* [auto-meaningful-name] */this$_keys$length = this$_keys.length
    var o = 0
    return new T(function () {
      if (o === this$_keys$length) {
        return {
          value: undefined,
          done: true
        }
      }
      var a = this$_keys[t ? this$_keys$length - ++o : o++]
      return B(e, a, this$_object[a])
    })
  }
  return t
}(j)
G.prototype[__IMMUTABLE_ORDERED__] = true
var z
var Q = function (e) {
  function t(e) {
    this._collection = e
    this.size = e.length || e.size
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.__iterateUncached = function (e, t) {
    if (t) {
      return this.cacheResult().__iterate(e, t)
    }
    var n = F(this._collection)
    var r = 0
    if (R(n)) {
      for (var i; !(i = n.next()).done && false !== e(i.value, r++, this);) {
        ;
      }
    }
    return r
  }
  t.prototype.__iteratorUncached = function (e, t) {
    if (t) {
      return this.cacheResult().__iterator(e, t)
    }
    var n = F(this._collection)
    if (!R(n)) {
      return new T(D)
    }
    var r = 0
    return new T(function () {
      var t = n.next()
      return t.done ? t : B(e, r++, t.value)
    })
  }
  return t
}(U)
function W() {
  return z || (z = new V([]))
}
function K(e) {
  var t = Array.isArray(e) ? new V(e) : I(e) ? new Q(e) : undefined
  if (t) {
    return t.fromEntrySeq()
  }
  if ("object" === typeof e) {
    return new G(e)
  }
  throw new TypeError("Expected Array or collection object of [k, v] entries, or keyed object: " + e)
}
function X(e) {
  var t = Y(e)
  if (t) {
    return t
  }
  throw new TypeError("Expected Array or collection object of values: " + e)
}
function Y(e) {
  return M(e) ? new V(e) : I(e) ? new Q(e) : undefined
}
function q(e) {
  return Boolean(e && e["@@__IMMUTABLE_MAP__@@"])
}
function $(e) {
  return q(e) && O(e)
}
function J(e) {
  return Boolean(e && "function" === typeof e.equals && "function" === typeof e.hashCode)
}
function Z(e, t) {
  if (e === t || e !== e && t !== t) {
    return true
  }
  if (!e || !t) {
    return false
  }
  if ("function" === typeof e.valueOf && "function" === typeof t.valueOf) {
    if ((e = e.valueOf()) === (t = t.valueOf()) || e !== e && t !== t) {
      return true
    }
    if (!e || !t) {
      return false
    }
  }
  return !!(J(e) && J(t) && e.equals(t))
}
var ee = "function" === typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (e, t) {
  var n = 65535 & (e |= 0)
  var r = 65535 & (t |= 0)
  return n * r + ((e >>> 16) * r + n * (t >>> 16) << 16 >>> 0) | 0
}
function te(e) {
  return e >>> 1 & 1073741824 | 3221225471 & e
}
var /* [auto-meaningful-name] */Object$prototype$valueOf = Object.prototype.valueOf
function re(e) {
  switch (typeof e) {
    case "boolean":
      return e ? 1108378657 : 1108378656
    case "number":
      return function (e) {
        if (e !== e || e === 1 / 0) {
          return 0
        }
        var t = 0 | e
        if (t !== e) {
          t ^= 4294967295 * e
        }
        for (; e > 4294967295;) {
          t ^= e /= 4294967295
        }
        return te(t)
      }(e)
    case "string":
      return e.length > fe ? function (e) {
        var t = pe[e]
        if (undefined === t) {
          t = ie(e)
          if (he === de) {
            he = 0
            pe = {}
          }
          he++
          pe[e] = t
        }
        return t
      }(e) : ie(e)
    case "object":
    case "function":
      return null === e ? 1108378658 : "function" === typeof e.hashCode ? te(e.hashCode(e)) : (e.valueOf !== Object$prototype$valueOf && "function" === typeof e.valueOf && (e = e.valueOf(e)), function (e) {
        var t
        if (ce && undefined !== (t = se.get(e))) {
          return t
        }
        if (undefined !== (t = e[__immutablehash__])) {
          return t
        }
        if (!ae) {
          if (undefined !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[__immutablehash__])) {
            return t
          }
          if (undefined !== (t = function (e) {
            if (e && e.nodeType > 0) {
              switch (e.nodeType) {
                case 1:
                  return e.uniqueID
                case 9:
                  return e.documentElement && e.documentElement.uniqueID
              }
            }
          }(e))) {
            return t
          }
        }
        t = ++ue
        if (1073741824 & ue) {
          ue = 0
        }
        if (ce) {
          se.set(e, t)
        } else {
          if (undefined !== Object$isExtensible && false === Object$isExtensible(e)) {
            throw new Error("Non-extensible objects are not allowed as keys.")
          }
          if (ae) {
            Object.defineProperty(e, __immutablehash__, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: t
            })
          } else if (undefined !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) {
            e.propertyIsEnumerable = function () {
              return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
            }
            e.propertyIsEnumerable[__immutablehash__] = t
          } else {
            if (undefined === e.nodeType) {
              throw new Error("Unable to set a non-enumerable property on object.")
            }
            e[__immutablehash__] = t
          }
        }
        return t
      }(e))
    case "undefined":
      return 1108378659
    default:
      if ("function" === typeof e.toString) {
        return ie(e.toString())
      }
      throw new Error("Value type " + typeof e + " cannot be hashed.")
  }
}
function ie(e) {
  for (var t = 0, n = 0; n < e.length; n++) {
    t = 31 * t + e.charCodeAt(n) | 0
  }
  return te(t)
}
var /* [auto-meaningful-name] */Object$isExtensible = Object.isExtensible
var ae = function () {
  try {
    Object.defineProperty({}, "@", {})
    return true
  } catch (e) {
    return false
  }
}()
var se
var ce = "function" === typeof WeakMap
if (ce) {
  se = new WeakMap()
}
var ue = 0
var /* [auto-meaningful-name] */__immutablehash__ = "__immutablehash__"
if ("function" === typeof Symbol) {
  __immutablehash__ = Symbol(__immutablehash__)
}
var fe = 16
var de = 255
var he = 0
var pe = {}
var _e = function (e) {
  function t(e, t) {
    this._iter = e
    this._useKeys = t
    this.size = e.size
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.get = function (e, t) {
    return this._iter.get(e, t)
  }
  t.prototype.has = function (e) {
    return this._iter.has(e)
  }
  t.prototype.valueSeq = function () {
    return this._iter.valueSeq()
  }
  t.prototype.reverse = function () {
    var e = this
    var t = be(this, true)
    if (!this._useKeys) {
      t.valueSeq = function () {
        return e._iter.toSeq().reverse()
      }
    }
    return t
  }
  t.prototype.map = function (e, t) {
    var n = this
    var r = ye(this, e, t)
    if (!this._useKeys) {
      r.valueSeq = function () {
        return n._iter.toSeq().map(e, t)
      }
    }
    return r
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    return this._iter.__iterate(function (t, r) {
      return e(t, r, n)
    }, t)
  }
  t.prototype.__iterator = function (e, t) {
    return this._iter.__iterator(e, t)
  }
  return t
}(j)
_e.prototype[__IMMUTABLE_ORDERED__] = true
var Ae = function (e) {
  function t(e) {
    this._iter = e
    this.size = e.size
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.includes = function (e) {
    return this._iter.includes(e)
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    var r = 0
    if (t) {
      a(this)
    }
    return this._iter.__iterate(function (i) {
      return e(i, t ? n.size - ++r : r++, n)
    }, t)
  }
  t.prototype.__iterator = function (e, t) {
    var n = this
    var r = this._iter.__iterator(1, t)
    var i = 0
    if (t) {
      a(this)
    }
    return new T(function () {
      var o = r.next()
      return o.done ? o : B(e, t ? n.size - ++i : i++, o.value, o)
    })
  }
  return t
}(U)
var ge = function (e) {
  function t(e) {
    this._iter = e
    this.size = e.size
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.has = function (e) {
    return this._iter.includes(e)
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    return this._iter.__iterate(function (t) {
      return e(t, t, n)
    }, t)
  }
  t.prototype.__iterator = function (e, t) {
    var n = this._iter.__iterator(1, t)
    return new T(function () {
      var t = n.next()
      return t.done ? t : B(e, t.value, t.value, t)
    })
  }
  return t
}(H)
var ve = function (e) {
  function t(e) {
    this._iter = e
    this.size = e.size
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.entrySeq = function () {
    return this._iter.toSeq()
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    return this._iter.__iterate(function (t) {
      if (t) {
        Ie(t)
        var r = p(t)
        return e(r ? t.get(1) : t[1], r ? t.get(0) : t[0], n)
      }
    }, t)
  }
  t.prototype.__iterator = function (e, t) {
    var n = this._iter.__iterator(1, t)
    return new T(function () {
      for (;;) {
        var t = n.next()
        if (t.done) {
          return t
        }
        var /* [auto-meaningful-name] */t$value = t.value
        if (t$value) {
          Ie(t$value)
          var i = p(t$value)
          return B(e, i ? t$value.get(0) : t$value[0], i ? t$value.get(1) : t$value[1], t)
        }
      }
    })
  }
  return t
}(j)
function me(e) {
  var t = Fe(e)
  t._iter = e
  t.size = e.size
  t.flip = function () {
    return e
  }
  t.reverse = function () {
    var t = e.reverse.apply(this)
    t.flip = function () {
      return e.reverse()
    }
    return t
  }
  t.has = function (t) {
    return e.includes(t)
  }
  t.includes = function (t) {
    return e.has(t)
  }
  t.cacheResult = Pe
  t.__iterateUncached = function (t, n) {
    var r = this
    return e.__iterate(function (e, n) {
      return false !== t(n, e, r)
    }, n)
  }
  t.__iteratorUncached = function (t, n) {
    if (2 === t) {
      var r = e.__iterator(t, n)
      return new T(function () {
        var e = r.next()
        if (!e.done) {
          var t = e.value[0]
          e.value[0] = e.value[1]
          e.value[1] = t
        }
        return e
      })
    }
    return e.__iterator(1 === t ? 0 : 1, n)
  }
  return t
}
function ye(e, t, n) {
  var i = Fe(e)
  i.size = e.size
  i.has = function (t) {
    return e.has(t)
  }
  i.get = function (i, o) {
    var a = e.get(i, r)
    return a === r ? o : t.call(n, a, i, e)
  }
  i.__iterateUncached = function (r, i) {
    var o = this
    return e.__iterate(function (e, i, a) {
      return false !== r(t.call(n, e, i, a), i, o)
    }, i)
  }
  i.__iteratorUncached = function (r, i) {
    var o = e.__iterator(2, i)
    return new T(function () {
      var i = o.next()
      if (i.done) {
        return i
      }
      var /* [auto-meaningful-name] */i$value = i.value
      var s = i$value[0]
      return B(r, s, t.call(n, i$value[1], s, e), i)
    })
  }
  return i
}
function be(e, t) {
  var n = this
  var r = Fe(e)
  r._iter = e
  r.size = e.size
  r.reverse = function () {
    return e
  }
  if (e.flip) {
    r.flip = function () {
      var t = me(e)
      t.reverse = function () {
        return e.flip()
      }
      return t
    }
  }
  r.get = function (n, r) {
    return e.get(t ? n : -1 - n, r)
  }
  r.has = function (n) {
    return e.has(t ? n : -1 - n)
  }
  r.includes = function (t) {
    return e.includes(t)
  }
  r.cacheResult = Pe
  r.__iterate = function (n, r) {
    var i = this
    var o = 0
    if (r) {
      a(e)
    }
    return e.__iterate(function (e, a) {
      return n(e, t ? a : r ? i.size - ++o : o++, i)
    }, !r)
  }
  r.__iterator = function (r, i) {
    var o = 0
    if (i) {
      a(e)
    }
    var s = e.__iterator(2, !i)
    return new T(function () {
      var e = s.next()
      if (e.done) {
        return e
      }
      var /* [auto-meaningful-name] */e$value = e.value
      return B(r, t ? e$value[0] : i ? n.size - ++o : o++, e$value[1], e)
    })
  }
  return r
}
function we(e, t, n, i) {
  var o = Fe(e)
  if (i) {
    o.has = function (i) {
      var o = e.get(i, r)
      return o !== r && !!t.call(n, o, i, e)
    }
    o.get = function (i, o) {
      var a = e.get(i, r)
      return a !== r && t.call(n, a, i, e) ? a : o
    }
  }
  o.__iterateUncached = function (r, o) {
    var a = this
    var s = 0
    e.__iterate(function (e, o, c) {
      if (t.call(n, e, o, c)) {
        s++
        return r(e, i ? o : s - 1, a)
      }
    }, o)
    return s
  }
  o.__iteratorUncached = function (r, o) {
    var a = e.__iterator(2, o)
    var s = 0
    return new T(function () {
      for (;;) {
        var o = a.next()
        if (o.done) {
          return o
        }
        var /* [auto-meaningful-name] */o$value = o.value
        var u = o$value[0]
        var l = o$value[1]
        if (t.call(n, l, u, e)) {
          return B(r, i ? u : s++, l, o)
        }
      }
    })
  }
  return o
}
function Ee(e, t, n, r) {
  var /* [auto-meaningful-name] */e$size = e.size
  if (u(t, n, e$size)) {
    return e
  }
  var o = l(t, e$size)
  var a = f(n, e$size)
  if (o !== o || a !== a) {
    return Ee(e.toSeq().cacheResult(), t, n, r)
  }
  var c
  var d = a - o
  if (d === d) {
    c = d < 0 ? 0 : d
  }
  var h = Fe(e)
  h.size = 0 === c ? c : e.size && c || undefined
  if (!r && w(e) && c >= 0) {
    h.get = function (t, n) {
      return (t = s(this, t)) >= 0 && t < c ? e.get(t + o, n) : n
    }
  }
  h.__iterateUncached = function (t, n) {
    var i = this
    if (0 === c) {
      return 0
    }
    if (n) {
      return this.cacheResult().__iterate(t, n)
    }
    var a = 0
    var s = true
    var u = 0
    e.__iterate(function (e, n) {
      if (!s || !(s = a++ < o)) {
        u++
        return false !== t(e, r ? n : u - 1, i) && u !== c
      }
    })
    return u
  }
  h.__iteratorUncached = function (t, n) {
    if (0 !== c && n) {
      return this.cacheResult().__iterator(t, n)
    }
    if (0 === c) {
      return new T(D)
    }
    var i = e.__iterator(t, n)
    var a = 0
    var s = 0
    return new T(function () {
      for (; a++ < o;) {
        i.next()
      }
      if (++s > c) {
        return {
          value: undefined,
          done: true
        }
      }
      var e = i.next()
      return r || 1 === t || e.done ? e : B(t, s - 1, 0 === t ? undefined : e.value[1], e)
    })
  }
  return h
}
function xe(e, t, n, r) {
  var i = Fe(e)
  i.__iterateUncached = function (i, o) {
    var a = this
    if (o) {
      return this.cacheResult().__iterate(i, o)
    }
    var s = true
    var c = 0
    e.__iterate(function (e, o, u) {
      if (!s || !(s = t.call(n, e, o, u))) {
        c++
        return i(e, r ? o : c - 1, a)
      }
    })
    return c
  }
  i.__iteratorUncached = function (i, o) {
    var a = this
    if (o) {
      return this.cacheResult().__iterator(i, o)
    }
    var s = e.__iterator(2, o)
    var c = true
    var u = 0
    return new T(function () {
      var e
      var o
      var l
      do {
        if ((e = s.next()).done) {
          return r || 1 === i ? e : B(i, u++, 0 === i ? undefined : e.value[1], e)
        }
        var /* [auto-meaningful-name] */e$value = e.value
        o = e$value[0]
        l = e$value[1]
        if (c) {
          c = t.call(n, l, o, a)
        }
      } while (c)
      return 2 === i ? e : B(i, o, l, e)
    })
  }
  return i
}
function Ce(e, t) {
  var n = _(e)
  var r = [e].concat(t).map(function (e) {
    if (p(e)) {
      if (n) {
        e = m(e)
      }
    } else {
      e = n ? K(e) : X(Array.isArray(e) ? e : [e])
    }
    return e
  }).filter(function (e) {
    return 0 !== e.size
  })
  if (0 === r.length) {
    return e
  }
  if (1 === r.length) {
    var i = r[0]
    if (i === e || n && _(i) || A(e) && A(i)) {
      return i
    }
  }
  var o = new V(r)
  if (n) {
    o = o.toKeyedSeq()
  } else {
    if (!A(e)) {
      o = o.toSetSeq()
    }
  }
  (o = o.flatten(true)).size = r.reduce(function (e, t) {
    if (undefined !== e) {
      var /* [auto-meaningful-name] */t$size = t.size
      if (undefined !== t$size) {
        return e + t$size
      }
    }
  }, 0)
  return o
}
function Oe(e, t, n) {
  var r = Fe(e)
  r.__iterateUncached = function (i, o) {
    if (o) {
      return this.cacheResult().__iterate(i, o)
    }
    var a = 0
    var s = false;
    (function e(c, u) {
      c.__iterate(function (o, c) {
        if ((!t || u < t) && p(o)) {
          e(o, u + 1)
        } else {
          a++
          if (false === i(o, n ? c : a - 1, r)) {
            s = true
          }
        }
        return !s
      }, o)
    })(e, 0)
    return a
  }
  r.__iteratorUncached = function (r, i) {
    if (i) {
      return this.cacheResult().__iterator(r, i)
    }
    var o = e.__iterator(r, i)
    var a = []
    var s = 0
    return new T(function () {
      for (; o;) {
        var e = o.next()
        if (false === e.done) {
          var /* [auto-meaningful-name] */e$value = e.value
          if (2 === r) {
            e$value = e$value[1]
          }
          if (t && !(a.length < t) || !p(e$value)) {
            return n ? e : B(r, s++, e$value, e)
          }
          a.push(o)
          o = e$value.__iterator(r, i)
        } else {
          o = a.pop()
        }
      }
      return {
        value: undefined,
        done: true
      }
    })
  }
  return r
}
function ke(e, t, n) {
  if (!t) {
    t = Ne
  }
  var r = _(e)
  var i = 0
  var o = e.toSeq().map(function (t, r) {
    return [r, t, i++, n ? n(t, r, e) : t]
  }).valueSeq().toArray()
  o.sort(function (e, n) {
    return t(e[3], n[3]) || e[2] - n[2]
  }).forEach(r ? function (e, t) {
    o[t].length = 2
  } : function (e, t) {
    o[t] = e[1]
  })
  return r ? j(o) : A(e) ? U(o) : H(o)
}
function Se(e, t, n) {
  if (!t) {
    t = Ne
  }
  if (n) {
    var r = e.toSeq().map(function (t, r) {
      return [t, n(t, r, e)]
    }).reduce(function (e, n) {
      return Te(t, e[1], n[1]) ? n : e
    })
    return r && r[0]
  }
  return e.reduce(function (e, n) {
    return Te(t, e, n) ? n : e
  })
}
function Te(e, t, n) {
  var r = e(n, t)
  return 0 === r && n !== t && (undefined === n || null === n || n !== n) || r > 0
}
function Be(e, t, n, r) {
  var i = Fe(e)
  var o = new V(n).map(function (e) {
    return e.size
  })
  i.size = r ? o.max() : o.min()
  i.__iterate = function (e, t) {
    for (var n, r = this.__iterator(1, t), i = 0; !(n = r.next()).done && false !== e(n.value, i++, this);) {
      ;
    }
    return i
  }
  i.__iteratorUncached = function (e, i) {
    var o = n.map(function (e) {
      e = v(e)
      return F(i ? e.reverse() : e)
    })
    var a = 0
    var s = false
    return new T(function () {
      var n
      if (!s) {
        n = o.map(function (e) {
          return e.next()
        })
        s = r ? n.every(function (e) {
          return e.done
        }) : n.some(function (e) {
          return e.done
        })
      }
      return s ? {
        value: undefined,
        done: true
      } : B(e, a++, t.apply(null, n.map(function (e) {
        return e.value
      })))
    })
  }
  return i
}
function De(e, t) {
  return e === t ? e : w(e) ? t : e.constructor(t)
}
function Ie(e) {
  if (e !== Object(e)) {
    throw new TypeError("Expected [K, V] tuple: " + e)
  }
}
function Re(e) {
  return _(e) ? m : A(e) ? y : b
}
function Fe(e) {
  return Object.create((_(e) ? j : A(e) ? U : H).prototype)
}
function Pe() {
  return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : L.prototype.cacheResult.call(this)
}
function Ne(e, t) {
  return undefined === e && undefined === t ? 0 : undefined === e ? 1 : undefined === t ? -1 : e > t ? 1 : e < t ? -1 : 0
}
function Me(e, t) {
  t = t || 0
  for (var n = Math.max(0, e.length - t), r = new Array(n), i = 0; i < n; i++) {
    r[i] = e[i + t]
  }
  return r
}
function Le(e, t) {
  if (!e) {
    throw new Error(t)
  }
}
function je(e) {
  Le(e !== 1 / 0, "Cannot perform this action with an infinite size.")
}
function Ue(e) {
  if (M(e) && "string" !== typeof e) {
    return e
  }
  if (O(e)) {
    return e.toArray()
  }
  throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + e)
}
function He(e) {
  return e && ("function" !== typeof e.constructor || "Object" === e.constructor.name)
}
function Ve(e) {
  return "object" === typeof e && (x(e) || Array.isArray(e) || He(e))
}
function Ge(e) {
  try {
    return "string" === typeof e ? JSON.stringify(e) : String(e)
  } catch (t) {
    return JSON.stringify(e)
  }
}
function ze(e, t) {
  return x(e) ? e.has(t) : Ve(e) && Object$prototype$hasOwnProperty.call(e, t)
}
function Qe(e, t, n) {
  return x(e) ? e.get(t, n) : ze(e, t) ? "function" === typeof e.get ? e.get(t) : e[t] : n
}
function We(e) {
  if (Array.isArray(e)) {
    return Me(e)
  }
  var t = {}
  for (var n in e) if (Object$prototype$hasOwnProperty.call(e, n)) {
    t[n] = e[n]
  }
  return t
}
function Ke(e, t) {
  if (!Ve(e)) {
    throw new TypeError("Cannot update non-data-structure value: " + e)
  }
  if (x(e)) {
    if (!e.remove) {
      throw new TypeError("Cannot update immutable value without .remove() method: " + e)
    }
    return e.remove(t)
  }
  if (!Object$prototype$hasOwnProperty.call(e, t)) {
    return e
  }
  var n = We(e)
  if (Array.isArray(n)) {
    n.splice(t, 1)
  } else {
    delete n[t]
  }
  return n
}
function Xe(e, t, n) {
  if (!Ve(e)) {
    throw new TypeError("Cannot update non-data-structure value: " + e)
  }
  if (x(e)) {
    if (!e.set) {
      throw new TypeError("Cannot update immutable value without .set() method: " + e)
    }
    return e.set(t, n)
  }
  if (Object$prototype$hasOwnProperty.call(e, t) && n === e[t]) {
    return e
  }
  var r = We(e)
  r[t] = n
  return r
}
function Ye(e, t, n, i) {
  if (!i) {
    i = n
    n = undefined
  }
  var o = function e(t, n, i, o, a, s) {
    var c = n === r
    if (o === i.length) {
      var u = c ? a : n
      var l = s(u)
      return l === u ? n : l
    }
    if (!c && !Ve(n)) {
      throw new TypeError("Cannot update within non-data-structure value in path [" + i.slice(0, o).map(Ge) + "]: " + n)
    }
    var f = i[o]
    var d = c ? r : Qe(n, f, r)
    var h = e(d === r ? t : x(d), d, i, o + 1, a, s)
    return h === d ? n : h === r ? Ke(n, f) : Xe(c ? t ? St() : {} : n, f, h)
  }(x(e), e, Ue(t), 0, n, i)
  return o === r ? n : o
}
function qe(e, t, n) {
  return Ye(e, t, r, function () {
    return n
  })
}
function $e(e, t) {
  return qe(this, e, t)
}
function Je(e, t) {
  return Ye(e, t, function () {
    return r
  })
}
function Ze(e) {
  return Je(this, e)
}
function et(e, t, n, r) {
  return Ye(e, [t], n, r)
}
function tt(e, t, n) {
  return 1 === arguments.length ? e(this) : et(this, e, t, n)
}
function nt(e, t, n) {
  return Ye(this, e, t, n)
}
function rt() {
  for (var e = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
    e[arguments$length] = arguments[arguments$length]
  }
  return ot(this, e)
}
function it(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1]
  }
  if ("function" !== typeof e) {
    throw new TypeError("Invalid merger function: " + e)
  }
  return ot(this, t, e)
}
function ot(e, t, n) {
  for (var i = [], o = 0; o < t.length; o++) {
    var a = m(t[o])
    if (0 !== a.size) {
      i.push(a)
    }
  }
  return 0 === i.length ? e : 0 !== e.toSeq().size || e.__ownerID || 1 !== i.length ? e.withMutations(function (e) {
    for (var t = n ? function (t, i) {
        et(e, i, r, function (e) {
          return e === r ? t : n(e, t, i)
        })
      } : function (t, n) {
        e.set(n, t)
      }, o = 0; o < i.length; o++) {
      i[o].forEach(t)
    }
  }) : e.constructor(i[0])
}
function at(e, t, n) {
  return st(e, t, function (e) {
    return function t(n, r, i) {
      return Ve(n) && Ve(r) ? st(n, [r], t) : e ? e(n, r, i) : r
    }
  }(n))
}
function st(e, t, n) {
  if (!Ve(e)) {
    throw new TypeError("Cannot merge into non-data-structure value: " + e)
  }
  if (x(e)) {
    return "function" === typeof n && e.mergeWith ? e.mergeWith.apply(e, [n].concat(t)) : e.merge ? e.merge.apply(e, t) : e.concat.apply(e, t)
  }
  for (var r = Array.isArray(e), i = e, o = r ? y : m, a = r ? function (t) {
      if (i === e) {
        i = We(i)
      }
      i.push(t)
    } : function (t, r) {
      var o = Object$prototype$hasOwnProperty.call(i, r)
      var a = o && n ? n(i[r], t, r) : t
      if (!(o && a === i[r])) {
        if (i === e) {
          i = We(i)
        }
        i[r] = a
      }
    }, s = 0; s < t.length; s++) {
    o(t[s]).forEach(a)
  }
  return i
}
function ct() {
  for (var e = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
    e[arguments$length] = arguments[arguments$length]
  }
  return at(this, e)
}
function ut(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1]
  }
  return at(this, t, e)
}
function lt(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1]
  }
  return Ye(this, e, St(), function (e) {
    return st(e, t)
  })
}
function ft(e) {
  for (var t = [], n = arguments.length - 1; n-- > 0;) {
    t[n] = arguments[n + 1]
  }
  return Ye(this, e, St(), function (e) {
    return at(e, t)
  })
}
function dt(e) {
  var t = this.asMutable()
  e(t)
  return t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
}
function ht() {
  return this.__ownerID ? this : this.__ensureOwner(new o())
}
function pt() {
  return this.__ensureOwner()
}
function _t() {
  return this.__altered
}
Ae.prototype.cacheResult = _e.prototype.cacheResult = ge.prototype.cacheResult = ve.prototype.cacheResult = Pe
var At = function (e) {
  function t(t) {
    return null === t || undefined === t ? St() : q(t) && !O(t) ? t : St().withMutations(function (n) {
      var r = e(t)
      je(r.size)
      r.forEach(function (e, t) {
        return n.set(t, e)
      })
    })
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    for (var e = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
      e[arguments$length] = arguments[arguments$length]
    }
    return St().withMutations(function (t) {
      for (var n = 0; n < e.length; n += 2) {
        if (n + 1 >= e.length) {
          throw new Error("Missing value for key: " + e[n])
        }
        t.set(e[n], e[n + 1])
      }
    })
  }
  t.prototype.toString = function () {
    return this.__toString("Map {", "}")
  }
  t.prototype.get = function (e, t) {
    return this._root ? this._root.get(0, undefined, e, t) : t
  }
  t.prototype.set = function (e, t) {
    return Tt(this, e, t)
  }
  t.prototype.remove = function (e) {
    return Tt(this, e, r)
  }
  t.prototype.deleteAll = function (e) {
    var t = v(e)
    return 0 === t.size ? this : this.withMutations(function (e) {
      t.forEach(function (t) {
        return e.remove(t)
      })
    })
  }
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = undefined, this.__altered = true, this) : St()
  }
  t.prototype.sort = function (e) {
    return Zt(ke(this, e))
  }
  t.prototype.sortBy = function (e, t) {
    return Zt(ke(this, t, e))
  }
  t.prototype.map = function (e, t) {
    return this.withMutations(function (n) {
      n.forEach(function (r, i) {
        n.set(i, e.call(t, r, i, n))
      })
    })
  }
  t.prototype.__iterator = function (e, t) {
    return new xt(this, e, t)
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    var r = 0
    if (this._root) {
      this._root.iterate(function (t) {
        r++
        return e(t[1], t[0], n)
      }, t)
    }
    return r
  }
  t.prototype.__ensureOwner = function (e) {
    return e === this.__ownerID ? this : e ? kt(this.size, this._root, e, this.__hash) : 0 === this.size ? St() : (this.__ownerID = e, this.__altered = false, this)
  }
  return t
}(m)
At.isMap = q
var /* [auto-meaningful-name] */At$prototype = At.prototype
At$prototype["@@__IMMUTABLE_MAP__@@"] = true
At$prototype.delete = At$prototype.remove
At$prototype.removeAll = At$prototype.deleteAll
At$prototype.setIn = $e
At$prototype.removeIn = At$prototype.deleteIn = Ze
At$prototype.update = tt
At$prototype.updateIn = nt
At$prototype.merge = At$prototype.concat = rt
At$prototype.mergeWith = it
At$prototype.mergeDeep = ct
At$prototype.mergeDeepWith = ut
At$prototype.mergeIn = lt
At$prototype.mergeDeepIn = ft
At$prototype.withMutations = dt
At$prototype.wasAltered = _t
At$prototype.asImmutable = pt
At$prototype["@@transducer/init"] = At$prototype.asMutable = ht
At$prototype["@@transducer/step"] = function (e, t) {
  return e.set(t[0], t[1])
}
At$prototype["@@transducer/result"] = function (e) {
  return e.asImmutable()
}
var vt = function (e, t) {
  this.ownerID = e
  this.entries = t
}
vt.prototype.get = function (e, t, n, r) {
  for (var /* [auto-meaningful-name] */this$entries = this.entries, o = 0, /* [auto-meaningful-name] */this$entries$length = this$entries.length; o < this$entries$length; o++) {
    if (Z(n, this$entries[o][0])) {
      return this$entries[o][1]
    }
  }
  return r
}
vt.prototype.update = function (e, t, n, a, s, c, u) {
  for (var l = s === r, /* [auto-meaningful-name] */this$entries = this.entries, d = 0, /* [auto-meaningful-name] */this$entries$length = this$entries.length; d < this$entries$length && !Z(a, this$entries[d][0]); d++) {
    ;
  }
  var p = d < this$entries$length
  if (p ? this$entries[d][1] === s : l) {
    return this
  }
  i(u)
  if (l || !p) {
    i(c)
  }
  if (!l || 1 !== this$entries.length) {
    if (!p && !l && this$entries.length >= Pt) {
      return function (e, t, n, r) {
        if (!e) {
          e = new o()
        }
        for (var i = new wt(e, re(n), [n, r]), a = 0; a < t.length; a++) {
          var s = t[a]
          i = i.update(e, 0, undefined, s[0], s[1])
        }
        return i
      }(e, this$entries, a, s)
    }
    var _ = e && e === this.ownerID
    var A = _ ? this$entries : Me(this$entries)
    if (p) {
      if (l) {
        if (d === this$entries$length - 1) {
          A.pop()
        } else {
          A[d] = A.pop()
        }
      } else {
        A[d] = [a, s]
      }
    } else {
      A.push([a, s])
    }
    return _ ? (this.entries = A, this) : new vt(e, A)
  }
}
var mt = function (e, t, n) {
  this.ownerID = e
  this.bitmap = t
  this.nodes = n
}
mt.prototype.get = function (e, t, n, r) {
  if (undefined === t) {
    t = re(n)
  }
  var i = 1 << (31 & (0 === e ? t : t >>> e))
  var /* [auto-meaningful-name] */this$bitmap = this.bitmap
  return 0 === (this$bitmap & i) ? r : this.nodes[Rt(this$bitmap & i - 1)].get(e + 5, t, n, r)
}
mt.prototype.update = function (e, t, n, i, o, a, s) {
  if (undefined === n) {
    n = re(i)
  }
  var c = 31 & (0 === t ? n : n >>> t)
  var u = 1 << c
  var /* [auto-meaningful-name] */this$bitmap = this.bitmap
  var f = 0 !== (this$bitmap & u)
  if (!f && o === r) {
    return this
  }
  var d = Rt(this$bitmap & u - 1)
  var /* [auto-meaningful-name] */this$nodes = this.nodes
  var p = f ? this$nodes[d] : undefined
  var _ = Bt(p, e, t + 5, n, i, o, a, s)
  if (_ === p) {
    return this
  }
  if (!f && _ && this$nodes.length >= Nt) {
    return function (e, t, n, r, i) {
      for (var o = 0, a = new Array(32), s = 0; 0 !== n; s++, n >>>= 1) {
        a[s] = 1 & n ? t[o++] : undefined
      }
      a[r] = i
      return new yt(e, o + 1, a)
    }(e, this$nodes, this$bitmap, c, _)
  }
  if (f && !_ && 2 === this$nodes.length && Dt(this$nodes[1 ^ d])) {
    return this$nodes[1 ^ d]
  }
  if (f && _ && 1 === this$nodes.length && Dt(_)) {
    return _
  }
  var A = e && e === this.ownerID
  var g = f ? _ ? this$bitmap : this$bitmap ^ u : this$bitmap | u
  var v = f ? _ ? Ft(this$nodes, d, _, A) : function (e, t, n) {
    var r = e.length - 1
    if (n && t === r) {
      e.pop()
      return e
    }
    for (var i = new Array(r), o = 0, a = 0; a < r; a++) {
      if (a === t) {
        o = 1
      }
      i[a] = e[a + o]
    }
    return i
  }(this$nodes, d, A) : function (e, t, n, r) {
    var i = e.length + 1
    if (r && t + 1 === i) {
      e[t] = n
      return e
    }
    for (var o = new Array(i), a = 0, s = 0; s < i; s++) {
      if (s === t) {
        o[s] = n
        a = -1
      } else {
        o[s] = e[s + a]
      }
    }
    return o
  }(this$nodes, d, _, A)
  return A ? (this.bitmap = g, this.nodes = v, this) : new mt(e, g, v)
}
var yt = function (e, t, n) {
  this.ownerID = e
  this.count = t
  this.nodes = n
}
yt.prototype.get = function (e, t, n, r) {
  if (undefined === t) {
    t = re(n)
  }
  var i = 31 & (0 === e ? t : t >>> e)
  var o = this.nodes[i]
  return o ? o.get(e + 5, t, n, r) : r
}
yt.prototype.update = function (e, t, n, i, o, a, s) {
  if (undefined === n) {
    n = re(i)
  }
  var c = 31 & (0 === t ? n : n >>> t)
  var u = o === r
  var /* [auto-meaningful-name] */this$nodes = this.nodes
  var f = this$nodes[c]
  if (u && !f) {
    return this
  }
  var d = Bt(f, e, t + 5, n, i, o, a, s)
  if (d === f) {
    return this
  }
  var /* [auto-meaningful-name] */this$count = this.count
  if (f) {
    if (!d && --this$count < Mt) {
      return function (e, t, n, r) {
        for (var i = 0, o = 0, a = new Array(n), s = 0, c = 1, /* [auto-meaningful-name] */t$length = t.length; s < t$length; s++, c <<= 1) {
          var l = t[s]
          if (undefined !== l && s !== r) {
            i |= c
            a[o++] = l
          }
        }
        return new mt(e, i, a)
      }(e, this$nodes, this$count, c)
    }
  } else {
    this$count++
  }
  var p = e && e === this.ownerID
  var _ = Ft(this$nodes, c, d, p)
  return p ? (this.count = this$count, this.nodes = _, this) : new yt(e, this$count, _)
}
var bt = function (e, t, n) {
  this.ownerID = e
  this.keyHash = t
  this.entries = n
}
bt.prototype.get = function (e, t, n, r) {
  for (var /* [auto-meaningful-name] */this$entries = this.entries, o = 0, /* [auto-meaningful-name] */this$entries$length = this$entries.length; o < this$entries$length; o++) {
    if (Z(n, this$entries[o][0])) {
      return this$entries[o][1]
    }
  }
  return r
}
bt.prototype.update = function (e, t, n, o, a, s, c) {
  if (undefined === n) {
    n = re(o)
  }
  var u = a === r
  if (n !== this.keyHash) {
    return u ? this : (i(c), i(s), It(this, e, t, n, [o, a]))
  }
  for (var /* [auto-meaningful-name] */this$entries = this.entries, f = 0, /* [auto-meaningful-name] */this$entries$length = this$entries.length; f < this$entries$length && !Z(o, this$entries[f][0]); f++) {
    ;
  }
  var h = f < this$entries$length
  if (h ? this$entries[f][1] === a : u) {
    return this
  }
  i(c)
  if (u || !h) {
    i(s)
  }
  if (u && 2 === this$entries$length) {
    return new wt(e, this.keyHash, this$entries[1 ^ f])
  }
  var p = e && e === this.ownerID
  var _ = p ? this$entries : Me(this$entries)
  if (h) {
    if (u) {
      if (f === this$entries$length - 1) {
        _.pop()
      } else {
        _[f] = _.pop()
      }
    } else {
      _[f] = [o, a]
    }
  } else {
    _.push([o, a])
  }
  return p ? (this.entries = _, this) : new bt(e, this.keyHash, _)
}
var wt = function (e, t, n) {
  this.ownerID = e
  this.keyHash = t
  this.entry = n
}
wt.prototype.get = function (e, t, n, r) {
  return Z(n, this.entry[0]) ? this.entry[1] : r
}
wt.prototype.update = function (e, t, n, o, a, s, c) {
  var u = a === r
  var l = Z(o, this.entry[0])
  return (l ? a === this.entry[1] : u) ? this : (i(c), u ? void i(s) : l ? e && e === this.ownerID ? (this.entry[1] = a, this) : new wt(e, this.keyHash, [o, a]) : (i(s), It(this, e, t, re(o), [o, a])))
}
vt.prototype.iterate = bt.prototype.iterate = function (e, t) {
  for (var /* [auto-meaningful-name] */this$entries = this.entries, r = 0, i = this$entries.length - 1; r <= i; r++) {
    if (false === e(this$entries[t ? i - r : r])) {
      return false
    }
  }
}
mt.prototype.iterate = yt.prototype.iterate = function (e, t) {
  for (var /* [auto-meaningful-name] */this$nodes = this.nodes, r = 0, i = this$nodes.length - 1; r <= i; r++) {
    var o = this$nodes[t ? i - r : r]
    if (o && false === o.iterate(e, t)) {
      return false
    }
  }
}
wt.prototype.iterate = function (e, t) {
  return e(this.entry)
}
var Et
var xt = function (e) {
  function t(e, t, n) {
    this._type = t
    this._reverse = n
    this._stack = e._root && Ot(e._root)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.next = function () {
    for (var /* [auto-meaningful-name] */this$_type = this._type, /* [auto-meaningful-name] */this$_stack = this._stack; this$_stack;) {
      var /* [auto-meaningful-name] */this$_stack$node = this$_stack.node
      var r = this$_stack.index++
      var i = undefined
      if (this$_stack$node.entry) {
        if (0 === r) {
          return Ct(this$_type, this$_stack$node.entry)
        }
      } else if (this$_stack$node.entries) {
        if (r <= (i = this$_stack$node.entries.length - 1)) {
          return Ct(this$_type, this$_stack$node.entries[this._reverse ? i - r : r])
        }
      } else if (r <= (i = this$_stack$node.nodes.length - 1)) {
        var o = this$_stack$node.nodes[this._reverse ? i - r : r]
        if (o) {
          if (o.entry) {
            return Ct(this$_type, o.entry)
          }
          this$_stack = this._stack = Ot(o, this$_stack)
        }
        continue
      }
      this$_stack = this._stack = this._stack.__prev
    }
    return {
      value: undefined,
      done: true
    }
  }
  return t
}(T)
function Ct(e, t) {
  return B(e, t[0], t[1])
}
function Ot(e, t) {
  return {
    node: e,
    index: 0,
    __prev: t
  }
}
function kt(e, t, n, r) {
  var i = Object.create(At$prototype)
  i.size = e
  i._root = t
  i.__ownerID = n
  i.__hash = r
  i.__altered = false
  return i
}
function St() {
  return Et || (Et = kt(0))
}
function Tt(e, t, n) {
  var i
  var o
  if (e._root) {
    var a = {
      value: false
    }
    var s = {
      value: false
    }
    i = Bt(e._root, e.__ownerID, 0, undefined, t, n, a, s)
    if (!s.value) {
      return e
    }
    o = e.size + (a.value ? n === r ? -1 : 1 : 0)
  } else {
    if (n === r) {
      return e
    }
    o = 1
    i = new vt(e.__ownerID, [[t, n]])
  }
  return e.__ownerID ? (e.size = o, e._root = i, e.__hash = undefined, e.__altered = true, e) : i ? kt(o, i) : St()
}
function Bt(e, t, n, o, a, s, c, u) {
  return e ? e.update(t, n, o, a, s, c, u) : s === r ? e : (i(u), i(c), new wt(t, o, [a, s]))
}
function Dt(e) {
  return e.constructor === wt || e.constructor === bt
}
function It(e, t, n, r, i) {
  if (e.keyHash === r) {
    return new bt(t, r, [e.entry, i])
  }
  var o
  var a = 31 & (0 === n ? e.keyHash : e.keyHash >>> n)
  var s = 31 & (0 === n ? r : r >>> n)
  var c = a === s ? [It(e, t, n + 5, r, i)] : (o = new wt(t, r, i), a < s ? [e, o] : [o, e])
  return new mt(t, 1 << a | 1 << s, c)
}
function Rt(e) {
  e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135
  e += e >> 8
  return 127 & (e += e >> 16)
}
function Ft(e, t, n, r) {
  var i = r ? e : Me(e)
  i[t] = n
  return i
}
var Pt = 8
var Nt = 16
var Mt = 8
function Lt(e) {
  return Boolean(e && e["@@__IMMUTABLE_LIST__@@"])
}
var jt = function (e) {
  function t(t) {
    var n = Wt()
    if (null === t || undefined === t) {
      return n
    }
    if (Lt(t)) {
      return t
    }
    var r = e(t)
    var /* [auto-meaningful-name] */r$size = r.size
    return 0 === r$size ? n : (je(r$size), r$size > 0 && r$size < 32 ? Qt(0, r$size, 5, null, new Ht(r.toArray())) : n.withMutations(function (e) {
      e.setSize(r$size)
      r.forEach(function (t, n) {
        return e.set(n, t)
      })
    }))
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return this(arguments)
  }
  t.prototype.toString = function () {
    return this.__toString("List [", "]")
  }
  t.prototype.get = function (e, t) {
    if ((e = s(this, e)) >= 0 && e < this.size) {
      var n = Yt(this, e += this._origin)
      return n && n.array[31 & e]
    }
    return t
  }
  t.prototype.set = function (e, t) {
    return function (e, t, n) {
      if ((t = s(e, t)) !== t) {
        return e
      }
      if (t >= e.size || t < 0) {
        return e.withMutations(function (e) {
          if (t < 0) {
            qt(e, t).set(0, n)
          } else {
            qt(e, 0, t + 1).set(t, n)
          }
        })
      }
      t += e._origin
      var /* [auto-meaningful-name] */e$_tail = e._tail
      var /* [auto-meaningful-name] */e$_root = e._root
      var o = {
        value: false
      }
      if (t >= $t(e._capacity)) {
        e$_tail = Kt(e$_tail, e.__ownerID, 0, t, n, o)
      } else {
        e$_root = Kt(e$_root, e.__ownerID, e._level, t, n, o)
      }
      if (!o.value) {
        return e
      }
      if (e.__ownerID) {
        e._root = e$_root
        e._tail = e$_tail
        e.__hash = undefined
        e.__altered = true
        return e
      }
      return Qt(e._origin, e._capacity, e._level, e$_root, e$_tail)
    }(this, e, t)
  }
  t.prototype.remove = function (e) {
    return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
  }
  t.prototype.insert = function (e, t) {
    return this.splice(e, 0, t)
  }
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = undefined, this.__altered = true, this) : Wt()
  }
  t.prototype.push = function () {
    var e = arguments
    var /* [auto-meaningful-name] */this$size = this.size
    return this.withMutations(function (n) {
      qt(n, 0, this$size + e.length)
      for (var r = 0; r < e.length; r++) {
        n.set(this$size + r, e[r])
      }
    })
  }
  t.prototype.pop = function () {
    return qt(this, 0, -1)
  }
  t.prototype.unshift = function () {
    var e = arguments
    return this.withMutations(function (t) {
      qt(t, -e.length)
      for (var n = 0; n < e.length; n++) {
        t.set(n, e[n])
      }
    })
  }
  t.prototype.shift = function () {
    return qt(this, 1)
  }
  t.prototype.concat = function () {
    for (var t = arguments, n = [], r = 0; r < arguments.length; r++) {
      var i = t[r]
      var o = e("string" !== typeof i && I(i) ? i : [i])
      if (0 !== o.size) {
        n.push(o)
      }
    }
    return 0 === n.length ? this : 0 !== this.size || this.__ownerID || 1 !== n.length ? this.withMutations(function (e) {
      n.forEach(function (t) {
        return t.forEach(function (t) {
          return e.push(t)
        })
      })
    }) : this.constructor(n[0])
  }
  t.prototype.setSize = function (e) {
    return qt(this, 0, e)
  }
  t.prototype.map = function (e, t) {
    var n = this
    return this.withMutations(function (r) {
      for (var i = 0; i < n.size; i++) {
        r.set(i, e.call(t, r.get(i), i, r))
      }
    })
  }
  t.prototype.slice = function (e, t) {
    var /* [auto-meaningful-name] */this$size = this.size
    return u(e, t, this$size) ? this : qt(this, l(e, this$size), f(t, this$size))
  }
  t.prototype.__iterator = function (e, t) {
    var n = t ? this.size : 0
    var r = zt(this, t)
    return new T(function () {
      var i = r()
      return i === Gt ? {
        value: undefined,
        done: true
      } : B(e, t ? --n : n++, i)
    })
  }
  t.prototype.__iterate = function (e, t) {
    for (var n, r = t ? this.size : 0, i = zt(this, t); (n = i()) !== Gt && false !== e(n, t ? --r : r++, this);) {
      ;
    }
    return r
  }
  t.prototype.__ensureOwner = function (e) {
    return e === this.__ownerID ? this : e ? Qt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : 0 === this.size ? Wt() : (this.__ownerID = e, this.__altered = false, this)
  }
  return t
}(y)
jt.isList = Lt
var /* [auto-meaningful-name] */jt$prototype = jt.prototype
jt$prototype["@@__IMMUTABLE_LIST__@@"] = true
jt$prototype.delete = jt$prototype.remove
jt$prototype.merge = jt$prototype.concat
jt$prototype.setIn = $e
jt$prototype.deleteIn = jt$prototype.removeIn = Ze
jt$prototype.update = tt
jt$prototype.updateIn = nt
jt$prototype.mergeIn = lt
jt$prototype.mergeDeepIn = ft
jt$prototype.withMutations = dt
jt$prototype.wasAltered = _t
jt$prototype.asImmutable = pt
jt$prototype["@@transducer/init"] = jt$prototype.asMutable = ht
jt$prototype["@@transducer/step"] = function (e, t) {
  return e.push(t)
}
jt$prototype["@@transducer/result"] = function (e) {
  return e.asImmutable()
}
var Ht = function (e, t) {
  this.array = e
  this.ownerID = t
}
Ht.prototype.removeBefore = function (e, t, n) {
  if (n === t ? 1 << t : 0 === this.array.length) {
    return this
  }
  var r = n >>> t & 31
  if (r >= this.array.length) {
    return new Ht([], e)
  }
  var i
  var o = 0 === r
  if (t > 0) {
    var a = this.array[r]
    if ((i = a && a.removeBefore(e, t - 5, n)) === a && o) {
      return this
    }
  }
  if (o && !i) {
    return this
  }
  var s = Xt(this, e)
  if (!o) {
    for (var c = 0; c < r; c++) {
      s.array[c] = undefined
    }
  }
  if (i) {
    s.array[r] = i
  }
  return s
}
Ht.prototype.removeAfter = function (e, t, n) {
  if (n === (t ? 1 << t : 0) || 0 === this.array.length) {
    return this
  }
  var r
  var i = n - 1 >>> t & 31
  if (i >= this.array.length) {
    return this
  }
  if (t > 0) {
    var o = this.array[i]
    if ((r = o && o.removeAfter(e, t - 5, n)) === o && i === this.array.length - 1) {
      return this
    }
  }
  var a = Xt(this, e)
  a.array.splice(i + 1)
  if (r) {
    a.array[i] = r
  }
  return a
}
var Vt
var Gt = {}
function zt(e, t) {
  var /* [auto-meaningful-name] */e$_origin = e._origin
  var /* [auto-meaningful-name] */e$_capacity = e._capacity
  var i = $t(e$_capacity)
  var /* [auto-meaningful-name] */e$_tail = e._tail
  return a(e._root, e._level, 0)
  function a(e, s, c) {
    return 0 === s ? function (e, a) {
      var s = a === i ? e$_tail && e$_tail.array : e && e.array
      var c = a > e$_origin ? 0 : e$_origin - a
      var u = e$_capacity - a
      if (u > 32) {
        u = 32
      }
      return function () {
        if (c === u) {
          return Gt
        }
        var e = t ? --u : c++
        return s && s[e]
      }
    }(e, c) : function (e, i, o) {
      var s
      var c = e && e.array
      var u = o > e$_origin ? 0 : e$_origin - o >> i
      var l = 1 + (e$_capacity - o >> i)
      if (l > 32) {
        l = 32
      }
      return function () {
        for (;;) {
          if (s) {
            var e = s()
            if (e !== Gt) {
              return e
            }
            s = null
          }
          if (u === l) {
            return Gt
          }
          var n = t ? --l : u++
          s = a(c && c[n], i - 5, o + (n << i))
        }
      }
    }(e, s, c)
  }
}
function Qt(e, t, n, r, i, o, a) {
  var s = Object.create(jt$prototype)
  s.size = t - e
  s._origin = e
  s._capacity = t
  s._level = n
  s._root = r
  s._tail = i
  s.__ownerID = o
  s.__hash = a
  s.__altered = false
  return s
}
function Wt() {
  return Vt || (Vt = Qt(0, 0, 5))
}
function Kt(e, t, n, r, o, a) {
  var s
  var c = r >>> n & 31
  var u = e && c < e.array.length
  if (!u && undefined === o) {
    return e
  }
  if (n > 0) {
    var l = e && e.array[c]
    var f = Kt(l, t, n - 5, r, o, a)
    return f === l ? e : ((s = Xt(e, t)).array[c] = f, s)
  }
  return u && e.array[c] === o ? e : (a && i(a), s = Xt(e, t), undefined === o && c === s.array.length - 1 ? s.array.pop() : s.array[c] = o, s)
}
function Xt(e, t) {
  return t && e && t === e.ownerID ? e : new Ht(e ? e.array.slice() : [], t)
}
function Yt(e, t) {
  if (t >= $t(e._capacity)) {
    return e._tail
  }
  if (t < 1 << e._level + 5) {
    for (var /* [auto-meaningful-name] */e$_root = e._root, /* [auto-meaningful-name] */e$_level = e._level; e$_root && e$_level > 0;) {
      e$_root = e$_root.array[t >>> e$_level & 31]
      e$_level -= 5
    }
    return e$_root
  }
}
function qt(e, t, n) {
  if (undefined !== t) {
    t |= 0
  }
  if (undefined !== n) {
    n |= 0
  }
  var r = e.__ownerID || new o()
  var /* [auto-meaningful-name] */e$_origin = e._origin
  var /* [auto-meaningful-name] */e$_capacity = e._capacity
  var s = e$_origin + t
  var c = undefined === n ? e$_capacity : n < 0 ? e$_capacity + n : e$_origin + n
  if (s === e$_origin && c === e$_capacity) {
    return e
  }
  if (s >= c) {
    return e.clear()
  }
  for (var /* [auto-meaningful-name] */e$_level = e._level, /* [auto-meaningful-name] */e$_root = e._root, f = 0; s + f < 0;) {
    e$_root = new Ht(e$_root && e$_root.array.length ? [undefined, e$_root] : [], r)
    f += 1 << (e$_level += 5)
  }
  if (f) {
    s += f
    e$_origin += f
    c += f
    e$_capacity += f
  }
  for (var d = $t(e$_capacity), h = $t(c); h >= 1 << e$_level + 5;) {
    e$_root = new Ht(e$_root && e$_root.array.length ? [e$_root] : [], r)
    e$_level += 5
  }
  var /* [auto-meaningful-name] */e$_tail = e._tail
  var _ = h < d ? Yt(e, c - 1) : h > d ? new Ht([], r) : e$_tail
  if (e$_tail && h > d && s < e$_capacity && e$_tail.array.length) {
    for (var A = e$_root = Xt(e$_root, r), g = e$_level; g > 5; g -= 5) {
      var v = d >>> g & 31
      A = A.array[v] = Xt(A.array[v], r)
    }
    A.array[d >>> 5 & 31] = e$_tail
  }
  if (c < e$_capacity) {
    _ = _ && _.removeAfter(r, 0, c)
  }
  if (s >= h) {
    s -= h
    c -= h
    e$_level = 5
    e$_root = null
    _ = _ && _.removeBefore(r, 0, s)
  } else if (s > e$_origin || h < d) {
    for (f = 0; e$_root;) {
      var m = s >>> e$_level & 31
      if (m !== h >>> e$_level & 31) {
        break
      }
      if (m) {
        f += (1 << e$_level) * m
      }
      e$_level -= 5
      e$_root = e$_root.array[m]
    }
    if (e$_root && s > e$_origin) {
      e$_root = e$_root.removeBefore(r, e$_level, s - f)
    }
    if (e$_root && h < d) {
      e$_root = e$_root.removeAfter(r, e$_level, h - f)
    }
    if (f) {
      s -= f
      c -= f
    }
  }
  return e.__ownerID ? (e.size = c - s, e._origin = s, e._capacity = c, e._level = e$_level, e._root = e$_root, e._tail = _, e.__hash = undefined, e.__altered = true, e) : Qt(s, c, e$_level, e$_root, _)
}
function $t(e) {
  return e < 32 ? 0 : e - 1 >>> 5 << 5
}
var Jt
var Zt = function (e) {
  function t(e) {
    return null === e || undefined === e ? tn() : $(e) ? e : tn().withMutations(function (t) {
      var n = m(e)
      je(n.size)
      n.forEach(function (e, n) {
        return t.set(n, e)
      })
    })
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return this(arguments)
  }
  t.prototype.toString = function () {
    return this.__toString("OrderedMap {", "}")
  }
  t.prototype.get = function (e, t) {
    var n = this._map.get(e)
    return undefined !== n ? this._list.get(n)[1] : t
  }
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : tn()
  }
  t.prototype.set = function (e, t) {
    return nn(this, e, t)
  }
  t.prototype.remove = function (e) {
    return nn(this, e, r)
  }
  t.prototype.wasAltered = function () {
    return this._map.wasAltered() || this._list.wasAltered()
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    return this._list.__iterate(function (t) {
      return t && e(t[1], t[0], n)
    }, t)
  }
  t.prototype.__iterator = function (e, t) {
    return this._list.fromEntrySeq().__iterator(e, t)
  }
  t.prototype.__ensureOwner = function (e) {
    if (e === this.__ownerID) {
      return this
    }
    var t = this._map.__ensureOwner(e)
    var n = this._list.__ensureOwner(e)
    return e ? en(t, n, e, this.__hash) : 0 === this.size ? tn() : (this.__ownerID = e, this._map = t, this._list = n, this)
  }
  return t
}(At)
function en(e, t, n, r) {
  var i = Object.create(Zt.prototype)
  i.size = e ? e.size : 0
  i._map = e
  i._list = t
  i.__ownerID = n
  i.__hash = r
  return i
}
function tn() {
  return Jt || (Jt = en(St(), Wt()))
}
function nn(e, t, n) {
  var i
  var o
  var /* [auto-meaningful-name] */e$_map = e._map
  var /* [auto-meaningful-name] */e$_list = e._list
  var c = e$_map.get(t)
  var u = undefined !== c
  if (n === r) {
    if (!u) {
      return e
    }
    if (e$_list.size >= 32 && e$_list.size >= 2 * e$_map.size) {
      i = (o = e$_list.filter(function (e, t) {
        return undefined !== e && c !== t
      })).toKeyedSeq().map(function (e) {
        return e[0]
      }).flip().toMap()
      if (e.__ownerID) {
        i.__ownerID = o.__ownerID = e.__ownerID
      }
    } else {
      i = e$_map.remove(t)
      o = c === e$_list.size - 1 ? e$_list.pop() : e$_list.set(c, undefined)
    }
  } else if (u) {
    if (n === e$_list.get(c)[1]) {
      return e
    }
    i = e$_map
    o = e$_list.set(c, [t, n])
  } else {
    i = e$_map.set(t, e$_list.size)
    o = e$_list.set(e$_list.size, [t, n])
  }
  return e.__ownerID ? (e.size = i.size, e._map = i, e._list = o, e.__hash = undefined, e) : en(i, o)
}
Zt.isOrderedMap = $
Zt.prototype[__IMMUTABLE_ORDERED__] = true
Zt.prototype.delete = Zt.prototype.remove
function rn(e) {
  return Boolean(e && e["@@__IMMUTABLE_STACK__@@"])
}
var on = function (e) {
  function t(e) {
    return null === e || undefined === e ? un() : rn(e) ? e : un().pushAll(e)
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return this(arguments)
  }
  t.prototype.toString = function () {
    return this.__toString("Stack [", "]")
  }
  t.prototype.get = function (e, t) {
    var /* [auto-meaningful-name] */this$_head = this._head
    for (e = s(this, e); this$_head && e--;) {
      this$_head = this$_head.next
    }
    return this$_head ? this$_head.value : t
  }
  t.prototype.peek = function () {
    return this._head && this._head.value
  }
  t.prototype.push = function () {
    var e = arguments
    if (0 === arguments.length) {
      return this
    }
    for (var t = this.size + arguments.length, /* [auto-meaningful-name] */this$_head = this._head, r = arguments.length - 1; r >= 0; r--) {
      this$_head = {
        value: e[r],
        next: this$_head
      }
    }
    return this.__ownerID ? (this.size = t, this._head = this$_head, this.__hash = undefined, this.__altered = true, this) : cn(t, this$_head)
  }
  t.prototype.pushAll = function (t) {
    if (0 === (t = e(t)).size) {
      return this
    }
    if (0 === this.size && rn(t)) {
      return t
    }
    je(t.size)
    var /* [auto-meaningful-name] */this$size = this.size
    var /* [auto-meaningful-name] */this$_head = this._head
    t.__iterate(function (e) {
      this$size++
      this$_head = {
        value: e,
        next: this$_head
      }
    }, true)
    return this.__ownerID ? (this.size = this$size, this._head = this$_head, this.__hash = undefined, this.__altered = true, this) : cn(this$size, this$_head)
  }
  t.prototype.pop = function () {
    return this.slice(1)
  }
  t.prototype.clear = function () {
    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = undefined, this.__hash = undefined, this.__altered = true, this) : un()
  }
  t.prototype.slice = function (t, n) {
    if (u(t, n, this.size)) {
      return this
    }
    var r = l(t, this.size)
    if (f(n, this.size) !== this.size) {
      return e.prototype.slice.call(this, t, n)
    }
    for (var i = this.size - r, /* [auto-meaningful-name] */this$_head = this._head; r--;) {
      this$_head = this$_head.next
    }
    return this.__ownerID ? (this.size = i, this._head = this$_head, this.__hash = undefined, this.__altered = true, this) : cn(i, this$_head)
  }
  t.prototype.__ensureOwner = function (e) {
    return e === this.__ownerID ? this : e ? cn(this.size, this._head, e, this.__hash) : 0 === this.size ? un() : (this.__ownerID = e, this.__altered = false, this)
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    if (t) {
      return new V(this.toArray()).__iterate(function (t, r) {
        return e(t, r, n)
      }, t)
    }
    for (var r = 0, /* [auto-meaningful-name] */this$_head = this._head; this$_head && false !== e(this$_head.value, r++, this);) {
      this$_head = this$_head.next
    }
    return r
  }
  t.prototype.__iterator = function (e, t) {
    if (t) {
      return new V(this.toArray()).__iterator(e, t)
    }
    var n = 0
    var /* [auto-meaningful-name] */this$_head = this._head
    return new T(function () {
      if (this$_head) {
        var /* [auto-meaningful-name] */this$_head$value = this$_head.value
        this$_head = this$_head.next
        return B(e, n++, this$_head$value)
      }
      return {
        value: undefined,
        done: true
      }
    })
  }
  return t
}(y)
on.isStack = rn
var an
var /* [auto-meaningful-name] */on$prototype = on.prototype
function cn(e, t, n, r) {
  var i = Object.create(on$prototype)
  i.size = e
  i._head = t
  i.__ownerID = n
  i.__hash = r
  i.__altered = false
  return i
}
function un() {
  return an || (an = cn(0))
}
on$prototype["@@__IMMUTABLE_STACK__@@"] = true
on$prototype.shift = on$prototype.pop
on$prototype.unshift = on$prototype.push
on$prototype.unshiftAll = on$prototype.pushAll
on$prototype.withMutations = dt
on$prototype.wasAltered = _t
on$prototype.asImmutable = pt
on$prototype["@@transducer/init"] = on$prototype.asMutable = ht
on$prototype["@@transducer/step"] = function (e, t) {
  return e.unshift(t)
}
on$prototype["@@transducer/result"] = function (e) {
  return e.asImmutable()
}
function ln(e) {
  return Boolean(e && e["@@__IMMUTABLE_SET__@@"])
}
function fn(e) {
  return ln(e) && O(e)
}
function dn(e, t) {
  if (e === t) {
    return true
  }
  if (!p(t) || undefined !== e.size && undefined !== t.size && e.size !== t.size || undefined !== e.__hash && undefined !== t.__hash && e.__hash !== t.__hash || _(e) !== _(t) || A(e) !== A(t) || O(e) !== O(t)) {
    return false
  }
  if (0 === e.size && 0 === t.size) {
    return true
  }
  var n = !g(e)
  if (O(e)) {
    var i = e.entries()
    return t.every(function (e, t) {
      var /* [auto-meaningful-name] */i$next$value = i.next().value
      return i$next$value && Z(i$next$value[1], e) && (n || Z(i$next$value[0], t))
    }) && i.next().done
  }
  var o = false
  if (undefined === e.size) {
    if (undefined === t.size) {
      if ("function" === typeof e.cacheResult) {
        e.cacheResult()
      }
    } else {
      o = true
      var a = e
      e = t
      t = a
    }
  }
  var s = true
  var c = t.__iterate(function (t, i) {
    if (n ? !e.has(t) : o ? !Z(t, e.get(i, r)) : !Z(e.get(i, r), t)) {
      s = false
      return false
    }
  })
  return s && e.size === c
}
function hn(e, t) {
  var n = function (n) {
    e.prototype[n] = t[n]
  }
  Object.keys(t).forEach(n)
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(t).forEach(n)
  }
  return e
}
function pn(e) {
  if (!e || "object" !== typeof e) {
    return e
  }
  if (!p(e)) {
    if (!Ve(e)) {
      return e
    }
    e = L(e)
  }
  if (_(e)) {
    var t = {}
    e.__iterate(function (e, n) {
      t[n] = pn(e)
    })
    return t
  }
  var n = []
  e.__iterate(function (e) {
    n.push(pn(e))
  })
  return n
}
var _n = function (e) {
  function t(t) {
    return null === t || undefined === t ? yn() : ln(t) && !O(t) ? t : yn().withMutations(function (n) {
      var r = e(t)
      je(r.size)
      r.forEach(function (e) {
        return n.add(e)
      })
    })
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return this(arguments)
  }
  t.fromKeys = function (e) {
    return this(m(e).keySeq())
  }
  t.intersect = function (e) {
    return (e = v(e).toArray()).length ? _n$prototype.intersect.apply(t(e.pop()), e) : yn()
  }
  t.union = function (e) {
    return (e = v(e).toArray()).length ? _n$prototype.union.apply(t(e.pop()), e) : yn()
  }
  t.prototype.toString = function () {
    return this.__toString("Set {", "}")
  }
  t.prototype.has = function (e) {
    return this._map.has(e)
  }
  t.prototype.add = function (e) {
    return vn(this, this._map.set(e, e))
  }
  t.prototype.remove = function (e) {
    return vn(this, this._map.remove(e))
  }
  t.prototype.clear = function () {
    return vn(this, this._map.clear())
  }
  t.prototype.map = function (e, t) {
    var n = this
    var r = []
    var i = []
    this.forEach(function (o) {
      var a = e.call(t, o, o, n)
      if (a !== o) {
        r.push(o)
        i.push(a)
      }
    })
    return this.withMutations(function (e) {
      r.forEach(function (t) {
        return e.remove(t)
      })
      i.forEach(function (t) {
        return e.add(t)
      })
    })
  }
  t.prototype.union = function () {
    for (var t = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
      t[arguments$length] = arguments[arguments$length]
    }
    return 0 === (t = t.filter(function (e) {
      return 0 !== e.size
    })).length ? this : 0 !== this.size || this.__ownerID || 1 !== t.length ? this.withMutations(function (n) {
        for (var r = 0; r < t.length; r++) {
          e(t[r]).forEach(function (e) {
            return n.add(e)
          })
        }
      }) : this.constructor(t[0])
  }
  t.prototype.intersect = function () {
    for (var t = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
      t[arguments$length] = arguments[arguments$length]
    }
    if (0 === t.length) {
      return this
    }
    t = t.map(function (t) {
      return e(t)
    })
    var r = []
    this.forEach(function (e) {
      if (!t.every(function (t) {
        return t.includes(e)
      })) {
        r.push(e)
      }
    })
    return this.withMutations(function (e) {
      r.forEach(function (t) {
        e.remove(t)
      })
    })
  }
  t.prototype.subtract = function () {
    for (var t = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
      t[arguments$length] = arguments[arguments$length]
    }
    if (0 === t.length) {
      return this
    }
    t = t.map(function (t) {
      return e(t)
    })
    var r = []
    this.forEach(function (e) {
      if (t.some(function (t) {
        return t.includes(e)
      })) {
        r.push(e)
      }
    })
    return this.withMutations(function (e) {
      r.forEach(function (t) {
        e.remove(t)
      })
    })
  }
  t.prototype.sort = function (e) {
    return Ln(ke(this, e))
  }
  t.prototype.sortBy = function (e, t) {
    return Ln(ke(this, t, e))
  }
  t.prototype.wasAltered = function () {
    return this._map.wasAltered()
  }
  t.prototype.__iterate = function (e, t) {
    var n = this
    return this._map.__iterate(function (t) {
      return e(t, t, n)
    }, t)
  }
  t.prototype.__iterator = function (e, t) {
    return this._map.__iterator(e, t)
  }
  t.prototype.__ensureOwner = function (e) {
    if (e === this.__ownerID) {
      return this
    }
    var t = this._map.__ensureOwner(e)
    return e ? this.__make(t, e) : 0 === this.size ? this.__empty() : (this.__ownerID = e, this._map = t, this)
  }
  return t
}(b)
_n.isSet = ln
var An
var /* [auto-meaningful-name] */_n$prototype = _n.prototype
function vn(e, t) {
  return e.__ownerID ? (e.size = t.size, e._map = t, e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
}
function mn(e, t) {
  var n = Object.create(_n$prototype)
  n.size = e ? e.size : 0
  n._map = e
  n.__ownerID = t
  return n
}
function yn() {
  return An || (An = mn(St()))
}
_n$prototype["@@__IMMUTABLE_SET__@@"] = true
_n$prototype.delete = _n$prototype.remove
_n$prototype.merge = _n$prototype.concat = _n$prototype.union
_n$prototype.withMutations = dt
_n$prototype.asImmutable = pt
_n$prototype["@@transducer/init"] = _n$prototype.asMutable = ht
_n$prototype["@@transducer/step"] = function (e, t) {
  return e.add(t)
}
_n$prototype["@@transducer/result"] = function (e) {
  return e.asImmutable()
}
_n$prototype.__empty = yn
_n$prototype.__make = mn
var bn
var wn = function (e) {
  function t(e, n, r) {
    if (!(this instanceof t)) {
      return new t(e, n, r)
    }
    Le(0 !== r, "Cannot step a Range by 0")
    e = e || 0
    if (undefined === n) {
      n = 1 / 0
    }
    r = undefined === r ? 1 : Math.abs(r)
    if (n < e) {
      r = -r
    }
    this._start = e
    this._end = n
    this._step = r
    this.size = Math.max(0, Math.ceil((n - e) / r - 1) + 1)
    if (0 === this.size) {
      if (bn) {
        return bn
      }
      bn = this
    }
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.prototype.toString = function () {
    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
  }
  t.prototype.get = function (e, t) {
    return this.has(e) ? this._start + s(this, e) * this._step : t
  }
  t.prototype.includes = function (e) {
    var t = (e - this._start) / this._step
    return t >= 0 && t < this.size && t === Math.floor(t)
  }
  t.prototype.slice = function (e, n) {
    return u(e, n, this.size) ? this : (e = l(e, this.size), (n = f(n, this.size)) <= e ? new t(0, 0) : new t(this.get(e, this._end), this.get(n, this._end), this._step))
  }
  t.prototype.indexOf = function (e) {
    var t = e - this._start
    if (t % this._step === 0) {
      var n = t / this._step
      if (n >= 0 && n < this.size) {
        return n
      }
    }
    return -1
  }
  t.prototype.lastIndexOf = function (e) {
    return this.indexOf(e)
  }
  t.prototype.__iterate = function (e, t) {
    for (var /* [auto-meaningful-name] */this$size = this.size, /* [auto-meaningful-name] */this$_step = this._step, i = t ? this._start + (this$size - 1) * this$_step : this._start, o = 0; o !== this$size && false !== e(i, t ? this$size - ++o : o++, this);) {
      i += t ? -this$_step : this$_step
    }
    return o
  }
  t.prototype.__iterator = function (e, t) {
    var /* [auto-meaningful-name] */this$size = this.size
    var /* [auto-meaningful-name] */this$_step = this._step
    var i = t ? this._start + (this$size - 1) * this$_step : this._start
    var o = 0
    return new T(function () {
      if (o === this$size) {
        return {
          value: undefined,
          done: true
        }
      }
      var a = i
      i += t ? -this$_step : this$_step
      return B(e, t ? this$size - ++o : o++, a)
    })
  }
  t.prototype.equals = function (e) {
    return e instanceof t ? this._start === e._start && this._end === e._end && this._step === e._step : dn(this, e)
  }
  return t
}(U)
function En(e, t, n) {
  for (var i = Ue(t), o = 0; o !== i.length;) {
    if ((e = Qe(e, i[o++], r)) === r) {
      return n
    }
  }
  return e
}
function xn(e, t) {
  return En(this, e, t)
}
function Cn(e, t) {
  return En(e, t, r) !== r
}
function On() {
  je(this.size)
  var e = {}
  this.__iterate(function (t, n) {
    e[n] = t
  })
  return e
}
v.isIterable = p
v.isKeyed = _
v.isIndexed = A
v.isAssociative = g
v.isOrdered = O
v.Iterator = T
hn(v, {
  toArray: function () {
    je(this.size)
    var e = new Array(this.size || 0)
    var t = _(this)
    var n = 0
    this.__iterate(function (r, i) {
      e[n++] = t ? [i, r] : r
    })
    return e
  },
  toIndexedSeq: function () {
    return new Ae(this)
  },
  toJS: function () {
    return pn(this)
  },
  toKeyedSeq: function () {
    return new _e(this, true)
  },
  toMap: function () {
    return At(this.toKeyedSeq())
  },
  toObject: On,
  toOrderedMap: function () {
    return Zt(this.toKeyedSeq())
  },
  toOrderedSet: function () {
    return Ln(_(this) ? this.valueSeq() : this)
  },
  toSet: function () {
    return _n(_(this) ? this.valueSeq() : this)
  },
  toSetSeq: function () {
    return new ge(this)
  },
  toSeq: function () {
    return A(this) ? this.toIndexedSeq() : _(this) ? this.toKeyedSeq() : this.toSetSeq()
  },
  toStack: function () {
    return on(_(this) ? this.valueSeq() : this)
  },
  toList: function () {
    return jt(_(this) ? this.valueSeq() : this)
  },
  toString: function () {
    return "[Collection]"
  },
  __toString: function (e, t) {
    return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
  },
  concat: function () {
    for (var e = [], /* [auto-meaningful-name] */arguments$length = arguments.length; arguments$length--;) {
      e[arguments$length] = arguments[arguments$length]
    }
    return De(this, Ce(this, e))
  },
  includes: function (e) {
    return this.some(function (t) {
      return Z(t, e)
    })
  },
  entries: function () {
    return this.__iterator(2)
  },
  every: function (e, t) {
    je(this.size)
    var n = true
    this.__iterate(function (r, i, o) {
      if (!e.call(t, r, i, o)) {
        n = false
        return false
      }
    })
    return n
  },
  filter: function (e, t) {
    return De(this, we(this, e, t, true))
  },
  find: function (e, t, n) {
    var r = this.findEntry(e, t)
    return r ? r[1] : n
  },
  forEach: function (e, t) {
    je(this.size)
    return this.__iterate(t ? e.bind(t) : e)
  },
  join: function (e) {
    je(this.size)
    e = undefined !== e ? "" + e : ","
    var t = ""
    var n = true
    this.__iterate(function (r) {
      if (n) {
        n = false
      } else {
        t += e
      }
      t += null !== r && undefined !== r ? r.toString() : ""
    })
    return t
  },
  keys: function () {
    return this.__iterator(0)
  },
  map: function (e, t) {
    return De(this, ye(this, e, t))
  },
  reduce: function (e, t, n) {
    return Bn(this, e, t, n, arguments.length < 2, false)
  },
  reduceRight: function (e, t, n) {
    return Bn(this, e, t, n, arguments.length < 2, true)
  },
  reverse: function () {
    return De(this, be(this, true))
  },
  slice: function (e, t) {
    return De(this, Ee(this, e, t, true))
  },
  some: function (e, t) {
    return !this.every(Rn(e), t)
  },
  sort: function (e) {
    return De(this, ke(this, e))
  },
  values: function () {
    return this.__iterator(1)
  },
  butLast: function () {
    return this.slice(0, -1)
  },
  isEmpty: function () {
    return undefined !== this.size ? 0 === this.size : !this.some(function () {
      return true
    })
  },
  count: function (e, t) {
    return a(e ? this.toSeq().filter(e, t) : this)
  },
  countBy: function (e, t) {
    return function (e, t, n) {
      var r = At().asMutable()
      e.__iterate(function (i, o) {
        r.update(t.call(n, i, o, e), 0, function (e) {
          return e + 1
        })
      })
      return r.asImmutable()
    }(this, e, t)
  },
  equals: function (e) {
    return dn(this, e)
  },
  entrySeq: function () {
    var e = this
    if (e._cache) {
      return new V(e._cache)
    }
    var t = e.toSeq().map(In).toIndexedSeq()
    t.fromEntrySeq = function () {
      return e.toSeq()
    }
    return t
  },
  filterNot: function (e, t) {
    return this.filter(Rn(e), t)
  },
  findEntry: function (e, t, n) {
    var r = n
    this.__iterate(function (n, i, o) {
      if (e.call(t, n, i, o)) {
        r = [i, n]
        return false
      }
    })
    return r
  },
  findKey: function (e, t) {
    var n = this.findEntry(e, t)
    return n && n[0]
  },
  findLast: function (e, t, n) {
    return this.toKeyedSeq().reverse().find(e, t, n)
  },
  findLastEntry: function (e, t, n) {
    return this.toKeyedSeq().reverse().findEntry(e, t, n)
  },
  findLastKey: function (e, t) {
    return this.toKeyedSeq().reverse().findKey(e, t)
  },
  first: function (e) {
    return this.find(c, null, e)
  },
  flatMap: function (e, t) {
    return De(this, function (e, t, n) {
      var r = Re(e)
      return e.toSeq().map(function (i, o) {
        return r(t.call(n, i, o, e))
      }).flatten(true)
    }(this, e, t))
  },
  flatten: function (e) {
    return De(this, Oe(this, e, true))
  },
  fromEntrySeq: function () {
    return new ve(this)
  },
  get: function (e, t) {
    return this.find(function (t, n) {
      return Z(n, e)
    }, undefined, t)
  },
  getIn: xn,
  groupBy: function (e, t) {
    return function (e, t, n) {
      var r = _(e)
      var i = (O(e) ? Zt() : At()).asMutable()
      e.__iterate(function (o, a) {
        i.update(t.call(n, o, a, e), function (e) {
          (e = e || []).push(r ? [a, o] : o)
          return e
        })
      })
      var o = Re(e)
      return i.map(function (t) {
        return De(e, o(t))
      }).asImmutable()
    }(this, e, t)
  },
  has: function (e) {
    return this.get(e, r) !== r
  },
  hasIn: function (e) {
    return Cn(this, e)
  },
  isSubset: function (e) {
    e = "function" === typeof e.includes ? e : v(e)
    return this.every(function (t) {
      return e.includes(t)
    })
  },
  isSuperset: function (e) {
    return (e = "function" === typeof e.isSubset ? e : v(e)).isSubset(this)
  },
  keyOf: function (e) {
    return this.findKey(function (t) {
      return Z(t, e)
    })
  },
  keySeq: function () {
    return this.toSeq().map(Dn).toIndexedSeq()
  },
  last: function (e) {
    return this.toSeq().reverse().first(e)
  },
  lastKeyOf: function (e) {
    return this.toKeyedSeq().reverse().keyOf(e)
  },
  max: function (e) {
    return Se(this, e)
  },
  maxBy: function (e, t) {
    return Se(this, t, e)
  },
  min: function (e) {
    return Se(this, e ? Fn(e) : Nn)
  },
  minBy: function (e, t) {
    return Se(this, t ? Fn(t) : Nn, e)
  },
  rest: function () {
    return this.slice(1)
  },
  skip: function (e) {
    return 0 === e ? this : this.slice(Math.max(0, e))
  },
  skipLast: function (e) {
    return 0 === e ? this : this.slice(0, -Math.max(0, e))
  },
  skipWhile: function (e, t) {
    return De(this, xe(this, e, t, true))
  },
  skipUntil: function (e, t) {
    return this.skipWhile(Rn(e), t)
  },
  sortBy: function (e, t) {
    return De(this, ke(this, t, e))
  },
  take: function (e) {
    return this.slice(0, Math.max(0, e))
  },
  takeLast: function (e) {
    return this.slice(-Math.max(0, e))
  },
  takeWhile: function (e, t) {
    return De(this, function (e, t, n) {
      var r = Fe(e)
      r.__iterateUncached = function (r, i) {
        var o = this
        if (i) {
          return this.cacheResult().__iterate(r, i)
        }
        var a = 0
        e.__iterate(function (e, i, s) {
          return t.call(n, e, i, s) && ++a && r(e, i, o)
        })
        return a
      }
      r.__iteratorUncached = function (r, i) {
        var o = this
        if (i) {
          return this.cacheResult().__iterator(r, i)
        }
        var a = e.__iterator(2, i)
        var s = true
        return new T(function () {
          if (!s) {
            return {
              value: undefined,
              done: true
            }
          }
          var e = a.next()
          if (e.done) {
            return e
          }
          var /* [auto-meaningful-name] */e$value = e.value
          var c = e$value[0]
          var u = e$value[1]
          return t.call(n, u, c, o) ? 2 === r ? e : B(r, c, u, e) : (s = false, {
            value: undefined,
            done: true
          })
        })
      }
      return r
    }(this, e, t))
  },
  takeUntil: function (e, t) {
    return this.takeWhile(Rn(e), t)
  },
  update: function (e) {
    return e(this)
  },
  valueSeq: function () {
    return this.toIndexedSeq()
  },
  hashCode: function () {
    return this.__hash || (this.__hash = function (e) {
      if (e.size === 1 / 0) {
        return 0
      }
      var t = O(e)
      var n = _(e)
      var r = t ? 1 : 0
      return function (e, t) {
        t = ee(t, 3432918353)
        t = ee(t << 15 | t >>> -15, 461845907)
        t = ee(t << 13 | t >>> -13, 5)
        t = ee((t = (t + 3864292196 | 0) ^ e) ^ t >>> 16, 2246822507)
        return t = te((t = ee(t ^ t >>> 13, 3266489909)) ^ t >>> 16)
      }(e.__iterate(n ? t ? function (e, t) {
        r = 31 * r + Mn(re(e), re(t)) | 0
      } : function (e, t) {
        r = r + Mn(re(e), re(t)) | 0
      } : t ? function (e) {
        r = 31 * r + re(e) | 0
      } : function (e) {
        r = r + re(e) | 0
      }), r)
    }(this))
  }
})
var /* [auto-meaningful-name] */v$prototype = v.prototype
v$prototype["@@__IMMUTABLE_ITERABLE__@@"] = true
v$prototype[S] = v$prototype.values
v$prototype.toJSON = v$prototype.toArray
v$prototype.__toStringMapper = Ge
v$prototype.inspect = v$prototype.toSource = function () {
  return this.toString()
}
v$prototype.chain = v$prototype.flatMap
v$prototype.contains = v$prototype.includes
hn(m, {
  flip: function () {
    return De(this, me(this))
  },
  mapEntries: function (e, t) {
    var n = this
    var r = 0
    return De(this, this.toSeq().map(function (i, o) {
      return e.call(t, [o, i], r++, n)
    }).fromEntrySeq())
  },
  mapKeys: function (e, t) {
    var n = this
    return De(this, this.toSeq().flip().map(function (r, i) {
      return e.call(t, r, i, n)
    }).flip())
  }
})
var /* [auto-meaningful-name] */m$prototype = m.prototype
m$prototype["@@__IMMUTABLE_KEYED__@@"] = true
m$prototype[S] = v$prototype.entries
m$prototype.toJSON = On
m$prototype.__toStringMapper = function (e, t) {
  return Ge(t) + ": " + Ge(e)
}
hn(y, {
  toKeyedSeq: function () {
    return new _e(this, false)
  },
  filter: function (e, t) {
    return De(this, we(this, e, t, false))
  },
  findIndex: function (e, t) {
    var n = this.findEntry(e, t)
    return n ? n[0] : -1
  },
  indexOf: function (e) {
    var t = this.keyOf(e)
    return undefined === t ? -1 : t
  },
  lastIndexOf: function (e) {
    var t = this.lastKeyOf(e)
    return undefined === t ? -1 : t
  },
  reverse: function () {
    return De(this, be(this, false))
  },
  slice: function (e, t) {
    return De(this, Ee(this, e, t, false))
  },
  splice: function (e, t) {
    var /* [auto-meaningful-name] */arguments$length = arguments.length
    t = Math.max(t || 0, 0)
    if (0 === arguments$length || 2 === arguments$length && !t) {
      return this
    }
    e = l(e, e < 0 ? this.count() : this.size)
    var r = this.slice(0, e)
    return De(this, 1 === arguments$length ? r : r.concat(Me(arguments, 2), this.slice(e + t)))
  },
  findLastIndex: function (e, t) {
    var n = this.findLastEntry(e, t)
    return n ? n[0] : -1
  },
  first: function (e) {
    return this.get(0, e)
  },
  flatten: function (e) {
    return De(this, Oe(this, e, false))
  },
  get: function (e, t) {
    return (e = s(this, e)) < 0 || this.size === 1 / 0 || undefined !== this.size && e > this.size ? t : this.find(function (t, n) {
      return n === e
    }, undefined, t)
  },
  has: function (e) {
    return (e = s(this, e)) >= 0 && (undefined !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
  },
  interpose: function (e) {
    return De(this, function (e, t) {
      var n = Fe(e)
      n.size = e.size && 2 * e.size - 1
      n.__iterateUncached = function (n, r) {
        var i = this
        var o = 0
        e.__iterate(function (e) {
          return (!o || false !== n(t, o++, i)) && false !== n(e, o++, i)
        }, r)
        return o
      }
      n.__iteratorUncached = function (n, r) {
        var i
        var o = e.__iterator(1, r)
        var a = 0
        return new T(function () {
          return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? B(n, a++, t) : B(n, a++, i.value, i)
        })
      }
      return n
    }(this, e))
  },
  interleave: function () {
    var e = [this].concat(Me(arguments))
    var t = Be(this.toSeq(), U.of, e)
    var n = t.flatten(true)
    if (t.size) {
      n.size = t.size * e.length
    }
    return De(this, n)
  },
  keySeq: function () {
    return wn(0, this.size)
  },
  last: function (e) {
    return this.get(-1, e)
  },
  skipWhile: function (e, t) {
    return De(this, xe(this, e, t, false))
  },
  zip: function () {
    var e = [this].concat(Me(arguments))
    return De(this, Be(this, Pn, e))
  },
  zipAll: function () {
    var e = [this].concat(Me(arguments))
    return De(this, Be(this, Pn, e, true))
  },
  zipWith: function (e) {
    var t = Me(arguments)
    t[0] = this
    return De(this, Be(this, e, t))
  }
})
var /* [auto-meaningful-name] */y$prototype = y.prototype
function Bn(e, t, n, r, i, o) {
  je(e.size)
  e.__iterate(function (e, o, a) {
    if (i) {
      i = false
      n = e
    } else {
      n = t.call(r, n, e, o, a)
    }
  }, o)
  return n
}
function Dn(e, t) {
  return t
}
function In(e, t) {
  return [t, e]
}
function Rn(e) {
  return function () {
    return !e.apply(this, arguments)
  }
}
function Fn(e) {
  return function () {
    return -e.apply(this, arguments)
  }
}
function Pn() {
  return Me(arguments)
}
function Nn(e, t) {
  return e < t ? 1 : e > t ? -1 : 0
}
function Mn(e, t) {
  return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
}
y$prototype["@@__IMMUTABLE_INDEXED__@@"] = true
y$prototype[__IMMUTABLE_ORDERED__] = true
hn(b, {
  get: function (e, t) {
    return this.has(e) ? e : t
  },
  includes: function (e) {
    return this.has(e)
  },
  keySeq: function () {
    return this.valueSeq()
  }
})
b.prototype.has = v$prototype.includes
b.prototype.contains = b.prototype.includes
hn(j, m.prototype)
hn(U, y.prototype)
hn(H, b.prototype)
var Ln = function (e) {
  function t(e) {
    return null === e || undefined === e ? Vn() : fn(e) ? e : Vn().withMutations(function (t) {
      var n = b(e)
      je(n.size)
      n.forEach(function (e) {
        return t.add(e)
      })
    })
  }
  if (e) {
    t.__proto__ = e
  }
  t.prototype = Object.create(e && e.prototype)
  t.prototype.constructor = t
  t.of = function () {
    return this(arguments)
  }
  t.fromKeys = function (e) {
    return this(m(e).keySeq())
  }
  t.prototype.toString = function () {
    return this.__toString("OrderedSet {", "}")
  }
  return t
}(_n)
Ln.isOrderedSet = fn
var jn
var /* [auto-meaningful-name] */Ln$prototype = Ln.prototype
function Hn(e, t) {
  var n = Object.create(Ln$prototype)
  n.size = e ? e.size : 0
  n._map = e
  n.__ownerID = t
  return n
}
function Vn() {
  return jn || (jn = Hn(tn()))
}
Ln$prototype[__IMMUTABLE_ORDERED__] = true
Ln$prototype.zip = y$prototype.zip
Ln$prototype.zipWith = y$prototype.zipWith
Ln$prototype.__empty = Vn
Ln$prototype.__make = Hn
var Gn = function (e, t) {
  var n
  var r = function (o) {
    var a = this
    if (o instanceof r) {
      return o
    }
    if (!(this instanceof r)) {
      return new r(o)
    }
    if (!n) {
      n = true
      var s = Object.keys(e)
      var c = i._indices = {}
      i._name = t
      i._keys = s
      i._defaultValues = e
      for (var u = 0; u < s.length; u++) {
        var l = s[u]
        c[l] = u
        if (i[l]) {
          if ("object" === typeof console && console.warn) {
            console.warn("Cannot define " + Kn(this) + " with property \"" + l + "\" since that property name is part of the Record API.")
          }
        } else {
          Yn(i, l)
        }
      }
    }
    this.__ownerID = undefined
    this._values = jt().withMutations(function (e) {
      e.setSize(a._keys.length)
      m(o).forEach(function (t, n) {
        e.set(a._indices[n], t === a._defaultValues[n] ? undefined : t)
      })
    })
  }
  var i = r.prototype = Object.create(Gn$prototype)
  i.constructor = r
  if (t) {
    r.displayName = t
  }
  return r
}
Gn.prototype.toString = function () {
  for (var e, t = Kn(this) + " { ", /* [auto-meaningful-name] */this$_keys = this._keys, r = 0, /* [auto-meaningful-name] */this$_keys$length = this$_keys.length; r !== this$_keys$length; r++) {
    t += (r ? ", " : "") + (e = this$_keys[r]) + ": " + Ge(this.get(e))
  }
  return t + " }"
}
Gn.prototype.equals = function (e) {
  return this === e || e && this._keys === e._keys && Xn(this).equals(Xn(e))
}
Gn.prototype.hashCode = function () {
  return Xn(this).hashCode()
}
Gn.prototype.has = function (e) {
  return this._indices.hasOwnProperty(e)
}
Gn.prototype.get = function (e, t) {
  if (!this.has(e)) {
    return t
  }
  var n = this._indices[e]
  var r = this._values.get(n)
  return undefined === r ? this._defaultValues[e] : r
}
Gn.prototype.set = function (e, t) {
  if (this.has(e)) {
    var n = this._values.set(this._indices[e], t === this._defaultValues[e] ? undefined : t)
    if (n !== this._values && !this.__ownerID) {
      return Wn(this, n)
    }
  }
  return this
}
Gn.prototype.remove = function (e) {
  return this.set(e)
}
Gn.prototype.clear = function () {
  var e = this._values.clear().setSize(this._keys.length)
  return this.__ownerID ? this : Wn(this, e)
}
Gn.prototype.wasAltered = function () {
  return this._values.wasAltered()
}
Gn.prototype.toSeq = function () {
  return Xn(this)
}
Gn.prototype.toJS = function () {
  return pn(this)
}
Gn.prototype.entries = function () {
  return this.__iterator(2)
}
Gn.prototype.__iterator = function (e, t) {
  return Xn(this).__iterator(e, t)
}
Gn.prototype.__iterate = function (e, t) {
  return Xn(this).__iterate(e, t)
}
Gn.prototype.__ensureOwner = function (e) {
  if (e === this.__ownerID) {
    return this
  }
  var t = this._values.__ensureOwner(e)
  return e ? Wn(this, t, e) : (this.__ownerID = e, this._values = t, this)
}
Gn.isRecord = E
Gn.getDescriptiveName = Kn
var zn
var /* [auto-meaningful-name] */Gn$prototype = Gn.prototype
function Wn(e, t, n) {
  var r = Object.create(Object.getPrototypeOf(e))
  r._values = t
  r.__ownerID = n
  return r
}
function Kn(e) {
  return e.constructor.displayName || e.constructor.name || "Record"
}
function Xn(e) {
  return K(e._keys.map(function (t) {
    return [t, e.get(t)]
  }))
}
function Yn(e, t) {
  try {
    Object.defineProperty(e, t, {
      get: function () {
        return this.get(t)
      },
      set: function (e) {
        Le(this.__ownerID, "Cannot set on an immutable record.")
        this.set(t, e)
      }
    })
  } catch (n) {}
}
function qn(e, t) {
  return _(t) ? t.toMap() : t.toList()
}
Gn$prototype["@@__IMMUTABLE_RECORD__@@"] = true
Gn$prototype.delete = Gn$prototype.remove
Gn$prototype.deleteIn = Gn$prototype.removeIn = Ze
Gn$prototype.getIn = xn
Gn$prototype.hasIn = v$prototype.hasIn
Gn$prototype.merge = rt
Gn$prototype.mergeWith = it
Gn$prototype.mergeIn = lt
Gn$prototype.mergeDeep = ct
Gn$prototype.mergeDeepWith = ut
Gn$prototype.mergeDeepIn = ft
Gn$prototype.setIn = $e
Gn$prototype.update = tt
Gn$prototype.updateIn = nt
Gn$prototype.withMutations = dt
Gn$prototype.asMutable = ht
Gn$prototype.asImmutable = pt
Gn$prototype[S] = Gn$prototype.entries
Gn$prototype.toJSON = Gn$prototype.toObject = v$prototype.toObject
Gn$prototype.inspect = Gn$prototype.toSource = function () {
  return this.toString()
}
var $n = {
  version: "4.0.0-rc.11",
  Collection: v,
  Iterable: v,
  Seq: L,
  Map: At,
  OrderedMap: Zt,
  List: jt,
  Stack: on,
  Set: _n,
  OrderedSet: Ln,
  Record: Gn,
  Range: wn,
  Repeat: function (e) {
    function t(e, n) {
      if (!(this instanceof t)) {
        return new t(e, n)
      }
      this._value = e
      this.size = undefined === n ? 1 / 0 : Math.max(0, n)
      if (0 === this.size) {
        if (zn) {
          return zn
        }
        zn = this
      }
    }
    if (e) {
      t.__proto__ = e
    }
    t.prototype = Object.create(e && e.prototype)
    t.prototype.constructor = t
    t.prototype.toString = function () {
      return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
    }
    t.prototype.get = function (e, t) {
      return this.has(e) ? this._value : t
    }
    t.prototype.includes = function (e) {
      return Z(this._value, e)
    }
    t.prototype.slice = function (e, n) {
      var /* [auto-meaningful-name] */this$size = this.size
      return u(e, n, this$size) ? this : new t(this._value, f(n, this$size) - l(e, this$size))
    }
    t.prototype.reverse = function () {
      return this
    }
    t.prototype.indexOf = function (e) {
      return Z(this._value, e) ? 0 : -1
    }
    t.prototype.lastIndexOf = function (e) {
      return Z(this._value, e) ? this.size : -1
    }
    t.prototype.__iterate = function (e, t) {
      for (var /* [auto-meaningful-name] */this$size = this.size, r = 0; r !== this$size && false !== e(this._value, t ? this$size - ++r : r++, this);) {
        ;
      }
      return r
    }
    t.prototype.__iterator = function (e, t) {
      var n = this
      var /* [auto-meaningful-name] */this$size = this.size
      var i = 0
      return new T(function () {
        return i === this$size ? {
          value: undefined,
          done: true
        } : B(e, t ? this$size - ++i : i++, n._value)
      })
    }
    t.prototype.equals = function (e) {
      return e instanceof t ? Z(this._value, e._value) : dn(e)
    }
    return t
  }(U),
  is: Z,
  fromJS: function (e, t) {
    return function e(t, n, r, i, o, a) {
      var s = Array.isArray(r) ? U : He(r) ? j : null
      if (s) {
        if (~t.indexOf(r)) {
          throw new TypeError("Cannot convert circular structure to Immutable")
        }
        t.push(r)
        if (o && "" !== i) {
          o.push(i)
        }
        var c = n.call(a, i, s(r).map(function (i, a) {
          return e(t, n, i, a, o, r)
        }), o && o.slice())
        t.pop()
        if (o) {
          o.pop()
        }
        return c
      }
      return r
    }([], t || qn, e, "", t && t.length > 2 ? [] : undefined, {
      "": e
    })
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
  isList: Lt,
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
      t[n] = arguments[n + 1]
    }
    return st(e, t)
  },
  mergeDeep: function (e) {
    for (var t = [], n = arguments.length - 1; n-- > 0;) {
      t[n] = arguments[n + 1]
    }
    return at(e, t)
  },
  mergeWith: function (e, t) {
    for (var n = [], r = arguments.length - 2; r-- > 0;) {
      n[r] = arguments[r + 2]
    }
    return st(t, n, e)
  },
  mergeDeepWith: function (e, t) {
    for (var n = [], r = arguments.length - 2; r-- > 0;) {
      n[r] = arguments[r + 2]
    }
    return at(t, n, e)
  },
  remove: Ke,
  removeIn: Je,
  set: Xe,
  setIn: qe,
  update: et,
  updateIn: Ye
}
exports.a = $n
