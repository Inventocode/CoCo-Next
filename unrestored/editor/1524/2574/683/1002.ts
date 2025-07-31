"use strict";

export { u as a };
var r = require("./215/index");
var i = require("./34/index");
var o = require("./65");
var a = function () {
  var e = function (t, n) {
    return (e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (e, t) {
      e.__proto__ = t;
    } || function (e, t) {
      for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
        e[n] = t[n];
      }
    })(t, n);
  };
  return function (t, n) {
    function r() {
      this.constructor = t;
    }
    e(t, n);
    t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}();
var s = function (e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var c = function (e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
};
var u = function (e) {
  function t(t, n, a, s) {
    var c = e.call(this) || this;
    c.is_draggable = !0;
    c.is_origin_in_center = !1;
    c.drag_start = function (e) {
      if (c.is_draggable) {
        c.drag_data = {
          event_data: e.data,
          old_pos: e.data.getLocalPosition(c.parent)
        };
        c.emit_event("drag_start", void 0);
      }
    };
    c.drag_move = function () {
      if (c.is_draggable && c.drag_data) {
        var e = c.drag_data.event_data.getLocalPosition(c.parent);
        var t = c.app.get_app().view;
        var n = t.width;
        var o = t.height;
        e.set(Object(r.a)(-n / 2, n / 2, e.x), Object(r.a)(-o / 2, o / 2, e.y));
        var a = new i.o(c.position.x + e.x - c.drag_data.old_pos.x, c.position.y + e.y - c.drag_data.old_pos.y);
        c.drag_data.old_pos = e;
        var s = c.getBounds();
        var u = {
          left: 0,
          right: -s.width,
          top: 0,
          bottom: -s.height
        };
        if (c.is_origin_in_center) {
          u.left = s.width / 2;
          u.right = -s.width / 2;
          u.top = s.height / 2;
          u.bottom = -s.height / 2;
        }
        var l = -n / 2 + u.left;
        var f = n / 2 + u.right;
        var h = -o / 2 + u.top;
        var d = o / 2 + u.bottom;
        a.x = Object(r.a)(Math.min(l, f), Math.max(l, f), a.x);
        a.y = Object(r.a)(Math.min(h, d), Math.max(h, d), a.y);
        c.position.set(a.x, a.y);
        c.emit_event("change", {
          position: c.position
        });
        c.emit_event("drag_move", void 0);
        c.app.render();
      }
    };
    c.drag_end = function () {
      if (c.drag_data) {
        c.drag_data = void 0;
        c.app.render();
        if (c.is_draggable) {
          c.emit_event("drag_end", void 0);
        }
      }
    };
    c.on_break = function (e) {
      if (!(e && e !== c.id)) {
        c.drag_data = void 0;
      }
    };
    c.app = a;
    c.events = s;
    c.id = t;
    c.interactive = !0;
    c.setParent(n);
    c.addListener("mousedown", c.drag_start);
    c.addListener("mousemove", Object(o.w)(c.drag_move, o.a));
    c.addListener("mouseup", c.drag_end);
    c.addListener("mouseupoutside", c.drag_end);
    c.addListener("touchstart", c.drag_start);
    c.addListener("touchmove", Object(o.w)(c.drag_move, o.a));
    c.addListener("touchend", c.drag_end);
    c.addListener("touchendoutside", c.drag_end);
    c.events.event_emitter.addListener("break", c.on_break);
    c.app.get_app().stage.addListener("touchendoutside", c.drag_end);
    return c;
  }
  a(t, e);
  t.prototype.emit_event = function (e, t) {
    this.emit(e, t);
  };
  t.prototype.add_listener = function (e, t) {
    this.on(e, t);
  };
  t.prototype.remove_listener = function (e, t) {
    this.off(e, t);
  };
  t.prototype.load_texture = function (e) {
    return s(this, void 0, void 0, function () {
      var t;
      return c(this, function (n) {
        return e && i.B.TextureCache[e] ? [2, i.B.TextureCache[e]] : e && i.B.BaseTextureCache[e] ? [2, new i.y(i.B.BaseTextureCache[e])] : (t = e ? i.y.from(e) : i.y.EMPTY).valid ? [2, t] : [2, new Promise(function (e, n) {
          t.baseTexture.on("loaded", function () {
            e(t);
          });
          t.baseTexture.on("update", function () {
            e(t);
          });
          t.baseTexture.on("error", function (e) {
            t.destroy(!0);
            n(e);
          });
        })];
      });
    });
  };
  t.prototype.set_origin_in_center = function (e) {
    this.is_origin_in_center = e;
  };
  t.prototype.set_draggable = function (e) {
    this.is_draggable = e;
    this.emit_event("change", {
      draggable: this.is_draggable
    });
  };
  t.prototype.set_visible = function (e) {
    this.visible = e;
    this.emit_event("change", {
      visible: this.visible
    });
  };
  t.prototype.get_draggable = function () {
    return this.is_draggable;
  };
  t.prototype.get_visible = function () {
    return this.visible;
  };
  t.prototype.get_size = function () {
    return {
      width: this.width,
      height: this.height
    };
  };
  t.prototype.is_dragging = function () {
    return !!this.drag_data;
  };
  t.prototype.destroy = function (t) {
    this.emit_event("destroy", void 0);
    e.prototype.destroy.call(this, t);
    this.events.event_emitter.removeListener("break", this.on_break);
  };
  return t;
}(i.f);
export default u;