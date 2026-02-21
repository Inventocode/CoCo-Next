/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-219
 */

"use strict"

import { En } from "./header/wrapper"
import { Sv } from "./preview-area/widget-list/index"
import { iI, aI } from "../../../unrestored/shared/1571/2636/index__part-170"
import { lI } from "../../../unrestored/shared/1571/2636/index__part-171"
import { hI } from "../../../unrestored/shared/1571/2636/index__part-172"
import { bI } from "../../../unrestored/shared/1571/2636/index__part-173"
import { BI } from "../../../unrestored/shared/1571/2636/index__part-176"
import { aj } from "../../../unrestored/shared/1571/2636/index__part-179"
import { mj } from "../../../unrestored/shared/1571/2636/index__part-180"
import { rN } from "../../../unrestored/shared/1571/2636/index__part-190"
import { kM } from "../../../unrestored/shared/1571/2636/index__part-194"
import { LM } from "./functions/open-work"
import { dL, pL } from "../../../unrestored/shared/1571/2636/index__part-200"
import { bL } from "../../../unrestored/shared/1571/2636/index__part-201"
import { wL } from "../../../unrestored/shared/1571/2636/index__part-202"
import { AL } from "../../../unrestored/shared/1571/2636/index__part-203"
import { kL } from "../../../unrestored/shared/1571/2636/index__part-204"
import { ML } from "./dialogs/download-apk/index"
import { UL } from "./dialogs/release-info/index"
import { ZL } from "../../../unrestored/shared/1571/2636/index__part-208"
import { aP } from "../../../unrestored/shared/1571/2636/index__part-210"
import { _P } from "../../../unrestored/shared/1571/2636/index__part-211"
import { kP } from "../../../unrestored/shared/1571/2636/index__part-213"
import { LP } from "../../../unrestored/shared/1571/2636/index__part-214"
import { zP } from "../../../unrestored/shared/1571/2636/index__part-215"
import { qP } from "../../../unrestored/shared/1571/2636/index__part-216"
import { ZP, JP } from "../../../unrestored/shared/1571/2636/index__part-217"
import { iB } from "../../../unrestored/shared/1571/2636/index__part-218"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_937 from "../../../unrestored/shared/1571/2636/937"
import * as /* [auto-meaningful-name] */$$_$$_shared_tools_index from "../../shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_97_index from "../../../unrestored/shared/1571/2636/97/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */$$_redux_common_actions from "../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_shared_ui_components_index from "../../shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_shared_ui_language from "../../shared/ui/language"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_188 from "../../../unrestored/shared/1571/2636/188"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_2681_index from "../../../unrestored/shared/1571/2636/2681/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_816 from "../../../unrestored/shared/1571/2636/816"
import /* [auto-meaningful-name] */$$_$$_$$_unrestored_shared_1571_2636_8161 from "../../../unrestored/shared/1571/2636/816"
var cB = memo(function () {
  var e = useSelector(function (e) {
    return e.common.permissionDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$onConfirm = e.onConfirm
  var /* [auto-meaningful-name] */e$onDeny = e.onDeny
  var /* [auto-meaningful-name] */e$className = e.className
  var /* [auto-meaningful-name] */e$isDangerous = e.isDangerous
  var /* [auto-meaningful-name] */e$denyText = e.denyText
  var c = undefined === e$denyText ? "拒绝" : e$denyText
  var /* [auto-meaningful-name] */e$allowText = e.allowText
  var u = undefined === e$allowText ? "同意" : e$allowText
  var d = useDispatch()
  var /* [auto-meaningful-name] */Https__static$bcmcdn$com_coco_image_permission_camera$png = "https://static.bcmcdn.com/coco/image/permission_camera.png"
  var f = "需要开启相机权限才能进行拍照或摄像哦"
  switch (e$type) {
    case $$_$$_$$_unrestored_shared_1571_2636_18.e.camera:
      break
    case $$_$$_$$_unrestored_shared_1571_2636_18.e.microphone:
      Https__static$bcmcdn$com_coco_image_permission_camera$png = "https://static.bcmcdn.com/coco/image/permission_microphone.png"
      f = "需要开启麦克风权限能使用环境音量"
  }
  return React.createElement($$_$$_shared_ui_components_index.f, {
    visible: e$visible,
    showCloseButton: false,
    withPortal: true,
    maskClosable: false,
    className: Classnames($$_$$_$$_unrestored_shared_1571_2636_8161.dialog, e$className)
  }, React.createElement("img", {
    className: $$_$$_$$_unrestored_shared_1571_2636_8161.permissionImage,
    src: Https__static$bcmcdn$com_coco_image_permission_camera$png,
    alt: ""
  }), React.createElement("div", {
    className: $$_$$_$$_unrestored_shared_1571_2636_8161.content
  }, React.createElement("h3", null, "授权提示"), React.createElement("span", null, f), React.createElement("div", {
    className: Classnames($$_$$_$$_unrestored_shared_1571_2636_8161.dialogButtons)
  }, React.createElement($$_$$_shared_ui_components_index.d, {
    onClick: function () {
      if (e$onDeny) {
        e$onDeny()
      }
      d($$_redux_common_actions.Ej({
        type: e$type,
        visible: false
      }))
    },
    className: $$_$$_$$_unrestored_shared_1571_2636_8161.denyButton
  }, c), React.createElement($$_$$_shared_ui_components_index.d, {
    type: "primary",
    danger: e$isDangerous,
    onClick: function () {
      if (e$onConfirm) {
        e$onConfirm()
      }
      d($$_redux_common_actions.Ej({
        type: e$type,
        visible: false
      }))
    }
  }, u))))
})
function lB(e) {
  e.preventDefault()
}
function uB(e) {
  e.preventDefault()
}
function dB() {
  var e = useDispatch()
  var t = useSelector(function (e) {
    return e.project.id
  })
  var n = $$_$$_$$_unrestored_shared_1571_2636_97_index.a(t)
  var r = function () {
    var t = $$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t() {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return $$_redux_common_actions.Nf(e, $$_redux_common_actions.tg({
                isUpdate: n,
                isAutoSave: false,
                isNeedReport: true
              }))
            case 2:
              if (t.sent) {
                e($$_redux_common_actions.mj({
                  message: "作品保存成功",
                  type: "success"
                }))
              }
            case 4:
            case "end":
              return t.stop()
          }
        }
      }, t)
    }))
    return function () {
      return t.apply(this, arguments)
    }
  }()
  return React.createElement($$_$$_$$_unrestored_shared_1571_2636_188.a, null, React.createElement($$_$$_$$_unrestored_shared_1571_2636_188.b, {
    keys: {
      osx: "command+s",
      windows: "control+s"
    },
    callback: r
  }))
}
var pB = React.memo(function () {
  var e = useSelector(function (e) {
    return e.common.language
  })
  var t = useSelector(function (e) {
    return e.project.styleDialog.visible
  })
  var n = useSelector(function (e) {
    return e.uiConfig.header
  })
  var r = undefined !== $$_$$_shared_tools_index.N(window.location.href).archiveId
  return React.createElement($$_$$_$$_unrestored_shared_1571_2636_2681_index.b, {
    locale: e,
    messages: $$_$$_shared_ui_language.e[e] || $$_$$_shared_ui_language.e[$$_$$_shared_ui_language.b]
  }, React.createElement("div", {
    className: $$_$$_$$_unrestored_shared_1571_2636_937.layout,
    onDragOver: lB,
    onDrop: uB
  }, React.createElement(dB, null), React.createElement(aI, null), React.createElement(LM, null), React.createElement("header", {
    className: $$_$$_$$_unrestored_shared_1571_2636_937.header
  }, React.createElement(En, null, React.createElement(React.Fragment, null, React.createElement(dL, null), !r && n.projectName !== $$_$$_$$_unrestored_shared_1571_2636_18.j.Hide && React.createElement(pL, {
    readonly: n.projectName === $$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly
  })))), React.createElement("section", {
    className: $$_$$_$$_unrestored_shared_1571_2636_937.body
  }, React.createElement("aside", null, React.createElement(Sv, null)), React.createElement("main", {
    className: $$_$$_$$_unrestored_shared_1571_2636_937.main
  }, React.createElement(iI, null))), React.createElement(lI, null), React.createElement(hI, null), React.createElement(rN, null), React.createElement(bI, null), React.createElement(cB, null), React.createElement(mj, null), React.createElement(BI, null), React.createElement(aj, null), React.createElement(kL, null), React.createElement(wL, null), React.createElement(AL, null), React.createElement(ML, null), React.createElement(UL, null), React.createElement(aP, null), React.createElement(_P, null), React.createElement(ZL, null), React.createElement(LP, null), React.createElement(qP, null), t && React.createElement(kM, null), React.createElement(bL, null), React.createElement(kP, null), React.createElement(zP, null), React.createElement(ZP, null), React.createElement(JP, null), React.createElement(iB, null)))
})
var fB = function (e) {
  if (e && e instanceof Function && !$$_$$_shared_tools_index.h()) {
    import("../../../unrestored/shared/1571/2636/3327").then(function (t) {
      var /* [auto-meaningful-name] */t$getCLS = t.getCLS
      var /* [auto-meaningful-name] */t$getFID = t.getFID
      var /* [auto-meaningful-name] */t$getFCP = t.getFCP
      var /* [auto-meaningful-name] */t$getLCP = t.getLCP
      var /* [auto-meaningful-name] */t$getTTFB = t.getTTFB
      t$getCLS(e)
      t$getFID(e)
      t$getFCP(e)
      t$getLCP(e)
      t$getTTFB(e)
    })
  }
}
var hB = Boolean("localhost" === window.location.hostname || "dev-local.codemao.cn" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
function mB(e, t) {
  navigator.serviceWorker.register(e).then(function (e) {
    e.onupdatefound = function () {
      var /* [auto-meaningful-name] */e$installing = e.installing
      if (null != e$installing) {
        e$installing.onstatechange = function () {
          if ("installed" === e$installing.state) {
            if (navigator.serviceWorker.controller) {
              console.info("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.")
              if (t && t.onUpdate) {
                t.onUpdate(e)
              }
            } else {
              if (t && t.onSuccess) {
                t.onSuccess(e)
              }
            }
          }
        }
      }
    }
  }).catch(function (e) {
    console.error("Error during service worker registration:", e)
  })
}
export { pB }
export { fB }
export { hB }
export { mB }
