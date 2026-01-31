/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-214
 */

"use strict"

import * as Gf from "./77"
import * as /* [auto-meaningful-name] */$_149 from "./149"
import * as Tn from "./68"
import * as /* [auto-meaningful-name] */$_133 from "./133"
import * as Et from "./9"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector, useDispatch, batch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_249 from "./249"
import /* [auto-meaningful-name] */$_2491 from "./249"
var MP = memo(function (e) {
  var /* [auto-meaningful-name] */e$onUploadFileChange = e.onUploadFileChange
  var /* [auto-meaningful-name] */e$onResourceLibraryClick = e.onResourceLibraryClick
  var /* [auto-meaningful-name] */e$fileId = e.fileId
  var /* [auto-meaningful-name] */e$type = e.type
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useState(false)
  var s = $_10_index.a(a, 2)
  var c = s[0]
  var l = s[1]
  var u = useState("")
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  useEffect(function () {
    var e
    if (te.U(e$fileId)) {
      e = e$fileId
    } else {
      var t = Et.hb(e$fileId)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    if (!e) {
      switch (e$type) {
        case Gf.a.HANDLE:
          e = $_149.c
          break
        case Gf.a.BACKGROUND:
          e = $_149.a
          break
        case Gf.a.TRACK:
          e = $_149.g
          break
        default:
          e = $_149.a
      }
    }
    m(e)
  }, [e$fileId, e$type])
  var g = function () {
    l(false)
  }
  var _ = function (e) {
    e$onUploadFileChange(e, e$type)
  }
  var v = function () {
    e$onResourceLibraryClick(e$type)
  }
  return React.createElement("div", {
    className: $_2491.imageItemBox
  }, React.createElement("img", {
    alt: e$fileId,
    src: p,
    className: e$type === Gf.a.HANDLE ? $_2491.handleImage : $_2491.image
  }), React.createElement("div", {
    className: $_2491.cover
  }, React.createElement($_1213.a, {
    content: React.createElement("div", {
      className: $_2491.imagePopover,
      onClick: g
    }, React.createElement($_13_index.B, {
      className: $_2491.content,
      onChange: _,
      accept: $_133.f
    }, React.createElement($_13_index.j, {
      type: "icon-upload"
    }), React.createElement("span", {
      className: $_2491.contentTitle
    }, $_710$a$formatMessage({
      id: "Resource.upload"
    }))), React.createElement("div", {
      className: $_2491.content,
      onClick: v
    }, React.createElement($_13_index.j, {
      type: "icon-open-resource-library"
    }), React.createElement("span", {
      className: $_2491.contentTitle
    }, $_710$a$formatMessage({
      id: "Resource.ImageLibrary"
    })))),
    placement: "bottomLeft",
    trigger: "click",
    visible: c,
    onVisibleChange: function (e) {
      l(e)
    }
  }, React.createElement("div", {
    className: $_2491.replaceBtn
  }, $_710$a$formatMessage({
    id: "Resource.Replace"
  })))))
})
var LP = memo(function () {
  var e = useSelector(function (e) {
    return e.common.sliderImageDialogInfo
  })
  var /* [auto-meaningful-name] */e$visible = e.visible
  var /* [auto-meaningful-name] */e$widgetId = e.widgetId
  var /* [auto-meaningful-name] */e$direction = e.direction
  var /* [auto-meaningful-name] */e$handleImageFileId = e.handleImageFileId
  var /* [auto-meaningful-name] */e$handleImageRatio = e.handleImageRatio
  var /* [auto-meaningful-name] */e$handleImageDirection = e.handleImageDirection
  var /* [auto-meaningful-name] */e$backgroundImageFileId = e.backgroundImageFileId
  var /* [auto-meaningful-name] */e$backgroundImageDirection = e.backgroundImageDirection
  var /* [auto-meaningful-name] */e$trackImageFileId = e.trackImageFileId
  var /* [auto-meaningful-name] */e$trackImageDirection = e.trackImageDirection
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var p = useDispatch()
  var m = useState("")
  var g = $_10_index.a(m, 2)
  var v = g[0]
  var b = g[1]
  var y = useState(e$handleImageRatio)
  var E = $_10_index.a(y, 2)
  var O = E[0]
  var w = E[1]
  var C = useState(e$handleImageDirection)
  var T = $_10_index.a(C, 2)
  var A = T[0]
  var j = T[1]
  var R = useState("")
  var k = $_10_index.a(R, 2)
  var x = k[0]
  var D = k[1]
  var M = useState(e$backgroundImageDirection)
  var L = $_10_index.a(M, 2)
  var P = L[0]
  var B = L[1]
  var F = useState("")
  var G = $_10_index.a(F, 2)
  var W = G[0]
  var U = G[1]
  var H = useState(e$trackImageDirection)
  var V = $_10_index.a(H, 2)
  var K = V[0]
  var q = V[1]
  var X = useState(true)
  var Q = $_10_index.a(X, 2)
  var Z = Q[0]
  var J = Q[1]
  var $ = useState("")
  var ee = $_10_index.a($, 2)
  var ne = ee[0]
  var re = ee[1]
  var oe = useState("")
  var ie = $_10_index.a(oe, 2)
  var ae = ie[0]
  var se = ie[1]
  var ce = useState("")
  var le = $_10_index.a(ce, 2)
  var ue = le[0]
  var de = le[1]
  var pe = useState("")
  var fe = $_10_index.a(pe, 2)
  var he = fe[0]
  var me = fe[1]
  var ge = useState("")
  var _e = $_10_index.a(ge, 2)
  var ve = _e[0]
  var be = _e[1]
  useEffect(function () {
    var e
    if (te.U(v)) {
      e = v
    } else {
      var t = Et.hb(v)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl)
    }
    de(e || $_149.c)
  }, [v])
  useEffect(function () {
    var e
    if (te.U(x)) {
      e = x
    } else {
      var t = Et.hb(x)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || $_149.a
    }
    me(e)
    te.gb(e, e$backgroundImageDirection === Gf.b.HORIZONTAL ? -90 : 90).then(function (e) {
      return se(e)
    }).catch(function () {
      return se("")
    })
  }, [x, e$backgroundImageDirection])
  useEffect(function () {
    var e
    if (te.U(W)) {
      e = W
    } else {
      var t = Et.hb(W)
      e = (null === t || undefined === t ? undefined : t.source) || (null === t || undefined === t ? undefined : t.cdnUrl) || $_149.g
    }
    be(e)
    te.gb(e, K === Gf.b.HORIZONTAL ? -90 : 90).then(function (e) {
      return re(e)
    }).catch(function () {
      return re("")
    })
  }, [K, W])
  useEffect(function () {
    if (e$visible) {
      w(e$handleImageRatio)
      B(e$backgroundImageDirection)
      q(e$trackImageDirection)
    }
  }, [e$backgroundImageDirection, e$handleImageRatio, e$trackImageDirection, e$visible])
  useEffect(function () {
    if (e$direction === Gf.b.HORIZONTAL) {
      J(true)
    } else {
      J(false)
    }
  }, [e$direction])
  useEffect(function () {
    if (e$visible) {
      b(e$handleImageFileId)
      U(e$trackImageFileId)
      D(e$backgroundImageFileId)
    }
  }, [e$backgroundImageFileId, e$handleImageFileId, e$trackImageFileId, e$visible])
  var ye = function (e, t) {
    switch (t) {
      case Gf.a.BACKGROUND:
        D(e.id)
        B(e$direction)
        break
      case Gf.a.TRACK:
        U(e.id)
        q(e$direction)
        break
      case Gf.a.HANDLE:
        b(e.id)
        j(e$direction)
    }
  }
  var Ee = function (e, t) {
    if (e) {
      p($$_$$_$$_$$_src_editor_redux_common_actions.Zf(e, function (e) {
        ye(e[0], t)
      }))
    }
  }
  var Oe = function (e) {
    p($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.ImageLibrary, function (t) {
      var n = t[0]
      ye(n, e)
      p($$_$$_$$_$$_src_editor_redux_common_actions.sh())
    }))
  }
  return React.createElement($_13_index.f, {
    visible: e$visible,
    className: $_2491.sliderImageDialog,
    title: $_710$a$formatMessage({
      id: "slider.custom"
    }),
    onClose: function () {
      p($$_$$_$$_$$_src_editor_redux_common_actions.Gj({
        visible: false
      }))
    },
    footer: React.createElement($_13_index.d, {
      type: "primary",
      onClick: function () {
        batch(function () {
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "handleImageFileId", v))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "handleImageRatio", O))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "handleImageDirection", A))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "backgroundImageFileId", x))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "backgroundImageDirection", P))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "trackImageFileId", W))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Lg(e$widgetId, "trackImageDirection", K))
          p($$_$$_$$_$$_src_editor_redux_common_actions.Gj({
            visible: false
          }))
        })
      }
    }, $_710$a$formatMessage({
      id: "confirm"
    }))
  }, React.createElement("div", {
    className: $_2491.sliderImage
  }, React.createElement("div", {
    className: $_2491.sliderPreview
  }, React.createElement("span", {
    className: $_2491.title
  }, $_710$a$formatMessage({
    id: "slider.preview"
  })), React.createElement("div", {
    className: $_2491.previewBox
  }, React.createElement("div", {
    className: $_2491.backgroundImage,
    style: {
      width: Z ? 176 : 20,
      height: Z ? 20 : 176,
      backgroundImage: "url(".concat(P === e$direction ? he : ae, ")")
    }
  }, React.createElement("div", {
    className: $_2491.trackImageBox,
    style: {
      width: Z ? 88 : 20,
      height: Z ? 20 : 88
    }
  }, React.createElement("div", {
    className: $_2491.trackImage,
    style: {
      width: Z ? 176 : 20,
      height: Z ? 20 : 176,
      backgroundImage: "url(".concat(K === e$direction ? ve : ne, ")")
    }
  }))), React.createElement("div", {
    className: N($_2491.handleImage, A !== e$direction && $_2491.vertical),
    style: {
      width: 20 * O,
      height: 20 * O,
      backgroundImage: "url(".concat(ue, ")")
    }
  }))), React.createElement("div", {
    className: $_2491.imageInfo
  }, React.createElement("span", {
    className: $_2491.title
  }, $_710$a$formatMessage({
    id: "slider.replaceImage"
  })), React.createElement("div", {
    className: $_2491.imageList
  }, React.createElement("div", {
    className: $_2491.imageItem
  }, React.createElement(MP, {
    onUploadFileChange: Ee,
    onResourceLibraryClick: Oe,
    fileId: x,
    type: Gf.a.BACKGROUND
  }), React.createElement("span", null, $_710$a$formatMessage({
    id: "slider.backgroundImage"
  }))), React.createElement("div", {
    className: $_2491.imageItem
  }, React.createElement(MP, {
    onUploadFileChange: Ee,
    onResourceLibraryClick: Oe,
    fileId: W,
    type: Gf.a.TRACK
  }), React.createElement("span", null, $_710$a$formatMessage({
    id: "slider.trackImage"
  }))), React.createElement("div", {
    className: $_2491.imageItem
  }, React.createElement(MP, {
    onUploadFileChange: Ee,
    onResourceLibraryClick: Oe,
    fileId: v,
    type: Gf.a.HANDLE
  }), React.createElement("span", null, $_710$a$formatMessage({
    id: "slider.handleImage"
  })))), React.createElement("span", {
    className: $_2491.title
  }, $_710$a$formatMessage({
    id: "slider.handleSize"
  })), React.createElement("div", {
    className: $_2491.handleSize
  }, React.createElement($_13_index.x, {
    value: Math.round(100 * O),
    min: 10,
    max: 300,
    onChange: function (e) {
      w(e / 100)
    },
    isShowRightInput: true,
    inputAfter: "%"
  }), React.createElement("div", {
    className: $_2491.sizeLabel
  }, React.createElement("span", null, $_710$a$formatMessage({
    id: "smallSize"
  })), React.createElement("span", null, $_710$a$formatMessage({
    id: "largeSize"
  })))))))
})
export { LP }
