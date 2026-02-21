/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-105
 */

"use strict"

import { Xr } from "../../../../src/editor/ui/preview-area/screen-list/index"
import { $v } from "./index__part-91"
import { nb } from "./index__part-92"
import qv from "./88"
import * as /* [auto-meaningful-name] */$_238 from "./238"
import * as Tn from "./68"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_747 from "./747"
import /* [auto-meaningful-name] */$_7471 from "./747"
var wy = memo(function () {
  var e = useDispatch()
  var t = $_238.b()
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var r = $_238.d()
  var o = useSelector(function (e) {
    return e.project.screens
  })
  var i = useState(false)
  var a = $_10_index.a(i, 2)
  var s = a[0]
  var c = a[1]
  if (!r) {
    return null
  }
  var /* [auto-meaningful-name] */r$title = r.title
  var /* [auto-meaningful-name] */r$backgroundColor = r.backgroundColor
  var /* [auto-meaningful-name] */r$backgroundImage = r.backgroundImage
  var /* [auto-meaningful-name] */r$backgroundImageResizeMode = r.backgroundImageResizeMode
  var m = Et.hb(r$backgroundImage || "")
  var g = (null === m || undefined === m ? undefined : m.source) || (null === m || undefined === m ? undefined : m.cdnUrl)
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.h, {
    "data-updated-at": t
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames(qv.formItemWrapper, qv.formWidgetTitle, "changeTitle"),
    align: "vertical",
    label: "名称"
  }, React.createElement(Xr, {
    value: r$title,
    renameInputValue: function (t) {
      var n = Et.Ob(r.id, t, o)
      e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "title", n))
      return n
    },
    onChange: function (t) {
      e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "title", t))
    },
    checkValueIsRepeat: function (e) {
      return Et.r(r.id, e)
    }
  })), React.createElement("div", null, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames(qv.formItemWrapper, "changeBackgroundColor"),
    label: $_710$a$formatMessage({
      id: "color"
    })
  }, React.createElement($_1213.a, {
    placement: "rightBottom",
    trigger: "click",
    onVisibleChange: function (e) {
      c(e)
    },
    content: s && React.createElement($$_$$_$$_$$_src_shared_ui_components_index.q, {
      value: r$backgroundColor,
      onChange: function (t) {
        e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "backgroundColor", t))
      }
    })
  }, React.createElement("div", {
    className: qv.colorBlock,
    style: {
      backgroundColor: $$_$$_$$_$$_src_shared_tools_index.i(r$backgroundColor) ? "#ffffff" : r$backgroundColor
    }
  }, $$_$$_$$_$$_src_shared_tools_index.i(r$backgroundColor) && React.createElement("div", {
    className: qv.slash
  })))), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames(qv.formItemWrapper, $_7471.changeImageWrapper),
    align: "vertical",
    label: $_710$a$formatMessage({
      id: "backgroundImage"
    })
  }, React.createElement(nb, {
    onUploadFileChange: function (t) {
      if (t) {
        e($$_$$_$$_$$_src_editor_redux_common_actions.Zf(t, function (t) {
          var n = t[0]
          e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "backgroundImage", n.id))
        }))
      }
    },
    onResourceLibraryClick: function () {
      e($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (t) {
        var n = t[0]
        e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "backgroundImage", n.id))
        e($$_$$_$$_$$_src_editor_redux_common_actions.sh())
      }))
    },
    onDelete: function () {
      e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "backgroundImage", ""))
    },
    fileId: r$backgroundImage
  })), g && React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames(qv.formItemWrapper),
    label: $_710$a$formatMessage({
      id: "adapt"
    }),
    align: "vertical"
  }, React.createElement($v, {
    mode: r$backgroundImageResizeMode,
    onModeChange: function (t) {
      var n = t
      e($$_$$_$$_$$_src_editor_redux_common_actions.Jg(r.id, "backgroundImageResizeMode", n))
    }
  }))))
})
export { wy }
