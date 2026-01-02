/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-122
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_widget_builtIn_types from "../../../../src/editor/widget/built-in/types"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_621 from "./621"
import /* [auto-meaningful-name] */_$_ from "./621"
var JO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fields" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var i = e$getValue(n)
  var a = $_16_index.d()
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var c = Et.Bb(e$widgetId)
  if (!c) {
    return React.createElement(React.Fragment, null)
  }
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, _$_.storageFields)
  }, React.createElement("div", {
    className: _$_.title
  }, React.createElement("div", null, $_710_index$a$formatMessage({
    id: "initialData"
  })), React.createElement("span", {
    className: _$_.fieldsLength
  }, "键值对:", i.length)), React.createElement("div", {
    className: _$_.imageBox
  }, React.createElement("img", {
    className: _$_.image,
    src: "https://static.bcmcdn.com/coco/image/edit_localstorage_data_image.png",
    alt: "微数据库"
  }), React.createElement("div", {
    className: _$_.edit
  }, React.createElement("div", {
    className: _$_.btn,
    onClick: function () {
      if (c.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.y) {
        (function () {
          if (!c) {
            return
          }
          a($$_$$_$$_$$_src_editor_redux_common_actions.yj({
            title: "微数据库",
            widget: c,
            dbName: c.title,
            maxKeyLength: 2e3,
            data: i,
            onSave: function (e) {
              e.forEach(function (e) {
                if (e.key || e.value) {
                  e.value = "number" === e.type ? Number(e.value) : e.value
                }
              })
              a($$_$$_$$_$$_src_editor_redux_common_actions.Fg(e$widgetId, $_25_index.a(e)))
            }
          }))
        })()
      } else {
        if (c.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.l) {
          (function () {
            if (!c || c.type !== $$_$$_$$_$$_src_editor_widget_builtIn_types.l) {
              return
            }
            a($$_$$_$$_$$_src_editor_redux_common_actions.yj({
              title: "云微数据库",
              dbName: c.title,
              widget: c,
              maxKeyLength: 2e3,
              data: i,
              onSave: function (e) {
                a($$_$$_$$_$$_src_editor_redux_common_actions.Cg(e$widgetId, $_25_index.a(e)))
              }
            }))
          })()
        } else {
          if (c.type === $$_$$_$$_$$_src_editor_widget_builtIn_types.B) {
            (function () {
              if (!c) {
                return
              }
              a($$_$$_$$_$$_src_editor_redux_common_actions.yj({
                title: "微数据库",
                dbName: c.title,
                widget: c,
                maxKeyLength: 2e3,
                data: i,
                onSave: function (e) {
                  e.forEach(function (e) {
                    if (e.key || e.value) {
                      e.value = "number" === e.type ? Number(e.value) : e.value
                    }
                  })
                  a($$_$$_$$_$$_src_editor_redux_common_actions.Fg(e$widgetId, $_25_index.a(e)))
                }
              }))
            })()
          }
        }
      }
    }
  }, $_710_index$a$formatMessage({
    id: "edit"
  })))))
})
export { JO }
