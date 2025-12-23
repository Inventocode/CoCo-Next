/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-206
 */

import * as React from "react"

import changelog from "../../../../../changelog.md"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15 from "../../../../../unrestored/shared/1571/2636/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_53 from "../../../../../unrestored/shared/1571/2636/53"
import * as Actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index from "../../../../../unrestored/shared/1571/2636/16/index"

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
    label: "CoCo Next Gitee 仓库",
    url: "https://gitee.com/oldsquaw/CoCo-Next"
  }
]

const ReleaseInfo = React.memo(() => {
  const releaseInfoDialogVisible = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.releaseInfoDialogVisible
  })
  const userId = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfo?.id
  })
  const userInfoFetchDone = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.e(function (e) {
    return e.common.userInfoFetchDone
  })
  var r = React.useState(false)
  var o = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(r, 2)
  var i = o[0]
  var a = o[1]
  var s = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_16_index.d()
  React.useEffect(function () {
    if (userInfoFetchDone) {
      if (!i) {
        if (localStorage.getItem("ReleaseVersion") !== $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f) {
          s(Actions.vj(true))
          localStorage.setItem("ReleaseVersion", $$_$$_$$_$$_$$_unrestored_shared_1571_2636_53.f)
        }
        a(true)
      }
    }
  }, [i, s, userId, userInfoFetchDone])
  return (
    <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f
      visible={releaseInfoDialogVisible}
      className={styles.ReleaseInfoDialog}
      onClose={() => s(Actions.vj(false))}
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
            <a href="https://gitee.com/oldsquaw/CoCo-Next/blob/main/changelog.md" target="_blank" rel="noopener noreferrer">
              往期功能更新回顾
              <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.j className={styles.iconLink} type="icon-dropdown-down" />
            </a>
          </div>
        </div>
      </div>
    </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_13_index.f>
  )
})
export { ReleaseInfo as UL }
