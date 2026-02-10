/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：94
 */

import "react"
import React from "react"
import classnames from "classnames"
import "./styles.css"

export function IconFont({
  type,
  className,
  spinning,
  subColor,
  subClassName,
  twoTone
}: {
  type: string
  className?: classNames.Argument
  spinning?: boolean
  subColor?: string
  subClassName?: string
  twoTone?: boolean
}) {

  let contentNode = <use xlinkHref={"#".concat(type)} />

  if (twoTone) {
    const paths: SVGPathElement[] = []
    const defineElement = document.getElementById(type)
    if (defineElement) {
      defineElement.querySelectorAll("path").forEach((path) => paths.push(path))
      contentNode = <svg viewBox={defineElement.getAttribute("viewBox") || undefined}>
        {paths.map((path, index) => <path
          fill={index === 0 && subColor ? subColor : undefined}
          className={index === 0 && subClassName ? subClassName : undefined}
          key={index}
          d={path.getAttribute("d") || undefined}
        />)}
      </svg>
    }
  }

  return <i className={classnames("coco-iconfont", className, spinning && "coco-iconfont-spin")}>
    <svg
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >{contentNode}</svg>
  </i>
}
IconFont.displayName = "IconFont"

export { IconFont as a }
