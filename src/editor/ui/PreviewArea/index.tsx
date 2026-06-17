import * as React from "react"
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import classnames from "classnames"
import { useDispatch, useSelector } from "react-redux"

import { Rn } from "../../../../unrestored/shared/1571/2636/index__part-23"
import { ScreenList } from "./screen-list"
import { WidgetTabContainer } from "./WidgetList"
import { lo as DragBar } from "../../../../unrestored/shared/1571/2636/index__part-27"
import { Stage } from "./stage"
import { StageToast } from "./stage-toast"
import styles from "./styles.module.css"
import { ContextMenu } from "./ContextMenu"
import * as /* [auto-meaningful-name] */Module_75 from /* 75 */"../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */Module_90 from /* 90 */"../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../unrestored/shared/1571/2636/9"
import * as CommonActions from "../../redux/common/actions"
import { setStageScaleAction, setStageWidthAction } from "../../redux/common/actions"
import { changeContextMenuInfoAction, closeContextMenuAction } from "../../redux/common/actions"
import { IconFont } from "../../../shared/ui/components"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */Module_748 from /* 748 */"../../../../unrestored/shared/1571/2636/748/index"
import { useInnerWidth } from "../../../shared/utils/ui/use-inner-width"

export function useWidgetListWidth() {
  return useInnerWidth() > 1300 ? 144 : 92
}

export function useWidgetListSingleColumn(widgetListWidth: number) {
  return widgetListWidth === 92
}

export const PreviewArea = memo(() => {

  const { formatMessage } = Module_710.a()
  const dispatch = useDispatch()
  const mainElementRef = useRef<HTMLElement>(null)
  const previewAreaRef = useRef<HTMLDivElement>(null)
  const playing = useSelector((state) => state.project.playing)
  const stageVisible = useSelector((state) => state.common.stageVisible)
  const isHoverBlockArea = useSelector((state) => state.common.isHoverBlockArea)
  const [previewAreaWidth, setPreviewAreaWidth] = useState(0)
  const [m, g] = useState(false)

  const innerWidth = useInnerWidth()
  const widgetListWidth = useWidgetListWidth()
  const widgetListSingleColumn = useWidgetListSingleColumn(widgetListWidth)

  // [CoCo Next] 提取长按菜单处理方法
  const commonHandleContextMenu = useCallback((event: Event, target: HTMLElement, x: number, y: number) => {
    const closestSelectable = target.closest("." + Module_90.b)
    const id = closestSelectable?.id || ""
    const editable = closestSelectable?.classList.contains(Module_90.a)
    if (!editable) {
      event.preventDefault()
    }
    if (!closestSelectable || editable || Module_9.Bb(id)?.parentId) {
      dispatch(closeContextMenuAction())
    } else {
      dispatch(changeContextMenuInfoAction({
        position: { x, y },
        visible: true,
        widgetId: closestSelectable.id
      }))
    }
  }, [dispatch])

  useEffect(function () {
    const mainElement = mainElementRef.current
    function handleContextMenu(event: PointerEvent) {
      const { target, clientX, clientY } = event as PointerEvent & { target: HTMLElement }
      // [CoCo Next] 提取长按菜单处理方法
      commonHandleContextMenu(event, target, clientX, clientY)
    }
    if (mainElement) {
      mainElement.addEventListener("contextmenu", handleContextMenu)
    }
    return function () {
      if (mainElement) {
        mainElement.removeEventListener("contextmenu", handleContextMenu)
      }
    }
  }, [dispatch, mainElementRef])

  // [CoCo Next] 移动端长按菜单
  useEffect(() => {
    const mainElement = mainElementRef.current
    let handle: ReturnType<typeof setTimeout> | null = null
    function handleTouchStart(event: TouchEvent) {
      const { target, touches: { 0: { clientX = 0, clientY = 0 } = {} } } = event as TouchEvent & { target: HTMLElement }
      handle = setTimeout(() => {
        commonHandleContextMenu(event, target, clientX, clientY)
      }, 400)
    }
    function cancel() {
      if (handle !== null) {
        clearTimeout(handle)
      }
    }
    if (mainElement) {
      mainElement.addEventListener("touchstart", handleTouchStart)
      mainElement.addEventListener("touchmove", cancel)
      mainElement.addEventListener("touchcancel", cancel)
      mainElement.addEventListener("touchend", cancel)
    }
    return function () {
      if (mainElement) {
        mainElement.removeEventListener("touchstart", handleTouchStart)
        mainElement.removeEventListener("touchmove", cancel)
        mainElement.removeEventListener("touchcancel", cancel)
        mainElement.removeEventListener("touchend", cancel)
      }
    }
  }, [dispatch, mainElementRef])

  useLayoutEffect(() => {
    if (previewAreaRef.current) {
      const width = Math.max(innerWidth / 3, 514)
      previewAreaRef.current.style.width = `${width}px`
      setPreviewAreaWidth(width + 1)
      dispatch(setStageWidthAction(width - widgetListWidth))
      if (mainElementRef.current) {
        const { offsetWidth, offsetHeight } = mainElementRef.current
        const scaleX = .8 * offsetWidth / Module_75.e
        const scaleY = (offsetHeight - 80) / Module_75.d
        let scale = Math.min(scaleX, scaleY, 1)
        scale = Math.max(scale, .7)
        dispatch(setStageScaleAction(scale))
      }
    }
  }, [dispatch, innerWidth])

  useLayoutEffect(function () {
    if (previewAreaRef.current && mainElementRef.current) {
      let width = mainElementRef.current.offsetWidth + widgetListWidth
      width = Math.max(width, 514)
      Animejs.default({
        targets: "#previewAreaWrapper",
        width,
        easing: "easeInOutSine",
        duration: 300
      })
    }
  }, [])

  return (
    <div
      id="previewAreaWrapper"
      className={styles.wrapper}
      ref={previewAreaRef}
      style={{ marginLeft: stageVisible || playing ? 0 : -previewAreaWidth }}
    >
      <section className={styles.body}>
        <>
          <aside
            style={{ width: `${widgetListWidth}px` }}
            className={styles.side}
          >
            <WidgetTabContainer singleColumn={widgetListSingleColumn} />
          </aside>
          <ScreenList />
          <main className={styles.main} ref={mainElementRef}>
            <Stage />
            <StageToast />
            <ContextMenu />
          </main>
          {!playing && (
            <Module_748.a
              placement="bottom"
              title={formatMessage({
                id: stageVisible ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
              })}
              trigger={["hover", "click"]}
            >
              <div
                className={classnames(styles.foldBtn, stageVisible ? styles.hide : styles.show, (m || isHoverBlockArea) && styles.visible)}
                onClick={() => {
                  dispatch(CommonActions.Yi(!stageVisible))
                }}
                onMouseEnter={() => g(true)}
                onMouseLeave={() => g(false)}
              >
                <IconFont type="icon-double-arrow" />
              </div>
            </Module_748.a>
          )}
        </>
      </section>
      <Rn />
      {!playing && (
        <DragBar
          onDrag={(width) => { dispatch(setStageWidthAction(width - widgetListWidth)) }}
          onDragEnd={(width) => {
            setPreviewAreaWidth(width + 1)
            dispatch(setStageWidthAction(width - widgetListWidth))
          }}
          onEnter={() => dispatch(CommonActions.ui(true))}
          onLeave={() => dispatch(CommonActions.ui(false))}
          previewAreaRef={previewAreaRef}
        />
      )}
    </div>
  )
})
