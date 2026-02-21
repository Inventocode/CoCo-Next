/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-104
 */

"use strict"

import * as Tn from "./68"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_1055 from "./1055"
import /* [auto-meaningful-name] */$_10551 from "./1055"
var yy = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$iconId = e.iconId
  var /* [auto-meaningful-name] */e$color = e.color
  var o = useDispatch()
  var i = useState()
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  var l = useSelector(function (e) {
    return e.resource.resourceLibraryUpdateAt
  })
  useEffect(function () {
    var e = Et.fb(e$iconId)
    c(e)
  }, [e$iconId, l])
  return React.createElement(React.Fragment, null, React.createElement("div", {
    onClick: function () {
      o($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.IconLibrary, function (e) {
        if (e && e.length > 0) {
          e$onChange("iconId", e[0].id)
        }
      }))
    },
    className: $_10551.buttonTypeIconBox
  }, React.createElement("div", {
    className: $_10551.svgIcon,
    style: {
      color: e$color
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.z, {
    icon: s
  })), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-dropdown-down",
    className: $_10551.iconDropdown
  })))
})
export { yy }
