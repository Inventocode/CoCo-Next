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
import * as /* [auto-meaningful-name] */$_94_index from "../../../../../unrestored/shared/1571/2636/94/index"
import /* [auto-meaningful-name] */$_196 from "../../../../../unrestored/shared/1571/2636/196"
import /* [auto-meaningful-name] */$_279 from "../../../../../unrestored/shared/1571/2636/279"
import * as /* [auto-meaningful-name] */$_1512 from "../../../../../unrestored/shared/1571/2636/1512"
import * as /* [auto-meaningful-name] */$_238 from "../../../../../unrestored/shared/1571/2636/238"
import * as kn from "../../../../../unrestored/shared/1571/2636/75"
import * as wn from "../../../../../unrestored/shared/1571/2636/90"
import * as /* [auto-meaningful-name] */Animejs from "animejs"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../shared/widget/custom/type"
import * as Et from "../../../../../unrestored/shared/1571/2636/9"
import * as K from "../../../../../unrestored/shared/1571/2636/18"
import * as Message from "../../../events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../../unrestored/shared/1571/2636/13/index"
import N from "../../../../../unrestored/shared/1571/2636/8"
import * as /* [auto-meaningful-name] */$_710_index from "../../../../../unrestored/shared/1571/2636/710/index"
import * as /* [auto-meaningful-name] */$_748_index from "../../../../../unrestored/shared/1571/2636/748/index"
import * as /* [auto-meaningful-name] */$_10_index from "../../../../../unrestored/shared/1571/2636/10/index"
import * as O from "../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "../../../../../unrestored/shared/1571/2636/16/index"
import * as /* [auto-meaningful-name] */$_1514 from "../../../../../unrestored/shared/1571/2636/1514"
import /* [auto-meaningful-name] */_$_ from "../../../../../unrestored/shared/1571/2636/1514"

var WidgetMallButton = React.memo(function (e) {
  const { formatMessage } = $_710_index.a()
  var n = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var r = $_16_index.d()
  return (
    <$_13_index.d
      className={$_196.widgetMallBtn}
      onClick={() => {
        const e = () => {
          r(Message.gj(true))
        }
        if (n) {
          e()
        } else {
          r(Message.Ch(e))
        }
      }}
    >
      <$_94_index.a type="icon-shop" className={$_196.shopIcon} />
      {!e.singleColumn && <span>{formatMessage({ id: "Widget.widgetMall" })}</span>}
    </$_13_index.d>
  )
})

