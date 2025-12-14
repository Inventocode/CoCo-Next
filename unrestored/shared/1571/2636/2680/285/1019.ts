/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1019
 */

"use strict"

function r() {
  return (r = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
        e[r] = n[r]
      }
    }
    return e
  }).apply(this, arguments)
}
function i(e) {
  return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}
function o(e, t) {
  return (o = Object.setPrototypeOf || function (e, t) {
    e.__proto__ = t
    return e
  })(e, t)
}
function a() {
  if ("undefined" === typeof Reflect || !Reflect.construct) {
    return false
  }
  if (Reflect.construct.sham) {
    return false
  }
  if ("function" === typeof Proxy) {
    return true
  }
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}))
    return true
  } catch (e) {
    return false
  }
}
function s(e, t, n) {
  return (s = a() ? Reflect.construct : function (e, t, n) {
    var r = [null]
    r.push.apply(r, t)
    var i = new (Function.bind.apply(e, r))()
    if (n) {
      o(i, n.prototype)
    }
    return i
  }).apply(null, arguments)
}
function c(e) {
  var t = "function" === typeof Map ? new Map() : undefined
  return (c = function (e) {
    if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) {
      return e
    }
    var n
    if ("function" !== typeof e) {
      throw new TypeError("Super expression must either be null or a function")
    }
    if ("undefined" !== typeof t) {
      if (t.has(e)) {
        return t.get(e)
      }
      t.set(e, r)
    }
    function r() {
      return s(e, arguments, i(this).constructor)
    }
    r.prototype = Object.create(e.prototype, {
      constructor: {
        value: r,
        enumerable: false,
        writable: true,
        configurable: true
      }
    })
    return o(r, e)
  })(e)
}
export { k as a }
var u = /%[sdj%]/g
var l = function () {}
function f(e) {
  if (!e || !e.length) {
    return null
  }
  var t = {}
  e.forEach(function (e) {
    var /* [auto-meaningful-name] */e$field = e.field
    t[e$field] = t[e$field] || []
    t[e$field].push(e)
  })
  return t
}
function d(e) {
  for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
    n[r - 1] = arguments[r]
  }
  var i = 0
  var /* [auto-meaningful-name] */n$length = n.length
  if ("function" === typeof e) {
    return e.apply(null, n)
  }
  if ("string" === typeof e) {
    var a = e.replace(u, function (e) {
      if ("%%" === e) {
        return "%"
      }
      if (i >= n$length) {
        return e
      }
      switch (e) {
        case "%s":
          return String(n[i++])
        case "%d":
          return Number(n[i++])
        case "%j":
          try {
            return JSON.stringify(n[i++])
          } catch (t) {
            return "[Circular]"
          }
          break
        default:
          return e
      }
    })
    return a
  }
  return e
}
function h(e, t) {
  return undefined === e || null === e || !("array" !== t || !Array.isArray(e) || e.length) || !(!function (e) {
    return "string" === e || "url" === e || "hex" === e || "email" === e || "date" === e || "pattern" === e
  }(t) || "string" !== typeof e || e)
}
function p(e, t, n) {
  var r = 0
  var /* [auto-meaningful-name] */e$length = e.length
  !function o(a) {
    if (a && a.length) {
      n(a)
    } else {
      var s = r
      r += 1
      if (s < e$length) {
        t(e[s], o)
      } else {
        n([])
      }
    }
  }([])
}
if ("undefined" !== typeof process) {
  Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: undefined,
    WDS_SOCKET_PATH: undefined,
    WDS_SOCKET_PORT: undefined
  })
}
var _ = function (e) {
  var t
  var n
  function r(t, n) {
    var r;
    (r = e.call(this, "Async Validation Error") || this).errors = t
    r.fields = n
    return r
  }
  n = e;
  (t = r).prototype = Object.create(n.prototype)
  t.prototype.constructor = t
  o(t, n)
  return r
}(c(Error))
function A(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (t, o) {
      p(function (e) {
        var t = []
        Object.keys(e).forEach(function (n) {
          t.push.apply(t, e[n] || [])
        })
        return t
      }(e), n, function (e) {
        r(e)
        return e.length ? o(new _(e, f(e))) : t(i)
      })
    })
    o.catch(function (e) {
      return e
    })
    return o
  }
  var a = true === t.firstFields ? Object.keys(e) : t.firstFields || []
  var s = Object.keys(e)
  var /* [auto-meaningful-name] */s$length = s.length
  var u = 0
  var l = []
  var d = new Promise(function (t, o) {
    var d = function (e) {
      l.push.apply(l, e)
      if (++u === s$length) {
        r(l)
        return l.length ? o(new _(l, f(l))) : t(i)
      }
    }
    if (!s.length) {
      r(l)
      t(i)
    }
    s.forEach(function (t) {
      var r = e[t]
      if (-1 !== a.indexOf(t)) {
        p(r, n, d)
      } else {
        (function (e, t, n) {
          var r = []
          var i = 0
          var /* [auto-meaningful-name] */e$length = e.length
          function a(e) {
            r.push.apply(r, e || [])
            if (++i === e$length) {
              n(r)
            }
          }
          e.forEach(function (e) {
            t(e, a)
          })
        })(r, n, d)
      }
    })
  })
  d.catch(function (e) {
    return e
  })
  return d
}
function g(e, t) {
  return function (n) {
    var r
    var i
    r = e.fullFields ? function (e, t) {
      for (var n = e, r = 0; r < t.length; r++) {
        if (undefined == n) {
          return n
        }
        n = n[t[r]]
      }
      return n
    }(t, e.fullFields) : t[n.field || e.fullField]
    return (i = n) && undefined !== i.message ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: "function" === typeof n ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    }
  }
}
function v(e, t) {
  if (t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      var i = t[n]
      if ("object" === typeof i && "object" === typeof e[n]) {
        e[n] = r({}, e[n], i)
      } else {
        e[n] = i
      }
    }
  }
  return e
}
var m = function (e, t, n, r, i, o) {
  if (!(!e.required || n.hasOwnProperty(e.field) && !h(t, o || e.type))) {
    r.push(d(i.messages.required, e.fullField))
  }
}
var y = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i"),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}
var b = {
  integer: function (e) {
    return b.number(e) && parseInt(e, 10) === e
  },
  float: function (e) {
    return b.number(e) && !b.integer(e)
  },
  array: function (e) {
    return Array.isArray(e)
  },
  regexp: function (e) {
    if (e instanceof RegExp) {
      return true
    }
    try {
      return !!new RegExp(e)
    } catch (t) {
      return false
    }
  },
  date: function (e) {
    return "function" === typeof e.getTime && "function" === typeof e.getMonth && "function" === typeof e.getYear && !isNaN(e.getTime())
  },
  number: function (e) {
    return !isNaN(e) && "number" === typeof e
  },
  object: function (e) {
    return "object" === typeof e && !b.array(e)
  },
  method: function (e) {
    return "function" === typeof e
  },
  email: function (e) {
    return "string" === typeof e && e.length <= 320 && !!e.match(y.email)
  },
  url: function (e) {
    return "string" === typeof e && e.length <= 2048 && !!e.match(y.url)
  },
  hex: function (e) {
    return "string" === typeof e && !!e.match(y.hex)
  }
}
var w = {
  required: m,
  whitespace: function (e, t, n, r, i) {
    if (/^\s+$/.test(t) || "" === t) {
      r.push(d(i.messages.whitespace, e.fullField))
    }
  },
  type: function (e, t, n, r, i) {
    if (e.required && undefined === t) {
      m(e, t, n, r, i)
    } else {
      var /* [auto-meaningful-name] */e$type = e.type
      if (["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"].indexOf(e$type) > -1) {
        if (!b[e$type](t)) {
          r.push(d(i.messages.types[e$type], e.fullField, e.type))
        }
      } else {
        if (e$type && typeof t !== e.type) {
          r.push(d(i.messages.types[e$type], e.fullField, e.type))
        }
      }
    }
  },
  range: function (e, t, n, r, i) {
    var o = "number" === typeof e.len
    var a = "number" === typeof e.min
    var s = "number" === typeof e.max
    var c = t
    var u = null
    var l = "number" === typeof t
    var f = "string" === typeof t
    var h = Array.isArray(t)
    if (l) {
      u = "number"
    } else {
      if (f) {
        u = "string"
      } else {
        if (h) {
          u = "array"
        }
      }
    }
    if (!u) {
      return false
    }
    if (h) {
      c = t.length
    }
    if (f) {
      c = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length
    }
    if (o) {
      if (c !== e.len) {
        r.push(d(i.messages[u].len, e.fullField, e.len))
      }
    } else {
      if (a && !s && c < e.min) {
        r.push(d(i.messages[u].min, e.fullField, e.min))
      } else {
        if (s && !a && c > e.max) {
          r.push(d(i.messages[u].max, e.fullField, e.max))
        } else {
          if (a && s && (c < e.min || c > e.max)) {
            r.push(d(i.messages[u].range, e.fullField, e.min, e.max))
          }
        }
      }
    }
  },
  enum: function (e, t, n, r, i) {
    e.enum = Array.isArray(e.enum) ? e.enum : []
    if (-1 === e.enum.indexOf(t)) {
      r.push(d(i.messages.enum, e.fullField, e.enum.join(", ")))
    }
  },
  pattern: function (e, t, n, r, i) {
    if (e.pattern) {
      if (e.pattern instanceof RegExp) {
        e.pattern.lastIndex = 0
        if (!e.pattern.test(t)) {
          r.push(d(i.messages.pattern.mismatch, e.fullField, t, e.pattern))
        }
      } else if ("string" === typeof e.pattern) {
        if (!new RegExp(e.pattern).test(t)) {
          r.push(d(i.messages.pattern.mismatch, e.fullField, t, e.pattern))
        }
      }
    }
  }
}
var E = function (e, t, n, r, i) {
  var /* [auto-meaningful-name] */e$type = e.type
  var a = []
  if (e.required || !e.required && r.hasOwnProperty(e.field)) {
    if (h(t, e$type) && !e.required) {
      return n()
    }
    w.required(e, t, r, a, i, e$type)
    if (!h(t, e$type)) {
      w.type(e, t, r, a, i)
    }
  }
  n(a)
}
var x = {
  string: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t, "string") && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i, "string")
      if (!h(t, "string")) {
        w.type(e, t, r, o, i)
        w.range(e, t, r, o, i)
        w.pattern(e, t, r, o, i)
        if (true === e.whitespace) {
          w.whitespace(e, t, r, o, i)
        }
      }
    }
    n(o)
  },
  method: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.type(e, t, r, o, i)
      }
    }
    n(o)
  },
  number: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if ("" === t) {
        t = undefined
      }
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.type(e, t, r, o, i)
        w.range(e, t, r, o, i)
      }
    }
    n(o)
  },
  boolean: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.type(e, t, r, o, i)
      }
    }
    n(o)
  },
  regexp: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (!h(t)) {
        w.type(e, t, r, o, i)
      }
    }
    n(o)
  },
  integer: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.type(e, t, r, o, i)
        w.range(e, t, r, o, i)
      }
    }
    n(o)
  },
  float: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.type(e, t, r, o, i)
        w.range(e, t, r, o, i)
      }
    }
    n(o)
  },
  array: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if ((undefined === t || null === t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i, "array")
      if (undefined !== t && null !== t) {
        w.type(e, t, r, o, i)
        w.range(e, t, r, o, i)
      }
    }
    n(o)
  },
  object: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.type(e, t, r, o, i)
      }
    }
    n(o)
  },
  enum: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (undefined !== t) {
        w.enum(e, t, r, o, i)
      }
    }
    n(o)
  },
  pattern: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t, "string") && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
      if (!h(t, "string")) {
        w.pattern(e, t, r, o, i)
      }
    }
    n(o)
  },
  date: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t, "date") && !e.required) {
        return n()
      }
      var a
      w.required(e, t, r, o, i)
      if (!h(t, "date")) {
        a = t instanceof Date ? t : new Date(t)
        w.type(e, a, r, o, i)
        if (a) {
          w.range(e, a.getTime(), r, o, i)
        }
      }
    }
    n(o)
  },
  url: E,
  hex: E,
  email: E,
  required: function (e, t, n, r, i) {
    var o = []
    var a = Array.isArray(t) ? "array" : typeof t
    w.required(e, t, r, o, i, a)
    n(o)
  },
  any: function (e, t, n, r, i) {
    var o = []
    if (e.required || !e.required && r.hasOwnProperty(e.field)) {
      if (h(t) && !e.required) {
        return n()
      }
      w.required(e, t, r, o, i)
    }
    n(o)
  }
}
function C() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function () {
      var e = JSON.parse(JSON.stringify(this))
      e.clone = this.clone
      return e
    }
  }
}
var O = C()
var k = function () {
  function e(e) {
    this.rules = null
    this._messages = O
    this.define(e)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.define = function (e) {
    var t = this
    if (!e) {
      throw new Error("Cannot configure a schema with no rules")
    }
    if ("object" !== typeof e || Array.isArray(e)) {
      throw new Error("Rules must be an object")
    }
    this.rules = {}
    Object.keys(e).forEach(function (n) {
      var r = e[n]
      t.rules[n] = Array.isArray(r) ? r : [r]
    })
  }
  e$prototype.messages = function (e) {
    if (e) {
      this._messages = v(C(), e)
    }
    return this._messages
  }
  e$prototype.validate = function (t, n, i) {
    var o = this
    if (undefined === n) {
      n = {}
    }
    if (undefined === i) {
      i = function () {}
    }
    var a = t
    var s = n
    var c = i
    if ("function" === typeof s) {
      c = s
      s = {}
    }
    if (!this.rules || 0 === Object.keys(this.rules).length) {
      if (c) {
        c(null, a)
      }
      return Promise.resolve(a)
    }
    if (s.messages) {
      var u = this.messages()
      if (u === O) {
        u = C()
      }
      v(u, s.messages)
      s.messages = u
    } else {
      s.messages = this.messages()
    }
    var l = {};
    (s.keys || Object.keys(this.rules)).forEach(function (e) {
      var n = o.rules[e]
      var i = a[e]
      n.forEach(function (n) {
        var s = n
        if ("function" === typeof s.transform) {
          if (a === t) {
            a = r({}, a)
          }
          i = a[e] = s.transform(i)
        }
        (s = "function" === typeof s ? {
          validator: s
        } : r({}, s)).validator = o.getValidationMethod(s)
        if (s.validator) {
          s.field = e
          s.fullField = s.fullField || e
          s.type = o.getType(s)
          l[e] = l[e] || []
          l[e].push({
            rule: s,
            value: i,
            source: a,
            field: e
          })
        }
      })
    })
    var h = {}
    return A(l, s, function (t, n) {
      var i
      var /* [auto-meaningful-name] */t$rule = t.rule
      var c = ("object" === t$rule.type || "array" === t$rule.type) && ("object" === typeof t$rule.fields || "object" === typeof t$rule.defaultField)
      function u(e, t) {
        return r({}, t, {
          fullField: t$rule.fullField + "." + e,
          fullFields: t$rule.fullFields ? [].concat(t$rule.fullFields, [e]) : [e]
        })
      }
      function l(i) {
        if (undefined === i) {
          i = []
        }
        var l = Array.isArray(i) ? i : [i]
        if (!s.suppressWarning && l.length) {
          e.warning("async-validator:", l)
        }
        if (l.length && undefined !== t$rule.message) {
          l = [].concat(t$rule.message)
        }
        var f = l.map(g(t$rule, a))
        if (s.first && f.length) {
          h[t$rule.field] = 1
          return n(f)
        }
        if (c) {
          if (t$rule.required && !t.value) {
            if (undefined !== t$rule.message) {
              f = [].concat(t$rule.message).map(g(t$rule, a))
            } else {
              if (s.error) {
                f = [s.error(t$rule, d(s.messages.required, t$rule.field))]
              }
            }
            return n(f)
          }
          var p = {}
          if (t$rule.defaultField) {
            Object.keys(t.value).map(function (e) {
              p[e] = t$rule.defaultField
            })
          }
          p = r({}, p, t.rule.fields)
          var _ = {}
          Object.keys(p).forEach(function (e) {
            var t = p[e]
            var n = Array.isArray(t) ? t : [t]
            _[e] = n.map(u.bind(null, e))
          })
          var A = new e(_)
          A.messages(s.messages)
          if (t.rule.options) {
            t.rule.options.messages = s.messages
            t.rule.options.error = s.error
          }
          A.validate(t.value, t.rule.options || s, function (e) {
            var t = []
            if (f && f.length) {
              t.push.apply(t, f)
            }
            if (e && e.length) {
              t.push.apply(t, e)
            }
            n(t.length ? t : null)
          })
        } else {
          n(f)
        }
      }
      c = c && (t$rule.required || !t$rule.required && t.value)
      t$rule.field = t.field
      if (t$rule.asyncValidator) {
        i = t$rule.asyncValidator(t$rule, t.value, l, t.source, s)
      } else {
        if (t$rule.validator) {
          if (true === (i = t$rule.validator(t$rule, t.value, l, t.source, s))) {
            l()
          } else {
            if (false === i) {
              l("function" === typeof t$rule.message ? t$rule.message(t$rule.fullField || t$rule.field) : t$rule.message || (t$rule.fullField || t$rule.field) + " fails")
            } else {
              if (i instanceof Array) {
                l(i)
              } else {
                if (i instanceof Error) {
                  l(i.message)
                }
              }
            }
          }
        }
      }
      if (i && i.then) {
        i.then(function () {
          return l()
        }, function (e) {
          return l(e)
        })
      }
    }, function (e) {
      !function (e) {
        var t = []
        var n = {}
        function r(e) {
          var n
          if (Array.isArray(e)) {
            t = (n = t).concat.apply(n, e)
          } else {
            t.push(e)
          }
        }
        for (var i = 0; i < e.length; i++) {
          r(e[i])
        }
        if (t.length) {
          n = f(t)
          c(t, n)
        } else {
          c(null, a)
        }
      }(e)
    }, a)
  }
  e$prototype.getType = function (e) {
    if (undefined === e.type && e.pattern instanceof RegExp) {
      e.type = "pattern"
    }
    if ("function" !== typeof e.validator && e.type && !x.hasOwnProperty(e.type)) {
      throw new Error(d("Unknown rule type %s", e.type))
    }
    return e.type || "string"
  }
  e$prototype.getValidationMethod = function (e) {
    if ("function" === typeof e.validator) {
      return e.validator
    }
    var t = Object.keys(e)
    var n = t.indexOf("message")
    if (-1 !== n) {
      t.splice(n, 1)
    }
    return 1 === t.length && "required" === t[0] ? x.required : x[this.getType(e)] || undefined
  }
  return e
}()
k.register = function (e, t) {
  if ("function" !== typeof t) {
    throw new Error("Cannot register a validator by type, validator is not a function")
  }
  x[e] = t
}
k.warning = l
k.messages = O
k.validators = x
export default k
