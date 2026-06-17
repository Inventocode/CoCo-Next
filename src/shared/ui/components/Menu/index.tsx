/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-14
 */

import React, { createContext, memo, ReactNode, useContext } from "react"
import "./styles.css"

const menuContext = createContext<{ onClick(value: string): void } | null>(null)
const MenuContextProvider = menuContext.Provider

export interface IMenuProps {
  children?: ReactNode
  onClick?(value: string): void
}

export const Menu = memo(({ children, onClick }: IMenuProps) => {
  return <MenuContextProvider value={{
    onClick(value) {
      if (onClick) { onClick(value) }
    }
  }}>
    <div className="coco-menu">{children}</div>
  </MenuContextProvider>
})

export interface IMenuItemProps {
  children?: ReactNode
  value?: string
}

export const MenuItem = memo(({ children, value }: IMenuItemProps) => {
  const menuContent = useContext(menuContext)
  return <div
    className="coco-menu-item"
    onClick={() => {
      if (value !== undefined && menuContent) {
        menuContent.onClick(value)
      }
    }}
  >{children}</div>
})
