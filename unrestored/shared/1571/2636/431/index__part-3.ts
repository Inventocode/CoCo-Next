/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：431__part-3
 */

"use strict"

import { r, o, s } from "./index__part-0"
import { u, _, A, g } from "./index__part-1"
import { R, F } from "./index__part-2"
import * as /* [auto-meaningful-name] */Lodash from "lodash"
import * as /* [auto-meaningful-name] */$_790 from "./790"
import * as /* [auto-meaningful-name] */$_519_index from "./519/index"
var M = {}
var L = {}
var j = {}
function U(e, t, n) {
  if (undefined === n) {
    n = false
  }
  var r = new $_790.Howl({
    src: t,
    html5: false,
    format: ["mp3", "wav"]
  })
  if (n) {
    L[e] = r
  } else {
    M[e] = r
  }
  return r
}
function H(e, t, n, r) {
  var i = $_519_index.v4()
  j[i] = i
  var /* [auto-meaningful-name] */document$body = document.body
  var a = document.createElement("audio")
  a.autoplay = true
  a.src = e
  a.style.display = "none"
  a.setAttribute("id", "audio" + i)
  document$body.appendChild(a)
  a.addEventListener("error", function (e) {
    if (n) {
      n(e)
    }
  })
  a.addEventListener("ended", function (e) {
    if (t) {
      t(e)
    }
  })
  a.addEventListener("pause", function (e) {
    if (r) {
      r()
    }
  })
}
function V(e) {
  if (!e) {
    Lodash.forEach(M, function (e) {
      e.stop()
    })
    Lodash.forEach(L, function (e) {
      e.stop()
      e.unload()
    })
    Lodash.forEach(j, function (e, t) {
      var n = document.getElementById("audio" + t)
      if (n) {
        n.pause()
      }
    })
    return void (j = {})
  }
  var t
  if (L[e]) {
    (t = L[e]).stop()
    return void t.unload()
  }
  if (M[e]) {
    (t = M[e]).stop()
  } else {
    console.warn("Howl not Found")
  }
}
function G(e) {
  if (2 == e) {
    u(o("sound_player/block_no_network"), "notice")
  }
}
var z = {}
var Q = {}
var W = {}
function K(e, t, n) {
  if (undefined === n) {
    n = false
  }
  var r = new $_790.Howl({
    src: t,
    html5: true,
    format: ["mp3", "wav"]
  })
  if (n) {
    Q[e] = r
  } else {
    z[e] = r
  }
  return r
}
function X(e, t, n, r, i) {
  var o = K(r || $_519_index.v4(), e, true)
  if (o) {
    if ("loaded" === o.state()) {
      return void o.play()
    }
    o.once("load", function () {
      o.play()
    })
    o.once("loaderror", function (e, t) {
      console.error("Howl Error when Add Sound to Store:", t)
      q(t)
      if (n) {
        n()
      }
    })
    o.on("end", function () {
      if (t) {
        t()
      }
      o.unload()
    })
    o.once("stop", function () {
      if (i) {
        i()
      }
    })
  }
}
function Y(e) {
  if (!e) {
    Lodash.forEach(z, function (e) {
      e.stop()
    })
    Lodash.forEach(Q, function (e) {
      e.stop()
      e.unload()
    })
    Lodash.forEach(W, function (e, t) {
      var n = document.getElementById("audio" + t)
      if (n) {
        n.pause()
      }
    })
    return void (W = {})
  }
  var t
  if (Q[e]) {
    (t = Q[e]).stop()
    return void t.unload()
  }
  if (z[e]) {
    (t = z[e]).stop()
  } else {
    console.warn("Howl not Found")
  }
}
function q(e) {
  if (2 == e) {
    u(o("sound_player/block_no_network"), "notice")
  }
}
var $ = {}
var J = {}
var Z = {}
function ee(e, t, n) {
  if (undefined === n) {
    n = false
  }
  var r = new $_790.Howl({
    src: t,
    html5: false,
    format: ["mp3", "wav"]
  })
  if (n) {
    J[e] = r
  } else {
    $[e] = r
  }
  return r
}
function te(e) {
  if (e) {
    if ("url" !== e) {
      var t = $[e] || J[e]
      if (t) {
        t.unload()
        delete $[e]
        delete J[e]
      } else {
        console.warn("Howl not Found")
      }
    } else {
      Lodash.forEach(J, function (e, t) {
        e.unload()
        delete J[t]
      })
    }
  } else {
    console.warn("Sound id no found")
  }
}
function ne(e) {
  if (!e) {
    Lodash.forEach($, function (e) {
      e.stop()
    })
    Lodash.forEach(J, function (e) {
      e.stop()
      e.unload()
    })
    Lodash.forEach(Z, function (e, t) {
      var n = document.getElementById("audio" + t)
      if (n) {
        n.pause()
      }
    })
    return void (Z = {})
  }
  var t
  if (J[e]) {
    (t = J[e]).unload()
    return void t.stop()
  }
  if ($[e]) {
    (t = $[e]).stop()
  } else {
    console.warn("Howl not Found")
  }
}
function re(e) {
  if (2 == e) {
    u(o("sound_player/block_no_network"), "notice")
  }
}
function ie(e, t) {
  return _() ? function (e, t) {
    var n = $[e]
    if (n) {
      return n.rate(t)
    }
    console.warn("Howl not Found")
  }(e, t) : g() ? function (e, t) {
    var n = M[e]
    if (!n) {
      console.warn("Howl not Found")
    }
    return n.rate(t)
  }(e, t) : A() ? function (e, t) {
    var n = z[e]
    if (!n) {
      console.warn("Howl not Found")
    }
    return n.rate(t)
  }(e, t) : undefined
}
function oe(e, t) {
  return _() ? function (e, t) {
    var n = $[e]
    if (n) {
      return n.volume(t)
    }
    console.warn("Howl not Found")
  }(e, t) : g() ? function (e, t) {
    var n = M[e]
    if (!n) {
      console.warn("Howl not Found")
    }
    return n.volume(t)
  }(e, t) : A() ? function (e, t) {
    var n = z[e]
    if (!n) {
      console.warn("Howl not Found")
    }
    return n.volume(t)
  }(e, t) : undefined
}
var ae = {
  load: function (e, t, n) {
    if (undefined === n) {
      n = false
    }
    return _() ? ee(e, t, n) : g() ? U(e, t, n) : A() ? K(e, t, n) : undefined
  },
  unload: function (e) {
    if (_()) {
      te(e)
    } else {
      if (g()) {
        (function (e) {
          if (e) {
            if ("url" !== e) {
              var t = M[e]
              if (t) {
                t.unload()
                delete M[e]
              } else {
                console.warn("Howl not Found")
              }
            }
          } else {
            console.warn("Sound id no found")
          }
        })(e)
      } else {
        if (A()) {
          (function (e) {
            if (e) {
              if ("url" !== e) {
                var t = z[e]
                if (t) {
                  t.unload()
                  delete z[e]
                } else {
                  console.warn("Howl not Found")
                }
              }
            } else {
              console.warn("Sound id no found")
            }
          })(e)
        }
      }
    }
  },
  play: function (e, t, n, r) {
    if (_()) {
      (function (e, t, n, r) {
        var i = $[e]
        if (i) {
          if ("loaded" !== i.state()) {
            console.warn("Howl load fail")
            if (t) {
              t()
            }
          }
          var o = i.play()
          i.once("end", function () {
            if (t) {
              t()
            }
          }, o)
          i.once("loaderror", function (e, t) {
            console.error("Howler Load Error:", t)
            re(t)
            if (n) {
              n()
            }
          })
          i.once("stop", function () {
            if (r) {
              r()
            }
          })
        } else {
          console.warn("Howl not found")
        }
      })(e, t, n, r)
    } else {
      if (g()) {
        (function (e, t, n, r) {
          var i = M[e]
          if (!i) {
            console.warn("Howl not found")
            return void H(i._src, t, n, r)
          }
          if ("loaded" !== i.state()) {
            console.warn("Howl load fail")
            return void H(i._src, t, n, r)
          }
          var o = i.play()
          i.once("end", function () {
            if (t) {
              t()
            }
          }, o)
          i.once("stop", function () {
            if (r) {
              r()
            }
          })
          i.once("loaderror", function (e) {
            console.error("Howler Load Error:", e)
            G(e)
            if (n) {
              n()
            }
            H(i._src, t, n)
          })
        })(e, t, n, r)
      } else {
        if (A()) {
          (function (e, t, n, r) {
            console.log("play")
            var i = z[e]
            if (!i) {
              X(i._src, t, n)
              return void console.warn("Howl not found")
            }
            if ("loaded" !== i.state()) {
              console.warn("Howl load fail")
              X(i._src, t, n, undefined, r)
            }
            var o = i.play()
            i.once("end", function () {
              if (t) {
                t()
              }
            }, o)
            i.once("loaderror", function (e, o) {
              q(o)
              if (n) {
                n()
              }
              X(i._src, t, n, undefined, r)
            })
            i.once("stop", function () {
              if (r) {
                r()
              }
            })
          })(e, t, n, r)
        }
      }
    }
  },
  play_url: function (e, t, n, r, i) {
    if (_()) {
      (function (e, t, n, r, i) {
        var o = ee(r || $_519_index.v4(), e, true)
        if ("loaded" === o.state()) {
          o.play()
        }
        o.once("load", function () {
          o.play()
        })
        o.once("end", function () {
          te(r)
          if (t) {
            t()
          }
        })
        o.once("stop", function () {
          if (i) {
            i()
          }
        })
        o.once("loaderror", function (e, t) {
          console.error("Howler Load Error:", t)
          re(t)
          if (n) {
            n()
          }
        })
      })(e, t, n, r, i)
    } else {
      if (g()) {
        (function (e, t, n, r, i) {
          var o = U(r || $_519_index.v4(), e, true)
          if (o) {
            if ("loaded" === o.state()) {
              return void o.play()
            }
            o.once("load", function () {
              o.play()
            })
            o.once("loaderror", function (e, t) {
              console.error("Howl Error when Add Sound to Store:", t)
              G(t)
              if (n) {
                n()
              }
            })
            o.on("end", function () {
              if (t) {
                t()
              }
              o.unload()
            })
            o.once("stop", function () {
              if (i) {
                i()
              }
            })
          }
        })(e, t, n, r, i)
      } else {
        if (A()) {
          X(e, t, n, r, i)
        }
      }
    }
  },
  stop: function (e) {
    if (_()) {
      ne(e)
    } else {
      if (g()) {
        V(e)
      } else {
        if (A()) {
          Y(e)
        }
      }
    }
  },
  is_playing: function (e) {
    return _() ? function (e) {
      if (!e) {
        return Lodash.find($, function (e) {
          return e.playing()
        })
      }
      if ("url" === e) {
        return Lodash.find(J, function (e) {
          return e.playing()
        })
      }
      var t = $[e]
      if (t) {
        return t.playing()
      }
      console.warn("Howl not Found")
    }(e) : g() ? function (e) {
      if (!e) {
        return Lodash.find(M, function (e) {
          return e.playing()
        })
      }
      if ("url" !== e) {
        var t = M[e]
        if (!t) {
          console.warn("Howl not Found")
        }
        return t.playing()
      }
    }(e) : A() ? function (e) {
      if (!e) {
        return Lodash.find(z, function (e) {
          return e.playing()
        })
      }
      if ("url" !== e) {
        var t = z[e]
        if (!t) {
          console.warn("Howl not Found")
        }
        return t.playing()
      }
    }(e) : undefined
  },
  set_rate: ie,
  set_volume: oe,
  stop_all_audio: function () {
    if (_()) {
      ne()
    } else {
      if (g()) {
        V()
      } else {
        if (A()) {
          Y()
        }
      }
    }
    F().catch(function (e) {
      console.error(e)
    })
  },
  reset_sound: function (e) {
    for (var t in e) {
      oe(e[t].id, e[t].volume)
      ie(e[t].id, e[t].playback_rate)
    }
  },
  get_volume: function (e) {
    return _() ? function (e) {
      return $[e].volume()
    }(e) : g() ? function (e) {
      return M[e].volume()
    }(e) : A() ? function (e) {
      return z[e].volume()
    }(e) : 0
  },
  get_rate: function (e) {
    return _() ? function (e) {
      return $[e].rate()
    }(e) : g() ? function (e) {
      return M[e].rate()
    }(e) : A() ? function (e) {
      return z[e].rate()
    }(e) : 0
  },
  get_howl: function (e) {
    return _() ? function (e) {
      if (undefined != $[e]) {
        return $[e]
      }
    }(e) : g() ? function (e) {
      if (undefined != M[e]) {
        return M[e]
      }
    }(e) : A() ? function (e) {
      if (undefined != z[e]) {
        return z[e]
      }
    }(e) : undefined
  },
  check_sound: function (e) {
    return _() ? function (e) {
      return undefined !== $[e]
    }(e) : g() ? function (e) {
      return undefined !== M[e]
    }(e) : A() ? function (e) {
      return undefined !== z[e]
    }(e) : undefined
  }
}
var se = ["A0", "Bb0", "B0", "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", "C7", "Db7", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7", "C8"]
var ce = ["piano"]
function ue(e) {
  e
}
function le(e) {
  return Lodash.isNumber(e) ? 60 * e / 80 : 0
}
function fe(e) {
  return e / 60 * 80
}
function de(e) {
  return se[e]
}
function he(e) {
  return Lodash.indexOf(se, e)
}
function pe(e, t) {
  var n = s + "/" + de(e) + ".mp3"
  var r = Lodash.uniqueId("midi")
  var i = ae.load(r, n, true)
  if (i) {
    if ("loaded" === i.state()) {
      var o = i.play()
      if (t) {
        var a = le(t)
        i.fade(1, .01, a < .2 ? 200 : 1e3 * a, o)
      }
      return
    }
    i.once("load", function () {
      var e = i.play()
      if (t) {
        var n = le(t)
        i.fade(1, .01, n < .2 ? 200 : 1e3 * n, e)
      }
    })
    i.once("loaderror", function (e, t) {
      if (__DEV__) {
        console.error("Howl Error when Add Sound to Store:", t)
      }
    })
  }
  return r
}
function _e(e) {
  ae.stop(e)
}
var Ae = {
  AudioPlayer: ae,
  MidiPlayer: r,
  start_volume_measuring: R,
  stop_volume_measuring: F
}
export { se }
export { ce }
export { ue }
export { le }
export { fe }
export { de }
export { he }
export { pe }
export { _e }
export { Ae }
