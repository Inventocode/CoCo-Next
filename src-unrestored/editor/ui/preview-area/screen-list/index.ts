/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-26
 */

"use strict"

import { Pn } from "../../../../../unrestored/shared/1571/2636/index__part-24"
import { Xn, Zn, Jn, er, tr, nr, rr, or, ar, sr, cr, lr, ur, dr, pr, hr, mr, gr, wr, Nr, Rr, kr, xr, Dr, Mr, Lr, Pr, Br, Fr, Gr, Wr } from "../../../../../unrestored/shared/1571/2636/index__part-25"
import { Cv } from "../widget-list/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_702 from "../../../../../unrestored/shared/1571/2636/702"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_142 from "../../../../../unrestored/shared/1571/2636/142"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_120 from "../../../../../unrestored/shared/1571/2636/120"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_362 from "../../../../../unrestored/shared/1571/2636/362"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_388 from "../../../../../unrestored/shared/1571/2636/388"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_106 from "../../../../../unrestored/shared/1571/2636/106"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_103 from "../../../../../unrestored/shared/1571/2636/103"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_35 from "../../../../../unrestored/shared/1571/2636/35"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_40_index from "../../../../../unrestored/shared/1571/2636/40/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_19 from "../../../../../unrestored/shared/1571/2636/19"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_295 from "../../../../../unrestored/shared/1571/2636/295"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index from "../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index from "../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_$$_$$_redux_common_actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_components_index from "../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../../../unrestored/shared/1571/2636/11"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import { useDispatch, useSelector, batch } from "react-redux"
import * as /* [auto-meaningful-name] */ReactDom from "react-dom"
import /* [auto-meaningful-name] */React from "react"
import { useRef, useState, useImperativeHandle, useEffect, createRef, createElement, Component, useLayoutEffect, memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_553 from "../../../../../unrestored/shared/1571/2636/553"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238 from "../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_212 from "../../../../../unrestored/shared/1571/2636/212"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121 from "../../../../../unrestored/shared/1571/2636/212"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1511 from "../../../../../unrestored/shared/1571/2636/1511"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15111 from "../../../../../unrestored/shared/1571/2636/1511"
var Xr = React.forwardRef(function (e, t) {
  var n = useDispatch()
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$checkValueIsRepeat = e.checkValueIsRepeat
  var /* [auto-meaningful-name] */e$renameInputValue = e.renameInputValue
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$value = e.value
  var l = useRef(e$value)
  var u = useState(e$value)
  var d = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = useState(false)
  var v = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = useRef(null)
  var O = useRef(true)
  var w = useRef(null)
  useImperativeHandle(t, function () {
    return {
      focus: function () {
        var /* [auto-meaningful-name] */w$current
        return null === (w$current = w.current) || undefined === w$current ? undefined : w$current.focus()
      },
      blur: function () {
        var /* [auto-meaningful-name] */w$current
        return null === (w$current = w.current) || undefined === w$current ? undefined : w$current.blur()
      },
      select: function () {
        var /* [auto-meaningful-name] */w$current
        return null === (w$current = w.current) || undefined === w$current ? undefined : w$current.select()
      }
    }
  })
  useEffect(function () {
    m(e$value)
  }, [e$value])
  var C = function () {
    if (E.current) {
      window.clearTimeout(E.current)
    }
    y(true)
    E.current = window.setTimeout(function () {
      y(false)
      E.current = null
    }, 600)
  }
  var T = function () {
    if (w.current) {
      var /* [auto-meaningful-name] */w$current$value = w.current.value
      var t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.b(w$current$value)
      if (t > $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.i) {
        C()
      }
      if (O.current) {
        if (!w$current$value.match($$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.D)) {
          m(l.current)
          return void C()
        }
        y(false)
        var /* [auto-meaningful-name] */l$current = l.current
        var r = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.b(l$current)
        if (t <= $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.i || t < r) {
          m(w$current$value)
          return void (l.current = w$current$value)
        }
        if (t > r && r >= $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.i) {
          m(l.current)
          return void C()
        }
        y(false)
        for (var o = -1, i = 0; i < w$current$value.length; i++) {
          if (w$current$value[i] !== l$current[i]) {
            o = i
            break
          }
        }
        if (o > -1) {
          for (var a = l$current, s = o; s < w$current$value.length; s++) {
            var c = l$current.slice(0, o) + w$current$value.slice(o, s) + l$current.slice(o)
            if ($$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.b(c) > $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.i) {
              break
            }
            a = c
          }
          m(a)
          l.current = a
        }
      } else {
        m(w$current$value)
      }
    }
  }
  return React.createElement("input", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_15111.input, e$className, {
      "coco-input-warning-animation": b
    }),
    ref: w,
    value: p,
    onBlur: function () {
      if (e.onBlur) {
        e.onBlur()
      }
      var t = p.trim()
      if (t) {
        m(t)
        if (t !== e$value) {
          if (e$checkValueIsRepeat(t)) {
            var s = e$renameInputValue(t)
            return void (s && m(s))
          }
          e$onChange(t)
        }
      } else {
        n($$_$$_$$_redux_common_actions.mj({
          message: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: "blankInputValue"
          }),
          type: "error",
          showCloseIcon: false
        }))
        m(e$value)
      }
    },
    onChange: T,
    onCompositionEnd: function () {
      O.current = true
      T()
    },
    onCompositionStart: function () {
      O.current = false
    },
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */w$current = w.current
      if (w$current && 13 === e.keyCode) {
        w$current.blur()
      }
    }
  })
})
var Qr = function (e) {
  var /* [auto-meaningful-name] */e$screenId = e.screenId
  var n = useSelector(function (e) {
    return e.oTState.onlineCooperationUserList
  })
  var r = useSelector(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var o = useState([])
  var i = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  useEffect(function () {
    var e = r.filter(function (e) {
      return e.path.screenId === e$screenId
    })
    s(n.filter(function (t) {
      return e.some(function (e) {
        return e.userId === t.id
      })
    }).toJSON())
  }, [n, e$screenId, r])
  if (!a.length) {
    return null
  }
  var c = a.map(function (e) {
    return e.nickname
  }).join(" ")
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.collaboration,
    title: c
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-collaborate"
  }))
}
var Zr = function (e) {
  var t
  var n
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    withRef: false
  }
  n = t = function (t) {
    function n() {
      var e
      var t
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_103.a(this, n)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_388.a(this, (e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_362.a(n)).call.apply(e, [this].concat(o)))
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "wrappedInstance", createRef())
      return t
    }
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_120.a(n, t)
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_106.a(n, [
      {
        key: "componentDidMount",
        value: function () {
          ReactDom.findDOMNode(this).sortableHandle = true
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          $$_$$_$$_$$_$$_unrestored_shared_1571_2636_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return createElement(e, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_19.a({
            ref: t
          }, this.props))
        }
      }
    ])
    return n
  }(Component)
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "displayName", sr("sortableHandle", e))
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$index = e.index
  var /* [auto-meaningful-name] */e$title = e.title
  var o = useDispatch()
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.snapshotContainer,
    onClick: function () {
      o($$_$$_$$_redux_common_actions.vg(e$index))
    }.bind(null, e$index)
  }, e$screen.snapshot && React.createElement("img", {
    src: e$screen.snapshot,
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.snapshot,
    alt: e$title,
    draggable: false
  }))
})
var Jr = React.memo(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$onDeleteIconClick = e.onDeleteIconClick
  var /* [auto-meaningful-name] */e$updateCanEdit = e.updateCanEdit
  var /* [auto-meaningful-name] */e$canEdit = e.canEdit
  var /* [auto-meaningful-name] */e$readonly = e.readonly
  var /* [auto-meaningful-name] */e$showDeleteIcon = e.showDeleteIcon
  var c = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_238.e(e$screen.id)
  var l = useSelector(function (e) {
    return e.project.screens
  })
  var u = useSelector(function (e) {
    return e.oTState.collWorkId
  })
  var /* [auto-meaningful-name] */e$screen$title = e$screen.title
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var m = useDispatch()
  var g = useRef(null)
  var v = useRef(null)
  useEffect(function () {
    if (e$selected && v.current) {
      v.current.scrollIntoView()
    }
  }, [e$selected])
  useEffect(function () {
    var /* [auto-meaningful-name] */g$current
    var /* [auto-meaningful-name] */g$current1
    if (e$canEdit) {
      if (!(null === g || undefined === g || null === (g$current = g.current) || undefined === g$current)) {
        g$current.focus()
      }
      if (!(null === g || undefined === g || null === (g$current1 = g.current) || undefined === g$current1)) {
        g$current1.select()
      }
    }
  }, [e$canEdit])
  return React.createElement("div", {
    ref: v,
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.item, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a({}, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.selected, e$selected)),
    key: e$screen.id
  }, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.view
  }, React.createElement(Zr, {
    screen: e$screen,
    index: c,
    title: e$screen$title
  }), React.createElement(React.Fragment, null, !e$canEdit && React.createElement(React.Fragment, null, e$showDeleteIcon && !e$readonly && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.delete,
    onClick: function (e) {
      e.stopPropagation()
      e$onDeleteIconClick(e$screen)
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-delete-bold"
  })), !e$readonly && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.copy,
    onClick: function (e) {
      if (l.size > 98) {
        m($$_$$_$$_redux_common_actions.mj({
          showPrefixIcon: false,
          message: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: "screeMaxSize"
          })
        }))
      } else {
        e.stopPropagation()
        m($$_$$_$$_redux_common_actions.vg(c))
        m($$_$$_$$_redux_common_actions.Df(e$screen.id))
      }
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-copy"
  })), !!u && React.createElement(Qr, {
    screenId: e$screen.id
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.index
  }, c + 1))), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.titleBox
  }, e$canEdit && !e$readonly ? React.createElement(Xr, {
    value: e$screen$title,
    checkValueIsRepeat: function (e) {
      return $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.r(e$screen.id, e)
    },
    onChange: function (e) {
      var n
      m($$_$$_$$_redux_common_actions.Jg(e$screen.id, "title", e))
      if (!(null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
    },
    ref: g,
    renameInputValue: function (e) {
      var n
      var r = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Ob(e$screen.id, e, l)
      m($$_$$_$$_redux_common_actions.Jg(e$screen.id, "title", r))
      if (!(null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
      return r
    },
    onBlur: function () {
      e$updateCanEdit(false)
    },
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.editName
  }) : React.createElement("p", {
    onClick: function (e) {
      if (!e$readonly) {
        e$updateCanEdit(true)
      }
    },
    style: {
      display: e$canEdit ? "none" : "block"
    },
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.canNotEdit
  }, e$screen$title)))
})
var $r = function (e) {
  var t
  var n
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    withRef: false
  }
  n = t = function (t) {
    function n() {
      var e
      var t
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_103.a(this, n)
      for (var /* [auto-meaningful-name] */arguments$length = arguments.length, o = new Array(arguments$length), i = 0; i < arguments$length; i++) {
        o[i] = arguments[i]
      }
      t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_388.a(this, (e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_362.a(n)).call.apply(e, [this].concat(o)))
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "wrappedInstance", createRef())
      return t
    }
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_120.a(n, t)
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_106.a(n, [
      {
        key: "componentDidMount",
        value: function () {
          this.register()
        }
      }, {
        key: "componentDidUpdate",
        value: function (e) {
          if (this.node) {
            if (e.index !== this.props.index) {
              this.node.sortableInfo.index = this.props.index
            }
            if (e.disabled !== this.props.disabled) {
              this.node.sortableInfo.disabled = this.props.disabled
            }
          }
          if (e.collection !== this.props.collection) {
            this.unregister(e.collection)
            this.register()
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          this.unregister()
        }
      }, {
        key: "register",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$collection = this$props.collection
          var /* [auto-meaningful-name] */this$props$disabled = this$props.disabled
          var /* [auto-meaningful-name] */this$props$index = this$props.index
          var o = ReactDom.findDOMNode(this)
          o.sortableInfo = {
            collection: this$props$collection,
            disabled: this$props$disabled,
            index: this$props$index,
            manager: this.context.manager
          }
          this.node = o
          this.ref = {
            node: o
          }
          this.context.manager.add(this$props$collection, this.ref)
        }
      }, {
        key: "unregister",
        value: function () {
          var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : this.props.collection
          this.context.manager.remove(e, this.ref)
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          $$_$$_$$_$$_$$_unrestored_shared_1571_2636_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return createElement(e, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_19.a({
            ref: t
          }, Zn(this.props, Wr)))
        }
      }
    ])
    return n
  }(Component)
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "displayName", sr("sortableElement", e))
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "contextType", Fr)
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "propTypes", Gr)
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "defaultProps", {
    collection: 0
  })
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screen = e.screen
  var /* [auto-meaningful-name] */e$screenIndex = e.screenIndex
  var /* [auto-meaningful-name] */e$currentScreenIndex = e.currentScreenIndex
  var /* [auto-meaningful-name] */e$updateCanEdit = e.updateCanEdit
  var /* [auto-meaningful-name] */e$editDomIndex = e.editDomIndex
  var /* [auto-meaningful-name] */e$screensSize = e.screensSize
  var s = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_295.a(e, ["screen", "screenIndex", "currentScreenIndex", "updateCanEdit", "editDomIndex", "screensSize"])
  return React.createElement(Jr, Object.assign({
    key: e$screen.id,
    screen: e$screen,
    canEdit: e$editDomIndex === e$screenIndex,
    updateCanEdit: function (e) {
      e$updateCanEdit(e, e$screenIndex)
    },
    selected: e$currentScreenIndex === e$screenIndex,
    showDeleteIcon: e$screensSize > 1
  }, s))
})
var eo = function (e) {
  var t
  var n
  var r = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : {
    withRef: false
  }
  n = t = function (t) {
    function n(e) {
      var t
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_103.a(this, n)
      t = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_388.a(this, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_362.a(n).call(this, e))
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "state", {})
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleStart", function (e) {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$distance = t$props.distance
        var /* [auto-meaningful-name] */t$props$shouldCancelStart = t$props.shouldCancelStart
        if (2 !== e.button && !t$props$shouldCancelStart(e)) {
          t.touched = true
          t.position = lr(e)
          var i = rr(e.target, function (e) {
            return null != e.sortableInfo
          })
          if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
            var /* [auto-meaningful-name] */t$props$useDragHandle = t.props.useDragHandle
            var /* [auto-meaningful-name] */i$sortableInfo = i.sortableInfo
            var /* [auto-meaningful-name] */i$sortableInfo$index = i$sortableInfo.index
            var /* [auto-meaningful-name] */i$sortableInfo$collection = i$sortableInfo.collection
            if (i$sortableInfo.disabled) {
              return
            }
            if (t$props$useDragHandle && !rr(e.target, Rr)) {
              return
            }
            t.manager.active = {
              collection: i$sortableInfo$collection,
              index: i$sortableInfo$index
            }
            if (!(ur(e) || e.target.tagName !== wr)) {
              e.preventDefault()
            }
            if (!t$props$distance) {
              if (0 === t.props.pressDelay) {
                t.handlePress(e)
              } else {
                t.pressTimer = setTimeout(function () {
                  return t.handlePress(e)
                }, t.props.pressDelay)
              }
            }
          }
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "nodeIsChild", function (e) {
        return e.sortableInfo.manager === t.manager
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleMove", function (e) {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$distance = t$props.distance
        var /* [auto-meaningful-name] */t$props$pressThreshold = t$props.pressThreshold
        if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
          var i = lr(e)
          var a = {
            x: t.position.x - i.x,
            y: t.position.y - i.y
          }
          var s = Math.abs(a.x) + Math.abs(a.y)
          t.delta = a
          if (t$props$distance || t$props$pressThreshold && !(s >= t$props$pressThreshold)) {
            if (t$props$distance && s >= t$props$distance && t.manager.isActive()) {
              t.handlePress(e)
            }
          } else {
            clearTimeout(t.cancelTimer)
            t.cancelTimer = setTimeout(t.cancel, 0)
          }
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleEnd", function () {
        t.touched = false
        t.cancel()
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "cancel", function () {
        var /* [auto-meaningful-name] */t$props$distance = t.props.distance
        if (!t.state.sorting) {
          if (!t$props$distance) {
            clearTimeout(t.pressTimer)
          }
          t.manager.active = null
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handlePress", function (e) {
        try {
          var n = t.manager.getActive()
          var r = function () {
            if (n) {
              var r = function () {
                var /* [auto-meaningful-name] */p$sortableInfo$index = n$node.sortableInfo.index
                var r = ar(n$node)
                var o = gr(t.container)
                var l = t.scrollContainer.getBoundingClientRect()
                var m = t$props$getHelperDimensions({
                  index: p$sortableInfo$index,
                  node: n$node,
                  collection: n$collection
                })
                t.node = n$node
                t.margin = r
                t.gridGap = o
                t.width = m.width
                t.height = m.height
                t.marginOffset = {
                  x: t.margin.left + t.margin.right + t.gridGap.x,
                  y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y)
                }
                t.boundingClientRect = n$node.getBoundingClientRect()
                t.containerBoundingRect = l
                t.index = p$sortableInfo$index
                t.newIndex = p$sortableInfo$index
                t.axis = {
                  x: t$props$axis.indexOf("x") >= 0,
                  y: t$props$axis.indexOf("y") >= 0
                }
                t.offsetEdge = dr(n$node, t.container)
                t.initialOffset = lr(t$manager$isKeySorting ? Pn({}, e, {
                  pageX: t.boundingClientRect.left,
                  pageY: t.boundingClientRect.top
                }) : e)
                t.initialScroll = {
                  left: t.scrollContainer.scrollLeft,
                  top: t.scrollContainer.scrollTop
                }
                t.initialWindowScroll = {
                  left: window.pageXOffset,
                  top: window.pageYOffset
                }
                t.helper = t.helperContainer.appendChild(Nr(n$node))
                er(t.helper, {
                  boxSizing: "border-box",
                  height: "".concat(t.height, "px"),
                  left: "".concat(t.boundingClientRect.left - r.left, "px"),
                  pointerEvents: "none",
                  position: "fixed",
                  top: "".concat(t.boundingClientRect.top - r.top, "px"),
                  width: "".concat(t.width, "px")
                })
                if (t$manager$isKeySorting) {
                  t.helper.focus()
                }
                if (t$props$hideSortableGhost) {
                  t.sortableGhost = n$node
                  er(n$node, {
                    opacity: 0,
                    visibility: "hidden"
                  })
                }
                t.minTranslate = {}
                t.maxTranslate = {}
                if (t$manager$isKeySorting) {
                  var g = t$props$useWindowAsScrollContainer ? {
                    top: 0,
                    left: 0,
                    width: t.contentWindow.innerWidth,
                    height: t.contentWindow.innerHeight
                  } : t.containerBoundingRect
                  var /* [auto-meaningful-name] */g$top = g.top
                  var /* [auto-meaningful-name] */g$left = g.left
                  var /* [auto-meaningful-name] */g$width = g.width
                  var y = g$top + g.height
                  var E = g$left + g$width
                  if (t.axis.x) {
                    t.minTranslate.x = g$left - t.boundingClientRect.left
                    t.maxTranslate.x = E - (t.boundingClientRect.left + t.width)
                  }
                  if (t.axis.y) {
                    t.minTranslate.y = g$top - t.boundingClientRect.top
                    t.maxTranslate.y = y - (t.boundingClientRect.top + t.height)
                  }
                } else {
                  if (t.axis.x) {
                    t.minTranslate.x = (t$props$useWindowAsScrollContainer ? 0 : l.left) - t.boundingClientRect.left - t.width / 2
                    t.maxTranslate.x = (t$props$useWindowAsScrollContainer ? t.contentWindow.innerWidth : l.left + l.width) - t.boundingClientRect.left - t.width / 2
                  }
                  if (t.axis.y) {
                    t.minTranslate.y = (t$props$useWindowAsScrollContainer ? 0 : l.top) - t.boundingClientRect.top - t.height / 2
                    t.maxTranslate.y = (t$props$useWindowAsScrollContainer ? t.contentWindow.innerHeight : l.top + l.height) - t.boundingClientRect.top - t.height / 2
                  }
                }
                if (t$props$helperClass) {
                  t$props$helperClass.split(" ").forEach(function (e) {
                    return t.helper.classList.add(e)
                  })
                }
                t.listenerNode = e.touches ? e.target : t.contentWindow
                if (t$manager$isKeySorting) {
                  t.listenerNode.addEventListener("wheel", t.handleKeyEnd, true)
                  t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, true)
                  t.listenerNode.addEventListener("keydown", t.handleKeyDown)
                } else {
                  Jn.move.forEach(function (e) {
                    return t.listenerNode.addEventListener(e, t.handleSortMove, false)
                  })
                  Jn.end.forEach(function (e) {
                    return t.listenerNode.addEventListener(e, t.handleSortEnd, false)
                  })
                }
                t.setState({
                  sorting: true,
                  sortingIndex: p$sortableInfo$index
                })
                if (t$props$onSortStart) {
                  t$props$onSortStart({
                    node: n$node,
                    index: p$sortableInfo$index,
                    collection: n$collection,
                    isKeySorting: t$manager$isKeySorting,
                    nodes: t.manager.getOrderedRefs(),
                    helper: t.helper
                  }, e)
                }
                if (t$manager$isKeySorting) {
                  t.keyMove(0)
                }
              }
              var /* [auto-meaningful-name] */t$props = t.props
              var /* [auto-meaningful-name] */t$props$axis = t$props.axis
              var /* [auto-meaningful-name] */t$props$getHelperDimensions = t$props.getHelperDimensions
              var /* [auto-meaningful-name] */t$props$helperClass = t$props.helperClass
              var /* [auto-meaningful-name] */t$props$hideSortableGhost = t$props.hideSortableGhost
              var /* [auto-meaningful-name] */t$props$updateBeforeSortStart = t$props.updateBeforeSortStart
              var /* [auto-meaningful-name] */t$props$onSortStart = t$props.onSortStart
              var /* [auto-meaningful-name] */t$props$useWindowAsScrollContainer = t$props.useWindowAsScrollContainer
              var /* [auto-meaningful-name] */n$node = n.node
              var /* [auto-meaningful-name] */n$collection = n.collection
              var /* [auto-meaningful-name] */t$manager$isKeySorting = t.manager.isKeySorting
              var m = function () {
                if ("function" === typeof t$props$updateBeforeSortStart) {
                  t._awaitingUpdateBeforeSortStart = true
                  var n = Br(function () {
                    var /* [auto-meaningful-name] */n$node$sortableInfo$index = n$node.sortableInfo.index
                    return Promise.resolve(t$props$updateBeforeSortStart({
                      collection: n$collection,
                      index: n$node$sortableInfo$index,
                      node: n$node,
                      isKeySorting: t$manager$isKeySorting
                    }, e)).then(function () {})
                  }, function (e, n) {
                    t._awaitingUpdateBeforeSortStart = false
                    if (e) {
                      throw n
                    }
                    return n
                  })
                  if (n && n.then) {
                    return n.then(function () {})
                  }
                }
              }()
              return m && m.then ? m.then(r) : r()
            }
          }()
          return Promise.resolve(r && r.then ? r.then(function () {}) : undefined)
        } catch (o) {
          return Promise.reject(o)
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleSortMove", function (e) {
        var /* [auto-meaningful-name] */t$props$onSortMove = t.props.onSortMove
        if ("function" === typeof e.preventDefault && e.cancelable) {
          e.preventDefault()
        }
        t.updateHelperPosition(e)
        t.animateNodes()
        t.autoscroll()
        if (t$props$onSortMove) {
          t$props$onSortMove(e)
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleSortEnd", function (e) {
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$hideSortableGhost = t$props.hideSortableGhost
        var /* [auto-meaningful-name] */t$props$onSortEnd = t$props.onSortEnd
        var /* [auto-meaningful-name] */t$manager = t.manager
        var /* [auto-meaningful-name] */t$manager$active$collection = t$manager.active.collection
        var /* [auto-meaningful-name] */t$manager$isKeySorting = t$manager.isKeySorting
        var c = t.manager.getOrderedRefs()
        if (t.listenerNode) {
          if (t$manager$isKeySorting) {
            t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, true)
            t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, true)
            t.listenerNode.removeEventListener("keydown", t.handleKeyDown)
          } else {
            Jn.move.forEach(function (e) {
              return t.listenerNode.removeEventListener(e, t.handleSortMove)
            })
            Jn.end.forEach(function (e) {
              return t.listenerNode.removeEventListener(e, t.handleSortEnd)
            })
          }
        }
        t.helper.parentNode.removeChild(t.helper)
        if (t$props$hideSortableGhost && t.sortableGhost) {
          er(t.sortableGhost, {
            opacity: "",
            visibility: ""
          })
        }
        for (var l = 0, /* [auto-meaningful-name] */c$length = c.length; l < c$length; l++) {
          var d = c[l]
          var /* [auto-meaningful-name] */d$node = d.node
          d.edgeOffset = null
          d.boundingClientRect = null
          tr(d$node, null)
          nr(d$node, null)
          d.translate = null
        }
        t.autoScroller.clear()
        t.manager.active = null
        t.manager.isKeySorting = false
        t.setState({
          sorting: false,
          sortingIndex: null
        })
        if ("function" === typeof t$props$onSortEnd) {
          t$props$onSortEnd({
            collection: t$manager$active$collection,
            newIndex: t.newIndex,
            oldIndex: t.index,
            isKeySorting: t$manager$isKeySorting,
            nodes: c
          }, e)
        }
        t.touched = false
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "autoscroll", function () {
        var /* [auto-meaningful-name] */t$props$disableAutoscroll = t.props.disableAutoscroll
        var /* [auto-meaningful-name] */t$manager$isKeySorting = t.manager.isKeySorting
        if (t$props$disableAutoscroll) {
          t.autoScroller.clear()
        } else {
          if (t$manager$isKeySorting) {
            var r = Pn({}, t.translate)
            var o = 0
            var i = 0
            if (t.axis.x) {
              r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x))
              o = t.translate.x - r.x
            }
            if (t.axis.y) {
              r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y))
              i = t.translate.y - r.y
            }
            t.translate = r
            tr(t.helper, t.translate)
            t.scrollContainer.scrollLeft += o
            return void (t.scrollContainer.scrollTop += i)
          }
          t.autoScroller.update({
            height: t.height,
            maxTranslate: t.maxTranslate,
            minTranslate: t.minTranslate,
            translate: t.translate,
            width: t.width
          })
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "onAutoScroll", function (e) {
        t.translate.x += e.left
        t.translate.y += e.top
        t.animateNodes()
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleKeyDown", function (e) {
        var /* [auto-meaningful-name] */e$keyCode = e.keyCode
        var /* [auto-meaningful-name] */t$props = t.props
        var /* [auto-meaningful-name] */t$props$shouldCancelStart = t$props.shouldCancelStart
        var /* [auto-meaningful-name] */t$props$keyCodes = t$props.keyCodes
        var a = Pn({}, Dr, undefined === t$props$keyCodes ? {} : t$props$keyCodes)
        if (!(t.manager.active && !t.manager.isKeySorting || !(t.manager.active || a.lift.includes(e$keyCode) && !t$props$shouldCancelStart(e) && t.isValidSortingTarget(e)))) {
          e.stopPropagation()
          e.preventDefault()
          if (a.lift.includes(e$keyCode) && !t.manager.active) {
            t.keyLift(e)
          } else {
            if (a.drop.includes(e$keyCode) && t.manager.active) {
              t.keyDrop(e)
            } else {
              if (a.cancel.includes(e$keyCode)) {
                t.newIndex = t.manager.active.index
                t.keyDrop(e)
              } else {
                if (a.up.includes(e$keyCode)) {
                  t.keyMove(-1)
                } else {
                  if (a.down.includes(e$keyCode)) {
                    t.keyMove(1)
                  }
                }
              }
            }
          }
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "keyLift", function (e) {
        var /* [auto-meaningful-name] */e$target = e.target
        var /* [auto-meaningful-name] */rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo = rr(e$target, function (e) {
          return null != e.sortableInfo
        }).sortableInfo
        var /* [auto-meaningful-name] */rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$index = rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo.index
        var /* [auto-meaningful-name] */rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$collection = rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo.collection
        t.initialFocusedNode = e$target
        t.manager.isKeySorting = true
        t.manager.active = {
          index: rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$index,
          collection: rrE$targetFunctionEReturnNullE$sortableInfo$sortableInfo$collection
        }
        t.handlePress(e)
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "keyMove", function (e) {
        var n = t.manager.getOrderedRefs()
        var /* [auto-meaningful-name] */nN$length1$node$sortableInfo$index = n[n.length - 1].node.sortableInfo.index
        var o = t.newIndex + e
        var /* [auto-meaningful-name] */t$newIndex = t.newIndex
        if (!(o < 0 || o > nN$length1$node$sortableInfo$index)) {
          t.prevIndex = t$newIndex
          t.newIndex = o
          var a = pr(t.newIndex, t.prevIndex, t.index)
          var s = n.find(function (e) {
            return e.node.sortableInfo.index === a
          })
          var /* [auto-meaningful-name] */s$node = s.node
          var /* [auto-meaningful-name] */t$containerScrollDelta = t.containerScrollDelta
          var u = s.boundingClientRect || cr(s$node, t$containerScrollDelta)
          var d = s.translate || {
            x: 0,
            y: 0
          }
          var p = u.top + d.y - t$containerScrollDelta.top
          var f = u.left + d.x - t$containerScrollDelta.left
          var h = t$newIndex < o
          var m = h && t.axis.x ? s$node.offsetWidth - t.width : 0
          var g = h && t.axis.y ? s$node.offsetHeight - t.height : 0
          t.handleSortMove({
            pageX: f + m,
            pageY: p + g,
            ignoreTransition: 0 === e
          })
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "keyDrop", function (e) {
        t.handleSortEnd(e)
        if (t.initialFocusedNode) {
          t.initialFocusedNode.focus()
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "handleKeyEnd", function (e) {
        if (t.manager.active) {
          t.keyDrop(e)
        }
      })
      $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a($$_$$_$$_$$_$$_unrestored_shared_1571_2636_142.a(t)), "isValidSortingTarget", function (e) {
        var /* [auto-meaningful-name] */t$props$useDragHandle = t.props.useDragHandle
        var /* [auto-meaningful-name] */e$target = e.target
        var o = rr(e$target, function (e) {
          return null != e.sortableInfo
        })
        return o && o.sortableInfo && !o.sortableInfo.disabled && (t$props$useDragHandle ? Rr(e$target) : e$target.sortableInfo)
      })
      var r = new Xn()
      Pr(e)
      t.manager = r
      t.wrappedInstance = createRef()
      t.sortableContextValue = {
        manager: r
      }
      t.events = {
        end: t.handleEnd,
        move: t.handleMove,
        start: t.handleStart
      }
      return t
    }
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_120.a(n, t)
    $$_$$_$$_$$_$$_unrestored_shared_1571_2636_106.a(n, [
      {
        key: "componentDidMount",
        value: function () {
          var e = this
          var /* [auto-meaningful-name] */this$props$useWindowAsScrollContainer = this.props.useWindowAsScrollContainer
          var n = this.getContainer()
          Promise.resolve(n).then(function (n) {
            e.container = n
            e.document = e.container.ownerDocument || document
            var r = e.props.contentWindow || e.document.defaultView || window
            e.contentWindow = "function" === typeof r ? r() : r
            e.scrollContainer = this$props$useWindowAsScrollContainer ? e.document.scrollingElement || e.document.documentElement : mr(e.container) || e.container
            e.autoScroller = new kr(e.scrollContainer, e.onAutoScroll)
            Object.keys(e.events).forEach(function (t) {
              return Jn[t].forEach(function (n) {
                return e.container.addEventListener(n, e.events[t], false)
              })
            })
            e.container.addEventListener("keydown", e.handleKeyDown)
          })
        }
      }, {
        key: "componentWillUnmount",
        value: function () {
          var e = this
          if (this.helper && this.helper.parentNode) {
            this.helper.parentNode.removeChild(this.helper)
          }
          if (this.container) {
            Object.keys(this.events).forEach(function (t) {
              return Jn[t].forEach(function (n) {
                return e.container.removeEventListener(n, e.events[t])
              })
            })
            this.container.removeEventListener("keydown", this.handleKeyDown)
          }
        }
      }, {
        key: "updateHelperPosition",
        value: function (e) {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$lockAxis = this$props.lockAxis
          var /* [auto-meaningful-name] */this$props$lockOffset = this$props.lockOffset
          var /* [auto-meaningful-name] */this$props$lockToContainerEdges = this$props.lockToContainerEdges
          var /* [auto-meaningful-name] */this$props$transitionDuration = this$props.transitionDuration
          var /* [auto-meaningful-name] */this$props$keyboardSortingTransitionDuration = this$props.keyboardSortingTransitionDuration
          var s = undefined === this$props$keyboardSortingTransitionDuration ? this$props$transitionDuration : this$props$keyboardSortingTransitionDuration
          var /* [auto-meaningful-name] */this$manager$isKeySorting = this.manager.isKeySorting
          var /* [auto-meaningful-name] */e$ignoreTransition = e.ignoreTransition
          var u = lr(e)
          var d = {
            x: u.x - this.initialOffset.x,
            y: u.y - this.initialOffset.y
          }
          d.y -= window.pageYOffset - this.initialWindowScroll.top
          d.x -= window.pageXOffset - this.initialWindowScroll.left
          this.translate = d
          if (this$props$lockToContainerEdges) {
            var p = hr({
              height: this.height,
              lockOffset: this$props$lockOffset,
              width: this.width
            })
            var f = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_40_index.a(p, 2)
            var h = f[0]
            var m = f[1]
            var g = {
              x: this.width / 2 - h.x,
              y: this.height / 2 - h.y
            }
            var _ = {
              x: this.width / 2 - m.x,
              y: this.height / 2 - m.y
            }
            d.x = or(this.minTranslate.x + g.x, this.maxTranslate.x - _.x, d.x)
            d.y = or(this.minTranslate.y + g.y, this.maxTranslate.y - _.y, d.y)
          }
          if ("x" === this$props$lockAxis) {
            d.y = 0
          } else {
            if ("y" === this$props$lockAxis) {
              d.x = 0
            }
          }
          if (this$manager$isKeySorting && s && !e$ignoreTransition) {
            nr(this.helper, s)
          }
          tr(this.helper, d)
        }
      }, {
        key: "animateNodes",
        value: function () {
          var /* [auto-meaningful-name] */this$props = this.props
          var /* [auto-meaningful-name] */this$props$transitionDuration = this$props.transitionDuration
          var /* [auto-meaningful-name] */this$props$hideSortableGhost = this$props.hideSortableGhost
          var /* [auto-meaningful-name] */this$props$onSortOver = this$props.onSortOver
          var /* [auto-meaningful-name] */this$containerScrollDelta = this.containerScrollDelta
          var /* [auto-meaningful-name] */this$windowScrollDelta = this.windowScrollDelta
          var a = this.manager.getOrderedRefs()
          var s = this.offsetEdge.left + this.translate.x + this$containerScrollDelta.left
          var c = this.offsetEdge.top + this.translate.y + this$containerScrollDelta.top
          var /* [auto-meaningful-name] */this$manager$isKeySorting = this.manager.isKeySorting
          var /* [auto-meaningful-name] */this$newIndex = this.newIndex
          this.newIndex = null
          for (var d = 0, /* [auto-meaningful-name] */a$length = a.length; d < a$length; d++) {
            var /* [auto-meaningful-name] */aD$node = a[d].node
            var /* [auto-meaningful-name] */aD$node$sortableInfo$index = aD$node.sortableInfo.index
            var /* [auto-meaningful-name] */aD$node$offsetWidth = aD$node.offsetWidth
            var /* [auto-meaningful-name] */aD$node$offsetHeight = aD$node.offsetHeight
            var _ = {
              height: this.height > aD$node$offsetHeight ? aD$node$offsetHeight / 2 : this.height / 2,
              width: this.width > aD$node$offsetWidth ? aD$node$offsetWidth / 2 : this.width / 2
            }
            var v = this$manager$isKeySorting && aD$node$sortableInfo$index > this.index && aD$node$sortableInfo$index <= this$newIndex
            var b = this$manager$isKeySorting && aD$node$sortableInfo$index < this.index && aD$node$sortableInfo$index >= this$newIndex
            var y = {
              x: 0,
              y: 0
            }
            var /* [auto-meaningful-name] */aD$edgeOffset = a[d].edgeOffset
            if (!aD$edgeOffset) {
              aD$edgeOffset = dr(aD$node, this.container)
              a[d].edgeOffset = aD$edgeOffset
              if (this$manager$isKeySorting) {
                a[d].boundingClientRect = cr(aD$node, this$containerScrollDelta)
              }
            }
            var O = d < a.length - 1 && a[d + 1]
            var w = d > 0 && a[d - 1]
            if (O && !O.edgeOffset) {
              O.edgeOffset = dr(O.node, this.container)
              if (this$manager$isKeySorting) {
                O.boundingClientRect = cr(O.node, this$containerScrollDelta)
              }
            }
            if (aD$node$sortableInfo$index !== this.index) {
              if (this$props$transitionDuration) {
                nr(aD$node, this$props$transitionDuration)
              }
              if (this.axis.x) {
                if (this.axis.y) {
                  if (b || aD$node$sortableInfo$index < this.index && (s + this$windowScrollDelta.left - _.width <= aD$edgeOffset.left && c + this$windowScrollDelta.top <= aD$edgeOffset.top + _.height || c + this$windowScrollDelta.top + _.height <= aD$edgeOffset.top)) {
                    y.x = this.width + this.marginOffset.x
                    if (aD$edgeOffset.left + y.x > this.containerBoundingRect.width - _.width && O) {
                      y.x = O.edgeOffset.left - aD$edgeOffset.left
                      y.y = O.edgeOffset.top - aD$edgeOffset.top
                    }
                    if (null === this.newIndex) {
                      this.newIndex = aD$node$sortableInfo$index
                    }
                  } else {
                    if (v || aD$node$sortableInfo$index > this.index && (s + this$windowScrollDelta.left + _.width >= aD$edgeOffset.left && c + this$windowScrollDelta.top + _.height >= aD$edgeOffset.top || c + this$windowScrollDelta.top + _.height >= aD$edgeOffset.top + aD$node$offsetHeight)) {
                      y.x = -(this.width + this.marginOffset.x)
                      if (aD$edgeOffset.left + y.x < this.containerBoundingRect.left + _.width && w) {
                        y.x = w.edgeOffset.left - aD$edgeOffset.left
                        y.y = w.edgeOffset.top - aD$edgeOffset.top
                      }
                      this.newIndex = aD$node$sortableInfo$index
                    }
                  }
                } else {
                  if (v || aD$node$sortableInfo$index > this.index && s + this$windowScrollDelta.left + _.width >= aD$edgeOffset.left) {
                    y.x = -(this.width + this.marginOffset.x)
                    this.newIndex = aD$node$sortableInfo$index
                  } else {
                    if (b || aD$node$sortableInfo$index < this.index && s + this$windowScrollDelta.left <= aD$edgeOffset.left + _.width) {
                      y.x = this.width + this.marginOffset.x
                      if (null == this.newIndex) {
                        this.newIndex = aD$node$sortableInfo$index
                      }
                    }
                  }
                }
              } else {
                if (this.axis.y) {
                  if (v || aD$node$sortableInfo$index > this.index && c + this$windowScrollDelta.top + _.height >= aD$edgeOffset.top) {
                    y.y = -(this.height + this.marginOffset.y)
                    this.newIndex = aD$node$sortableInfo$index
                  } else {
                    if (b || aD$node$sortableInfo$index < this.index && c + this$windowScrollDelta.top <= aD$edgeOffset.top + _.height) {
                      y.y = this.height + this.marginOffset.y
                      if (null == this.newIndex) {
                        this.newIndex = aD$node$sortableInfo$index
                      }
                    }
                  }
                }
              }
              tr(aD$node, y)
              a[d].translate = y
            } else {
              if (this$props$hideSortableGhost) {
                this.sortableGhost = aD$node
                er(aD$node, {
                  opacity: 0,
                  visibility: "hidden"
                })
              }
            }
          }
          if (null == this.newIndex) {
            this.newIndex = this.index
          }
          if (this$manager$isKeySorting) {
            this.newIndex = this$newIndex
          }
          var C = this$manager$isKeySorting ? this.prevIndex : this$newIndex
          if (this$props$onSortOver && this.newIndex !== C) {
            this$props$onSortOver({
              collection: this.manager.active.collection,
              index: this.index,
              newIndex: this.newIndex,
              oldIndex: C,
              isKeySorting: this$manager$isKeySorting,
              nodes: a,
              helper: this.helper
            })
          }
        }
      }, {
        key: "getWrappedInstance",
        value: function () {
          $$_$$_$$_$$_$$_unrestored_shared_1571_2636_702(r.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call")
          return this.wrappedInstance.current
        }
      }, {
        key: "getContainer",
        value: function () {
          var /* [auto-meaningful-name] */this$props$getContainer = this.props.getContainer
          return "function" !== typeof this$props$getContainer ? ReactDom.findDOMNode(this) : this$props$getContainer(r.withRef ? this.getWrappedInstance() : undefined)
        }
      }, {
        key: "render",
        value: function () {
          var t = r.withRef ? this.wrappedInstance : null
          return createElement(Fr.Provider, {
            value: this.sortableContextValue
          }, createElement(e, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_19.a({
            ref: t
          }, Zn(this.props, Lr))))
        }
      }, {
        key: "helperContainer",
        get: function () {
          var /* [auto-meaningful-name] */this$props$helperContainer = this.props.helperContainer
          return "function" === typeof this$props$helperContainer ? this$props$helperContainer() : this.props.helperContainer || this.document.body
        }
      }, {
        key: "containerScrollDelta",
        get: function () {
          return this.props.useWindowAsScrollContainer ? {
            left: 0,
            top: 0
          } : {
            left: this.scrollContainer.scrollLeft - this.initialScroll.left,
            top: this.scrollContainer.scrollTop - this.initialScroll.top
          }
        }
      }, {
        key: "windowScrollDelta",
        get: function () {
          return {
            left: this.contentWindow.pageXOffset - this.initialWindowScroll.left,
            top: this.contentWindow.pageYOffset - this.initialWindowScroll.top
          }
        }
      }
    ])
    return n
  }(Component)
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "displayName", sr("sortableList", e))
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "defaultProps", Mr)
  $$_$$_$$_$$_$$_unrestored_shared_1571_2636_35.a(t, "propTypes", xr)
  return n
}(function (e) {
  var /* [auto-meaningful-name] */e$screens = e.screens
  var n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_295.a(e, ["screens"])
  var /* [auto-meaningful-name] */e$screens$size = e$screens.size
  var o = useRef(null)
  var i = useRef(0)
  var a = function () {
    if (o.current) {
      i.current = o.current.scrollLeft
    }
  }
  var s = function (e) {
    var /* [auto-meaningful-name] */o$current
    if (0 === e.deltaX && 0 !== e.deltaY) {
      e.preventDefault()
      if (!(null === (o$current = o.current) || undefined === o$current)) {
        o$current.scrollBy({
          left: Math.round(e.deltaY) / 2,
          behavior: "smooth"
        })
      }
    }
  }
  useLayoutEffect(function () {
    if (o.current) {
      var /* [auto-meaningful-name] */o$current = o.current
      o.current.scrollLeft = i.current
      o.current.addEventListener("scroll", a)
      o.current.addEventListener("wheel", s)
      return function () {
        o$current.removeEventListener("scroll", a)
        o$current.removeEventListener("wheel", s)
      }
    }
  })
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.list,
    ref: o
  }, e$screens.map(function (e, t) {
    return React.createElement($r, Object.assign({
      key: e.id,
      screen: e,
      index: t,
      screenIndex: t,
      screensSize: e$screens$size
    }, n))
  }))
})
var to = memo(function () {
  var /* [auto-meaningful-name] */n$current
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var n = useRef(null)
  var r = useSelector(function (e) {
    return e.project.screens
  })
  var o = useSelector(function (e) {
    return e.common.stageWidth
  })
  var i = useState(-1)
  var a = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(0)
  var u = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(0)
  var g = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(false)
  var E = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = useRef()
  var T = useRef(null)
  var A = useSelector(function (e) {
    return e.project.currentScreenIndex
  })
  var j = useSelector(function (e) {
    return e.project.playing
  })
  var R = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_238.d()
  var k = useSelector(function (e) {
    return e.uiConfig.screenPanel
  }) === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly
  var x = useDispatch()
  useEffect(function () {
    var e = document.createElement("div")
    e.id = "_cocoScreenListDragContainer"
    document.body.appendChild(e)
  }, [])
  useEffect(function () {
    if (null === R || undefined === R ? undefined : R.id) {
      setTimeout(function () {
        var e = document.getElementById(R.id)
        if (e) {
          $$_$$_$$_$$_$$_unrestored_shared_1571_2636_553.a(e, 1).then(function (e) {
            x($$_$$_$$_redux_common_actions.Xj(R.id, e))
          }).catch(function (e) {
            return console.error(e)
          })
        }
      }, 100)
    }
  }, [R, x])
  useEffect(function () {
    b(j ? o + Cv : o)
  }, [j, o])
  useEffect(function () {
    var e = function (e) {
      var /* [auto-meaningful-name] */n$current1
      var /* [auto-meaningful-name] */n$current2
      var /* [auto-meaningful-name] */e$target = e.target
      var i = null === (n$current1 = n.current) || undefined === n$current1 ? undefined : n$current1.target
      if (i && !(i.contains(e$target) || e$target.closest(".".concat($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.deleteScreenDialog)) || e$target.closest(".".concat($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.snapshotContainer)))) {
        if (!(null === (n$current2 = n.current) || undefined === n$current2)) {
          n$current2.hideContent()
        }
      }
    }
    document.body.addEventListener("click", e)
    document.body.addEventListener("mousedown", e)
    return function () {
      document.body.removeEventListener("click", e)
      document.body.removeEventListener("mousedown", e)
    }
  }, [null === (n$current = n.current) || undefined === n$current ? undefined : n$current.visible])
  useEffect(function () {
    var e = document.getElementById("screen_index_".concat(A))
    if (e) {
      e.scrollIntoView({
        block: "end",
        inline: "nearest"
      })
    }
  }, [A])
  var D = function () {
    if (T.current) {
      p(T.current.scrollLeft)
    }
  }
  var M = function (e) {
    var /* [auto-meaningful-name] */T$current
    if (0 === e.deltaX && 0 !== e.deltaY) {
      e.preventDefault()
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollBy({
          left: Math.round(e.deltaY) / 2,
          behavior: "smooth"
        })
      }
    }
  }
  useLayoutEffect(function () {
    if (T.current) {
      var /* [auto-meaningful-name] */T$current = T.current
      T.current.addEventListener("scroll", D)
      T.current.addEventListener("wheel", M)
      return function () {
        T$current.removeEventListener("scroll", D)
        T$current.removeEventListener("wheel", M)
      }
    }
  })
  if (!R) {
    return null
  }
  var L = function (e) {
    var n = r.find(function (t) {
      return t.id === e
    })
    if (n) {
      C.current = n
      var o = n.get("title")
      var i = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
        id: "deleteScreen"
      }) + "“" + $$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.f(o, 10) + "”?"
      x($$_$$_$$_redux_common_actions.zh({
        onClose: B,
        onConfirm: F,
        title: i,
        isDangerous: true,
        content: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
          id: "deleteScreenTips"
        }),
        allowText: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
          id: "delete"
        }),
        className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.deleteScreenDialog
      }))
    }
  }
  var P = function (e) {
    x($$_$$_$$_redux_common_actions.ng(e))
  }
  var B = function () {
    C.current = undefined
  }
  var F = function () {
    var /* [auto-meaningful-name] */C$current
    var t = null === (C$current = C.current) || undefined === C$current ? undefined : C$current.get("id")
    if (t) {
      x($$_$$_$$_redux_common_actions.ng(t))
    }
  }
  var G = React.createElement(React.Fragment, null, React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.closeIconBox,
    onClick: function () {
      var /* [auto-meaningful-name] */n$current1
      if (!(null === (n$current1 = n.current) || undefined === n$current1)) {
        n$current1.hideContent()
      }
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-close"
  })), React.createElement("section", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.popoverBody,
    style: {
      width: v + 2
    },
    "data-html2canvas-ignore": "true"
  }, React.createElement(eo, {
    screens: r,
    editDomIndex: s,
    currentScreenIndex: A,
    readonly: k,
    updateCanEdit: function (e, t) {
      c(e ? t : -1)
    },
    onDeleteIconClick: function (e) {
      if (!function (e, t) {
        return 0 === t.get("widgetIds").length && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.z.isEmptyWorkspace(e.id, t.id)
      }(R, e)) {
        L(e.id)
      } else {
        P(e.id)
      }
    },
    axis: "x",
    onSortEnd: function (e) {
      var /* [auto-meaningful-name] */e$oldIndex = e.oldIndex
      var /* [auto-meaningful-name] */e$newIndex = e.newIndex
      if (e$oldIndex === e$newIndex) {
        x($$_$$_$$_redux_common_actions.vg(e$newIndex))
        return void $$_$$_$$_$$_$$_unrestored_shared_1571_2636_141_index.a("ScreenItemClick", {
          screenId: r.getIn([e$newIndex, "id"]),
          screenName: r.getIn([e$newIndex, "title"])
        })
      }
      batch(function () {
        var e
        x($$_$$_$$_redux_common_actions.Fi(true))
        x($$_$$_$$_redux_common_actions.yh(e$oldIndex, e$newIndex))
        x($$_$$_$$_redux_common_actions.vg(e$newIndex))
        if (!(null === (e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === e)) {
          e.refresh_selection()
        }
      })
    },
    helperClass: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.dragItem,
    helperContainer: document.getElementById("_cocoScreenListDragContainer") || document.body,
    useDragHandle: true
  }), !k && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.addScreen,
    onClick: function () {
      if (r.size > 98) {
        x($$_$$_$$_redux_common_actions.mj({
          showPrefixIcon: false,
          message: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
            id: "screeMaxSize"
          })
        }))
      } else {
        x($$_$$_$$_redux_common_actions.Hf())
        c(r.size)
      }
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-add2",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.addBtn
  }))))
  var W = function (e) {
    x($$_$$_$$_redux_common_actions.vg(e))
  }
  return React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.wrapper,
    style: {
      left: j ? 0 : Cv,
      width: v
    }
  }, React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.stageMask, O && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.visible)
  }), React.createElement($$_$$_$$_$$_shared_ui_components_index.r, {
    content: G,
    onOpen: function () {
      w(true)
    },
    onHide: function () {
      w(false)
    },
    autoClose: false,
    ref: n
  }, React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.screenIconBox, !j && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.line)
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-screen-manage",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.screenIcon
  }), React.createElement("span", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.screenText
  }, $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
    id: "screenManage"
  })))), !j && React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.screenIndexBox
  }, React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.prev, d <= 0 && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.hide),
    onClick: function () {
      var /* [auto-meaningful-name] */T$current
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollBy({
          left: -190,
          behavior: "smooth"
        })
      }
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-pick-up",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.prevIcon
  })), React.createElement("div", {
    className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.next, d + v - 108 >= 38 * r.size && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.hide),
    onClick: function () {
      var /* [auto-meaningful-name] */T$current
      if (!(null === (T$current = T.current) || undefined === T$current)) {
        T$current.scrollBy({
          left: 190,
          behavior: "smooth"
        })
      }
    }
  }, React.createElement($$_$$_$$_$$_shared_ui_components_index.j, {
    type: "icon-pick-up",
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.nextIcon
  })), React.createElement("div", {
    className: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.screenIndexList,
    ref: T
  }, r.map(function (e, t) {
    return React.createElement("div", {
      id: "screen_index_".concat(t),
      className: Classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.index, A === t && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_2121.active),
      key: t,
      onClick: W.bind(null, t)
    }, t + 1)
  }))))
})
export { Xr }
export { to }
