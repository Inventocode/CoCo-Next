/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-10
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/editor/events/main/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_46_index from "../46/index"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$_735 from "./735"
$_735.FieldColour.prototype.show_editor = function () {
  var /* [auto-meaningful-name] */this$source_block
  var t = this
  $$_17_index.Blink.widget_div.hide()
  this.widget_div.show(this, this.widget_dispose.bind(this))
  var n = this.get_absolute_xy()
  var r = (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.workspace.get_scale()) || 1
  var o = this.get_value()
  var /* [auto-meaningful-name] */window$innerWidth = window.innerWidth
  var /* [auto-meaningful-name] */window$innerHeight = window.innerHeight
  var s = 40 * r
  var c = -10 * r
  if (n[1] + s + 322 > window$innerHeight) {
    n[1] -= 362
  }
  if (n[0] + c + 288 > window$innerWidth) {
    n[0] -= 288
  }
  var l = n[1] + s
  var u = n[0] + c
  var d = $$_$$_$$_$$_$$_src_shared_events_messagesWrapper.hj({
    value: o,
    selectValue: function (e) {
      var /* [auto-meaningful-name] */t$border_rect
      if (!(null === (t$border_rect = t.border_rect) || undefined === t$border_rect)) {
        t$border_rect.setAttribute("fill", e)
      }
    },
    setValue: function (e) {
      t.set_value($$_15.nb(e))
    },
    top: l,
    left: u
  })
  $$_46_index.c().dispatchAction(d)
}
