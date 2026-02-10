/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

import * as React from "react"

import changelog from "../../../../../changelog.md"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as Actions from "../../../redux/common/actions"
import { IconFont } from "../../../../shared/ui/components"
import { CoCoDialog } from "../../../../shared/ui/components"
import { useDispatch, useSelector } from "react-redux"

import styles from "./styles.module.css"

import LeftSideImage from "../../../assets/images/release-info/left-side.png"

const RELEASE_MESSAGES: string[] = []
let isBefore = true
for (const line of changelog.split("\n")) {
  if (!isBefore) {
    if (line.startsWith("##")) {
      break
    }
    RELEASE_MESSAGES.push(line)
  }
  if (line == `## v${$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f}`) {
    isBefore = false
  }
}
const RELEASE_LINKS = [
  {
    label: "原始域登录文档",
    url: "https://next.ccwidget.top/docs/guide/introduction/login#%E4%BA%8C%E5%8E%9F%E5%A7%8B%E5%9F%9F%E7%99%BB%E5%BD%95"
  }
]

export const ReleaseInfo = React.memo(() => {
  const releaseInfoDialogVisible = useSelector((state) => state.common.releaseInfoDialogVisible)
  const userId = useSelector((state) => state.common.userInfo?.id)
  const userInfoFetchDone = useSelector((state) => state.common.userInfoFetchDone)
  const [hasShown, setHasShown] = React.useState(false)
  const dispatch = useDispatch()

  React.useEffect(function () {
    if (userInfoFetchDone) {
      if (!hasShown) {
        if (localStorage.getItem("ReleaseVersion") !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f) {
          dispatch(Actions.showReleaseInfoDialog(true))
          localStorage.setItem("ReleaseVersion", $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f)
        }
        setHasShown(true)
      }
    }
  }, [hasShown, dispatch, userId, userInfoFetchDone])

  return (
    <CoCoDialog
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
            <header>{`版本v${$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f}更新`}</header>
            {RELEASE_MESSAGES.map(e => <p key={e}>{e}</p>)}
            <div className={styles.link}>
              {RELEASE_LINKS.map(e => (
                <div key={e.label}>
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    {e.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.overViewInfo}>
            <a href="https://gitee.com/oldsquaw-coco-next/CoCo-Next/blob/main/changelog.md" target="_blank" rel="noopener noreferrer">
              往期功能更新回顾
              <IconFont className={styles.iconLink} type="icon-dropdown-down" />
            </a>
          </div>
        </div>
      </div>
    </CoCoDialog>
  )
})
