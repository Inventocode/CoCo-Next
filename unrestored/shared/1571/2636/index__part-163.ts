/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-163
 */

"use strict"

import { dA } from "./index__part-162"
import /* [auto-meaningful-name] */$_355 from "./355"
var sA
import * as ng from "./64"
import * as _n from "./47"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import * as /* [auto-meaningful-name] */$_25_index from "./25/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_294_index from "./294/index"
import "./2612"
var fA = _React.memo(function (e) {
  var t = _React.useState(false)
  var n = $_10_index.a(t, 2)
  var r = n[0]
  var o = n[1]
  var /* [auto-meaningful-name] */e$value = e.value
  var /* [auto-meaningful-name] */e$editableMode = e.editableMode
  var s = undefined === e$editableMode ? "click" : e$editableMode
  var /* [auto-meaningful-name] */e$defaultValue = e.defaultValue
  var /* [auto-meaningful-name] */e$onBlur = e.onBlur
  var /* [auto-meaningful-name] */e$suffix = e.suffix
  var d = _React.useRef(null)
  _React.useEffect(function () {
    if (r) {
      var /* [auto-meaningful-name] */d$current = d.current
      if (!(null === d$current || undefined === d$current)) {
        d$current.focus()
      }
      if (!(null === d$current || undefined === d$current)) {
        d$current.select()
      }
    }
  }, [r])
  return React.createElement("div", {
    className: "coco-advanced-input"
  }, React.createElement("div", {
    onClick: function () {
      if ("click" === s) {
        o(true)
      }
    },
    onDoubleClick: function () {
      if ("double" === s) {
        o(true)
      }
    },
    className: N(r && "coco-advanced-input-hide", "coco-advanced-input-disabled")
  }, e$value || e$defaultValue, e$suffix && e$suffix), React.createElement($_294_index.a, Object.assign({
    className: N(!r && "coco-advanced-input-hide", "coco-advanced-input-able")
  }, e, {
    ref: d,
    onBlur: function (e, t) {
      o(false)
      if (e$onBlur) {
        e$onBlur(e, t)
      }
    }
  })))
})
var hA = function (e) {
  var /* [auto-meaningful-name] */e$item = e.item
  var /* [auto-meaningful-name] */e$handleDelete = e.handleDelete
  var /* [auto-meaningful-name] */e$handleBlur = e.handleBlur
  var /* [auto-meaningful-name] */e$item$cdnUrl = e$item.cdnUrl
  var /* [auto-meaningful-name] */e$item$urls = e$item.urls
  var /* [auto-meaningful-name] */e$item$id = e$item.id
  var s = _React.useState(e$item$urls && e$item$urls.length > 1 ? e$item$urls[0] : e$item$cdnUrl)
  var c = $_10_index.a(s, 2)
  var l = c[0]
  var u = c[1]
  var d = e$item$urls && e$item$urls.length > 1
  var p = "library" + e$item$id
  function m(e) {
    var t = te.I(e)
    return [e.slice(0, e.lastIndexOf(t)), t]
  }
  return React.createElement("li", null, React.createElement("div", {
    className: $_355.imageBoxWrapper
  }, React.createElement("div", {
    className: $_355.delete,
    onClick: e$handleDelete.bind(null, e$item.id)
  }, React.createElement($_13_index.j, {
    type: "icon-delete"
  })), e$item.urls && e$item.urls.length > 1 && React.createElement("div", {
    className: $_355.groupIcon
  }, React.createElement($_13_index.j, {
    type: "icon-group"
  })), React.createElement("div", {
    className: $_355.imageBox,
    onMouseOver: function () {
      if (d) {
        (function () {
          if (e$item$urls && d) {
            var e = document.getElementById(p)
            if (e) {
              var t = 0 === e$item$urls.findIndex(function (e) {
                return e === l
              }) ? 1 : 0
              sA = setInterval(function () {
                var n = e$item$urls[t % e$item$urls.length]
                e.setAttribute("src", "".concat(n).concat(te.X(n) ? "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim" : "", " "))
                t++
              }, 200)
            }
          }
        })()
      } else {
        u(e$item$cdnUrl)
      }
    },
    onMouseOut: function () {
      if (d) {
        (function () {
          if (e$item$urls && d) {
            var e = document.getElementById(p)
            if (e) {
              clearInterval(sA)
              e.setAttribute("src", l)
            }
          }
        })()
      } else {
        u(e$item$cdnUrl)
      }
    }
  }, React.createElement("img", {
    id: p,
    src: l || e$item.source,
    alt: e$item$id
  }))), React.createElement("div", {
    className: $_355.fileItemName
  }, React.createElement(fA, {
    suffix: m(e$item.id)[1],
    isTrimmed: true,
    defaultValue: m(e$item.id)[0],
    onBlur: e$handleBlur.bind(null, m(e$item.id)[0], m(e$item.id)[1])
  })))
}
var mA = function (e) {
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var n = $_16_index.d()
  var r = $_25_index.a(Et.jb()).reverse()
  function o(e) {
    n($$_$$_$$_$$_src_editor_redux_common_actions.Jf(e.id))
    var t
    var r = Et.K(e.id)
    var o = []
    var i = _n.a(r)
    try {
      var a = function () {
        var /* [auto-meaningful-name] */t$value = t.value
        var i = $_25_index.a(t$value.attributes.actionList)
        i.forEach(function (t) {
          return t.styleList.forEach(function (n, i) {
            if (n.source === e.id) {
              t.styleList[i] = {
                id: ng.a("STYLE"),
                source: ""
              }
              if (t$value.attributes.selectedStyleId === n.id) {
                o.push([t$value.id, t.styleList[i].id])
              }
            }
          })
        })
        n($$_$$_$$_$$_src_editor_redux_common_actions.Lg(t$value.id, "actionList", i))
      }
      for (i.s(); !(t = i.n()).done;) {
        a()
      }
    } catch (s) {
      i.e(s)
    } finally {
      i.f()
    }
    setTimeout(function () {
      var e
      var t = _n.a(o)
      try {
        for (t.s(); !(e = t.n()).done;) {
          var r = $_10_index.a(e.value, 2)
          var i = r[0]
          var a = r[1]
          n($$_$$_$$_$$_src_editor_redux_common_actions.Lg(i, "selectedStyleId", a))
        }
      } catch (s) {
        t.e(s)
      } finally {
        t.f()
      }
    }, 100)
  }
  function i(e) {
    var r
    var i
    var a
    var s = Et.hb(e)
    var c = (null === (r = s) || undefined === r ? undefined : r.urls) && s.urls.length > 1
    if (s) {
      var l = [s]
      if (c) {
        l.push.apply(l, $_25_index.a(Et.Ab(s.id)))
        var u = Et.vb(s)
        if (u) {
          s = u
        }
      }
      var d = Et.ub("IMAGE_FILE_ID", s.id).length > 0 || Et.Ib(s.id) || Et.Lb(s.id)
      var p = $_710_index$a$formatMessage({
        id: c ? "deleteImageGroupFileTitle" : "deleteImageFileTitle"
      }, {
        name: $_190.f((c ? null === (i = s) || undefined === i ? undefined : i.groupId : null === (a = s) || undefined === a ? undefined : a.id) || "", 10)
      })
      var f = $_710_index$a$formatMessage({
        id: c ? "deleteImageGroupFileTips" : "deleteImageFileTips"
      })
      var h = function () {
        if (c) {
          l.forEach(function (e) {
            o(e)
          })
        } else {
          if (s) {
            o(s)
          }
        }
      }
      if (d) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.zh({
          isDangerous: true,
          onConfirm: h,
          allowText: $_710_index$a$formatMessage({
            id: "delete"
          }),
          title: p,
          content: f
        }))
      } else {
        h()
      }
    }
  }
  function a(e, r, o, i) {
    if (o) {
      if (o === e || Et.Jb(o + r)) {
        i.target.value = e
        if (o !== e) {
          n($$_$$_$$_$$_src_editor_redux_common_actions.mj({
            message: $_710_index$a$formatMessage({
              id: "renameFileNameRepeatTips"
            }),
            duration: 2e3
          }))
        }
      } else {
        n($$_$$_$$_$$_src_editor_redux_common_actions.zf(o + r, e + r))
      }
    } else {
      i.target.value = e
    }
  }
  return React.createElement("div", {
    className: $_355.imageLayout
  }, React.createElement("div", {
    className: $_355.imageLayoutMain
  }, React.createElement(dA, {
    isReadOnly: e.readOnly,
    isEmpty: 0 === r.length
  }, React.createElement("div", {
    className: $_355.imageLayoutList
  }, React.createElement("ul", null, React.createElement("li", {
    className: $_355.uploadItem
  }, React.createElement($_13_index.B, {
    onChange: function (e) {
      if (e) {
        n($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, undefined, true))
      }
    },
    multiple: true,
    accept: $_133.f
  }, React.createElement("div", {
    className: $_355.content
  }, React.createElement($_13_index.j, {
    type: "icon-add2",
    className: $_355.icon
  }), React.createElement("div", {
    className: $_355.name
  }, $_710_index$a$formatMessage({
    id: "Resource.upload"
  }))))), r.filter(function (e) {
    return !e.groupId
  }).map(function (e) {
    return React.createElement(hA, {
      key: e.id,
      item: e,
      handleBlur: a,
      handleDelete: i
    })
  }))))))
}
export { fA }
export { mA }
