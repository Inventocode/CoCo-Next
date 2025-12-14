/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-183
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */$_431_index from "./431/index"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_332 from "./332"
import /* [auto-meaningful-name] */_$_ from "./332"
var /* [auto-meaningful-name] */$_431_index$a$AudioPlayer = $_431_index.a.AudioPlayer
var wj = {}
var Cj = {}
var Tj = _React.memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$isPlaying = e.isPlaying
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var c = _React.useState(0)
  var l = $_10_index.a(c, 2)
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
      Cj[t] = $_431_index$a$AudioPlayer.load(t, e$cdnUrl || e$source || "", true)
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
  _React.useEffect(function () {
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
    className: N(_$_.soundLibraryItem, e$isSelect && _$_.selected),
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
    className: _$_.icon
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected"
  })), React.createElement("audio", {
    src: e$cdnUrl || e$source,
    preload: "none"
  }), React.createElement("div", {
    className: _$_.content
  }, React.createElement("div", {
    className: _$_.soundBox,
    onClick: p
  }, e$isPlaying ? React.createElement("div", {
    className: _$_.soundPauseIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-sound-pause",
    className: _$_.soundDefaultIcon
  }), React.createElement("div", {
    className: N(_$_.progressWrapper, _$_.rightWrapper)
  }, React.createElement("div", {
    className: N(_$_.circleProgress, _$_.rightCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  })), React.createElement("div", {
    className: N(_$_.progressWrapper, _$_.leftWrapper)
  }, React.createElement("div", {
    className: N(_$_.circleProgress, _$_.leftCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  }))) : React.createElement("div", {
    className: _$_.soundIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-music",
    className: _$_.soundDefaultIcon
  }), React.createElement("div", {
    className: _$_.soundPlayIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-sound-play",
    className: _$_.soundPlayIcon
  })))), React.createElement("div", {
    className: _$_.soundDuration
  }, te.w(e$isPlaying ? u : e$duration))), React.createElement("div", {
    className: _$_.footer
  }, e$name))
})
export { Tj }
