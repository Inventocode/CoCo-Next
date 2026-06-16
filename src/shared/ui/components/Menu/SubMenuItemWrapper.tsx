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
import /* [auto-meaningful-name] */React, { useEffect } from /* 0 */"react"
import { memo, useRef, useState, useMemo } from /* 0 */"react"
import classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import styles from /* 318 */"../../../../../unrestored/shared/1571/2636/13/318"

export const SubMenuItemWrapper = memo(({ value, children, subMenu, onClick }) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [placement, setPlacement] = useState("right")
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
