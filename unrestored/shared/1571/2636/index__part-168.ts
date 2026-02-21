/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-168
 */

"use strict"

import { mA } from "./index__part-163"
import { TA } from "./index__part-165"
import { kA } from "./index__part-167"
import * as /* [auto-meaningful-name] */$_364_index from "./364/index"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import * as yb from "./21"
import * as vb from "./54"
import * as /* [auto-meaningful-name] */$_140 from "./140"
import * as /* [auto-meaningful-name] */$_486 from "./486"
import * as /* [auto-meaningful-name] */$_79_index from "./79/index"
import * as /* [auto-meaningful-name] */$_120 from "./120"
import * as /* [auto-meaningful-name] */$_106 from "./106"
import * as /* [auto-meaningful-name] */$_103 from "./103"
import * as Ln from "./35"
import * as /* [auto-meaningful-name] */$_40_index from "./40/index"
import * as Dn from "./19"
import * as Tn from "./68"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, Component, createContext, useContext, useEffect, createElement, forwardRef, useRef } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_527 from "./527"
import /* [auto-meaningful-name] */$_5271 from "./527"
var MA = ["image", "icon", "sound"]
var LA = memo(function () {
  var e = useSelector(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  var t = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var r = useState("image")
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = function (e) {
    a(e)
  }
  var c = useSelector(function (e) {
    return e.uiConfig.resourceLibrary === K.j.ReadOnly
  })
  return React.createElement("div", {
    className: Classnames($_5271.resourceLayout, c && $_5271.readonly),
    "data-updated-at": e
  }, React.createElement("div", {
    className: $_5271.header
  }, React.createElement("span", {
    className: $_5271.title
  }, $_710$a$formatMessage({
    id: "Resource.ProjectLibrary"
  })), React.createElement("span", {
    className: $_5271.closeBtn,
    onClick: function () {
      t($$_$$_$$_$$_src_editor_redux_common_actions.Vi(undefined))
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-close-bold"
  }))), React.createElement("div", {
    className: $_5271.tab
  }, React.createElement("ul", null, MA.map(function (e) {
    return React.createElement("li", {
      key: e,
      className: i === e ? $_5271.selected : "",
      onClick: s.bind(null, e)
    }, React.createElement("span", null, $_710$a$formatMessage({
      id: e
    })))
  })), React.createElement("div", {
    className: $_5271.openMallBtn,
    onClick: function () {
      t($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ResourceLibrary, function () {}, false, "image" === i ? Tn.d.IMAGE : "icon" === i ? Tn.d.ICON : "sound" === i ? Tn.d.SOUND : undefined, s))
    }
  }, $_710$a$formatMessage({
    id: "Resource.ResourceMall"
  }), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: $_5271.rotate
  }))), React.createElement("div", {
    className: Classnames($_5271.body)
  }, "image" === i && React.createElement(mA, {
    readOnly: c
  }), "icon" === i && React.createElement(kA, {
    readOnly: c
  }), "sound" === i && React.createElement(TA, {
    readOnly: c
  })))
})
var PA = function (e) {
  $_120.a(n, e)
  var t = $_140.a(n)
  function n(e) {
    var r
    $_103.a(this, n);
    (r = t.call(this, e)).handleChange = function (e) {
      var /* [auto-meaningful-name] */r$props = r.props
      var /* [auto-meaningful-name] */r$props$disabled = r$props.disabled
      var /* [auto-meaningful-name] */r$props$onChange = r$props.onChange
      if (!r$props$disabled) {
        if (!("checked" in r.props)) {
          r.setState({
            checked: e.target.checked
          })
        }
        if (r$props$onChange) {
          r$props$onChange({
            target: yb.a(yb.a({}, r.props), {}, {
              checked: e.target.checked
            }),
            stopPropagation: function () {
              e.stopPropagation()
            },
            preventDefault: function () {
              e.preventDefault()
            },
            nativeEvent: e.nativeEvent
          })
        }
      }
    }
    r.saveInput = function (e) {
      r.input = e
    }
    var o = "checked" in e ? e.checked : e.defaultChecked
    r.state = {
      checked: o
    }
    return r
  }
  $_106.a(n, [
    {
      key: "focus",
      value: function () {
        this.input.focus()
      }
    }, {
      key: "blur",
      value: function () {
        this.input.blur()
      }
    }, {
      key: "render",
      value: function () {
        var e
        var /* [auto-meaningful-name] */this$props = this.props
        var /* [auto-meaningful-name] */this$props$prefixCls = this$props.prefixCls
        var /* [auto-meaningful-name] */this$props$className = this$props.className
        var /* [auto-meaningful-name] */this$props$style = this$props.style
        var /* [auto-meaningful-name] */this$props$name = this$props.name
        var /* [auto-meaningful-name] */this$props$id = this$props.id
        var /* [auto-meaningful-name] */this$props$type = this$props.type
        var /* [auto-meaningful-name] */this$props$disabled = this$props.disabled
        var /* [auto-meaningful-name] */this$props$readOnly = this$props.readOnly
        var /* [auto-meaningful-name] */this$props$tabIndex = this$props.tabIndex
        var /* [auto-meaningful-name] */this$props$onClick = this$props.onClick
        var /* [auto-meaningful-name] */this$props$onFocus = this$props.onFocus
        var /* [auto-meaningful-name] */this$props$onBlur = this$props.onBlur
        var /* [auto-meaningful-name] */this$props$onKeyDown = this$props.onKeyDown
        var /* [auto-meaningful-name] */this$props$onKeyPress = this$props.onKeyPress
        var /* [auto-meaningful-name] */this$props$onKeyUp = this$props.onKeyUp
        var /* [auto-meaningful-name] */this$props$autoFocus = this$props.autoFocus
        var /* [auto-meaningful-name] */this$props$value = this$props.value
        var /* [auto-meaningful-name] */this$props$required = this$props.required
        var E = vb.a(this$props, ["prefixCls", "className", "style", "name", "id", "type", "disabled", "readOnly", "tabIndex", "onClick", "onFocus", "onBlur", "onKeyDown", "onKeyPress", "onKeyUp", "autoFocus", "value", "required"])
        var O = Object.keys(E).reduce(function (e, t) {
          if (!("aria-" !== t.substr(0, 5) && "data-" !== t.substr(0, 5) && "role" !== t)) {
            e[t] = E[t]
          }
          return e
        }, {})
        var /* [auto-meaningful-name] */this$state$checked = this.state.checked
        var C = Classnames(this$props$prefixCls, this$props$className, (e = {}, Ln.a(e, "".concat(this$props$prefixCls, "-checked"), this$state$checked), Ln.a(e, "".concat(this$props$prefixCls, "-disabled"), this$props$disabled), e))
        return React.createElement("span", {
          className: C,
          style: this$props$style
        }, React.createElement("input", Dn.a({
          name: this$props$name,
          id: this$props$id,
          type: this$props$type,
          required: this$props$required,
          readOnly: this$props$readOnly,
          disabled: this$props$disabled,
          tabIndex: this$props$tabIndex,
          className: "".concat(this$props$prefixCls, "-input"),
          checked: !!this$state$checked,
          onClick: this$props$onClick,
          onFocus: this$props$onFocus,
          onBlur: this$props$onBlur,
          onKeyUp: this$props$onKeyUp,
          onKeyDown: this$props$onKeyDown,
          onKeyPress: this$props$onKeyPress,
          onChange: this.handleChange,
          autoFocus: this$props$autoFocus,
          ref: this.saveInput,
          value: this$props$value
        }, O)), React.createElement("span", {
          className: "".concat(this$props$prefixCls, "-inner")
        }))
      }
    }
  ], [
    {
      key: "getDerivedStateFromProps",
      value: function (e, t) {
        return "checked" in e ? yb.a(yb.a({}, t), {}, {
          checked: e.checked
        }) : null
      }
    }
  ])
  return n
}(Component)
PA.defaultProps = {
  prefixCls: "rc-checkbox",
  className: "",
  style: {},
  type: "checkbox",
  defaultChecked: false,
  onFocus: function () {},
  onBlur: function () {},
  onChange: function () {},
  onKeyDown: function () {},
  onKeyPress: function () {},
  onKeyUp: function () {}
}
var BA = PA
var FA = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var GA = createContext(null)
var WA = function (e, t) {
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$options = e.options
  var i = undefined === e$options ? [] : e$options
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var u = FA(e, ["defaultValue", "children", "options", "prefixCls", "className", "style", "onChange"])
  var d = useContext($_801_index.b)
  var /* [auto-meaningful-name] */d$getPrefixCls = d.getPrefixCls
  var /* [auto-meaningful-name] */d$direction = d.direction
  var m = useState(u.value || e$defaultValue || [])
  var g = $_40_index.a(m, 2)
  var _ = g[0]
  var v = g[1]
  var b = useState([])
  var y = $_40_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  useEffect(function () {
    if ("value" in u) {
      v(u.value || [])
    }
  }, [u.value])
  var w = function () {
    return i.map(function (e) {
      return "string" === typeof e ? {
        label: e,
        value: e
      } : e
    })
  }
  var C = d$getPrefixCls("checkbox", e$prefixCls)
  var T = "".concat(C, "-group")
  var S = $_486.a(u, ["value", "disabled"])
  if (i && i.length > 0) {
    e$children = w().map(function (e) {
      return createElement(KA, {
        prefixCls: C,
        key: e.value.toString(),
        disabled: "disabled" in e ? e.disabled : u.disabled,
        value: e.value,
        checked: -1 !== _.indexOf(e.value),
        onChange: e.onChange,
        className: "".concat(T, "-item"),
        style: e.style
      }, e.label)
    })
  }
  var A = {
    toggleOption: function (e) {
      var t = _.indexOf(e.value)
      var n = $_79_index.a(_)
      if (-1 === t) {
        n.push(e.value)
      } else {
        n.splice(t, 1)
      }
      if (!("value" in u)) {
        v(n)
      }
      var r = w()
      if (!(null === e$onChange || undefined === e$onChange)) {
        e$onChange(n.filter(function (e) {
          return -1 !== E.indexOf(e)
        }).sort(function (e, t) {
          return r.findIndex(function (t) {
            return t.value === e
          }) - r.findIndex(function (e) {
            return e.value === t
          })
        }))
      }
    },
    value: _,
    disabled: u.disabled,
    name: u.name,
    registerValue: function (e) {
      O(function (t) {
        return [].concat($_79_index.a(t), [e])
      })
    },
    cancelValue: function (e) {
      O(function (t) {
        return t.filter(function (t) {
          return t !== e
        })
      })
    }
  }
  var I = Classnames(T, Ln.a({}, "".concat(T, "-rtl"), "rtl" === d$direction), e$className)
  return createElement("div", Dn.a({
    className: I,
    style: e$style
  }, S, {
    ref: t
  }), createElement(GA.Provider, {
    value: A
  }, e$children))
}
var UA = forwardRef(WA)
var HA = memo(UA)
var VA = function (e, t) {
  var n = {}
  for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
    n[r] = e[r]
  }
  if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
    var o = 0
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
        n[r[o]] = e[r[o]]
      }
    }
  }
  return n
}
var zA = function (e, t) {
  var n
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$indeterminate = e.indeterminate
  var s = undefined !== e$indeterminate && e$indeterminate
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */e$onMouseEnter = e.onMouseEnter
  var /* [auto-meaningful-name] */e$onMouseLeave = e.onMouseLeave
  var /* [auto-meaningful-name] */e$skipGroup = e.skipGroup
  var p = undefined !== e$skipGroup && e$skipGroup
  var h = VA(e, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup"])
  var m = useContext($_801_index.b)
  var /* [auto-meaningful-name] */m$getPrefixCls = m.getPrefixCls
  var /* [auto-meaningful-name] */m$direction = m.direction
  var v = useContext(GA)
  var b = useRef(h.value)
  useEffect(function () {
    if (!(null === v || undefined === v)) {
      v.registerValue(h.value)
    }
    $_364_index.a("checked" in h || !!v || !("value" in h), "Checkbox", "`value` is not a valid prop, do you mean `checked`?")
  }, [])
  useEffect(function () {
    if (!p) {
      if (h.value !== b.current) {
        if (!(null === v || undefined === v)) {
          v.cancelValue(b.current)
        }
        if (!(null === v || undefined === v)) {
          v.registerValue(h.value)
        }
      }
      return function () {
        return null === v || undefined === v ? undefined : v.cancelValue(h.value)
      }
    }
  }, [h.value])
  var y = m$getPrefixCls("checkbox", e$prefixCls)
  var E = Dn.a({}, h)
  if (v && !p) {
    E.onChange = function () {
      if (h.onChange) {
        h.onChange.apply(h, arguments)
      }
      if (v.toggleOption) {
        v.toggleOption({
          label: e$children,
          value: h.value
        })
      }
    }
    E.name = v.name
    E.checked = -1 !== v.value.indexOf(h.value)
    E.disabled = h.disabled || v.disabled
  }
  var O = Classnames((n = {}, Ln.a(n, "".concat(y, "-wrapper"), true), Ln.a(n, "".concat(y, "-rtl"), "rtl" === m$direction), Ln.a(n, "".concat(y, "-wrapper-checked"), E.checked), Ln.a(n, "".concat(y, "-wrapper-disabled"), E.disabled), n), e$className)
  var w = Classnames(Ln.a({}, "".concat(y, "-indeterminate"), s))
  return createElement("label", {
    className: O,
    style: e$style,
    onMouseEnter: e$onMouseEnter,
    onMouseLeave: e$onMouseLeave
  }, createElement(BA, Dn.a({}, E, {
    prefixCls: y,
    className: w,
    ref: t
  })), undefined !== e$children && createElement("span", null, e$children))
}
var YA = forwardRef(zA)
YA.displayName = "Checkbox"
var KA = YA
var qA = KA
qA.Group = HA
qA.__ANT_CHECKBOX = true
var XA = qA
export { LA }
export { XA }
