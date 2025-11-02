/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：669
 */

"use strict";

(function (e) {
  var r = require("react")
  var o = function __importDefault(module) {
    var defaultExport = module && module.__esModule ? function () {
      return module.default
    } : function () {
      return module
    }
    Object.defineProperty(defaultExport, "a", {
      enumerable: true,
      get: defaultExport
    })
    return defaultExport
  }(r)
  var i = require("resize-observer-polyfill")
  require("./848")
  var a = require("../../16/index")
  var s = require("../../5")
  var c = require("../../64")
  var l = require("../../15")
  function u(e) {
    return e instanceof HTMLInputElement ? e.value : e.innerHTML || ""
  }
  function d(e) {
    return e.replace(/<div><br><\/div>/g, "\n").replace(/<div>|<br>/g, "\n").replace(/<\/div>/g, "")
  }
  function p(e, t) {
    var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : s.q.FIXED
    var r = arguments.length > 3 ? arguments[3] : undefined
    var o = document.getElementById("COCO_APP_ZONE")
    var i = getComputedStyle(e)
    if (o) {
      var a = e.getClientRects()[0]
      var a$width = a.width
      var a$height = a.height
      var a$top = a.top
      var a$left = a.left
      var p = o.getClientRects()[0]
      var p$top = p.top
      var p$left = p.left
      if (n & s.q.AUTO_WIDTH) {
        t.style.width = "auto"
      } else {
        t.style.width = a$width / r + "px"
      }
      if (n & s.q.AUTO_HEIGHT) {
        t.style.height = "auto"
      } else {
        t.style.height = a$height / r + "px"
      }
      t.style.top = (a$top - p$top) / r + "px"
      t.style.left = (a$left - p$left) / r + "px"
      t.style.fontSize = i.fontSize
      t.style.color = i.color
      t.style.lineHeight = i.lineHeight
      t.style.textAlign = i.textAlign
      t.style.letterSpacing = i.letterSpacing
      t.style.fontFamily = i.fontFamily
      t.style.whiteSpace = i.whiteSpace
      t.style.display = i.display
      t.style.justifyContent = i.justifyContent
      t.style.alignItems = i.alignItems
      t.style.minWidth = i.minWidth
      t.style.maxWidth = i.maxWidth
      t.style.minHeight = i.minHeight
      t.style.maxHeight = i.maxHeight
    }
  }
  function f(t) {
    var t$target = t.target
    var t$callback = t.callback
    var t$options = t.options
    var m = undefined === t$options ? {} : t$options
    var m$sizeAdaptive = m.sizeAdaptive
    var _ = undefined === m$sizeAdaptive ? s.q.FIXED : m$sizeAdaptive
    var m$maxLength = m.maxLength
    var b = undefined === m$maxLength ? 1 / 0 : m$maxLength
    var m$isMultipleRow = m.isMultipleRow
    var E = undefined === m$isMultipleRow || m$isMultipleRow
    var O = r.useRef(null)
    var w = r.useRef()
    var C = a.e(function (e) {
      return e.common.stageScale
    })
    r.useEffect(function () {
      var o$current = O.current
      if (o$current && t$target) {
        w.current = t$target
        p(t$target, o$current, _, C)
        t$target.style.opacity = "0"
        o$current.contentEditable = "true"
        o$current.innerHTML = u(t$target)
        e(function () {
          c.b(o$current)
        })
      }
    }, [t$callback, _, C, t$target])
    r.useEffect(function () {
      var o$current = O.current
      if (E && o$current) {
        var t = l.p(function (e) {
          t$callback(e)
        }, 60)
        var n = new i.default(function () {
          var n = d(o$current.innerHTML)
          t(n)
        })
        n.observe(o$current)
        return function () {
          if (n) {
            n.disconnect()
          }
          n = null
        }
      }
    }, [t$callback, b, E])
    return o.a.createElement("div", {
      className: "coco-widget-editor-div",
      ref: O,
      onBlur: function () {
        var o$current = O.current
        if (o$current) {
          if (w.current) {
            w.current.style.opacity = "1"
          }
          o$current.style.display = "none"
        }
      },
      onDoubleClick: function () {
        var o$current = O.current
        if (o$current) {
          c.c(o$current)
        }
      },
      onInput: function (e) {
        var o$current = O.current
        if (o$current) {
          var n = d(o$current.innerHTML)
          if (n.length >= b) {
            o$current.innerHTML = n.slice(0, b)
            c.b(o$current)
          }
        }
      },
      onPaste: function (e) {
        if ((null === e || undefined === e ? undefined : e.clipboardData) && document.execCommand) {
          e.preventDefault()
          var t = e.clipboardData.getData("text/plain")
          document.execCommand("insertText", false, t)
        }
      }
    })
  }
  function h(t) {
    var t$target = t.target
    var t$callback = t.callback
    var t$options = t.options
    var undefinedT$optionsT$options$sizeAdaptive = (undefined === t$options ? {} : t$options).sizeAdaptive
    var d = undefined === undefinedT$optionsT$options$sizeAdaptive ? s.q.FIXED : undefinedT$optionsT$options$sizeAdaptive
    var f = r.useRef(null)
    var h = r.useRef()
    var m = a.e(function (e) {
      return e.common.stageScale
    })
    r.useEffect(function () {
      var f$current = f.current
      if (f$current && t$target) {
        var r = u(t$target)
        h.current = t$target
        p(t$target, f$current, d, m)
        t$target.style.opacity = "0"
        f$current.contentEditable = "true"
        f$current.value = r
        e(function () {
          f$current.selectionEnd = r.length
          f$current.selectionStart = r.length
          f$current.focus()
        })
      }
    }, [t$callback, d, m, t$target])
    return o.a.createElement("input", {
      onKeyDown: function (e) {
        if (13 === e.keyCode) {
          e.currentTarget.blur()
        }
      },
      onDoubleClick: function (e) {
        e.target.select()
      },
      type: "text",
      onBlur: function (e) {
        var e$target = e.target
        if (e$target) {
          if (h.current) {
            h.current.style.opacity = "1"
          }
          e$target.style.display = "none"
        }
        t$callback(e.target.value)
      },
      ref: f,
      className: "coco-widget-editor-input"
    })
  }
  exports.a = function (e) {
    var e$options = e.options
    var undefinedE$optionsE$options$isMultipleRow = (undefined === e$options ? {} : e$options).isMultipleRow
    var r = undefined === undefinedE$optionsE$options$isMultipleRow || undefinedE$optionsE$options$isMultipleRow
    return o.a.createElement("div", {
      className: "coco-widget-editor"
    }, r ? o.a.createElement(f, e) : o.a.createElement(h, e))
  }
}).call(this, require("../../795/625/index").setImmediate)
