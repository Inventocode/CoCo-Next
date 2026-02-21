/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-89
 */

"use strict"

import { Mv } from "../../../../../../unrestored/shared/1571/2636/index__part-88"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_ui_components_iconfont_index from "../../../../../shared/ui/components/iconfont/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49 from "../../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238 from "../../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_widget_builtIn_types from "../../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index from "../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_tools_index from "../../../../../shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_redux_common_actions from "../../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_ui_components_index from "../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index from "../../../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../../../../unrestored/shared/1571/2636/11"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../../unrestored/shared/1571/2636/10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_150 from "../../../../../../unrestored/shared/1571/2636/150"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501 from "../../../../../../unrestored/shared/1571/2636/150"
var Bv = memo(function (e) {
  var t
  var n = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$toggleAttributeVisible = e.toggleAttributeVisible
  var /* [auto-meaningful-name] */e$onCopyToCurrentScreen = e.onCopyToCurrentScreen
  var /* [auto-meaningful-name] */e$onHide = e.onHide
  var /* [auto-meaningful-name] */e$onShow = e.onShow
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isChildren = e.isChildren
  var /* [auto-meaningful-name] */e$isLast = e.isLast
  var /* [auto-meaningful-name] */e$className = e.className
  var E = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$readonly = e.readonly
  var w = undefined !== e$readonly && e$readonly
  var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var A = useRef(null)
  var j = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var R = useState(true)
  var x = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(R, 2)
  var D = x[0]
  var M = x[1]
  var L = useState(false)
  var P = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  useEffect(function () {
    var e = function e() {
      F(false)
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
    if (B) {
      document.addEventListener("click", e, true)
      document.addEventListener("contextmenu", e, true)
    }
    return function () {
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
  }, [B])
  useEffect(function () {
    if (e$selected && A.current) {
      A.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }, [e$selected])
  var G = function (e) {
    e.stopPropagation()
    e$onDelete(n)
  }
  var W = function () {
    e$onCopyToCurrentScreen(n)
  }
  return React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.itemWrapper, E)
  }, React.createElement($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a, {
    placement: "bottomLeft",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        F(false)
      }
    },
    visible: B,
    arrowPointAtCenter: true,
    overlayClassName: "popoverOverlay",
    content: function () {
      return React.createElement("div", {
        className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.popoverWrapper,
        onContextMenu: function (e) {
          return e.preventDefault()
        }
      }, !e$isInvisibleWidget && React.createElement("div", {
        className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.menuItem,
        onMouseDown: W
      }, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: "copyAndPaste"
      })), React.createElement("div", {
        className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.menuItem, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.delete),
        onMouseDown: G
      }, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: "delete"
      })))
    }
  }, React.createElement("div", {
    ref: A,
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.item, (t = {}, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.selected, e$selected && j), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.selectedLight, e$selected && !j), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.children, e$isChildren), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.parent, !!e$children), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.expanded, D), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.notLast, !e$isLast && e$isChildren), t)),
    onContextMenu: function (e) {
      e.preventDefault()
      if (!(w || e$type !== $$_$$_$$_$$_widget_builtIn_types.c && e$type !== $$_$$_$$_$$_widget_builtIn_types.a && e$isChildren)) {
        F(true)
      }
    },
    onClick: function () {
      e$onSelect(n)
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.left
  }, React.createElement("span", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.foldIconContainer,
    onClick: function (e) {
      M(!D)
      e.stopPropagation()
    }
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a, {
    type: "icon-fold-left",
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.foldIcon
  })), $$_$$_$$_$$_$$_shared_tools_index.X(e$icon) ? React.createElement("img", {
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetIcon, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetUrlIcon),
    src: e$icon,
    alt: e$title,
    draggable: false
  }) : React.createElement($$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a, {
    type: e$icon,
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetIcon
  }), React.createElement("span", {
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.label, !e$visible && $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.labelGray)
  }, e$title)), React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.right
  }, !e$isInvisibleWidget && e$type !== $$_$$_$$_$$_widget_builtIn_types.c && React.createElement("div", {
    onClick: function (e) {
      e.stopPropagation()
      if (!e$visible) {
        e$onShow(n)
      } else {
        e$onHide(n)
      }
    },
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.controlIcon, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.seeIcon)
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a, {
    type: e$visible ? "icon-see" : "icon-see-disable"
  })), React.createElement("div", {
    onClick: function (e) {
      e.stopPropagation()
      e$toggleAttributeVisible(n)
    },
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.controlIcon
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a, {
    type: "icon-attribute"
  }))))), D && e$children)
})
var Fv = memo(function () {
  var /* [auto-meaningful-name] */u$invisibleWidgetIds
  var t
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var r = useDispatch()
  var o = useRef()
  var i = useSelector(function (e) {
    return e.common.editAreaUpdatedAt
  })
  var a = useSelector(function (e) {
    return e.common.widgetAttributeVisible
  })
  var s = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var c = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var l = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var u = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238.d()
  var d = useState(false)
  var p = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState(false)
  var b = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(false)
  var w = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(O, 2)
  var C = w[0]
  var T = w[1]
  var A = useState(false)
  var j = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(A, 2)
  var R = j[0]
  var D = j[1]
  var M = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly
  if (!u) {
    return null
  }
  var L = function (e) {
    var t
    var n
    r($$_$$_$$_$$_redux_common_actions.ug(e))
    if (s === e && a) {
      r($$_$$_$$_$$_redux_common_actions.fj(false))
    } else {
      if (s === e && l) {
        $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
        if (!(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t)) {
          t.flyout.hide()
        }
      } else {
        $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(e))
      }
    }
  }
  var P = function (e) {
    var t
    var n
    if (!(r($$_$$_$$_$$_redux_common_actions.ug(e)), s === e && l)) {
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(e))
    }
    if (s === e && a) {
      r($$_$$_$$_$$_redux_common_actions.fj(false))
      if (!(null === (n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
    } else {
      r($$_$$_$$_$$_redux_common_actions.fj(true))
    }
  }
  var B = function (e) {
    r($$_$$_$$_$$_redux_common_actions.Lg(e, "visible", true, true, true))
  }
  var F = function (e) {
    r($$_$$_$$_$$_redux_common_actions.Lg(e, "visible", false, true, true))
  }
  var G = function (e) {
    r($$_$$_$$_$$_redux_common_actions.Ef($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.w(e)))
  }
  var W = function (e) {
    var t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
    if (t) {
      var i = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Fb(t.id || "")
      var a = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: "deleteWidget"
      }) + "“" + $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.f(i, 10) + "”?"
      if (t.type === $$_$$_$$_$$_widget_builtIn_types.h) {
        o.current = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
        return void r($$_$$_$$_$$_redux_common_actions.zh({
          onConfirm: H,
          onClose: V,
          allowText: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: "cloudDB.DeleteWidgetsTips"
          })
        }))
      }
      var s = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.z.checkFieldValueIsSelected("WIDGET_ID", e)
      var c = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.z.checkSomeFieldValueIsSelected("WIDGET_ID", $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.U(e))
      if (s || c) {
        o.current = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
        r($$_$$_$$_$$_redux_common_actions.zh({
          onConfirm: H,
          onClose: V,
          allowText: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: c ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        r($$_$$_$$_$$_redux_common_actions.Mf(e, u.id))
        o.current = undefined
      }
    }
  }
  var U = function (e) {
    var t
    var n
    var o = e
    r($$_$$_$$_$$_redux_common_actions.ug(o))
    if (s === o && l) {
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
      if (!(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t)) {
        t.flyout.hide()
      }
    } else {
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(o))
    }
  }
  var H = function () {
    var /* [auto-meaningful-name] */o$current
    var t = null === (o$current = o.current) || undefined === o$current ? undefined : o$current.id
    if (t) {
      r($$_$$_$$_$$_redux_common_actions.Mf(t, u.id))
    }
  }
  var V = function () {
    o.current = undefined
  }
  var q = []
  var X = []
  var Q = []
  var Z = []
  var J = new Map()
  u.widgetIds.forEach(function (e) {
    var t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
    if (t) {
      if (t && !t.parentId) {
        J.set(e, {
          widget: t
        })
      }
      var /* [auto-meaningful-name] */t$type = t.type
      if (t && !Z.includes(t$type)) {
        var o = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Db(t.type)
        if (o && o.hasAnyWidget) {
          Z.push(t$type)
          Q.push({
            type: "ANY_".concat(t$type),
            icon: o.icon,
            title: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
              id: "anyWidgetAny"
            }) + $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
              id: o.title || o.previewAreaWidgetTitle
            })
          })
        }
      }
    }
  })
  J.forEach(function (e) {
    if (!(e.widget.type !== $$_$$_$$_$$_widget_builtIn_types.f && e.widget.type !== $$_$$_$$_$$_widget_builtIn_types.x && e.widget.type !== $$_$$_$$_$$_widget_builtIn_types.A)) {
      e.widget.widgetIds.forEach(function (t) {
        var n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(t)
        if (n) {
          if (!e.children) {
            e.children = []
          }
          e.children.push({
            widget: n
          })
        }
      })
    }
    q.push(e)
    X.push(e.widget.id)
  })
  var $ = []
  var ee = []
  if (!(null === (u$invisibleWidgetIds = u.invisibleWidgetIds) || undefined === u$invisibleWidgetIds)) {
    u$invisibleWidgetIds.forEach(function (e) {
      var t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
      if (t) {
        $.push({
          widget: t
        })
        ee.push(t.id)
      }
    })
  }
  var ne = []
  var re = []
  c.forEach(function (e) {
    var t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
    if (t && t.type !== $$_$$_$$_$$_widget_builtIn_types.m) {
      ne.push({
        widget: t
      })
      re.push(t.id)
    }
  })
  var oe
  var ie = function (e, t, n) {
    return React.createElement(React.Fragment, null, e.reverse().map(function (r, o) {
      var i
      var /* [auto-meaningful-name] */r$widget = r.widget
      var /* [auto-meaningful-name] */r$children = r.children
      return React.createElement(Bv, {
        className: t,
        id: r$widget.id,
        icon: (null === (i = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Db(r$widget.type)) || undefined === i ? undefined : i.icon) || "",
        type: r$widget.type,
        title: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Fb(r$widget.id),
        visible: r$widget.visible,
        readonly: M,
        key: r$widget.id,
        selected: s === r$widget.id,
        onDelete: W,
        onHide: F,
        onSelect: L,
        onShow: B,
        onCopyToCurrentScreen: G,
        toggleAttributeVisible: P,
        isLast: o === (null === e || undefined === e ? undefined : e.length) - 1,
        isDragAndDeleteDisabled: null === n || undefined === n ? undefined : n.isDragAndDeleteDisabled,
        isInvisibleWidget: null === n || undefined === n ? undefined : n.isInvisibleWidget,
        isChildren: !!(null === n || undefined === n ? undefined : n.parentId)
      }, r$children && ae(r$children, {
        parentId: r$widget.id,
        isGlobalWidget: null === n || undefined === n ? undefined : n.isGlobalWidget,
        isInvisibleWidget: null === n || undefined === n ? undefined : n.isInvisibleWidget,
        isDragAndDeleteDisabled: r$widget.type === $$_$$_$$_$$_widget_builtIn_types.x || r$widget.type === $$_$$_$$_$$_widget_builtIn_types.A
      }))
    }))
  }
  var ae = function (e, t) {
    var n = (null === t || undefined === t ? undefined : t.parentId) ? "SubReactDragListViewItem" : "ReactDragListViewItem"
    var o = ".".concat(n)
    return (null === t || undefined === t ? undefined : t.isInvisibleWidget) || (null === t || undefined === t ? undefined : t.isGlobalWidget) || (null === t || undefined === t ? undefined : t.isDragAndDeleteDisabled) || M ? ie(e, n, t) : React.createElement(Mv, {
      nodeSelector: o,
      handleSelector: o,
      onDragEnd: function (e, n) {
        if (!M) {
          (function (e, t, n) {
            if (!(e < 0 || t < 0)) {
              if (null === n || undefined === n ? undefined : n.parentId) {
                var o = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(null === n || undefined === n ? undefined : n.parentId)
                var /* [auto-meaningful-name] */o$widgetIds = o.widgetIds
                var a = o$widgetIds.length - e - 1
                var s = o$widgetIds.length - t - 1
                var c = o$widgetIds.splice(a, 1)
                var l = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 1)[0]
                var d = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(o$widgetIds)
                d.splice(s, 0, l)
                r($$_$$_$$_$$_redux_common_actions.Mg(u.id, o.id, d, true, true, true))
              } else {
                var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49$oTHelper$widget
                var f = X
                var h = f.length - e - 1
                var m = f.length - t - 1
                var g = f[h]
                var _ = f[m]
                var /* [auto-meaningful-name] */u$widgetIds = u.widgetIds
                var b = u$widgetIds.indexOf(_)
                var y = u$widgetIds.indexOf(g)
                if (b < 0 || y < 0) {
                  return
                }
                u$widgetIds.splice(y, 1)
                u$widgetIds.splice(b, 0, g)
                r($$_$$_$$_$$_redux_common_actions.Bj(u.id, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(u$widgetIds), null === n || undefined === n ? undefined : n.isInvisibleWidget))
                if (!(null === ($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49$oTHelper$widget = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49.oTHelper.widget) || undefined === $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49$oTHelper$widget)) {
                  $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49$oTHelper$widget.clientOp.moveWidget(u.id, y, b)
                }
              }
            }
          })(e, n, t)
        }
      },
      lineClassName: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.dragLine
    }, ie(e, n, t))
  }
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.wrapper
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.list,
    "data-updated-at": i
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetCategory,
    onClick: function () {
      g(!m)
    }
  }, React.createElement("span", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "components"
  })), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-fold",
    className: m ? $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.fold : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.unFold
  })), !m && ae(q), !m && React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.item, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.screenItem, (t = {}, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.selected, !s && l), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.selectedLight, !s && !l), t)),
    onContextMenu: function (e) {
      return e.preventDefault()
    },
    onClick: function () {
      var e
      var t
      r($$_$$_$$_$$_redux_common_actions.ug(undefined))
      if (s || !a) {
        if (!s && l) {
          $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
          if (!(null === (e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === e)) {
            e.flyout.hide()
          }
        } else {
          $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(u.id))
        }
      } else {
        r($$_$$_$$_$$_redux_common_actions.fj(false))
      }
    }
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.left
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-screen",
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetIcon
  }), React.createElement("span", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.label
  }, u.title)), React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.right
  }, React.createElement("div", {
    onClick: function (e) {
      var t
      e.stopPropagation()
      r($$_$$_$$_$$_redux_common_actions.ug(undefined))
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(u.id))
      r(!s && a ? $$_$$_$$_$$_redux_common_actions.fj(false) : $$_$$_$$_$$_redux_common_actions.fj(true))
    },
    className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.controlIcon, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.attributeIcon)
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-attribute"
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.screenBottomIcon
  }, React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-screen-bottom"
  })))), ee.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetCategory,
    onClick: function () {
      E(!y)
    }
  }, React.createElement("span", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "invisibleWidgetList"
  })), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-fold",
    className: y ? $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.fold : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.unFold
  })), !y && ae($, {
    isInvisibleWidget: true
  })), re.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetCategory,
    onClick: function () {
      T(!C)
    }
  }, React.createElement("span", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "globalWidgetList"
  })), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-fold",
    className: C ? $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.fold : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.unFold
  })), !C && ae(ne, {
    isGlobalWidget: true,
    isInvisibleWidget: true
  })), Q.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetCategory,
    onClick: function () {
      D(!R)
    }
  }, React.createElement("span", null, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "anyWidgetList"
  })), React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-fold",
    className: R ? $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.fold : $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.unFold
  })), !R && (oe = Q, React.createElement("div", {
    onContextMenu: function (e) {
      return e.preventDefault()
    }
  }, oe.reverse().map(function (e) {
    var t
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$icon = e.icon
    var /* [auto-meaningful-name] */e$title = e.title
    return React.createElement("div", {
      onClick: U.bind(null, e$type),
      key: e$type,
      className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.item, (t = {}, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.selected, s === e$type && l), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.selectedLight, s === e$type && !l), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.parent, false), t))
    }, React.createElement("div", {
      className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.left, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.anyWidget)
    }, $$_$$_$$_$$_$$_shared_tools_index.X(e$icon) ? React.createElement("img", {
      className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetIcon, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetUrlIcon),
      src: e$icon,
      alt: e$title,
      draggable: false
    }) : React.createElement($$_$$_$$_$$_$$_shared_ui_components_index.j, {
      type: e$icon,
      className: $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.widgetIcon
    }), React.createElement("span", {
      className: Classnames($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1501.label)
    }, e$title)))
  }))))))
})
export { Fv }
