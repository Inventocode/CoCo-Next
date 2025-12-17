/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：691__part-12
 */

"use strict"

import * as /* [auto-meaningful-name] */$_126 from "./126"
import * as /* [auto-meaningful-name] */$_32_index from "./32/index"
import * as /* [auto-meaningful-name] */$_471 from "./471"
var Nr = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n]
      }
    })(t, n)
  }
  return function (t, n) {
    function r() {
      this.constructor = t
    }
    e(t, n)
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r())
  }
}()
var Mr = function (e) {
  function t(t, n) {
    var r = e.call(this) || this
    r.app = t
    r.on_destroy = n
    r.video = document.createElement("video")
    r.canvas = document.createElement("canvas")
    r.camera_status = $_126.d.TURN_OFF
    r.set_parent = function (e) {
      r.setParent(e)
    }
    r.anchor.set(.5)
    r.texture = $_32_index.y.from(r.video)
    r.visible = false
    return r
  }
  Nr(t, e)
  t.prototype.turn_on = function (e) {
    var t = this
    return this.camera_status === $_126.d.IS_TURNED_ON ? Promise.resolve() : this.camera_status === $_126.d.TURNING_ON && this.turning_on_lock ? this.turning_on_lock : (this.camera_status = $_126.d.TURNING_ON, this.turning_on_lock = new Promise(function (n, r) {
      navigator.mediaDevices.getUserMedia(e).then(function (e) {
        if (t.camera_status !== $_126.d.TURN_OFF) {
          t.stream = e
          try {
            t.video.srcObject = e
          } catch (r) {
            t.video.src = window.URL.createObjectURL(e)
          }
          t.video.onloadedmetadata = function (e) {
            if (t.camera_status !== $_126.d.TURN_OFF) {
              t.adjust_stage_scale()
              t.camera_status = $_126.d.IS_TURNED_ON
              t.turning_on_lock = undefined
              t.visible = true
              t.video.play()
              n()
            } else {
              n()
            }
          }
        } else {
          n()
        }
      }).catch(r)
    }))
  }
  t.prototype.adjust_stage_scale = function () {
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    var /* [auto-meaningful-name] */this$video = this.video
    var /* [auto-meaningful-name] */this$video$videoWidth = this$video.videoWidth
    var /* [auto-meaningful-name] */this$video$videoHeight = this$video.videoHeight
    if (0 !== this$video$videoWidth && 0 !== this$video$videoHeight) {
      var a = Math.max(this$app$get_app$view$height / this$video$videoHeight, this$app$get_app$view$width / this$video$videoWidth)
      this.scale.set(-a, a)
    }
  }
  t.prototype.turn_off = function () {
    var /* [auto-meaningful-name] */this$stream
    if (this.camera_status !== $_126.d.TURN_OFF) {
      this.camera_status = $_126.d.TURN_OFF
      if (!(null === (this$stream = this.stream) || undefined === this$stream)) {
        this$stream.getVideoTracks().forEach(function (e) {
          return e.stop()
        })
      }
      this.stream = undefined
      this.turning_on_lock = undefined
      this.visible = false
    }
  }
  t.prototype.get_image_data = function (e) {
    var t = this.canvas.getContext("2d")
    if (this.camera_status === $_126.d.IS_TURNED_ON && t) {
      if (e) {
        this.canvas.width = e.width
        this.canvas.height = e.height
      } else {
        this.canvas.width = this.video.videoWidth
        this.canvas.height = this.video.videoHeight
      }
      t.resetTransform()
      t.scale(-1, 1)
      t.translate(-1 * this.canvas.width, 0)
      t.drawImage(this.video, 0, 0, this.video.videoWidth, this.video.videoHeight, 0, 0, this.canvas.width, this.canvas.height)
      return t.getImageData(0, 0, this.canvas.width, this.canvas.height)
    }
  }
  t.prototype.set_alpha = function (e) {
    this.alpha = e
  }
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: true,
      texture: true,
      baseTexture: true
    })
    this.on_destroy()
  }
  return t
}($_32_index.t)
export { Mr }
