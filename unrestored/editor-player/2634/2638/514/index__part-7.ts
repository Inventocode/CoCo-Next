/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-7
 */

"use strict"

import { st } from "./index__part-6"
import * as /* [auto-meaningful-name] */Module_189 from /* 189 */"../../../../shared/1571/2636/189"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../../../../shared/1571/2636/9"
var lt = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var r
    Module_27.a(this, n);
    (r = e.call(this, t)).style = undefined
    r.themeColor = undefined
    r.title = undefined
    r.text = undefined
    r.image = undefined
    r.selectedOption = undefined
    r.inputText = undefined
    r.style = t.style
    r.themeColor = t.themeColor
    r.title = t.title
    r.text = t.text
    r.image = t.image
    r.selectedOption = t.selectedOption
    r.inputText = t.inputText
    return r
  }
  Module_39.a(n, [
    {
      key: "message",
      value: function (t, e, n, r, i) {
        var o = this
        this.title = t
        this.text = e
        this.image = r
        st.setStyle(this.style)
        st.setThemeColor(this.themeColor)
        var a = Module_48.a().getState().imageFileMap.get(r)
        var s = Src_shared_tools_index.U(r) ? r : a ? Module_9.lb(a) : ""
        var u = function (t) {
          Module_20.emitWidgetEvent(Module_189.a, "onClickButton", o.__widgetId, t)
        }
        st.message({
          title: t,
          text: e,
          confirmButtonText: String(n),
          image: s || "",
          showCancelButton: i
        }, u, u)
      }
    }, {
      key: "select",
      value: function (t, e, n, r, i) {
        var o = this
        this.title = t
        this.text = e
        st.setStyle(this.style)
        st.setThemeColor(this.themeColor)
        st.select({
          title: t,
          text: e,
          option1: String(n),
          option2: String(r),
          showCancelButton: i
        }, function (t) {
          o.selectedOption = t
          Module_20.emitWidgetEvent(Module_189.a, "onSelectOption", o.__widgetId, t)
        }, function () {
          Module_20.emitWidgetEvent(Module_189.a, "onCancelSelection", o.__widgetId)
        })
      }
    }, {
      key: "prompt",
      value: function (t, e, n, r) {
        var i = this
        this.title = t
        this.text = e
        st.setStyle(this.style)
        st.setThemeColor(this.themeColor)
        st.prompt({
          title: t,
          text: e,
          placeholder: String(n),
          showCancelButton: r
        }, function (t) {
          i.inputText = t
          Module_20.emitWidgetEvent(Module_189.a, "onFinishInput", i.__widgetId, t)
        }, function () {
          Module_20.emitWidgetEvent(Module_189.a, "onCancelInput", i.__widgetId)
        })
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { lt }