var WidgetScrollExtension = React.memo(function (e) {
  var t = $_16_index.e(function (e) {
    return e.common.myExtensionWidgets
  })
  var n = $_16_index.e(function (e) {
    return e.common.userInfo
  })
  var r = $_16_index.d()
  var o = []
  var i = []
  const a = (e) => ({
    icon: e.icon,
    title: e.widgetName,
    previewAreaWidgetTitle: "",
    type: $$_$$_$$_$$_src_shared_widget_custom_type.c(e.type, true),
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
  const { formatMessage } = $_710_index.a()
  var c = React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React.useState(true)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = $_238.c()
  var y = Et.Eb(Et.j.EXTENSION).filter(function (e) {
    return !$$_$$_$$_$$_src_shared_widget_custom_type.e(e.type)
  })
  React.useEffect(() => {
    const e = (() => {
      const e = O.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return Message.Nf(r, Message.eg())
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
      r(Message.Sh([]))
    }
  }, [r, n])
  React.useEffect(() => {
    if (0 === y.length && 0 === o.length && 0 === i.length) {
      v(true)
    } else {
      v(false)
    }
  }, [y, o, i])
  return (
    <>
      <div className={$_196.scrollExtension}>
        {!u && g && (
          <div className={$_196.noExtensionWidgets}>
            <div className={$_196.noExtensionWidgetsWrapper}>
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
            <WidgetCategoryItem key={b} configList={y} title="ExtensionWidget.category.extension" />
          </>
        )}
        {u && (
          <div className={$_196.loading} style={{ height: "100%" }}>
            <img src={_$_} alt="loading" />
          </div>
        )}
      </div>
      <div className={$_196.widgetMallBtnContainer}>
        {!g && <WidgetMallButton singleColumn={e.singleColumn} />}
      </div>
    </>
  )
})

enum Tab {
  BASIC = "BASIC",
  EXTENSION = "EXTENSION"
}

var WidgetTabContainer = React.memo(function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.e(function (e) {
    return e.uiConfig.widgetEditor
  }) === K.j.ReadOnly
  var r = $_16_index.e(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = React.useState(Tab.BASIC)
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  return (
    <div
      className={N($_196.tabContainer, e.singleColumn ? $_196.singleColumn : $_196.doubleColumn, n && $_196.readonly)}
    >
      <div className={$_196.tabNav}>
        <div
          onClick={() => {
            s(Tab.BASIC)
          }}
          className={N($_196.tab, a === Tab.BASIC && $_196.activeTab)}
        >
          <div>{$_710_index$a$formatMessage({ id: "Widget.basic" })}</div>
        </div>
        <div
          onClick={() => {
            s(Tab.EXTENSION)
          }}
          className={N($_196.tab, a === Tab.EXTENSION && $_196.activeTab)}
        >
          <div>{$_710_index$a$formatMessage({ id: "Widget.extension" })}</div>
        </div>
      </div>
      <div className={$_196.tabContent}>
        <div className={N($_196.tabContentBox, a !== Tab.BASIC && $_196.hide)}>
          <BuiltInWidgetList isOT={r} />
        </div>
        <div className={N($_196.tabContentBox, a !== Tab.EXTENSION && $_196.hide)}>
          <WidgetScrollExtension singleColumn={e.singleColumn} />
        </div>
      </div>
    </div>
  )
})

var StageToast = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.common.stageToast
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$toast = e.toast
  var r = undefined === e$toast ? "" : e$toast
  var /* [auto-meaningful-name] */e$showIcon = e.showIcon
  var i = undefined !== e$showIcon && e$showIcon
  var a = $_16_index.d()
  var s = React.useRef(null)
  React.useEffect(() => {
    if (s.current) {
      clearTimeout(s.current)
    }
    if (e$visible) {
      s.current = window.setTimeout(() => {
        a(Message.th())
      }, 3000)
    }
  }, [a, e$visible, r])
  return e$visible ? (
    <div className={$_279.toastWrapper}>
      <span className={$_279.toast}>
        {i && <$_13_index.j type="icon-alert-success" className={$_279.icon} />}
        {r}
      </span>
    </div>
  ) : null
})
var Cv = window.innerWidth > 1300 ? 144 : 92
var Tv = 92 === Cv

var PreviewArea = React.memo(() => {
  const { formatMessage } = $_710_index.a()
  var t = $_16_index.d()
  var n = React.useRef(null)
  var r = React.useRef(null)
  var o = $_16_index.e(function (e) {
    return e.project.playing
  })
  var i = $_16_index.e(function (e) {
    return e.common.stageVisible
  })
  var a = $_16_index.e(function (e) {
    return e.common.isHoverBlockArea
  })
  var s = React.useState(0)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = React.useState(false)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  React.useEffect(function () {
    var /* [auto-meaningful-name] */n$current = n.current
    var r = function (e) {
      var n
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */e$clientX = e.clientX
      var /* [auto-meaningful-name] */e$clientY = e.clientY
      var a = e$target.closest("." + wn.b)
      var s = (null === a || undefined === a ? undefined : a.id) || ""
      var c = null === a || undefined === a ? undefined : a.classList.contains(wn.a)
      if (!c) {
        e.preventDefault()
      }
      if (!a || c || (null === (n = Et.Bb(s)) || undefined === n ? undefined : n.parentId)) {
        t(Message.Wg())
      } else {
        t(Message.Og({
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
      t(Message.Zi(e - Cv))
      if (n.current) {
        var /* [auto-meaningful-name] */n$current$offsetWidth = n.current.offsetWidth
        var /* [auto-meaningful-name] */n$current$offsetHeight = n.current.offsetHeight
        var a = .8 * n$current$offsetWidth / kn.e
        var s = (n$current$offsetHeight - 80) / kn.d
        var c = Math.min(a, s, 1)
        c = Math.max(c, .7)
        t(Message.Xi(c))
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
      className={$_279.wrapper}
      ref={r}
      style={{
        marginLeft: i || o ? 0 : -l
      }}
    >
      <section className={$_279.body}>
        <>
          <aside
            style={{
              width: `${Cv}px`
            }}
            className={$_279.side}
          >
            <WidgetTabContainer singleColumn={Tv} />
          </aside>
          <ScreenList />
          <main className={$_279.main} ref={n}>
            <Stage />
            <StageToast />
            <$_1512.a />
          </main>
          {!o && (
            <$_748_index.a
              placement="bottom"
              title={formatMessage({
                id: i ? "HeaderDropdown.hideWidgetAndStage" : "HeaderDropdown.showWidgetAndStage"
              })}
              trigger={["hover", "click"]}
            >
              <div
                className={N($_279.foldBtn, i ? $_279.hide : $_279.show, (m || a) && $_279.visible)}
                onClick={() => {
                  t(Message.Yi(!i))
                }}
                onMouseEnter={() => g(true)}
                onMouseLeave={() => g(false)}
              >
                <$_13_index.j type="icon-double-arrow" />
              </div>
            </$_748_index.a>
          )}
        </>
      </section>
      <Rn />
      {!o && (
        <ActivePreview
          onDrag={(e) => {
            t(Message.Zi(e - Cv))
          }}
          onDragEnd={(e) => {
            u(e + 1)
            t(Message.Zi(e - Cv))
          }}
          onEnter={() => t(Message.ui(true))}
          onLeave={() => t(Message.ui(false))}
          previewAreaRef={r}
        />
      )}
    </div>
  )
})

export { Cv }
export { PreviewArea as Sv }
