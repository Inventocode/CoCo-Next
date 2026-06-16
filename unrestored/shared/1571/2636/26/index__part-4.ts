/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-4
 */

"use strict"

import { h } from "./index__part-1"
import { te } from "./index__part-3"
import * as /* [auto-meaningful-name] */Module_53 from /* 53 */"../53"
import * as /* [auto-meaningful-name] */Module_37 from /* 37 */"../37/index"
import * as /* [auto-meaningful-name] */Module_209 from /* 209 */"../207/209/index"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_6 from /* 6 */"../6"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_9 from /* 9 */"../9"
import * as /* [auto-meaningful-name] */Src_shared_packages_Crc_blink_src_index from /* 17 */"../../../../../src/shared/packages/@crc/blink/src/index"
import * as /* [auto-meaningful-name] */Src_editor_block_toolbox from /* 261 */"../../../../../src/editor/block/toolbox"
import * as /* [auto-meaningful-name] */Module_228 from /* 228 */"../228/index"
import * as /* [auto-meaningful-name] */Module_207 from /* 207 */"../207/index"
import * as /* [auto-meaningful-name] */Module_430 from /* 430 */"../207/430"
var /* [auto-meaningful-name] */Module_53$d = Module_53.d
var me = .5 * Module_53$d
var ge = 2 * Module_53$d
var _e = {
  zoom: {
    controls: false,
    wheel: false,
    startScale: Module_53$d,
    maxScale: ge,
    minScale: me,
    scaleSpeed: 1.2
  },
  notch: false,
  tooltip: true,
  flyout: {
    fixed_width: Module_53.b,
    corner_radius: 12,
    blocks: {
      default_gap: 12 / Module_53$d,
      head_block_offset: [14 / Module_53$d, 4 / Module_53$d]
    },
    padding: {
      left: 16 / Module_53$d,
      top: 24 / Module_53$d
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
    workspace: [Src_shared_packages_Crc_blink_src_index.I.WorkspaceOptionType.PASTE, Src_shared_packages_Crc_blink_src_index.I.WorkspaceOptionType.CLEAN_UP, Src_shared_packages_Crc_blink_src_index.I.WorkspaceOptionType.DELETE_ALL, Src_shared_packages_Crc_blink_src_index.I.WorkspaceOptionType.COPY_ALL, Src_shared_packages_Crc_blink_src_index.I.WorkspaceOptionType.GLOBAL_COMMENT],
    block: [
      Src_shared_packages_Crc_blink_src_index.I.BlockOptionType.COPY_AND_PASTE, Src_shared_packages_Crc_blink_src_index.I.BlockOptionType.COPY, Src_shared_packages_Crc_blink_src_index.I.BlockOptionType.ADD_COMMENT, Src_shared_packages_Crc_blink_src_index.I.BlockOptionType.COLLAPSE, Src_shared_packages_Crc_blink_src_index.I.BlockOptionType.DELETE, function (e) {
        return {
          text: Src_shared_ui_language.c(Module_37.b(), "Workspace.ContextMenu.blockToImage"),
          name: "blockToImage",
          enabled: true,
          callback: function () {
            var t = Module_7.a(RegeneratorRuntime.mark(function t() {
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
        if (e.type !== Module_209.PROCEDURE_BLOCK_TYPES.CALL_NORETURN && e.type !== Module_209.PROCEDURE_BLOCK_TYPES.CALL_RETURN) {
          return
        }
        var t = function () {
          var t
          var n = Module_37.d.getState()
          var r = n.project.screens.get(n.project.currentScreenIndex)
          if (r) {
            var o = null === (t = Ee.getWorkspaceDataByScreenId(r.id)) || undefined === t ? undefined : t.getProcedureManager()
            if (o) {
              return o.get_procedure_by_caller_id(e.id)
            }
          }
        }()
        return {
          text: Src_shared_ui_language.c(Module_37.b(), "Workspace.ContextMenu.jumpToProcDef"),
          name: "jumpToProcDef",
          enabled: !!t && !t.disabled,
          callback: function () {
            if (t) {
              var /* [auto-meaningful-name] */t$def_id = t.def_id
              var n = Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.get_block_by_id(t$def_id)
              if (n) {
                Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.center_on_block(t$def_id)
                n.select()
                Ee.setDebuggingBlock(n)
                n.set_glow_stack(true)
              }
            }
          }
        }
      }
    ]
  }
}
function ve(e) {
  var t = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : "zh"
  Object.assign(Src_shared_packages_Crc_blink_src_index.Blink.Msg, e)
  Src_shared_packages_Crc_blink_src_index.Blink.utils.set_language(t)
}
function be() {
  var e = Ee.getWorkspaceDataByScreenId(Ee.getCurrentScreenId())
  if (!e) {
    throw Error("No workspace selected")
  }
  return e.getProcedureManager()
}
function ye(e, t) {
  var n = Src_shared_packages_Crc_blink_src_index.Blink.inject(e, Module_6.a(Module_6.a(Module_6.a({}, _e), t), {}, {
    custom_svg_defs: Module_430.a,
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
  Object.values(Src_editor_block_toolbox.b).forEach(function (e, t) {
    Src_shared_packages_Crc_blink_src_index.Blink.mainWorkspace.register_flyout_button(e, function () {
      var t = document.createElementNS(Module_53.c, "foreignObject")
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
  Object.values(Src_editor_block_toolbox.a).forEach(function (e) {
    var t = {
      lineLabel: e.id,
      text: e.label
    }
    Module_9.x([t], "category")
  })
  Module_228.d()
  Module_228.b(be)
  return n
}
var Ee = new Module_207.b()
export { Module_53$d as he }
export { me }
export { ge }
export { ve }
export { ye }
export { Ee }
