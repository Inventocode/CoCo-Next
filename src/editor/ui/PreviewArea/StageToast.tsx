import * as React from "react"
import { memo, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import styles from "./styles.module.css"
import { hideStageToastAction } from "../../redux/common/actions"
import { IconFont } from "../../../shared/ui/components"

export const StageToast = memo(() => {

  const { visible, toast = "", showIcon = false } = useSelector((state) => state.common.stageToast)
  const dispatch = useDispatch()
  const hideTimeOutHandle = useRef<number | null>(null)

  useEffect(() => {
    if (hideTimeOutHandle.current) {
      clearTimeout(hideTimeOutHandle.current)
    }
    if (visible) {
      hideTimeOutHandle.current = window.setTimeout(() => {
        dispatch(hideStageToastAction())
      }, 3000)
    }
  }, [dispatch, visible, toast])

  return visible ? (
    <div className={styles.toastWrapper}>
      <span className={styles.toast}>
        {showIcon && <IconFont type="icon-alert-success" className={styles.icon} />}
        {toast}
      </span>
    </div>
  ) : null
})
