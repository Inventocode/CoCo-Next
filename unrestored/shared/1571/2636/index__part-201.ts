/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-201
 */

"use strict"

import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_754 from "./754"
import /* [auto-meaningful-name] */$_7541 from "./754"
import * as /* [auto-meaningful-name] */$_1530 from "./1530"
import /* [auto-meaningful-name] */$_15301 from "./1530"
import * as /* [auto-meaningful-name] */$_1531 from "./1531"
import /* [auto-meaningful-name] */$_15311 from "./1531"
var bL = memo(function () {
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var t = useState(!function () {
    var e = navigator.userAgent.toLowerCase()
    return e.includes("chrome") && !e.includes("qqbrowser") && !e.includes("opr") && !e.includes("se") && !e.includes("metasr") && /Google Inc/.test(navigator.vendor)
  }())
  var n = $_10_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  return r ? React.createElement("div", {
    className: $_7541.container
  }, React.createElement("div", {
    className: $_7541.wrapper
  }, React.createElement("img", {
    src: $_15301,
    className: $_7541.codemaoImg,
    alt: "codemao"
  }), React.createElement("span", {
    className: $_7541.compatibility
  }, $_710$a$formatMessage({
    id: "ChromeTips.compatibility"
  })), React.createElement("img", {
    src: $_15311,
    className: $_7541.chromeImg,
    alt: "chrome"
  }), React.createElement("a", {
    href: "https://shequ.codemao.cn/download",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "coco-button coco-button-primary"
  }, $_710$a$formatMessage({
    id: "ChromeTips.download"
  })), React.createElement("span", {
    className: $_7541.close,
    onClick: function () {
      return o(false)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-close-btn"
  })))) : null
})
export { bL }
