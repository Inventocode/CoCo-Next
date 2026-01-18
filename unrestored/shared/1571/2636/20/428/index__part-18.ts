/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-18
 */

"use strict"

import { cu } from "./index__part-17"
var uu
import * as /* [auto-meaningful-name] */$$_$$_431_index from "../../431/index"
import * as /* [auto-meaningful-name] */$$_$$_48_index from "../../48/index"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_135 from "../../135"
var /* [auto-meaningful-name] */$$_$$_431_index$a$AudioPlayer = $$_$$_431_index.a.AudioPlayer
!function (e) {
  e[e.SOUND_MAN = 1] = "SOUND_MAN"
  e[e.SOUND_WOMAN = 0] = "SOUND_WOMAN"
  e[e.SOUND_CHILD = 4] = "SOUND_CHILD"
}(uu || (uu = {}))
var fu = {}
function hu() {
  $$_$$_14.a.condition(false, {
    type: "warning",
    messageId: "soundBlockValueTypeError"
  })
}
function mu(e, t) {
  return gu.apply(this, arguments)
}
function gu() {
  return (gu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */o$data
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return cu({
              tex: n,
              ctp: 1,
              vol: 9,
              per: uu[t]
            })
          case 3:
            if (null === (e$sent = e.sent) || undefined === e$sent || null === (o$data = e$sent.data) || undefined === o$data ? undefined : o$data.audioUrl) {
              $$_$$_431_index$a$AudioPlayer.play_url(e$sent.data.audioUrl)
            }
            e.next = 10
            break
          case 7:
            e.prev = 7
            e.t0 = e.catch(0)
            console.error(e.t0)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 7]])
  }))).apply(this, arguments)
}
function _u(e, t) {
  return vu.apply(this, arguments)
}
function vu() {
  return (vu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */o$data
    var /* [auto-meaningful-name] */e$sent
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.prev = 0
            e.next = 3
            return cu({
              tex: n,
              ctp: 1,
              vol: 9,
              per: uu[t]
            })
          case 3:
            if (!(null === (e$sent = e.sent) || undefined === e$sent || null === (o$data = e$sent.data) || undefined === o$data ? undefined : o$data.audioUrl)) {
              e.next = 7
              break
            }
            e.next = 7
            return new Promise(function (e, t) {
              $$_$$_431_index$a$AudioPlayer.play_url(e$sent.data.audioUrl, function () {
                return e(true)
              }, function () {
                return t()
              })
            })
          case 7:
            e.next = 12
            break
          case 9:
            e.prev = 9
            e.t0 = e.catch(0)
            console.error(e.t0)
          case 12:
          case "end":
            return e.stop()
        }
      }
    }, e, null, [[0, 9]])
  }))).apply(this, arguments)
}
function bu(e, t) {
  var /* [auto-meaningful-name] */u$attributes
  var /* [auto-meaningful-name] */u$attributes1
  var /* [auto-meaningful-name] */u$attributes2
  function i(e) {
    var t
    var /* [auto-meaningful-name] */$$_$$_48_index$a$getState$soundFileMap = $$_$$_48_index.a().getState().soundFileMap
    var r = $$_$$_48_index$a$getState$soundFileMap.get(e)
    return r || ($$_$$_48_index$a$getState$soundFileMap.forEach(function (n) {
      if (!(n.name !== e && "".concat(n.name, ".mp3") !== e)) {
        t = n
      }
    }), t)
  }
  if (fu[e]) {
    if (t) {
      var /* [auto-meaningful-name] */fuE$_volume = fu[e]._volume
      var /* [auto-meaningful-name] */fuE$_rate = fu[e]._rate
      fu[e].unload()
      var c = i(t)
      var l = $$_$$_431_index$a$AudioPlayer.load(e, (null === c || undefined === c ? undefined : c.cdnUrl) || "", true)
      l.volume(fuE$_volume)
      l.rate(fuE$_rate)
      fu[e] = l
    }
    return fu[e]
  }
  var u = $$_$$_48_index.a().getState().widgetMap.get(e)
  var d = t || (null === (u$attributes = u.attributes) || undefined === u$attributes ? undefined : u$attributes.fileId)
  var p = null === (u$attributes1 = u.attributes) || undefined === u$attributes1 ? undefined : u$attributes1.audioVolume
  var f = null === (u$attributes2 = u.attributes) || undefined === u$attributes2 ? undefined : u$attributes2.audioRate
  var h = i(d)
  if (h) {
    var m = $$_$$_431_index$a$AudioPlayer.load(e, (null === h || undefined === h ? undefined : h.cdnUrl) || "", true)
    if ("number" === typeof p) {
      m.volume(yu(p, "volume"))
    }
    if ("number" === typeof f) {
      m.rate(yu(f, "rate"))
    }
    fu[e] = m
    return m
  }
  return ""
}
function yu(e, t) {
  if ("volume" === t) {
    e = (e = e > $$_$$_135.f ? $$_$$_135.f : e) < $$_$$_135.g ? $$_$$_135.g : e
  }
  if ("rate" === t) {
    e = (e = e > $$_$$_135.d ? $$_$$_135.d : e) < $$_$$_135.e ? $$_$$_135.e : e
  }
  return e / 100
}
function Eu(e) {
  var t = bu(e)
  if (t && !t.playing()) {
    t.play()
  }
}
function Ou(e) {
  var t = bu(e)
  if (t) {
    t.stop()
  }
}
function wu(e) {
  var t = bu(e)
  if (t) {
    t.pause()
  }
}
function Cu(e, t) {
  bu(e, t)
}
function Tu(e, t) {
  if ("number" === typeof t) {
    var n = bu(e)
    if (n) {
      n.volume(yu(t, "volume"))
    }
  } else {
    hu()
  }
}
function Su(e, t) {
  if ("number" === typeof t) {
    var n = bu(e)
    if (n) {
      n.rate(yu(t, "rate"))
    }
  } else {
    hu()
  }
}
function Au(e, t, n) {
  if ("number" === typeof n) {
    var r = bu(e)
    if (r) {
      var o = 100 * r._volume
      if ("INCREASE" === t) {
        o += n
      }
      if ("DECREASE" === t) {
        o -= n
      }
      r.volume(yu(o, "volume"))
    }
  } else {
    hu()
  }
}
function Iu(e, t, n) {
  if ("number" === typeof n) {
    var r = bu(e)
    if (r) {
      var o = 100 * r._rate
      if ("INCREASE" === t) {
        o += n
      }
      if ("DECREASE" === t) {
        o -= n
      }
      r.rate(yu(o, "rate"))
    }
  } else {
    hu()
  }
}
export { $$_$$_431_index$a$AudioPlayer as pu }
export { mu }
export { _u }
export { Eu }
export { Ou }
export { wu }
export { Cu }
export { Tu }
export { Su }
export { Au }
export { Iu }
