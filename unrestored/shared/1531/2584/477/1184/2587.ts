/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2587
 */

"use strict";

(function (e) {
  Object.defineProperty(exports, "a", {
    get: function () {
      return c
    },
    enumerable: true
  })
  Object.defineProperty(exports, "b", {
    get: function () {
      return u
    },
    enumerable: true
  })
  var r = require("./394")
  var i = require("../340/2592/904")
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
    var r$e$performance = r.e().performance
    if (r$e$performance && r$e$performance.now) {
      return {
        now: function () {
          return r$e$performance.now()
        },
        timeOrigin: Date.now() - r$e$performance.now()
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
  !function () {
    var r$e$performance = r.e().performance
    if (r$e$performance && r$e$performance.now) {
      var t = r$e$performance.now()
      var n = Date.now()
      var i = r$e$performance.timeOrigin ? Math.abs(r$e$performance.timeOrigin + t - n) : 36e5
      var o = i < 36e5
      var a = r$e$performance.timing && r$e$performance.timing.navigationStart
      var s = "number" === typeof a ? Math.abs(a + t - n) : 36e5
      return o || s < 36e5 ? i <= s ? ("timeOrigin", r$e$performance.timeOrigin) : ("navigationStart", a) : ("dateNow", n)
    }
    "none"
  }()
}).call(this, require("../../155/1167/574")(module))
