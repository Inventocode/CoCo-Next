/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-78
 */

"use strict"

import { Yh } from "./index__part-68"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_305 from "./305"
var vg = [
  {
    type: "WarningFields",
    url: $_305.e,
    label: "云字典"
  }, {
    type: "WidgetTitle"
  }, {
    type: "LocalStorageFields"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-storage"
  }
]
var /* [auto-meaningful-name] */BKY_BLOCK_CLOUD_VARIABLE_ICON = "%{BKY_BLOCK_CLOUD_VARIABLE_ICON}"
var Eg = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.l,
  category: {
    iconId: $_305.c,
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.l
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var /* [auto-meaningful-name] */$_46_index$c$getCloudDocumentFieldListE0$value = $_46_index.c().getCloudDocumentFieldList(e)[0].value
    var r = "<field name=\"DOC_KEYS\">".concat($_46_index$c$getCloudDocumentFieldListE0$value, "</field>")
    return ["<block type=\"cloud_document_on_error\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), "<block type=\"cloud_document_set_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"cloud_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>    \n      <value name=\"VALUE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">0</field>\n        </shadow>\n      </value>\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_SET_ITEM, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloud_document_remove_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"cloud_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_REMOVED_ITEM, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloud_document_clear_all_field_items\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_CLEAR, "</field>\n        </shadow>\n      </value>\n    </block>"), rp.d, "<block type=\"cloud_document_get_field_item\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"cloud_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_GET_ITEM, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloud_document_get_field_key_count\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_GET_ITEM_COUNT, "</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"cloud_document_get_all_field_keys\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_GET_ALL_ITEM, "</field>\n        </shadow>\n      </value>     \n    </block>"), "<block type=\"cloud_document_check_if_field_key_exists\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"DOC_KEYS_WRAPPER\">\n        <shadow type=\"cloud_document_all_key_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"MESSAGE\">\n        <shadow type=\"text\">\n          <field name=\"TEXT\">").concat($_17_index.Blink.Msg.CLOUD_STORAGE_CANNOT_ASSERT_KEY, "</field>\n        </shadow>\n      </value>   \n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      var t = function (t, n) {
        return e.valueToCode(t, n, "MESSAGE", e.ORDER_FUNCTION_CALL) || ""
      }
      e.insertBlockSnippetGenerator("cloud_document_all_key_field_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "DOC_KEYS") || ""
        return o === Et.h ? "" : ep.o(o)
      })
      e.insertBlockSnippetGenerator("cloud_document_error_type", function () {
        return "type"
      })
      e.insertBlockSnippetGenerator("cloud_document_error_message", function () {
        return "message"
      })
      e.insertBlockSnippetGenerator("cloud_document_on_error", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = Jd.Z(o || "")
        var a = e.statementToCode(t, n, "DO")
        var s = e.valueToCode(t, n, "TYPE", e.ORDER_ATOMIC)
        var c = e.valueToCode(t, n, "MESSAGE", e.ORDER_ATOMIC)
        return a && i ? ep.n("argsOnCloudDocumentError", [ep.o(i)], a, [s, c]) : ""
      })
      e.insertBlockSnippetGenerator("cloud_document_set_field_item", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = e.valueToCode(n, r, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        var c = e.valueToCode(n, r, "VALUE", e.ORDER_FUNCTION_CALL) || ""
        var l = t(n, r)
        return a && s ? ep.l(ep.j("setCloudDocumentFieldItem", [ep.o(a), s, c, l]), o, e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloud_document_remove_field_item", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = e.valueToCode(n, r, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        var c = t(n, r)
        return a && s ? ep.l(ep.j("removeCloudDocumentFieldItem", [ep.o(a), s, c]), o, e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloud_document_clear_all_field_items", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = t(n, r)
        return a ? ep.l(ep.j("clearCloudDocumentAllFieldItems", [ep.o(a), s]), o, e, true) : ""
      })
      e.insertBlockSnippetGenerator("cloud_document_get_field_item", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = e.valueToCode(n, r, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL)
        var c = t(n, r)
        return a && s ? ep.l(ep.r("getCloudDocumentFieldItem", [ep.o(a), s, c]), o, e, true, true) : "''"
      })
      e.insertBlockSnippetGenerator("cloud_document_get_all_field_keys", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = t(n, r)
        return a ? ep.l(ep.r("getCloudDocumentAllFieldKeys", [ep.o(a), s]), o, e, true, true) : "''"
      })
      e.insertBlockSnippetGenerator("cloud_document_check_if_field_key_exists", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = t(n, r)
        var c = e.valueToCode(n, r, "DOC_KEYS_WRAPPER", e.ORDER_FUNCTION_CALL) || ""
        return a && c ? ep.l(ep.r("checkIfCloudDocumentFieldKeyExists", [ep.o(a), c, s]), o, e, true, true) : ""
      })
      e.insertBlockSnippetGenerator("cloud_document_get_field_key_count", function (n, r) {
        var o = n.blocks[r]
        var i = e.getFieldValue(o, "WIDGET_ID")
        var a = Jd.Z(i || "")
        var s = t(n, r)
        return a ? ep.l(ep.r("getCloudDocumentFieldKeyCount", [ep.o(a), s]), o, e, true, true) : "''"
      })
    },
    setBlockGroupProfile: function (e, t) {
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType($$_$$_$$_$$_src_editor_widget_builtIn_types.l)
        }
      }
      e.insertBlockProfile("cloud_document_all_key_field_dropdown", {
        type: "cloud_document_all_key_field_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "DOC_KEYS",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block$parent_block
              var n = (null === (this$source_block = this.source_block) || undefined === this$source_block || null === (this$source_block$parent_block = this$source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_field_value("WIDGET_ID")) || undefined
              return $_46_index.c().getCloudDocumentFieldList(n, this)
            }
          }
        ],
        output: ["String", "Number"]
      })
      e.insertBlockProfile("cloud_document_error_type", {
        type: "cloud_document_error_type",
        message0: "%{BKY_CLOUD_STORAGE_PARAM_ERROR_TYPE}",
        output: "String",
        required_context: "cloud_document_on_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_document_error_message", {
        type: "cloud_document_error_message",
        message0: "%{BKY_CLOUD_STORAGE_PARAM_ERROR_MESSAGE}",
        output: "String",
        required_context: "cloud_document_on_error_DO",
        colour: "%{BKY_PARAM_BLOCK_COLOR}",
        extensions: ["param_block"]
      })
      e.insertBlockProfile("cloud_document_on_error", {
        type: "cloud_document_on_error",
        message0: "%{BKY_CLOUD_STORAGE_ON_ERROR}",
        args0: [
          ep.e("%{BKY_BLOCK_CLOUD_ICON}", true), D.a({}, n), {
            type: "input_value",
            name: "TYPE",
            check: ["String", "Number"],
            default_shadow: "<shadow type=\"cloud_document_error_type\" />"
          }, {
            type: "input_value",
            name: "MESSAGE",
            check: ["String", "Number"],
            default_shadow: "<shadow type=\"cloud_document_error_message\" />"
          }, {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "cloud_document_on_error_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true,
        tooltip: "%{BKY_CLOUD_STORAGE_ON_ERROR_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_document_set_field_item", {
        type: "cloud_document_set_field_item",
        message0: "%{BKY_CLOUD_STORAGE_SET_VALUE_BY_KEY}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), D.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, {
            type: "input_value",
            name: "VALUE",
            check: ["String", "Number"]
          }, {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC"],
        tooltip: "%{BKY_CLOUD_STORAGE_SET_VALUE_BY_KEY_TOOLTIP}"
      })
      e.insertBlockProfile("cloud_document_remove_field_item", {
        type: "cloud_document_remove_field_item",
        message0: "%{BKY_CLOUD_STORAGE_DELETE_ITEM}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), D.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC"]
      })
      e.insertBlockProfile("cloud_document_clear_all_field_items", {
        type: "cloud_document_clear_all_field_items",
        message0: "%{BKY_CLOUD_STORAGE_CLEAR_ALL_DATA}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), D.a({}, n), {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}"
      })
      e.insertBlockProfile("cloud_document_get_field_item", {
        type: "cloud_document_get_field_item",
        message0: "%{BKY_CLOUD_STORAGE_GET_VALUE_BY_KEY}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), D.a({}, n), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        output: ["String", "Number"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC"]
      })
      e.insertBlockProfile("cloud_document_get_field_key_count", {
        type: "cloud_document_get_field_key_count",
        message0: "%{BKY_CLOUD_STORAGE_GET_KEY_VALUE_COUNT}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), D.a({}, n), {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        output: ["Number"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("cloud_document_get_all_field_keys", {
        type: "cloud_document_get_all_field_keys",
        message0: "%{BKY_CLOUD_STORAGE_GET_ALL_FIELD_KEYS}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), D.a({}, n), {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        output: ["Array"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("cloud_document_check_if_field_key_exists", {
        type: "cloud_document_check_if_field_key_exists",
        message0: "%{BKY_CLOUD_STORAGE_ASSERT_KEY_IN}",
        args0: [
          ep.d(BKY_BLOCK_CLOUD_VARIABLE_ICON), {
            type: "input_value",
            name: "DOC_KEYS_WRAPPER",
            check: ["String", "Number", "Array", "Boolean"]
          }, D.a({}, n), {
            type: "input_value",
            name: "MESSAGE",
            check: ["String"]
          }
        ],
        output: ["Boolean"],
        colour: "%{BKY_VARIABLES_HUE}",
        inputsInline: true,
        extensions: ["UPDATE_KEY_AFTER_SELECTING_CLOUD_DOC"]
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: $_305.c,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["cloud_document_on_error", "cloud_document_remove_field_item", "cloud_document_set_field_item", "cloud_document_clear_all_field_items", "cloud_document_get_field_item", "cloud_document_get_field_key_count", "cloud_document_get_all_field_keys", "cloud_document_check_if_field_key_exists"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["cloud_document_on_error"]
}
var Og = {
  icon: $_305.c,
  title: "CloudStorageWidget.widgetName",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.l,
  previewAreaWidgetTitle: "CloudStorageWidget.widgetName",
  component: Yh,
  editConfig: vg,
  blockConfig: Eg,
  isInvisibleWidget: $_305.b,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: $_305.a,
    attributes: {
      cloudDbId: "_EMPTY_CLOUD_DB_ID_",
      fields: $_305.d
    }
  }
}
var wg = [
  {
    type: "WidgetTitle"
  }, {
    type: "DictFields"
  }, {
    type: "HelpUrl",
    url: "https://codemao-guide.yuque.com/bfiekm/sbo5kh/cloud-dict"
  }
]
export { Og }
export { wg }
