/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1541__part-3
 */

"use strict"

import { m } from "./index__part-1"
import _ from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_795 from "../795"
import * as /* [auto-meaningful-name] */$$_559_560 from "../559/560"
import * as /* [auto-meaningful-name] */$$_742 from "../742"
var O = function (e, t) {
  var n
  var /* [auto-meaningful-name] */n$props
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var a = e.id
  var /* [auto-meaningful-name] */e$inputElement = e.inputElement
  var /* [auto-meaningful-name] */e$disabled = e.disabled
  var /* [auto-meaningful-name] */e$tabIndex = e.tabIndex
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$autoComplete = e.autoComplete
  var /* [auto-meaningful-name] */e$editable = e.editable
  var /* [auto-meaningful-name] */e$accessibilityIndex = e.accessibilityIndex
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$maxLength = e.maxLength
  var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
  var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onPaste = e.onPaste
  var /* [auto-meaningful-name] */e$onCompositionStart = e.onCompositionStart
  var /* [auto-meaningful-name] */e$onCompositionEnd = e.onCompositionEnd
  var /* [auto-meaningful-name] */e$open = e.open
  var /* [auto-meaningful-name] */e$attrs = e.attrs
  var A = e$inputElement || React.createElement("input", null)
  var I = A
  var /* [auto-meaningful-name] */I$ref = I.ref
  var /* [auto-meaningful-name] */I$props = I.props
  var /* [auto-meaningful-name] */I$props$onKeyDown = I$props.onKeyDown
  var /* [auto-meaningful-name] */I$props$onChange = I$props.onChange
  var /* [auto-meaningful-name] */I$props$onMouseDown = I$props.onMouseDown
  var /* [auto-meaningful-name] */I$props$onCompositionStart = I$props.onCompositionStart
  var /* [auto-meaningful-name] */I$props$onCompositionEnd = I$props.onCompositionEnd
  var /* [auto-meaningful-name] */I$props$style = I$props.style
  return A = React.cloneElement(A, $$_21.a($$_21.a({
    id: a,
    ref: m(t, I$ref),
    disabled: e$disabled,
    tabIndex: e$tabIndex,
    autoComplete: e$autoComplete || "off",
    type: "search",
    autoFocus: e$autoFocus,
    className: _("".concat(e$prefixCls, "-selection-search-input"), null === (n = A) || undefined === n || null === (n$props = n.props) || undefined === n$props ? undefined : n$props.className),
    style: $$_21.a($$_21.a({}, I$props$style), {}, {
      opacity: e$editable ? null : 0
    }),
    role: "combobox",
    "aria-expanded": e$open,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(a, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(a, "_list"),
    "aria-activedescendant": "".concat(a, "_list_").concat(e$accessibilityIndex)
  }, e$attrs), {}, {
    value: e$editable ? e$value : "",
    maxLength: e$maxLength,
    readOnly: !e$editable,
    unselectable: e$editable ? null : "on",
    onKeyDown: function (e) {
      e$onKeyDown(e)
      if (I$props$onKeyDown) {
        I$props$onKeyDown(e)
      }
    },
    onMouseDown: function (e) {
      e$onMouseDown(e)
      if (I$props$onMouseDown) {
        I$props$onMouseDown(e)
      }
    },
    onChange: function (e) {
      e$onChange(e)
      if (I$props$onChange) {
        I$props$onChange(e)
      }
    },
    onCompositionStart: function (e) {
      e$onCompositionStart(e)
      if (I$props$onCompositionStart) {
        I$props$onCompositionStart(e)
      }
    },
    onCompositionEnd: function (e) {
      e$onCompositionEnd(e)
      if (I$props$onCompositionEnd) {
        I$props$onCompositionEnd(e)
      }
    },
    onPaste: e$onPaste
  }))
}
var w = React.forwardRef(O)
w.displayName = "Input"
var C = w
export { C }
