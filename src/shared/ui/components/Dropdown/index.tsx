/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-13
 */

import { Popover } from "../Popover"
import { IconFont } from "../Iconfont/index"
import React, { memo, useState, useRef, ReactNode } from "react"
import classNames from "classnames"
import "./styles.css"

export interface IDropdownProps {
  children?: ReactNode
  showDropdownIcon?: boolean
  overlay?: ReactNode
  className?: string
  onClick?(visible: boolean, setVisible: (visible: boolean) => void): void
}

export const Dropdown = memo(({
  children, showDropdownIcon = true, overlay, className, onClick
}: IDropdownProps) => {

  const [isActive, setIsActive] = useState(false)
  const popoverRef = useRef(null)

  function setVisible(visible: boolean) {
    if (visible) {
      popoverRef.current?.showContent()
    } else {
      popoverRef.current?.hideContent()
    }
  }

  return <div
    className={classNames("coco-dropdown", className)}
    onClick={() => {
      if (onClick) {
        onClick(!!popoverRef.current?.visible, setVisible)
      }
    }}
  >
    <Popover
      ref={popoverRef}
      contentClassName="coco-dropdown-overlay"
      content={(
        <div onClick={() => {
          popoverRef.current?.hideContent()
          setIsActive(false)
        }}>{overlay}</div>
      )}
      onOpen={() => { setIsActive(true) }}
      onClose={() => { setIsActive(false) }}
    >
      <div
        className={classNames("coco-dropdown-selector", { "coco-dropdown-active": isActive })}
        onClick={() => {
          if (popoverRef.current?.visible) {
            popoverRef.current?.hideContent()
          }
        }}
      >
        {children}
        {showDropdownIcon && <IconFont
          type="icon-dropdown-down"
          className={classNames("coco-dropdown-down-icon")}
        />}
      </div>
    </Popover>
  </div>
})
export { Dropdown as be }
