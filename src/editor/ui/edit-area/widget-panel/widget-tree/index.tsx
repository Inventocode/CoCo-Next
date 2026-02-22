/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-89
 */

import { Mv } from "../../../../../../unrestored/shared/1571/2636/index__part-88"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_ui_components_iconfont_index from "../../../../../shared/ui/components/iconfont/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49 from "../../../../../../unrestored/shared/1571/2636/49"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238 from "../../../../../../unrestored/shared/1571/2636/238"
import * as BuiltInWidgetTypes from "../../../../widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index from "../../../../../../unrestored/shared/1571/2636/26/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190 from "../../../../../../unrestored/shared/1571/2636/190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_shared_tools from "../../../../../shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213 from "../../../../../../unrestored/shared/1571/2636/1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../../unrestored/shared/1571/2636/18"
import * as CommonActions from "../../../../redux/common/actions"
import * as Components from "../../../../../shared/ui/components/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index from "../../../../../../unrestored/shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11 from "../../../../../../unrestored/shared/1571/2636/11"
import classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../../unrestored/shared/1571/2636/10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useRef, useState, useEffect } from "react"
import styles from "../../../../../../unrestored/shared/1571/2636/150"

const WidgetListItem = memo(function (e) {
  var t
  var n = e.id
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */e$title = e.title
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$selected = e.selected
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$onSelect = e.onSelect
  var /* [auto-meaningful-name] */e$toggleAttributeVisible = e.toggleAttributeVisible
  var /* [auto-meaningful-name] */e$onCopyToCurrentScreen = e.onCopyToCurrentScreen
  var /* [auto-meaningful-name] */e$onHide = e.onHide
  var /* [auto-meaningful-name] */e$onShow = e.onShow
  var /* [auto-meaningful-name] */e$icon = e.icon
  var /* [auto-meaningful-name] */e$children = e.children
  var /* [auto-meaningful-name] */e$isChildren = e.isChildren
  var /* [auto-meaningful-name] */e$isLast = e.isLast
  var /* [auto-meaningful-name] */e$className = e.className
  var E = undefined === e$className ? "" : e$className
  var /* [auto-meaningful-name] */e$readonly = e.readonly
  var w = undefined !== e$readonly && e$readonly
  var /* [auto-meaningful-name] */e$isInvisibleWidget = e.isInvisibleWidget
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var A = useRef(null)
  var j = useSelector(function (e) {
    return e.block.flyoutVisible
  })
  var R = useState(true)
  var x = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(R, 2)
  var D = x[0]
  var M = x[1]
  var L = useState(false)
  var P = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(L, 2)
  var B = P[0]
  var F = P[1]
  const [dragType, setDragType] = useState<"none" | "native" | "polyfill">("none")
  useEffect(function () {
    var e = function e() {
      F(false)
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
    if (B) {
      document.addEventListener("click", e, true)
      document.addEventListener("contextmenu", e, true)
    }
    return function () {
      document.removeEventListener("click", e, true)
      document.removeEventListener("contextmenu", e, true)
    }
  }, [B])
  useEffect(function () {
    if (e$selected && A.current) {
      A.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }
  }, [e$selected])
  var G = function (e) {
    e.stopPropagation()
    e$onDelete(n)
  }
  var W = function () {
    e$onCopyToCurrentScreen(n)
  }
  return <div
    // [CoCo Next] 注入移动端拖拽调整控件顺序补丁
    ref={(element) => {
      if (element === null || element.getAttribute("data-drag-hook") === "true") {
        return
      }
      let innerDragType: typeof dragType = "none"
      let lastMouseDownEvent: MouseEvent | null = null
      let lastTouchStartEvent: TouchEvent | null = null
      let originalDragStartListener: ((event: DragEvent) => {}) | null = null
      function wrapperDragStartListener(event: DragEvent) {
        if (innerDragType === "polyfill") {
          return
        }
        const { dataTransfer } = event
        innerDragType = dataTransfer !== null && "_dragDropTouch" in dataTransfer ? "polyfill" : "native"
        ;(() => {
          let wrapper = element!.parentElement
          if (wrapper === null) {
            return
          }
          let eventHandlersKey = Object.keys(wrapper).find(key => key.startsWith("__reactEventHandlers"))
          if (eventHandlersKey === undefined) {
            return
          }
          let eventHandlers = (wrapper as any)[eventHandlersKey]
          eventHandlers?.onMouseDown?.(lastMouseDownEvent)
          eventHandlers?.onTouchStart?.(lastTouchStartEvent)
        })()
        originalDragStartListener?.(event)
        setDragType(innerDragType)
      }
      let originalDragEndListener: ((event: DragEvent) => {}) | null = null
      function wrapperDragEndListener(event: DragEvent) {
        const { dataTransfer } = event
        // 触摸屏屏蔽掉原有的拖拽事件，只接受来自 Polyfill 的事件
        if (
          innerDragType !== "polyfill" ||
          dataTransfer === null ||
          "_dragDropTouch" in dataTransfer
        ) {
          originalDragEndListener?.(event)
          innerDragType = "none"
          setDragType(innerDragType)
        }
      }
      element.addEventListener("dragstart", wrapperDragStartListener)
      element.addEventListener("touchmove", () => { F(false) })
      element.addEventListener("dragend", wrapperDragEndListener)
      element.setAttribute("data-drag-hook", "true")
      Object.defineProperty(element, "ondragstart", {
        get() { return null },
        set(value) { originalDragStartListener = value }
      })
      Object.defineProperty(element, "ondragend", {
        get() { return null },
        set(value) { originalDragEndListener = value }
      })
      element.addEventListener("mousedown", (event) => { lastMouseDownEvent = event })
      element.addEventListener("touchstart", (event) => { lastTouchStartEvent = event })
      // 强制允许拖拽
      element.draggable = true
      const originalRemoveAttribute = element.removeAttribute
      element.removeAttribute = function removeAttribute(qualifiedName: string) {
        if (qualifiedName === "draggable") {
          return
        }
        originalRemoveAttribute.call(this, qualifiedName)
      }
    }}
    // [CoCo Next] 移动端拖拽放大
    style={{
      transform: dragType === "polyfill" ? "scale(1.2)" : undefined,
      transition: "transform .1s ease-in-out,box-shadow .1s"
    }}
    className={classnames(styles.itemWrapper, E)}
  >
    {<$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a
      placement="bottomLeft"
      trigger="hover"
      onVisibleChange={function (e) {
        if (e) {
          F(false)
        }
      }}
      visible={B}
      arrowPointAtCenter={true}
      overlayClassName="popoverOverlay"
      content={function () {
        return <div
          className={styles.popoverWrapper}
          onContextMenu={function (e) {
            return e.preventDefault()
          }}
        >
          {!e$isInvisibleWidget && <div
            className={styles.menuItem}
            onMouseDown={W}
          >
            {$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
              id: "copyAndPaste"
            })}
          </div>}
          {<div
            className={classnames(styles.menuItem, styles.delete)}
            onMouseDown={G}
          >
            {$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({
              id: "delete"
            })}
          </div>}
        </div>
      }}
    >
      {<div
        ref={A}
        className={classnames(styles.item, (t = {}, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.selected, e$selected && j), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.selectedLight, e$selected && !j), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.children, e$isChildren), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.parent, !!e$children), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.expanded, D), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.notLast, !e$isLast && e$isChildren), t))}
        onContextMenu={function (e) {
          e.preventDefault()
          if (!(w || e$type !== BuiltInWidgetTypes.c && e$type !== BuiltInWidgetTypes.a && e$isChildren)) {
            F(true)
          }
        }}
        onClick={function () {
          e$onSelect(n)
        }}
      >
        {<div
          className={styles.left}
        >
          {<span
            className={styles.foldIconContainer}
            onClick={function (e) {
              M(!D)
              e.stopPropagation()
            }}
          >
            {<$$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a
              type="icon-fold-left"
              className={styles.foldIcon}
            />}
          </span>}
          {$$_$$_$$_$$_$$_shared_tools.X(e$icon) ? <img
            className={classnames(styles.widgetIcon, styles.widgetUrlIcon)}
            src={e$icon}
            alt={e$title}
            draggable={false}
          /> : <$$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a
            type={e$icon}
            className={styles.widgetIcon}
          />}
          {<span
            className={classnames(styles.label, !e$visible && styles.labelGray)}
          >
            {e$title}
          </span>}
        </div>}
        {<div
          className={styles.right}
        >
          {!e$isInvisibleWidget && e$type !== BuiltInWidgetTypes.c && <div
            onClick={function (e) {
              e.stopPropagation()
              if (!e$visible) {
                e$onShow(n)
              } else {
                e$onHide(n)
              }
            }}
            className={classnames(styles.controlIcon, styles.seeIcon)}
          >
            {<$$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a
              type={e$visible ? "icon-see" : "icon-see-disable"}
            />}
          </div>}
          {<div
            onClick={function (e) {
              e.stopPropagation()
              e$toggleAttributeVisible(n)
            }}
            className={styles.controlIcon}
          >
            {<$$_$$_$$_$$_$$_shared_ui_components_iconfont_index.a
              type="icon-attribute"
            />}
          </div>}
        </div>}
      </div>}
    </$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1213.a>}
    {D && e$children}
  </div>
})

