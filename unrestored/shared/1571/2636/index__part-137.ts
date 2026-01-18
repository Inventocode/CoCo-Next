/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-137
 */

"use strict"

import { py } from "./index__part-102"
var Mw
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_26_index from "./26/index"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_368 from "./368"
import /* [auto-meaningful-name] */$_3681 from "./368"
function aC() {
  var e = $_16_index.d()
  var t = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var n = Et.Bb(t || "")
  var r = (null === n || undefined === n ? undefined : n.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.j ? "cloudDictList" : "cloudTableList"
  var o = $_16_index.e(function (e) {
    return e.cloudSpace[r]
  })
  var i = React1.useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = undefined
  if ((null === n || undefined === n ? undefined : n.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.j) {
    l = n.attributes.cloudDictId
  }
  if ((null === n || undefined === n ? undefined : n.type) === $$_$$_$$_$$_src_editor_widget_builtIn_types.k) {
    l = n.attributes.cloudTableId
  }
  if (l === Et.i) {
    l = undefined
  }
  if (!n) {
    return {
      dataSourceId: l,
      cloudDataSources: o,
      bindDataSourceId: function () {}
    }
  }
  var u = function () {
    var t = O.a(RegeneratorRuntime.mark(function t(n) {
      var r
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(e, $$_$$_$$_$$_src_editor_redux_common_actions.Pf(n))
            case 2:
              if (!(null === (r = $_26_index.g.getToolbox()) || undefined === r)) {
                r.refresh_selection()
              }
            case 3:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  var d = function () {
    var t = O.a(RegeneratorRuntime.mark(function t(n) {
      var r
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return $$_$$_$$_$$_src_editor_redux_common_actions.Nf(e, $$_$$_$$_$$_src_editor_redux_common_actions.Rf(n, false))
            case 2:
              if (!(null === (r = $_26_index.g.getToolbox()) || undefined === r)) {
                r.refresh_selection()
              }
            case 3:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function (e) {
      return t.apply(this, arguments)
    }
  }()
  return {
    dataSourceId: l,
    cloudDataSources: o,
    bindDataSourceId: function (t) {
      var r = ""
      if (n.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.j) {
        r = "cloudDictId"
        if (t) {
          u(t)
        }
        $_26_index.r(n.id)
      }
      if (n.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.k) {
        r = "cloudTableId"
        $_26_index.s(n.id)
        if (t) {
          d(t)
        }
      }
      e($$_$$_$$_$$_src_editor_redux_common_actions.Lg(n.id, r, t, true, true, true))
    },
    addItemHover: s,
    onMouseOver: function () {
      c(true)
    },
    onMouseOut: function () {
      c(false)
    }
  }
}
function sC() {
  return $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
}
function cC() {
  var e = function (e) {
    window.open("".concat(te.A(), "/dashboard/dict/").concat(e), "_blank")
  }
  var t = function (e) {
    window.open("".concat(te.A(), "/dashboard/table/").concat(e), "_blank")
  }
  return {
    handleVisitCloudSpace: function (e) {
      if (e) {
        window.open("".concat(te.A(), "/dashboard/?createType=").concat(e), "_blank")
      } else {
        window.open("".concat(te.A(), "/"), "_blank")
      }
    },
    handleVisitDataSource: function () {
      var n = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "dict"
      var r = arguments.length > 1 ? arguments[1] : undefined
      if (!r) {
        return window.open("".concat(te.A()), "_blank")
      }
      if ("dict" === n) {
        e(r)
      }
      if ("table" === n) {
        t(r)
      }
    }
  }
}
!function (e) {
  e.Dict = "Dict"
  e.Table = "Table"
}(Mw || (Mw = {}))
var /* [auto-meaningful-name] */py$Option = py.Option
var uC = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = $_16_index.d()
  var o = Et.Bb(e$widgetId)
  var i = React1.useRef(null)
  var a = aC()
  var /* [auto-meaningful-name] */a$dataSourceId = a.dataSourceId
  var /* [auto-meaningful-name] */a$cloudDataSources = a.cloudDataSources
  var /* [auto-meaningful-name] */a$bindDataSourceId = a.bindDataSourceId
  var /* [auto-meaningful-name] */a$addItemHover = a.addItemHover
  var /* [auto-meaningful-name] */a$onMouseOut = a.onMouseOut
  var /* [auto-meaningful-name] */a$onMouseOver = a.onMouseOver
  var m = sC()
  var g = cC()
  var /* [auto-meaningful-name] */g$handleVisitCloudSpace = g.handleVisitCloudSpace
  var /* [auto-meaningful-name] */g$handleVisitDataSource = g.handleVisitDataSource
  var y = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var E = React1.useState(false)
  var O = $_10_index.a(E, 2)
  var w = O[0]
  var C = O[1]
  if (!o) {
    return React.createElement(React.Fragment, null)
  }
  var T = function () {
    C(false)
    r($$_$$_$$_$$_src_editor_redux_common_actions.Ch())
  }
  var j = React.createElement(py, {
    disabled: !m,
    optionLabelProp: "label",
    open: w,
    listItemHeight: 40,
    listHeight: 200,
    allowClear: true,
    onDropdownVisibleChange: function (e) {
      return C(e)
    },
    ref: i,
    dropdownRender: function (e) {
      var t = React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseOut: a$onMouseOut,
        onMouseOver: a$onMouseOver,
        className: N($_3681.addDict),
        onClick: function () {
          var /* [auto-meaningful-name] */i$current
          if (!(null === i || undefined === i || null === (i$current = i.current) || undefined === i$current)) {
            i$current.blur()
          }
          g$handleVisitCloudSpace(Mw.Dict)
        }
      }, React.createElement($_13_index.j, {
        type: "icon-add"
      }), React.createElement("div", {
        className: $_3681.newText
      }, $_710_index$a$formatMessage({
        id: "cloudSpace.newDict"
      })), React.createElement("div", {
        className: $_3681.suffixIcon
      }, React.createElement($_13_index.j, {
        type: "icon-return-arrow"
      }))), a$cloudDataSources.length > 0 ? React.createElement("div", {
        className: N($_3681.line, a$addItemHover ? $_3681.hideLine : "")
      }) : "", a$cloudDataSources.length > 0 ? React.createElement("div", null, e) : "")
      var r = React.createElement($_13_index.d, {
        type: "primary",
        onClick: T
      }, $_710_index$a$formatMessage({
        id: "cloudSpace.needLogin"
      }))
      return React.createElement("div", {
        className: N("cloudDictDropdown", y ? "" : $_3681.unLoginDropdown, a$addItemHover ? "addBtnActive" : "")
      }, y ? t : r)
    },
    value: a$dataSourceId,
    defaultValue: undefined,
    onChange: function (e) {
      C(false)
      a$bindDataSourceId(e || Et.i)
    },
    dropdownClassName: $_3681.cloudSpaceAntSelectDropdown,
    placeholder: $_710_index$a$formatMessage({
      id: "cloudSpace.ChooseDataSource"
    })
  }, a$cloudDataSources.map(function (e) {
    return React.createElement(py$Option, {
      label: e.name,
      value: e.id,
      key: e.id
    }, React.createElement("div", {
      className: N($_3681.optionRenderBox)
    }, React.createElement("div", {
      className: N($_3681.prefixIcon, "spaceCloud-select-icon")
    }, React.createElement($_13_index.j, {
      type: "icon-widget-cloud-dict"
    })), React.createElement("div", {
      className: N($_3681.dictName, a$dataSourceId === e.id ? $_3681.optionSelected : "")
    }, React.createElement("div", {
      className: $_3681.nameText
    }, e.name)), React.createElement("div", {
      className: $_3681.suffixIcon,
      onClick: function (t) {
        g$handleVisitDataSource("dict", e.id)
      }
    }, React.createElement($_13_index.j, {
      type: "icon-return-arrow"
    }))))
  }))
  return React.createElement("div", {
    className: N($_3681.formItemWrapper, $_3681.dictFields)
  }, React.createElement("div", {
    className: $_3681.title
  }, React.createElement("div", null, $_710_index$a$formatMessage({
    id: "cloudSpace.DataSource"
  }))), React.createElement("div", {
    className: $_3681.bindSource
  }, m ? j : React.createElement($_748_index.a, {
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "cloudSpace.onlyAuthorCanEdit"
    })
  }, j)))
})
export { Mw }
export { aC }
export { sC }
export { cC }
export { uC }
