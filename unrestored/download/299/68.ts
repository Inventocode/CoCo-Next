/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：68
 */

module.exports = function () {
  function e(e) {
    if (!e) {
      return false
    }
    var t = Object.prototype.toString.call(e)
    return "[object Function]" == t || "[object AsyncFunction]" == t
  }
  function t() {
    return Date.now && e(Date.now) ? Date.now() : new Date().getTime()
  }
  function n(e) {
    return null != e && "[object Object]" == Object.prototype.toString.call(e)
  }
  function r() {
    if ("function" == typeof Uint32Array) {
      var e = ""
      if ("undefined" != typeof crypto) {
        e = crypto
      } else {
        if ("undefined" != typeof msCrypto) {
          e = msCrypto
        }
      }
      if (n(e) && e.getRandomValues) {
        var t = new Uint32Array(1)
        return e.getRandomValues(t)[0] / Math.pow(2, 32)
      }
    }
    return Zi(1e19) / 1e19
  }
  function i(e) {
    var t = null
    try {
      t = JSON.parse(e)
    } catch (n) {}
    return t
  }
  function a(e, t) {
    this.lockGetPrefix = e || "lock-get-prefix"
    this.lockSetPrefix = t || "lock-set-prefix"
  }
  function s(e) {
    return "function" == typeof e || !(!e || "object" != typeof e) && s(e.listener)
  }
  function u() {
    this._events = {}
  }
  function c(e) {
    var t = e
    try {
      t = decodeURIComponent(e)
    } catch (n) {
      t = e
    }
    return t
  }
  function l() {
    function e() {}
    return "function" != typeof Object.create ? (e.prototype = null, new e()) : Object.create(null)
  }
  function f(e) {
    e = e || ""
    for (var t = l(), n = e.substring(1).split("&"), r = 0; r < n.length; r++) {
      var i = n[r].indexOf("=")
      if (-1 !== i) {
        var o = n[r].substring(0, i)
        var a = n[r].substring(i + 1)
        o = c(o)
        a = c(a)
        if ("__proto__" !== o && "constructor" !== o && "prototype" !== o) {
          t[o] = a
        }
      }
    }
    return t
  }
  function p(e) {
    return "[object String]" == Object.prototype.toString.call(e)
  }
  function d(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }
  function h(e) {
    var t = function (e) {
      this._fields = {
        Username: 4,
        Password: 5,
        Port: 7,
        Protocol: 2,
        Host: 6,
        Path: 8,
        URL: 0,
        QueryString: 9,
        Fragment: 10
      }
      this._values = {}
      this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/
      if ("undefined" != typeof e) {
        this._parse(e)
      }
    }
    t.prototype.setUrl = function (e) {
      this._parse(e)
    }
    t.prototype._initValues = function () {
      for (var e in this._fields) this._values[e] = ""
    }
    t.prototype.addQueryString = function (e) {
      if ("object" != typeof e) {
        return false
      }
      var t = this._values.QueryString || ""
      for (var n in e) t = new RegExp(n + "[^&]+").test(t) ? t.replace(new RegExp(n + "[^&]+"), n + "=" + e[n]) : "&" === t.slice(-1) ? t + n + "=" + e[n] : "" === t ? n + "=" + e[n] : t + "&" + n + "=" + e[n]
      this._values.QueryString = t
    }
    t.prototype.getUrl = function () {
      var e = ""
      e += this._values.Origin
      e += this._values.Port ? ":" + this._values.Port : ""
      e += this._values.Path
      return (e += this._values.QueryString ? "?" + this._values.QueryString : "") + (this._values.Fragment ? "#" + this._values.Fragment : "")
    }
    t.prototype._parse = function (e) {
      this._initValues()
      var t = this._regex.exec(e)
      if (!t) {
        Xi.log("URLParser::_parse -> Invalid URL")
      }
      var n = e.split("#")
      var r = n[0]
      var i = n.slice(1).join("#")
      for (var o in t = this._regex.exec(r), this._fields) if ("undefined" != typeof t[this._fields[o]]) {
        this._values[o] = t[this._fields[o]]
      }
      this._values.Hostname = this._values.Host.replace(/:\d+$/, "")
      this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
      this._values.Fragment = i
    }
    return new t(e)
  }
  function g(e) {
    var t = {}
    var n = function () {
      try {
        return "http://modernizr.com/" === new URL("http://modernizr.com/").href
      } catch (t) {
        return false
      }
    }
    if ("function" == typeof window.URL && n()) {
      if (!(t = new URL(e)).searchParams) {
        t.searchParams = function () {
          var e = f(t.search)
          return {
            get: function (t) {
              return e[t]
            }
          }
        }()
      }
    } else {
      if (!p(e)) {
        e = String(e)
      }
      e = d(e)
      if (false === /^https?:\/\/.+/.test(e)) {
        return void Xi.log("Invalid URL")
      }
      var r = h(e)
      t.hash = r._values.Fragment
      t.host = r._values.Host ? r._values.Host + (r._values.Port ? ":" + r._values.Port : "") : ""
      t.href = r._values.URL
      t.password = r._values.Password
      t.pathname = r._values.Path
      t.port = r._values.Port
      t.search = r._values.QueryString ? "?" + r._values.QueryString : ""
      t.username = r._values.Username
      t.hostname = r._values.Hostname
      t.protocol = r._values.Protocol ? r._values.Protocol + ":" : ""
      t.origin = r._values.Origin ? r._values.Origin + (r._values.Port ? ":" + r._values.Port : "") : ""
      t.searchParams = function () {
        var e = f("?" + r._values.QueryString)
        return {
          get: function (t) {
            return e[t]
          }
        }
      }()
    }
    return t
  }
  function v(e) {
    return !(!e || 1 !== e.nodeType)
  }
  function y(e) {
    return undefined === e
  }
  function _(t) {
    return Array.isArray && e(_) ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
  }
  function b(e) {
    return new to(e)
  }
  function w(e, t, n, r) {
    function i(e) {
      if (e) {
        e.preventDefault = i.preventDefault
        e.stopPropagation = i.stopPropagation
        e._getPath = i._getPath
      }
      return e
    }
    function o(e, t, n, r) {
      var o = function (o) {
        if (o = o || i(window.event)) {
          o.target = o.srcElement
          var a
          var s
          var u = true
          if ("function" == typeof n) {
            a = n(o)
          }
          s = t.call(e, o)
          return "beforeunload" !== r ? (false !== a && false !== s || (u = false), u) : undefined
        }
      }
      return o
    }
    i._getPath = function () {
      var e = this
      return this.path || this.composedPath && this.composedPath() || b(e.target).getParents()
    }
    i.preventDefault = function () {
      this.returnValue = false
    }
    i.stopPropagation = function () {
      this.cancelBubble = true
    }
    var a = function (e, t, n) {
      if (undefined === r && "click" === t) {
        r = true
      }
      if (e && e.addEventListener) {
        e.addEventListener(t, function (e) {
          e._getPath = i._getPath
          n.call(this, e)
        }, r)
      } else {
        var a = "on" + t
        var s = e[a]
        e[a] = o(e, n, s, t)
      }
    }
    a.apply(null, arguments)
  }
  function S(e) {
    var t = "pushState" in window.history ? "popstate" : "hashchange"
    w(window, t, e)
  }
  function k(e) {
    if (e) {
      return "undefined" != typeof window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest() ? new XMLHttpRequest() : "undefined" != typeof XDomainRequest ? new XDomainRequest() : null
    }
    if ("undefined" != typeof window.XMLHttpRequest) {
      return new XMLHttpRequest()
    }
    if (window.ActiveXObject) {
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (t) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
          Xi.log(t)
        }
      }
    }
  }
  function O(e, t, n) {
    if ("object" == typeof e && "number" == typeof e.length && e.length > 0) {
      if (Array.prototype.forEach && e.forEach) {
        e.forEach(t, n)
      } else {
        for (var r = 0; r < e.length; r++) {
          t.call(n, e[r], r, e)
        }
      }
    } else if ("[object Object]" === Object.prototype.toString.call(e)) {
      for (var i in e) if (Object.prototype.hasOwnProperty.call(e, i)) {
        t.call(n, e[i], i, e)
      }
    }
  }
  function E(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t]
      if ("[object Object]" === Object.prototype.toString.call(n)) {
        for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r) && undefined !== n[r]) {
          e[r] = n[r]
        }
      }
    }
    return e
  }
  function T(e) {
    function t(e) {
      if (!e) {
        return ""
      }
      try {
        return JSON.parse(e)
      } catch (t) {
        return {}
      }
    }
    function r() {
      try {
        if (i && "object" == typeof i && i.abort) {
          i.abort()
        }
      } catch (t) {
        Xi.log(t)
      }
      if (o) {
        clearTimeout(o)
        o = null
        if (e.error) {
          e.error()
        }
        i.onreadystatechange = null
        i.onload = null
        i.onerror = null
      }
    }
    e.timeout = e.timeout || 2e4
    e.credentials = "undefined" == typeof e.credentials || e.credentials
    var i = k(e.cors)
    if (!i) {
      return false
    }
    if (!e.type) {
      e.type = e.data ? "POST" : "GET"
    }
    var o
    var /* [auto-meaningful-name] */EESuccessFunctionErrorFunctionE$success = (e = E({
      success: function () {},
      error: function () {}
    }, e)).success
    var /* [auto-meaningful-name] */e$error = e.error
    e.success = function (e) {
      EESuccessFunctionErrorFunctionE$success(e)
      if (o) {
        clearTimeout(o)
        o = null
      }
    }
    e.error = function (e) {
      e$error(e)
      if (o) {
        clearTimeout(o)
        o = null
      }
    }
    o = setTimeout(function () {
      r()
    }, e.timeout)
    if ("undefined" != typeof XDomainRequest && i instanceof XDomainRequest) {
      i.onload = function () {
        if (e.success) {
          e.success(t(i.responseText))
        }
        i.onreadystatechange = null
        i.onload = null
        i.onerror = null
      }
      i.onerror = function () {
        if (e.error) {
          e.error(t(i.responseText), i.status)
        }
        i.onreadystatechange = null
        i.onerror = null
        i.onload = null
      }
    }
    i.onreadystatechange = function () {
      try {
        if (4 == i.readyState) {
          if (i.status >= 200 && i.status < 300 || 304 == i.status) {
            e.success(t(i.responseText))
          } else {
            e.error(t(i.responseText), i.status)
          }
          i.onreadystatechange = null
          i.onload = null
        }
      } catch (n) {
        i.onreadystatechange = null
        i.onload = null
      }
    }
    i.open(e.type, e.url, true)
    try {
      if (e.credentials) {
        i.withCredentials = true
      }
      if (n(e.header)) {
        O(e.header, function (e, t) {
          if (i.setRequestHeader) {
            i.setRequestHeader(t, e)
          }
        })
      }
      if (e.data) {
        if (!e.cors) {
          if (i.setRequestHeader) {
            i.setRequestHeader("X-Requested-With", "XMLHttpRequest")
          }
        }
        if ("application/json" === e.contentType) {
          if (i.setRequestHeader) {
            i.setRequestHeader("Content-type", "application/json; charset=UTF-8")
          }
        } else {
          if (i.setRequestHeader) {
            i.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
          }
        }
      }
    } catch (u) {
      Xi.log(u)
    }
    i.send(e.data || null)
  }
  function x(e, t) {
    var n = []
    return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (O(e, function (e, r, i) {
      n.push(t(e, r, i))
    }), n)
  }
  function j(e) {
    var t = []
    try {
      t = x(atob(e).split(""), function (e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
      })
    } catch (n) {
      t = []
    }
    try {
      return decodeURIComponent(t.join(""))
    } catch (n) {
      return t.join("")
    }
  }
  function P(e) {
    var t = ""
    try {
      t = btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
        return String.fromCharCode("0x" + t)
      }))
    } catch (n) {
      t = e
    }
    return t
  }
  function C(e, t) {
    t = t || window
    var n = false
    var r = true
    var /* [auto-meaningful-name] */t$document = t.document
    var /* [auto-meaningful-name] */t$document$documentElement = t$document.documentElement
    var /* [auto-meaningful-name] */t$document$addEventListener = t$document.addEventListener
    var s = t$document$addEventListener ? "addEventListener" : "attachEvent"
    var u = t$document$addEventListener ? "removeEventListener" : "detachEvent"
    var c = t$document$addEventListener ? "" : "on"
    var l = function (r) {
      if (!("readystatechange" == r.type && "complete" != t$document.readyState)) {
        ("load" == r.type ? t : t$document)[u](c + r.type, l, false)
        if (!n && (n = true)) {
          e.call(t, r.type || r)
        }
      }
    }
    var f = function () {
      try {
        t$document$documentElement.doScroll("left")
      } catch (e) {
        return void setTimeout(f, 50)
      }
      l("poll")
    }
    if ("complete" == t$document.readyState) {
      e.call(t, "lazy")
    } else {
      if (!t$document$addEventListener && t$document$documentElement.doScroll) {
        try {
          r = !t.frameElement
        } catch (p) {
          Xi.log(p)
        }
        if (r) {
          f()
        }
      }
      t$document[s](c + "DOMContentLoaded", l, false)
      t$document[s](c + "readystatechange", l, false)
      t[s](c + "load", l, false)
    }
  }
  function I(e) {
    O(Array.prototype.slice.call(arguments, 1), function (t) {
      for (var n in t) if (undefined !== t[n] && undefined === e[n]) {
        e[n] = t[n]
      }
    })
    return e
  }
  function N(e) {
    var t = e
    try {
      t = decodeURI(e)
    } catch (n) {
      t = e
    }
    return t
  }
  function A(e) {
    var /* [auto-meaningful-name] */T6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8 = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8"
    var n = T6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8.length - 1
    var r = {}
    var i = 0
    for (i = 0; i < T6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8.length; i++) {
      r[T6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8.charAt(i)] = T6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8.charAt(n - i)
    }
    var o = ""
    for (i = 0; i < e.length; i++) {
      o += e.charAt(i) in r ? r[e.charAt(i)] : e.charAt(i)
    }
    return o
  }
  function R(e) {
    return "[object Date]" == Object.prototype.toString.call(e)
  }
  function L(e) {
    function t(e) {
      return e < 10 ? "0" + e : e
    }
    return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
  }
  function D(e) {
    O(e, function (t, r) {
      if (R(t)) {
        e[r] = L(t)
      } else {
        if (n(t)) {
          e[r] = D(t)
        }
      }
    })
    return e
  }
  function M(e) {
    O(Array.prototype.slice.call(arguments, 1), function (t) {
      for (var r in t) if (undefined !== t[r]) {
        if (n(t[r]) && n(e[r])) {
          E(e[r], t[r])
        } else {
          e[r] = t[r]
        }
      }
    })
    return e
  }
  function U(e, t, n) {
    var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
    if (e.filter) {
      return e.filter(t)
    }
    for (var i = [], o = 0; o < e.length; o++) {
      if (Object$prototype$hasOwnProperty.call(e, o)) {
        var a = e[o]
        if (t.call(n, a, o, e)) {
          i.push(a)
        }
      }
    }
    return i
  }
  function B(e) {
    try {
      return JSON.stringify(e, null, "  ")
    } catch (t) {
      return JSON.stringify(e)
    }
  }
  function H(e) {
    return "string" == typeof e && e.match(/^[a-zA-Z0-9\u4e00-\u9fa5\-\.]+$/) ? e : ""
  }
  function F(e, t, n) {
    t = t || "domain_test"
    var r = H(e = e || location.hostname)
    var i = r.split(".")
    if (_(i) && i.length >= 2 && !/^(\d+\.)+\d+$/.test(r)) {
      for (var o = "." + i.splice(i.length - 1, 1); i.length > 0;) {
        o = "." + i.splice(i.length - 1, 1) + o
        ro.set(t, "true", 0, null, n, "; domain=" + o)
        if (-1 !== document.cookie.indexOf(t + "=true")) {
          ro.set(t, "true", "-1s", null, n, "; domain=" + o)
          return o
        }
      }
    }
    return ""
  }
  function $(e) {
    function t(e, t) {
      var n
      if ("body" === (e = d(e))) {
        return document.getElementsByTagName("body")[0]
      }
      if (0 === e.indexOf("#")) {
        e = e.slice(1)
        n = document.getElementById(e)
      } else if (e.indexOf(":nth-of-type") > -1) {
        var r = e.split(":nth-of-type")
        if (!r[0] || !r[1]) {
          return null
        }
        var i = r[0]
        var o = r[1].match(/\(([0-9]+)\)/)
        if (!o || !o[1]) {
          return null
        }
        var a = Number(o[1])
        if (!(v(t) && t.children && t.children.length > 0)) {
          return null
        }
        for (var /* [auto-meaningful-name] */t$children = t.children, u = 0; u < t$children.length; u++) {
          if (v(t$children[u]) && t$children[u].tagName.toLowerCase() === i && 0 === --a) {
            n = t$children[u]
            break
          }
        }
        if (a > 0) {
          return null
        }
      }
      return n || null
    }
    function n(e) {
      var i
      var a = r.shift()
      if (!a) {
        return e
      }
      try {
        i = t(a, e)
      } catch (o) {
        Xi.log(o)
      }
      return i && v(i) ? n(i) : null
    }
    if (!p(e)) {
      return null
    }
    var r = e.split(">")
    var i = null
    return (i = n()) && v(i) ? i : null
  }
  function z(e, t) {
    var n = ""
    var r = ""
    if (e.textContent) {
      n = d(e.textContent)
    } else {
      if (e.innerText) {
        n = d(e.innerText)
      }
    }
    if (n) {
      n = n.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }
    r = n || ""
    if (!("input" !== t && "INPUT" !== t)) {
      r = e.value || ""
    }
    return r
  }
  function q(e, t) {
    if (!(t && "string" == typeof t)) {
      t = "hostname解析异常"
    }
    var n = null
    try {
      n = g(e).hostname
    } catch (r) {
      Xi.log("getHostname传入的url参数不合法！")
    }
    return n || t
  }
  function V() {
    try {
      var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/)
      return e && e[1] ? Number.parseInt(e[1], 10) : ""
    } catch (t) {
      return ""
    }
  }
  function G(e, t) {
    t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]")
    e = c(e)
    var n = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e)
    return null === n || n && "string" != typeof n[1] && n[1].length ? "" : c(n[1])
  }
  function W(e) {
    var t = {}
    var n = e.split("?")[1] || ""
    if (n) {
      t = f("?" + n)
    }
    return t
  }
  function K() {
    return "undefined" != typeof window.matchMedia || "undefined" != typeof window.msMatchMedia
  }
  function J() {
    var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type
    var t = "未取到值"
    if (e) {
      t = e.indexOf("landscape") > -1 ? "landscape" : "portrait"
    } else if (K()) {
      var n = window.matchMedia || window.msMatchMedia
      if (n("(orientation: landscape)").matches) {
        t = "landscape"
      } else {
        if (n("(orientation: portrait)").matches) {
          t = "portrait"
        }
      }
    }
    return t
  }
  function Y() {
    var e
    var t = {}
    var n = navigator.userAgent.toLowerCase()
    if (e = n.match(/ qq\/([\d.]+)/)) {
      t.qqBuildinBrowser = Number(e[1].split(".")[0])
    } else {
      if (e = n.match(/mqqbrowser\/([\d.]+)/)) {
        t.qqBrowser = Number(e[1].split(".")[0])
      } else {
        if (e = n.match(/opera.([\d.]+)/)) {
          t.opera = Number(e[1].split(".")[0])
        } else {
          if (e = n.match(/msie ([\d.]+)/)) {
            t.ie = Number(e[1].split(".")[0])
          } else {
            if (e = n.match(/edge.([\d.]+)/)) {
              t.edge = Number(e[1].split(".")[0])
            } else {
              if (e = n.match(/firefox\/([\d.]+)/)) {
                t.firefox = Number(e[1].split(".")[0])
              } else {
                if (e = n.match(/chrome\/([\d.]+)/)) {
                  t.chrome = Number(e[1].split(".")[0])
                } else {
                  if (e = n.match(/version\/([\d.]+).*safari/)) {
                    t.safari = Number(e[1].match(/^\d*.\d*/))
                  } else {
                    if (e = n.match(/trident\/([\d.]+)/)) {
                      t.ie = 11
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return t
  }
  function X(e) {
    return p(e) ? N(e = d(e)) : N(location.href)
  }
  function Q(e) {
    return p(e) ? N(e = d(e)) : N(location.pathname)
  }
  function Z(e, t) {
    return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : undefined
  }
  function ee(e, t) {
    if ("string" == typeof t) {
      return Z(e, t)
    }
    if (_(t)) {
      for (var n = false, r = 0; r < t.length; r++) {
        if (Z(e, t[r])) {
          n = true
          break
        }
      }
      return n
    }
  }
  function te(e) {
    if ("string" != typeof e) {
      return 0
    }
    var t = 0
    if (0 == e.length) {
      return t
    }
    for (var n = 0; n < e.length; n++) {
      t = (t << 5) - t + e.charCodeAt(n)
      t &= t
    }
    return t
  }
  function ne(e) {
    var t = 9007199254740992
    var n = -9007199254740992
    var r = 31
    var i = 0
    if (e.length > 0) {
      for (var o = e.split(""), a = 0; a < o.length; a++) {
        var s = o[a].charCodeAt()
        var u = r * i + s
        if (u > t) {
          for (i = n + i; (u = r * i + s) < n;) {
            i = i / 2 + s
          }
        }
        if (u < n) {
          for (i = t + i; (u = r * i + s) > t;) {
            i = i / 2 + s
          }
        }
        i = r * i + s
      }
    }
    return i
  }
  function re(e, t) {
    var /* [auto-meaningful-name] */e$indexOf = e.indexOf
    if (e$indexOf) {
      return e$indexOf.call(e, t)
    }
    for (var r = 0; r < e.length; r++) {
      if (t === e[r]) {
        return r
      }
    }
    return -1
  }
  function ie(e, t) {
    e.prototype = new t()
    e.prototype.constructor = e
    e.superclass = t.prototype
    return e
  }
  function oe(e) {
    return !(!e || !Object$prototype$hasOwnProperty.call(e, "callee"))
  }
  function ae(e) {
    return "[object Boolean]" == Object.prototype.toString.call(e)
  }
  function se(e) {
    if (n(e)) {
      for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
        return false
      }
      return true
    }
    return false
  }
  function ue(e) {
    return "string" == typeof e && (false !== /^https?:\/\/.+/.test(e) || (Xi.log("Invalid URL"), false))
  }
  function ce() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
  }
  function le(e) {
    try {
      JSON.parse(e)
    } catch (t) {
      return false
    }
    return true
  }
  function fe(e) {
    return "[object Number]" == Object.prototype.toString.call(e) && /[\d\.]+/.test(String(e))
  }
  function pe() {
    var e = false
    if ("object" != typeof navigator || "function" != typeof navigator.sendBeacon) {
      return e
    }
    var t = Y()
    var n = navigator.userAgent.toLowerCase()
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      var r = /os [\d._]*/gi
      var i = (n.match(r) + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, ".").split(".")
      if ("undefined" == typeof t.safari) {
        t.safari = i[0]
      }
      if (i[0] && (t.qqBuildinBrowser || t.qqBrowser)) {
        e = false
      } else {
        if (i[0] && i[0] < 13) {
          if (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) {
            e = true
          }
        } else {
          if (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) {
            e = true
          }
        }
      }
    } else if (t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) {
      e = true
    }
    return e
  }
  function de() {
    return "undefined" != typeof window.XMLHttpRequest && ("withCredentials" in new XMLHttpRequest() || "undefined" != typeof XDomainRequest)
  }
  function he(t) {
    if (!n(t) || !p(t.callbackName)) {
      Xi.log("JSONP 请求缺少 callbackName")
      return false
    }
    t.success = e(t.success) ? t.success : function () {}
    t.error = e(t.error) ? t.error : function () {}
    t.data = t.data || ""
    var r = document.createElement("script")
    var i = document.getElementsByTagName("head")[0]
    var o = null
    var a = false
    i.appendChild(r)
    var s = 3e4
    if (fe(t.timeout)) {
      o = setTimeout(function () {
        return !a && (t.error("timeout"), window[t.callbackName] = function () {
          Xi.log("call jsonp error")
        }, o = null, i.removeChild(r), void (a = true))
      }, Math.min(t.timeout, s))
    }
    window[t.callbackName] = function () {
      clearTimeout(o)
      o = null
      t.success.apply(null, arguments)
      window[t.callbackName] = function () {
        Xi.log("call jsonp error")
      }
      i.removeChild(r)
    }
    var u = encodeURIComponent(t.callbackName)
    var c = ""
    if (t.url.indexOf("?") > -1) {
      t.url += "&callbackName=" + u
    } else {
      t.url += "?callbackName=" + u
    }
    if (n(t.data)) {
      var l = []
      O(t.data, function (e, t) {
        l.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
      })
      if (c = l.join("&")) {
        t.url += "&" + c
      }
    }
    r.onerror = function (e) {
      return !a && (window[t.callbackName] = function () {
        Xi.log("call jsonp error")
      }, clearTimeout(o), o = null, i.removeChild(r), t.error(e), void (a = true))
    }
    r.src = t.url
  }
  function ge(t) {
    ({
      visibleHandler: e(t.visible) ? t.visible : function () {},
      hiddenHandler: e(t.hidden) ? t.hidden : function () {},
      visibilityChange: null,
      hidden: null,
      isSupport: function () {
        return "undefined" != typeof document[this.hidden]
      },
      init: function () {
        if ("undefined" != typeof document.hidden) {
          this.hidden = "hidden"
          this.visibilityChange = "visibilitychange"
        } else {
          if ("undefined" != typeof document.mozHidden) {
            this.hidden = "mozHidden"
            this.visibilityChange = "mozvisibilitychange"
          } else {
            if ("undefined" != typeof document.msHidden) {
              this.hidden = "msHidden"
              this.visibilityChange = "msvisibilitychange"
            } else {
              if ("undefined" != typeof document.webkitHidden) {
                this.hidden = "webkitHidden"
                this.visibilityChange = "webkitvisibilitychange"
              }
            }
          }
        }
        this.listen()
      },
      listen: function () {
        if (this.isSupport()) {
          var e = this
          w(document, this.visibilityChange, function () {
            if (document[e.hidden]) {
              e.hiddenHandler()
            } else {
              e.visibleHandler()
            }
          }, 1)
        } else {
          w(window, "focus", this.visibleHandler)
          w(window, "blur", this.hiddenHandler)
        }
      }
    }).init()
  }
  function me(e) {
    e = E({
      success: function () {},
      error: function () {},
      appendCall: function (e) {
        document.getElementsByTagName("head")[0].appendChild(e)
      }
    }, e)
    var t = null
    if ("css" === e.type) {
      (t = document.createElement("link")).rel = "stylesheet"
      t.href = e.url
    }
    if ("js" === e.type) {
      (t = document.createElement("script")).async = "async"
      t.setAttribute("charset", "UTF-8")
      t.src = e.url
      t.type = "text/javascript"
    }
    t.onload = t.onreadystatechange = function () {
      if (!(this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState)) {
        e.success()
        t.onload = t.onreadystatechange = null
      }
    }
    t.onerror = function () {
      e.error()
      t.onerror = null
    }
    e.appendCall(t)
  }
  function ve(e) {
    if ("string" != typeof e) {
      return ""
    }
    for (var t = /^\s*javascript/i; t.test(e);) {
      e = e.replace(t, "")
    }
    return e
  }
  function ye(e, t) {
    t = "number" == typeof t ? t : 13
    for (var n = 126, r = (e = String(e)).split(""), i = 0; i < r.length; i++) {
      if (r[i].charCodeAt(0) < n) {
        r[i] = String.fromCharCode((r[i].charCodeAt(0) + t) % n)
      }
    }
    return r.join("")
  }
  function _e(e) {
    var t = 13
    var n = 126
    return ye(e = String(e), n - t)
  }
  function be(e) {
    if (n(e)) {
      O(e, function (t, r) {
        if (n(t)) {
          be(e[r])
        } else {
          if (R(t)) {
            e[r] = L(t)
          }
        }
      })
    }
  }
  function we(e) {
    var t = document.createElement("style")
    t.type = "text/css"
    try {
      t.appendChild(document.createTextNode(e))
    } catch (n) {
      t.styleSheet.cssText = e
    }
    var r = document.getElementsByTagName("head")[0]
    var i = document.getElementsByTagName("script")[0]
    if (r) {
      if (r.children.length) {
        r.insertBefore(t, r.children[0])
      } else {
        r.appendChild(t)
      }
    } else {
      i.parentNode.insertBefore(t, i)
    }
  }
  function Se(e) {
    if ("string" != typeof e) {
      Xi.log("转换unicode错误", e)
      return e
    }
    for (var t = "", n = 0; n < e.length; n++) {
      t += "\\" + e.charCodeAt(n).toString(16)
    }
    return t
  }
  function ke(e, n, r) {
    var i
    var o
    var a
    var s = null
    var u = 0
    if (!r) {
      r = {}
    }
    var c = function () {
      u = false === r.leading ? 0 : t()
      s = null
      a = e.apply(i, o)
      if (!s) {
        i = o = null
      }
    }
    return function () {
      var l = t()
      if (!(u || false !== r.leading)) {
        u = l
      }
      var f = n - (l - u)
      i = this
      o = arguments
      if (f <= 0 || f > n) {
        if (s) {
          clearTimeout(s)
          s = null
        }
        u = l
        a = e.apply(i, o)
        if (!s) {
          i = o = null
        }
      } else {
        if (!(s || false === r.trailing)) {
          s = setTimeout(c, f)
        }
      }
      return a
    }
  }
  function Oe(e) {
    var t = []
    if (!(null == e)) {
      O(e, function (e) {
        t[t.length] = e
      })
    }
    return t
  }
  function Ee(e) {
    return e ? e.toArray ? e.toArray() : _(e) || oe(e) ? Array.prototype.slice.call(e) : Oe(e) : []
  }
  function Te(e) {
    for (var t, n = [], r = {}, i = 0; i < e.length; i++) {
      if (!((t = e[i]) in r)) {
        r[t] = true
        n.push(t)
      }
    }
    return n
  }
  function xe(e, t, n) {
    n = n || 0
    return e.substr(n, t.length) === t
  }
  function je(e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e
  }
  function Pe() {
    fo.msg.apply(fo, arguments).log()
  }
  function Ce() {
    fo.msg.apply(fo, arguments).level("warn").log()
  }
  function Ie() {
    fo.msg.apply(fo, arguments).level("error").log()
  }
  function Ne(e) {
    var /* [auto-meaningful-name] */po$current_domain = po.current_domain
    switch (typeof po$current_domain) {
      case "function":
        var n = po$current_domain()
        return "" === n || "" === d(n) ? "url解析失败" : -1 !== n.indexOf(".") ? n : "url解析失败"
      case "string":
        return "" === po$current_domain || "" === d(po$current_domain) ? "url解析失败" : -1 !== po$current_domain.indexOf(".") ? po$current_domain : "url解析失败"
      default:
        var r = F(null, Sensorsdata_domain_test, po.is_secure_cookie)
        return "" === e || "" === r ? "url解析失败" : r
    }
  }
  function Ae(e, t) {
    var n = ""
    if (false === po.cross_subdomain) {
      try {
        if (t) {
          n = g(t).hostname
        } else {
          var /* [auto-meaningful-name] */location$host = location.host
          if (!y(Ji.para.white_list[location$host])) {
            n = Ji.para.white_list[location$host]
          }
        }
      } catch (i) {
        Ie(i)
      }
      n = "string" == typeof n && "" !== n ? "sajssdk_2015_" + po.sdk_id + e + "_" + n.replace(/\./g, "_") : "sajssdk_2015_root_" + po.sdk_id + e
    } else {
      n = "sajssdk_2015_cross_" + po.sdk_id + e
    }
    return n
  }
  function Re() {
    var /* [auto-meaningful-name] */New_user = "new_user"
    return _o.isSupport() ? null !== _o.get("sensorsdata_is_new_user") || null !== _o.get(Ae(New_user)) : null !== bo.get(bo.getNewUserFlagMemoryKey(New_user))
  }
  function Le(e, t, r) {
    var i = !(!n(po.heatmap) || !po.heatmap.useCapture)
    if (n(po.heatmap) && y(po.heatmap.useCapture) && "click" === t) {
      i = true
    }
    return w(e, t, r, i)
  }
  function De() {
    var /* [auto-meaningful-name] */document$referrer = document.referrer
    var /* [auto-meaningful-name] */Baidu$com = "baidu.com"
    if (!document$referrer) {
      return false
    }
    try {
      var /* [auto-meaningful-name] */gDocument$referrer$hostname = g(document$referrer).hostname
      return gDocument$referrer$hostname && gDocument$referrer$hostname.substring(gDocument$referrer$hostname.length - Baidu$com.length) === Baidu$com
    } catch (r) {
      return false
    }
  }
  function Me() {
    var e = W(document.referrer)
    if (se(e) || !e.eqid) {
      var t = W(location.href)
      return e.ck || t.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
    }
    return "baidu_seo_keyword_id"
  }
  function Ue() {
    var e = W(document.referrer)
    return se(e) || !e.eqid ? eo().replace(/-/g, "") : e.eqid
  }
  function Be(e, t) {
    return p(e = e || document.referrer) ? (0 !== (e = N(e = d(e))).indexOf("https://www.baidu.com/") || t || (e = e.split("?")[0]), p(e = e.slice(0, po.max_referrer_string_length)) ? e : "") : "取值异常_referrer异常_" + String(e)
  }
  function He(e) {
    if ("" === (e = e || document.referrer)) {
      return true
    }
    var t = F(null, Sensorsdata_domain_test, po.is_secure_cookie)
    var n = q(e)
    return -1 === (n = "." + n).indexOf(t) && "" !== t
  }
  function Fe(e, t) {
    e = e || document.referrer
    var /* [auto-meaningful-name] */po$source_type$keyword = po.source_type.keyword
    if (document && p(e)) {
      if (0 === e.indexOf("http")) {
        var i = $e(e)
        var o = W(e)
        if (se(o)) {
          return po.preset_properties.search_keyword_baidu && De() ? undefined : "未取到值"
        }
        var a = null
        for (var s in po$source_type$keyword) if (i === s && n(o)) {
          if (_(a = po$source_type$keyword[s])) {
            for (s = 0; s < a.length; s++) {
              var u = o[a[s]]
              if (u) {
                return t ? {
                  active: u
                } : u
              }
            }
          } else if (o[a]) {
            return t ? {
              active: o[a]
            } : o[a]
          }
        }
        return po.preset_properties.search_keyword_baidu && De() ? undefined : "未取到值"
      }
      return "" === e ? "未取到值_直接打开" : "未取到值_非http的url"
    }
    return "取值异常_referrer异常_" + String(e)
  }
  function $e(e) {
    var t = q(e)
    if (!t || "hostname解析异常" === t) {
      return ""
    }
    var n = {
      baidu: [/^.*\.baidu\.com$/],
      bing: [/^.*\.bing\.com$/],
      google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
      sm: [/^m\.sm\.cn$/],
      so: [/^.+\.so\.com$/],
      sogou: [/^.*\.sogou\.com$/],
      yahoo: [/^.*\.yahoo\.com$/]
    }
    for (var r in n) for (var i = n[r], o = 0, /* [auto-meaningful-name] */i$length = i.length; o < i$length; o++) {
      if (i[o].test(t)) {
        return r
      }
    }
    return "未知搜索引擎"
  }
  function ze() {
    function e(e, t) {
      for (var n = 0; n < e.length; n++) {
        if (-1 !== t.split("?")[0].indexOf(e[n])) {
          return true
        }
      }
    }
    var t = "(" + po.source_type.utm.join("|") + ")\\=[^&]+"
    var /* [auto-meaningful-name] */po$source_type$search = po.source_type.search
    var /* [auto-meaningful-name] */po$source_type$social = po.source_type.social
    var i = document.referrer || ""
    var /* [auto-meaningful-name] */Eo$pageProp$url = Eo.pageProp.url
    if (Eo$pageProp$url) {
      var a = Eo$pageProp$url.match(new RegExp(t))
      return a && a[0] ? "付费广告流量" : e(po$source_type$search, i) ? "自然搜索流量" : e(po$source_type$social, i) ? "社交网站流量" : "" === i ? "直接流量" : "引荐流量"
    }
    return "获取url异常"
  }
  function qe(e) {
    var t = G(e, "gdt_vid")
    var n = G(e, "hash_key")
    var r = G(e, "callbacks")
    var i = {
      click_id: "",
      hash_key: "",
      callbacks: ""
    }
    if (p(t) && t.length) {
      i.click_id = 16 == t.length || 18 == t.length ? t : "参数解析不合法"
      if (p(n) && n.length) {
        i.hash_key = n
      }
      if (p(r) && r.length) {
        i.callbacks = r
      }
    }
    return i
  }
  function Ve(t) {
    var /* [auto-meaningful-name] */t$properties = t.properties
    var i = JSON.parse(JSON.stringify(t))
    if (n(t$properties)) {
      O(t$properties, function (t, n) {
        if (e(t)) {
          try {
            t$properties[n] = t(i)
            if (e(t$properties[n])) {
              Ce("您的属性- " + n + " 格式不满足要求，我们已经将其删除")
              delete t$properties[n]
            }
          } catch (a) {
            delete t$properties[n]
            Ce("您的属性- " + n + " 抛出了异常，我们已经将其删除")
          }
        }
      })
    }
  }
  function Ge(e) {
    if (n(e) && e.$option) {
      var /* [auto-meaningful-name] */e$$option = e.$option
      delete e.$option
      return e$$option
    }
    return {}
  }
  function We(e) {
    var t = {}
    O(e, function (e, n) {
      if (null != e) {
        t[n] = e
      }
    })
    return t
  }
  function Ke(e) {
    var t = !e.type || "profile" !== e.type.slice(0, 7)
    var r = "取值异常"
    if (n(e.properties) && t) {
      if ("$referrer" in e.properties) {
        e.properties.$referrer_host = "" === e.properties.$referrer ? "" : q(e.properties.$referrer, r)
      }
      if (po.preset_properties.latest_referrer && po.preset_properties.latest_referrer_host) {
        e.properties.$latest_referrer_host = "" === e.properties.$latest_referrer ? "" : q(e.properties.$latest_referrer, r)
      }
    }
  }
  function Je(e) {
    var t = !e.type || "profile" !== e.type.slice(0, 7)
    var n = po.preset_properties && t
    if (n && po.preset_properties.url && y(e.properties.$url)) {
      e.properties.$url = X()
    }
    if (n && po.preset_properties.title && y(e.properties.$title)) {
      e.properties.$title = document.title
    }
  }
  function Ye(e) {
    if (!v(e.target)) {
      return false
    }
    var /* [auto-meaningful-name] */e$target = e.target
    var n = p(e$target.tagName) ? e$target.tagName.toLowerCase() : "unknown"
    var r = {}
    r.$element_type = n
    r.$element_name = e$target.getAttribute("name")
    r.$element_id = e$target.getAttribute("id")
    r.$element_class_name = p(e$target.className) ? e$target.className : null
    r.$element_target_url = e$target.getAttribute("href")
    r.$element_content = Qe(e$target, n);
    (r = We(r)).$url = X()
    r.$url_path = Q()
    r.$title = document.title
    return r
  }
  function Xe(t) {
    var n = po.heatmap && e(po.heatmap.collect_input) && po.heatmap.collect_input(t)
    return ("button" === t.type || "submit" === t.type || n) && t.value || ""
  }
  function Qe(e, t) {
    return p(t) && "input" === t.toLowerCase() ? Xe(e) : z(e, t)
  }
  function Ze(e) {
    Oo.protocol.ajax(e.url)
    return T(e)
  }
  function et(e) {
    if ("string" == typeof e && (e = d(e))) {
      if ("://" === e.slice(0, 3)) {
        e = location.protocol.slice(0, -1) + e
      } else {
        if ("//" === e.slice(0, 2)) {
          e = location.protocol + e
        } else {
          if ("http" !== e.slice(0, 4)) {
            e = ""
          }
        }
      }
    }
    if (_(e) && e.length) {
      for (var t = 0; t < e.length; t++) {
        if (!/sa\.gif[^\/]*$/.test(e[t])) {
          e[t] = e[t].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2")
        }
      }
    } else if (!(/sa\.gif[^\/]*$/.test(e) || "string" != typeof e)) {
      e = e.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2")
    }
    return e
  }
  function tt(e) {
    if (!p(e)) {
      e = JSON.stringify(e)
    }
    var t = P(e)
    var n = "crc=" + te(t)
    return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(n)
  }
  function nt(t) {
    var n
    var /* [auto-meaningful-name] */location$href = location.href
    var /* [auto-meaningful-name] */window$history$pushState = window.history.pushState
    var /* [auto-meaningful-name] */window$history$replaceState = window.history.replaceState
    if (e(window.history.pushState)) {
      window.history.pushState = function () {
        window$history$pushState.apply(window.history, arguments)
        t(location$href)
        location$href = location.href
      }
    }
    if (e(window.history.replaceState)) {
      window.history.replaceState = function () {
        window$history$replaceState.apply(window.history, arguments)
        t(location$href)
        location$href = location.href
      }
    }
    n = window.document.documentMode ? "hashchange" : window$history$pushState ? "popstate" : "hashchange"
    w(window, n, function () {
      t(location$href)
      location$href = location.href
    })
  }
  function rt(e, t) {
    var n = []
    if ("string" == typeof e && e in To.EVENT_LIST) {
      n = To.EVENT_LIST[e]
      To[n[0]].on(n[1], t)
    }
  }
  function it() {
    this.sendTimeStamp = 0
    this.timer = null
    this.serverUrl = ""
    this.hasTabStorage = false
  }
  function ot(e, t) {
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n) && !Uo.check(n, e[n], t)) {
      return false
    }
    return true
  }
  function at(t, r) {
    return n(t) ? (O(t, function (i, o) {
      if (_(i)) {
        var a = []
        O(i, function (e) {
          if (p(e)) {
            a.push(e)
          } else if (y(e)) {
            a.push("null")
          } else {
            try {
              a.push(JSON.stringify(e))
            } catch (t) {
              Ce("您的数据-", o, i, "数组里值有错误,已将其删除")
            }
          }
        })
        t[o] = a
      }
      var s = re(r || [], o) > -1
      if (n(i) && "$option" !== o && !s) {
        try {
          t[o] = JSON.stringify(i)
        } catch (u) {
          delete t[o]
          Ce("您的数据-", o, i, "数据值有错误，已将其删除")
        }
      } else if (!(p(i) || fe(i) || R(i) || ae(i) || _(i) || e(i) || "$option" === o || s)) {
        Ce("您的数据-", o, i, "-格式不满足要求，我们已经将其删除")
        delete t[o]
      }
    }), t) : t
  }
  function st(e, t) {
    return fe(t) && e.length > t ? (Ce("字符串长度超过限制，已经做截取--" + e), e.slice(0, t)) : e
  }
  function ut(e, t) {
    var r = ["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"]
    if (n(e)) {
      O(r, function (n, r) {
        if (n in e) {
          if (!(re(t || [], n) > -1)) {
            if (r < 3) {
              delete e[n]
              Ce("您的属性- " + n + "是保留字段，我们已经将其删除")
            } else {
              Ce("您的属性- " + n + "是保留字段，请避免其作为属性名")
            }
          }
        }
      })
    }
  }
  function ct(e) {
    var t = ["$element_selector", "$element_path"]
    var r = ["sensorsdata_app_visual_properties"]
    if (n(e)) {
      O(e, function (i, o) {
        if (n(i)) {
          ct(e[o])
        } else if (p(i)) {
          if (re(r, o) > -1) {
            return
          }
          e[o] = st(i, re(t, o) > -1 ? 1024 : po.max_string_length)
        }
      })
    }
  }
  function lt(e) {
    if ("undefined" != typeof e.properties.$project) {
      e.project = e.properties.$project
      delete e.properties.$project
    }
    if ("undefined" != typeof e.properties.$token) {
      e.token = e.properties.$token
      delete e.properties.$token
    }
  }
  function ft(e) {
    if ("item_type" in e) {
      var t = function (t) {
        if (!t) {
          delete e.item_type
        }
        return true
      }
      ot({
        item_type: e.item_type
      }, t)
    }
    if ("item_id" in e) {
      var n = function (t, n, r) {
        if (!(t || "string" !== r)) {
          delete e.item_id
        }
        return true
      }
      ot({
        item_id: e.item_id
      }, n)
    }
  }
  function pt(e, t) {
    O(e, function (n, r) {
      var i = function (t, n, i) {
        if (!(t || "keyLength" === i)) {
          delete e[r]
        }
        return true
      }
      if (-1 === re(t || [], r)) {
        ot({
          propertyKey: r
        }, i)
      }
    })
  }
  function dt(e) {
    var /* [auto-meaningful-name] */e$properties = e.properties
    be(e)
    if (n(e$properties)) {
      at(e$properties)
      ut(e$properties)
      lt(e)
      pt(e$properties)
      ct(e$properties)
    } else {
      if ("properties" in e) {
        e.properties = {}
      }
    }
    ft(e)
  }
  function ht(e, t) {
    var /* [auto-meaningful-name] */t$sensors = t.sensors
    e._track_id = Number(String(r()).slice(2, 5) + String(r()).slice(2, 4) + String(new Date().getTime()).slice(-4))
    e._flush_time = new Date().getTime()
    t$sensors.events.tempAdd("send", e)
    return e
  }
  function gt(e, t) {
    try {
      var /* [auto-meaningful-name] */t$sensors = t.sensors
      var i = {}
      if (n(e) && n(e.identities) && !se(e.identities)) {
        E(i, e.identities)
      } else {
        E(i, Lo.getIdentities())
      }
      var a = {
        identities: i,
        distinct_id: Lo.getDistinctId(),
        lib: {
          $lib: "js",
          $lib_method: "code",
          $lib_version: String(t$sensors.lib_version)
        },
        properties: {}
      }
      if (n(e) && n(e.properties) && !se(e.properties)) {
        if (e.properties.$lib_detail) {
          a.lib.$lib_detail = e.properties.$lib_detail
          delete e.properties.$lib_detail
        }
        if (e.properties.$lib_method) {
          a.lib.$lib_method = e.properties.$lib_method
          delete e.properties.$lib_method
        }
      }
      M(a, Lo.getUnionId(), e)
      if (n(e.properties) && !se(e.properties)) {
        E(a.properties, e.properties)
      }
      if ("$UnbindID" === a.event) {
        if (a.login_id) {
          delete a.login_id
        }
        if (a.anonymous_id) {
          delete a.anonymous_id
        }
      }
      if (!(e.type && "profile" === e.type.slice(0, 7))) {
        if (t$sensors.para.properties_priority && 3 === t$sensors.para.properties_priority) {
          a.properties = E({}, Eo.properties(), Lo.getSessionProps(), Eo.currentProps, Lo.getProps(), a.properties)
        } else {
          a.properties = E({}, Eo.properties(), Lo.getProps(), Lo.getSessionProps(), Eo.currentProps, a.properties)
        }
        if (t$sensors.para.preset_properties.latest_referrer && !p(a.properties.$latest_referrer)) {
          a.properties.$latest_referrer = "取值异常"
        }
        if (t$sensors.para.preset_properties.latest_search_keyword && !p(a.properties.$latest_search_keyword)) {
          if (!(t$sensors.para.preset_properties.search_keyword_baidu && p(a.properties.$search_keyword_id) && fe(a.properties.$search_keyword_id_hash) && p(a.properties.$search_keyword_id_type))) {
            a.properties.$latest_search_keyword = "取值异常"
          }
        }
        if (t$sensors.para.preset_properties.latest_traffic_source_type && !p(a.properties.$latest_traffic_source_type)) {
          a.properties.$latest_traffic_source_type = "取值异常"
        }
        if (t$sensors.para.preset_properties.latest_landing_page && !p(a.properties.$latest_landing_page)) {
          a.properties.$latest_landing_page = "取值异常"
        }
        if ("not_collect" === t$sensors.para.preset_properties.latest_wx_ad_click_id) {
          delete a.properties._latest_wx_ad_click_id
          delete a.properties._latest_wx_ad_hash_key
          delete a.properties._latest_wx_ad_callbacks
        } else {
          if (t$sensors.para.preset_properties.latest_wx_ad_click_id && !p(a.properties._latest_wx_ad_click_id)) {
            a.properties._latest_wx_ad_click_id = "取值异常"
            a.properties._latest_wx_ad_hash_key = "取值异常"
            a.properties._latest_wx_ad_callbacks = "取值异常"
          }
        }
        if (p(a.properties._latest_wx_ad_click_id)) {
          a.properties.$url = X()
        }
      }
      if (a.properties.$time && R(a.properties.$time)) {
        a.time = 1 * a.properties.$time
        delete a.properties.$time
      } else {
        a.time = 1 * new Date()
      }
      (function (e) {
        if (t$sensors.bridge && "success" === t$sensors.bridge.bridge_info.verify_success) {
          var t = Fo.customProp.geth5Props(JSON.parse(JSON.stringify(e)))
          if (n(t) && !se(t)) {
            e.properties = E(e.properties, t)
          }
        }
        var i = qo.customProp.getVtrackProps(JSON.parse(JSON.stringify(e)))
        if (n(i) && !se(i)) {
          e.properties = E(e.properties, i)
        }
      })(a)
      Ve(a)
      wo.checkIsAddSign(a)
      wo.checkIsFirstTime(a)
      Ke(a)
      Je(a)
      return a
    } catch (o) {
      return {
        _debug_web_msg: String(o)
      }
    }
  }
  function mt(e) {
    return Vo.stage.process("basicProps", e)
  }
  function vt(e) {
    return Vo.stage.process("formatData", e)
  }
  function yt(e, t, n, r) {
    function i(e) {
      function i() {
        if (!a) {
          a = true
          location.href = o.href
        }
      }
      e.stopPropagation()
      e.preventDefault()
      var a = false
      setTimeout(i, 1e3)
      r(t, n, i)
    }
    var o = null
    if ((e = e || {}).ele) {
      o = e.ele
    }
    if (e.event) {
      o = e.target ? e.target : e.event.target
    }
    n = n || {}
    return !(!o || "object" != typeof o) && (!o.href || /^javascript/.test(o.href) || o.target || o.download || o.onclick ? (r(t, n), false) : (e.event && i(e.event), void (e.ele && Le(e.ele, "click", function (e) {
      i(e)
    }))))
  }
  function _t() {
    var /* [auto-meaningful-name] */location$protocol = location.protocol
    return "http:" === location$protocol || "https:" === location$protocol ? location$protocol : "http:"
  }
  function bt(e) {
    return Wo.stage.process("webClickEvent", e)
  }
  function wt(e) {
    return Wo.stage.process("webStayEvent", e)
  }
  function St() {
    var e = Eo.campaignParams()
    var t = {}
    O(e, function (e, n, r) {
      if (-1 !== (" " + Ji.source_channel_standard + " ").indexOf(" " + n + " ")) {
        t["$" + n] = r[n]
      } else {
        t[n] = r[n]
      }
    })
    return t
  }
  function kt(e, t, n) {
    if (Ji.is_first_visitor && n) {
      var r = {}
      if (Ji.para.preset_properties.search_keyword_baidu && He(document.referrer) && De()) {
        r.$search_keyword_id = ko.id()
        r.$search_keyword_id_type = ko.type()
        r.$search_keyword_id_hash = ne(r.$search_keyword_id)
      }
      var i = Be(null, t)
      e(E({
        $first_visit_time: new Date(),
        $first_referrer: i,
        $first_referrer_host: i ? q(i, "取值异常") : "",
        $first_browser_language: p(navigator.language) ? navigator.language.toLowerCase() : "取值异常",
        $first_browser_charset: p(document.charset) ? document.charset.toUpperCase() : "取值异常",
        $first_traffic_source_type: ze(),
        $first_search_keyword: Fe()
      }, St(), r))
      Ji.is_first_visitor = false
    }
  }
  function Ot(e, t) {
    var r = e.id
    var /* [auto-meaningful-name] */e$callback = e.callback
    var /* [auto-meaningful-name] */e$name = e.name
    var a = Lo.getFirstId()
    var s = Lo.getOriginDistinctId()
    if (!ot({
      distinct_id: r
    })) {
      Ie("login id is invalid")
      return false
    }
    if (r === Lo.getOriginDistinctId() && !a) {
      Ie("login id is equal to distinct_id")
      return false
    }
    if (n(Lo._state.identities) && Lo._state.identities.hasOwnProperty(e$name) && r === Lo._state.first_id) {
      return false
    }
    if (Lo._state.history_login_id.name !== e$name || r !== Lo._state.history_login_id.value) {
      Lo._state.identities[e$name] = r
      Lo.set("history_login_id", {
        name: e$name,
        value: r
      })
      if (!a) {
        Lo.set("first_id", s)
      }
      t(r, "$SignUp", {}, e$callback)
      var u = {
        $identity_cookie_id: Lo._state.identities.$identity_cookie_id
      }
      u[e$name] = r
      Et(u)
      return true
    }
    return false
  }
  function Et(e) {
    var t = {}
    for (var n in e) t[n] = e[n]
    Lo._state.identities = t
    Lo.save()
  }
  function Tt(e, t) {
    if (!ot({
      unbindKey: e,
      bindValue: t
    })) {
      return false
    }
    if (n(Lo._state.identities) && Lo._state.identities.hasOwnProperty(e) && Lo._state.identities[e] === t) {
      var /* [auto-meaningful-name] */Lo$getUnionId$login_id = Lo.getUnionId().login_id
      if (Lo$getUnionId$login_id && e + "+" + t === Lo$getUnionId$login_id) {
        Lo._state.distinct_id = Lo._state.first_id
        Lo._state.first_id = ""
        Lo.set("history_login_id", {
          name: "",
          value: ""
        })
      }
      if ("$identity_cookie_id" !== e) {
        delete Lo._state.identities[e]
        Lo.save()
      }
    }
    var i = {}
    i[e] = t
    return i
  }
  function xt() {
    Ji._t = Ji._t || 1 * new Date()
    Ji.is_first_visitor = false
    Ji.source_channel_standard = Utm_sourceUtm_mediumUtm_campaignUtm_contentUtm_term
  }
  function jt(e) {
    E(po, e || Ji.para || {})
    Ji.para = po
    var t
    var r = {}
    if (n(Ji.para.is_track_latest)) {
      for (var i in Ji.para.is_track_latest) r["latest_" + i] = Ji.para.is_track_latest[i]
    }
    for (t in Ji.para.preset_properties = E({}, ho.preset_properties, r, Ji.para.preset_properties || {}), ho) if (undefined === Ji.para[t]) {
      Ji.para[t] = ho[t]
    }
    if (!("string" != typeof Ji.para.web_url || "://" !== Ji.para.web_url.slice(0, 3) && "//" !== Ji.para.web_url.slice(0, 2))) {
      if ("://" === Ji.para.web_url.slice(0, 3)) {
        Ji.para.web_url = location.protocol.slice(0, -1) + Ji.para.web_url
      } else {
        Ji.para.web_url = location.protocol + Ji.para.web_url
      }
    }
    Oo.protocol.serverUrl()
    if (Ji.bridge) {
      Ji.bridge.initPara()
    }
    var o = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    var a = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"]
    var s = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"]
    var u = {
      baidu: ["wd", "word", "kw", "keyword"],
      google: "q",
      bing: "q",
      yahoo: "p",
      sogou: ["query", "keyword"],
      so: "q",
      sm: "q"
    }
    if ("object" == typeof Ji.para.source_type) {
      Ji.para.source_type.utm = _(Ji.para.source_type.utm) ? Ji.para.source_type.utm.concat(o) : o
      Ji.para.source_type.search = _(Ji.para.source_type.search) ? Ji.para.source_type.search.concat(a) : a
      Ji.para.source_type.social = _(Ji.para.source_type.social) ? Ji.para.source_type.social.concat(s) : s
      Ji.para.source_type.keyword = n(Ji.para.source_type.keyword) ? E(u, Ji.para.source_type.keyword) : u
    }
    var c = {
      div: false
    }
    var l = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"]
    if (Ji.para.heatmap && !n(Ji.para.heatmap)) {
      Ji.para.heatmap = {}
    }
    if (n(Ji.para.heatmap)) {
      Ji.para.heatmap.clickmap = Ji.para.heatmap.clickmap || "default"
      Ji.para.heatmap.scroll_notice_map = Ji.para.heatmap.scroll_notice_map || "default"
      Ji.para.heatmap.scroll_delay_time = Ji.para.heatmap.scroll_delay_time || 4e3
      Ji.para.heatmap.scroll_event_duration = Ji.para.heatmap.scroll_event_duration || 18e3
      Ji.para.heatmap.renderRefreshTime = Ji.para.heatmap.renderRefreshTime || 1e3
      Ji.para.heatmap.loadTimeout = Ji.para.heatmap.loadTimeout || 1e3
      Ji.para.heatmap.request_timeout = Ji.para.heatmap.request_timeout || 1e4
      if (true !== Ji.para.heatmap.get_vtrack_config) {
        Ji.para.heatmap.get_vtrack_config = false
      }
      var f = _(Ji.para.heatmap.track_attr) ? U(Ji.para.heatmap.track_attr, function (e) {
        return e && "string" == typeof e
      }) : []
      f.push("data-sensors-click")
      Ji.para.heatmap.track_attr = f
      if (n(Ji.para.heatmap.collect_tags)) {
        if (true === Ji.para.heatmap.collect_tags.div) {
          Ji.para.heatmap.collect_tags.div = {
            ignore_tags: l,
            max_level: 1
          }
        } else {
          if (n(Ji.para.heatmap.collect_tags.div)) {
            if (Ji.para.heatmap.collect_tags.div.ignore_tags) {
              if (!_(Ji.para.heatmap.collect_tags.div.ignore_tags)) {
                Ce("ignore_tags 参数必须是数组格式")
                Ji.para.heatmap.collect_tags.div.ignore_tags = l
              }
            } else {
              Ji.para.heatmap.collect_tags.div.ignore_tags = l
            }
            if (Ji.para.heatmap.collect_tags.div.max_level && -1 === re([1, 2, 3], Ji.para.heatmap.collect_tags.div.max_level)) {
              Ji.para.heatmap.collect_tags.div.max_level = 1
            }
          } else {
            Ji.para.heatmap.collect_tags.div = false
          }
        }
      } else {
        Ji.para.heatmap.collect_tags = c
      }
    }
    Ji.para.server_url = et(Ji.para.server_url)
    if (true === Ji.para.noCache) {
      Ji.para.noCache = "?" + new Date().getTime()
    } else {
      Ji.para.noCache = ""
    }
    if (Ji.para.callback_timeout > Ji.para.datasend_timeout) {
      Ji.para.datasend_timeout = Ji.para.callback_timeout
    }
    if (Ji.para.heatmap && Ji.para.heatmap.collect_tags && n(Ji.para.heatmap.collect_tags)) {
      O(Ji.para.heatmap.collect_tags, function (e, t) {
        if ("div" !== t && e) {
          Ji.heatmap.otherTags.push(t)
        }
      })
    }
    if (Ji.para.heatmap && "default" === Ji.para.heatmap.clickmap) {
      Ji.heatmap.initUnlimitedTags()
    }
  }
  function Pt() {
    var e = Array.prototype.slice.call(arguments)
    var t = e[0]
    var n = e.slice(1)
    return "string" == typeof t && Yo[t] ? Yo[t].apply(Yo, n) : void ("function" == typeof t ? t.apply(Ji, n) : Ce("quick方法中没有这个功能" + e[0]))
  }
  function Ct(t, r) {
    function i() {
      if (!o.plugin_is_init) {
        o.init(Ji, r)
      }
      o.plugin_is_init = true
      Ji.modules = Ji.modules || {}
      Ji.modules[o.plugin_name || "unnamed_" + Qo++] = o
      return o
    }
    if (p(t) || n(t)) {
      var o
      if (n(t)) {
        var a = Ji.modules && Ji.modules[t.plugin_name]
        if (a && a !== t) {
          Ce(t.name + " is conflict with builtin plugin, and sdk uses builtin plugin.")
        }
        o = a || t
      }
      if (p(t)) {
        if (n(Ji.modules) && n(Ji.modules[t])) {
          o = Ji.modules[t]
        } else {
          if (n(window.SensorsDataWebJSSDKPlugin) && n(window.SensorsDataWebJSSDKPlugin[t])) {
            o = window.SensorsDataWebJSSDKPlugin[t]
          } else {
            if (window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505.modules[t]) {
              o = window.sensorsDataAnalytic201505.modules[t]
            }
          }
        }
      }
      return o && e(o.init) ? o.plugin_is_init ? o : (o.plugin_name || Ce("warning: invalid plugin, plugin_name required."), o.plugin_version ? o.plugin_version !== Ji.lib_version && Ce("warning: plugin version not match SDK version. plugin may not work correctly. ") : Ce("warning: invalid plugin, plugin version required."), i()) : (Ce((t.plugin_name || t) + " is not found or it's not a standard plugin. Please check sensorsdata official documents."), o)
    }
    Ie("use's first arguments must be string or object.")
  }
  function It(e, t, n) {
    if (ot({
      event: e,
      properties: t
    })) {
      Go.send({
        type: "track",
        event: e,
        properties: t
      }, n)
    }
  }
  function Nt(e, t) {
    return !!ot({
      bindKey: e,
      bindValue: t
    }) && (Lo._state.identities[e] = t, Lo.save(), void Go.send({
      type: "track_id_bind",
      event: "$BindID",
      properties: {}
    }))
  }
  function At(e, t) {
    var n = Tt(e, t)
    if (n) {
      Go.send({
        identities: n,
        type: "track_id_unbind",
        event: "$UnbindID",
        properties: {}
      })
    }
  }
  function Rt(e, t, n) {
    if ("object" == typeof e && e.tagName) {
      yt({
        ele: e
      }, t, n, Ji.track)
    } else {
      if ("object" == typeof e && e.target && e.event) {
        yt(e, t, n, Ji.track)
      }
    }
  }
  function Lt(e, t, n) {
    n = n || {}
    return !(!e || "object" != typeof e) && !(!e.href || /^javascript/.test(e.href) || e.target) && void Le(e, "click", function (r) {
      function i() {
        if (!o) {
          o = true
          location.href = e.href
        }
      }
      r.preventDefault()
      var o = false
      setTimeout(i, 1e3)
      Ji.track(t, n, i)
    })
  }
  function Dt(e, t, n) {
    if (ot({
      item_type: e,
      item_id: t,
      properties: n
    })) {
      Go.sendItem({
        type: "item_set",
        item_type: e,
        item_id: t,
        properties: n || {}
      })
    }
  }
  function Mt(e, t) {
    if (ot({
      item_type: e,
      item_id: t
    })) {
      Go.sendItem({
        type: "item_delete",
        item_type: e,
        item_id: t
      })
    }
  }
  function Ut(e, t) {
    if (ot({
      propertiesMust: e
    })) {
      Go.send({
        type: "profile_set",
        properties: e
      }, t)
    }
  }
  function Bt(e, t) {
    if (ot({
      propertiesMust: e
    })) {
      Go.send({
        type: "profile_set_once",
        properties: e
      }, t)
    }
  }
  function Ht(e, t) {
    if (ot({
      propertiesMust: e
    })) {
      O(e, function (t, n) {
        if (p(t) && je(n)) {
          e[n] = [t]
        } else {
          if (_(t) && je(n)) {
            e[n] = t
          } else {
            delete e[n]
            Ce("appendProfile属性的值必须是字符串或者数组")
          }
        }
      })
      if (!se(e)) {
        Go.send({
          type: "profile_append",
          properties: e
        }, t)
      }
    }
  }
  function Ft(e, t) {
    function n(e) {
      for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && !/-*\d+/.test(String(e[t]))) {
        return false
      }
      return true
    }
    var r = e
    if (p(e)) {
      (e = {})[r] = 1
    }
    if (ot({
      propertiesMust: e
    })) {
      if (n(e)) {
        Go.send({
          type: "profile_increment",
          properties: e
        }, t)
      } else {
        Ie("profile_increment的值只能是数字")
      }
    }
  }
  function $t(e) {
    Go.send({
      type: "profile_delete"
    }, e)
    Lo.set("distinct_id", eo())
    Lo.set("first_id", "")
  }
  function zt(e, t) {
    var n = e
    var r = {}
    if (p(e)) {
      (e = []).push(n)
    }
    if (_(e)) {
      O(e, function (e) {
        if (p(e)) {
          r[e] = true
        } else {
          Ce("profile_unset给的数组里面的值必须时string,已经过滤掉", e)
        }
      })
      Go.send({
        type: "profile_unset",
        properties: r
      }, t)
    } else {
      Ie("profile_unset的参数必须是数组")
    }
  }
  function qt(e) {
    if ("number" == typeof e) {
      e = String(e)
    }
    var t = Lo.getFirstId()
    if ("undefined" == typeof e) {
      var n = eo()
      if (t) {
        Lo.set("first_id", n)
      } else {
        Lo.set("distinct_id", n)
      }
    } else if (ot({
      distinct_id: e
    })) {
      if (t) {
        Lo.set("first_id", e)
      } else {
        Lo.set("distinct_id", e)
      }
    }
  }
  function Vt(e) {
    if (Lo.getFirstId()) {
      Ie("resetAnonymousIdentity must be used in a logout state ！")
      return false
    }
    if ("number" == typeof e) {
      e = String(e)
    }
    if ("undefined" == typeof e) {
      var t = eo()
      Lo._state.identities.$identity_cookie_id = t
      Lo.set("distinct_id", t)
    } else if (ot({
      distinct_id: e
    })) {
      Lo._state.identities.$identity_cookie_id = e
      Lo.set("distinct_id", e)
    }
  }
  function Gt(e, t, n, r) {
    var i = Lo.getFirstId() || Lo.getDistinctId()
    Lo.set("distinct_id", e)
    Go.send({
      original_id: i,
      distinct_id: Lo.getDistinctId(),
      type: "track_signup",
      event: t,
      properties: n
    }, r)
  }
  function Wt(e, t, n, r) {
    if ("number" == typeof e) {
      e = String(e)
    }
    if (ot({
      distinct_id: e,
      event: t,
      properties: n
    })) {
      Gt(e, t, n, r)
    }
  }
  function Kt(e) {
    if (ot({
      properties: e
    })) {
      E(Eo.currentProps, e)
    } else {
      Ie("register输入的参数有误")
    }
  }
  function Jt(e) {
    Lo.clearAllProps(e)
  }
  function Yt(e) {
    var t
    if (_(e) && e.length > 0) {
      for (t = 0; t < e.length; t++) {
        if (p(e[t]) && e[t] in Eo.currentProps) {
          delete Eo.currentProps[e[t]]
        }
      }
    } else if (true === e) {
      for (t in Eo.currentProps) delete Eo.currentProps[t]
    }
  }
  function Xt(e) {
    if (ot({
      properties: e
    })) {
      Lo.setProps(e)
    } else {
      Ie("register输入的参数有误")
    }
  }
  function Qt(e) {
    if (ot({
      properties: e
    })) {
      Lo.setPropsOnce(e)
    } else {
      Ie("registerOnce输入的参数有误")
    }
  }
  function Zt(e) {
    Ji.log("registerSession 方法已经弃用，有问题联系技术顾问")
    if (ot({
      properties: e
    })) {
      Lo.setSessionProps(e)
    } else {
      Ie("registerSession输入的参数有误")
    }
  }
  function en(e) {
    Ji.log("registerSessionOnce 方法已经弃用，有问题联系技术顾问")
    if (ot({
      properties: e
    })) {
      Lo.setSessionPropsOnce(e)
    } else {
      Ie("registerSessionOnce输入的参数有误")
    }
  }
  function tn(t, n) {
    if ("number" == typeof t) {
      t = String(t)
    }
    if (!Ot({
      id: t,
      callback: n,
      name: yo.LOGIN
    }, Gt) && e(n)) {
      n()
    }
  }
  function nn(e, t) {
    Ce("loginWithKey is deprecated !!!")
    if ("number" == typeof t) {
      t = String(t)
    }
    if ("number" == typeof e) {
      e = String(e)
    }
    return !!ot({
      loginIdKey: e
    }) && (yo.LOGIN === e ? (tn(t), false) : void Ot({
      id: t,
      callback: null,
      name: e
    }, Gt))
  }
  function rn(e) {
    var t = Lo.getFirstId()
    if (t) {
      Lo.set("first_id", "")
      if (true === e) {
        var n = eo()
        Lo.set("distinct_id", n)
      } else {
        Lo.set("distinct_id", t)
      }
    }
    Et({
      $identity_cookie_id: Lo._state.identities.$identity_cookie_id
    })
    Lo.set("history_login_id", {
      name: "",
      value: ""
    })
  }
  function on() {
    function e() {
      var e = Eo.campaignParams()
      var t = {}
      O(e, function (e, n, r) {
        if (-1 !== (" " + Ji.source_channel_standard + " ").indexOf(" " + n + " ")) {
          t["$" + n] = r[n]
        } else {
          t[n] = r[n]
        }
      })
      return t
    }
    var t = {
      $is_first_day: Re(),
      $is_first_time: wo.is_page_first_visited,
      $referrer: Eo.pageProp.referrer || "",
      $referrer_host: Eo.pageProp.referrer ? q(Eo.pageProp.referrer) : "",
      $url: X(),
      $url_path: Q(),
      $title: document.title || "",
      _distinct_id: Lo.getDistinctId(),
      identities: Lo.getIdentities()
    }
    var n = E({}, Eo.properties(), Lo.getProps(), e(), t)
    if (Ji.para.preset_properties.latest_referrer && Ji.para.preset_properties.latest_referrer_host) {
      n.$latest_referrer_host = "" === n.$latest_referrer ? "" : q(n.$latest_referrer)
    }
    return n
  }
  function an() {
    var e = ""
    var /* [auto-meaningful-name] */CursorPointerWebkitTapHighlightColorRgba0000 = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }"
    if (Ji.heatmap && _(Ji.heatmap.otherTags)) {
      O(Ji.heatmap.otherTags, function (n) {
        e += n + CursorPointerWebkitTapHighlightColorRgba0000
      })
    }
    if (ce() && V() && V() < 13) {
      if (Ji.para.heatmap && Ji.para.heatmap.collect_tags && Ji.para.heatmap.collect_tags.div) {
        we("div, [data-sensors-click]" + CursorPointerWebkitTapHighlightColorRgba0000)
      }
      if (Ji.para.heatmap && Ji.para.heatmap.track_attr) {
        we("[" + Ji.para.heatmap.track_attr.join("], [") + "]" + CursorPointerWebkitTapHighlightColorRgba0000)
      }
      if ("" !== e) {
        we(e)
      }
    }
  }
  function sn(e) {
    var t = this
    this.type = e
    this.resultCbs = {}
    this.timeoutCbs = {}
    this.timerId = null
    this.appCallJsCallback = null
    if (!window.sensorsdata_app_call_js) {
      window.sensorsdata_app_call_js = function (e, t) {
        if (e in window.sensorsdata_app_call_js.modules) {
          return window.sensorsdata_app_call_js.modules[e](t)
        }
      }
    }
    window.sensorsdata_app_call_js.modules = window.sensorsdata_app_call_js.modules || {}
    window.sensorsdata_app_call_js.modules[this.type] = function (e) {
      try {
        var n = j(e) || e
        try {
          n = JSON.parse(n)
        } catch (r) {}
        var i = n && n.message_id
        if (i && t.resultCbs[i]) {
          e = n
          if (t.timeoutCbs[i] && t.timeoutCbs[i].isTimeout) {
            return void (t.resultCbs[i].callbacks.length = 0)
          }
          if (t.resultCbs[i]) {
            for (var a in t.resultCbs[i].result = e, clearTimeout(t.timerId), t.timeoutCbs[i].callbacks.length = 0, t.resultCbs[i].callbacks) {
              t.resultCbs[i].callbacks[a].call(null, e)
              t.resultCbs[i].callbacks.splice(a, 1)
            }
          }
          return
        }
        return t.appCallJsCallback && t.appCallJsCallback.call(null, e)
      } catch (o) {
        Ie("app 回调 js 异常", e)
      }
    }
  }
  function un(t) {
    try {
      if (Ji.bridge.activeBridge && e(Ji.bridge.activeBridge.handleCommand)) {
        return Ji.bridge.activeBridge.handleCommand(t)
      }
    } catch (n) {
      Ie("Error: handle command exception:" + n)
    }
    Ie("数据发往App失败，App没有暴露bridge,type:" + t.callType)
    return false
  }
  function cn(e) {
    function t(e) {
      var t = {
        hostname: "",
        project: ""
      }
      try {
        e = g(e)
        t.hostname = e.hostname
        t.project = e.searchParams.get("project") || "default"
      } catch (n) {
        Ie("validateAppUrl:" + n)
      }
      return t
    }
    var n = t(e)
    var r = t(Ji.para.server_url)
    if (n.hostname === r.hostname && n.project === r.project) {
      return true
    }
    if (_(Ji.para.app_js_bridge.white_list)) {
      for (var i = 0; i < Ji.para.app_js_bridge.white_list.length; i++) {
        var o = t(Ji.para.app_js_bridge.white_list[i])
        if (o.hostname === n.hostname && o.project === n.project) {
          return true
        }
      }
    }
    return false
  }
  function ln(e) {
    this.bridge = new sn(e.type)
  }
  function fn() {
    var /* [auto-meaningful-name] */Eo$pageProp$url_domain = Eo.pageProp.url_domain
    var t = {}
    if ("" === Eo$pageProp$url_domain) {
      Eo$pageProp$url_domain = "url解析失败"
    }
    var r = Fe(document.referrer, true)
    if (po.preset_properties.search_keyword_baidu) {
      if (He(document.referrer)) {
        if (!De() || n(r) && r.active) {
          if (Lo._state && Lo._state.props) {
            if (Lo._state.props.$search_keyword_id) {
              delete Lo._state.props.$search_keyword_id
            }
            if (Lo._state.props.$search_keyword_id_type) {
              delete Lo._state.props.$search_keyword_id_type
            }
            if (Lo._state.props.$search_keyword_id_hash) {
              delete Lo._state.props.$search_keyword_id_hash
            }
          }
        } else {
          t.$search_keyword_id = ko.id()
          t.$search_keyword_id_type = ko.type()
          t.$search_keyword_id_hash = ne(t.$search_keyword_id)
        }
      }
    } else {
      if (Lo._state && Lo._state.props) {
        if (Lo._state.props.$search_keyword_id) {
          delete Lo._state.props.$search_keyword_id
        }
        if (Lo._state.props.$search_keyword_id_type) {
          delete Lo._state.props.$search_keyword_id_type
        }
        if (Lo._state.props.$search_keyword_id_hash) {
          delete Lo._state.props.$search_keyword_id_hash
        }
      }
    }
    Lo.save()
    O(po.preset_properties, function (r, i) {
      if (-1 === i.indexOf("latest_")) {
        return false
      }
      i = i.slice(7)
      if (r) {
        if ("wx_ad_click_id" === i && "not_collect" === r) {
          return false
        }
        if ("utm" !== i && "url解析失败" === Eo$pageProp$url_domain) {
          if ("wx_ad_click_id" === i) {
            t._latest_wx_ad_click_id = "url的domain解析失败"
            t._latest_wx_ad_hash_key = "url的domain解析失败"
            t._latest_wx_ad_callbacks = "url的domain解析失败"
          } else {
            t["$latest_" + i] = "url的domain解析失败"
          }
        } else if (He(document.referrer)) {
          switch (i) {
            case "traffic_source_type":
              t.$latest_traffic_source_type = ze()
              break
            case "referrer":
              t.$latest_referrer = Eo.pageProp.referrer
              break
            case "search_keyword":
              if (Fe()) {
                t.$latest_search_keyword = Fe()
              } else {
                if (n(Lo._state) && n(Lo._state.props) && Lo._state.props.$latest_search_keyword) {
                  delete Lo._state.props.$latest_search_keyword
                }
              }
              break
            case "landing_page":
              t.$latest_landing_page = X()
              break
            case "wx_ad_click_id":
              var o = qe(location.href)
              t._latest_wx_ad_click_id = o.click_id
              t._latest_wx_ad_hash_key = o.hash_key
              t._latest_wx_ad_callbacks = o.callbacks
          }
        }
      } else if ("utm" === i && Lo._state && Lo._state.props) {
        for (var a in Lo._state.props) if (0 === a.indexOf("$latest_utm") || 0 === a.indexOf("_latest_") && a.indexOf("_latest_wx_ad_") < 0) {
          delete Lo._state.props[a]
        }
      } else if (Lo._state && Lo._state.props && "$latest_" + i in Lo._state.props) {
        delete Lo._state.props["$latest_" + i]
      } else {
        if ("wx_ad_click_id" == i && Lo._state && Lo._state.props && false === r) {
          O(["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"], function (e) {
            if (e in Lo._state.props) {
              delete Lo._state.props[e]
            }
          })
        }
      }
    })
    if (po.preset_properties.latest_utm) {
      var i = Eo.campaignParamsStandard("$latest_", "_latest_")
      var /* [auto-meaningful-name] */i$$utms = i.$utms
      var /* [auto-meaningful-name] */i$otherUtms = i.otherUtms
      if (!se(i$$utms)) {
        E(t, i$$utms)
      }
      if (!se(i$otherUtms)) {
        E(t, i$otherUtms)
      }
    }
    Xt(t)
  }
  function pn(e) {
    var t = null
    try {
      var n = JSON.parse(window.name)
      t = n[e] ? c(n[e]) : null
    } catch (r) {
      t = null
    }
    if (null === t) {
      t = G(location.href, e) || null
    }
    return t
  }
  function dn(e) {
    function t() {
      var e = []
      if (!Ji$bridge$bridge_info.touch_app_bridge) {
        e.push(Oo.defineMode("1"))
      }
      if (!n(Ji.para.app_js_bridge)) {
        e.push(Oo.defineMode("2"))
        Ji$bridge$bridge_info.verify_success = false
      }
      if (!(n(Ji.para.heatmap) && "default" == Ji.para.heatmap.clickmap)) {
        e.push(Oo.defineMode("3"))
      }
      if ("fail" === Ji$bridge$bridge_info.verify_success) {
        e.push(Oo.defineMode("4"))
      }
      new Ji.SDKJSBridge("app_alert").notifyApp({
        data: e
      })
    }
    var /* [auto-meaningful-name] */Ji$bridge$bridge_info = Ji.bridge.bridge_info
    if (Ji.bridge.hasVisualModeBridge()) {
      if (n(Ji.para.heatmap) && "default" == Ji.para.heatmap.clickmap) {
        if (n(Ji.para.app_js_bridge) && "success" === Ji$bridge$bridge_info.verify_success) {
          if (e) {
            window.sa_jssdk_app_define_mode(Ji, e)
          } else {
            var /* [auto-meaningful-name] */location$protocol = location.protocol
            me({
              success: function () {
                setTimeout(function () {
                  if ("undefined" != typeof sa_jssdk_app_define_mode) {
                    window.sa_jssdk_app_define_mode(Ji, e)
                  }
                }, 0)
              },
              error: function () {},
              type: "js",
              url: (location$protocol = re(["http:", "https:"], location$protocol) > -1 ? location$protocol : "https:") + "//static.sensorsdata.cn/sdk/" + Ji.lib_version + "/vapph5define.min.js"
            })
          }
        } else {
          t()
        }
      } else {
        t()
      }
    }
  }
  function hn(t) {
    if (Ji.para.is_track_single_page) {
      xo.on("switch", function (r) {
        var i = function (n) {
          n = n || {}
          if (r !== location.href) {
            Eo.pageProp.referrer = X(r)
            var i = E({
              $url: X(),
              $referrer: X(r)
            }, n)
            if (e(t)) {
              t(i)
            } else {
              if (Ji.quick) {
                Ji.quick("autoTrack", i)
              }
            }
          }
        }
        if ("boolean" == typeof Ji.para.is_track_single_page) {
          i()
        } else if ("function" == typeof Ji.para.is_track_single_page) {
          var o = Ji.para.is_track_single_page()
          if (n(o)) {
            i(o)
          } else {
            if (true === o) {
              i()
            }
          }
        }
      })
    }
  }
  function gn() {
    if (Ji._q && _(Ji._q) && Ji._q.length > 0) {
      O(Ji._q, function (e) {
        Ji[e[0]].apply(Ji, Array.prototype.slice.call(e[1]))
      })
    }
    if (n(Ji.para.heatmap)) {
      Jo.initHeatmap()
      Jo.initScrollmap()
    }
  }
  function mn() {
    Ji.readyState.setState(3)
    new Ji.SDKJSBridge("visualized").onAppNotify(function () {
      dn("undefined" != typeof sa_jssdk_app_define_mode)
    })
    dn(false)
    Ji.bridge.app_js_bridge_v1()
    Eo.initPage()
    hn()
    Lo.init()
    fn()
    yn()
    Ji.readyState.setState(4)
    gn()
  }
  function vn() {
    if (na.isWindowNameHasKeyword()) {
      na.windowNameHasKeywordHandle()
    } else {
      if (na.isSeachHasKeyword()) {
        na.hasKeywordHandle()
      } else {
        if (window.parent !== self && ra.isSearchHasKeyword()) {
          ra.verifyVtrackMode()
        } else {
          if (na.isStorageHasKeyword()) {
            na.storageHasKeywordHandle()
          } else {
            if (window.parent !== self && ra.isStorageHasKeyword()) {
              ra.verifyVtrackMode()
            } else {
              mn()
              ra.notifyUser()
            }
          }
        }
      }
    }
  }
  function yn() {
    qo.init()
    if ("success" === Ji.bridge.bridge_info.verify_success) {
      Fo.init()
    }
  }
  function _n() {
    O(ia, function (t) {
      var n = Ji[t]
      Ji[t] = function () {
        return Ji.readyState.state < 3 ? (_(Ji._q) || (Ji._q = []), Ce("calling sdk api before init is deprecated."), Ji._q.push([t, arguments]), false) : e(Ji.getDisabled) && Ji.getDisabled() ? undefined : Ji.readyState.getState() ? n.apply(Ji, arguments) : void Ie("请先初始化神策JS SDK")
      }
    })
  }
  function bn(e, t) {
    this.cancel = function () {
      e = true
    }
    this.getCanceled = function () {
      return e || false
    }
    this.stop = function () {
      t = true
    }
    this.getStopped = function () {
      return t || false
    }
  }
  function wn(e, t, n) {
    var r = null
    try {
      r = JSON.parse(JSON.stringify(e || null))
    } catch (i) {}
    this.getOriginalData = function () {
      return r
    }
    this.getPosition = function () {
      return t
    }
    this.cancellationToken = new bn()
    this.sensors = n
  }
  function Sn(e) {
    if (!n(e)) {
      throw "error: Stage constructor requires arguments."
    }
    this.processDef = e
    this.registeredInterceptors = {}
  }
  function kn(e) {
    if (e && e.buildDataStage) {
      aa.registerStageImplementation(e.buildDataStage)
    }
    if (e && e.businessStage) {
      ua.registerStageImplementation(e.businessStage)
    }
    if (e && e.sendDataStage) {
      sa.registerStageImplementation(e.sendDataStage)
    }
    if (e && e.viewStage) {
      ca.registerStageImplementation(e.viewStage)
    }
  }
  function On(e, t) {
    if (la[e]) {
      la[e](t)
    }
  }
  function En() {
    return fa.stage && fa.stage.process("getUtmData")
  }
  function Tn(e) {
    return pa.stage.process("send", e)
  }
  function xn(e) {
    e.kit = da
    e.saEvent = Go
    this.buildDataStage = Vo
    this.sendDataStage = pa
    this.businessStage = fa
  }
  function jn(e) {
    e.heatmap = Jo
    this.viewStage = Wo
  }
  function Pn(t) {
    if (e(t.properties)) {
      if (!t.isMatchedWithFilter || e(t.isMatchedWithFilter)) {
        var n = {
          finalAdjustData: {
            priority: 100,
            entry: function (n) {
              try {
                if (e(t.isMatchedWithFilter)) {
                  return t.isMatchedWithFilter(n) && t.properties(n)
                }
                t.properties(n)
              } catch (r) {
                Ie("execute registerPropertyPlugin callback error:" + r)
              }
            }
          }
        }
        On("buildDataStage", n)
      } else {
        Ie("registerPropertyPlugin arguments error, isMatchedWithFilter must be function")
      }
    } else {
      Ie("registerPropertyPlugin arguments error, properties must be function")
    }
  }
  function Cn(e) {
    if (e) {
      Ji.events = Ro
      Ji.bridge = ta
      Ji.SDKJSBridge = sn
      Ji.JSBridge = ln
      Ji.store = Lo
      Ji.unlimitedDiv = $o
      Ji.customProp = zo
      Ji.vtrackcollect = qo
      Ji.vapph5collect = Fo
      Ji.detectMode = vn
      Ji.registerFeature = kn
      Ji.registerInterceptor = On
      Ji.commonWays = Yo
      kn(new xn(Ji))
      kn(new jn(Ji))
      On("viewStage", ha)
    }
    var t = e ? Zo : oa
    for (var n in t) Ji[n] = t[n]
    Ji.logger = fo
    Ji.log = Pe
    Ji._ = ea
    Ji.on = rt
    Ji.ee = To
    Ji.use = Ct
    Ji.lib_version = _1$27$4
    Ji.registerPropertyPlugin = Pn
  }
  function In(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Nn(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Nn(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function An(e, t, n) {
    In(e, t, n)
    e.plugin_version = _1$27$41
    return e
  }
  function Rn(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Ln(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Ln(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Dn(e, t, n) {
    Rn(e, t, n)
    e.plugin_version = _1$27$42
    return e
  }
  function Mn(e) {
    return za && za.call(window$SensorsData_App_Visual_Bridge, JSON.stringify(e))
  }
  function Un(e) {
    return $a.call(window$SensorsData_App_Visual_Bridge) && qa && qa.call(window$SensorsData_App_Visual_Bridge, JSON.stringify(e))
  }
  function Bn(e, t) {
    return t && "function" == typeof t[e.callType] && t[e.callType]()
  }
  function Hn(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Fn(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Fn(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function $n(e, t, n) {
    Hn(e, t, n)
    e.plugin_version = _1$27$43
    return e
  }
  function zn() {
    window$SensorsData_APP_New_H5_Bridge = window.SensorsData_APP_New_H5_Bridge
    ya = window$SensorsData_APP_New_H5_Bridge && window$SensorsData_APP_New_H5_Bridge.sensorsdata_track
    _a = ya && window$SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window$SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url()
    Sa("---test---fail---", !ba, ba.bridge.activeBridge, !_a)
    if (ba && !ba.bridge.activeBridge && _a) {
      ba.bridge.activeBridge = Wa
      if (ba.para.app_js_bridge && !ba.para.app_js_bridge.is_mui) {
        ba.bridge.is_verify_success = _a && ba.bridge.validateAppUrl(_a)
        Sa("---test---bridge-verify-", ba.bridge.is_verify_success)
      }
      ba.bridge.bridge_info = {
        touch_app_bridge: true,
        platform: "android",
        verify_success: ba.bridge.is_verify_success ? "success" : "fail",
        support_two_way_call: !!window$SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app
      }
      return ba.para.app_js_bridge ? void ba.registerInterceptor("sendDataStage", {
        send: {
          priority: 60,
          entry: qn
        }
      }) : void Sa("---test---app_js_bridge is not configured, data will not be sent by android bridge.")
    }
  }
  function qn(e, t) {
    Sa("---test---datasend-", ba.bridge.is_verify_success)
    if (ba.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) {
      return e
    }
    var /* [auto-meaningful-name] */e$callback = e.callback
    return ba.bridge.is_verify_success ? (Sa("---test---bridge-verify-success---", e.data), ya && ya.call(window$SensorsData_APP_New_H5_Bridge, JSON.stringify(wa.extend({
      server_url: ba.para.server_url
    }, e.data))), wa.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e) : (Sa("---test---bridge-verify-fail-----", ba.bridge.is_verify_success), ba.para.app_js_bridge.is_send ? (ba.debug.apph5({
      data: e.data,
      step: "4.2",
      output: "all"
    }), e) : (wa.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e))
  }
  function Vn(e) {
    var /* [auto-meaningful-name] */e$callType = e.callType
    return e$callType in Va.commands ? Va.commands[e$callType](e, window$SensorsData_APP_New_H5_Bridge) : void (window$SensorsData_APP_New_H5_Bridge && wa.isFunction(window$SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) && window$SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(e)))
  }
  function Gn(e) {
    return Xa && Xa.call(window$SensorsData_App_Visual_Bridge1, JSON.stringify(e))
  }
  function Wn(e) {
    return Ya.call(window$SensorsData_App_Visual_Bridge1) && Qa && Qa.call(window$SensorsData_App_Visual_Bridge1, JSON.stringify(e))
  }
  function Kn(e, t) {
    return t && "function" == typeof t[e.callType] && t[e.callType]()
  }
  function Jn(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Yn(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Yn(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Xn(e, t, n) {
    Jn(e, t, n)
    e.plugin_version = _1$27$44
    return e
  }
  function Qn() {
    Pa("ObsoleteBridge---test---init---")
    window$SensorsData_APP_JS_Bridge = window.SensorsData_APP_JS_Bridge
    Oa = window$SensorsData_APP_JS_Bridge && window$SensorsData_APP_JS_Bridge.sensorsdata_track
    Ea = window$SensorsData_APP_JS_Bridge && window$SensorsData_APP_JS_Bridge.sensorsdata_verify
    Ta = window$SensorsData_APP_JS_Bridge && window$SensorsData_APP_JS_Bridge.sensorsdata_visual_verify
    Pa("ObsoleteBridge-", xa.bridge.activeBridge, Ea, Oa, Ta)
    if (xa && !xa.bridge.activeBridge && (Ea || Oa || Ta)) {
      xa.bridge.activeBridge = ts
      var e = Ea || Oa
      if (Ta) {
        e = !!Ta.call(window$SensorsData_APP_JS_Bridge, JSON.stringify({
          server_url: xa.para.server_url
        }))
        Pa("ObsoleteBridge---called-return", e)
      }
      xa.bridge.bridge_info = {
        touch_app_bridge: true,
        platform: "android",
        verify_success: e ? "success" : "fail"
      }
      if (!xa.para.app_js_bridge) {
        return void Pa("app_js_bridge is not configured, data will not be sent by android obsolete bridge.")
      }
      xa.registerInterceptor("sendDataStage", {
        send: {
          priority: 80,
          entry: Zn
        }
      })
      Pa("Android obsolete bridge inits succeed.")
    }
  }
  function Zn(e, t) {
    Pa("ObsoleteBridge---senddata")
    if (xa.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) {
      return e
    }
    var /* [auto-meaningful-name] */e$callback = e.callback
    if (Ea) {
      var r = Ea && Ea.call(window$SensorsData_APP_JS_Bridge, JSON.stringify(ja.extend({
        server_url: xa.para.server_url
      }, e.data)))
      Pa("ObsoleteBridge---anVerify-success", r)
      return r ? (ja.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e) : xa.para.app_js_bridge.is_send ? (xa.debug.apph5({
        data: e.data,
        step: "3.1",
        output: "all"
      }), e) : (ja.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e)
    }
    Pa("ObsoleteBridge---is-send-old-way", xa.para.app_js_bridge.is_send)
    if (Oa) {
      Oa.call(window$SensorsData_APP_JS_Bridge, JSON.stringify(ja.extend({
        server_url: xa.para.server_url
      }, e.data)))
    }
    if (ja.isFunction(e$callback)) {
      e$callback()
    }
    t.cancellationToken.cancel()
    return e
  }
  function er(e) {
    Pa("ObsoleteBridge---handleCommadn")
    var /* [auto-meaningful-name] */e$callType = e.callType
    return e$callType in Za.commands ? (Pa("ObsoleteBridge---", e$callType, Za.commands), Za.commands[e$callType](e, window$SensorsData_APP_JS_Bridge)) : window$SensorsData_APP_JS_Bridge && ja.isFunction(window$SensorsData_APP_JS_Bridge.sensorsdata_js_call_app) ? (Pa("ObsoleteBridge---handleCommadn-abridge"), window$SensorsData_APP_JS_Bridge.sensorsdata_js_call_app(JSON.stringify(e))) : undefined
  }
  function tr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        nr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function nr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function rr(e, t, n) {
    tr(e, t, n)
    e.plugin_version = _1$27$45
    return e
  }
  function ir(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        or(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function or(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function ar(e, t, n) {
    ir(e, t, n)
    e.plugin_version = _1$27$46
    return e
  }
  function sr() {
    return "undefined" != typeof ss$hidden && document[ss$hidden]
  }
  function ur(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        cr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function cr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function lr(e, t, n) {
    ur(e, t, n)
    e.plugin_version = _1$27$47
    return e
  }
  function fr() {
    us = window.SensorsData_iOS_JS_Bridge && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url
    cs = function () {
      return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker
    }
    if (ls && !ls.bridge.activeBridge && cs() && cs().postMessage) {
      ls.bridge.activeBridge = js
      if (ls.para.app_js_bridge && !ls.para.app_js_bridge.is_mui) {
        ls.bridge.is_verify_success = us && ls.bridge.validateAppUrl(us)
      }
      ls.bridge.bridge_info = {
        touch_app_bridge: true,
        platform: "ios",
        verify_success: ls.bridge.is_verify_success ? "success" : "fail",
        support_two_way_call: true
      }
      if (!ls.para.app_js_bridge) {
        return void ps("app_js_bridge is not configured, data will not be sent by iOS bridge.")
      }
      ls.registerInterceptor("sendDataStage", {
        send: {
          priority: 70,
          entry: pr
        }
      })
      ps("IOS bridge inits succeed.")
    }
  }
  function pr(e, t) {
    if (ls.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) {
      return e
    }
    var /* [auto-meaningful-name] */e$callback = e.callback
    return ls.bridge.is_verify_success ? (cs() && cs().postMessage(JSON.stringify({
      callType: "app_h5_track",
      data: fs.extend({
        server_url: ls.para.server_url
      }, e.data)
    })), fs.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e) : ls.para.app_js_bridge.is_send ? (ls.debug.apph5({
      data: e.data,
      step: "4.1",
      output: "all"
    }), e) : (fs.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e)
  }
  function dr(e) {
    var /* [auto-meaningful-name] */e$callType = e.callType
    return "page_info" !== e$callType && "visualized_track" !== e$callType || ls.bridge.hasVisualModeBridge() ? "sensorsdata_get_app_visual_config" === e$callType ? fs.isObject(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge[e$callType] : cs() && cs().postMessage(JSON.stringify(e)) : null
  }
  function hr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        gr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function gr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function mr(e, t, n) {
    hr(e, t, n)
    e.plugin_version = _1$27$48
    return e
  }
  function vr() {
    if (ds && !ds.bridge.activeBridge && yr()) {
      ds.bridge.activeBridge = Is
      ds.bridge.bridge_info = {
        touch_app_bridge: true,
        platform: "ios",
        verify_success: _r() ? "success" : "fail"
      }
      if (!ds.para.app_js_bridge) {
        return void gs("app_js_bridge is not configured, data will not be sent by iOS obsolete bridge.")
      }
      ds.registerInterceptor("sendDataStage", {
        send: {
          priority: 90,
          entry: br
        }
      })
      gs("IOS obsolete bridge inits succeed.")
    }
  }
  function yr() {
    return (/sensors-verify/.test(navigator.userAgent) || /sa-sdk-ios/.test(navigator.userAgent)) && !window.MSStream
  }
  function _r() {
    if (/sensors-verify/.test(navigator.userAgent)) {
      var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/)
      if (e && e[0] && "string" == typeof e[1] && 2 === e[1].split("?").length) {
        e = e[1].split("?")
        var t = null
        var n = null
        try {
          t = hs.URL(ds.para.server_url).hostname
          n = hs.URL(ds.para.server_url).searchParams.get("project") || "default"
        } catch (r) {
          ds.log(r)
        }
        return !(!t || t !== e[0] || !n || n !== e[1])
      }
      return false
    }
    return !!/sa-sdk-ios/.test(navigator.userAgent)
  }
  function br(e, t) {
    function n(e) {
      var t = JSON.stringify(hs.extend({
        server_url: ds.para.server_url
      }, e))
      t = t.replace(/\r\n/g, "")
      return "sensorsanalytics://trackEvent?event=" + (t = encodeURIComponent(t))
    }
    if (ds.para.app_js_bridge.is_mui || "item_set" === e.data.type || "item_delete" === e.data.type) {
      return e
    }
    var /* [auto-meaningful-name] */e$callback = e.callback
    if (ds.bridge.bridge_info.verify_success) {
      var i = document.createElement("iframe")
      var o = n(e.data)
      i.setAttribute("src", o)
      document.documentElement.appendChild(i)
      i.parentNode.removeChild(i)
      i = null
      if (hs.isFunction(e$callback)) {
        e$callback()
      }
      t.cancellationToken.cancel()
      return true
    }
    return ds.para.app_js_bridge.is_send ? (ds.debug.apph5({
      data: e.data,
      step: "3.2",
      output: "all"
    }), e) : (hs.isFunction(e$callback) && e$callback(), t.cancellationToken.cancel(), e)
  }
  function wr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Sr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Sr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function kr(e, t, n) {
    wr(e, t, n)
    e.plugin_version = _1$27$49
    return e
  }
  function Or() {
    this.sd = null
    this.start_time = +new Date()
    this.page_show_status = true
    this.page_hidden_status = false
    this._ = {}
    this.timer = null
    this.current_page_url = document.referrer
    this.url = location.href
    this.title = document.title || ""
    this.option = {}
    this.heartbeat_interval_time = 5e3
    this.heartbeat_interval_timer = null
    this.page_id = null
    this.storage_name = "sawebjssdkpageleave"
    this.max_duration = Ls
  }
  function Er(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Tr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Tr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function xr(e, t, n) {
    Er(e, t, n)
    e.plugin_version = _1$27$410
    return e
  }
  function jr(e, t) {
    if ("track" !== e.type) {
      return e
    }
    var n = t.sd
    var r = n._
    var /* [auto-meaningful-name] */n$saEvent$check = n.saEvent.check
    var o = r.extend2Lev({
      properties: {}
    }, e)
    var /* [auto-meaningful-name] */t$customRegister = t.customRegister
    var /* [auto-meaningful-name] */o$properties = o.properties
    var /* [auto-meaningful-name] */o$event = o.event
    var c = {}
    r.each(t$customRegister, function (e) {
      if (r.isObject(e)) {
        if (r.indexOf(e.events, o$event) > -1 && n$saEvent$check({
          properties: e.properties
        })) {
          c = r.extend(c, e.properties)
        }
      } else if (r.isFunction(e)) {
        var t = e({
          event: o$event,
          properties: o$properties,
          data: o
        })
        if (r.isObject(t) && !r.isEmptyObject(t) && n$saEvent$check({
          properties: t
        })) {
          c = r.extend(c, t)
        }
      }
    })
    e.properties = r.extend(o$properties, c)
    return e
  }
  function Pr() {
    this.sd = null
    this.log = window.console && window.console.log || function () {}
    this.customRegister = []
  }
  function Cr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Ir(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Ir(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Nr(e, t, n) {
    Cr(e, t, n)
    e.plugin_version = _1$27$411
    return e
  }
  function Ar(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Rr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Rr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Lr(e, t, n) {
    Ar(e, t, n)
    e.plugin_version = _1$27$412
    return e
  }
  function Dr(e) {
    try {
      if ("$pageview" !== e.event && (!e.type || "profile" !== e.type.slice(0, 7))) {
        var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
        var n = document.documentElement.scrollHeight || 0
        var r = {
          $page_height: Math.max(t, n) || 0
        }
        e.properties = $s._.extend(e.properties || {}, r)
      }
    } catch (i) {
      ou("页面高度获取异常。")
    }
    return $s$kit$buildData.call($s.kit, e)
  }
  function Mr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Ur(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Ur(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Br(e, t, n) {
    Mr(e, t, n)
    e.plugin_version = _1$27$413
    return e
  }
  function Hr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Fr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Fr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function $r(e, t, n) {
    Hr(e, t, n)
    e.plugin_version = _1$27$414
    return e
  }
  function zr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        qr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function qr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Vr(e, t, n) {
    zr(e, t, n)
    e.plugin_version = _1$27$415
    return e
  }
  function Gr() {
    mu = true
  }
  function Wr() {
    mu = false
  }
  function Kr() {
    return mu
  }
  function Jr(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Yr(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Yr(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Xr(e, t, n) {
    Jr(e, t, n)
    e.plugin_version = _1$27$416
    return e
  }
  function Qr(e) {
    var t = e
    var n = ""
    n = -1 !== Vs.para.debug_mode_url.indexOf("?") ? Vs.para.debug_mode_url + "&" + Vs.kit.encodeTrackData(e) : Vs.para.debug_mode_url + "?" + Vs.kit.encodeTrackData(e)
    VsE$_.ajax({
      url: n,
      type: "GET",
      cors: true,
      header: {
        "Dry-Run": String(Vs.para.debug_mode_upload)
      },
      success: function (e) {
        if (true === VsE$_.isEmptyObject(e)) {
          alert("debug数据发送成功" + t)
        } else {
          alert("debug失败 错误原因" + JSON.stringify(e))
        }
      }
    })
  }
  function Zr(e, t) {
    if (true === Vs.para.debug_mode) {
      var /* [auto-meaningful-name] */e$data = e.data
      e.callback
      Qr(JSON.stringify(e$data))
      t.cancellationToken.stop()
    }
    return e
  }
  function ei() {
    if (true === Vs.para.debug_mode) {
      Vs.para.debug_mode_upload = Vs.para.debug_mode_upload || false
      if (!VsE$_.isString(Vs.para.debug_mode_url)) {
        if (VsE$_.isString(Vs.para.server_url)) {
          Vs.para.debug_mode_url = Vs.para.server_url.replace("sa.gif", "debug")
        } else {
          if (VsE$_.isArray(Vs.para.server_url) && VsE$_.isString(Vs.para.server_url[0])) {
            Vs.para.debug_mode_url = Vs.para.server_url[0].replace("sa.gif", "debug")
          } else {
            Vs.para.debug_mode = false
          }
        }
      }
    }
  }
  function ti() {
    Vs.on("sdkInitPara", function () {
      ei()
    })
    Vs.on("sdkAfterInitPara", function () {
      Vs.registerInterceptor("sendDataStage", {
        send: {
          priority: 30,
          entry: Zr
        }
      })
    })
  }
  function ni(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        ri(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function ri(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function ii(e, t, n) {
    ni(e, t, n)
    e.plugin_version = _1$27$417
    return e
  }
  function oi(e, t) {
    if (WsE$_.isObject(Ws.para.jsapp) && !Ws.para.jsapp.isOnline && "function" == typeof Ws.para.jsapp.setData) {
      var n = e
      delete n.callback
      n = JSON.stringify(n)
      Ws.para.jsapp.setData(n)
      t.cancellationToken.stop()
    }
    return e
  }
  function ai() {
    Ws.on("sdkAfterInitAPI", function () {
      if (WsE$_.isObject(Ws.commonWays)) {
        Ws.commonWays.setOnlineState = si
      }
      Ws.registerInterceptor("sendDataStage", {
        send: {
          priority: 40,
          entry: oi
        }
      })
    })
  }
  function si(e) {
    if (true === e && WsE$_.isObject(Ws.para.jsapp) && "function" == typeof Ws.para.jsapp.getData) {
      Ws.para.jsapp.isOnline = true
      var t = Ws.para.jsapp.getData()
      if (WsE$_.isArray(t) && t.length > 0) {
        WsE$_.each(t, function (e) {
          if (WsE$_.isJSONString(e)) {
            Ws.kit.sendData(JSON.parse(e))
          }
        })
      }
    } else {
      Ws.para.jsapp.isOnline = false
    }
  }
  function ui(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        ci(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function ci(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function li(e, t, n) {
    ui(e, t, n)
    e.plugin_version = _1$27$418
    return e
  }
  function fi(e, t) {
    if (!Js.para.app_js_bridge && Js.para.batch_send && JsE$_.localStorage.isSupport() && localStorage.length < Js.para.batch_send.storage_length) {
      xu.add(e.data)
      t.cancellationToken.stop()
    }
    return e
  }
  function pi() {
    var e = {
      datasend_timeout: 6e3,
      send_interval: 6e3,
      storage_length: 200
    }
    if (JsE$_.localStorage.isSupport() && JsE$_.isSupportCors() && "object" == typeof localStorage) {
      if (true === Js.para.batch_send) {
        Js.para.batch_send = JsE$_.extend({}, e)
      } else {
        if ("object" == typeof Js.para.batch_send) {
          Js.para.batch_send = JsE$_.extend({}, e, Js.para.batch_send)
        }
      }
    } else {
      Js.para.batch_send = false
    }
  }
  function di() {
    Js.on("sdkInitPara", function () {
      pi()
    })
    Js.on("sdkAfterInitPara", function () {
      if (!Js.para.app_js_bridge && Js.para.batch_send && JsE$_.localStorage.isSupport()) {
        if (!xu) {
          xu = new JsE$_.BatchSend()
        }
        xu.batchInterval()
        Js.registerInterceptor("sendDataStage", {
          send: {
            priority: 100,
            entry: fi
          }
        })
      }
    })
  }
  function hi(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        gi(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function gi(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function mi(e, t, n) {
    hi(e, t, n)
    e.plugin_version = _1$27$419
    return e
  }
  function vi(e) {
    new XsE$_.BeaconSend(e).start()
  }
  function yi(e, t) {
    var n = null
    var r = null
    if (XsE$_.isObject(e.config)) {
      n = e.config.send_type
      r = XsE$_.optimizeServerUrl(e.config.server_url)
    }
    if (("beacon" === n || !n && "beacon" === Xs.para.send_type) && XsE$_.isSupportBeaconSend()) {
      var i = r || e.server_url
      e.server_url = i
      e.data = Xs.kit.encodeTrackData(e.data)
      if (XsE$_.isArray(i) && i.length) {
        XsE$_.each(i, function (t) {
          e.callback = null
          e.server_url = t
          vi(e)
        })
      } else {
        if ("string" == typeof i && "" !== i) {
          vi(e)
        } else {
          Xs.log("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！")
        }
      }
      t.cancellationToken.stop()
    }
    return e
  }
  function _i() {
    if (!("beacon" !== Xs.para.send_type || XsE$_.isSupportBeaconSend())) {
      Xs.para.send_type = Xs.DEFAULT_SEND_TYPE
    }
  }
  function bi() {
    Xs.on("sdkInitPara", function () {
      _i()
    })
    Xs.on("sdkAfterInitPara", function () {
      Xs.registerInterceptor("sendDataStage", {
        send: {
          priority: 110,
          entry: yi
        }
      })
    })
  }
  function wi(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Si(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Si(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function ki(e, t, n) {
    wi(e, t, n)
    e.plugin_version = _1$27$420
    return e
  }
  function Oi(e) {
    new ZsE$_.AjaxSend(e).start()
  }
  function Ei(e, t) {
    var n = null
    var r = null
    if (ZsE$_.isObject(e.config)) {
      n = e.config.send_type
      r = ZsE$_.optimizeServerUrl(e.config.server_url)
    }
    if (("ajax" === n || !n && "ajax" === Zs.para.send_type) && ZsE$_.isSupportCors()) {
      var i = r || e.server_url
      e.server_url = i
      e.data = Zs.kit.encodeTrackData(e.data)
      if (ZsE$_.isArray(i) && i.length) {
        ZsE$_.each(i, function (t) {
          e.callback = null
          e.server_url = t
          Oi(e)
        })
      } else {
        if ("string" == typeof i && "" !== i) {
          Oi(e)
        } else {
          Zs.log("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！")
        }
      }
      t.cancellationToken.stop()
    }
    return e
  }
  function Ti() {
    if (!("ajax" !== Zs.para.send_type || ZsE$_.isSupportCors())) {
      Zs.para.send_type = Zs.DEFAULT_SEND_TYPE
    }
  }
  function xi() {
    Zs.on("sdkInitPara", function () {
      Ti()
    })
    Zs.on("sdkAfterInitPara", function () {
      Zs.registerInterceptor("sendDataStage", {
        send: {
          priority: 120,
          entry: Ei
        }
      })
    })
  }
  function ji(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Pi(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Pi(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Ci(e, t, n) {
    ji(e, t, n)
    e.plugin_version = _1$27$421
    return e
  }
  function Ii(e, t) {
    var n = tu.kit.encodeTrackData(t)
    return -1 !== e.indexOf("?") ? e + "&" + n : e + "?" + n
  }
  function Ni(e) {
    new TuE$_.ImageSend(e).start()
  }
  function Ai(e, t) {
    var n = null
    if (TuE$_.isObject(e.config)) {
      n = TuE$_.optimizeServerUrl(e.config.server_url)
    }
    var r = n || e.server_url
    var /* [auto-meaningful-name] */e$data = e.data
    e.server_url = r
    if (TuE$_.isArray(r) && r.length) {
      TuE$_.each(r, function (t) {
        if (t) {
          e.data = Ii(t, e$data)
          e.callback = null
          e.server_url = t
          Ni(e)
        }
      })
    } else {
      if ("string" == typeof r && "" !== r) {
        e.data = Ii(r, e$data)
        Ni(e)
      } else {
        if (tu.logger) {
          tu.logger.msg("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！").level("warn").log()
        }
      }
    }
    t.cancellationToken.stop()
  }
  function Ri() {
    if ("image" !== tu.para.send_type && "ajax" !== tu.para.send_type && "beacon" !== tu.para.send_type) {
      tu.para.send_type = "image"
    }
  }
  function Li() {
    tu.on("sdkInitPara", function () {
      Ri()
    })
    tu.on("sdkAfterInitPara", function () {
      tu.registerInterceptor("sendDataStage", {
        send: {
          priority: 130,
          entry: Ai
        }
      })
    })
  }
  function Di(e, t, n) {
    if (t) {
      e.plugin_name = t
    }
    if (n && e.init) {
      var /* [auto-meaningful-name] */e$init = e.init
      e.init = function (i, o) {
        function a() {
          e$init.call(e, i, o)
        }
        Mi(i, e, t)
        return i.readyState && i.readyState.state >= 3 || !i.on ? a() : void i.on(n, a)
      }
    }
    return e
  }
  function Mi(e, t, n) {
    function r(t, r) {
      if (e.logger) {
        e.logger.msg.apply(e.logger, r).module(n + "" || "").level(t).log()
      } else {
        if (e.log) {
          e.log.apply(e, r)
        }
      }
    }
    t.log = function () {
      r("log", arguments)
    }
    t.warn = function () {
      r("warn", arguments)
    }
    t.error = function () {
      r("error", arguments)
    }
  }
  function Ui(e, t, n) {
    Di(e, t, n)
    e.plugin_version = _1$27$4
    return e
  }
  function Bi(e) {
    return null === Fu ? void Hi(e) : void Fu.push(e)
  }
  function Hi(e) {
    try {
      if ("log" === e.level && Fi()) {
        return void qi(e)
      }
      if ("warn" === e.level && $i()) {
        return void qi(e)
      }
      if ("error" === e.level && zi()) {
        return void qi(e)
      }
    } catch (t) {}
  }
  function Fi() {
    return !!Ki() || true === Bu.para.show_log || Hu.isObject(Bu.para.show_log) && "log" === Bu.para.show_log.level
  }
  function $i() {
    return !!Ki() || Fi() || Hu.isObject(Bu.para.show_log) && "warn" === Bu.para.show_log.level
  }
  function zi() {
    return !!Ki() || !Hu.isObject(Bu.para.show_log) || "none" !== Bu.para.show_log.level
  }
  function qi(e) {
    var /* [auto-meaningful-name] */e$content = e.content
    var n = Hu.isObject(e$content[0]) ? Hu.formatJsonString(e$content[0]) : e$content[0]
    var r = Vi(e)
    e$content[0] = r + (r.length > 0 ? ": " : "") + n
    try {
      if (console) {
        if (Hu.isFunction(console[e.level])) {
          console[e.level].apply(console, e$content)
        } else {
          if (Hu.isObject(console[e.level])) {
            console[e.level](e$content[0])
          }
        }
      }
    } catch (i) {}
  }
  function Vi(e) {
    var t = ""
    var n = ""
    var /* [auto-meaningful-name] */Bu$para$show_log = Bu.para.show_log
    if (!(Hu.isObject(Bu$para$show_log) && false === Bu$para$show_log.show_brand)) {
      t += e.brand
    }
    if (!(Hu.isObject(Bu$para$show_log) && false === Bu$para$show_log.show_level)) {
      t += (t.length > 0 ? "-" : "") + e.level
    }
    if (t.length > 0) {
      t = "[" + t + "]"
    }
    if (!(Hu.isObject(Bu$para$show_log) && false === Bu$para$show_log.show_module)) {
      n = e.module
    }
    return t + n
  }
  function Gi() {
    if (Hu.sessionStorage.isSupport()) {
      sessionStorage.setItem(Sensorsdata_jssdk_debug, "true")
    }
  }
  function Wi() {
    if (Hu.sessionStorage.isSupport()) {
      sessionStorage.removeItem(Sensorsdata_jssdk_debug)
    }
  }
  function Ki() {
    return Hu.sessionStorage.isSupport() && "true" === sessionStorage.getItem(Sensorsdata_jssdk_debug)
  }
  var Ji = {
    DEFAULT_SEND_TYPE: "image"
  };
  (function () {
    function e(r, i) {
      function o(e, t) {
        try {
          e()
        } catch (n) {
          if (t) {
            t()
          }
        }
      }
      function a(e) {
        if (null != a[e]) {
          return a[e]
        }
        var t
        if ("bug-string-char-index" == e) {
          t = "a" != "a"[0]
        } else if ("json" == e) {
          t = a("json-stringify") && a("date-serialization") && a("json-parse")
        } else if ("date-serialization" == e) {
          if (t = a("json-stringify") && b) {
            var /* [auto-meaningful-name] */i$stringify = i.stringify
            o(function () {
              t = "\"-271821-04-20T00:00:00.000Z\"" == i$stringify(new f(-864e13)) && "\"+275760-09-13T00:00:00.000Z\"" == i$stringify(new f(864e13)) && "\"-000001-01-01T00:00:00.000Z\"" == i$stringify(new f(-621987552e5)) && "\"1969-12-31T23:59:59.999Z\"" == i$stringify(new f(-1))
            })
          }
        } else {
          var r
          var /* [auto-meaningful-name] */_A_1TrueFalseNull___u0000__b__n__f__r__t_ = "{\"a\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}"
          if ("json-stringify" == e) {
            var l = "function" == typeof (i$stringify = i.stringify)
            if (l) {
              (r = function () {
                return 1
              }).toJSON = r
              o(function () {
                l = "0" === i$stringify(0) && "0" === i$stringify(new u()) && "\"\"" == i$stringify(new c()) && i$stringify(l$prototype$toString) === m && i$stringify(m) === m && i$stringify() === m && "1" === i$stringify(r) && "[1]" == i$stringify([r]) && "[null]" == i$stringify([m]) && "null" == i$stringify(null) && "[null,null,null]" == i$stringify([m, l$prototype$toString, null]) && i$stringify({
                  a: [r, true, false, null, "\u0000\b\n\f\r\t"]
                }) == _A_1TrueFalseNull___u0000__b__n__f__r__t_ && "1" === i$stringify(null, r) && "[\n 1,\n 2\n]" == i$stringify([1, 2], null, 1)
              }, function () {
                l = false
              })
            }
            t = l
          }
          if ("json-parse" == e) {
            var p
            var /* [auto-meaningful-name] */i$parse = i.parse
            if ("function" == typeof i$parse) {
              o(function () {
                if (!(0 !== i$parse("0") || i$parse(false))) {
                  r = i$parse(_A_1TrueFalseNull___u0000__b__n__f__r__t_)
                  if (p = 5 == r.a.length && 1 === r.a[0]) {
                    o(function () {
                      p = !i$parse("\"\t\"")
                    })
                    if (p) {
                      o(function () {
                        p = 1 !== i$parse("01")
                      })
                    }
                    if (p) {
                      o(function () {
                        p = 1 !== i$parse("1.")
                      })
                    }
                  }
                }
              }, function () {
                p = false
              })
            }
            t = p
          }
        }
        return a[e] = !!t
      }
      function s(e) {
        return N(this)
      }
      if (!r) {
        r = n.Object()
      }
      if (!i) {
        i = n.Object()
      }
      var u = r.Number || n.Number
      var c = r.String || n.String
      var l = r.Object || n.Object
      var f = r.Date || n.Date
      var p = r.SyntaxError || n.SyntaxError
      var d = r.TypeError || n.TypeError
      var h = r.Math || n.Math
      var g = r.JSON || n.JSON
      if ("object" == typeof g && g) {
        i.stringify = g.stringify
        i.parse = g.parse
        i.runInContext = e
        return i
      }
      var m
      var /* [auto-meaningful-name] */l$prototype = l.prototype
      var /* [auto-meaningful-name] */l$prototype$toString = l$prototype.toString
      var /* [auto-meaningful-name] */l$prototype$hasOwnProperty = l$prototype.hasOwnProperty
      var b = new f(-0xc782b5b800cec)
      o(function () {
        b = -109252 == b.getUTCFullYear() && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
      })
      a["bug-string-char-index"] = a["date-serialization"] = a.json = a["json-stringify"] = a["json-parse"] = null
      if (!a("json")) {
        var /* [auto-meaningful-name] */ObjectFunction = "[object Function]"
        var /* [auto-meaningful-name] */ObjectDate = "[object Date]"
        var /* [auto-meaningful-name] */ObjectNumber = "[object Number]"
        var /* [auto-meaningful-name] */ObjectString = "[object String]"
        var /* [auto-meaningful-name] */ObjectArray = "[object Array]"
        var /* [auto-meaningful-name] */ObjectBoolean = "[object Boolean]"
        var x = a("bug-string-char-index")
        var j = function (e, n) {
          var r
          var i
          var o
          var a = 0
          for (o in (r = function () {
            this.valueOf = 0
          }).prototype.valueOf = 0, i = new r()) if (l$prototype$hasOwnProperty.call(i, o)) {
            a++
          }
          r = i = null
          if (a) {
            j = function (e, t) {
              var n
              var r
              var i = l$prototype$toString.call(e) == ObjectFunction
              for (n in e) if (!(i && "prototype" == n || !l$prototype$hasOwnProperty.call(e, n) || (r = "constructor" === n))) {
                t(n)
              }
              if (r || l$prototype$hasOwnProperty.call(e, n = "constructor")) {
                t(n)
              }
            }
          } else {
            i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"]
            j = function (e, n) {
              var r
              var o
              var a = l$prototype$toString.call(e) == ObjectFunction
              var s = !a && "function" != typeof e.constructor && t[typeof e.hasOwnProperty] && e.hasOwnProperty || l$prototype$hasOwnProperty
              for (r in e) if (!(a && "prototype" == r || !s.call(e, r))) {
                n(r)
              }
              for (o = i.length; r = i[--o];) {
                if (s.call(e, r)) {
                  n(r)
                }
              }
            }
          }
          return j(e, n)
        }
        if (!a("json-stringify") && !a("date-serialization")) {
          var P = {
            92: "\\\\",
            34: "\\\"",
            8: "\\b",
            12: "\\f",
            10: "\\n",
            13: "\\r",
            9: "\\t"
          }
          var /* [auto-meaningful-name] */_000000 = "000000"
          var I = function (e, t) {
            return (_000000 + (t || 0)).slice(-e)
          }
          var N = function (e) {
            var t
            var n
            var r
            var i
            var o
            var a
            var s
            var u
            var c
            if (b) {
              t = function (e) {
                n = e.getUTCFullYear()
                r = e.getUTCMonth()
                i = e.getUTCDate()
                a = e.getUTCHours()
                s = e.getUTCMinutes()
                u = e.getUTCSeconds()
                c = e.getUTCMilliseconds()
              }
            } else {
              var /* [auto-meaningful-name] */h$floor = h.floor
              var f = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
              var p = function (e, t) {
                return f[t] + 365 * (e - 1970) + h$floor((e - 1969 + (t = +(t > 1))) / 4) - h$floor((e - 1901 + t) / 100) + h$floor((e - 1601 + t) / 400)
              }
              t = function (e) {
                for (i = h$floor(e / 864e5), n = h$floor(i / 365.2425) + 1970 - 1; p(n + 1, 0) <= i; n++) {
                  ;
                }
                for (r = h$floor((i - p(n, 0)) / 30.42); p(n, r + 1) <= i; r++) {
                  ;
                }
                i = 1 + i - p(n, r)
                a = h$floor((o = (e % 864e5 + 864e5) % 864e5) / 36e5) % 24
                s = h$floor(o / 6e4) % 60
                u = h$floor(o / 1e3) % 60
                c = o % 1e3
              }
            }
            return (N = function (e) {
              if (e > -1 / 0 && e < 1 / 0) {
                t(e)
                e = (n <= 0 || n >= 1e4 ? (n < 0 ? "-" : "+") + I(6, n < 0 ? -n : n) : I(4, n)) + "-" + I(2, r + 1) + "-" + I(2, i) + "T" + I(2, a) + ":" + I(2, s) + ":" + I(2, u) + "." + I(3, c) + "Z"
                n = r = i = a = s = u = c = null
              } else {
                e = null
              }
              return e
            })(e)
          }
          if (a("json-stringify") && !a("date-serialization")) {
            var /* [auto-meaningful-name] */i$stringify = i.stringify
            i.stringify = function (e, t, n) {
              var /* [auto-meaningful-name] */f$prototype$toJSON = f.prototype.toJSON
              f.prototype.toJSON = s
              var i = i$stringify(e, t, n)
              f.prototype.toJSON = f$prototype$toJSON
              return i
            }
          } else {
            var /* [auto-meaningful-name] */__u00 = "\\u00"
            var L = function (e) {
              var t = e.charCodeAt(0)
              var n = P[t]
              return n || __u00 + I(2, t.toString(16))
            }
            var D = /[\x00-\x1f\x22\x5c]/g
            var M = function (e) {
              D.lastIndex = 0
              return "\"" + (D.test(e) ? e.replace(D, L) : e) + "\""
            }
            var U = function (e, t, n, r, i, a, s) {
              var u
              var c
              var l
              var p
              var h
              var g
              var v
              var _
              var b
              o(function () {
                u = t[e]
              })
              if ("object" == typeof u && u) {
                if (u.getUTCFullYear && l$prototype$toString.call(u) == ObjectDate && u.toJSON === f.prototype.toJSON) {
                  u = N(u)
                } else {
                  if ("function" == typeof u.toJSON) {
                    u = u.toJSON(e)
                  }
                }
              }
              if (n) {
                u = n.call(t, e, u)
              }
              if (u == m) {
                return u === m ? u : "null"
              }
              switch ("object" == (c = typeof u) && (l = l$prototype$toString.call(u)), l || c) {
                case "boolean":
                case ObjectBoolean:
                  return "" + u
                case "number":
                case ObjectNumber:
                  return u > -1 / 0 && u < 1 / 0 ? "" + u : "null"
                case "string":
                case ObjectString:
                  return M("" + u)
              }
              if ("object" == typeof u) {
                for (v = s.length; v--;) {
                  if (s[v] === u) {
                    throw d()
                  }
                }
                s.push(u)
                p = []
                _ = a
                a += i
                if (l == ObjectArray) {
                  for (g = 0, v = u.length; g < v; g++) {
                    h = U(g, u, n, r, i, a, s)
                    p.push(h === m ? "null" : h)
                  }
                  b = p.length ? i ? "[\n" + a + p.join(",\n" + a) + "\n" + _ + "]" : "[" + p.join(",") + "]" : "[]"
                } else {
                  j(r || u, function (e) {
                    var t = U(e, u, n, r, i, a, s)
                    if (t !== m) {
                      p.push(M(e) + ":" + (i ? " " : "") + t)
                    }
                  })
                  b = p.length ? i ? "{\n" + a + p.join(",\n" + a) + "\n" + _ + "}" : "{" + p.join(",") + "}" : "{}"
                }
                s.pop()
                return b
              }
            }
            i.stringify = function (e, n, r) {
              var i
              var o
              var a
              var s
              if (t[typeof n] && n) {
                if ((s = l$prototype$toString.call(n)) == ObjectFunction) {
                  o = n
                } else if (s == ObjectArray) {
                  a = {}
                  for (var u, c = 0, /* [auto-meaningful-name] */n$length = n.length; c < n$length;) {
                    u = n[c++]
                    if (!("[object String]" != (s = l$prototype$toString.call(u)) && "[object Number]" != s)) {
                      a[u] = 1
                    }
                  }
                }
              }
              if (r) {
                if ((s = l$prototype$toString.call(r)) == ObjectNumber) {
                  if ((r -= r % 1) > 0) {
                    for (r > 10 && (r = 10), i = ""; i.length < r;) {
                      i += " "
                    }
                  }
                } else if (s == ObjectString) {
                  i = r.length <= 10 ? r : r.slice(0, 10)
                }
              }
              return U("", ((u = {})[""] = e, u), o, a, i, "", [])
            }
          }
        }
        if (!a("json-parse")) {
          var B
          var H
          var /* [auto-meaningful-name] */c$fromCharCode = c.fromCharCode
          var $ = {
            92: "\\",
            34: "\"",
            47: "/",
            98: "\b",
            116: "\t",
            110: "\n",
            102: "\f",
            114: "\r"
          }
          var z = function () {
            B = H = null
            throw p()
          }
          var q = function () {
            for (var e, t, n, r, i, o = H, /* [auto-meaningful-name] */o$length = o.length; B < o$length;) {
              switch (i = o.charCodeAt(B)) {
                case 9:
                case 10:
                case 13:
                case 32:
                  B++
                  break
                case 123:
                case 125:
                case 91:
                case 93:
                case 58:
                case 44:
                  e = x ? o.charAt(B) : o[B]
                  B++
                  return e
                case 34:
                  for (e = "@", B++; B < o$length;) {
                    if ((i = o.charCodeAt(B)) < 32) {
                      z()
                    } else if (92 == i) {
                      switch (i = o.charCodeAt(++B)) {
                        case 92:
                        case 34:
                        case 47:
                        case 98:
                        case 116:
                        case 110:
                        case 102:
                        case 114:
                          e += $[i]
                          B++
                          break
                        case 117:
                          for (t = ++B, n = B + 4; B < n; B++) {
                            if (!((i = o.charCodeAt(B)) >= 48 && i <= 57 || i >= 97 && i <= 102 || i >= 65 && i <= 70)) {
                              z()
                            }
                          }
                          e += c$fromCharCode("0x" + o.slice(t, B))
                          break
                        default:
                          z()
                      }
                    } else {
                      if (34 == i) {
                        break
                      }
                      for (i = o.charCodeAt(B), t = B; i >= 32 && 92 != i && 34 != i;) {
                        i = o.charCodeAt(++B)
                      }
                      e += o.slice(t, B)
                    }
                  }
                  if (34 == o.charCodeAt(B)) {
                    B++
                    return e
                  }
                  z()
                default:
                  if (t = B, 45 == i && (r = true, i = o.charCodeAt(++B)), i >= 48 && i <= 57) {
                    for (48 == i && (i = o.charCodeAt(B + 1)) >= 48 && i <= 57 && z(), r = false; B < o$length && (i = o.charCodeAt(B)) >= 48 && i <= 57; B++) {
                      ;
                    }
                    if (46 == o.charCodeAt(B)) {
                      for (n = ++B; n < o$length && !((i = o.charCodeAt(n)) < 48 || i > 57); n++) {
                        ;
                      }
                      if (n == B) {
                        z()
                      }
                      B = n
                    }
                    if (101 == (i = o.charCodeAt(B)) || 69 == i) {
                      for (43 != (i = o.charCodeAt(++B)) && 45 != i || B++, n = B; n < o$length && !((i = o.charCodeAt(n)) < 48 || i > 57); n++) {
                        ;
                      }
                      if (n == B) {
                        z()
                      }
                      B = n
                    }
                    return +o.slice(t, B)
                  }
                  if (r) {
                    z()
                  }
                  var s = o.slice(B, B + 4)
                  if ("true" == s) {
                    B += 4
                    return true
                  }
                  if ("fals" == s && 101 == o.charCodeAt(B + 4)) {
                    B += 5
                    return false
                  }
                  if ("null" == s) {
                    B += 4
                    return null
                  }
                  z()
              }
            }
            return "$"
          }
          var V = function (e) {
            var t
            var n
            if ("$" == e) {
              z()
            }
            if ("string" == typeof e) {
              if ("@" == (x ? e.charAt(0) : e[0])) {
                return e.slice(1)
              }
              if ("[" == e) {
                for (t = []; "]" != (e = q());) {
                  if (n) {
                    if ("," == e) {
                      if ("]" == (e = q())) {
                        z()
                      }
                    } else {
                      z()
                    }
                  } else {
                    n = true
                  }
                  if ("," == e) {
                    z()
                  }
                  t.push(V(e))
                }
                return t
              }
              if ("{" == e) {
                for (t = {}; "}" != (e = q());) {
                  if (n) {
                    if ("," == e) {
                      if ("}" == (e = q())) {
                        z()
                      }
                    } else {
                      z()
                    }
                  } else {
                    n = true
                  }
                  if (!("," != e && "string" == typeof e && "@" == (x ? e.charAt(0) : e[0]) && ":" == q())) {
                    z()
                  }
                  t[e.slice(1)] = V(q())
                }
                return t
              }
              z()
            }
            return e
          }
          var G = function (e, t, n) {
            var r = W(e, t, n)
            if (r === m) {
              delete e[t]
            } else {
              e[t] = r
            }
          }
          var W = function (e, t, n) {
            var r
            var i = e[t]
            if ("object" == typeof i && i) {
              if (l$prototype$toString.call(i) == ObjectArray) {
                for (r = i.length; r--;) {
                  G(l$prototype$toString, j, i, r, n)
                }
              } else {
                j(i, function (e) {
                  G(i, e, n)
                })
              }
            }
            return n.call(e, t, i)
          }
          i.parse = function (e, t) {
            var n
            var r
            B = 0
            H = "" + e
            n = V(q())
            if ("$" != q()) {
              z()
            }
            B = H = null
            return t && l$prototype$toString.call(t) == ObjectFunction ? W(((r = {})[""] = n, r), "", t) : n
          }
        }
      }
      i.runInContext = e
      return i
    }
    var t = {
      function: true,
      object: true
    }
    var n = t[typeof window] && window || this
    var /* [auto-meaningful-name] */n$JSON = n.JSON
    var /* [auto-meaningful-name] */n$JSON3 = n.JSON3
    var o = false
    var a = e(n, n.JSON3 = {
      noConflict: function () {
        if (!o) {
          o = true
          n.JSON = n$JSON
          n.JSON3 = n$JSON3
          n$JSON = n$JSON3 = null
        }
        return a
      }
    })
    if (n.JSON) {
      n.JSON.parse = a.parse
      n.JSON.stringify = a.stringify
    } else {
      n.JSON = {
        parse: a.parse,
        stringify: a.stringify
      }
    }
  }).call(window);
  (function (e, t) {
    t(window)
  })(0, function (e) {
    if (e.atob) {
      try {
        e.atob(" ")
      } catch (t) {
        e.atob = function (e) {
          var t = function (t) {
            return e(String(t).replace(/[\t\n\f\r ]+/g, ""))
          }
          t.original = e
          return t
        }(e.atob)
      }
    } else {
      var /* [auto-meaningful-name] */ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      var r = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
      e.btoa = function (e) {
        for (var t, r, i, o, a = "", s = 0, u = (e = String(e)).length % 3; s < e.length;) {
          if ((r = e.charCodeAt(s++)) > 255 || (i = e.charCodeAt(s++)) > 255 || (o = e.charCodeAt(s++)) > 255) {
            return ""
          }
          t = r << 16 | i << 8 | o
          a += ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(t >> 18 & 63) + ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(t >> 12 & 63) + ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(t >> 6 & 63) + ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.charAt(63 & t)
        }
        return u ? a.slice(0, u - 3) + "===".substring(u) : a
      }
      e.atob = function (e) {
        e = String(e).replace(/[\t\n\f\r ]+/g, "")
        if (!r.test(e)) {
          return ""
        }
        e += "==".slice(2 - (3 & e.length))
        for (var t, i, o, a = "", s = 0; s < e.length;) {
          t = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(s++)) << 18 | ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(s++)) << 12 | (i = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(s++))) << 6 | (o = ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.indexOf(e.charAt(s++)))
          a += 64 === i ? String.fromCharCode(t >> 16 & 255) : 64 === o ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t)
        }
        return a
      }
    }
  })
  var Yi
  var Xi = {
    setup: function (e) {
      Yi = e
    },
    log: function () {
      (Yi || console && console.log || function () {}).apply(null, arguments)
    }
  }
  var Qi = {
    get: function (e) {
      return window.localStorage.getItem(e)
    },
    parse: function (e) {
      var t
      try {
        t = JSON.parse(Qi.get(e)) || null
      } catch (n) {
        Xi.log(n)
      }
      return t
    },
    set: function (e, t) {
      try {
        window.localStorage.setItem(e, t)
      } catch (n) {
        Xi.log(n)
      }
    },
    remove: function (e) {
      window.localStorage.removeItem(e)
    },
    isSupport: function () {
      var e = true
      try {
        var /* [auto-meaningful-name] */__local_store_support__ = "__local_store_support__"
        var /* [auto-meaningful-name] */TestIsSupportStorage = "testIsSupportStorage"
        Qi.set(__local_store_support__, TestIsSupportStorage)
        if (Qi.get(__local_store_support__) !== TestIsSupportStorage) {
          e = false
        }
        Qi.remove(__local_store_support__)
      } catch (r) {
        e = false
      }
      return e
    }
  }
  var Zi = function () {
    function e() {
      return (t = (9301 * t + 49297) % 233280) / 233280
    }
    var t = new Date().getTime()
    return function (t) {
      return Math.ceil(e() * t)
    }
  }()
  a.prototype.get = function (e, n, o, a) {
    if (!e) {
      throw new Error("key is must")
    }
    n = n || 1e4
    o = o || 1e3
    a = a || function () {}
    var s = this.lockGetPrefix + e
    var u = Qi.get(s)
    var c = String(r())
    return u && (u = i(u) || {
      randomNum: 0,
      expireTime: 0
    }).expireTime > t() ? a(null) : (Qi.set(s, JSON.stringify({
        randomNum: c,
        expireTime: t() + n
      })), void setTimeout(function () {
        if ((u = i(Qi.get(s)) || {
          randomNum: 0,
          expireTime: 0
        }) && u.randomNum === c) {
          a(Qi.get(e))
          Qi.remove(e)
          Qi.remove(s)
        } else {
          a(null)
        }
      }, o))
  }
  a.prototype.set = function (e, n, o, a, s) {
    if (!e || !n) {
      throw new Error("key and val is must")
    }
    o = o || 1e4
    a = a || 1e3
    s = s || function () {}
    var u = this.lockSetPrefix + e
    var c = Qi.get(u)
    var l = String(r())
    return c && (c = i(c) || {
      randomNum: 0,
      expireTime: 0
    }).expireTime > t() ? s({
        status: "fail",
        reason: "This key is locked"
      }) : (Qi.set(u, JSON.stringify({
        randomNum: l,
        expireTime: t() + o
      })), void setTimeout(function () {
        if ((c = i(Qi.get(u)) || {
          randomNum: 0,
          expireTime: 0
        }).randomNum === l) {
          if (Qi.set(e, n)) {
            s({
              status: "success"
            })
          }
        } else {
          s({
            status: "fail",
            reason: "This key is locked"
          })
        }
      }, a))
  }
  u.prototype.on = function (e, t) {
    if (!e || !t) {
      return false
    }
    if (!s(t)) {
      throw new Error("listener must be a function")
    }
    this._events[e] = this._events[e] || []
    var n = "object" == typeof t
    this._events[e].push(n ? t : {
      listener: t,
      once: false
    })
    return this
  }
  u.prototype.prepend = function (e, t) {
    if (!e || !t) {
      return false
    }
    if (!s(t)) {
      throw new Error("listener must be a function")
    }
    this._events[e] = this._events[e] || []
    var n = "object" == typeof t
    this._events[e].unshift(n ? t : {
      listener: t,
      once: false
    })
    return this
  }
  u.prototype.prependOnce = function (e, t) {
    return this.prepend(e, {
      listener: t,
      once: true
    })
  }
  u.prototype.once = function (e, t) {
    return this.on(e, {
      listener: t,
      once: true
    })
  }
  u.prototype.off = function (e, t) {
    var n = this._events[e]
    if (!n) {
      return false
    }
    if ("number" == typeof t) {
      n.splice(t, 1)
    } else if ("function" == typeof t) {
      for (var r = 0, /* [auto-meaningful-name] */n$length = n.length; r < n$length; r++) {
        if (n[r] && n[r].listener === t) {
          n.splice(r, 1)
        }
      }
    }
    return this
  }
  u.prototype.emit = function (e, t) {
    var n = this._events[e]
    if (!n) {
      return false
    }
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      if (i) {
        i.listener.call(this, t || {})
        if (i.once) {
          this.off(e, r)
        }
      }
    }
    return this
  }
  u.prototype.removeAllListeners = function (e) {
    if (e && this._events[e]) {
      this._events[e] = []
    } else {
      this._events = {}
    }
  }
  u.prototype.listeners = function (e) {
    return e && "string" == typeof e ? this._events[e] : this._events
  }
  var eo = function () {
    var e = function () {
      for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) {
        t++
      }
      return e.toString(16) + t.toString(16)
    }
    var t = function () {
      return r().toString(16).replace(".", "")
    }
    var n = function () {
      function e(e, t) {
        var n
        var r = 0
        for (n = 0; n < t.length; n++) {
          r |= i[n] << 8 * n
        }
        return e ^ r
      }
      var t
      var n
      var /* [auto-meaningful-name] */navigator$userAgent = navigator.userAgent
      var i = []
      var o = 0
      for (t = 0; t < navigator$userAgent.length; t++) {
        n = navigator$userAgent.charCodeAt(t)
        i.unshift(255 & n)
        if (i.length >= 4) {
          o = e(o, i)
          i = []
        }
      }
      if (i.length > 0) {
        o = e(o, i)
      }
      return o.toString(16)
    }
    return function () {
      var i = String(screen.height * screen.width)
      i = i && /\d{5,}/.test(i) ? i.toString(16) : String(31242 * r()).replace(".", "").slice(0, 8)
      var o = e() + "-" + t() + "-" + n() + "-" + i + "-" + e()
      return o || (String(r()) + String(r()) + String(r())).slice(2, 15)
    }
  }()
  var to = function (e) {
    this.ele = e
  }
  var no = function (e, t) {
    for (var n = []; e; e = e.nextSibling) {
      if (1 === e.nodeType && e !== t) {
        n.push(e)
      }
    }
    return n
  }
  to.prototype = {
    addClass: function (e) {
      if (-1 === (" " + this.ele.className + " ").indexOf(" " + e + " ")) {
        this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e
      }
      return this
    },
    removeClass: function (e) {
      var t = " " + this.ele.className + " "
      if (-1 !== t.indexOf(" " + e + " ")) {
        this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)
      }
      return this
    },
    hasClass: function (e) {
      return -1 !== (" " + this.ele.className + " ").indexOf(" " + e + " ")
    },
    attr: function (e, t) {
      return "string" == typeof e && y(t) ? this.ele.getAttribute(e) : ("string" == typeof e && (t = String(t), this.ele.setAttribute(e, t)), this)
    },
    offset: function () {
      var e = this.ele.getBoundingClientRect()
      if (e.width || e.height) {
        var /* [auto-meaningful-name] */this$ele$ownerDocument$documentElement = this.ele.ownerDocument.documentElement
        return {
          top: e.top + window.pageYOffset - this$ele$ownerDocument$documentElement.clientTop,
          left: e.left + window.pageXOffset - this$ele$ownerDocument$documentElement.clientLeft
        }
      }
      return {
        top: 0,
        left: 0
      }
    },
    getSize: function () {
      if (!window.getComputedStyle) {
        return {
          width: this.ele.offsetWidth,
          height: this.ele.offsetHeight
        }
      }
      try {
        var e = this.ele.getBoundingClientRect()
        return {
          width: e.width,
          height: e.height
        }
      } catch (t) {
        return {
          width: 0,
          height: 0
        }
      }
    },
    getStyle: function (e) {
      return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
    },
    wrap: function (e) {
      var t = document.createElement(e)
      this.ele.parentNode.insertBefore(t, this.ele)
      t.appendChild(this.ele)
      return b(t)
    },
    getCssStyle: function (e) {
      var t = this.ele.style.getPropertyValue(e)
      if (t) {
        return t
      }
      var n = null
      if ("function" == typeof window.getMatchedCSSRules) {
        n = window.getMatchedCSSRules(this.ele)
      }
      if (!n || !_(n)) {
        return null
      }
      for (var r = n.length - 1; r >= 0; r--) {
        if (t = n[r].style.getPropertyValue(e)) {
          return t
        }
      }
    },
    sibling: function (e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }
      return e
    },
    next: function () {
      return this.sibling(this.ele, "nextSibling")
    },
    prev: function () {
      return this.sibling(this.ele, "previousSibling")
    },
    siblings: function () {
      return no((this.ele.parentNode || {}).firstChild, this.ele)
    },
    children: function () {
      return no(this.ele.firstChild)
    },
    parent: function () {
      var /* [auto-meaningful-name] */this$ele$parentNode = this.ele.parentNode
      return b(this$ele$parentNode = this$ele$parentNode && 11 !== this$ele$parentNode.nodeType ? this$ele$parentNode : null)
    },
    previousElementSibling: function () {
      var /* [auto-meaningful-name] */this$ele = this.ele
      if ("previousElementSibling" in document.documentElement) {
        return b(this$ele.previousElementSibling)
      }
      for (; this$ele = this$ele.previousSibling;) {
        if (1 === this$ele.nodeType) {
          return b(this$ele)
        }
      }
      return b(null)
    },
    getSameTypeSiblings: function () {
      for (var /* [auto-meaningful-name] */this$ele = this.ele, /* [auto-meaningful-name] */this$ele$parentNode = this$ele.parentNode, n = this$ele.tagName.toLowerCase(), r = [], i = 0; i < this$ele$parentNode.children.length; i++) {
        var o = this$ele$parentNode.children[i]
        if (1 === o.nodeType && o.tagName.toLowerCase() === n) {
          r.push(this$ele$parentNode.children[i])
        }
      }
      return r
    },
    getParents: function () {
      try {
        var /* [auto-meaningful-name] */this$ele = this.ele
        if (!v(this$ele)) {
          return []
        }
        var t = [this$ele]
        if (null === this$ele || null === this$ele.parentElement) {
          return []
        }
        for (; null !== this$ele.parentElement;) {
          this$ele = this$ele.parentElement
          t.push(this$ele)
        }
        return t
      } catch (n) {
        return []
      }
    }
  }
  var ro = {
    get: function (e) {
      for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
        for (var i = n[r]; " " == i.charAt(0);) {
          i = i.substring(1, i.length)
        }
        if (0 == i.indexOf(t)) {
          return c(i.substring(t.length, i.length))
        }
      }
      return null
    },
    set: function (e, t, n, r, i, o) {
      function a(e) {
        return !!e && e.replace(/\r\n/g, "")
      }
      var s = o
      var u = ""
      var c = ""
      var l = ""
      if (0 !== (n = null == n ? 73e3 : n)) {
        var f = new Date()
        if ("s" === String(n).slice(-1)) {
          f.setTime(f.getTime() + 1e3 * Number(String(n).slice(0, -1)))
        } else {
          f.setTime(f.getTime() + 24 * n * 60 * 60 * 1e3)
        }
        u = "; expires=" + f.toGMTString()
      }
      if (r && "" !== r) {
        l = "; SameSite=" + r
      }
      if (i) {
        c = "; secure"
      }
      var p = ""
      var d = ""
      var h = ""
      if (e) {
        p = a(e)
      }
      if (t) {
        d = a(t)
      }
      if (s) {
        h = a(s)
      }
      if (p && d) {
        document.cookie = p + "=" + encodeURIComponent(d) + u + "; path=/" + h + l + c
      }
    },
    remove: function (e, t) {
      this.set(e, "1", -1, t)
    },
    isSupport: function (e, t, n, r, i) {
      function o() {
        a.set(e, t, n, r, i)
        return a.get(e) === t && (a.remove(e), true)
      }
      e = e || "cookie_support_test"
      t = t || "1"
      var a = this
      return navigator.cookieEnabled && o()
    }
  }
  var /* [auto-meaningful-name] */Object$prototype$hasOwnProperty = Object.prototype.hasOwnProperty
  var oo = {
    isSupport: function () {
      var e = true
      var /* [auto-meaningful-name] */__session_storage_support__ = "__session_storage_support__"
      var /* [auto-meaningful-name] */TestIsSupportStorage = "testIsSupportStorage"
      try {
        if (sessionStorage && sessionStorage.setItem) {
          sessionStorage.setItem(__session_storage_support__, TestIsSupportStorage)
          sessionStorage.removeItem(__session_storage_support__, TestIsSupportStorage)
          e = true
        } else {
          e = false
        }
      } catch (r) {
        e = false
      }
      return e
    }
  }
  var ao = {
    "+": "-",
    "/": "_",
    "=": "."
  }
  var so = {
    "-": "+",
    _: "/",
    ".": "="
  }
  var uo = {
    encode: function (e) {
      return e.replace(/[+\/=]/g, function (e) {
        return ao[e]
      })
    },
    decode: function (e) {
      return e.replace(/[-_.]/g, function (e) {
        return so[e]
      })
    },
    trim: function (e) {
      return e.replace(/[.=]{1,2}$/, "")
    },
    isBase64: function (e) {
      return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
    },
    isUrlSafeBase64: function (e) {
      return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
    }
  }
  var co = {
    __proto__: null,
    noPrototypePollution: je,
    ConcurrentStorage: a,
    EventEmitter: u,
    URL: g,
    UUID: eo,
    addEvent: w,
    addHashEvent: S,
    ajax: T,
    base64Decode: j,
    base64Encode: P,
    bindReady: C,
    cookie: ro,
    coverExtend: I,
    decodeURI: N,
    decodeURIComponent: c,
    dfmapping: A,
    each: O,
    encodeDates: D,
    extend: E,
    extend2Lev: M,
    filter: U,
    formatDate: L,
    formatJsonString: B,
    getCookieTopLevelDomain: F,
    getDomBySelector: $,
    getElementContent: z,
    getHostname: q,
    getIOSVersion: V,
    getQueryParam: G,
    getQueryParamsFromUrl: W,
    getRandom: r,
    getRandomBasic: Zi,
    getScreenOrientation: J,
    getUA: Y,
    getURL: X,
    getURLPath: Q,
    getURLSearchParams: f,
    hasAttribute: Z,
    hasAttributes: ee,
    hashCode: te,
    hashCode53: ne,
    indexOf: re,
    inherit: ie,
    isArguments: oe,
    isArray: _,
    isBoolean: ae,
    isDate: R,
    isElement: v,
    isEmptyObject: se,
    isFunction: e,
    isHttpUrl: ue,
    isIOS: ce,
    isJSONString: le,
    isNumber: fe,
    isObject: n,
    isString: p,
    isSupportBeaconSend: pe,
    isSupportCors: de,
    isUndefined: y,
    jsonp: he,
    listenPageState: ge,
    loadScript: me,
    localStorage: Qi,
    logger: Xi,
    map: x,
    mediaQueriesSupported: K,
    now: t,
    removeScriptProtocol: ve,
    rot13defs: _e,
    rot13obfs: ye,
    ry: b,
    safeJSONParse: i,
    searchObjDate: be,
    sessionStorage: oo,
    setCssStyle: we,
    strToUnicode: Se,
    throttle: ke,
    toArray: Ee,
    trim: d,
    unique: Te,
    urlParse: h,
    urlSafeBase64: uo,
    values: Oe,
    xhr: k,
    startsWith: xe
  }
  var lo = []
  var fo = {
    appendWriter: function (e) {
      lo.push(e)
    },
    msg: function () {
      var e = {
        module: "",
        level: "log",
        brand: "web-sdk",
        content: null
      }
      e.content = Array.prototype.slice.call(arguments)
      return {
        module: function (t) {
          if (p(t)) {
            e.module = t
          }
          return this
        },
        level: function (t) {
          if (p(t)) {
            e.level = t
          }
          return this
        },
        brand: function (t) {
          if (p(t)) {
            e.brand = t
          }
          return this
        },
        log: function () {
          if (e.content && e.content.length) {
            for (var t = 0; t < lo.length; t++) {
              if ("function" == typeof lo[t]) {
                try {
                  lo[t].call(null, e)
                } catch (n) {}
              }
            }
          }
          return this
        }
      }
    }
  }
  var po = {}
  var ho = {
    preset_properties: {
      search_keyword_baidu: false,
      latest_utm: true,
      latest_traffic_source_type: true,
      latest_search_keyword: true,
      latest_referrer: true,
      latest_referrer_host: false,
      latest_landing_page: false,
      latest_wx_ad_click_id: undefined,
      url: true,
      title: true
    },
    encrypt_cookie: false,
    enc_cookie: false,
    img_use_crossorigin: false,
    name: "sa",
    max_referrer_string_length: 200,
    max_string_length: 1024,
    max_id_length: 255,
    max_key_length: 100,
    cross_subdomain: true,
    show_log: false,
    is_debug: false,
    source_channel: [],
    sdk_id: "",
    auto_init: true,
    is_track_single_page: false,
    is_single_page: false,
    batch_send: false,
    source_type: {},
    callback_timeout: 200,
    datasend_timeout: 8e3,
    is_track_device_id: false,
    ignore_oom: true,
    app_js_bridge: false,
    white_list: {}
  }
  ho.white_list[location.host] = g(location.href).hostname
  var /* [auto-meaningful-name] */Utm_sourceUtm_mediumUtm_campaignUtm_contentUtm_term = "utm_source utm_medium utm_campaign utm_content utm_term"
  var /* [auto-meaningful-name] */_1$27$4 = "1.27.4"
  var /* [auto-meaningful-name] */Sensorsdata_domain_test = "sensorsdata_domain_test"
  var yo = {
    EMAIL: "$identity_email",
    MOBILE: "$identity_mobile",
    LOGIN: "$identity_login_id"
  }
  var _o = {
    get: function (e) {
      return ro.get(e)
    },
    set: function (e, t, n, r) {
      var i = ""
      if (r = y(r) ? po.cross_subdomain : r) {
        var o = Ne(location.href)
        if ("url解析失败" === o) {
          o = ""
        }
        i = o ? "; domain=" + o : ""
      }
      return ro.set(e, t, n, po.set_cookie_samesite, po.is_secure_cookie, i)
    },
    remove: function (e, t) {
      t = y(t) ? po.cross_subdomain : t
      return ro.remove(e, t)
    },
    isSupport: function (e, t) {
      e = e || "sajssdk_2015_cookie_access_test"
      t = t || "1"
      return ro.isSupport(e, t, 0, null, po.is_secure_cookie)
    }
  }
  _o.getNewUser = Re
  var bo = {
    data: {},
    get: function (e) {
      var t = this.data[e]
      return undefined === t ? null : undefined !== t._expirationTimestamp_ ? new Date().getTime() > t._expirationTimestamp_ ? null : t.value : t
    },
    set: function (e, t, n) {
      if (n) {
        var r = new Date()
        t = {
          value: t,
          _expirationTimestamp_: "s" === String(n).slice(-1) ? r.getTime() + 1e3 * Number(String(n).slice(0, -1)) : r.getTime() + 24 * n * 60 * 60 * 1e3
        }
      }
      this.data[e] = t
    },
    getNewUserFlagMemoryKey: function (e) {
      return "sajssdk_2015_" + po.sdk_id + e
    }
  }
  var wo = {
    checkIsAddSign: function (e) {
      if ("track" === e.type) {
        if (Re()) {
          e.properties.$is_first_day = true
        } else {
          e.properties.$is_first_day = false
        }
      }
    },
    is_first_visit_time: false,
    is_page_first_visited: false,
    checkIsFirstTime: function (e) {
      if ("track" === e.type && "$pageview" === e.event) {
        if (this.is_first_visit_time) {
          e.properties.$is_first_time = true
          this.is_first_visit_time = false
        } else {
          e.properties.$is_first_time = false
        }
      }
    },
    setDeviceId: function () {},
    storeInitCheck: function () {
      if (Ji.is_first_visitor) {
        var e = new Date()
        var t = {
          h: 23 - e.getHours(),
          m: 59 - e.getMinutes(),
          s: 59 - e.getSeconds()
        }
        if (_o.isSupport()) {
          _o.set(Ae("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s")
        } else {
          bo.set(bo.getNewUserFlagMemoryKey("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s")
        }
        this.is_first_visit_time = true
        this.is_page_first_visited = true
      } else {
        if (!Re()) {
          this.checkIsAddSign = function (e) {
            if ("track" === e.type) {
              e.properties.$is_first_day = false
            }
          }
        }
        this.checkIsFirstTime = function (e) {
          if ("track" === e.type && "$pageview" === e.event) {
            e.properties.$is_first_time = false
          }
        }
      }
    }
  }
  var So = function () {
    this._events = []
    this.pendingEvents = []
  }
  So.prototype = {
    emit: function (e) {
      var t = [].slice.call(arguments, 1)
      O(this._events, function (n) {
        if (n.type === e) {
          n.callback.apply(n.context, t)
        }
      })
      this.pendingEvents.push({
        type: e,
        data: t
      })
      if (this.pendingEvents.length > 20) {
        this.pendingEvents.shift()
      }
    },
    on: function (t, n, r, i) {
      if (e(n)) {
        this._events.push({
          type: t,
          callback: n,
          context: r || this
        })
        i = false !== i
        if (this.pendingEvents.length > 0 && i) {
          O(this.pendingEvents, function (e) {
            if (e.type === t) {
              n.apply(r, e.data)
            }
          })
        }
      }
    },
    tempAdd: function (e, t) {
      if (t && e) {
        return this.emit(e, t)
      }
    },
    isReady: function () {}
  }
  var ko = {
    data: {},
    id: function () {
      if (!this.data.id) {
        this.data.id = Ue()
      }
      return this.data.id
    },
    type: function () {
      if (!this.data.type) {
        this.data.type = Me()
      }
      return this.data.type
    }
  }
  var Oo = {
    distinct_id: function () {},
    jssdkDebug: function () {},
    _sendDebug: function (e) {},
    apph5: function (e) {
      var /* [auto-meaningful-name] */App_h5 = "app_h5打通失败-"
      var r = {
        1: App_h5 + "use_app_track为false",
        2: App_h5 + "Android或者iOS，没有暴露相应方法",
        3.1: App_h5 + "Android校验server_url失败",
        3.2: App_h5 + "iOS校验server_url失败",
        4.1: App_h5 + "H5 校验 iOS server_url 失败",
        4.2: App_h5 + "H5 校验 Android server_url 失败"
      }
      var /* [auto-meaningful-name] */e$output = e.output
      var /* [auto-meaningful-name] */e$step = e.step
      var a = e.data || ""
      if (!("all" !== e$output && "console" !== e$output)) {
        Pe(r[e$step])
      }
      if (("all" === e$output || "code" === e$output) && n(po.is_debug) && po.is_debug.apph5) {
        if (!(a.type && "profile" === a.type.slice(0, 7))) {
          a.properties._jssdk_debug_info = "apph5-" + String(e$step)
        }
      }
    },
    defineMode: function (e) {
      var t = {
        1: {
          title: "当前页面无法进行可视化全埋点",
          message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 App SDK 的配置，详细信息请查看文档。",
          link_text: "",
          link_url: ""
        },
        2: {
          title: "当前页面无法进行可视化全埋点",
          message: "App SDK 与 Web JS SDK 没有进行打通，请联系贵方技术人员修正 Web JS SDK 的配置，详细信息请查看文档。",
          link_text: "",
          link_url: ""
        },
        3: {
          title: "当前页面无法进行可视化全埋点",
          message: "Web JS SDK 没有开启全埋点配置，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
          link_text: "",
          link_url: ""
        },
        4: {
          title: "当前页面无法进行可视化全埋点",
          message: "Web JS SDK 配置的数据校验地址与 App SDK 配置的数据校验地址不一致，请联系贵方工作人员修正 SDK 的配置，详细信息请查看文档。",
          link_text: "",
          link_url: ""
        }
      }
      return !(!e || !t[e]) && t[e]
    },
    protocol: {
      protocolIsSame: function (e, t) {
        try {
          if (g(e).protocol !== g(t).protocol) {
            return false
          }
        } catch (n) {
          Ce("不支持 _.URL 方法")
          return false
        }
        return true
      },
      serverUrl: function () {
        if (p(po.server_url) && "" !== po.server_url && !this.protocolIsSame(po.server_url, location.href)) {
          Ce("SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。\n因为：1、https 下面发送 http 的图片请求会失败。2、http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。")
        }
      },
      ajax: function (e) {
        return e !== po.server_url && void (p(e) && "" !== e && !this.protocolIsSame(e, location.href) && Ce("SDK 检测到您的数据发送地址和当前页面地址的协议不一致，建议您修改成一致的协议。因为 http 页面使用 https + ajax 方式发数据，在 ie9 及以下会丢失数据。"))
      }
    }
  }
  var Eo = {
    initPage: function () {
      var e = Be()
      var t = X()
      var n = Ne(t)
      if (!n) {
        Oo.jssdkDebug("url_domain异常_" + t + "_" + n)
      }
      this.pageProp = {
        referrer: e,
        referrer_host: e ? q(e) : "",
        url: t,
        url_host: q(t, "url_host取值异常"),
        url_domain: n
      }
    },
    pageProp: {},
    campaignParams: function () {
      return Ji.kit.getUtmData()
    },
    campaignParamsStandard: function (e, t) {
      e = e || ""
      t = t || ""
      var n = Eo.campaignParams()
      var r = {}
      var i = {}
      O(n, function (n, o, a) {
        if (-1 !== (" " + Utm_sourceUtm_mediumUtm_campaignUtm_contentUtm_term + " ").indexOf(" " + o + " ")) {
          r[e + o] = a[o]
        } else {
          i[t + o] = a[o]
        }
      })
      return {
        $utms: r,
        otherUtms: i
      }
    },
    properties: function () {
      var e = window.innerHeight || document.documentElement.clientHeight || document.body && document.body.clientHeight || 0
      var t = window.innerWidth || document.documentElement.clientWidth || document.body && document.body.clientWidth || 0
      return {
        $timezone_offset: new Date().getTimezoneOffset(),
        $screen_height: Number(screen.height) || 0,
        $screen_width: Number(screen.width) || 0,
        $viewport_height: e,
        $viewport_width: t,
        $lib: "js",
        $lib_version: _1$27$4
      }
    },
    currentProps: {},
    register: function (e) {
      E(Eo.currentProps, e)
    }
  }
  var To = {}
  var xo = new u()
  To.spa = xo
  To.sdk = new u()
  To.data = new u()
  To.initSystemEvent = function () {
    nt(function (e) {
      xo.emit("switch", e)
    })
  }
  To.EVENT_LIST = {
    spaSwitch: ["spa", "switch"],
    sdkBeforeInit: ["sdk", "beforeInit"],
    sdkInitPara: ["sdk", "initPara"],
    sdkAfterInitPara: ["sdk", "afterInitPara"],
    sdkInitAPI: ["sdk", "initAPI"],
    sdkAfterInitAPI: ["sdk", "afterInitAPI"],
    sdkAfterInit: ["sdk", "afterInit"],
    sdkReady: ["sdk", "ready"],
    dataSendSuccess: ["data", "sendSuccess"],
    dataSendFail: ["data", "sendFail"]
  }
  var jo = function (e) {
    this.callback = e.callback
    this.server_url = e.server_url
    this.data = e.data
    this.origin_data = e.origin_data
  }
  jo.prototype.start = function () {
    var e = this
    var t = new Date()
    Ze({
      url: this.server_url,
      type: "POST",
      data: e.data,
      credentials: false,
      timeout: po.datasend_timeout,
      cors: true,
      success: function (n, r) {
        To.data.emit("sendSuccess", {
          status: String(r),
          resText: n,
          type: "ajax_single",
          timeout_config: po.datasend_timeout,
          request_timeout: new Date() - t,
          data: e.origin_data
        })
        e.end()
      },
      error: function (n, r) {
        To.data.emit("sendFail", {
          status: String(r),
          resText: n,
          type: "ajax_single",
          timeout_config: po.datasend_timeout,
          request_timeout: new Date() - t,
          data: e.origin_data
        })
        e.end()
      }
    })
  }
  jo.prototype.end = function () {
    if (this.callback) {
      Pe("warning: sdk callback is deprecated.")
      if (!e(this.callback)) {
        return void Pe("error: sdk callback must be function.")
      }
      this.callback()
    }
  }
  var /* [auto-meaningful-name] */Sawebjssdk = "sawebjssdk-"
  var /* [auto-meaningful-name] */TabSawebjssdk = "tab-sawebjssdk-"
  it.prototype = {
    batchInterval: function () {
      if ("" === this.serverUrl) {
        this.getServerUrl()
      }
      if (!this.hasTabStorage) {
        this.generateTabStorage()
        this.hasTabStorage = true
      }
      var e = this
      e.timer = setTimeout(function () {
        e.updateExpireTime()
        e.recycle()
        e.send()
        clearTimeout(e.timer)
        e.batchInterval()
      }, po.batch_send.send_interval)
    },
    getServerUrl: function () {
      return p(po.server_url) && "" !== po.server_url || _(po.server_url) && po.server_url.length ? void (this.serverUrl = _(po.server_url) ? po.server_url[0] : po.server_url) : Ie("当前 server_url 为空或不正确，只在控制台打印日志，network 中不会发数据，请配置正确的 server_url！")
    },
    send: function () {
      if (this.sendTimeStamp && t() - this.sendTimeStamp < po.batch_send.send_interval) {
        return false
      }
      var e = Qi.get(this.tabKey)
      if (e) {
        this.sendTimeStamp = t()
        var n = Te((e = i(e) || this.generateTabStorageVal()).data)
        if (n.length) {
          for (var r = [], o = 0; o < n.length; o++) {
            var a = Ji.store.readObjectVal(n[o])
            if (a) {
              a._flush_time = new Date().getTime()
              r.push(a)
            }
          }
          if (r.length) {
            this.request(r, e.data)
          }
        }
      }
    },
    updateExpireTime: function () {
      var e = Qi.get(this.tabKey)
      if (e) {
        (e = i(e) || this.generateTabStorageVal()).expireTime = t() + 2 * po.batch_send.send_interval
        e.serverUrl = this.serverUrl
        Qi.set(this.tabKey, JSON.stringify(e))
      }
    },
    request: function (e, t) {
      var n = this
      var r = new Date()
      Ze({
        url: this.serverUrl,
        type: "POST",
        data: "data_list=" + encodeURIComponent(P(JSON.stringify(e))),
        credentials: false,
        timeout: po.batch_send.datasend_timeout,
        cors: true,
        success: function (i, o) {
          To.data.emit("sendSuccess", {
            status: String(o),
            resText: i,
            type: "ajax_batch",
            timeout_config: po.batch_send.datasend_timeout,
            request_timeout: new Date() - r,
            data: e
          })
          n.remove(t)
          n.sendTimeStamp = 0
        },
        error: function (t, i) {
          To.data.emit("sendFail", {
            status: String(i),
            resText: t,
            type: "ajax_batch",
            timeout_config: po.batch_send.datasend_timeout,
            request_timeout: new Date() - r,
            data: e
          })
          n.sendTimeStamp = 0
        }
      })
    },
    remove: function (e) {
      var t = Qi.get(this.tabKey)
      if (t) {
        for (var /* [auto-meaningful-name] */ITThis$generateTabStorageVal$data = (i(t) || this.generateTabStorageVal()).data, r = 0; r < e.length; r++) {
          var o = re(ITThis$generateTabStorageVal$data, e[r])
          if (o > -1) {
            ITThis$generateTabStorageVal$data.splice(o, 1)
          }
          Qi.remove(e[r])
        }
        ITThis$generateTabStorageVal$data = Te(ITThis$generateTabStorageVal$data)
        Qi.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(ITThis$generateTabStorageVal$data)))
      }
    },
    add: function (e) {
      var n = Sawebjssdk + String(r())
      var o = Qi.get(this.tabKey)
      if (null === o) {
        this.tabKey = TabSawebjssdk + String(r())
        o = this.generateTabStorageVal()
      } else {
        o = i(o) || this.generateTabStorageVal()
      }
      o.data.push(n)
      o.expireTime = t() + 2 * po.batch_send.send_interval
      Qi.set(this.tabKey, JSON.stringify(o))
      Ji.store.saveObjectVal(n, e)
      if (!("track_signup" !== e.type && "$pageview" !== e.event)) {
        this.sendImmediately()
      }
    },
    generateTabStorage: function () {
      this.tabKey = TabSawebjssdk + String(r())
      Qi.set(this.tabKey, JSON.stringify(this.generateTabStorageVal()))
    },
    generateTabStorageVal: function (e) {
      return {
        data: e = e || [],
        expireTime: t() + 2 * po.batch_send.send_interval,
        serverUrl: this.serverUrl
      }
    },
    sendImmediately: function () {
      this.send()
    },
    recycle: function () {
      for (var e = {}, n = 1e4, /* [auto-meaningful-name] */SajssdkLockGet = "sajssdk-lock-get-", o = 0; o < localStorage.length; o++) {
        var s = localStorage.key(o)
        var u = this
        if (0 === s.indexOf(TabSawebjssdk)) {
          for (var c = i(Qi.get(s)) || this.generateTabStorageVal(), l = 0; l < c.data.length; l++) {
            e[c.data[l]] = true
          }
          if (s !== u.tabKey && t() > c.expireTime && this.serverUrl === c.serverUrl) {
            new a(SajssdkLockGet).get(s, n, 1e3, function (e) {
              if (e) {
                if (null === Qi.get(u.tabKey)) {
                  u.generateTabStorage()
                }
                var t = i(e) || u.generateTabStorageVal()
                var n = i(Qi.get(u.tabKey)) || u.generateTabStorageVal()
                n.data = Te(n.data.concat(t.data))
                Qi.set(u.tabKey, JSON.stringify(n))
              }
            })
          }
        } else if (0 === s.indexOf(SajssdkLockGet)) {
          var f = i(Qi.get(s)) || {
            expireTime: 0
          }
          if (t() - f.expireTime > n) {
            Qi.remove(s)
          }
        }
      }
      for (var p = 0; p < localStorage.length; p++) {
        var d = localStorage.key(p)
        if (!(0 !== d.indexOf(Sawebjssdk) || e[d])) {
          Qi.remove(d)
        }
      }
    }
  }
  var Io = function (e) {
    this.callback = e.callback
    this.server_url = e.server_url
    this.data = e.data
  }
  Io.prototype.start = function () {
    var e = this
    if ("object" == typeof navigator && "function" == typeof navigator.sendBeacon) {
      navigator.sendBeacon(this.server_url, this.data)
    }
    setTimeout(function () {
      e.end()
    }, 40)
  }
  Io.prototype.end = function () {
    if (this.callback) {
      Pe("warning: sdk callback is deprecated.")
      if (!e(this.callback)) {
        return void Pe("error: sdk callback must be function.")
      }
      this.callback()
    }
  }
  var No = function (e) {
    this.callback = e.callback
    this.img = document.createElement("img")
    this.img.width = 1
    this.img.height = 1
    if (po.img_use_crossorigin) {
      this.img.crossOrigin = "anonymous"
    }
    this.server_url = e.data
  }
  No.prototype.start = function () {
    var e = this
    if (po.ignore_oom) {
      this.img.onload = function () {
        this.onload = null
        this.onerror = null
        this.onabort = null
        e.end()
      }
      this.img.onerror = function () {
        this.onload = null
        this.onerror = null
        this.onabort = null
        e.end()
      }
      this.img.onabort = function () {
        this.onload = null
        this.onerror = null
        this.onabort = null
        e.end()
      }
    }
    this.img.src = this.server_url
  }
  No.prototype.lastClear = function () {
    if (undefined !== Y().ie) {
      this.img.src = "about:blank"
    } else {
      this.img.src = ""
    }
  }
  No.prototype.end = function () {
    if (this.callback) {
      Pe("warning: sdk callback is deprecated.")
      if (!e(this.callback)) {
        return void Pe("error: sdk callback must be function.")
      }
      this.callback()
    }
    if (self.lastClear) {
      self.lastClear()
    }
  }
  var Ao = {
    __proto__: null,
    addEvent: Le,
    EventEmitterSa: So,
    cookie: _o,
    info: Eo,
    getReferrer: Be,
    getCurrentDomain: Ne,
    isBaiduTraffic: De,
    getReferrerEqid: Ue,
    getReferrerEqidType: Me,
    getBaiduKeyword: ko,
    isReferralTraffic: He,
    getKeywordFromReferrer: Fe,
    getReferSearchEngine: $e,
    getSourceFromReferrer: ze,
    getWxAdIdFromUrl: qe,
    parseSuperProperties: Ve,
    searchConfigData: Ge,
    strip_empty_properties: We,
    getEleInfo: Ye,
    getElementContent: Qe,
    ajax: Ze,
    optimizeServerUrl: et,
    encodeTrackData: tt,
    AjaxSend: jo,
    BatchSend: it,
    BeaconSend: Io,
    ImageSend: No
  }
  var Ro = new So()
  var Lo = {
    requests: [],
    _sessionState: {},
    _state: {
      distinct_id: "",
      first_id: "",
      props: {},
      identities: {}
    },
    getProps: function () {
      return this._state.props || {}
    },
    getSessionProps: function () {},
    getOriginDistinctId: function () {
      return this._state._distinct_id || this._state.distinct_id
    },
    getOriginUnionId: function (e) {
      var t = {}
      var n = (e = e || this._state)._first_id || e.first_id
      var r = e._distinct_id || e.distinct_id
      if (n && r) {
        t.login_id = r
        t.anonymous_id = n
      } else {
        t.anonymous_id = r
      }
      return t
    },
    getIdentities: function () {
      var e = JSON.parse(JSON.stringify(this._state.identities))
      e.$identity_anonymous_id = this.getAnonymousId()
      return e
    },
    getAnonymousId: function () {
      return Lo._state._first_id || Lo._state.first_id || Lo._state._distinct_id || Lo._state.distinct_id
    },
    getDistinctId: function () {
      var e = this.getUnionId()
      return e.login_id || e.anonymous_id
    },
    getUnionId: function (e) {
      var t = this.getOriginUnionId(e)
      if (t.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state.history_login_id.name !== yo.LOGIN) {
        t.login_id = this._state.history_login_id.name + "+" + t.login_id
      }
      return t
    },
    getFirstId: function () {
      return this._state._first_id || this._state.first_id
    },
    initSessionState: function () {},
    setOnce: function (e, t) {
      if (!(e in this._state)) {
        this.set(e, t)
      }
    },
    set: function (e, t) {
      this._state = this._state || {}
      var /* [auto-meaningful-name] */this$_state$distinct_id = this._state.distinct_id
      this._state[e] = t
      if ("first_id" === e) {
        delete this._state._first_id
      } else {
        if ("distinct_id" === e) {
          delete this._state._distinct_id
        }
      }
      this.save()
      if ("distinct_id" === e && this$_state$distinct_id) {
        Ro.tempAdd("changeDistinctId", t)
      }
    },
    change: function (e, t) {
      this._state["_" + e] = t
    },
    setSessionProps: function () {
      Ji.log("initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问")
    },
    setSessionPropsOnce: function () {
      Ji.log("initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问")
    },
    setProps: function (e, t) {
      var n = {}
      for (var r in n = t ? e : E(this._state.props || {}, e)) if ("string" == typeof n[r]) {
        n[r] = n[r].slice(0, Ji.para.max_referrer_string_length)
      }
      this.set("props", n)
    },
    setPropsOnce: function (e) {
      var t = this._state.props || {}
      I(t, e)
      this.set("props", t)
    },
    clearAllProps: function (e) {
      var t
      if (_(e) && e.length > 0) {
        for (t = 0; t < e.length; t++) {
          if (p(e[t]) && -1 === e[t].indexOf("latest_") && n(this._state.props) && e[t] in this._state.props) {
            delete this._state.props[e[t]]
          }
        }
      } else if (n(this._state.props)) {
        for (t in this._state.props) if (1 !== t.indexOf("latest_")) {
          delete this._state.props[t]
        }
      }
      this.sessionSave({})
      this.save()
    },
    sessionSave: function () {
      Ji.log("initSessionState 方法已经弃用，请不要使用该功能，如有需求联系技术顾问")
    },
    save: function () {
      var e = JSON.parse(JSON.stringify(this._state))
      delete e._first_id
      delete e._distinct_id
      if (e.identities) {
        e.identities = P(JSON.stringify(e.identities))
      }
      var t = JSON.stringify(e)
      if (Ji.para.encrypt_cookie) {
        t = Ji.kit.userEncrypt(t)
      }
      _o.set(this.getCookieName(), t, 360, Ji.para.cross_subdomain)
    },
    getCookieName: function () {
      var e = ""
      if (false === Ji.para.cross_subdomain) {
        try {
          var /* [auto-meaningful-name] */location$host = location.host
          if (!y(Ji.para.white_list[location$host])) {
            e = Ji.para.white_list[location$host]
          }
        } catch (n) {
          Ce(n)
        }
        e = "string" == typeof e && "" !== e ? "sa_jssdk_2015_" + Ji.para.sdk_id + e.replace(/\./g, "_") : "sa_jssdk_2015_root" + Ji.para.sdk_id
      } else {
        e = "sensorsdata2015jssdkcross" + Ji.para.sdk_id
      }
      return e
    },
    init: function () {
      function e(e) {
        var t
        if (e.identities) {
          if (0 === e.identities.indexOf("\n/")) {
            e.identities = i(_e(e.identities))
          } else {
            e.identities = i(j(e.identities))
          }
        }
        var r = Lo.getOriginUnionId(e)
        if (!(e.identities && n(e.identities) && !se(e.identities))) {
          e.identities = {}
          e.identities.$identity_cookie_id = eo()
        }
        e.history_login_id = e.history_login_id || {}
        var /* [auto-meaningful-name] */e$history_login_id$name = e.history_login_id.name
        if (r.login_id) {
          if (e$history_login_id$name && e.identities.hasOwnProperty(e$history_login_id$name)) {
            if (e.identities[e$history_login_id$name] !== r.login_id) {
              for (t in e.identities[e$history_login_id$name] = r.login_id, e.identities) if (e.identities.hasOwnProperty(t) && "$identity_cookie_id" !== t && t !== e$history_login_id$name) {
                delete e.identities[t]
              }
              e.history_login_id.value = r.login_id
            }
          } else {
            var a = e$history_login_id$name || yo.LOGIN
            for (t in e.identities[a] = r.login_id, e.identities) if (e.identities.hasOwnProperty(t) && "$identity_cookie_id" !== t && t !== a) {
              delete e.identities[t]
            }
            e.history_login_id = {
              name: a,
              value: r.login_id
            }
          }
        } else {
          if (e.identities.hasOwnProperty("$identity_login_id") || e.identities.hasOwnProperty(e$history_login_id$name)) {
            for (t in e.identities) if (e.identities.hasOwnProperty(t) && "$identity_cookie_id" !== t && "$identity_anonymous_id" !== t) {
              delete e.identities[t]
            }
          }
          e.history_login_id = {
            name: "",
            value: ""
          }
        }
        return e
      }
      function t(e) {
        Lo.set("distinct_id", e)
        Lo.set("identities", {
          $identity_cookie_id: e
        })
        Lo.set("history_login_id", {
          name: "",
          value: ""
        })
      }
      this.initSessionState()
      var r
      var o
      var a = eo()
      if (_o.isSupport()) {
        r = _o.get(this.getCookieName())
        o = i(r = Ji.kit.userDecryptIfNeeded(r))
      }
      if (_o.isSupport() && null !== r && le(r) && n(o) && (!n(o) || o.distinct_id)) {
        Lo._state = E(e(o))
        Lo.save()
      } else {
        Ji.is_first_visitor = true
        t(a)
      }
      wo.setDeviceId(a, this)
      wo.storeInitCheck()
    },
    saveObjectVal: function (e, t) {
      if (!p(t)) {
        t = JSON.stringify(t)
      }
      if (1 == Ji.para.encrypt_cookie) {
        t = Ji.kit.userEncrypt(t)
      }
      Qi.set(e, t)
    },
    readObjectVal: function (e) {
      var t = Qi.get(e)
      return t ? i(t = Ji.kit.userDecryptIfNeeded(t)) : null
    }
  }
  var Do = {
    string: function (e) {
      Ce(e + " must be string")
    },
    emptyString: function (e) {
      Ce(e + "'s is empty")
    },
    regexTest: function (e) {
      Ce(e + " is invalid")
    },
    idLength: function (e) {
      Ce(e + " length is longer than " + po.max_id_length)
    },
    keyLength: function (e) {
      Ce(e + " length is longer than " + po.max_key_length)
    },
    stringLength: function (e) {
      Ce(e + " length is longer than " + po.max_string_length)
    },
    voidZero: function (e) {
      Ce(e + "'s is undefined")
    },
    reservedLoginId: function (e) {
      Ce(e + " is invalid")
    },
    reservedBind: function (e) {
      Ce(e + " is invalid")
    },
    reservedUnbind: function (e) {
      Ce(e + " is invalid")
    }
  }
  var Mo = {
    regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
    loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
    bindReservedNames: ["$identity_login_id", "$identity_anonymous_id", "$identity_cookie_id"],
    unbindReservedNames: ["$identity_anonymous_id", yo.LOGIN],
    string: function (e) {
      return !!p(e)
    },
    emptyString: function (e) {
      return !(!p(e) || 0 === d(e).length)
    },
    regexTest: function (e) {
      return !(!p(e) || !this.regName.test(e))
    },
    idLength: function (e) {
      return !(!p(e) || e.length > po.max_id_length)
    },
    keyLength: function (e) {
      return !(!p(e) || e.length > po.max_key_length)
    },
    stringLength: function (e) {
      return !(!p(e) || e.length > po.max_string_length)
    },
    voidZero: function (e) {
      return undefined !== e
    },
    reservedLoginId: function (e) {
      return !(re(this.loginIDReservedNames, e) > -1)
    },
    reservedUnbind: function (e) {
      return !(re(this.unbindReservedNames, e) > -1)
    },
    reservedBind: function (e) {
      var /* [auto-meaningful-name] */Lo$_state$history_login_id = Lo._state.history_login_id
      return (!Lo$_state$history_login_id || !Lo$_state$history_login_id.name || Lo$_state$history_login_id.name !== e) && !(re(this.bindReservedNames, e) > -1)
    }
  }
  var Uo = {
    distinct_id: {
      rules: ["string", "emptyString", "idLength"],
      onComplete: function (t, n, r) {
        return !t && ("emptyString" === r && (n = "Id"), e(Do[r]) && Do[r](n), "idLength" === r) || t
      }
    },
    event: {
      rules: ["string", "emptyString", "keyLength", "regexTest"],
      onComplete: function (t, n, r) {
        if (!t) {
          if ("emptyString" === r) {
            n = "eventName"
          }
          if (e(Do[r])) {
            Do[r](n)
          }
        }
        return true
      }
    },
    propertyKey: {
      rules: ["string", "emptyString", "keyLength", "regexTest"],
      onComplete: function (t, n, r) {
        if (!t) {
          if ("emptyString" === r) {
            n = "Property key"
          }
          if (e(Do[r])) {
            Do[r](n)
          }
        }
        return true
      }
    },
    propertyValue: {
      rules: ["voidZero"],
      onComplete: function (t, n, r) {
        if (!t) {
          n = "Property Value"
          if (e(Do[r])) {
            Do[r](n)
          }
        }
        return true
      }
    },
    properties: function (t) {
      if (n(t)) {
        O(t, function (t, n) {
          ot({
            propertyKey: n
          })
          var r = function (t, r, i) {
            if (!t) {
              r = n + "'s Value"
              if (e(Do[i])) {
                Do[i](r)
              }
            }
            return true
          }
          ot({
            propertyValue: t
          }, r)
        })
      } else {
        if (Mo.voidZero(t)) {
          Ce("properties可以没有，但有的话必须是对象")
        }
      }
      return true
    },
    propertiesMust: function (e) {
      if (undefined !== e && n(e) && !se(e)) {
        this.properties.call(this, e)
      } else {
        Ce("properties必须是对象")
      }
      return true
    },
    item_type: {
      rules: ["string", "emptyString", "keyLength", "regexTest"],
      onComplete: function (t, n, r) {
        if (!t) {
          if ("emptyString" === r) {
            n = "item_type"
          }
          if (e(Do[r])) {
            Do[r](n)
          }
        }
        return true
      }
    },
    item_id: {
      rules: ["string", "emptyString", "stringLength"],
      onComplete: function (t, n, r) {
        if (!t) {
          if ("emptyString" === r) {
            n = "item_id"
          }
          if (e(Do[r])) {
            Do[r](n)
          }
        }
        return true
      }
    },
    loginIdKey: {
      rules: ["string", "emptyString", "keyLength", "regexTest", "reservedLoginId"],
      onComplete: function (t, n, r) {
        return !t && ("emptyString" === r && (n = "login_id_key"), e(Do[r]) && Do[r](n), "keyLength" === r) || t
      }
    },
    bindKey: {
      rules: ["string", "emptyString", "keyLength", "regexTest", "reservedBind"],
      onComplete: function (t, n, r) {
        return !t && ("emptyString" === r && (n = "Key"), e(Do[r]) && Do[r](n), "keyLength" === r) || t
      }
    },
    unbindKey: {
      rules: ["string", "emptyString", "keyLength", "regexTest", "reservedUnbind"],
      onComplete: function (t, n, r) {
        return !t && ("emptyString" === r && (n = "Key"), e(Do[r]) && Do[r](n), "keyLength" === r) || t
      }
    },
    bindValue: {
      rules: ["string", "emptyString", "idLength"],
      onComplete: function (t, n, r) {
        return !t && ("emptyString" === r && (n = "Value"), e(Do[r]) && Do[r](n), "idLength" === r) || t
      }
    },
    check: function (t, n, r) {
      var i = this[t]
      if (e(i)) {
        return i.call(this, n)
      }
      if (!i) {
        return false
      }
      for (var o = 0; o < i.rules.length; o++) {
        var a = i.rules[o]
        var s = Mo[a](n)
        var u = e(r) ? r(s, n, a) : i.onComplete(s, n, a)
        if (!s) {
          return u
        }
      }
      return true
    }
  }
  var Bo = {
    initUrl: function () {
      var e
      var t
      var r = {
        server_url: {
          project: "",
          host: ""
        },
        page_url: {
          host: "",
          pathname: ""
        }
      }
      if (!ue(Ji.para.server_url)) {
        Ie("----vcollect---server_url必须为有效 URL 字符串")
        return false
      }
      try {
        e = g(Ji.para.server_url)
        r.server_url.project = e.searchParams.get("project") || "default"
        r.server_url.host = e.host
      } catch (n) {
        Ie("----vcollect---server_url解析异常", n)
        return false
      }
      try {
        t = g(location.href)
        r.page_url.host = t.hostname
        r.page_url.pathname = t.pathname
      } catch (n) {
        Ie("----vcollect---页面地址解析异常", n)
        return false
      }
      return r
    },
    isDiv: function (e) {
      return !e.element_path || "div" === d(e.element_path.split(">").pop()).slice(0, 3)
    },
    configIsMatchNew: function (e, t) {
      if (p(e.$element_selector) && p(t.element_selector)) {
        if ("element_selector" === t.element_field && "equal" === t.function) {
          return e.$element_selector === t.element_selector
        }
        if ("element_selector" === t.element_field && "contain" === t.function) {
          return e.$element_selector.indexOf(t.element_selector) > -1
        }
      }
      if (p(e.$element_path) && p(t.element_path)) {
        if ("element_path" === t.element_field && "equal" === t.function) {
          return e.$element_path === t.element_path
        }
        if ("element_path" === t.element_field && "contain" === t.function) {
          return e.$element_path.indexOf(t.element_path) > -1
        }
      }
      return false
    },
    configIsMatch: function (e, t) {
      return (!t.limit_element_content || t.element_content === e.$element_content) && (!t.limit_element_position || t.element_position === String(e.$element_position)) && (t.element_field && t.function ? Bo.configIsMatchNew(e, t) : Bo.configIsMatchOldVersion(e, t))
    },
    configIsMatchOldVersion: function (e, t) {
      if (!t.element_path) {
        return false
      }
      if (undefined !== e.$element_position) {
        if (t.element_path !== e.$element_path) {
          return false
        }
      } else if (Bo.isDiv({
        element_path: t.element_path
      })) {
        if (e.$element_path.indexOf(t.element_path) < 0) {
          return false
        }
      } else if (t.element_path !== e.$element_path) {
        return false
      }
      return true
    },
    filterConfig: function (e, t, r) {
      var i = []
      if (!r) {
        var o = Bo.initUrl()
        if (!o) {
          return []
        }
        r = o.page_url
      }
      if ("$WebClick" === e.event) {
        O(t, function (t) {
          if (n(t) && ("webclick" === t.event_type || "appclick" === t.event_type) && n(t.event) && t.event.url_host === r.host && t.event.url_path === r.pathname && Bo.configIsMatch(e.properties, t.event)) {
            i.push(t)
          }
        })
      }
      return i
    },
    getPropElInLi: function (e, t) {
      if (!(e && v(e) && p(t))) {
        return null
      }
      if ("li" !== e.tagName.toLowerCase()) {
        return null
      }
      var n = Ji.heatmap.getDomSelector(e)
      if (n) {
        var r = $(n + t)
        return r || null
      }
      Ce("----custom---获取同级属性元素失败，selector信息异常", n, t)
      return null
    },
    getProp: function (e, t) {
      if (!n(e)) {
        return false
      }
      if (!(p(e.name) && e.name.length > 0)) {
        Ce("----vcustom----属性名不合法,属性抛弃", e.name)
        return false
      }
      var r
      var i
      var o = {}
      if ("content" === e.method) {
        var a
        if (p(e.element_selector) && e.element_selector.length > 0) {
          a = $(e.element_selector)
        } else {
          if (!t || !p(e.list_selector)) {
            Ce("----vcustom----属性配置异常，属性抛弃", e.name)
            return false
          }
          var s = $(t.properties.$element_selector)
          if (!s) {
            Ce("----vcustom----点击元素获取异常，属性抛弃", e.name)
            return false
          }
          var u = Ji.heatmap.getClosestLi(s)
          a = Bo.getPropElInLi(u, e.list_selector)
        }
        if (!a || !v(a)) {
          Ce("----vcustom----属性元素获取失败，属性抛弃", e.name)
          return false
        }
        if ("input" === a.tagName.toLowerCase()) {
          r = a.value || ""
        } else if ("select" === a.tagName.toLowerCase()) {
          var /* [auto-meaningful-name] */a$selectedIndex = a.selectedIndex
          if (fe(a$selectedIndex) && v(a[a$selectedIndex])) {
            r = Qe(a[a$selectedIndex], "select")
          }
        } else {
          r = Qe(a, a.tagName.toLowerCase())
        }
        if (e.regular) {
          try {
            i = new RegExp(e.regular).exec(r)
          } catch (l) {
            Ce("----vcustom----正则处理失败，属性抛弃", e.name)
            return false
          }
          if (null === i) {
            Ce("----vcustom----属性规则处理，未匹配到结果,属性抛弃", e.name)
            return false
          }
          if (!_(i) || !p(i[0])) {
            Ce("----vcustom----正则处理异常，属性抛弃", e.name, i)
            return false
          }
          r = i[0]
        }
        if ("STRING" === e.type) {
          o[e.name] = r
        } else if ("NUMBER" === e.type) {
          if (r.length < 1) {
            Ce("----vcustom----未获取到数字内容，属性抛弃", e.name, r)
            return false
          }
          if (isNaN(Number(r))) {
            Ce("----vcustom----数字类型属性转换失败，属性抛弃", e.name, r)
            return false
          }
          o[e.name] = Number(r)
        }
        return o
      }
      Ie("----vcustom----属性不支持此获取方式", e.name, e.method)
      return false
    },
    getAssignConfigs: function (e, t) {
      var r = Bo.initUrl()
      if (!r || !r.page_url) {
        return []
      }
      if (!n(t)) {
        return []
      }
      var i = []
      t.events = t.events || t.eventList
      return _(t.events) && t.events.length > 0 ? (O(t.events, function (t) {
        if (n(t) && n(t.event) && t.event.url_host === r.page_url.host && t.event.url_path === r.page_url.pathname && e(t)) {
          i.push(t)
        }
      }), i) : []
    }
  }
  var Ho = {
    events: [],
    getAssignConfigs: Bo.getAssignConfigs,
    filterConfig: Bo.filterConfig,
    getProp: Bo.getProp,
    initUrl: Bo.initUrl,
    updateEvents: function (e) {
      if (_(e)) {
        this.events = e
      }
    },
    init: function () {
      this.initAppGetPropsBridge()
    },
    geth5Props: function (e) {
      var t = {}
      var r = []
      var i = this
      if (!this.events.length) {
        return {}
      }
      if ("$WebClick" === e.event) {
        var o = this.filterConfig(e, this.events)
        if (!o.length) {
          return {}
        }
        O(o, function (o) {
          if (n(o)) {
            if (_(o.properties) && o.properties.length > 0) {
              O(o.properties, function (r) {
                if (n(r)) {
                  if (false === r.h5) {
                    if (!_(t.sensorsdata_app_visual_properties)) {
                      t.sensorsdata_app_visual_properties = []
                    }
                    t.sensorsdata_app_visual_properties.push(r)
                  } else {
                    var o = i.getProp(r, e)
                    if (n(o)) {
                      t = E(t, o)
                    }
                  }
                }
              })
            }
            if (p(o.event_name)) {
              r.push(o.event_name)
            }
          }
        })
        if (Ji.bridge.hasVisualModeBridge()) {
          t.sensorsdata_web_visual_eventName = r
        }
      }
      if (t.sensorsdata_app_visual_properties) {
        t.sensorsdata_app_visual_properties = P(JSON.stringify(t.sensorsdata_app_visual_properties))
      }
      return t
    },
    initAppGetPropsBridge: function () {
      var e = this
      var t = new Ji.SDKJSBridge("getJSVisualProperties")
      t.onAppNotify(function (r) {
        var i = {}
        try {
          r = JSON.parse(j(r))
        } catch (a) {
          Ie("getJSVisualProperties data parse error!")
        }
        if (n(r)) {
          var /* [auto-meaningful-name] */r$sensorsdata_js_visual_properties = r.sensorsdata_js_visual_properties
          var s = e.initUrl()
          if (s) {
            s = s.page_url
            if (_(r$sensorsdata_js_visual_properties) && r$sensorsdata_js_visual_properties.length > 0) {
              O(r$sensorsdata_js_visual_properties, function (t) {
                if (n(t) && t.url_host === s.host && t.url_path === s.pathname && t.h5) {
                  var r = e.getProp(t)
                  if (n(r)) {
                    i = E(i, r)
                  }
                }
              })
            }
          }
        }
        if ("android" === Ji.bridge.bridge_info.platform) {
          t.notifyApp({
            data: i
          }, r.message_id)
        }
        return i
      })
      return t
    }
  }
  var Fo = {
    events: [],
    customProp: Ho,
    getAssignConfigs: Bo.getAssignConfigs,
    initUrl: Bo.initUrl,
    init: function () {
      if (this.initUrl()) {
        var e = this.getConfigFromApp()
        if (e) {
          this.updateConfigs(e)
        }
        this.customProp.init()
        this.initAppUpdateConfigBridge()
      }
    },
    initAppUpdateConfigBridge: function () {
      var e = this
      return new Ji.SDKJSBridge("updateH5VisualConfig").onAppNotify(function (t) {
        if (t) {
          try {
            t = JSON.parse(j(t))
          } catch (n) {
            return void Ie("updateH5VisualConfig result parse error！")
          }
          e.updateConfigs(t)
        }
      })
    },
    getConfigFromApp: function () {
      var e = new Ji.SDKJSBridge("sensorsdata_get_app_visual_config").notifyApp()
      if (e) {
        try {
          e = JSON.parse(j(e))
        } catch (t) {
          e = null
          Ie("getAppVisualConfig result parse error！")
        }
      }
      return e
    },
    updateConfigs: function (e) {
      this.events = this.filterConfigs(e)
      this.customProp.updateEvents(this.events)
    },
    filterConfigs: function (e) {
      return this.getAssignConfigs(function (e) {
        return !(!n(e) || false === e.h5)
      }, e)
    }
  }
  var $o = {
    events: [],
    init: function (e) {
      this.filterWebClickEvents(e)
    },
    filterWebClickEvents: function (e) {
      this.events = qo.getAssignConfigs(function (e) {
        return !(!n(e) || true !== e.event.unlimited_div || "webclick" !== e.event_type)
      }, e)
    },
    isTargetEle: function (e) {
      var t = Ji.heatmap.getEleDetail(e)
      if (!n(t) || !p(t.$element_path)) {
        return false
      }
      for (var r = 0; r < this.events.length; r++) {
        if (n(this.events[r]) && n(this.events[r].event) && qo.configIsMatch(t, this.events[r].event)) {
          return true
        }
      }
      return false
    }
  }
  var zo = {
    events: [],
    configSwitch: false,
    collectAble: function () {
      return this.configSwitch && n(Ji.para.heatmap) && Ji.para.heatmap.get_vtrack_config
    },
    updateEvents: function (e) {
      this.events = qo.getAssignConfigs(function (e) {
        return !!(n(e) && _(e.properties) && e.properties.length > 0)
      }, e)
      if (this.events.length) {
        this.configSwitch = true
      } else {
        this.configSwitch = false
      }
    },
    getVtrackProps: function (e) {
      var t = {}
      return this.collectAble() ? ("$WebClick" === e.event && (t = this.clickCustomPropMaker(e, this.events)), t) : {}
    },
    clickCustomPropMaker: function (e, t, r) {
      var i = this
      r = r || this.filterConfig(e, t, qo.url_info.page_url)
      var o = {}
      return r.length ? (O(r, function (t) {
        if (_(t.properties) && t.properties.length > 0) {
          O(t.properties, function (t) {
            var r = i.getProp(t, e)
            if (n(r)) {
              E(o, r)
            }
          })
        }
      }), o) : {}
    },
    getProp: Bo.getProp,
    getPropElInLi: Bo.getPropElInLi,
    filterConfig: Bo.filterConfig
  }
  var qo = {
    unlimitedDiv: $o,
    config: {},
    storageEnable: true,
    storage_name: "webjssdkvtrackcollect",
    para: {
      session_time: 18e5,
      timeout: 5e3,
      update_interval: 18e5
    },
    url_info: {},
    timer: null,
    update_time: null,
    customProp: zo,
    initUrl: function () {
      var e = Bo.initUrl()
      if (e) {
        var t
        try {
          (t = new h(Ji.para.server_url))._values.Path = "/config/visualized/Web.conf"
          e.api_url = t.getUrl()
        } catch (n) {
          Ie("----vtrackcollect---API地址解析异常", n)
          return false
        }
        this.url_info = e
      }
      return e
    },
    init: function () {
      if (!n(Ji.para.heatmap) || !Ji.para.heatmap.get_vtrack_config) {
        return false
      }
      if (!Qi.isSupport()) {
        this.storageEnable = false
      }
      if (!this.initUrl()) {
        Ie("----vtrackcustom----初始化失败，url信息解析失败")
        return false
      }
      if (this.storageEnable) {
        var e = Lo.readObjectVal(this.storage_name)
        if (n(e) && n(e.data)) {
          if (this.serverUrlIsSame(e.serverUrl)) {
            this.config = e.data
            this.update_time = e.updateTime
            this.updateConfig(e.data)
            var t = new Date().getTime() - this.update_time
            if (fe(t) && t > 0 && t < this.para.session_time) {
              var r = this.para.update_interval - t
              this.setNextFetch(r)
            } else {
              this.getConfigFromServer()
            }
          } else {
            this.getConfigFromServer()
          }
        } else {
          this.getConfigFromServer()
        }
      } else {
        this.getConfigFromServer()
      }
      this.pageStateListenner()
    },
    serverUrlIsSame: function (e) {
      return !!n(e) && e.host === this.url_info.server_url.host && e.project === this.url_info.server_url.project
    },
    getConfigFromServer: function () {
      var e = this
      var t = function (t, r) {
        e.update_time = new Date().getTime()
        var i = {}
        if (200 === t) {
          if (r && n(r) && "Web" === r.os) {
            i = r
            e.updateConfig(i)
          }
        } else {
          if (205 === t) {
            e.updateConfig(i)
          } else {
            if (304 === t) {
              i = e.config
            } else {
              Ie("----vtrackcustom----数据异常", t)
              e.updateConfig(i)
            }
          }
        }
        e.updateStorage(i)
        e.setNextFetch()
      }
      var r = function (t) {
        e.update_time = new Date().getTime()
        Ie("----vtrackcustom----配置拉取失败", t)
        e.setNextFetch()
      }
      this.sendRequest(t, r)
    },
    setNextFetch: function (e) {
      var t = this
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      e = e || this.para.update_interval
      this.timer = setTimeout(function () {
        t.getConfigFromServer()
      }, e)
    },
    pageStateListenner: function () {
      var e = this
      ge({
        visible: function () {
          var t = new Date().getTime() - e.update_time
          if (fe(t) && t > 0 && t < e.para.update_interval) {
            var n = e.para.update_interval - t
            e.setNextFetch(n)
          } else {
            e.getConfigFromServer()
          }
        },
        hidden: function () {
          if (e.timer) {
            clearTimeout(e.timer)
            e.timer = null
          }
        }
      })
    },
    updateConfig: function (e) {
      return !!n(e) && (this.config = e, this.customProp.updateEvents(e), void this.unlimitedDiv.init(e))
    },
    updateStorage: function (e) {
      if (!this.storageEnable) {
        return false
      }
      if (!n(e)) {
        return false
      }
      var t
      if (this.url_info.server_url) {
        t = this.url_info.server_url
      } else {
        var r = qo.initUrl()
        if (!r) {
          return false
        }
        t = r.server_url
      }
      var i = {
        updateTime: new Date().getTime(),
        data: e,
        serverUrl: t
      }
      Lo.saveObjectVal(this.storage_name, i)
    },
    sendRequest: function (e, t) {
      var n = this
      var r = {
        app_id: this.url_info.page_url.host
      }
      if (this.config.version) {
        r.v = this.config.version
      }
      he({
        url: n.url_info.api_url,
        callbackName: "saJSSDKVtrackCollectConfig",
        data: r,
        timeout: n.para.timeout,
        success: function (t, n) {
          e(t, n)
        },
        error: function (e) {
          t(e)
        }
      })
    },
    getAssignConfigs: Bo.getAssignConfigs,
    configIsMatch: Bo.configIsMatch
  }
  var Vo = {
    stage: null,
    init: function (e) {
      this.stage = e
    },
    interceptor: {
      basicProps: {
        priority: 0,
        entry: gt
      },
      formatData: {
        priority: 0,
        entry: dt
      },
      finalAdjustData: {
        priority: 0,
        entry: ht
      }
    }
  }
  var Go = {}
  Go.check = ot
  Go.sendItem = function (e) {
    var t = {
      lib: {
        $lib: "js",
        $lib_method: "code",
        $lib_version: String(Ji.lib_version)
      },
      time: 1 * new Date()
    }
    E(t, e)
    vt(t)
    Ji.kit.sendData(t)
  }
  Go.send = function (e, t) {
    var n = Ji.kit.buildData(e)
    Ji.kit.sendData(n, t)
  }
  var Wo = {
    stage: null,
    init: function (e) {
      this.stage = e
    }
  }
  var Ko = {
    label: false,
    li: false,
    a: true,
    button: true
  }
  var Jo = {
    otherTags: [],
    initUnlimitedTags: function () {
      O(Jo.otherTags, function (e) {
        if (e in Ko) {
          Ko[e] = true
        }
      })
    },
    isUnlimitedTag: function (e) {
      if (!e || 1 !== e.nodeType) {
        return false
      }
      var t = e.nodeName.toLowerCase()
      return Ko[t] || ee(e, Ji.para.heatmap.track_attr)
    },
    getTargetElement: function (e, t) {
      var n = this
      var r = e
      if ("object" != typeof r) {
        return null
      }
      if ("string" != typeof r.tagName) {
        return null
      }
      var i = r.tagName.toLowerCase()
      if ("body" === i.toLowerCase() || "html" === i.toLowerCase()) {
        return null
      }
      if (!r || !r.parentNode || !r.parentNode.children) {
        return null
      }
      var /* [auto-meaningful-name] */r$parentNode = r.parentNode
      var /* [auto-meaningful-name] */n$otherTags = n.otherTags
      if ("a" === i || "button" === i || "input" === i || "textarea" === i) {
        return r
      }
      if (re(n$otherTags, i) > -1) {
        return r
      }
      if ("area" === i && "map" === r$parentNode.tagName.toLowerCase() && b(r$parentNode).prev().tagName && "img" === b(r$parentNode).prev().tagName.toLowerCase()) {
        return b(r$parentNode).prev()
      }
      if ("div" === i && Ji.para.heatmap.collect_tags.div && n.isDivLevelValid(r) && ((Ji.para.heatmap && Ji.para.heatmap.collect_tags && Ji.para.heatmap.collect_tags.div && Ji.para.heatmap.collect_tags.div.max_level || 1) > 1 || n.isCollectableDiv(r))) {
        return r
      }
      if (n.isStyleTag(i) && Ji.para.heatmap.collect_tags.div) {
        var s = n.getCollectableParent(r)
        if (s && n.isDivLevelValid(s)) {
          return s
        }
      }
      var u = n.hasElement({
        event: t && t.originalEvent || t,
        element: e
      }, function (e) {
        return n.isUnlimitedTag(e)
      })
      return u || null
    },
    getDivLevels: function (e, t) {
      var n = Jo.getElementPath(e, true, t).split(" > ")
      var r = 0
      O(n, function (e) {
        if ("div" === e) {
          r++
        }
      })
      return r
    },
    isDivLevelValid: function (e) {
      for (var t = Ji.para.heatmap && Ji.para.heatmap.collect_tags && Ji.para.heatmap.collect_tags.div && Ji.para.heatmap.collect_tags.div.max_level || 1, n = e.getElementsByTagName("div"), r = n.length - 1; r >= 0; r--) {
        if (Jo.getDivLevels(n[r], e) > t) {
          return false
        }
      }
      return true
    },
    getElementPath: function (e, t, n) {
      for (var r = []; e.parentNode && v(e);) {
        if (!p(e.tagName)) {
          return "unknown"
        }
        if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
          r.unshift(e.tagName.toLowerCase() + "#" + e.id)
          break
        }
        if (n && e === n) {
          r.unshift(e.tagName.toLowerCase())
          break
        }
        if (e === document.body) {
          r.unshift("body")
          break
        }
        r.unshift(e.tagName.toLowerCase())
        e = e.parentNode
      }
      return r.join(" > ")
    },
    getClosestLi: function (e) {
      var t = function (e, t) {
        for (; e && e !== document && 1 === e.nodeType; e = e.parentNode) {
          if (e.tagName && p(e.tagName) && e.tagName.toLowerCase() === t) {
            return e
          }
        }
        return null
      }
      return t(e, "li")
    },
    getElementPosition: function (e, t, n) {
      function r(e) {
        if (!e.parentNode) {
          return ""
        }
        if (1 === b(e).getSameTypeSiblings().length) {
          return 0
        }
        for (var t = 0, n = e; b(n).previousElementSibling().ele; n = b(n).previousElementSibling().ele, t++) {
          ;
        }
        return t
      }
      var i = Ji.heatmap.getClosestLi(e)
      if (!i || !v(e) || !p(e.tagName)) {
        return null
      }
      var o = e.tagName.toLowerCase()
      var a = i.getElementsByTagName(o)
      var /* [auto-meaningful-name] */a$length = a.length
      var u = []
      if (a$length > 1) {
        for (var c = 0; c < a$length; c++) {
          if (Ji.heatmap.getElementPath(a[c], n) === t) {
            u.push(a[c])
          }
        }
        if (u.length > 1) {
          return re(u, e)
        }
      }
      return r(i)
    },
    setNotice: function (e) {
      Ji.is_heatmap_render_mode = true
      if (!Ji.para.heatmap) {
        Ji.errorMsg = "您 SDK 没有配置开启点击图 ！"
      }
      if (e && "http:" === e.slice(0, 5) && "https:" === location.protocol) {
        Ji.errorMsg = "您的当前页面是 https 的地址，神策分析环境也必须是 https ！"
      }
      if (!Ji.para.heatmap_url) {
        Ji.para.heatmap_url = _t() + "//static.sensorsdata.cn/sdk/" + Ji.lib_version + "/heatmap.min.js"
      }
    },
    getDomIndex: function (e) {
      if (!e.parentNode) {
        return -1
      }
      for (var t = 0, /* [auto-meaningful-name] */e$tagName = e.tagName, /* [auto-meaningful-name] */e$parentNode$children = e.parentNode.children, i = 0; i < e$parentNode$children.length; i++) {
        if (e$parentNode$children[i].tagName === e$tagName) {
          if (e === e$parentNode$children[i]) {
            return t
          }
          t++
        }
      }
      return -1
    },
    selector: function (e, t) {
      if (!e || !v(e) || !p(e.tagName)) {
        return ""
      }
      var n = e.parentNode && 9 == e.parentNode.nodeType ? -1 : this.getDomIndex(e)
      return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!Ji.para.heatmap || Ji.para.heatmap && "not_use_id" !== Ji.para.heatmap.element_selector) && !t ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~n ? ":nth-of-type(" + (n + 1) + ")" : "")
    },
    getDomSelector: function (e, t, n) {
      if (!(e && e.parentNode && e.parentNode.children && p(e.tagName))) {
        return "unknown"
      }
      t = t && t.join ? t : []
      var r = e.nodeName.toLowerCase()
      return e && "body" !== r && 1 == e.nodeType ? (t.unshift(this.selector(e, n)), e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && Ji.para.heatmap && "not_use_id" !== Ji.para.heatmap.element_selector && !n ? t.join(" > ") : this.getDomSelector(e.parentNode, t, n)) : (t.unshift("body"), t.join(" > "))
    },
    na: function () {
      var e = document.documentElement.scrollLeft || window.pageXOffset
      return parseInt(isNaN(e) ? 0 : e, 10)
    },
    i: function () {
      var e = 0
      try {
        e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset
        e = isNaN(e) ? 0 : e
      } catch (t) {
        e = 0
      }
      return parseInt(e, 10)
    },
    getBrowserWidth: function () {
      var e = window.innerWidth || document.body.clientWidth
      return isNaN(e) ? 0 : parseInt(e, 10)
    },
    getBrowserHeight: function () {
      var e = window.innerHeight || document.body.clientHeight
      return isNaN(e) ? 0 : parseInt(e, 10)
    },
    getScrollWidth: function () {
      var e = parseInt(document.body.scrollWidth, 10)
      return isNaN(e) ? 0 : e
    },
    getEleDetail: function (e) {
      var t = this.getDomSelector(e)
      var n = Ye({
        target: e
      })
      n.$element_selector = t || ""
      n.$element_path = Ji.heatmap.getElementPath(e, Ji.para.heatmap && "not_use_id" === Ji.para.heatmap.element_selector)
      var r = Ji.heatmap.getElementPosition(e, n.$element_path, Ji.para.heatmap && "not_use_id" === Ji.para.heatmap.element_selector)
      if (fe(r)) {
        n.$element_position = r
      }
      return n
    },
    getPointerEventProp: function (e, t) {
      function n() {
        return {
          scrollLeft: document.body.scrollLeft || document.documentElement.scrollLeft || 0,
          scrollTop: document.body.scrollTop || document.documentElement.scrollTop || 0
        }
      }
      function r(e) {
        if (document.documentElement.getBoundingClientRect) {
          var t = e.getBoundingClientRect()
          return {
            targetEleX: t.left + n().scrollLeft || 0,
            targetEleY: t.top + n().scrollTop || 0
          }
        }
      }
      function i(e) {
        return Number(Number(e).toFixed(3))
      }
      function o(e) {
        var o = e.pageX || e.clientX + n().scrollLeft || e.offsetX + r(t).targetEleX || 0
        var a = e.pageY || e.clientY + n().scrollTop || e.offsetY + r(t).targetEleY || 0
        return {
          $page_x: i(o),
          $page_y: i(a)
        }
      }
      return e ? o(e) : {}
    },
    start: function (t, r, i, o, a) {
      if (n(Ji.para.heatmap) && e(Ji.para.heatmap.collect_element) && !Ji.para.heatmap.collect_element(r)) {
        return false
      }
      bt(Jo.getBasicEleInfo(t, r, i, o, a))
    },
    getBasicEleInfo: function (t, r, i, o, a) {
      var s = n(o) ? o : {}
      var u = e(a) ? a : e(o) ? o : undefined
      var c = this.getEleDetail(r)
      if (Ji.para.heatmap && Ji.para.heatmap.custom_property) {
        var l = Ji.para.heatmap.custom_property(r)
        if (n(l)) {
          c = E(c, l)
        }
      }
      return {
        event: t,
        target: r,
        props: c = E(c, this.getPointerEventProp(t, r), s),
        tagName: i,
        callback: u
      }
    },
    hasElement: function (e, t) {
      var n
      if (e.event) {
        var /* [auto-meaningful-name] */e$event = e.event
        n = e$event.path || e$event._getPath && e$event._getPath()
      } else if (e.element) {
        n = b(e.element).getParents()
      }
      if (n && _(n) && n.length > 0) {
        for (var i = 0; i < n.length; i++) {
          if ("object" == typeof n[i] && 1 === n[i].nodeType && t(n[i])) {
            return n[i]
          }
        }
      }
    },
    isStyleTag: function (e, t) {
      var r = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"]
      return !(re(["a", "div", "input", "button", "textarea"], e) > -1) && (!t || Ji.para.heatmap && Ji.para.heatmap.collect_tags && Ji.para.heatmap.collect_tags.div ? !!(n(Ji.para.heatmap) && n(Ji.para.heatmap.collect_tags) && n(Ji.para.heatmap.collect_tags.div) && _(Ji.para.heatmap.collect_tags.div.ignore_tags) && re(Ji.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : re(r, e) > -1)
    },
    isCollectableDiv: function (e, t) {
      try {
        if (0 === e.children.length) {
          return true
        }
        for (var n = 0; n < e.children.length; n++) {
          if (1 === e.children[n].nodeType) {
            var r = p(e.children[n].tagName) ? e.children[n].tagName.toLowerCase() : "unknown"
            var i = Ji.para && Ji.para.heatmap && Ji.para.heatmap.collect_tags && Ji.para.heatmap.collect_tags.div && Ji.para.heatmap.collect_tags.div.max_level
            if (!("div" === r && i > 1 || this.isStyleTag(r, t))) {
              return false
            }
            if (!this.isCollectableDiv(e.children[n], t)) {
              return false
            }
          }
        }
        return true
      } catch (a) {
        Ie("isCollectableDiv:" + a)
      }
      return false
    },
    getCollectableParent: function (e, t) {
      try {
        var /* [auto-meaningful-name] */e$parentNode = e.parentNode
        var r = e$parentNode ? e$parentNode.tagName.toLowerCase() : ""
        if ("body" === r) {
          return false
        }
        var i = Ji.para && Ji.para.heatmap && Ji.para.heatmap.collect_tags && Ji.para.heatmap.collect_tags.div && Ji.para.heatmap.collect_tags.div.max_level
        if (r && "div" === r && (i > 1 || this.isCollectableDiv(e$parentNode, t))) {
          return e$parentNode
        }
        if (e$parentNode && this.isStyleTag(r, t)) {
          return this.getCollectableParent(e$parentNode, t)
        }
      } catch (a) {
        Ie("getCollectableParent:" + a)
      }
      return false
    },
    listenUrlChange: function (e) {
      e()
      Ji.ee.spa.on("switch", function () {
        e()
      })
    },
    initScrollmap: function () {
      if (!n(Ji.para.heatmap) || "default" !== Ji.para.heatmap.scroll_notice_map) {
        return false
      }
      var t = true
      if (Ji.para.scrollmap && e(Ji.para.scrollmap.collect_url)) {
        this.listenUrlChange(function () {
          t = !!Ji.para.scrollmap.collect_url()
        })
      }
      var r = function (e) {
        var t = {}
        t.timeout = e.timeout || 1e3
        t.func = e.func
        t.hasInit = false
        t.inter = null
        t.main = function (e, t) {
          this.func(e, t)
          this.inter = null
        }
        t.go = function (e) {
          var n = {}
          if (!this.inter) {
            n.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0
            n.$viewport_position = Math.round(n.$viewport_position) || 0
            if (e) {
              t.main(n, true)
            } else {
              this.inter = setTimeout(function () {
                t.main(n)
              }, this.timeout)
            }
          }
        }
        return t
      }
      var i = r({
        timeout: 1e3,
        func: function (e, t) {
          var n = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0
          var r = new Date()
          var i = r - this.current_time
          if (i > Ji.para.heatmap.scroll_delay_time && n - e.$viewport_position !== 0 || t) {
            e.$url = X()
            e.$title = document.title
            e.$url_path = Q()
            e.event_duration = Math.min(Ji.para.heatmap.scroll_event_duration, parseInt(i) / 1e3)
            e.event_duration = e.event_duration < 0 ? 0 : e.event_duration
            wt(e)
          }
          this.current_time = r
        }
      })
      i.current_time = new Date()
      Le(window, "scroll", function () {
        return !!t && void i.go()
      })
      Le(window, "beforeunload", function () {
        return !!t && void i.go("notime")
      })
    },
    initHeatmap: function () {
      var t = this
      var r = true
      return !(!n(Ji.para.heatmap) || "default" !== Ji.para.heatmap.clickmap) && (e(Ji.para.heatmap.collect_url) && this.listenUrlChange(function () {
        r = !!Ji.para.heatmap.collect_url()
      }), "all" === Ji.para.heatmap.collect_elements ? Ji.para.heatmap.collect_elements = "all" : Ji.para.heatmap.collect_elements = "interact", void ("all" === Ji.para.heatmap.collect_elements ? Le(document, "click", function (e) {
        if (!r) {
          return false
        }
        var n = e || window.event
        if (!n) {
          return false
        }
        var i = n.target || n.srcElement
        if ("object" != typeof i) {
          return false
        }
        if ("string" != typeof i.tagName) {
          return false
        }
        var o = i.tagName.toLowerCase()
        if ("body" === o || "html" === o) {
          return false
        }
        if (!i || !i.parentNode || !i.parentNode.children) {
          return false
        }
        var a = p(i.parentNode.tagName) ? i.parentNode.tagName.toLowerCase() : "unknown"
        if ("a" === a || "button" === a) {
          t.start(n, i.parentNode, a)
        } else {
          t.start(n, i, o)
        }
      }) : Le(document, "click", function (e) {
        if (!r) {
          return false
        }
        var i = e || window.event
        if (!i) {
          return false
        }
        var o = i.target || i.srcElement
        var a = Ji.heatmap.getTargetElement(o, e)
        return !(!v(a) && !p(o.tagName)) && void (v(a) && p(a.tagName) ? t.start(i, a, a.tagName.toLowerCase()) : v(o) && "div" === o.tagName.toLowerCase() && n(Ji.para.heatmap) && Ji.para.heatmap.get_vtrack_config && $o.events.length > 0 && $o.isTargetEle(o) && t.start(i, o, o.tagName.toLowerCase(), {
          $lib_method: "vtrack"
        }))
      })))
    }
  }
  var Yo = {
    autoTrackIsUsed: false,
    isReady: function (t) {
      return e(t) ? void t() : void Ji.log("error: isReady callback must be function")
    },
    getUtm: function () {
      return Eo.campaignParams()
    },
    getStayTime: function () {
      return (new Date() - Ji._t) / 1e3
    },
    setProfileLocal: function (e) {
      if (!Qi.isSupport()) {
        Ji.setProfile(e)
        return false
      }
      if (!n(e) || se(e)) {
        return false
      }
      var t = Lo.readObjectVal("sensorsdata_2015_jssdk_profile")
      var r = false
      if (n(t) && !se(t)) {
        for (var i in e) if (!((!(i in t) || t[i] === e[i]) && i in t)) {
          t[i] = e[i]
          r = true
        }
        if (r) {
          Lo.saveObjectVal("sensorsdata_2015_jssdk_profile", t)
          Ji.setProfile(e)
        }
      } else {
        Lo.saveObjectVal("sensorsdata_2015_jssdk_profile", e)
        Ji.setProfile(e)
      }
    },
    setInitReferrer: function () {
      var e = Be()
      Ji.setOnceProfile({
        _init_referrer: e,
        _init_referrer_host: Eo.pageProp.referrer_host
      })
    },
    setSessionReferrer: function () {
      var e = Be()
      Lo.setSessionPropsOnce({
        _session_referrer: e,
        _session_referrer_host: Eo.pageProp.referrer_host
      })
    },
    setDefaultAttr: function () {
      Eo.register({
        _current_url: location.href,
        _referrer: Be(),
        _referring_host: Eo.pageProp.referrer_host
      })
    },
    trackHeatMap: function (e, t, n) {
      if ("object" == typeof e && e.tagName && v(e.parentNode)) {
        var r = e.tagName.toLowerCase()
        var i = e.parentNode.tagName.toLowerCase()
        var o = Ji.para.heatmap && Ji.para.heatmap.track_attr ? Ji.para.heatmap.track_attr : ["data-sensors-click"]
        if (!("button" === r || "a" === r || "a" === i || "button" === i || "input" === r || "textarea" === r || ee(e, o))) {
          Jo.start(null, e, r, t, n)
        }
      }
    },
    trackAllHeatMap: function (e, t, n) {
      if ("object" == typeof e && e.tagName) {
        var r = e.tagName.toLowerCase()
        Jo.start(null, e, r, t, n)
      }
    },
    autoTrackSinglePage: function (e, t) {
      function r(e, t) {
        Ji.track("$pageview", E({
          $referrer: i,
          $url: X(),
          $url_path: Q(),
          $title: document.title
        }, e, St()), t)
        i = X()
      }
      var i
      i = this.autoTrackIsUsed ? Eo.pageProp.url : Eo.pageProp.referrer
      var o = !(e = n(e) ? e : {}).not_set_profile
      if (e.not_set_profile) {
        delete e.not_set_profile
      }
      r(e, t)
      this.autoTrackSinglePage = r
      kt(Ji.setOnceProfile, false, o)
    },
    autoTrackWithoutProfile: function (e, t) {
      e = n(e) ? e : {}
      this.autoTrack(E(e, {
        not_set_profile: true
      }), t)
    },
    autoTrack: function (e, t) {
      e = n(e) ? e : {}
      var r = St()
      var i = !e.not_set_profile
      if (e.not_set_profile) {
        delete e.not_set_profile
      }
      var /* [auto-meaningful-name] */location$href = location.href
      if (Ji.para.is_single_page) {
        S(function () {
          var n = Be(location$href, true)
          Ji.track("$pageview", E({
            $referrer: n,
            $url: X(),
            $url_path: Q(),
            $title: document.title
          }, r, e), t)
          location$href = X()
        })
      }
      Ji.track("$pageview", E({
        $referrer: Be(null, true),
        $url: X(),
        $url_path: Q(),
        $title: document.title
      }, r, e), t)
      kt(Ji.setOnceProfile, true, i)
      this.autoTrackIsUsed = true
    },
    getAnonymousID: function () {
      return se(Lo._state) ? "SDK is not initialized." : Lo.getAnonymousId()
    },
    setPlugin: function (t) {
      return !!n(t) && void O(t, function (t, r) {
        if (e(t)) {
          if (n(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[r]) {
            t(window.SensorsDataWebJSSDKPlugin[r])
          } else {
            if (n(Ji.modules) && Ji.modules[r]) {
              t(Ji.modules[r])
            } else {
              Ce(r + "is not found,please check sensorsdata documents.")
            }
          }
        }
      })
    },
    useModulePlugin: function () {
      Ji.use.apply(Ji, arguments)
    },
    useAppPlugin: function () {
      this.setPlugin.apply(this, arguments)
    }
  }
  var Xo = {
    state: 0,
    historyState: [],
    stateType: {
      1: "1-init未开始",
      2: "2-init开始",
      3: "3-store完成"
    },
    getState: function () {
      return this.historyState.join("\n")
    },
    setState: function (e) {
      if (String(e) in this.stateType) {
        this.state = e
      }
      this.historyState.push(this.stateType[e])
    }
  }
  var Qo = 1
  var Zo = {
    __proto__: null,
    setInitVar: xt,
    initPara: jt,
    quick: Pt,
    use: Ct,
    track: It,
    bind: Nt,
    unbind: At,
    trackLink: Rt,
    trackLinks: Lt,
    setItem: Dt,
    deleteItem: Mt,
    setProfile: Ut,
    setOnceProfile: Bt,
    appendProfile: Ht,
    incrementProfile: Ft,
    deleteProfile: $t,
    unsetProfile: zt,
    identify: qt,
    resetAnonymousIdentity: Vt,
    trackSignup: Wt,
    registerPage: Kt,
    clearAllRegister: Jt,
    clearPageRegister: Yt,
    register: Xt,
    registerOnce: Qt,
    registerSession: Zt,
    registerSessionOnce: en,
    login: tn,
    loginWithKey: nn,
    logout: rn,
    getPresetProperties: on,
    readyState: Xo,
    debug: Oo,
    on: rt,
    log: Pe
  }
  Xi.setup(Pe)
  var ea = E({}, co, Ao)
  var ta = {
    bridge_info: {
      touch_app_bridge: false,
      verify_success: false,
      platform: "",
      support_two_way_call: false
    },
    is_verify_success: false,
    initPara: function () {
      var e = {
        is_send: false !== Ji.para.use_app_track_is_send && "only" !== Ji.para.use_app_track,
        white_list: [],
        is_mui: "mui" === Ji.para.use_app_track
      }
      if ("object" == typeof Ji.para.app_js_bridge) {
        Ji.para.app_js_bridge = E({}, e, Ji.para.app_js_bridge)
      } else {
        if (!(true !== Ji.para.use_app_track && true !== Ji.para.app_js_bridge && "only" !== Ji.para.use_app_track && "mui" !== Ji.para.use_app_track)) {
          Ji.para.app_js_bridge = E({}, e)
        }
      }
      if (false === Ji.para.app_js_bridge.is_send) {
        Ce("设置了 is_send:false,如果打通失败，数据将被丢弃!")
      }
    },
    app_js_bridge_v1: function () {
      function e(e) {
        if (le(r = e)) {
          r = JSON.parse(r)
        }
        if (i) {
          i(r)
          i = null
          r = null
        }
      }
      function t() {
        if ("object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && le(r = window.SensorsData_APP_JS_Bridge.sensorsdata_call_app())) {
          r = JSON.parse(r)
        }
      }
      function n() {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
          var e = document.createElement("iframe")
          e.setAttribute("src", "sensorsanalytics://getAppInfo")
          document.documentElement.appendChild(e)
          e.parentNode.removeChild(e)
          e = null
        }
      }
      var r = null
      var i = null
      window.sensorsdata_app_js_bridge_call_js = function (t) {
        e(t)
      }
      Ji.getAppStatus = function (e) {
        n()
        t()
        return e ? void (null === r ? i = e : (e(r), r = null)) : r
      }
    },
    hasVisualModeBridge: function () {
      var /* [auto-meaningful-name] */window$SensorsData_App_Visual_Bridge = window.SensorsData_App_Visual_Bridge
      var /* [auto-meaningful-name] */Sensorsdata_visualized_mode = "sensorsdata_visualized_mode"
      return n(window$SensorsData_App_Visual_Bridge) && window$SensorsData_App_Visual_Bridge[Sensorsdata_visualized_mode] && (true === window$SensorsData_App_Visual_Bridge[Sensorsdata_visualized_mode] || window$SensorsData_App_Visual_Bridge[Sensorsdata_visualized_mode]())
    },
    validateAppUrl: cn
  }
  sn.prototype.call = function (e, t) {
    var n = this
    var i = new Date().getTime().toString(16) + String(r()).replace(".", "").slice(1, 8)
    this.resultCbs[i] = n.resultCbs[i] || {
      result: null,
      callbacks: []
    }
    this.timeoutCbs[i] = n.timeoutCbs[i] || {
      isTimeout: false,
      callbacks: []
    };
    (e = e.data ? e : {
      data: e
    }).data.message_id = i
    var o = E({
      callType: this.type
    }, e)
    if (t) {
      this.timerId = setTimeout(function () {
        for (var e in n.timeoutCbs[i].isTimeout = true, n.timeoutCbs[i].callbacks) {
          n.timeoutCbs[i].callbacks[e].call(null)
          n.timeoutCbs[i].callbacks.splice(e, 1)
        }
      }, t)
    }
    un(o)
    return {
      onResult: function (e) {
        return n.resultCbs[i].result ? (e(n.resultCbs[i].result), this) : (!n.timeoutCbs[i].isTimeout && n.resultCbs[i].callbacks.push(e), this)
      },
      onTimeout: function (e) {
        return n.timeoutCbs[i].isTimeout ? (e(), this) : (!n.resultCbs[i].result && n.timeoutCbs[i].callbacks.push(e), this)
      }
    }
  }
  sn.prototype.onAppNotify = function (e) {
    this.appCallJsCallback = e
  }
  sn.prototype.notifyApp = function (e, t) {
    var n = E({
      callType: this.type
    }, e)
    if (t) {
      n.message_id = t
    }
    return un(n)
  }
  ln.prototype = {
    double: function () {},
    getAppData: function () {},
    hasAppBridge: function () {
      return Ji.bridge.bridge_info.support_two_way_call
    },
    init: function () {},
    jsCallApp: function () {},
    requestToApp: function (t) {
      this.bridge.call(t, t.timeout.time).onResult(function (n) {
        if (e(t.callback)) {
          t.callback(n)
        }
      }).onTimeout(function () {
        if (e(t.timeout.callback)) {
          t.timeout.callback()
        }
      })
    }
  }
  var na = {
    isSeachHasKeyword: function () {
      return "" !== G(location.href, "sa-request-id") && ("string" == typeof sessionStorage.getItem("sensors-visual-mode") && sessionStorage.removeItem("sensors-visual-mode"), true)
    },
    hasKeywordHandle: function () {
      var /* [auto-meaningful-name] */location$href = location.href
      var t = G(location$href, "sa-request-id") || null
      var n = G(location$href, "sa-request-type") || null
      var r = G(location$href, "sa-request-url") || null
      Jo.setNotice(r)
      if (oo.isSupport()) {
        if (null !== r) {
          sessionStorage.setItem("sensors_heatmap_url", r)
        }
        sessionStorage.setItem("sensors_heatmap_id", t)
        if (null !== n) {
          if ("1" === n || "2" === n || "3" === n) {
            sessionStorage.setItem("sensors_heatmap_type", n)
          } else {
            n = null
          }
        } else {
          var i = sessionStorage.getItem("sensors_heatmap_type")
          n = null !== i ? i : null
        }
      }
      this.isReady(t, n)
    },
    isReady: function (e, t, n) {
      if (Ji.para.heatmap_url && Ji.para.heatmap) {
        me({
          success: function () {
            setTimeout(function () {
              if ("undefined" != typeof sa_jssdk_heatmap_render) {
                sa_jssdk_heatmap_render(Ji, e, t, n)
                if ("object" == typeof console && "function" == typeof console.log) {
                  if (!(Ji.heatmap_version && Ji.heatmap_version === Ji.lib_version)) {
                    Ce("heatmap.js与sensorsdata.js版本号不一致，可能存在风险!")
                  }
                }
              }
            }, 0)
          },
          error: function () {},
          type: "js",
          url: Ji.para.heatmap_url
        })
      } else {
        Ce("没有配置 heatmap 开启点击图，或者没有指定 heatmap_url 的路径")
      }
    },
    isStorageHasKeyword: function () {
      return oo.isSupport() && "string" == typeof sessionStorage.getItem("sensors_heatmap_id")
    },
    storageHasKeywordHandle: function () {
      Jo.setNotice()
      na.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), location.href)
    },
    isWindowNameHasKeyword: function () {
      try {
        var e = JSON.parse(window.name)
        var t = p(e["sa-heatmap-src"]) ? c(e["sa-heatmap-src"]) : null
        return e["sa-request-id"] && p(e["sa-request-id"]) && t === location.href
      } catch (n) {
        return false
      }
    },
    windowNameHasKeywordHandle: function () {
      function e(e) {
        var n = t[e]
        return p(n) ? c(n) : null
      }
      var t = JSON.parse(window.name)
      var n = e("sa-request-id")
      var r = e("sa-request-type")
      var i = e("sa-request-url")
      var o = e("sa-request-language")
      Jo.setNotice(i)
      if (Qi.isSupport() && p(o)) {
        Qi.set("web_sdk_heatmap_language", o)
      }
      if (oo.isSupport()) {
        if (null !== i) {
          sessionStorage.setItem("sensors_heatmap_url", i)
        }
        sessionStorage.setItem("sensors_heatmap_id", n)
        if (null !== r) {
          if ("1" === r || "2" === r || "3" === r) {
            sessionStorage.setItem("sensors_heatmap_type", r)
          } else {
            r = null
          }
        } else {
          r = null !== sessionStorage.getItem("sensors_heatmap_type") ? sessionStorage.getItem("sensors_heatmap_type") : null
        }
      }
      na.isReady(n, r)
    }
  }
  var ra = {
    isStorageHasKeyword: function () {
      return oo.isSupport() && "string" == typeof sessionStorage.getItem("sensors-visual-mode")
    },
    isSearchHasKeyword: function () {
      return (true === pn("sa-visual-mode") || "true" === pn("sa-visual-mode")) && ("string" == typeof sessionStorage.getItem("sensors_heatmap_id") && sessionStorage.removeItem("sensors_heatmap_id"), true)
    },
    loadVtrack: function () {
      me({
        success: function () {},
        error: function () {},
        type: "js",
        url: Ji.para.vtrack_url ? Ji.para.vtrack_url : _t() + "//static.sensorsdata.cn/sdk/" + Ji.lib_version + "/vtrack.min.js"
      })
    },
    messageListener: function (e) {
      if (!e || !e.data || "sa-fe" !== e.data.source) {
        return false
      }
      if ("v-track-mode" === e.data.type) {
        if (e.data.data && e.data.data.isVtrack) {
          if (oo.isSupport()) {
            sessionStorage.setItem("sensors-visual-mode", "true")
          }
          if (e.data.data.userURL && location.href.match(/sa-visual-mode=true/)) {
            var /* [auto-meaningful-name] */e$data$data$userURL = e.data.data.userURL
            if (p(e$data$data$userURL) && (xe(e$data$data$userURL, "http://") || xe(e$data$data$userURL, "https://"))) {
              window.location.href = encodeURI(e$data$data$userURL)
            }
          } else {
            ra.loadVtrack()
          }
        }
        window.removeEventListener("message", ra.messageListener, false)
      }
    },
    removeMessageHandle: function () {
      if (window.removeEventListener) {
        window.removeEventListener("message", ra.messageListener, false)
      }
    },
    verifyVtrackMode: function () {
      if (window.addEventListener) {
        window.addEventListener("message", ra.messageListener, false)
      }
      ra.postMessage()
    },
    postMessage: function () {
      try {
        if (window.parent && window.parent.postMessage) {
          window.parent.postMessage({
            source: "sa-web-sdk",
            type: "v-is-vtrack",
            data: {
              sdkversion: _1$27$4
            }
          }, "*")
        }
      } catch (e) {
        Ie("浏览器版本过低，不支持 postMessage API")
      }
    },
    notifyUser: function () {
      var e = function (t) {
        return !(!t || !t.data || "sa-fe" !== t.data.source) && void ("v-track-mode" === t.data.type && (t.data.data && t.data.data.isVtrack && alert("当前版本不支持，请升级部署神策数据治理"), window.removeEventListener("message", e, false)))
      }
      if (window.addEventListener) {
        window.addEventListener("message", e, false)
      }
      ra.postMessage()
    }
  }
  var ia = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "resetAnonymousIdentity", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister", "bind", "unbind", "loginWithKey"]
  var oa = {
    track: function (e, t, n) {},
    quick: function (e, t, n, r) {},
    register: function (e) {},
    registerPage: function (e) {},
    registerOnce: function (e) {},
    clearAllRegister: function (e) {},
    trackSignup: function (e, t, n, r) {},
    setProfile: function (e, t) {},
    setOnceProfile: function (e, t) {},
    appendProfile: function (e, t) {},
    incrementProfile: function (e, t) {},
    deleteProfile: function (e) {},
    unsetProfile: function (e, t) {},
    identify: function (e, t) {},
    resetAnonymousIdentity: function (e) {},
    login: function (e, t) {},
    logout: function (e) {},
    trackLink: function (e, t, n) {},
    deleteItem: function (e, t) {},
    setItem: function (e, t, n) {},
    getAppStatus: function (e) {},
    clearPageRegister: function (e) {}
  }
  Sn.prototype.process = function (e, t) {
    if (e && e in this.processDef) {
      var n = this.registeredInterceptors[e]
      if (n && _(n) && n.length > 0) {
        for (var r = {
            current: 0,
            total: n.length
          }, i = new wn(t, r, Ji), a = 0; a < n.length; a++) {
          try {
            r.current = a + 1
            t = n[a].call(null, t, i) || t
            if (i.cancellationToken.getCanceled()) {
              break
            }
            if (i.cancellationToken.getStopped()) {
              return
            }
          } catch (o) {
            Ie("interceptor error:" + o)
          }
        }
      }
      if (this.processDef[e] && this.processDef[e] in this.processDef) {
        t = this.process(this.processDef[e], t)
      }
      return t
    }
    Ie("process [" + e + "] is not supported")
  }
  Sn.prototype.registerStageImplementation = function (t) {
    if (t && t.init && e(t.init)) {
      t.init(this)
      if (t.interceptor) {
        this.registerInterceptor(t.interceptor)
      }
    }
  }
  Sn.prototype.registerInterceptor = function (t) {
    if (t) {
      for (var r in t) {
        var i = t[r]
        if (i && n(i) && e(i.entry)) {
          if (!fe(i.priority)) {
            i.priority = Number.MAX_VALUE
          }
          if (!this.registeredInterceptors[r]) {
            this.registeredInterceptors[r] = []
          }
          var o = this.registeredInterceptors[r]
          i.entry.priority = i.priority
          o.push(i.entry)
          o.sort(function (e, t) {
            return e.priority - t.priority
          })
        }
      }
    }
  }
  var aa = new Sn({
    basicProps: "extendProps",
    extendProps: "formatData",
    formatData: "finalAdjustData",
    finalAdjustData: null
  })
  var sa = new Sn({
    send: null
  })
  var ua = new Sn({
    getUtmData: null,
    callSchema: null
  })
  var ca = new Sn({
    webClickEvent: null,
    webStayEvent: null
  })
  var la = {
    buildDataStage: function (e) {
      if (e) {
        aa.registerInterceptor(e)
      }
    },
    businessStage: function (e) {
      if (e) {
        ua.registerInterceptor(e)
      }
    },
    sendDataStage: function (e) {
      if (e) {
        sa.registerInterceptor(e)
      }
    },
    viewStage: function (e) {
      if (e) {
        ca.registerInterceptor(e)
      }
    }
  }
  var fa = {
    stage: null,
    init: function (e) {
      this.stage = e
    }
  }
  var pa = {
    stage: null,
    init: function (e) {
      this.stage = e
    },
    interceptor: {
      send: {
        entry: function (e) {
          return e
        }
      }
    }
  }
  var da = {
    buildData: function (e) {
      return mt(e)
    },
    sendData: function (e, t) {
      var n = Ge(e.properties)
      Tn({
        origin_data: e,
        server_url: Ji.para.server_url,
        data: e,
        config: n || {},
        callback: t
      })
      Ji.log(e)
    },
    encodeTrackData: function (e) {
      return tt(e)
    },
    getUtmData: function () {
      return En()
    }
  }
  var ha = {
    webClickEvent: {
      entry: function (e, t) {
        var /* [auto-meaningful-name] */t$sensors = t.sensors
        if ("a" === e.tagName && t$sensors.para.heatmap && true === t$sensors.para.heatmap.isTrackLink) {
          t$sensors.trackLink({
            event: e.event,
            target: e.target
          }, "$WebClick", e.props)
        } else {
          t$sensors.track("$WebClick", e.props, e.callback)
        }
      }
    },
    webStayEvent: {
      entry: function (e, t) {
        t.sensors.track("$WebStay", e)
      }
    }
  }
  var /* [auto-meaningful-name] */window$sensors_data_pre_config = window.sensors_data_pre_config
  var ma = !!ea.isObject(window$sensors_data_pre_config) && window$sensors_data_pre_config.is_compliance_enabled
  Ji.init = function (e) {
    To.sdk.emit("beforeInit")
    return !(Ji.readyState && Ji.readyState.state && Ji.readyState.state >= 2) && (ma && (Cn(true), _n()), To.initSystemEvent(), Ji.setInitVar(), Ji.readyState.setState(2), Ji.initPara(e), To.sdk.emit("initPara"), To.sdk.emit("afterInitPara"), To.sdk.emit("initAPI"), To.sdk.emit("afterInitAPI"), Ji.detectMode(), an(), To.sdk.emit("afterInit"), void To.sdk.emit("ready"))
  }
  if (ma) {
    Cn(false)
  } else {
    Cn(true)
    _n()
  }
  var /* [auto-meaningful-name] */window$SensorsData_APP_New_H5_Bridge
  var ya
  var _a
  var ba
  var wa
  var Sa
  var /* [auto-meaningful-name] */window$SensorsData_APP_JS_Bridge
  var Oa
  var Ea
  var Ta
  var xa
  var ja
  var Pa
  var Ca
  var Ia
  var /* [auto-meaningful-name] */Ia$store
  var Aa
  var /* [auto-meaningful-name] */ss$hidden
  var /* [auto-meaningful-name] */_1$27$41 = "1.27.4"
  var Da = {
    init: function (e) {
      var /* [auto-meaningful-name] */e$_$isString = e._.isString
      var /* [auto-meaningful-name] */e$_$rot13defs = e._.rot13defs
      var /* [auto-meaningful-name] */e$_$dfmapping = e._.dfmapping
      var /* [auto-meaningful-name] */DataEnc = "data:enc;"
      var /* [auto-meaningful-name] */DfmEnc = "dfm-enc-"
      e.ee.sdk.on("afterInitPara", function () {
        e.kit.userEncrypt = function (e) {
          return DfmEnc + e$_$dfmapping(e)
        }
        e.kit.userDecrypt = function (e) {
          if (0 === e.indexOf(DataEnc)) {
            e = e.substring(DataEnc.length)
            e = e$_$rot13defs(e)
          } else {
            if (0 === e.indexOf(DfmEnc)) {
              e = e.substring(DfmEnc.length)
              e = e$_$dfmapping(e)
            }
          }
          return e
        }
        e.kit.userDecryptIfNeeded = function (n) {
          if (!(!e$_$isString(n) || 0 !== n.indexOf(DataEnc) && 0 !== n.indexOf(DfmEnc))) {
            n = e.kit.userDecrypt(n)
          }
          return n
        }
      })
    },
    plugin_name: "UserEncryptDefault"
  }
  var Ma = An(Da)
  var /* [auto-meaningful-name] */_1$27$42 = "1.27.4"
  var Ba = {
    sd: null,
    init: function (e) {
      if (this.sd) {
        return false
      }
      this.sd = e
      if (!this.sd || !this.sd._) {
        return false
      }
      var t = this.sd._.cookie.get("sensors_amp_id")
      var /* [auto-meaningful-name] */this$sd$store$_state$distinct_id = this.sd.store._state.distinct_id
      if (t && t.length > 0) {
        var r = "amp-" === t.slice(0, 4)
        if (t !== this$sd$store$_state$distinct_id) {
          if (!r) {
            return false
          }
          if (this.sd.store._state.first_id) {
            this.sd.identify(t, true)
            this.sd.saEvent.send({
              original_id: t,
              distinct_id: this$sd$store$_state$distinct_id,
              type: "track_signup",
              event: "$SignUp",
              properties: {}
            }, null)
            this.setAmpId(this$sd$store$_state$distinct_id)
          } else {
            this.sd.identify(t, true)
          }
        }
      } else {
        this.setAmpId(this$sd$store$_state$distinct_id)
      }
      this.addListener()
    },
    addListener: function () {
      var e = this
      this.sd.events.on("changeDistinctId", function (t) {
        e.setAmpId(t)
      })
      this.sd.events.isReady()
    },
    setAmpId: function (e) {
      this.sd._.cookie.set("sensors_amp_id", e)
    }
  }
  var Ha = Dn(Ba, "Amp", "sdkReady")
  var /* [auto-meaningful-name] */window$SensorsData_App_Visual_Bridge = window.SensorsData_App_Visual_Bridge
  var $a = window$SensorsData_App_Visual_Bridge && window$SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode
  var za = window$SensorsData_App_Visual_Bridge && window$SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info
  var qa = window$SensorsData_App_Visual_Bridge && window$SensorsData_App_Visual_Bridge.sensorsdata_hover_web_nodes
  var Va = {
    isVerify: function () {
      return $a && (true === $a || $a.call(window$SensorsData_App_Visual_Bridge))
    },
    commands: {
      app_alert: Mn,
      visualized_track: Un,
      page_info: Un,
      sensorsdata_get_app_visual_config: Bn
    }
  }
  var /* [auto-meaningful-name] */_1$27$43 = "1.27.4"
  var Wa = {
    init: function (e) {
      wa = (ba = e) && ba._
      Sa = ba && ba.log || console && console.log || function () {}
      zn()
    },
    handleCommand: Vn
  }
  var Ka = $n(Wa, "AndroidBridge", "sdkAfterInitPara")
  var /* [auto-meaningful-name] */window$SensorsData_App_Visual_Bridge1 = window.SensorsData_App_Visual_Bridge
  var Ya = window$SensorsData_App_Visual_Bridge1 && window$SensorsData_App_Visual_Bridge1.sensorsdata_visualized_mode
  var Xa = window$SensorsData_App_Visual_Bridge1 && window$SensorsData_App_Visual_Bridge1.sensorsdata_visualized_alert_info
  var Qa = window$SensorsData_App_Visual_Bridge1 && window$SensorsData_App_Visual_Bridge1.sensorsdata_hover_web_nodes
  var Za = {
    isVerify: function () {
      return Ya && (true === Ya || Ya.call(window$SensorsData_App_Visual_Bridge1))
    },
    commands: {
      app_alert: Gn,
      visualized_track: Wn,
      page_info: Wn,
      sensorsdata_get_app_visual_config: Kn
    }
  }
  var /* [auto-meaningful-name] */_1$27$44 = "1.27.4"
  var ts = {
    init: function (e) {
      ja = (xa = e) && xa._
      Pa = xa && xa.log || console && console.log || function () {}
      Qn()
    },
    handleCommand: er
  }
  var ns = Xn(ts, "AndroidObsoleteBridge", "sdkAfterInitPara")
  var /* [auto-meaningful-name] */_1$27$45 = "1.27.4"
  var is = {
    event_list: [],
    latest_event_initial_time: null,
    max_save_time: 2592e6,
    init: function (e, t) {
      function n() {
        Ca = Ia._
        Ia$store = Ia.store
        return !!Ca.localStorage.isSupport() && (r.eventList.init(), r.addLatestChannelUrl(), void r.addIsChannelCallbackEvent())
      }
      if (Ia || !e) {
        return false
      }
      Aa = (t = t || {}).cookie_name || "sensorsdata2015jssdkchannel"
      Ia = e
      var r = this
      n()
    },
    addIsChannelCallbackEvent: function () {
      Ia.registerPage({
        $is_channel_callback_event: function (e) {
          if (Ca.isObject(e) && e.event && "$WebClick" !== e.event && "$pageview" !== e.event && "$WebStay" !== e.event && "$SignUp" !== e.event) {
            return !is.eventList.hasEvent(e.event) && (is.eventList.add(e.event), true)
          }
        }
      })
    },
    addLatestChannelUrl: function () {
      var e = this.getUrlDomain()
      var t = this.cookie.getChannel()
      if ("url解析失败" === e) {
        this.registerAndSave({
          _sa_channel_landing_url: "",
          _sa_channel_landing_url_error: "url的domain解析失败"
        })
      } else if (Ca.isReferralTraffic(document.referrer)) {
        var n = Ca.getQueryParam(location.href, "sat_cf")
        if (Ca.isString(n) && n.length > 0) {
          this.registerAndSave({
            _sa_channel_landing_url: location.href
          })
          is.channelLinkHandler()
        } else {
          this.registerAndSave({
            _sa_channel_landing_url: ""
          })
        }
      } else if (t) {
        Ia.registerPage(t)
      } else {
        Ia.registerPage({
          _sa_channel_landing_url: "",
          _sa_channel_landing_url_error: "取值异常"
        })
      }
    },
    registerAndSave: function (e) {
      Ia.registerPage(e)
      this.cookie.saveChannel(e)
    },
    cookie: {
      getChannel: function () {
        var e = Ia.kit.userDecryptIfNeeded(Ca.cookie.get(Aa))
        e = Ca.safeJSONParse(e)
        return !(!Ca.isObject(e) || !e.prop) && e.prop
      },
      saveChannel: function (e) {
        var t = {
          prop: e
        }
        var n = JSON.stringify(t)
        if (Ia.para.encrypt_cookie) {
          n = Ia.kit.userEncrypt(n)
        }
        Ca.cookie.set(Aa, n)
      }
    },
    channelLinkHandler: function () {
      this.eventList.reset()
      Ia.track("$ChannelLinkReaching")
    },
    getUrlDomain: function () {
      var /* [auto-meaningful-name] */Ca$info$pageProp$url_domain = Ca.info.pageProp.url_domain
      if ("" === Ca$info$pageProp$url_domain) {
        Ca$info$pageProp$url_domain = "url解析失败"
      }
      return Ca$info$pageProp$url_domain
    },
    eventList: {
      init: function () {
        var e = this.get()
        var t = new Date().getTime()
        if (e && Ca.isNumber(e.latest_event_initial_time) && Ca.isArray(e.eventList)) {
          var n = t - e.latest_event_initial_time
          if (n > 0 && n < is.max_save_time) {
            is.event_list = e.eventList
            is.latest_event_initial_time = e.latest_event_initial_time
          } else {
            this.reset()
          }
        } else {
          this.reset()
        }
      },
      get: function () {
        var e = {}
        try {
          e = Ia$store.readObjectVal("sawebjssdkchannel")
        } catch (t) {
          Ia.log(t)
        }
        return e
      },
      add: function (e) {
        is.event_list.push(e)
        this.save()
      },
      save: function () {
        var e = {
          latest_event_initial_time: is.latest_event_initial_time,
          eventList: is.event_list
        }
        Ia$store.saveObjectVal("sawebjssdkchannel", e)
      },
      reset: function () {
        is.event_list = []
        is.latest_event_initial_time = new Date().getTime()
        this.save()
      },
      hasEvent: function (e) {
        var t = false
        Ca.each(is.event_list, function (n) {
          if (n === e) {
            t = true
          }
        })
        return t
      }
    }
  }
  var os = rr(is, "SensorsChannel", "sdkAfterInitAPI")
  var /* [auto-meaningful-name] */_1$27$46 = "1.27.4";
  /micromessenger\/([\d.]+)/i.test(navigator.userAgent || "")
  var ss = function () {
    var e = {}
    if ("undefined" != typeof document.hidden) {
      e.hidden = "hidden"
      e.visibilityChange = "visibilitychange"
    } else {
      if ("undefined" != typeof document.msHidden) {
        e.hidden = "msHidden"
        e.visibilityChange = "msvisibilitychange"
      } else {
        if ("undefined" != typeof document.webkitHidden) {
          e.hidden = "webkitHidden"
          e.visibilityChange = "webkitvisibilitychange"
        }
      }
    }
    return e
  }
  ss$hidden = ss().hidden
  var us
  var cs
  var ls
  var fs
  var ps
  var ds
  var hs
  var gs
  var ms = {
    android: /Android/i,
    iOS: /iPhone|iPad|iPod/i
  }
  var vs = function () {
    for (var e in ms) if (navigator.userAgent.match(ms[e])) {
      return e
    }
    return ""
  }
  var ys = vs()
  var _s = function () {
    return ms.hasOwnProperty(ys)
  }
  var bs = function (e) {
    return null != e && "[object Object]" == Object.prototype.toString.call(e)
  }
  var ws = function (e) {
    var t = /\/sd\/(\w+)\/(\w+)$/
    return e.match(t)
  }
  var Ss = function (e) {
    var t = e._.URL(e.para.server_url)
    return {
      origin: t.origin,
      project: t.searchParams.get("project") || "default"
    }
  }
  var ks = function (e, t, n) {
    e.log("尝试唤起 android app")
    var r = t
    e.log("唤起APP的地址：" + r)
    window.location = r
    e.timer = setTimeout(function () {
      var t = sr()
      e.log("hide:" + ss$hidden + ":" + document[ss$hidden])
      return t ? (e.log("The page is hidden, stop navigating to download page"), false) : (e.log("App可能未安装，跳转到下载地址"), void (window.location = n))
    }, e.timeout)
  }
  var Os = function (e, t, n) {
    e.log("尝试唤起 iOS app:" + t)
    window.location.href = t
    e.timer = setTimeout(function () {
      return sr() ? (e.log("The page is hidden, stop navigating to download page"), false) : (e.log("App可能未安装，跳转到下载地址"), void (window.location.href = n))
    }, e.timeout)
    e.log("new timer:" + e.timer)
  }
  var Es = {
    plugin_name: ["deeplink", "Deeplink"],
    key: null,
    timer: null,
    sd: null,
    data: null,
    timeout: 2500,
    apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
    init: function (e) {
      if (this.sd) {
        this.logger("deeplink已经初始化")
        return false
      }
      if (arguments[0]) {
        if (bs(arguments[0]) && "number" == typeof arguments[0].timeout) {
          this.sd = window.sensorsDataAnalytic201505
        } else {
          this.sd = e
        }
      } else {
        this.sd = window.sensorsDataAnalytic201505
      }
      var t = {}
      if (arguments.length > 0) {
        if (1 === arguments.length && bs(arguments[0])) {
          t = arguments[0]
        } else {
          if (arguments.length >= 2 && bs(arguments[1])) {
            t = arguments[1]
          }
        }
      }
      if (!_s()) {
        this.logger("不支持当前系统，目前只支持Android和iOS")
        return false
      }
      if (bs(t) && this.sd._.isNumber(t.timeout) && t.timeout >= 2500) {
        this.timeout = t.timeout
      }
      if (!this.sd.para.server_url) {
        this.logger("神策JS SDK配置项server_url未正确配置")
        return false
      }
      var n = Ss(this.sd)
      this.apiURL = this.apiURL.replace("{origin}", n.origin).replace("{project}", n.project)
      var r = this.sd._.getQueryParam(window.location.href, "deeplink")
      if (!r) {
        this.logger("当前页面缺少deeplink参数")
        return false
      }
      r = window.decodeURIComponent(r)
      var i = ws(r)
      return i ? (this.key = i[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(i[2])), this.sd._.ajax({
        url: this.apiURL,
        type: "GET",
        cors: true,
        credentials: false,
        success: function (e) {
          return e.errorMsg ? (Es.logger("API报错：" + e.errorMsg), false) : (Es.data = e, Es.logger("API查询成功，数据：" + JSON.stringify(e, null, "  ")), void (this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))))
        }.bind(this),
        error: function () {
          Es.logger("API查询出错")
        }
      }), void this.addListeners()) : (this.logger("当前页面的deeplink参数无效"), false)
    },
    openDeepLink: function () {
      this.logger("openDeeplink()")
      if (!this.data) {
        this.logger("没有Deep link数据!")
        return false
      }
      if ("iOS" === ys) {
        this.logger("当前系统是iOS")
        var e = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes
        this.logger("唤起APP的地址：" + e)
        Os(this, e, this.data.ios_info.download_url)
      } else {
        this.logger("当前系统是 android")
        ks(this, this.data.android_info.url_schemes, this.data.android_info.download_url)
      }
    },
    logger: function (e) {
      if (this.sd) {
        this.sd.log(e)
      }
    },
    addListeners: function () {
      var /* [auto-meaningful-name] */ss$visibilityChange = ss().visibilityChange
      var t = this
      if (ss$visibilityChange) {
        document.addEventListener(ss$visibilityChange, function () {
          clearTimeout(t.timer)
          t.logger("visibilitychange, clear timeout:" + t.timer)
        }, false)
      }
      window.addEventListener("pagehide", function () {
        t.logger("page hide, clear timeout:" + t.timer)
        clearTimeout(t.timer)
      }, false)
    }
  }
  var Ts = ar(Es, null, "sdkReady")
  var /* [auto-meaningful-name] */_1$27$47 = "1.27.4"
  var js = {
    init: function (e) {
      fs = (ls = e) && ls._
      ps = ls && ls.log || console && console.log || function () {}
      fr()
    },
    handleCommand: dr
  }
  var Ps = lr(js, "IOSBridge", "sdkAfterInitPara")
  var /* [auto-meaningful-name] */_1$27$48 = "1.27.4"
  var Is = {
    init: function (e) {
      hs = (ds = e) && ds._
      gs = ds && ds.log || console && console.log || function () {}
      vr()
    }
  }
  var Ns = mr(Is, "IOSObsoleteBridge", "sdkAfterInitPara")
  var /* [auto-meaningful-name] */_1$27$49 = "1.27.4"
  var Rs = 5e3
  var Ls = 432e3
  Or.prototype.init = function (e, t) {
    if (e) {
      this.sd = e
      this._ = this.sd._
      if (t) {
        this.option = t
        var /* [auto-meaningful-name] */t$heartbeat_interval_time = t.heartbeat_interval_time
        if (t$heartbeat_interval_time && (this._.isNumber(t$heartbeat_interval_time) || this._.isNumber(1 * t$heartbeat_interval_time)) && 1 * t$heartbeat_interval_time > 0) {
          this.heartbeat_interval_time = 1e3 * t$heartbeat_interval_time
        }
        var /* [auto-meaningful-name] */t$max_duration = t.max_duration
        if (t$max_duration && (this._.isNumber(t$max_duration) || this._.isNumber(1 * t$max_duration)) && 1 * t$max_duration > 0) {
          this.max_duration = t$max_duration
        }
      }
      this.page_id = Number(String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) + String(new Date().getTime()).slice(-4))
      this.addEventListener()
      if (true === document.hidden) {
        this.page_show_status = false
      } else {
        this.addHeartBeatInterval()
      }
      this.log("PageLeave初始化完毕")
    } else {
      this.log("神策JS SDK未成功引入")
    }
  }
  Or.prototype.log = function (e) {
    if (this.sd) {
      this.sd.log(e)
    }
  }
  Or.prototype.refreshPageEndTimer = function () {
    var e = this
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
    this.timer = setTimeout(function () {
      e.page_hidden_status = false
    }, Rs)
  }
  Or.prototype.hiddenStatusHandler = function () {
    clearTimeout(this.timer)
    this.timer = null
    this.page_hidden_status = false
  }
  Or.prototype.pageStartHandler = function () {
    this.start_time = +new Date()
    if (1 == !document.hidden) {
      this.page_show_status = true
    } else {
      this.page_show_status = false
    }
    this.url = location.href
    this.title = document.title
  }
  Or.prototype.pageEndHandler = function () {
    if (true !== this.page_hidden_status) {
      var e = this.getPageLeaveProperties()
      if (false === this.page_show_status) {
        delete e.event_duration
      }
      this.page_show_status = false
      this.page_hidden_status = true
      if (this.isCollectUrl(this.url)) {
        this.sd.track("$WebPageLeave", e)
      }
      this.refreshPageEndTimer()
      this.delHeartBeatData()
    }
  }
  Or.prototype.addEventListener = function () {
    this.addPageStartListener()
    this.addPageSwitchListener()
    this.addSinglePageListener()
    this.addPageEndListener()
  }
  Or.prototype.addPageStartListener = function () {
    var e = this
    if ("onpageshow" in window) {
      this._.addEvent(window, "pageshow", function () {
        e.pageStartHandler()
        e.hiddenStatusHandler()
      })
    }
  }
  Or.prototype.isCollectUrl = function (e) {
    return "function" != typeof this.option.isCollectUrl || "string" != typeof e || "" === e || this.option.isCollectUrl(e)
  }
  Or.prototype.addSinglePageListener = function () {
    var e = this
    if (this.sd.ee) {
      this.sd.ee.spa.prepend("switch", function (t) {
        if (t !== location.href) {
          e.url = t
          e.pageEndHandler()
          e.stopHeartBeatInterval()
          e.current_page_url = e.url
          e.pageStartHandler()
          e.hiddenStatusHandler()
          e.addHeartBeatInterval()
        }
      })
    }
  }
  Or.prototype.addPageEndListener = function () {
    var e = this
    this._.each(["pagehide", "beforeunload", "unload"], function (t) {
      if ("on" + t in window) {
        e._.addEvent(window, t, function () {
          e.pageEndHandler()
          e.stopHeartBeatInterval()
        })
      }
    })
  }
  Or.prototype.addPageSwitchListener = function () {
    var e = this
    this._.listenPageState({
      visible: function () {
        e.pageStartHandler()
        e.hiddenStatusHandler()
        e.addHeartBeatInterval()
      },
      hidden: function () {
        e.url = location.href
        e.title = document.title
        e.pageEndHandler()
        e.stopHeartBeatInterval()
      }
    })
  }
  Or.prototype.addHeartBeatInterval = function () {
    if (this._.localStorage.isSupport()) {
      this.startHeartBeatInterval()
    }
  }
  Or.prototype.startHeartBeatInterval = function () {
    var e = this
    if (this.heartbeat_interval_timer) {
      this.stopHeartBeatInterval()
    }
    var t = true
    if (!this.isCollectUrl(this.url)) {
      t = false
    }
    this.heartbeat_interval_timer = setInterval(function () {
      if (t) {
        e.saveHeartBeatData()
      }
    }, this.heartbeat_interval_time)
    if (t) {
      this.saveHeartBeatData("is_first_heartbeat")
    }
    this.reissueHeartBeatData()
  }
  Or.prototype.stopHeartBeatInterval = function () {
    clearInterval(this.heartbeat_interval_timer)
    this.heartbeat_interval_timer = null
  }
  Or.prototype.saveHeartBeatData = function (e) {
    var t = this.getPageLeaveProperties()
    var n = new Date()
    t.$time = n
    if ("is_first_heartbeat" === e) {
      t.event_duration = 3.14
    }
    var r = this.sd.kit.buildData({
      type: "track",
      event: "$WebPageLeave",
      properties: t
    })
    r.heartbeat_interval_time = this.heartbeat_interval_time
    this.sd.store.saveObjectVal(this.storage_name + "-" + this.page_id, r)
  }
  Or.prototype.delHeartBeatData = function (e) {
    if (this._.localStorage.isSupport()) {
      this._.localStorage.remove(e || this.storage_name + "-" + this.page_id)
    }
  }
  Or.prototype.reissueHeartBeatData = function () {
    for (var e = window.localStorage.length - 1; e >= 0; e--) {
      var t = window.localStorage.key(e)
      if (t && t !== this.storage_name + "-" + this.page_id && 0 === t.indexOf(this.storage_name + "-")) {
        var n = this.sd.store.readObjectVal(t)
        if (this._.isObject(n) && 1 * new Date() - n.time > n.heartbeat_interval_time + 5e3) {
          delete n.heartbeat_interval_time
          n._flush_time = new Date().getTime()
          this.sd.kit.sendData(n)
          this.delHeartBeatData(t)
        }
      }
    }
  }
  Or.prototype.getPageLeaveProperties = function () {
    var e = (+new Date() - this.start_time) / 1e3
    if (isNaN(e) || e < 0 || e > this.max_duration) {
      e = 0
    }
    e = Number(e.toFixed(3))
    var t = this._.getReferrer(this.current_page_url)
    var n = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body && document.body.scrollTop || 0
    n = Math.round(n) || 0
    var r = {
      $title: this.title,
      $url: this._.getURL(this.url),
      $url_path: this._.getURLPath(this._.URL(this.url).pathname),
      $referrer_host: t ? this._.getHostname(t) : "",
      $referrer: t,
      $viewport_position: n
    }
    if (0 !== e) {
      r.event_duration = e
    }
    return this._.extend(r, this.option.custom_props)
  }
  var Ds = kr(new Or(), "PageLeave", "sdkReady")
  var /* [auto-meaningful-name] */_1$27$410 = "1.27.4"
  var Us = false
  var Bs = {
    init: function (e, t) {
      function n(t, n) {
        if (t.getEntries && "function" == typeof t.getEntries) {
          for (var r = t.getEntries(), i = null, o = 0; o < r.length; o++) {
            if ("transferSize" in r[o]) {
              i += r[o].transferSize
            }
          }
          if (e._.isNumber(i) && i >= 0 && i < 10737418240) {
            n.$page_resource_size = Number((i / 1024).toFixed(3))
          }
        }
      }
      function r(t) {
        var n = 0
        if (t.timing) {
          var /* [auto-meaningful-name] */t$timing = t.timing
          if (0 !== t$timing.fetchStart && e._.isNumber(t$timing.fetchStart) && 0 !== t$timing.domContentLoadedEventEnd && e._.isNumber(t$timing.domContentLoadedEventEnd)) {
            n = t$timing.domContentLoadedEventEnd - t$timing.fetchStart
          } else {
            e.log("performance 数据获取异常")
          }
        }
        return n
      }
      function i(t) {
        var n = 0
        if (e._.isFunction(t.getEntriesByType)) {
          n = ((t.getEntriesByType("navigation") || [{}])[0] || {}).domContentLoadedEventEnd || 0
        }
        return n
      }
      function o() {
        var a = 0
        var s = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance
        var u = {
          $url: e._.getURL(),
          $title: document.title,
          $url_path: e._.getURLPath(),
          $referrer: e._.getReferrer(null, true)
        }
        if (s) {
          a = i(s) || r(s)
          n(s, u)
        } else {
          e.log("浏览器未支持 performance API.")
        }
        if (a > 0) {
          var c = e._.isObject(t) && t.max_duration || 1800
          a = Number((a / 1e3).toFixed(3))
          if (!e._.isNumber(c) || c <= 0 || a <= c) {
            u.event_duration = a
          }
        }
        if (!Us) {
          e.track("$WebPageLoad", u)
          Us = true
        }
        if (window.removeEventListener) {
          window.removeEventListener("load", o)
        } else {
          if (window.detachEvent) {
            window.detachEvent("onload", o)
          }
        }
      }
      if ("complete" == document.readyState) {
        o()
      } else {
        if (window.addEventListener) {
          window.addEventListener("load", o)
        } else {
          if (window.attachEvent) {
            window.attachEvent("onload", o)
          }
        }
      }
    }
  }
  var Hs = xr(Bs, "PageLoad", "sdkReady")
  Pr.prototype.init = function (e) {
    if (e) {
      this.sd = e
      this._ = e._
      this.log = e.log
      var t = this
      e.registerInterceptor("buildDataStage", {
        extendProps: {
          priority: 0,
          entry: function (e) {
            return jr(e, t)
          }
        }
      })
    } else {
      this.log("神策JS SDK未成功引入")
    }
  }
  Pr.prototype.register = function (e) {
    return this.sd ? void (this._.isObject(e) && this._.isArray(e.events) && e.events.length > 0 && this._.isObject(e.properties) && !this._.isEmptyObject(e.properties) ? this.customRegister.push(e) : this.log("RegisterProperties: register 参数错误")) : void this.log("神策JS SDK未成功引入")
  }
  Pr.prototype.hookRegister = function (e) {
    return this.sd ? void (this._.isFunction(e) ? this.customRegister.push(e) : this.log("RegisterProperties: hookRegister 参数错误")) : void this.log("神策JS SDK未成功引入")
  }
  var /* [auto-meaningful-name] */_1$27$411 = "1.27.4"
  Pr.prototype.plugin_name = "RegisterProperties"
  var $s
  var /* [auto-meaningful-name] */$s$kit$buildData
  var qs
  var Vs
  var /* [auto-meaningful-name] */VsE$_
  var Ws
  var /* [auto-meaningful-name] */WsE$_
  var Js
  var /* [auto-meaningful-name] */JsE$_
  var Xs
  var /* [auto-meaningful-name] */XsE$_
  var Zs
  var /* [auto-meaningful-name] */ZsE$_
  var tu
  var /* [auto-meaningful-name] */TuE$_
  var ru = Nr(new Pr())
  var /* [auto-meaningful-name] */_1$27$412 = "1.27.4"
  var ou = window.console && window.console.log || function () {}
  var au = {
    init: function (e) {
      ou = ($s = e) && $s.log || ou
      return e && e.kit && e.kit.buildData ? ($s$kit$buildData = $s.kit.buildData, $s.kit.buildData = Dr, void ou("RegisterPropertyPageHeight 插件初始化完成")) : void ou("RegisterPropertyPageHeight 插件初始化失败,当前主sdk不支持 RegisterPropertyPageHeight 插件，请升级主sdk")
    }
  }
  var su = Lr(au, "RegisterPropertyPageHeight", "sdkReady")
  var /* [auto-meaningful-name] */_1$27$413 = "1.27.4"
  var cu = {
    getPart: function (e) {
      var t = false
      var /* [auto-meaningful-name] */this$option$length = this.option.length
      if (this$option$length) {
        for (var r = 0; r < this$option$length; r++) {
          if (e.indexOf(this.option[r].part_url) > -1) {
            return true
          }
        }
      }
      return t
    },
    getPartHash: function (e) {
      var /* [auto-meaningful-name] */this$option$length = this.option.length
      var n = false
      if (this$option$length) {
        for (var r = 0; r < this$option$length; r++) {
          if (e.indexOf(this.option[r].part_url) > -1) {
            return this.option[r].after_hash
          }
        }
      }
      return !!n
    },
    getCurrenId: function () {
      var e = this.store.getDistinctId() || ""
      var t = this.store.getFirstId() || ""
      if (this._.urlSafeBase64 && this._.urlSafeBase64.encode) {
        e = e ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(e))) : ""
      } else {
        if (this._.rot13obfs) {
          e = e ? this._.rot13obfs(e) : ""
        }
      }
      return encodeURIComponent(t ? "f" + e : "d" + e)
    },
    rewriteUrl: function (e, t) {
      var n = this
      var r = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e)
      var i = ""
      if (r) {
        var o
        var a = r[1] || ""
        var s = r[2] || ""
        var u = r[3] || ""
        var c = "_sasdk=" + this.getCurrenId()
        var l = function (e) {
          var t = e.split("&")
          var r = []
          n._.each(t, function (e) {
            if (e.indexOf("_sasdk=") > -1) {
              r.push(c)
            } else {
              r.push(e)
            }
          })
          return r.join("&")
        }
        if (this.getPartHash(e)) {
          o = u.indexOf("_sasdk")
          i = u.indexOf("?") > -1 ? o > -1 ? a + s + "#" + u.substring(1, o) + l(u.substring(o, u.length)) : a + s + u + "&" + c : a + s + "#" + u.substring(1) + "?" + c
        } else {
          o = s.indexOf("_sasdk")
          i = /^\?(\w)+/.test(s) ? o > -1 ? a + "?" + l(s.substring(1)) + u : a + s + "&" + c + u : a + "?" + c + u
        }
        if (t) {
          t.href = i
        }
        return i
      }
    },
    getUrlId: function () {
      var e = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/)
      if (this._.isArray(e) && e[1]) {
        var t = decodeURIComponent(e[1])
        if (!(!t || "f" !== t.substring(0, 1) && "d" !== t.substring(0, 1))) {
          if (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(t)) {
            t = t.substring(0, 1) + this._.base64Decode(this._.urlSafeBase64.decode(t.substring(1)))
          } else {
            if (this._.rot13defs) {
              t = t.substring(0, 1) + this._.rot13defs(t.substring(1))
            }
          }
        }
        return t
      }
      return ""
    },
    setRefferId: function (e) {
      var t = this.store.getDistinctId()
      var n = this.getUrlId()
      if (n && "" !== n) {
        var r = "a" === n.substring(0, 1) || "d" === n.substring(0, 1)
        if ((n = n.substring(1)) !== t) {
          if (r) {
            this.sd.identify(n, true)
            if (this.store.getFirstId()) {
              this.sd.saEvent.send({
                original_id: n,
                distinct_id: t,
                type: "track_signup",
                event: "$SignUp",
                properties: {}
              }, null)
            }
          } else {
            if (!(this.store.getFirstId() && !e.re_login)) {
              this.sd.login(n)
            }
          }
        }
      }
    },
    addListen: function () {
      var e = this
      var t = function (t) {
        var n
        var r
        var /* [auto-meaningful-name] */t$target = t.target
        var o = t$target.tagName.toLowerCase()
        var /* [auto-meaningful-name] */t$target$parentNode = t$target.parentNode
        if ("a" === o && t$target.href || t$target$parentNode && t$target$parentNode.tagName && "a" === t$target$parentNode.tagName.toLowerCase() && t$target$parentNode.href) {
          if ("a" === o && t$target.href) {
            n = t$target.href
            r = t$target
          } else {
            n = t$target$parentNode.href
            r = t$target$parentNode
          }
          var /* [auto-meaningful-name] */e$_$URLN$protocol = e._.URL(n).protocol
          if (!("http:" !== e$_$URLN$protocol && "https:" !== e$_$URLN$protocol)) {
            if (e.getPart(n)) {
              e.rewriteUrl(n, r)
            }
          }
        }
      }
      e._.addEvent(document, "mousedown", t)
      if (window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0) {
        e._.addEvent(document, "pointerdown", t)
      }
    },
    init: function (e, t) {
      function n(t) {
        for (var /* [auto-meaningful-name] */t$length = t.length, r = [], i = 0; i < t$length; i++) {
          if (/[A-Za-z0-9]+\./.test(t[i].part_url) && "[object Boolean]" == Object.prototype.toString.call(t[i].after_hash)) {
            r.push(t[i])
          } else {
            e.log("linker 配置的第 " + (i + 1) + " 项格式不正确，请检查参数格式！")
          }
        }
        return r
      }
      this.sd = e
      this._ = e._
      this.store = e.store
      this.para = e.para
      return this._.isObject(t) && this._.isArray(t.linker) && t.linker.length > 0 ? (this.setRefferId(t), this.addListen(), this.option = t.linker, void (this.option = n(this.option))) : void e.log("请配置打通域名参数！")
    }
  }
  var lu = Br(cu, "SiteLinker", "sdkReady")
  var /* [auto-meaningful-name] */Utm_sourceUtm_mediumUtm_campaignUtm_contentUtm_term1 = "utm_source utm_medium utm_campaign utm_content utm_term"
  var /* [auto-meaningful-name] */_1$27$414 = "1.27.4"
  var du = {
    init: function (e) {
      function t() {
        var e = Utm_sourceUtm_mediumUtm_campaignUtm_contentUtm_term1.split(" ")
        var t = ""
        var n = {}
        if (qs._.isArray(qs.para.source_channel) && qs.para.source_channel.length > 0) {
          e = e.concat(qs.para.source_channel)
          e = qs._.unique(e)
        }
        qs._.each(e, function (e) {
          if ((t = qs._.getQueryParam(location.href, e)).length) {
            n[e] = t
          }
        })
        return n
      }
      if (e && !qs) {
        (qs = e).registerInterceptor("businessStage", {
          getUtmData: {
            priority: 0,
            entry: function () {
              return t()
            }
          }
        })
      }
    }
  }
  var hu = $r(du, "Utm", "sdkAfterInitPara")
  var /* [auto-meaningful-name] */_1$27$415 = "1.27.4"
  var mu = false
  var vu = null
  var yu = {
    init: function (e) {
      (vu = e).disableSDK = Gr
      vu.enableSDK = Wr
      vu.getDisabled = Kr
    }
  }
  var _u = Vr(yu, "DisableSDK", "sdkInitAPI")
  var /* [auto-meaningful-name] */_1$27$416 = "1.27.4"
  var wu = {
    plugin_name: "DebugSender",
    init: function (e) {
      VsE$_ = (Vs = e)._
      ti()
    }
  }
  var Su = Xr(wu)
  var /* [auto-meaningful-name] */_1$27$417 = "1.27.4"
  var Ou = {
    plugin_name: "JsappSender",
    init: function (e) {
      WsE$_ = (Ws = e)._
      ai()
    }
  }
  var Eu = ii(Ou)
  var /* [auto-meaningful-name] */_1$27$418 = "1.27.4"
  var xu = null
  var ju = {
    plugin_name: "BatchSender",
    init: function (e) {
      JsE$_ = (Js = e)._
      di()
    }
  }
  var Pu = li(ju)
  var /* [auto-meaningful-name] */_1$27$419 = "1.27.4"
  var Iu = {
    plugin_name: "BeaconSender",
    init: function (e) {
      XsE$_ = (Xs = e)._
      bi()
    }
  }
  var Nu = mi(Iu)
  var /* [auto-meaningful-name] */_1$27$420 = "1.27.4"
  var Ru = {
    plugin_name: "AjaxSender",
    init: function (e) {
      ZsE$_ = (Zs = e)._
      xi()
    }
  }
  var Lu = ki(Ru)
  var /* [auto-meaningful-name] */_1$27$421 = "1.27.4"
  var Mu = {
    plugin_name: "ImageSender",
    init: function (e) {
      TuE$_ = (tu = e)._
      Li()
    }
  }
  var Uu = Ci(Mu)
  var Bu = null
  var Hu = null
  var Fu = []
  var $u = {
    init: function (e) {
      if (e) {
        Hu = (Bu = e)._
        if (Bu.logger) {
          Bu.logger.appendWriter(Bi)
        }
        if (Bu.on) {
          Bu.on("sdkAfterInitPara", function () {
            for (var e = 0; e < Fu.length; e++) {
              Hi(Fu[e])
            }
            Fu = null
          })
        }
        if (Bu.on) {
          Bu.on("sdkInitAPI", function () {
            Bu.enableLocalLog = Gi
            Bu.disableLocalLog = Wi
          })
        }
      }
    }
  }
  var zu = Ui($u, "ConsoleLogger")
  var /* [auto-meaningful-name] */Sensorsdata_jssdk_debug = "sensorsdata_jssdk_debug"
  Ji.modules = Ji.modules || {}
  for (var Vu = [zu, Ha, Ka, ns, os, Ts, Ps, Ns, Ds, Hs, ru, su, lu, hu, _u, Su, Eu, Pu, Nu, Lu, Uu], Gu = [zu, Ma, hu, _u, Eu, Su, Ka, Ps, ns, Ns, Pu, Nu, Lu, Uu], Wu = 0; Wu < Vu.length; Wu++) {
    var Ku = Vu[Wu]
    if (Ji._.isString(Ku.plugin_name)) {
      Ji.modules[Ku.plugin_name] = Ku
    } else {
      if (Ji._.isArray(Ku.plugin_name)) {
        Ji._.each(Ku.plugin_name, function (e) {
          Ji.modules[e] = Ku
        })
      }
    }
  }
  for (Wu = 0; Wu < Gu.length; Wu++) {
    Ji.use(Gu[Wu])
  }
  var Ju = Ji
  try {
    if ("string" == typeof window.sensorsDataAnalytic201505) {
      Ji.para = window[sensorsDataAnalytic201505].para
      Ji._q = window[sensorsDataAnalytic201505]._q
      window[sensorsDataAnalytic201505] = Ji
      window.sensorsDataAnalytic201505 = Ji
      Ji.init()
    } else {
      if ("undefined" == typeof window.sensorsDataAnalytic201505) {
        window.sensorsDataAnalytic201505 = Ji
      } else {
        Ju = window.sensorsDataAnalytic201505
      }
    }
  } catch (Xu) {
    Ie(Xu)
  }
  var Yu = Ju
  Yu.DEFAULT_SEND_TYPE = "image"
  return Yu
}()
