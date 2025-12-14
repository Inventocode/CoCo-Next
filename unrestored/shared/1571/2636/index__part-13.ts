/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-13
 */

"use strict"

import { lt, ft } from "./index__part-12"
var pt
import * as /* [auto-meaningful-name] */$_390 from "./390"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_748_index from "./748/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_136 from "./136"
import /* [auto-meaningful-name] */_$_ from "./136"
var gt = function () {
  var e = $_16_index.e(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var t = $_16_index.e(function (e) {
    return e.oTState.cooperationUserList
  })
  var n = $_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var o = _React.useState([])
  var i = $_10_index.a(o, 2)
  var a = i[0]
  var s = i[1]
  var c = _React.useState({
    left: 0,
    top: 0
  })
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useState(false)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  _React.useEffect(function () {
    var n = function (n) {
      v(false)
      if (pt) {
        clearTimeout(pt)
      }
      var r = function (e) {
        var t = e.target.closest(".otFocusElement")
        return null === t || undefined === t ? undefined : t.id
      }(n) || function (e) {
        var /* [auto-meaningful-name] */e$target = e.target
        if (e$target instanceof SVGElement) {
          var n = e$target.closest(".focusSvgClassName")
          return null === n || undefined === n ? undefined : n.dataset.focusId
        }
      }(n)
      if (r) {
        if (pt) {
          clearTimeout(pt)
        }
        pt = setTimeout(function () {
          var o = e.filter(function (e) {
            return e.path.id === r
          })
          d({
            left: n.clientX + 20,
            top: n.clientY + 20
          })
          v(true)
          s(t.filter(function (e) {
            return o.some(function (t) {
              return t.userId === e.id
            })
          }).toJSON())
        }, 1e3)
      }
    }
    document.body.addEventListener("mousemove", n)
    return function () {
      document.body.removeEventListener("mousemove", n)
    }
  })
  return 0 === a.length ? React.createElement(React.Fragment, null) : React.createElement("div", {
    style: {
      display: g ? "block" : "none",
      position: "fixed",
      left: u.left,
      top: u.top,
      backgroundColor: 1 === a.length ? n.get(a[0].id) : $_390.a
    },
    className: _$_.userFocusCard
  }, a.length > 1 ? React.createElement("div", {
    className: _$_.item
  }, a.map(function (e, t) {
    return React.createElement("div", {
      key: t,
      className: _$_.headPhoto,
      style: {
        zIndex: a.length - t,
        backgroundImage: "url(\"".concat(e.avatar_url, "\")"),
        borderColor: n.get(e.id)
      }
    })
  }), React.createElement("span", {
    className: _$_.nickname
  }, a.length, " ", $_710_index$a$formatMessage({
    id: "OT.collPeopleCount"
  }))) : React.createElement("div", {
    key: a[0].id,
    className: _$_.item
  }, React.createElement("div", {
    className: _$_.headPhoto,
    style: {
      backgroundImage: "url(\"".concat(a[0].avatar_url, "\")"),
      borderColor: n.get(a[0].id)
    }
  }), React.createElement("div", {
    className: _$_.nickname
  }, a[0].nickname)))
}
var _t = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.oTState.userFocusOTInfoList
  })
  var t = $_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var n = e.filter(function (e) {
    return "block" === e.path.type
  }).toJSON()
  _React.useEffect(function () {
    var n = e.filter(function (e) {
      return "dynamicData" === e.path.type || "widget" === e.path.type
    }).toJSON()
    document.querySelectorAll(".otFocusElement").forEach(function (e) {
      var t = e.querySelector(".otFocusElementBorder")
      if (!(null === t || undefined === t)) {
        t.remove()
      }
      e.classList.remove("otFocusElement")
    })
    if (n && n.length > 0) {
      var r = lt(n, t.toJSON())
      n.forEach(function (e) {
        var t = document.getElementById(e.path.id)
        if (t && !t.classList.contains("otFocusElement")) {
          var n = document.createElement("div")
          n.setAttribute("data-html2canvas-ignore", "true")
          n.classList.add("otFocusElementBorder")
          n.style.borderColor = r[e.userId]
          t.classList.add("otFocusElement")
          t.appendChild(n)
        }
      })
    }
  }, [t, e])
  return React.createElement(React.Fragment, null, React.createElement(ft, {
    list: n
  }), React.createElement(gt, null))
})
var vt = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$onClose = e.onClose
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement($_13_index.f, {
    className: _$_.invalidUrlDialog,
    visible: e$visible,
    onClose: e$onClose
  }, React.createElement("h3", null, $_710_index$a$formatMessage({
    id: "OT.urlIsInvalid"
  })), React.createElement("p", null, $_710_index$a$formatMessage({
    id: "OT.urlIsInvalidDetail"
  })), React.createElement($_13_index.d, {
    type: "primary",
    onClick: e$onClose
  }, $_710_index$a$formatMessage({
    id: "know"
  })))
}
var bt = function (e) {
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement($_13_index.f, {
    className: _$_.loadingDialog,
    visible: e$visible,
    showCloseButton: false
  }, React.createElement("div", {
    className: _$_.icon
  }, React.createElement($_13_index.j, {
    type: "icon-loading2"
  })), React.createElement("p", null, $_710_index$a$formatMessage({
    id: "OT.isBuildingCollWork"
  })))
}
var yt = React.memo(function () {
  var e = $_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserList
  }).toJSON()
  var t = $_16_index.e(function (e) {
    return e.oTState.onlineCooperationUserColorRecord
  })
  var n = te.q(e).reverse()
  return React.createElement("div", {
    className: _$_.users
  }, n.map(function (e, n) {
    return n + 1 > 3 ? null : React.createElement("div", {
      className: N(_$_.headerPhotoBorder, _$_.user),
      key: e.id,
      style: {
        borderColor: t.get(e.id)
      }
    }, React.createElement($_748_index.a, {
      placement: "bottom",
      title: e.nickname
    }, React.createElement("div", {
      className: _$_.headPhoto,
      style: {
        backgroundImage: "url(\"".concat(e.avatar_url, "\")")
      }
    })))
  }), n.length > 3 && React.createElement($_1213.a, {
    overlayClassName: _$_.avatarPopover,
    content: React.createElement("div", {
      className: _$_.avatarContent
    }, n.map(function (e) {
      return React.createElement("div", {
        key: e.id,
        className: _$_.avatarItem
      }, React.createElement("div", {
        className: N(_$_.headerPhotoBorder, _$_.user),
        key: e.id,
        style: {
          borderColor: t.get(e.id)
        }
      }, React.createElement($_748_index.a, {
        placement: "bottom",
        title: e.nickname
      }, React.createElement("div", {
        className: _$_.headPhoto,
        style: {
          backgroundImage: "url(\"".concat(e.avatar_url, "\")")
        }
      }))), React.createElement("div", {
        className: _$_.itemName
      }, e.nickname))
    }))
  }, React.createElement("div", {
    className: N(_$_.count, _$_.user)
  }, React.createElement("div", {
    className: _$_.countPhoto
  }, n.length))))
})
export { _t }
export { vt }
export { bt }
export { yt }
