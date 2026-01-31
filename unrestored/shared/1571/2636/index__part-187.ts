/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-187
 */

"use strict"

import { fj, hj } from "./index__part-181"
import * as /* [auto-meaningful-name] */$_431_index from "./431/index"
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_308 from "./308"
import /* [auto-meaningful-name] */$_3081 from "./308"
var /* [auto-meaningful-name] */$_431_index$a$AudioPlayer = $_431_index.a.AudioPlayer
var Wj = {}
var Uj = {}
var Hj = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$md5 = e.md5
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$isPlaying = e.isPlaying
  var /* [auto-meaningful-name] */e$isSelect = e.isSelect
  var /* [auto-meaningful-name] */e$isAdded = e.isAdded
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var u = useState(0)
  var d = $_10_index.a(u, 2)
  var p = d[0]
  var m = d[1]
  function g(e) {
    e.stopPropagation()
    if (e$isPlaying) {
      if (Uj[t]) {
        Uj[t].stop()
      }
      return void _(false)
    }
    m(0)
    if (!Uj[t]) {
      Uj[t] = $_431_index$a$AudioPlayer.load(t, e$cdnUrl || "", true)
    }
    Uj[t].play()
    Uj[t].on("play", function () {
      var e = 0
      Wj[t] = setInterval(function () {
        e++
        m(e)
      }, 1e3)
      _(true)
    })
    Uj[t].on("end", function () {
      return _(false)
    })
    Uj[t].on("loaderror", function () {
      _(false)
      Uj[t] = null
    })
  }
  function _(n) {
    e.setSoundPlayingId(n ? e.id : "")
    if (!n && Wj[t]) {
      clearInterval(Wj[t])
    }
  }
  useEffect(function () {
    return function () {
      if (e$isPlaying && Wj[t]) {
        if (Uj[t]) {
          Uj[t].stop()
        }
        if (Uj[t]) {
          Uj[t].off("play")
        }
        if (Uj[t]) {
          Uj[t].off("end")
        }
        if (Uj[t]) {
          Uj[t].off("loaderror")
        }
        clearInterval(Wj[t])
      }
    }
  }, [e$isPlaying, t])
  return React.createElement("li", {
    key: t,
    className: N($_3081.soundMallItem, e$isSelect && $_3081.selected),
    onClick: function (a) {
      if (!e$isAdded) {
        e.selectHandler({
          id: t,
          md5: e$md5,
          cdnUrl: e$cdnUrl,
          name: e$name,
          duration: e$duration,
          type: fj.Sound,
          selectFrom: hj.Mall
        }, a)
      }
    }
  }, React.createElement("div", {
    className: $_3081.playArea
  }, e$isPlaying ? React.createElement("div", {
    className: $_3081.soundPauseIconBox,
    onClick: g
  }, React.createElement($_13_index.j, {
    type: "icon-sound-pause",
    className: $_3081.soundPauseIcon
  }), React.createElement("div", {
    className: N($_3081.progressWrapper, $_3081.rightWrapper)
  }, React.createElement("div", {
    className: N($_3081.circleProgress, $_3081.rightCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  })), React.createElement("div", {
    className: N($_3081.progressWrapper, $_3081.leftWrapper)
  }, React.createElement("div", {
    className: N($_3081.circleProgress, $_3081.leftCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  }))) : React.createElement("div", {
    className: $_3081.soundIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-music",
    className: $_3081.soundDefaultIcon
  }), React.createElement("div", {
    className: $_3081.soundPlayIconBox,
    onClick: g
  }, React.createElement($_13_index.j, {
    type: "icon-sound-play",
    className: $_3081.soundPlayIcon
  }))), React.createElement("div", {
    className: $_3081.duration
  }, te.w(e$isPlaying ? p : e$duration))), React.createElement("div", {
    className: $_3081.infoArea
  }, React.createElement("div", {
    className: $_3081.nameArea
  }, e$name), e$isAdded ? React.createElement("div", {
    className: $_3081.add
  }, $_710$a$formatMessage({
    id: "Resource.Added"
  })) : React.createElement("div", {
    className: N($_3081.btn, $_3081.unselect)
  }, React.createElement($_13_index.j, {
    type: "icon-style-selected"
  }))))
})
export { Hj }
