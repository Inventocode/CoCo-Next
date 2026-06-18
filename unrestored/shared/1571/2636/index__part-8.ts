/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-8
 */

"use strict"

import { Re } from "../../../../src/editor/ui/Dialogs/open-project/MyProject/index"
import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"./141/index"
import /* [auto-meaningful-name] */Module_525 from /* 525 */"./525"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"./18"
import * as /* [auto-meaningful-name] */Src_editor_redux_common_actions from /* 2 */"../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import * as /* [auto-meaningful-name] */Module_11 from /* 11 */"./11"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_710 from /* 710 */"./710"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import { useDispatch, useSelector } from /* 16 */"react-redux"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import { memo } from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Axios from /* 129 */"axios"
import /* [auto-meaningful-name] */Axios1 from /* 129 */"axios"
import * as /* [auto-meaningful-name] */Module_495 from /* 495 */"./495"
import /* [auto-meaningful-name] */Module_4951 from /* 495 */"./495"
var Le = memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var r = useDispatch()
  var o = useSelector(function (e) {
    return e.common.templateList
  })
  var i = function () {
    var e = Module_7.a(RegeneratorRuntime.mark(function e(t, o) {
      var /* [auto-meaningful-name] */e$sent
      var /* [auto-meaningful-name] */e$sent$data
      return RegeneratorRuntime.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              e.next = 2
              return Axios1.get(t)
            case 2:
              if ((e$sent = e.sent).data) {
                e$sent$data = e$sent.data
                e$importProjectJson({
                  json: e$sent$data,
                  jsonFrom: Module_18.d.TEMPLATE,
                  sourceTag: Module_18.g.TEMPLATE,
                  sourceId: o
                })
              }
              r(Src_editor_redux_common_actions.Xg())
              Module_141.a("TemplateClick", {
                templateName: o
              })
            case 6:
            case "end":
              return e.stop()
          }
        }
      }, e)
    }))
    return function (t, n) {
      return e.apply(this, arguments)
    }
  }()
  return e$visible ? React.createElement("div", {
    className: Module_4951.container
  }, React.createElement("div", {
    className: Module_4951.itemContainer,
    onClick: function () {
      e$importProjectJson()
      r(Src_editor_redux_common_actions.Xg())
    }
  }, React.createElement("div", {
    className: Classnames(Module_4951.emptyItem, Module_4951.item)
  }, React.createElement("div", {
    className: Module_4951.emptyContent
  }, React.createElement("span", {
    className: Module_4951.iconContainer
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-add",
    className: Module_4951.icon
  })), React.createElement("p", {
    className: Module_4951.text
  }, "创建空白作品")))), o.length > 0 && o.map(function (e) {
    return React.createElement("div", {
      className: Module_4951.itemContainer,
      key: e.id,
      onClick: function () {
        i(e.bcmUrl, e.name)
      }
    }, React.createElement("div", {
      className: Classnames(Module_4951.item),
      style: {
        backgroundImage: "url(".concat(e.image, ")")
      }
    }, React.createElement("img", {
      src: e.gif,
      alt: e.name,
      className: Module_4951.gif
    })))
  })) : null
})
var Pe = memo(function (e) {
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var /* [auto-meaningful-name] */Module_710$a$formatMessage = Module_710.a().formatMessage
  var r = useDispatch()
  var o = useSelector(function (e) {
    return e.common.projectDialog
  })
  var /* [auto-meaningful-name] */o$visible = o.visible
  var /* [auto-meaningful-name] */o$selected = o.selected
  var s = function (e) {
    r(Src_editor_redux_common_actions.Ah(e))
  }
  return o$visible ? React.createElement(Src_shared_ui_components_index.f, {
    visible: o$visible,
    className: Module_525.container,
    onClose: function () {
      r(Src_editor_redux_common_actions.Xg())
    }
  }, React.createElement("div", {
    className: Module_525.wrapper
  }, React.createElement("header", {
    className: Module_525.header
  }, React.createElement("div", {
    className: Classnames(Module_525.tabItem, Module_11.a({}, Module_525.selected, o$selected === Module_18.f.CREATE_PROJECT)),
    onClick: function () {
      s(Module_18.f.CREATE_PROJECT)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-new-project",
    className: Module_525.icon
  }), Module_710$a$formatMessage({
    id: "projectDialog.newProject"
  })), React.createElement("div", {
    className: Classnames(Module_525.tabItem, Module_11.a({}, Module_525.selected, o$selected === Module_18.f.MY_PROJECT)),
    onClick: function () {
      s(Module_18.f.MY_PROJECT)
    }
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-my-project",
    className: Module_525.icon
  }), Module_710$a$formatMessage({
    id: "projectDialog.myProject"
  }))), React.createElement("div", {
    className: Module_525.content
  }, React.createElement(Le, {
    visible: o$selected === Module_18.f.CREATE_PROJECT,
    importProjectJson: e$importProjectJson
  }), React.createElement(Re, {
    visible: o$selected === Module_18.f.MY_PROJECT,
    importProjectJson: e$importProjectJson
  })))) : null
})
export { Pe }
