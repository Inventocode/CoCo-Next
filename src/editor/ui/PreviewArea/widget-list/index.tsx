/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-87
 */

import * as React from "react"

import { we as Empty } from "../../../../../unrestored/shared/1571/2636/index__part-6"
import { WidgetCategoryItem, BuiltInWidgetList } from "./item"
import * as /* [auto-meaningful-name] */Shared_ui_components_Iconfont_index from "../../../../shared/ui/components/Iconfont/index"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_196 from "../../../../../unrestored/shared/1571/2636/196"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../unrestored/shared/1571/2636/238"
import * as CustomWidgetType from "../../../../shared/widget/custom/type"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../../unrestored/shared/1571/2636/9"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../unrestored/shared/1571/2636/18"
import * as CommonActions from "../../../redux/common/actions"
import * as /* [auto-meaningful-name] */Shared_ui_components from "../../../../shared/ui/components"
import classnames from "classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"../../../../../unrestored/shared/1571/2636/710"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"../../../../../unrestored/shared/1571/2636/10/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../../unrestored/shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import { useDispatch, useSelector } from "react-redux"
import /* [auto-meaningful-name] */Unrestored_shared_1571_2636_1514 from "../../../../../unrestored/shared/1571/2636/1514"

var WidgetMallButton = React.memo(function (e) {
  const { formatMessage } = Module_710.a()
  var n = useSelector(function (e) {
    return e.common.userInfo
  })
  var r = useDispatch()
  return (
    <Shared_ui_components.d
      className={Unrestored_shared_1571_2636_196.widgetMallBtn}
      onClick={() => {
        const e = () => {
          r(CommonActions.gj(true))
        }
        if (n) {
          e()
        } else {
          r(CommonActions.Ch(e))
        }
      }}
    >
      <Shared_ui_components_Iconfont_index.a type="icon-shop" className={Unrestored_shared_1571_2636_196.shopIcon} />
      {!e.singleColumn && <span>{formatMessage({ id: "Widget.widgetMall" })}</span>}
    </Shared_ui_components.d>
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
  const { formatMessage } = Module_710.a()
  var c = React.useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React.useState(true)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = Module_238.c()
  const unsafeExtensions = Module_9.Eb(Module_9.j.EXTENSION).filter(function (e) {
    return !CustomWidgetType.isSafeExtensions(e.type)
  })
  React.useEffect(() => {
    const e = (() => {
      const e = Module_7.a(RegeneratorRuntime.mark(function e() {
        return RegeneratorRuntime.wrap(function (e) {
          for (;;) {
            switch (e.prev = e.next) {
              case 0:
                e.next = 2
                return CommonActions.Nf(r, CommonActions.eg())
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
      r(CommonActions.Sh([]))
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
    <div className={Unrestored_shared_1571_2636_196.scrollExtension}>
      {!u && g && (
        <div className={Unrestored_shared_1571_2636_196.noExtensionWidgets}>
          <div className={Unrestored_shared_1571_2636_196.noExtensionWidgetsWrapper}>
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
        <div className={Unrestored_shared_1571_2636_196.loading} style={{ height: "100%" }}>
          <img src={Unrestored_shared_1571_2636_1514} alt="loading" />
        </div>
      )}
    </div>
    <div className={Unrestored_shared_1571_2636_196.widgetMallBtnContainer}>
      {!g && <WidgetMallButton singleColumn={e.singleColumn} />}
    </div>
  </>
})

enum ETab {
  BASIC = "BASIC",
  EXTENSION = "EXTENSION"
}

export const WidgetTabContainer = React.memo(function (e) {
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var n = useSelector(function (e) {
    return e.uiConfig.widgetEditor
  }) === Module_18.j.ReadOnly
  var r = useSelector(function (e) {
    return !!e.oTState.collWorkId
  })
  var o = React.useState(ETab.BASIC)
  var i = Module_10.a(o, 2)
  var a = i[0]
  var s = i[1]
  return (
    <div
      className={classnames(Unrestored_shared_1571_2636_196.tabContainer, e.singleColumn ? Unrestored_shared_1571_2636_196.singleColumn : Unrestored_shared_1571_2636_196.doubleColumn, n && Unrestored_shared_1571_2636_196.readonly)}
    >
      <div className={Unrestored_shared_1571_2636_196.tabNav}>
        <div
          onClick={() => {
            s(ETab.BASIC)
          }}
          className={classnames(Unrestored_shared_1571_2636_196.tab, a === ETab.BASIC && Unrestored_shared_1571_2636_196.activeTab)}
        >
          <div>{Module_710$a$formatMessage({ id: "Widget.basic" })}</div>
        </div>
        <div
          onClick={() => {
            s(ETab.EXTENSION)
          }}
          className={classnames(Unrestored_shared_1571_2636_196.tab, a === ETab.EXTENSION && Unrestored_shared_1571_2636_196.activeTab)}
        >
          <div>{Module_710$a$formatMessage({ id: "Widget.extension" })}</div>
        </div>
      </div>
      <div className={Unrestored_shared_1571_2636_196.tabContent}>
        <div className={classnames(Unrestored_shared_1571_2636_196.tabContentBox, a !== ETab.BASIC && Unrestored_shared_1571_2636_196.hide)}>
          <BuiltInWidgetList isOT={r} />
        </div>
        <div className={classnames(Unrestored_shared_1571_2636_196.tabContentBox, a !== ETab.EXTENSION && Unrestored_shared_1571_2636_196.hide)}>
          <WidgetScrollExtension singleColumn={e.singleColumn} />
        </div>
      </div>
    </div>
  )
})
