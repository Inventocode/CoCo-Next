/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-209
 */

"use strict"

import { we } from "./index__part-6"
import * as /* [auto-meaningful-name] */Module_557 from /* 557 */"./557"
import * as /* [auto-meaningful-name] */Module_1213 from /* 1213 */"./1213"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"./710"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_160 from /* 160 */"./160"
import /* [auto-meaningful-name] */Module_1601 from /* 160 */"./160"
var eP = React1.memo(function (e) {
  var t = React1.useState(false)
  var n = Module_10.a(t, 2)
  var r = n[0]
  var o = n[1]
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  React1.useEffect(function () {
    var e = function e() {
      o(false)
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
    if (r) {
      document.addEventListener("click", e, true)
      document.addEventListener("contextmenu", e, true)
    }
  }, [r])
  var a = function (t) {
    e.handleDelete(e.id, e.workIds)
    t.stopPropagation()
  }
  return React.createElement(React.Fragment, null, React.createElement(Module_1213.a, {
    placement: "bottomLeft",
    trigger: "hover",
    onVisibleChange: function (e) {
      if (e) {
        o(false)
      }
    },
    visible: r,
    overlayInnerStyle: {
      position: "absolute",
      left: 50,
      top: 20
    },
    content: function () {
      return React.createElement("div", {
        className: Module_1601.popoverWrapper,
        onContextMenu: function (e) {
          return e.preventDefault()
        }
      }, React.createElement("div", {
        className: Classnames(Module_1601.menuItem, Module_1601.delete),
        onMouseDown: a
      }, Module_710$a$formatMessage({
        id: "cloudDBManager.delete"
      })))
    }
  }), React.createElement("div", {
    className: Classnames(Module_1601.item, e.isSelected && Module_1601.selected),
    onClick: function (t) {
      e.handleClick(e.id)
      t.stopPropagation()
    },
    onContextMenu: function (e) {
      e.preventDefault()
      o(true)
    }
  }, React.createElement("span", null, e.name), e.canImport && React.createElement("span", {
    onClick: function (t) {
      e.handleImport(e.id)
      t.stopPropagation()
    },
    className: Module_1601.import
  }, Module_710$a$formatMessage({
    id: "cloudDBManager.import"
  })), !e.canImport && React.createElement("span", {
    className: Module_1601.hasImport
  }, Module_710$a$formatMessage({
    id: "cloudDBManager.hasImport"
  }))))
})
var nP = React1.memo(function (e) {
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var /* [auto-meaningful-name] */e$renderColumns = e.renderColumns
  var /* [auto-meaningful-name] */e$renderRows = e.renderRows
  var o = function (e) {
    var /* [auto-meaningful-name] */e$index = e.index
    var /* [auto-meaningful-name] */e$style = e.style
    var i = e$renderRows[e$index - 1]
    return 0 === e$index ? React.createElement("div", {
      className: Module_1601.listItem,
      key: e$index,
      style: e$style
    }, e$renderColumns.map(function (e, t) {
      return React.createElement("div", {
        className: Module_1601.column,
        key: "".concat(e.id)
      }, React.createElement("div", {
        className: Module_1601.columnArea
      }, function (e) {
        switch (e) {
          case "boolean":
            return React.createElement(Src_shared_ui_components_index.j, {
              type: "icon-grid-boolean",
              className: Module_1601.columnIcon
            })
          case "string":
            return React.createElement(Src_shared_ui_components_index.j, {
              type: "icon-grid-string",
              className: Module_1601.columnIcon
            })
          case "number":
            return React.createElement(Src_shared_ui_components_index.j, {
              type: "icon-grid-number",
              className: Module_1601.columnIcon
            })
          default:
            return
        }
      }(e.type), React.createElement("span", {
        className: Module_1601.text
      }, e.name)))
    })) : React.createElement("div", {
      className: Module_1601.listItem,
      key: e$index,
      style: e$style
    }, i.value.map(function (e, t) {
      return React.createElement("div", {
        className: Module_1601.row,
        key: "".concat(i.id, "-").concat(e, "-").concat(t)
      }, React.createElement("span", {
        title: String(e)
      }, e))
    }))
  }
  return React.createElement("div", {
    className: Module_1601.list
  }, React.createElement("div", {
    className: Module_1601.header
  }, React.createElement("div", {
    className: Module_1601.name
  }, e.name), React.createElement("div", {
    className: Module_1601.description
  }, React.createElement("span", {
    style: {
      marginRight: "8px"
    }
  }, Module_710$a$formatMessage({
    id: "cloudDBManager.usedCapacity"
  }), ":"), React.createElement("span", {
    style: {
      marginRight: "8px"
    }
  }, e.usedCapacity), "/", React.createElement("span", {
    style: {
      marginLeft: "8px"
    }
  }, 5e3)), !(!e.devMode && e.isNoData) && React.createElement("div", {
    className: Module_1601.edit,
    onClick: function () {
      e.handleEdit(e.id)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    className: Module_1601.icon,
    type: "icon-edit"
  }), Module_710$a$formatMessage({
    id: "cloudDBManager.editData"
  }))), e.isNoData ? function () {
    var n = e.devMode ? Module_710$a$formatMessage({
      id: "cloudDBManager.noDataDev"
    }) : Module_710$a$formatMessage({
      id: "cloudDBManager.noDataProd"
    })
    return React.createElement("div", {
      className: Module_1601.container
    }, React.createElement(we, {
      text: n
    }))
  }() : React.createElement("div", {
    className: Module_1601.itemWrapper
  }, e$renderColumns && e$renderColumns.length > 0 && React.createElement(Module_557.a, {
    width: e$renderColumns.length >= 7 ? 100 * e$renderColumns.length : "100%",
    height: 36 * (e$renderRows.length >= 11 ? 12 : e$renderRows.length + 1),
    itemCount: e$renderRows.length + 1,
    renderItem: o,
    itemSize: 36,
    stickyIndices: [0],
    className: "VirtualList"
  })))
})
export { eP }
export { nP }
