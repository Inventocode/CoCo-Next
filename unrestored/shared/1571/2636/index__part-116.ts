/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-116
 */

"use strict"

import { rb } from "./index__part-92"
import { lb } from "./index__part-93"
import * as /* [auto-meaningful-name] */$_200 from "./200"
import * as /* [auto-meaningful-name] */$_148 from "./148"
import * as /* [auto-meaningful-name] */$_379 from "./379"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_811 from "./811"
import /* [auto-meaningful-name] */$_8111 from "./811"
var hO = [
  {
    value: $_379.a.DEFAULT,
    renderContent: function () {
      return React.createElement("div", {
        className: $_8111.defaultRadio
      }, React.createElement("span", null, "Text"))
    }
  }, {
    value: $_379.a.BUTTON,
    renderContent: function () {
      return React.createElement("div", {
        className: $_8111.buttonRadio
      }, React.createElement("span", null, "Text"))
    }
  }
]
var mO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement($_13_index.i, {
    className: N($_8111.formItemWrapper, $_8111.typeSelector, $_8111.radioTypeSelector, "changeRadioResizeMode"),
    label: $_710$a$formatMessage({
      id: "style"
    })
  }, React.createElement(lb, {
    value: o,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    modeList: hO
  }, hO.map(function (e) {
    return React.createElement($_13_index.p, {
      value: e.value,
      key: e.value
    }, e.renderContent())
  })))
})
var gO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values($$_$$_$$_$$_src_editor_widget_builtIn_types.s)
  var a = e$getValue(n)
  var s = e$getValue("size")
  var /* [auto-meaningful-name] */s$height = s.height
  var /* [auto-meaningful-name] */s$width = s.width
  var u = $_148.g[a]
  var /* [auto-meaningful-name] */u$minWidth = u.minWidth
  var /* [auto-meaningful-name] */u$maxWidth = u.maxWidth
  return React.createElement(rb, {
    sizeType: a,
    sizeTypeList: i,
    width: s$width,
    height: s$height,
    minWidth: u$minWidth,
    maxWidth: u$maxWidth,
    onWidthChange: function (e) {
      !function (e) {
        e$onChange("size", {
          width: e
        })
      }(Math.max(u$minWidth, Math.min(u$maxWidth, Number(e))))
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
    }
  })
})
var _O = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values($$_$$_$$_$$_src_editor_widget_builtIn_types.s)
  var a = e$getValue(n)
  var s = e$getValue("size")
  var /* [auto-meaningful-name] */s$height = s.height
  var /* [auto-meaningful-name] */s$width = s.width
  var u = $_200.g[a]
  var /* [auto-meaningful-name] */u$minWidth = u.minWidth
  var /* [auto-meaningful-name] */u$maxWidth = u.maxWidth
  return React.createElement(rb, {
    sizeType: a,
    sizeTypeList: i,
    width: s$width,
    height: s$height,
    minWidth: u$minWidth,
    maxWidth: u$maxWidth,
    onWidthChange: function (e) {
      !function (e) {
        e$onChange("size", {
          width: e
        })
      }(Math.max(u$minWidth, Math.min(u$maxWidth, Number(e))))
    },
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
    }
  })
})
export { mO }
export { gO }
export { _O }
