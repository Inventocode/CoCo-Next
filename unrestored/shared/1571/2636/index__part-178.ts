/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-178
 */

"use strict"

import { UI, HI, VI, zI, YI } from "./index__part-177"
import * as /* [auto-meaningful-name] */AgGridReact from "ag-grid-react"
import * as ng from "./64"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Yr from "./53"
import * as Tn from "./68"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useEffect, useMemo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_132 from "./132"
import /* [auto-meaningful-name] */$_1321 from "./132"
var ZI = memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.gridStatus
  })
  var n = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = useRef(null)
  var i = useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = useState(false)
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(false)
  var E = $_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  useEffect(function () {
    if (s) {
      document.addEventListener("mousedown", function e() {
        c(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [s])
  useEffect(function () {
    var /* [auto-meaningful-name] */e$column
    var /* [auto-meaningful-name] */e$column1
    var /* [auto-meaningful-name] */e$column2
    if (t.copiedContent.rowId || t.copiedContent.columnId !== (null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getId())) {
      p(false)
    } else {
      p(true)
    }
    if (t.selectedContent.columnId !== (null === (e$column1 = e.column) || undefined === e$column1 ? undefined : e$column1.getId()) || t.selectedContent.rowId) {
      b(false)
    } else {
      b(true)
      e.setSelectedContent(D.a({}, t.selectedContent))
    }
    if (e.allowEditHeader) {
      if (t.editingHeader === (null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId())) {
        w(true)
      } else {
        w(false)
      }
    } else {
      w(false)
    }
  }, [t, e])
  useEffect(function () {
    if (o.current) {
      o.current.focus()
      o.current.select()
    }
  })
  var C = function () {
    var r = e.column.getId()
    if (e.api.getFocusedCell()) {
      e.api.clearFocusedCell()
    }
    if (t.editingHeader) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
    }
    n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", r))
  }
  var T = undefined
  var A = function (e) {
    if (e.length - 2 <= 5) {
      var t = Math.round(814 / (e.length - 2))
      e.forEach(function (e) {
        if (e.field && !["indexColumn", "addColumn"].includes(e.field)) {
          e.width = t
        }
      })
      var n = 814 - t * (e.length - 2)
      e[e.length - 1].width = t + n
    }
    return e
  }
  if ("left" === e.column.getPinned()) {
    return React.createElement("div", {
      id: e.displayName
    }, e.displayName)
  }
  if ("right" === e.column.getPinned()) {
    return React.createElement("div", {
      onClick: function () {
        var o = e.api.getColumnDefs()
        if (o.length >= 52) {
          n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            message: $_710$a$formatMessage({
              id: "columnLengthLimit"
            })
          }))
        } else {
          if (t.editingHeader) {
            n($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
          }
          if (t.selectedContent.columnId || t.selectedContent.rowId) {
            n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
          }
          var i = ng.a("COLUMN")
          var a = {
            colId: i,
            headerName: function (e) {
              var t = new RegExp("^第(\\d+)列$")
              var n = []
              e.forEach(function (e) {
                var r = e.match(t)
                if (r && r[1]) {
                  n.push(parseInt(r[1]))
                }
              })
              n.sort(function (e, t) {
                return e - t
              })
              for (var r = 1, o = 0; o < n.length && !(r < n[o]); o++) {
                r = n[o] + 1
              }
              return "第".concat(r, "列")
            }(e.api.getColumnDefs().map(function (e) {
              return e.headerName || ""
            })),
            field: i,
            editable: e.editableCallback,
            resizable: true,
            minWidth: 150,
            width: 164,
            cellRenderer: "baseCellRenderer",
            pinnedRowCellRenderer: "pinnedRow"
          }
          o.push(a)
          if (!t.isCustomWidth) {
            o = A(o)
          }
          e.api.setColumnDefs(o)
          e.api.ensureColumnVisible(i)
        }
      },
      className: $_1321.addColumn
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
      type: "icon-add"
    }))
  }
  return React.createElement("div", null, O ? React.createElement("div", {
    className: $_1321.headerEditor
  }, React.createElement("input", {
    maxLength: 40,
    ref: o,
    defaultValue: e.displayName,
    onChange: function (e) {
      var t = e.target.value.replace(Yr.E, "")
      e.target.value = $_190.c(t, 40)
    },
    onKeyPress: function (e) {
      if ("Enter" === e.key && o.current) {
        o.current.blur()
      }
    },
    onBlur: function (t) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
      var o = t.target.value.trim()
      if ("" !== (o = $_190.c(o, 40))) {
        var i = e.column.getColId()
        var a = e.api.getColumnDefs()
        var s = []
        a.forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          if (e$colId && e$colId !== i) {
            s.push(e.headerName || "")
          }
        })
        var c = Et.ac(o, s)
        a.forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          if (e$colId) {
            if (!(e$colId !== i)) {
              e.headerName = c
            }
          }
        })
        e.api.setColumnDefs(a)
        e.api.refreshHeader()
      } else {
        n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
          message: $_710$a$formatMessage({
            id: "emptyColumnName"
          })
        }))
      }
    }
  })) : React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        c(false)
      }
    },
    visible: e.allowEditHeader && s,
    content: React.createElement("div", {
      className: $_1321.menuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var t = e.column.getColId()
        HI(e.api, t)
        n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", t))
        n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
        n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
          message: $_710$a$formatMessage({
            id: "copySuccess"
          })
        }))
      },
      className: $_1321.menuItem
    }, $_710$a$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var /* [auto-meaningful-name] */e$column
          var i = null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getColId()
          if (i) {
            var a = zI(e.api, t, i, 0)
            if (null === a || undefined === a ? undefined : a.columnOutOfRange) {
              n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
            if (null === a || undefined === a ? undefined : a.rowOutOfRange) {
              n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "rowLengthLimit"
                }, {
                  num: 1e3
                })
              }))
            }
          }
          n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
        })
      },
      className: $_1321.menuItem
    }, $_710$a$formatMessage({
      id: "pasteGridData"
    })), e.api.getColumnDefs().length > 3 ? React.createElement("div", {
      onMouseDown: function () {
        n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
        var r = e.column.getId()
        var o = e.api.getColumnDefs().filter(function (e) {
          return e.colId !== r
        })
        if (t.isCustomWidth) {
          var i = 0
          o.forEach(function (e) {
            if ("indexColumn" !== e.field && "addColumn" !== e.field && e.width) {
              i += e.width
            }
          })
          if (i < 814) {
            var a = o[o.length - 1]
            if (a) {
              a.width = (a.width || 0) + 814 - i
            }
          }
        } else {
          o = A(o)
        }
        e.api.setColumnDefs(o)
        e.api.getModel().forEachNode(function (e) {
          delete e.data[r]
        })
      },
      className: Classnames($_1321.menuItem, $_1321.deleteOption)
    }, $_710$a$formatMessage({
      id: "deleteGridData"
    })) : React.createElement("div", {
      onMouseDown: function () {
        for (var t = e.api.getModel().getRowCount(), n = 0; n < t; n++) {
          var /* [auto-meaningful-name] */e$column
          var o = e.api.getModel().getRow(n)
          var i = null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getId()
          if (o && i) {
            o.setDataValue(i, "")
          }
        }
      },
      className: Classnames($_1321.menuItem, $_1321.deleteOption)
    }, $_710$a$formatMessage({
      id: "clearGridData"
    })))
  }, React.createElement("div", {
    onMouseUp: function (r) {
      if (2 !== r.button) {
        if (undefined === T) {
          T = setTimeout(function () {
            T = undefined
            C()
          }, 250)
        } else {
          clearTimeout(T);
          (function () {
            var r = e.column.getId()
            if (e.api.getFocusedCell()) {
              e.api.clearFocusedCell()
            }
            if (t.selectedContent.rowId || t.selectedContent.columnId) {
              n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
            }
            n($$_$$_$$_$$_src_editor_redux_common_actions.oi(r))
          })()
        }
      }
    },
    onContextMenu: function (e) {
      e.preventDefault()
      C()
      c(true)
    },
    className: Classnames($_1321.header, (d || v) && $_1321.selectedColumnHeader, t.errorHeaders.includes(e.column.getColId()) && $_1321.errorColumn, t.animationHeaders.includes(e.column.getColId()) && $_1321.errorAnimation)
  }, React.createElement("div", {
    className: $_1321.area
  }, function () {
    var t
    switch (null === (t = e.column.getUserProvidedColDef()) || undefined === t ? undefined : t.type) {
      case "boolean":
        return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
          type: "icon-grid-boolean",
          className: $_1321.columnIcon
        })
      case "string":
        return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
          type: "icon-grid-string",
          className: $_1321.columnIcon
        })
      case "number":
        return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
          type: "icon-grid-number",
          className: $_1321.columnIcon
        })
      default:
        return
    }
  }(), React.createElement("div", {
    className: $_1321.text,
    title: e.displayName
  }, e.displayName)))))
})
var JI = memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.gridStatus
  })
  var n = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(false)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  useEffect(function () {
    if (g) {
      document.addEventListener("mousedown", function e() {
        v(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [g])
  useEffect(function () {
    if (t.copiedContent.rowId !== e.node.id || t.copiedContent.columnId) {
      d(false)
    } else {
      d(true)
    }
    if (t.selectedContent.columnId || t.selectedContent.rowId !== e.node.id) {
      s(false)
    } else {
      s(true)
      e.setSelectedContent(D.a({}, t.selectedContent))
    }
  }, [t, e])
  var b = function () {
    if (e.api.getFocusedCell()) {
      e.api.clearFocusedCell()
    }
    if (t.editingHeader) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
    }
    n($$_$$_$$_$$_src_editor_redux_common_actions.ri(e.data.rowId, ""))
  }
  var y = function (o) {
    if (e.api.getDisplayedRowCount() >= 1e3) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
        message: $_710$a$formatMessage({
          id: "rowLengthLimit"
        }, {
          num: 1e3
        })
      }))
    } else {
      if (t.editingHeader) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
      }
      if (t.selectedContent.columnId || "" !== t.selectedContent.rowId) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
      }
      var i = {}
      e.api.getColumnDefs().forEach(function (e) {
        var /* [auto-meaningful-name] */e$colId = e.colId
        if (e$colId && "indexColumn" !== e$colId && "addColumn" !== e$colId) {
          i[e$colId] = ""
        }
      })
      i.rowId = ng.a("ROW")
      var a = "prev" === o ? e.value - 1 : e.value
      var s = {
        add: [i],
        addIndex: a
      }
      e.context.scrollToRowIndex = a
      e.api.applyTransaction(s)
    }
  }
  return React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        v(false)
      }
    },
    visible: g,
    content: React.createElement("div", {
      className: $_1321.rowMenuWrapper,
      style: {
        marginTop: 37
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */e$node$id = e.node.id
        if (e$node$id) {
          VI(e.api, e.rowIndex)
          n($$_$$_$$_$$_src_editor_redux_common_actions.ni(e$node$id, ""))
          n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
          n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            message: $_710$a$formatMessage({
              id: "copySuccess"
            })
          }))
        }
      },
      className: $_1321.menuItem
    }, $_710$a$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var o = YI(e.api)
          var i = zI(e.api, t, o, e.rowIndex)
          if (null === i || undefined === i ? undefined : i.columnOutOfRange) {
            n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710$a$formatMessage({
                id: "pasteColumnOutOfRange"
              })
            }))
          }
          if (null === i || undefined === i ? undefined : i.rowOutOfRange) {
            n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710$a$formatMessage({
                id: "rowLengthLimit"
              }, {
                num: 1e3
              })
            }))
          }
          n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
        })
      },
      className: $_1321.menuItem
    }, $_710$a$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: y.bind(null, "prev"),
      className: Classnames($_1321.menuItem, $_1321.borderTop)
    }, $_710$a$formatMessage({
      id: "insertPrevRow"
    })), React.createElement("div", {
      onMouseDown: y.bind(null, "next"),
      className: Classnames($_1321.menuItem, $_1321.borderBottom)
    }, $_710$a$formatMessage({
      id: "insertNextRow"
    })), React.createElement("div", {
      onMouseDown: function () {
        var t
        n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
        var r = null === (t = e.api.getModel().getRow(e.rowIndex)) || undefined === t ? undefined : t.id
        if (r) {
          var o = {
            remove: [
              {
                rowId: r
              }
            ]
          }
          e.context.scrollToRowIndex = e.rowIndex
          e.api.applyTransaction(o)
        }
      },
      className: Classnames($_1321.menuItem, $_1321.deleteOption)
    }, $_710$a$formatMessage({
      id: "deleteGridData"
    })))
  }, React.createElement("div", {
    onMouseUp: function (e) {
      if (2 !== e.button) {
        b()
      }
    },
    onContextMenu: function (e) {
      e.preventDefault()
      b()
      v(true)
    },
    className: Classnames(u || a ? $_1321.selectedRowIndex : $_1321.rowIndex)
  }, e.value))
})
var $I = memo(function (e) {
  var /* [auto-meaningful-name] */e$column
  var n = !!(null === (e$column = e.column) || undefined === e$column ? undefined : e$column.isPinnedLeft())
  var r = useSelector(function (e) {
    return e.common.gridStatus
  })
  var o = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  useEffect(function () {
    var /* [auto-meaningful-name] */e$column1
    var /* [auto-meaningful-name] */e$column2
    if ("" === r.copiedContent.rowId && r.copiedContent.columnId === (null === (e$column1 = e.column) || undefined === e$column1 ? undefined : e$column1.getId())) {
      l(true)
    } else {
      l(false)
    }
    if (r.selectedContent.columnId === (null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getId()) && "" === r.selectedContent.rowId) {
      m(true)
    } else {
      m(false)
    }
  }, [r, e.column])
  var g = function () {
    if (e.limitRow && e.api.getDisplayedRowCount() >= e.limitRow) {
      return void o($$_$$_$$_$$_src_editor_redux_common_actions.mj({
        message: $_710$a$formatMessage({
          id: "rowLengthLimit"
        }, {
          num: e.limitRow
        })
      }))
    }
    if (r.editingHeader) {
      o($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
    }
    if (r.selectedContent.columnId || "" !== r.selectedContent.rowId) {
      o($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
    }
    var t = {}
    e.api.getColumnDefs().forEach(function (e) {
      var /* [auto-meaningful-name] */e$colId = e.colId
      if (e$colId && "indexColumn" !== e$colId && "addColumn" !== e$colId) {
        t[e$colId] = ""
      }
    })
    var n = e.api.getLastDisplayedRow() + 1
    t.rowId = ng.a("ROW")
    var a = {
      add: [t]
    }
    e.context.scrollToRowIndex = n
    e.api.applyTransaction(a)
  }
  return n ? React.createElement("div", {
    onClick: g,
    className: $_1321.addRow
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-add"
  })) : React.createElement("div", {
    onClick: g,
    className: Classnames($_1321.addRow, c && $_1321.copiedColumnPinnedRow, p && $_1321.selectedColumnPinnedRow)
  })
})
var ej = memo(function (e) {
  var /* [auto-meaningful-name] */e$column
  var /* [auto-meaningful-name] */e$column1
  var /* [auto-meaningful-name] */e$column2
  var /* [auto-meaningful-name] */e$column3
  var /* [auto-meaningful-name] */e$column4
  var /* [auto-meaningful-name] */e$column5
  var /* [auto-meaningful-name] */e$column6
  var c = useSelector(function (e) {
    return e.common.gridStatus
  })
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var u = useDispatch()
  var d = useState(false)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = useState(false)
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var E = b[1]
  var O = useState(false)
  var w = $_10_index.a(O, 2)
  var C = w[0]
  var T = w[1]
  var A = useState(false)
  var j = $_10_index.a(A, 2)
  var R = j[0]
  var k = j[1]
  var x = useState(false)
  var D = $_10_index.a(x, 2)
  var M = D[0]
  var L = D[1]
  var P = useState(false)
  var B = $_10_index.a(P, 2)
  var F = B[0]
  var G = B[1]
  var W = useState(false)
  var U = $_10_index.a(W, 2)
  var H = U[0]
  var V = U[1]
  useEffect(function () {
    if (F) {
      document.addEventListener("mousedown", function e() {
        G(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [F])
  useEffect(function () {
    var /* [auto-meaningful-name] */e$column7
    var /* [auto-meaningful-name] */e$column8
    if (!e.node.isRowPinned()) {
      var /* [auto-meaningful-name] */e$column9
      g(false)
      T(false)
      E(false)
      if (c.copiedContent.rowId === e.node.id) {
        if (c.copiedContent.columnId === (null === (e$column9 = e.column) || undefined === e$column9 ? undefined : e$column9.getId())) {
          g(true)
        } else {
          if ("" === c.copiedContent.columnId) {
            T(true)
          }
        }
      } else if (!(c.copiedContent.rowId || c.copiedContent.columnId !== (null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()))) {
        E(true)
      }
      L(false)
      k(false)
      if (c.selectedContent.rowId === e.node.id) {
        if (!c.selectedContent.columnId) {
          L(true)
        }
      } else {
        if (!(c.selectedContent.rowId || c.selectedContent.columnId !== (null === (e$column8 = e.column) || undefined === e$column8 ? undefined : e$column8.getId()))) {
          k(true)
        }
      }
    }
  }, [c, e.column, e.rowIndex, e.node])
  var K = function (t) {
    if (e.api.getDisplayedRowCount() >= 1e3) {
      u($$_$$_$$_$$_src_editor_redux_common_actions.mj({
        message: $_710$a$formatMessage({
          id: "rowLengthLimit"
        }, {
          num: 1e3
        })
      }))
    } else {
      if (c.editingHeader) {
        u($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
      }
      if (c.selectedContent.columnId || "" !== c.selectedContent.rowId) {
        u($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
      }
      var n = {}
      e.api.getColumnDefs().forEach(function (e) {
        var /* [auto-meaningful-name] */e$colId = e.colId
        if (e$colId && "indexColumn" !== e$colId && "addColumn" !== e$colId) {
          n[e$colId] = ""
        }
      })
      n.rowId = ng.a("ROW")
      if (null !== e.node.rowIndex) {
        var r = "prev" === t ? e.node.rowIndex : e.node.rowIndex + 1
        var o = {
          add: [n],
          addIndex: r
        }
        e.context.scrollToRowIndex = r
        e.api.applyTransaction(o)
      }
    }
  }
  var q = function () {
    V(false)
    u($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (t) {
      var n = t[0]
      if (null === n || undefined === n ? undefined : n.id) {
        var /* [auto-meaningful-name] */e$column7
        var o = e.api.getModel().getRow(e.rowIndex)
        var i = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()
        if (o && i) {
          o.setDataValue(i, n.id)
        }
      }
    }))
  }
  var X = function () {
    V(false)
    u($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.IconLibrary, function (t) {
      var n = t[0]
      if (null === n || undefined === n ? undefined : n.name) {
        var /* [auto-meaningful-name] */e$column7
        var o = e.api.getModel().getRow(e.rowIndex)
        var i = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()
        if (o && i) {
          o.setDataValue(i, n.name + ".svg")
        }
      }
    }))
  }
  var Q = function () {
    V(false)
    u($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.SoundLibrary, function (t) {
      var n = t[0]
      if (null === n || undefined === n ? undefined : n.name) {
        var /* [auto-meaningful-name] */e$column7
        var o = e.api.getModel().getRow(e.rowIndex)
        var i = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()
        if (o && i) {
          o.setDataValue(i, n.name)
        }
      }
    }))
  }
  return React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        G(false)
      }
    },
    visible: F,
    content: React.createElement("div", {
      className: $_1321.rowMenuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */e$column7
        var n = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getColId()
        var /* [auto-meaningful-name] */e$node$id = e.node.id
        if (e$node$id && n) {
          UI(e.api, e.rowIndex, n)
          u($$_$$_$$_$$_src_editor_redux_common_actions.ni(e$node$id, n))
          u($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
          e.api.clearFocusedCell()
          u($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            message: $_710$a$formatMessage({
              id: "copySuccess"
            })
          }))
        }
      },
      className: $_1321.menuItem
    }, $_710$a$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var /* [auto-meaningful-name] */e$column7
          var r = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()
          if (r) {
            var o = zI(e.api, t, r, e.rowIndex)
            if (null === o || undefined === o ? undefined : o.columnOutOfRange) {
              u($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
            if (null === o || undefined === o ? undefined : o.rowOutOfRange) {
              u($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "rowLengthLimit"
                }, {
                  num: 1e3
                })
              }))
            }
          }
          u($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
        })
      },
      className: $_1321.menuItem
    }, $_710$a$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: K.bind(null, "prev"),
      className: Classnames($_1321.menuItem, $_1321.borderTop)
    }, $_710$a$formatMessage({
      id: "insertPrevRow"
    })), React.createElement("div", {
      onMouseDown: K.bind(null, "next"),
      className: Classnames($_1321.menuItem, $_1321.borderBottom)
    }, $_710$a$formatMessage({
      id: "insertNextRow"
    })), React.createElement("div", {
      onMouseDown: function () {
        var t = e.api.getModel().getRow(e.rowIndex)
        if (t) {
          e.api.removeItems([t])
        }
      },
      className: Classnames($_1321.menuItem, $_1321.deleteOption)
    }, $_710$a$formatMessage({
      id: "deleteRowData"
    })))
  }, React.createElement("div", {
    className: Classnames("coco-table-data-cell", $_1321.gridCell, m && $_1321.copiedCell, y && $_1321.copiedColumnCell, y && 0 === e.node.rowIndex && $_1321.copiedColumnFirstRow, C && "right" !== (null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getPinned()) && $_1321.copiedRowCell, C && "right" !== (null === (e$column1 = e.column) || undefined === e$column1 ? undefined : e$column1.getPinned()) && "coco-grid-copied-row-cell", C && "right" === (null === (e$column2 = e.column) || undefined === e$column2 ? undefined : e$column2.getPinned()) && $_1321.copiedRowPinnedColumn, R && $_1321.selectedColumnCell, R && 0 === e.node.rowIndex && $_1321.selectedColumnFirstRow, M && "right" !== (null === (e$column3 = e.column) || undefined === e$column3 ? undefined : e$column3.getPinned()) && $_1321.selectedRowCell, M && "right" !== (null === (e$column4 = e.column) || undefined === e$column4 ? undefined : e$column4.getPinned()) && "coco-grid-selected-row-cell", M && "right" === (null === (e$column5 = e.column) || undefined === e$column5 ? undefined : e$column5.getPinned()) && $_1321.selectedRowPinnedColumn, function () {
      var /* [auto-meaningful-name] */e$column7
      var /* [auto-meaningful-name] */c$errorCells = c.errorCells
      var /* [auto-meaningful-name] */e$node$id = e.node.id
      var o = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()
      return !!(o && c$errorCells[o] && e$node$id) && c$errorCells[o].includes(e$node$id)
    }() && $_1321.errorColumn),
    onContextMenu: function (t) {
      var /* [auto-meaningful-name] */e$column7
      t.preventDefault()
      var /* [auto-meaningful-name] */e$node$id = e.node.id
      var o = null === (e$column7 = e.column) || undefined === e$column7 ? undefined : e$column7.getId()
      if (e$node$id && o) {
        u($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
        u($$_$$_$$_$$_src_editor_redux_common_actions.ri(e$node$id, o))
        G(true)
      }
    }
  }, React.createElement("div", {
    className: $_1321.cellValue
  }, e.value), "right" !== (null === (e$column6 = e.column) || undefined === e$column6 ? undefined : e$column6.getPinned()) && React.createElement($_1213.a, {
    placement: "rightTop",
    onVisibleChange: function (e) {
      V(e)
    },
    visible: H,
    content: React.createElement("div", {
      className: $_1321.menuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: q,
      className: $_1321.resourceMenuItem
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
      type: "icon-Image",
      className: $_1321.resourceMenuIcon
    }), $_710$a$formatMessage({
      id: "Resource.ImageLibrary"
    })), React.createElement("div", {
      onMouseDown: X,
      className: $_1321.resourceMenuItem
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
      type: "icon-Icon",
      className: $_1321.resourceMenuIcon
    }), $_710$a$formatMessage({
      id: "Resource.IconLibrary"
    })), React.createElement("div", {
      onMouseDown: Q,
      className: $_1321.resourceMenuItem
    }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
      type: "icon-Sound",
      className: $_1321.resourceMenuIcon
    }), $_710$a$formatMessage({
      id: "Resource.SoundLibrary"
    })))
  }, React.createElement("div", {
    className: $_1321.addBox
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-add"
  })))))
})
var rj = memo(function (e) {
  var t = useSelector(function (e) {
    return e.project.focusedWorkspaceArea
  })
  var n = useDispatch()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var o = useRef(null)
  var i = useRef({
    rowId: "",
    columnId: ""
  })
  var a = useState()
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  useEffect(function () {
    if (e.visible && c) {
      c.setRowData(Lodash.cloneDeep(e.data))
    }
  }, [e.data, c, e.visible])
  useEffect(function () {
    if (c && o.current) {
      if (e.data.length < e.resizeColumnNumber) {
        o.current.style.removeProperty("width")
        o.current.style.removeProperty("height")
        o.current.classList.remove($_1321.showBottomShadow)
        c.setDomLayout("autoHeight")
      } else {
        o.current.style.width = "100%"
        o.current.style.height = "100%"
        o.current.classList.add($_1321.showBottomShadow)
        c.setDomLayout("normal")
      }
    }
  }, [e.data, c, e.resizeColumnNumber])
  var u = function (e) {
    return !e.node.isRowPinned()
  }
  var d = {
    onGridReady: function (t) {
      l(t.api)
      e.onGridReady(t.api)
    },
    context: {
      animationHeaders: [],
      lastFocusedCell: {
        rowIndex: undefined,
        columnId: undefined
      },
      scrollToRowIndex: -1
    },
    columnTypes: {
      number: {},
      string: {},
      boolean: {}
    },
    getRowHeight: function (e) {
      return e.node.rowPinned ? 31 : 32
    },
    suppressColumnVirtualisation: true,
    pinnedBottomRowData: [{}],
    suppressMovableColumns: true,
    suppressScrollOnNewData: true,
    undoRedoCellEditing: true,
    undoRedoCellEditingLimit: 20,
    enterMovesDownAfterEdit: true,
    onCellClicked: function (e) {
      var t
      var r = e.api.getFocusedCell()
      if (r) {
        var o = r.column.getColId()
        if ("indexColumn" !== o && "bottom" !== r.rowPinned) {
          var /* [auto-meaningful-name] */r$rowIndex = r.rowIndex
          var a = null === (t = e.api.getModel().getRow(r$rowIndex)) || undefined === t ? undefined : t.id
          if (a) {
            n($$_$$_$$_$$_src_editor_redux_common_actions.ri(a, o))
          }
          n($$_$$_$$_$$_src_editor_redux_common_actions.oi(""))
          if (d.context.lastFocusedCell.rowIndex !== r$rowIndex || d.context.lastFocusedCell.columnId !== o) {
            d.context.lastFocusedCell = {
              rowIndex: r$rowIndex,
              columnId: o
            }
          } else {
            e.api.startEditingCell({
              rowIndex: r$rowIndex,
              colKey: o
            })
          }
        }
      }
    },
    onCellValueChanged: function (t) {
      if (e.handleCellChangeEvent) {
        e.handleCellChangeEvent(t)
      }
    },
    onCellEditingStarted: function (e) {
      document.addEventListener("click", function t(n) {
        for (var /* [auto-meaningful-name] */n$target = n.target, o = false; n$target && !o;) {
          o = n$target.classList.contains("ag-cell-focus")
          n$target = n$target.offsetParent
        }
        if (!o) {
          e.api.stopEditing()
        }
        document.removeEventListener("click", t)
      })
    },
    onGridColumnsChanged: function (t) {
      var o = t.api.getColumnDefs()
      var i = document.querySelector(".ag-center-cols-container")
      if (i) {
        if (o.length <= 2) {
          if (!document.querySelector(".noColumn")) {
            var a = document.createElement("div")
            a.innerText = $_710$a$formatMessage({
              id: "emptyColumn"
            })
            a.className = "noColumn"
            i.prepend(a)
          }
        } else {
          var s = document.querySelector(".noColumn")
          if (s) {
            i.removeChild(s)
          }
          var c = function (e) {
            var t = {}
            var n = new Set()
            e.forEach(function (e) {
              var /* [auto-meaningful-name] */e$headerName = e.headerName
              var /* [auto-meaningful-name] */e$colId = e.colId
              if (e$headerName && e$colId) {
                if (t[e$headerName]) {
                  n.add(t[e$headerName])
                  n.add(e$colId)
                } else {
                  t[e$headerName] = e$colId
                }
              }
            })
            return Array.from(n)
          }(o)
          if (c.length) {
            e.setSaveDisabled(true)
          } else {
            e.setSaveDisabled(false)
          }
          n($$_$$_$$_$$_src_editor_redux_common_actions.qi(c))
          t.api.ensureColumnVisible(c[0])
          if (e.handleGridColumnChange) {
            e.handleGridColumnChange(o)
          }
        }
      }
    },
    onRowDataUpdated: function (t) {
      if (o.current) {
        if (e.handleRowDataUpdate) {
          e.handleRowDataUpdate(t)
        }
        var n = t.api.getModel().getRowCount()
        var /* [auto-meaningful-name] */o$current$style$width = o.current.style.width
        return n > e.resizeColumnNumber && !o$current$style$width ? (o.current.style.width = "100%", o.current.style.height = "100%", t.api.setDomLayout("normal"), o.current.classList.add($_1321.showBottomShadow), void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))) : n <= e.resizeColumnNumber && o$current$style$width ? (o.current.style.removeProperty("width"), o.current.style.removeProperty("height"), t.api.setDomLayout("autoHeight"), o.current.classList.remove($_1321.showBottomShadow), void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))) : void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))
      }
    },
    onDragStopped: function (e) {
      n($$_$$_$$_$$_src_editor_redux_common_actions.mi(true))
      var t = e.api.getColumnDefs()
      var r = 0
      t.forEach(function (e) {
        if ("indexColumn" !== e.field && "addColumn" !== e.field && e.width) {
          r += e.width
        }
      })
      if (r < 814) {
        var o = t.pop()
        if (o) {
          o.width = (o.width || 0) + 814 - r
          t.push(o)
          e.api.setColumnDefs(t)
        }
      }
    },
    getRowNodeId: function (e) {
      return e.rowId
    },
    navigateToNextCell: function (e) {
      var /* [auto-meaningful-name] */e$nextCellPosition = e.nextCellPosition
      var /* [auto-meaningful-name] */e$previousCellPosition = e.previousCellPosition
      return e$nextCellPosition ? (e$previousCellPosition = e$nextCellPosition, (e$nextCellPosition.rowPinned || -1 === e$nextCellPosition.rowIndex) && (e$previousCellPosition.rowIndex = e.previousCellPosition.rowIndex), "indexColumn" !== e$nextCellPosition.column.getColId() && "addColumn" !== e$nextCellPosition.column.getColId() || (e$previousCellPosition.column = e.previousCellPosition.column), e$previousCellPosition) : e$previousCellPosition
    },
    frameworkComponents: {
      agColumnHeader: function (t) {
        return React.createElement(ZI, Object.assign({}, t, {
          useType: e.columnUseType,
          allowEditHeader: e.allowEditHeader,
          editableCallback: u,
          setSelectedContent: function (e) {
            i.current = e
          }
        }))
      },
      indexCellRenderer: function (e) {
        return React.createElement(JI, Object.assign({}, e, {
          setSelectedContent: function (e) {
            i.current = e
          }
        }))
      },
      pinnedRow: function (e) {
        return React.createElement($I, Object.assign({}, e, {
          limitRow: 1e3
        }))
      },
      baseCellRenderer: function (e) {
        return React.createElement(ej, e)
      }
    }
  }
  var p = useMemo(function () {
    var t = Object.keys(e.header).length || 1
    var n = 164
    if (t <= 5) {
      n = Math.round(814 / t)
    }
    return {
      headerLength: t,
      columnWidth: n
    }
  }, [e.header])
  var /* [auto-meaningful-name] */p$headerLength = p.headerLength
  var /* [auto-meaningful-name] */p$columnWidth = p.columnWidth
  return React.createElement("div", {
    className: $_1321.tableDataGrid
  }, React.createElement($_188.a, {
    useCapture: true
  }, React.createElement($_188.b, {
    keys: {
      osx: "command+c",
      windows: "control+c"
    },
    callback: function () {
      if (c) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
        var e = c.getFocusedCell()
        if (e) {
          var t
          var o = null === (t = c.getModel().getRow(e.rowIndex)) || undefined === t ? undefined : t.id
          var a = e.column.getColId()
          if (o && "indexColumn" !== a) {
            UI(c, e.rowIndex, a)
            n($$_$$_$$_$$_src_editor_redux_common_actions.ni(o, a))
            c.clearFocusedCell()
            return void n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710$a$formatMessage({
                id: "copySuccess"
              })
            }))
          }
        }
        if (!i.current.rowId && i.current.columnId) {
          HI(c, i.current.columnId)
          n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", i.current.columnId))
          return void n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            message: $_710$a$formatMessage({
              id: "copySuccess"
            })
          }))
        }
        if (i.current.rowId && !i.current.columnId) {
          var s
          var l = null === (s = c.getRowNode(i.current.rowId)) || undefined === s ? undefined : s.rowIndex
          if (undefined !== l && null !== l) {
            VI(c, l)
            n($$_$$_$$_$$_src_editor_redux_common_actions.ni(i.current.rowId, ""))
            n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710$a$formatMessage({
                id: "copySuccess"
              })
            }))
          }
        }
      }
    },
    disabled: "grid" !== t
  }), React.createElement($_188.b, {
    keys: {
      osx: "command+v",
      windows: "control+v"
    },
    callback: function () {
      if (c) {
        var e = c.getFocusedCell()
        if (e) {
          var t = e.column.getColId()
          if ("indexColumn" !== t) {
            var /* [auto-meaningful-name] */e$rowIndex = e.rowIndex
            navigator.clipboard.readText().then(function (e) {
              var i = zI(c, e, t, e$rowIndex)
              if (null === i || undefined === i ? undefined : i.columnOutOfRange) {
                n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710$a$formatMessage({
                    id: "pasteColumnOutOfRange"
                  })
                }))
              }
              if (null === i || undefined === i ? undefined : i.rowOutOfRange) {
                n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710$a$formatMessage({
                    id: "rowLengthLimit"
                  }, {
                    num: 1e3
                  })
                }))
              }
            })
            return void n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
          }
        }
        if (!i.current.rowId && i.current.columnId) {
          navigator.clipboard.readText().then(function (e) {
            var /* [auto-meaningful-name] */i$current$columnId = i.current.columnId
            var o = zI(c, e, i$current$columnId, 0)
            if (null === o || undefined === o ? undefined : o.columnOutOfRange) {
              n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
            if (null === o || undefined === o ? undefined : o.rowOutOfRange) {
              n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                message: $_710$a$formatMessage({
                  id: "rowLengthLimit"
                }, {
                  num: 1e3
                })
              }))
            }
          })
          return void n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
        }
        if (i.current.rowId && !i.current.columnId) {
          navigator.clipboard.readText().then(function (e) {
            var t
            var o = YI(c)
            var a = null === (t = c.getRowNode(i.current.rowId)) || undefined === t ? undefined : t.rowIndex
            if (undefined !== a && null !== a) {
              var s = zI(c, e, o, a)
              if (null === s || undefined === s ? undefined : s.columnOutOfRange) {
                n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710$a$formatMessage({
                    id: "pasteColumnOutOfRange"
                  })
                }))
              }
              if (null === s || undefined === s ? undefined : s.rowOutOfRange) {
                n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
                  message: $_710$a$formatMessage({
                    id: "rowLengthLimit"
                  }, {
                    num: 1e3
                  })
                }))
              }
            }
            n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
          })
        }
      }
    },
    disabled: "grid" !== t
  }), React.createElement($_188.b, {
    keys: {
      osx: "command+z",
      windows: "control+z"
    },
    callback: function () {
      if (c) {
        c.undoCellEditing()
      }
    },
    disabled: "grid" !== t
  }), React.createElement($_188.b, {
    keys: {
      osx: "command+y",
      windows: "control+y"
    },
    callback: function () {
      if (c) {
        c.redoCellEditing()
      }
    },
    disabled: "grid" !== t
  }), React.createElement($_188.b, {
    keys: {
      osx: "escape",
      windows: "escape"
    },
    callback: function () {
      if (null === c || undefined === c ? undefined : c.getFocusedCell()) {
        if (!(null === c || undefined === c)) {
          c.clearFocusedCell()
        }
      }
      n($$_$$_$$_$$_src_editor_redux_common_actions.ri("", ""))
      n($$_$$_$$_$$_src_editor_redux_common_actions.ni("", ""))
    },
    disabled: "grid" !== t
  })), React.createElement("div", {
    ref: o,
    className: "ag-theme-alpine"
  }, React.createElement(AgGridReact.AgGridReact, {
    gridOptions: d
  }, React.createElement(AgGridReact.AgGridColumn, {
    colId: "indexColumn",
    headerName: "",
    field: "indexColumn",
    key: "index",
    editable: false,
    resizable: false,
    width: 60,
    pinned: "left",
    valueGetter: function (e) {
      var /* [auto-meaningful-name] */e$node = e.node
      return e$node && null !== e$node.rowIndex ? e$node.rowIndex + 1 : ""
    },
    cellRenderer: "indexCellRenderer",
    pinnedRowCellRenderer: "pinnedRow"
  }), React.createElement(AgGridReact.AgGridColumn, {
    colId: "addColumn",
    headerName: "",
    field: "addColumn",
    key: "add",
    editable: false,
    resizable: false,
    width: 60,
    pinned: "right",
    cellRenderer: "baseCellRenderer",
    pinnedRowCellRenderer: "pinnedRow"
  }), Object.entries(e.header).map(function (e) {
    var t = $_10_index.a(e, 2)
    var n = t[0]
    var r = t[1]
    return React.createElement(AgGridReact.AgGridColumn, {
      colId: n,
      headerName: r.field,
      field: n,
      key: n,
      type: r.type,
      editable: u,
      resizable: true,
      minWidth: 150,
      width: r.width && p$headerLength > 1 ? r.width : p$columnWidth,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    })
  }))))
}, function (e, t) {
  return t.visible === e.visible && t.id === e.id && t.data === e.data && t.header === e.header
})
export { rj }
