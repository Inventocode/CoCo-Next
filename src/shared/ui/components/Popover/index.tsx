/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：13__part-6
 */

import React, { memo, forwardRef, useState, useRef, useEffect, useLayoutEffect, useImperativeHandle, ReactNode, CSSProperties } from "react"
import classnames from "classnames"
import "./styles.css"

export interface IPopoverProps {
  children?: ReactNode
  defaultVisible?: boolean
  className?: classNames.Argument
  style?: CSSProperties
  content?: ReactNode
  onOpen?(): void
  onClose?(): void
  onHide?(): void
  contentClassName?: classNames.Argument
  autoClose?: boolean
  disabled?: boolean
}

export const Popover = memo(forwardRef(({
  children,
  defaultVisible,
  className,
  style,
  content,
  onOpen,
  onClose,
  onHide,
  contentClassName,
  autoClose = true,
  disabled = false
}: IPopoverProps, ref) => {

  const [isOpen, setIsOpen] = useState(!!defaultVisible)
  var elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && onOpen) {
      onOpen()
    }
  }, [isOpen])

  useLayoutEffect(() => {
    function handleClick(event: PointerEvent) {
      const { target } = event
      if (elementRef.current && !elementRef.current.contains(target as Node)) {
        setIsOpen(false)
        document.body.removeEventListener("click", handleClick)
      }
    }
    if (isOpen && autoClose) {
      document.body.addEventListener("click", handleClick)
    } else {
      if (onClose) {
        onClose()
      }
    }
    return function () {
      document.body.removeEventListener("click", handleClick)
    }
  }, [isOpen, onClose, autoClose])

  useImperativeHandle(ref, () => ({
    target: elementRef.current,
    visible: isOpen,
    showContent() {
      setIsOpen(true)
      if (onOpen) {
        onOpen()
      }
    },
    hideContent() {
      setIsOpen(false)
      if (onHide) {
        onHide()
      }
    }
  }))

  return <div
    style={style}
    className={classnames("coco-popover", className)}
    ref={elementRef}
  >
    <div
      className="coco-popover-children"
      onClick={() => { setIsOpen(true) }}
    >{children}</div>
    <div className={classnames("coco-popover-content", contentClassName, [isOpen ? "show" : "hide"])}>
      {content}
    </div>
    {disabled && <div className="coco-popover-disabled-mask" />}
  </div>
}))
