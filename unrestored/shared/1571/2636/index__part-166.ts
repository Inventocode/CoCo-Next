/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-166
 */

"use strict"

import { fA } from "./index__part-163"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_752 from "./752"
import /* [auto-meaningful-name] */_$_ from "./752"
var IA = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = $_16_index.d()
  var s = function (e) {
    a($$_$$_$$_$$_src_editor_redux_common_actions.mg(e))
  }
  return React.createElement("div", {
    className: _$_.iconLayoutItem
  }, React.createElement("div", {
    className: _$_.iconBox
  }, React.createElement("div", {
    onClick: function () {
      if (Et.ub("ICON_FILE_ID", t).length > 0 || Et.Hb(t)) {
        a($$_$$_$$_$$_src_editor_redux_common_actions.zh({
          isDangerous: true,
          onConfirm: s.bind(null, t),
          allowText: $_710_index$a$formatMessage({
            id: "delete"
          }),
          title: $_710_index$a$formatMessage({
            id: "deleteIconFileTitle"
          }, {
            name: $_190.f(e$name || "", 10)
          }),
          content: $_710_index$a$formatMessage({
            id: "deleteIconFileTips"
          })
        }))
      } else {
        s(t)
      }
    },
    className: _$_.delete
  }, React.createElement($_13_index.j, {
    type: "icon-delete",
    className: _$_.iconDelete
  })), React.createElement("div", {
    className: _$_.content
  }, React.createElement("img", {
    draggable: "false",
    alt: e$name,
    src: e$cdnUrl || e$source
  }))), React.createElement("div", {
    className: _$_.fileItemName
  }, React.createElement(fA, {
    suffix: ".svg",
    isTrimmed: true,
    defaultValue: e$name,
    onBlur: function (e, n, r) {
      if (n) {
        if (n === e || function (e) {
          return Et.gb().some(function (t) {
            return t.name === e
          })
        }(n)) {
          r.target.value = e
          if (n !== e) {
            a($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710_index$a$formatMessage({
                id: "renameFileNameRepeatTips"
              }),
              duration: 2e3
            }))
          }
        } else {
          a($$_$$_$$_$$_src_editor_redux_common_actions.pg(t, e, n))
        }
      } else {
        r.target.value = e
      }
    }.bind(null, e$name)
  })))
})
export { IA }
