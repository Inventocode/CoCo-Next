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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import * as D from "./6"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_704 from "./704"
import /* [auto-meaningful-name] */$_7041 from "./704"
var Hw = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var r = e$getValue("content")
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var i = $$_$$_$$_$$_src_shared_tools_index.p(function (e) {
    e$onChange("content", e)
  }, 60)
  return React.createElement("div", {
    className: Classnames($_7041.formItemWrapper, $_7041.wrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_7041.labelWrapper
  }, $_710$a$formatMessage({
    id: "content"
  })), React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.A, {
    defaultValue: r,
    rows: 3,
    onChange: function (e) {
      i(e.target.value)
    }
  })), React.createElement("div", {
    className: $_7041.fontWrapper
  }, React.createElement("div", {
    className: $_7041.fontFamily
  }, React.createElement(fy, {
    keyName: "fontFamily",
    onChange: e$onChange,
    fontFamily: e$getValue("fontFamily")
  })), React.createElement("div", {
    className: $_7041.fontSize
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
    className: $_7041.colorPicker
  }, React.createElement(mb, {
    width: 43,
    keyName: "color",
    onChange: e$onChange,
    color: e$getValue("color")
  })))))
})
export { Hw }
