/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-87
 */

import * as React from "react"

import { we as Empty } from "../../../../../unrestored/shared/1571/2636/index__part-6"
import { Rn } from "../../../../../unrestored/shared/1571/2636/index__part-23"
import { ScreenList } from "../screen-list"
import { lo as ActivePreview } from "../../../../../unrestored/shared/1571/2636/index__part-27"
import { zd as Stage } from "../../../../../unrestored/shared/1571/2636/index__part-33"
import { WidgetCategoryItem, BuiltInWidgetList } from "./item"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_components_iconfont_index from "../../../../shared/ui/components/iconfont/index"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196 from "../../../../../unrestored/shared/1571/2636/196"
import /* [auto-meaningful-name] */$$_stage_style$css from "../stage/style.css"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1512 from "../../../../../unrestored/shared/1571/2636/1512"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_238 from "../../../../../unrestored/shared/1571/2636/238"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_75 from "../../../../../unrestored/shared/1571/2636/75"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_90 from "../../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_9 from "../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_18 from "../../../../../unrestored/shared/1571/2636/18"
import * as Actions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_ui_components from "../../../../shared/ui/components"
import classnames from "classnames"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710 from "../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_7 from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1514 from "../../../../../unrestored/shared/1571/2636/1514"
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15141 from "../../../../../unrestored/shared/1571/2636/1514"

var WidgetMallButton = React.memo(function (e) {
  const { formatMessage } = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a()
  var n = useSelector(function (e) {
    return e.common.userInfo
  })
  var r = useDispatch()
  return (
    <$$_$$_$$_$$_shared_ui_components.d
      className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.widgetMallBtn}
      onClick={() => {
        const e = () => {
          r(Actions.gj(true))
        }
        if (n) {
          e()
        } else {
          r(Actions.Ch(e))
        }
      }}
    >
      <$$_$$_$$_$$_shared_ui_components_iconfont_index.a type="icon-shop" className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.shopIcon} />
      {!e.singleColumn && <span>{formatMessage({ id: "Widget.widgetMall" })}</span>}
    </$$_$$_$$_$$_shared_ui_components.d>
  )
})

var WidgetScrollExtension = React.memo(function (e) {
  var t = useSelector(function (e) {
    return e.common.myExtensionWidgets
  })
  var n = useSelector(function (e) {
    return e.common.userInfo
  })
  var r = useDispatch()
  var o = []
  var i = []
  const a = (e) => ({
    icon: e.icon,
    title: e.widgetName,
    previewAreaWidgetTitle: "",
    type: CustomWidgetType.standardize(e.type, true),
    isInvisibleWidget: e.isInvisibleWidget,
    widgetServerId: e.id
  })
  t.forEach((e) => {
    if (e.isInvisibleWidget) {
      i.push(a(e))
    } else {
      o.push(a(e))
    }
  })
  const { formatMessage } = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a()
  var c = React.useState(false)
  var l = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React.useState(true)
  var m = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_238.c()
  const unsafeExtensions = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Eb($$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.j.EXTENSION).filter(function (e) {
    return !CustomWidgetType.isSafeExtensions(e.type)
  })
  React.useEffect(() => {
    const e = (() => {
      const e = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return Actions.Nf(r, Actions.eg())
              case 2:
                d(false)
              case 3:
              case "end":
                return e.stop()
            }
          }
        }, e)
      }))
      return function () {
        return e.apply(this, arguments)
      }
    })()
    if (n) {
      d(true)
      e()
    } else {
      r(Actions.Sh([]))
    }
  }, [r, n])
  React.useEffect(() => {
    if (0 === unsafeExtensions.length && 0 === o.length && 0 === i.length) {
      v(true)
    } else {
      v(false)
    }
  }, [unsafeExtensions, o, i])
  return <>
    <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.scrollExtension}>
      {!u && g && (
        <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.noExtensionWidgets}>
          <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.noExtensionWidgetsWrapper}>
            {!e.singleColumn && (
              <Empty
                type="image-text"
                text={
                  <>
                    {formatMessage({ id: "Widget.emptyTip1" })}
                    <br />
                    {formatMessage({ id: "Widget.emptyTip2" })}
                  </>
                }
              />
            )}
            <WidgetMallButton singleColumn={e.singleColumn} />
          </div>
        </div>
      )}
      {!u && (
        <>
          <WidgetCategoryItem configList={i} title="ExtensionWidget.category.function" />
          <WidgetCategoryItem configList={o} title="ExtensionWidget.category.ui" />
          <WidgetCategoryItem key={b} configList={unsafeExtensions} title="ExtensionWidget.category.extension" />
        </>
      )}
      {u && (
        <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.loading} style={{ height: "100%" }}>
          <img src={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_15141} alt="loading" />
        </div>
      )}
    </div>
    <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.widgetMallBtnContainer}>
      {!g && <WidgetMallButton singleColumn={e.singleColumn} />}
    </div>
  </>
})

