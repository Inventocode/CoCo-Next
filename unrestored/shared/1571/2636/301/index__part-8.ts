/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */$_327 from "./327"
import * as /* [auto-meaningful-name] */$$_46_index from "../46/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index from "../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */$$_135 from "../135"
var /* [auto-meaningful-name] */$_327$FieldNumber$prototype$show_editor = $_327.FieldNumber.prototype.show_editor
$_327.FieldNumber.prototype.show_editor = function () {
  var e = this
  var t = $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.dom.create_dom("input", "blocklyHtmlInput")
  if (!this.source_block) {
    return t
  }
  $_327$FieldNumber$prototype$show_editor.call(this)
  var n = this.get_absolute_xy()
  var r = this.source_block.is_shadow() && this.source_block.parent_block || this.source_block
  var o = r.workspace.get_scale()
  var /* [auto-meaningful-name] */this$get_size$height = this.get_size().height
  var a = r.is_wrap_shape() ? 42 : r.height + 2
  var s = n[1] + this$get_size$height * o / 2 + a * o / 2
  var c = 0
  var l = 100
  var u = ""
  var d = ""
  if ("audio_set_volume_or_rate" === r.type) {
    var p = r.get_field_value("OP")
    c = "SOUND_VOLUME" === p ? $$_135.g : $$_135.e
    l = "SOUND_VOLUME" === p ? $$_135.f : $$_135.d
    u = "SOUND_VOLUME" === p ? "小" : "慢"
    d = "SOUND_VOLUME" === p ? "大" : "快"
    this.set_constraints(c, l, 1)
    var f = {
      payload: {
        value: this.get_value(),
        left: n[0],
        top: s,
        min: c,
        max: l,
        minText: u,
        maxText: d,
        setValue: function (t) {
          e.set_value(t)
        }
      },
      type: "SHOW_BLOCKS_SLIDER"
    }
    $$_46_index.c().dispatchAction(f)
  }
  return t
}
var /* [auto-meaningful-name] */$_327$FieldNumber$prototype$set_value = $_327.FieldNumber.prototype.set_value
$_327.FieldNumber.prototype.set_value = function (e) {
  $_327$FieldNumber$prototype$set_value.call(this, e)
  if ($$_46_index.c().getSliderVisible()) {
    if (!e || isNaN(Number(e))) {
      return
    }
    $$_46_index.c().dispatchAction({
      payload: {
        value: e
      },
      type: "UPDATE_BLOCKS_SLIDER_VALUE"
    })
  }
}
