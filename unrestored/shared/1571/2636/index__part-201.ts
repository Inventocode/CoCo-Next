/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-201
 */

"use strict"

import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_754 from "./754"
import /* [auto-meaningful-name] */_$_ from "./754"
import * as /* [auto-meaningful-name] */$_1530 from "./1530"
import /* [auto-meaningful-name] */_$_2 from "./1530"
import * as /* [auto-meaningful-name] */$_1531 from "./1531"
import /* [auto-meaningful-name] */_$_3 from "./1531"
var bL = _React.memo(function () {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var t = _React.useState(!function () {
    var e = navigator.userAgent.toLowerCase()
    return e.includes("chrome") && !e.includes("qqbrowser") && !e.includes("opr") && !e.includes("se") && !e.includes("metasr") && /Google Inc/.test(navigator.vendor)
  }())
  var n = $_10_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  return r ? React.createElement("div", {
    className: _$_.container
  }, React.createElement("div", {
    className: _$_.wrapper
  }, React.createElement("img", {
    src: _$_2,
    className: _$_.codemaoImg,
    alt: "codemao"
  }), React.createElement("span", {
    className: _$_.compatibility
  }, $_710_index$a$formatMessage({
    id: "ChromeTips.compatibility"
  })), React.createElement("img", {
    src: _$_3,
    className: _$_.chromeImg,
    alt: "chrome"
  }), React.createElement("a", {
    href: "https://shequ.codemao.cn/download",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "coco-button coco-button-primary"
  }, $_710_index$a$formatMessage({
    id: "ChromeTips.download"
  })), React.createElement("span", {
    className: _$_.close,
    onClick: function () {
      return o(false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close-btn"
  })))) : null
})
export { bL }
