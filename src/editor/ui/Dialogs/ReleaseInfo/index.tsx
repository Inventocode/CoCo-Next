/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

import * as React from "react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import * as /* [auto-meaningful-name] */Module_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as Actions from "../../../redux/common/actions"
import { IconFont } from "../../../../shared/ui/components"
import { Dialog } from "../../../../shared/ui/components"

import styles from "./style/styles.module.css"
import packageInfo from "../../../../../package.json"

import LeftSideImage from "../../../assets/images/release-info/left-side.png"

export const ReleaseInfo = React.memo(() => {

  const releaseInfoDialogVisible = useSelector((state) => state.common.releaseInfoDialogVisible)
  const userId = useSelector((state) => state.common.userInfo?.id)
  const userInfoFetchDone = useSelector((state) => state.common.userInfoFetchDone)
  const [releaseMessages, setReleaseMessages] = useState<string>()
  const [hasShown, setHasShown] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfoFetchDone) {
      if (!hasShown) {
        const lastVersion = localStorage.getItem("ReleaseVersion")
        setHasShown(true)
        if (lastVersion === null) {
          dispatch(Actions.openConfirmDialogAction({
            title: "查看文档",
            content: "首次运行 CoCo Next，建议查看文档，了解 CoCo Next 的基本功能和用法",
            cancelText: "暂不查看",
            allowText: "立即查看",
            onConfirm() {
              open(packageInfo.document)
              localStorage.setItem("ReleaseVersion", Module_53.f)
            },
            onCancel() {
              localStorage.setItem("ReleaseVersion", Module_53.f)
            }
          }))
        } else if (lastVersion !== Module_53.f) {
          dispatch(Actions.showReleaseInfoDialog(true))
          localStorage.setItem("ReleaseVersion", Module_53.f)
        }
      }
    }
  }, [hasShown, dispatch, userId, userInfoFetchDone])

  useEffect(() => {
    if (!releaseInfoDialogVisible || releaseMessages !== undefined) {
      return
    }
    ;(async () => {
      const [{ marked }, { default: changelog }] = await Promise.all([import("marked"), import("../../../../../changelog.md")])
      setReleaseMessages(await marked(changelog))
    })()
  }, [releaseInfoDialogVisible, releaseMessages])

  return (
    <Dialog
      visible={releaseInfoDialogVisible}
      className={styles.ReleaseInfoDialog}
      onClose={() => dispatch(Actions.showReleaseInfoDialog(false))}
    >
      <div className={styles.left}>
        <img src={LeftSideImage} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <div className={styles.updateInfo}>
            <div dangerouslySetInnerHTML={{ __html: releaseMessages ?? "加载中……" }}></div>
          </div>
          <div className={styles.overViewInfo}>
            <a href="https://gitee.com/oldsquaw-coco-next/CoCo-Next/blob/main/changelog.md" target="_blank" rel="noopener noreferrer">
              在新标签页中查看
              <IconFont className={styles.iconLink} type="icon-dropdown-down" />
            </a>
          </div>
        </div>
      </div>
    </Dialog>
  )
})
