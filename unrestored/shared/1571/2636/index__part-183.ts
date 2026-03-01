/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-183
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */Module_431 from /* 431 */"./431/index"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_ui_components_index from /* 13 */"../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from /* 8 */"classnames"
import * as /* [auto-meaningful-name] */Module_10 from /* 10 */"./10/index"
import /* [auto-meaningful-name] */React from /* 0 */"react"
import * as /* [auto-meaningful-name] */React1 from /* 0 */"react"
import * as /* [auto-meaningful-name] */Module_332 from /* 332 */"./332"
import /* [auto-meaningful-name] */Module_3321 from /* 332 */"./332"
var /* [auto-meaningful-name] */Module_431$a$AudioPlayer = Module_431.a.AudioPlayer
var wj = {}
var Cj = {}
var Tj = React1.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$isPlaying = e.isPlaying
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var c = React1.useState(0)
  var l = Module_10.a(c, 2)
  var u = l[0]
  var d = l[1]
  function p(e) {
    e.stopPropagation()
    if (e$isPlaying) {
      if (Cj[t]) {
        Cj[t].stop()
      }
      return void m(false)
    }
    d(0)
    if (!Cj[t]) {
      Cj[t] = Module_431$a$AudioPlayer.load(t, e$cdnUrl || e$source || "", true)
    }
    Cj[t].play()
    Cj[t].on("play", function () {
      var e = 0
      wj[t] = setInterval(function () {
        e++
        d(e)
      }, 1e3)
      m(true)
    })
    Cj[t].on("end", function () {
      return m(false)
    })
    Cj[t].on("loaderror", function () {
      m(false)
      Cj[t] = null
    })
  }
  function m(n) {
    e.setSoundPlayingId(n ? e.id : "")
    if (!n && wj[t]) {
      clearInterval(wj[t])
    }
  }
  React1.useEffect(function () {
    return function () {
      if (e$isPlaying && wj[t]) {
        if (Cj[t]) {
          Cj[t].stop()
        }
        if (Cj[t]) {
          Cj[t].off("play")
        }
        if (Cj[t]) {
          Cj[t].off("end")
        }
        if (Cj[t]) {
          Cj[t].off("loaderror")
        }
        clearInterval(wj[t])
      }
    }
  }, [t, e$isPlaying])
  return React.createElement("div", {
    key: t,
    className: Classnames(Module_3321.soundLibraryItem, e$isSelect && Module_3321.selected),
    onClick: function () {
      e.selectHandler({
        id: t,
        name: e$name,
        cdnUrl: e$cdnUrl,
        duration: e$duration,
        type: fj.Sound,
        selectFrom: hj.Library
      })
    }
  }, React.createElement("div", {
    className: Module_3321.icon
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-style-selected"
  })), React.createElement("audio", {
    src: e$cdnUrl || e$source,
    preload: "none"
  }), React.createElement("div", {
    className: Module_3321.content
  }, React.createElement("div", {
    className: Module_3321.soundBox,
    onClick: p
  }, e$isPlaying ? React.createElement("div", {
    className: Module_3321.soundPauseIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-pause",
    className: Module_3321.soundDefaultIcon
  }), React.createElement("div", {
    className: Classnames(Module_3321.progressWrapper, Module_3321.rightWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_3321.circleProgress, Module_3321.rightCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  })), React.createElement("div", {
    className: Classnames(Module_3321.progressWrapper, Module_3321.leftWrapper)
  }, React.createElement("div", {
    className: Classnames(Module_3321.circleProgress, Module_3321.leftCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  }))) : React.createElement("div", {
    className: Module_3321.soundIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-music",
    className: Module_3321.soundDefaultIcon
  }), React.createElement("div", {
    className: Module_3321.soundPlayIconBox
  }, React.createElement(Src_shared_ui_components_index.j, {
    type: "icon-sound-play",
    className: Module_3321.soundPlayIcon
  })))), React.createElement("div", {
    className: Module_3321.soundDuration
  }, Src_shared_tools_index.w(e$isPlaying ? u : e$duration))), React.createElement("div", {
    className: Module_3321.footer
  }, e$name))
})
export { Tj }
