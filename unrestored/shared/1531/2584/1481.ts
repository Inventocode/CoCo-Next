/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1481
 */

"use strict";

(function (e) {
  var r = require("./10/index")
  var o = require("react")
  var i = function __importDefault(module) {
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
  }(o)
  var a = require("./702")
  var s = require("./16/index")
  var c = require("./8")
  var l = function __importDefault(module) {
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
  }(c)
  var u = require("./13/index")
  var d = require("../../../../src/shared/events/messages-wrapper")
  var p = require("./101")
  var f = function __importDefault(module) {
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
  }(p)
  var h = require("./188")
  exports.a = o.memo(function () {
    var t = s.e(function (e) {
      return e.block.get("commonInputDialog")
    })
    var t$visible = t.visible
    var t$title = t.title
    var t$placeholder = t.placeholder
    var t$defaultValue = t.defaultValue
    var t$maxLength = t.maxLength
    var _ = undefined === t$maxLength ? 1 / 0 : t$maxLength
    var t$validator = t.validator
    var t$confirmCallback = t.confirmCallback
    var t$cancelCallback = t.cancelCallback
    var a$a$formatMessage = a.a().formatMessage
    var O = o.useRef(null)
    var w = s.d()
    var C = o.useState("")
    var T = r.a(C, 2)
    var S = T[0]
    var I = T[1]
    var A = o.useState(t$defaultValue || "")
    var j = r.a(A, 2)
    var N = j[0]
    var R = j[1]
    o.useEffect(function () {
      var /* [auto-meaningful-name] */_o$current
      R(t$defaultValue || "")
      if (t$visible) {
        if (!(null === (_o$current = O.current) || undefined === _o$current)) {
          _o$current.focus()
        }
        e(function () {
          var /* [auto-meaningful-name] */o$current
          if (!(null === (o$current = O.current) || undefined === o$current)) {
            o$current.select()
          }
        })
        I("")
      }
    }, [t$visible, t$defaultValue])
    var k = function () {
      if (!(null === t$cancelCallback || undefined === t$cancelCallback)) {
        t$cancelCallback.call(null)
      }
      w(d.jh())
    }
    var x = function () {
      if (!S && N) {
        if (!(null === t$confirmCallback || undefined === t$confirmCallback)) {
          t$confirmCallback.call(null, N)
        }
        w(d.jh())
      }
    }
    return i.a.createElement(u.f, {
      visible: t$visible,
      className: l()(f.a.nameDialog),
      onClose: k,
      withPortal: true
    }, i.a.createElement(h.a, {
      useCapture: true
    }, i.a.createElement(h.b, {
      keys: "enter",
      callback: x
    })), i.a.createElement("p", {
      className: f.a.dialogTitle
    }, t$title && a$a$formatMessage({
      id: t$title
    }) || ""), i.a.createElement("div", {
      className: f.a.inputWrapper
    }, i.a.createElement("span", null, a$a$formatMessage({
      id: "name"
    })), i.a.createElement(u.k, {
      ref: O,
      warning: !!S,
      placeholder: t$placeholder && a$a$formatMessage({
        id: t$placeholder
      }),
      onChange: function (e) {
        var t = null === t$validator || undefined === t$validator ? undefined : t$validator.call(null, e)
        R(e)
        I(t || "")
      },
      maxLength: _,
      value: N
    }), S && i.a.createElement("div", {
      className: f.a.warningTips
    }, " ", a$a$formatMessage({
      id: S
    }))), i.a.createElement("div", {
      className: f.a.confirmBox
    }, i.a.createElement(u.d, {
      onClick: k
    }, a$a$formatMessage({
      id: "cancel"
    })), i.a.createElement(u.d, {
      onClick: x,
      type: "primary",
      disabled: !!S || !N
    }, a$a$formatMessage({
      id: "confirm"
    }))))
  })
}).call(this, require("./795/625/index").setImmediate)
