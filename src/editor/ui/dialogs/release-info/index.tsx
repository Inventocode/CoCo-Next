/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

import * as React from "react"

import * as Tools from "../../../../shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as Actions from "../../../redux/common/actions"
import { IconFont } from "../../../../shared/ui/components"
import { CoCoDialog } from "../../../../shared/ui/components"
import { useDispatch, useSelector } from "react-redux"

import styles from "./styles.module.css"

import LeftSideImage from "../../../assets/images/release-info/left-side.png"

const RELEASE_MESSAGES = [
  "为了确保编程猫社区成员账户安全，我们将限制导入“自定义控件”的作品进行分享及协作。",
  "为此，我们建议各作者请先将控件提交审核，再由控件商城添加及使用 ❤️ 。",
  "这一措施旨在维护我们社区的健康与安全，感谢您的理解与支持 ❤️ ～"
]
const RELEASE_LINKS = [
  {
    label: "Coco控件商城-投稿",
    url: Tools.WIDGET_POST_FORM_URL
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
            <a href="https://codemao-guide.yuque.com/bfiekm/sbo5kh/update" target="_blank" rel="noopener noreferrer">
              往期功能更新回顾
              <IconFont className={styles.iconLink} type="icon-dropdown-down" />
            </a>
          </div>
        </div>
      </div>
    </CoCoDialog>
  )
})
