/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-193
 */

"use strict"

import { ID, uM, mM } from "./index__part-192"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"./9"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"./6"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_137 from /* 137 */"./137"
import /* [auto-meaningful-name] */Module_1371 from /* 137 */"./137"
var vM = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$action = e.action
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$dragging = e.dragging
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$onClick = e.onClick
  var /* [auto-meaningful-name] */e$onCopy = e.onCopy
  var c = e.id
  var /* [auto-meaningful-name] */e$innerRef = e.innerRef
  var /* [auto-meaningful-name] */e$draggableProps = e.draggableProps
  var /* [auto-meaningful-name] */e$dragHandleProps = e.dragHandleProps
  var /* [auto-meaningful-name] */e$actionList = e.actionList
  var /* [auto-meaningful-name] */e$action$name = e$action.name
  var g = function (e) {
    var t = e.styleList[0]
    if (t) {
      var /* [auto-meaningful-name] */t$source = t.source
      return Module_9.mb(t$source)
    }
  }(e$action)
  var _ = React1.useRef(null)
  var v = React1.useState(false)
  var b = Module_10.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = React1.useCallback(function (e) {
    var /* [auto-meaningful-name] */_$current = _.current
    if (_$current && e.target !== _$current) {
      _$current.blur()
    }
  }, [])
  React1.useEffect(function () {
    var /* [auto-meaningful-name] */_$current
    var /* [auto-meaningful-name] */_$current1
    if (y) {
      if (!(null === (_$current = _.current) || undefined === _$current)) {
        _$current.focus()
      }
      if (!(null === (_$current1 = _.current) || undefined === _$current1)) {
        _$current1.setSelectionRange(e$action$name.length, e$action$name.length)
      }
    }
  }, [e$action$name.length, y])
  return React.createElement("li", Object.assign({
    ref: e$innerRef
  }, e$draggableProps, e$dragHandleProps, {
    id: c,
    className: Classnames(Module_1371.actionItem, e$dragging && Module_1371.dragging, e$selected && Module_1371.selected),
    onClick: e$onClick
  }), React.createElement("div", {
    className: Module_1371.actionImg
  }, g ? React.createElement("img", {
    src: g,
    alt: e$action$name
  }) : React.createElement("div", {
    className: Module_1371.emptyImg
  })), React.createElement("div", {
    className: Module_1371.actionName
  }, y ? React.createElement("input", {
    type: "text",
    maxLength: 20,
    defaultValue: e$action$name,
    onFocus: function () {
      document.addEventListener("mousedown", O, {
        capture: true
      })
    },
    onBlur: function (e) {
      document.removeEventListener("mousedown", O)
      var /* [auto-meaningful-name] */e$target$value = e.target.value
      E(false)
      if (e$target$value && 0 !== e$target$value.trim().length && e$target$value !== e$action$name) {
        e$target$value = Module_9.ac(e$target$value, e$actionList.map(function (e) {
          return e.name
        }))
        var r = Module_6.a(Module_6.a({}, e$action), {}, {
          name: e$target$value
        })
        e$onChange(r)
      }
    },
    onDoubleClick: function () {
      var /* [auto-meaningful-name] */_$current
      if (!(null === (_$current = _.current) || undefined === _$current)) {
        _$current.select()
      }
    },
    ref: _,
    className: Module_1371.nameInput
  }) : React.createElement("div", {
    className: Module_1371.nameText,
    onClick: function () {
      if (e$selected) {
        E(true)
      }
    }
  }, e$action$name)), !y && React.createElement("div", {
    className: Module_1371.deleteContainer
  }, React.createElement("div", {
    className: Module_1371.copyButton,
    onClick: function (e) {
      e.stopPropagation()
      e$onCopy()
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-copy-slight",
    className: Module_1371.copyIcon
  })), React.createElement("div", {
    className: Module_1371.deleteButton,
    onClick: function (e) {
      e.stopPropagation()
      e$onDelete()
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-close",
    className: Module_1371.deleteIcon
  }))))
})
var bM = {
  x: 0,
  y: 0
}
function yM(e) {
  var /* [auto-meaningful-name] */e$actionList = e.actionList
  var /* [auto-meaningful-name] */e$selectedActionId = e.selectedActionId
  var /* [auto-meaningful-name] */e$handleActionClick = e.handleActionClick
  var /* [auto-meaningful-name] */e$handleActionChange = e.handleActionChange
  var /* [auto-meaningful-name] */e$handleActionDelete = e.handleActionDelete
  var /* [auto-meaningful-name] */e$handleActionCopy = e.handleActionCopy
  var /* [auto-meaningful-name] */e$getActionDomId = e.getActionDomId
  var /* [auto-meaningful-name] */e$onActionListChange = e.onActionListChange
  var l = React1.useRef(bM)
  var u = React1.useState("")
  var d = Module_10.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = React1.useCallback(function () {
    var e
    var t
    var n = null === (e = document.getElementById("ACTION_LIST")) || undefined === e ? undefined : e.closest(".coco-dialog-wrapper.show")
    var r = null === n || undefined === n || null === (t = n.getClientRects()) || undefined === t ? undefined : t.item(0)
    l.current = r ? {
      x: r.x,
      y: r.y
    } : bM
  }, [])
  React1.useEffect(function () {
    window.addEventListener("scroll", g)
    return function () {
      return window.removeEventListener("scroll", g)
    }
  }, [g])
  return React.createElement(ID, {
    onDragEnd: function (e) {
      m("")
      var /* [auto-meaningful-name] */e$source = e.source
      var /* [auto-meaningful-name] */e$destination = e.destination
      if (e$destination && e$destination.index !== e$source.index) {
        var o
        var i = e$actionList.filter(function (t) {
          return t.id !== e.draggableId || (o = t, false)
        })
        if (o) {
          i.splice(e$destination.index, 0, o)
          e$onActionListChange(i)
        }
      }
    },
    onBeforeDragStart: function (e) {
      m(e.draggableId)
      g()
    }
  }, React.createElement(mM, {
    droppableId: "actions",
    type: "QUOTE"
  }, function (e) {
    return React.createElement("ul", Object.assign({
      id: "ACTION_LIST",
      className: Module_1371.actionList,
      ref: e.innerRef
    }, e.droppableProps), e$actionList.map(function (e, c) {
      return React.createElement(uM, {
        draggableId: e.id,
        index: c,
        key: e.id
      }, function (u) {
        var /* [auto-meaningful-name] */u$innerRef = u.innerRef
        var /* [auto-meaningful-name] */u$draggableProps = u.draggableProps
        var /* [auto-meaningful-name] */u$dragHandleProps = u.dragHandleProps
        var /* [auto-meaningful-name] */l$current = l.current
        if (u$draggableProps.style) {
          if ("top" in u$draggableProps.style) {
            u$draggableProps.style.top -= l$current.y
          }
          if ("left" in u$draggableProps.style) {
            u$draggableProps.style.left -= l$current.x
          }
        }
        return React.createElement(vM, {
          innerRef: u$innerRef,
          draggableProps: u$draggableProps,
          dragHandleProps: u$dragHandleProps,
          action: e,
          actionList: e$actionList,
          dragging: p === e.id,
          onClick: function () {
            e$handleActionClick(e.id)
          },
          onChange: function (e) {
            e$handleActionChange(c, e)
          },
          onDelete: function () {
            e$handleActionDelete(c)
          },
          onCopy: function () {
            e$handleActionCopy(c)
          },
          selected: e$selectedActionId === e.id,
          key: e.id,
          id: e$getActionDomId(e.id)
        })
      })
    }), e.placeholder)
  }))
}
React1.memo(yM)
export { yM }
