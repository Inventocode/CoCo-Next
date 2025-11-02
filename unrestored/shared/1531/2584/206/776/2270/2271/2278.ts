/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2278
 */

(function () {
  var /* [auto-meaningful-name] */require$1348Index$parsedTypeCheck
  var r
  var $toString = {}.toString
  function o(e, t, n) {
    var r
    var o
    return "Array" !== $toString.call(e).slice(8, -1) ? {
      type: "Nothing"
    } : (r = t.of, {
      type: "Just",
      value: function () {
        var t
        var i
        var /* [auto-meaningful-name] */iE$length
        var s = []
        for (t = 0, iE$length = (i = e).length; t < iE$length; ++t) {
          o = i[t]
          s.push(c(o, r, n))
        }
        return s
      }()
    })
  }
  function a(e, t, n) {
    var r
    var o
    var a
    return "Object" !== $toString.call(e).slice(8, -1) ? {
      type: "Nothing"
    } : (r = t.of, {
      type: "Just",
      value: function () {
        var t
        var i = {}
        for (o in t = e) {
          a = t[o]
          i[c(o, [{
            type: "String"
          }], n)] = c(a, r[o] || [{
            type: "*"
          }], n)
        }
        return i
      }()
    })
  }
  function s(e, t, n) {
    var /* [auto-meaningful-name] */t$type
    var /* [auto-meaningful-name] */t$structure
    var l
    var f
    t$type = t.type
    t$structure = t.structure
    if (t$type) {
      if (!(l = (null != (f = n.customTypes[t$type]) ? f.cast : undefined) || r[t$type])) {
        throw new Error("Type not defined: " + t$type + ".")
      }
      return l(e, n, c)
    }
    switch (t$structure) {
      case "array":
        return o(e, t, n)
      case "tuple":
        return function (e, t, n) {
          var r
          var o
          var a
          var s
          var /* [auto-meaningful-name] */sT$of$length
          var l
          var f
          if ("Array" !== $toString.call(e).slice(8, -1)) {
            return {
              type: "Nothing"
            }
          }
          for (r = [], o = 0, a = 0, sT$of$length = (s = t.of).length; a < sT$of$length; ++a) {
            l = s[a]
            f = c(e[o], l, n)
            if ("Undefined" !== $toString.call(f).slice(8, -1)) {
              r.push(f)
            }
            o++
          }
          return e.length <= o ? {
            type: "Just",
            value: r
          } : {
            type: "Nothing"
          }
        }(e, t, n)
      case "fields":
        return a(e, t, n)
    }
  }
  function c(e, n, r) {
    var i
    var /* [auto-meaningful-name] */n$length
    var a
    var c
    var /* [auto-meaningful-name] */cSEANIR$type
    var /* [auto-meaningful-name] */c$value
    for (i = 0, n$length = n.length; i < n$length; ++i) {
      cSEANIR$type = (c = s(e, a = n[i], r)).type
      c$value = c.value
      if ("Nothing" !== cSEANIR$type && require$1348Index$parsedTypeCheck([a], c$value, {
        customTypes: r.customTypes
      })) {
        return c$value
      }
    }
    throw new Error("Value " + JSON.stringify(e) + " does not type check against " + JSON.stringify(n) + ".")
  }
  require$1348Index$parsedTypeCheck = require("./1348/index").parsedTypeCheck
  r = {
    "*": function (e, t) {
      switch ($toString.call(e).slice(8, -1)) {
        case "Array":
          return s(e, {
            type: "Array"
          }, t)
        case "Object":
          return s(e, {
            type: "Object"
          }, t)
        default:
          return {
            type: "Just",
            value: c(e, [{
              type: "Undefined"
            }, {
              type: "Null"
            }, {
              type: "NaN"
            }, {
              type: "Boolean"
            }, {
              type: "Number"
            }, {
              type: "Date"
            }, {
              type: "RegExp"
            }, {
              type: "Array"
            }, {
              type: "Object"
            }, {
              type: "String"
            }], (t.explicit = true, t))
          }
      }
    },
    Undefined: function (e) {
      return "undefined" === e || undefined === e ? {
        type: "Just",
        value: undefined
      } : {
        type: "Nothing"
      }
    },
    Null: function (e) {
      return "null" === e ? {
        type: "Just",
        value: null
      } : {
        type: "Nothing"
      }
    },
    NaN: function (e) {
      function t(t) {
        return e.apply(this, arguments)
      }
      t.toString = function () {
        return e.toString()
      }
      return t
    }(function (e) {
      return "NaN" === e ? {
        type: "Just",
        value: NaN
      } : {
        type: "Nothing"
      }
    }),
    Boolean: function (e) {
      return "true" === e ? {
        type: "Just",
        value: true
      } : "false" === e ? {
        type: "Just",
        value: false
      } : {
        type: "Nothing"
      }
    },
    Number: function (e) {
      return {
        type: "Just",
        value: +e
      }
    },
    Int: function (e) {
      return {
        type: "Just",
        value: +e
      }
    },
    Float: function (e) {
      return {
        type: "Just",
        value: +e
      }
    },
    Date: function (e) {
      function t(t, n) {
        return e.apply(this, arguments)
      }
      t.toString = function () {
        return e.toString()
      }
      return t
    }(function (e, t) {
      var n
      return (n = /^\#([\s\S]*)\#$/.exec(e)) ? {
        type: "Just",
        value: new Date(+n[1] || n[1])
      } : t.explicit ? {
        type: "Nothing"
      } : {
        type: "Just",
        value: new Date(+e || e)
      }
    }),
    RegExp: function (e) {
      function t(t, n) {
        return e.apply(this, arguments)
      }
      t.toString = function () {
        return e.toString()
      }
      return t
    }(function (e, t) {
      var n
      return (n = /^\/([\s\S]*)\/([gimy]*)$/.exec(e)) ? {
        type: "Just",
        value: new RegExp(n[1], n[2])
      } : t.explicit ? {
        type: "Nothing"
      } : {
        type: "Just",
        value: new RegExp(e)
      }
    }),
    Array: function (e, t) {
      return o(e, {
        of: [{
          type: "*"
        }]
      }, t)
    },
    Object: function (e, t) {
      return a(e, {
        of: {}
      }, t)
    },
    String: function (e) {
      var t
      return "String" !== $toString.call(e).slice(8, -1) ? {
        type: "Nothing"
      } : (t = e.match(/^'([\s\S]*)'$/)) ? {
        type: "Just",
        value: t[1].replace(/\\'/g, "'")
      } : (t = e.match(/^"([\s\S]*)"$/)) ? {
        type: "Just",
        value: t[1].replace(/\\"/g, "\"")
      } : {
        type: "Just",
        value: e
      }
    }
  }
  module.exports = c
}).call(this)
