/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-132
 */

"use strict"

import { mb } from "./index__part-94"
import { fy } from "./index__part-102"
import { TE } from "./index__part-109"
import * as Qu from "./60"
import * as Yr from "./53"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as D from "./6"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_704 from "./704"
import /* [auto-meaningful-name] */_$_ from "./704"
var Hw = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("content")
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = te.p(function (e) {
    e$onChange("content", e)
  }, 60)
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, _$_.wrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: _$_.labelWrapper
  }, $_710_index$a$formatMessage({
    id: "content"
  })), React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement($_13_index.A, {
    defaultValue: r,
    rows: 3,
    onChange: function (e) {
      i(e.target.value)
    }
  })), React.createElement("div", {
    className: _$_.fontWrapper
  }, React.createElement("div", {
    className: _$_.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily")
  })), React.createElement("div", {
    className: _$_.fontSize
  }, React.createElement(TE, {
    keyName: "fontSize",
    onChange: e$onChange,
    formConfig: D.a(D.a({}, e.formConfig), {}, {
      label: "fontSize",
      max: Qu.f,
      min: Qu.n
    }),
    rules: [
      {
        rule: Yr.w(4)
      }, {
        rule: Yr.v
      }
    ],
    value: e$getValue("fontSize")
  })), React.createElement("div", {
    className: _$_.colorPicker
  }, React.createElement(mb, {
    width: 43,
    keyName: "color",
    onChange: e$onChange,
    color: e$getValue("color")
  })))))
})
export { Hw }
