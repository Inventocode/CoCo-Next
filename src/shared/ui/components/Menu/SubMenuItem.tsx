/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-15
 */

import { MenuItem } from "."
import * as Tools from "../../../tools"
import { IconFont } from "../Iconfont"
import React, { memo, useRef, useState, useMemo, ReactNode } from "react"
import classNames from "classnames"
import styles from "../../../../../unrestored/shared/1571/2636/13/318"

export interface ISubMenuItemProps {
  value?: string
  children?: ReactNode
  subMenu?: ReactNode
  onClick?(value: string): void
}

export const SubMenuItem = memo(({ value, children, subMenu, onClick }: ISubMenuItemProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [placement, setPlacement] = useState<"left" | "right">("right")
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
    <MenuItem value={value}>
      <div>
        {children}
        {subMenu && <span className={styles.subMenuArrow}>
          <IconFont type="icon-arrow-down" />
        </span>}
      </div>
    </MenuItem>
    {subMenu && <div className={classNames(styles.subMenuOverlay, {
      [styles.visible]: visible,
      [styles.placementLeft]: placement === "left",
      [styles.placementRight]: placement === "right"
    })}>{subMenu}</div>}
  </div>
})
