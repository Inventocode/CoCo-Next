/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-185
 */

"use strict"

import { fj, hj } from "./index__part-181"
import { Rj } from "./index__part-184"
var Ij
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_753 from /* 753 */"./753"
import /* [auto-meaningful-name] */Module_7531 from /* 753 */"./753"
var Dj = React1.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */e$selectHandler = e.selectHandler
  var c = React1.useState(false)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = React1.useState(e$urls && e$urls.length > 1 ? e$urls[0] : e$cdnUrl)
  var m = Module_10.a(p, 2)
  var g = m[0]
  var _ = m[1]
  var v = React1.useRef(null)
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
    className: Classnames(Module_7531.ImageLibraryItem, e$isSelect && Module_7531.selected),
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
    className: Module_7531.groupIcon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-group"
  })), React.createElement("div", {
    className: Module_7531.icon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-style-selected"
  })), React.createElement("div", {
    className: Module_7531.content,
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
                e.setAttribute("src", "".concat(n).concat(Src_shared_tools_index.X(n) ? "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim" : "", " "))
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
    className: Module_7531.footer
  }, t)))
})
export { Dj }
