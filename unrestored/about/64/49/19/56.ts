/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：56
 */

var n
var r
var i = module.exports = {}
function o() {
  throw new Error("setTimeout has not been defined")
}
function a() {
  throw new Error("clearTimeout has not been defined")
}
function s(e) {
  if (n === setTimeout) {
    return setTimeout(e, 0)
  }
  if ((n === o || !n) && setTimeout) {
    n = setTimeout
    return setTimeout(e, 0)
  }
  try {
    return n(e, 0)
  } catch (t) {
    try {
      return n.call(null, e, 0)
    } catch (t) {
      return n.call(this, e, 0)
    }
  }
}
!function () {
  try {
    n = "function" === typeof setTimeout ? setTimeout : o
  } catch (e) {
    n = o
  }
  try {
    r = "function" === typeof clearTimeout ? clearTimeout : a
  } catch (e) {
    r = a
  }
}()
var u
var l = []
var c = false
var f = -1
function d() {
  if (c && u) {
    c = false
    if (u.length) {
      l = u.concat(l)
    } else {
      f = -1
    }
    if (l.length) {
      p()
    }
  }
}
function p() {
  if (!c) {
    var e = s(d)
    c = true
    for (var /* [auto-meaningful-name] */l$length = l.length; l$length;) {
      for (u = l, l = []; ++f < l$length;) {
        if (u) {
          u[f].run()
        }
      }
      f = -1
      l$length = l.length
    }
    u = null
    c = false;
    (function (e) {
      if (r === clearTimeout) {
        return clearTimeout(e)
      }
      if ((r === a || !r) && clearTimeout) {
        r = clearTimeout
        return clearTimeout(e)
      }
      try {
        r(e)
      } catch (t) {
        try {
          return r.call(null, e)
        } catch (t) {
          return r.call(this, e)
        }
      }
    })(e)
  }
}
function h(e, t) {
  this.fun = e
  this.array = t
}
function m() {}
i.nextTick = function (e) {
  var t = new Array(arguments.length - 1)
  if (arguments.length > 1) {
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n]
    }
  }
  l.push(new h(e, t))
  if (!(1 !== l.length || c)) {
    s(p)
  }
}
h.prototype.run = function () {
  this.fun.apply(null, this.array)
}
i.title = "browser"
i.browser = true
i.env = {}
i.argv = []
i.version = ""
i.versions = {}
i.on = m
i.addListener = m
i.once = m
i.off = m
i.removeListener = m
i.removeAllListeners = m
i.emit = m
i.prependListener = m
i.prependOnceListener = m
i.listeners = function (e) {
  return []
}
i.binding = function (e) {
  throw new Error("process.binding is not supported")
}
i.cwd = function () {
  return "/"
}
i.chdir = function (e) {
  throw new Error("process.chdir is not supported")
}
i.umask = function () {
  return 0
}
