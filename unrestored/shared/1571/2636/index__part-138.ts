/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-138
 */

"use strict"

import { py } from "./index__part-102"
import { Mw, aC, sC, cC } from "./index__part-137"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_357 from "./357"
import /* [auto-meaningful-name] */_$_ from "./357"
var /* [auto-meaningful-name] */py$Option = py.Option
var hC = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = Et.Bb(e$widgetId)
  var o = _React.useRef(null)
  var i = $_16_index.d()
  var a = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var s = aC()
  var /* [auto-meaningful-name] */s$dataSourceId = s.dataSourceId
  var /* [auto-meaningful-name] */s$cloudDataSources = s.cloudDataSources
  var /* [auto-meaningful-name] */s$bindDataSourceId = s.bindDataSourceId
  var /* [auto-meaningful-name] */s$addItemHover = s.addItemHover
  var /* [auto-meaningful-name] */s$onMouseOut = s.onMouseOut
  var /* [auto-meaningful-name] */s$onMouseOver = s.onMouseOver
  var g = sC()
  var v = cC()
  var /* [auto-meaningful-name] */v$handleVisitCloudSpace = v.handleVisitCloudSpace
  var /* [auto-meaningful-name] */v$handleVisitDataSource = v.handleVisitDataSource
  var E = _React.useState(false)
  var O = $_10_index.a(E, 2)
  var w = O[0]
  var C = O[1]
  if (!r) {
    return React.createElement(React.Fragment, null)
  }
  var T = function () {
    C(false)
    i($$_$$_$$_$$_src_editor_redux_common_actions.Ch())
  }
  var j = React.createElement(py, {
    open: w,
    listItemHeight: 40,
    listHeight: 200,
    allowClear: true,
    onDropdownVisibleChange: function (e) {
      return C(e)
    },
    disabled: !g,
    optionLabelProp: "label",
    ref: o,
    dropdownRender: function (e) {
      var t = React.createElement(React.Fragment, null, React.createElement("div", {
        onMouseOut: s$onMouseOut,
        onMouseOver: s$onMouseOver,
        className: N(_$_.optionItem, _$_.addTable),
        onClick: function () {
          var /* [auto-meaningful-name] */o$current
          if (!(null === o || undefined === o || null === (o$current = o.current) || undefined === o$current)) {
            o$current.blur()
          }
          v$handleVisitCloudSpace(Mw.Table)
        }
      }, React.createElement($_13_index.j, {
        type: "icon-add"
      }), React.createElement("div", {
        className: _$_.newText
      }, $_710_index$a$formatMessage({
        id: "cloudSpace.newTable"
      })), React.createElement("div", {
        className: _$_.suffixIcon
      }, React.createElement($_13_index.j, {
        type: "icon-return-arrow"
      }))), s$cloudDataSources.length > 0 ? React.createElement("div", {
        className: N(_$_.line, s$addItemHover ? _$_.hideLine : "")
      }) : "", s$cloudDataSources.length > 0 ? React.createElement("div", null, e) : "")
      var r = React.createElement($_13_index.d, {
        type: "primary",
        onClick: T
      }, $_710_index$a$formatMessage({
        id: "cloudSpace.needLogin"
      }))
      return React.createElement("div", {
        className: N("cloudTableDropdown", a ? "" : _$_.unLoginDropdown, s$addItemHover ? "addBtnActive" : "")
      }, a ? t : r)
    },
    value: s$dataSourceId,
    defaultValue: undefined,
    onChange: function (e) {
      C(false)
      s$bindDataSourceId(e || Et.i)
    },
    dropdownClassName: _$_.cloudSpaceAntSelectDropdown,
    placeholder: $_710_index$a$formatMessage({
      id: "cloudSpace.ChooseDataSource"
    })
  }, s$cloudDataSources.map(function (e) {
    return React.createElement(py$Option, {
      label: e.name,
      value: e.id,
      key: e.id
    }, React.createElement("div", {
      className: N(_$_.optionRenderBox)
    }, React.createElement("div", {
      className: N(_$_.prefixIcon, "spaceCloud-select-icon")
    }, React.createElement($_13_index.j, {
      type: "icon-widget-cloud-table"
    })), React.createElement("div", {
      className: N(_$_.tableName, s$dataSourceId === e.id ? _$_.optionSelected : "")
    }, React.createElement("div", {
      className: _$_.nameText
    }, e.name)), React.createElement("div", {
      className: _$_.suffixIcon,
      onClick: function (t) {
        return v$handleVisitDataSource("table", e.id)
      }
    }, React.createElement($_13_index.j, {
      type: "icon-return-arrow"
    }))))
  }))
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, _$_.tableFields)
  }, React.createElement("div", {
    className: _$_.title
  }, React.createElement("div", null, $_710_index$a$formatMessage({
    id: "cloudSpace.DataSource"
  }))), React.createElement("div", {
    className: _$_.bindSource
  }, g ? j : React.createElement($_748_index.a, {
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "cloudSpace.onlyAuthorCanEdit"
    })
  }, j)))
})
export { hC }
