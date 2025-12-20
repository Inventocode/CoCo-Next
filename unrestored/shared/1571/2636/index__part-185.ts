/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-185
 */

"use strict"

import { fj, hj } from "./index__part-181"
import { Rj } from "./index__part-184"
var Ij
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_753 from "./753"
import /* [auto-meaningful-name] */_$_ from "./753"
var Dj = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */e$selectHandler = e.selectHandler
  var c = _React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useState(e$urls && e$urls.length > 1 ? e$urls[0] : e$cdnUrl)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var _ = m[1]
  var v = _React.useRef(null)
  var b = e$urls && e$urls.length > 1
  var y = "image" + t
  return React.createElement(Rj, {
    getTooltipContainer: function (e) {
      return (null === v || undefined === v ? undefined : v.current) ? null === v || undefined === v ? undefined : v.current : e
    },
    visible: u,
    urls: e$urls,
    onVisibleChange: function (e) {
      if (b && !e$canShowMultiply) {
        d(e)
      }
    },
    handleGroupItemClick: function (e, n) {
      _(n)
      e$selectHandler({
        id: t,
        name: t,
        type: fj.Image,
        cdnUrl: n,
        urls: e$urls,
        selectFrom: hj.Library
      })
    },
    isGroupItemSelected: function (e) {
      return e$isSelect && e === g
    }
  }, React.createElement("div", {
    ref: v,
    className: N(_$_.ImageLibraryItem, e$isSelect && _$_.selected),
    onClick: function () {
      if (!(b && !e$canShowMultiply)) {
        e$selectHandler({
          id: t,
          name: t,
          type: fj.Image,
          cdnUrl: e$cdnUrl,
          urls: e$urls,
          selectFrom: hj.Library
        })
      }
    }
  }, b && React.createElement("div", {
    className: _$_.groupIcon
  }, React.createElement($_13_index.j, {
    type: "icon-group"
  })), React.createElement("div", {
    className: _$_.icon
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected"
  })), React.createElement("div", {
    className: _$_.content,
    onMouseOver: function () {
      if (b) {
        (function () {
          if (e$urls && b) {
            var e = document.getElementById(y)
            if (e) {
              var t = 0 === e$urls.findIndex(function (e) {
                return e === g
              }) ? 1 : 0
              Ij = setInterval(function () {
                var n = e$urls[t % e$urls.length]
                e.setAttribute("src", "".concat(n).concat(te.X(n) ? "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim" : "", " "))
                t++
              }, 200)
            }
          }
        })()
      } else {
        _(e$cdnUrl)
      }
    },
    onMouseOut: function () {
      if (b) {
        (function () {
          if (e$urls && b) {
            var e = document.getElementById(y)
            if (e) {
              clearInterval(Ij)
              e.setAttribute("src", g)
            }
          }
        })()
      } else {
        _(e$cdnUrl)
      }
    }
  }, React.createElement("img", {
    id: y,
    alt: "",
    src: g || e$source
  })), React.createElement("div", {
    className: _$_.footer
  }, t)))
})
export { Dj }
