/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-15
 */

import { MenuItem } from "."
import * as Tools from "../../../tools"
import { IconFont } from "../Iconfont"
import React, { memo, useRef, useState, useMemo, ReactNode, useEffect } from "react"
import classnames from "classnames"
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

  // [CoCo Next] 提取打开子菜单的方法
  function openMenu() {
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
  }

  // [CoCo Next] 提取关闭子菜单的方法
  function closeMenu() {
    if (subMenu) {
      b(() => false)
    }
  }

  // [CoCo Next] 点击别处时关闭子菜单
  useEffect(() => {
    if (!visible) {
      return
    }
    document.addEventListener("click", closeMenu)
    return () => { document.removeEventListener("click", closeMenu) }
  }, [visible])

  return <div
    ref={elementRef}
    className={styles.subMenuItemWrapper}
    onMouseEnter={/* [CoCo Next] 提取打开子菜单的方法 */openMenu}
    onMouseLeave={/* [CoCo Next] 提取关闭子菜单的方法 */closeMenu}
    onClick={(event) => {
      if (!subMenu && value && onClick) {
        onClick(value)
      }
      // [CoCo Next] 防止事件冒泡到主菜单，使主菜单关闭
      event.stopPropagation()
      event.nativeEvent.stopImmediatePropagation()
      // [CoCo Next] 触碰点击也能打开主菜单
      openMenu()
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
    {subMenu && <div className={classnames(styles.subMenuOverlay, {
      [styles.visible]: visible,
      [styles.placementLeft]: placement === "left",
      [styles.placementRight]: placement === "right"
    })}>{subMenu}</div>}
  </div>
})
