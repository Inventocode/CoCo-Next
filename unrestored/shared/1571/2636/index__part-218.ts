/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-218
 */

"use strict"

import { rA } from "./index__part-160"
import * as /* [auto-meaningful-name] */$_417_index from "./417/index"
import * as /* [auto-meaningful-name] */$_20_index from "./20/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1220_index from "./1220/index"
import /* [auto-meaningful-name] */_$_1220_index from "./1220/index"
import * as /* [auto-meaningful-name] */$_1221 from "./1221"
import * as /* [auto-meaningful-name] */$_529 from "./529"
import /* [auto-meaningful-name] */_$_ from "./529"
var oB = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var /* [auto-meaningful-name] */$_16_index$eFunctionEReturnE$dataWatch$tableDataDialog$id = $_16_index.e(function (e) {
    return e.dataWatch.tableDataDialog
  }).id
  var n = $_16_index.e(function (e) {
    return e.dataWatch.variableList
  })
  var r = _React.useState()
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = n.find(function (e) {
    return e.id === $_16_index$eFunctionEReturnE$dataWatch$tableDataDialog$id
  })
  if (!s) {
    return null
  }
  var /* [auto-meaningful-name] */s$value = s.value
  var /* [auto-meaningful-name] */s$value$header = s$value.header
  var /* [auto-meaningful-name] */s$value$data = s$value.data
  if (!(null === i || undefined === i)) {
    i.setRowData(s$value$data)
  }
  var d = {
    onGridReady: function (e) {
      a(e.api)
    },
    context: {
      animationHeaders: [],
      lastFocusedCell: {
        rowIndex: undefined,
        columnId: undefined
      },
      scrollToRowIndex: -1
    },
    getRowHeight: function (e) {
      return 32
    },
    enableCellChangeFlash: false,
    suppressColumnVirtualisation: true,
    suppressMovableColumns: true,
    suppressScrollOnNewData: true,
    alwaysShowHorizontalScroll: true,
    frameworkComponents: {
      agColumnHeader: function (e) {
        return React.createElement("div", {
          className: _$_.gridHeaderCell
        }, e.displayName)
      },
      indexCellRenderer: function (e) {
        return React.createElement("div", null, e.rowIndex + 1)
      },
      baseCellRenderer: function (e) {
        return React.createElement("div", {
          className: _$_.baseCell
        }, e.value)
      }
    },
    overlayNoRowsTemplate: $_710_index$a$formatMessage({
      id: "noData"
    })
  }
  return React.createElement("div", {
    className: "ag-theme-alpine"
  }, React.createElement($_417_index.AgGridReact, {
    gridOptions: d
  }, React.createElement($_417_index.AgGridColumn, {
    colId: "indexColumn",
    headerName: "",
    field: "indexColumn",
    key: "index",
    editable: false,
    resizable: false,
    width: 60,
    pinned: "left",
    cellRenderer: "indexCellRenderer"
  }), Object.entries(s$value$header).map(function (e) {
    var t = $_10_index.a(e, 2)
    var n = t[0]
    var r = t[1]
    return React.createElement($_417_index.AgGridColumn, {
      colId: n,
      headerName: r.field,
      field: n,
      key: n,
      editable: false,
      resizable: true,
      minWidth: 150,
      width: r.width,
      cellRenderer: "baseCellRenderer"
    })
  })))
})
var iB = function () {
  var e = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = _React.useState({
    x: document.body.clientWidth - 886,
    y: 100
  })
  var r = $_10_index.a(n, 2)
  var o = r[0]
  var i = r[1]
  var a = _React.useState(0)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState(0)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = _React.useState(0)
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var w = _React.useState(0)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var j = C[1]
  var R = _React.useState(876)
  var k = $_10_index.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = _React.useState(540)
  var L = $_10_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = _React.useRef(x)
  var G = _React.useRef(P)
  var W = $_16_index.e(function (e) {
    return e.project.playing
  })
  var U = $_16_index.e(function (e) {
    return e.dataWatch.tableDataDialog
  })
  var H = U.id
  var /* [auto-meaningful-name] */U$visible = U.visible
  var K = $_16_index.e(function (e) {
    return e.dataWatch.variableList
  }).find(function (e) {
    return e.id === H
  })
  var q = _React.useState(false)
  var X = $_10_index.a(q, 2)
  var Q = X[0]
  var Z = X[1]
  if (!K) {
    return null
  }
  if (!U$visible) {
    return null
  }
  var J = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (!H) {
                e.next = 4
                break
              }
              e.next = 3
              return $_20_index.resetTableDataIndexedDB(H)
            case 3:
              Z(true)
            case 4:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function () {
      return e.apply(this, arguments)
    }
  }()
  return React.createElement("div", {
    className: _$_.container
  }, React.createElement(_$_1220_index, {
    allowAnyClick: true,
    position: o,
    onDrag: function (e, t) {
      i({
        x: t.x,
        y: Math.max(t.y, -16)
      })
    },
    handle: ".handle"
  }, React.createElement($_1221.a, {
    defaultSize: {
      width: x,
      height: P
    },
    minWidth: 300,
    minHeight: 300,
    maxWidth: document.body.clientWidth,
    maxHeight: document.body.clientHeight,
    onResize: function (e, t, n, r) {
      var a = o.x
      var s = o.y
      switch (t) {
        case "left":
          a = c - (b + r.width)
          break
        case "top":
          s = p - (T + r.height)
          break
        case "bottomLeft":
          a = c - (b + r.width)
          break
        case "topLeft":
          a = c - (b + r.width)
          s = p - (T + r.height)
          break
        case "topRight":
          s = p - (T + r.height)
      }
      i({
        x: a,
        y: Math.max(s, -16)
      })
      D(F.current + r.width)
      B(G.current + r.height)
    },
    onResizeStart: function (e, t, n, r) {
      var /* [auto-meaningful-name] */n$getBoundingClientRect$right = n.getBoundingClientRect().right
      var /* [auto-meaningful-name] */n$getBoundingClientRect$bottom = n.getBoundingClientRect().bottom
      var /* [auto-meaningful-name] */n$offsetWidth = n.offsetWidth
      var /* [auto-meaningful-name] */n$offsetHeight = n.offsetHeight
      l(n$getBoundingClientRect$right)
      m(n$getBoundingClientRect$bottom)
      y(n$offsetWidth)
      j(n$offsetHeight)
    },
    onResizeStop: function () {
      F.current = x
      G.current = P
    }
  }, React.createElement("div", {
    className: _$_.wrapper,
    style: {
      width: x,
      height: P
    }
  }, React.createElement("div", {
    className: N(_$_.header, "handle")
  }, React.createElement("div", {
    className: _$_.toast
  }, React.createElement(rA, {
    visible: Q,
    toast: "".concat(K.name),
    showIcon: true,
    setVisible: Z
  })), React.createElement("div", {
    className: _$_.name
  }, React.createElement($_13_index.j, {
    type: "icon-widget-table-data"
  }), React.createElement("span", null, K.name)), React.createElement("div", {
    className: _$_.actions
  }, W ? "" : React.createElement($_748_index.a, {
    placement: "bottom",
    trigger: ["hover"],
    title: $_710_index$a$formatMessage({
      id: "resetData"
    })
  }, React.createElement("div", {
    className: _$_.closeIconBox,
    onClick: J
  }, React.createElement($_13_index.j, {
    type: "icon-resetData"
  }))), React.createElement("div", {
    className: _$_.closeIconBox,
    onClick: function () {
      e($$_$$_$$_$$_src_shared_events_messagesWrapper.aj(false))
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close-bold"
  })))), React.createElement(oB, null)))))
}
export { iB }
