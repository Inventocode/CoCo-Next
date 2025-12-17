/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-193
 */

"use strict"

import { ID, uM, mM } from "./index__part-192"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_137 from "./137"
import /* [auto-meaningful-name] */_$_ from "./137"
var vM = _React.memo(function (e) {
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
      return Et.mb(t$source)
    }
  }(e$action)
  var _ = _React.useRef(null)
  var v = _React.useState(false)
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = _React.useCallback(function (e) {
    var /* [auto-meaningful-name] */_$current = _.current
    if (_$current && e.target !== _$current) {
      _$current.blur()
    }
  }, [])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */_$current
    var /* [auto-meaningful-name] */_$current2
    if (y) {
      if (!(null === (_$current = _.current) || undefined === _$current)) {
        _$current.focus()
      }
      if (!(null === (_$current2 = _.current) || undefined === _$current2)) {
        _$current2.setSelectionRange(e$action$name.length, e$action$name.length)
      }
    }
  }, [e$action$name.length, y])
  return React.createElement("li", Object.assign({
    ref: e$innerRef
  }, e$draggableProps, e$dragHandleProps, {
    id: c,
    className: N(_$_.actionItem, e$dragging && _$_.dragging, e$selected && _$_.selected),
    onClick: e$onClick
  }), React.createElement("div", {
    className: _$_.actionImg
  }, g ? React.createElement("img", {
    src: g,
    alt: e$action$name
  }) : React.createElement("div", {
    className: _$_.emptyImg
  })), React.createElement("div", {
    className: _$_.actionName
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
        e$target$value = Et.ac(e$target$value, e$actionList.map(function (e) {
          return e.name
        }))
        var r = D.a(D.a({}, e$action), {}, {
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
    className: _$_.nameInput
  }) : React.createElement("div", {
    className: _$_.nameText,
    onClick: function () {
      if (e$selected) {
        E(true)
      }
    }
  }, e$action$name)), !y && React.createElement("div", {
    className: _$_.deleteContainer
  }, React.createElement("div", {
    className: _$_.copyButton,
    onClick: function (e) {
      e.stopPropagation()
      e$onCopy()
    }
  }, React.createElement($_13_index.j, {
    type: "icon-copy-slight",
    className: _$_.copyIcon
  })), React.createElement("div", {
    className: _$_.deleteButton,
    onClick: function (e) {
      e.stopPropagation()
      e$onDelete()
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close",
    className: _$_.deleteIcon
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
  var l = _React.useRef(bM)
  var u = _React.useState("")
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = _React.useCallback(function () {
    var e
    var t
    var n = null === (e = document.getElementById("ACTION_LIST")) || undefined === e ? undefined : e.closest(".coco-dialog-wrapper.show")
    var r = null === n || undefined === n || null === (t = n.getClientRects()) || undefined === t ? undefined : t.item(0)
    l.current = r ? {
      x: r.x,
      y: r.y
    } : bM
  }, [])
  _React.useEffect(function () {
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
      className: _$_.actionList,
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
_React.memo(yM)
export { yM }
