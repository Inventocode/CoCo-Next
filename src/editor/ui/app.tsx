/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-219
 */

import { En } from "./Header/wrapper"
import { PreviewArea } from "./PreviewArea"
import { iI, aI } from "../../../unrestored/shared/1571/2636/index__part-170"
import { lI } from "../../../unrestored/shared/1571/2636/index__part-171"
import { hI } from "../../../unrestored/shared/1571/2636/index__part-172"
import { bI } from "../../../unrestored/shared/1571/2636/index__part-173"
import { BI } from "../../../unrestored/shared/1571/2636/index__part-176"
import { aj } from "../../../unrestored/shared/1571/2636/index__part-179"
import { mj } from "../../../unrestored/shared/1571/2636/index__part-180"
import { rN } from "../../../unrestored/shared/1571/2636/index__part-190"
import { kM } from "../../../unrestored/shared/1571/2636/index__part-194"
import { OpenWork } from "./functions/open-work"
import { dL, pL } from "../../../unrestored/shared/1571/2636/index__part-200"
import { bL } from "../../../unrestored/shared/1571/2636/index__part-201"
import { wL } from "../../../unrestored/shared/1571/2636/index__part-202"
import { AL } from "../../../unrestored/shared/1571/2636/index__part-203"
import { kL } from "../../../unrestored/shared/1571/2636/index__part-204"
import { ML } from "./dialogs/download-apk/index"
import { ReleaseInfo } from "./dialogs/ReleaseInfo/index"
import { ZL } from "../../../unrestored/shared/1571/2636/index__part-208"
import { aP } from "../../../unrestored/shared/1571/2636/index__part-210"
import { _P } from "../../../unrestored/shared/1571/2636/index__part-211"
import { kP } from "../../../unrestored/shared/1571/2636/index__part-213"
import { LP } from "../../../unrestored/shared/1571/2636/index__part-214"
import { zP } from "../../../unrestored/shared/1571/2636/index__part-215"
import { qP } from "../../../unrestored/shared/1571/2636/index__part-216"
import { ZP, JP } from "../../../unrestored/shared/1571/2636/index__part-217"
import { iB } from "../../../unrestored/shared/1571/2636/index__part-218"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_937 from "../../../unrestored/shared/1571/2636/937"
import * as /* [auto-meaningful-name] */Shared_tools from "../../shared/tools"
import * as /* [auto-meaningful-name] */Module_97 from /* 97 */"../../../unrestored/shared/1571/2636/97"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../unrestored/shared/1571/2636/18"
import * as /* [auto-meaningful-name] */Redux_common_actions from "../redux/common/actions"
import * as Components from "../../shared/ui/components"
import { CoCoDialog } from "../../shared/ui/components"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */Shared_ui_language from "../../shared/ui/language"
import * as /* [auto-meaningful-name] */Module_188 from /* 188 */"../../../unrestored/shared/1571/2636/188"
import * as /* [auto-meaningful-name] */Module_2681 from /* 2681 */"../../../unrestored/shared/1571/2636/2681/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Module_816 from /* 816 */"../../../unrestored/shared/1571/2636/816"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_816 from "../../../unrestored/shared/1571/2636/816"
import "./style/global.css"

