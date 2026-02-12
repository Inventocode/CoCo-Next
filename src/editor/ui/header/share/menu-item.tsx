/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-18
 */

import { ShareQRDialog } from "./dialogs/qr"
import { ShareCommunityDialog } from "./dialogs/community"
import * as CustomWidgetRestrict from "../../../../shared/widget/custom/restrict"
import * as CustomWidgetStorage from "../../../../shared/widget/custom/storage"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1510 from "../../../../../unrestored/shared/1571/2636/1510"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1509 from "../../../../../unrestored/shared/1571/2636/1509"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import { getWhitelist } from "../../../../shared/player/audit"
import * as Tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_97 from "../../../../../unrestored/shared/1571/2636/97"
import * as CommonActions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useSelector, useDispatch } from "react-redux"
import React from "react"
import { useState } from "react"
import styles from "../../../../../unrestored/shared/1571/2636/1052"

enum EShareDialogType {
  NONE = "NONE",
  SHARE_COMMUNITY_DIALOG = "SHARE_COMMUNITY_DIALOG",
  SHARE_QR_DIALOG = "SHARE_QR_DIALOG"
}

export function ShareMenuItem({ target }: { target: "community" | "others" }) {

  const dialogInfo = {
    icon: target === "community" ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_1509 : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_1510,
    message: target === "community" ? "Publish.shareToCommunity" : "Publish.shareToOthers",
    dialogType: target === "community" ? EShareDialogType.SHARE_COMMUNITY_DIALOG : EShareDialogType.SHARE_QR_DIALOG
  }

  const [dialogType, setDialogType] = useState(EShareDialogType.NONE)
  const userInfo = useSelector((state) => state.common.userInfo)
  const { formatMessage } = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a()
  const id = useSelector((state) => state.project.id)
  const globalWidgetIds = useSelector((state) => state.project.globalWidgetIds)
  const dispatch = useDispatch()

  async function showShareDialog() {
    if (!userInfo) {
      dispatch(CommonActions.openSignInDialogAction())
      return
    }
    const widgetTypesMap = {}
    globalWidgetIds.forEach((id) => {
      var types = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(id)
      if (types) {
        widgetTypesMap[id] = types
      }
    })
    const widgetIncludingKeyWord = new Set<string>()
    const includesKeyWords = new Set<string>()
    Object.values(widgetTypesMap).forEach(({ type }) => {
      const storage = CustomWidgetStorage.getExtension(type)
      if (type.includes(CustomWidgetType.UNSAFE_EXTENSION_PREFIX) && storage) {
        const notNullStorage = storage
        CustomWidgetRestrict.keyWords.forEach((keyWord) => {
          if (notNullStorage.code?.includes(keyWord)) {
            includesKeyWords.add(keyWord)
            widgetIncludingKeyWord.add(storage.types.title)
          }
        })
      }
    })
    if (includesKeyWords.size) {
      dispatch(CommonActions.openConfirmDialogAction({
        allowText: formatMessage({ id: "cloudDb.know" }),
        title: "error",
        content: formatMessage({
          id: "Play.widgetNotSupportsForbiddenKeywords"
        }, {
          widgetTypeNames: Array.from(widgetIncludingKeyWord).join("、"),
          keywords: Array.from(includesKeyWords).join("、")
        }),
        cancelBtnVisible: false
      }))
      return
    }
    // [CoCo Next] 绕审核
    // const unsafeExtensions = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Eb($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION).filter(function (e) {
    //   return !CustomWidgetType.isSafeExtensions(e.type)
    // })
    // if (!(await getWhitelist()).includes(Number(id)) && unsafeExtensions.length > 0) {
    //   dispatch(CommonActions.openConfirmDialogAction({
    //     allowText: formatMessage({ id: "know" }),
    //     title: "",
    //     content: (
    //       <div>
    //         作品使用了未审核的自定义控件，需将控件提交至
    //         <a href={Tools.WIDGET_POST_FORM_URL} target="__blank" rel="noopener noreferrer">
    //           Coco控件商城-投稿
    //         </a>
    //         ，并等待审核通过后才能进行分享。
    //       </div>
    //     ),
    //     cancelBtnVisible: false
    //   }))
    //   return
    // }
    // 禁用把作品发布到编程猫社区的功能
    if (target === "community") {
      dispatch(CommonActions.openConfirmDialogAction({
        allowText: formatMessage({ id: "know" }),
        title: "该功能已禁用",
        content: "编程猫禁止将含有自定义控件的作品发布到社区，若强制这么做，会导致相关作品被彻底删除！为保护你的作品，CoCo Next 已禁用把作品发布到编程猫社区的功能。",
        cancelBtnVisible: false
      }))
      return
    }
    const boundSetDialogType = () => { setDialogType(dialogInfo.dialogType) }
    if (dialogInfo.dialogType === EShareDialogType.SHARE_QR_DIALOG) {
      CommonActions.promisify(dispatch, CommonActions.Wf(boundSetDialogType))
    } else if ($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Y().length > 0 && localStorage.getItem("cloudDBPublishGuide") !== "true") {
      dispatch(CommonActions.kj(true, "share", boundSetDialogType))
    } else {
      boundSetDialogType()
    }
  }

  function saveProject() {
    return g.apply(this, arguments)
  }
  function g() {
    return (g = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.prev = 0
              e.next = 3
              return CommonActions.Nf(dispatch, CommonActions.tg({
                isUpdate: $$_$$_$$_$$_$$_unrestored_shared_1571_2636_97.a(id),
                isAutoSave: true
              }))
            case 3:
              e.next = 5
              return dispatch(CommonActions.kh())
            case 5:
              return e.abrupt("return", true)
            case 8:
              e.prev = 8
              e.t0 = e.catch(0)
              e.next = 12
              return dispatch(CommonActions.mj({
                message: formatMessage({
                  id: "Publish.projectSaveFail"
                }),
                type: "error"
              }))
            case 12:
              return e.abrupt("return", false)
            case 13:
            case "end":
              return e.stop()
          }
        }
      }, e, null, [[0, 8]])
    }))).apply(this, arguments)
  }

  function closeDialog() {
    setDialogType(EShareDialogType.NONE)
  }

  return <div>
    <div onClick={showShareDialog} className={styles.shareBtn}>
      <img src={dialogInfo.icon} alt={target} className={styles.shareIcon} />
      <span className={styles.shareMessage}>{formatMessage({ id: dialogInfo.message })}</span>
    </div>
    <ShareCommunityDialog
      onClose={closeDialog}
      onConfirm={saveProject}
      visible={dialogType === EShareDialogType.SHARE_COMMUNITY_DIALOG}
    />
    <ShareQRDialog
      onClose={closeDialog}
      onConfirm={saveProject}
      visible={dialogType === EShareDialogType.SHARE_QR_DIALOG}
    />
  </div>
}
