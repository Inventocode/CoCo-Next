/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1500__part-3
 */

"use strict"

import { "1500__part-1__m" as m } from "./index__part-1"
import _ from "../8"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_20 from "../20"
import * as /* [auto-meaningful-name] */$$_783 from "../783"
import * as /* [auto-meaningful-name] */$$_556_557 from "../556/557"
import * as /* [auto-meaningful-name] */$$_733 from "../733"
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
  var I = e$inputElement || React.createElement("input", null)
  var A = I
  var /* [auto-meaningful-name] */A$ref = A.ref
  var /* [auto-meaningful-name] */A$props = A.props
  var /* [auto-meaningful-name] */A$props$onKeyDown = A$props.onKeyDown
  var /* [auto-meaningful-name] */A$props$onChange = A$props.onChange
  var /* [auto-meaningful-name] */A$props$onMouseDown = A$props.onMouseDown
  var /* [auto-meaningful-name] */A$props$onCompositionStart = A$props.onCompositionStart
  var /* [auto-meaningful-name] */A$props$onCompositionEnd = A$props.onCompositionEnd
  var /* [auto-meaningful-name] */A$props$style = A$props.style
  return I = React.cloneElement(I, $$_20.a($$_20.a({
    id: a,
    ref: m(t, A$ref),
    disabled: e$disabled,
    tabIndex: e$tabIndex,
    autoComplete: e$autoComplete || "off",
    type: "search",
    autoFocus: e$autoFocus,
    className: _("".concat(e$prefixCls, "-selection-search-input"), null === (n = I) || undefined === n || null === (n$props = n.props) || undefined === n$props ? undefined : n$props.className),
    style: $$_20.a($$_20.a({}, A$props$style), {}, {
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
      if (A$props$onKeyDown) {
        A$props$onKeyDown(e)
      }
    },
    onMouseDown: function (e) {
      e$onMouseDown(e)
      if (A$props$onMouseDown) {
        A$props$onMouseDown(e)
      }
    },
    onChange: function (e) {
      e$onChange(e)
      if (A$props$onChange) {
        A$props$onChange(e)
      }
    },
    onCompositionStart: function (e) {
      e$onCompositionStart(e)
      if (A$props$onCompositionStart) {
        A$props$onCompositionStart(e)
      }
    },
    onCompositionEnd: function (e) {
      e$onCompositionEnd(e)
      if (A$props$onCompositionEnd) {
        A$props$onCompositionEnd(e)
      }
    },
    onPaste: e$onPaste
  }))
}
var w = React.forwardRef(O)
w.displayName = "Input"
var C = w
export { C as "1500__part-3__C" }
