/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：926
 */

"use strict";

(function (e) {
  Object.defineProperty(exports, "b", {
    get: function () {
      return c
    },
    enumerable: true
  })
  Object.defineProperty(exports, "c", {
    get: function () {
      return u
    },
    enumerable: true
  })
  Object.defineProperty(exports, "d", {
    get: function () {
      return l
    },
    enumerable: true
  })
  Object.defineProperty(exports, "a", {
    get: function () {
      return f
    },
    enumerable: true
  })
  var r = require("./364")
  var i = require("./521")
  var o = {
    nowSeconds: function () {
      return Date.now() / 1e3
    }
  }
  var a = i.b() ? function () {
    try {
      return i.a(e, "perf_hooks").performance
    } catch (t) {
      return
    }
  }() : function () {
    var r$b$performance = r.b().performance
    if (r$b$performance && r$b$performance.now) {
      return {
        now: function () {
          return r$b$performance.now()
        },
        timeOrigin: Date.now() - r$b$performance.now()
      }
    }
  }()
  var s = undefined === a ? o : {
    nowSeconds: function () {
      return (a.timeOrigin + a.now()) / 1e3
    }
  }
  var c = o.nowSeconds.bind(o)
  var u = s.nowSeconds.bind(s)
  var l = u
  var f = function () {
    var r$b$performance = r.b().performance
    if (r$b$performance && r$b$performance.now) {
      var t = r$b$performance.now()
      var n = Date.now()
      var i = r$b$performance.timeOrigin ? Math.abs(r$b$performance.timeOrigin + t - n) : 36e5
      var o = i < 36e5
      var a = r$b$performance.timing && r$b$performance.timing.navigationStart
      var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5
      return o || s < 36e5 ? i <= s ? ("timeOrigin", r$b$performance.timeOrigin) : ("navigationStart", a) : ("dateNow", n)
    }
    "none"
  }()
}).call(this, require("../../155/1167/574")(module))
