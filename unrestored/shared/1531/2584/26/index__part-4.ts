/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-4
 */

"use strict"

import { "26__part-1__h" as h } from "./index__part-1"
import { "26__part-3__te" as te } from "./index__part-3"
import * as /* [auto-meaningful-name] */$$_53 from "../53"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions from "../../../../../src/shared/events/actions"
import * as /* [auto-meaningful-name] */$$_206_208_index from "../206/208/index"
import * as Y from "../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as H from "../6"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as l from "../9"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_block_toolbox from "../../../../../src/editor/block/toolbox"
import * as /* [auto-meaningful-name] */$$_227_index from "../227/index"
import * as /* [auto-meaningful-name] */$$_206_index from "../206/index"
import * as /* [auto-meaningful-name] */$$_206_426 from "../206/426"
var /* [auto-meaningful-name] */$$_53$d = $$_53.d
var me = .5 * $$_53$d
var ge = 2 * $$_53$d
var _e = {
  zoom: {
    controls: false,
    wheel: false,
    startScale: $$_53$d,
    maxScale: ge,
    minScale: me,
    scaleSpeed: 1.2
  },
  notch: false,
  tooltip: true,
  flyout: {
    fixed_width: $$_53.b,
    corner_radius: 12,
    blocks: {
      default_gap: 12 / $$_53$d,
      head_block_offset: [14 / $$_53$d, 4 / $$_53$d]
    },
    padding: {
      left: 16 / $$_53$d,
      top: 24 / $$_53$d
    }
  },
  grid: {
    spacing: 10,
    step: 10
  },
  show_scrollbars: {
    flyout: false
  },
  delete_area_margin: 0,
  sounds: false,
  scrollable: {
    flyout: true
  },
  context_menu: {
    workspace: [$$_17_index.I.WorkspaceOptionType.PASTE, $$_17_index.I.WorkspaceOptionType.CLEAN_UP, $$_17_index.I.WorkspaceOptionType.DELETE_ALL, $$_17_index.I.WorkspaceOptionType.COPY_ALL, $$_17_index.I.WorkspaceOptionType.GLOBAL_COMMENT],
    block: [$$_17_index.I.BlockOptionType.COPY_AND_PASTE, $$_17_index.I.BlockOptionType.COPY, $$_17_index.I.BlockOptionType.ADD_COMMENT, $$_17_index.I.BlockOptionType.COLLAPSE, $$_17_index.I.BlockOptionType.DELETE, function (e) {
      return {
        text: $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_events_actions.b(), "Workspace.ContextMenu.blockToImage"),
        name: "blockToImage",
        enabled: true,
        callback: function () {
          var t = Y.a(RegeneratorRuntime.mark(function t() {
            return RegeneratorRuntime.wrap(function (t) {
              for (;;) {
                switch (t.prev = t.next) {
                  case 0:
                    e.unselect()
                    t.next = 3
                    return te(e.id)
                  case 3:
                  case "end":
                    return t.stop()
                }
              }
            }, t)
          }))
          return function () {
            return t.apply(this, arguments)
          }
        }()
      }
    }, function (e) {
      if (e.type !== $$_206_208_index.PROCEDURE_BLOCK_TYPES.CALL_NORETURN && e.type !== $$_206_208_index.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
        return
      }
      var t = function () {
        var t
        var n = $$_$$_$$_$$_$$_src_shared_events_actions.d.getState()
        var r = n.project.screens.get(n.project.currentScreenIndex)
        if (r) {
          var o = null === (t = Ee.getWorkspaceDataByScreenId(r.id)) || undefined === t ? undefined : t.getProcedureManager()
          if (o) {
            return o.get_procedure_by_caller_id(e.id)
          }
        }
      }()
      return {
        text: $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_events_actions.b(), "Workspace.ContextMenu.jumpToProcDef"),
        name: "jumpToProcDef",
        enabled: !!t && !t.disabled,
        callback: function () {
          if (t) {
            var /* [auto-meaningful-name] */t$def_id = t.def_id
            var n = $$_17_index.Blink.mainWorkspace.get_block_by_id(t$def_id)
            if (n) {
              $$_17_index.Blink.mainWorkspace.center_on_block(t$def_id)
              n.select()
              Ee.setDebuggingBlock(n)
              n.set_glow_stack(true)
            }
          }
        }
      }
    }]
  }
}
function ve(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "zh"
  Object.assign($$_17_index.Blink.Msg, e)
  $$_17_index.Blink.utils.set_language(t)
}
function be() {
  var e = Ee.getWorkspaceDataByScreenId(Ee.getCurrentScreenId())
  if (!e) {
    throw Error("No workspace selected")
  }
  return e.getProcedureManager()
}
function ye(e, t) {
  var n = $$_17_index.Blink.inject(e, H.a(H.a(H.a({}, _e), t), {}, {
    custom_svg_defs: $$_206_426.a,
    auto_resize: true
  }))
  var r = h.getToolbox()
  if (r) {
    r.get_flyout().hide()
    r.get_flyout().get_workspace().set_scale(.8)
    r.get_children().forEach(function (e) {
      return e.set_expanded(true)
    })
  }
  n.get_parent_svg().setAttribute("enable-animation", "true")
  Object.values($$_$$_$$_$$_$$_src_editor_block_toolbox.b).forEach(function (e, t) {
    $$_17_index.Blink.mainWorkspace.register_flyout_button(e, function () {
      var t = document.createElementNS($$_53.c, "foreignObject")
      t.style.overflow = "visible"
      var n = document.getElementById(e)
      if (n) {
        var /* [auto-meaningful-name] */n$clientWidth = n.clientWidth
        var /* [auto-meaningful-name] */n$clientHeight = n.clientHeight
        t.setAttribute("width", "".concat(n$clientWidth))
        t.setAttribute("height", "".concat(n$clientHeight))
        t.appendChild(n)
      }
      return {
        svg_group: t,
        update_callback: function (n) {
          var r = t.querySelector("#".concat(e))
          if (r) {
            var /* [auto-meaningful-name] */r$clientWidth = r.clientWidth
            var /* [auto-meaningful-name] */r$clientHeight = r.clientHeight
            r$clientWidth *= 1.25
            r$clientHeight *= 1.25
            t.setAttribute("width", "".concat(r$clientWidth))
            t.setAttribute("height", "".concat(r$clientHeight))
            n.width = r$clientWidth
            n.height = r$clientHeight
          }
        }
      }
    })
  })
  Object.values($$_$$_$$_$$_$$_src_editor_block_toolbox.a).forEach(function (e) {
    var t = {
      lineLabel: e.id,
      text: e.label
    }
    l.x([t], "category")
  })
  $$_227_index.d()
  $$_227_index.b(be)
  return n
}
var Ee = new $$_206_index.b()
export { $$_53$d as "26__part-4__he" }
export { me as "26__part-4__me" }
export { ge as "26__part-4__ge" }
export { ve as "26__part-4__ve" }
export { ye as "26__part-4__ye" }
export { Ee as "26__part-4__Ee" }
