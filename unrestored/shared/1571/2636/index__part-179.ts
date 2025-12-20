/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-179
 */

"use strict"

import { rj } from "./index__part-178"
import * as /* [auto-meaningful-name] */$_48_index from "./48/index"
import * as GI from "./91"
import * as /* [auto-meaningful-name] */$_796_index from "./796/index"
import * as /* [auto-meaningful-name] */$_174 from "./174"
import * as /* [auto-meaningful-name] */$_20_index from "./20/index"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_814 from "./814"
import /* [auto-meaningful-name] */_$_ from "./814"
var aj = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.tableDataDialog
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$grid = e.grid
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */e$isCreateNewGrid = e.isCreateNewGrid
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = $_16_index.d()
  var s = _React.useState(false)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = _React.useState()
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = _React.useState("")
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = _React.useState({})
  var w = $_10_index.a(O, 2)
  var C = w[0]
  var T = w[1]
  var A = _React.useState([])
  var j = $_10_index.a(A, 2)
  var N = j[0]
  var R = j[1]
  var k = _React.useState(false)
  var x = $_10_index.a(k, 2)
  var M = x[0]
  var L = x[1]
  var P = _React.useState(2)
  var B = $_10_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = _React.useState(2)
  var U = $_10_index.a(W, 2)
  var H = U[0]
  var V = U[1]
  _React.useEffect(function () {
    if (e$visible) {
      a($$_$$_$$_$$_src_shared_events_messagesWrapper.ki("grid"))
      E(e$grid.name)
      T(Lodash.cloneDeep(e$grid.header))
      R(Lodash.cloneDeep(e$grid.data))
      L(false)
      G(e$grid.data.length)
      V(Object.keys(e$grid.header).length - 2)
    }
  }, [a, e$visible, e$grid])
  var K = function () {
    var e = {}
    var t = []
    if (!(null === m || undefined === m)) {
      m.getColumnDefs().map(function (t) {
        var /* [auto-meaningful-name] */t$colId = t.colId
        var /* [auto-meaningful-name] */t$headerName = t.headerName
        var /* [auto-meaningful-name] */t$width = t.width
        if (t$colId && t$headerName) {
          e[t$colId] = {
            field: t$headerName,
            width: t$width
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
  var q = function () {
    a($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
    a($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
    a($$_$$_$$_$$_src_shared_events_messagesWrapper.ni("", ""))
    a($$_$$_$$_$$_src_shared_events_messagesWrapper.mi(false))
  }
  var X = function () {
    q()
    if (e$onClose) {
      e$onClose(e$grid.id, {
        newName: undefined,
        deleteColumnIdList: undefined,
        isCreateNewGrid: e$isCreateNewGrid
      })
    }
    a($$_$$_$$_$$_src_shared_events_messagesWrapper.wh())
  }
  var Q = function () {
    if (!(null === m || undefined === m)) {
      m.stopEditing()
    }
    var e = K()
    var /* [auto-meaningful-name] */e$header = e.header
    var /* [auto-meaningful-name] */e$data = e.data
    q()
    var s = false
    var c = []
    if (!Lodash.isEqual(e$header, e$grid.header)) {
      s = true
    }
    if (s || !Lodash.isEqual(e$data, e$grid.data)) {
      if (s) {
        var l = Object.keys(e$header)
        for (var u in e$grid.header) if (!l.includes(u)) {
          c.push(u)
        }
      }
      a($$_$$_$$_$$_src_shared_events_messagesWrapper.Lg(e$grid.id, "db", {
        header: e$header,
        data: e$data
      }, false, false, true))
    }
    if (null === c || undefined === c ? undefined : c.length) {
      a($$_$$_$$_$$_src_shared_events_messagesWrapper.rg(e$grid.id, c))
      c.forEach(function (e) {
        $_26_index.q($_26_index.c.TABLE_DATA_COLUMN, e)
      })
    }
    if (s) {
      for (var d in e$header) $_26_index.m($_26_index.c.TABLE_DATA_COLUMN, d, e$header[d].field)
      $_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
        if ("table_data_insert_row_data" === e.type && e.get_field_value("WIDGET_ID") === e$grid.id && e.updateShape_) {
          e.updateShape_(e$grid.id)
        }
      })
    }
    $_174.a.get(e$grid.id).then(function (e) {
      if (e) {
        $_20_index.TableDataSynchronizeIndexedDB(e$grid.id, e$grid, D.a({
          id: e$grid.id,
          name: e$grid.name
        }, K())).then(function (e) {
          GI.a({
            type: Tn.b.PLAYER_DATA_WATCH,
            data: {
              screenId: $_48_index.a().getState().currentScreenId,
              tab: An.G,
              id: e$grid.id,
              value: e
            }
          })
        })
      } else {
        GI.a({
          type: Tn.b.PLAYER_DATA_WATCH,
          data: {
            screenId: $_48_index.a().getState().currentScreenId,
            tab: An.G,
            id: e$grid.id,
            value: D.a({
              id: e$grid.id,
              name: e$grid.name
            }, K())
          }
        })
      }
    })
    if (e$onClose) {
      e$onClose(e$grid.id, {
        newName: "",
        deleteColumnIdList: c,
        isCreateNewGrid: e$isCreateNewGrid,
        columnChanged: s,
        header: e$header
      })
    }
    a($$_$$_$$_$$_src_shared_events_messagesWrapper.wh())
  }
  var Z = React.createElement("div", {
    className: _$_.footer
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "gridSupportTypeTips"
  })), React.createElement($_13_index.d, {
    type: "primary",
    disabled: l,
    onClick: Q
  }, $_710_index$a$formatMessage({
    id: "save"
  })))
  return React.createElement($_13_index.f, {
    visible: e$visible,
    className: _$_.tableDataDialog,
    title: React.createElement("div", null, y, React.createElement("span", {
      className: _$_.defaultData
    }, "— ", $_710_index$a$formatMessage({
      id: "TableDataWidget.data"
    }))),
    footer: Z,
    onClose: function () {
      if (!(null === m || undefined === m)) {
        m.stopEditing()
      }
      var e = K()
      var /* [auto-meaningful-name] */e$header = e.header
      var /* [auto-meaningful-name] */e$data = e.data
      if (Lodash.isEqual(e$data, e$grid.data) && Lodash.isEqual(e$header, e$grid.header)) {
        X()
      } else {
        L(true)
      }
    }
  }, React.createElement("div", {
    className: _$_.rowAndColumnCount
  }, React.createElement("span", {
    className: _$_.itemCount
  }, $_710_index$a$formatMessage({
    id: "column"
  }), ": ", H), React.createElement("span", null, $_710_index$a$formatMessage({
    id: "row"
  }), ": ", F)), e$visible && React.createElement(rj, {
    id: e$grid.id,
    header: C,
    data: N,
    onGridReady: function (e) {
      g(e)
    },
    handleRowDataUpdate: function (e) {
      G(e.api.getDisplayedRowCount())
    },
    handleGridColumnChange: function (e) {
      V(e.length - 2)
    },
    visible: e$visible,
    allowEditHeader: true,
    columnUseType: false,
    resizeColumnNumber: 13,
    setSaveDisabled: function (e) {
      u(e)
    }
  }), M && React.createElement($_796_index.a, {
    onCancel: X,
    onOk: Q
  }))
})
export { aj }
