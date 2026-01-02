/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-77
 */

"use strict"

import { Yh } from "./index__part-68"
import { lg } from "./index__part-76"
import * as rp from "./61"
import * as /* [auto-meaningful-name] */$_118_index from "./118/index"
import * as /* [auto-meaningful-name] */$_46_index from "./46/index"
import * as ep from "./4"
import * as Jd from "./33"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as D from "./6"
import * as /* [auto-meaningful-name] */$_410 from "./410"
var /* [auto-meaningful-name] */ShadowType_Math_number_FieldName_NUM_Constraints_11_1_field_shadow = "<shadow type=\"math_number\"><field name=\"NUM\" constraints=\"1,,1\">1</field></shadow>"
var pg = {
  addMutation: function (e) {
    var t = this
    ep.b.call(this, "INDEX", function () {
      var e = t.append_value_input("INDEX", 2).set_check("Number")
      t.append_dummy_input("ITEM", 3).append_field($_17_index.Blink.Msg.ROW)
      return e
    }, ShadowType_Math_number_FieldName_NUM_Constraints_11_1_field_shadow, e)
  },
  removeMutation: function () {
    var e = this
    ep.t.call(this, "INDEX", "NUM", function () {
      e.remove_input("INDEX")
      e.remove_input("ITEM")
    })
  },
  updateShape_: function () {
    var e = this.get_input("INDEX")
    if ("nth" === this.rowChoice) {
      if (!e) {
        this.append_shadow_input("INDEX", ShadowType_Math_number_FieldName_NUM_Constraints_11_1_field_shadow, 2).set_check("Number")
        this.append_dummy_input("ITEM", 3).append_field($_17_index.Blink.Msg.ROW)
      }
    } else {
      if (e) {
        this.remove_input("INDEX")
        this.remove_input("ITEM")
      }
    }
  },
  domToMutation: function (e) {
    var t
    this.cacheId = {}
    var n = null === (t = this.get_field("ROW_CHOICE")) || undefined === t ? undefined : t.get_value()
    this.rowChoice = n || ""
    this.updateShape_()
  },
  mutationToDom: function () {
    var e
    var t = document.createElement("mutation")
    var n = null === (e = this.get_field("ROW_CHOICE")) || undefined === e ? undefined : e.get_value()
    t.setAttribute("rowChoice", n || "")
    return t
  }
}
function fg() {
  return new $_118_index.a({
    type: "field_coco_dropdown",
    name: "ROW_CHOICE",
    custom: true,
    options: function () {
      return [[$_17_index.Blink.Msg.LAST_ROW, "lastRow"], [$_17_index.Blink.Msg.NTH, "nth"]]
    },
    optOnchange: function (e) {
      if (!$_17_index.Blink.events.is_undoing()) {
        var /* [auto-meaningful-name] */r$addMutation
        var /* [auto-meaningful-name] */r$removeMutation
        var /* [auto-meaningful-name] */this$source_block = this.source_block
        if (this$source_block) {
          if ("nth" === e) {
            if (!(null === (r$addMutation = this$source_block.addMutation) || undefined === r$addMutation)) {
              r$addMutation.call(this$source_block)
            }
          } else if (!(null === (r$removeMutation = this$source_block.removeMutation) || undefined === r$removeMutation)) {
            r$removeMutation.call(this$source_block)
          }
        }
      }
    }
  })
}
var hg = {
  addMutation: function () {
    this.remove_input("INDEX")
    var e = this.append_shadow_input("INDEX", ShadowType_Math_number_FieldName_NUM_Constraints_11_1_field_shadow, 1)
    var t = fg()
    t.set_value("nth")
    e.append_field(t, "ROW_CHOICE")
    e.insert_field_at(0, "".concat($_17_index.Blink.Msg.ROW, ":"))
    if ($_17_index.Blink.events.is_enabled()) {
      var n = ep.c("mutation", {
        block: this,
        old_value: undefined,
        new_value: "nth"
      })
      $_17_index.Blink.events.fire(n)
    }
  },
  removeMutation: function () {
    this.remove_input("INDEX")
    var e = this.append_dummy_input("INDEX", 1)
    var t = fg()
    t.set_value("lastRow")
    e.append_field(t, "ROW_CHOICE")
    e.insert_field_at(0, "".concat($_17_index.Blink.Msg.ROW, ":"))
    if ($_17_index.Blink.events.is_enabled()) {
      var n = ep.c("mutation", {
        block: this,
        old_value: "lastRow",
        new_value: undefined
      })
      $_17_index.Blink.events.fire(n)
    }
  },
  updateShape_: function (e) {
    if (!this.get_input("INDEX")) {
      var t = this.append_dummy_input("INDEX", 1)
      var n = fg()
      n.set_value("lastRow")
      t.append_field(n, "ROW_CHOICE")
      t.insert_field_at(0, "".concat($_17_index.Blink.Msg.ROW, ":"))
    }
    var r = e || this.get_field_value("WIDGET_ID")
    if (r) {
      var o = Jd.Cb(r)
      if (o && o.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
        var i = 1
        for (var a in o.attributes.db.header) {
          var s = o.attributes.db.header[a]
          var c = this.get_input("VALUE".concat(i))
          if (c) {
            c.remove_field("LABEL")
            c.insert_field_at(0, "".concat(s.field, ":"), "LABEL")
          } else {
            this.append_shadow_input("VALUE".concat(i), "<shadow type=\"text_multiline\"><field name=\"TEXT\"></field></shadow>", i + 1).insert_field_at(0, "".concat(s.field, ":"), "LABEL")
          }
          i++
        }
        for (; i <= 50; i++) {
          if (this.get_input("VALUE".concat(i))) {
            this.remove_input("VALUE".concat(i))
          }
        }
      }
    }
  },
  domToMutation: function () {
    var e
    this.cacheId = {}
    var t = null === (e = this.get_field("ROW_CHOICE")) || undefined === e ? undefined : e.get_value()
    this.rowChoice = t || "lastRow"
    this.updateShape_()
  },
  mutationToDom: function () {
    var e
    var t = document.createElement("mutation")
    var n = null === (e = this.get_field("ROW_CHOICE")) || undefined === e ? undefined : e.get_value()
    t.setAttribute("rowChoice", n || "")
    return t
  }
}
var mg = {
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.G,
  category: {
    iconId: $_410.a,
    blocks: $$_$$_$$_$$_src_editor_widget_builtIn_types.G
  },
  getTemplate: function (e) {
    var t = "<field name=\"WIDGET_ID\">".concat(e, "</field>")
    var /* [auto-meaningful-name] */$_46_index$c$getTableDataColumnListE0$value = $_46_index.c().getTableDataColumnList(e)[0].value
    var r = "<field name=\"COLUMN\">".concat($_46_index$c$getTableDataColumnListE0$value, "</field>")
    return ["<block type=\"table_data_on_change\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"table_data_get_value_by_row_and_column\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLUMN_WRAPPER\">\n        <shadow type=\"table_data_column_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"table_data_get_column_data\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLUMN_WRAPPER\">\n        <shadow type=\"table_data_column_field_dropdown\">").concat(r, "</shadow>\n      </value>\n    </block>"), "<block type=\"table_data_get_row_data\" uncache=\"true\">\n      <mutation pos='nth'></mutation>\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"table_data_get_row_length\" uncache=\"true\">\n      ".concat(t, "\n    </block>"), rp.d, "<block type=\"table_data_set_value_by_row_and_column\" uncache=\"true\">\n      ".concat(t, "\n      <value name=\"COLUMN_WRAPPER\">\n        <shadow type=\"table_data_column_field_dropdown\">").concat(r, "</shadow>\n      </value>\n      <value name=\"ROW\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n      <value name=\"VALUE\">\n        <shadow type=\"text_multiline\">\n          <field name=\"TEXT\"></field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"table_data_delete_row_data\" uncache=\"true\">\n      <mutation pos='nth'></mutation>\n      ".concat(t, "\n      <value name=\"INDEX\">\n        <shadow type=\"math_number\">\n          <field name=\"NUM\" constraints='1,,1'>1</field>\n        </shadow>\n      </value>\n    </block>"), "<block type=\"table_data_insert_row_data\" uncache=\"true\">\n      <mutation pos='nth'></mutation>\n      ".concat(t, "\n    </block>")]
  },
  blockDeclareGroup: {
    setBlockGroupSnippet: function (e) {
      e.insertBlockSnippetGenerator("table_data_column_field_dropdown", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "COLUMN")
        return o === Et.h ? "''" : ep.o(o)
      })
      e.insertBlockSnippetGenerator("table_data_on_change", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        if (o === Et.h) {
          return ""
        }
        var i = e.statementToCode(t, n, "DO")
        return i ? ep.n("onTableDataChange", [ep.o(o)], i) : ""
      })
      e.insertBlockSnippetGenerator("table_data_set_value_by_row_and_column", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "COLUMN_WRAPPER", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        var s = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("tableDataSetValueByColumnAndRow", [ep.o(o), i, a, s]), r, e)
      })
      e.insertBlockSnippetGenerator("table_data_delete_row_data", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "ROW_CHOICE")
        if ("lastRow" === i) {
          return ep.l(ep.n("tableDataDeleteLastRow", [ep.o(o)]), r, e)
        }
        if ("allRow" === i) {
          return ep.l(ep.n("tableDataDeleteAllRow", [ep.o(o)]), r, e)
        }
        var a = e.valueToCode(t, n, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("tableDataDeleteRowByIndex", [ep.o(o), a]), r, e)
      })
      e.insertBlockSnippetGenerator("table_data_insert_row_data", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.getFieldValue(r, "ROW_CHOICE")
        var a = Jd.Cb(o)
        var s = "{"
        if (a && a.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.G) {
          var c = 1
          for (var l in a.attributes.db.header) {
            var u = e.valueToCode(t, n, "VALUE".concat(c), e.ORDER_FUNCTION_CALL)
            c++
            s += "\"".concat(l, "\": ").concat(u || "''", ",")
          }
        }
        s += "}"
        if ("lastRow" === i) {
          return ep.l(ep.n("tableDataInsertLastRow", [ep.o(o), s]), r, e)
        }
        var d = e.valueToCode(t, n, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.n("tableDataInsertRowByIndex", [ep.o(o), d, s]), r, e)
      })
      e.insertBlockSnippetGenerator("table_data_get_value_by_row_and_column", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "COLUMN_WRAPPER", e.ORDER_FUNCTION_CALL)
        var a = e.valueToCode(t, n, "ROW", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.s("tableDataGetValueByColumnAndRow", [ep.o(o), i, a]), r, e, false, true)
      })
      e.insertBlockSnippetGenerator("table_data_get_row_length", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        return ep.l(ep.s("tableDataGetRowLength", [ep.o(o)]), r, e, false, true)
      })
      e.insertBlockSnippetGenerator("table_data_get_column_data", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        var i = e.valueToCode(t, n, "COLUMN_WRAPPER", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.s("tableDataGetColumnData", [ep.o(o), i]), r, e, false, true)
      })
      e.insertBlockSnippetGenerator("table_data_get_row_data", function (t, n) {
        var r = t.blocks[n]
        var o = e.getFieldValue(r, "WIDGET_ID")
        if ("lastRow" === e.getFieldValue(r, "ROW_CHOICE")) {
          return ep.l(ep.s("tableDataGetLastRow", [ep.o(o)]), r, e, false, true)
        }
        var i = e.valueToCode(t, n, "INDEX", e.ORDER_FUNCTION_CALL)
        return ep.l(ep.s("tableDataGetRowByIndex", [ep.o(o), i]), r, e, false, true)
      })
    },
    setBlockGroupProfile: function (e, t) {
      t.extensions.register_mutator("TABLE_DATA_ROW_MUTATOR", pg)
      t.extensions.register_mutator("TABLE_DATA_INSERT_ROW_MUTATOR", hg)
      var n = {
        type: "field_coco_dropdown",
        name: "WIDGET_ID",
        custom: true,
        options: function () {
          return $_46_index.c().getWidgetListByType($$_$$_$$_$$_src_editor_widget_builtIn_types.G)
        }
      }
      function r(e) {
        if (!t.events.is_undoing()) {
          var /* [auto-meaningful-name] */o$addMutation
          var /* [auto-meaningful-name] */o$removeMutation
          var /* [auto-meaningful-name] */this$source_block = this.source_block
          if (this$source_block) {
            if ("nth" === e) {
              if (!(null === (o$addMutation = this$source_block.addMutation) || undefined === o$addMutation)) {
                o$addMutation.call(this$source_block)
              }
            } else if (!(null === (o$removeMutation = this$source_block.removeMutation) || undefined === o$removeMutation)) {
              o$removeMutation.call(this$source_block)
            }
          }
        }
      }
      e.insertBlockProfile("table_data_column_field_dropdown", {
        type: "table_data_column_field_dropdown",
        message0: "%1",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "COLUMN",
            custom: true,
            advancedOptions: function () {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */this$source_block$parent_block
              var n = null === (this$source_block = this.source_block) || undefined === this$source_block || null === (this$source_block$parent_block = this$source_block.parent_block) || undefined === this$source_block$parent_block ? undefined : this$source_block$parent_block.get_field_value("WIDGET_ID")
              return $_46_index.c().getTableDataColumnList(n)
            }
          }
        ],
        output: ["String"]
      })
      e.insertBlockProfile("table_data_on_change", {
        type: "table_data_on_change",
        message0: "%{BKY_TABLE_DATA_ON_CHANGE}",
        args0: [
          ep.e("%{BKY_BLOCK_CLOUD_ICON}", true), D.a({}, n), {
            type: "input_dummy",
            align: "CENTRE"
          }, {
            type: "input_statement",
            name: "DO",
            provided_context: "table_data_on_change_DO"
          }
        ],
        colour: "%{BKY_EVENTS_HUE}",
        inputsInline: true
      })
      e.insertBlockProfile("table_data_set_value_by_row_and_column", {
        type: "table_data_set_value_by_row_and_column",
        message0: "%{BKY_TABLE_DATA_SET_VALUE_BY_ROW_AND_COLUMN}",
        args0: [
          D.a({}, n), {
            type: "input_value",
            name: "COLUMN_WRAPPER",
            check: ["String", "Number"]
          }, {
            type: "input_value",
            name: "ROW",
            check: ["Number"]
          }, {
            type: "input_value",
            name: "VALUE"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA"]
      })
      e.insertBlockProfile("table_data_insert_row_data", {
        type: "table_data_insert_row_data",
        message0: "%{BKY_TABLE_DATA_INSERT_ROW_DATA}",
        args0: [
          {
            type: "field_coco_dropdown",
            name: "WIDGET_ID",
            custom: true,
            options: function () {
              return $_46_index.c().getWidgetListByType($$_$$_$$_$$_src_editor_widget_builtIn_types.G)
            },
            optOnchange: function (e) {
              var /* [auto-meaningful-name] */this$source_block
              var /* [auto-meaningful-name] */_this$source_block
              if (null === (this$source_block = this.source_block) || undefined === this$source_block ? undefined : this$source_block.updateShape_) {
                if (!(null === (_this$source_block = this.source_block) || undefined === _this$source_block)) {
                  _this$source_block.updateShape_(e)
                }
              }
            }
          }
        ],
        inputsInline: false,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        mutator: "TABLE_DATA_INSERT_ROW_MUTATOR"
      })
      e.insertBlockProfile("table_data_delete_row_data", {
        type: "table_data_delete_row_data",
        message0: "%{BKY_TABLE_DATA_DELETE_ROW_DATA}",
        args0: [
          D.a({}, n), {
            type: "field_coco_dropdown",
            name: "ROW_CHOICE",
            custom: true,
            optOnchange: r,
            options: function () {
              return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ROW, "lastRow"], [t.Msg.ALL_ROW, "allRow"]]
            }
          }
        ],
        message1: "%1",
        args1: [
          {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        message2: "%{BKY_ROW} %1",
        args2: [
          {
            type: "input_dummy",
            name: "ITEM"
          }
        ],
        inputsInline: true,
        previousStatement: true,
        nextStatement: true,
        colour: "%{BKY_VARIABLES_HUE}",
        mutator: "TABLE_DATA_ROW_MUTATOR"
      })
      e.insertBlockProfile("table_data_get_value_by_row_and_column", {
        type: "table_data_get_value_by_row_and_column",
        message0: "%{BKY_TABLE_DATA_GET_VALUE_BY_ROW_AND_COLUMN}",
        args0: [
          D.a({}, n), {
            type: "input_value",
            name: "COLUMN_WRAPPER",
            check: ["String", "Number"]
          }, {
            type: "input_value",
            name: "ROW",
            check: ["Number"]
          }
        ],
        output: ["String"],
        inputsInline: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA"]
      })
      e.insertBlockProfile("table_data_get_row_length", {
        type: "table_data_get_row_length",
        message0: "%{BKY_TABLE_DATA_GET_ROW_LENGTH}",
        args0: [D.a({}, n)],
        output: ["Number"],
        inputsInline: true,
        colour: "%{BKY_VARIABLES_HUE}"
      })
      e.insertBlockProfile("table_data_get_column_data", {
        type: "table_data_get_column_data",
        message0: "%{BKY_TABLE_DATA_GET_COLUMN_DATA}",
        args0: [
          ep.d("%{BKY_BLOCK_LIST_ICON}"), D.a({}, n), {
            type: "input_value",
            name: "COLUMN_WRAPPER",
            check: ["String", "Number"]
          }
        ],
        output: ["Array"],
        inputsInline: true,
        colour: "%{BKY_VARIABLES_HUE}",
        extensions: ["UPDATE_COLUMN_AFTER_SELECT_TABLE_DATA"]
      })
      e.insertBlockProfile("table_data_get_row_data", {
        type: "table_data_get_row_data",
        message0: "%{BKY_TABLE_DATA_GET_ROW_DATA}",
        args0: [
          ep.d("%{BKY_BLOCK_DICT_ICON}"), D.a({}, n), {
            type: "field_coco_dropdown",
            name: "ROW_CHOICE",
            custom: true,
            optOnchange: r,
            options: function () {
              return [[t.Msg.NTH, "nth"], [t.Msg.LAST_ROW, "lastRow"]]
            }
          }
        ],
        message1: "%1",
        args1: [
          {
            type: "input_value",
            name: "INDEX",
            check: ["Number"]
          }
        ],
        message2: "%{BKY_ROW} %1",
        args2: [
          {
            type: "input_dummy",
            name: "ITEM"
          }
        ],
        output: ["Object"],
        inputsInline: true,
        colour: "%{BKY_VARIABLES_HUE}",
        mutator: "TABLE_DATA_ROW_MUTATOR"
      })
    }
  },
  categoryClass: {
    text: "",
    iconId: $_410.a,
    blocks: []
  },
  renameBlocksInfo: {
    blocksList: ["table_data_on_change", "table_data_set_value_by_row_and_column", "table_data_insert_row_data", "table_data_delete_row_data", "table_data_clear_data", "table_data_get_value_by_row_and_column", "table_data_get_row_length", "table_data_get_column_data", "table_data_get_row_data"],
    fieldName: "WIDGET_ID"
  },
  topBlocks: ["table_data_on_change"]
}
var gg = {
  icon: $_410.a,
  title: "TableDataWidget.widgetName",
  type: $$_$$_$$_$$_src_editor_widget_builtIn_types.G,
  previewAreaWidgetTitle: "TableDataWidget.widgetName",
  component: Yh,
  editConfig: lg,
  blockConfig: mg,
  isInvisibleWidget: true,
  widget: {
    size: {
      width: 0,
      height: 0
    },
    isGlobalWidget: true,
    attributes: {
      db: {
        header: $_410.c,
        data: $_410.b
      }
    }
  }
}
export { gg }
