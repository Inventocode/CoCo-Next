"use strict";

export { p as a };
import * as r from "../248";
import * as i from "../581";
import * as o from "../164";
import * as a from "../582";
import * as s from "../56";
import * as u from "../37";
import * as c from "./585";
import * as l from "./586";
var d = function (t, e, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(t) {
      try {
        u(r.next(t));
      } catch (e) {
        o(e);
      }
    }
    function s(t) {
      try {
        u(r.throw(t));
      } catch (e) {
        o(e);
      }
    }
    function u(t) {
      var e;
      if (t.done) {
        i(t.value);
      } else {
        (e = t.value, e instanceof n ? e : new n(function (t) {
          t(e);
        })).then(a, s);
      }
    }
    u((r = r.apply(t, e || [])).next());
  });
};
var f = function (t, e) {
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
            n = 1;
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
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
            o = e.call(t, a);
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
var h = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var n = e && t[e];
  var r = 0;
  if (n) {
    return n.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && r >= t.length) {
          t = void 0;
        }
        return {
          value: t && t[r++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var p = function () {
  function t(t, e, n) {
    if (void 0 === e) {
      e = 500;
    }
    this.reader = t;
    this.timeBetweenScansMillis = e;
    this._hints = n;
    this._stopContinuousDecode = !1;
    this._stopAsyncDecode = !1;
    this._timeBetweenDecodingAttempts = 0;
  }
  Object.defineProperty(t.prototype, "hasNavigator", {
    get: function () {
      return "undefined" !== typeof navigator;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "isMediaDevicesSuported", {
    get: function () {
      return this.hasNavigator && !!navigator.mediaDevices;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "canEnumerateDevices", {
    get: function () {
      return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "timeBetweenDecodingAttempts", {
    get: function () {
      return this._timeBetweenDecodingAttempts;
    },
    set: function (t) {
      this._timeBetweenDecodingAttempts = t < 0 ? 0 : t;
    },
    enumerable: !1,
    configurable: !0
  });
  Object.defineProperty(t.prototype, "hints", {
    get: function () {
      return this._hints;
    },
    set: function (t) {
      this._hints = t || null;
    },
    enumerable: !1,
    configurable: !0
  });
  t.prototype.listVideoInputDevices = function () {
    return d(this, void 0, void 0, function () {
      var t;
      var e;
      var n;
      var r;
      var i;
      var o;
      var a;
      var s;
      var u;
      var c;
      var l;
      var d;
      return f(this, function (f) {
        switch (f.label) {
          case 0:
            if (!this.hasNavigator) {
              throw new Error("Can't enumerate devices, navigator is not present.");
            }
            if (!this.canEnumerateDevices) {
              throw new Error("Can't enumerate devices, method not supported.");
            }
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            t = f.sent();
            e = [];
            try {
              for (n = h(t), r = n.next(); !r.done; r = n.next()) {
                i = r.value;
                if ("videoinput" === (o = "video" === i.kind ? "videoinput" : i.kind)) {
                  a = i.deviceId || i.id;
                  s = i.label || "Video device " + (e.length + 1);
                  u = i.groupId;
                  c = {
                    deviceId: a,
                    label: s,
                    kind: o,
                    groupId: u
                  };
                  e.push(c);
                }
              }
            } catch (p) {
              l = {
                error: p
              };
            } finally {
              try {
                if (r && !r.done && (d = n.return)) {
                  d.call(n);
                }
              } finally {
                if (l) {
                  throw l.error;
                }
              }
            }
            return [2, e];
        }
      });
    });
  };
  t.prototype.getVideoInputDevices = function () {
    return d(this, void 0, void 0, function () {
      return f(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return [2, t.sent().map(function (t) {
              return new l.a(t.deviceId, t.label);
            })];
        }
      });
    });
  };
  t.prototype.findDeviceById = function (t) {
    return d(this, void 0, void 0, function () {
      var e;
      return f(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return (e = n.sent()) ? [2, e.find(function (e) {
              return e.deviceId === t;
            })] : [2, null];
        }
      });
    });
  };
  t.prototype.decodeFromInputVideoDevice = function (t, e) {
    return d(this, void 0, void 0, function () {
      return f(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.decodeOnceFromVideoDevice(t, e)];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoDevice = function (t, e) {
    return d(this, void 0, void 0, function () {
      var n;
      return f(this, function (r) {
        switch (r.label) {
          case 0:
            this.reset();
            n = {
              video: t ? {
                deviceId: {
                  exact: t
                }
              } : {
                facingMode: "environment"
              }
            };
            return [4, this.decodeOnceFromConstraints(n, e)];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromConstraints = function (t, e) {
    return d(this, void 0, void 0, function () {
      var n;
      return f(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t)];
          case 1:
            n = r.sent();
            return [4, this.decodeOnceFromStream(n, e)];
          case 2:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromStream = function (t, e) {
    return d(this, void 0, void 0, function () {
      var n;
      return f(this, function (r) {
        switch (r.label) {
          case 0:
            this.reset();
            return [4, this.attachStreamToVideo(t, e)];
          case 1:
            n = r.sent();
            return [4, this.decodeOnce(n)];
          case 2:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromInputVideoDeviceContinuously = function (t, e, n) {
    return d(this, void 0, void 0, function () {
      return f(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.decodeFromVideoDevice(t, e, n)];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromVideoDevice = function (t, e, n) {
    return d(this, void 0, void 0, function () {
      var r;
      return f(this, function (i) {
        switch (i.label) {
          case 0:
            r = {
              video: t ? {
                deviceId: {
                  exact: t
                }
              } : {
                facingMode: "environment"
              }
            };
            return [4, this.decodeFromConstraints(r, e, n)];
          case 1:
            return [2, i.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromConstraints = function (t, e, n) {
    return d(this, void 0, void 0, function () {
      var r;
      return f(this, function (i) {
        switch (i.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t)];
          case 1:
            r = i.sent();
            return [4, this.decodeFromStream(r, e, n)];
          case 2:
            return [2, i.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromStream = function (t, e, n) {
    return d(this, void 0, void 0, function () {
      var r;
      return f(this, function (i) {
        switch (i.label) {
          case 0:
            this.reset();
            return [4, this.attachStreamToVideo(t, e)];
          case 1:
            r = i.sent();
            return [4, this.decodeContinuously(r, n)];
          case 2:
            return [2, i.sent()];
        }
      });
    });
  };
  t.prototype.stopAsyncDecode = function () {
    this._stopAsyncDecode = !0;
  };
  t.prototype.stopContinuousDecode = function () {
    this._stopContinuousDecode = !0;
  };
  t.prototype.attachStreamToVideo = function (t, e) {
    return d(this, void 0, void 0, function () {
      var n;
      return f(this, function (r) {
        switch (r.label) {
          case 0:
            n = this.prepareVideoElement(e);
            this.addVideoSource(n, t);
            this.videoElement = n;
            this.stream = t;
            return [4, this.playVideoOnLoadAsync(n)];
          case 1:
            r.sent();
            return [2, n];
        }
      });
    });
  };
  t.prototype.playVideoOnLoadAsync = function (t) {
    var e = this;
    return new Promise(function (n, r) {
      return e.playVideoOnLoad(t, function () {
        return n();
      });
    });
  };
  t.prototype.playVideoOnLoad = function (t, e) {
    var n = this;
    this.videoEndedListener = function () {
      return n.stopStreams();
    };
    this.videoCanPlayListener = function () {
      return n.tryPlayVideo(t);
    };
    t.addEventListener("ended", this.videoEndedListener);
    t.addEventListener("canplay", this.videoCanPlayListener);
    t.addEventListener("playing", e);
    this.tryPlayVideo(t);
  };
  t.prototype.isVideoPlaying = function (t) {
    return t.currentTime > 0 && !t.paused && !t.ended && t.readyState > 2;
  };
  t.prototype.tryPlayVideo = function (t) {
    return d(this, void 0, void 0, function () {
      return f(this, function (e) {
        switch (e.label) {
          case 0:
            if (this.isVideoPlaying(t)) {
              console.warn("Trying to play video that is already playing.");
              return [2];
            }
            e.label = 1;
          case 1:
            e.trys.push([1, 3,, 4]);
            return [4, t.play()];
          case 2:
            e.sent();
            return [3, 4];
          case 3:
            e.sent();
            console.warn("It was not possible to play the video.");
            return [3, 4];
          case 4:
            return [2];
        }
      });
    });
  };
  t.prototype.getMediaElement = function (t, e) {
    var n = document.getElementById(t);
    if (!n) {
      throw new r.a("element with id '" + t + "' not found");
    }
    if (n.nodeName.toLowerCase() !== e.toLowerCase()) {
      throw new r.a("element with id '" + t + "' must be an " + e + " element");
    }
    return n;
  };
  t.prototype.decodeFromImage = function (t, e) {
    if (!t && !e) {
      throw new r.a("either imageElement with a src set or an url must be provided");
    }
    return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t);
  };
  t.prototype.decodeFromVideo = function (t, e) {
    if (!t && !e) {
      throw new r.a("Either an element with a src set or an URL must be provided");
    }
    return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t);
  };
  t.prototype.decodeFromVideoContinuously = function (t, e, n) {
    if (void 0 === t && void 0 === e) {
      throw new r.a("Either an element with a src set or an URL must be provided");
    }
    return e && !t ? this.decodeFromVideoUrlContinuously(e, n) : this.decodeFromVideoElementContinuously(t, n);
  };
  t.prototype.decodeFromImageElement = function (t) {
    if (!t) {
      throw new r.a("An image element must be provided.");
    }
    this.reset();
    var e = this.prepareImageElement(t);
    this.imageElement = e;
    return this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e);
  };
  t.prototype.decodeFromVideoElement = function (t) {
    var e = this._decodeFromVideoElementSetup(t);
    return this._decodeOnLoadVideo(e);
  };
  t.prototype.decodeFromVideoElementContinuously = function (t, e) {
    var n = this._decodeFromVideoElementSetup(t);
    return this._decodeOnLoadVideoContinuously(n, e);
  };
  t.prototype._decodeFromVideoElementSetup = function (t) {
    if (!t) {
      throw new r.a("A video element must be provided.");
    }
    this.reset();
    var e = this.prepareVideoElement(t);
    this.videoElement = e;
    return e;
  };
  t.prototype.decodeFromImageUrl = function (t) {
    if (!t) {
      throw new r.a("An URL must be provided.");
    }
    this.reset();
    var e = this.prepareImageElement();
    this.imageElement = e;
    var n = this._decodeOnLoadImage(e);
    e.src = t;
    return n;
  };
  t.prototype.decodeFromVideoUrl = function (t) {
    if (!t) {
      throw new r.a("An URL must be provided.");
    }
    this.reset();
    var e = this.prepareVideoElement();
    var n = this.decodeFromVideoElement(e);
    e.src = t;
    return n;
  };
  t.prototype.decodeFromVideoUrlContinuously = function (t, e) {
    if (!t) {
      throw new r.a("An URL must be provided.");
    }
    this.reset();
    var n = this.prepareVideoElement();
    var i = this.decodeFromVideoElementContinuously(n, e);
    n.src = t;
    return i;
  };
  t.prototype._decodeOnLoadImage = function (t) {
    var e = this;
    return new Promise(function (n, r) {
      e.imageLoadedListener = function () {
        return e.decodeOnce(t, !1, !0).then(n, r);
      };
      t.addEventListener("load", e.imageLoadedListener);
    });
  };
  t.prototype._decodeOnLoadVideo = function (t) {
    return d(this, void 0, void 0, function () {
      return f(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t)];
          case 1:
            e.sent();
            return [4, this.decodeOnce(t)];
          case 2:
            return [2, e.sent()];
        }
      });
    });
  };
  t.prototype._decodeOnLoadVideoContinuously = function (t, e) {
    return d(this, void 0, void 0, function () {
      return f(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t)];
          case 1:
            n.sent();
            this.decodeContinuously(t, e);
            return [2];
        }
      });
    });
  };
  t.prototype.isImageLoaded = function (t) {
    return !!t.complete && 0 !== t.naturalWidth;
  };
  t.prototype.prepareImageElement = function (t) {
    var e;
    if ("undefined" === typeof t) {
      (e = document.createElement("img")).width = 200;
      e.height = 200;
    }
    if ("string" === typeof t) {
      e = this.getMediaElement(t, "img");
    }
    if (t instanceof HTMLImageElement) {
      e = t;
    }
    return e;
  };
  t.prototype.prepareVideoElement = function (t) {
    var e;
    if (!(t || "undefined" === typeof document)) {
      (e = document.createElement("video")).width = 200;
      e.height = 200;
    }
    if ("string" === typeof t) {
      e = this.getMediaElement(t, "video");
    }
    if (t instanceof HTMLVideoElement) {
      e = t;
    }
    e.setAttribute("autoplay", "true");
    e.setAttribute("muted", "true");
    e.setAttribute("playsinline", "true");
    return e;
  };
  t.prototype.decodeOnce = function (t, e, n) {
    var r = this;
    if (void 0 === e) {
      e = !0;
    }
    if (void 0 === n) {
      n = !0;
    }
    this._stopAsyncDecode = !1;
    return new Promise(function (i, a) {
      return function i(a, c) {
        if (r._stopAsyncDecode) {
          c(new u.a("Video stream has ended before any code could be detected."));
          return void (r._stopAsyncDecode = void 0);
        }
        try {
          a(r.decode(t));
        } catch (f) {
          var l = e && f instanceof u.a;
          var d = f instanceof o.a || f instanceof s.a;
          if (l || d && n) {
            return setTimeout(i, r._timeBetweenDecodingAttempts, a, c);
          }
          c(f);
        }
      }(i, a);
    });
  };
  t.prototype.decodeContinuously = function (t, e) {
    var n = this;
    this._stopContinuousDecode = !1;
    !function r() {
      if (n._stopContinuousDecode) {
        n._stopContinuousDecode = void 0;
      } else {
        try {
          var i = n.decode(t);
          e(i, null);
          setTimeout(r, n.timeBetweenScansMillis);
        } catch (l) {
          e(null, l);
          var a = l instanceof o.a || l instanceof s.a;
          var c = l instanceof u.a;
          if (a || c) {
            setTimeout(r, n._timeBetweenDecodingAttempts);
          }
        }
      }
    }();
  };
  t.prototype.decode = function (t) {
    var e = this.createBinaryBitmap(t);
    return this.decodeBitmap(e);
  };
  t.prototype.createBinaryBitmap = function (t) {
    var e = this.getCaptureCanvasContext(t);
    this.drawImageOnCanvas(e, t);
    var n = this.getCaptureCanvas(t);
    var r = new c.a(n);
    var o = new a.a(r);
    return new i.a(o);
  };
  t.prototype.getCaptureCanvasContext = function (t) {
    if (!this.captureCanvasContext) {
      var e = this.getCaptureCanvas(t).getContext("2d");
      this.captureCanvasContext = e;
    }
    return this.captureCanvasContext;
  };
  t.prototype.getCaptureCanvas = function (t) {
    if (!this.captureCanvas) {
      var e = this.createCaptureCanvas(t);
      this.captureCanvas = e;
    }
    return this.captureCanvas;
  };
  t.prototype.drawImageOnCanvas = function (t, e) {
    t.drawImage(e, 0, 0);
  };
  t.prototype.decodeBitmap = function (t) {
    return this.reader.decode(t, this._hints);
  };
  t.prototype.createCaptureCanvas = function (t) {
    if ("undefined" === typeof document) {
      this._destroyCaptureCanvas();
      return null;
    }
    var e;
    var n;
    var r = document.createElement("canvas");
    if ("undefined" !== typeof t) {
      if (t instanceof HTMLVideoElement) {
        e = t.videoWidth;
        n = t.videoHeight;
      } else {
        if (t instanceof HTMLImageElement) {
          e = t.naturalWidth || t.width;
          n = t.naturalHeight || t.height;
        }
      }
    }
    r.style.width = e + "px";
    r.style.height = n + "px";
    r.width = e;
    r.height = n;
    return r;
  };
  t.prototype.stopStreams = function () {
    if (this.stream) {
      this.stream.getVideoTracks().forEach(function (t) {
        return t.stop();
      });
      this.stream = void 0;
    }
    if (!1 === this._stopAsyncDecode) {
      this.stopAsyncDecode();
    }
    if (!1 === this._stopContinuousDecode) {
      this.stopContinuousDecode();
    }
  };
  t.prototype.reset = function () {
    this.stopStreams();
    this._destroyVideoElement();
    this._destroyImageElement();
    this._destroyCaptureCanvas();
  };
  t.prototype._destroyVideoElement = function () {
    if (this.videoElement) {
      if ("undefined" !== typeof this.videoEndedListener) {
        this.videoElement.removeEventListener("ended", this.videoEndedListener);
      }
      if ("undefined" !== typeof this.videoPlayingEventListener) {
        this.videoElement.removeEventListener("playing", this.videoPlayingEventListener);
      }
      if ("undefined" !== typeof this.videoCanPlayListener) {
        this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener);
      }
      this.cleanVideoSource(this.videoElement);
      this.videoElement = void 0;
    }
  };
  t.prototype._destroyImageElement = function () {
    if (this.imageElement) {
      if (void 0 !== this.imageLoadedListener) {
        this.imageElement.removeEventListener("load", this.imageLoadedListener);
      }
      this.imageElement.src = void 0;
      this.imageElement.removeAttribute("src");
      this.imageElement = void 0;
    }
  };
  t.prototype._destroyCaptureCanvas = function () {
    this.captureCanvasContext = void 0;
    this.captureCanvas = void 0;
  };
  t.prototype.addVideoSource = function (t, e) {
    try {
      t.srcObject = e;
    } catch (n) {
      t.src = URL.createObjectURL(e);
    }
  };
  t.prototype.cleanVideoSource = function (t) {
    try {
      t.srcObject = null;
    } catch (e) {
      t.src = "";
    }
    this.videoElement.removeAttribute("src");
  };
  return t;
}();
export default p;