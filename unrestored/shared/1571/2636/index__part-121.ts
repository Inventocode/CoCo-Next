/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：2636__part-121
 */

"use strict"

var cE
import * as /* [auto-meaningful-name] */$_135 from "./135"
import * as Tn from "./68"
import * as Et from "./9"
import * as te from "../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_editor_redux_common_actions from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "../../../../src/shared/ui/components/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710 from "./710"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import { useSelector, useDispatch } from "react-redux"
import /* [auto-meaningful-name] */React from "react"
import { memo, useState, useEffect } from "react"
import * as /* [auto-meaningful-name] */React1 from "react"
import * as /* [auto-meaningful-name] */$_431_index from "./431/index"
import * as /* [auto-meaningful-name] */$_213 from "./213"
import /* [auto-meaningful-name] */$_2131 from "./213"
var /* [auto-meaningful-name] */$_431_index$a$AudioPlayer = $_431_index.a.AudioPlayer
var YO = ""
var KO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fileId" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  var a = useSelector(function (e) {
    return e.project.selectedWidgetId
  })
  var s = useDispatch()
  var c = useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = useState(false)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = useState(undefined)
  var y = $_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = useState(false)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = e$getValue(n)
  function R(e) {
    if (e && a) {
      s($$_$$_$$_$$_src_editor_redux_common_actions.wf(e, function (e) {
        s($$_$$_$$_$$_src_editor_redux_common_actions.ag(e[0], a))
        if (cE) {
          cE.stop()
        }
        d(false)
      }))
    }
  }
  function k() {
    s($$_$$_$$_$$_src_editor_redux_common_actions.wj(Tn.c.SoundLibrary, function (e) {
      var t = e[0]
      e$onChange(n, t.id)
      s($$_$$_$$_$$_src_editor_redux_common_actions.sh())
      if (cE) {
        cE.stop()
      }
      d(false)
    }))
  }
  function x(e) {
    e.stopPropagation()
    if (E) {
      if (u) {
        if (cE) {
          cE.stop()
        }
        return void d(false)
      }
      if (!cE) {
        cE = $_431_index$a$AudioPlayer.load(E.id, E.cdnUrl || E.source || "", true)
      }
      cE.play()
      cE.on("play", function () {
        return d(true)
      })
      cE.on("end", function () {
        return d(false)
      })
      cE.on("loaderror", function () {
        d(false)
        cE = null
      })
    }
  }
  useEffect(function () {
    return function () {
      if (cE) {
        cE.stop()
      }
      if (cE) {
        cE.off("play")
      }
      if (cE) {
        cE.off("end")
      }
      if (cE) {
        cE.off("loaderror")
      }
    }
  }, [])
  useEffect(function () {
    if (cE) {
      cE.stop()
    }
    d(false)
    var e = Et.wb(j)
    O(e)
    if (j !== YO) {
      cE = null
    }
    YO = j
  }, [j])
  var D = function (e) {
    A(e)
  }
  var M = function () {
    A(false)
  }
  var L = function () {
    return React.createElement($_1213.a, {
      content: React.createElement("div", {
        className: $_2131.soundPopover,
        onClick: M
      }, React.createElement($_13_index.B, {
        className: $_2131.content,
        onChange: R,
        accept: $_135.h
      }, React.createElement($_13_index.j, {
        type: "icon-upload"
      }), React.createElement("span", null, $_710$a$formatMessage({
        id: "Resource.upload"
      }))), React.createElement("div", {
        className: $_2131.content,
        onClick: k
      }, React.createElement($_13_index.j, {
        type: "icon-open-resource-library"
      }), React.createElement("span", null, $_710$a$formatMessage({
        id: "Resource.SoundLibrary"
      })))),
      placement: "bottomLeft",
      trigger: "click",
      visible: T,
      onVisibleChange: D
    }, React.createElement("div", {
      className: $_2131.soundBtn
    }, $_710$a$formatMessage({
      id: "Resource.Replace"
    })))
  }
  return React.createElement($_13_index.i, {
    className: N($_2131.formItemWrapper, $_2131.changeSoundFile)
  }, React.createElement("div", {
    className: $_2131.title
  }, $_710$a$formatMessage({
    id: "AudioWidget.source"
  })), React.createElement("div", {
    className: $_2131.soundBox
  }, React.createElement("div", {
    tabIndex: -1,
    className: N($_2131.soundInfo, (null === E || undefined === E ? undefined : E.id) && $_2131.soundBgGround),
    onMouseEnter: function () {
      v(true)
    },
    onBlur: function () {
      v(false)
    },
    onMouseLeave: function () {
      if (!T) {
        v(false)
        A(false)
      }
    }
  }, (null === E || undefined === E ? undefined : E.id) ? React.createElement(React.Fragment, null, React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: "icon-sound",
    className: $_2131.iconSound
  }), React.createElement("div", {
    className: $_2131.soundName
  }, null === E || undefined === E ? undefined : E.name), React.createElement("div", {
    className: $_2131.soundDuration
  }, te.w(null === E || undefined === E ? undefined : E.duration))), React.createElement("div", {
    className: N($_2131.playCover, (g || u) && $_2131.visible)
  }, React.createElement("div", {
    className: $_2131.soundDelate,
    onClick: function () {
      if (cE) {
        cE.stop()
      }
      d(false)
      e$onChange(n, "")
    }
  }, React.createElement($_13_index.j, {
    type: "icon-delete"
  })), React.createElement("div", {
    className: $_2131.soundPlayBox,
    onClick: x
  }, u ? React.createElement("div", {
    className: $_2131.soundPauseIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-sound-pause",
    className: $_2131.soundDefaultIcon
  }), React.createElement("div", {
    className: N($_2131.progressWrapper, $_2131.rightWrapper)
  }, React.createElement("div", {
    className: N($_2131.circleProgress, $_2131.rightCircle),
    style: {
      animationDuration: "".concat(null === E || undefined === E ? undefined : E.duration, "s")
    }
  })), React.createElement("div", {
    className: N($_2131.progressWrapper, $_2131.leftWrapper)
  }, React.createElement("div", {
    className: N($_2131.circleProgress, $_2131.leftCircle),
    style: {
      animationDuration: "".concat(null === E || undefined === E ? undefined : E.duration, "s")
    }
  }))) : React.createElement("div", {
    className: $_2131.soundIconBox
  }, React.createElement("div", {
    className: $_2131.soundPlayIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-sound-play",
    className: $_2131.soundPlayIcon
  })))), React.createElement("div", {
    className: $_2131.soundName
  }, null === E || undefined === E ? undefined : E.name), L())) : React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: "icon-sound",
    className: $_2131.iconDefaultSound
  }), React.createElement("div", {
    className: N($_2131.cover, g && $_2131.visible)
  }, L())))))
})
var qO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "audioVolume" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement("div", {
    className: N($_2131.formItemWrapper, "changeAudioVolume")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: "AudioWidget.volume"
  })), React.createElement($_13_index.x, {
    className: $_2131.volumeSlider,
    value: o,
    min: $_135.g,
    max: $_135.f,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
var XO = memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "audioRate" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710$a$formatMessage = $_710.a().formatMessage
  return React.createElement("div", {
    className: N($_2131.formItemWrapper, "changeAudioVolume")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, $_710$a$formatMessage({
    id: "AudioWidget.rate"
  })), React.createElement($_13_index.x, {
    className: $_2131.volumeSlider,
    value: o,
    min: $_135.e,
    max: $_135.d,
    onChange: function (e) {
      if (e$onChange) {
        e$onChange(n, e)
      }
    },
    isShowRightInput: true
  }))
})
export { KO }
export { qO }
export { XO }
