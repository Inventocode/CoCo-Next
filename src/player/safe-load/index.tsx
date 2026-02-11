import React, { useEffect, useState } from "react"
import { isOnMobileDevice } from "../../shared/player/utils"
import { MobileWrapper } from "../wrappers/mobile"
import { WebWrapper } from "../wrappers/web"
import styles from "./styles.module.css"

/**
 * [CoCo Next] 安全检查，登录状态下可能存在安全风险
 */
export function SafeLoad({ channel }) {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>()
  const [confirm, setConfirm] = useState(false)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => { (async () => {
    const response = await fetch("https://api.codemao.cn/tiger/v3/web/accounts/profile")
    const data = await response.json()
    setIsLoggedIn(response.status !== 403 || data.error_code !== "E_0")
  })() })

  if (isLoggedIn && !confirm) {
    return <div className={styles.wrapper}>
      <h2>安全提醒</h2>
      <p>你已登录编程猫账号，在登录编程猫账号时打开 CoCo 作品可能存在安全风险。</p>
      <p>
        <a href={location.href}>{location.href}</a><br />
        👆 建议右键或长按链接，选择在无痕窗口中打开
      </p>
      <p>
        <button onClick={() => { setShowMore(!showMore) }}>{ showMore ? "隐藏更多选项": "查看更多选项" }</button>
      </p>
      {showMore && <p>
        <button onClick={() => { setConfirm(true) }}>仍要在当前页面打开</button>
      </p>}
    </div>
  }

  if (isLoggedIn === undefined) {
    return <div className={styles.wrapper}>
      <h2>安全检查</h2>
      <p>正在检查登录状态……</p>
    </div>
  }

  return isOnMobileDevice() ?
    <MobileWrapper channel={channel} /> :
    <WebWrapper channel={channel} />
}
