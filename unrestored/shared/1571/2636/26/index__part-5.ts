/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-5
 */

"use strict"

import { h } from "./index__part-1"
import { me, ge, Ee } from "./index__part-4"
import * as /* [auto-meaningful-name] */$$_207_index from "../207/index"
import * as /* [auto-meaningful-name] */$$_228_index from "../228/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_37_index from "../37/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_tools_index from "../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index from "../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_123_index from "../123/index"
import * as /* [auto-meaningful-name] */$$_49 from "../49"
var Ce = -20
var Te = -4
var Se = [-12, -16]
var Ae = [-20, -20]
var Ie = "<svg width=\"".concat(24, "px\" height=\"").concat(24, "px\" class=\"icon\" aria-hidden=\"true\">\n  <use xlink:href=\"#icon-block-drag-delete\"></use>\n</svg>")
var je = new (function () {
  function e() {
    $$_27.a(this, e)
    this.iconGroup = undefined
    this.iconGroup = function () {
      var e = $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.dom.create_svg_element("g", {
        class: "blocklyDeleteIcon"
      })
      $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.dom.create_svg_element("g", {
        id: "block_delete_icon_animate_id",
        class: "blocklyDeleteIconShow"
      }, e).innerHTML = Ie
      return e
    }()
  }
  $$_39.a(e, [
    {
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
          var t = $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.vec2.fromValues(-12, -12)
          if ($$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.base.is_workspace_comment(e)) {
            return $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.vec2.add(t, t, e.is_expanded() ? Ae : Se)
          }
          if (!$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.base.is_block_svg(e)) {
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
          $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.vec2.add(t, t, n)
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
          $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.dom.remove_node(this.iconGroup)
        }
      }
    }
  ])
  return e
}())()
function Ne() {
  $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.add_event_listener($$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.UI, De)
  $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.add_change_listener(xe)
  $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.add_event_listener($$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.DELETE, function () {
    Ee.eventBus.emit($$_207_index.a.DELETE_BLOCK)
  })
  $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.add_event_listener($$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.START_DRAG, Pe)
  $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.add_event_listener($$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.END_DRAG, Be)
  $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.add_event_listener($$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.DRAG_AREA_CHANGE, Fe)
  var /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index$Blink$widget_div$DIV = $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.widget_div.DIV
  document.addEventListener("focusout", function (e) {
    var /* [auto-meaningful-name] */e$relatedTarget
    var /* [auto-meaningful-name] */e$relatedTarget1
    var r = document.querySelector(".slider-controller")
    var o = $$_123_index.is_parent(r, e.relatedTarget)
    var i = document.querySelector(".angle-controller")
    var a = $$_123_index.is_parent(i, e.relatedTarget)
    var s = document.querySelector(".color-controller")
    var l = $$_123_index.is_parent(s, e.relatedTarget)
    var u = "menu-item" === (null === (e$relatedTarget = e.relatedTarget) || undefined === e$relatedTarget ? undefined : e$relatedTarget.className)
    var d = "blocklyHtmlInput" === (null === (e$relatedTarget1 = e.relatedTarget) || undefined === e$relatedTarget1 ? undefined : e$relatedTarget1.className)
    if (!(o || a || l || d || u)) {
      $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.widget_div.hide()
    }
  })
  if (!(null === $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index$Blink$widget_div$DIV || undefined === $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index$Blink$widget_div$DIV)) {
    $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index$Blink$widget_div$DIV.addEventListener("contextmenu", function (e) {
      e.preventDefault()
    })
  }
}
var Re
var ke = [$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.CHANGE, $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.CREATE, $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.DELETE, $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.BlockEventType.MOVE]
function xe(e) {
  if (-1 !== ke.indexOf(e.type)) {
    Ee.eventBus.emit($$_207_index.a.COMMON_BLOCKS, {
      canRedo: $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_redo_stack().length > 0,
      canUndo: $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_undo_stack().length > 0
    })
  }
}
function De(e) {
  switch (Ee.stopWarningAnimation(), e.type) {
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.SCALE:
      !function (e) {
        var t = Number(e.get_new_value())
        Ee.eventBus.emit($$_207_index.a.WORKSPACE_SCALE_CHANGE, $$_$$_$$_$$_$$_src_shared_tools_index.M(t, me, ge))
      }(e)
      break
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.FLYOUT_SHOW:
      !function (e) {
        var t = e.get_new_value()
        Ee.eventBus.emit($$_207_index.a.FLYOUT_CHANGE, !!t)
      }(e)
      break
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.CATEGORY_WILL_CHANGE:
      !function (e) {
        var t
        var n = null === (t = e.get_new_value()) || undefined === t ? undefined : t.get_name()
        if (n) {
          $$_228_index.e(n)
        }
      }(e)
      break
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.SELECTED:
      !function (e) {
        var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent
        var /* [auto-meaningful-name] */$$_49$oTHelper$customEvent$emit
        var r = e.get_new_value()
        if (!(null === ($$_49$oTHelper$customEvent = $$_49.oTHelper.customEvent) || undefined === $$_49$oTHelper$customEvent || null === ($$_49$oTHelper$customEvent$emit = $$_49$oTHelper$customEvent.emit) || undefined === $$_49$oTHelper$customEvent$emit)) {
          $$_49$oTHelper$customEvent$emit.focusItem("block", r)
        }
      }(e)
      break
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.CATEGORY:
      Me(e)
      break
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.V_SCROLLBAR_SET:
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.H_SCROLLBAR_SET:
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.CLICK:
    case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.UIEventType.CONTEXT_MENU_OPEN:
      We()
  }
}
var Me = function (e) {
  var t = h.getSelectWidgetCategoryName() || h.lastSelectedWidgetCategoryName
  if (t) {
    h.changeSelectWidgetCategoryStyle(t)
    Ee.eventBus.emit($$_207_index.a.SELECT_WIDGET_CATEGORY, t)
  }
  var n = e.get_new_value()
  if (n) {
    var r = n.get_tree()
    if (r !== Re && r && r !== $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_toolbox()) {
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
  We()
  Le = e._is_from_flyout
  Ge(1)
}
function Be(e) {
  $$_37_index.d.dispatch($$_$$_$$_$$_$$_src_editor_redux_common_actions.ti(false))
}
function Fe(e) {
  var t
  var /* [auto-meaningful-name] */e$area = e.area
  var /* [auto-meaningful-name] */e$is_in = e.is_in
  var o = e.get_block_id()
  t = o
  var i = $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_block_by_id(t)
  if (!$$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.BU.base.is_workspace_comment(i) || !i.get_parent_block()) {
    switch (e$area) {
      case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.DragArea.INJECTION_DIV:
        break
      case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.DragArea.DELETE_AREA:
        if (i) {
          (function (e, t) {
            if (Le) {
              return
            }
            if (!Le) {
              $$_37_index.d.dispatch($$_$$_$$_$$_$$_src_editor_redux_common_actions.ti(t))
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
      case $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.I.DragArea.WORKSPACE:
    }
  }
}
function Ge(e) {
  var t
  if (!(e > 1 || e < 0)) {
    var n = null === (t = $$_$$_$$_$$_$$_src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_block_drag_surface()) || undefined === t ? undefined : t.get_group()
    if (n) {
      if (1 === e) {
        n.removeAttribute("opacity")
      } else {
        n.setAttribute("opacity", "".concat(e))
      }
    }
  }
}
function We() {
  var e = Ee.getDebuggingBlock()
  if (e) {
    e.set_glow_stack(false)
  }
}
export { Ne }
