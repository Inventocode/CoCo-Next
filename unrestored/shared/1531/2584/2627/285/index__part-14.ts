/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：285__part-14
 */

"use strict"

import { "285__part-4__pe" as pe } from "./index__part-4"
import { "285__part-5__Ee" as Ee } from "./index__part-5"
import { "285__part-10__Vt" as Vt } from "./index__part-10"
import { "285__part-11__ln" as ln } from "./index__part-11"
import { "285__part-12__An" as An } from "./index__part-12"
import { "285__part-13__vn" as vn } from "./index__part-13"
var yn
var mn
import * as /* [auto-meaningful-name] */$$_$$_223_911 from "../../223/911"
import * as /* [auto-meaningful-name] */$$_$$_1026_1011 from "../../1026/1011"
import * as /* [auto-meaningful-name] */$$_$$_514 from "../../514"
import * as /* [auto-meaningful-name] */$$_$$_789 from "../../789"
import * as /* [auto-meaningful-name] */$$_686 from "../686"
import * as /* [auto-meaningful-name] */$$_$$_223_780 from "../../223/780"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_$$_19 from "../../19"
import * as /* [auto-meaningful-name] */$$_605 from "../605"
var wn = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "form"]
function En() {
  return mn || "ant"
}
function xn() {
  return yn || "anticon"
}
var Cn = function () {
  return {
    getPrefixCls: function (e, t) {
      return t || (e ? "".concat(En(), "-").concat(e) : En())
    },
    getIconPrefixCls: xn,
    getRootPrefixCls: function (e, t) {
      return e || mn || (t && t.includes("-") ? t.replace(/^(.*)-[^-]*$/, "$1") : En())
    }
  }
}
var On = function (e) {
  var /* [auto-meaningful-name] */l$Form
  var /* [auto-meaningful-name] */$$_605$a$Form
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$csp = e.csp
  var /* [auto-meaningful-name] */e$autoInsertSpaceInButton = e.autoInsertSpaceInButton
  var /* [auto-meaningful-name] */e$form = e.form
  var /* [auto-meaningful-name] */e$locale = e.locale
  var /* [auto-meaningful-name] */e$componentSize = e.componentSize
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$space = e.space
  var /* [auto-meaningful-name] */e$virtual = e.virtual
  var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
  var /* [auto-meaningful-name] */e$legacyLocale = e.legacyLocale
  var /* [auto-meaningful-name] */e$parentContext = e.parentContext
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var m = React.useCallback(function (t, n) {
    var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
    if (n) {
      return n
    }
    var i = e$prefixCls || e$parentContext.getPrefixCls("")
    return t ? "".concat(i, "-").concat(t) : i
  }, [e$parentContext.getPrefixCls, e.prefixCls])
  var y = $$_$$_19.a($$_$$_19.a({}, e$parentContext), {
    csp: e$csp,
    autoInsertSpaceInButton: e$autoInsertSpaceInButton,
    locale: e$locale || e$legacyLocale,
    direction: e$direction,
    space: e$space,
    virtual: e$virtual,
    dropdownMatchSelectWidth: e$dropdownMatchSelectWidth,
    getPrefixCls: m
  })
  wn.forEach(function (t) {
    var n = e[t]
    if (n) {
      y[t] = n
    }
  })
  var b = function (e, t, n) {
    var r = React.useRef({})
    if (!("value" in r.current && !n(r.current.condition, t))) {
      r.current.value = e()
      r.current.condition = t
    }
    return r.current.value
  }(function () {
    return y
  }, y, function (e, t) {
    var n = Object.keys(e)
    var r = Object.keys(t)
    return n.length !== r.length || n.some(function (n) {
      return e[n] !== t[n]
    })
  })
  var w = React.useMemo(function () {
    return {
      prefixCls: e$iconPrefixCls,
      csp: e$csp
    }
  }, [e$iconPrefixCls])
  var E = e$children
  var x = {}
  if (e$locale) {
    x = (null === (l$Form = e$locale.Form) || undefined === l$Form ? undefined : l$Form.defaultValidateMessages) || (null === ($$_605$a$Form = $$_605.a.Form) || undefined === $$_605$a$Form ? undefined : $$_605$a$Form.defaultValidateMessages) || {}
  }
  if (e$form && e$form.validateMessages) {
    x = $$_$$_19.a($$_$$_19.a({}, x), e$form.validateMessages)
  }
  if (Object.keys(x).length > 0) {
    E = React.createElement(pe, {
      validateMessages: x
    }, e$children)
  }
  if (e$locale) {
    E = React.createElement(Ee, {
      locale: e$locale,
      _ANT_MARK__: "internalMark"
    }, E)
  }
  if (e$iconPrefixCls) {
    E = React.createElement($$_$$_223_780.a.Provider, {
      value: w
    }, E)
  }
  if (e$componentSize) {
    E = React.createElement($$_$$_514.a, {
      size: e$componentSize
    }, E)
  }
  return React.createElement($$_$$_789.b.Provider, {
    value: b
  }, E)
}
var kn = function (e) {
  React.useEffect(function () {
    if (e.direction) {
      Vt.config({
        rtl: "rtl" === e.direction
      })
      ln.config({
        rtl: "rtl" === e.direction
      })
    }
  }, [e.direction])
  return React.createElement($$_686.a, null, function (t, n, o) {
    return React.createElement($$_$$_789.a, null, function (t) {
      return React.createElement(On, $$_$$_19.a({
        parentContext: t,
        legacyLocale: o
      }, e))
    })
  })
}
kn.ConfigContext = $$_$$_789.b
kn.SizeContext = $$_$$_514.b
kn.config = function (e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$iconPrefixCls = e.iconPrefixCls
  var /* [auto-meaningful-name] */e$theme = e.theme
  if (undefined !== e$prefixCls) {
    mn = e$prefixCls
  }
  if (undefined !== e$iconPrefixCls) {
    yn = e$iconPrefixCls
  }
  if (e$theme) {
    (function (e, t) {
      var n = {}
      var r = function (e, t) {
        var n = e.clone()
        return (n = (null === t || undefined === t ? undefined : t(n)) || n).toRgbString()
      }
      var i = function (e, t) {
        var i = new An(e)
        var o = $$_$$_223_911.a(i.toRgbString())
        n["".concat(t, "-color")] = r(i)
        n["".concat(t, "-color-disabled")] = o[1]
        n["".concat(t, "-color-hover")] = o[4]
        n["".concat(t, "-color-active")] = o[7]
        n["".concat(t, "-color-outline")] = i.clone().setAlpha(.2).toRgbString()
        n["".concat(t, "-color-deprecated-bg")] = o[1]
        n["".concat(t, "-color-deprecated-border")] = o[3]
      }
      if (t.primaryColor) {
        i(t.primaryColor, "primary")
        var o = new An(t.primaryColor)
        var a = $$_$$_223_911.a(o.toRgbString())
        a.forEach(function (e, t) {
          n["primary-".concat(t + 1)] = e
        })
        n["primary-color-deprecated-l-35"] = r(o, function (e) {
          return e.lighten(35)
        })
        n["primary-color-deprecated-l-20"] = r(o, function (e) {
          return e.lighten(20)
        })
        n["primary-color-deprecated-t-20"] = r(o, function (e) {
          return e.tint(20)
        })
        n["primary-color-deprecated-t-50"] = r(o, function (e) {
          return e.tint(50)
        })
        n["primary-color-deprecated-f-12"] = r(o, function (e) {
          return e.setAlpha(.12 * e.getAlpha())
        })
        var s = new An(a[0])
        n["primary-color-active-deprecated-f-30"] = r(s, function (e) {
          return e.setAlpha(.3 * e.getAlpha())
        })
        n["primary-color-active-deprecated-d-02"] = r(s, function (e) {
          return e.darken(2)
        })
      }
      if (t.successColor) {
        i(t.successColor, "success")
      }
      if (t.warningColor) {
        i(t.warningColor, "warning")
      }
      if (t.errorColor) {
        i(t.errorColor, "error")
      }
      if (t.infoColor) {
        i(t.infoColor, "info")
      }
      var c = Object.keys(n).map(function (t) {
        return "--".concat(e, "-").concat(t, ": ").concat(n[t], ";")
      })
      $$_$$_1026_1011.a("\n  :root {\n    ".concat(c.join("\n"), "\n  }\n  "), "".concat(vn, "-dynamic-theme"))
    })(En(), e$theme)
  }
}
var Sn = kn
export { Cn as "285__part-14__Cn" }
export { kn as "285__part-14__kn" }
export { Sn as "285__part-14__Sn" }
