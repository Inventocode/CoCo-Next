/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-147
 */

"use strict"

import * as /* [auto-meaningful-name] */$_20_index from "./20/index"
import * as /* [auto-meaningful-name] */$_17_index from "./17/index"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_550 from "./550"
import * as /* [auto-meaningful-name] */$_423 from "./423"
import /* [auto-meaningful-name] */$_4231 from "./423"
var OT = React1.memo(function () {
  var e
  var t = $_16_index.e(function (e) {
    return e.block.dropdown
  })
  var /* [auto-meaningful-name] */t$blockInfo = t.blockInfo
  var /* [auto-meaningful-name] */t$blockInfo$sourceBlockId = t$blockInfo.sourceBlockId
  var /* [auto-meaningful-name] */t$blockInfo$fieldName = t$blockInfo.fieldName
  var /* [auto-meaningful-name] */t$options = t.options
  var a = $_17_index.Blink.mainWorkspace.get_block_by_id(t$blockInfo$sourceBlockId)
  var s = (null === a || undefined === a ? undefined : a.get_field_value("WIDGET_ID")) || (null === a || undefined === a || null === (e = a.get_parent()) || undefined === e ? undefined : e.get_field_value("WIDGET_ID"))
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var l = $_16_index.d()
  if (!s) {
    console.error("actorId is null")
    return null
  }
  function u() {
    if (s) {
      l($$_$$_$$_$$_src_editor_redux_common_actions.Dh(s, function (e, t) {
        var n = null === a || undefined === a ? undefined : a.type
        var r = null === a || undefined === a ? undefined : a.get_parent()
        switch (n) {
          case "actor_style_input":
          case "actor_action_input":
            if (r) {
              setTimeout(function () {
                var n = $_20_index.getActorActionInputField(r)
                var o = $_20_index.getActorStyleInputField(r)
                if (n) {
                  if (!(null === n || undefined === n)) {
                    n.set_value(e)
                  }
                }
                if (o) {
                  if (t) {
                    if (!(null === o || undefined === o)) {
                      o.set_value(t)
                    }
                  } else {
                    if (!(null === o || undefined === o)) {
                      o.set_value(Et.h)
                    }
                  }
                }
              }, 0)
            }
            break
          default:
            if (!(null === a || undefined === a)) {
              a.set_field_value(e, "ACTOR_ACTION_ID")
            }
            if (t && (null === a || undefined === a ? undefined : a.get_field_value("ACTOR_STYLE_ID"))) {
              if (!(null === a || undefined === a)) {
                a.set_field_value(t, "ACTOR_STYLE_ID")
              }
            }
        }
      }))
    } else {
      console.error("actorId is null")
    }
  }
  return React.createElement($_13_index.w, {
    className: $_4231.container,
    open: t.visible,
    value: t.value,
    onChange: function (e) {
      if ("__EMPTY_VALUE__" !== e) {
        t.setValue(e)
      }
      l($$_$$_$$_$$_src_editor_redux_common_actions.gh())
    }
  }, function () {
    var e = []
    switch (t$blockInfo$fieldName) {
      case "ACTOR_STYLE_ID":
        e = t$options.map(function (e, t) {
          if (!$_17_index.BU.base.is_old_dropdown_option(e) && "basic" === e.type) {
            var /* [auto-meaningful-name] */e$value = e.value
            var /* [auto-meaningful-name] */e$text = e.text
            if (e$value !== Et.h) {
              if ("DROPDOWN_ADD_BUTTON" === e$value) {
                return React.createElement($_13_index.p, {
                  value: "__EMPTY_VALUE__",
                  key: e$value
                }, React.createElement("div", {
                  className: $_4231.addOption,
                  onClick: u
                }, React.createElement($_13_index.j, {
                  type: "icon-add"
                }), $_710_index$a$formatMessage({
                  id: "actorAddStyle"
                })))
              }
              var o = function (e, t) {
                var n = Et.Bb(e)
                if (n) {
                  var /* [auto-meaningful-name] */n$attributes$actionList = n.attributes.actionList
                  var o = []
                  n$attributes$actionList.forEach(function (e) {
                    var /* [auto-meaningful-name] */e$styleList = e.styleList
                    o.push.apply(o, $_25_index.a(e$styleList))
                  })
                  var i = o.find(function (e) {
                    return e.id === t
                  })
                  if (i) {
                    var /* [auto-meaningful-name] */i$source = i.source
                    return Et.mb(i$source)
                  }
                }
              }(s, e$value)
              return React.createElement($_13_index.p, {
                value: e$value,
                key: e$value
              }, React.createElement("span", {
                className: $_4231.itemIndex
              }, t + 1, "."), React.createElement("div", {
                className: $_4231.styleItem
              }, React.createElement("div", {
                className: $_4231.imgContainer
              }, o ? React.createElement("img", {
                className: $_4231.styleImg,
                src: o,
                alt: e$text
              }) : React.createElement("span", {
                className: $_4231.styleEmptyImg
              })), React.createElement("span", {
                className: $_4231.styleName
              }, e$text)))
            }
          }
        })
        break
      case "ACTOR_ACTION_ID":
        e = t$options.map(function (e) {
          if (!$_17_index.BU.base.is_old_dropdown_option(e) && "basic" === e.type) {
            var /* [auto-meaningful-name] */e$text = e.text
            var /* [auto-meaningful-name] */e$value = e.value
            var r = function (e, t) {
              var n = Et.Bb(e)
              if (n) {
                var r = n.attributes.actionList.find(function (e) {
                  return e.id === t
                })
                if (r) {
                  var o = r.styleList[0]
                  if (o) {
                    var /* [auto-meaningful-name] */o$source = o.source
                    return Et.mb(o$source)
                  }
                }
              }
            }(s, e$value)
            return "DROPDOWN_ADD_BUTTON" === e$value ? React.createElement($_13_index.p, {
              value: "__EMPTY_VALUE__",
              key: e$value
            }, React.createElement("div", {
              className: $_4231.addOption,
              onClick: u
            }, React.createElement($_13_index.j, {
              type: "icon-add"
            }), $_710_index$a$formatMessage({
              id: "ActorStyleDialog.addAction"
            }))) : React.createElement($_13_index.p, {
              value: e$value,
              key: e$value
            }, React.createElement("div", {
              className: $_4231.actionItem
            }, React.createElement("div", {
              className: $_4231.imgContainer
            }, r ? React.createElement("img", {
              className: $_4231.actionImg,
              src: r,
              alt: e$text
            }) : React.createElement("span", {
              className: $_4231.actionEmptyImg,
              style: {
                backgroundImage: "url(".concat($_550.a, ")")
              }
            })), React.createElement("span", {
              className: $_4231.actionName
            }, e$text)))
          }
        })
    }
    return e
  }())
})
export { OT }