enum Tab {
  BASIC = "BASIC",
  EXTENSION = "EXTENSION"
}

var WidgetTabContainer = React.memo(function (e) {
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a().formatMessage
  var n = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === $$_$$_$$_$$_$$_unrestored_shared_1571_2636_18.j.ReadOnly
  var r = useSelector(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = React.useState(Tab.BASIC)
  var i = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  return (
    <div
      className={classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContainer, e.singleColumn ? $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.singleColumn : $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.doubleColumn, n && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.readonly)}
    >
      <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabNav}>
        <div
          onClick={() => {
            s(Tab.BASIC)
          }}
          className={classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tab, a === Tab.BASIC && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.activeTab)}
        >
          <div>{$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({ id: "Widget.basic" })}</div>
        </div>
        <div
          onClick={() => {
            s(Tab.EXTENSION)
          }}
          className={classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tab, a === Tab.EXTENSION && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.activeTab)}
        >
          <div>{$$_$$_$$_$$_$$_unrestored_shared_1571_2636_710$a$formatMessage({ id: "Widget.extension" })}</div>
        </div>
      </div>
      <div className={$$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContent}>
        <div className={classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContentBox, a !== Tab.BASIC && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.hide)}>
          <BuiltInWidgetList isOT={r} />
        </div>
        <div className={classnames($$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.tabContentBox, a !== Tab.EXTENSION && $$_$$_$$_$$_$$_unrestored_shared_1571_2636_196.hide)}>
          <WidgetScrollExtension singleColumn={e.singleColumn} />
        </div>
      </div>
    </div>
  )
})

