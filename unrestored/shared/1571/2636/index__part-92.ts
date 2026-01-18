/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-92
 */

"use strict"

import qv from "./88"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as Yr from "./53"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_419 from "./419"
import /* [auto-meaningful-name] */$_4191 from "./419"
var nb = React1.memo(function (e) {
  var t
  var /* [auto-meaningful-name] */e$onUploadFileChange = e.onUploadFileChange
  var /* [auto-meaningful-name] */e$onResourceLibraryClick = e.onResourceLibraryClick
  var /* [auto-meaningful-name] */e$onDelete = e.onDelete
  var /* [auto-meaningful-name] */e$fileId = e.fileId
  var /* [auto-meaningful-name] */e$style = e.style
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = React1.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React1.useState(false)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var _ = m[1]
  if (te.U(e$fileId)) {
    t = e$fileId
  } else {
    var v = Et.hb(e$fileId)
    t = (null === v || undefined === v ? undefined : v.source) || (null === v || undefined === v ? undefined : v.cdnUrl)
  }
  var b = function (e) {
    _(e)
  }
  var y = function () {
    _(false)
  }
  var E = function () {
    return React.createElement($_1213.a, {
      content: React.createElement("div", {
        className: $_4191.imagePopover,
        onClick: y
      }, React.createElement($_13_index.B, {
        className: $_4191.content,
        onChange: e$onUploadFileChange,
        accept: $_133.f
      }, React.createElement($_13_index.j, {
        type: "icon-upload"
      }), React.createElement("span", {
        className: $_4191.contentTitle
      }, $_710_index$a$formatMessage({
        id: "Resource.upload"
      }))), React.createElement("div", {
        className: $_4191.content,
        onClick: e$onResourceLibraryClick
      }, React.createElement($_13_index.j, {
        type: "icon-open-resource-library"
      }), React.createElement("span", {
        className: $_4191.contentTitle
      }, $_710_index$a$formatMessage({
        id: "Resource.ImageLibrary"
      })))),
      placement: "bottomLeft",
      trigger: "click",
      visible: g,
      onVisibleChange: b
    }, React.createElement("div", {
      className: $_4191.imageBtn
    }, $_710_index$a$formatMessage({
      id: "Resource.Replace"
    })))
  }
  return React.createElement("div", {
    className: $_4191.imageWrapper
  }, React.createElement("div", {
    tabIndex: -1,
    className: N($_4191.imageBox),
    style: e$style,
    onMouseEnter: function () {
      d(true)
    },
    onBlur: function () {
      d(false)
    },
    onMouseLeave: function () {
      if (!g) {
        d(false)
        _(false)
      }
    }
  }, t && React.createElement(React.Fragment, null, React.createElement("img", {
    alt: e$fileId,
    src: t
  }), React.createElement("div", {
    className: N($_4191.cover, u && $_4191.visible)
  }, e$onDelete && React.createElement("div", {
    className: $_4191.imageDelete,
    onClick: e$onDelete
  }, React.createElement($_13_index.j, {
    type: "icon-delete"
  })), E())), !t && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_4191.picDefault
  }, React.createElement($_13_index.j, {
    type: "icon-pic-default"
  })), React.createElement("div", {
    className: N($_4191.cover, u && $_4191.visible)
  }, E()))))
})
var rb = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$sizeType = e.sizeType
  var /* [auto-meaningful-name] */e$sizeTypeList = e.sizeTypeList
  var /* [auto-meaningful-name] */e$width = e.width
  var /* [auto-meaningful-name] */e$height = e.height
  var /* [auto-meaningful-name] */e$minWidth = e.minWidth
  var /* [auto-meaningful-name] */e$maxWidth = e.maxWidth
  var /* [auto-meaningful-name] */e$onWidthChange = e.onWidthChange
  var /* [auto-meaningful-name] */e$onSizeTypeChange = e.onSizeTypeChange
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var u = !Lodash.isFunction(e$onWidthChange)
  var d = function (e) {
    return te.p(function (e) {
      if (!u) {
        if (e$onWidthChange) {
          e$onWidthChange(e)
        }
      }
    }, e)
  }
  return React.createElement("div", {
    className: N(qv.formItemWrapper, qv.changeSizeFormItemWrapper)
  }, React.createElement("div", {
    className: qv.formInputNumberRow
  }, React.createElement("p", {
    className: "coco-form-item-label"
  }, $_710_index$a$formatMessage({
    id: "size"
  })), React.createElement($_13_index.i, {
    className: "changeWidth"
  }, React.createElement($_13_index.n, {
    disabled: u,
    type: "number",
    className: qv.justifyInputContent,
    defaultValue: e$width,
    onChange: d(200),
    onStep: d(0),
    min: e$minWidth,
    max: e$maxWidth,
    rules: [
      {
        rule: Yr.v
      }
    ],
    before: React.createElement("span", {
      style: {
        color: "var(--dark-text-color-t5)"
      }
    }, $_710_index$a$formatMessage({
      id: "width"
    }))
  })), React.createElement($_13_index.i, null, React.createElement($_13_index.n, {
    disabled: true,
    type: "number",
    value: e$height,
    className: qv.justifyInputContent,
    before: React.createElement("span", null, $_710_index$a$formatMessage({
      id: "height"
    }))
  }))), React.createElement("div", {
    className: qv.space
  }), React.createElement($_13_index.i, {
    className: "changeSizeFormItemWrapper"
  }, React.createElement($_13_index.s, {
    className: N(qv.radioWrapper, qv.sizeRadioBox),
    value: e$sizeType,
    onChange: e$onSizeTypeChange
  }, e$sizeTypeList.map(function (e) {
    return React.createElement($_13_index.t, {
      value: e,
      key: e
    }, $_710_index$a$formatMessage({
      id: e.toLocaleLowerCase() + "Size"
    }))
  }))))
})
export { nb }
export { rb }
