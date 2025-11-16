/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：683__part-11
 */

"use strict"

var We
var Qe
import * as /* [auto-meaningful-name] */$_215_index from "./215/index"
import * as /* [auto-meaningful-name] */$_122 from "./122"
import * as c from "./65"
import * as /* [auto-meaningful-name] */$_34_index from "./34/index"
import * as /* [auto-meaningful-name] */$_1003 from "./1003"
var ln = function () {
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
var fn = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this, t, n, r, i) || this
    o.is_resizing = false
    o.drag_start_scale_btn = function (e) {
      e.stopPropagation()
      o.is_resizing = true
    }
    o.drag_end_scale_btn = function () {
      if (o.is_resizing) {
        o.is_resizing = false
        if (o.resizable_part) {
          o.emit_resizable_event("scale_btn_drag_end", o.resizable_part.scale.x)
        }
      }
    }
    o.on_resizable_break = function (e) {
      if (!(e && e !== o.id)) {
        o.is_resizing = false
      }
    }
    o.scale_btn = new $_34_index.j()
    o.draw_scale_btn()
    o.scale_btn.addListener("mousedown", o.drag_start_scale_btn)
    o.scale_btn.addListener("mouseup", o.drag_end_scale_btn)
    o.scale_btn.addListener("mouseupoutside", o.drag_end_scale_btn)
    o.scale_btn.addListener("touchstart", o.drag_start_scale_btn)
    o.scale_btn.addListener("touchend", o.drag_end_scale_btn)
    o.scale_btn.addListener("touchendoutside", o.drag_end_scale_btn)
    o.events.event_emitter.addListener("break", o.on_resizable_break)
    return o
  }
  ln(t, e)
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: true
    })
    this.events.event_emitter.removeListener("break", this.on_resizable_break)
  }
  t.prototype.get_is_resizing = function () {
    return this.is_resizing
  }
  t.prototype.draw_scale_btn = function () {
    this.scale_btn.clear()
    this.scale_btn.interactive = true
    this.scale_btn.buttonMode = true
    this.scale_btn.hitArea = new $_34_index.q(0, 0, 18, 18)
    var e = Math.sqrt(2) / 2
    this.scale_btn.beginFill(0).arcTo(12, 12, 10.8, 12, 1.2).arcTo(0, 12, 1.2 * e, 12 - 1.2 * e, 1.2).arcTo(12, 0, 12, 1.2, 1.2).endFill()
  }
  t.prototype.get_scale_btn_position = function () {
    if (undefined !== this.resizable_part) {
      var /* [auto-meaningful-name] */this$resizable_part$scale$x = this.resizable_part.scale.x
      return {
        x: this.resizable_part.width - 6 * this$resizable_part$scale$x,
        y: this.resizable_part.height - 6 * this$resizable_part$scale$x
      }
    }
  }
  t.prototype.set_scale_btn_position = function () {
    var e = this.get_scale_btn_position()
    if (undefined !== e) {
      this.scale_btn.position.set(e.x, e.y)
    }
  }
  t.prototype.set_resizable_part = function (e) {
    this.resizable_part = e
  }
  t.prototype.is_mouse_out_of_stage = function (e) {
    var t = e.data.getLocalPosition(this.app.get_app().stage)
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var r = this$app$get_app$view.width / 2
    var i = this$app$get_app$view.height / 2
    return t.x < -r || t.x > r || t.y < -i || t.y > i
  }
  t.prototype.emit_resizable_event = function (e, t) {
    this.emit(e, t)
  }
  t.prototype.add_resizable_event_listener = function (e, t) {
    this.addListener(e, t)
  }
  return t
}($_1003.a)
var dn = function () {
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
var hn = new $_34_index.x({
  fontFamily: ["NotoSansCJKsc-Medium", "NotoSansCJKsc"],
  fill: "#6B3C3C",
  fontWeight: "900"
})
var pn = function (e) {
  function t(t, n, r) {
    var i = e.call(this, "timer", t, n, r) || this
    i.drag_move_scale_btn = function (e) {
      var /* [auto-meaningful-name] */i$background$scale$x = i.background.scale.x
      if (i.is_resizing && !i.is_mouse_out_of_stage(e) && 0 !== i$background$scale$x) {
        var n = e.data.getLocalPosition(i)
        var r = Math.hypot(i.background.height / i$background$scale$x, i.background.width / i$background$scale$x)
        var o = Math.hypot(n.x, n.y) / r
        i.background.scale.set(o)
        i.set_scale_btn_position()
        i.app.render()
      }
    }
    i.time = new $_34_index.v("0.00")
    i.unit = new $_34_index.v("秒")
    i.time.style = Object.assign({}, hn, {
      fontSize: 30
    })
    i.unit.style = Object.assign({}, hn, {
      fontSize: 18
    })
    i.background = new $_34_index.j()
    i.draw_background()
    i.set_resizable_part(i.background)
    i.set_scale_btn_position()
    i.scale_btn.addListener("mousemove", c.w(i.drag_move_scale_btn, c.a))
    i.scale_btn.addListener("touchmove", c.w(i.drag_move_scale_btn, c.a))
    i.add_resizable_event_listener("scale_btn_drag_end", function (e) {
      i.events.fire("timer_scale_btn:drag_end", e)
    })
    i.add_listener("drag_end", function () {
      i.events.fire("timer:drag_end", {
        position: {
          x: i.get_position().x,
          y: i.get_position().y
        }
      })
    })
    if (i.app.get_renderer_type() === $_34_index.p.WEBGL) {
      var o = new $_34_index.h({
        rotation: 0,
        distance: 1,
        alpha: .15,
        color: 0,
        blur: 1
      })
      i.background.filters = [o]
    }
    i.addChild(i.background, i.scale_btn)
    i.set_visible(false)
    return i
  }
  dn(t, e)
  t.prototype.draw_background = function () {
    this.background.clear()
    var e = this.time.width + this.unit.width
    var t = e + 16 + 16
    var n = this.time.height + 26
    this.time.x = 16
    this.time.y = 13
    this.unit.x = this.time.x + this.time.width + 3
    this.unit.y = 21
    var r = {
      x: -2,
      y: -2
    }
    var i = t + 4
    var o = n + 4
    this.background.beginFill(16777215)
    this.background.drawRoundedRect(r.x, r.y, i, o, 20)
    var a = {
      x: -1,
      y: -1
    }
    var s = t + 2
    var c = n + 2
    this.background.beginFill(16363339)
    this.background.drawRoundedRect(a.x, a.y, s, c, 20)
    this.background.beginFill(16502616)
    this.background.drawRoundedRect(0, 0, t, n, 20)
    var u = {
      x: t / 2 - 35,
      y: -3
    }
    this.background.beginFill(16363339)
    this.background.drawRoundedRect(u.x, u.y, 70, 2, 1)
    var l = t / 2 - 40
    var f = t / 2 + 15
    var d = n + 1
    this.background.beginFill(5908263)
    this.background.drawRoundedRect(l, d, 25, 2, 1)
    this.background.drawRoundedRect(f, d, 25, 2, 1)
    this.background.beginFill(16739167)
    this.background.drawRect(0, 24, t, 3)
    this.background.drawRect(0, 30, t, 3)
    this.background.drawRect(0, 36, t, 3)
    var h = {
      x: this.time.x - 8,
      y: this.time.y - 5
    }
    var p = e + 16
    var _ = this.time.height + 10
    this.background.beginFill(16777215)
    this.background.drawRoundedRect(h.x, h.y, p, _, 11)
    this.background.endFill()
    this.background.addChild(this.time, this.unit)
  }
  t.prototype.redraw_background = function () {
    this.background.clear()
    this.draw_background()
    this.set_scale_btn_position()
  }
  t.prototype.set_unit = function (e) {
    var /* [auto-meaningful-name] */this$unit$width = this.unit.width
    this.unit.text = e
    if (this.unit.width !== this$unit$width) {
      this.redraw_background()
    }
  }
  t.prototype.set_time = function (e) {
    var /* [auto-meaningful-name] */this$time$width = this.time.width
    this.time.text = e.length > 500 ? e.substr(0, 500).concat("...") : e
    if (this.time.width !== this$time$width) {
      this.redraw_background()
    }
  }
  t.prototype.set_position_x = function (e) {
    this.position.set(e, this.position.y)
  }
  t.prototype.set_position_y = function (e) {
    this.position.set(this.position.x, -e)
  }
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    }
  }
  t.prototype.set_scale_btn_visible = function (e) {
    this.scale_btn.visible = e
  }
  t.prototype.set_scale = function (e) {
    this.background.scale.set(e)
    this.set_scale_btn_position()
  }
  return t
}(fn)
!function (e) {
  e[e.DEFAULT = 0] = "DEFAULT"
  e[e.DEFAULT_WITH_ICON = 1] = "DEFAULT_WITH_ICON"
  e[e.ICON = 2] = "ICON"
  e[e.PLAIN_TEXT = 3] = "PLAIN_TEXT"
}(Qe || (Qe = {}));
(function (e) {
  e.VARIABLE = "variable"
  e.LIST = "list"
})(We || (We = {}))
var _n
var An = {
  fontFamily: ["NotoSansCJKsc-Medium", "NotoSansCJKsc"],
  fontSize: "18px"
}
var gn = {
  PADDING: 10,
  BORDER_RADIUS: 11,
  ICON_MARGIN_LEFT: 10,
  ICON_MARGIN_TOP: 7,
  ICON_MARGIN_RIGHT: 5,
  ICON_SIZE: 20,
  VALUE_MARGIN: 10,
  VALUE_MARGIN_TOP: 5,
  VARIABLE_NAME_MARGIN_LEFT: 10,
  VALUE_TEXT_STYLE: Object.assign({}, An, {
    fill: 0
  }),
  NAME_TEXT_STYLE: Object.assign({}, An, {
    fill: 16777215
  }),
  PREFIX_TEXT_STYLE: Object.assign({}, An, {
    fill: 5388601
  }),
  SCALE_BTN_MARGIN: 6
}
var vn = {
  ICON_SIZE: 63,
  VALUE_TEXT_STYLE: Object.assign({}, An, {
    fill: 16777215,
    stroke: 16777215
  }),
  VALUE_MARGIN: 10,
  SCALE_BTN_MARGIN_RIGHT: 8,
  SCALE_BTN_MARGIN_BOTTOM: 15
}
var mn = {
  TEXT_STYLE: {
    fontFamily: ["NotoSansCJKsc-Black", "NotoSansCJKsc"],
    fontSize: "45px",
    fill: "#000000",
    stroke: "#ffffff",
    strokeThickness: 3,
    dropShadow: true,
    dropShadowColor: "#333333",
    dropShadowBlur: 2,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2
  },
  SCALE_BTN_MARGIN_RIGHT: 8,
  SCALE_BTN_MARGIN_BOTTOM: 15
}
!function (e) {
  e[e.BLANK = 0] = "BLANK"
  e[e.NON_BLANK = 1] = "NON_BLANK"
}(_n || (_n = {}))
var yn
var bn = 16756040
var wn = 20
var En = 10
var xn = 8
var Cn = 50
var On = 12
var kn = 5
var Sn = -2
var Tn = 20
var Bn = 5
var Dn = 4
var In = 170
var Fn = 45
var Rn = 16053751
var Pn = 16777215
var Nn = 15
var Mn = 45
var jn = 10
var Ln = 163
var Un = 215
var Hn = 50
var Vn = 14
var Gn = 24
var zn = Dn * Fn
var Qn = {
  fontFamily: ["STHeitiSC-Medium", "Microsoft YaHei"],
  fontSize: "16px",
  fontWeight: "bold",
  align: "center"
}
var Wn = {
  fontFamily: ["PingFangSC-Medium", "PingFang SC"],
  fontSize: "20px",
  fontWeight: "500",
  align: "center"
}
var Kn = {
  fontFamily: ["STHeitiSC-Medium", "Microsoft YaHei"],
  fontSize: "17.5px",
  fontWeight: "bold",
  align: "center",
  fill: "#43372E"
}
!function (e) {
  e.LIGHT = "list_item_light"
  e.DEEP = "list_item_deep"
}(yn || (yn = {}))
var Xn
var Yn = 5
var qn = 112
var $n = 10727103
var Jn = .3
var Zn = 38
var er = 10
var tr = function () {
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
var nr = function (e) {
  function t(t, n, r, i, o, s) {
    var /* [auto-meaningful-name] */s$theme_opt = s.theme_opt
    var /* [auto-meaningful-name] */s$value = s.value
    var /* [auto-meaningful-name] */s$variable_name = s.variable_name
    var /* [auto-meaningful-name] */s$prefix = s.prefix
    var /* [auto-meaningful-name] */s$position = s.position
    var /* [auto-meaningful-name] */s$scale = s.scale
    var _ = e.call(this, t, n, r, i) || this
    _.type = We.VARIABLE
    _.variable_name = new $_34_index.v("", gn.NAME_TEXT_STYLE)
    _.value = new $_34_index.v("")
    _.prefix = new $_34_index.v("", gn.PREFIX_TEXT_STYLE)
    _.icon = new $_34_index.t()
    _.background = new $_34_index.j()
    _.on_position_change = function () {
      _.events.fire("variable:drag_end", {
        target_id: _.id,
        data: {
          position: _.get_position()
        }
      })
    }
    _.on_scale_change = function () {
      _.events.fire("variable_scale_btn:drag_end", {
        target_id: _.id,
        data: {
          scale: {
            x: _.background.scale.x,
            y: _.background.scale.y
          }
        }
      })
    }
    _.drag_move_scale_btn = function (e) {
      var /* [auto-meaningful-name] */_$background$scale$x = _.background.scale.x
      if (_.is_resizing && !_.is_mouse_out_of_stage(e) && 0 !== _$background$scale$x) {
        var n = e.data.getLocalPosition(_)
        var r = Math.hypot(_.background.height / _$background$scale$x, _.background.width / _$background$scale$x)
        var i = Math.hypot(n.x, n.y) / r
        _.background.scale.set(i)
        _.get_painter().update_scale_btn_position()
        _.app.render()
      }
    }
    _.data = o
    _.value.text = s$value
    _.variable_name.text = s$variable_name
    if (s$prefix) {
      _.prefix.text = s$prefix
    }
    _.background.addChild(_.value, _.variable_name, _.prefix, _.icon, _.scale_btn)
    _.addChild(_.background, _.scale_btn)
    _.set_resizable_part(_.background)
    _.scale_btn.addListener("mousemove", c.w(_.drag_move_scale_btn, c.a)).addListener("touchmove", c.w(_.drag_move_scale_btn, c.a))
    _.add_listener("drag_end", _.on_position_change)
    _.add_resizable_event_listener("scale_btn_drag_end", _.on_scale_change)
    _.position.set(s$position.x, -s$position.y)
    if (s$scale) {
      _.background.scale.set(s$scale.x, s$scale.y)
    }
    _.set_theme(s$theme_opt)
    _.theme = s$theme_opt.theme
    return _
  }
  tr(t, e)
  t.prototype.get_painter = function () {
    if (!this.painter || this.painter.theme !== this.theme) {
      switch (this.theme) {
        case Qe.DEFAULT_WITH_ICON:
          this.icon.visible = true
          this.painter = new ir(this.prefix, this.variable_name, this.value, this.background, this.scale_btn, this.icon)
          break
        case Qe.ICON:
          this.prefix.visible = false
          this.variable_name.visible = false
          this.painter = new or(this.value, this.background, this.scale_btn, this.icon)
          break
        case Qe.PLAIN_TEXT:
          this.prefix.visible = false
          this.variable_name.visible = false
          this.icon.visible = false
          this.painter = new ar(this.value, this.background, this.scale_btn)
          break
        default:
          this.icon.visible = false
          this.painter = new rr(this.prefix, this.variable_name, this.value, this.background, this.scale_btn)
      }
    }
    return this.painter
  }
  t.prototype.set_theme = function (e) {
    if (e.theme !== this.theme) {
      this.theme = e.theme
      if (!(e.theme !== Qe.DEFAULT_WITH_ICON && e.theme !== Qe.ICON)) {
        this.set_icon_texture(e.icon_texture_id)
      }
      this.get_painter().repaint()
    }
  }
  t.prototype.get_theme = function () {
    return this.theme
  }
  t.prototype.set_icon_texture = function (e) {
    var t = this.data.get_texture(e)
    if (t) {
      this.icon.texture = t
    }
  }
  t.prototype.set_value = function (e) {
    if (this.value.text !== e) {
      var /* [auto-meaningful-name] */this$value$width = this.value.width
      this.value.text = e
      if (this.value.width !== this$value$width) {
        this.get_painter().repaint()
      }
    }
  }
  t.prototype.set_scale_btn_visible = function (e) {
    this.scale_btn.visible = e
  }
  t.prototype.get_value = function () {
    return this.value.text
  }
  t.prototype.set_variable_name = function (e) {
    if (this.variable_name.text !== e) {
      var /* [auto-meaningful-name] */this$variable_name$width = this.variable_name.width
      this.variable_name.text = e
      if (this.variable_name.width !== this$variable_name$width) {
        this.get_painter().repaint()
      }
    }
  }
  t.prototype.get_variable_name = function () {
    return this.variable_name.text
  }
  t.prototype.set_prefix = function (e) {
    if (this.prefix.text !== e) {
      var /* [auto-meaningful-name] */this$prefix$width = this.prefix.width
      var /* [auto-meaningful-name] */this$prefix$visible = this.prefix.visible
      this.prefix.visible = !!e
      this.prefix.text = e
      if (!(this.prefix.visible === this$prefix$visible && this.prefix.width === this$prefix$width)) {
        this.get_painter().repaint()
      }
    }
  }
  t.prototype.get_prefix = function () {
    return this.prefix.text
  }
  t.prototype.destroy = function () {
    var t = {
      children: true,
      texture: true,
      baseTexture: true
    }
    this.value.destroy(t)
    this.prefix.destroy(t)
    this.variable_name.destroy(t)
    e.prototype.destroy.call(this)
  }
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    }
  }
  t.prototype.set_position = function (e, t) {
    this.position.set(e, -t)
  }
  t.prototype.set_scale = function (e) {
    this.background.scale.set(e)
    this.get_painter().update_scale_btn_position()
  }
  return t
}(fn)
var rr = function () {
  function e(e, t, n, r, i) {
    this.theme = Qe.DEFAULT
    var /* [auto-meaningful-name] */gn$PADDING = gn.PADDING
    var /* [auto-meaningful-name] */gn$VALUE_MARGIN_TOP = gn.VALUE_MARGIN_TOP
    var /* [auto-meaningful-name] */gn$VALUE_TEXT_STYLE = gn.VALUE_TEXT_STYLE
    this.prefix = e
    this.prefix.visible = !!this.prefix.text
    this.variable_name = t
    this.variable_name.visible = true
    this.value = n
    this.value.style = gn$VALUE_TEXT_STYLE
    this.background = r
    this.scale_btn = i
    var c = gn$PADDING + gn$VALUE_MARGIN_TOP
    this.prefix.position.set(gn$PADDING, c)
    this.variable_name.position.y = c
    this.value.position.y = c
  }
  e.prototype.repaint = function () {
    this.update_variable_name_position()
    this.update_value_position()
    this.draw_background()
    this.update_scale_btn_position()
  }
  e.prototype.draw_background = function () {
    var /* [auto-meaningful-name] */gn$PADDING = gn.PADDING
    var /* [auto-meaningful-name] */gn$VALUE_MARGIN = gn.VALUE_MARGIN
    var /* [auto-meaningful-name] */gn$VALUE_MARGIN_TOP = gn.VALUE_MARGIN_TOP
    var /* [auto-meaningful-name] */gn$BORDER_RADIUS = gn.BORDER_RADIUS
    var i = this.value.width + 2 * gn$VALUE_MARGIN
    var o = this.value.height + 2 * gn$VALUE_MARGIN_TOP
    var a = this.value.position.x + i
    var s = 2 * gn$PADDING + o
    this.background.clear().beginFill(16756040).drawRoundedRect(0, 0, a, s, gn$BORDER_RADIUS).beginFill(16777215).drawRoundedRect(this.value.position.x - gn$VALUE_MARGIN, this.value.position.y - gn$VALUE_MARGIN_TOP, i, o, gn$BORDER_RADIUS).endFill()
  }
  e.prototype.update_scale_btn_position = function () {
    var /* [auto-meaningful-name] */this$background$scale = this.background.scale
    var /* [auto-meaningful-name] */this$background$scale$x = this$background$scale.x
    var /* [auto-meaningful-name] */this$background$scale$y = this$background$scale.y
    if (0 !== this$background$scale$x && 0 !== this$background$scale$y) {
      var /* [auto-meaningful-name] */gn$SCALE_BTN_MARGIN = gn.SCALE_BTN_MARGIN
      this.scale_btn.position.set(this.background.width - gn$SCALE_BTN_MARGIN * this$background$scale$x, this.background.height - gn$SCALE_BTN_MARGIN * this$background$scale$y)
    }
  }
  e.prototype.update_variable_name_position = function () {
    this.variable_name.position.x = this.prefix.visible ? this.prefix.position.x + this.prefix.width : gn.VARIABLE_NAME_MARGIN_LEFT
  }
  e.prototype.update_value_position = function () {
    var e = this.variable_name.position.x + this.variable_name.width
    this.value.position.x = e + 2 * gn.VALUE_MARGIN
  }
  return e
}()
var ir = function (e) {
  function t(t, n, r, i, o, a) {
    var s = e.call(this, t, n, r, i, o) || this
    s.theme = Qe.DEFAULT_WITH_ICON
    s.icon_area_width = 0
    s.icon = a
    var /* [auto-meaningful-name] */gn$PADDING = gn.PADDING
    var /* [auto-meaningful-name] */gn$ICON_SIZE = gn.ICON_SIZE
    var /* [auto-meaningful-name] */gn$ICON_MARGIN_LEFT = gn.ICON_MARGIN_LEFT
    var /* [auto-meaningful-name] */gn$ICON_MARGIN_TOP = gn.ICON_MARGIN_TOP
    var /* [auto-meaningful-name] */gn$ICON_MARGIN_RIGHT = gn.ICON_MARGIN_RIGHT
    s.icon.position.set(gn$ICON_MARGIN_LEFT, gn$PADDING + gn$ICON_MARGIN_TOP)
    s.icon.width = gn$ICON_SIZE
    s.icon.height = gn$ICON_SIZE
    s.icon.visible = true
    s.icon_area_width = gn$ICON_MARGIN_LEFT + gn$ICON_SIZE + gn$ICON_MARGIN_RIGHT
    return s
  }
  tr(t, e)
  t.prototype.repaint = function () {
    this.update_prefix_position()
    this.update_variable_name_position()
    this.update_value_position()
    this.draw_background()
    this.update_scale_btn_position()
  }
  t.prototype.update_prefix_position = function () {
    if (this.prefix.visible) {
      this.prefix.position.x = this.icon_area_width + gn.PADDING
    }
  }
  t.prototype.update_variable_name_position = function () {
    this.variable_name.position.x = this.prefix.visible ? this.prefix.position.x + this.prefix.width : this.icon_area_width
  }
  return t
}(rr)
var or = function () {
  function e(e, t, n, r) {
    this.theme = Qe.ICON
    var /* [auto-meaningful-name] */vn$VALUE_MARGIN = vn.VALUE_MARGIN
    var /* [auto-meaningful-name] */vn$VALUE_TEXT_STYLE = vn.VALUE_TEXT_STYLE
    var /* [auto-meaningful-name] */vn$ICON_SIZE = vn.ICON_SIZE
    this.value = e
    this.value.style = vn$VALUE_TEXT_STYLE
    this.value.position.set(vn$ICON_SIZE + vn$VALUE_MARGIN, (vn$ICON_SIZE - this.value.height) / 2)
    this.background = t
    this.scale_btn = n
    this.icon = r
    this.icon.visible = true
    this.icon.width = vn$ICON_SIZE
    this.icon.height = vn$ICON_SIZE
  }
  e.prototype.repaint = function () {
    this.draw_background()
    this.update_scale_btn_position()
  }
  e.prototype.draw_background = function () {
    var /* [auto-meaningful-name] */vn$ICON_SIZE = vn.ICON_SIZE
    var t = vn$ICON_SIZE / 2
    var n = vn$ICON_SIZE / 4
    var r = t + vn$ICON_SIZE + this.value.width
    var i = n + vn$ICON_SIZE / 2
    var o = vn$ICON_SIZE / 4
    this.background.clear().lineStyle(2, 16777215).beginFill(0, .3).moveTo(t + o, n).arcTo(r, n, r, n + o, o).arcTo(r, i, t + o, i, o).arcTo(t, i, t, n + o, o).arcTo(t, n, t + o, n, o).endFill()
  }
  e.prototype.update_scale_btn_position = function () {
    var /* [auto-meaningful-name] */this$background$scale = this.background.scale
    var /* [auto-meaningful-name] */this$background$scale$x = this$background$scale.x
    var /* [auto-meaningful-name] */this$background$scale$y = this$background$scale.y
    if (0 !== this$background$scale$x && 0 !== this$background$scale$y) {
      var /* [auto-meaningful-name] */vn$SCALE_BTN_MARGIN_RIGHT = vn.SCALE_BTN_MARGIN_RIGHT
      var /* [auto-meaningful-name] */vn$SCALE_BTN_MARGIN_BOTTOM = vn.SCALE_BTN_MARGIN_BOTTOM
      this.scale_btn.position.set(this.background.width - vn$SCALE_BTN_MARGIN_RIGHT * this$background$scale$x, this.background.height - vn$SCALE_BTN_MARGIN_BOTTOM * this$background$scale$y)
    }
  }
  return e
}()
var ar = function () {
  function e(e, t, n) {
    this.theme = Qe.PLAIN_TEXT
    this.background = t
    this.background.clear()
    this.value = e
    this.value.style = mn.TEXT_STYLE
    this.value.position.set(0, 0)
    this.scale_btn = n
  }
  e.prototype.repaint = function () {
    this.update_scale_btn_position()
  }
  e.prototype.update_scale_btn_position = function () {
    var /* [auto-meaningful-name] */this$background$scale = this.background.scale
    var /* [auto-meaningful-name] */this$background$scale$x = this$background$scale.x
    var /* [auto-meaningful-name] */this$background$scale$y = this$background$scale.y
    if (0 !== this$background$scale$x && 0 !== this$background$scale$y) {
      var /* [auto-meaningful-name] */mn$SCALE_BTN_MARGIN_RIGHT = mn.SCALE_BTN_MARGIN_RIGHT
      var /* [auto-meaningful-name] */mn$SCALE_BTN_MARGIN_BOTTOM = mn.SCALE_BTN_MARGIN_BOTTOM
      this.scale_btn.position.set(this.background.width - mn$SCALE_BTN_MARGIN_RIGHT * this$background$scale$x, this.background.height - mn$SCALE_BTN_MARGIN_BOTTOM * this$background$scale$y)
    }
  }
  return e
}()
var sr = function () {
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
var cr = function (e) {
  function t(t, n, r) {
    var i = e.call(this, "", n) || this
    i.content_string = ""
    i.is_wrapped = false
    i.content_string = t.toString()
    i.word_wrap_width = r
    i.update_wrap()
    return i
  }
  sr(t, e)
  t.prototype.update_wrap = function () {
    this.text = this.content_string
    if (undefined !== this.word_wrap_width) {
      if (this.width <= this.word_wrap_width) {
        this.is_wrapped = false
      } else {
        this.text = "..."
        var /* [auto-meaningful-name] */this$width = this.width
        var t = ""
        this.text = ""
        for (var n = 0; n < this.content_string.length; n++) {
          this.text += this.content_string[n]
          if (this.width + this$width > this.word_wrap_width) {
            this.is_wrapped = true
            this.text = t + "..."
            break
          }
          t = this.text
        }
      }
    } else {
      this.is_wrapped = false
    }
  }
  t.prototype.update_content = function (e) {
    var /* [auto-meaningful-name] */e$text = e.text
    var /* [auto-meaningful-name] */e$wrap_width = e.wrap_width
    var r = false
    if (undefined !== e$text && e$text !== this.content_string) {
      this.content_string = e$text.toString()
      r = true
    }
    if (undefined !== e$wrap_width && e$wrap_width !== this.word_wrap_width) {
      this.word_wrap_width = e$wrap_width
      r = true
    }
    if (r) {
      this.update_wrap()
    }
    return r
  }
  t.prototype.get_is_wrapped = function () {
    return this.is_wrapped
  }
  t.prototype.get_full_text = function () {
    return this.content_string
  }
  return t
}($_34_index.v)
var ur = function () {
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
var lr = function () {
  return (lr = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var fr = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */t$bg_texture = t.bg_texture
    var /* [auto-meaningful-name] */t$width = t.width
    var /* [auto-meaningful-name] */t$value = t.value
    var /* [auto-meaningful-name] */t$order = t.order
    var /* [auto-meaningful-name] */t$order_width = t.order_width
    var c = e.call(this) || this
    c.background_width = 0
    c.prev_order_width = 0
    c.prev_width = 0
    c.background = new $_34_index.t(t$bg_texture)
    c.background_width = t$width
    c.background.width = t$width
    c.order = new $_34_index.v(t$order, lr(lr({}, Kn), {
      fill: "#0000007f"
    }))
    c.order_width = undefined !== t$order_width ? t$order_width : c.order.width
    c.value = new cr(t$value, Kn, c.get_value_max_width(t$width))
    var u = (Fn - c.value.height) / 2
    c.order.position.set(Bn, u)
    c.value.position.y = u
    c.update_value_position()
    c.addChild(c.background, c.order, c.value)
    return c
  }
  ur(t, e)
  t.prototype.update_content = function (e) {
    var /* [auto-meaningful-name] */e$order = e.order
    var /* [auto-meaningful-name] */e$value = e.value
    var /* [auto-meaningful-name] */e$order_width = e.order_width
    var /* [auto-meaningful-name] */e$width = e.width
    if (undefined !== e$order) {
      this.order.text = e$order.toString()
    }
    if (undefined !== e$order_width) {
      this.order_width = e$order_width
    }
    if (undefined !== e$width) {
      this.background_width = e$width
    }
    this.repaint(e$value)
  }
  t.prototype.repaint = function (e) {
    var t = false
    var n = false
    if (this.prev_width !== this.background_width) {
      t = true
      n = true
    }
    if (this.prev_order_width !== this.order_width) {
      n = true
      this.update_value_position()
    }
    if (t) {
      this.background.width = this.background_width
    }
    if (n || undefined !== e) {
      this.value.update_content({
        text: e,
        wrap_width: this.get_value_max_width(this.background_width)
      })
    }
    this.prev_width = this.background_width
    this.prev_order_width = this.order_width
  }
  t.prototype.set_text_visible = function (e) {
    this.value.visible = e
    this.order.visible = e
  }
  t.prototype.get_value_max_width = function (e) {
    return e - 2 * Bn - Mn - this.order_width
  }
  t.prototype.update_value_position = function () {
    this.value.position.x = Bn + Nn + this.order_width
  }
  t.prototype.get_text_visible = function () {
    return this.value.visible
  }
  t.prototype.destroy = function () {
    var t = {
      children: true,
      texture: true,
      baseTexture: true
    }
    this.background.destroy({
      children: true
    })
    this.order.destroy(t)
    this.value.destroy(t)
    e.prototype.destroy.call(this, t)
  }
  return t
}($_34_index.f)
function dr(e) {
  if (!Xn) {
    Xn = new $_34_index.x(Kn)
  }
  return $_34_index.w.measureText(e, Xn)
}
var hr
var pr = function () {
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
var _r = function () {
  function e(e, t) {
    this.body = e
    this.scale_btn = t
  }
  e.prototype.draw_body = function (e, t) {
    var n
    this.body.clear().beginFill(16777215).drawRoundedRect(0, 0, e, t, En).endFill()
    if (this.body.mask instanceof $_34_index.j) {
      n = this.body.mask
    } else {
      (n = new $_34_index.j()).setParent(this.body)
      this.body.mask = n
    }
    n.clear().beginFill(16777215).drawRoundedRect(0, 0, e, t, En).endFill()
  }
  return e
}()
var Ar = function (e) {
  function t(t, n, r) {
    var i = e.call(this, t, n) || this
    i.type = _n.BLANK
    i.blank_text = r
    return i
  }
  pr(t, e)
  t.prototype.repaint = function (e, t, n, r) {
    if (n || r) {
      this.draw_body(e, t)
    }
    if (n) {
      this.update_blank_text_position(e)
    }
  }
  t.prototype.update_blank_text_position = function (e) {
    this.blank_text.position.x = e / 2
  }
  t.prototype.calculate_body_size = function (e, t) {
    return {
      width: In + e,
      height: zn + t
    }
  }
  t.prototype.mount = function () {
    this.blank_text.visible = true
  }
  t.prototype.dismount = function () {
    this.blank_text.visible = false
  }
  t.init_blank_text = function () {
    var e = new $_34_index.v("空", Qn)
    e.anchor.set(.5, 0)
    e.position.y = jn
    return e
  }
  return t
}(_r)
var gr = function (e) {
  function t(t, n, r, i, o, s, c) {
    var u = e.call(this, n, r) || this
    u.type = _n.NON_BLANK
    u.available_item_num = 0
    u.value_idx = 0
    u.latest_order_width = 0
    u.value_length = 0
    u.scrollbar = new $_34_index.j()
    u.scroll_range = 0
    u.scroll_step = 0
    u.on_scrollbar_drag_start = function (e) {
      if (!(u.available_item_num >= u.value_length)) {
        e.stopPropagation()
        u.scrollbar_drag_y = e.data.getLocalPosition(u.body).y
      }
    }
    u.on_scrollbar_drag_move = function (e) {
      if (undefined !== u.scrollbar_drag_y) {
        e.stopPropagation()
        var /* [auto-meaningful-name] */e$data$getLocalPositionU$body$y = e.data.getLocalPosition(u.body).y
        var n = e$data$getLocalPositionU$body$y - u.scrollbar_drag_y
        u.scrollbar_drag_y = e$data$getLocalPositionU$body$y
        var r = $_215_index.a(0, u.scroll_range, u.scrollbar.position.y + n)
        u.scrollbar.position.y = r
        var i = $_215_index.a(0, u.value_length - 1, Math.round(r / u.scroll_step))
        if (u.value_idx !== i) {
          u.value_idx = i
          u.update_item_values(u.get_values())
          u.render()
        }
      }
    }
    u.on_scrollbar_drag_end = function (e) {
      if (undefined !== u.scrollbar_drag_y) {
        e.stopPropagation()
        u.scrollbar_drag_y = undefined
      }
    }
    u.on_body_drag_start = function (e) {
      if (!(u.available_item_num >= u.value_length)) {
        e.stopPropagation()
        u.body_drag_y = e.data.getLocalPosition(u.body).y
      }
    }
    u.on_body_drag_move = function (e) {
      if (undefined !== u.body_drag_y) {
        e.stopPropagation()
        var /* [auto-meaningful-name] */e$data$getLocalPositionU$body$y = e.data.getLocalPosition(u.body).y
        var n = e$data$getLocalPositionU$body$y - u.body_drag_y
        var r = n > 0 ? Math.floor(n / Fn) : Math.ceil(n / Fn)
        if (!(Math.abs(r) <= 0)) {
          var i = $_215_index.a(0, u.value_length - 1, u.value_idx - r)
          if (u.value_idx !== i) {
            u.body_drag_y = e$data$getLocalPositionU$body$y
            u.value_idx = i
            u.scrollbar.position.y = $_215_index.a(0, u.scroll_range, u.value_idx * u.scroll_step)
            u.update_item_values(u.get_values())
            u.render()
          }
        }
      }
    }
    u.on_body_drag_end = function (e) {
      if (undefined !== u.body_drag_y) {
        e.stopPropagation()
        u.body_drag_y = undefined
      }
    }
    u.app = t
    u.items_container = i
    u.data = o
    u.get_values = s
    u.render = c
    u.draw_scrollbar()
    u.body.addChild(u.scrollbar)
    u.body.interactive = true
    u.body.addListener("mousedown", u.on_body_drag_start).addListener("touchstart", u.on_body_drag_start).addListener("mousemove", u.on_body_drag_move).addListener("touchmove", u.on_body_drag_move).addListener("mouseup", u.on_body_drag_end).addListener("touchend", u.on_body_drag_end).addListener("mouseupoutside", u.on_body_drag_end).addListener("touchendoutside", u.on_body_drag_end)
    u.scrollbar.interactive = true
    u.scrollbar.addListener("mousedown", u.on_scrollbar_drag_start).addListener("touchstart", u.on_scrollbar_drag_start).addListener("mousemove", u.on_scrollbar_drag_move).addListener("touchmove", u.on_scrollbar_drag_move).addListener("mouseup", u.on_scrollbar_drag_end).addListener("touchend", u.on_scrollbar_drag_end).addListener("mouseupoutside", u.on_scrollbar_drag_end).addListener("touchendoutside", u.on_scrollbar_drag_end)
    return u
  }
  pr(t, e)
  t.prototype.repaint = function (e, t, n, r, i) {
    if (n || r) {
      this.draw_body(e, t)
    }
    if (n) {
      this.update_cur_items_width(e)
      this.update_scrollbar_position_x(e)
    }
    if (r) {
      this.scroll_range = t - qn - Zn
      var o = this.scroll_range / (this.value_length - this.available_item_num)
      this.scroll_step = Number.isNaN(o) ? 0 : Math.max(0, o)
      this.paint_items(e, i || this.get_values())
    }
  }
  t.prototype.calculate_body_size = function (e, t) {
    var n = In
    var r = Fn
    var i = Dn
    this.available_item_num = i + Math.floor(t / r)
    return {
      width: n + e,
      height: this.available_item_num * r
    }
  }
  t.prototype.generate_item_texture = function (e) {
    var t = this.data.get_texture(e)
    if (t) {
      return t
    }
    var n = e === yn.LIGHT ? Pn : Rn
    var r = new $_34_index.j()
    r.beginFill(n).drawRect(0, 0, In, Fn).endFill()
    var i = this.app.get_app().renderer.generateTexture(r, $_34_index.s.LINEAR, 1)
    $_34_index.y.addToCache(i, e)
    return i
  }
  t.prototype.update_cur_items_width = function (e) {
    var t = this
    this.items_container.children.forEach(function (n) {
      if (t.is_item(n)) {
        n.update_content({
          width: e
        })
      }
    })
  }
  t.prototype.update_cur_items_order_width = function (e) {
    var t = this
    if (this.latest_order_width !== e) {
      this.latest_order_width = e
      this.items_container.children.forEach(function (e) {
        if (t.is_item(e)) {
          e.update_content({
            order_width: t.latest_order_width
          })
        }
      })
    }
  }
  t.prototype.update_item_values = function (e) {
    var t = this
    var /* [auto-meaningful-name] */e$length = e.length
    var /* [auto-meaningful-name] */this$items_container$children$length = this.items_container.children.length
    var i = e$length - this.value_idx
    this.value_length = e.length
    this.scroll_step = this.scroll_range / (this.value_length - this.available_item_num)
    if (i < this$items_container$children$length) {
      this.value_idx = Math.max(0, e$length - this$items_container$children$length)
    }
    var o = Math.min(this.value_idx + this$items_container$children$length, e$length)
    this.latest_order_width = dr(o.toString()).width
    this.items_container.children.forEach(function (n, r) {
      if (t.is_item(n)) {
        var i = e[t.value_idx + r]
        var o = t.value_idx + r + 1
        n.update_content({
          order: o,
          value: i,
          order_width: t.latest_order_width
        })
        n.set_text_visible(undefined !== i)
      }
    })
    this.update_scrollbar_visible()
  }
  t.prototype.paint_items = function (e, t) {
    var n
    var r = this
    var /* [auto-meaningful-name] */this$items_container$children = this.items_container.children
    var /* [auto-meaningful-name] */this$items_container$children$length = this$items_container$children.length
    var a = this.available_item_num - this$items_container$children$length
    if (0 !== a) {
      if (a > 0) {
        var s = this.value_length - this.value_idx - this.available_item_num
        if (0 !== this.value_idx && s < 0) {
          this.value_idx = Math.max(0, this.value_idx + s)
          var c = t.slice(this.value_idx, this.value_idx + this$items_container$children$length)
          this$items_container$children.forEach(function (e, t) {
            if (r.is_item(e)) {
              e.update_content({
                order: r.value_idx + t + 1,
                value: c[t]
              })
            }
          })
        }
        for (var u = this.value_idx + this$items_container$children$length, l = this.value_idx + this.available_item_num, f = t.slice(u, l), d = u; d < l; d++) {
          var h = f[d - u]
          var p = this.create_item(d, e, h)
          p.position.y = (d - this.value_idx) * Fn
          this.items_container.addChild(p)
          if (undefined !== h) {
            n = d + 1
          }
        }
      }
      if (a < 0) {
        var _ = this.items_container.removeChildren(this.available_item_num, this$items_container$children$length)
        var A = this.value_idx + this$items_container$children$length
        _.forEach(function (e, t) {
          if (r.is_item(e) && e.get_text_visible()) {
            n = A - t - 1
          }
          e.destroy()
        })
      }
      if (undefined !== n) {
        this.update_cur_items_order_width(dr(n.toString()).width)
      }
      this.update_scrollbar_visible()
      if (this.scrollbar.visible) {
        this.scrollbar.position.y = this.value_idx * this.scroll_step
      }
    }
  }
  t.prototype.is_item = function (e) {
    return !!e && e instanceof fr
  }
  t.prototype.mount = function () {
    this.items_container.visible = true
  }
  t.prototype.dismount = function () {
    this.items_container.visible = false
    this.scrollbar.visible = false
  }
  t.prototype.create_item = function (e, t, n) {
    var r = e % 2 ? yn.DEEP : yn.LIGHT
    var i = undefined === n ? "" : n
    var o = new fr({
      bg_texture: this.generate_item_texture(r),
      width: t,
      value: i,
      order: (e + 1).toString(),
      order_width: this.latest_order_width
    })
    o.set_text_visible(undefined !== n)
    return o
  }
  t.destroy_background_texture = function (e) {
    [e.get_texture(yn.LIGHT), e.get_texture(yn.DEEP)].forEach(function (e) {
      if (e) {
        e.destroy(true)
      }
    })
  }
  t.prototype.update_scrollbar_visible = function () {
    this.scrollbar.visible = this.value_idx > 0 || this.value_length > this.available_item_num
  }
  t.prototype.update_scrollbar_position_x = function (e) {
    this.scrollbar.position.x = e - 2 * Yn
  }
  t.prototype.draw_scrollbar = function () {
    var e = Yn
    var t = qn
    var n = $n
    var r = Jn
    var i = er
    this.scrollbar.beginFill(n, r).drawRoundedRect(0, i, e, t, e / 2).endFill()
  }
  return t
}(_r)
var vr = function () {
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
var mr = function () {
  return (mr = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
var yr = function (e) {
  function t(t) {
    var /* [auto-meaningful-name] */t$title = t.title
    var /* [auto-meaningful-name] */t$prefix = t.prefix
    var /* [auto-meaningful-name] */t$text_max_width = t.text_max_width
    var /* [auto-meaningful-name] */t$icon_texture = t.icon_texture
    var a = e.call(this) || this
    a.text_offset_x = 0
    a.text_max_width = t$text_max_width
    a.title = new cr(t$title, mr(mr({}, Wn), {
      fill: "#FFFFFF"
    }), a.text_max_width)
    a.addChild(a.title)
    if (t$icon_texture) {
      a.set_icon_texture(t$icon_texture)
    }
    if (t$prefix) {
      a.set_prefix(t$prefix)
    } else {
      a.wrap_prefix_and_title()
    }
    return a
  }
  vr(t, e)
  t.prototype.set_title = function (e) {
    return !!this.title.update_content({
      text: e
    }) && (this.wrap_prefix_and_title(), true)
  }
  t.prototype.set_prefix = function (e) {
    return this.prefix ? !!this.prefix.update_content({
      text: e
    }) && (this.wrap_prefix_and_title(), true) : (this.prefix = new cr(e, mr(mr({}, Wn), {
      fill: "#523939"
    }), this.text_max_width), this.prefix.position.x = this.text_offset_x, this.addChild(this.prefix), this.wrap_prefix_and_title(), true)
  }
  t.prototype.set_text_max_width = function (e) {
    if (this.text_max_width + this.text_offset_x !== e) {
      this.text_max_width = e - this.text_offset_x
      this.wrap_prefix_and_title()
    }
  }
  t.prototype.wrap_prefix_and_title = function () {
    var /* [auto-meaningful-name] */this$text_max_width = this.text_max_width
    var /* [auto-meaningful-name] */this$text_offset_x = this.text_offset_x
    if (this.prefix) {
      if (this.prefix.get_full_text()) {
        this.prefix.update_content({
          wrap_width: this$text_max_width
        })
        this$text_offset_x = this.prefix.position.x + this.prefix.width
        this$text_max_width = this.prefix.get_is_wrapped() ? 0 : this.text_max_width - this$text_offset_x
        this.prefix.visible = true
      } else {
        this.prefix.visible = false
      }
    }
    if (0 !== this$text_max_width) {
      this.title.update_content({
        wrap_width: this$text_max_width
      })
      this.title.position.x = this$text_offset_x
      this.title.visible = true
    } else {
      this.title.visible = false
    }
  }
  t.prototype.destroy = function () {
    var /* [auto-meaningful-name] */this$prefix
    var n = {
      children: true,
      texture: true,
      baseTexture: true
    }
    this.title.destroy(n)
    if (!(null === (this$prefix = this.prefix) || undefined === this$prefix)) {
      this$prefix.destroy(n)
    }
    e.prototype.destroy.call(this, {
      children: true
    })
  }
  t.prototype.set_icon_texture = function (e) {
    return this.icon ? (this.icon.texture = e, false) : (this.icon = new $_34_index.t(e), this.icon.width = Tn, this.icon.height = Tn, this.icon.position.set(Sn, kn), this.addChild(this.icon), this.text_offset_x = Tn + kn, true)
  }
  return t
}($_34_index.f)
var br = function () {
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
var wr = function (e) {
  function t(t, n, r, i, o, s) {
    var u
    var l = e.call(this, t, n, r, i) || this
    l.type = We.LIST
    l.background = new $_34_index.j()
    l.body = new $_34_index.j()
    l.items_container = new $_34_index.f()
    l.blank_text = Ar.init_blank_text()
    l.bg_color = bn
    l.body_size = {
      width: In,
      height: zn
    }
    l.prev_size = {
      width: 0,
      height: 0
    }
    l.offset = {
      x: 0,
      y: 0
    }
    l.status = _n.BLANK
    l.on_position_change = function () {
      l.events.fire("list:drag_end", {
        target_id: l.id,
        data: {
          position: l.get_position()
        }
      })
    }
    l.on_offset_change = function () {
      l.events.fire("list_scale_btn:drag_end", {
        target_id: l.id,
        data: {
          offset: l.offset
        }
      })
    }
    l.drag_move_scale_btn = function (e) {
      if (l.is_resizing) {
        var t = e.data.getLocalPosition(l)
        var n = t.x
        var r = t.y
        l.offset.x = Math.max(0, n - Ln)
        l.offset.y = Math.max(0, r - Un)
        l.body_size = l.get_current_painter().calculate_body_size(l.offset.x, l.offset.y)
        l.repaint()
        l.app.render()
      }
    }
    l.data = o
    l.get_values = s.get_values
    if (s.title_icon_texture_id) {
      u = l.data.get_texture(s.title_icon_texture_id)
    }
    l.header = new yr({
      title: s.title,
      text_max_width: In - 4 * xn,
      prefix: s.prefix,
      icon_texture: u
    })
    l.header.position.y = On
    l.body.addChild(l.items_container, l.blank_text)
    l.body.position.set(xn, xn + Cn)
    l.addChild(l.background, l.body, l.header, l.scale_btn)
    if (s.export_icon_texture_id) {
      l.set_export_icon(s.export_icon_texture_id)
    }
    l.blank_painter = new Ar(l.body, l.scale_btn, l.blank_text)
    l.non_blank_painter = new gr(l.app, l.body, l.scale_btn, l.items_container, l.data, l.get_values, function () {
      return l.app.render()
    })
    if (s.position) {
      l.position.set(s.position.x, -s.position.y)
    }
    if (s.bg_color) {
      l.bg_color = s.bg_color
    }
    if (s.offset) {
      l.offset = s.offset
    }
    l.body_size = l.get_current_painter().calculate_body_size(l.offset.x, l.offset.y)
    l.setParent(l.parent)
    l.set_resizable_part(l.background)
    l.scale_btn.addListener("mousemove", c.w(l.drag_move_scale_btn, Hn)).addListener("touchmove", c.w(l.drag_move_scale_btn, Hn))
    l.add_listener("drag_end", l.on_position_change)
    l.add_resizable_event_listener("scale_btn_drag_end", l.on_offset_change)
    l.update_values()
    if (l.status === _n.BLANK) {
      l.repaint()
    }
    return l
  }
  br(t, e)
  t.prototype.set_title = function (e) {
    if (this.header.set_title(e)) {
      this.update_header_style()
    }
  }
  t.prototype.set_title_prefix = function (e) {
    if (this.header.set_prefix(e)) {
      this.update_header_style()
    }
  }
  t.prototype.set_title_icon = function (e) {
    var t = this.data.get_texture(e)
    if (t && this.header.set_icon_texture(t)) {
      this.update_header_style()
    }
  }
  t.prototype.update_values = function (e) {
    var t = e || this.get_values()
    var n = t.length ? _n.NON_BLANK : _n.BLANK
    if (this.status !== n) {
      this.status = n
      this.prev_size = {
        width: 0,
        height: 0
      }
      if (this.status === _n.BLANK) {
        this.blank_painter.mount()
        this.non_blank_painter.dismount()
      } else {
        this.blank_painter.dismount()
        this.non_blank_painter.mount()
        var /* [auto-meaningful-name] */this$body_size = this.body_size
        var /* [auto-meaningful-name] */this$body_size$width = this$body_size.width
        var /* [auto-meaningful-name] */this$body_size$height = this$body_size.height
        this.body_size = this.non_blank_painter.calculate_body_size(this$body_size$width - In, this$body_size$height - zn)
        this.non_blank_painter.update_item_values(t)
      }
      this.repaint(e)
    } else {
      if (this.status === _n.BLANK) {
        return
      }
      this.non_blank_painter.update_item_values(t)
    }
  }
  t.prototype.set_blank_text = function (e) {
    if (this.blank_text.text !== e) {
      var /* [auto-meaningful-name] */this$blank_text$width = this.blank_text.width
      this.blank_text.text = e
      if (this.status === _n.BLANK && this.blank_text.width !== this$blank_text$width) {
        this.blank_painter.update_blank_text_position(this.body_size.width)
      }
    }
  }
  t.prototype.set_bg_color = function (e) {
    this.bg_color = e
    this.draw_background()
  }
  t.prototype.set_export_icon = function (e) {
    var t = this
    var n = this.data.get_texture(e)
    if (n) {
      return this.export_icon ? void (this.export_icon.texture = n) : (this.export_icon = new $_34_index.t(n), this.export_icon.width = Gn, this.export_icon.height = Gn, this.export_icon.position.set(this.body_size.width - Vn, On), this.export_icon.interactive = true, this.export_icon.buttonMode = true, this.addChild(this.export_icon), this.export_icon.addListener("mouseup", function () {
        t.events.fire("list_export_icon:selected", {
          target_id: t.id
        })
      }), void this.export_icon.addListener("touchend", function () {
        t.events.fire("list_export_icon:selected", {
          target_id: t.id
        })
      }))
    }
  }
  t.prototype.set_export_icon_visible = function (e) {
    if (this.export_icon) {
      this.export_icon.visible = e
    }
  }
  t.prototype.destroy = function () {
    this.blank_text.destroy({
      children: true,
      texture: true,
      baseTexture: true
    })
    e.prototype.destroy.call(this)
  }
  t.prototype.get_position = function () {
    return {
      x: this.position.x,
      y: -this.position.y
    }
  }
  t.prototype.set_position = function (e, t) {
    this.position.set(e, -t)
  }
  t.prototype.set_offset = function (e) {
    this.offset = e
    this.body_size = this.get_current_painter().calculate_body_size(this.offset.x, this.offset.y)
    this.repaint()
  }
  t.prototype.repaint = function (e) {
    var /* [auto-meaningful-name] */this$body_size = this.body_size
    var /* [auto-meaningful-name] */this$body_size$width = this$body_size.width
    var /* [auto-meaningful-name] */this$body_size$height = this$body_size.height
    var i = this.prev_size.width !== this$body_size$width
    var o = this.prev_size.height !== this$body_size$height
    if (i || o) {
      this.draw_background()
      this.update_scale_btn_position()
    }
    if (i) {
      this.update_header_style()
      this.update_export_icon_position()
    }
    this.get_current_painter().repaint(this$body_size$width, this$body_size$height, i, o, e)
    this.prev_size = {
      width: this$body_size$width,
      height: this$body_size$height
    }
  }
  t.prototype.draw_background = function () {
    var e = xn
    var t = wn
    var n = Cn
    this.background.clear().beginFill(this.bg_color).lineStyle(2, 13421772).drawRoundedRect(0, 0, this.body_size.width + 2 * e, this.body_size.height + 2 * e + n, t).endFill()
  }
  t.prototype.get_current_painter = function () {
    switch (this.status) {
      case _n.BLANK:
        return this.blank_painter
      case _n.NON_BLANK:
        return this.non_blank_painter
    }
  }
  t.prototype.update_scale_btn_position = function () {
    this.offset.x = this.body_size.width - In
    this.offset.y = this.body_size.height - zn
    this.scale_btn.position.set(Ln + this.offset.x, Un + this.offset.y)
  }
  t.prototype.update_header_style = function () {
    this.header.set_text_max_width(this.body_size.width - 4 * xn)
    this.header.position.x = (this.body_size.width + 2 * xn - this.header.width) / 2
  }
  t.prototype.update_export_icon_position = function () {
    if (this.export_icon) {
      this.export_icon.position.x = this.body_size.width - Vn
    }
  }
  return t
}(fn)
var Er = function () {
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
var xr = function (e) {
  var t = "function" === typeof Symbol && Symbol.iterator
  var n = t && e[t]
  var r = 0
  if (n) {
    return n.call(e)
  }
  if (e && "number" === typeof e.length) {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined
        }
        return {
          value: e && e[r++],
          done: !e
        }
      }
    }
  }
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
var Cr = function (e) {
  function t(t, n, r) {
    var i = e.call(this) || this
    i.set_parent = function (e) {
      i.setParent(e)
    }
    i.app = t
    i.events = n
    i.data = r
    i.timer_container = new $_34_index.f()
    i.data_widget_container = new $_34_index.f()
    i.variables = new Map()
    i.lists = new Map()
    i.addChild(i.data_widget_container, i.timer_container)
    return i
  }
  Er(t, e)
  t.prototype.get_timer = function () {
    if (!this.timer) {
      this.timer = new pn(this.timer_container, this.app, this.events)
    }
    return this.timer
  }
  t.prototype.remove_timer = function () {
    if (this.timer) {
      this.timer.destroy()
      this.timer = undefined
    }
  }
  t.prototype.set_visible = function (e) {
    this.visible = e
  }
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this, {
      children: true,
      texture: true
    })
    gr.destroy_background_texture(this.data)
  }
  t.prototype.load_variable = function (e, t) {
    var n = this.get_variable(e)
    return n || (n = new nr(e, this.data_widget_container, this.app, this.events, this.data, t), this.variables.set(e, n), n)
  }
  t.prototype.get_variable = function (e) {
    var t = this.variables.get(e)
    if (t) {
      return t
    }
    var n = this.get_data_widget_child(e, We.VARIABLE)
    return n ? (this.variables.set(e, n), n) : undefined
  }
  t.prototype.destroy_variable = function (e) {
    var t = this.get_variable(e)
    if (!t) {
      return new $_122.a("Cannot find variable " + e + ".")
    }
    t.destroy()
    this.variables.delete(e)
  }
  t.prototype.is_variable = function (e) {
    return !!e && e.type === We.VARIABLE
  }
  t.prototype.is_list = function (e) {
    return !!e && e.type === We.LIST
  }
  t.prototype.set_all_widgets_draggable = function (e) {
    var t = this
    this.data_widget_container.children.forEach(function (n) {
      if (t.is_variable(n) || t.is_list(n)) {
        n.set_draggable(e)
      }
    })
  }
  t.prototype.destroy_all_widgets = function () {
    var e = this
    this.data_widget_container.removeChildren().forEach(function (t, n) {
      if (e.is_variable(t) || e.is_list(t)) {
        t.destroy()
      }
    })
    this.variables.clear()
    this.lists.clear()
  }
  t.prototype.set_z_index = function (e) {
    var /* [auto-meaningful-name] */this$parent = this.parent
    e = Math.min(e, this$parent.children.length - 1)
    e = Math.max(1, e)
    this$parent.setChildIndex(this, e)
  }
  t.prototype.load_list = function (e, t) {
    var n = this.get_list(e)
    return n ? (new $_122.a("List " + e + " already exists."), n) : (n = new wr(e, this.data_widget_container, this.app, this.events, this.data, t), this.lists.set(e, n), n)
  }
  t.prototype.get_list = function (e) {
    var t = this.lists.get(e)
    if (t) {
      return t
    }
    var n = this.get_data_widget_child(e, We.LIST)
    return n ? (this.lists.set(e, n), n) : undefined
  }
  t.prototype.destroy_list = function (e) {
    var t = this.lists.get(e)
    if (!t) {
      return new $_122.a("Cannot find list " + e + ".")
    }
    t.destroy()
    this.lists.delete(e)
  }
  t.prototype.get_data_widget_child = function (e, t) {
    var n
    var /* [auto-meaningful-name] */o$return
    var i = t === We.VARIABLE ? this.is_variable : this.is_list
    try {
      for (var o = xr(this.data_widget_container.children), a = o.next(); !a.done; a = o.next()) {
        var /* [auto-meaningful-name] */a$value = a.value
        if (a$value.name === e && i(a$value)) {
          return a$value
        }
      }
    } catch (c) {
      n = {
        error: c
      }
    } finally {
      try {
        if (a && !a.done && (o$return = o.return)) {
          o$return.call(o)
        }
      } finally {
        if (n) {
          throw n.error
        }
      }
    }
  }
  t.prototype.get_latest_data_widget = function () {
    var /* [auto-meaningful-name] */this$data_widget_container$children = this.data_widget_container.children
    var t = this$data_widget_container$children[this$data_widget_container$children.length - 1]
    if (this.is_list(t) || this.is_variable(t)) {
      return t
    }
  }
  return t
}($_34_index.f)
var Or = function () {
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
var kr = function (e) {
  function t() {
    var t = e.call(this) || this
    t.start_pos = 0
    t.max_size = 0
    t.scroll_bar_width = 0
    t.is_dragging = false
    t.scrollbar_y = 0
    t.SCROLL_BAR_MARGIN = 6
    t.scroll_drag_start = function (e) {
      e.stopPropagation()
      t.is_dragging = true
      t.scrollbar_y = e.data.getLocalPosition(t).y
    }
    t.scroll_drag_move = function (e) {
      if (t.text_area && t.is_dragging) {
        e.stopPropagation()
        var /* [auto-meaningful-name] */e$data$getLocalPositionT$y = e.data.getLocalPosition(t).y
        var r = e$data$getLocalPositionT$y - t.scrollbar_y
        t.scrollbar_y = e$data$getLocalPositionT$y
        var i = t.scrollbar_btn.position.y + r
        var o = t.max_size * (1 - t.max_size / t.text_area.height)
        i = $_215_index.a(0, o, i)
        t.scrollbar_btn.position.y = i
        t.text_area.position.y = -t.scrollbar_btn.y / (t.height - t.scrollbar_btn.height) * (t.text_area.height - t.max_size) + t.start_pos
      }
    }
    t.scroll_drag_end = function () {
      t.is_dragging = false
    }
    t.name = "scrollbar"
    t.scrollbar_btn = new $_34_index.j()
    t.scrollbar_btn.on("mousedown", t.scroll_drag_start).on("mousemove", t.scroll_drag_move).on("mouseup", t.scroll_drag_end).on("mouseupoutside", t.scroll_drag_end).on("touchstart", t.scroll_drag_start).on("touchmove", t.scroll_drag_move).on("touchendoutside", t.scroll_drag_end).on("touchend", t.scroll_drag_end)
    t.addChild(t.scrollbar_btn)
    return t
  }
  Or(t, e)
  t.prototype.draw_scroll_bar = function (e, t, n, r) {
    this.start_pos = t
    this.text_area = e
    this.max_size = n
    this.scroll_bar_width = r
    this.is_dragging = false
    this.draw_scroll_area()
    this.draw_scroll_btn()
    e.parent.addChild(this)
  }
  t.prototype.draw_scroll_area = function () {
    if (this.text_area) {
      this.clear()
      this.beginFill(14737632, 1)
      this.drawRoundedRect(this.text_area.position.x + this.text_area.width + this.SCROLL_BAR_MARGIN, this.text_area.position.y, this.scroll_bar_width, this.max_size, this.scroll_bar_width / 2)
    }
  }
  t.prototype.draw_scroll_btn = function () {
    if (this.text_area) {
      this.scrollbar_btn.interactive = true
      var e = this.max_size / this.text_area.height * this.max_size
      this.clear()
      this.scrollbar_btn.beginFill(13487565, 1)
      this.scrollbar_btn.drawRoundedRect(this.text_area.position.x + this.text_area.width + this.SCROLL_BAR_MARGIN, this.text_area.position.y, this.scroll_bar_width, e, this.scroll_bar_width / 2)
      this.scrollbar_btn.endFill()
    }
  }
  return t
}($_34_index.j)
var Sr = {
  fontSize: "20px",
  fontFamily: ["PingFangSC-Regular", "Microsoft YaHei"],
  fill: "#808080"
}
var Tr = {
  fontSize: "28px",
  fontFamily: ["PingFangSC-Regular", "Microsoft YaHei"],
  wordWrap: true,
  breakWords: true,
  fill: "#000000"
}
var Br = .17
var Dr = .5
var Ir = .15
!function (e) {
  e[e.origin = 0] = "origin"
  e[e.translation = 1] = "translation"
}(hr || (hr = {}))
var Fr = function () {
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
var Rr = function (e) {
  function t(t, n, r, i) {
    var o = e.call(this) || this
    o.is_play = false
    o.TEXT_PADDING = 10
    o.TEXT_TITLE_PADDING = 15
    o.DIALOG_MARGIN = 12
    o.DIALOG_PADDING = 20
    o.BACKGROUND_PADDING = 5
    o.BACKGROUND_RADIUS = 10
    o.TITLE_TEXT_MARGIN = 10
    o.FROM_TO_MARGIN = 130
    o.SCROLLBAR_WIDTH = 12
    o.PLAY_ICON_MARGIN = 12
    o.STATIC_HEIGHT = 2 * (o.DIALOG_MARGIN + o.DIALOG_PADDING) + o.FROM_TO_MARGIN
    o.close_dialog = function () {
      if (o.on_complete_cb) {
        o.on_complete_cb()
      }
      o.hide()
    }
    o.play_translation = function () {
      o.events.fire("translate_dialog_btn:click", {
        text: o.translation_text.text,
        is_play: o.is_play
      })
      o.set_play_state(!o.is_play)
    }
    o.set_parent = function (e) {
      o.setParent(e)
    }
    o.app = t
    o.loader = n
    o.events = r
    o.origin_title = new $_34_index.v("", Sr)
    o.origin_title.x = o.DIALOG_PADDING
    o.origin_text = new $_34_index.v("", Tr)
    o.origin_text.x = o.DIALOG_PADDING
    o.origin_title_background = new $_34_index.j()
    o.separate_line = new $_34_index.j()
    o.translation_title = new $_34_index.v("", Sr)
    o.translation_title.x = o.DIALOG_PADDING
    o.translation_text = new $_34_index.v("", Tr)
    o.translation_text.x = o.DIALOG_PADDING
    o.translation_title_background = new $_34_index.j()
    o.translation_text_mask = new $_34_index.j()
    o.translation_text_mask.name = "text_mask"
    o.scrollbar = new kr()
    o.close_icon = new $_34_index.t()
    o.close_icon.scale.set(Br)
    o.close_icon.interactive = true
    o.close_icon.buttonMode = true
    o.close_icon.alpha = Dr
    o.close_icon.on("mouseup", o.close_dialog)
    o.close_icon.on("touchend", o.close_dialog)
    o.play_idle_icon = new $_34_index.t()
    o.play_idle_icon.scale.set(Ir)
    o.playing_icon = new $_34_index.t()
    o.playing_icon.scale.set(Ir)
    o.set_play_state(false)
    o.play_container = new $_34_index.f()
    o.play_container.addChild(o.play_idle_icon, o.playing_icon)
    o.play_container.interactive = true
    o.play_container.buttonMode = true
    o.play_container.on("mousedown", o.play_translation)
    o.play_container.on("touchstart", o.play_translation)
    if (o.app.get_renderer_type() === $_34_index.p.WEBGL) {
      o.filters = [new $_34_index.h({
        rotation: 45,
        distance: 3,
        alpha: .15,
        color: 0,
        blur: 0
      })]
    }
    o.loader.add({
      url: i.url,
      on_success: function (e) {
        var /* [auto-meaningful-name] */e$textures = e.textures
        if (e$textures) {
          o.close_icon.texture = e$textures[i.texture_name.close_icon]
          o.playing_icon.texture = e$textures[i.texture_name.playing_icon]
          o.play_idle_icon.texture = e$textures[i.texture_name.play_idle_icon]
          o.app.render()
        }
      }
    })
    o.addChild(o.origin_title_background, o.origin_title, o.origin_text, o.separate_line, o.translation_title_background, o.translation_title, o.translation_text, o.close_icon, o.play_container)
    o.visible = false
    o.interactive = true
    var s = function (e) {
      e.stopPropagation()
    }
    o.on("mouseup", s)
    o.on("mousedown", s)
    o.on("touchstart", s)
    o.on("touchend", s)
    return o
  }
  Fr(t, e)
  t.prototype.draw_background = function (e, t) {
    var /* [auto-meaningful-name] */this$app$get_app$view = this.app.get_app().view
    var /* [auto-meaningful-name] */this$app$get_app$view$width = this$app$get_app$view.width
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this$app$get_app$view.height
    this.clear()
    this.lineStyle(2, 14276302, 1)
    this.beginFill(16777215, 1)
    this.drawRoundedRect(0, 0, e, t, this.BACKGROUND_RADIUS)
    this.position.y = this$app$get_app$view$height / 2 - t - this.DIALOG_MARGIN
    this.position.x = -this$app$get_app$view$width / 2 + this.DIALOG_MARGIN
    this.endFill()
  }
  t.prototype.hide_scrollbar = function () {
    this.removeChild(this.scrollbar)
    this.removeChild(this.translation_text_mask)
  }
  t.prototype.draw_content = function (e, t, n, r, i) {
    var o = this.get_object_by_type(e)
    var /* [auto-meaningful-name] */o$content_title = o.content_title
    var /* [auto-meaningful-name] */o$content_text = o.content_text
    var /* [auto-meaningful-name] */o$title_background = o.title_background
    var /* [auto-meaningful-name] */this$app$get_app$view$height = this.app.get_app().view.height
    var l = i - 2 * (this.DIALOG_PADDING + this.TEXT_PADDING)
    o$content_title.text = t
    o$content_title.position.y = r
    o$title_background.clear()
    o$title_background.beginFill(14869218).drawRoundedRect(o$content_title.position.x - this.BACKGROUND_PADDING, o$content_title.position.y - this.BACKGROUND_PADDING, o$content_title.width + 2 * this.BACKGROUND_PADDING, o$content_title.height + 2 * this.BACKGROUND_PADDING, 1.6).endFill()
    var f = o$content_title.height + this.TITLE_TEXT_MARGIN
    var d = (this$app$get_app$view$height - this.STATIC_HEIGHT) / 2 - f
    o$content_text.position.y = r + f
    o$content_text.text = n
    o$content_text.style.wordWrapWidth = l
    var h = Math.min(o$content_text.height, d)
    if (o$content_text.height > d && e === hr.translation) {
      this.draw_scroll_box(h, l)
    }
    return f + h
  }
  t.prototype.draw_separate_line = function (e, t) {
    this.separate_line.clear()
    this.separate_line.lineStyle(2, 0, .1).moveTo(0, e).lineTo(t, e).endFill()
  }
  t.prototype.set_icon_position = function (e) {
    var /* [auto-meaningful-name] */this$close_icon = this.close_icon
    var /* [auto-meaningful-name] */this$play_container = this.play_container
    var /* [auto-meaningful-name] */this$translation_title = this.translation_title
    var i = e - this$close_icon.width - this.DIALOG_PADDING
    var /* [auto-meaningful-name] */this$DIALOG_PADDING = this.DIALOG_PADDING
    this$close_icon.position.x = i
    this$close_icon.position.y = this$DIALOG_PADDING
    var a = this$translation_title.position.x + this$translation_title.width + this.PLAY_ICON_MARGIN
    var s = this$translation_title.position.y + (this$translation_title.height - this.play_container.height) / 2
    this$play_container.position.x = a
    this$play_container.position.y = s
  }
  t.prototype.draw_scroll_box = function (e, t) {
    this.translation_text.style.wordWrapWidth = t - this.SCROLLBAR_WIDTH
    this.addChild(this.translation_text_mask)
    this.clear()
    this.translation_text_mask.beginFill(10026905, 1)
    this.translation_text_mask.drawRect(this.translation_text.position.x, this.translation_text.position.y, t - this.SCROLLBAR_WIDTH, e)
    this.translation_text_mask.endFill()
    this.translation_text.mask = this.translation_text_mask
    this.scrollbar.draw_scroll_bar(this.translation_text, this.translation_text.position.y, this.translation_text_mask.height, this.SCROLLBAR_WIDTH)
  }
  t.prototype.get_object_by_type = function (e) {
    return e === hr.origin ? {
      content_title: this.origin_title,
      content_text: this.origin_text,
      title_background: this.origin_title_background
    } : {
      content_title: this.translation_title,
      content_text: this.translation_text,
      title_background: this.translation_title_background
    }
  }
  t.prototype.show = function (e, t, n, r) {
    this.hide_scrollbar()
    this.on_complete_cb = r
    this.visible = true
    var i = this.app.get_app().view.width - 2 * this.DIALOG_MARGIN
    var /* [auto-meaningful-name] */e$src = e.src
    var /* [auto-meaningful-name] */e$dst = e.dst
    var s = this.draw_content(hr.origin, t, e$src, this.TEXT_TITLE_PADDING, i)
    var c = s + this.DIALOG_PADDING + this.FROM_TO_MARGIN / 2
    this.draw_separate_line(c, i)
    var u = this.draw_content(hr.translation, n, e$dst, c + this.DIALOG_PADDING, i)
    var l = 2 * this.DIALOG_PADDING + s + this.FROM_TO_MARGIN + u
    this.draw_background(i, l)
    this.set_icon_position(i)
  }
  t.prototype.set_play_state = function (e) {
    this.is_play = e
    this.playing_icon.visible = e
    this.play_idle_icon.visible = !e
  }
  t.prototype.set_play_icon_visible = function (e) {
    this.play_container.visible = e
  }
  t.prototype.hide = function () {
    this.visible = false
    this.set_play_state(false)
  }
  t.prototype.destroy = function () {
    this.origin_title.destroy({
      texture: true
    })
    this.origin_text.destroy({
      texture: true
    })
    this.translation_title.destroy({
      texture: true
    })
    this.translation_text.destroy({
      texture: true
    })
    e.prototype.destroy.call(this, {
      children: true
    })
  }
  return t
}($_34_index.j)
export { Cr as "683__part-11__Cr" }
export { Rr as "683__part-11__Rr" }
