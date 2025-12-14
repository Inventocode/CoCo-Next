/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：691__part-2
 */

"use strict"

import { s } from "./index__part-1"
import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
import * as /* [auto-meaningful-name] */Hammerjs from "hammerjs"
import * as /* [auto-meaningful-name] */$_268_index from "./268/index"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_119 from "./119"
var l = function (e, t, n, r) {
  var i
  var /* [auto-meaningful-name] */arguments$length = arguments.length
  var a = arguments$length < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r
  if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) {
    a = Reflect.decorate(e, t, n, r)
  } else {
    for (var s = e.length - 1; s >= 0; s--) {
      if (i = e[s]) {
        a = (arguments$length < 3 ? i(a) : arguments$length > 3 ? i(t, n, a) : i(t, n)) || a
      }
    }
  }
  if (arguments$length > 3 && a) {
    Object.defineProperty(t, n, a)
  }
  return a
}
var f = function (e, t) {
  if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) {
    return Reflect.metadata(e, t)
  }
}
var d = function (e, t) {
  return function (n, r) {
    t(n, r, e)
  }
}
var h = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        o(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        o(t)
      }
    }
    function c(e) {
      var /* [auto-meaningful-name] */e$value
      if (e.done) {
        i(e.value)
      } else {
        (e$value = e.value, e$value instanceof n ? e$value : new n(function (e) {
          e(e$value)
        })).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
var p = function (e, t) {
  var n
  var r
  var i
  var o
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1]
      }
      return i[1]
    },
    trys: [],
    ops: []
  }
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this
    }
  }
  return o
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.")
        }
        for (; a;) {
          try {
            n = 1
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                a.label++
                return {
                  value: o[1],
                  done: false
                }
              case 5:
                a.label++
                r = o[1]
                o = [0]
                continue
              case 7:
                o = a.ops.pop()
                a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1]
                  i = o
                  break
                }
                if (i && a.label < i[2]) {
                  a.label = i[2]
                  a.ops.push(o)
                  break
                }
                if (i[2]) {
                  a.ops.pop()
                }
                a.trys.pop()
                continue
            }
            o = t.call(e, a)
          } catch (s) {
            o = [6, s]
            r = 0
          } finally {
            n = i = 0
          }
        }
        if (5 & o[0]) {
          throw o[1]
        }
        return {
          value: o[0] ? o[1] : undefined,
          done: true
        }
      }([o, s])
    }
  }
}
var _ = function () {
  function e(e) {
    var t = this
    this.mouse_down_time = 0
    this.cancel_multi_touch = false
    this.on_stage_swipe = function (e) {
      var /* [auto-meaningful-name] */t$get_app$stage = t.get_app().stage
      if (t$get_app$stage.name) {
        t.events.fire("stage:swipe", {
          target_id: t$get_app$stage.name,
          data: e
        })
      }
    }
    this.events = e
  }
  e.prototype.init = function (e) {
    var t = this
    if (this.app) {
      console.warn("Application cannot be reinitialized.")
    } else {
      this.app = new $_32_index.b(e.renderer)
      this.app.stage.name = e.id ? e.id : "stage"
      this.cancel_multi_touch = undefined !== e.cancel_multi_touch && e.cancel_multi_touch
      this.app.stage.pivot.set(-this.app.renderer.width / 2, -this.app.renderer.height / 2)
      this.app.stage.interactive = true
      this.app.stage.hitArea = new $_32_index.q(-this.app.renderer.width / 2, -this.app.renderer.height / 2, this.app.renderer.width, this.app.renderer.height)
      this.app.ticker.autoStart = false
      this.app.ticker.stop()
      this.scene_container = new $_32_index.f()
      this.scene_container.name = "scenes"
      this.scene_container.interactive = true
      this.app.stage.addChild(this.scene_container)
      new Hammerjs.Manager(this.app.view, {
        recognizers: [
          [
            Hammerjs.Swipe, {
              direction: Hammerjs.DIRECTION_ALL
            }
          ]
        ]
      }).on("swipe", this.on_stage_swipe)
      this.app.stage.addListener("mousedown", function (e) {
        return t.emit_mouse_event(e, "stage:mousedown")
      })
      this.app.stage.addListener("mousemove", function (e) {
        return t.emit_mouse_event(e, "stage:mousemove")
      })
      this.app.stage.addListener("mouseup", function (e) {
        return t.emit_mouse_event(e, "stage:mouseup")
      })
      this.app.stage.addListener("mouseupoutside", function (e) {
        return t.emit_mouse_event(e, "stage:mouseupoutside")
      })
      this.app.stage.addListener("touchstart", function (e) {
        return t.emit_mouse_event(e, "stage:touchstart")
      })
      this.app.stage.addListener("touchmove", function (e) {
        return t.emit_mouse_event(e, "stage:touchmove")
      })
      this.app.stage.addListener("touchend", function (e) {
        return t.emit_mouse_event(e, "stage:touchend")
      })
      this.app.stage.addListener("touchendoutside", function (e) {
        return t.emit_mouse_event(e, "stage:touchendoutside")
      })
      this.app.stage.addListener("rightclick", function (e) {
        return t.emit_mouse_event(e, "stage:rightclick")
      })
      if (e.development) {
        $_119.a.set_log_enabled(true)
      }
    }
  }
  e.prototype.get_app = function () {
    if (!this.app) {
      throw new Error("Application needs init before using.")
    }
    return this.app
  }
  e.prototype.get_app_view_size = function () {
    var e = this.get_app_view_resolution()
    var /* [auto-meaningful-name] */this$get_app$view = this.get_app().view
    var /* [auto-meaningful-name] */this$get_app$view$width = this$get_app$view.width
    var /* [auto-meaningful-name] */this$get_app$view$height = this$get_app$view.height
    return {
      width: this$get_app$view$width /= e,
      height: this$get_app$view$height /= e
    }
  }
  e.prototype.get_app_view_resolution = function () {
    return this.get_app().renderer.resolution
  }
  e.prototype.get_scene_container = function () {
    if (!this.scene_container) {
      throw new Error("Scene container needs init before using.")
    }
    return this.scene_container
  }
  e.prototype.render = function () {
    if (!this.get_app().ticker.started) {
      this.get_app().render()
    }
  }
  e.prototype.get_renderer_type = function () {
    return this.get_app().renderer.type
  }
  e.prototype.get_interaction_manager = function () {
    return this.get_app().renderer.plugins.interaction
  }
  e.prototype.get_extract_module = function () {
    return this.get_app().renderer.plugins.extract
  }
  e.prototype.screenshot = function (e) {
    return h(this, undefined, undefined, function () {
      var t
      var n
      var r
      var /* [auto-meaningful-name] */this$get_app$view
      var /* [auto-meaningful-name] */this$get_app$view$width
      var /* [auto-meaningful-name] */this$get_app$view$height
      var s
      var c
      var u
      var l
      var f
      return p(this, function (d) {
        t = e && undefined !== e.scale ? e.scale : .5
        n = e && e.type
        r = e && undefined !== e.quality ? e.quality : 1
        this$get_app$view = this.get_app().view
        this$get_app$view$width = this$get_app$view.width
        this$get_app$view$height = this$get_app$view.height
        s = document.createElement("canvas")
        c = s.getContext("2d")
        u = this$get_app$view$width * t
        l = this$get_app$view$height * t
        s.width = u
        s.height = l;
        (f = new Image()).src = this.get_app().view.toDataURL(n, r)
        return [
          2, new Promise(function (t, i) {
            f.onload = function () {
              if (c) {
                c.drawImage(f, 0, 0, u, l)
                if (e && e.handstand) {
                  c.clearRect(0, 0, u, l)
                  c.translate(u / 2, l / 2)
                  c.rotate(Math.PI)
                  c.translate(-u / 2, -l / 2)
                  c.scale(-1, 1)
                  c.drawImage(f, 0, 0, -u, l)
                }
                var i = s.toDataURL(n, r)
                t(i)
              }
            }
            f.onerror = function (e) {
              i(e)
            }
          })
        ]
      })
    })
  }
  e.prototype.get_screenshot = function (e) {
    return h(this, undefined, undefined, function () {
      var /* [auto-meaningful-name] */this$get_app$renderer
      var n = this
      return p(this, function (r) {
        this$get_app$renderer = this.get_app().renderer
        return [
          2, new Promise(function (r, i) {
            this$get_app$renderer.once("postrender", function () {
              n.screenshot(e).then(function (e) {
                return r(e)
              }).catch(function (e) {
                return i(e)
              })
            })
            this$get_app$renderer.render(n.get_app().stage)
          })
        ]
      })
    })
  }
  e.prototype.resize = function (e, t) {
    var n = this.get_app()
    var /* [auto-meaningful-name] */n$stage = n.stage
    var /* [auto-meaningful-name] */n$renderer = n.renderer
    n$stage.pivot.set(-e / 2, -t / 2)
    n$stage.hitArea = new $_32_index.q(-e / 2, -t / 2, e, t)
    n$renderer.resize(e, t)
    if (n$stage.name) {
      this.events.fire("stage:resize", {
        target_id: n$stage.name,
        data: {
          width: e,
          height: t
        }
      })
    }
  }
  e.prototype.destroy = function () {
    this.get_app().destroy(true, true)
    this.app = undefined
  }
  e.prototype.emit_mouse_event = function (e, t) {
    var /* [auto-meaningful-name] */this$get_app$stage = this.get_app().stage
    var r = e.data.getLocalPosition(this$get_app$stage)
    var i = r.x
    var o = r.y
    switch (t) {
      case "stage:mousedown":
      case "stage:touchstart":
        this.mouse_down_time = new Date().getTime()
        break
      case "stage:mouseup":
      case "stage:touchend":
        if (new Date().getTime() - this.mouse_down_time < 1e3 && this$get_app$stage.name) {
          this.events.fire("stage:click", {
            target_id: this$get_app$stage.name,
            data: {
              position: {
                x: i,
                y: -o
              }
            }
          })
        }
    }
    if (this$get_app$stage.name) {
      this.events.fire(t, {
        target_id: this$get_app$stage.name,
        data: {
          position: {
            x: i,
            y: -o
          }
        }
      })
    }
    if (this.cancel_multi_touch) {
      var /* [auto-meaningful-name] */e$data$originalEvent = e.data.originalEvent
      if (c.o(e$data$originalEvent) && e$data$originalEvent.touches.length > 1) {
        this.events.emit_break_event()
      }
    }
  }
  return e = l([$_268_index.injectable(), d(0, $_268_index.inject(s.Events)), f("design:paramtypes", [Object])], e)
}()
export { _ }
