/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-9
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$_374 from "./374"
import * as /* [auto-meaningful-name] */$_503 from "./503"
import * as /* [auto-meaningful-name] */$$_37_index from "../37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_28_index from "../28/index"
var /* [auto-meaningful-name] */$_374$FieldTextInput$prototype$show_editor = $_374.FieldTextInput.prototype.show_editor
$_374.FieldTextInput.prototype.show_editor = function () {
  var /* [auto-meaningful-name] */this$source_block
  var t = this
  var n = $_374$FieldTextInput$prototype$show_editor.call(this)
  if ("text_rich_text" === (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.type)) {
    $$_37_index.a($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.Bh({
      content: this.get_value(),
      onConfirm: function (e) {
        t.set_value($$_28_index.i(e))
      }
    }))
    $$_17_index.Blink.widget_div.hide()
  }
  return n
}
$_374.FieldTextInput.prototype.get_display_text = function () {
  var /* [auto-meaningful-name] */this$source_block
  if ("text_rich_text" === (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.type)) {
    var t = this.get_value()
    var n = document.createElement("div")
    n.innerHTML = t
    var /* [auto-meaningful-name] */n$innerText = n.innerText
    return $$_28_index.i(n$innerText)
  }
  return $_503.Field.prototype.get_display_text.call(this)
}
