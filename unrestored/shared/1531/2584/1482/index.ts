/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1482
 */

"use strict"

import /* [auto-meaningful-name] */$$_25_index = require("../25/index")
import o = require("../6")
import /* [auto-meaningful-name] */$$_10_index = require("../10/index")
import /* [auto-meaningful-name] */React = require("react")
var s = function __importDefault(module) {
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
}(React)
import /* [auto-meaningful-name] */$$_554 = require("../554")
import /* [auto-meaningful-name] */$$_16_index = require("../16/index")
import /* [auto-meaningful-name] */$$_702 = require("../702")
import d = require("../8")
var p = function __importDefault(module) {
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
}(d)
import /* [auto-meaningful-name] */Lodash = require("lodash")
import /* [auto-meaningful-name] */$$_1185 = require("../1185")
import /* [auto-meaningful-name] */$$_13_index = require("../13/index")
import /* [auto-meaningful-name] */$_154 = require("./154")
var _ = function __importDefault(module) {
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
}($_154)
import /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_events_messagesWrapper = require("../../../../../src/shared/events/messages-wrapper")
import /* [auto-meaningful-name] */$$_64 = require("../64")
import y = require("../5")
import E = require("../9")
import /* [auto-meaningful-name] */$$_68 = require("../68")
import /* [auto-meaningful-name] */$$_784_index = require("../784/index")
import /* [auto-meaningful-name] */$_1483 = require("./1483")
var T = {
  visible: false,
  position: {
    x: 0,
    y: 0
  },
  type: "string",
  index: -1
}
function S(t, n) {
  setImmediate(function () {
    t.focus()
    t.selectionEnd = t.selectionStart = n ? 0 : t.value.length
  })
}
var _a
_a = React.memo(function () {
  var e = $$_16_index.e(function (e) {
    return e.block.storageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widget = e.widget
  var /* [auto-meaningful-name] */e$dbName = e.dbName
  var /* [auto-meaningful-name] */e$maxKeyLength = e.maxKeyLength
  var /* [auto-meaningful-name] */e$data = e.data
  var /* [auto-meaningful-name] */e$onSave = e.onSave
  var j = null === e$widget || undefined === e$widget ? undefined : e$widget.type
  var /* [auto-meaningful-name] */$$_702$a$formatMessage = $$_702.a().formatMessage
  var R = React.useRef(-1)
  var k = React.useRef(-1)
  var x = $$_16_index.d()
  var D = React.useState([])
  var M = $$_10_index.a(D, 2)
  var L = M[0]
  var P = M[1]
  var B = React.useState([])
  var F = $$_10_index.a(B, 2)
  var G = F[0]
  var U = F[1]
  var W = React.useState(-1)
  var H = $$_10_index.a(W, 2)
  var V = H[0]
  var z = H[1]
  var Y = React.useState(-1)
  var K = $$_10_index.a(Y, 2)
  var q = K[0]
  var X = K[1]
  var Q = React.useState(0)
  var Z = $$_10_index.a(Q, 2)
  var J = Z[0]
  var $ = Z[1]
  var ee = React.useState(false)
  var te = $$_10_index.a(ee, 2)
  var ne = te[0]
  var re = te[1]
  var oe = React.useState(false)
  var ie = $$_10_index.a(oe, 2)
  var ae = ie[0]
  var se = ie[1]
  var ce = React.useState(false)
  var le = $$_10_index.a(ce, 2)
  var ue = le[0]
  var de = le[1]
  var pe = React.useState(false)
  var fe = $$_10_index.a(pe, 2)
  var he = fe[0]
  var me = fe[1]
  var ge = React.useState(T)
  var _e = $$_10_index.a(ge, 2)
  var ve = _e[0]
  var be = _e[1]
  function ye(e) {
    var t = 2 * e
    var n = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + t, " input"))
    if (n instanceof HTMLInputElement) {
      R.current = t
      S(n, false)
    }
  }
  function Ee() {
    return {
      value: "",
      key: E.ac("key1", G.map(function (e) {
        return e.key
      })),
      type: "string",
      id: $$_64.a("DOC_KEY")
    }
  }
  function Oe(e) {
    G.splice(e, 1)
    U($$_25_index.a(G))
  }
  function we(e, t, n) {
    if (G.find(function (n, r) {
      return r !== e && t.trim() === n.key
    })) {
      n.target.value = G[e].key
      return void P([])
    }
    G[e].key = t.trim()
    U($$_25_index.a(G))
  }
  function Ce(e, t) {
    if (G.find(function (n, r) {
      return r !== e && t.trim() === n.key
    })) {
      P([e])
      x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        showPrefixIcon: false,
        message: $$_702$a$formatMessage({
          id: "repeatKeyToastMsg"
        })
      }))
    } else {
      P([])
    }
  }
  function Te(e, t) {
    if (Ie(t)) {
      G[e].type = "number"
    } else {
      G[e].type = "string"
    }
    G[e].value = t
    U($$_25_index.a(G))
  }
  function Se() {
    if (e$onSave) {
      e$onSave(G)
    }
    x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.uh())
  }
  function Ie(e) {
    return "" !== e && !isNaN(Number(e))
  }
  function Ae(e, t) {
    R.current = 2 * e + t
  }
  function je(e) {
    X(e)
  }
  function Ne(e, t) {
    G[e].type = t
    U($$_25_index.a(G))
  }
  function Re(e) {
    var /* [auto-meaningful-name] */e$target = e.target
    if (e$target instanceof HTMLInputElement) {
      e$target.select()
    }
  }
  function ke(e, t) {
    var /* [auto-meaningful-name] */t$currentTarget = t.currentTarget
    var r = t$currentTarget.getClientRects()[0]
    var o = t$currentTarget.closest(".coco-dialog-content")
    if (o) {
      var i = o.getClientRects()[0]
      var a = {
        x: r.left - i.left - 98,
        y: r.top - i.top
      }
      be({
        visible: true,
        position: a,
        type: G[e].type,
        index: e,
        onSelect: Ne
      })
    }
  }
  React.useEffect(function () {
    U(Lodash.cloneDeep(e$data))
  }, [e$data])
  React.useEffect(function () {
    me(false)
  }, [e$visible])
  React.useEffect(function () {
    function e(t) {
      var /* [auto-meaningful-name] */t$target = t.target
      if (!(t$target.closest("." + _.a.typeSelectionList) || t$target.closest("." + _.a.typeFlag))) {
        be(o.a({}, T))
        document.removeEventListener("mousemove", e)
      }
    }
    if (ve.visible) {
      document.addEventListener("mousemove", e)
    }
    return function () {
      document.removeEventListener("mousemove", e)
    }
  }, [ve])
  React.useEffect(function () {
    var e = {}
    G.forEach(function (t, n) {
      G.slice(n + 1, G.length).forEach(function (r, o) {
        if (r.key && r.key === t.key) {
          e[o + n + 1] = true
          e[n] = true
        }
      })
    })
    P(Object.keys(e).map(function (e) {
      return Number(e)
    }))
  }, [G])
  React.useEffect(function () {
    ye(V)
  }, [V])
  var xe = function (e) {
    re(e)
  }
  var De = function () {
    re(false)
    x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.wj($$_68.c.ImageLibrary, function (e) {
      var t = e[0]
      if (null === t || undefined === t ? undefined : t.id) {
        G[q].value = t.id
        U($$_25_index.a(G))
      }
    }))
  }
  var Me = function () {
    re(false)
    x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.wj($$_68.c.IconLibrary, function (e) {
      var t = e[0]
      if (null === t || undefined === t ? undefined : t.name) {
        G[q].value = t.name + ".svg"
        U($$_25_index.a(G))
      }
    }))
  }
  var Le = function () {
    re(false)
    x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.wj($$_68.c.SoundLibrary, function (e) {
      var t = e[0]
      if (null === t || undefined === t ? undefined : t.name) {
        G[q].value = t.name
        U($$_25_index.a(G))
      }
    }))
  }
  var Pe = function (e) {
    if (e) {
      se(false)
      de(false)
    }
  }
  var Be = function (e) {
    e.preventDefault()
    k.current = q
    se(true)
  }
  var Fe = function (e) {
    e.preventDefault()
    k.current = q
    de(true)
  }
  function Ge(e) {
    var /* [auto-meaningful-name] */GK$current$key = G[k.current].key
    if ("value" === e) {
      GK$current$key = G[k.current].value.toString()
    }
    navigator.clipboard.writeText(GK$current$key)
  }
  function Ue(e) {
    navigator.clipboard.readText().then(function (t) {
      if ("value" === e) {
        G[k.current].value = t.trim()
        return void U($$_25_index.a(G))
      }
      if (G.find(function (e, n) {
        return n !== k.current && t.trim() === e.key
      })) {
        x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          showPrefixIcon: false,
          message: $$_702$a$formatMessage({
            id: "repeatKeyToastMsg"
          })
        }))
      } else {
        G[k.current].key = t.trim()
        U($$_25_index.a(G))
      }
    })
  }
  function We(e) {
    if (e$maxKeyLength && G.length >= e$maxKeyLength) {
      x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        message: $$_702$a$formatMessage({
          id: "cloudDbOverTheMaxKeyTips"
        })
      }))
    } else {
      var t = "prev" === e ? k.current : k.current + 1
      G.splice(t, 0, Ee())
      U(G.concat([]))
      $(t - 1)
      ye(t)
    }
  }
  function He(e) {
    if ("value" === e) {
      G[k.current].value = ""
      return void U($$_25_index.a(G))
    }
    if (G.find(function (e, t) {
      return t !== k.current && "" === e.key
    })) {
      x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
        showPrefixIcon: false,
        message: $$_702$a$formatMessage({
          id: "repeatKeyToastMsg"
        })
      }))
    } else {
      G[k.current].key = ""
      U($$_25_index.a(G))
    }
  }
  React.useEffect(function () {
    if (ae || ue) {
      document.addEventListener("mousedown", function e() {
        se(false)
        de(false)
        document.removeEventListener("mousedown", e, true)
      }, true)
    }
  }, [ae, ue])
  return s.a.createElement($$_13_index.f, {
    className: _.a.editListDialog,
    visible: e$visible,
    withPortal: true,
    onClose: function () {
      if (Lodash.isEqual(G, e$data)) {
        x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.uh())
      } else {
        me(true)
      }
    }
  }, s.a.createElement("div", {
    className: _.a.dialogTitle
  }, e$dbName, s.a.createElement("span", {
    className: _.a.defaultData
  }, "— ", $$_702$a$formatMessage({
    id: "StorageDialog.defaultData"
  }))), s.a.createElement($_1483.a, ve), s.a.createElement("div", {
    className: _.a.list
  }, s.a.createElement("div", {
    className: _.a.summary
  }, s.a.createElement("div", {
    className: _.a.count
  }, s.a.createElement("span", null, $$_702$a$formatMessage({
    id: "keyValueTotal"
  }), "："), G.length || "0")), s.a.createElement("div", {
    className: _.a.listHeader
  }, s.a.createElement("div", {
    className: _.a.column1
  }, $$_702$a$formatMessage({
    id: "key"
  })), s.a.createElement("div", {
    className: _.a.column2
  }, $$_702$a$formatMessage({
    id: "value"
  })), s.a.createElement("div", {
    className: _.a.column3
  })), s.a.createElement("div", {
    className: _.a.dataList,
    onKeyDown: function (e) {
      var /* [auto-meaningful-name] */e$target = e.target
      var /* [auto-meaningful-name] */R$current = R.current
      if (e$target instanceof HTMLInputElement && R$current > -1 && e$target.selectionEnd === e$target.selectionStart) {
        var /* [auto-meaningful-name] */e$keyCode = e.keyCode
        var o = R$current
        var i = true
        if (38 === e$keyCode) {
          o -= 2
        } else {
          if (40 === e$keyCode) {
            o += 2
          } else {
            if (37 === e$keyCode && 0 === e$target.selectionStart) {
              o -= 1
              i = false
            } else {
              if (39 === e$keyCode && e$target.selectionEnd === e$target.value.length) {
                o += 1
              }
            }
          }
        }
        if (R$current !== o) {
          var a = document.querySelector(".".concat("STORAGE_KEY_VALUE_INPUT_SERIAL_" + o, " input"))
          if (a && a instanceof HTMLInputElement) {
            R.current = o
            S(a, i)
          }
        }
      }
    }
  }, G.length > 0 && s.a.createElement($$_554.a, {
    width: "auto",
    height: 36 * Math.min(G.length, 12),
    itemCount: G.length,
    renderItem: function (e) {
      var /* [auto-meaningful-name] */e$index = e.index
      var /* [auto-meaningful-name] */e$style = e.style
      return s.a.createElement("div", {
        className: _.a.listItem,
        key: e$index,
        style: e$style,
        onMouseEnter: je.bind(null, e$index)
      }, s.a.createElement($$_1185.a, {
        placement: "rightTop",
        trigger: "click",
        onVisibleChange: Pe,
        visible: ae && k.current === e$index,
        content: s.a.createElement("div", {
          className: _.a.rowMenuWrapper,
          style: {
            marginTop: 13
          }
        }, s.a.createElement("div", {
          onMouseDown: Ge.bind(null, "key"),
          className: _.a.menuItem
        }, $$_702$a$formatMessage({
          id: "copyGridData"
        })), s.a.createElement("div", {
          onMouseDown: Ue.bind(null, "key"),
          className: _.a.menuItem
        }, $$_702$a$formatMessage({
          id: "pasteGridData"
        })), s.a.createElement("div", {
          onMouseDown: We.bind(null, "prev"),
          className: p()(_.a.menuItem, _.a.borderTop)
        }, $$_702$a$formatMessage({
          id: "insertPrevRow"
        })), s.a.createElement("div", {
          onMouseDown: We.bind(null, "next"),
          className: p()(_.a.menuItem, _.a.borderBottom)
        }, $$_702$a$formatMessage({
          id: "insertNextRow"
        })), s.a.createElement("div", {
          onMouseDown: He.bind(null, "key"),
          className: p()(_.a.menuItem, _.a.deleteOption)
        }, $$_702$a$formatMessage({
          id: "clearData"
        })))
      }, s.a.createElement("div", {
        className: _.a.column1,
        onContextMenu: Be
      }, s.a.createElement($$_13_index.k, {
        type: "text",
        isTrimmed: true,
        className: p()(_.a.listInput, "STORAGE_KEY_VALUE_INPUT_SERIAL_" + 2 * e$index, L.includes(e$index) && _.a.error),
        maxLength: 150,
        onClick: Re,
        defaultValue: G[e$index].key,
        onFocus: Ae.bind(null, e$index, 0),
        onBlur: we.bind(null, e$index),
        onChange: Ce.bind(null, e$index),
        dependency: G[e$index].key
      }))), s.a.createElement($$_1185.a, {
        placement: "rightTop",
        trigger: "click",
        onVisibleChange: Pe,
        visible: ue && k.current === e$index,
        content: s.a.createElement("div", {
          className: _.a.rowMenuWrapper,
          style: {
            marginTop: 13
          }
        }, s.a.createElement("div", {
          onMouseDown: Ge.bind(null, "value"),
          className: _.a.menuItem
        }, $$_702$a$formatMessage({
          id: "copyGridData"
        })), s.a.createElement("div", {
          onMouseDown: Ue.bind(null, "value"),
          className: _.a.menuItem
        }, $$_702$a$formatMessage({
          id: "pasteGridData"
        })), s.a.createElement("div", {
          onMouseDown: We.bind(null, "prev"),
          className: p()(_.a.menuItem, _.a.borderTop)
        }, $$_702$a$formatMessage({
          id: "insertPrevRow"
        })), s.a.createElement("div", {
          onMouseDown: We.bind(null, "next"),
          className: p()(_.a.menuItem, _.a.borderBottom)
        }, $$_702$a$formatMessage({
          id: "insertNextRow"
        })), s.a.createElement("div", {
          onMouseDown: He.bind(null, "value"),
          className: p()(_.a.menuItem, _.a.deleteOption)
        }, $$_702$a$formatMessage({
          id: "clearData"
        })))
      }, s.a.createElement("div", {
        className: _.a.column2,
        onContextMenu: Fe
      }, function (e) {
        return j && j === y.B ? "" : Ie(G[e].value) && s.a.createElement("div", {
          className: _.a.typeFlag,
          onMouseEnter: ke.bind(null, e)
        }, s.a.createElement($$_13_index.j, {
          type: "icon-corner-right-top"
        }))
      }(e$index), s.a.createElement($$_13_index.k, {
        type: "text",
        onFocus: Ae.bind(null, e$index, 1),
        className: p()(_.a.listInput, "STORAGE_KEY_VALUE_INPUT_SERIAL_" + (2 * e$index + 1)),
        maxLength: 8e3,
        isTrimmed: true,
        defaultValue: G[e$index].value,
        onBlur: Te.bind(null, e$index),
        onClick: Re,
        dependency: G[e$index].value
      }), q === e$index && j === y.B && s.a.createElement($$_1185.a, {
        key: e$index,
        placement: "rightTop",
        onVisibleChange: xe,
        visible: ne,
        content: s.a.createElement("div", {
          className: _.a.menuWrapper,
          style: {
            marginTop: 4
          }
        }, s.a.createElement("div", {
          onMouseDown: De,
          className: _.a.resourceMenuItem
        }, s.a.createElement($$_13_index.j, {
          type: "icon-Image",
          className: _.a.resourceMenuIcon
        }), $$_702$a$formatMessage({
          id: "Resource.ImageLibrary"
        })), s.a.createElement("div", {
          onMouseDown: Me,
          className: _.a.resourceMenuItem
        }, s.a.createElement($$_13_index.j, {
          type: "icon-Icon",
          className: _.a.resourceMenuIcon
        }), $$_702$a$formatMessage({
          id: "Resource.IconLibrary"
        })), s.a.createElement("div", {
          onMouseDown: Le,
          className: _.a.resourceMenuItem
        }, s.a.createElement($$_13_index.j, {
          type: "icon-Sound",
          className: _.a.resourceMenuIcon
        }), $$_702$a$formatMessage({
          id: "Resource.SoundLibrary"
        })))
      }, s.a.createElement("div", {
        className: _.a.addBox
      }, s.a.createElement($$_13_index.j, {
        type: "icon-add"
      }))))), s.a.createElement("div", {
        className: p()(_.a.inputClose, _.a.column3),
        onClick: Oe.bind(null, e$index)
      }, s.a.createElement($$_13_index.j, {
        type: "icon-close"
      })))
    },
    itemSize: 36,
    scrollToIndex: J,
    className: "VirtualList"
  })), s.a.createElement("div", {
    className: p()(_.a.addRow, G.length > 12 && _.a.shadow),
    onClick: function () {
      if (e$maxKeyLength && G.length >= e$maxKeyLength) {
        x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.mj({
          message: $$_702$a$formatMessage({
            id: "cloudDbOverTheMaxKeyTips"
          })
        }))
      } else {
        G.push(Ee())
        U(G.concat([]))
        z(G.length - 1)
        $(G.length - 1)
      }
    }
  }, s.a.createElement($$_13_index.j, {
    type: "icon-add"
  }))), he && s.a.createElement($$_784_index.b, {
    onCancel: function () {
      x($$_$$_$$_$$_$$_src_shared_events_messagesWrapper.uh())
    },
    onOk: Se
  }), s.a.createElement("div", {
    className: _.a.footer
  }, j && j === y.B ? s.a.createElement("span", null, $$_702$a$formatMessage({
    id: "storageDialogTips"
  })) : s.a.createElement("span", null, $$_702$a$formatMessage({
    id: "deprecatedStorageDialogTips"
  })), s.a.createElement($$_13_index.d, {
    className: p()(_.a.save, false),
    type: "primary",
    onClick: Se
  }, $$_702$a$formatMessage({
    id: "save"
  }), false)))
})
export { _a as a }
export default _a
