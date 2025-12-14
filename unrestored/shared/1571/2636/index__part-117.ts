/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-117
 */

"use strict"

import { rb } from "./index__part-92"
import { lb } from "./index__part-93"
import { hb, mb } from "./index__part-94"
import * as /* [auto-meaningful-name] */$_37_index from "./37/index"
import * as /* [auto-meaningful-name] */$_163 from "./163"
import * as /* [auto-meaningful-name] */$_131 from "./131"
import * as An from "./5"
import * as Et from "./9"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_254 from "./254"
import /* [auto-meaningful-name] */_$_ from "./254"
var yO = [
  {
    value: $_163.c.DEFAULT,
    renderContent: function () {
      return React.createElement("div", {
        className: _$_.default
      }, React.createElement("div", {
        className: _$_.handle
      }))
    }
  }, {
    value: $_163.c.PRIMARY,
    renderContent: function () {
      return React.createElement("div", {
        className: _$_.primary
      }, React.createElement("div", {
        className: _$_.handle
      }))
    }
  }
]
var EO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement($_13_index.i, {
    className: N(_$_.formItemWrapper, _$_.typeSelector, _$_.switchType, "changeSwitchMode"),
    label: $_710_index$a$formatMessage({
      id: "style"
    })
  }, React.createElement(lb, {
    modeList: yO,
    value: o,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    }
  }, yO.map(function (e) {
    return React.createElement($_13_index.p, {
      value: e.value,
      key: e.value
    }, e.renderContent())
  })))
})
var OO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values(An.s)
  var a = e$getValue(n)
  var s = e$getValue("size")
  var /* [auto-meaningful-name] */s$height = s.height
  var /* [auto-meaningful-name] */s$width = s.width
  return React.createElement(rb, {
    sizeType: a,
    sizeTypeList: i,
    width: s$width,
    height: s$height,
    onSizeTypeChange: function (e) {
      e$onChange(n, e)
    }
  })
})
var wO = [
  {
    value: $_163.c.DEFAULT,
    renderContent: function (e) {
      return React.createElement("div", {
        className: N(_$_.default, "switch-default"),
        style: {
          backgroundColor: te.hb(e, .3)
        }
      }, React.createElement("div", {
        className: _$_.handle,
        style: {
          backgroundColor: e
        }
      }))
    }
  }, {
    value: $_163.c.PRIMARY,
    renderContent: function (e) {
      return React.createElement("div", {
        className: N(_$_.primary, "switch-primary"),
        style: {
          backgroundColor: e
        }
      }, React.createElement("div", {
        className: _$_.handle
      }))
    }
  }
]
var CO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var i = e$getValue("color")
  var a = e$getValue("backgroundMode") || $_163.a.TEMPLATE
  var s = e$getValue("mode") || $_163.c.DEFAULT
  var c = e$getValue("backgroundOpenImage") || $_131.b
  var l = e$getValue("backgroundCloseImage") || $_131.a
  var u = c
  var d = Et.hb(c)
  if (!te.U(c) && d) {
    u = (null === d || undefined === d ? undefined : d.source) || (null === d || undefined === d ? undefined : d.cdnUrl)
  }
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, _$_.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: _$_.backgroundLabel
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: _$_.modeActionWrapper
  }, React.createElement("div", {
    className: N(_$_.modeTemplate, a === $_163.a.TEMPLATE && _$_.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", $_163.a.TEMPLATE)
    }
  }, $_710_index$a$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: N(_$_.modeImage, a === $_163.a.IMAGE && _$_.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", $_163.a.IMAGE)
    }
  }, $_710_index$a$formatMessage({
    id: "image"
  })))), a === $_163.a.TEMPLATE && React.createElement("div", {
    className: _$_.backgroundWrapper
  }, React.createElement("div", {
    className: _$_.templateMode
  }, React.createElement(hb, {
    modeList: wO,
    value: s,
    onChange: function (e) {
      e$onChange("mode", e)
    },
    params: [i]
  }, wO.map(function (e) {
    return React.createElement($_13_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(i))
  }))), React.createElement("div", {
    className: _$_.templateColor
  }, React.createElement("span", null, $_710_index$a$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "color",
    onChange: e$onChange,
    color: i
  }))), a === $_163.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: _$_.backgroundWrapper
  }, React.createElement("div", {
    className: _$_.backgroundImage
  }, React.createElement("img", {
    src: u,
    alt: ""
  })), React.createElement("div", {
    className: _$_.cover
  }, React.createElement("div", {
    className: _$_.editBtn,
    onClick: function () {
      $_37_index.a($$_$$_$$_$$_src_shared_events_messagesWrapper.Hj({
        visible: true,
        widgetId: e$widgetId,
        imageCloseFileId: l,
        imageOpenFileId: c
      }))
    }
  }, $_710_index$a$formatMessage({
    id: "edit"
  })))), React.createElement("div", {
    style: {
      marginTop: 10,
      marginBottom: 3
    }
  }, React.createElement($_13_index.s, {
    className: N(_$_.radioWrapper, _$_.sizeRadioBox),
    value: e$getValue("imageResizeMode") || $_163.b.CONTAIN,
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement($_13_index.t, {
    value: $_163.b.CONTAIN
  }, React.createElement($_13_index.j, {
    type: "icon-contain"
  }), $_710_index$a$formatMessage({
    id: "".concat($_163.b.CONTAIN)
  })), React.createElement($_13_index.t, {
    value: $_163.b.STRETCH
  }, React.createElement($_13_index.j, {
    type: "icon-stretch"
  }), $_710_index$a$formatMessage({
    id: "".concat($_163.b.STRETCH)
  }))))))
})
export { EO }
export { OO }
export { CO }
