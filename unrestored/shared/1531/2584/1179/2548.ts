/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2548
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.init_events_blocks = undefined
var r = require("./2555/579")
var o = require("./2553/1425")
exports.init_events_blocks = function (e) {
  var t = [{
    type: "start_on_click",
    message0: (0, r.i18n)("start_on_click"),
    args0: [(0, r.create_head_icon)(o.icon_start)],
    nextStatement: true,
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "start_on_click_2",
    message0: (0, r.i18n)("start_on_click_2"),
    args0: [(0, r.create_head_icon)(o.icon_start), {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "on_running_group_activated",
    message0: (0, r.i18n)("on_running_group_activated"),
    args0: [(0, r.create_head_icon)(o.icon_start)],
    nextStatement: true,
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "self_listen",
    message0: (0, r.i18n)("self_listen"),
    args0: [(0, r.create_head_icon)(o.icon_broadcast), {
      type: "input_value",
      name: "message",
      check: "String"
    }, {
      type: "input_dummy",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "self_broadcast",
    message0: (0, r.i18n)("self_broadcast"),
    args0: [{
      type: "input_value",
      name: "message",
      check: "String"
    }],
    previousStatement: true,
    nextStatement: true,
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "self_broadcast_and_wait",
    message0: (0, r.i18n)("self_broadcast_and_wait"),
    args0: [{
      type: "input_value",
      name: "message",
      check: "String"
    }],
    previousStatement: true,
    nextStatement: true,
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "when",
    message0: (0, r.i18n)("when"),
    args0: [(0, r.create_head_icon)(o.icon_broadcast), {
      type: "input_value",
      name: "condition",
      check: "Boolean",
      align: "CENTRE"
    }, {
      type: "input_statement",
      name: "DO"
    }],
    tooltip: (0, r.i18n)("WHEN_BLOCK_TOOLTIPS"),
    colour: (0, r.i18n)("BLUE_3"),
    inputsInline: true
  }, {
    type: "terminate",
    message0: (0, r.i18n)("terminate"),
    args0: [],
    inputsInline: true,
    previousStatement: true,
    colour: (0, r.i18n)("BLUE_3")
  }]
  e.define_blocks_with_json_array(t)
  Object.assign(e.blocks_xml, {
    start_on_click: "<block type=\"start_on_click\"/>",
    start_on_click_2: "<block type=\"start_on_click_2\"/>",
    on_running_group_activated: "<block type=\"on_running_group_activated\"/>",
    self_listen: "<block type=\"self_listen\">\n      " + (0, r.text_value)("message", "Hi") + "\n    </block>",
    self_broadcast: "<block type=\"self_broadcast\">\n      " + (0, r.text_value)("message", "Hi") + "\n    </block>",
    self_broadcast_and_wait: "<block type=\"self_broadcast_and_wait\">\n      " + (0, r.text_value)("message", "Hi") + "\n    </block>",
    when: "<block type=\"when\">\n      " + (0, r.logic_value)("condition") + "\n    </block>",
    terminate: "<block type=\"terminate\"/>"
  })
}
