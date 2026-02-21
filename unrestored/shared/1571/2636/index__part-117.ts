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
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import /* [auto-meaningful-name] */React from "react"
import { memo } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_254 from "./254"
import /* [auto-meaningful-name] */$_2541 from "./254"
var yO = [
  {
    value: $_163.c.DEFAULT,
    renderContent: function () {
      return React.createElement("div", {
        className: $_2541.default
      }, React.createElement("div", {
        className: $_2541.handle
      }))
    }
  }, {
    value: $_163.c.PRIMARY,
    renderContent: function () {
      return React.createElement("div", {
        className: $_2541.primary
      }, React.createElement("div", {
        className: $_2541.handle
      }))
    }
  }
]
var EO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "mode" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.i, {
    className: Classnames($_2541.formItemWrapper, $_2541.typeSelector, $_2541.switchType, "changeSwitchMode"),
    label: $_710$a$formatMessage({
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
    return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.p, {
      value: e.value,
      key: e.value
    }, e.renderContent())
  })))
})
var OO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "sizeType" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var i = Object.values($$_$$_$$_$$_src_editor_widget_builtIn_types.s)
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
        className: Classnames($_2541.default, "switch-default"),
        style: {
          backgroundColor: $$_$$_$$_$$_src_shared_tools_index.hb(e, .3)
        }
      }, React.createElement("div", {
        className: $_2541.handle,
        style: {
          backgroundColor: e
        }
      }))
    }
  }, {
    value: $_163.c.PRIMARY,
    renderContent: function (e) {
      return React.createElement("div", {
        className: Classnames($_2541.primary, "switch-primary"),
        style: {
          backgroundColor: e
        }
      }, React.createElement("div", {
        className: $_2541.handle
      }))
    }
  }
]
var CO = memo(function (e) {
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var i = e$getValue("color")
  var a = e$getValue("backgroundMode") || $_163.a.TEMPLATE
  var s = e$getValue("mode") || $_163.c.DEFAULT
  var c = e$getValue("backgroundOpenImage") || $_131.b
  var l = e$getValue("backgroundCloseImage") || $_131.a
  var u = c
  var d = Et.hb(c)
  if (!$$_$$_$$_$$_src_shared_tools_index.U(c) && d) {
    u = (null === d || undefined === d ? undefined : d.source) || (null === d || undefined === d ? undefined : d.cdnUrl)
  }
  return React.createElement("div", {
    className: Classnames($_2541.formItemWrapper, $_2541.buttonWrapper, "coco-form-item", "coco-form-item-vertical")
  }, React.createElement("div", {
    className: $_2541.backgroundLabel
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "background"
  })), React.createElement("div", {
    className: $_2541.modeActionWrapper
  }, React.createElement("div", {
    className: Classnames($_2541.modeTemplate, a === $_163.a.TEMPLATE && $_2541.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", $_163.a.TEMPLATE)
    }
  }, $_710$a$formatMessage({
    id: "template"
  })), React.createElement("div", {
    className: Classnames($_2541.modeImage, a === $_163.a.IMAGE && $_2541.backgroundSelected),
    onClick: function () {
      e$onChange("backgroundMode", $_163.a.IMAGE)
    }
  }, $_710$a$formatMessage({
    id: "image"
  })))), a === $_163.a.TEMPLATE && React.createElement("div", {
    className: $_2541.backgroundWrapper
  }, React.createElement("div", {
    className: $_2541.templateMode
  }, React.createElement(hb, {
    modeList: wO,
    value: s,
    onChange: function (e) {
      e$onChange("mode", e)
    },
    params: [i]
  }, wO.map(function (e) {
    return React.createElement($$_$$_$$_$$_src_shared_ui_components_index.p, {
      key: e.value,
      value: e.value
    }, e.renderContent(i))
  }))), React.createElement("div", {
    className: $_2541.templateColor
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "templateColor"
  })), React.createElement(mb, {
    width: 43,
    keyName: "color",
    onChange: e$onChange,
    color: i
  }))), a === $_163.a.IMAGE && React.createElement(React.Fragment, null, React.createElement("div", {
    className: $_2541.backgroundWrapper
  }, React.createElement("div", {
    className: $_2541.backgroundImage
  }, React.createElement("img", {
    src: u,
    alt: ""
  })), React.createElement("div", {
    className: $_2541.cover
  }, React.createElement("div", {
    className: $_2541.editBtn,
    onClick: function () {
      $_37_index.a($$_$$_$$_$$_src_editor_redux_common_actions.Hj({
        visible: true,
        widgetId: e$widgetId,
        imageCloseFileId: l,
        imageOpenFileId: c
      }))
    }
  }, $_710$a$formatMessage({
    id: "edit"
  })))), React.createElement("div", {
    style: {
      marginTop: 10,
      marginBottom: 3
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.s, {
    className: Classnames($_2541.radioWrapper, $_2541.sizeRadioBox),
    value: e$getValue("imageResizeMode") || $_163.b.CONTAIN,
    onChange: function (e) {
      e$onChange("imageResizeMode", e)
    }
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: $_163.b.CONTAIN
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-contain"
  }), $_710$a$formatMessage({
    id: "".concat($_163.b.CONTAIN)
  })), React.createElement($$_$$_$$_$$_src_shared_ui_components_index.t, {
    value: $_163.b.STRETCH
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-stretch"
  }), $_710$a$formatMessage({
    id: "".concat($_163.b.STRETCH)
  }))))))
})
export { EO }
export { OO }
export { CO }
