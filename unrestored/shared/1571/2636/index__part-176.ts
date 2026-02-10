/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-176
 */

"use strict"

import { Sg } from "./index__part-79"
import { DI } from "./index__part-175"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Yr from "./53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_47_index from "./47/index"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { useRef, useState, useEffect, memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_619 from "./619"
import /* [auto-meaningful-name] */$_6191 from "./619"
var PI = function (e) {
  var t = useSelector(function (e) {
    return e.project.globalWidgetIds
  })
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var r = useRef(null)
  var o = useState(e.gridName)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState("")
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  useEffect(function () {
    s(e.gridName)
  }, [e.gridName])
  useEffect(function () {
    if (u && r.current) {
      r.current.focus()
    }
  }, [u])
  var b = [
    {
      validator: function (e) {
        var n = []
        t.forEach(function (e) {
          var t = Et.dc.get(e)
          if ((null === t || undefined === t ? undefined : t.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.m) {
            n.push(t)
          }
        })
        return !n.some(function (t) {
          return t.title === e
        })
      },
      message: $_710$a$formatMessage({
        id: "gridNameRepeat"
      })
    }
  ].concat($_25_index.a(Sg($_710$a$formatMessage)))
  return React.createElement("div", null, u ? React.createElement("div", {
    className: $_6191.gridNameEditorContainer
  }, React.createElement("input", {
    className: $_6191.gridNameEditor,
    maxLength: Yr.j,
    ref: r,
    defaultValue: a,
    placeholder: $_710$a$formatMessage({
      id: "addGridNamePlaceholder"
    }),
    onChange: function (t) {
      var n
      var o = ""
      var i = false
      var a = $_47_index.a(b)
      try {
        for (a.s(); !(n = a.n()).done;) {
          var /* [auto-meaningful-name] */n$value = n.value
          if (!n$value.validator(t.target.value)) {
            o = n$value.message
            i = true
            break
          }
        }
      } catch (c) {
        a.e(c)
      } finally {
        a.f()
      }
      v(o)
      e.setDisabled(i)
      if (r.current) {
        if (o) {
          r.current.classList.add($_6191.invalidGridName)
        } else {
          r.current.classList.remove($_6191.invalidGridName)
        }
      }
    },
    onKeyPress: function (e) {
      if ("Enter" === e.key && r.current) {
        r.current.blur()
      }
    },
    onBlur: function (t) {
      d(!u)
      if (g) {
        e.setDisabled(false)
      } else {
        var /* [auto-meaningful-name] */t$target$value = t.target.value
        s(t$target$value)
        e.setGridName(t$target$value)
      }
    }
  }), React.createElement("div", {
    className: $_6191.warningMessage
  }, g)) : React.createElement("div", {
    className: $_6191.gridName
  }, React.createElement("span", null, a), React.createElement("span", {
    onClick: function () {
      d(true)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-edit"
  }))))
}
var BI = memo(function () {
  var e = useSelector(function (e) {
    return e.common.gridDialog
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$grid = e.grid
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$isCreateNewGrid = e.isCreateNewGrid
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useDispatch()
  var s = useState(false)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = useState()
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState("")
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState({})
  var w = $_10_index.a(O, 2)
  var C = w[0]
  var T = w[1]
  var A = useState([])
  var j = $_10_index.a(A, 2)
  var N = j[0]
  var R = j[1]
  useEffect(function () {
    if (e$visible) {
      a($$_$$_$$_$$_src_editor_redux_common_actions.ki("grid"))
      E(e$grid.name)
      T(Lodash.cloneDeep(e$grid.header))
      R(Lodash.cloneDeep(e$grid.data))
    }
  }, [a, e$visible, e$grid])
  var k = function () {
    var e = {}
    var t = []
    if (!(null === m || undefined === m)) {
      m.getColumnDefs().map(function (t) {
        var /* [auto-meaningful-name] */t$colId = t.colId
        var /* [auto-meaningful-name] */t$headerName = t.headerName
        if (t$colId && t$headerName) {
          e[t$colId] = {
            field: t$headerName
          }
        }
      })
    }
    if (!(null === m || undefined === m)) {
      m.getModel().forEachNode(function (e) {
        t.push(e.data)
      })
    }
    return {
      header: e,
      data: t
    }
  }
  var x = function () {
    a($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
    a($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
    a($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
  }
  var D = function () {
    x()
    if (e$onClose) {
      e$onClose(e$grid.id, {
        newName: undefined,
        deleteColumnIdList: undefined,
        isCreateNewGrid: e$isCreateNewGrid
      })
    }
    a($$_$$_$$_$$_src_editor_redux_common_actions.qh())
  }
  var M = function () {
    if (!(null === m || undefined === m)) {
      m.stopEditing()
    }
    var e = k()
    var /* [auto-meaningful-name] */e$header = e.header
    var /* [auto-meaningful-name] */e$data = e.data
    if (Lodash.isEqual(e$data, e$grid.data) && Lodash.isEqual(e$header, e$grid.header) && y === e$grid.name) {
      D()
    } else {
      a($$_$$_$$_$$_src_editor_redux_common_actions.zh({
        onConfirm: function () {
          D()
        },
        allowText: $_710$a$formatMessage({
          id: "giveUp"
        }),
        title: $_710$a$formatMessage({
          id: "giveUpTitle"
        }),
        content: $_710$a$formatMessage({
          id: "giveUpTips"
        })
      }))
    }
  }
  var L = React.createElement("div", null, React.createElement($_13_index.d, {
    type: "default",
    onClick: M
  }, $_710$a$formatMessage({
    id: "cancel"
  })), React.createElement($_13_index.d, {
    type: "primary",
    disabled: l,
    onClick: function () {
      if (!(null === m || undefined === m)) {
        m.stopEditing()
      }
      var e = k()
      var /* [auto-meaningful-name] */e$header = e.header
      var /* [auto-meaningful-name] */e$data = e.data
      x()
      var s = ""
      var c = false
      var l = []
      if (y !== e$grid.name) {
        s = y
        a($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$grid.id, "title", y, false, false, true))
      }
      if (!Lodash.isEqual(e$header, e$grid.header)) {
        c = true
      }
      if (c || !Lodash.isEqual(e$data, e$grid.data)) {
        if (c) {
          var u = Object.keys(e$header)
          for (var d in e$grid.header) if (!u.includes(d)) {
            l.push(d)
          }
        }
        a($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$grid.id, "db", {
          header: e$header,
          data: e$data
        }, false, false, true))
      }
      if (e$onClose) {
        e$onClose(e$grid.id, {
          newName: s,
          deleteColumnIdList: l,
          isCreateNewGrid: e$isCreateNewGrid
        })
      }
      a($$_$$_$$_$$_src_editor_redux_common_actions.qh())
    }
  }, $_710$a$formatMessage({
    id: "confirm"
  })))
  return React.createElement($_13_index.f, {
    visible: e$visible,
    className: $_6191.dataViewerGrid,
    title: React.createElement(PI, {
      gridName: y,
      setDisabled: function (e) {
        u(e)
      },
      setGridName: function (e) {
        E(e)
      }
    }),
    footer: L,
    onClose: M
  }, e$visible && React.createElement(DI, {
    id: e$grid.id,
    header: C,
    data: N,
    onGridReady: function (e) {
      g(e)
    },
    visible: e$visible,
    allowEditHeader: true,
    columnUseType: false,
    resizeColumnNumber: 14,
    setSaveDisabled: function (e) {
      u(e)
    }
  }))
})
export { BI }
