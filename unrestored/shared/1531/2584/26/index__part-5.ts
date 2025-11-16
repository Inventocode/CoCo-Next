/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-5
 */

"use strict"

import { "26__part-1__h" as h } from "./index__part-1"
import { "26__part-4__me" as me, "26__part-4__ge" as ge, "26__part-4__Ee" as Ee } from "./index__part-4"
import * as /* [auto-meaningful-name] */$$_206_index from "../206/index"
import * as /* [auto-meaningful-name] */$$_227_index from "../227/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../../src/shared/events/messages-wrapper"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions from "../../../../../src/shared/events/actions"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$$_40 from "../40"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_125_index from "../125/index"
import * as /* [auto-meaningful-name] */$$_49 from "../49"
var Ce = -20
var Te = -4
var Se = [-12, -16]
var Ie = [-20, -20]
var Ae = "<svg width=\"".concat(24, "px\" height=\"").concat(24, "px\" class=\"icon\" aria-hidden=\"true\">\n  <use xlink:href=\"#icon-block-drag-delete\"></use>\n</svg>")
var je = new (function () {
  function e() {
    $$_27.a(this, e)
    this.iconGroup = undefined
    this.iconGroup = function () {
      var e = $$_17_index.BU.dom.create_svg_element("g", {
        class: "blocklyDeleteIcon"
      })
      $$_17_index.BU.dom.create_svg_element("g", {
        id: "block_delete_icon_animate_id",
        class: "blocklyDeleteIconShow"
      }, e).innerHTML = Ae
      return e
    }()
  }
  $$_40.a(e, [{
    key: "removeDisposeAnimation",
    value: function () {
      var e = this.iconGroup.querySelector("#".concat("block_delete_icon_animate_id"))
      if (e) {
        e.classList.remove("blocklyDeleteIconDispose")
      }
    }
  }, {
    key: "create",
    value: function (e) {
      var t
      this.removeDisposeAnimation()
      var n = function (e) {
        var t = $$_17_index.vec2.fromValues(-12, -12)
        if ($$_17_index.BU.base.is_workspace_comment(e)) {
          return $$_17_index.vec2.add(t, t, e.is_expanded() ? Ie : Se)
        }
        if (!$$_17_index.BU.base.is_block_svg(e)) {
          return t
        }
        var n = [0, 0]
        if (e.is_starting_block()) {
          n[0] = Ce
          n[1] = Te
        } else if (e.output_connection) {
          var r = e.output_connection.check_ && e.output_connection.check_.indexOf("Boolean") > -1
          n[0] = r ? 10 : 4
        }
        $$_17_index.vec2.add(t, t, n)
        return t
      }(e)
      this.iconGroup.setAttribute("transform", "translate(".concat(n[0], ", ").concat(n[1], ")"))
      var r = null === (t = e.workspace.get_block_drag_surface()) || undefined === t ? undefined : t.get_group()
      if (r) {
        r.appendChild(this.iconGroup)
      }
    }
  }, {
    key: "remove",
    value: function () {
      var e = this.iconGroup.querySelector("#".concat("block_delete_icon_animate_id"))
      if (e) {
        e.classList.add("blocklyDeleteIconDispose")
        $$_17_index.BU.dom.remove_node(this.iconGroup)
      }
    }
  }])
  return e
}())()
function Ne() {
  $$_17_index.Blink.mainWorkspace.add_event_listener($$_17_index.I.BlockEventType.UI, De)
  $$_17_index.Blink.mainWorkspace.add_change_listener(xe)
  $$_17_index.Blink.mainWorkspace.add_event_listener($$_17_index.I.BlockEventType.DELETE, function () {
    Ee.eventBus.emit($$_206_index.a.DELETE_BLOCK)
  })
  $$_17_index.Blink.mainWorkspace.add_event_listener($$_17_index.I.BlockEventType.START_DRAG, Pe)
  $$_17_index.Blink.mainWorkspace.add_event_listener($$_17_index.I.BlockEventType.END_DRAG, Be)
  $$_17_index.Blink.mainWorkspace.add_event_listener($$_17_index.I.BlockEventType.DRAG_AREA_CHANGE, Fe)
  var /* [auto-meaningful-name] */$$_17_index$Blink$widget_div$DIV = $$_17_index.Blink.widget_div.DIV
  document.addEventListener("focusout", function (e) {
    var /* [auto-meaningful-name] */e$relatedTarget
    var /* [auto-meaningful-name] */_e$relatedTarget
    var r = document.querySelector(".slider-controller")
    var o = $$_125_index.is_parent(r, e.relatedTarget)
    var i = document.querySelector(".angle-controller")
    var a = $$_125_index.is_parent(i, e.relatedTarget)
    var s = document.querySelector(".color-controller")
    var l = $$_125_index.is_parent(s, e.relatedTarget)
    var u = "menu-item" === (null === (e$relatedTarget = e.relatedTarget) || undefined === e$relatedTarget ? undefined : e$relatedTarget.className)
    var d = "blocklyHtmlInput" === (null === (_e$relatedTarget = e.relatedTarget) || undefined === _e$relatedTarget ? undefined : _e$relatedTarget.className)
    if (!(o || a || l || d || u)) {
      $$_17_index.Blink.widget_div.hide()
    }
  })
  if (!(null === $$_17_index$Blink$widget_div$DIV || undefined === $$_17_index$Blink$widget_div$DIV)) {
    $$_17_index$Blink$widget_div$DIV.addEventListener("contextmenu", function (e) {
      e.preventDefault()
    })
  }
}
var Re
var ke = [$$_17_index.I.BlockEventType.CHANGE, $$_17_index.I.BlockEventType.CREATE, $$_17_index.I.BlockEventType.DELETE, $$_17_index.I.BlockEventType.MOVE]
function xe(e) {
  if (-1 !== ke.indexOf(e.type)) {
    Ee.eventBus.emit($$_206_index.a.COMMON_BLOCKS, {
      canRedo: $$_17_index.Blink.mainWorkspace.get_redo_stack().length > 0,
      canUndo: $$_17_index.Blink.mainWorkspace.get_undo_stack().length > 0
    })
  }
}
function De(e) {
  switch (Ee.stopWarningAnimation(), e.type) {
    case $$_17_index.I.UIEventType.SCALE:
      !function (e) {
        var t = Number(e.get_new_value())
        Ee.eventBus.emit($$_206_index.a.WORKSPACE_SCALE_CHANGE, $$_15.M(t, me, ge))
      }(e)
      break
    case $$_17_index.I.UIEventType.FLYOUT_SHOW:
      !function (e) {
        var t = e.get_new_value()
        Ee.eventBus.emit($$_206_index.a.FLYOUT_CHANGE, !!t)
      }(e)
      break
    case $$_17_index.I.UIEventType.CATEGORY_WILL_CHANGE:
      !function (e) {
        var t
        var n = null === (t = e.get_new_value()) || undefined === t ? undefined : t.get_name()
        if (n) {
          $$_227_index.e(n)
        }
      }(e)
      break
    case $$_17_index.I.UIEventType.SELECTED:
      !function (e) {
        var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent
        var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent$emit
        var r = e.get_new_value()
        if (!(null === ($$_49$oTHelper$customEvent = $$_49.oTHelper.customEvent) || undefined === $$_49$oTHelper$customEvent || null === ($$_49$oTHelper$customEvent$emit = $$_49$oTHelper$customEvent.emit) || undefined === $$_49$oTHelper$customEvent$emit)) {
          $$_49$oTHelper$customEvent$emit.focusItem("block", r)
        }
      }(e)
      break
    case $$_17_index.I.UIEventType.CATEGORY:
      Me(e)
      break
    case $$_17_index.I.UIEventType.V_SCROLLBAR_SET:
    case $$_17_index.I.UIEventType.H_SCROLLBAR_SET:
    case $$_17_index.I.UIEventType.CLICK:
    case $$_17_index.I.UIEventType.CONTEXT_MENU_OPEN:
      Ue()
  }
}
var Me = function (e) {
  var t = h.getSelectWidgetCategoryName() || h.lastSelectedWidgetCategoryName
  if (t) {
    h.changeSelectWidgetCategoryStyle(t)
    Ee.eventBus.emit($$_206_index.a.SELECT_WIDGET_CATEGORY, t)
  }
  var n = e.get_new_value()
  if (n) {
    var r = n.get_tree()
    if (r !== Re && r && r !== $$_17_index.Blink.mainWorkspace.get_toolbox()) {
      var o
      var /* [auto-meaningful-name] */o$classList
      var a
      if (Re) {
        if (!(null === (a = Re.get_element()) || undefined === a)) {
          a.classList.remove("cocoTreeRelated")
        }
      }
      if (!(null === (o = (Re = r).get_element()) || undefined === o || null === (o$classList = o.classList) || undefined === o$classList)) {
        o$classList.add("cocoTreeRelated")
      }
    }
  } else {
    var s
    if (Re) {
      if (!(null === (s = Re.get_element()) || undefined === s)) {
        s.classList.remove("cocoTreeRelated")
      }
      Re = undefined
    }
  }
}
var Le = false
function Pe(e) {
  Ue()
  Le = e._is_from_flyout
  Ge(1)
}
function Be(e) {
  $$_$$_$$_$$_$$_src_shared_events_actions.d.dispatch($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ti(false))
}
function Fe(e) {
  var t
  var /* [auto-meaningful-name] */e$area = e.area
  var /* [auto-meaningful-name] */e$is_in = e.is_in
  var o = e.get_block_id()
  t = o
  var i = $$_17_index.Blink.mainWorkspace.get_block_by_id(t)
  if (!$$_17_index.BU.base.is_workspace_comment(i) || !i.get_parent_block()) {
    switch (e$area) {
      case $$_17_index.I.DragArea.INJECTION_DIV:
        break
      case $$_17_index.I.DragArea.DELETE_AREA:
        if (i) {
          (function (e, t) {
            if (Le) {
              return
            }
            if (!Le) {
              $$_$$_$$_$$_$$_src_shared_events_actions.d.dispatch($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.ti(t))
            }
            if (t) {
              je.create(e)
            } else {
              je.remove()
            }
            Ge(t ? .7 : 1)
          })(i, e$is_in)
        }
        break
      case $$_17_index.I.DragArea.WORKSPACE:
    }
  }
}
function Ge(e) {
  var t
  if (!(e > 1 || e < 0)) {
    var n = null === (t = $$_17_index.Blink.mainWorkspace.get_block_drag_surface()) || undefined === t ? undefined : t.get_group()
    if (n) {
      if (1 === e) {
        n.removeAttribute("opacity")
      } else {
        n.setAttribute("opacity", "".concat(e))
      }
    }
  }
}
function Ue() {
  var e = Ee.getDebuggingBlock()
  if (e) {
    e.set_glow_stack(false)
  }
}
export { Ne as "26__part-5__Ne" }
