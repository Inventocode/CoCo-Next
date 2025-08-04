"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.init_sensing_blocks = void 0;
var r = require("./2555/579");
exports.init_sensing_blocks = function (e) {
  var t = [{
    type: "get_time",
    message0: (0, r.i18n)("get_time"),
    args0: [{
      type: "field_dropdown",
      name: "op",
      options: [[(0, r.i18n)("year"), "year"], [(0, r.i18n)("month"), "month"], [(0, r.i18n)("date"), "date"], [(0, r.i18n)("week"), "week"], [(0, r.i18n)("hour"), "hour"], [(0, r.i18n)("minute"), "minute"], [(0, r.i18n)("second"), "second"]]
    }],
    output: "Number",
    colour: (0, r.i18n)("GREEN_3"),
    inputsInline: !0
  }, {
    type: "get_timer",
    message0: (0, r.i18n)("timer"),
    args0: [],
    output: "Number",
    colour: (0, r.i18n)("GREEN_3"),
    inputsInline: !0
  }, {
    type: "reset_timer",
    message0: (0, r.i18n)("reset_timer"),
    previousStatement: !0,
    nextStatement: !0,
    colour: (0, r.i18n)("GREEN_3"),
    inputsInline: !0
  }];
  e.define_blocks_with_json_array(t);
  Object.assign(e.blocks_xml, {
    get_time: "<block type=\"get_time\"/>",
    get_timer: "<block type=\"get_timer\"/>",
    reset_timer: "<block type=\"reset_timer\"/>"
  });
};