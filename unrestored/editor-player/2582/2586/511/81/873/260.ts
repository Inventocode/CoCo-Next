"use strict";

export { p as a };
import * as n from "../248";
import * as o from "../581";
import * as i from "../164";
import * as a from "../582";
import * as u from "../56";
import * as s from "../37";
import * as c from "./585";
import * as f from "./586";
var h = function (t, e, r, n) {
  return new (r || (r = Promise))(function (o, i) {
    function a(t) {
      try {
        s(n.next(t));
      } catch (e) {
        i(e);
      }
    }
    function u(t) {
      try {
        s(n.throw(t));
      } catch (e) {
        i(e);
      }
    }
    function s(t) {
      var e;
      if (t.done) {
        o(t.value);
      } else {
        (e = t.value, e instanceof r ? e : new r(function (t) {
          t(e);
        })).then(a, u);
      }
    }
    s((n = n.apply(t, e || [])).next());
  });
};
var l = function (t, e) {
  var r;
  var n;
  var o;
  var i;
  var a = {
    label: 0,
    sent: function () {
      if (1 & o[0]) {
        throw o[1];
      }
      return o[1];
    },
    trys: [],
    ops: []
  };
  i = {
    next: u(0),
    throw: u(1),
    return: u(2)
  };
  if ("function" === typeof Symbol) {
    i[Symbol.iterator] = function () {
      return this;
    };
  }
  return i;
  function u(i) {
    return function (u) {
      return function (i) {
        if (r) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            r = 1;
            if (n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) {
              return o;
            }
            switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
              case 0:
              case 1:
                o = i;
                break;
              case 4:
                a.label++;
                return {
                  value: i[1],
                  done: false
                };
              case 5:
                a.label++;
                n = i[1];
                i = [0];
                continue;
              case 7:
                i = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                  a = 0;
                  continue;
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                  a.label = i[1];
                  break;
                }
                if (6 === i[0] && a.label < o[1]) {
                  a.label = o[1];
                  o = i;
                  break;
                }
                if (o && a.label < o[2]) {
                  a.label = o[2];
                  a.ops.push(i);
                  break;
                }
                if (o[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            i = e.call(t, a);
          } catch (u) {
            i = [6, u];
            n = 0;
          } finally {
            r = o = 0;
          }
        }
        if (5 & i[0]) {
          throw i[1];
        }
        return {
          value: i[0] ? i[1] : undefined,
          done: true
        };
      }([i, u]);
    };
  }
};
var d = function (t) {
  var e = "function" === typeof Symbol && Symbol.iterator;
  var r = e && t[e];
  var n = 0;
  if (r) {
    return r.call(t);
  }
  if (t && "number" === typeof t.length) {
    return {
      next: function () {
        if (t && n >= t.length) {
          t = undefined;
        }
        return {
          value: t && t[n++],
          done: !t
        };
      }
    };
  }
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var p = function () {
  function t(t, e, r) {
    if (undefined === e) {
      e = 500;
    }
    this.reader = t;
    this.timeBetweenScansMillis = e;
    this._hints = r;
    this._stopContinuousDecode = false;
    this._stopAsyncDecode = false;
    this._timeBetweenDecodingAttempts = 0;
  }
  Object.defineProperty(t.prototype, "hasNavigator", {
    get: function () {
      return "undefined" !== typeof navigator;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(t.prototype, "isMediaDevicesSuported", {
    get: function () {
      return this.hasNavigator && !!navigator.mediaDevices;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(t.prototype, "canEnumerateDevices", {
    get: function () {
      return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(t.prototype, "timeBetweenDecodingAttempts", {
    get: function () {
      return this._timeBetweenDecodingAttempts;
    },
    set: function (t) {
      this._timeBetweenDecodingAttempts = t < 0 ? 0 : t;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(t.prototype, "hints", {
    get: function () {
      return this._hints;
    },
    set: function (t) {
      this._hints = t || null;
    },
    enumerable: false,
    configurable: true
  });
  t.prototype.listVideoInputDevices = function () {
    return h(this, undefined, undefined, function () {
      var t;
      var e;
      var r;
      var n;
      var o;
      var i;
      var a;
      var u;
      var s;
      var c;
      var f;
      var h;
      return l(this, function (l) {
        switch (l.label) {
          case 0:
            if (!this.hasNavigator) {
              throw new Error("Can't enumerate devices, navigator is not present.");
            }
            if (!this.canEnumerateDevices) {
              throw new Error("Can't enumerate devices, method not supported.");
            }
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            t = l.sent();
            e = [];
            try {
              for (r = d(t), n = r.next(); !n.done; n = r.next()) {
                o = n.value;
                if ("videoinput" === (i = "video" === o.kind ? "videoinput" : o.kind)) {
                  a = o.deviceId || o.id;
                  u = o.label || "Video device " + (e.length + 1);
                  s = o.groupId;
                  c = {
                    deviceId: a,
                    label: u,
                    kind: i,
                    groupId: s
                  };
                  e.push(c);
                }
              }
            } catch (p) {
              f = {
                error: p
              };
            } finally {
              try {
                if (n && !n.done && (h = r.return)) {
                  h.call(r);
                }
              } finally {
                if (f) {
                  throw f.error;
                }
              }
            }
            return [2, e];
        }
      });
    });
  };
  t.prototype.getVideoInputDevices = function () {
    return h(this, undefined, undefined, function () {
      return l(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return [2, t.sent().map(function (t) {
              return new f.a(t.deviceId, t.label);
            })];
        }
      });
    });
  };
  t.prototype.findDeviceById = function (t) {
    return h(this, undefined, undefined, function () {
      var e;
      return l(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.listVideoInputDevices()];
          case 1:
            return (e = r.sent()) ? [2, e.find(function (e) {
              return e.deviceId === t;
            })] : [2, null];
        }
      });
    });
  };
  t.prototype.decodeFromInputVideoDevice = function (t, e) {
    return h(this, undefined, undefined, function () {
      return l(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.decodeOnceFromVideoDevice(t, e)];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoDevice = function (t, e) {
    return h(this, undefined, undefined, function () {
      var r;
      return l(this, function (n) {
        switch (n.label) {
          case 0:
            this.reset();
            r = {
              video: t ? {
                deviceId: {
                  exact: t
                }
              } : {
                facingMode: "environment"
              }
            };
            return [4, this.decodeOnceFromConstraints(r, e)];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromConstraints = function (t, e) {
    return h(this, undefined, undefined, function () {
      var r;
      return l(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t)];
          case 1:
            r = n.sent();
            return [4, this.decodeOnceFromStream(r, e)];
          case 2:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromStream = function (t, e) {
    return h(this, undefined, undefined, function () {
      var r;
      return l(this, function (n) {
        switch (n.label) {
          case 0:
            this.reset();
            return [4, this.attachStreamToVideo(t, e)];
          case 1:
            r = n.sent();
            return [4, this.decodeOnce(r)];
          case 2:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromInputVideoDeviceContinuously = function (t, e, r) {
    return h(this, undefined, undefined, function () {
      return l(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.decodeFromVideoDevice(t, e, r)];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromVideoDevice = function (t, e, r) {
    return h(this, undefined, undefined, function () {
      var n;
      return l(this, function (o) {
        switch (o.label) {
          case 0:
            n = {
              video: t ? {
                deviceId: {
                  exact: t
                }
              } : {
                facingMode: "environment"
              }
            };
            return [4, this.decodeFromConstraints(n, e, r)];
          case 1:
            return [2, o.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromConstraints = function (t, e, r) {
    return h(this, undefined, undefined, function () {
      var n;
      return l(this, function (o) {
        switch (o.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(t)];
          case 1:
            n = o.sent();
            return [4, this.decodeFromStream(n, e, r)];
          case 2:
            return [2, o.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromStream = function (t, e, r) {
    return h(this, undefined, undefined, function () {
      var n;
      return l(this, function (o) {
        switch (o.label) {
          case 0:
            this.reset();
            return [4, this.attachStreamToVideo(t, e)];
          case 1:
            n = o.sent();
            return [4, this.decodeContinuously(n, r)];
          case 2:
            return [2, o.sent()];
        }
      });
    });
  };
  t.prototype.stopAsyncDecode = function () {
    this._stopAsyncDecode = true;
  };
  t.prototype.stopContinuousDecode = function () {
    this._stopContinuousDecode = true;
  };
  t.prototype.attachStreamToVideo = function (t, e) {
    return h(this, undefined, undefined, function () {
      var r;
      return l(this, function (n) {
        switch (n.label) {
          case 0:
            r = this.prepareVideoElement(e);
            this.addVideoSource(r, t);
            this.videoElement = r;
            this.stream = t;
            return [4, this.playVideoOnLoadAsync(r)];
          case 1:
            n.sent();
            return [2, r];
        }
      });
    });
  };
  t.prototype.playVideoOnLoadAsync = function (t) {
    var e = this;
    return new Promise(function (r, n) {
      return e.playVideoOnLoad(t, function () {
        return r();
      });
    });
  };
  t.prototype.playVideoOnLoad = function (t, e) {
    var r = this;
    this.videoEndedListener = function () {
      return r.stopStreams();
    };
    this.videoCanPlayListener = function () {
      return r.tryPlayVideo(t);
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
    return h(this, undefined, undefined, function () {
      return l(this, function (e) {
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
    var r = document.getElementById(t);
    if (!r) {
      throw new n.a("element with id '" + t + "' not found");
    }
    if (r.nodeName.toLowerCase() !== e.toLowerCase()) {
      throw new n.a("element with id '" + t + "' must be an " + e + " element");
    }
    return r;
  };
  t.prototype.decodeFromImage = function (t, e) {
    if (!t && !e) {
      throw new n.a("either imageElement with a src set or an url must be provided");
    }
    return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t);
  };
  t.prototype.decodeFromVideo = function (t, e) {
    if (!t && !e) {
      throw new n.a("Either an element with a src set or an URL must be provided");
    }
    return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t);
  };
  t.prototype.decodeFromVideoContinuously = function (t, e, r) {
    if (undefined === t && undefined === e) {
      throw new n.a("Either an element with a src set or an URL must be provided");
    }
    return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r);
  };
  t.prototype.decodeFromImageElement = function (t) {
    if (!t) {
      throw new n.a("An image element must be provided.");
    }
    this.reset();
    var e = this.prepareImageElement(t);
    this.imageElement = e;
    return this.isImageLoaded(e) ? this.decodeOnce(e, false, true) : this._decodeOnLoadImage(e);
  };
  t.prototype.decodeFromVideoElement = function (t) {
    var e = this._decodeFromVideoElementSetup(t);
    return this._decodeOnLoadVideo(e);
  };
  t.prototype.decodeFromVideoElementContinuously = function (t, e) {
    var r = this._decodeFromVideoElementSetup(t);
    return this._decodeOnLoadVideoContinuously(r, e);
  };
  t.prototype._decodeFromVideoElementSetup = function (t) {
    if (!t) {
      throw new n.a("A video element must be provided.");
    }
    this.reset();
    var e = this.prepareVideoElement(t);
    this.videoElement = e;
    return e;
  };
  t.prototype.decodeFromImageUrl = function (t) {
    if (!t) {
      throw new n.a("An URL must be provided.");
    }
    this.reset();
    var e = this.prepareImageElement();
    this.imageElement = e;
    var r = this._decodeOnLoadImage(e);
    e.src = t;
    return r;
  };
  t.prototype.decodeFromVideoUrl = function (t) {
    if (!t) {
      throw new n.a("An URL must be provided.");
    }
    this.reset();
    var e = this.prepareVideoElement();
    var r = this.decodeFromVideoElement(e);
    e.src = t;
    return r;
  };
  t.prototype.decodeFromVideoUrlContinuously = function (t, e) {
    if (!t) {
      throw new n.a("An URL must be provided.");
    }
    this.reset();
    var r = this.prepareVideoElement();
    var o = this.decodeFromVideoElementContinuously(r, e);
    r.src = t;
    return o;
  };
  t.prototype._decodeOnLoadImage = function (t) {
    var e = this;
    return new Promise(function (r, n) {
      e.imageLoadedListener = function () {
        return e.decodeOnce(t, false, true).then(r, n);
      };
      t.addEventListener("load", e.imageLoadedListener);
    });
  };
  t.prototype._decodeOnLoadVideo = function (t) {
    return h(this, undefined, undefined, function () {
      return l(this, function (e) {
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
    return h(this, undefined, undefined, function () {
      return l(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.playVideoOnLoadAsync(t)];
          case 1:
            r.sent();
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
  t.prototype.decodeOnce = function (t, e, r) {
    var n = this;
    if (undefined === e) {
      e = true;
    }
    if (undefined === r) {
      r = true;
    }
    this._stopAsyncDecode = false;
    return new Promise(function (o, a) {
      return function o(a, c) {
        if (n._stopAsyncDecode) {
          c(new s.a("Video stream has ended before any code could be detected."));
          return void (n._stopAsyncDecode = undefined);
        }
        try {
          a(n.decode(t));
        } catch (l) {
          var f = e && l instanceof s.a;
          var h = l instanceof i.a || l instanceof u.a;
          if (f || h && r) {
            return setTimeout(o, n._timeBetweenDecodingAttempts, a, c);
          }
          c(l);
        }
      }(o, a);
    });
  };
  t.prototype.decodeContinuously = function (t, e) {
    var r = this;
    this._stopContinuousDecode = false;
    !function n() {
      if (r._stopContinuousDecode) {
        r._stopContinuousDecode = undefined;
      } else {
        try {
          var o = r.decode(t);
          e(o, null);
          setTimeout(n, r.timeBetweenScansMillis);
        } catch (f) {
          e(null, f);
          var a = f instanceof i.a || f instanceof u.a;
          var c = f instanceof s.a;
          if (a || c) {
            setTimeout(n, r._timeBetweenDecodingAttempts);
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
    var r = this.getCaptureCanvas(t);
    var n = new c.a(r);
    var i = new a.a(n);
    return new o.a(i);
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
    var r;
    var n = document.createElement("canvas");
    if ("undefined" !== typeof t) {
      if (t instanceof HTMLVideoElement) {
        e = t.videoWidth;
        r = t.videoHeight;
      } else {
        if (t instanceof HTMLImageElement) {
          e = t.naturalWidth || t.width;
          r = t.naturalHeight || t.height;
        }
      }
    }
    n.style.width = e + "px";
    n.style.height = r + "px";
    n.width = e;
    n.height = r;
    return n;
  };
  t.prototype.stopStreams = function () {
    if (this.stream) {
      this.stream.getVideoTracks().forEach(function (t) {
        return t.stop();
      });
      this.stream = undefined;
    }
    if (false === this._stopAsyncDecode) {
      this.stopAsyncDecode();
    }
    if (false === this._stopContinuousDecode) {
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
      this.videoElement = undefined;
    }
  };
  t.prototype._destroyImageElement = function () {
    if (this.imageElement) {
      if (undefined !== this.imageLoadedListener) {
        this.imageElement.removeEventListener("load", this.imageLoadedListener);
      }
      this.imageElement.src = undefined;
      this.imageElement.removeAttribute("src");
      this.imageElement = undefined;
    }
  };
  t.prototype._destroyCaptureCanvas = function () {
    this.captureCanvasContext = undefined;
    this.captureCanvas = undefined;
  };
  t.prototype.addVideoSource = function (t, e) {
    try {
      t.srcObject = e;
    } catch (r) {
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