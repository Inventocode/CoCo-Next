/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-215
 */

"use strict"

var RP
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as An from "../../../../src/editor/widget/built-in/types"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
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
import * as /* [auto-meaningful-name] */$_1538 from "./1538"
import /* [auto-meaningful-name] */_$_ from "./1538"
import * as /* [auto-meaningful-name] */$_1539 from "./1539"
import /* [auto-meaningful-name] */_$_2 from "./1539"
import * as /* [auto-meaningful-name] */$_1540 from "./1540"
import /* [auto-meaningful-name] */_$_3 from "./1540"
import * as /* [auto-meaningful-name] */$_282 from "./282"
import /* [auto-meaningful-name] */_$_4 from "./282"
!function (e) {
  e.TABLE_DATA = "TABLE_DATA"
  e.CLOUD_SPACE_TABLE = "CLOUD_SPACE_TABLE"
}(RP || (RP = {}))
var zP = _React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.createTableDataDialog
  })
  var t = $_16_index.e(function (e) {
    return e.oTState.isAuthor
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = _React.useState(RP.TABLE_DATA)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = _React.useState(false)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  var m = $_16_index.d()
  var g = $_238.d()
  _React.useEffect(function () {
    if (e$visible) {
      p(false)
      c(RP.TABLE_DATA)
    }
  }, [e$visible])
  var v = function () {
    var e = O.a(RegeneratorRuntime.mark(function e() {
      var /* [auto-meaningful-name] */e$sent
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              if (s !== RP.CLOUD_SPACE_TABLE) {
                e.next = 3
                break
              }
              p(true)
              return e.abrupt("return")
            case 3:
              e.next = 5
              return $$_$$_$$_$$_src_shared_events_messagesWrapper.Nf(m, $$_$$_$$_$$_src_shared_events_messagesWrapper.hg((null === g || undefined === g ? undefined : g.id) || "", An.G, {
                x: 0,
                y: 0
              }))
            case 5:
              e$sent = e.sent
              if (e$onConfirm) {
                e$onConfirm(e$sent)
              }
              m($$_$$_$$_$$_src_shared_events_messagesWrapper.mh())
            case 8:
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
  var b = function (e) {
    if (t || e !== RP.CLOUD_SPACE_TABLE) {
      c(e)
    }
  }
  return React.createElement($_13_index.f, {
    visible: e$visible,
    withPortal: true,
    onClose: function () {
      m($$_$$_$$_$$_src_shared_events_messagesWrapper.mh())
    }
  }, d && React.createElement(React.Fragment, null, React.createElement("div", {
    className: _$_4.tableDataTitle
  }, React.createElement("div", {
    onClick: function () {
      p(false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-arrow-down",
    className: _$_4.backIcon
  })), $_710_index$a$formatMessage({
    id: "ListViewerWidget.createCloudTable"
  })), React.createElement("div", {
    className: _$_4.cloudSpaceTipsContent
  }, React.createElement("div", {
    className: _$_4.imageBox
  }, React.createElement("img", {
    className: _$_4.logoImage,
    src: _$_,
    alt: ""
  }), React.createElement("img", {
    className: _$_4.arrowImage,
    src: _$_2,
    alt: ""
  }), React.createElement("img", {
    className: _$_4.logoImage,
    src: _$_3,
    alt: ""
  })), React.createElement("div", null, $_710_index$a$formatMessage({
    id: "ListViewerWidget.toCloudSpaceDomainTips"
  }))), React.createElement("div", {
    className: N(_$_4.confirmBox, _$_4.cloudSpaceConfirm)
  }, React.createElement($_13_index.d, {
    onClick: function () {
      window.open("".concat(te.A(), "/dashboard/?createType=Table"), "_blank")
      m($$_$$_$$_$$_src_shared_events_messagesWrapper.mh())
    },
    type: "primary"
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.toCloudSpaceDomain"
  })))), !d && React.createElement(React.Fragment, null, React.createElement("p", {
    className: _$_4.tableDataTitle
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.createDataSource"
  })), React.createElement("div", {
    className: _$_4.tableDataList
  }, React.createElement("div", {
    onClick: b.bind(null, RP.TABLE_DATA),
    className: N(_$_4.tableDataItem, _$_4.yellow, RP.TABLE_DATA === s && _$_4.active)
  }, React.createElement($_13_index.j, {
    type: "icon-source-table-data",
    className: _$_4.icon
  }), React.createElement("div", {
    className: _$_4.name
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.tableData"
  })), React.createElement("div", {
    className: _$_4.desc
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.tableDataDesc"
  }))), React.createElement("div", {
    onClick: b.bind(null, RP.CLOUD_SPACE_TABLE),
    className: N(_$_4.tableDataItem, t ? _$_4.blue : _$_4.disable, RP.CLOUD_SPACE_TABLE === s && _$_4.active)
  }, React.createElement($_13_index.j, {
    type: "icon-source-cloud-data",
    className: _$_4.icon
  }), t ? React.createElement("div", {
    className: _$_4.name
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.cloudTable"
  })) : React.createElement($_748_index.a, {
    placement: "bottom",
    title: $_710_index$a$formatMessage({
      id: "ListViewerWidget.cloudTableOtTips"
    })
  }, React.createElement("div", {
    className: _$_4.name
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.cloudTable"
  }), React.createElement($_13_index.j, {
    type: "icon-locked"
  }))), React.createElement("div", {
    className: _$_4.desc
  }, $_710_index$a$formatMessage({
    id: "ListViewerWidget.cloudTableDesc"
  })))), React.createElement("div", {
    className: _$_4.confirmBox
  }, React.createElement($_13_index.d, {
    onClick: v,
    type: "primary"
  }, $_710_index$a$formatMessage({
    id: "confirm"
  })))))
})
export { zP }
