/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-7
 */

"use strict"

import { st } from "./index__part-6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_189 from "../../../../shared/1571/2636/189"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_index from "../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_tools_index from "../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_20_index from "../../../../shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_9 from "../../../../shared/1571/2636/9"
var lt = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n);
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
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
    {
      key: "message",
      value: function (t, e, n, r, i) {
        var o = this
        this.title = t
        this.text = e
        this.image = r
        st.setStyle(this.style)
        st.setThemeColor(this.themeColor)
        var a = $$_$$_$$_$$_shared_1571_2636_48_index.a().getState().imageFileMap.get(r)
        var s = $$_$$_$$_$$_$$_src_shared_tools_index.U(r) ? r : a ? $$_$$_$$_$$_shared_1571_2636_9.lb(a) : ""
        var u = function (t) {
          $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_189.a, "onClickButton", o.__widgetId, t)
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
          $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_189.a, "onSelectOption", o.__widgetId, t)
        }, function () {
          $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_189.a, "onCancelSelection", o.__widgetId)
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
          $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_189.a, "onFinishInput", i.__widgetId, t)
        }, function () {
          $$_$$_$$_$$_shared_1571_2636_20_index.emitWidgetEvent($$_$$_$$_$$_shared_1571_2636_189.a, "onCancelInput", i.__widgetId)
        })
      }
    }
  ])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { lt }
