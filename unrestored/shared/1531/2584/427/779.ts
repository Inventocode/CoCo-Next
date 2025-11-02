/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：779
 */

(function (n) {
  var r
  !function () {
    "use strict"

    var i = function () {
      this.init()
    }
    i.prototype = {
      init: function () {
        var e = this || o
        e._counter = 1e3
        e._html5AudioPool = []
        e.html5PoolSize = 10
        e._codecs = {}
        e._howls = []
        e._muted = false
        e._volume = 1
        e._canPlayEvent = "canplaythrough"
        e._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null
        e.masterGain = null
        e.noAudio = false
        e.usingWebAudio = true
        e.autoSuspend = true
        e.ctx = null
        e.autoUnlock = true
        e._setup()
        return e
      },
      volume: function (e) {
        var t = this || o
        e = parseFloat(e)
        if (!t.ctx) {
          h()
        }
        if ("undefined" !== typeof e && e >= 0 && e <= 1) {
          t._volume = e
          if (t._muted) {
            return t
          }
          if (t.usingWebAudio) {
            t.masterGain.gain.setValueAtTime(e, o.ctx.currentTime)
          }
          for (var n = 0; n < t._howls.length; n++) {
            if (!t._howls[n]._webAudio) {
              for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                var a = t._howls[n]._soundById(r[i])
                if (a && a._node) {
                  a._node.volume = a._volume * e
                }
              }
            }
          }
          return t
        }
        return t._volume
      },
      mute: function (e) {
        var t = this || o
        if (!t.ctx) {
          h()
        }
        t._muted = e
        if (t.usingWebAudio) {
          t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, o.ctx.currentTime)
        }
        for (var n = 0; n < t._howls.length; n++) {
          if (!t._howls[n]._webAudio) {
            for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
              var a = t._howls[n]._soundById(r[i])
              if (a && a._node) {
                a._node.muted = !!e || a._muted
              }
            }
          }
        }
        return t
      },
      stop: function () {
        for (var e = this || o, t = 0; t < e._howls.length; t++) {
          e._howls[t].stop()
        }
        return e
      },
      unload: function () {
        for (var e = this || o, t = e._howls.length - 1; t >= 0; t--) {
          e._howls[t].unload()
        }
        if (e.usingWebAudio && e.ctx && "undefined" !== typeof e.ctx.close) {
          e.ctx.close()
          e.ctx = null
          h()
        }
        return e
      },
      codecs: function (e) {
        return (this || o)._codecs[e.replace(/^x-/, "")]
      },
      _setup: function () {
        var e = this || o
        e.state = e.ctx && e.ctx.state || "suspended"
        e._autoSuspend()
        if (!e.usingWebAudio) {
          if ("undefined" !== typeof Audio) {
            try {
              if ("undefined" === typeof new Audio().oncanplaythrough) {
                e._canPlayEvent = "canplay"
              }
            } catch (t) {
              e.noAudio = true
            }
          } else {
            e.noAudio = true
          }
        }
        try {
          if (new Audio().muted) {
            e.noAudio = true
          }
        } catch (t) {}
        if (!e.noAudio) {
          e._setupCodecs()
        }
        return e
      },
      _setupCodecs: function () {
        var e = this || o
        var t = null
        try {
          t = "undefined" !== typeof Audio ? new Audio() : null
        } catch (a) {
          return e
        }
        if (!t || "function" !== typeof t.canPlayType) {
          return e
        }
        var n = t.canPlayType("audio/mpeg;").replace(/^no$/, "")
        var r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g)
        var i = r && parseInt(r[0].split("/")[1], 10) < 33
        e._codecs = {
          mp3: !(i || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
          mpeg: !!n,
          opus: !!t.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
          ogg: !!t.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
          oga: !!t.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
          wav: !!(t.canPlayType("audio/wav; codecs=\"1\"") || t.canPlayType("audio/wav")).replace(/^no$/, ""),
          aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
          m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!t.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
          webm: !!t.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
          dolby: !!t.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
          flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
        }
        return e
      },
      _unlockAudio: function () {
        var e = this || o
        if (!e._audioUnlocked && e.ctx) {
          e._audioUnlocked = false
          e.autoUnlock = false
          if (!(e._mobileUnloaded || 44100 === e.ctx.sampleRate)) {
            e._mobileUnloaded = true
            e.unload()
          }
          e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050)
          var t = function t(n) {
            for (; e._html5AudioPool.length < e.html5PoolSize;) {
              try {
                var r = new Audio()
                r._unlocked = true
                e._releaseHtml5Audio(r)
              } catch (n) {
                e.noAudio = true
                break
              }
            }
            for (var i = 0; i < e._howls.length; i++) {
              if (!e._howls[i]._webAudio) {
                for (var o = e._howls[i]._getSoundIds(), a = 0; a < o.length; a++) {
                  var s = e._howls[i]._soundById(o[a])
                  if (s && s._node && !s._node._unlocked) {
                    s._node._unlocked = true
                    s._node.load()
                  }
                }
              }
            }
            e._autoResume()
            var c = e.ctx.createBufferSource()
            c.buffer = e._scratchBuffer
            c.connect(e.ctx.destination)
            if ("undefined" === typeof c.start) {
              c.noteOn(0)
            } else {
              c.start(0)
            }
            if ("function" === typeof e.ctx.resume) {
              e.ctx.resume()
            }
            c.onended = function () {
              c.disconnect(0)
              e._audioUnlocked = true
              document.removeEventListener("touchstart", t, true)
              document.removeEventListener("touchend", t, true)
              document.removeEventListener("click", t, true)
              for (var n = 0; n < e._howls.length; n++) {
                e._howls[n]._emit("unlock")
              }
            }
          }
          document.addEventListener("touchstart", t, true)
          document.addEventListener("touchend", t, true)
          document.addEventListener("click", t, true)
          return e
        }
      },
      _obtainHtml5Audio: function () {
        var e = this || o
        if (e._html5AudioPool.length) {
          return e._html5AudioPool.pop()
        }
        var t = new Audio().play()
        if (t && "undefined" !== typeof Promise && (t instanceof Promise || "function" === typeof t.then)) {
          t.catch(function () {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
          })
        }
        return new Audio()
      },
      _releaseHtml5Audio: function (e) {
        var t = this || o
        if (e._unlocked) {
          t._html5AudioPool.push(e)
        }
        return t
      },
      _autoSuspend: function () {
        var e = this
        if (e.autoSuspend && e.ctx && "undefined" !== typeof e.ctx.suspend && o.usingWebAudio) {
          for (var t = 0; t < e._howls.length; t++) {
            if (e._howls[t]._webAudio) {
              for (var n = 0; n < e._howls[t]._sounds.length; n++) {
                if (!e._howls[t]._sounds[n]._paused) {
                  return e
                }
              }
            }
          }
          if (e._suspendTimer) {
            clearTimeout(e._suspendTimer)
          }
          e._suspendTimer = setTimeout(function () {
            if (e.autoSuspend) {
              e._suspendTimer = null
              e.state = "suspending"
              var t = function () {
                e.state = "suspended"
                if (e._resumeAfterSuspend) {
                  delete e._resumeAfterSuspend
                  e._autoResume()
                }
              }
              e.ctx.suspend().then(t, t)
            }
          }, 3e4)
          return e
        }
      },
      _autoResume: function () {
        var e = this
        if (e.ctx && "undefined" !== typeof e.ctx.resume && o.usingWebAudio) {
          if ("running" === e.state && "interrupted" !== e.ctx.state && e._suspendTimer) {
            clearTimeout(e._suspendTimer)
            e._suspendTimer = null
          } else {
            if ("suspended" === e.state || "running" === e.state && "interrupted" === e.ctx.state) {
              e.ctx.resume().then(function () {
                e.state = "running"
                for (var t = 0; t < e._howls.length; t++) {
                  e._howls[t]._emit("resume")
                }
              })
              if (e._suspendTimer) {
                clearTimeout(e._suspendTimer)
                e._suspendTimer = null
              }
            } else {
              if ("suspending" === e.state) {
                e._resumeAfterSuspend = true
              }
            }
          }
          return e
        }
      }
    }
    var o = new i()
    var a = function (e) {
      if (e.src && 0 !== e.src.length) {
        this.init(e)
      } else {
        console.error("An array of source files must be passed with any new Howl.")
      }
    }
    a.prototype = {
      init: function (e) {
        var t = this
        if (!o.ctx) {
          h()
        }
        t._autoplay = e.autoplay || false
        t._format = "string" !== typeof e.format ? e.format : [e.format]
        t._html5 = e.html5 || false
        t._muted = e.mute || false
        t._loop = e.loop || false
        t._pool = e.pool || 5
        t._preload = "boolean" !== typeof e.preload && "metadata" !== e.preload || e.preload
        t._rate = e.rate || 1
        t._sprite = e.sprite || {}
        t._src = "string" !== typeof e.src ? e.src : [e.src]
        t._volume = undefined !== e.volume ? e.volume : 1
        t._xhr = {
          method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
          headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
          withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials
        }
        t._duration = 0
        t._state = "unloaded"
        t._sounds = []
        t._endTimers = {}
        t._queue = []
        t._playLock = false
        t._onend = e.onend ? [{
          fn: e.onend
        }] : []
        t._onfade = e.onfade ? [{
          fn: e.onfade
        }] : []
        t._onload = e.onload ? [{
          fn: e.onload
        }] : []
        t._onloaderror = e.onloaderror ? [{
          fn: e.onloaderror
        }] : []
        t._onplayerror = e.onplayerror ? [{
          fn: e.onplayerror
        }] : []
        t._onpause = e.onpause ? [{
          fn: e.onpause
        }] : []
        t._onplay = e.onplay ? [{
          fn: e.onplay
        }] : []
        t._onstop = e.onstop ? [{
          fn: e.onstop
        }] : []
        t._onmute = e.onmute ? [{
          fn: e.onmute
        }] : []
        t._onvolume = e.onvolume ? [{
          fn: e.onvolume
        }] : []
        t._onrate = e.onrate ? [{
          fn: e.onrate
        }] : []
        t._onseek = e.onseek ? [{
          fn: e.onseek
        }] : []
        t._onunlock = e.onunlock ? [{
          fn: e.onunlock
        }] : []
        t._onresume = []
        t._webAudio = o.usingWebAudio && !t._html5
        if ("undefined" !== typeof o.ctx && o.ctx && o.autoUnlock) {
          o._unlockAudio()
        }
        o._howls.push(t)
        if (t._autoplay) {
          t._queue.push({
            event: "play",
            action: function () {
              t.play()
            }
          })
        }
        if (t._preload && "none" !== t._preload) {
          t.load()
        }
        return t
      },
      load: function () {
        var e = null
        if (o.noAudio) {
          this._emit("loaderror", null, "No audio support.")
        } else {
          if ("string" === typeof this._src) {
            this._src = [this._src]
          }
          for (var t = 0; t < this._src.length; t++) {
            var n
            var r
            if (this._format && this._format[t]) {
              n = this._format[t]
            } else {
              if ("string" !== typeof (r = this._src[t])) {
                this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.")
                continue
              }
              if (!(n = /^data:audio\/([^;,]+);/i.exec(r))) {
                n = /\.([^.]+)$/.exec(r.split("?", 1)[0])
              }
              if (n) {
                n = n[1].toLowerCase()
              }
            }
            if (!n) {
              console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.")
            }
            if (n && o.codecs(n)) {
              e = this._src[t]
              break
            }
          }
          if (e) {
            this._src = e
            this._state = "loading"
            if ("https:" === window.location.protocol && "http:" === e.slice(0, 5)) {
              this._html5 = true
              this._webAudio = false
            }
            new s(this)
            if (this._webAudio) {
              u(this)
            }
            return this
          }
          this._emit("loaderror", null, "No codec support for selected audio sources.")
        }
      },
      play: function (e, t) {
        var n = this
        var r = null
        if ("number" === typeof e) {
          r = e
          e = null
        } else {
          if ("string" === typeof e && "loaded" === n._state && !n._sprite[e]) {
            return null
          }
          if ("undefined" === typeof e && (e = "__default", !n._playLock)) {
            for (var i = 0, a = 0; a < n._sounds.length; a++) {
              if (n._sounds[a]._paused && !n._sounds[a]._ended) {
                i++
                r = n._sounds[a]._id
              }
            }
            if (1 === i) {
              e = null
            } else {
              r = null
            }
          }
        }
        var s = r ? n._soundById(r) : n._inactiveSound()
        if (!s) {
          return null
        }
        if (r && !e) {
          e = s._sprite || "__default"
        }
        if ("loaded" !== n._state) {
          s._sprite = e
          s._ended = false
          var s$_id = s._id
          n._queue.push({
            event: "play",
            action: function () {
              n.play(s$_id)
            }
          })
          return s$_id
        }
        if (r && !s._paused) {
          if (!t) {
            n._loadQueue("play")
          }
          return s._id
        }
        if (n._webAudio) {
          o._autoResume()
        }
        var u = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3)
        var l = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - u)
        var f = 1e3 * l / Math.abs(s._rate)
        var d = n._sprite[e][0] / 1e3
        var h = (n._sprite[e][0] + n._sprite[e][1]) / 1e3
        s._sprite = e
        s._ended = false
        var p = function () {
          s._paused = false
          s._seek = u
          s._start = d
          s._stop = h
          s._loop = !(!s._loop && !n._sprite[e][2])
        }
        if (!(u >= h)) {
          var s$_node = s._node
          if (n._webAudio) {
            var A = function () {
              n._playLock = false
              p()
              n._refreshBuffer(s)
              var e = s._muted || n._muted ? 0 : s._volume
              s$_node.gain.setValueAtTime(e, o.ctx.currentTime)
              s._playStart = o.ctx.currentTime
              if ("undefined" === typeof s$_node.bufferSource.start) {
                if (s._loop) {
                  s$_node.bufferSource.noteGrainOn(0, u, 86400)
                } else {
                  s$_node.bufferSource.noteGrainOn(0, u, l)
                }
              } else {
                if (s._loop) {
                  s$_node.bufferSource.start(0, u, 86400)
                } else {
                  s$_node.bufferSource.start(0, u, l)
                }
              }
              if (f !== 1 / 0) {
                n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), f)
              }
              if (!t) {
                setTimeout(function () {
                  n._emit("play", s._id)
                  n._loadQueue()
                }, 0)
              }
            }
            if ("running" === o.state && "interrupted" !== o.ctx.state) {
              A()
            } else {
              n._playLock = true
              n.once("resume", A)
              n._clearTimer(s._id)
            }
          } else {
            var g = function () {
              s$_node.currentTime = u
              s$_node.muted = s._muted || n._muted || o._muted || s$_node.muted
              s$_node.volume = s._volume * o.volume()
              s$_node.playbackRate = s._rate
              try {
                var r = s$_node.play()
                if (r && "undefined" !== typeof Promise && (r instanceof Promise || "function" === typeof r.then)) {
                  n._playLock = true
                  p()
                  r.then(function () {
                    n._playLock = false
                    s$_node._unlocked = true
                    if (!t) {
                      n._emit("play", s._id)
                      n._loadQueue()
                    }
                  }).catch(function () {
                    n._playLock = false
                    n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.")
                    s._ended = true
                    s._paused = true
                  })
                } else {
                  if (!t) {
                    n._playLock = false
                    p()
                    n._emit("play", s._id)
                    n._loadQueue()
                  }
                }
                s$_node.playbackRate = s._rate
                if (s$_node.paused) {
                  return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.")
                }
                if ("__default" !== e || s._loop) {
                  n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), f)
                } else {
                  n._endTimers[s._id] = function () {
                    n._ended(s)
                    s$_node.removeEventListener("ended", n._endTimers[s._id], false)
                  }
                  s$_node.addEventListener("ended", n._endTimers[s._id], false)
                }
              } catch (i) {
                n._emit("playerror", s._id, i)
              }
            }
            if ("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === s$_node.src) {
              s$_node.src = n._src
              s$_node.load()
            }
            var v = window && window.ejecta || !s$_node.readyState && o._navigator.isCocoonJS
            if (s$_node.readyState >= 3 || v) {
              g()
            } else {
              n._playLock = true
              s$_node.addEventListener(o._canPlayEvent, function e() {
                g()
                s$_node.removeEventListener(o._canPlayEvent, e, false)
              }, false)
              n._clearTimer(s._id)
            }
          }
          return s._id
        }
        n._ended(s)
      },
      pause: function (e) {
        var t = this
        if ("loaded" !== t._state || t._playLock) {
          t._queue.push({
            event: "pause",
            action: function () {
              t.pause(e)
            }
          })
          return t
        }
        for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
          t._clearTimer(n[r])
          var i = t._soundById(n[r])
          if (i && !i._paused && (i._seek = t.seek(n[r]), i._rateSeek = 0, i._paused = true, t._stopFade(n[r]), i._node)) {
            if (t._webAudio) {
              if (!i._node.bufferSource) {
                continue
              }
              if ("undefined" === typeof i._node.bufferSource.stop) {
                i._node.bufferSource.noteOff(0)
              } else {
                i._node.bufferSource.stop(0)
              }
              t._cleanBuffer(i._node)
            } else if (!(isNaN(i._node.duration) && i._node.duration !== 1 / 0)) {
              i._node.pause()
            }
          }
          if (!arguments[1]) {
            t._emit("pause", i ? i._id : null)
          }
        }
        return t
      },
      stop: function (e, t) {
        var n = this
        if ("loaded" !== n._state || n._playLock) {
          n._queue.push({
            event: "stop",
            action: function () {
              n.stop(e)
            }
          })
          return n
        }
        for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) {
          n._clearTimer(r[i])
          var o = n._soundById(r[i])
          if (o) {
            o._seek = o._start || 0
            o._rateSeek = 0
            o._paused = true
            o._ended = true
            n._stopFade(r[i])
            if (o._node) {
              if (n._webAudio) {
                if (o._node.bufferSource) {
                  if ("undefined" === typeof o._node.bufferSource.stop) {
                    o._node.bufferSource.noteOff(0)
                  } else {
                    o._node.bufferSource.stop(0)
                  }
                  n._cleanBuffer(o._node)
                }
              } else {
                if (!(isNaN(o._node.duration) && o._node.duration !== 1 / 0)) {
                  o._node.currentTime = o._start || 0
                  o._node.pause()
                  if (o._node.duration === 1 / 0) {
                    n._clearSound(o._node)
                  }
                }
              }
            }
            if (!t) {
              n._emit("stop", o._id)
            }
          }
        }
        return n
      },
      mute: function (e, t) {
        var n = this
        if ("loaded" !== n._state || n._playLock) {
          n._queue.push({
            event: "mute",
            action: function () {
              n.mute(e, t)
            }
          })
          return n
        }
        if ("undefined" === typeof t) {
          if ("boolean" !== typeof e) {
            return n._muted
          }
          n._muted = e
        }
        for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
          var a = n._soundById(r[i])
          if (a) {
            a._muted = e
            if (a._interval) {
              n._stopFade(a._id)
            }
            if (n._webAudio && a._node) {
              a._node.gain.setValueAtTime(e ? 0 : a._volume, o.ctx.currentTime)
            } else {
              if (a._node) {
                a._node.muted = !!o._muted || e
              }
            }
            n._emit("mute", a._id)
          }
        }
        return n
      },
      volume: function () {
        var e
        var t
        var n
        var r = this
        var i = arguments
        if (0 === i.length) {
          return r._volume
        }
        if (1 === i.length || 2 === i.length && "undefined" === typeof i[1]) {
          var a = r._getSoundIds()
          var s = a.indexOf(i[0])
          if (s >= 0) {
            t = parseInt(i[0], 10)
          } else {
            e = parseFloat(i[0])
          }
        } else if (i.length >= 2) {
          e = parseFloat(i[0])
          t = parseInt(i[1], 10)
        }
        if (!("undefined" !== typeof e && e >= 0 && e <= 1)) {
          return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0
        }
        if ("loaded" !== r._state || r._playLock) {
          r._queue.push({
            event: "volume",
            action: function () {
              r.volume.apply(r, i)
            }
          })
          return r
        }
        if ("undefined" === typeof t) {
          r._volume = e
        }
        t = r._getSoundIds(t)
        for (var c = 0; c < t.length; c++) {
          if (n = r._soundById(t[c])) {
            n._volume = e
            if (!i[2]) {
              r._stopFade(t[c])
            }
            if (r._webAudio && n._node && !n._muted) {
              n._node.gain.setValueAtTime(e, o.ctx.currentTime)
            } else {
              if (n._node && !n._muted) {
                n._node.volume = e * o.volume()
              }
            }
            r._emit("volume", n._id)
          }
        }
        return r
      },
      fade: function (e, t, n, r) {
        var i = this
        if ("loaded" !== i._state || i._playLock) {
          i._queue.push({
            event: "fade",
            action: function () {
              i.fade(e, t, n, r)
            }
          })
          return i
        }
        e = Math.min(Math.max(0, parseFloat(e)), 1)
        t = Math.min(Math.max(0, parseFloat(t)), 1)
        n = parseFloat(n)
        i.volume(e, r)
        for (var a = i._getSoundIds(r), s = 0; s < a.length; s++) {
          var c = i._soundById(a[s])
          if (c) {
            if (!r) {
              i._stopFade(a[s])
            }
            if (i._webAudio && !c._muted) {
              var o$ctx$currentTime = o.ctx.currentTime
              var l = o$ctx$currentTime + n / 1e3
              c._volume = e
              c._node.gain.setValueAtTime(e, o$ctx$currentTime)
              c._node.gain.linearRampToValueAtTime(t, l)
            }
            i._startFadeInterval(c, e, t, n, a[s], "undefined" === typeof r)
          }
        }
        return i
      },
      _startFadeInterval: function (e, t, n, r, i, o) {
        var a = this
        var s = t
        var c = n - t
        var u = Math.abs(c / .01)
        var l = Math.max(4, u > 0 ? r / u : r)
        var f = Date.now()
        e._fadeTo = n
        e._interval = setInterval(function () {
          var i = (Date.now() - f) / r
          f = Date.now()
          s += c * i
          s = Math.round(100 * s) / 100
          s = c < 0 ? Math.max(n, s) : Math.min(n, s)
          if (a._webAudio) {
            e._volume = s
          } else {
            a.volume(s, e._id, true)
          }
          if (o) {
            a._volume = s
          }
          if (n < t && s <= n || n > t && s >= n) {
            clearInterval(e._interval)
            e._interval = null
            e._fadeTo = null
            a.volume(n, e._id)
            a._emit("fade", e._id)
          }
        }, l)
      },
      _stopFade: function (e) {
        var t = this._soundById(e)
        if (t && t._interval) {
          if (this._webAudio) {
            t._node.gain.cancelScheduledValues(o.ctx.currentTime)
          }
          clearInterval(t._interval)
          t._interval = null
          this.volume(t._fadeTo, e)
          t._fadeTo = null
          this._emit("fade", e)
        }
        return this
      },
      loop: function () {
        var e
        var t
        var n
        var r = this
        var i = arguments
        if (0 === i.length) {
          return r._loop
        }
        if (1 === i.length) {
          if ("boolean" !== typeof i[0]) {
            return !!(n = r._soundById(parseInt(i[0], 10))) && n._loop
          }
          e = i[0]
          r._loop = e
        } else if (2 === i.length) {
          e = i[0]
          t = parseInt(i[1], 10)
        }
        for (var o = r._getSoundIds(t), a = 0; a < o.length; a++) {
          if (n = r._soundById(o[a])) {
            n._loop = e
            if (r._webAudio && n._node && n._node.bufferSource) {
              n._node.bufferSource.loop = e
              if (e) {
                n._node.bufferSource.loopStart = n._start || 0
                n._node.bufferSource.loopEnd = n._stop
              }
            }
          }
        }
        return r
      },
      rate: function () {
        var e
        var t
        var n
        var r = this
        var i = arguments
        if (0 === i.length) {
          t = r._sounds[0]._id
        } else if (1 === i.length) {
          var a = r._getSoundIds()
          var s = a.indexOf(i[0])
          if (s >= 0) {
            t = parseInt(i[0], 10)
          } else {
            e = parseFloat(i[0])
          }
        } else if (2 === i.length) {
          e = parseFloat(i[0])
          t = parseInt(i[1], 10)
        }
        if ("number" !== typeof e) {
          return (n = r._soundById(t)) ? n._rate : r._rate
        }
        if ("loaded" !== r._state || r._playLock) {
          r._queue.push({
            event: "rate",
            action: function () {
              r.rate.apply(r, i)
            }
          })
          return r
        }
        if ("undefined" === typeof t) {
          r._rate = e
        }
        t = r._getSoundIds(t)
        for (var c = 0; c < t.length; c++) {
          if (n = r._soundById(t[c])) {
            if (r.playing(t[c])) {
              n._rateSeek = r.seek(t[c])
              n._playStart = r._webAudio ? o.ctx.currentTime : n._playStart
            }
            n._rate = e
            if (r._webAudio && n._node && n._node.bufferSource) {
              n._node.bufferSource.playbackRate.setValueAtTime(e, o.ctx.currentTime)
            } else {
              if (n._node) {
                n._node.playbackRate = e
              }
            }
            var u = r.seek(t[c])
            var l = (r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1e3 - u
            var f = 1e3 * l / Math.abs(n._rate)
            if (!(!r._endTimers[t[c]] && n._paused)) {
              r._clearTimer(t[c])
              r._endTimers[t[c]] = setTimeout(r._ended.bind(r, n), f)
            }
            r._emit("rate", n._id)
          }
        }
        return r
      },
      seek: function () {
        var e
        var t
        var n = this
        var r = arguments
        if (0 === r.length) {
          t = n._sounds[0]._id
        } else if (1 === r.length) {
          var i = n._getSoundIds()
          var a = i.indexOf(r[0])
          if (a >= 0) {
            t = parseInt(r[0], 10)
          } else {
            if (n._sounds.length) {
              t = n._sounds[0]._id
              e = parseFloat(r[0])
            }
          }
        } else if (2 === r.length) {
          e = parseFloat(r[0])
          t = parseInt(r[1], 10)
        }
        if ("undefined" === typeof t) {
          return n
        }
        if ("number" === typeof e && ("loaded" !== n._state || n._playLock)) {
          n._queue.push({
            event: "seek",
            action: function () {
              n.seek.apply(n, r)
            }
          })
          return n
        }
        var s = n._soundById(t)
        if (s) {
          if (!("number" === typeof e && e >= 0)) {
            if (n._webAudio) {
              var c = n.playing(t) ? o.ctx.currentTime - s._playStart : 0
              var u = s._rateSeek ? s._rateSeek - s._seek : 0
              return s._seek + (u + c * Math.abs(s._rate))
            }
            return s._node.currentTime
          }
          var l = n.playing(t)
          if (l) {
            n.pause(t, true)
          }
          s._seek = e
          s._ended = false
          n._clearTimer(t)
          if (!(n._webAudio || !s._node || isNaN(s._node.duration))) {
            s._node.currentTime = e
          }
          var f = function () {
            n._emit("seek", t)
            if (l) {
              n.play(t, true)
            }
          }
          if (l && !n._webAudio) {
            var d = function e() {
              if (n._playLock) {
                setTimeout(e, 0)
              } else {
                f()
              }
            }
            setTimeout(d, 0)
          } else {
            f()
          }
        }
        return n
      },
      playing: function (e) {
        if ("number" === typeof e) {
          var t = this._soundById(e)
          return !!t && !t._paused
        }
        for (var n = 0; n < this._sounds.length; n++) {
          if (!this._sounds[n]._paused) {
            return true
          }
        }
        return false
      },
      duration: function (e) {
        var this$_duration = this._duration
        var n = this._soundById(e)
        if (n) {
          this$_duration = this._sprite[n._sprite][1] / 1e3
        }
        return this$_duration
      },
      state: function () {
        return this._state
      },
      unload: function () {
        for (var e = this, e$_sounds = e._sounds, n = 0; n < e$_sounds.length; n++) {
          if (!e$_sounds[n]._paused) {
            e.stop(e$_sounds[n]._id)
          }
          if (!e._webAudio) {
            e._clearSound(e$_sounds[n]._node)
            e$_sounds[n]._node.removeEventListener("error", e$_sounds[n]._errorFn, false)
            e$_sounds[n]._node.removeEventListener(o._canPlayEvent, e$_sounds[n]._loadFn, false)
            e$_sounds[n]._node.removeEventListener("ended", e$_sounds[n]._endFn, false)
            o._releaseHtml5Audio(e$_sounds[n]._node)
          }
          delete e$_sounds[n]._node
          e._clearTimer(e$_sounds[n]._id)
        }
        var r = o._howls.indexOf(e)
        if (r >= 0) {
          o._howls.splice(r, 1)
        }
        var i = true
        for (n = 0; n < o._howls.length; n++) {
          if (o._howls[n]._src === e._src || e._src.indexOf(o._howls[n]._src) >= 0) {
            i = false
            break
          }
        }
        if (c && i) {
          delete c[e._src]
        }
        o.noAudio = false
        e._state = "unloaded"
        e._sounds = []
        e = null
        return null
      },
      on: function (e, t, n, r) {
        var i = this["_on" + e]
        if ("function" === typeof t) {
          i.push(r ? {
            id: n,
            fn: t,
            once: r
          } : {
            id: n,
            fn: t
          })
        }
        return this
      },
      off: function (e, t, n) {
        var r = this["_on" + e]
        var i = 0
        if ("number" === typeof t) {
          n = t
          t = null
        }
        if (t || n) {
          for (i = 0; i < r.length; i++) {
            var o = n === r[i].id
            if (t === r[i].fn && o || !t && o) {
              r.splice(i, 1)
              break
            }
          }
        } else if (e) {
          this["_on" + e] = []
        } else {
          var a = Object.keys(this)
          for (i = 0; i < a.length; i++) {
            if (0 === a[i].indexOf("_on") && Array.isArray(this[a[i]])) {
              this[a[i]] = []
            }
          }
        }
        return this
      },
      once: function (e, t, n) {
        this.on(e, t, n, 1)
        return this
      },
      _emit: function (e, t, n) {
        for (var r = this["_on" + e], i = r.length - 1; i >= 0; i--) {
          if (!(r[i].id && r[i].id !== t && "load" !== e)) {
            setTimeout(function (e) {
              e.call(this, t, n)
            }.bind(this, r[i].fn), 0)
            if (r[i].once) {
              this.off(e, r[i].fn, r[i].id)
            }
          }
        }
        this._loadQueue(e)
        return this
      },
      _loadQueue: function (e) {
        if (this._queue.length > 0) {
          var t = this._queue[0]
          if (t.event === e) {
            this._queue.shift()
            this._loadQueue()
          }
          if (!e) {
            t.action()
          }
        }
        return this
      },
      _ended: function (e) {
        var e$_sprite = e._sprite
        if (!this._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) {
          setTimeout(this._ended.bind(this, e), 100)
          return this
        }
        var n = !(!e._loop && !this._sprite[e$_sprite][2])
        this._emit("end", e._id)
        if (!this._webAudio && n) {
          this.stop(e._id, true).play(e._id)
        }
        if (this._webAudio && n) {
          this._emit("play", e._id)
          e._seek = e._start || 0
          e._rateSeek = 0
          e._playStart = o.ctx.currentTime
          var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate)
          this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), r)
        }
        if (this._webAudio && !n) {
          e._paused = true
          e._ended = true
          e._seek = e._start || 0
          e._rateSeek = 0
          this._clearTimer(e._id)
          this._cleanBuffer(e._node)
          o._autoSuspend()
        }
        if (!(this._webAudio || n)) {
          this.stop(e._id, true)
        }
        return this
      },
      _clearTimer: function (e) {
        if (this._endTimers[e]) {
          if ("function" !== typeof this._endTimers[e]) {
            clearTimeout(this._endTimers[e])
          } else {
            var t = this._soundById(e)
            if (t && t._node) {
              t._node.removeEventListener("ended", this._endTimers[e], false)
            }
          }
          delete this._endTimers[e]
        }
        return this
      },
      _soundById: function (e) {
        for (var t = 0; t < this._sounds.length; t++) {
          if (e === this._sounds[t]._id) {
            return this._sounds[t]
          }
        }
        return null
      },
      _inactiveSound: function () {
        this._drain()
        for (var e = 0; e < this._sounds.length; e++) {
          if (this._sounds[e]._ended) {
            return this._sounds[e].reset()
          }
        }
        return new s(this)
      },
      _drain: function () {
        var this$_pool = this._pool
        var t = 0
        var n = 0
        if (!(this._sounds.length < this$_pool)) {
          for (n = 0; n < this._sounds.length; n++) {
            if (this._sounds[n]._ended) {
              t++
            }
          }
          for (n = this._sounds.length - 1; n >= 0; n--) {
            if (t <= this$_pool) {
              return
            }
            if (this._sounds[n]._ended) {
              if (this._webAudio && this._sounds[n]._node) {
                this._sounds[n]._node.disconnect(0)
              }
              this._sounds.splice(n, 1)
              t--
            }
          }
        }
      },
      _getSoundIds: function (e) {
        if ("undefined" === typeof e) {
          for (var t = [], n = 0; n < this._sounds.length; n++) {
            t.push(this._sounds[n]._id)
          }
          return t
        }
        return [e]
      },
      _refreshBuffer: function (e) {
        e._node.bufferSource = o.ctx.createBufferSource()
        e._node.bufferSource.buffer = c[this._src]
        if (e._panner) {
          e._node.bufferSource.connect(e._panner)
        } else {
          e._node.bufferSource.connect(e._node)
        }
        e._node.bufferSource.loop = e._loop
        if (e._loop) {
          e._node.bufferSource.loopStart = e._start || 0
          e._node.bufferSource.loopEnd = e._stop || 0
        }
        e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime)
        return this
      },
      _cleanBuffer: function (e) {
        var t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0
        if (o._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) {
          try {
            e.bufferSource.buffer = o._scratchBuffer
          } catch (n) {}
        }
        e.bufferSource = null
        return this
      },
      _clearSound: function (e) {
        if (!/MSIE |Trident\//.test(o._navigator && o._navigator.userAgent)) {
          e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"
        }
      }
    }
    var s = function (e) {
      this._parent = e
      this.init()
    }
    s.prototype = {
      init: function () {
        var this$_parent = this._parent
        this._muted = this$_parent._muted
        this._loop = this$_parent._loop
        this._volume = this$_parent._volume
        this._rate = this$_parent._rate
        this._seek = 0
        this._paused = true
        this._ended = true
        this._sprite = "__default"
        this._id = ++o._counter
        this$_parent._sounds.push(this)
        this.create()
        return this
      },
      create: function () {
        var this$_parent = this._parent
        var t = o._muted || this._muted || this._parent._muted ? 0 : this._volume
        if (this$_parent._webAudio) {
          this._node = "undefined" === typeof o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain()
          this._node.gain.setValueAtTime(t, o.ctx.currentTime)
          this._node.paused = true
          this._node.connect(o.masterGain)
        } else {
          if (!o.noAudio) {
            this._node = o._obtainHtml5Audio()
            this._errorFn = this._errorListener.bind(this)
            this._node.addEventListener("error", this._errorFn, false)
            this._loadFn = this._loadListener.bind(this)
            this._node.addEventListener(o._canPlayEvent, this._loadFn, false)
            this._endFn = this._endListener.bind(this)
            this._node.addEventListener("ended", this._endFn, false)
            this._node.src = this$_parent._src
            this._node.preload = true === this$_parent._preload ? "auto" : this$_parent._preload
            this._node.volume = t * o.volume()
            this._node.load()
          }
        }
        return this
      },
      reset: function () {
        var this$_parent = this._parent
        this._muted = this$_parent._muted
        this._loop = this$_parent._loop
        this._volume = this$_parent._volume
        this._rate = this$_parent._rate
        this._seek = 0
        this._rateSeek = 0
        this._paused = true
        this._ended = true
        this._sprite = "__default"
        this._id = ++o._counter
        return this
      },
      _errorListener: function () {
        this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0)
        this._node.removeEventListener("error", this._errorFn, false)
      },
      _loadListener: function () {
        var this$_parent = this._parent
        this$_parent._duration = Math.ceil(10 * this._node.duration) / 10
        if (0 === Object.keys(this$_parent._sprite).length) {
          this$_parent._sprite = {
            __default: [0, 1e3 * this$_parent._duration]
          }
        }
        if ("loaded" !== this$_parent._state) {
          this$_parent._state = "loaded"
          this$_parent._emit("load")
          this$_parent._loadQueue()
        }
        this._node.removeEventListener(o._canPlayEvent, this._loadFn, false)
      },
      _endListener: function () {
        var this$_parent = this._parent
        if (this$_parent._duration === 1 / 0) {
          this$_parent._duration = Math.ceil(10 * this._node.duration) / 10
          if (this$_parent._sprite.__default[1] === 1 / 0) {
            this$_parent._sprite.__default[1] = 1e3 * this$_parent._duration
          }
          this$_parent._ended(this)
        }
        this._node.removeEventListener("ended", this._endFn, false)
      }
    }
    var c = {}
    var u = function (e) {
      var e$_src = e._src
      if (c[e$_src]) {
        e._duration = c[e$_src].duration
        return void d(e)
      }
      if (/^data:[^;]+;base64,/.test(e$_src)) {
        for (var n = atob(e$_src.split(",")[1]), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) {
          r[i] = n.charCodeAt(i)
        }
        f(r.buffer, e)
      } else {
        var o = new XMLHttpRequest()
        o.open(e._xhr.method, e$_src, true)
        o.withCredentials = e._xhr.withCredentials
        o.responseType = "arraybuffer"
        if (e._xhr.headers) {
          Object.keys(e._xhr.headers).forEach(function (t) {
            o.setRequestHeader(t, e._xhr.headers[t])
          })
        }
        o.onload = function () {
          var t = (o.status + "")[0]
          if ("0" === t || "2" === t || "3" === t) {
            f(o.response, e)
          } else {
            e._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".")
          }
        }
        o.onerror = function () {
          if (e._webAudio) {
            e._html5 = true
            e._webAudio = false
            e._sounds = []
            delete c[e$_src]
            e.load()
          }
        }
        l(o)
      }
    }
    var l = function (e) {
      try {
        e.send()
      } catch (t) {
        e.onerror()
      }
    }
    var f = function (e, t) {
      var n = function () {
        t._emit("loaderror", null, "Decoding audio data failed.")
      }
      var r = function (e) {
        if (e && t._sounds.length > 0) {
          c[t._src] = e
          d(t, e)
        } else {
          n()
        }
      }
      if ("undefined" !== typeof Promise && 1 === o.ctx.decodeAudioData.length) {
        o.ctx.decodeAudioData(e).then(r).catch(n)
      } else {
        o.ctx.decodeAudioData(e, r, n)
      }
    }
    var d = function (e, t) {
      if (t && !e._duration) {
        e._duration = t.duration
      }
      if (0 === Object.keys(e._sprite).length) {
        e._sprite = {
          __default: [0, 1e3 * e._duration]
        }
      }
      if ("loaded" !== e._state) {
        e._state = "loaded"
        e._emit("load")
        e._loadQueue()
      }
    }
    var h = function () {
      if (o.usingWebAudio) {
        try {
          if ("undefined" !== typeof AudioContext) {
            o.ctx = new AudioContext()
          } else {
            if ("undefined" !== typeof webkitAudioContext) {
              o.ctx = new webkitAudioContext()
            } else {
              o.usingWebAudio = false
            }
          }
        } catch (i) {
          o.usingWebAudio = false
        }
        if (!o.ctx) {
          o.usingWebAudio = false
        }
        var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform)
        var t = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
        var n = t ? parseInt(t[1], 10) : null
        if (e && n && n < 9) {
          var r = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase())
          if (o._navigator && !r) {
            o.usingWebAudio = false
          }
        }
        if (o.usingWebAudio) {
          o.masterGain = "undefined" === typeof o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain()
          o.masterGain.gain.setValueAtTime(o._muted ? 0 : o._volume, o.ctx.currentTime)
          o.masterGain.connect(o.ctx.destination)
        }
        o._setup()
      }
    }
    if (!(undefined === (r = function () {
      return {
        Howler: o,
        Howl: a
      }
    }.apply(exports, [])))) {
      module.exports = r
    }
    exports.Howler = o
    exports.Howl = a
    if ("undefined" !== typeof n) {
      n.HowlerGlobal = i
      n.Howler = o
      n.Howl = a
      n.Sound = s
    } else {
      if ("undefined" !== typeof window) {
        window.HowlerGlobal = i
        window.Howler = o
        window.Howl = a
        window.Sound = s
      }
    }
  }();
  (function () {
    "use strict"

    var /* [auto-meaningful-name] */howl$prototype$init
    HowlerGlobal.prototype._pos = [0, 0, 0]
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]
    HowlerGlobal.prototype.stereo = function (e) {
      if (!this.ctx || !this.ctx.listener) {
        return this
      }
      for (var t = this._howls.length - 1; t >= 0; t--) {
        this._howls[t].stereo(e)
      }
      return this
    }
    HowlerGlobal.prototype.pos = function (e, t, n) {
      return this.ctx && this.ctx.listener ? (t = "number" !== typeof t ? this._pos[1] : t, n = "number" !== typeof n ? this._pos[2] : n, "number" !== typeof e ? this._pos : (this._pos = [e, t, n], "undefined" !== typeof this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, .1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, .1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, .1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]), this)) : this
    }
    HowlerGlobal.prototype.orientation = function (e, t, n, r, i, o) {
      if (!this.ctx || !this.ctx.listener) {
        return this
      }
      var this$_orientation = this._orientation
      t = "number" !== typeof t ? this$_orientation[1] : t
      n = "number" !== typeof n ? this$_orientation[2] : n
      r = "number" !== typeof r ? this$_orientation[3] : r
      i = "number" !== typeof i ? this$_orientation[4] : i
      o = "number" !== typeof o ? this$_orientation[5] : o
      return "number" !== typeof e ? this$_orientation : (this._orientation = [e, t, n, r, i, o], "undefined" !== typeof this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), this.ctx.listener.upX.setTargetAtTime(r, Howler.ctx.currentTime, .1), this.ctx.listener.upY.setTargetAtTime(i, Howler.ctx.currentTime, .1), this.ctx.listener.upZ.setTargetAtTime(o, Howler.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(e, t, n, r, i, o), this)
    }
    Howl.prototype.init = (howl$prototype$init = Howl.prototype.init, function (t) {
      this._orientation = t.orientation || [1, 0, 0]
      this._stereo = t.stereo || null
      this._pos = t.pos || null
      this._pannerAttr = {
        coneInnerAngle: "undefined" !== typeof t.coneInnerAngle ? t.coneInnerAngle : 360,
        coneOuterAngle: "undefined" !== typeof t.coneOuterAngle ? t.coneOuterAngle : 360,
        coneOuterGain: "undefined" !== typeof t.coneOuterGain ? t.coneOuterGain : 0,
        distanceModel: "undefined" !== typeof t.distanceModel ? t.distanceModel : "inverse",
        maxDistance: "undefined" !== typeof t.maxDistance ? t.maxDistance : 1e4,
        panningModel: "undefined" !== typeof t.panningModel ? t.panningModel : "HRTF",
        refDistance: "undefined" !== typeof t.refDistance ? t.refDistance : 1,
        rolloffFactor: "undefined" !== typeof t.rolloffFactor ? t.rolloffFactor : 1
      }
      this._onstereo = t.onstereo ? [{
        fn: t.onstereo
      }] : []
      this._onpos = t.onpos ? [{
        fn: t.onpos
      }] : []
      this._onorientation = t.onorientation ? [{
        fn: t.onorientation
      }] : []
      return howl$prototype$init.call(this, t)
    })
    Howl.prototype.stereo = function (e, n) {
      var r = this
      if (!r._webAudio) {
        return r
      }
      if ("loaded" !== r._state) {
        r._queue.push({
          event: "stereo",
          action: function () {
            r.stereo(e, n)
          }
        })
        return r
      }
      var i = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo"
      if ("undefined" === typeof n) {
        if ("number" !== typeof e) {
          return r._stereo
        }
        r._stereo = e
        r._pos = [e, 0, 0]
      }
      for (var o = r._getSoundIds(n), a = 0; a < o.length; a++) {
        var s = r._soundById(o[a])
        if (s) {
          if ("number" !== typeof e) {
            return s._stereo
          }
          s._stereo = e
          s._pos = [e, 0, 0]
          if (s._node) {
            s._pannerAttr.panningModel = "equalpower"
            if (!(s._panner && s._panner.pan)) {
              t(s, i)
            }
            if ("spatial" === i) {
              if ("undefined" !== typeof s._panner.positionX) {
                s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime)
                s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime)
                s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)
              } else {
                s._panner.setPosition(e, 0, 0)
              }
            } else {
              s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)
            }
          }
          r._emit("stereo", s._id)
        }
      }
      return r
    }
    Howl.prototype.pos = function (e, n, r, i) {
      var o = this
      if (!o._webAudio) {
        return o
      }
      if ("loaded" !== o._state) {
        o._queue.push({
          event: "pos",
          action: function () {
            o.pos(e, n, r, i)
          }
        })
        return o
      }
      n = "number" !== typeof n ? 0 : n
      r = "number" !== typeof r ? -.5 : r
      if ("undefined" === typeof i) {
        if ("number" !== typeof e) {
          return o._pos
        }
        o._pos = [e, n, r]
      }
      for (var a = o._getSoundIds(i), s = 0; s < a.length; s++) {
        var c = o._soundById(a[s])
        if (c) {
          if ("number" !== typeof e) {
            return c._pos
          }
          c._pos = [e, n, r]
          if (c._node) {
            if (!(c._panner && !c._panner.pan)) {
              t(c, "spatial")
            }
            if ("undefined" !== typeof c._panner.positionX) {
              c._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime)
              c._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime)
              c._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)
            } else {
              c._panner.setPosition(e, n, r)
            }
          }
          o._emit("pos", c._id)
        }
      }
      return o
    }
    Howl.prototype.orientation = function (e, n, r, i) {
      var o = this
      if (!o._webAudio) {
        return o
      }
      if ("loaded" !== o._state) {
        o._queue.push({
          event: "orientation",
          action: function () {
            o.orientation(e, n, r, i)
          }
        })
        return o
      }
      n = "number" !== typeof n ? o._orientation[1] : n
      r = "number" !== typeof r ? o._orientation[2] : r
      if ("undefined" === typeof i) {
        if ("number" !== typeof e) {
          return o._orientation
        }
        o._orientation = [e, n, r]
      }
      for (var a = o._getSoundIds(i), s = 0; s < a.length; s++) {
        var c = o._soundById(a[s])
        if (c) {
          if ("number" !== typeof e) {
            return c._orientation
          }
          c._orientation = [e, n, r]
          if (c._node) {
            if (!c._panner) {
              if (!c._pos) {
                c._pos = o._pos || [0, 0, -.5]
              }
              t(c, "spatial")
            }
            if ("undefined" !== typeof c._panner.orientationX) {
              c._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime)
              c._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime)
              c._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)
            } else {
              c._panner.setOrientation(e, n, r)
            }
          }
          o._emit("orientation", c._id)
        }
      }
      return o
    }
    Howl.prototype.pannerAttr = function () {
      var e
      var n
      var r
      var i = this
      var o = arguments
      if (!i._webAudio) {
        return i
      }
      if (0 === o.length) {
        return i._pannerAttr
      }
      if (1 === o.length) {
        if ("object" !== typeof o[0]) {
          return (r = i._soundById(parseInt(o[0], 10))) ? r._pannerAttr : i._pannerAttr
        }
        e = o[0]
        if ("undefined" === typeof n) {
          if (!e.pannerAttr) {
            e.pannerAttr = {
              coneInnerAngle: e.coneInnerAngle,
              coneOuterAngle: e.coneOuterAngle,
              coneOuterGain: e.coneOuterGain,
              distanceModel: e.distanceModel,
              maxDistance: e.maxDistance,
              refDistance: e.refDistance,
              rolloffFactor: e.rolloffFactor,
              panningModel: e.panningModel
            }
          }
          i._pannerAttr = {
            coneInnerAngle: "undefined" !== typeof e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : i._coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : i._coneOuterAngle,
            coneOuterGain: "undefined" !== typeof e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : i._coneOuterGain,
            distanceModel: "undefined" !== typeof e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : i._distanceModel,
            maxDistance: "undefined" !== typeof e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : i._maxDistance,
            refDistance: "undefined" !== typeof e.pannerAttr.refDistance ? e.pannerAttr.refDistance : i._refDistance,
            rolloffFactor: "undefined" !== typeof e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : i._rolloffFactor,
            panningModel: "undefined" !== typeof e.pannerAttr.panningModel ? e.pannerAttr.panningModel : i._panningModel
          }
        }
      } else if (2 === o.length) {
        e = o[0]
        n = parseInt(o[1], 10)
      }
      for (var a = i._getSoundIds(n), s = 0; s < a.length; s++) {
        if (r = i._soundById(a[s])) {
          var r$_pannerAttr = r._pannerAttr
          r$_pannerAttr = {
            coneInnerAngle: "undefined" !== typeof e.coneInnerAngle ? e.coneInnerAngle : r$_pannerAttr.coneInnerAngle,
            coneOuterAngle: "undefined" !== typeof e.coneOuterAngle ? e.coneOuterAngle : r$_pannerAttr.coneOuterAngle,
            coneOuterGain: "undefined" !== typeof e.coneOuterGain ? e.coneOuterGain : r$_pannerAttr.coneOuterGain,
            distanceModel: "undefined" !== typeof e.distanceModel ? e.distanceModel : r$_pannerAttr.distanceModel,
            maxDistance: "undefined" !== typeof e.maxDistance ? e.maxDistance : r$_pannerAttr.maxDistance,
            refDistance: "undefined" !== typeof e.refDistance ? e.refDistance : r$_pannerAttr.refDistance,
            rolloffFactor: "undefined" !== typeof e.rolloffFactor ? e.rolloffFactor : r$_pannerAttr.rolloffFactor,
            panningModel: "undefined" !== typeof e.panningModel ? e.panningModel : r$_pannerAttr.panningModel
          }
          var r$_panner = r._panner
          if (r$_panner) {
            r$_panner.coneInnerAngle = r$_pannerAttr.coneInnerAngle
            r$_panner.coneOuterAngle = r$_pannerAttr.coneOuterAngle
            r$_panner.coneOuterGain = r$_pannerAttr.coneOuterGain
            r$_panner.distanceModel = r$_pannerAttr.distanceModel
            r$_panner.maxDistance = r$_pannerAttr.maxDistance
            r$_panner.refDistance = r$_pannerAttr.refDistance
            r$_panner.rolloffFactor = r$_pannerAttr.rolloffFactor
            r$_panner.panningModel = r$_pannerAttr.panningModel
          } else {
            if (!r._pos) {
              r._pos = i._pos || [0, 0, -.5]
            }
            t(r, "spatial")
          }
        }
      }
      return i
    }
    Sound.prototype.init = function (e) {
      return function () {
        var this$_parent = this._parent
        this._orientation = this$_parent._orientation
        this._stereo = this$_parent._stereo
        this._pos = this$_parent._pos
        this._pannerAttr = this$_parent._pannerAttr
        e.call(this)
        if (this._stereo) {
          this$_parent.stereo(this._stereo)
        } else {
          if (this._pos) {
            this$_parent.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
          }
        }
      }
    }(Sound.prototype.init)
    Sound.prototype.reset = function (e) {
      return function () {
        var this$_parent = this._parent
        this._orientation = this$_parent._orientation
        this._stereo = this$_parent._stereo
        this._pos = this$_parent._pos
        this._pannerAttr = this$_parent._pannerAttr
        if (this._stereo) {
          this$_parent.stereo(this._stereo)
        } else {
          if (this._pos) {
            this$_parent.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
          } else {
            if (this._panner) {
              this._panner.disconnect(0)
              this._panner = undefined
              this$_parent._refreshBuffer(this)
            }
          }
        }
        return e.call(this)
      }
    }(Sound.prototype.reset)
    var t = function (e, t) {
      if ("spatial" === (t = t || "spatial")) {
        e._panner = Howler.ctx.createPanner()
        e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle
        e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle
        e._panner.coneOuterGain = e._pannerAttr.coneOuterGain
        e._panner.distanceModel = e._pannerAttr.distanceModel
        e._panner.maxDistance = e._pannerAttr.maxDistance
        e._panner.refDistance = e._pannerAttr.refDistance
        e._panner.rolloffFactor = e._pannerAttr.rolloffFactor
        e._panner.panningModel = e._pannerAttr.panningModel
        if ("undefined" !== typeof e._panner.positionX) {
          e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime)
          e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime)
          e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)
        } else {
          e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2])
        }
        if ("undefined" !== typeof e._panner.orientationX) {
          e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime)
          e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime)
          e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)
        } else {
          e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])
        }
      } else {
        e._panner = Howler.ctx.createStereoPanner()
        e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)
      }
      e._panner.connect(e._node)
      if (!e._paused) {
        e._parent.pause(e._id, true).play(e._id, true)
      }
    }
  })()
}).call(this, require("../710/251"))