var cB = memo(function () {
  const permissionDialogInfo = useSelector((state) => state.common.permissionDialogInfo)
  var /* [auto-meaningful-name] */permissionDialogInfo$visible = permissionDialogInfo.visible
  var /* [auto-meaningful-name] */permissionDialogInfo$type = permissionDialogInfo.type
  var /* [auto-meaningful-name] */permissionDialogInfo$onConfirm = permissionDialogInfo.onConfirm
  var /* [auto-meaningful-name] */permissionDialogInfo$onDeny = permissionDialogInfo.onDeny
  var /* [auto-meaningful-name] */permissionDialogInfo$className = permissionDialogInfo.className
  var /* [auto-meaningful-name] */permissionDialogInfo$isDangerous = permissionDialogInfo.isDangerous
  var /* [auto-meaningful-name] */permissionDialogInfo$denyText = permissionDialogInfo.denyText
  var c = undefined === permissionDialogInfo$denyText ? "拒绝" : permissionDialogInfo$denyText
  var /* [auto-meaningful-name] */permissionDialogInfo$allowText = permissionDialogInfo.allowText
  var u = undefined === permissionDialogInfo$allowText ? "同意" : permissionDialogInfo$allowText
  const dispatch = useDispatch()
  let imgUrl = "https://static.bcmcdn.com/coco/image/permission_camera.png"
  let tipText = "需要开启相机权限才能进行拍照或摄像哦"
  switch (permissionDialogInfo$type) {
    case Module_18.e.camera:
      break
    case Module_18.e.microphone:
      imgUrl = "https://static.bcmcdn.com/coco/image/permission_microphone.png"
      tipText = "需要开启麦克风权限能使用环境音量"
  }
  return <CoCoDialog
    visible={permissionDialogInfo$visible}
    showCloseButton={false}
    withPortal={true}
    maskClosable={false}
    className={Classnames(Unrestored_shared_1571_2636_816.dialog, permissionDialogInfo$className)}
  >
    <img className={Unrestored_shared_1571_2636_816.permissionImage} src={imgUrl} alt="" />
    {<div
      className={Unrestored_shared_1571_2636_816.content}
    >
      <h3>授权提示</h3>
      <span>{tipText}</span>
      {<div className={Classnames(Unrestored_shared_1571_2636_816.dialogButtons)}>
        <Components.d
          onClick={() => {
            if (permissionDialogInfo$onDeny) {
              permissionDialogInfo$onDeny()
            }
            dispatch(Redux_common_actions.Ej({
              type: permissionDialogInfo$type,
              visible: false
            }))
          }}
          className={Unrestored_shared_1571_2636_816.denyButton}
        >{c}</Components.d>
        {<Components.d
          type="primary"
          danger={permissionDialogInfo$isDangerous}
          onClick={function () {
            if (permissionDialogInfo$onConfirm) {
              permissionDialogInfo$onConfirm()
            }
            dispatch(Redux_common_actions.Ej({
              type: permissionDialogInfo$type,
              visible: false
            }))
          }}
        >
          {u}
        </Components.d>}
      </div>}
    </div>}
  </CoCoDialog>
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
  var n = Module_97.a(t)
  var r = function () {
    var t = Module_7.a(RegeneratorRuntime.mark(function t() {
      return RegeneratorRuntime.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              t.next = 2
              return Redux_common_actions.Nf(e, Redux_common_actions.tg({
                isUpdate: n,
                isAutoSave: false,
                isNeedReport: true
              }))
            case 2:
              if (t.sent) {
                e(Redux_common_actions.mj({
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
  return <Module_188.a>
    <Module_188.b
      keys={{
        osx: "command+s",
        windows: "control+s"
      }}
      callback={r}
    />
  </Module_188.a>
}

export const App = React.memo(function () {
  var e = useSelector(function (e) {
    return e.common.language
  })
  var t = useSelector(function (e) {
    return e.project.styleDialog.visible
  })
  var n = useSelector(function (e) {
    return e.uiConfig.header
  })
  var r = undefined !== Shared_tools.parseURLSearchParamsToObject(window.location.href).archiveId
  return <Module_2681.b
    locale={e}
    messages={Shared_ui_language.e[e] || Shared_ui_language.e[Shared_ui_language.b]}
  >
    {<div
      className={Unrestored_shared_1571_2636_937.layout}
      onDragOver={lB}
      onDrop={uB}
    >
      {React.createElement(dB, null)}
      {React.createElement(aI, null)}
      <OpenWork />
      {<header
        className={Unrestored_shared_1571_2636_937.header}
      >
        {<En>
          {<>
            {React.createElement(dL, null)}
            {!r && n.projectName !== Module_18.j.Hide && React.createElement(pL, {
              readonly: n.projectName === Module_18.j.ReadOnly
            })}
          </>}
        </En>}
      </header>}
      {<section
        className={Unrestored_shared_1571_2636_937.body}
      >
        <aside>
          <PreviewArea/>
        </aside>
        {<main
          className={Unrestored_shared_1571_2636_937.main}
        >
          {React.createElement(iI, null)}
        </main>}
      </section>}
      {React.createElement(lI, null)}
      {React.createElement(hI, null)}
      {React.createElement(rN, null)}
      {React.createElement(bI, null)}
      {React.createElement(cB, null)}
      {React.createElement(mj, null)}
      {<BI/>}
      {React.createElement(aj, null)}
      {React.createElement(kL, null)}
      {React.createElement(wL, null)}
      {<AL/>}
      {<ML/>}
      <ReleaseInfo />
      {React.createElement(aP, null)}
      {<_P/>}
      {<ZL/>}
      {<LP/>}
      {React.createElement(qP, null)}
      {t && React.createElement(kM, null)}
      {React.createElement(bL, null)}
      {React.createElement(kP, null)}
      {React.createElement(zP, null)}
      {<ZP/>}
      {<JP/>}
      {React.createElement(iB, null)}
    </div>}
  </Module_2681.b>
})
var fB = function (e) {
  if (e && e instanceof Function && !Shared_tools.h()) {
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

export const isDevelopment = Boolean(
  window.location.hostname === "localhost" ||
  window.location.hostname === "dev-local.codemao.cn" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

export interface ServiceWorkerRegisterInfo {
  swUrl: string
  onUpdate?(registration: ServiceWorkerRegistration): void
  onSuccess?(registration: ServiceWorkerRegistration): void
}

export function registerServiceWorker(scriptURL: string, info: ServiceWorkerRegisterInfo) {
  navigator.serviceWorker.register(scriptURL).then((registration) => {
    registration.onupdatefound = () => {
      const { installing } = registration
      if (installing != null) {
        installing.onstatechange = () => {
          if (installing.state === "installed") {
            if (navigator.serviceWorker.controller) {
              console.info("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA.")
              if (info && info.onUpdate) {
                info.onUpdate(registration)
              }
            } else {
              if (info && info.onSuccess) {
                info.onSuccess(registration)
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

export { fB }
