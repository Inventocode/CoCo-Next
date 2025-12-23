/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-102
 */

"use strict"

import { Nb, kb } from "./index__part-95"
import { Yb } from "./index__part-97"
import { Zb } from "./index__part-99"
import { ty } from "./index__part-100"
import { ay } from "./index__part-101"
import * as /* [auto-meaningful-name] */$_1044 from "./1044"
import * as /* [auto-meaningful-name] */$_803 from "./803"
import * as /* [auto-meaningful-name] */$_610 from "./610"
import * as /* [auto-meaningful-name] */$_801_index from "./801/index"
import * as /* [auto-meaningful-name] */$_486 from "./486"
import qv from "./88"
import * as Ln from "./35"
import * as Dn from "./19"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_517 from "./517"
import * as /* [auto-meaningful-name] */$_435 from "./435"
var ly = function (e, t) {
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
var uy = function (e, t) {
  var n
  var r
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$bordered = e.bordered
  var a = undefined === e$bordered || e$bordered
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
  var /* [auto-meaningful-name] */e$dropdownClassName = e.dropdownClassName
  var /* [auto-meaningful-name] */e$listHeight = e.listHeight
  var d = undefined === e$listHeight ? 256 : e$listHeight
  var /* [auto-meaningful-name] */e$listItemHeight = e.listItemHeight
  var h = undefined === e$listItemHeight ? 24 : e$listItemHeight
  var /* [auto-meaningful-name] */e$size = e.size
  var /* [auto-meaningful-name] */e$notFoundContent = e.notFoundContent
  var _ = ly(e, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "listItemHeight", "size", "notFoundContent"])
  var v = _React.useContext($_801_index.b)
  var /* [auto-meaningful-name] */v$getPopupContainer = v.getPopupContainer
  var /* [auto-meaningful-name] */v$getPrefixCls = v.getPrefixCls
  var /* [auto-meaningful-name] */v$renderEmpty = v.renderEmpty
  var /* [auto-meaningful-name] */v$direction = v.direction
  var /* [auto-meaningful-name] */v$virtual = v.virtual
  var /* [auto-meaningful-name] */v$dropdownMatchSelectWidth = v.dropdownMatchSelectWidth
  var T = _React.useContext($_517.b)
  var S = v$getPrefixCls("select", e$prefixCls)
  var A = v$getPrefixCls()
  var I = _React.useMemo(function () {
    var /* [auto-meaningful-name] */_$mode = _.mode
    if ("combobox" !== _$mode) {
      return "SECRET_COMBOBOX_MODE_DO_NOT_USE" === _$mode ? "combobox" : _$mode
    }
  }, [_.mode])
  var j = "multiple" === I || "tags" === I
  r = undefined !== e$notFoundContent ? e$notFoundContent : "combobox" === I ? null : v$renderEmpty("Select")
  var R = function (e) {
    var /* [auto-meaningful-name] */e$suffixIcon = e.suffixIcon
    var /* [auto-meaningful-name] */e$clearIcon = e.clearIcon
    var /* [auto-meaningful-name] */e$menuItemSelectedIcon = e.menuItemSelectedIcon
    var /* [auto-meaningful-name] */e$removeIcon = e.removeIcon
    var /* [auto-meaningful-name] */e$loading = e.loading
    var /* [auto-meaningful-name] */e$multiple = e.multiple
    var /* [auto-meaningful-name] */_e$prefixCls = e.prefixCls
    var c = e$clearIcon
    if (!e$clearIcon) {
      c = _React.createElement($_1044.a, null)
    }
    var l = null
    if (undefined !== e$suffixIcon) {
      l = e$suffixIcon
    } else if (e$loading) {
      l = _React.createElement($_610.a, {
        spin: true
      })
    } else {
      var u = "".concat(_e$prefixCls, "-suffix")
      l = function (e) {
        var /* [auto-meaningful-name] */e$open = e.open
        var /* [auto-meaningful-name] */e$showSearch = e.showSearch
        return e$open && e$showSearch ? _React.createElement(ay, {
          className: u
        }) : _React.createElement(Zb, {
          className: u
        })
      }
    }
    return {
      clearIcon: c,
      suffixIcon: l,
      itemIcon: undefined !== e$menuItemSelectedIcon ? e$menuItemSelectedIcon : e$multiple ? _React.createElement(ty, null) : null,
      removeIcon: undefined !== e$removeIcon ? e$removeIcon : _React.createElement($_803.a, null)
    }
  }(Dn.a(Dn.a({}, _), {
    multiple: j,
    prefixCls: S
  }))
  var /* [auto-meaningful-name] */R$suffixIcon = R.suffixIcon
  var /* [auto-meaningful-name] */R$itemIcon = R.itemIcon
  var /* [auto-meaningful-name] */R$removeIcon = R.removeIcon
  var /* [auto-meaningful-name] */R$clearIcon = R.clearIcon
  var L = $_486.a(_, ["suffixIcon", "itemIcon"])
  var P = N(e$dropdownClassName, Ln.a({}, "".concat(S, "-dropdown-").concat(v$direction), "rtl" === v$direction))
  var B = e$size || T
  var F = N((n = {}, Ln.a(n, "".concat(S, "-lg"), "large" === B), Ln.a(n, "".concat(S, "-sm"), "small" === B), Ln.a(n, "".concat(S, "-rtl"), "rtl" === v$direction), Ln.a(n, "".concat(S, "-borderless"), !a), n), e$className)
  return _React.createElement(Yb, Dn.a({
    ref: t,
    virtual: v$virtual,
    dropdownMatchSelectWidth: v$dropdownMatchSelectWidth
  }, L, {
    transitionName: $_435.b(A, "slide-up", _.transitionName),
    listHeight: d,
    listItemHeight: h,
    mode: I,
    prefixCls: S,
    direction: v$direction,
    inputIcon: R$suffixIcon,
    menuItemSelectedIcon: R$itemIcon,
    removeIcon: R$removeIcon,
    clearIcon: R$clearIcon,
    notFoundContent: r,
    className: F,
    getPopupContainer: e$getPopupContainer || v$getPopupContainer,
    dropdownClassName: P
  }))
}
var dy = _React.forwardRef(uy)
dy.SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE"
dy.Option = Nb
dy.OptGroup = kb
var py = dy
var fy = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var /* [auto-meaningful-name] */e$fontFamily = e.fontFamily
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = $_16_index.d()
  var a = _React.useState(te.db)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = $_16_index.e(function (e) {
    return e.common.isOffLine
  })
  var d = $_16_index.e(function (e) {
    return e.resource.fontFileList
  })
  _React.useEffect(function () {
    d.forEach(function () {
      var e = O.a(RegeneratorRuntime.mark(function e(t) {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (c[t.id] || !t.cdnUrl) {
                  e.next = 5
                  break
                }
                e.next = 3
                return te.bb(t.id, t.cdnUrl)
              case 3:
                te.db[t.id] = true
                l(te.db)
              case 5:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function (t) {
        return e.apply(this, arguments)
      }
    }())
  }, [d, c])
  var p = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(n) {
      var a
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (a = d.find(function (e) {
                return e.id === n
              }), !u || c[n] || !(null === a || undefined === a ? undefined : a.cdnUrl)) {
                e.next = 4
                break
              }
              i($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "download.offline"
                }),
                type: "error"
              }))
              return e.abrupt("return")
            case 4:
              if (e$onChange && e$onChange(e$keyName, n), c[n] || !(null === a || undefined === a ? undefined : a.cdnUrl)) {
                e.next = 11
                break
              }
              e.next = 8
              return te.bb(n, a.cdnUrl)
            case 8:
              te.db[n] = true
              l(te.db)
              i($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "download.success"
                }),
                type: "success"
              }))
            case 11:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t) {
      return e.apply(this, arguments)
    }
  }()
  return React.createElement(py, {
    className: qv.fontFamilyWrapper,
    value: e$fontFamily,
    optionLabelProp: "label",
    onChange: p,
    suffixIcon: React.createElement($_13_index.j, {
      type: "icon-dropdown-down"
    })
  }, d.map(function (e, t) {
    return React.createElement(py.Option, {
      key: t,
      value: e.id,
      label: e.name,
      className: qv.option
    }, React.createElement("div", {
      className: N(u && !c[e.id] && e.cdnUrl && qv.disabled),
      style: {
        fontFamily: e.id
      }
    }, e.name), React.createElement("div", {
      className: qv.iconBox
    }, e.id === e$fontFamily ? React.createElement($_13_index.j, {
      className: qv.selectedIcon,
      type: "icon-selected"
    }) : React.createElement(React.Fragment, null)))
  }))
})
export { py }
export { fy }
