/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-164
 */

"use strict"

import { fA } from "./index__part-163"
import * as /* [auto-meaningful-name] */$_431_index from "./431/index"
import * as Et from "./9"
import * as /* [auto-meaningful-name] */$_190 from "./190"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_tools_index from "../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_ui_components_index from "../../../../src/shared/ui/components/index"
import /* [auto-meaningful-name] */Classnames from "classnames"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_341 from "./341"
import /* [auto-meaningful-name] */$_3411 from "./341"
var /* [auto-meaningful-name] */$_431_index$a$AudioPlayer = $_431_index.a.AudioPlayer
var bA = {}
var yA = {}
var EA = memo(function (e) {
  var t = e.id
  var /* [auto-meaningful-name] */e$cdnUrl = e.cdnUrl
  var /* [auto-meaningful-name] */e$name = e.name
  var /* [auto-meaningful-name] */e$source = e.source
  var /* [auto-meaningful-name] */e$duration = e.duration
  var /* [auto-meaningful-name] */e$isPlaying = e.isPlaying
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var c = useDispatch()
  var l = useState(0)
  var u = $_10_index.a(l, 2)
  var d = u[0]
  var p = u[1]
  function m(e) {
    c($$_$$_$$_$$_src_editor_redux_common_actions.og(e))
  }
  function g(n) {
    e.setSoundPlayingId(n ? e.id : "")
    if (!n && bA[t]) {
      clearInterval(bA[t])
    }
  }
  function v(e) {
    var t = $$_$$_$$_$$_src_shared_tools_index.I(e)
    return [e.slice(0, e.lastIndexOf(t)), t]
  }
  useEffect(function () {
    return function () {
      if (e$isPlaying && bA[t]) {
        if (yA[t]) {
          yA[t].stop()
        }
        if (yA[t]) {
          yA[t].off("play")
        }
        if (yA[t]) {
          yA[t].off("end")
        }
        if (yA[t]) {
          yA[t].off("loaderror")
        }
        clearInterval(bA[t])
      }
    }
  }, [e$isPlaying, t])
  return React.createElement("li", {
    key: t,
    className: $_3411.SoundLayoutItem
  }, React.createElement("div", {
    className: $_3411.soundBoxWrapper
  }, React.createElement("div", {
    className: $_3411.delete,
    onClick: function (e) {
      var t = Et.ub("SOUND_FILE_ID", e)
      if (t.length > 0 || Et.Yb(e)) {
        c($$_$$_$$_$$_src_editor_redux_common_actions.zh({
          isDangerous: true,
          onConfirm: m.bind(null, e),
          allowText: $_710$a$formatMessage({
            id: "delete"
          }),
          title: $_710$a$formatMessage({
            id: "deleteSoundFileTitle"
          }, {
            name: $_190.f(e$name || "", 10)
          }),
          content: $_710$a$formatMessage({
            id: "deleteSoundFileTips"
          }, {
            name: t.join("、")
          })
        }))
      } else {
        m(e)
      }
    }.bind(null, t)
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-delete"
  })), React.createElement("div", {
    className: $_3411.soundBox,
    onClick: function (e) {
      e.stopPropagation()
      if (e$isPlaying) {
        if (yA[t]) {
          yA[t].stop()
        }
        return void g(false)
      }
      p(0)
      if (!yA[t]) {
        yA[t] = $_431_index$a$AudioPlayer.load(t, e$cdnUrl || e$source || "", true)
      }
      yA[t].play()
      yA[t].on("play", function () {
        var e = 0
        bA[t] = setInterval(function () {
          e++
          p(e)
        }, 1e3)
        g(true)
      })
      yA[t].on("end", function () {
        return g(false)
      })
      yA[t].on("loaderror", function () {
        g(false)
        yA[t] = null
      })
    }
  }, React.createElement("audio", {
    src: e$cdnUrl || e$source,
    preload: "none"
  }), e$isPlaying ? React.createElement("div", {
    className: $_3411.soundPauseIconBox
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-sound-pause",
    className: $_3411.soundDefaultIcon
  }), React.createElement("div", {
    className: Classnames($_3411.progressWrapper, $_3411.rightWrapper)
  }, React.createElement("div", {
    className: Classnames($_3411.circleProgress, $_3411.rightCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  })), React.createElement("div", {
    className: Classnames($_3411.progressWrapper, $_3411.leftWrapper)
  }, React.createElement("div", {
    className: Classnames($_3411.circleProgress, $_3411.leftCircle),
    style: {
      animationDuration: "".concat(e$duration, "s")
    }
  }))) : React.createElement("div", {
    className: $_3411.soundIconBox
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-music",
    className: $_3411.soundDefaultIcon
  }), React.createElement("div", {
    className: $_3411.soundPlayIconBox
  }, React.createElement($$_$$_$$_$$_src_shared_ui_components_index.j, {
    type: "icon-sound-play",
    className: $_3411.soundPlayIcon
  })))), React.createElement("div", {
    className: $_3411.soundDuration
  }, $$_$$_$$_$$_src_shared_tools_index.w(e$isPlaying ? d : e$duration))), React.createElement("div", {
    className: $_3411.fileItemName
  }, React.createElement(fA, {
    suffix: v(e$name)[1],
    isTrimmed: true,
    defaultValue: v(e$name)[0],
    onBlur: function (e, n, r, o) {
      if (r) {
        if (r === e || function (e) {
          return Et.xb().some(function (t) {
            return t.name === e
          })
        }(r + n)) {
          o.target.value = e
          if (r !== e) {
            c($$_$$_$$_$$_src_editor_redux_common_actions.mj({
              message: $_710$a$formatMessage({
                id: "renameFileNameRepeatTips"
              })
            }))
          }
        } else {
          if (yA[t]) {
            yA[t].stop()
          }
          g(false)
          c($$_$$_$$_$$_src_editor_redux_common_actions.qg(t, e + n, r + n))
        }
      } else {
        o.target.value = e
      }
    }.bind(null, v(e$name)[0], v(e$name)[1])
  })))
})
export { EA }
