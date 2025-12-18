/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

import * as React from "react"

import * as te from "../../../../../unrestored/shared/1571/2636/15"
import * as Yr from "../../../../../unrestored/shared/1571/2636/53"
import * as Message from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"

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
    url: te.b
  }
]

const ReleaseInfo = React.memo(() => {
  const releaseInfoDialogVisible = $_16_index.e(function (e) {
    return e.common.releaseInfoDialogVisible
  })
  const userId = $_16_index.e(function (e) {
    return e.common.userInfo?.id
  })
  const userInfoFetchDone = $_16_index.e(function (e) {
    return e.common.userInfoFetchDone
  })
  var r = React.useState(false)
  var o = $_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = $_16_index.d()
  React.useEffect(function () {
    if (userInfoFetchDone) {
      if (!i) {
        if (localStorage.getItem("ReleaseVersion") !== Yr.f) {
          s(Message.vj(true))
          localStorage.setItem("ReleaseVersion", Yr.f)
        }
        a(true)
      }
    }
  }, [i, s, userId, userInfoFetchDone])
  return (
    <$_13_index.f
      visible={releaseInfoDialogVisible}
      className={styles.ReleaseInfoDialog}
      onClose={() => s(Message.vj(false))}
    >
      <div className={styles.left}>
        <img src={LeftSideImage} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.content}>
          <div className={styles.updateInfo}>
            <header>{`版本v${Yr.f}更新`}</header>
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
              <$_13_index.j className={styles.iconLink} type="icon-dropdown-down" />
            </a>
          </div>
        </div>
      </div>
    </$_13_index.f>
  )
})
export { ReleaseInfo as UL }
