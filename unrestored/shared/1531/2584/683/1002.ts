"use strict";

export { s as a };
import r = require("./215/index");
import i = require("./34/index");
import o = require("./65");
import a = require("./122");
var s = function () {
  function e(e, t) {
    var n = this;
    this.hue_degree = 0;
    this.brightness = 100;
    this.saturation = 0;
    this.pixelate_size = 0;
    this.twist_angle = 0;
    this.ascii_size = 0;
    this.displacement_img = "";
    this.displacement_speed = 0;
    this.update_twist_offset = function () {
      var e = n.effect_filter_list[4];
      if (n.is_twist_filter(e) && e.enabled) {
        var t = n.app.get_app().view;
        var r = t.width;
        var o = t.height;
        var a = n.get_target_position();
        e.offset = new i.o(a.x + r / 2, -a.y + o / 2);
      }
    };
    this.update_displacement_position = function () {
      var e = n.effect_filter_list[3];
      if (e && e.enabled && n.is_displacement_filter(e) && n.displacement_sprite) {
        var t = n.app.get_app().view.width / 2;
        var r = n.displacement_sprite.width / 2;
        if (n.displacement_sprite.position.x - r > -t) {
          n.displacement_sprite.position.x -= n.displacement_sprite.width / 2;
        }
        n.displacement_sprite.position.x += n.displacement_speed;
      }
    };
    this.app = e;
    this.effect_filter_list = [];
    this.target = t;
    var r = function () {
      n.remove_effects();
    };
    if (o.m(t)) {
      this.target_sprite = t.background;
      t.add_listener("destroy", r);
      this.get_target_position = function () {
        return t.background.get_position();
      };
    } else {
      this.target_sprite = t;
      t.add_listener("destroy", r);
      this.get_target_position = function () {
        return t.get_position();
      };
    }
  }
  e.prototype.get_effect_filter = function (e) {
    var t = this;
    var n = this.effect_filter_list[e];
    if (!n) {
      var r = function (e) {
        if (e.position) {
          t.update_twist_offset();
        }
      };
      switch (e) {
        case 0:
        case 1:
        case 5:
          n = new i.e();
          break;
        case 2:
          n = new i.n();
          break;
        case 3:
          if (!this.displacement_sprite) {
            throw new Error("Displacement sprite should be init first.");
          }
          n = new i.g(this.displacement_sprite);
          this.app.get_app().ticker.add(this.update_displacement_position);
          break;
        case 4:
          n = new i.A();
          o.m(this.target);
          this.target.add_listener("change", r);
          break;
        case 6:
          n = new i.c();
      }
      this.effect_filter_list[e] = n;
      this.update_target_filter();
    }
    n.enabled = true;
    return n;
  };
  e.prototype.update_target_filter = function () {
    this.target_sprite.filters = this.effect_filter_list.filter(function (e) {
      return !!e;
    });
  };
  e.prototype.is_color_matrix_filter = function (e) {
    return e instanceof i.e;
  };
  e.prototype.is_pixelate_filter = function (e) {
    return e instanceof i.n;
  };
  e.prototype.is_displacement_filter = function (e) {
    return e instanceof i.g;
  };
  e.prototype.is_twist_filter = function (e) {
    return e instanceof i.A;
  };
  e.prototype.is_ascii_filter = function (e) {
    return e instanceof i.c;
  };
  e.prototype.update_displacement_sprite = function (e) {
    if (!e || this.displacement_img !== e || !this.displacement_sprite) {
      if (this.displacement_sprite) {
        this.displacement_sprite.destroy();
      }
      this.displacement_img = e;
      this.displacement_sprite = i.t.from(e);
      this.displacement_sprite.anchor.set(.5, .5);
      var t = this.app.get_app().view;
      var n = t.width;
      var r = t.height;
      this.displacement_sprite.width = 2 * n;
      this.displacement_sprite.height = 2 * r;
      this.target_sprite.parent.addChild(this.displacement_sprite);
    }
  };
  e.prototype.set_hue = function (e) {
    var t = this.get_effect_filter(0);
    if (this.is_color_matrix_filter(t)) {
      this.hue_degree = e;
      t.hue(this.hue_degree, false);
    }
  };
  e.prototype.get_hue = function () {
    return this.hue_degree;
  };
  e.prototype.set_brightness = function (e) {
    var t = this.get_effect_filter(1);
    if (this.is_color_matrix_filter(t)) {
      this.brightness = e;
      var n = r.a(-1, 1, e / 100 - 1);
      t.matrix = [1, 0, 0, 0, n, 0, 1, 0, 0, n, 0, 0, 1, 0, n, 0, 0, 0, 1, 0];
    }
  };
  e.prototype.get_brightness = function () {
    return this.brightness;
  };
  e.prototype.set_saturate = function (e) {
    var t = this.get_effect_filter(5);
    if (this.is_color_matrix_filter(t)) {
      this.saturation = r.a(-100, 100, e);
      t.saturate(this.saturation / 100, false);
    }
  };
  e.prototype.get_saturate = function () {
    return this.saturation;
  };
  e.prototype.set_pixelate = function (e) {
    var t = this.get_effect_filter(2);
    if (this.is_pixelate_filter(t)) {
      var n = Math.min(this.target_sprite.width, this.target_sprite.height);
      this.pixelate_size = r.a(1, n, e);
      t.size = this.pixelate_size;
    }
  };
  e.prototype.get_pixelate = function () {
    return this.pixelate_size;
  };
  e.prototype.set_displacement = function (e, t) {
    try {
      this.update_displacement_sprite(t);
      var n = this.get_effect_filter(3);
      if (!this.is_displacement_filter(n)) {
        return;
      }
      return void (this.displacement_speed = r.a(0, 100, e));
    } catch (i) {
      return new a.a("Init displacement filter failed.");
    }
  };
  e.prototype.get_displacement = function () {
    return this.displacement_speed;
  };
  e.prototype.set_twist = function (e) {
    var t = this.get_effect_filter(4);
    if (this.is_twist_filter(t)) {
      this.twist_angle = r.a(0, 100, e);
      t.angle = o.b(10 * this.twist_angle);
      t.radius = Math.sqrt(Math.pow(this.target_sprite.width / 2, 2) + Math.pow(this.target_sprite.height / 2, 2));
      this.update_twist_offset();
    }
  };
  e.prototype.get_twist = function () {
    return this.twist_angle;
  };
  e.prototype.set_ascii = function (e) {
    var t = this.get_effect_filter(6);
    if (this.is_ascii_filter(t)) {
      var n = Math.min(this.target_sprite.width, this.target_sprite.height);
      this.ascii_size = r.a(1, n, e);
      t.size = this.ascii_size;
    }
  };
  e.prototype.get_ascii = function () {
    return this.ascii_size;
  };
  e.prototype.reset_default_value = function (e) {
    switch (e) {
      case 0:
        this.hue_degree = 0;
        break;
      case 1:
        this.brightness = 100;
        break;
      case 5:
        this.saturation = 0;
        break;
      case 2:
        this.pixelate_size = 0;
        break;
      case 3:
        this.displacement_speed = 0;
        break;
      case 4:
        this.twist_angle = 0;
        break;
      case 6:
        this.ascii_size = 0;
    }
  };
  e.prototype.disable_effects = function () {
    var e = this;
    this.effect_filter_list.forEach(function (t, n) {
      if (t) {
        t.enabled = false;
        e.reset_default_value(n);
      }
    });
  };
  e.prototype.remove_effects = function () {
    var e = this;
    this.effect_filter_list.forEach(function (t, n) {
      e.reset_default_value(n);
      if (3 === n) {
        e.app.get_app().ticker.remove(e.update_displacement_position);
      }
    });
    this.effect_filter_list = [];
    this.update_target_filter();
  };
  e.prototype.clone_to = function (e) {
    var t = this;
    var n = e.get_effects();
    var r = n.value;
    if (!n.is_error(r)) {
      this.effect_filter_list.forEach(function (e, n) {
        if (e && e.enabled) {
          switch (n) {
            case 0:
              r.set_hue(t.hue_degree);
              break;
            case 1:
              r.set_brightness(t.brightness);
              break;
            case 5:
              r.set_saturate(t.saturation);
              break;
            case 2:
              r.set_pixelate(t.pixelate_size);
              break;
            case 3:
              r.set_displacement(t.displacement_speed, t.displacement_img);
              break;
            case 4:
              r.set_twist(t.twist_angle);
              break;
            case 6:
              r.set_ascii(t.ascii_size);
          }
        }
      });
    }
  };
  return e;
}();
export default s;