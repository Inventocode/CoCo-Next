/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-7
 */

"use strict"

import { "511__part-6__st" as st } from "./index__part-6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_189 from "../../../../shared/1531/2584/189"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index from "../../../../shared/1531/2584/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_15 from "../../../../shared/1531/2584/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_index from "../../../../shared/1531/2584/21/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_9 from "../../../../shared/1531/2584/9"
var lt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n);
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
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
    key: "message",
    value: function (t, e, n, r, i) {
      var o = this
      this.title = t
      this.text = e
      this.image = r
      st.setStyle(this.style)
      st.setThemeColor(this.themeColor)
      var a = $$_$$_$$_$$_shared_1531_2584_48_index.a().getState().imageFileMap.get(r)
      var s = $$_$$_$$_$$_shared_1531_2584_15.U(r) ? r : a ? $$_$$_$$_$$_shared_1531_2584_9.lb(a) : ""
      var u = function (t) {
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onClickButton", o.__widgetId, t)
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
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onSelectOption", o.__widgetId, t)
      }, function () {
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onCancelSelection", o.__widgetId)
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
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onFinishInput", i.__widgetId, t)
      }, function () {
        $$_$$_$$_$$_shared_1531_2584_21_index.emitWidgetEvent($$_$$_$$_$$_shared_1531_2584_189.a, "onCancelInput", i.__widgetId)
      })
    }
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { lt as "511__part-7__lt" }
