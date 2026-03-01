/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-97
 */

"use strict"

import { Ib, Nb, kb } from "./index__part-95"
import { Db, Bb } from "./index__part-96"
import * as /* [auto-meaningful-name] */Module_522 from /* 522 */"./522/index"
import * as /* [auto-meaningful-name] */Module_140 from /* 140 */"./140"
import * as /* [auto-meaningful-name] */Module_120 from /* 120 */"./120"
import * as /* [auto-meaningful-name] */Module_106 from /* 106 */"./106"
import * as /* [auto-meaningful-name] */Module_103 from /* 103 */"./103"
import * as /* [auto-meaningful-name] */Module_19 from /* 19 */"./19"
import * as /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_1541 from /* 1541 */"./1541/index"
import * as /* [auto-meaningful-name] */Module_107 from /* 107 */"./107"
import * as /* [auto-meaningful-name] */Module_398 from /* 398 */"./398"
import * as /* [auto-meaningful-name] */Module_490 from /* 490 */"./490"
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
  Module_398.a("tags" !== e$mode || b.every(function (e) {
    return !e.disabled
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag.")
  if ("tags" === e$mode || "combobox" === e$mode) {
    var y = b.some(function (e) {
      return e.options ? e.options.some(function (e) {
        return "number" === typeof ("value" in e ? e.value : e.key)
      }) : "number" === typeof ("value" in e ? e.value : e.key)
    })
    Module_398.a(!y, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.")
  }
  Module_398.a("combobox" !== e$mode || !e$optionLabelProp, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.")
  Module_398.a("combobox" === e$mode || !e$backfill, "`backfill` only works with `combobox` mode.")
  Module_398.a("combobox" === e$mode || !e$getInputElement, "`getInputElement` only work with `combobox` mode.")
  Module_398.b("combobox" !== e$mode || !e$getInputElement || !e$allowClear || !e$placeholder, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.")
  if (e$onSearch && !v && "combobox" !== e$mode && "tags" !== e$mode) {
    Module_398.a(false, "`onSearch` should work with `showSearch` instead of use alone.")
  }
  Module_398.b(!e$defaultOpen || e$autoFocus, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.")
  if (undefined !== e$value && null !== e$value) {
    var E = Module_490.d(e$value)
    Module_398.a(!e$labelInValue || E.every(function (e) {
      return "object" === Module_107.a(e) && ("key" in e || "value" in e)
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`")
    Module_398.a(!_ || Array.isArray(e$value), "`value` should be array when `mode` is `multiple` or `tags`")
  }
  if (e$children) {
    var O = null
    Db(e$children).some(function (e) {
      if (!React.isValidElement(e) || !e.type) {
        return false
      }
      var /* [auto-meaningful-name] */e$type = e.type
      return !e$type.isSelectOption && (e$type.isSelectOptGroup ? !Db(e.props.children).every(function (t) {
        return !(React.isValidElement(t) && e.type && !t.type.isSelectOption) || (O = t.type, false)
      }) : (O = e$type, true))
    })
    if (O) {
      Module_398.a(false, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(O.displayName || O.name || O, "`."))
    }
    Module_398.a(undefined === e$inputValue, "`inputValue` is deprecated, please use `searchValue` instead.")
  }
}
var Vb = Module_1541.a({
  prefixCls: "rc-select",
  components: {
    optionList: Ib
  },
  convertChildrenToData: Bb,
  flattenOptions: Module_522.e,
  getLabeledValue: Module_522.f,
  filterOptions: Module_522.c,
  isValueDisabled: Module_522.h,
  findValueOption: Module_522.d,
  warningProps: Hb,
  fillOptionsWithMissingValue: Module_522.b
})
var zb = function (e) {
  Module_120.a(n, e)
  var t = Module_140.a(n)
  function n() {
    var e
    Module_103.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
      o[i] = arguments[i]
    }
    (e = t.call.apply(t, [this].concat(o))).selectRef = React.createRef()
    e.focus = function () {
      e.selectRef.current.focus()
    }
    e.blur = function () {
      e.selectRef.current.blur()
    }
    return e
  }
  Module_106.a(n, [
    {
      key: "render",
      value: function () {
        return React.createElement(Vb, Module_19.a({
          ref: this.selectRef
        }, this.props))
      }
    }
  ])
  return n
}(React.Component)
zb.Option = Nb
zb.OptGroup = kb
var Yb = zb
export { Yb }
