/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-20
 */

import * as Tools from "../../../tools"
import React, { ReactNode } from /* 0 */"react"
import classNames from /* 8 */"classnames"
import "./styles.css"

const Be = Tools.p(function (e) {
  if (e) {
    e()
  }
}, 30, true)

export interface IScrollPaginateProps {
  children?: ReactNode
  onScrollBottom(): void
  height: number
  classnames?: classNames.Argument
  offsetY?: number
}

export function ScrollPaginate({
  children, onScrollBottom, height, classnames, offsetY = 10
}: IScrollPaginateProps) {
  return <div
    style={{ height }}
    className={classNames("coco-scroll-paginate", classnames)}
    onScroll={(event) => {
      const { currentTarget } = event as React.UIEvent<HTMLDivElement, UIEvent>
      if (currentTarget.scrollTop + height > currentTarget.scrollHeight - offsetY && onScrollBottom) {
        Be(onScrollBottom)
      }
    }}
  >
    {children}
  </div>
}
