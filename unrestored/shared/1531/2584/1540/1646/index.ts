/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1646
 */

"use strict"

var r
var o
var i
var /* [auto-meaningful-name] */U$then
var s = require("../1698/86/index")
var c = require("../1684/530")
var l = require("../1541/194")
var u = require("../1541/472")
var d = require("./1236")
var p = require("../1541/398")
var f = require("./752")
var h = require("../1640/634")
var m = require("../1541/531")
var g = require("../1577/751")
var _ = require("../1541/231")
var v = require("../1564/439")
var b = require("./635")
var y = require("./1058")
var E = require("../1626/827/index")
var O = require("../1565/935")
var w = require("./943")
var /* [auto-meaningful-name] */require$_1072$set = require("./1072").set
var T = require("./1238/index")
var S = require("./1239")
var I = require("./1649")
var A = require("./1240")
var j = require("./1650")
var N = require("../1541/423/index")
var R = require("../1608/818")
var k = require("../1541/247/index")
var x = require("./1651")
var D = require("../1573/750")
var M = require("../1557/629/index")
var L = k("species")
var /* [auto-meaningful-name] */Promise = "Promise"
var /* [auto-meaningful-name] */N$get = N.get
var /* [auto-meaningful-name] */N$set = N.set
var G = N.getterFor(Promise)
var U = d && d.prototype
var W = d
var H = U
var /* [auto-meaningful-name] */l$TypeError = l.TypeError
var /* [auto-meaningful-name] */l$document = l.document
var /* [auto-meaningful-name] */l$process = l.process
var K = A.f
var q = K
var X = !!(l$document && l$document.createEvent && l.dispatchEvent)
var Q = "function" == typeof PromiseRejectionEvent
var Z = false
var J = R(Promise, function () {
  var e = y(W)
  var t = e !== String(W)
  if (!t && 66 === M) {
    return true
  }
  if (c && !H.finally) {
    return true
  }
  if (M >= 51 && /native code/.test(e)) {
    return false
  }
  var n = new W(function (e) {
    e(1)
  })
  var r = function (e) {
    e(function () {}, function () {})
  };
  (n.constructor = {})[L] = r
  return !(Z = n.then(function () {}) instanceof r) || !t && x && !Q
})
var $ = J || !O(function (e) {
  W.all(e).catch(function () {})
})
var ee = function (e) {
  var /* [auto-meaningful-name] */e$then
  return !(!_(e) || "function" != typeof (e$then = e.then)) && e$then
}
var te = function (e, t) {
  if (!e.notified) {
    e.notified = true
    var /* [auto-meaningful-name] */e$reactions = e.reactions
    T(function () {
      for (var /* [auto-meaningful-name] */e$value = e.value, o = 1 == e.state, i = 0; e$reactions.length > i;) {
        var a
        var s
        var c
        var l = e$reactions[i++]
        var u = o ? l.ok : l.fail
        var /* [auto-meaningful-name] */l$resolve = l.resolve
        var /* [auto-meaningful-name] */l$reject = l.reject
        var /* [auto-meaningful-name] */l$domain = l.domain
        try {
          if (u) {
            if (!o) {
              if (2 === e.rejection) {
                ie(e)
              }
              e.rejection = 1
            }
            if (true === u) {
              a = e$value
            } else {
              if (l$domain) {
                l$domain.enter()
              }
              a = u(e$value)
              if (l$domain) {
                l$domain.exit()
                c = true
              }
            }
            if (a === l.promise) {
              l$reject(l$TypeError("Promise-chain cycle"))
            } else {
              if (s = ee(a)) {
                s.call(a, l$resolve, l$reject)
              } else {
                l$resolve(a)
              }
            }
          } else {
            l$reject(e$value)
          }
        } catch (h) {
          if (l$domain && !c) {
            l$domain.exit()
          }
          l$reject(h)
        }
      }
      e.reactions = []
      e.notified = false
      if (t && !e.rejection) {
        re(e)
      }
    })
  }
}
var ne = function (e, t, n) {
  var r
  var o
  if (X) {
    (r = l$document.createEvent("Event")).promise = t
    r.reason = n
    r.initEvent(e, false, true)
    l.dispatchEvent(r)
  } else {
    r = {
      promise: t,
      reason: n
    }
  }
  if (!Q && (o = l["on" + e])) {
    o(r)
  } else {
    if ("unhandledrejection" === e) {
      I("Unhandled promise rejection", n)
    }
  }
}
var re = function (e) {
  require$_1072$set.call(l, function () {
    var t
    var /* [auto-meaningful-name] */e$facade = e.facade
    var /* [auto-meaningful-name] */e$value = e.value
    if (oe(e) && (t = j(function () {
      if (D) {
        l$process.emit("unhandledRejection", e$value, e$facade)
      } else {
        ne("unhandledrejection", e$facade, e$value)
      }
    }), e.rejection = D || oe(e) ? 2 : 1, t.error)) {
      throw t.value
    }
  })
}
var oe = function (e) {
  return 1 !== e.rejection && !e.parent
}
var ie = function (e) {
  require$_1072$set.call(l, function () {
    var /* [auto-meaningful-name] */e$facade = e.facade
    if (D) {
      l$process.emit("rejectionHandled", e$facade)
    } else {
      ne("rejectionhandled", e$facade, e.value)
    }
  })
}
var ae = function (e, t, n) {
  return function (r) {
    e(t, r, n)
  }
}
var se = function (e, t, n) {
  if (!e.done) {
    e.done = true
    if (n) {
      e = n
    }
    e.value = t
    e.state = 2
    te(e, true)
  }
}
var ce = function e(t, n, r) {
  if (!t.done) {
    t.done = true
    if (r) {
      t = r
    }
    try {
      if (t.facade === n) {
        throw l$TypeError("Promise can't be resolved itself")
      }
      var o = ee(n)
      if (o) {
        T(function () {
          var r = {
            done: false
          }
          try {
            o.call(n, ae(e, r, t), ae(se, r, t))
          } catch (i) {
            se(r, i, t)
          }
        })
      } else {
        t.value = n
        t.state = 1
        te(t, false)
      }
    } catch (i) {
      se({
        done: false
      }, i, t)
    }
  }
}
if (J && (H = (W = function (e) {
  b(this, W, Promise)
  v(e)
  r.call(this)
  var t = N$get(this)
  try {
    e(ae(ce, t), ae(se, t))
  } catch (n) {
    se(t, n)
  }
}).prototype, (r = function (e) {
  N$set(this, {
    type: Promise,
    done: false,
    notified: false,
    parent: false,
    reactions: [],
    rejection: false,
    state: 0,
    value: undefined
  })
}).prototype = f(H, {
  then: function (e, t) {
    var n = G(this)
    var r = K(w(this, W))
    r.ok = "function" != typeof e || e
    r.fail = "function" == typeof t && t
    r.domain = D ? l$process.domain : undefined
    n.parent = true
    n.reactions.push(r)
    if (0 != n.state) {
      te(n, false)
    }
    return r.promise
  },
  catch: function (e) {
    return this.then(undefined, e)
  }
}), o = function () {
  var e = new r()
  var t = N$get(e)
  this.promise = e
  this.resolve = ae(ce, t)
  this.reject = ae(se, t)
}, A.f = K = function (e) {
  return e === W || e === i ? new o(e) : q(e)
}, !c && "function" == typeof d && U !== Object.prototype)) {
  U$then = U.then
  if (!Z) {
    p(U, "then", function (e, t) {
      var n = this
      return new W(function (e, t) {
        U$then.call(n, e, t)
      }).then(e, t)
    }, {
      unsafe: true
    })
    p(U, "catch", H.catch, {
      unsafe: true
    })
  }
  try {
    delete U.constructor
  } catch (le) {}
  if (h) {
    h(U, H)
  }
}
s({
  global: true,
  wrap: true,
  forced: J
}, {
  Promise: W
})
m(W, Promise, false, true)
g(Promise)
i = u(Promise)
s({
  target: Promise,
  stat: true,
  forced: J
}, {
  reject: function (e) {
    var t = K(this)
    t.reject.call(undefined, e)
    return t.promise
  }
})
s({
  target: Promise,
  stat: true,
  forced: c || J
}, {
  resolve: function (e) {
    return S(c && this === i ? W : this, e)
  }
})
s({
  target: Promise,
  stat: true,
  forced: $
}, {
  all: function (e) {
    var t = this
    var n = K(t)
    var /* [auto-meaningful-name] */n$resolve = n.resolve
    var /* [auto-meaningful-name] */n$reject = n.reject
    var i = j(function () {
      var n = v(t.resolve)
      var i = []
      var a = 0
      var s = 1
      E(e, function (e) {
        var c = a++
        var l = false
        i.push(undefined)
        s++
        n.call(t, e).then(function (e) {
          if (!l) {
            l = true
            i[c] = e
            if (! --s) {
              n$resolve(i)
            }
          }
        }, n$reject)
      })
      if (! --s) {
        n$resolve(i)
      }
    })
    if (i.error) {
      n$reject(i.value)
    }
    return n.promise
  },
  race: function (e) {
    var t = this
    var n = K(t)
    var /* [auto-meaningful-name] */n$reject = n.reject
    var o = j(function () {
      var o = v(t.resolve)
      E(e, function (e) {
        o.call(t, e).then(n.resolve, n$reject)
      })
    })
    if (o.error) {
      n$reject(o.value)
    }
    return n.promise
  }
})
