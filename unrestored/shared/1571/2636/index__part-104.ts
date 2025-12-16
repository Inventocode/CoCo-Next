/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-104
 */

"use strict"

import * as Tn from "./68"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_1055 from "./1055"
import /* [auto-meaningful-name] */_$_ from "./1055"
var yy = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$iconId = e.iconId
  var /* [auto-meaningful-name] */e$color = e.color
  var o = $_16_index.d()
  var i = _React.useState()
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = $_16_index.e(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  _React.useEffect(function () {
    var e = Et.fb(e$iconId)
    c(e)
  }, [e$iconId, l])
  return React.createElement(React.Fragment, null, React.createElement("div", {
    onClick: function () {
      o($$_$$_$$_$$_src_shared_events_messagesWrapper.wj(Tn.c.IconLibrary, function (e) {
        if (e && e.length > 0) {
          e$onChange("iconId", e[0].id)
        }
      }))
    },
    className: _$_.buttonTypeIconBox
  }, React.createElement("div", {
    className: _$_.svgIcon,
    style: {
      color: e$color
    }
  }, React.createElement($_13_index.z, {
    icon: s
  })), React.createElement($_13_index.j, {
    type: "icon-dropdown-down",
    className: _$_.iconDropdown
  })))
})
export { yy }
