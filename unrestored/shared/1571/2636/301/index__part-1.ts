/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：301__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index from "../../../../../src/shared/packages/@crc/blink/src/index"
import * as g from "../9"
import * as _ from "../4"
function v(e) {
  e.insertBlockProfile("phone_vibrate", {
    type: "phone_vibrate",
    message0: "%{BKY_PHONE_VIBRATE}",
    args0: [
      {
        type: "input_value",
        name: "SECONDS",
        check: ["Number"]
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
  e.insertBlockProfile("brightness_set_brightness", {
    type: "brightness_set_brightness",
    message0: "%{BKY_BRIGHTNESS_SET_BRIGHTNESS}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["Number"]
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
  e.insertBlockProfile("brightness_get_brightness", {
    type: "brightness_get_brightness",
    message0: "%{BKY_BRIGHTNESS_GET_BRIGHTNESS}",
    output: ["Number"],
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
  e.insertBlockProfile("brightness_set_keep_screen_on", {
    type: "brightness_set_keep_screen_on",
    message0: "%{BKY_BRIGHTNESS_SET_KEEP_SCREEN_ON}",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: ["Boolean"]
      }
    ],
    previousStatement: true,
    nextStatement: true,
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
  e.insertBlockProfile("phone_battery_level", {
    type: "phone_battery_level",
    message0: "%{BKY_PHONE_BATTERY_LEVEL}",
    output: ["Number"],
    colour: "%{BKY_BLUE_6}",
    inputsInline: true
  })
}
function b(e) {
  e.insertBlockXML("phone_vibrate", "<value name=\"SECONDS\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0,,0.1\">1</field>\n      </shadow>\n    </value>")
  e.insertBlockXML("date_get_current_date")
  e.insertBlockXML("date_check_date_is_equal", "<value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>")
  e.insertBlockXML("date_get_date_minus_operation", "<value name=\"DATE_A\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>\n    <value name=\"DATE_B\">\n      <shadow type=\"date_get_current_date\"></shadow>\n    </value>")
  e.insertBlockXML("brightness_set_brightness", "<value name=\"VALUE\">\n      <shadow type=\"math_number\">\n        <field name=\"NUM\" constraints=\"0,100,1\">50</field>\n      </shadow>\n    </value>")
  e.insertBlockXML("brightness_get_brightness")
  e.insertBlockXML("brightness_set_keep_screen_on", "<value name=\"VALUE\">\n      <shadow type=\"widget_boolean\">\n        <field name=\"BOOL\">TRUE</field>\n      </shadow>\n    </value>")
  e.insertBlockXML("phone_battery_level")
}
function y(e) {
  e.insertBlockSnippetGenerator("phone_vibrate", function (t, n) {
    var r = e.valueToCode(t, n, "SECONDS", e.ORDER_FUNCTION_CALL) || "0"
    return _.n("startDeviceVibrating", [r + " * 1000"])
  })
  e.insertBlockSnippetGenerator("brightness_set_brightness", function (t, n) {
    var r = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    var o = t.blocks[n]
    return _.l(_.j("brightness.setBrightness", [r]), o, e, true)
  })
  e.insertBlockSnippetGenerator("brightness_get_brightness", function (t, n) {
    var r = t.blocks[n]
    return _.l(_.r("brightness.getBrightness"), r, e, true, true)
  })
  e.insertBlockSnippetGenerator("brightness_set_keep_screen_on", function (t, n) {
    var r = t.blocks[n]
    var o = e.valueToCode(t, n, "VALUE", e.ORDER_FUNCTION_CALL)
    return _.l(_.n("brightness.setKeepScreenOn", [o]), r, e)
  })
  e.insertBlockSnippetGenerator("phone_battery_level", function (t, n) {
    var r = t.blocks[n]
    return _.l(_.r("device.getBatteryLevel"), r, e, true, true)
  })
}
export { v }
export { b }
export { y }
