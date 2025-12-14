/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-188
 */

"use strict"

import { fj, hj } from "./index__part-181"
import { Rj } from "./index__part-184"
var jj
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_528 from "./528"
import /* [auto-meaningful-name] */_$_ from "./528"
var Yj = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$isAdded = e.isAdded
  var /* [auto-meaningful-name] */e$frameMap = e.frameMap
  var /* [auto-meaningful-name] */e$urls = e.urls
  var /* [auto-meaningful-name] */e$canShowMultiply = e.canShowMultiply
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var d = _React.useState(false)
  var p = $_10_index.a(d, 2)
  var m = p[0]
  var g = p[1]
  var _ = e$urls && e$urls.length > 1
  var v = _React.useRef(null)
  var b = e$cdnUrl
  if (e$frameMap && e$frameMap[e$cdnUrl]) {
    b = e$frameMap[e$cdnUrl].frames[0]
  }
  var y = _React.useState(b)
  var E = $_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = function (o, i) {
    e.selectHandler({
      id: t,
      md5: e$md5,
      cdnUrl: i,
      name: e$name,
      urls: e$urls,
      type: fj.Image,
      selectFrom: hj.Mall
    }, o)
  }
  var T = function () {
    if (e$urls) {
      var e = document.getElementById(t)
      if (e) {
        var n = 0 === e$urls.findIndex(function (e) {
          return e === O
        }) ? 1 : 0
        jj = setInterval(function () {
          e.setAttribute("src", "".concat(e$urls[n % e$urls.length], "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim"))
          n++
        }, 200)
      }
    }
  }
  var A = function () {
    if (e$urls) {
      var e = document.getElementById(t)
      if (e) {
        clearInterval(jj)
        e.setAttribute("src", O)
      }
    }
  }
  var j = te.I(e$cdnUrl)
  return React.createElement(Rj, {
    getTooltipContainer: function (e) {
      return (null === v || undefined === v ? undefined : v.current) ? null === v || undefined === v ? undefined : v.current : e
    },
    visible: m,
    urls: e$urls,
    onVisibleChange: function (e) {
      if (!(!_ || e$isAdded || e$canShowMultiply)) {
        g(e)
      }
    },
    handleGroupItemClick: function (e, t) {
      if (!e$isAdded) {
        w(t)
        C(e, t)
      }
    },
    isGroupItemSelected: function (e) {
      return e$isSelect && e === O
    }
  }, React.createElement("li", {
    ref: v,
    onClick: function (e) {
      if (!(e$isAdded || _ && !e$canShowMultiply)) {
        C(e, e$cdnUrl)
      }
    },
    key: t,
    className: N(_$_.imageMallItem, e$isSelect && _$_.selected)
  }, React.createElement("div", {
    className: _$_.playArea,
    onMouseOver: function () {
      if (_) {
        T()
      } else {
        w(e$cdnUrl)
      }
    },
    onMouseOut: function () {
      if (_) {
        A()
      } else {
        w(b)
      }
    }
  }, React.createElement("img", {
    id: t,
    alt: e$name,
    src: "".concat(O, "?imageMogr2/thumbnail/!200x200r/blur/1x0/quality/100|imageslim")
  })), React.createElement("div", {
    className: _$_.infoArea
  }, React.createElement("div", {
    className: _$_.nameArea
  }, e$name), _ && React.createElement("div", {
    className: _$_.groupIcon
  }, React.createElement($_13_index.j, {
    type: "icon-group"
  })), e$isAdded ? React.createElement("div", {
    className: _$_.add
  }, $_710_index$a$formatMessage({
    id: "Resource.Added"
  })) : React.createElement("div", {
    className: N(_$_.btn, _$_.unselect)
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected"
  })), React.createElement("div", {
    className: _$_.materialTypeIcon
  }, React.createElement($_13_index.j, {
    type: "icon-material-".concat(j.substr(1))
  })))))
})
export { Yj }
