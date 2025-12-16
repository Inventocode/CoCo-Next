/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-175
 */

"use strict"

import { EI, OI, wI, CI, TI } from "./index__part-174"
import * as /* [auto-meaningful-name] */$_417_index from "./417/index"
import * as ng from "./64"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_188 from "./188"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_178 from "./178"
import /* [auto-meaningful-name] */_$_ from "./178"
var NI = _React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.common.gridStatus
  })
  var n = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = _React.useRef(null)
  var i = _React.useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = _React.useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = _React.useState(false)
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = _React.useState(false)
  var E = $_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = _React.useState(false)
  var T = $_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  _React.useEffect(function () {
    if (s) {
      document.addEventListener("mousedown", function e() {
        c(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [s])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */e$column
    var /* [auto-meaningful-name] */_e$column
    var /* [auto-meaningful-name] */_e$column2
    if (t.copiedContent.rowId || t.copiedContent.columnId !== (null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getId())) {
      p(false)
    } else {
      p(true)
    }
    if (t.selectedContent.columnId !== (null === (_e$column = e.column) || undefined === _e$column ? undefined : _e$column.getId()) || t.selectedContent.rowId) {
      b(false)
    } else {
      b(true)
      e.setSelectedContent(D.a({}, t.selectedContent))
    }
    if (e.allowEditHeader) {
      if (t.editingHeader === (null === (_e$column2 = e.column) || undefined === _e$column2 ? undefined : _e$column2.getId())) {
        w(true)
      } else {
        w(false)
      }
    } else {
      w(false)
    }
  }, [t, e])
  _React.useEffect(function () {
    if (o.current) {
      o.current.focus()
      o.current.select()
    }
  })
  var R = function (e) {
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
  }
  var k = function (e) {
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
      message: $_710_index$a$formatMessage({
        id: "repeatGridColumnName"
      }),
      showCloseIcon: false,
      showPrefixIcon: false,
      duration: 3e3,
      type: "error"
    }))
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.li(e))
    setTimeout(function () {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.li([]))
    }, 3e3)
  }
  var x = function () {
    var r = e.column.getId()
    if (e.api.getFocusedCell()) {
      e.api.clearFocusedCell()
    }
    if (t.editingHeader) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
    }
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", r))
  }
  var M = undefined
  var L = function (r) {
    if (t.editingHeader) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
    }
    if (t.selectedContent.columnId || t.selectedContent.rowId) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
    }
    var o = e.api.getColumnDefs()
    var i = ng.a("COLUMN")
    var a = e.api.getColumnDefs().map(function (e) {
      return e.headerName || ""
    })
    var s = R(a)
    var c = "boolean" === r ? {
      colId: i,
      headerName: s,
      field: i,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["true", "false"]
      },
      editable: e.editableCallback,
      resizable: true,
      minWidth: 150,
      flex: 1,
      type: r,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    } : {
      colId: i,
      headerName: s,
      field: i,
      editable: e.editableCallback,
      resizable: true,
      minWidth: 150,
      flex: 1,
      type: r,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    }
    o.push(c)
    e.api.setColumnDefs(o)
  }
  var P = function () {
    if (t.editingHeader) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
    }
    if (t.selectedContent.columnId || t.selectedContent.rowId) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
    }
    var r = e.api.getColumnDefs()
    var o = ng.a("COLUMN")
    var i = e.api.getColumnDefs().map(function (e) {
      return e.headerName || ""
    })
    var a = {
      colId: o,
      headerName: R(i),
      field: o,
      editable: e.editableCallback,
      resizable: true,
      minWidth: 150,
      flex: 1,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    }
    r.push(a)
    e.api.setColumnDefs(r)
  }
  if ("left" === e.column.getPinned()) {
    return React.createElement("div", {
      id: e.displayName
    }, e.displayName)
  }
  if ("right" === e.column.getPinned()) {
    return React.createElement($_1213.a, {
      placement: "bottomLeft",
      trigger: "click",
      onVisibleChange: function (t) {
        if (t) {
          if (e.allowEditHeader) {
            if (e.useType) {
              if (e.api.getColumnDefs().map(function (e) {
                return e.headerName
              }).filter(function (e) {
                return "" !== e
              }).length >= 10) {
                return void n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                  message: $_710_index$a$formatMessage({
                    id: "columnLengthLimit"
                  })
                }))
              }
              j(t)
            } else {
              P()
            }
          }
        } else {
          j(t)
        }
      },
      visible: A,
      content: React.createElement("div", {
        className: _$_.cloudDBAddColumnMenuWrapper
      }, React.createElement("div", {
        onMouseDown: function () {
          return L("number")
        },
        className: _$_.menuItem
      }, React.createElement($_13_index.j, {
        type: "icon-grid-number",
        className: _$_.columnIcon
      }), $_710_index$a$formatMessage({
        id: "numberGridData"
      })), React.createElement("div", {
        onMouseDown: function () {
          return L("string")
        },
        className: _$_.menuItem
      }, React.createElement($_13_index.j, {
        type: "icon-grid-string",
        className: _$_.columnIcon
      }), $_710_index$a$formatMessage({
        id: "stringGridData"
      })), React.createElement("div", {
        onMouseDown: function () {
          return L("boolean")
        },
        className: _$_.menuItem
      }, React.createElement($_13_index.j, {
        type: "icon-grid-boolean",
        className: _$_.columnIcon
      }), $_710_index$a$formatMessage({
        id: "booleanGridData"
      })))
    }, React.createElement("div", null, React.createElement($_13_index.j, {
      type: "icon-add"
    })))
  }
  return React.createElement("div", null, O ? React.createElement("div", {
    className: _$_.headerEditor
  }, React.createElement("input", {
    ref: o,
    defaultValue: e.displayName,
    onKeyPress: function (e) {
      if ("Enter" === e.key && o.current) {
        o.current.blur()
      }
    },
    onBlur: function (t) {
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
      var /* [auto-meaningful-name] */t$target$value = t.target.value
      if ("" !== t$target$value) {
        var i = e.column.getColId()
        var a = e.api.getColumnDefs()
        var s = []
        a.forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          if (e$colId) {
            if (e$colId !== i) {
              if (e$colId && e.headerName === t$target$value) {
                s.push(e$colId)
              }
            } else {
              e.headerName = t$target$value
            }
          }
        })
        e.api.setColumnDefs(a)
        e.api.refreshHeader()
        if (s.length) {
          k([].concat(s, [i]))
        } else {
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.li([]))
        }
      } else {
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          message: $_710_index$a$formatMessage({
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
      className: _$_.menuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var t = e.column.getColId()
        OI(e.api, t)
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.ni("", t))
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          message: $_710_index$a$formatMessage({
            id: "copySuccess"
          })
        }))
      },
      className: _$_.menuItem
    }, $_710_index$a$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var /* [auto-meaningful-name] */e$column
          var i = null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getColId()
          if (i) {
            if (CI(e.api, t, i, 0)) {
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
          }
        })
      },
      className: _$_.menuItem
    }, $_710_index$a$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
        var t = e.column.getId()
        var r = e.api.getColumnDefs().filter(function (e) {
          return e.colId !== t
        })
        e.api.setColumnDefs(r)
        e.api.getModel().forEachNode(function (e) {
          delete e.data[t]
        })
      },
      className: N(_$_.menuItem, _$_.deleteOption)
    }, $_710_index$a$formatMessage({
      id: "deleteGridData"
    })))
  }, React.createElement("div", {
    onMouseUp: function (r) {
      if (2 !== r.button) {
        if (undefined === M) {
          M = setTimeout(function () {
            M = undefined
            x()
          }, 250)
        } else {
          clearTimeout(M);
          (function () {
            var r = e.column.getId()
            if (e.api.getFocusedCell()) {
              e.api.clearFocusedCell()
            }
            if (t.selectedContent.rowId || t.selectedContent.columnId) {
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
            }
            n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(r))
          })()
        }
      }
    },
    onContextMenu: function (e) {
      e.preventDefault()
      x()
      c(true)
    },
    className: N(_$_.header, (d || v) && _$_.selectedColumnHeader, t.errorHeaders.includes(e.column.getColId()) && _$_.errorColumn, t.animationHeaders.includes(e.column.getColId()) && _$_.errorAnimation)
  }, React.createElement("div", {
    className: _$_.area
  }, function () {
    var t
    switch (null === (t = e.column.getUserProvidedColDef()) || undefined === t ? undefined : t.type) {
      case "boolean":
        return React.createElement($_13_index.j, {
          type: "icon-grid-boolean",
          className: _$_.columnIcon
        })
      case "string":
        return React.createElement($_13_index.j, {
          type: "icon-grid-string",
          className: _$_.columnIcon
        })
      case "number":
        return React.createElement($_13_index.j, {
          type: "icon-grid-number",
          className: _$_.columnIcon
        })
      default:
        return
    }
  }(), React.createElement("div", {
    className: _$_.text,
    title: e.displayName
  }, e.displayName)))))
})
var RI = _React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.common.gridStatus
  })
  var n = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = _React.useState(false)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = _React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useState(false)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  _React.useEffect(function () {
    if (g) {
      document.addEventListener("mousedown", function e() {
        v(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [g])
  _React.useEffect(function () {
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
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
    }
    n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri(e.data.rowId, ""))
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
      className: _$_.menuWrapper,
      style: {
        marginTop: 37
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */e$node$id = e.node.id
        if (e$node$id) {
          wI(e.api, e.rowIndex)
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.ni(e$node$id, ""))
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
            message: $_710_index$a$formatMessage({
              id: "copySuccess"
            })
          }))
        }
      },
      className: _$_.menuItem
    }, $_710_index$a$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var o = TI(e.api)
          if (CI(e.api, t, o, e.rowIndex)) {
            n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
              message: $_710_index$a$formatMessage({
                id: "pasteColumnOutOfRange"
              })
            }))
          }
        })
      },
      className: _$_.menuItem
    }, $_710_index$a$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        var t
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
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
      className: N(_$_.menuItem, _$_.deleteOption)
    }, $_710_index$a$formatMessage({
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
    className: N(u || a ? _$_.selectedRowIndex : _$_.rowIndex)
  }, e.value))
})
var kI = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$column
  var n = !!(null === (e$column = e.column) || undefined === e$column ? undefined : e$column.isPinnedLeft())
  var r = $_16_index.e(function (e) {
    return e.common.gridStatus
  })
  var o = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = _React.useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */_e$column3
    var /* [auto-meaningful-name] */_e$column4
    if ("" === r.copiedContent.rowId && r.copiedContent.columnId === (null === (_e$column3 = e.column) || undefined === _e$column3 ? undefined : _e$column3.getId())) {
      l(true)
    } else {
      l(false)
    }
    if (r.selectedContent.columnId === (null === (_e$column4 = e.column) || undefined === _e$column4 ? undefined : _e$column4.getId()) && "" === r.selectedContent.rowId) {
      m(true)
    } else {
      m(false)
    }
  }, [r, e.column])
  return n ? React.createElement("div", {
    onClick: function () {
      var t = e.api.getColumnDefs()
      if (t.length <= 2) {
        o($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          message: $_710_index$a$formatMessage({
            id: "addColumnFirst"
          }, {
            num: e.limitRow
          })
        }))
      } else {
        if (e.limitRow) {
          if (e.api.getLastDisplayedRow() + 1 >= e.limitRow) {
            return void o($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
              message: $_710_index$a$formatMessage({
                id: "rowLengthLimit"
              }, {
                num: e.limitRow
              })
            }))
          }
        }
        if (r.editingHeader) {
          o($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
        }
        if (r.selectedContent.columnId || "" !== r.selectedContent.rowId) {
          o($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
        }
        var n = {}
        t.forEach(function (e) {
          var /* [auto-meaningful-name] */e$colId = e.colId
          if (e$colId && "indexColumn" !== e$colId && "addColumn" !== e$colId) {
            n[e$colId] = ""
          }
        })
        var a = e.api.getLastDisplayedRow() + 1
        n.rowId = ng.a("ROW")
        var s = {
          add: [n]
        }
        e.context.scrollToRowIndex = a
        e.api.applyTransaction(s)
      }
    }
  }, React.createElement($_13_index.j, {
    type: "icon-add"
  })) : React.createElement("div", {
    className: N(c && _$_.copiedColumnPinnedRow, p && _$_.selectedColumnPinnedRow)
  })
})
var xI = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$column
  var /* [auto-meaningful-name] */_e$column5
  var r = $_16_index.e(function (e) {
    return e.common.gridStatus
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = $_16_index.d()
  var a = _React.useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = _React.useState(false)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  var g = _React.useState(false)
  var v = $_10_index.a(g, 2)
  var b = v[0]
  var y = v[1]
  var E = _React.useState(false)
  var O = $_10_index.a(E, 2)
  var w = O[0]
  var C = O[1]
  var T = _React.useState(false)
  var A = $_10_index.a(T, 2)
  var j = A[0]
  var R = A[1]
  var k = _React.useState(false)
  var x = $_10_index.a(k, 2)
  var D = x[0]
  var M = x[1]
  _React.useEffect(function () {
    if (D) {
      document.addEventListener("mousedown", function e() {
        M(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [D])
  _React.useEffect(function () {
    var /* [auto-meaningful-name] */_e$column6
    var /* [auto-meaningful-name] */_e$column7
    if (!e.node.isRowPinned()) {
      var /* [auto-meaningful-name] */_e$column8
      l(false)
      y(false)
      m(false)
      if (r.copiedContent.rowId === e.node.id) {
        if (r.copiedContent.columnId === (null === (_e$column8 = e.column) || undefined === _e$column8 ? undefined : _e$column8.getId())) {
          l(true)
        } else {
          if ("" === r.copiedContent.columnId) {
            y(true)
          }
        }
      } else if (!(r.copiedContent.rowId || r.copiedContent.columnId !== (null === (_e$column6 = e.column) || undefined === _e$column6 ? undefined : _e$column6.getId()))) {
        m(true)
      }
      R(false)
      C(false)
      if (r.selectedContent.rowId === e.node.id) {
        if (!r.selectedContent.columnId) {
          R(true)
        }
      } else {
        if (!(r.selectedContent.rowId || r.selectedContent.columnId !== (null === (_e$column7 = e.column) || undefined === _e$column7 ? undefined : _e$column7.getId()))) {
          C(true)
        }
      }
    }
  }, [r, e.column, e.rowIndex, e.node])
  return React.createElement($_1213.a, {
    placement: "rightTop",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        M(false)
      }
    },
    visible: D,
    content: React.createElement("div", {
      className: _$_.menuWrapper,
      style: {
        marginTop: 13
      }
    }, React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */_e$column9
        var n = null === (_e$column9 = e.column) || undefined === _e$column9 ? undefined : _e$column9.getColId()
        var /* [auto-meaningful-name] */e$node$id = e.node.id
        if (e$node$id && n) {
          EI(e.api, e.rowIndex, n)
          i($$_$$_$$_$$_src_shared_events_messagesWrapper.ni(e$node$id, n))
          i($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
          e.api.clearFocusedCell()
          i($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
            message: $_710_index$a$formatMessage({
              id: "copySuccess"
            })
          }))
        }
      },
      className: _$_.menuItem
    }, $_710_index$a$formatMessage({
      id: "copyGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        navigator.clipboard.readText().then(function (t) {
          var /* [auto-meaningful-name] */_e$column0
          var r = null === (_e$column0 = e.column) || undefined === _e$column0 ? undefined : _e$column0.getId()
          if (r) {
            if (CI(e.api, t, r, e.rowIndex)) {
              i($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
          }
        })
      },
      className: _$_.menuItem
    }, $_710_index$a$formatMessage({
      id: "pasteGridData"
    })), React.createElement("div", {
      onMouseDown: function () {
        var /* [auto-meaningful-name] */_e$column1
        var n = e.api.getModel().getRow(e.rowIndex)
        var r = null === (_e$column1 = e.column) || undefined === _e$column1 ? undefined : _e$column1.getId()
        if (n && r) {
          n.setDataValue(r, "")
        }
      },
      className: N(_$_.menuItem, _$_.deleteOption)
    }, $_710_index$a$formatMessage({
      id: "deleteGridData"
    })))
  }, React.createElement("div", {
    className: N("coco-table-data-cell", _$_.gridCell, c && _$_.copiedCell, p && _$_.copiedColumnCell, p && 0 === e.rowIndex && _$_.copiedColumnFirstRow, b && _$_.copiedRowCell, b && "right" === (null === (e$column = e.column) || undefined === e$column ? undefined : e$column.getPinned()) && _$_.copiedRowPinnedColumn, w && _$_.selectedColumnCell, w && 0 === e.rowIndex && _$_.selectedColumnFirstRow, j && _$_.selectedRowCell, j && "right" === (null === (_e$column5 = e.column) || undefined === _e$column5 ? undefined : _e$column5.getPinned()) && _$_.selectedRowPinnedColumn, function () {
      var /* [auto-meaningful-name] */_e$column10
      var /* [auto-meaningful-name] */r$errorCells = r.errorCells
      var /* [auto-meaningful-name] */e$node$id = e.node.id
      var i = null === (_e$column10 = e.column) || undefined === _e$column10 ? undefined : _e$column10.getId()
      return !!(i && r$errorCells[i] && e$node$id) && r$errorCells[i].includes(e$node$id)
    }() && _$_.errorColumn),
    onContextMenu: function (t) {
      var /* [auto-meaningful-name] */_e$column11
      t.preventDefault()
      var /* [auto-meaningful-name] */e$node$id = e.node.id
      var o = null === (_e$column11 = e.column) || undefined === _e$column11 ? undefined : _e$column11.getId()
      if (e$node$id && o) {
        i($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
        i($$_$$_$$_$$_src_shared_events_messagesWrapper.ri(e$node$id, o))
        M(true)
      }
    }
  }, e.value))
})
var DI = _React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.project.focusedWorkspaceArea
  })
  var n = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = _React.useRef(null)
  var i = _React.useRef({
    rowId: "",
    columnId: ""
  })
  var a = _React.useState()
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  _React.useEffect(function () {
    if (e.visible && c) {
      c.setRowData(Lodash.cloneDeep(e.data))
    }
  }, [e.data, c, e.visible])
  _React.useEffect(function () {
    if (c && o.current) {
      if (e.data.length < e.resizeColumnNumber) {
        o.current.style.removeProperty("width")
        o.current.style.removeProperty("height")
        c.setDomLayout("autoHeight")
      } else {
        o.current.style.width = "100%"
        o.current.style.height = "100%"
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
    domLayout: "autoHeight",
    getRowHeight: function (e) {
      return e.node.rowPinned ? 31 : 32
    },
    suppressColumnVirtualisation: true,
    pinnedBottomRowData: [{}],
    enableCellChangeFlash: true,
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
        if ("indexColumn" !== o) {
          var /* [auto-meaningful-name] */r$rowIndex = r.rowIndex
          var a = null === (t = e.api.getModel().getRow(r$rowIndex)) || undefined === t ? undefined : t.id
          if (a) {
            n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri(a, o))
          }
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.oi(""))
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
            a.innerText = $_710_index$a$formatMessage({
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
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.qi(c))
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
        return n > e.resizeColumnNumber && !o$current$style$width ? (o.current.style.width = "100%", o.current.style.height = "100%", t.api.setDomLayout("normal"), void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))) : n <= 14 && o$current$style$width ? (o.current.style.removeProperty("width"), o.current.style.removeProperty("height"), t.api.setDomLayout("autoHeight"), void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))) : void (-1 !== d.context.scrollToRowIndex && t.api.ensureIndexVisible(d.context.scrollToRowIndex))
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
        return React.createElement(NI, Object.assign({}, t, {
          useType: e.columnUseType,
          allowEditHeader: e.allowEditHeader,
          editableCallback: u,
          setSelectedContent: function (e) {
            i.current = e
          }
        }))
      },
      indexCellRenderer: function (e) {
        return React.createElement(RI, Object.assign({}, e, {
          setSelectedContent: function (e) {
            i.current = e
          }
        }))
      },
      pinnedRow: function (e) {
        return React.createElement(kI, Object.assign({}, e, {
          limitRow: 500
        }))
      },
      baseCellRenderer: function (e) {
        return React.createElement(xI, e)
      }
    }
  }
  var p = {
    values: ["true", "false"]
  }
  return React.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, React.createElement($_188.a, {
    useCapture: true
  }, React.createElement($_188.b, {
    keys: {
      osx: "command+c",
      windows: "control+c"
    },
    callback: function () {
      if (c) {
        n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
        var e = c.getFocusedCell()
        if (e) {
          var t
          var o = null === (t = c.getModel().getRow(e.rowIndex)) || undefined === t ? undefined : t.id
          var a = e.column.getColId()
          if (o && "indexColumn" !== a) {
            EI(c, e.rowIndex, a)
            n($$_$$_$$_$$_src_shared_events_messagesWrapper.ni(o, a))
            c.clearFocusedCell()
            return void n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
              message: $_710_index$a$formatMessage({
                id: "copySuccess"
              })
            }))
          }
        }
        if (!i.current.rowId && i.current.columnId) {
          OI(c, i.current.columnId)
          n($$_$$_$$_$$_src_shared_events_messagesWrapper.ni("", i.current.columnId))
          return void n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
            message: $_710_index$a$formatMessage({
              id: "copySuccess"
            })
          }))
        }
        if (i.current.rowId && !i.current.columnId) {
          var s
          var l = null === (s = c.getRowNode(i.current.rowId)) || undefined === s ? undefined : s.rowIndex
          if (undefined !== l && null !== l) {
            wI(c, l)
            n($$_$$_$$_$$_src_shared_events_messagesWrapper.ni(i.current.rowId, ""))
            n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
              message: $_710_index$a$formatMessage({
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
            return void navigator.clipboard.readText().then(function (e) {
              if (CI(c, e, t, e$rowIndex)) {
                n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                  message: $_710_index$a$formatMessage({
                    id: "pasteColumnOutOfRange"
                  })
                }))
              }
            })
          }
        }
        if (i.current.rowId || !i.current.columnId) {
          if (i.current.rowId && !i.current.columnId) {
            navigator.clipboard.readText().then(function (e) {
              var t
              var o = TI(c)
              var a = null === (t = c.getRowNode(i.current.rowId)) || undefined === t ? undefined : t.rowIndex
              if (undefined !== a && null !== a) {
                if (CI(c, e, o, a)) {
                  n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                    message: $_710_index$a$formatMessage({
                      id: "pasteColumnOutOfRange"
                    })
                  }))
                }
              }
            })
          }
        } else {
          navigator.clipboard.readText().then(function (e) {
            var /* [auto-meaningful-name] */i$current$columnId = i.current.columnId
            if (CI(c, e, i$current$columnId, 0)) {
              n($$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
                message: $_710_index$a$formatMessage({
                  id: "pasteColumnOutOfRange"
                })
              }))
            }
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
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.ri("", ""))
      n($$_$$_$$_$$_src_shared_events_messagesWrapper.ni("", ""))
    },
    disabled: "grid" !== t
  })), React.createElement("div", {
    ref: o,
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
    valueGetter: function (e) {
      var /* [auto-meaningful-name] */e$node = e.node
      return e$node && null !== e$node.rowIndex ? e$node.rowIndex + 1 : ""
    },
    cellRenderer: "indexCellRenderer",
    pinnedRowCellRenderer: "pinnedRow"
  }), Object.entries(e.header).map(function (e) {
    var t = $_10_index.a(e, 2)
    var n = t[0]
    var r = t[1]
    return "boolean" === r.type ? React.createElement($_417_index.AgGridColumn, {
      colId: n,
      headerName: r.field,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: p,
      field: n,
      key: n,
      type: r.type,
      editable: u,
      resizable: true,
      minWidth: 150,
      flex: 1,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    }) : React.createElement($_417_index.AgGridColumn, {
      colId: n,
      headerName: r.field,
      field: n,
      key: n,
      type: r.type,
      editable: u,
      resizable: true,
      minWidth: 150,
      flex: 1,
      cellRenderer: "baseCellRenderer",
      pinnedRowCellRenderer: "pinnedRow"
    })
  }), React.createElement($_417_index.AgGridColumn, {
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
  }))))
}, function (e, t) {
  return t.visible === e.visible && t.id === e.id && t.data === e.data && t.header === e.header
})
export { DI }
