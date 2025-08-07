"use strict";

export { f as a };
import * as r from "../81/index";
import * as i from "./599";
function o() {
  return "undefined" !== typeof navigator;
}
function a() {
  return !!(o() && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
}
var s = function () {
  return (s = Object.assign || function (t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      for (var i in e = arguments[n]) if (Object.prototype.hasOwnProperty.call(e, i)) {
        t[i] = e[i];
      }
    }
    return t;
  }).apply(this, arguments);
};
var u = function (t, e, n, r) {
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
var c = function (t, e) {
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
                  done: false
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
          value: o[0] ? o[1] : undefined,
          done: true
        };
      }([o, s]);
    };
  }
};
var l = function (t) {
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
          t = undefined;
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
var d = {
  delayBetweenScanAttempts: 500,
  delayBetweenScanSuccess: 500,
  tryPlayVideoTimeout: 5e3
};
var f = function () {
  function t(t, e, n) {
    if (undefined === e) {
      e = new Map();
    }
    if (undefined === n) {
      n = {};
    }
    this.reader = t;
    this.hints = e;
    this.options = s(s({}, d), n);
  }
  Object.defineProperty(t.prototype, "possibleFormats", {
    set: function (t) {
      this.hints.set(r.DecodeHintType.POSSIBLE_FORMATS, t);
    },
    enumerable: false,
    configurable: true
  });
  t.addVideoSource = function (t, e) {
    try {
      t.srcObject = e;
    } catch (n) {
      t.src = URL.createObjectURL(e);
    }
  };
  t.mediaStreamSetTorch = function (t, e) {
    return u(this, undefined, undefined, function () {
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, t.applyConstraints({
              advanced: [{
                fillLightMode: e ? "flash" : "off",
                torch: !!e
              }]
            })];
          case 1:
            n.sent();
            return [2];
        }
      });
    });
  };
  t.mediaStreamIsTorchCompatible = function (e) {
    var n;
    var r;
    var i = e.getVideoTracks();
    try {
      for (var o = l(i), a = o.next(); !a.done; a = o.next()) {
        var s = a.value;
        if (t.mediaStreamIsTorchCompatibleTrack(s)) {
          return true;
        }
      }
    } catch (u) {
      n = {
        error: u
      };
    } finally {
      try {
        if (a && !a.done && (r = o.return)) {
          r.call(o);
        }
      } finally {
        if (n) {
          throw n.error;
        }
      }
    }
    return false;
  };
  t.mediaStreamIsTorchCompatibleTrack = function (t) {
    try {
      return "torch" in t.getCapabilities();
    } catch (e) {
      console.error(e);
      console.warn("Your browser may be not fully compatible with WebRTC and/or ImageCapture specs. Torch will not be available.");
      return false;
    }
  };
  t.isVideoPlaying = function (t) {
    return t.currentTime > 0 && !t.paused && t.readyState > 2;
  };
  t.getMediaElement = function (t, e) {
    var n = document.getElementById(t);
    if (!n) {
      throw new r.ArgumentException("element with id '" + t + "' not found");
    }
    if (n.nodeName.toLowerCase() !== e.toLowerCase()) {
      throw new r.ArgumentException("element with id '" + t + "' must be an " + e + " element");
    }
    return n;
  };
  t.createVideoElement = function (e) {
    if (e instanceof HTMLVideoElement) {
      return e;
    }
    if ("string" === typeof e) {
      return t.getMediaElement(e, "video");
    }
    if (!e && "undefined" !== typeof document) {
      var n = document.createElement("video");
      n.width = 200;
      n.height = 200;
      return n;
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
      var n = document.createElement("img");
      n.width = 200;
      n.height = 200;
      return n;
    }
    throw new Error("Couldn't get imageElement from imageSource!");
  };
  t.prepareVideoElement = function (e) {
    var n = t.createVideoElement(e);
    n.setAttribute("autoplay", "true");
    n.setAttribute("muted", "true");
    n.setAttribute("playsinline", "true");
    return n;
  };
  t.isImageLoaded = function (t) {
    return !!t.complete && 0 !== t.naturalWidth;
  };
  t.createBinaryBitmapFromCanvas = function (t) {
    var e = new i.a(t);
    var n = new r.HybridBinarizer(e);
    return new r.BinaryBitmap(n);
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
      throw new r.ArgumentException("Cannot create a capture canvas without a media element.");
    }
    if ("undefined" === typeof document) {
      throw new Error("The page \"Document\" is undefined, make sure you're running in a browser.");
    }
    var n = document.createElement("canvas");
    var i = t.getMediaElementDimensions(e);
    var o = i.width;
    var a = i.height;
    n.style.width = o + "px";
    n.style.height = a + "px";
    n.width = o;
    n.height = a;
    return n;
  };
  t.tryPlayVideo = function (e) {
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            if (null === e || undefined === e ? undefined : e.ended) {
              console.error("Trying to play video that has ended.");
              return [2, false];
            }
            if (t.isVideoPlaying(e)) {
              console.warn("Trying to play video that is already playing.");
              return [2, true];
            }
            r.label = 1;
          case 1:
            r.trys.push([1, 3,, 4]);
            return [4, e.play()];
          case 2:
            r.sent();
            return [2, true];
          case 3:
            n = r.sent();
            console.warn("It was not possible to play the video.", n);
            return [2, false];
          case 4:
            return [2];
        }
      });
    });
  };
  t.createCanvasFromMediaElement = function (e) {
    var n = t.createCaptureCanvas(e);
    var r = n.getContext("2d");
    if (!r) {
      throw new Error("Couldn't find Canvas 2D Context.");
    }
    t.drawImageOnCanvas(r, e);
    return n;
  };
  t.createBinaryBitmapFromMediaElem = function (e) {
    var n = t.createCanvasFromMediaElement(e);
    return t.createBinaryBitmapFromCanvas(n);
  };
  t.destroyImageElement = function (t) {
    t.src = "";
    t.removeAttribute("src");
    t = undefined;
  };
  t.listVideoInputDevices = function () {
    return u(this, undefined, undefined, function () {
      var t;
      var e;
      var n;
      var r;
      var i;
      var s;
      var u;
      var d;
      var f;
      var h;
      var p;
      var m;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (!o()) {
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
              for (n = l(t), r = n.next(); !r.done; r = n.next()) {
                i = r.value;
                if ("videoinput" === (s = "video" === i.kind ? "videoinput" : i.kind)) {
                  u = i.deviceId || i.id;
                  d = i.label || "Video device " + (e.length + 1);
                  f = i.groupId;
                  h = {
                    deviceId: u,
                    label: d,
                    kind: s,
                    groupId: f
                  };
                  e.push(h);
                }
              }
            } catch (b) {
              p = {
                error: b
              };
            } finally {
              try {
                if (r && !r.done && (m = n.return)) {
                  m.call(n);
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
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, t.listVideoInputDevices()];
          case 1:
            return (n = r.sent()) ? [2, n.find(function (t) {
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
  t.playVideoOnLoadAsync = function (e, n) {
    return u(this, undefined, undefined, function () {
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, t.tryPlayVideo(e)];
          case 1:
            return r.sent() ? [2, true] : [2, new Promise(function (r, i) {
              var o = setTimeout(function () {
                if (!t.isVideoPlaying(e)) {
                  i(false);
                  e.removeEventListener("canplay", a);
                }
              }, n);
              var a = function n() {
                t.tryPlayVideo(e).then(function (t) {
                  clearTimeout(o);
                  e.removeEventListener("canplay", n);
                  r(t);
                });
              };
              e.addEventListener("canplay", a);
            })];
        }
      });
    });
  };
  t.attachStreamToVideo = function (e, n, r) {
    if (undefined === r) {
      r = 5e3;
    }
    return u(this, undefined, undefined, function () {
      var i;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            i = t.prepareVideoElement(n);
            t.addVideoSource(i, e);
            return [4, t.playVideoOnLoadAsync(i, r)];
          case 1:
            o.sent();
            return [2, i];
        }
      });
    });
  };
  t._waitImageLoad = function (e) {
    return new Promise(function (n, r) {
      var i = setTimeout(function () {
        if (!t.isImageLoaded(e)) {
          e.removeEventListener("load", o);
          r();
        }
      }, 1e4);
      var o = function t() {
        clearTimeout(i);
        e.removeEventListener("load", t);
        n();
      };
      e.addEventListener("load", o);
    });
  };
  t.checkCallbackFnOrThrow = function (t) {
    if (!t) {
      throw new r.ArgumentException("`callbackFn` is a required parameter, you cannot capture results without it.");
    }
  };
  t.disposeMediaStream = function (t) {
    t.getVideoTracks().forEach(function (t) {
      return t.stop();
    });
    t = undefined;
  };
  t.prototype.decode = function (e) {
    var n = t.createCanvasFromMediaElement(e);
    return this.decodeFromCanvas(n);
  };
  t.prototype.decodeBitmap = function (t) {
    return this.reader.decode(t, this.hints);
  };
  t.prototype.decodeFromCanvas = function (e) {
    var n = t.createBinaryBitmapFromCanvas(e);
    return this.decodeBitmap(n);
  };
  t.prototype.decodeFromImageElement = function (e) {
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            if (!e) {
              throw new r.ArgumentException("An image element must be provided.");
            }
            n = t.prepareImageElement(e);
            return [4, this._decodeOnLoadImage(n)];
          case 1:
            return [2, i.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromImageUrl = function (e) {
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (i) {
        switch (i.label) {
          case 0:
            if (!e) {
              throw new r.ArgumentException("An URL must be provided.");
            }
            (n = t.prepareImageElement()).src = e;
            i.label = 1;
          case 1:
            i.trys.push([1,, 3, 4]);
            return [4, this.decodeFromImageElement(n)];
          case 2:
            return [2, i.sent()];
          case 3:
            t.destroyImageElement(n);
            return [7];
          case 4:
            return [2];
        }
      });
    });
  };
  t.prototype.decodeFromConstraints = function (e, n, r) {
    return u(this, undefined, undefined, function () {
      var i;
      var o;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            t.checkCallbackFnOrThrow(r);
            return [4, this.getUserMedia(e)];
          case 1:
            i = a.sent();
            a.label = 2;
          case 2:
            a.trys.push([2, 4,, 5]);
            return [4, this.decodeFromStream(i, n, r)];
          case 3:
            return [2, a.sent()];
          case 4:
            throw o = a.sent(), t.disposeMediaStream(i), o;
          case 5:
            return [2];
        }
      });
    });
  };
  t.prototype.decodeFromStream = function (e, n, r) {
    return u(this, undefined, undefined, function () {
      var i;
      var o;
      var a;
      var d;
      var f;
      var h;
      var p;
      var m;
      var b;
      var g = this;
      return c(this, function (v) {
        switch (v.label) {
          case 0:
            t.checkCallbackFnOrThrow(r);
            i = this.options.tryPlayVideoTimeout;
            return [4, t.attachStreamToVideo(e, n, i)];
          case 1:
            o = v.sent();
            a = function () {
              t.disposeMediaStream(e);
              t.cleanVideoSource(o);
            };
            d = this.scan(o, r, a);
            f = e.getVideoTracks();
            h = s(s({}, d), {
              stop: function () {
                d.stop();
              },
              streamVideoConstraintsApply: function (t, e) {
                return u(this, undefined, undefined, function () {
                  var n;
                  var r;
                  var i;
                  var o;
                  var a;
                  var s;
                  return c(this, function (u) {
                    switch (u.label) {
                      case 0:
                        n = e ? f.filter(e) : f;
                        u.label = 1;
                      case 1:
                        u.trys.push([1, 6, 7, 8]);
                        r = l(n);
                        i = r.next();
                        u.label = 2;
                      case 2:
                        return i.done ? [3, 5] : [4, i.value.applyConstraints(t)];
                      case 3:
                        u.sent();
                        u.label = 4;
                      case 4:
                        i = r.next();
                        return [3, 2];
                      case 5:
                        return [3, 8];
                      case 6:
                        o = u.sent();
                        a = {
                          error: o
                        };
                        return [3, 8];
                      case 7:
                        try {
                          if (i && !i.done && (s = r.return)) {
                            s.call(r);
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
                return f.find(t).getConstraints();
              },
              streamVideoSettingsGet: function (t) {
                return f.find(t).getSettings();
              },
              streamVideoCapabilitiesGet: function (t) {
                return f.find(t).getCapabilities();
              }
            });
            if (t.mediaStreamIsTorchCompatible(e)) {
              p = null === f || undefined === f ? undefined : f.find(function (e) {
                return t.mediaStreamIsTorchCompatibleTrack(e);
              });
              m = function (e) {
                return u(g, undefined, undefined, function () {
                  return c(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, t.mediaStreamSetTorch(p, e)];
                      case 1:
                        n.sent();
                        return [2];
                    }
                  });
                });
              };
              h.switchTorch = m;
              b = function () {
                d.stop();
                m(false);
              };
              h.stop = b;
            }
            return [2, h];
        }
      });
    });
  };
  t.prototype.decodeFromVideoDevice = function (e, n, r) {
    return u(this, undefined, undefined, function () {
      var i;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            t.checkCallbackFnOrThrow(r);
            i = {
              video: e ? {
                deviceId: {
                  exact: e
                }
              } : {
                facingMode: "environment"
              }
            };
            return [4, this.decodeFromConstraints(i, n, r)];
          case 1:
            return [2, o.sent()];
        }
      });
    });
  };
  t.prototype.decodeFromVideoElement = function (e, n) {
    return u(this, undefined, undefined, function () {
      var i;
      var o;
      return c(this, function (a) {
        switch (a.label) {
          case 0:
            if (t.checkCallbackFnOrThrow(n), !e) {
              throw new r.ArgumentException("A video element must be provided.");
            }
            i = t.prepareVideoElement(e);
            o = this.options.tryPlayVideoTimeout;
            return [4, t.playVideoOnLoadAsync(i, o)];
          case 1:
            a.sent();
            return [2, this.scan(i, n)];
        }
      });
    });
  };
  t.prototype.decodeFromVideoUrl = function (e, n) {
    return u(this, undefined, undefined, function () {
      var i;
      var o;
      var a;
      return c(this, function (s) {
        switch (s.label) {
          case 0:
            if (t.checkCallbackFnOrThrow(n), !e) {
              throw new r.ArgumentException("An URL must be provided.");
            }
            (i = t.prepareVideoElement()).src = e;
            o = function () {
              t.cleanVideoSource(i);
            };
            a = this.options.tryPlayVideoTimeout;
            return [4, t.playVideoOnLoadAsync(i, a)];
          case 1:
            s.sent();
            return [2, this.scan(i, n, o)];
        }
      });
    });
  };
  t.prototype.decodeOnceFromConstraints = function (t, e) {
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, this.getUserMedia(t)];
          case 1:
            n = r.sent();
            return [4, this.decodeOnceFromStream(n, e)];
          case 2:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromStream = function (e, n) {
    return u(this, undefined, undefined, function () {
      var r;
      var i;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            r = Boolean(n);
            return [4, t.attachStreamToVideo(e, n)];
          case 1:
            i = o.sent();
            o.label = 2;
          case 2:
            o.trys.push([2,, 4, 5]);
            return [4, this.scanOneResult(i)];
          case 3:
            return [2, o.sent()];
          case 4:
            if (!r) {
              t.cleanVideoSource(i);
            }
            return [7];
          case 5:
            return [2];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoDevice = function (t, e) {
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (r) {
        switch (r.label) {
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
            return [4, this.decodeOnceFromConstraints(n, e)];
          case 1:
            return [2, r.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoElement = function (e) {
    return u(this, undefined, undefined, function () {
      var n;
      var i;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            if (!e) {
              throw new r.ArgumentException("A video element must be provided.");
            }
            n = t.prepareVideoElement(e);
            i = this.options.tryPlayVideoTimeout;
            return [4, t.playVideoOnLoadAsync(n, i)];
          case 1:
            o.sent();
            return [4, this.scanOneResult(n)];
          case 2:
            return [2, o.sent()];
        }
      });
    });
  };
  t.prototype.decodeOnceFromVideoUrl = function (e) {
    return u(this, undefined, undefined, function () {
      var n;
      var i;
      return c(this, function (o) {
        switch (o.label) {
          case 0:
            if (!e) {
              throw new r.ArgumentException("An URL must be provided.");
            }
            (n = t.prepareVideoElement()).src = e;
            i = this.decodeOnceFromVideoElement(n);
            o.label = 1;
          case 1:
            o.trys.push([1,, 3, 4]);
            return [4, i];
          case 2:
            return [2, o.sent()];
          case 3:
            t.cleanVideoSource(n);
            return [7];
          case 4:
            return [2];
        }
      });
    });
  };
  t.prototype.scanOneResult = function (t, e, n, i) {
    var o = this;
    if (undefined === e) {
      e = true;
    }
    if (undefined === n) {
      n = true;
    }
    if (undefined === i) {
      i = true;
    }
    return new Promise(function (a, s) {
      o.scan(t, function (t, o, u) {
        if (t) {
          a(t);
          return void u.stop();
        }
        if (o) {
          if (o instanceof r.NotFoundException && e) {
            return;
          }
          if (o instanceof r.ChecksumException && n) {
            return;
          }
          if (o instanceof r.FormatException && i) {
            return;
          }
          u.stop();
          s(o);
        }
      });
    });
  };
  t.prototype.scan = function (e, n, i) {
    var o = this;
    t.checkCallbackFnOrThrow(n);
    var a = t.createCaptureCanvas(e);
    var s = a.getContext("2d");
    if (!s) {
      throw new Error("Couldn't create canvas for visual element scan.");
    }
    var u;
    var c = function () {
      s = undefined;
      a = undefined;
    };
    var l = false;
    var d = {
      stop: function () {
        l = true;
        clearTimeout(u);
        c();
        if (i) {
          i();
        }
      }
    };
    (function f() {
      if (!l) {
        try {
          t.drawImageOnCanvas(s, e);
          var h = o.decodeFromCanvas(a);
          n(h, undefined, d);
          u = setTimeout(f, o.options.delayBetweenScanSuccess);
        } catch (g) {
          n(undefined, g, d);
          var p = g instanceof r.ChecksumException;
          var m = g instanceof r.FormatException;
          var b = g instanceof r.NotFoundException;
          if (p || m || b) {
            return void (u = setTimeout(f, o.options.delayBetweenScanAttempts));
          }
          c();
          if (i) {
            i(g);
          }
        }
      }
    })();
    return d;
  };
  t.prototype._decodeOnLoadImage = function (e) {
    return u(this, undefined, undefined, function () {
      return c(this, function (n) {
        switch (n.label) {
          case 0:
            return t.isImageLoaded(e) ? [3, 2] : [4, t._waitImageLoad(e)];
          case 1:
            n.sent();
            n.label = 2;
          case 2:
            return [2, this.decode(e)];
        }
      });
    });
  };
  t.prototype.getUserMedia = function (e) {
    return u(this, undefined, undefined, function () {
      var n;
      return c(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, navigator.mediaDevices.getUserMedia(e)];
          case 1:
            n = r.sent();
            t.streamTracker.push(n);
            return [2, n];
        }
      });
    });
  };
  t.streamTracker = [];
  return t;
}();
export default f;