interface IRenderWidgetListOptions {
  parentId?: string
  isGlobalWidget?: boolean
  isInvisibleWidget?: boolean
  isDragAndDeleteDisabled?: boolean
}

export const WidgetTree = memo(() => {
  var { formatMessage } = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a()
  var r = useDispatch()
  var o = useRef()
  const editAreaUpdatedAt = useSelector((state) => state.common.editAreaUpdatedAt)
  const widgetAttributeVisible = useSelector((state) => state.common.widgetAttributeVisible)
  const selectedWidgetId = useSelector((state) => state.project.selectedWidgetId)
  const globalWidgetIds = useSelector((state) => state.project.globalWidgetIds)
  const flyoutVisible = useSelector((state) => state.block.flyoutVisible)
  const currentScreen = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238.d()
  const [isFold, setIsFold] = useState(false)
  const [y, E] = useState(false)
  const [C, T] = useState(false)
  const [R, D] = useState(false)
  const readonly = useSelector((state) => state.uiConfig.widgetEditor) === $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly

  if (!currentScreen) {
    return null
  }

  function L(e) {
    var t
    var n
    r(CommonActions.ug(e))
    if (selectedWidgetId === e && widgetAttributeVisible) {
      r(CommonActions.fj(false))
    } else {
      if (selectedWidgetId === e && flyoutVisible) {
        $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
        if (!(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t)) {
          t.flyout.hide()
        }
      } else {
        $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(e))
      }
    }
  }

  function P(e) {
    var t
    var n
    if (!(r(CommonActions.ug(e)), selectedWidgetId === e && flyoutVisible)) {
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(e))
    }
    if (selectedWidgetId === e && widgetAttributeVisible) {
      r(CommonActions.fj(false))
      if (!(null === (n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n)) {
        n.refresh_selection()
      }
    } else {
      r(CommonActions.fj(true))
    }
  }

  function B(e) {
    r(CommonActions.Lg(e, "visible", true, true, true))
  }

  function F(e) {
    r(CommonActions.Lg(e, "visible", false, true, true))
  }

  function G(e) {
    r(CommonActions.Ef($$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.w(e)))
  }

  function W(e) {
    var t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
    if (t) {
      var i = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Fb(t.id || "")
      var a = formatMessage({
        id: "deleteWidget"
      }) + "“" + $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_190.f(i, 10) + "”?"
      if (t.type === BuiltInWidgetTypes.h) {
        o.current = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
        return void r(CommonActions.zh({
          onConfirm: H,
          onClose: V,
          allowText: formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: formatMessage({
            id: "cloudDB.DeleteWidgetsTips"
          })
        }))
      }
      var s = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.z.checkFieldValueIsSelected("WIDGET_ID", e)
      var c = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.z.checkSomeFieldValueIsSelected("WIDGET_ID", $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.U(e))
      if (s || c) {
        o.current = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(e)
        r(CommonActions.zh({
          onConfirm: H,
          onClose: V,
          allowText: formatMessage({
            id: "delete"
          }),
          isDangerous: true,
          title: a,
          content: formatMessage({
            id: c ? "deleteParentWidgetTips" : "deleteWidgetTips"
          })
        }))
      } else {
        r(CommonActions.Mf(e, currentScreen.id))
        o.current = undefined
      }
    }
  }

  function U(e) {
    var t
    var n
    var o = e
    r(CommonActions.ug(o))
    if (selectedWidgetId === o && flyoutVisible) {
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
      if (!(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t)) {
        t.flyout.hide()
      }
    } else {
      $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (n = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === n ? undefined : n.find_node_by_name(o))
    }
  }

  function H() {
    var t = o?.current.id
    if (t) {
      r(CommonActions.Mf(t, currentScreen.id))
    }
  }

  function V() {
    o.current = undefined
  }

  const currentScreenWidgets = []
  const currentScreenWidgetIds: string[] = []
  const currentScreenAnyWidgets = []
  const currentScreenAnyWidgetIds: string[] = []
  const currentScreenWidgetsMap = new Map()

  currentScreen.widgetIds.forEach((id) => {
    const types = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(id)
    if (types) {
      if (types && !types.parentId) {
        currentScreenWidgetsMap.set(id, { widget: types })
      }
      const { type } = types
      if (types && !currentScreenAnyWidgetIds.includes(type)) {
        var o = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Db(types.type)
        if (o && o.hasAnyWidget) {
          currentScreenAnyWidgetIds.push(type)
          currentScreenAnyWidgets.push({
            type: "ANY_".concat(type),
            icon: o.icon,
            title: formatMessage({
              id: "anyWidgetAny"
            }) + formatMessage({
              id: o.title || o.previewAreaWidgetTitle
            })
          })
        }
      }
    }
  })

  currentScreenWidgetsMap.forEach((entry) => {
    if (!(
      entry.widget.type !== BuiltInWidgetTypes.CANVAS_WIDGET &&
      entry.widget.type !== BuiltInWidgetTypes.LIST_VIEWER_WIDGET &&
      entry.widget.type !== BuiltInWidgetTypes.NEW_LIST_VIEWER_WIDGET
    )) {
      entry.widget.widgetIds.forEach((widgetId) => {
        const types = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(widgetId)
        if (types) {
          if (!entry.children) {
            entry.children = []
          }
          entry.children.push({
            widget: types
          })
        }
      })
    }
    currentScreenWidgets.push(entry)
    currentScreenWidgetIds.push(entry.widget.id)
  })

  const invisibleWidgets = []
  const invisibleWidgetIds = []
  currentScreen.invisibleWidgetIds?.forEach((type) => {
    const types = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(type)
    if (types) {
      invisibleWidgets.push({
        widget: types
      })
      invisibleWidgetIds.push(types.id)
    }
  })

  const globalWidgets = []
  const globalWidgetIdsExceptForDatabaseWidget: string[] = []
  globalWidgetIds.forEach((type) => {
    const widget = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(type)
    if (widget && widget.type !== BuiltInWidgetTypes.DATABASE_WIDGET) {
      globalWidgets.push({ widget: widget })
      globalWidgetIdsExceptForDatabaseWidget.push(widget.id)
    }
  })
  var oe
  function renderStaticWidgetList(widgets, parentId: string, options?: IRenderWidgetListOptions) {
    return <>{widgets.reverse().map(({ widget, children }, index) => <WidgetListItem
      className={parentId}
      id={widget.id}
      icon={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Db(widget.type)?.icon || ""}
      type={widget.type}
      title={$$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Fb(widget.id)}
      visible={widget.visible}
      readonly={readonly}
      key={widget.id}
      selected={selectedWidgetId === widget.id}
      onDelete={W}
      onHide={F}
      onSelect={L}
      onShow={B}
      onCopyToCurrentScreen={G}
      toggleAttributeVisible={P}
      isLast={index === widgets?.length - 1}
      isDragAndDeleteDisabled={options?.isDragAndDeleteDisabled}
      isInvisibleWidget={options?.isInvisibleWidget}
      isChildren={!!options?.parentId}
    >{children && renderWidgetList(children, {
        parentId: widget.id,
        isGlobalWidget: options?.isGlobalWidget,
        isInvisibleWidget: options?.isInvisibleWidget,
        isDragAndDeleteDisabled: widget.type === BuiltInWidgetTypes.LIST_VIEWER_WIDGET || widget.type === BuiltInWidgetTypes.NEW_LIST_VIEWER_WIDGET
      })}</WidgetListItem>
    )}</>
  }

  function renderWidgetList(widgets, options?: IRenderWidgetListOptions) {
    const parentId = options?.parentId ? "SubReactDragListViewItem" : "ReactDragListViewItem"
    const selector = `.${parentId}`
    return (
      options?.isInvisibleWidget ||
      options?.isGlobalWidget ||
      options?.isDragAndDeleteDisabled ||
      readonly
    ) ? renderStaticWidgetList(widgets, parentId, options) : (
        <Mv
          nodeSelector={selector}
          handleSelector={selector}
          onDragEnd={(fromIndex: number, toIndex: number) => {
            if (!readonly) {
              (function (fromIndex, toIndex, options) {
                if (!(fromIndex < 0 || toIndex < 0)) {
                  if (options?.parentId) {
                    var o = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(null === options || undefined === options ? undefined : options.parentId)
                    var /* [auto-meaningful-name] */o$widgetIds = o.widgetIds
                    var a = o$widgetIds.length - fromIndex - 1
                    var s = o$widgetIds.length - toIndex - 1
                    var c = o$widgetIds.splice(a, 1)
                    var l = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 1)[0]
                    var d = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(o$widgetIds)
                    d.splice(s, 0, l)
                    r(CommonActions.Mg(currentScreen.id, o.id, d, true, true, true))
                  } else {
                    var /* [auto-meaningful-name] */po$oTHelper$widget
                    var f = currentScreenWidgetIds
                    var h = f.length - fromIndex - 1
                    var m = f.length - toIndex - 1
                    var g = f[h]
                    var _ = f[m]
                    const { widgetIds } = currentScreen
                    var b = widgetIds.indexOf(_)
                    var y = widgetIds.indexOf(g)
                    if (b < 0 || y < 0) {
                      return
                    }
                    widgetIds.splice(y, 1)
                    widgetIds.splice(b, 0, g)
                    r(CommonActions.Bj(currentScreen.id, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_25_index.a(widgetIds), null === options || undefined === options ? undefined : options.isInvisibleWidget))
                    if (!(null === (po$oTHelper$widget = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_49.oTHelper.widget) || undefined === po$oTHelper$widget)) {
                      po$oTHelper$widget.clientOp.moveWidget(currentScreen.id, y, b)
                    }
                  }
                }
              })(fromIndex, toIndex, options)
            }
          }}
          lineClassName={styles.dragLine}
        >{renderStaticWidgetList(widgets, parentId, options)}</Mv>
      )
  }

  return <div className={styles.wrapper}>
    <div className={styles.list} data-updated-at={editAreaUpdatedAt}>
      <div className={styles.widgetCategory} onClick={() => { setIsFold(!isFold) }}>
        <span>{formatMessage({ id: "components" })}</span>
        <Components.j type="icon-fold" className={isFold ? styles.fold : styles.unFold} />
      </div>
      {!isFold && renderWidgetList(currentScreenWidgets)}
      {!isFold && <div
        className={classnames(styles.item, styles.screenItem, {
          [styles.selected]: !selectedWidgetId && flyoutVisible,
          [styles.selectedLight]: !selectedWidgetId && !flyoutVisible
        })}
        onContextMenu={(event) => event.preventDefault()}
        onClick={function () {
          var e
          var t
          r(CommonActions.ug(undefined))
          if (selectedWidgetId || !widgetAttributeVisible) {
            if (!selectedWidgetId && flyoutVisible) {
              $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem()
              if (!(null === (e = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === e)) {
                e.flyout.hide()
              }
            } else {
              $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(currentScreen.id))
            }
          } else {
            r(CommonActions.fj(false))
          }
        }}
      >
        <div className={styles.left}>
          <Components.j type="icon-screen" className={styles.widgetIcon} />
          <span className={styles.label}>{currentScreen.title}</span>
        </div>
        <div
          className={styles.right}
        >
          <div
            onClick={function (e) {
              var t
              e.stopPropagation()
              r(CommonActions.ug(undefined))
              $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.setSelectedItem(null === (t = $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_26_index.g.getToolbox()) || undefined === t ? undefined : t.find_node_by_name(currentScreen.id))
              r(!selectedWidgetId && widgetAttributeVisible ? CommonActions.fj(false) : CommonActions.fj(true))
            }}
            className={classnames(styles.controlIcon, styles.attributeIcon)}
          >
            <Components.j type="icon-attribute" />
          </div>
          <div className={styles.screenBottomIcon}>
            <Components.j type="icon-screen-bottom" />
          </div>
        </div>
      </div>}
      {invisibleWidgetIds.length > 0 && <>
        <div
          className={styles.widgetCategory}
          onClick={() => { E(!y) }}
        >
          <span>{formatMessage({ id: "invisibleWidgetList" })}</span>
          <Components.j type="icon-fold" className={y ? styles.fold : styles.unFold} />
        </div>
        {!y && renderWidgetList(invisibleWidgets, { isInvisibleWidget: true })}
      </>}
      {globalWidgetIdsExceptForDatabaseWidget.length > 0 && <>
        <div
          className={styles.widgetCategory}
          onClick={() => { T(!C) }}
        >
          <span> {formatMessage({ id: "globalWidgetList" })} </span>
          <Components.j type="icon-fold" className={C ? styles.fold : styles.unFold} />
        </div>
        {!C && renderWidgetList(globalWidgets, {
          isGlobalWidget: true,
          isInvisibleWidget: true
        })}
      </>}
      {currentScreenAnyWidgets.length > 0 && <>
        <div
          className={styles.widgetCategory}
          onClick={() => { D(!R) }}
        >
          <span>{formatMessage({ id: "anyWidgetList" })}</span>
          <Components.j type="icon-fold" className={R ? styles.fold : styles.unFold} />
        </div>
        {!R && (oe = currentScreenAnyWidgets, <div
          onContextMenu={function (e) {
            return e.preventDefault()
          }}
        >
          {oe.reverse().map(function (e) {
            var t
            var /* [auto-meaningful-name] */e$type = e.type
            var /* [auto-meaningful-name] */e$icon = e.icon
            var /* [auto-meaningful-name] */e$title = e.title
            return <div
              onClick={U.bind(null, e$type)}
              key={e$type}
              className={classnames(styles.item, (t = {}, $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.selected, selectedWidgetId === e$type && flyoutVisible), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.selectedLight, selectedWidgetId === e$type && !flyoutVisible), $$_$$_$$_$$_$$_$$_unrestored_shared_1571_2636_11.a(t, styles.parent, false), t))}
            >
              <div className={classnames(styles.left, styles.anyWidget)}>
                {$$_$$_$$_$$_$$_shared_tools.X(e$icon) ? <img
                  className={classnames(styles.widgetIcon, styles.widgetUrlIcon)}
                  src={e$icon}
                  alt={e$title}
                  draggable={false}
                /> : <Components.j type={e$icon} className={styles.widgetIcon} />}
                <span className={classnames(styles.label)}>{e$title}</span>
              </div>
            </div>
          })}
        </div>)}
      </>}
    </div>
  </div>
})
