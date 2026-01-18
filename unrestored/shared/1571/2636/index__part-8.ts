/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-8
 */

"use strict"

import { Re } from "../../../../src/editor/ui/dialogs/open-project/my/index"
import * as /* [auto-meaningful-name] */$_141_index from "./141/index"
import /* [auto-meaningful-name] */$_525 from "./525"
import * as K from "./18"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as k from "./11"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as O from "./7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */Axios from "axios"
import /* [auto-meaningful-name] */Axios1 from "axios"
import * as /* [auto-meaningful-name] */$_495 from "./495"
import /* [auto-meaningful-name] */$_4951 from "./495"
var Le = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var r = $_16_index.d()
  var o = $_16_index.e(function (e) {
    return e.common.templateList
  })
  var i = function () {
    var e = O.a(RegeneratorRuntime.mark(function e(t, o) {
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
                  jsonFrom: K.d.TEMPLATE,
                  sourceTag: K.g.TEMPLATE,
                  sourceId: o
                })
              }
              r($$_$$_$$_$$_src_editor_redux_common_actions.Xg())
              $_141_index.a("TemplateClick", {
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
    className: $_4951.container
  }, React.createElement("div", {
    className: $_4951.itemContainer,
    onClick: function () {
      e$importProjectJson()
      r($$_$$_$$_$$_src_editor_redux_common_actions.Xg())
    }
  }, React.createElement("div", {
    className: N($_4951.emptyItem, $_4951.item)
  }, React.createElement("div", {
    className: $_4951.emptyContent
  }, React.createElement("span", {
    className: $_4951.iconContainer
  }, React.createElement($_13_index.j, {
    type: "icon-add",
    className: $_4951.icon
  })), React.createElement("p", {
    className: $_4951.text
  }, "创建空白作品")))), o.length > 0 && o.map(function (e) {
    return React.createElement("div", {
      className: $_4951.itemContainer,
      key: e.id,
      onClick: function () {
        i(e.bcmUrl, e.name)
      }
    }, React.createElement("div", {
      className: N($_4951.item),
      style: {
        backgroundImage: "url(".concat(e.image, ")")
      }
    }, React.createElement("img", {
      src: e.gif,
      alt: e.name,
      className: $_4951.gif
    })))
  })) : null
})
var Pe = React1.memo(function (e) {
  var /* [auto-meaningful-name] */e$importProjectJson = e.importProjectJson
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var r = $_16_index.d()
  var o = $_16_index.e(function (e) {
    return e.common.projectDialog
  })
  var /* [auto-meaningful-name] */o$visible = o.visible
  var /* [auto-meaningful-name] */o$selected = o.selected
  var s = function (e) {
    r($$_$$_$$_$$_src_editor_redux_common_actions.Ah(e))
  }
  return o$visible ? React.createElement($_13_index.f, {
    visible: o$visible,
    className: $_525.container,
    onClose: function () {
      r($$_$$_$$_$$_src_editor_redux_common_actions.Xg())
    }
  }, React.createElement("div", {
    className: $_525.wrapper
  }, React.createElement("header", {
    className: $_525.header
  }, React.createElement("div", {
    className: N($_525.tabItem, k.a({}, $_525.selected, o$selected === K.f.CREATE_PROJECT)),
    onClick: function () {
      s(K.f.CREATE_PROJECT)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-new-project",
    className: $_525.icon
  }), $_710_index$a$formatMessage({
    id: "projectDialog.newProject"
  })), React.createElement("div", {
    className: N($_525.tabItem, k.a({}, $_525.selected, o$selected === K.f.MY_PROJECT)),
    onClick: function () {
      s(K.f.MY_PROJECT)
    }
  }, React.createElement($_13_index.j, {
    type: "icon-my-project",
    className: $_525.icon
  }), $_710_index$a$formatMessage({
    id: "projectDialog.myProject"
  }))), React.createElement("div", {
    className: $_525.content
  }, React.createElement(Le, {
    visible: o$selected === K.f.CREATE_PROJECT,
    importProjectJson: e$importProjectJson
  }), React.createElement(Re, {
    visible: o$selected === K.f.MY_PROJECT,
    importProjectJson: e$importProjectJson
  })))) : null
})
export { Pe }
