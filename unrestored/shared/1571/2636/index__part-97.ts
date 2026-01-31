/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-97
 */

"use strict"

import { Ib, Nb, kb } from "./index__part-95"
import { Db, Bb } from "./index__part-96"
import * as /* [auto-meaningful-name] */$_522_index from "./522/index"
import * as /* [auto-meaningful-name] */$_140 from "./140"
import * as /* [auto-meaningful-name] */$_120 from "./120"
import * as /* [auto-meaningful-name] */$_106 from "./106"
import * as /* [auto-meaningful-name] */$_103 from "./103"
import * as Dn from "./19"
import { isValidElement, createRef, createElement, Component } from "react"
import * as /* [auto-meaningful-name] */$_1541_index from "./1541/index"
import * as /* [auto-meaningful-name] */$_107 from "./107"
import * as /* [auto-meaningful-name] */$_398 from "./398"
import * as /* [auto-meaningful-name] */$_490 from "./490"
var Hb = function (e) {
  var /* [auto-meaningful-name] */e$mode = e.mode
  var /* [auto-meaningful-name] */e$options = e.options
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$backfill = e.backfill
  var /* [auto-meaningful-name] */e$allowClear = e.allowClear
  var /* [auto-meaningful-name] */e$placeholder = e.placeholder
  var /* [auto-meaningful-name] */e$getInputElement = e.getInputElement
  var /* [auto-meaningful-name] */e$showSearch = e.showSearch
  var /* [auto-meaningful-name] */e$onSearch = e.onSearch
  var /* [auto-meaningful-name] */e$defaultOpen = e.defaultOpen
  var /* [auto-meaningful-name] */e$autoFocus = e.autoFocus
  var /* [auto-meaningful-name] */e$labelInValue = e.labelInValue
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$inputValue = e.inputValue
  var /* [auto-meaningful-name] */e$optionLabelProp = e.optionLabelProp
  var _ = "multiple" === e$mode || "tags" === e$mode
  var v = undefined !== e$showSearch ? e$showSearch : _ || "combobox" === e$mode
  var b = e$options || Bb(e$children)
  $_398.a("tags" !== e$mode || b.every(function (e) {
    return !e.disabled
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag.")
  if ("tags" === e$mode || "combobox" === e$mode) {
    var y = b.some(function (e) {
      return e.options ? e.options.some(function (e) {
        return "number" === typeof ("value" in e ? e.value : e.key)
      }) : "number" === typeof ("value" in e ? e.value : e.key)
    })
    $_398.a(!y, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.")
  }
  $_398.a("combobox" !== e$mode || !e$optionLabelProp, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.")
  $_398.a("combobox" === e$mode || !e$backfill, "`backfill` only works with `combobox` mode.")
  $_398.a("combobox" === e$mode || !e$getInputElement, "`getInputElement` only work with `combobox` mode.")
  $_398.b("combobox" !== e$mode || !e$getInputElement || !e$allowClear || !e$placeholder, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.")
  if (e$onSearch && !v && "combobox" !== e$mode && "tags" !== e$mode) {
    $_398.a(false, "`onSearch` should work with `showSearch` instead of use alone.")
  }
  $_398.b(!e$defaultOpen || e$autoFocus, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.")
  if (undefined !== e$value && null !== e$value) {
    var E = $_490.d(e$value)
    $_398.a(!e$labelInValue || E.every(function (e) {
      return "object" === $_107.a(e) && ("key" in e || "value" in e)
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`")
    $_398.a(!_ || Array.isArray(e$value), "`value` should be array when `mode` is `multiple` or `tags`")
  }
  if (e$children) {
    var O = null
    Db(e$children).some(function (e) {
      if (!isValidElement(e) || !e.type) {
        return false
      }
      var /* [auto-meaningful-name] */e$type = e.type
      return !e$type.isSelectOption && (e$type.isSelectOptGroup ? !Db(e.props.children).every(function (t) {
        return !(isValidElement(t) && e.type && !t.type.isSelectOption) || (O = t.type, false)
      }) : (O = e$type, true))
    })
    if (O) {
      $_398.a(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(O.displayName || O.name || O, "`."))
    }
    $_398.a(undefined === e$inputValue, "`inputValue` is deprecated, please use `searchValue` instead.")
  }
}
var Vb = $_1541_index.a({
  prefixCls: "rc-select",
  components: {
    optionList: Ib
  },
  convertChildrenToData: Bb,
  flattenOptions: $_522_index.e,
  getLabeledValue: $_522_index.f,
  filterOptions: $_522_index.c,
  isValueDisabled: $_522_index.h,
  findValueOption: $_522_index.d,
  warningProps: Hb,
  fillOptionsWithMissingValue: $_522_index.b
})
var zb = function (e) {
  $_120.a(n, e)
  var t = $_140.a(n)
  function n() {
    var e
    $_103.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      o[i] = arguments[i]
    }
    (e = t.call.apply(t, [this].concat(o))).selectRef = createRef()
    e.focus = function () {
      e.selectRef.current.focus()
    }
    e.blur = function () {
      e.selectRef.current.blur()
    }
    return e
  }
  $_106.a(n, [
    {
      key: "render",
      value: function () {
        return createElement(Vb, Dn.a({
          ref: this.selectRef
        }, this.props))
      }
    }
  ])
  return n
}(Component)
zb.Option = Nb
zb.OptGroup = kb
var Yb = zb
export { Yb }
