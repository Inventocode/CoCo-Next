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
import * as te from "./15"
import * as /* [auto-meaningful-name] */$_1213 from "./1213"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_events_messagesWrapper from "../../../../src/editor/redux/common/actions"
import * as /* [auto-meaningful-name] */$_13_index from "./13/index"
import N from "./8"
import * as /* [auto-meaningful-name] */$_710_index from "./710/index"
import * as /* [auto-meaningful-name] */$_10_index from "./10/index"
import * as /* [auto-meaningful-name] */$_16_index from "./16/index"
import /* [auto-meaningful-name] */React from "react"
import * as /* [auto-meaningful-name] */_React from "react"
import * as /* [auto-meaningful-name] */$_431_index from "./431/index"
import * as /* [auto-meaningful-name] */$_213 from "./213"
import /* [auto-meaningful-name] */_$_ from "./213"
var /* [auto-meaningful-name] */$_431_index$a$AudioPlayer = $_431_index.a.AudioPlayer
var YO = ""
var KO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "fileId" : e$keyName
  var /* [auto-meaningful-name] */e$getValue = e.getValue
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  var a = $_16_index.e(function (e) {
    return e.project.selectedWidgetId
  })
  var s = $_16_index.d()
  var c = _React.useState(false)
  var l = $_10_index.a(c, 2)
  var u = l[0]
  var d = l[1]
  var p = _React.useState(false)
  var m = $_10_index.a(p, 2)
  var g = m[0]
  var v = m[1]
  var b = _React.useState(undefined)
  var y = $_10_index.a(b, 2)
  var E = y[0]
  var O = y[1]
  var w = _React.useState(false)
  var C = $_10_index.a(w, 2)
  var T = C[0]
  var A = C[1]
  var j = e$getValue(n)
  function R(e) {
    if (e && a) {
      s($$_$$_$$_$$_src_shared_events_messagesWrapper.wf(e, function (e) {
        s($$_$$_$$_$$_src_shared_events_messagesWrapper.ag(e[0], a))
        if (cE) {
          cE.stop()
        }
        d(false)
      }))
    }
  }
  function k() {
    s($$_$$_$$_$$_src_shared_events_messagesWrapper.wj(Tn.c.SoundLibrary, function (e) {
      var t = e[0]
      e$onChange(n, t.id)
      s($$_$$_$$_$$_src_shared_events_messagesWrapper.sh())
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
  _React.useEffect(function () {
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
  _React.useEffect(function () {
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
        className: _$_.soundPopover,
        onClick: M
      }, React.createElement($_13_index.B, {
        className: _$_.content,
        onChange: R,
        accept: $_135.h
      }, React.createElement($_13_index.j, {
        type: "icon-upload"
      }), React.createElement("span", null, $_710_index$a$formatMessage({
        id: "Resource.upload"
      }))), React.createElement("div", {
        className: _$_.content,
        onClick: k
      }, React.createElement($_13_index.j, {
        type: "icon-open-resource-library"
      }), React.createElement("span", null, $_710_index$a$formatMessage({
        id: "Resource.SoundLibrary"
      })))),
      placement: "bottomLeft",
      trigger: "click",
      visible: T,
      onVisibleChange: D
    }, React.createElement("div", {
      className: _$_.soundBtn
    }, $_710_index$a$formatMessage({
      id: "Resource.Replace"
    })))
  }
  return React.createElement($_13_index.i, {
    className: N(_$_.formItemWrapper, _$_.changeSoundFile)
  }, React.createElement("div", {
    className: _$_.title
  }, $_710_index$a$formatMessage({
    id: "AudioWidget.source"
  })), React.createElement("div", {
    className: _$_.soundBox
  }, React.createElement("div", {
    tabIndex: -1,
    className: N(_$_.soundInfo, (null === E || undefined === E ? undefined : E.id) && _$_.soundBgGround),
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
    className: _$_.iconSound
  }), React.createElement("div", {
    className: _$_.soundName
  }, null === E || undefined === E ? undefined : E.name), React.createElement("div", {
    className: _$_.soundDuration
  }, te.w(null === E || undefined === E ? undefined : E.duration))), React.createElement("div", {
    className: N(_$_.playCover, (g || u) && _$_.visible)
  }, React.createElement("div", {
    className: _$_.soundDelate,
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
    className: _$_.soundPlayBox,
    onClick: x
  }, u ? React.createElement("div", {
    className: _$_.soundPauseIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-sound-pause",
    className: _$_.soundDefaultIcon
  }), React.createElement("div", {
    className: N(_$_.progressWrapper, _$_.rightWrapper)
  }, React.createElement("div", {
    className: N(_$_.circleProgress, _$_.rightCircle),
    style: {
      animationDuration: "".concat(null === E || undefined === E ? undefined : E.duration, "s")
    }
  })), React.createElement("div", {
    className: N(_$_.progressWrapper, _$_.leftWrapper)
  }, React.createElement("div", {
    className: N(_$_.circleProgress, _$_.leftCircle),
    style: {
      animationDuration: "".concat(null === E || undefined === E ? undefined : E.duration, "s")
    }
  }))) : React.createElement("div", {
    className: _$_.soundIconBox
  }, React.createElement("div", {
    className: _$_.soundPlayIconBox
  }, React.createElement($_13_index.j, {
    type: "icon-sound-play",
    className: _$_.soundPlayIcon
  })))), React.createElement("div", {
    className: _$_.soundName
  }, null === E || undefined === E ? undefined : E.name), L())) : React.createElement(React.Fragment, null, React.createElement($_13_index.j, {
    type: "icon-sound",
    className: _$_.iconDefaultSound
  }), React.createElement("div", {
    className: N(_$_.cover, g && _$_.visible)
  }, L())))))
})
var qO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "audioVolume" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, "changeAudioVolume")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, $_710_index$a$formatMessage({
    id: "AudioWidget.volume"
  })), React.createElement($_13_index.x, {
    className: _$_.volumeSlider,
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
var XO = _React.memo(function (e) {
  var /* [auto-meaningful-name] */e$keyName = e.keyName
  var n = undefined === e$keyName ? "audioRate" : e$keyName
  var /* [auto-meaningful-name] */e$onChange = e.onChange
  var o = (0, e.getValue)(n)
  var /* [auto-meaningful-name] */$_710_index$a$formatMessage = $_710_index.a().formatMessage
  return React.createElement("div", {
    className: N(_$_.formItemWrapper, "changeAudioVolume")
  }, React.createElement("div", {
    className: "coco-form-item-label"
  }, $_710_index$a$formatMessage({
    id: "AudioWidget.rate"
  })), React.createElement($_13_index.x, {
    className: _$_.volumeSlider,
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
