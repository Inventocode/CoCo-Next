"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.WorkspaceAudio = void 0;
var r = require("../../1001/93");
var i = require("../../1001/134/index");
var o = require("../../125/index");
var a = require("../../125/474");
var s = require("../../4/127");
var c = function () {
  function e(e) {
    this.last_sound_ = void 0;
    this.SOUNDS_ = {};
    this.parent_workspace_ = e;
  }
  e.prototype.load = function (e, t) {
    if (e.length) {
      var n;
      var r;
      try {
        n = new window.Audio();
      } catch (s) {
        return;
      }
      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        var a = o.match(/\.(\w+)$/);
        if (a && n.canPlayType("audio/" + a[1])) {
          r = new window.Audio(o);
          break;
        }
      }
      if (r && r.play) {
        this.SOUNDS_[t] = r;
      }
    }
  };
  e.prototype.play = function (e, t) {
    var n = this.SOUNDS_[e];
    if (n) {
      var r = Date.now();
      if (void 0 != this.last_sound_ && r - this.last_sound_ < this.theme.blink_params.SOUND_LIMIT) {
        return;
      }
      this.last_sound_ = r;
      var i = void 0;
      (i = a.is.ie(9) || a.is.ipad() || a.is.android() ? n : (0, o.clone_node)(n)).volume = void 0 == t ? 1 : t;
      var s = i.play();
      if (s) {
        s.catch(function (e) {
          console.log(e);
        });
      }
    } else if (this.parent_workspace_) {
      var c = this.parent_workspace_.get_audio_manager();
      if (c) {
        c.play(e, t);
      }
    }
  };
  e.prototype.preload = function () {
    for (var e in this.SOUNDS_) {
      if (this.SOUNDS_[e].volume = .01, a.is.ipad() || a.is.iphone()) {
        break;
      }
    }
  };
  (0, r.__decorate)([(0, s.lazy_inject)(s.BINDING.theme)], e.prototype, "theme", void 0);
  return e = (0, r.__decorate)([(0, i.injectable)()], e);
}();
exports.WorkspaceAudio = c;