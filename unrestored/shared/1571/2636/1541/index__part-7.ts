/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1541__part-7
 */

"use strict"

import { d } from "./index__part-0"
import { m } from "./index__part-1"
import { v } from "./index__part-2"
import { S, N, x } from "./index__part-4"
import { Ke } from "./index__part-6"
import * as /* [auto-meaningful-name] */$$_490 from "../490"
import * as /* [auto-meaningful-name] */$$_742 from "../742"
import _ from "../8"
import * as /* [auto-meaningful-name] */$$_331 from "../331"
import * as /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */$$_54 from "../54"
import * as /* [auto-meaningful-name] */$$_40_index from "../40/index"
import * as /* [auto-meaningful-name] */$$_79_index from "../79/index"
import * as /* [auto-meaningful-name] */$$_21 from "../21"
import * as /* [auto-meaningful-name] */$$_35 from "../35"
import * as /* [auto-meaningful-name] */$$_19 from "../19"
import * as /* [auto-meaningful-name] */$_1517 from "./1517"
import * as /* [auto-meaningful-name] */$$_522_index from "../522/index"
var Qe = ["prefixCls", "className", "id", "open", "defaultOpen", "options", "children", "mode", "value", "defaultValue", "labelInValue", "showSearch", "inputValue", "searchValue", "filterOption", "filterSort", "optionFilterProp", "autoClearSearchValue", "onSearch", "fieldNames", "allowClear", "clearIcon", "showArrow", "inputIcon", "menuItemSelectedIcon", "disabled", "loading", "defaultActiveFirstOption", "notFoundContent", "optionLabelProp", "backfill", "tabIndex", "getInputElement", "getRawInputElement", "getPopupContainer", "placement", "listHeight", "listItemHeight", "animation", "transitionName", "virtual", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "showAction", "direction", "tokenSeparators", "tagRender", "onPopupScroll", "onDropdownVisibleChange", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown", "onChange", "onSelect", "onDeselect", "onClear", "internalProps"]
var Ze = ["removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "tabIndex"]
function Je(e) {
  var /* [auto-meaningful-name] */e$prefixCls = e.prefixCls
  var /* [auto-meaningful-name] */e$components$optionList = e.components.optionList
  var /* [auto-meaningful-name] */e$convertChildrenToData = e.convertChildrenToData
  var /* [auto-meaningful-name] */e$flattenOptions = e.flattenOptions
  var /* [auto-meaningful-name] */e$getLabeledValue = e.getLabeledValue
  var /* [auto-meaningful-name] */e$filterOptions = e.filterOptions
  var /* [auto-meaningful-name] */e$isValueDisabled = e.isValueDisabled
  var /* [auto-meaningful-name] */e$findValueOption = e.findValueOption
  e.warningProps
  var /* [auto-meaningful-name] */e$fillOptionsWithMissingValue = e.fillOptionsWithMissingValue
  var /* [auto-meaningful-name] */e$omitDOMProps = e.omitDOMProps
  function C(e, C) {
    var A
    var /* [auto-meaningful-name] */e$prefixCls1 = e.prefixCls
    var j = undefined === e$prefixCls1 ? e$prefixCls : e$prefixCls1
    var /* [auto-meaningful-name] */e$className = e.className
    var k = e.id
    var /* [auto-meaningful-name] */e$open = e.open
    var /* [auto-meaningful-name] */e$defaultOpen = e.defaultOpen
    var /* [auto-meaningful-name] */e$options = e.options
    var /* [auto-meaningful-name] */e$children = e.children
    var /* [auto-meaningful-name] */e$mode = e.mode
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
    var /* [auto-meaningful-name] */e$labelInValue = e.labelInValue
    var /* [auto-meaningful-name] */e$showSearch = e.showSearch
    var /* [auto-meaningful-name] */e$inputValue = e.inputValue
    var /* [auto-meaningful-name] */e$searchValue = e.searchValue
    var /* [auto-meaningful-name] */e$filterOption = e.filterOption
    var /* [auto-meaningful-name] */e$filterSort = e.filterSort
    var /* [auto-meaningful-name] */e$optionFilterProp = e.optionFilterProp
    var q = undefined === e$optionFilterProp ? "value" : e$optionFilterProp
    var /* [auto-meaningful-name] */e$autoClearSearchValue = e.autoClearSearchValue
    var Q = undefined === e$autoClearSearchValue || e$autoClearSearchValue
    var /* [auto-meaningful-name] */e$onSearch = e.onSearch
    var /* [auto-meaningful-name] */e$fieldNames = e.fieldNames
    var /* [auto-meaningful-name] */e$allowClear = e.allowClear
    var /* [auto-meaningful-name] */e$clearIcon = e.clearIcon
    var /* [auto-meaningful-name] */e$showArrow = e.showArrow
    var /* [auto-meaningful-name] */e$inputIcon = e.inputIcon
    var /* [auto-meaningful-name] */e$menuItemSelectedIcon = e.menuItemSelectedIcon
    var /* [auto-meaningful-name] */e$disabled = e.disabled
    var /* [auto-meaningful-name] */e$loading = e.loading
    var /* [auto-meaningful-name] */e$defaultActiveFirstOption = e.defaultActiveFirstOption
    var /* [auto-meaningful-name] */e$notFoundContent = e.notFoundContent
    var ce = undefined === e$notFoundContent ? "Not Found" : e$notFoundContent
    var /* [auto-meaningful-name] */e$optionLabelProp = e.optionLabelProp
    var /* [auto-meaningful-name] */e$backfill = e.backfill
    e.tabIndex
    var /* [auto-meaningful-name] */e$getInputElement = e.getInputElement
    var /* [auto-meaningful-name] */e$getRawInputElement = e.getRawInputElement
    var /* [auto-meaningful-name] */e$getPopupContainer = e.getPopupContainer
    var /* [auto-meaningful-name] */e$placement = e.placement
    var /* [auto-meaningful-name] */e$listHeight = e.listHeight
    var ge = undefined === e$listHeight ? 200 : e$listHeight
    var /* [auto-meaningful-name] */e$listItemHeight = e.listItemHeight
    var ve = undefined === e$listItemHeight ? 20 : e$listItemHeight
    var /* [auto-meaningful-name] */e$animation = e.animation
    var /* [auto-meaningful-name] */e$transitionName = e.transitionName
    var /* [auto-meaningful-name] */e$virtual = e.virtual
    var /* [auto-meaningful-name] */e$dropdownStyle = e.dropdownStyle
    var /* [auto-meaningful-name] */e$dropdownClassName = e.dropdownClassName
    var /* [auto-meaningful-name] */e$dropdownMatchSelectWidth = e.dropdownMatchSelectWidth
    var /* [auto-meaningful-name] */e$dropdownRender = e.dropdownRender
    var /* [auto-meaningful-name] */e$dropdownAlign = e.dropdownAlign
    var /* [auto-meaningful-name] */e$showAction = e.showAction
    var Ie = undefined === e$showAction ? [] : e$showAction
    var /* [auto-meaningful-name] */e$direction = e.direction
    var /* [auto-meaningful-name] */e$tokenSeparators = e.tokenSeparators
    var /* [auto-meaningful-name] */e$tagRender = e.tagRender
    var /* [auto-meaningful-name] */e$onPopupScroll = e.onPopupScroll
    var /* [auto-meaningful-name] */e$onDropdownVisibleChange = e.onDropdownVisibleChange
    var /* [auto-meaningful-name] */e$onFocus = e.onFocus
    var /* [auto-meaningful-name] */e$onBlur = e.onBlur
    var /* [auto-meaningful-name] */e$onKeyUp = e.onKeyUp
    var /* [auto-meaningful-name] */e$onKeyDown = e.onKeyDown
    var /* [auto-meaningful-name] */e$onMouseDown = e.onMouseDown
    var /* [auto-meaningful-name] */e$onChange = e.onChange
    var /* [auto-meaningful-name] */e$onSelect = e.onSelect
    var /* [auto-meaningful-name] */e$onDeselect = e.onDeselect
    var /* [auto-meaningful-name] */e$onClear = e.onClear
    var /* [auto-meaningful-name] */e$internalProps = e.internalProps
    var Ve = undefined === e$internalProps ? {} : e$internalProps
    var ze = $$_54.a(e, Qe)
    var Ye = Ve.mark === $_1517.a
    var Je = e$omitDOMProps ? e$omitDOMProps(ze) : ze
    Ze.forEach(function (e) {
      delete Je[e]
    })
    var $e = React.useRef(null)
    var et = React.useRef(null)
    var tt = React.useRef(null)
    var nt = React.useRef(null)
    var rt = React.useMemo(function () {
      return (e$tokenSeparators || []).some(function (e) {
        return ["\n", "\r\n"].includes(e)
      })
    }, [e$tokenSeparators])
    var ot = function () {
      var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 10
      var t = React.useState(false)
      var n = $$_40_index.a(t, 2)
      var r = n[0]
      var o = n[1]
      var i = React.useRef(null)
      var a = function () {
        window.clearTimeout(i.current)
      }
      React.useEffect(function () {
        return a
      }, [])
      var c = function (t, n) {
        a()
        i.current = window.setTimeout(function () {
          o(t)
          if (n) {
            n()
          }
        }, e)
      }
      return [r, c, a]
    }()
    var it = $$_40_index.a(ot, 3)
    var at = it[0]
    var st = it[1]
    var ct = it[2]
    var lt = React.useState()
    var ut = $$_40_index.a(lt, 2)
    var dt = ut[0]
    var pt = ut[1]
    React.useEffect(function () {
      pt("rc_select_".concat($$_490.a()))
    }, [])
    var ft = k || dt
    var ht = e$optionLabelProp
    if (undefined === ht) {
      ht = e$options ? "label" : "children"
    }
    var mt = "combobox" !== e$mode && e$labelInValue
    var gt = "tags" === e$mode || "multiple" === e$mode
    var _t = undefined !== e$showSearch ? e$showSearch : gt || "combobox" === e$mode
    var vt = React.useState(false)
    var bt = $$_40_index.a(vt, 2)
    var yt = bt[0]
    var Et = bt[1]
    React.useEffect(function () {
      Et(d())
    }, [])
    var Ot = React.useRef(null)
    React.useImperativeHandle(C, function () {
      var /* [auto-meaningful-name] */tt$current
      var /* [auto-meaningful-name] */tt$current1
      var /* [auto-meaningful-name] */nt$current
      return {
        focus: null === (tt$current = tt.current) || undefined === tt$current ? undefined : tt$current.focus,
        blur: null === (tt$current1 = tt.current) || undefined === tt$current1 ? undefined : tt$current1.blur,
        scrollTo: null === (nt$current = nt.current) || undefined === nt$current ? undefined : nt$current.scrollTo
      }
    })
    var wt = v(e$defaultValue, {
      value: e$value
    })
    var Ct = $$_40_index.a(wt, 2)
    var Tt = Ct[0]
    var St = Ct[1]
    var At = React.useMemo(function () {
      return $$_490.e(Tt, {
        labelInValue: mt,
        combobox: "combobox" === e$mode
      })
    }, [Tt, mt])
    var It = $$_40_index.a(At, 2)
    var jt = It[0]
    var Nt = It[1]
    var Rt = React.useMemo(function () {
      return new Set(jt)
    }, [jt])
    var kt = React.useState(null)
    var xt = $$_40_index.a(kt, 2)
    var Dt = xt[0]
    var Mt = xt[1]
    var Lt = React.useState("")
    var Pt = $$_40_index.a(Lt, 2)
    var Bt = Pt[0]
    var Ft = Pt[1]
    var Gt = Bt
    if ("combobox" === e$mode && undefined !== Tt) {
      Gt = Tt
    } else {
      if (undefined !== e$searchValue) {
        Gt = e$searchValue
      } else {
        if (e$inputValue) {
          Gt = e$inputValue
        }
      }
    }
    var Wt = React.useMemo(function () {
      var e = e$options
      if (undefined === e) {
        e = e$convertChildrenToData(e$children)
      }
      if ("tags" === e$mode && e$fillOptionsWithMissingValue) {
        e = e$fillOptionsWithMissingValue(e, Tt, ht, e$labelInValue)
      }
      return e || []
    }, [e$options, e$children, e$mode, Tt])
    var Ut = React.useMemo(function () {
      return e$flattenOptions(Wt, e)
    }, [Wt])
    var Ht = function (e) {
      var t = React.useRef(null)
      var n = React.useMemo(function () {
        var t = new Map()
        e.forEach(function (e) {
          var /* [auto-meaningful-name] */e$value1 = e.value
          t.set(e$value1, e)
        })
        return t
      }, [e])
      t.current = n
      return function (e) {
        return e.map(function (e) {
          return t.current.get(e)
        }).filter(Boolean)
      }
    }(Ut)
    var Vt = React.useMemo(function () {
      if (!Gt || !_t) {
        return $$_79_index.a(Wt)
      }
      var e = e$filterOptions(Gt, Wt, {
        optionFilterProp: q,
        filterOption: "combobox" === e$mode && undefined === e$filterOption ? function () {
          return true
        } : e$filterOption
      })
      if ("tags" === e$mode && e.every(function (e) {
        return e[q] !== Gt
      })) {
        e.unshift({
          value: Gt,
          label: Gt,
          key: "__RC_SELECT_TAG_PLACEHOLDER__"
        })
      }
      return e$filterSort && Array.isArray(e) ? $$_79_index.a(e).sort(e$filterSort) : e
    }, [Wt, Gt, e$mode, _t, e$filterSort])
    var zt = React.useMemo(function () {
      return e$flattenOptions(Vt, e)
    }, [Vt])
    React.useEffect(function () {
      if (nt.current && nt.current.scrollTo) {
        nt.current.scrollTo(0)
      }
    }, [Gt])
    var Yt = React.useMemo(function () {
      var e = jt.map(function (e) {
        var t = Ht([e])
        var n = e$getLabeledValue(e, {
          options: t,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        })
        return $$_21.a($$_21.a({}, n), {}, {
          disabled: e$isValueDisabled(e, t)
        })
      })
      return e$mode || 1 !== e.length || null !== e[0].value || null !== e[0].label ? e : []
    }, [Tt, Wt, e$mode])
    Yt = function (e) {
      var t = React.useRef(e)
      return React.useMemo(function () {
        var n = new Map()
        t.current.forEach(function (e) {
          var /* [auto-meaningful-name] */e$value1 = e.value
          var /* [auto-meaningful-name] */e$label = e.label
          if (e$value1 !== e$label) {
            n.set(e$value1, e$label)
          }
        })
        var r = e.map(function (e) {
          var t = n.get(e.value)
          return e.isCacheable && t ? $$_21.a($$_21.a({}, e), {}, {
            label: t
          }) : e
        })
        t.current = r
        return r
      }, [e])
    }(Yt)
    var Kt = function (t, n, r) {
      var o = Ht([t])
      var i = e$findValueOption([t], o, {
        props: e
      })[0]
      if (!Ve.skipTriggerSelect) {
        var a = mt ? e$getLabeledValue(t, {
          options: o,
          prevValueMap: Nt,
          labelInValue: mt,
          optionLabelProp: ht
        }) : t
        if (n && e$onSelect) {
          e$onSelect(a, i)
        } else {
          if (!n && e$onDeselect) {
            e$onDeselect(a, i)
          }
        }
      }
      if (Ye) {
        if (n && Ve.onRawSelect) {
          Ve.onRawSelect(t, i, r)
        } else {
          if (!n && Ve.onRawDeselect) {
            Ve.onRawDeselect(t, i, r)
          }
        }
      }
    }
    var qt = React.useState([])
    var Xt = $$_40_index.a(qt, 2)
    var Qt = Xt[0]
    var Zt = Xt[1]
    var Jt = function (t) {
      if (!Ye || !Ve.skipTriggerChange) {
        var n = Ht(t)
        var r = $$_490.f(Array.from(t), {
          labelInValue: mt,
          options: n,
          getLabeledValue: e$getLabeledValue,
          prevValueMap: Nt,
          optionLabelProp: ht
        })
        var o = gt ? r : r[0]
        if (e$onChange && (0 !== jt.length || 0 !== r.length)) {
          var a = e$findValueOption(t, n, {
            prevValueOptions: Qt,
            props: e
          })
          Zt(a.map(function (e, n) {
            var r = $$_21.a({}, e)
            Object.defineProperty(r, "_INTERNAL_OPTION_VALUE_", {
              get: function () {
                return t[n]
              }
            })
            return r
          }))
          e$onChange(o, gt ? a : a[0])
        }
        St(o)
      }
    }
    var $t = function (e, t) {
      var n
      var /* [auto-meaningful-name] */t$selected = t.selected
      var /* [auto-meaningful-name] */t$source = t.source
      if (!e$disabled) {
        if (gt) {
          n = new Set(jt)
          if (t$selected) {
            n.add(e)
          } else {
            n.delete(e)
          }
        } else {
          (n = new Set()).add(e)
        }
        if (gt || !gt && Array.from(jt)[0] !== e) {
          Jt(Array.from(n))
        }
        Kt(e, !gt || t$selected, t$source)
        if ("combobox" === e$mode) {
          Ft(String(e))
          Mt("")
        } else {
          if (!(gt && !Q)) {
            Ft("")
            Mt("")
          }
        }
      }
    }
    var en = "combobox" === e$mode && "function" === typeof e$getInputElement && e$getInputElement() || null
    var tn = "function" === typeof e$getRawInputElement && e$getRawInputElement()
    var nn = v(undefined, {
      defaultValue: e$defaultOpen,
      value: e$open
    })
    var rn = $$_40_index.a(nn, 2)
    var on = rn[0]
    var an = rn[1]
    var sn = on
    var cn = !ce && !Vt.length
    if (e$disabled || cn && sn && "combobox" === e$mode) {
      sn = false
    }
    var ln
    var un = !cn && sn
    var dn = function (e) {
      var t = undefined !== e ? e : !sn
      if (!(on === t || e$disabled)) {
        an(t)
        if (e$onDropdownVisibleChange) {
          e$onDropdownVisibleChange(t)
        }
      }
    }
    if (tn) {
      ln = function (e) {
        dn(e)
      }
    }
    (function (e, t, n) {
      var r = React.useRef(null)
      r.current = {
        open: t,
        triggerOpen: n
      }
      React.useEffect(function () {
        function t(t) {
          var /* [auto-meaningful-name] */t$target = t.target
          if (t$target.shadowRoot && t.composed) {
            t$target = t.composedPath()[0] || t$target
          }
          if (r.current.open && e().filter(function (e) {
            return e
          }).every(function (e) {
            return !e.contains(t$target) && e !== t$target
          })) {
            r.current.triggerOpen(false)
          }
        }
        window.addEventListener("mousedown", t)
        return function () {
          return window.removeEventListener("mousedown", t)
        }
      }, [])
    })(function () {
      var /* [auto-meaningful-name] */et$current
      return [$e.current, null === (et$current = et.current) || undefined === et$current ? undefined : et$current.getPopupElement()]
    }, un, dn)
    var pn = function (e, t, n) {
      var r = true
      var o = e
      Mt(null)
      var i = n ? null : $$_522_index.g(e, e$tokenSeparators)
      var s = i
      if ("combobox" === e$mode) {
        if (t) {
          Jt([o])
        }
      } else if (i) {
        o = ""
        if ("tags" !== e$mode) {
          s = i.map(function (e) {
            var t = Ut.find(function (t) {
              return t.data[ht] === e
            })
            return t ? t.data.value : null
          }).filter(function (e) {
            return null !== e
          })
        }
        var c = Array.from(new Set([].concat($$_79_index.a(jt), $$_79_index.a(s))))
        Jt(c)
        c.forEach(function (e) {
          Kt(e, true, "input")
        })
        dn(false)
        r = false
      }
      Ft(o)
      if (e$onSearch && Gt !== o) {
        e$onSearch(o)
      }
      return r
    }
    React.useEffect(function () {
      if (on && e$disabled) {
        an(false)
      }
      if (e$disabled) {
        st(false)
      }
    }, [e$disabled])
    React.useEffect(function () {
      if (!(sn || gt || "combobox" === e$mode)) {
        pn("", false, false)
      }
    }, [sn])
    var fn = N()
    var hn = $$_40_index.a(fn, 2)
    var mn = hn[0]
    var gn = hn[1]
    var _n = React.useRef(false)
    var vn = []
    React.useEffect(function () {
      return function () {
        vn.forEach(function (e) {
          return clearTimeout(e)
        })
        vn.splice(0, vn.length)
      }
    }, [])
    var bn = React.useState(0)
    var yn = $$_40_index.a(bn, 2)
    var En = yn[0]
    var On = yn[1]
    var wn = undefined !== e$defaultActiveFirstOption ? e$defaultActiveFirstOption : "combobox" !== e$mode
    var Cn = React.useState(null)
    var Tn = $$_40_index.a(Cn, 2)
    var Sn = Tn[0]
    var An = Tn[1]
    var In = React.useState({})
    var jn = $$_40_index.a(In, 2)[1]
    S(function () {
      if (un) {
        var /* [auto-meaningful-name] */$e$current
        var t = Math.ceil(null === ($e$current = $e.current) || undefined === $e$current ? undefined : $e$current.offsetWidth)
        if (!(Sn === t || Number.isNaN(t))) {
          An(t)
        }
      }
    }, [un])
    var Nn
    var Rn = React.createElement(e$components$optionList, {
      ref: nt,
      prefixCls: j,
      id: ft,
      open: sn,
      childrenAsData: !e$options,
      options: Vt,
      fieldNames: e$fieldNames,
      flattenOptions: zt,
      multiple: gt,
      values: Rt,
      height: ge,
      itemHeight: ve,
      onSelect: function (e, t) {
        $t(e, $$_21.a($$_21.a({}, t), {}, {
          source: "option"
        }))
      },
      onToggleOpen: dn,
      onActiveValue: function (e, t) {
        var n = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : {}
        var /* [auto-meaningful-name] */n$source = n.source
        var o = undefined === n$source ? "keyboard" : n$source
        On(t)
        if (e$backfill && "combobox" === e$mode && null !== e && "keyboard" === o) {
          Mt(String(e))
        }
      },
      defaultActiveFirstOption: wn,
      notFoundContent: ce,
      onScroll: e$onPopupScroll,
      searchValue: Gt,
      menuItemSelectedIcon: e$menuItemSelectedIcon,
      virtual: false !== e$virtual && false !== e$dropdownMatchSelectWidth,
      onMouseEnter: function () {
        jn({})
      },
      direction: e$direction
    })
    if (!e$disabled && e$allowClear && (jt.length || Gt)) {
      Nn = React.createElement($$_742.a, {
        className: "".concat(j, "-clear"),
        onMouseDown: function () {
          if (Ye && Ve.onClear) {
            Ve.onClear()
          }
          if (e$onClear) {
            e$onClear()
          }
          Jt([])
          pn("", false, false)
        },
        customizeIcon: e$clearIcon
      }, "×")
    }
    var kn
    var xn = undefined !== e$showArrow ? e$showArrow : e$loading || !gt && "combobox" !== e$mode
    if (xn) {
      kn = React.createElement($$_742.a, {
        className: _("".concat(j, "-arrow"), $$_35.a({}, "".concat(j, "-arrow-loading"), e$loading)),
        customizeIcon: e$inputIcon,
        customizeIconProps: {
          loading: e$loading,
          searchValue: Gt,
          open: sn,
          focused: at,
          showSearch: _t
        }
      })
    }
    var Dn = _(j, e$className, (A = {}, $$_35.a(A, "".concat(j, "-focused"), at), $$_35.a(A, "".concat(j, "-multiple"), gt), $$_35.a(A, "".concat(j, "-single"), !gt), $$_35.a(A, "".concat(j, "-allow-clear"), e$allowClear), $$_35.a(A, "".concat(j, "-show-arrow"), xn), $$_35.a(A, "".concat(j, "-disabled"), e$disabled), $$_35.a(A, "".concat(j, "-loading"), e$loading), $$_35.a(A, "".concat(j, "-open"), sn), $$_35.a(A, "".concat(j, "-customize-input"), en), $$_35.a(A, "".concat(j, "-show-search"), _t), A))
    var Mn = React.createElement(Ke, {
      ref: et,
      disabled: e$disabled,
      prefixCls: j,
      visible: un,
      popupElement: Rn,
      containerWidth: Sn,
      animation: e$animation,
      transitionName: e$transitionName,
      dropdownStyle: e$dropdownStyle,
      dropdownClassName: e$dropdownClassName,
      direction: e$direction,
      dropdownMatchSelectWidth: e$dropdownMatchSelectWidth,
      dropdownRender: e$dropdownRender,
      dropdownAlign: e$dropdownAlign,
      placement: e$placement,
      getPopupContainer: e$getPopupContainer,
      empty: !Wt.length,
      getTriggerDOMNode: function () {
        return Ot.current
      },
      onPopupVisibleChange: ln
    }, tn ? React.cloneElement(tn, {
      ref: m(Ot, tn.props.ref)
    }) : React.createElement(x, $$_19.a({}, e, {
      domRef: Ot,
      prefixCls: j,
      inputElement: en,
      ref: tt,
      id: ft,
      showSearch: _t,
      mode: e$mode,
      accessibilityIndex: En,
      multiple: gt,
      tagRender: e$tagRender,
      values: Yt,
      open: sn,
      onToggleOpen: dn,
      searchValue: Gt,
      activeValue: Dt,
      onSearch: pn,
      onSearchSubmit: function (e) {
        if (e && e.trim()) {
          var t = Array.from(new Set([].concat($$_79_index.a(jt), [e])))
          Jt(t)
          t.forEach(function (e) {
            Kt(e, true, "input")
          })
          Ft("")
        }
      },
      onSelect: function (e, t) {
        $t(e, $$_21.a($$_21.a({}, t), {}, {
          source: "selection"
        }))
      },
      tokenWithEnter: rt
    })))
    return tn ? Mn : React.createElement("div", $$_19.a({
      className: Dn
    }, Je, {
      ref: $e,
      onMouseDown: function (e) {
        var /* [auto-meaningful-name] */et$current
        var /* [auto-meaningful-name] */e$target = e.target
        var r = null === (et$current = et.current) || undefined === et$current ? undefined : et$current.getPopupElement()
        if (r && r.contains(e$target)) {
          var o = setTimeout(function () {
            var /* [auto-meaningful-name] */tt$current
            var t = vn.indexOf(o)
            if (!(-1 !== t && vn.splice(t, 1), ct(), yt || r.contains(document.activeElement))) {
              if (!(null === (tt$current = tt.current) || undefined === tt$current)) {
                tt$current.focus()
              }
            }
          })
          vn.push(o)
        }
        if (e$onMouseDown) {
          for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length > 1 ? arguments$length - 1 : 0), s = 1; s < arguments$length; s++) {
            a[s - 1] = arguments[s]
          }
          e$onMouseDown.apply(undefined, [e].concat(a))
        }
      },
      onKeyDown: function (e) {
        var /* [auto-meaningful-name] */nt$current
        var n = mn()
        var /* [auto-meaningful-name] */e$which = e.which
        if (e$which === $$_331.a.ENTER) {
          if ("combobox" !== e$mode) {
            e.preventDefault()
          }
          if (!sn) {
            dn(true)
          }
        }
        gn(!!Gt)
        if (e$which === $$_331.a.BACKSPACE && !n && gt && !Gt && jt.length) {
          var o = $$_490.c(Yt, jt)
          if (null !== o.removedValue) {
            Jt(o.values)
            Kt(o.removedValue, false, "input")
          }
        }
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, a = new Array(arguments$length > 1 ? arguments$length - 1 : 0), s = 1; s < arguments$length; s++) {
          a[s - 1] = arguments[s]
        }
        if (sn && nt.current) {
          (nt$current = nt.current).onKeyDown.apply(nt$current, [e].concat(a))
        }
        if (e$onKeyDown) {
          e$onKeyDown.apply(undefined, [e].concat(a))
        }
      },
      onKeyUp: function (e) {
        for (var /* [auto-meaningful-name] */arguments$length = arguments.length, n = new Array(arguments$length > 1 ? arguments$length - 1 : 0), r = 1; r < arguments$length; r++) {
          n[r - 1] = arguments[r]
        }
        var /* [auto-meaningful-name] */nt$current
        if (sn && nt.current) {
          (nt$current = nt.current).onKeyUp.apply(nt$current, [e].concat(n))
        }
        if (e$onKeyUp) {
          e$onKeyUp.apply(undefined, [e].concat(n))
        }
      },
      onFocus: function () {
        st(true)
        if (!e$disabled) {
          if (e$onFocus && !_n.current) {
            e$onFocus.apply(undefined, arguments)
          }
          if (Ie.includes("focus")) {
            dn(true)
          }
        }
        _n.current = true
      },
      onBlur: function () {
        st(false, function () {
          _n.current = false
          dn(false)
        })
        if (!e$disabled) {
          if (Gt) {
            if ("tags" === e$mode) {
              pn("", false, false)
              Jt(Array.from(new Set([].concat($$_79_index.a(jt), [Gt]))))
            } else {
              if ("multiple" === e$mode) {
                Ft("")
              }
            }
          }
          if (e$onBlur) {
            e$onBlur.apply(undefined, arguments)
          }
        }
      }
    }), at && !sn && React.createElement("span", {
      style: {
        width: 0,
        height: 0,
        display: "flex",
        overflow: "hidden",
        opacity: 0
      },
      "aria-live": "polite"
    }, "".concat(jt.join(", "))), Mn, kn, Nn)
  }
  return React.forwardRef(C)
}
export { Je }
