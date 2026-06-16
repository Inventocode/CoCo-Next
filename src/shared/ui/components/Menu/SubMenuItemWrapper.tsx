/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-15
 */

"use strict"

import { Ce } from "../../../../../unrestored/shared/1571/2636/13/index__part-14"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"../../../../../unrestored/shared/1571/2636/11"
import * as Tools from /* 15 */"../../../tools/index"
import { IconFont } from /* 94 */"../Iconfont/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo, useRef, useState, useMemo } from /* 0 */"react"
import classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import styles from /* 318 */"../../../../../unrestored/shared/1571/2636/13/318"

export const SubMenuItemWrapper = memo(({ value, children, subMenu, onClick }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [placement, setPlacement] = useState("right")
  const [visible, setVisible] = useState(false)
  const b = useMemo(() => Tools.p(setVisible, 100), [])
  return <div
    ref={elementRef}
    className={styles.subMenuItemWrapper}
    onMouseEnter={function () {
      if (subMenu) {
        b(() => true)
        const element = elementRef.current
        if (element) {
          const rect = element.getClientRects()[0]!
          if (rect.x + rect.width + rect.width < window.innerWidth) {
            setPlacement("right")
          } else {
            setPlacement("left")
          }
        }
      }
    }}
    onMouseLeave={() => {
      if (subMenu) {
        b(() => false)
      }
    }}
    onClick={() => {
      if (!subMenu && value && onClick) {
        onClick(value)
      }
    }}
  >
    <Ce value={value}>
      <div>
        {children}
        {subMenu && <span className={styles.subMenuArrow}>
          <IconFont type="icon-arrow-down" />
        </span>}
      </div>
    </Ce>
    {subMenu && <div className={classnames(styles.subMenuOverlay, {
      [styles.visible]: visible,
      [styles.placementLeft]: placement === "left",
      [styles.placementRight]: placement === "right"
    })}>{subMenu}</div>}
  </div>
})
