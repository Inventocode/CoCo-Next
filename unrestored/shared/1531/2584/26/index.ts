/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：26
 */

"use strict"

export { b } from "../../../../../src/editor/block/toolbox"
export { a } from "../../../../../src/editor/block/toolbox"
export { e as h } from "../../../../../src/editor/block/toolbox"
export { h as g }
export { W as u }
export { $$_53$d as f }
export { me as e }
export { ge as d }
export { ve as j }
export { ye as k }
export { Ee as z }
export { Ne as i }
export { We as c }
export { ze as m }
export { Ye as q }
export { Ke as l }
export { qe as y }
export { Xe as x }
export { Qe as n }
export { Ze as t }
export { Je as o }
export { $e as p }
export { et as v }
export { tt as r }
export { nt as w }
export { rt as s }
var r
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_block_toolbox = require("../../../../../src/editor/block/toolbox")
import /* [auto-meaningful-name] */$$_25_index = require("../25/index")
import /* [auto-meaningful-name] */$$_27 = require("../27")
import /* [auto-meaningful-name] */$$_40 = require("../40")
import /* [auto-meaningful-name] */$$_17_index = require("../17/index")
import l = require("../9")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language = require("../../../../../src/shared/ui/language")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_editor_block_generate = require("../../../../../src/editor/block/generate")
import p = require("../5")
import /* [auto-meaningful-name] */$$_15 = require("../15")
var h = new (function () {
  function e() {
    $$_27.a(this, e)
    this.lastSelectedWidgetCategoryName = undefined
    this.basicToolboxConfig = undefined
  }
  $$_40.a(e, [{
    key: "getToolbox",
    value: function () {
      var /* [auto-meaningful-name] */$$_17_index$Blink$mainWorkspace
      return null === ($$_17_index$Blink$mainWorkspace = $$_17_index.Blink.mainWorkspace) || undefined === $$_17_index$Blink$mainWorkspace ? undefined : $$_17_index$Blink$mainWorkspace.get_toolbox()
    }
  }, {
    key: "convertBlockTypeToXml",
    value: function (e) {
      var t = $$_$$_$$_$$_$$_src_editor_block_generate.a()
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
      this.basicToolboxConfig = [].concat($$_25_index.a(t), [{
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
      }])
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
  }])
  return e
}())()
import /* [auto-meaningful-name] */$_653 = require("./653")
var g = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_653)
import /* [auto-meaningful-name] */$_654 = require("./654")
var v = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_654)
import /* [auto-meaningful-name] */$_655 = require("./655")
var y = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_655)
import /* [auto-meaningful-name] */$_656 = require("./656")
var O = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_656)
import /* [auto-meaningful-name] */$_657 = require("./657")
var C = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_657)
import /* [auto-meaningful-name] */$_658 = require("./658")
var S = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_658)
import /* [auto-meaningful-name] */$_659 = require("./659")
var A = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_659)
import /* [auto-meaningful-name] */$_660 = require("./660")
var N = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_660)
import /* [auto-meaningful-name] */$_661 = require("./661")
var k = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_661)
import /* [auto-meaningful-name] */$_662 = require("./662")
var D = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_662)
import /* [auto-meaningful-name] */$_663 = require("./663")
var L = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_663)
import /* [auto-meaningful-name] */$_664 = require("./664")
var B = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_664)
import /* [auto-meaningful-name] */$_665 = require("./665")
var G = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}($_665)
var U = {
  BLOCK_CLOUD_ICON: g.a,
  BLOCK_CLOUD_VARIABLE_ICON: v.a,
  BLOCK_PHONE_SHAKE_ICON: y.a,
  BLOCK_INPUT_ICON: O.a,
  BLOCK_INTERNET_ICON: C.a,
  BLOCK_SMS_ICON: S.a,
  BLOCK_PHONE_ICON: A.a,
  BLOCK_TAB_ICON: N.a,
  BLOCK_PEDOMETER_ICON: k.a,
  BLOCK_LIST_ICON: D.a,
  BLOCK_DICT_ICON: L.a,
  BLOCK_CLOUD_DICT_ICON: B.a,
  BLOCK_CLOUD_TABLE_ICON: G.a
}
var W = function () {
  for (var e in U) $$_17_index.Blink.Msg[e] = U[e]
}
import H = require("../6")
import /* [auto-meaningful-name] */RegeneratorRuntime = require("regenerator-runtime")
var z = function __importDefault(module) {
  var defaultExport = module && module.__esModule ? function () {
    return module.default
  } : function () {
    return module
  }
  Object.defineProperty(defaultExport, "a", {
    enumerable: true,
    get: defaultExport
  })
  return defaultExport
}(RegeneratorRuntime)
import Y = require("../7")
import /* [auto-meaningful-name] */$$_206_208_index = require("../206/208/index")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_actions = require("../../../../../src/shared/events/actions")
import /* [auto-meaningful-name] */$$_53 = require("../53")
import /* [auto-meaningful-name] */$$_47 = require("../47")
import /* [auto-meaningful-name] */$$_1036_127 = require("../1036/127")
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../../src/shared/events/messages-wrapper")
!function (e) {
  e.PNG = "dataurl+png"
  e.SVG_ASCII = "dataurl+ascii"
  e.SVG_BASE64 = "dataurl+base64"
  e.XML = "xml"
}(r || (r = {}))
var /* [auto-meaningful-name] */Http__www$w3$org_2000_svg = "http://www.w3.org/2000/svg"
var /* [auto-meaningful-name] */Http__www$w3$org_1999_xlink = "http://www.w3.org/1999/xlink"
function te(e) {
  return ne.apply(this, arguments)
}
function ne() {
  return (ne = Y.a(z.a.mark(function e(t) {
    var n
    var r
    var o
    var /* [auto-meaningful-name] */e$sent
    var a
    var s
    var l
    var u = arguments
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (r = u.length > 1 && undefined !== u[1] ? u[1] : 2, o = null === (n = $$_17_index.Blink.mainWorkspace.get_block_by_id(t)) || undefined === n ? undefined : n.svg_group) {
              e.next = 4
              break
            }
            return e.abrupt("return")
          case 4:
            e.next = 6
            return ce(o)
          case 6:
            e$sent = e.sent
            a = o.getBBox()
            s = (a.width + 10) * r
            l = (a.height + 10) * r
            ue(e$sent, s, l, "png", function (e) {
              $$_$$_$$_$$_$$_src_shared_events_actions.d.dispatch($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.bi(true, e))
            })
          case 11:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function re(e, t) {
  return oe.apply(this, arguments)
}
function oe() {
  return (oe = Y.a(z.a.mark(function e(t, n) {
    var r
    var /* [auto-meaningful-name] */t$type
    var /* [auto-meaningful-name] */e$sent
    var a
    var s
    var c
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            r = 2
            t$type = t.type
            e.next = 4
            return ce(n)
          case 4:
            e$sent = e.sent
            a = n.getBBox()
            s = (a.width + 10) * r
            c = (a.height + 10) * r
            return e.abrupt("return", new Promise(function (e) {
              ue(e$sent, s, c, "png", function (n) {
                var r = t
                var /* [auto-meaningful-name] */_t$type = t.type
                var a = t.widgetType || ""
                a = a.toLowerCase()
                if ("widget_event" === t$type) {
                  var /* [auto-meaningful-name] */r$event = r.event
                  _t$type = "".concat(a, "_event_").concat(r$event)
                } else if ("widget_get" === t$type) {
                  var /* [auto-meaningful-name] */r$property = r.property
                  _t$type = "".concat(a, "_get_").concat(r$property)
                } else if ("widget_set" === t$type) {
                  var /* [auto-meaningful-name] */_r$property = r.property
                  _t$type = "".concat(a, "_set_").concat(_r$property)
                } else if ("widget_method" === t$type) {
                  var /* [auto-meaningful-name] */r$method = r.method
                  _t$type = "".concat(a, "_method_").concat(r$method)
                }
                var d = document.createElement("a")
                d.href = n
                d.download = "".concat(_t$type, ".png")
                d.click()
                e(_t$type)
              })
            }))
          case 9:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ie() {
  return ae.apply(this, arguments)
}
function ae() {
  return (ae = Y.a(z.a.mark(function e() {
    var t
    var n
    var r
    var o
    var i
    var a
    var /* [auto-meaningful-name] */i$value
    var l
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (n = null === (t = $$_17_index.Blink.mainWorkspace.get_flyout()) || undefined === t ? undefined : t.get_workspace()) {
              e.next = 3
              break
            }
            return e.abrupt("return")
          case 3:
            r = n.get_top_blocks(false)
            o = $$_47.a(r)
            e.prev = 5
            o.s()
          case 7:
            if ((i = o.n()).done) {
              e.next = 18
              break
            }
            if (i$value = i.value, l = null === (a = n.get_block_by_id(i$value.id)) || undefined === a ? undefined : a.svg_group) {
              e.next = 12
              break
            }
            return e.abrupt("return")
          case 12:
            e.next = 14
            return re(i$value, l)
          case 14:
            e.next = 16
            return $$_15.lb(200)
          case 16:
            e.next = 7
            break
          case 18:
            e.next = 23
            break
          case 20:
            e.prev = 20
            e.t0 = e.catch(5)
            o.e(e.t0)
          case 23:
            e.prev = 23
            o.f()
            return e.finish(23)
          case 26:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[5, 20, 23, 26]])
  }))).apply(this, arguments)
}
var se = "batchDownloadBlockImage=1".toLowerCase()
function ce(e) {
  return le.apply(this, arguments)
}
function le() {
  return (le = Y.a(z.a.mark(function e(t) {
    var n
    var r
    var o
    var i
    var a
    var s
    var l
    var u
    var d
    var p
    var f
    return z.a.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            (n = t.cloneNode(true)).removeAttribute("width")
            n.removeAttribute("height")
            n.removeAttribute("transform")
            r = n.querySelectorAll("image")
            o = z.a.mark(function e(t) {
              var n
              return z.a.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      if (!(n = r[t].getAttributeNS(Http__www$w3$org_1999_xlink, "href")) || !n.match(/\.svg$/g)) {
                        e.next = 4
                        break
                      }
                      e.next = 4
                      return fetch(n).then(function (e) {
                        return e.text()
                      }).then(function (e) {
                        var n = "data:image/svg+xml," + encodeURIComponent(e)
                        r[t].setAttributeNS(Http__www$w3$org_1999_xlink, "href", n)
                      })
                    case 4:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            })
            i = 0
          case 7:
            if (!(i < r.length)) {
              e.next = 12
              break
            }
            return e.delegateYield(o(i), "t0", 9)
          case 9:
            i++
            e.next = 7
            break
          case 12:
            a = document.createElementNS("http://www.w3.org/2000/svg", "style")
            s = $$_17_index.Blink.di_container.get($$_1036_127.BINDING.css)
            a.textContent = "".concat(s.CONTENT, " .blocklyDropdownArrow{ fill: rgba(0, 0, 0, .1); }");
            (l = t.getBBox()).x -= 5
            l.y -= 5
            l.width += 10
            l.height += 10
            u = new XMLSerializer()
            d = u.serializeToString(document.querySelector("defs"))
            p = u.serializeToString(a)
            f = u.serializeToString(n)
            d = d.replace(/[\n\r]|\s{2,}/g, "")
            return e.abrupt("return", "<svg xmlns=\"".concat(Http__www$w3$org_2000_svg, "\" xmlns:xlink=\"").concat(Http__www$w3$org_1999_xlink, "\" width=\"").concat(l.width, "\" height=\"").concat(l.height, "\"") + " viewBox=\"".concat(l.x, " ").concat(l.y, " ").concat(l.width, " ").concat(l.height, "\">\n      ").concat(d, "\n      ").concat(p, "\n      ").concat(f, "\n    </svg>"))
          case 26:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function ue(e, t, n, r, o) {
  r = r || "png"
  var i = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e)))
  var a = document.createElement("canvas")
  var s = a.getContext("2d")
  if (s) {
    a.width = t
    a.height = n
    var c = new Image()
    c.onload = function () {
      s.clearRect(0, 0, t, n)
      s.drawImage(c, 0, 0, t, n)
      var e = a.toDataURL("image/".concat(r))
      o(e)
    }
    c.src = i
  }
}
if (window.location.href.toLowerCase().includes(se)) {
  window.addEventListener("load", function () {
    var e = document.getElementById("logo")
    if (!(null === e || undefined === e)) {
      e.addEventListener("click", ie)
    }
  })
}
import /* [auto-meaningful-name] */$$_227_index = require("../227/index")
import /* [auto-meaningful-name] */$$_206_index = require("../206/index")
import /* [auto-meaningful-name] */$$_206_426 = require("../206/426")
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
          var t = Y.a(z.a.mark(function t() {
            return z.a.wrap(function (t) {
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
import /* [auto-meaningful-name] */$$_125_index = require("../125/index")
import /* [auto-meaningful-name] */$$_49 = require("../49")
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
var We
import /* [auto-meaningful-name] */$$_11 = require("../11")
!function (e) {
  e.PRIMITIVE = "PRIMITIVE"
  e.ARRAY = "ARRAY"
  e.STORAGE = "STORAGE"
  e.DOC_KEYS = "DOC_KEYS"
  e.BROADCAST = "BROADCAST"
  e.SCREEN = "SCREEN"
  e.IMAGE_LIBRARY = "IMAGE_LIBRARY"
  e.ICON_LIBRARY = "ICON_LIBRARY"
  e.SOUND_LIBRARY = "SOUND_LIBRARY"
  e.CLOUD_DATABASE = "CLOUD_DATABASE"
  e.CLOUD_DOC_KEYS = "CLOUD_DOC_KEYS"
  e.DATA_SOURCE = "DATA_SOURCE"
  e.GRID = "DATABASE_WIDGET"
  e.COLUMNS = "COLUMNS"
  e.CLOUD_DB = "CLOUD_DB"
  e.TABLE_DATA_COLUMN = "TABLE_DATA_COLUMN"
  e.OBJECT = "OBJECT"
  e.CLOUD_TABLE_COLUMNS = "CLOUD_TABLE_COLUMNS"
  e.CLOUD_DICT_KEYS = "CLOUD_DICT_KEYS"
}(We || (We = {}))
var Ve = function () {
  var e
  return H.a((e = {}, $$_11.a(e, We.PRIMITIVE, {
    blocksList: ["variables_get", "variables_set", "variables_change"],
    fieldName: "VAR"
  }), $$_11.a(e, We.ARRAY, {
    blocksList: ["array_get"],
    fieldName: "ARRAY"
  }), $$_11.a(e, We.OBJECT, {
    blocksList: ["object_get"],
    fieldName: "OBJECT"
  }), $$_11.a(e, We.BROADCAST, {
    blocksList: ["broadcast_input"],
    fieldName: "BROADCAST"
  }), $$_11.a(e, We.DOC_KEYS, {
    blocksList: ["local_document_all_key_field_dropdown", "local_document_set_field_item", "local_document_remove_field_item", "local_document_get_field_item", "local_document_check_if_field_key_exists", "new_local_document_all_key_field_dropdown", "new_local_document_set_field_item", "new_local_document_remove_field_item", "new_local_document_get_field_item", "new_local_document_check_if_field_key_exists"],
    fieldName: "DOC_KEYS"
  }), $$_11.a(e, We.IMAGE_LIBRARY, {
    blocksList: ["image_file_list_dropdown"],
    fieldName: "IMAGE_FILE_ID"
  }), $$_11.a(e, We.ICON_LIBRARY, {
    blocksList: ["icon_file_list_dropdown"],
    fieldName: "ICON_FILE_ID"
  }), $$_11.a(e, We.SOUND_LIBRARY, {
    blocksList: ["audio_sound_file_list_dropdown"],
    fieldName: "SOUND_FILE_ID"
  }), $$_11.a(e, We.CLOUD_DOC_KEYS, {
    blocksList: ["cloud_document_all_key_field_dropdown"],
    fieldName: "DOC_KEYS"
  }), $$_11.a(e, We.SCREEN, {
    blocksList: ["screen_set_background_color", "screen_set_background_image", "screen_navigate_to", "screen_navigate_to_by_value", "new_screen_navigate_to", "new_screen_navigate_to_by_value", "screen_get_size", "screen_get_color", "screen_get_background_image", "screen_check_if_pressed"],
    fieldName: "SCREEN_ID"
  }), $$_11.a(e, We.DATA_SOURCE, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), $$_11.a(e, We.GRID, {
    blocksList: ["data_source_get"],
    fieldName: "DATA_SOURCE"
  }), $$_11.a(e, We.COLUMNS, {
    blocksList: ["cloudDB_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), $$_11.a(e, We.CLOUD_DB, {
    blocksList: ["cloudDB_insert", "cloudDB_delete", "cloudDB_update", "cloudDB_query_by_column", "cloudDB_query_by_count"],
    fieldName: "WIDGET_ID"
  }), $$_11.a(e, We.TABLE_DATA_COLUMN, {
    blocksList: ["table_data_column_field_dropdown"],
    fieldName: "COLUMN"
  }), $$_11.a(e, We.CLOUD_DICT_KEYS, {
    blocksList: ["cloud_dict_all_key_dropdown"],
    fieldName: "KEYS"
  }), $$_11.a(e, We.CLOUD_TABLE_COLUMNS, {
    blocksList: ["cloudTable_all_column_dropdown"],
    fieldName: "COLUMNS"
  }), e), l.N())
}
function ze(e, t, n) {
  var r
  var o = Ve()
  var /* [auto-meaningful-name] */oE$blocksList = o[e].blocksList
  var /* [auto-meaningful-name] */oE$fieldName = o[e].fieldName
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (oE$blocksList.includes(e.type) && e.inputList.length) {
        var r
        var o = e.get_field(oE$fieldName)
        if (!o || (null === (r = o.get_value()) || undefined === r ? undefined : r.toString()) !== t) {
          return
        }
        if (o.get_text() === n) {
          return
        }
        o.set_text(n)
      }
    })
    if (!(null === (r = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === r)) {
      r.refresh_selection()
    }
  }
}
function Ye(e, t) {
  var n
  var r = Ve()
  var /* [auto-meaningful-name] */rE$blocksList = r[e].blocksList
  var /* [auto-meaningful-name] */rE$fieldName = r[e].fieldName
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      if (rE$blocksList.includes(e.type) && e.inputList.length) {
        var n
        var r = e.get_field(rE$fieldName)
        if (!r || (null === (n = r.get_value()) || undefined === n ? undefined : n.toString()) !== t) {
          return
        }
        if (!(null === r || undefined === r)) {
          r.set_value(l.h)
        }
        if (!(null === r || undefined === r)) {
          r.set_text(l.g)
        }
      }
    })
    if (!(null === (n = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === n)) {
      n.refresh_selection()
    }
  }
}
function Ke() {
  var e
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (e) {
      var /* [auto-meaningful-name] */e$parent_block
      if (e.inputList.length) {
        !function (e) {
          var t = e.get_field("BUMP_TYPE")
          if (t) {
            var n = e.get_field_value("BUMP_TYPE")
            if ((null === n || undefined === n ? undefined : n.startsWith("ACTOR_")) || (null === n || undefined === n ? undefined : n.startsWith("BRUSH_"))) {
              var r = l.Bb(n)
              if (r) {
                t.set_text(r.title)
              } else {
                t.set_value(l.h)
                t.set_text(l.g)
              }
            }
          }
        }(e);
        (function (e) {
          var t = e.get_field("TARGET")
          if (t) {
            var n = e.get_field_value("TARGET")
            if ((null === n || undefined === n ? undefined : n.startsWith("ACTOR_")) || (null === n || undefined === n ? undefined : n.startsWith("BRUSH_"))) {
              var r = l.Bb(n)
              if (r) {
                t.set_text(r.title)
              } else {
                t.set_value(l.h)
                t.set_text(l.g)
              }
            }
          }
        })(e)
        var n = e.get_field("ACTOR_ACTION_ID") || e.get_shadow_field("ACTOR_ACTION_WRAPPER", "ACTOR_ACTION_ID")
        if (n) {
          var r
          var o
          var i
          var a = e.get_field("ACTOR_STYLE_ID") || e.get_shadow_field("ACTOR_STYLE_WRAPPER", "ACTOR_STYLE_ID")
          var s = e.get_field("WIDGET_ID") || (null === (e$parent_block = e.parent_block) || undefined === e$parent_block ? undefined : e$parent_block.get_field("WIDGET_ID"))
          var c = null === s || undefined === s ? undefined : s.get_value()
          if (!c || undefined === (o = l.Bb(c)) || (r = n.get_value()) === l.h || undefined === (i = o.attributes.actionList.find(function (e) {
            return e.id === r
          }))) {
            n.set_value(l.h)
            n.set_text(l.g)
            if (!(null === a || undefined === a)) {
              a.set_value(l.h)
            }
            if (!(null === a || undefined === a)) {
              a.set_text(l.g)
            }
            return void (o || (null === s || undefined === s || s.set_value(l.h), null === s || undefined === s || s.set_text(l.g)))
          }
          n.set_value(i.id)
          n.set_text(i.name)
          if (a) {
            var u = a.get_value()
            var d = i.styleList.findIndex(function (e) {
              return e.id === u
            })
            var p = -1 === d ? undefined : i.styleList[d]
            a.set_value((null === p || undefined === p ? undefined : p.id) || l.h)
          }
        }
      }
    })
    if (!(null === (e = $$_17_index.Blink.mainWorkspace.get_toolbox()) || undefined === e)) {
      e.refresh_selection()
    }
  }
}
function qe(e, t, n) {
  if (e && n) {
    ze(n, e, t)
    if (!(n !== p.a && n !== p.c)) {
      Ke()
    }
  }
}
function Xe(e, t) {
  ze(We.SCREEN, e, t)
}
function Qe(e, t, n) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_DOC_KEYS$blocksList = Ve()[We.CLOUD_DOC_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeWe$CLOUD_DOC_KEYS$blocksList.includes(o.type)) {
      var i
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      if (o$parent_block && o$parent_block.get_field_value("WIDGET_ID") === e) {
        if (o.get_field_value("DOC_KEYS") === t) {
          if (!(null === (i = o.get_field("DOC_KEYS")) || undefined === i)) {
            i.set_value(n)
          }
        }
      }
    }
  })
}
function Ze(e) {
  var t = Ve()
  var n = t.LIST_VIEWER_WIDGET.blocksList.concat(t.NEW_LIST_VIEWER_WIDGET.blocksList)
  if ($$_17_index.Blink.mainWorkspace) {
    $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (t) {
      if (n.includes(t.type) && t.inputList.length) {
        var r
        var o = t.get_field("WIDGET_ID")
        if (!o || (null === (r = o.get_value()) || undefined === r ? undefined : r.toString()) !== e) {
          return
        }
        var i = t.get_field("SLOT_WIDGET")
        if (!(null === i || undefined === i)) {
          i.set_value(l.h)
        }
        if (!(null === i || undefined === i)) {
          i.set_text(l.g)
        }
        var a = t.get_field("ATTRIBUTE")
        if (!(null === a || undefined === a)) {
          a.set_value(l.h)
        }
        if (!(null === a || undefined === a)) {
          a.set_text(l.g)
        }
      }
    })
  }
}
function Je(e, t) {
  var /* [auto-meaningful-name] */VeWe$DOC_KEYS$blocksList = Ve()[We.DOC_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (VeWe$DOC_KEYS$blocksList.includes(r.type)) {
      var /* [auto-meaningful-name] */r$parent_block = r.parent_block
      if (r$parent_block && r$parent_block.get_field_value("WIDGET_ID") === e) {
        var i
        var a = r.get_field("DOC_KEYS")
        var s = $$_47.a(t)
        try {
          for (s.s(); !(i = s.n()).done;) {
            var /* [auto-meaningful-name] */i$value = i.value
            if (i$value.id === (null === a || undefined === a ? undefined : a.get_value())) {
              a.set_text(i$value.key)
            }
          }
        } catch (l) {
          s.e(l)
        } finally {
          s.f()
        }
      }
    }
  })
}
function $e(e, t) {
  var /* [auto-meaningful-name] */VeWe$TABLE_DATA_COLUMN$blocksList = Ve()[We.TABLE_DATA_COLUMN].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (r) {
    if (VeWe$TABLE_DATA_COLUMN$blocksList.includes(r.type)) {
      var /* [auto-meaningful-name] */r$parent_block = r.parent_block
      if (r$parent_block && r$parent_block.get_field_value("WIDGET_ID") === e) {
        var i = r.get_field("COLUMN")
        var /* [auto-meaningful-name] */t$header = t.header
        for (var s in t$header) if (s === (null === i || undefined === i ? undefined : i.get_value())) {
          var c = t$header[s]
          i.set_text(c.field)
        }
      }
    }
  })
}
function et(e, t, n) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_DICT_KEYS$blocksList = Ve()[We.CLOUD_DICT_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeWe$CLOUD_DICT_KEYS$blocksList.includes(o.type)) {
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      var a = null === o$parent_block || undefined === o$parent_block ? undefined : o$parent_block.get_field_value("WIDGET_ID")
      if (a) {
        var s = l.Z(a)
        if (e === s && o.get_field_value("KEYS") === t) {
          var c = o.get_field("KEYS")
          if (!(null === c || undefined === c)) {
            c.set_value(n)
          }
          if (!(null === c || undefined === c)) {
            c.set_text(n)
          }
        }
      }
    }
  })
}
function tt(e) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_DICT_KEYS$blocksList = Ve()[We.CLOUD_DICT_KEYS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (VeWe$CLOUD_DICT_KEYS$blocksList.includes(n.type)) {
      var /* [auto-meaningful-name] */n$parent_block = n.parent_block
      if (n$parent_block && n$parent_block.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("KEYS")
        if (!(null === o || undefined === o)) {
          o.set_value(l.h)
        }
        if (!(null === o || undefined === o)) {
          o.set_text(l.g)
        }
      }
    }
  })
}
function nt(e, t, n) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_TABLE_COLUMNS$blocksList = Ve()[We.CLOUD_TABLE_COLUMNS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (o) {
    if (VeWe$CLOUD_TABLE_COLUMNS$blocksList.includes(o.type)) {
      var /* [auto-meaningful-name] */o$parent_block = o.parent_block
      var a = null === o$parent_block || undefined === o$parent_block ? undefined : o$parent_block.get_field_value("WIDGET_ID")
      if (a) {
        var s = l.db(a)
        if (e === s && o.get_field_value("COLUMNS") === t) {
          var c = o.get_field("COLUMNS")
          if (!(null === c || undefined === c)) {
            c.set_value(n)
          }
          if (!(null === c || undefined === c)) {
            c.set_text(n)
          }
        }
      }
    }
  })
}
function rt(e) {
  var /* [auto-meaningful-name] */VeWe$CLOUD_TABLE_COLUMNS$blocksList = Ve()[We.CLOUD_TABLE_COLUMNS].blocksList
  $$_17_index.Blink.mainWorkspace.get_all_blocks().forEach(function (n) {
    if (VeWe$CLOUD_TABLE_COLUMNS$blocksList.includes(n.type)) {
      var /* [auto-meaningful-name] */n$parent_block = n.parent_block
      if (n$parent_block && n$parent_block.get_field_value("WIDGET_ID") === e) {
        var o = n.get_field("COLUMNS")
        if (!(null === o || undefined === o)) {
          o.set_value(l.h)
        }
        if (!(null === o || undefined === o)) {
          o.set_text(l.g)
        }
      }
    }
  })
}
