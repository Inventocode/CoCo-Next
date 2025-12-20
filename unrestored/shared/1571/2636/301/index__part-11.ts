/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-11
 */

"use strict"

import { r, o, i, a, s, c, l, u, d, p, f } from "../../../../../src/editor/block/generate"
import { be } from "../../../../../src/editor/block/generate/widget"
import { Ne } from "./index__part-7"
var We
import * as /* [auto-meaningful-name] */$$_118_index from "../118/index"
import * as /* [auto-meaningful-name] */$$_46_index from "../46/index"
import * as g from "../9"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as /* [auto-meaningful-name] */$$_20_index from "../20/index"
function He() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DOC_KEYS_WRAPPER", "DOC_KEYS")
      if (n) {
        var r
        var o = $$_46_index.c().getLocalDocumentFieldList(null === (r = t.get_new_value()) || undefined === r ? undefined : r.toString(), n)
        n.set_value(o[0].value)
      }
    }
  })
}
function Ve() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DOC_KEYS_WRAPPER", "DOC_KEYS")
      if (n) {
        var r
        var o = $$_46_index.c().getCloudDocumentFieldList(null === (r = t.get_new_value()) || undefined === r ? undefined : r.toString(), n)
        n.set_value(o[0].value)
      }
    }
  })
}
function ze() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("INPUT_COLUMN", "COLUMNS")
      var r = e.get_shadow_field("UPDATE_COLUMN_VALUE", "COLUMNS")
      if (n) {
        var o
        var i = $$_46_index.c().getCloudDBColumnList(null === (o = t.get_new_value()) || undefined === o ? undefined : o.toString(), n)
        n.set_value(i[0].value)
      }
      if (r) {
        var a
        var s = $$_46_index.c().getCloudDBColumnList(null === (a = t.get_new_value()) || undefined === a ? undefined : a.toString(), r)
        r.set_value(s[0].value)
      }
    }
  })
}
function Ye() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("COLUMN_WRAPPER", "COLUMN")
      if (n) {
        var r
        var o = $$_46_index.c().getTableDataColumnList(null === (r = t.get_new_value()) || undefined === r ? undefined : r.toString())
        n.set_value(o[0].value)
      }
    }
  })
}
function Ke() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = $$_20_index.getActorActionInputField(e)
      if (n) {
        var r = $$_46_index.c().getActorActionList(t.get_new_value())[0].value || g.h
        if (!(null === n || undefined === n)) {
          n.set_value(r)
        }
      }
    }
  })
}
function qe() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("DICT_KEYS_WRAPPER", "KEYS")
      if (n) {
        var r = $$_46_index.c().getCloudDictKeyList(t.get_new_value())
        n.set_value(r[0].value)
      }
    }
  })
}
function Xe() {
  var e = this
  this.set_on_block_change(function (t) {
    if (!$$_17_index.Blink.events.is_undoing() && t.type === $$_17_index.I.BlockEventType.CHANGE && "WIDGET_ID" === t.get_name()) {
      var n = e.get_shadow_field("INPUT_COLUMN", "COLUMNS")
      if (n) {
        var r = $$_46_index.c().getCloudTableColumnList(t.get_new_value())
        n.set_value(r[0].value)
      }
    }
  })
}
function Qe() {
  $$_17_index.Blink.extensions.register(We.UPDATE_KEY_AFTER_SELECTING_DOC, He)
  $$_17_index.Blink.extensions.register(We.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC, Ve)
  $$_17_index.Blink.extensions.register(We.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB, ze)
  $$_17_index.Blink.extensions.register(We.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA, Ye)
  $$_17_index.Blink.extensions.register(We.UPDATE_ACTION_AFTER_SELECT_ACTOR, Ke)
  $$_17_index.Blink.extensions.register(We.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT, qe)
  $$_17_index.Blink.extensions.register(We.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE, Xe)
  $$_17_index.Blink.registry.field.register($$_118_index.a.field_type, $$_118_index.a)
  $$_17_index.Blink.registry.field.register(Ne.field_type, Ne)
  $$_46_index.e.apply(undefined, [$$_17_index.Blink, $$_118_index.a, s, c, o, i, u, r, a, d, l, p, f].concat($$_25_index.a(g.M())))
  var e = $$_46_index.a()
  $$_17_index.Blink.define_blocks_with_json_array(e)
}
function Ze() {
  var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : "zh-CN"
  return be[e]
}
!function (e) {
  e.UPDATE_KEY_AFTER_SELECTING_DOC = "UPDATE_KEY_AFTER_SELECTING_DOC"
  e.UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC = "UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC"
  e.UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB = "UPDATE_COLUMN_AFTER_SELECT_CLOUD_DB"
  e.UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA = "UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA"
  e.UPDATE_ACTION_AFTER_SELECT_ACTOR = "UPDATE_ACTION_AFTER_SELECT_ACTOR"
  e.UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT = "UPDATE_KEYS_AFTER_SELECT_CLOUD_DICT"
  e.UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE = "UPDATE_COLUMNS_AFTER_SELECT_CLOUD_TABLE"
}(We || (We = {}))
export { Qe }
export { Ze }
