/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-172
 */

"use strict"

import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_623 from "./623"
import /* [auto-meaningful-name] */_$_ from "./623"
import * as /* [auto-meaningful-name] */$_1527 from "./1527"
import /* [auto-meaningful-name] */_$_2 from "./1527"
var hI = _React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.common.importFailToastInfo
  })
  var /* [auto-meaningful-name] */t$visible = t.visible
  var /* [auto-meaningful-name] */t$importFailResults = t.importFailResults
  var /* [auto-meaningful-name] */t$fileType = t.fileType
  var i = $_16_index.d()
  var a = _React.useState([])
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var d = _React.useState(false)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var v = _React.useState("importImageFailTitle")
  var b = $_10_index.a(v, 2)
  var y = b[0]
  var w = b[1]
  function C() {
    i($$_$$_$$_$$_src_editor_redux_common_actions.rh())
  }
  _React.useEffect(function () {
    function e() {
      return (e = O.a(RegeneratorRuntime.mark(function e() {
        var t
        var o
        var i
        var a
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                if (t = [], !t$visible) {
                  e.next = 14
                  break
                }
                o = 0
              case 3:
                if (!(o < t$importFailResults.length)) {
                  e.next = 14
                  break
                }
                i = t$importFailResults[o]
                a = te.ob(i.file)
                e.next = 8
                return te.c(i.file)
              case 8:
                if (!e.sent) {
                  a = _$_2
                }
                t.push({
                  url: a,
                  message: i.message,
                  name: i.file.name
                })
              case 11:
                o++
                e.next = 3
                break
              case 14:
                l(t)
              case 15:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))).apply(this, arguments)
    }
    g(false);
    (function () {
      e.apply(this, arguments)
    })()
  }, [t$importFailResults, t$visible])
  _React.useEffect(function () {
    if ("sound" === t$fileType) {
      w("importSoundFailTitle")
    } else {
      if ("image" === t$fileType) {
        w("importImageFailTitle")
      }
    }
  }, [t$fileType])
  return React.createElement("div", {
    className: N(_$_.importFailToast, k.a({}, _$_.extensional, m)),
    style: {
      display: t$visible ? "block" : "none"
    }
  }, React.createElement("div", {
    className: _$_.title
  }, React.createElement($_13_index.j, {
    type: "icon-warning"
  }), React.createElement("p", null, t$importFailResults.length, " ", $_710_index$a$formatMessage({
    id: y
  })), React.createElement("span", {
    className: "showImportFailDetail",
    onClick: function () {
      g(true)
    }
  }, $_710_index$a$formatMessage({
    id: "importFailDetail"
  })), React.createElement("span", {
    onClick: C
  }, $_710_index$a$formatMessage({
    id: "close"
  }))), m && React.createElement(React.Fragment, null, React.createElement("ul", {
    className: _$_.main
  }, c.map(function (e) {
    return React.createElement("li", {
      key: e.name
    }, React.createElement("div", {
      className: _$_.left
    }, React.createElement("div", {
      className: _$_.imgBox
    }, React.createElement("img", {
      src: e.url,
      alt: ""
    })), React.createElement("span", null, e.name)), React.createElement("div", {
      className: _$_.errorMessage
    }, e.message))
  })), React.createElement($_13_index.d, {
    type: "primary",
    className: _$_.confirmButton,
    onClick: C
  }, $_710_index$a$formatMessage({
    id: "know"
  }))))
})
export { hI }
