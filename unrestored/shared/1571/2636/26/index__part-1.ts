/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26__part-1
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_block_toolbox from "../../../../../src/editor/block/toolbox"
import * as /* [auto-meaningful-name] */$$_25_index from "../25/index"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_17_index from "../17/index"
import * as l from "../9"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$$_301_index from "../301/index"
import * as p from "../../../../../src/editor/widget/built-in/types"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
var h = new (function () {
  function e() {
    $$_27.a(this, e)
    this.lastSelectedWidgetCategoryName = undefined
    this.basicToolboxConfig = undefined
  }
  $$_39.a(e, [
    {
      key: "getToolbox",
      value: function () {
        var /* [auto-meaningful-name] */$$_17_index$Blink$mainWorkspace
        return null === ($$_17_index$Blink$mainWorkspace = $$_17_index.Blink.mainWorkspace) || undefined === $$_17_index$Blink$mainWorkspace ? undefined : $$_17_index$Blink$mainWorkspace.get_toolbox()
      }
    }, {
      key: "convertBlockTypeToXml",
      value: function (e) {
        var t = $$_301_index.a()
        var n = "<xml>"
        e.forEach(function (e) {
          if (e !== $$_$$_$$_$$_$$_src_editor_block_toolbox.c) {
            if (t[e]) {
              n += t[e]
            } else {
              n += e
            }
          } else {
            n += "<sep gap=\"50\"></sep>"
          }
        })
        n += "</xml>"
        return $$_17_index.Blink.xml.text_to_dom(n).children
      }
    }, {
      key: "getConfig",
      value: function () {
        var e = this
        if (this.basicToolboxConfig) {
          return this.basicToolboxConfig
        }
        var t = Object.keys($$_$$_$$_$$_$$_src_editor_block_toolbox.f).map(function (t) {
          var n = $$_$$_$$_$$_$$_src_editor_block_toolbox.f[t]
          return {
            name: n.id,
            text: n.text,
            icon: {
              font_id: n.iconId
            },
            blocks: Array.isArray(n.blocks) ? e.convertBlockTypeToXml(n.blocks) : n.blocks
          }
        })
        this.basicToolboxConfig = [].concat($$_25_index.a(t), [
          {
            name: "toolbox-widget",
            text: "%{BKY_COMPONENTS}",
            children: [],
            selectable: false,
            element: {
              unselected_classname: "cocoToolboxWidgetTab",
              selected_classname: "cocoToolboxWidgetTabSelected"
            },
            icon: {
              font_id: "icon-fold"
            }
          }, {
            name: "toolbox-invisible-widget",
            text: "%{BKY_INVISIBLE_COMPONENTS}",
            children: [],
            selectable: false,
            element: {
              unselected_classname: "cocoToolboxWidgetTab",
              selected_classname: "cocoToolboxWidgetTabSelected"
            },
            icon: {
              font_id: "icon-fold"
            }
          }, {
            name: "toolbox-global-widget",
            text: "%{BKY_GLOBAL_COMPONENTS}",
            children: [],
            selectable: false,
            element: {
              unselected_classname: "cocoToolboxWidgetTab",
              selected_classname: "cocoToolboxWidgetTabSelected"
            },
            icon: {
              font_id: "icon-fold"
            }
          }, {
            name: "toolbox-any-widget",
            text: "%{BKY_ANY_COMPONENTS}",
            children: [],
            selectable: false,
            element: {
              unselected_classname: "cocoToolboxWidgetTab",
              selected_classname: "cocoToolboxWidgetTabSelected"
            },
            icon: {
              font_id: "icon-fold"
            }
          }
        ])
        return this.basicToolboxConfig
      }
    }, {
      key: "_appendTreeNode",
      value: function (e, t, n, r, i, a) {
        var s = this.getToolbox()
        if (s) {
          var c = r.find(function (t) {
            return t.get_name() === e
          })
          if (!c) {
            if (n === p.m) {
              return
            }
            var l = $$_$$_$$_$$_$$_src_editor_block_toolbox.e()[n]
            if (!l) {
              return void console.error("Type [".concat(n, "] has no toolbox config. "))
            }
            c = s.new_node({
              name: e,
              text: t || l.text || $$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "untitled"),
              icon: {
                font_id: $$_15.X(l.iconId) ? undefined : l.iconId,
                html: $$_15.X(l.iconId) ? "<img draggable=\"false\" style=\"width: 16px; height: 16px;\" src=\"".concat(l.iconId, "\">") : undefined
              },
              blocks: a ? "ANY_".concat(n) : Array.isArray(l.blocks) ? this.convertBlockTypeToXml(l.blocks) : l.blocks
            })
          }
          i.add_child_at(c, 0)
        }
      }
    }, {
      key: "update",
      value: function (e) {
        var /* [auto-meaningful-name] */e$invisibleWidgetIds
        var n = this
        var r = this.getToolbox()
        if (r && e) {
          var o = r.find_node_by_name("toolbox-widget")
          var i = r.find_node_by_name("toolbox-invisible-widget")
          if (!o || !i) {
            throw Error("Trying to update toolbox before init")
          }
          var a = o.remove_children()
          var s = i.remove_children()
          try {
            var /* [auto-meaningful-name] */_e$invisibleWidgetIds
            if ((null === (_e$invisibleWidgetIds = e.invisibleWidgetIds) || undefined === _e$invisibleWidgetIds ? undefined : _e$invisibleWidgetIds.length) > 0) {
              i.html_div.style.display = "block"
            } else {
              i.html_div.style.display = "none"
            }
          } catch (d) {
            console.error(d)
          }
          var u = []
          this._appendTreeNode(e.id, e.title, p.D, a, o)
          e.widgetIds.forEach(function (e) {
            var t = l.dc.get(e)
            if (t) {
              var r = l.qb(e)
              if (!((null === r || undefined === r ? undefined : r.type) && [p.x, p.A].includes(r.type))) {
                n._appendTreeNode(t.id, l.Fb(t.id), t.type, a, o)
                if (-1 === u.indexOf(t.type)) {
                  u.unshift(t.type)
                }
              }
            }
          })
          if (!(null === (e$invisibleWidgetIds = e.invisibleWidgetIds) || undefined === e$invisibleWidgetIds)) {
            e$invisibleWidgetIds.forEach(function (e) {
              var t = l.dc.get(e)
              if (t) {
                n._appendTreeNode(t.id, l.Fb(t.id), t.type, s, i)
                if (-1 === u.indexOf(t.type)) {
                  u.unshift(t.type)
                }
              }
            })
          }
        }
      }
    }, {
      key: "updateGlobalWidget",
      value: function (e) {
        var t = this
        var n = this.getToolbox()
        if (n && e) {
          var r = n.find_node_by_name("toolbox-global-widget")
          if (!r) {
            throw Error("Trying to update toolbox before init")
          }
          try {
            if (e.length > 0) {
              r.html_div.style.display = "block"
            } else {
              r.html_div.style.display = "none"
            }
          } catch (a) {
            console.error(a)
          }
          var o = r.remove_children()
          var i = []
          e.forEach(function (e) {
            var n = l.dc.get(e)
            if (n) {
              t._appendTreeNode(n.id, l.Fb(n.id), n.type, o, r)
              if (-1 === i.indexOf(n.type)) {
                i.unshift(n.type)
              }
            }
          })
        }
      }
    }, {
      key: "updateAnyWidget",
      value: function (e) {
        var t = this
        var n = this.getToolbox()
        if (n && e) {
          var r = n.find_node_by_name("toolbox-any-widget")
          if (!r) {
            throw Error("Trying to update toolbox before init")
          }
          var o = r.remove_children()
          var i = []
          e.forEach(function (e) {
            t._appendTreeNode("ANY_" + e, e, e, o, r, true)
            if (-1 === i.indexOf(e)) {
              i.unshift(e)
            }
          })
        }
      }
    }, {
      key: "updateToolBoxWidgetTitle",
      value: function (e, t) {
        var /* [auto-meaningful-name] */$$_17_index$Blink$mainWorkspace
        var r
        var o = null === ($$_17_index$Blink$mainWorkspace = $$_17_index.Blink.mainWorkspace) || undefined === $$_17_index$Blink$mainWorkspace || null === (r = $$_17_index$Blink$mainWorkspace.get_toolbox()) || undefined === r ? undefined : r.find_node_by_name(e)
        if (o) {
          o.get_element().getElementsByClassName("blocklyTreeLabel")[0].textContent = t
        }
      }
    }, {
      key: "changeSelectWidgetCategoryStyle",
      value: function (e) {
        this.clearLastSelectWidgetCategoryStyle()
        this.lastSelectedWidgetCategoryName = e
        if (e) {
          var t
          var n = e
          var r = l.qb(e)
          if ((null === r || undefined === r ? undefined : r.type) && [p.x, p.A].includes(r.type)) {
            n = r.id
          }
          var o = null === (t = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === t ? undefined : t.find_node_by_name(n)
          if (o) {
            o.get_element().classList.add("cocoWidgetSelected")
          }
        }
      }
    }, {
      key: "clearLastSelectWidgetCategoryStyle",
      value: function () {
        var e = document.getElementsByClassName("cocoWidgetSelected")[0]
        if (e) {
          e.classList.remove("cocoWidgetSelected")
        }
      }
    }, {
      key: "checkIsWidgetCategory",
      value: function (e) {
        var t
        var n
        var r
        var o = this.getToolbox()
        if (o) {
          var i = null === (t = o.find_node_by_name("toolbox-widget")) || undefined === t ? undefined : t.get_children()
          if (i && i.indexOf(e) > -1) {
            return true
          }
          var a = null === (n = o.find_node_by_name("toolbox-invisible-widget")) || undefined === n ? undefined : n.get_children()
          if (a && a.indexOf(e) > -1) {
            return true
          }
          var s = null === (r = o.find_node_by_name("toolbox-global-widget")) || undefined === r ? undefined : r.get_children()
          return !!(s && s.indexOf(e) > -1)
        }
      }
    }, {
      key: "getSelectWidgetCategoryName",
      value: function () {
        var e
        var t = null === (e = this.getToolbox()) || undefined === e ? undefined : e.get_selected()
        if (t && this.checkIsWidgetCategory(t)) {
          return t.get_name()
        }
      }
    }, {
      key: "setSelectedItem",
      value: function (e) {
        var t
        if (!(null === (t = this.getToolbox()) || undefined === t)) {
          t.set_selected_item(e)
        }
      }
    }, {
      key: "setSelectedItemByWidgetId",
      value: function (e) {
        var t = this.getToolbox()
        if (null === t || undefined === t ? undefined : t.flyout.is_visible()) {
          if (!(null === t || undefined === t)) {
            t.set_selected_item(null === t || undefined === t ? undefined : t.find_node_by_name(e))
          }
        }
      }
    }
  ])
  return e
}())()
export { h }
