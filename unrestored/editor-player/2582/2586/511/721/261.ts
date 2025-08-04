"use strict";

export { l as a };
import * as n from "../81/index";
import * as o from "./599";
function i() {
  return "undefined" !== typeof navigator;
}
function a() {
  return !!(i() && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
}
var u = function () {
  return (u = Object.assign || function (t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      for (var o in e = arguments[r]) if (Object.prototype.hasOwnProperty.call(e, o)) {
        t[o] = e[o];
      }
    }
    return t;
  }).apply(this, arguments);
};
var s = function (t, e, r, n) {
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
var c = function (t, e) {
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
                  done: !1
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
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, u]);
    };
  }
};
var f = function (t) {
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
          t = void 0;
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
var h = {
  delayBetweenScanAttempts: 500,
  delayBetweenScanSuccess: 500,
  tryPlayVideoTimeout: 5e3
};
var l = function () {
  function t(t, e, r) {
    if (void 0 === e) {
      e = new Map();
    }
    if (void 0 === r) {
      r = {};
    }
    this.reader = t;
    this.hints = e;
    this.options = u(u({}, h), r);
  }
  Object.defineProperty(t.prototype, "possibleFormats", {
    set: function (t) {
      this.hints.set(n.DecodeHintType.POSSIBLE_FORMATS, t);
    },
    enumerable: !1,
    configurable: !0
  });
  t.addVideoSource = function (t, e) {
    try {
      t.srcObject = e;
    } catch (r) {
      t.src = URL.createObjectURL(e);
    }
  };
  t.mediaStreamSetTorch = function (t, e) {
    return s(this, void 0, void 0, function () {
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, t.applyConstraints({
              advanced: [{
                fillLightMode: e ? "flash" : "off",
                torch: !!e
              }]
            })];
          case 1:
            r.sent();
            return [2];
        }
      });
    });
  };
  t.mediaStreamIsTorchCompatible = function (e) {
    var r;
    var n;
    var o = e.getVideoTracks();
    try {
      for (var i = f(o), a = i.next(); !a.done; a = i.next()) {
        var u = a.value;
        if (t.mediaStreamIsTorchCompatibleTrack(u)) {
          return !0;
        }
      }
    } catch (s) {
      r = {
        error: s
      };
    } finally {
      try {
        if (a && !a.done && (n = i.return)) {
          n.call(i);
        }
      } finally {
        if (r) {
          throw r.error;
        }
      }
    }
    return !1;
  };
  t.mediaStreamIsTorchCompatibleTrack = function (t) {
    try {
      return "torch" in t.getCapabilities();
    } catch (e) {
      console.error(e);
      console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.");
      return !1;
    }
  };
  t.isVideoPlaying = function (t) {
    return t.currentTime > 0 && !t.paused && t.readyState > 2;
  };
  t.getMediaElement = function (t, e) {
    var r = document.getElementById(t);
    if (!r) {
      throw new n.ArgumentException("element with id '" + t + "' not found");
    }
    if (r.nodeName.toLowerCase() !== e.toLowerCase()) {
      throw new n.ArgumentException("element with id '" + t + "' must be an " + e + " element");
    }
    return r;
  };
  t.createVideoElement = function (e) {
    if (e instanceof HTMLVideoElement) {
      return e;
    }
    if ("string" === typeof e) {
      return t.getMediaElement(e, "video");
    }
    if (!e && "undefined" !== typeof document) {
      var r = document.createElement("video");
      r.width = 200;
      r.height = 200;
      return r;
    }
    throw new Error("Couldn't get videoElement from videoSource!");
  };
  t.prepareImageElement = function (e) {
    if (e instanceof HTMLImageElement) {
      return e;
    }
    if ("string" === typeof e) {
      return t.getMediaElement(e, "img");
    }
    if ("undefined" === typeof e) {
      var r = document.createElement("img");
      r.width = 200;
      r.height = 200;
      return r;
    }
    throw new Error("Couldn't get imageElement from imageSource!");
  };
  t.prepareVideoElement = function (e) {
    var r = t.createVideoElement(e);
    r.setAttribute("autoplay", "true");
    r.setAttribute("muted", "true");
    r.setAttribute("playsinline", "true");
    return r;
  };
  t.isImageLoaded = function (t) {
    return !!t.complete && 0 !== t.naturalWidth;
  };
  t.createBinaryBitmapFromCanvas = function (t) {
    var e = new o.a(t);
    var r = new n.HybridBinarizer(e);
    return new n.BinaryBitmap(r);
  };
  t.drawImageOnCanvas = function (t, e) {
    t.drawImage(e, 0, 0);
  };
  t.getMediaElementDimensions = function (t) {
    if (t instanceof HTMLVideoElement) {
      return {
        height: t.videoHeight,
        width: t.videoWidth
      };
    }
    if (t instanceof HTMLImageElement) {
      return {
        height: t.naturalHeight || t.height,
        width: t.naturalWidth || t.width
      };
    }
    throw new Error("Couldn't find the Source's dimensions!");
  };
  t.createCaptureCanvas = function (e) {
    if (!e) {
      throw new n.ArgumentException("Cannot create a capture canvas without a media element.");
    }
    if ("undefined" === typeof document) {
      throw new Error("The page \"Document\" is undefined, make sure you're running in a browser.");
    }
    var r = document.createElement("canvas");
    var o = t.getMediaElementDimensions(e);
    var i = o.width;
    var a = o.height;
    r.style.width = i + "px";
    r.style.height = a + "px";
    r.width = i;
    r.height = a;
    return r;
  };
  t.tryPlayVideo = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            if (null === e || void 0 === e ? void 0 : e.ended) {
              console.error("Trying to play video that has ended.");
              return [2, !1];
            }
            if (t.isVideoPlaying(e)) {
              console.warn("Trying to play video that is already playing.");
              return [2, !0];
            }
            n.label = 1;
          case 1:
            n.trys.push([1, 3,, 4]);
            return [4, e.play()];
          case 2:
            n.sent();
            return [2, !0];
          case 3:
            r = n.sent();
            console.warn("It was not possible to play the video.", r);
            return [2, !1];
          case 4:
            return [2];
        }
      });
    });
  };
  t.createCanvasFromMediaElement = function (e) {
    var r = t.createCaptureCanvas(e);
    var n = r.getContext("2d");
    if (!n) {
      throw new Error("Couldn't find Canvas 2D Context.");
    }
    t.drawImageOnCanvas(n, e);
    return r;
  };
  t.createBinaryBitmapFromMediaElem = function (e) {
    var r = t.createCanvasFromMediaElement(e);
    return t.createBinaryBitmapFromCanvas(r);
  };
  t.destroyImageElement = function (t) {
    t.src = "";
    t.removeAttribute("src");
    t = void 0;
  };
  t.listVideoInputDevices = function () {
    return s(this, void 0, void 0, function () {
      var t;
      var e;
      var r;
      var n;
      var o;
      var u;
      var s;
      var h;
      var l;
      var d;
      var p;
      var g;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (!i()) {
              throw new Error("Can't enumerate devices, navigator is not present.");
            }
            if (!a()) {
              throw new Error("Can't enumerate devices, method not supported.");
            }
            return [4, navigator.mediaDevices.enumerateDevices()];
          case 1:
            t = c.sent();
            e = [];
            try {
              for (r = f(t), n = r.next(); !n.done; n = r.next()) {
                o = n.value;
                if ("videoinput" === (u = "video" === o.kind ? "videoinput" : o.kind)) {
                  s = o.deviceId || o.id;
                  h = o.label || "Video device " + (e.length + 1);
                  l = o.groupId;
                  d = {
                    deviceId: s,
                    label: h,
                    kind: u,
                    groupId: l
                  };
                  e.push(d);
                }
              }
            } catch (y) {
              p = {
                error: y
              };
            } finally {
              try {
                if (n && !n.done && (g = r.return)) {
                  g.call(r);
                }
              } finally {
                if (p) {
                  throw p.error;
                }
              }
            }
            return [2, e];
        }
      });
    });
  };
  t.findDeviceById = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, t.listVideoInputDevices()];
          case 1:
            return (r = n.sent()) ? [2, r.find(function (t) {
              return t.deviceId === e;
            })] : [2];
        }
      });
    });
  };
  t.cleanVideoSource = function (t) {
    if (t) {
      try {
        t.srcObject = null;
      } catch (e) {
        t.src = "";
      }
      if (t) {
        t.removeAttribute("src");
      }
    }
  };
  t.releaseAllStreams = function () {
    if (0 !== t.streamTracker.length) {
      t.streamTracker.forEach(function (t) {
        t.getTracks().forEach(function (t) {
          return t.stop();
        });
      });
    }
    t.streamTracker = [];
  };
  t.playVideoOnLoadAsync = function (e, r) {
    return s(this, void 0, void 0, function () {
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, t.tryPlayVideo(e)];
          case 1:
            return n.sent() ? [2, !0] : [2, new Promise(function (n, o) {
              var i = setTimeout(function () {
                if (!t.isVideoPlaying(e)) {
                  o(!1);
                  e.removeEventListener("canplay", a);
                }
              }, r);
              var a = function r() {
                t.tryPlayVideo(e).then(function (t) {
                  clearTimeout(i);
                  e.removeEventListener("canplay", r);
                  n(t);
                });
              };
              e.addEventListener("canplay", a);
            })];
        }
      });
    });
  };
  t.attachStreamToVideo = function (e, r, n) {
    if (void 0 === n) {
      n = 5e3;
    }
    return s(this, void 0, void 0, function () {
      var o;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            o = t.prepareVideoElement(r);
            t.addVideoSource(o, e);
            return [4, t.playVideoOnLoadAsync(o, n)];
          case 1:
            i.sent();
            return [2, o];
        }
      });
    });
  };
  t._waitImageLoad = function (e) {
    return new Promise(function (r, n) {
      var o = setTimeout(function () {
        if (!t.isImageLoaded(e)) {
          e.removeEventListener("load", i);
          n();
        }
      }, 1e4);
      var i = function t() {
        clearTimeout(o);
        e.removeEventListener("load", t);
        r();
      };
      e.addEventListener("load", i);
    });
  };
  t.checkCallbackFnOrThrow = function (t) {
    if (!t) {
      throw new n.ArgumentException("`callbackFn` is a required parameter, you cannot capture results without it.");
    }
  };
  t.disposeMediaStream = function (t) {
    t.getVideoTracks().forEach(function (t) {
      return t.stop();
    });
    t = void 0;
  };
  t.prototype.decode = function (e) {
    var r = t.createCanvasFromMediaElement(e);
    return this.decodeFromCanvas(r);
  };
  t.prototype.decodeBitmap = function (t) {
    return this.reader.decode(t, this.hints);
  };
  t.prototype.decodeFromCanvas = function (e) {
    var r = t.createBinaryBitmapFromCanvas(e);
    return this.decodeBitmap(r);
  };
  t.prototype.decodeFromImageElement = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            if (!e) {
              throw new n.ArgumentException("An image element must be provided.");
            }
            r = t.prepareImageElement(e);
            return [4, this._decodeOnLoadImage(r)];
          case 1:
            return [2, o.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromImageUrl = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            if (!e) {
              throw new n.ArgumentException("An URL must be provided.");
            }
            (r = t.prepareImageElement()).src = e;
            o.label = 1;
          case 1:
            o.trys.push([1,, 3, 4]);
            return [4, this.decodeFromImageElement(r)];
          case 2:
            return [2, o.sent()];
          case 3:
            t.destroyImageElement(r);
            return [7];
          case 4:
            return [2];
        }
      });
    });
  };
  t.prototype.decodeFromConstraints = function (e, r, n) {
    return s(this, void 0, void 0, function () {
      var o;
      var i;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            t.checkCallbackFnOrThrow(n);
            return [4, this.getUserMedia(e)];
          case 1:
            o = a.sent();
            a.label = 2;
          case 2:
            a.trys.push([2, 4,, 5]);
            return [4, this.decodeFromStream(o, r, n)];
          case 3:
            return [2, a.sent()];
          case 4:
            throw i = a.sent(), t.disposeMediaStream(o), i;
          case 5:
            return [2];
        }
      });
    });
  };
  t.prototype.decodeFromStream = function (e, r, n) {
    return s(this, void 0, void 0, function () {
      var o;
      var i;
      var a;
      var h;
      var l;
      var d;
      var p;
      var g;
      var y;
      var w = this;
      return c(this, function (v) {
        switch (v.label) {
          case 0:
            t.checkCallbackFnOrThrow(n);
            o = this.options.tryPlayVideoTimeout;
            return [4, t.attachStreamToVideo(e, r, o)];
          case 1:
            i = v.sent();
            a = function () {
              t.disposeMediaStream(e);
              t.cleanVideoSource(i);
            };
            h = this.scan(i, n, a);
            l = e.getVideoTracks();
            d = u(u({}, h), {
              stop: function () {
                h.stop();
              },
              streamVideoConstraintsApply: function (t, e) {
                return s(this, void 0, void 0, function () {
                  var r;
                  var n;
                  var o;
                  var i;
                  var a;
                  var u;
                  return c(this, function (s) {
                    switch (s.label) {
                      case 0:
                        r = e ? l.filter(e) : l;
                        s.label = 1;
                      case 1:
                        s.trys.push([1, 6, 7, 8]);
                        n = f(r);
                        o = n.next();
                        s.label = 2;
                      case 2:
                        return o.done ? [3, 5] : [4, o.value.applyConstraints(t)];
                      case 3:
                        s.sent();
                        s.label = 4;
                      case 4:
                        o = n.next();
                        return [3, 2];
                      case 5:
                        return [3, 8];
                      case 6:
                        i = s.sent();
                        a = {
                          error: i
                        };
                        return [3, 8];
                      case 7:
                        try {
                          if (o && !o.done && (u = n.return)) {
                            u.call(n);
                          }
                        } finally {
                          if (a) {
                            throw a.error;
                          }
                        }
                        return [7];
                      case 8:
                        return [2];
                    }
                  });
                });
              },
              streamVideoConstraintsGet: function (t) {
                return l.find(t).getConstraints();
              },
              streamVideoSettingsGet: function (t) {
                return l.find(t).getSettings();
              },
              streamVideoCapabilitiesGet: function (t) {
                return l.find(t).getCapabilities();
              }
            });
            if (t.mediaStreamIsTorchCompatible(e)) {
              p = null === l || void 0 === l ? void 0 : l.find(function (e) {
                return t.mediaStreamIsTorchCompatibleTrack(e);
              });
              g = function (e) {
                return s(w, void 0, void 0, function () {
                  return c(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return [4, t.mediaStreamSetTorch(p, e)];
                      case 1:
                        r.sent();
                        return [2];
                    }
                  });
                });
              };
              d.switchTorch = g;
              y = function () {
                h.stop();
                g(!1);
              };
              d.stop = y;
            }
            return [2, d];
        }
      });
    });
  };
  t.prototype.decodeFromVideoDevice = function (e, r, n) {
    return s(this, void 0, void 0, function () {
      var o;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            t.checkCallbackFnOrThrow(n);
            o = {
              video: e ? {
                deviceId: {
                  exact: e
                }
              } : {
                facingMode: "environment"
              }
            };
            return [4, this.decodeFromConstraints(o, r, n)];
          case 1:
            return [2, i.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromVideoElement = function (e, r) {
    return s(this, void 0, void 0, function () {
      var o;
      var i;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            if (t.checkCallbackFnOrThrow(r), !e) {
              throw new n.ArgumentException("A video element must be provided.");
            }
            o = t.prepareVideoElement(e);
            i = this.options.tryPlayVideoTimeout;
            return [4, t.playVideoOnLoadAsync(o, i)];
          case 1:
            a.sent();
            return [2, this.scan(o, r)];
        }
      });
    });
  };
  t.prototype.decodeFromVideoUrl = function (e, r) {
    return s(this, void 0, void 0, function () {
      var o;
      var i;
      var a;
      return c(this, function (u) {
        switch (u.label) {
          case 0:
            if (t.checkCallbackFnOrThrow(r), !e) {
              throw new n.ArgumentException("An URL must be provided.");
            }
            (o = t.prepareVideoElement()).src = e;
            i = function () {
              t.cleanVideoSource(o);
            };
            a = this.options.tryPlayVideoTimeout;
            return [4, t.playVideoOnLoadAsync(o, a)];
          case 1:
            u.sent();
            return [2, this.scan(o, r, i)];
        }
      });
    });
  };
  t.prototype.decodeOnceFromConstraints = function (t, e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, this.getUserMedia(t)];
          case 1:
            r = n.sent();
            return [4, this.decodeOnceFromStream(r, e)];
          case 2:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromStream = function (e, r) {
    return s(this, void 0, void 0, function () {
      var n;
      var o;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            n = Boolean(r);
            return [4, t.attachStreamToVideo(e, r)];
          case 1:
            o = i.sent();
            i.label = 2;
          case 2:
            i.trys.push([2,, 4, 5]);
            return [4, this.scanOneResult(o)];
          case 3:
            return [2, i.sent()];
          case 4:
            if (!n) {
              t.cleanVideoSource(o);
            }
            return [7];
          case 5:
            return [2];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoDevice = function (t, e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (n) {
        switch (n.label) {
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
            return [4, this.decodeOnceFromConstraints(r, e)];
          case 1:
            return [2, n.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoElement = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      var o;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            if (!e) {
              throw new n.ArgumentException("A video element must be provided.");
            }
            r = t.prepareVideoElement(e);
            o = this.options.tryPlayVideoTimeout;
            return [4, t.playVideoOnLoadAsync(r, o)];
          case 1:
            i.sent();
            return [4, this.scanOneResult(r)];
          case 2:
            return [2, i.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoUrl = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      var o;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            if (!e) {
              throw new n.ArgumentException("An URL must be provided.");
            }
            (r = t.prepareVideoElement()).src = e;
            o = this.decodeOnceFromVideoElement(r);
            i.label = 1;
          case 1:
            i.trys.push([1,, 3, 4]);
            return [4, o];
          case 2:
            return [2, i.sent()];
          case 3:
            t.cleanVideoSource(r);
            return [7];
          case 4:
            return [2];
        }
      });
    });
  };
  t.prototype.scanOneResult = function (t, e, r, o) {
    var i = this;
    if (void 0 === e) {
      e = !0;
    }
    if (void 0 === r) {
      r = !0;
    }
    if (void 0 === o) {
      o = !0;
    }
    return new Promise(function (a, u) {
      i.scan(t, function (t, i, s) {
        if (t) {
          a(t);
          return void s.stop();
        }
        if (i) {
          if (i instanceof n.NotFoundException && e) {
            return;
          }
          if (i instanceof n.ChecksumException && r) {
            return;
          }
          if (i instanceof n.FormatException && o) {
            return;
          }
          s.stop();
          u(i);
        }
      });
    });
  };
  t.prototype.scan = function (e, r, o) {
    var i = this;
    t.checkCallbackFnOrThrow(r);
    var a = t.createCaptureCanvas(e);
    var u = a.getContext("2d");
    if (!u) {
      throw new Error("Couldn't create canvas for visual element scan.");
    }
    var s;
    var c = function () {
      u = void 0;
      a = void 0;
    };
    var f = !1;
    var h = {
      stop: function () {
        f = !0;
        clearTimeout(s);
        c();
        if (o) {
          o();
        }
      }
    };
    (function l() {
      if (!f) {
        try {
          t.drawImageOnCanvas(u, e);
          var d = i.decodeFromCanvas(a);
          r(d, void 0, h);
          s = setTimeout(l, i.options.delayBetweenScanSuccess);
        } catch (w) {
          r(void 0, w, h);
          var p = w instanceof n.ChecksumException;
          var g = w instanceof n.FormatException;
          var y = w instanceof n.NotFoundException;
          if (p || g || y) {
            return void (s = setTimeout(l, i.options.delayBetweenScanAttempts));
          }
          c();
          if (o) {
            o(w);
          }
        }
      }
    })();
    return h;
  };
  t.prototype._decodeOnLoadImage = function (e) {
    return s(this, void 0, void 0, function () {
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return t.isImageLoaded(e) ? [3, 2] : [4, t._waitImageLoad(e)];
          case 1:
            r.sent();
            r.label = 2;
          case 2:
            return [2, this.decode(e)];
        }
      });
    });
  };
  t.prototype.getUserMedia = function (e) {
    return s(this, void 0, void 0, function () {
      var r;
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(e)];
          case 1:
            r = n.sent();
            t.streamTracker.push(r);
            return [2, r];
        }
      });
    });
  };
  t.streamTracker = [];
  return t;
}();
export default l;