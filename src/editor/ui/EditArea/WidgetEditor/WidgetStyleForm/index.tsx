/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-142
 */

import { FC } from "../../../../../../unrestored/shared/1571/2636/index__part-141"
import * as /* [auto-meaningful-name] */Module_33 from /* 33 */"../../../../../../unrestored/shared/1571/2636/33"
import * as /* [auto-meaningful-name] */Module_238 from /* 238 */"../../../../../../unrestored/shared/1571/2636/238"
import * as LoadCustomWidget from "../../../../../shared/widget/custom/load"
import * as CommonActions from "../../../../redux/common/actions"
import * as Components from "../../../../../shared/ui/components/index"
import classNames from "classnames"
import { useDispatch } from "react-redux"
import React, { memo } from "react"
import styles from "../../../../../../unrestored/shared/1571/2636/1057"

export const WidgetStyleForm = memo(function (e) {
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$editConfig = e.editConfig
  var /* [auto-meaningful-name] */e$widgetIcon = e.widgetIcon
  var /* [auto-meaningful-name] */e$widgetType = e.widgetType
  var i = Module_33.Cb(e$widgetId)
  var a = e$editConfig.some(function (e) {
    return !Array.isArray(e) && "HelpUrl" === e.type
  })
  var s = Module_238.b()
  var c = useDispatch()
  if (!i || !i.type) {
    return null
  }
  function l(e) {
    var t = i
    return e in t ? t[e] : t.attributes && e in t.attributes ? t.attributes[e] : undefined
  }
  var u = function (e, n) {
    var /* [auto-meaningful-name] */e$type = e.type
    var /* [auto-meaningful-name] */e$key = e.key
    var s = FC[e$type]
    var u = "".concat(e$widgetId, "-").concat(e$type, "-").concat(e$key || "")
    if (s) {
      return React.createElement(s, {
        key: u,
        widgetId: e$widgetId,
        keyName: e$key,
        icon: e$widgetIcon,
        onChange: function (e, n) {
          !function (e, n, r) {
            var i = true
            if (LoadCustomWidget.q(e$widgetType)) {
              if (!(Module_33.k.includes(e) && Module_33.l.includes(r))) {
                i = false
              }
            }
            c(CommonActions.Lg(e$widgetId, e, n, undefined, undefined, undefined, i))
          }(e, n, e$type)
        },
        getValue: l,
        formConfig: e,
        renderInline: n
      })
    }
  }
  return <Components.h
    className={classNames(styles.formGroup, a && styles.formGroupHasHelpUrl)}
    data-updated-at={s}
  >
    {<div>
      {function e(n, r) {
        return n.map(function (n, o) {
          return Array.isArray(n) ? <Components.u
            key={"".concat(e$widgetId, "-").concat(o)}
            className={styles.formItemWrapper}
            align="middle"
            justify="space-between"
          >
            {e(n, true)}
          </Components.u> : u(n, r)
        })
      }(e$editConfig, false)}
    </div>}
  </Components.h>
})
