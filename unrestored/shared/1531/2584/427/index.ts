"use strict";

export { Ae as a };
var r = {};
Object.defineProperty(r, "notes", {
  get: function () {
    return se;
  }
});
Object.defineProperty(r, "instruments", {
  get: function () {
    return ce;
  }
});
Object.defineProperty(r, "set_instrument_by_id", {
  get: function () {
    return ue;
  }
});
Object.defineProperty(r, "beats_to_duration", {
  get: function () {
    return le;
  }
});
Object.defineProperty(r, "duration_to_beats", {
  get: function () {
    return fe;
  }
});
Object.defineProperty(r, "note_id_to_key", {
  get: function () {
    return de;
  }
});
Object.defineProperty(r, "note_key_to_id", {
  get: function () {
    return he;
  }
});
Object.defineProperty(r, "play", {
  get: function () {
    return pe;
  }
});
Object.defineProperty(r, "midi_stop", {
  get: function () {
    return _e;
  }
});
var i = {
  "sound_player/ios_webm_error": "\u8be5\u8bbe\u5907\u6682\u65f6\u4e0d\u652f\u6301\u64ad\u653e\u5f55\u97f3\u97f3\u9891",
  "sound_player/block_no_network": "\u65e0\u7f51\u7edc\u8fde\u63a5\uff0c\u4f5c\u54c1\u4e2d\u4e00\u4e9b\u79ef\u6728\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c",
  "voice_detection/not_found_error": "\u65e0\u5f55\u97f3\u8bbe\u5907\uff0c\u65e0\u6cd5\u8fdb\u884c\u4fa6\u6d4b",
  "voice_detection/pc_permission_error": "\u672a\u5f00\u542f\u58f0\u97f3\u4fa6\u6d4b\u6743\u9650\uff0c\u5feb\u53bb\u8bbe\u7f6e\u5427",
  "voice_detection/no_supported_error": "\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5f55\u97f3\uff0c\u5efa\u8bae\u4e0b\u8f7d\u6700\u65b0\u7684\u8c37\u6b4c\u6d4f\u89c8\u5668",
  "voice_detection/ios_wechat_error": "\u5fae\u4fe1\u7aef\u6682\u4e0d\u652f\u6301\u58f0\u97f3\u4fa6\u6d4b\u529f\u80fd\uff0c\u53ef\u4ee5\u5728safari\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u4f5c\u54c1",
  "voice_detection/ios_permission_error": "\u672a\u83b7\u53d6\u5230\u5f55\u97f3\u6743\u9650",
  "voice_detection/ios_version_error": "\u7cfb\u7edf\u7248\u672c\u592a\u4f4e\uff0c\u65e0\u6cd5\u4f7f\u7528\u58f0\u97f3\u4fa6\u6d4b",
  "voice_detection/android_permission_error": "\u672a\u83b7\u53d6\u5230\u5f55\u97f3\u6743\u9650\uff0c\u5efa\u8bae\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u6253\u5f00",
  "record_error/pc_browser_not_support": "\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5f55\u97f3\uff0c\u5efa\u8bae\u4e0b\u8f7d\u6700\u65b0\u7684\u8c37\u6b4c\u6d4f\u89c8\u5668",
  "record_error/device_error": "\u4f60\u7684\u7535\u8111\u6ca1\u6709\u5f55\u97f3\u8bbe\u5907\uff0c\u65e0\u6cd5\u5f55\u97f3",
  "record_error/pc_permission_error": "\u9700\u8981\u5f00\u542f\u6d4f\u89c8\u5668\u5f55\u97f3\u8bbe\u5907",
  "record_error/pc_other_case": "\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5f55\u97f3",
  "record_error/ios_permission_error": "\u672a\u83b7\u5f97\u5f55\u97f3\u6743\u9650",
  "record_error/ios_other_case": "\u4f60\u7684\u8bbe\u5907\u4e0d\u652f\u6301\u5f55\u97f3",
  "record_error/android_permission_error": "\u672a\u83b7\u53d6\u5230\u5f55\u97f3\u6743\u9650\uff0c\u5efa\u8bae\u7528\u5fae\u4fe1\u626b\u4e00\u626b\u6253\u5f00",
  "record_error/android_other_case": "\u4f60\u7684\u8bbe\u5907\u4e0d\u652f\u6301\u5f55\u97f3",
  "say/not_support": "\u8be5\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8bf4\u6b64\u7c7b\u8bed\u8a00"
};
function o(e) {
  return i[e] ? i[e] : e;
}
var a;
var s;
var c = require("../31/index");
function u(e, t) {
  if (a) {
    a({
      type: t,
      content: e
    });
  }
}
function l() {
  return "pc" === (navigator.userAgent.indexOf("iPad") >= 0 || navigator.userAgent.indexOf("iPhone") >= 0 ? "ios" : navigator.userAgent.indexOf("Android") >= 0 ? "android" : "pc");
}
function f() {
  return !l() && (screen.width < 425 || screen.height < 425 || navigator.userAgent.indexOf("iPhone") >= 0 || navigator.userAgent.indexOf("Android") >= 0 && navigator.userAgent.indexOf("Mobile") >= 0) && navigator.userAgent.indexOf("iPhone") >= 0;
}
var d = {
  audio_recording: !1
};
function h() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  window.URL = window.URL || window.webkitURL;
  if (AudioContext && (navigator.getUserMedia || navigator.mediaDevices && navigator.mediaDevices.getUserMedia) && URL) {
    d.audio_recording = !0;
  }
  return d;
}
function p() {
  return navigator.userAgent.indexOf("iPad") >= 0 || navigator.userAgent.indexOf("iPhone") >= 0 ? "ios" : navigator.userAgent.indexOf("Android") >= 0 ? "android" : "pc";
}
function _() {
  return "pc" === p();
}
function A() {
  return "ios" === p();
}
function g() {
  return "android" === p();
}
var v = require("./1462");
function m() {
  var e;
  var t;
  var n;
  var r = 0;
  var i = [];
  var o = this;
  function a() {
    for (var e = 0; e < n; e++) {
      i[e] = [];
    }
  }
  function s(e, t) {
    for (var n = new Float32Array(t), r = 0, i = 0; i < e.length; i++) {
      n.set(e[i], r);
      r += e[i].length;
    }
    return n;
  }
  function c(e, t, n) {
    for (var r = 0; r < n.length; r++) {
      e.setUint8(t + r, n.charCodeAt(r));
    }
  }
  o.onmessage = function (u) {
    switch (u.data.command) {
      case "init":
        l = u.data.config;
        if (__DEV__) {
          console.log("WAV Encoding worker init:", l);
        }
        e = l.record_sample_rate;
        n = l.num_channels;
        t = l.target_sample_rate;
        a();
        break;
      case "record":
        !function (e) {
          for (var t = 0; t < n; t++) {
            i[t].push(e[t]);
          }
          r += e[0].length;
        }(u.data.buffer);
        break;
      case "exportWAV":
        !function (a) {
          for (var u, l = [], f = 0; f < n; f++) {
            l.push(s(i[f], r));
          }
          u = 2 === n ? function (e, t) {
            var n = e.length + t.length;
            var r = new Float32Array(n);
            var i = 0;
            var o = 0;
            for (; i < n;) {
              r[i++] = e[o];
              r[i++] = t[o];
              o++;
            }
            return r;
          }(l[0], l[1]) : l[0];
          var d = function (e) {
            var r = new ArrayBuffer(44 + 2 * e.length);
            var i = new DataView(r);
            c(i, 0, "RIFF");
            i.setUint32(4, 36 + 2 * e.length, !0);
            c(i, 8, "WAVE");
            c(i, 12, "fmt ");
            i.setUint32(16, 16, !0);
            i.setUint16(20, 1, !0);
            i.setUint16(22, n, !0);
            i.setUint32(24, t, !0);
            i.setUint32(28, 4 * t, !0);
            i.setUint16(32, 2 * n, !0);
            i.setUint16(34, 16, !0);
            c(i, 36, "data");
            i.setUint32(40, 2 * e.length, !0);
            (function (e, t, n) {
              for (var r = 0; r < n.length; r++, t += 2) {
                var i = Math.max(-1, Math.min(1, n[r]));
                e.setInt16(t, i < 0 ? 32768 * i : 32767 * i, !0);
              }
            })(i, 44, e);
            return i;
          }(function (n) {
            if (t == e) {
              return n;
            }
            if (t > e) {
              throw new Error("downsampling rate show be smaller than original sample rate");
            }
            var r = e / t;
            var i = Math.round(n.length / r);
            var o = new Float32Array(i);
            var a = 0;
            var s = 0;
            for (; a < o.length;) {
              for (var c = Math.round((a + 1) * r), u = 0, l = 0, f = s; f < c && f < n.length; f++) {
                u += n[f];
                l++;
              }
              o[a] = u / l;
              a++;
              s = c;
            }
            return o;
          }(u));
          var h = new Blob([d], {
            type: a
          });
          o.postMessage({
            command: "exportWAV",
            data: h
          });
        }(u.data.mime_type);
        break;
      case "getBuffer":
        !function () {
          for (var e = [], t = 0; t < n; t++) {
            e.push(s(i[t], r));
          }
          o.postMessage({
            command: "getBuffer",
            data: e
          });
        }();
        break;
      case "clear":
        r = 0;
        i = [];
        a();
    }
    var l;
  };
}
var y;
var b;
var w;
var E;
var x;
var C = function () {
  function e(e, t) {
    var n = this;
    this.config = {
      buffer_len: 4096,
      num_channels: 2,
      sample_rate: 44100,
      mime_type: "audio/wav"
    };
    this._state = "inactive";
    this.callbacks = {
      getBuffer: [],
      exportWAV: []
    };
    Object(c.assign)(this.config, t);
    this.context = e.context;
    this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.buffer_len, this.config.num_channels, this.config.num_channels);
    this.node.onaudioprocess = function (e) {
      if ("recording" === n._state) {
        for (var t = [], r = 0; r < n.config.num_channels; r++) {
          t.push(e.inputBuffer.getChannelData(r));
        }
        n.worker.postMessage({
          command: "record",
          buffer: t
        });
      }
    };
    e.connect(this.node);
    this.node.connect(this.context.destination);
    this.worker = new v(m, {});
    this.worker.postMessage({
      command: "init",
      config: {
        record_sample_rate: this.context.sampleRate,
        num_channels: this.config.num_channels,
        target_sample_rate: this.config.sample_rate
      }
    });
    this.worker.onmessage = function (e) {
      if (__DEV__) {
        console.log("WAV Recorder onmessage:", e.data);
      }
      var t = n.callbacks[e.data.command].pop();
      if ("function" == typeof t) {
        t(e.data.data);
      }
    };
  }
  Object.defineProperty(e.prototype, "state", {
    get: function () {
      return this._state;
    },
    enumerable: !0,
    configurable: !0
  });
  e.prototype.start = function () {
    this.clear();
    this._state = "recording";
    this.record();
  };
  e.prototype.record = function () {
    this._state = "recording";
  };
  e.prototype.stop = function (e) {
    this._state = "inactive";
    this.export_wav(e);
  };
  e.prototype.clear = function () {
    this.worker.postMessage({
      command: "clear"
    });
  };
  e.prototype.getBuffer = function (e) {
    if (!(e = e || this.config.callback)) {
      throw new Error("Callback not set");
    }
    this.callbacks.getBuffer.push(e);
    this.worker.postMessage({
      command: "getBuffer"
    });
  };
  e.prototype.export_wav = function (e, t) {
    if (t = t || this.config.mime_type, !(e = e || this.config.callback)) {
      throw new Error("Callback not set");
    }
    this.callbacks.exportWAV.push(e);
    this.worker.postMessage({
      command: "exportWAV",
      mime_type: t
    });
  };
  return e;
}();
var O = function (e, t, n, r) {
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
      if (e.done) {
        i(e.value);
      } else {
        new n(function (t) {
          t(e.value);
        }).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var k = function (e, t) {
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
(function () {
  function e(e) {
    this.stream = void 0;
    this.audio_context = void 0;
    this.on_stop = void 0;
    this.sample_rate = 0;
    this.num_channels = 0;
    this.blob_chunks = [];
    if (__DEV__) {
      console.log("Recorder Init:", e);
    }
    c.assign(this, e);
    if (__DEV__) {
      console.log("Recorder Init with SampleRate:", this.sample_rate);
    }
  }
  e.prototype.init = function (e) {
    return O(this, void 0, void 0, function () {
      var t;
      var n;
      var r;
      var i;
      var o = this;
      return k(this, function (a) {
        switch (a.label) {
          case 0:
            if (t = h(), n = {
              audio: e || !0
            }, !t.audio_recording) {
              throw _() ? this.recorder_noticer("record_error/pc_browser_not_support") : g() ? this.recorder_noticer("record_error/android_permission_error") : A() && this.recorder_noticer("record_error/ios_permission_error"), new ReferenceError("Browser not supported.");
            }
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
              return [3, 5];
            }
            a.label = 1;
          case 1:
            a.trys.push([1, 3,, 4]);
            return [4, navigator.mediaDevices.getUserMedia(n)];
          case 2:
            r = a.sent();
            return [2, this.create_recorder(r)];
          case 3:
            throw i = a.sent(), this.check_failed(i), i;
          case 4:
            return [3, 6];
          case 5:
            return [2, new Promise(function (e, t) {
              navigator.getUserMedia(n, function (t) {
                e(o.create_recorder(t));
              }, function (e) {
                o.check_failed(e);
                t(e);
              });
            })];
          case 6:
            return [2];
        }
      });
    });
  };
  e.prototype.create_recorder = function (e, t) {
    var n;
    var r = this;
    if (this.stream = e, "undefined" === typeof MediaRecorder || this.sample_rate || this.num_channels) {
      if (__DEV__) {
        console.log("Use fallback recorder.");
      }
      return this.create_fallback_recorder(e);
    }
    if (MediaRecorder.isTypeSupported("audio/webm")) {
      n = "audio/webm";
    }
    var i = new MediaRecorder(e, {
      mimeType: n
    });
    this.media_stream_recorder = i;
    this.media_stream_recorder.ondataavailable = function (e) {
      r.blob_chunks.push(e.data);
    };
    this.media_stream_recorder.onstop = function () {
      if (!r.media_stream_recorder) {
        throw new Error("Recorder not found!");
      }
      if (r.media_stream_recorder instanceof MediaRecorder) {
        if (r.on_stop) {
          var e = new Blob(r.blob_chunks, {
            type: r.media_stream_recorder.mimeType
          });
          r.on_stop(e);
          r.blob_chunks.length = 0;
        }
        delete r.media_stream_recorder;
        r.dispose().then(function () {
          if (__DEV__) {
            console.log("Stop Recording: Disposed");
          }
        }).catch(function (e) {
          throw e;
        });
      }
    };
    return this.media_stream_recorder;
  };
  e.prototype.create_fallback_recorder = function (e) {
    var t = this;
    this.audio_context = new AudioContext();
    var n = this.audio_context.createMediaStreamSource(e);
    var r = {
      num_channels: this.num_channels,
      sample_rate: this.sample_rate,
      callback: function (e) {
        if (t.on_stop) {
          t.on_stop(e);
          if (t.media_stream_recorder instanceof C) {
            if (t.media_stream_recorder.worker) {
              t.media_stream_recorder.worker.terminate();
            }
            if (t.stream) {
              t.stream.getTracks()[0].stop();
            }
          }
        }
        t.remove_recorder();
      }
    };
    this.media_stream_recorder = new C(n, r);
    return this.media_stream_recorder;
  };
  e.prototype.start_recording = function () {
    return O(this, void 0, void 0, function () {
      return k(this, function (e) {
        switch (e.label) {
          case 0:
            return this.media_stream_recorder ? [3, 2] : [4, this.init()];
          case 1:
            e.sent();
            e.label = 2;
          case 2:
            return this.media_stream_recorder ? (this.media_stream_recorder.start(), [2]) : (console.warn("Recorder not prepared."), [2]);
        }
      });
    });
  };
  e.prototype.stop_recording = function () {
    if (this.media_stream_recorder) {
      this.media_stream_recorder.stop();
    } else {
      console.warn("You are not recording.");
    }
  };
  e.prototype.check_failed = function (e) {
    switch (__DEV__ && console.warn(e.name), e.name) {
      case "DevicesNotFoundError":
      case "NotFoundError":
        this.recorder_noticer("record_error/device_error");
        break;
      case "PermissionDeniedError":
      case "PermissionDismissedError":
      case "NotAllowedError":
        if (_()) {
          this.recorder_noticer("record_error/pc_permission_error");
        } else {
          if (g()) {
            this.recorder_noticer("record_error/android_permission_error");
          } else {
            if (A()) {
              this.recorder_noticer("record_error/ios_permission_error");
            }
          }
        }
        break;
      default:
        if (_()) {
          this.recorder_noticer("record_error/pc_other_case");
        } else {
          if (g()) {
            this.recorder_noticer("record_error/android_other_case");
          } else {
            if (A()) {
              this.recorder_noticer("record_error/ios_other_case");
            }
          }
        }
    }
  };
  e.prototype.recorder_noticer = function (e) {
    u(o(e), "error");
  };
  e.prototype.if_recorder_work = function () {
    return !!this.media_stream_recorder;
  };
  e.prototype.is_recording = function () {
    if (this.media_stream_recorder) {
      return "recording" === this.media_stream_recorder.state;
    }
  };
  e.prototype.dispose = function () {
    return O(this, void 0, void 0, function () {
      return k(this, function (e) {
        switch (e.label) {
          case 0:
            return this.audio_context ? [4, this.audio_context.close()] : [3, 2];
          case 1:
            e.sent();
            delete this.audio_context;
            e.label = 2;
          case 2:
            if (this.stream) {
              this.stream.getTracks()[0].stop();
              delete this.stream;
            }
            return [2];
        }
      });
    });
  };
  e.prototype.remove_recorder = function () {
    delete this.media_stream_recorder;
    this.dispose().then(function () {
      if (__DEV__) {
        console.log("Stop Recording: Disposed");
      }
    }).catch(function (e) {
      throw e;
    });
  };
})();
var S = function (e, t, n, r) {
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
      if (e.done) {
        i(e.value);
      } else {
        new n(function (t) {
          t(e.value);
        }).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
};
var T = function (e, t) {
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
var B = !1;
var D = !1;
var I = void 0;
function F(e) {
  return S(this, void 0, void 0, function () {
    var t;
    return T(this, function (n) {
      if (!y) {
        y = new AudioContext();
      }
      return e ? D ? (__DEV__ && console.warn("Volume measurement is already running."), [2]) : (D = !0, E ? (E(e), [2]) : B ? (__DEV__ && console.warn("Volume measurement is already initialized."), [2, y.resume()]) : (t = {
        video: !1,
        audio: !0
      }, h().audio_recording ? (y && (w = (y.createScriptProcessor || y.createJavaScriptNode).call(y, 1024, 1, 1)).connect(y.destination), navigator.mediaDevices.getUserMedia(t).then(function (t) {
        if (y) {
          b = y.createMediaStreamSource(t);
          I = t;
          var n = y.createAnalyser();
          n.fftSize = 1024;
          n.smoothingTimeConstant = .5;
          w.onaudioprocess = function () {
            var t = new Uint8Array(n.frequencyBinCount);
            n.getByteFrequencyData(t);
            if (e) {
              e(Object(c.round)(Object(c.mean)(t)));
            }
          };
          b.connect(w);
          b.connect(n);
          B = !0;
        }
      }).catch(function (e) {
        switch (e.name) {
          case "PermissionDeniedError":
          case "NotAllowedError":
            if (_()) {
              u(o("voice_detection/pc_permission_error"), "notice");
            } else {
              if (g()) {
                u(o("voice_detection/android_permission_error"), "notice");
              } else {
                if (A()) {
                  u(o("voice_detection/ios_permission_error"), "notice");
                }
              }
            }
            break;
          case "DevicesNotFoundError":
          case "NotFoundError":
            u(o("voice_detection/not_found_error"), "notice");
            break;
          default:
            u(e.name, "notice");
        }
        if (__DEV__) {
          console.log(e.name);
        }
      }), [2]) : (navigator.userAgent.indexOf("MicroMessenger") >= 0 ? u(o("voice_detection/ios_wechat_error"), "notice") : (f() || !f() && navigator.userAgent.indexOf("iPad") >= 0) && Number(function () {
        var e = navigator.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);
        return e ? e[1].split("_")[0] : 0;
      }()) < 11 ? u(o("voice_detection/ios_version_error"), "notice") : u(o("voice_detection/no_supported_error"), "notice"), __DEV__ && console.log("Browser not support getUserMedia."), [2]))) : [2];
    });
  });
}
function R() {
  return S(this, void 0, void 0, function () {
    return T(this, function (e) {
      switch (e.label) {
        case 0:
          D = !1;
          B = !1;
          return x ? (x(), [2]) : (I && I.getTracks()[0].stop(), b && (w && y && w.disconnect(y.destination), b.disconnect(), b = void 0), y ? [4, y.close()] : [3, 2]);
        case 1:
          e.sent();
          e.label = 2;
        case 2:
          y = void 0;
          return [2];
      }
    });
  });
}
var P = require("./779");
var N = require("./516/index");
var M = {};
var j = {};
var L = {};
function U(e, t, n) {
  if (void 0 === n) {
    n = !1;
  }
  var r = new P.Howl({
    src: t,
    html5: !1,
    format: ["mp3", "wav"]
  });
  if (n) {
    j[e] = r;
  } else {
    M[e] = r;
  }
  return r;
}
function H(e, t, n, r) {
  var i = N.v4();
  L[i] = i;
  var o = document.body;
  var a = document.createElement("audio");
  a.autoplay = !0;
  a.src = e;
  a.style.display = "none";
  a.setAttribute("id", "audio" + i);
  o.appendChild(a);
  a.addEventListener("error", function (e) {
    if (n) {
      n(e);
    }
  });
  a.addEventListener("ended", function (e) {
    if (t) {
      t(e);
    }
  });
  a.addEventListener("pause", function (e) {
    if (r) {
      r();
    }
  });
}
function V(e) {
  if (!e) {
    Object(c.forEach)(M, function (e) {
      e.stop();
    });
    Object(c.forEach)(j, function (e) {
      e.stop();
      e.unload();
    });
    Object(c.forEach)(L, function (e, t) {
      var n = document.getElementById("audio" + t);
      if (n) {
        n.pause();
      }
    });
    return void (L = {});
  }
  var t;
  if (j[e]) {
    (t = j[e]).stop();
    return void t.unload();
  }
  if (M[e]) {
    (t = M[e]).stop();
  } else {
    console.warn("Howl not Found");
  }
}
function G(e) {
  if (2 == e) {
    u(o("sound_player/block_no_network"), "notice");
  }
}
var z = {};
var Q = {};
var W = {};
function K(e, t, n) {
  if (void 0 === n) {
    n = !1;
  }
  var r = new P.Howl({
    src: t,
    html5: !0,
    format: ["mp3", "wav"]
  });
  if (n) {
    Q[e] = r;
  } else {
    z[e] = r;
  }
  return r;
}
function X(e, t, n, r, i) {
  var o = K(r || Object(N.v4)(), e, !0);
  if (o) {
    if ("loaded" === o.state()) {
      return void o.play();
    }
    o.once("load", function () {
      o.play();
    });
    o.once("loaderror", function (e, t) {
      console.error("Howl Error when Add Sound to Store:", t);
      q(t);
      if (n) {
        n();
      }
    });
    o.on("end", function () {
      if (t) {
        t();
      }
      o.unload();
    });
    o.once("stop", function () {
      if (i) {
        i();
      }
    });
  }
}
function Y(e) {
  if (!e) {
    Object(c.forEach)(z, function (e) {
      e.stop();
    });
    Object(c.forEach)(Q, function (e) {
      e.stop();
      e.unload();
    });
    Object(c.forEach)(W, function (e, t) {
      var n = document.getElementById("audio" + t);
      if (n) {
        n.pause();
      }
    });
    return void (W = {});
  }
  var t;
  if (Q[e]) {
    (t = Q[e]).stop();
    return void t.unload();
  }
  if (z[e]) {
    (t = z[e]).stop();
  } else {
    console.warn("Howl not Found");
  }
}
function q(e) {
  if (2 == e) {
    u(o("sound_player/block_no_network"), "notice");
  }
}
var $ = {};
var J = {};
var Z = {};
function ee(e, t, n) {
  if (void 0 === n) {
    n = !1;
  }
  var r = new P.Howl({
    src: t,
    html5: !1,
    format: ["mp3", "wav"]
  });
  if (n) {
    J[e] = r;
  } else {
    $[e] = r;
  }
  return r;
}
function te(e) {
  if (e) {
    if ("url" !== e) {
      var t = $[e] || J[e];
      if (t) {
        t.unload();
        delete $[e];
        delete J[e];
      } else {
        console.warn("Howl not Found");
      }
    } else {
      Object(c.forEach)(J, function (e, t) {
        e.unload();
        delete J[t];
      });
    }
  } else {
    console.warn("Sound id no found");
  }
}
function ne(e) {
  if (!e) {
    Object(c.forEach)($, function (e) {
      e.stop();
    });
    Object(c.forEach)(J, function (e) {
      e.stop();
      e.unload();
    });
    Object(c.forEach)(Z, function (e, t) {
      var n = document.getElementById("audio" + t);
      if (n) {
        n.pause();
      }
    });
    return void (Z = {});
  }
  var t;
  if (J[e]) {
    (t = J[e]).unload();
    return void t.stop();
  }
  if ($[e]) {
    (t = $[e]).stop();
  } else {
    console.warn("Howl not Found");
  }
}
function re(e) {
  if (2 == e) {
    u(o("sound_player/block_no_network"), "notice");
  }
}
function ie(e, t) {
  return _() ? function (e, t) {
    var n = $[e];
    if (n) {
      return n.rate(t);
    }
    console.warn("Howl not Found");
  }(e, t) : g() ? function (e, t) {
    var n = M[e];
    if (!n) {
      console.warn("Howl not Found");
    }
    return n.rate(t);
  }(e, t) : A() ? function (e, t) {
    var n = z[e];
    if (!n) {
      console.warn("Howl not Found");
    }
    return n.rate(t);
  }(e, t) : void 0;
}
function oe(e, t) {
  return _() ? function (e, t) {
    var n = $[e];
    if (n) {
      return n.volume(t);
    }
    console.warn("Howl not Found");
  }(e, t) : g() ? function (e, t) {
    var n = M[e];
    if (!n) {
      console.warn("Howl not Found");
    }
    return n.volume(t);
  }(e, t) : A() ? function (e, t) {
    var n = z[e];
    if (!n) {
      console.warn("Howl not Found");
    }
    return n.volume(t);
  }(e, t) : void 0;
}
var ae = {
  load: function (e, t, n) {
    if (void 0 === n) {
      n = !1;
    }
    return _() ? ee(e, t, n) : g() ? U(e, t, n) : A() ? K(e, t, n) : void 0;
  },
  unload: function (e) {
    if (_()) {
      te(e);
    } else {
      if (g()) {
        (function (e) {
          if (e) {
            if ("url" !== e) {
              var t = M[e];
              if (t) {
                t.unload();
                delete M[e];
              } else {
                console.warn("Howl not Found");
              }
            }
          } else {
            console.warn("Sound id no found");
          }
        })(e);
      } else {
        if (A()) {
          (function (e) {
            if (e) {
              if ("url" !== e) {
                var t = z[e];
                if (t) {
                  t.unload();
                  delete z[e];
                } else {
                  console.warn("Howl not Found");
                }
              }
            } else {
              console.warn("Sound id no found");
            }
          })(e);
        }
      }
    }
  },
  play: function (e, t, n, r) {
    if (_()) {
      (function (e, t, n, r) {
        var i = $[e];
        if (i) {
          if ("loaded" !== i.state()) {
            console.warn("Howl load fail");
            if (t) {
              t();
            }
          }
          var o = i.play();
          i.once("end", function () {
            if (t) {
              t();
            }
          }, o);
          i.once("loaderror", function (e, t) {
            console.error("Howler Load Error:", t);
            re(t);
            if (n) {
              n();
            }
          });
          i.once("stop", function () {
            if (r) {
              r();
            }
          });
        } else {
          console.warn("Howl not found");
        }
      })(e, t, n, r);
    } else {
      if (g()) {
        (function (e, t, n, r) {
          var i = M[e];
          if (!i) {
            console.warn("Howl not found");
            return void H(i._src, t, n, r);
          }
          if ("loaded" !== i.state()) {
            console.warn("Howl load fail");
            return void H(i._src, t, n, r);
          }
          var o = i.play();
          i.once("end", function () {
            if (t) {
              t();
            }
          }, o);
          i.once("stop", function () {
            if (r) {
              r();
            }
          });
          i.once("loaderror", function (e) {
            console.error("Howler Load Error:", e);
            G(e);
            if (n) {
              n();
            }
            H(i._src, t, n);
          });
        })(e, t, n, r);
      } else {
        if (A()) {
          (function (e, t, n, r) {
            console.log("play");
            var i = z[e];
            if (!i) {
              X(i._src, t, n);
              return void console.warn("Howl not found");
            }
            if ("loaded" !== i.state()) {
              console.warn("Howl load fail");
              X(i._src, t, n, void 0, r);
            }
            var o = i.play();
            i.once("end", function () {
              if (t) {
                t();
              }
            }, o);
            i.once("loaderror", function (e, o) {
              q(o);
              if (n) {
                n();
              }
              X(i._src, t, n, void 0, r);
            });
            i.once("stop", function () {
              if (r) {
                r();
              }
            });
          })(e, t, n, r);
        }
      }
    }
  },
  play_url: function (e, t, n, r, i) {
    if (_()) {
      (function (e, t, n, r, i) {
        var o = ee(r || Object(N.v4)(), e, !0);
        if ("loaded" === o.state()) {
          o.play();
        }
        o.once("load", function () {
          o.play();
        });
        o.once("end", function () {
          te(r);
          if (t) {
            t();
          }
        });
        o.once("stop", function () {
          if (i) {
            i();
          }
        });
        o.once("loaderror", function (e, t) {
          console.error("Howler Load Error:", t);
          re(t);
          if (n) {
            n();
          }
        });
      })(e, t, n, r, i);
    } else {
      if (g()) {
        (function (e, t, n, r, i) {
          var o = U(r || N.v4(), e, !0);
          if (o) {
            if ("loaded" === o.state()) {
              return void o.play();
            }
            o.once("load", function () {
              o.play();
            });
            o.once("loaderror", function (e, t) {
              console.error("Howl Error when Add Sound to Store:", t);
              G(t);
              if (n) {
                n();
              }
            });
            o.on("end", function () {
              if (t) {
                t();
              }
              o.unload();
            });
            o.once("stop", function () {
              if (i) {
                i();
              }
            });
          }
        })(e, t, n, r, i);
      } else {
        if (A()) {
          X(e, t, n, r, i);
        }
      }
    }
  },
  stop: function (e) {
    if (_()) {
      ne(e);
    } else {
      if (g()) {
        V(e);
      } else {
        if (A()) {
          Y(e);
        }
      }
    }
  },
  is_playing: function (e) {
    return _() ? function (e) {
      if (!e) {
        return Object(c.find)($, function (e) {
          return e.playing();
        });
      }
      if ("url" === e) {
        return Object(c.find)(J, function (e) {
          return e.playing();
        });
      }
      var t = $[e];
      if (t) {
        return t.playing();
      }
      console.warn("Howl not Found");
    }(e) : g() ? function (e) {
      if (!e) {
        return Object(c.find)(M, function (e) {
          return e.playing();
        });
      }
      if ("url" !== e) {
        var t = M[e];
        if (!t) {
          console.warn("Howl not Found");
        }
        return t.playing();
      }
    }(e) : A() ? function (e) {
      if (!e) {
        return Object(c.find)(z, function (e) {
          return e.playing();
        });
      }
      if ("url" !== e) {
        var t = z[e];
        if (!t) {
          console.warn("Howl not Found");
        }
        return t.playing();
      }
    }(e) : void 0;
  },
  set_rate: ie,
  set_volume: oe,
  stop_all_audio: function () {
    if (_()) {
      ne();
    } else {
      if (g()) {
        V();
      } else {
        if (A()) {
          Y();
        }
      }
    }
    R().catch(function (e) {
      console.error(e);
    });
  },
  reset_sound: function (e) {
    for (var t in e) {
      oe(e[t].id, e[t].volume);
      ie(e[t].id, e[t].playback_rate);
    }
  },
  get_volume: function (e) {
    return _() ? function (e) {
      return $[e].volume();
    }(e) : g() ? function (e) {
      return M[e].volume();
    }(e) : A() ? function (e) {
      return z[e].volume();
    }(e) : 0;
  },
  get_rate: function (e) {
    return _() ? function (e) {
      return $[e].rate();
    }(e) : g() ? function (e) {
      return M[e].rate();
    }(e) : A() ? function (e) {
      return z[e].rate();
    }(e) : 0;
  },
  get_howl: function (e) {
    return _() ? function (e) {
      if (void 0 != $[e]) {
        return $[e];
      }
    }(e) : g() ? function (e) {
      if (void 0 != M[e]) {
        return M[e];
      }
    }(e) : A() ? function (e) {
      if (void 0 != z[e]) {
        return z[e];
      }
    }(e) : void 0;
  },
  check_sound: function (e) {
    return _() ? function (e) {
      return void 0 !== $[e];
    }(e) : g() ? function (e) {
      return void 0 !== M[e];
    }(e) : A() ? function (e) {
      return void 0 !== z[e];
    }(e) : void 0;
  }
};
var se = ["A0", "Bb0", "B0", "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1", "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2", "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3", "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4", "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5", "C6", "Db6", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6", "C7", "Db7", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7", "C8"];
var ce = ["piano"];
function ue(e) {
  e;
}
function le(e) {
  return c.isNumber(e) ? 60 * e / 80 : 0;
}
function fe(e) {
  return e / 60 * 80;
}
function de(e) {
  return se[e];
}
function he(e) {
  return c.indexOf(se, e);
}
function pe(e, t) {
  var n = s + "/" + de(e) + ".mp3";
  var r = c.uniqueId("midi");
  var i = ae.load(r, n, !0);
  if (i) {
    if ("loaded" === i.state()) {
      var o = i.play();
      if (t) {
        var a = le(t);
        i.fade(1, .01, a < .2 ? 200 : 1e3 * a, o);
      }
      return;
    }
    i.once("load", function () {
      var e = i.play();
      if (t) {
        var n = le(t);
        i.fade(1, .01, n < .2 ? 200 : 1e3 * n, e);
      }
    });
    i.once("loaderror", function (e, t) {
      if (__DEV__) {
        console.error("Howl Error when Add Sound to Store:", t);
      }
    });
  }
  return r;
}
function _e(e) {
  ae.stop(e);
}
var Ae = {
  AudioPlayer: ae,
  MidiPlayer: r,
  start_volume_measuring: F,
  stop_volume_measuring: R
};
export default Ae;