var StageToast = React.memo(function () {
  var e = useSelector(function (e) {
    return e.common.stageToast
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var a = useDispatch()
  var s = React.useRef(null)
  React.useEffect(() => {
    if (s.current) {
      clearTimeout(s.current)
    }
    if (e$visible) {
      s.current = window.setTimeout(() => {
        a(Actions.th())
      }, 3000)
    }
  }, [a, e$visible, r])
  return e$visible ? (
    <div className={$$_stage_style$css.toastWrapper}>
      <span className={$$_stage_style$css.toast}>
        {i && <$$_$$_$$_$$_shared_ui_components.j type="icon-alert-success" className={$$_stage_style$css.icon} />}
        {r}
      </span>
    </div>
  ) : null
})
var Cv = window.innerWidth > 1300 ? 144 : 92
var Tv = 92 === Cv

var PreviewArea = React.memo(() => {
  const { formatMessage } = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_710.a()
  var t = useDispatch()
  var n = React.useRef(null)
  var r = React.useRef(null)
  var o = useSelector(function (e) {
    return e.project.playing
  })
  var i = useSelector(function (e) {
    return e.common.stageVisible
  })
  var a = useSelector(function (e) {
    return e.common.isHoverBlockArea
  })
  var s = React.useState(0)
  var c = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = React.useState(false)
  var p = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  React.useEffect(function () {
    var /* [auto-meaningful-name] */n$current = n.current
    var r = function (e) {
      var n
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      var a = e$target.closest("." + $$_$$_$$_$$_$$_unrestored_shared_1571_2636_90.b)
      var s = (null === a || undefined === a ? undefined : a.id) || ""
      var c = null === a || undefined === a ? undefined : a.classList.contains($$_$$_$$_$$_$$_unrestored_shared_1571_2636_90.a)
      if (!c) {
        e.preventDefault()
      }
      if (!a || c || (null === (n = $$_$$_$$_$$_$$_unrestored_shared_1571_2636_9.Bb(s)) || undefined === n ? undefined : n.parentId)) {
        t(Actions.Wg())
      } else {
        t(Actions.Og({
          position: {
            x: e$clientX,
            y: e$clientY
          },
          visible: true,
          widgetId: a.id
        }))
      }
    }
    if (n$current) {
      n$current.addEventListener("contextmenu", r)
    }
    return function () {
      if (n$current) {
        n$current.removeEventListener("contextmenu", r)
      }
    }
  }, [t, n])
  React.useLayoutEffect(function () {
    if (r.current) {
      var e = Math.max(window.innerWidth / 3, 514)
      r.current.style.width = "".concat(e, "px")
      u(e + 1)
      t(Actions.Zi(e - Cv))
      if (n.current) {
        var /* [auto-meaningful-name] */n$current$offsetWidth = n.current.offsetWidth
        var /* [auto-meaningful-name] */n$current$offsetHeight = n.current.offsetHeight
        var a = .8 * n$current$offsetWidth / $$_$$_$$_$$_$$_unrestored_shared_1571_2636_75.e
        var s = (n$current$offsetHeight - 80) / $$_$$_$$_$$_$$_unrestored_shared_1571_2636_75.d
        var c = Math.min(a, s, 1)
        c = Math.max(c, .7)
        t(Actions.Xi(c))
      }
    }
  }, [t])
  React.useLayoutEffect(function () {
    if (r.current && n.current) {
      var e = n.current.offsetWidth + Cv
      e = Math.max(e, 514)
      Animejs.default({
        targets: "#previewAreaWrapper",
        width: e,
        easing: "easeInOutSine",
        duration: 300
      })
    }
  }, [])
  return (
    <div
      id="previewAreaWrapper"
      className={$$_stage_style$css.wrapper}
      ref={r}
      style={{
        marginLeft: i || o ? 0 : -l
      }}
    >
      <section className={$$_stage_style$css.body}>
        <>
          <aside
            style={{
              width: `${Cv}px`
            }}
            className={$$_stage_style$css.side}
          >
            <WidgetTabContainer singleColumn={Tv} />
          </aside>
          <ScreenList />
          <main className={$$_stage_style$css.main} ref={n}>
            <Stage />
            <StageToast />
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_1512.a />
          </main>
          {!o && (
            <$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a
              placement="bottom"
              title={formatMessage({
                id: i ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
              })}
              trigger={["hover", "click"]}
            >
              <div
                className={classnames($$_stage_style$css.foldBtn, i ? $$_stage_style$css.hide : $$_stage_style$css.show, (m || a) && $$_stage_style$css.visible)}
                onClick={() => {
                  t(Actions.Yi(!i))
                }}
                onMouseEnter={() => g(true)}
                onMouseLeave={() => g(false)}
              >
                <$$_$$_$$_$$_shared_ui_components.j type="icon-double-arrow" />
              </div>
            </$$_$$_$$_$$_$$_unrestored_shared_1571_2636_748_index.a>
          )}
        </>
      </section>
      <Rn />
      {!o && (
        <ActivePreview
          onDrag={(e) => {
            t(Actions.Zi(e - Cv))
          }}
          onDragEnd={(e) => {
            u(e + 1)
            t(Actions.Zi(e - Cv))
          }}
          onEnter={() => t(Actions.ui(true))}
          onLeave={() => t(Actions.ui(false))}
          previewAreaRef={r}
        />
      )}
    </div>
  )
})

export { Cv }
export { PreviewArea as Sv }
