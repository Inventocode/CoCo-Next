/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：32__part-3
 */

"use strict"

import { fe } from "./index__part-1"
import { X, q, $, ne, re, ge, be, xe, Ce, Oe, ke, Te, De, Ie, He, Ge, Qe, $e, Je, rt, it, ot, st, ct, ut, lt, ft, dt, ht, pt, _t, Et, xt, Ct, kt, Tt, It, Pt, Jt, nn, hn, An, vn, Bn, In, Mn, gr, vr, mr, br, Hr, Vr, Gr, zr, Xr } from "./index__part-2"
import /* [auto-meaningful-name] */$_1338 from "./1338"
import * as /* [auto-meaningful-name] */$_1198 from "./1198"
import /* [auto-meaningful-name] */$_11981 from "./1198"
import * as /* [auto-meaningful-name] */$_565 from "./565"
import /* [auto-meaningful-name] */$_5651 from "./565"
function fi() {}
function di(e, t, n, r) {
  var i = 0
  var /* [auto-meaningful-name] */e$length = e.length
  !function a(s) {
    if (s || i === e$length) {
      if (n) {
        n(s)
      }
    } else {
      if (r) {
        setTimeout(function () {
          t(e[i++], a)
        }, 1)
      } else {
        t(e[i++], a)
      }
    }
  }()
}
function hi(e) {
  return function () {
    if (null === e) {
      throw new Error("Callback was already called.")
    }
    var t = e
    e = null
    t.apply(this, arguments)
  }
}
function pi(e, t) {
  if (null == t) {
    t = 1
  } else if (0 === t) {
    throw new Error("Concurrency must not be zero")
  }
  var n = 0
  var r = {
    _tasks: [],
    concurrency: t,
    saturated: fi,
    unsaturated: fi,
    buffer: t / 4,
    empty: fi,
    drain: fi,
    error: fi,
    started: false,
    paused: false,
    push: function (e, t) {
      i(e, false, t)
    },
    kill: function () {
      n = 0
      r.drain = fi
      r.started = false
      r._tasks = []
    },
    unshift: function (e, t) {
      i(e, true, t)
    },
    process: function () {
      for (; !r.paused && n < r.concurrency && r._tasks.length;) {
        var t = r._tasks.shift()
        if (0 === r._tasks.length) {
          r.empty()
        }
        if ((n += 1) === r.concurrency) {
          r.saturated()
        }
        e(t.data, hi(o(t)))
      }
    },
    length: function () {
      return r._tasks.length
    },
    running: function () {
      return n
    },
    idle: function () {
      return r._tasks.length + n === 0
    },
    pause: function () {
      if (true !== r.paused) {
        r.paused = true
      }
    },
    resume: function () {
      if (false !== r.paused) {
        r.paused = false
        for (var e = 1; e <= r.concurrency; e++) {
          r.process()
        }
      }
    }
  }
  function i(e, t, n) {
    if (null != n && "function" !== typeof n) {
      throw new Error("task callback must be a function")
    }
    r.started = true
    if (null == e && r.idle()) {
      setTimeout(function () {
        return r.drain()
      }, 1)
    } else {
      var i = {
        data: e,
        callback: "function" === typeof n ? n : fi
      }
      if (t) {
        r._tasks.unshift(i)
      } else {
        r._tasks.push(i)
      }
      setTimeout(function () {
        return r.process()
      }, 1)
    }
  }
  function o(e) {
    return function () {
      n -= 1
      e.callback.apply(e, arguments)
      if (null != arguments[0]) {
        r.error(arguments[0], e.data)
      }
      if (n <= r.concurrency - r.buffer) {
        r.unsaturated()
      }
      if (r.idle()) {
        r.drain()
      }
      r.process()
    }
  }
  return r
}
var _i = {}
function Ai(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    r.enumerable = r.enumerable || false
    r.configurable = true
    if ("value" in r) {
      r.writable = true
    }
    Object.defineProperty(e, r.key, r)
  }
}
function gi(e, t, n) {
  if (t) {
    Ai(e.prototype, t)
  }
  if (n) {
    Ai(e, n)
  }
  return e
}
var vi = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest())
var mi = null
function yi() {}
var bi = function () {
  function e(t, n, r) {
    if ("string" !== typeof t || "string" !== typeof n) {
      throw new Error("Both name and url are required for constructing a resource.")
    }
    r = r || {}
    this._flags = 0
    this._setFlag(e.STATUS_FLAGS.DATA_URL, 0 === n.indexOf("data:"))
    this.name = t
    this.url = n
    this.extension = this._getExtension()
    this.data = null
    this.crossOrigin = true === r.crossOrigin ? "anonymous" : r.crossOrigin
    this.timeout = r.timeout || 0
    this.loadType = r.loadType || this._determineLoadType()
    this.xhrType = r.xhrType
    this.metadata = r.metadata || {}
    this.error = null
    this.xhr = null
    this.children = []
    this.type = e.TYPE.UNKNOWN
    this.progressChunk = 0
    this._dequeue = yi
    this._onLoadBinding = null
    this._elementTimer = 0
    this._boundComplete = this.complete.bind(this)
    this._boundOnError = this._onError.bind(this)
    this._boundOnProgress = this._onProgress.bind(this)
    this._boundOnTimeout = this._onTimeout.bind(this)
    this._boundXhrOnError = this._xhrOnError.bind(this)
    this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)
    this._boundXhrOnAbort = this._xhrOnAbort.bind(this)
    this._boundXhrOnLoad = this._xhrOnLoad.bind(this)
    this.onStart = new $_5651()
    this.onProgress = new $_5651()
    this.onComplete = new $_5651()
    this.onAfterMiddleware = new $_5651()
  }
  e.setExtensionLoadType = function (t, n) {
    wi(e._loadTypeMap, t, n)
  }
  e.setExtensionXhrType = function (t, n) {
    wi(e._xhrTypeMap, t, n)
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.complete = function () {
    this._clearEvents()
    this._finish()
  }
  e$prototype.abort = function (t) {
    if (!this.error) {
      this.error = new Error(t)
      this._clearEvents()
      if (this.xhr) {
        this.xhr.abort()
      } else if (this.xdr) {
        this.xdr.abort()
      } else if (this.data) {
        if (this.data.src) {
          this.data.src = e.EMPTY_GIF
        } else {
          for (; this.data.firstChild;) {
            this.data.removeChild(this.data.firstChild)
          }
        }
      }
      this._finish()
    }
  }
  e$prototype.load = function (t) {
    var n = this
    if (!this.isLoading) {
      if (this.isComplete) {
        if (t) {
          setTimeout(function () {
            return t(n)
          }, 1)
        }
      } else {
        switch (t && this.onComplete.once(t), this._setFlag(e.STATUS_FLAGS.LOADING, true), this.onStart.dispatch(this), false !== this.crossOrigin && "string" === typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
          case e.LOAD_TYPE.IMAGE:
            this.type = e.TYPE.IMAGE
            this._loadElement("image")
            break
          case e.LOAD_TYPE.AUDIO:
            this.type = e.TYPE.AUDIO
            this._loadSourceElement("audio")
            break
          case e.LOAD_TYPE.VIDEO:
            this.type = e.TYPE.VIDEO
            this._loadSourceElement("video")
            break
          case e.LOAD_TYPE.XHR:
          default:
            if (vi && this.crossOrigin) {
              this._loadXdr()
            } else {
              this._loadXhr()
            }
        }
      }
    }
  }
  e$prototype._hasFlag = function (e) {
    return 0 !== (this._flags & e)
  }
  e$prototype._setFlag = function (e, t) {
    this._flags = t ? this._flags | e : this._flags & ~e
  }
  e$prototype._clearEvents = function () {
    clearTimeout(this._elementTimer)
    if (this.data && this.data.removeEventListener) {
      this.data.removeEventListener("error", this._boundOnError, false)
      this.data.removeEventListener("load", this._boundComplete, false)
      this.data.removeEventListener("progress", this._boundOnProgress, false)
      this.data.removeEventListener("canplaythrough", this._boundComplete, false)
    }
    if (this.xhr) {
      if (this.xhr.removeEventListener) {
        this.xhr.removeEventListener("error", this._boundXhrOnError, false)
        this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, false)
        this.xhr.removeEventListener("abort", this._boundXhrOnAbort, false)
        this.xhr.removeEventListener("progress", this._boundOnProgress, false)
        this.xhr.removeEventListener("load", this._boundXhrOnLoad, false)
      } else {
        this.xhr.onerror = null
        this.xhr.ontimeout = null
        this.xhr.onprogress = null
        this.xhr.onload = null
      }
    }
  }
  e$prototype._finish = function () {
    if (this.isComplete) {
      throw new Error("Complete called again for an already completed resource.")
    }
    this._setFlag(e.STATUS_FLAGS.COMPLETE, true)
    this._setFlag(e.STATUS_FLAGS.LOADING, false)
    this.onComplete.dispatch(this)
  }
  e$prototype._loadElement = function (e) {
    if (this.metadata.loadElement) {
      this.data = this.metadata.loadElement
    } else {
      if ("image" === e && "undefined" !== typeof window.Image) {
        this.data = new Image()
      } else {
        this.data = document.createElement(e)
      }
    }
    if (this.crossOrigin) {
      this.data.crossOrigin = this.crossOrigin
    }
    if (!this.metadata.skipSource) {
      this.data.src = this.url
    }
    this.data.addEventListener("error", this._boundOnError, false)
    this.data.addEventListener("load", this._boundComplete, false)
    this.data.addEventListener("progress", this._boundOnProgress, false)
    if (this.timeout) {
      this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout)
    }
  }
  e$prototype._loadSourceElement = function (e) {
    if (this.metadata.loadElement) {
      this.data = this.metadata.loadElement
    } else {
      if ("audio" === e && "undefined" !== typeof window.Audio) {
        this.data = new Audio()
      } else {
        this.data = document.createElement(e)
      }
    }
    if (null !== this.data) {
      if (this.crossOrigin) {
        this.data.crossOrigin = this.crossOrigin
      }
      if (!this.metadata.skipSource) {
        if (navigator.isCocoonJS) {
          this.data.src = Array.isArray(this.url) ? this.url[0] : this.url
        } else if (Array.isArray(this.url)) {
          for (var /* [auto-meaningful-name] */this$metadata$mimeType = this.metadata.mimeType, n = 0; n < this.url.length; ++n) {
            this.data.appendChild(this._createSource(e, this.url[n], Array.isArray(this$metadata$mimeType) ? this$metadata$mimeType[n] : this$metadata$mimeType))
          }
        } else {
          var /* [auto-meaningful-name] */this$metadata$mimeType1 = this.metadata.mimeType
          this.data.appendChild(this._createSource(e, this.url, Array.isArray(this$metadata$mimeType1) ? this$metadata$mimeType1[0] : this$metadata$mimeType1))
        }
      }
      this.data.addEventListener("error", this._boundOnError, false)
      this.data.addEventListener("load", this._boundComplete, false)
      this.data.addEventListener("progress", this._boundOnProgress, false)
      this.data.addEventListener("canplaythrough", this._boundComplete, false)
      this.data.load()
      if (this.timeout) {
        this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout)
      }
    } else {
      this.abort("Unsupported element: " + e)
    }
  }
  e$prototype._loadXhr = function () {
    if ("string" !== typeof this.xhrType) {
      this.xhrType = this._determineXhrType()
    }
    var t = this.xhr = new XMLHttpRequest()
    t.open("GET", this.url, true)
    t.timeout = this.timeout
    if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON || this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT) {
      t.responseType = e.XHR_RESPONSE_TYPE.TEXT
    } else {
      t.responseType = this.xhrType
    }
    t.addEventListener("error", this._boundXhrOnError, false)
    t.addEventListener("timeout", this._boundXhrOnTimeout, false)
    t.addEventListener("abort", this._boundXhrOnAbort, false)
    t.addEventListener("progress", this._boundOnProgress, false)
    t.addEventListener("load", this._boundXhrOnLoad, false)
    t.send()
  }
  e$prototype._loadXdr = function () {
    if ("string" !== typeof this.xhrType) {
      this.xhrType = this._determineXhrType()
    }
    var e = this.xhr = new XDomainRequest()
    e.timeout = this.timeout || 5e3
    e.onerror = this._boundXhrOnError
    e.ontimeout = this._boundXhrOnTimeout
    e.onprogress = this._boundOnProgress
    e.onload = this._boundXhrOnLoad
    e.open("GET", this.url, true)
    setTimeout(function () {
      return e.send()
    }, 1)
  }
  e$prototype._createSource = function (e, t, n) {
    if (!n) {
      n = e + "/" + this._getExtension(t)
    }
    var r = document.createElement("source")
    r.src = t
    r.type = n
    return r
  }
  e$prototype._onError = function (e) {
    this.abort("Failed to load element using: " + e.target.nodeName)
  }
  e$prototype._onProgress = function (e) {
    if (e && e.lengthComputable) {
      this.onProgress.dispatch(this, e.loaded / e.total)
    }
  }
  e$prototype._onTimeout = function () {
    this.abort("Load timed out.")
  }
  e$prototype._xhrOnError = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    this.abort(Ei(this$xhr) + " Request failed. Status: " + this$xhr.status + ", text: \"" + this$xhr.statusText + "\"")
  }
  e$prototype._xhrOnTimeout = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    this.abort(Ei(this$xhr) + " Request timed out.")
  }
  e$prototype._xhrOnAbort = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    this.abort(Ei(this$xhr) + " Request was aborted by the user.")
  }
  e$prototype._xhrOnLoad = function () {
    var /* [auto-meaningful-name] */this$xhr = this.xhr
    var n = ""
    var r = "undefined" === typeof this$xhr.status ? 200 : this$xhr.status
    if (!("" !== this$xhr.responseType && "text" !== this$xhr.responseType && "undefined" !== typeof this$xhr.responseType)) {
      n = this$xhr.responseText
    }
    if (0 === r && (n.length > 0 || this$xhr.responseType === e.XHR_RESPONSE_TYPE.BUFFER)) {
      r = 200
    } else {
      if (1223 === r) {
        r = 204
      }
    }
    if (2 === (r / 100 | 0)) {
      if (this.xhrType === e.XHR_RESPONSE_TYPE.TEXT) {
        this.data = n
        this.type = e.TYPE.TEXT
      } else if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON) {
        try {
          this.data = JSON.parse(n)
          this.type = e.TYPE.JSON
        } catch (a) {
          return void this.abort("Error trying to parse loaded json: " + a)
        }
      } else if (this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT) {
        try {
          if (window.DOMParser) {
            var i = new DOMParser()
            this.data = i.parseFromString(n, "text/xml")
          } else {
            var o = document.createElement("div")
            o.innerHTML = n
            this.data = o
          }
          this.type = e.TYPE.XML
        } catch (a) {
          return void this.abort("Error trying to parse loaded xml: " + a)
        }
      } else {
        this.data = this$xhr.response || n
      }
      this.complete()
    } else {
      this.abort("[" + this$xhr.status + "] " + this$xhr.statusText + ": " + this$xhr.responseURL)
    }
  }
  e$prototype._determineCrossOrigin = function (e, t) {
    if (0 === e.indexOf("data:")) {
      return ""
    }
    if (window.origin !== window.location.origin) {
      return "anonymous"
    }
    t = t || window.location
    if (!mi) {
      mi = document.createElement("a")
    }
    mi.href = e
    var n = !(e = $_11981(mi.href, {
      strictMode: true
    })).port && "" === t.port || e.port === t.port
    var r = e.protocol ? e.protocol + ":" : ""
    return e.host === t.hostname && n && r === t.protocol ? "" : "anonymous"
  }
  e$prototype._determineXhrType = function () {
    return e._xhrTypeMap[this.extension] || e.XHR_RESPONSE_TYPE.TEXT
  }
  e$prototype._determineLoadType = function () {
    return e._loadTypeMap[this.extension] || e.LOAD_TYPE.XHR
  }
  e$prototype._getExtension = function () {
    var /* [auto-meaningful-name] */this$url = this.url
    var t = ""
    if (this.isDataUrl) {
      var n = this$url.indexOf("/")
      t = this$url.substring(n + 1, this$url.indexOf(";", n))
    } else {
      var r = this$url.indexOf("?")
      var i = this$url.indexOf("#")
      var o = Math.min(r > -1 ? r : this$url.length, i > -1 ? i : this$url.length)
      t = (this$url = this$url.substring(0, o)).substring(this$url.lastIndexOf(".") + 1)
    }
    return t.toLowerCase()
  }
  e$prototype._getMimeFromXhrType = function (t) {
    switch (t) {
      case e.XHR_RESPONSE_TYPE.BUFFER:
        return "application/octet-binary"
      case e.XHR_RESPONSE_TYPE.BLOB:
        return "application/blob"
      case e.XHR_RESPONSE_TYPE.DOCUMENT:
        return "application/xml"
      case e.XHR_RESPONSE_TYPE.JSON:
        return "application/json"
      case e.XHR_RESPONSE_TYPE.DEFAULT:
      case e.XHR_RESPONSE_TYPE.TEXT:
      default:
        return "text/plain"
    }
  }
  gi(e, [
    {
      key: "isDataUrl",
      get: function () {
        return this._hasFlag(e.STATUS_FLAGS.DATA_URL)
      }
    }, {
      key: "isComplete",
      get: function () {
        return this._hasFlag(e.STATUS_FLAGS.COMPLETE)
      }
    }, {
      key: "isLoading",
      get: function () {
        return this._hasFlag(e.STATUS_FLAGS.LOADING)
      }
    }
  ])
  return e
}()
function wi(e, t, n) {
  if (t && 0 === t.indexOf(".")) {
    t = t.substring(1)
  }
  if (t) {
    e[t] = n
  }
}
function Ei(e) {
  return e.toString().replace("object ", "")
}
bi.STATUS_FLAGS = {
  NONE: 0,
  DATA_URL: 1,
  COMPLETE: 2,
  LOADING: 4
}
bi.TYPE = {
  UNKNOWN: 0,
  JSON: 1,
  XML: 2,
  IMAGE: 3,
  AUDIO: 4,
  VIDEO: 5,
  TEXT: 6
}
bi.LOAD_TYPE = {
  XHR: 1,
  IMAGE: 2,
  AUDIO: 3,
  VIDEO: 4
}
bi.XHR_RESPONSE_TYPE = {
  DEFAULT: "text",
  BUFFER: "arraybuffer",
  BLOB: "blob",
  DOCUMENT: "document",
  JSON: "json",
  TEXT: "text"
}
bi._loadTypeMap = {
  gif: bi.LOAD_TYPE.IMAGE,
  png: bi.LOAD_TYPE.IMAGE,
  bmp: bi.LOAD_TYPE.IMAGE,
  jpg: bi.LOAD_TYPE.IMAGE,
  jpeg: bi.LOAD_TYPE.IMAGE,
  tif: bi.LOAD_TYPE.IMAGE,
  tiff: bi.LOAD_TYPE.IMAGE,
  webp: bi.LOAD_TYPE.IMAGE,
  tga: bi.LOAD_TYPE.IMAGE,
  svg: bi.LOAD_TYPE.IMAGE,
  "svg+xml": bi.LOAD_TYPE.IMAGE,
  mp3: bi.LOAD_TYPE.AUDIO,
  ogg: bi.LOAD_TYPE.AUDIO,
  wav: bi.LOAD_TYPE.AUDIO,
  mp4: bi.LOAD_TYPE.VIDEO,
  webm: bi.LOAD_TYPE.VIDEO
}
bi._xhrTypeMap = {
  xhtml: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  html: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  htm: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  xml: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  tmx: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  svg: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  tsx: bi.XHR_RESPONSE_TYPE.DOCUMENT,
  gif: bi.XHR_RESPONSE_TYPE.BLOB,
  png: bi.XHR_RESPONSE_TYPE.BLOB,
  bmp: bi.XHR_RESPONSE_TYPE.BLOB,
  jpg: bi.XHR_RESPONSE_TYPE.BLOB,
  jpeg: bi.XHR_RESPONSE_TYPE.BLOB,
  tif: bi.XHR_RESPONSE_TYPE.BLOB,
  tiff: bi.XHR_RESPONSE_TYPE.BLOB,
  webp: bi.XHR_RESPONSE_TYPE.BLOB,
  tga: bi.XHR_RESPONSE_TYPE.BLOB,
  json: bi.XHR_RESPONSE_TYPE.JSON,
  text: bi.XHR_RESPONSE_TYPE.TEXT,
  txt: bi.XHR_RESPONSE_TYPE.TEXT,
  ttf: bi.XHR_RESPONSE_TYPE.BUFFER,
  otf: bi.XHR_RESPONSE_TYPE.BUFFER
}
bi.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
var xi = window.URL || window.webkitURL
var Ci = {
  caching: function (e, t) {
    var n = this
    if (_i[e.url]) {
      e.data = _i[e.url]
      e.complete()
    } else {
      e.onComplete.once(function () {
        return _i[n.url] = n.data
      })
    }
    t()
  },
  parsing: function (e, t) {
    if (e.data) {
      if (e.xhr && e.xhrType === bi.XHR_RESPONSE_TYPE.BLOB) {
        if (window.Blob && "string" !== typeof e.data) {
          if (0 === e.data.type.indexOf("image")) {
            var n = xi.createObjectURL(e.data)
            e.blob = e.data
            e.data = new Image()
            e.data.src = n
            e.type = bi.TYPE.IMAGE
            return void (e.data.onload = function () {
              xi.revokeObjectURL(n)
              e.data.onload = null
              t()
            })
          }
        } else {
          var r = e.xhr.getResponseHeader("content-type")
          if (r && 0 === r.indexOf("image")) {
            e.data = new Image()
            e.data.src = "data:" + r + ";base64," + function (e) {
              for (var t = "", n = 0; n < e.length;) {
                for (var r = [0, 0, 0], i = [0, 0, 0, 0], o = 0; o < r.length; ++o) {
                  if (n < e.length) {
                    r[o] = 255 & e.charCodeAt(n++)
                  } else {
                    r[o] = 0
                  }
                }
                switch (i[0] = r[0] >> 2, i[1] = (3 & r[0]) << 4 | r[1] >> 4, i[2] = (15 & r[1]) << 2 | r[2] >> 6, i[3] = 63 & r[2], n - (e.length - 1)) {
                  case 2:
                    i[3] = 64
                    i[2] = 64
                    break
                  case 1:
                    i[3] = 64
                }
                for (var a = 0; a < i.length; ++a) {
                  t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(i[a])
                }
              }
              return t
            }(e.xhr.responseText)
            e.type = bi.TYPE.IMAGE
            return void (e.data.onload = function () {
              e.data.onload = null
              t()
            })
          }
        }
      }
      t()
    } else {
      t()
    }
  }
}
var Oi = /(#[\w-]+)?$/
var ki = function () {
  function e(t, n) {
    var r = this
    if (undefined === t) {
      t = ""
    }
    if (undefined === n) {
      n = 10
    }
    this.baseUrl = t
    this.progress = 0
    this.loading = false
    this.defaultQueryString = ""
    this._beforeMiddleware = []
    this._afterMiddleware = []
    this._resourcesParsing = []
    this._boundLoadResource = function (e, t) {
      return r._loadResource(e, t)
    }
    this._queue = pi(this._boundLoadResource, n)
    this._queue.pause()
    this.resources = {}
    this.onProgress = new $_5651()
    this.onError = new $_5651()
    this.onLoad = new $_5651()
    this.onStart = new $_5651()
    this.onComplete = new $_5651()
    for (var i = 0; i < e._defaultBeforeMiddleware.length; ++i) {
      this.pre(e._defaultBeforeMiddleware[i])
    }
    for (var o = 0; o < e._defaultAfterMiddleware.length; ++o) {
      this.use(e._defaultAfterMiddleware[o])
    }
  }
  var /* [auto-meaningful-name] */e$prototype = e.prototype
  e$prototype.add = function (e, t, n, r) {
    if (Array.isArray(e)) {
      for (var i = 0; i < e.length; ++i) {
        this.add(e[i])
      }
      return this
    }
    if ("object" === typeof e) {
      r = t || e.callback || e.onComplete
      n = e
      t = e.url
      e = e.name || e.key || e.url
    }
    if ("string" !== typeof t) {
      r = n
      n = t
      t = e
    }
    if ("string" !== typeof t) {
      throw new Error("No url passed to add resource to loader.")
    }
    if ("function" === typeof n) {
      r = n
      n = null
    }
    if (this.loading && (!n || !n.parentResource)) {
      throw new Error("Cannot add resources while the loader is running.")
    }
    if (this.resources[e]) {
      throw new Error("Resource named \"" + e + "\" already exists.")
    }
    t = this._prepareUrl(t)
    this.resources[e] = new bi(e, t, n)
    if ("function" === typeof r) {
      this.resources[e].onAfterMiddleware.once(r)
    }
    if (this.loading) {
      for (var /* [auto-meaningful-name] */n$parentResource = n.parentResource, a = [], s = 0; s < n$parentResource.children.length; ++s) {
        if (!n$parentResource.children[s].isComplete) {
          a.push(n$parentResource.children[s])
        }
      }
      var c = n$parentResource.progressChunk * (a.length + 1) / (a.length + 2)
      n$parentResource.children.push(this.resources[e])
      n$parentResource.progressChunk = c
      for (var u = 0; u < a.length; ++u) {
        a[u].progressChunk = c
      }
      this.resources[e].progressChunk = c
    }
    this._queue.push(this.resources[e])
    return this
  }
  e$prototype.pre = function (e) {
    this._beforeMiddleware.push(e)
    return this
  }
  e$prototype.use = function (e) {
    this._afterMiddleware.push(e)
    return this
  }
  e$prototype.reset = function () {
    for (var e in this.progress = 0, this.loading = false, this._queue.kill(), this._queue.pause(), this.resources) {
      var t = this.resources[e]
      if (t._onLoadBinding) {
        t._onLoadBinding.detach()
      }
      if (t.isLoading) {
        t.abort()
      }
    }
    this.resources = {}
    return this
  }
  e$prototype.load = function (e) {
    if ("function" === typeof e) {
      this.onComplete.once(e)
    }
    if (this.loading) {
      return this
    }
    if (this._queue.idle()) {
      this._onStart()
      this._onComplete()
    } else {
      for (var t = 100 / this._queue._tasks.length, n = 0; n < this._queue._tasks.length; ++n) {
        this._queue._tasks[n].data.progressChunk = t
      }
      this._onStart()
      this._queue.resume()
    }
    return this
  }
  e$prototype._prepareUrl = function (e) {
    var t
    var n = $_11981(e, {
      strictMode: true
    })
    t = n.protocol || !n.path || 0 === e.indexOf("//") ? e : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== e.charAt(0) ? this.baseUrl + "/" + e : this.baseUrl + e
    if (this.defaultQueryString) {
      var r = Oi.exec(t)[0]
      if (-1 !== (t = t.substr(0, t.length - r.length)).indexOf("?")) {
        t += "&" + this.defaultQueryString
      } else {
        t += "?" + this.defaultQueryString
      }
      t += r
    }
    return t
  }
  e$prototype._loadResource = function (e, t) {
    var n = this
    e._dequeue = t
    di(this._beforeMiddleware, function (t, r) {
      t.call(n, e, function () {
        r(e.isComplete ? {} : null)
      })
    }, function () {
      if (e.isComplete) {
        n._onLoad(e)
      } else {
        e._onLoadBinding = e.onComplete.once(n._onLoad, n)
        e.load()
      }
    }, true)
  }
  e$prototype._onStart = function () {
    this.progress = 0
    this.loading = true
    this.onStart.dispatch(this)
  }
  e$prototype._onComplete = function () {
    this.progress = 100
    this.loading = false
    this.onComplete.dispatch(this, this.resources)
  }
  e$prototype._onLoad = function (e) {
    var t = this
    e._onLoadBinding = null
    this._resourcesParsing.push(e)
    e._dequeue()
    di(this._afterMiddleware, function (n, r) {
      n.call(t, e, r)
    }, function () {
      e.onAfterMiddleware.dispatch(e)
      t.progress = Math.min(100, t.progress + e.progressChunk)
      t.onProgress.dispatch(t, e)
      if (e.error) {
        t.onError.dispatch(e.error, t, e)
      } else {
        t.onLoad.dispatch(t, e)
      }
      t._resourcesParsing.splice(t._resourcesParsing.indexOf(e), 1)
      if (t._queue.idle() && 0 === t._resourcesParsing.length) {
        t._onComplete()
      }
    }, true)
  }
  gi(e, [
    {
      key: "concurrency",
      get: function () {
        return this._queue.concurrency
      },
      set: function (e) {
        this._queue.concurrency = e
      }
    }
  ])
  return e
}()
ki._defaultBeforeMiddleware = []
ki._defaultAfterMiddleware = []
ki.pre = function (e) {
  ki._defaultBeforeMiddleware.push(e)
  return ki
}
ki.use = function (e) {
  ki._defaultAfterMiddleware.push(e)
  return ki
}
var Si = function (e, t) {
  return (Si = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Ti = function () {
  function e() {}
  e.add = function () {
    bi.setExtensionLoadType("svg", bi.LOAD_TYPE.XHR)
    bi.setExtensionXhrType("svg", bi.XHR_RESPONSE_TYPE.TEXT)
  }
  e.use = function (e, t) {
    if (!e.data || e.type !== bi.TYPE.IMAGE && "svg" !== e.extension) {
      t()
    } else {
      var /* [auto-meaningful-name] */e$data = e.data
      var /* [auto-meaningful-name] */e$url = e.url
      var /* [auto-meaningful-name] */e$name = e.name
      var /* [auto-meaningful-name] */e$metadata = e.metadata
      An.fromLoader(e$data, e$url, e$name, e$metadata).then(function (n) {
        e.texture = n
        t()
      }).catch(t)
    }
  }
  return e
}()
var Bi = function (e) {
  function t(n, r) {
    for (var i = e.call(this, n, r) || this, o = 0; o < t._plugins.length; ++o) {
      var a = t._plugins[o]
      var /* [auto-meaningful-name] */a$pre = a.pre
      var /* [auto-meaningful-name] */a$use = a.use
      if (a$pre) {
        i.pre(a$pre)
      }
      if (a$use) {
        i.use(a$use)
      }
    }
    i._protected = false
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Si(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.destroy = function () {
    if (!this._protected) {
      this.reset()
    }
  }
  Object.defineProperty(t, "shared", {
    get: function () {
      var /* [auto-meaningful-name] */t$_shared = t._shared
      if (!t$_shared) {
        (t$_shared = new t())._protected = true
        t._shared = t$_shared
      }
      return t$_shared
    },
    enumerable: false,
    configurable: true
  })
  t.registerPlugin = function (e) {
    t._plugins.push(e)
    if (e.add) {
      e.add()
    }
    return t
  }
  t._plugins = []
  return t
}(ki)
Bi.registerPlugin({
  use: Ci.parsing
})
Bi.registerPlugin(Ti)
var Di = function () {
  function e() {}
  e.init = function (e) {
    e = Object.assign({
      sharedLoader: false
    }, e)
    this.loader = e.sharedLoader ? Bi.shared : new Bi()
  }
  e.destroy = function () {
    if (this.loader) {
      this.loader.destroy()
      this.loader = null
    }
  }
  return e
}()
var Ii = bi
var Ri = function () {
  function e(e, t, n) {
    if (undefined === n) {
      n = null
    }
    this._texture = e instanceof An ? e : null
    this.baseTexture = e instanceof Jt ? e : this._texture.baseTexture
    this.textures = {}
    this.animations = {}
    this.data = t
    var /* [auto-meaningful-name] */this$baseTexture$resource = this.baseTexture.resource
    this.resolution = this._updateResolution(n || (this$baseTexture$resource ? this$baseTexture$resource.url : null))
    this._frames = this.data.frames
    this._frameKeys = Object.keys(this._frames)
    this._batchIndex = 0
    this._callback = null
  }
  e.prototype._updateResolution = function (e) {
    if (undefined === e) {
      e = null
    }
    var /* [auto-meaningful-name] */this$data$meta$scale = this.data.meta.scale
    var n = rt(e, null)
    if (null === n) {
      n = undefined !== this$data$meta$scale ? parseFloat(this$data$meta$scale) : 1
    }
    if (1 !== n) {
      this.baseTexture.setResolution(n)
    }
    return n
  }
  e.prototype.parse = function (t) {
    this._batchIndex = 0
    this._callback = t
    if (this._frameKeys.length <= e.BATCH_SIZE) {
      this._processFrames(0)
      this._processAnimations()
      this._parseComplete()
    } else {
      this._nextBatch()
    }
  }
  e.prototype._processFrames = function (t) {
    for (var n = t, /* [auto-meaningful-name] */e$BATCH_SIZE = e.BATCH_SIZE; n - t < e$BATCH_SIZE && n < this._frameKeys.length;) {
      var i = this._frameKeys[n]
      var o = this._frames[i]
      var /* [auto-meaningful-name] */o$frame = o.frame
      if (o$frame) {
        var s = null
        var c = null
        var u = false !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame
        var l = new ct(0, 0, Math.floor(u.w) / this.resolution, Math.floor(u.h) / this.resolution)
        s = o.rotated ? new ct(Math.floor(o$frame.x) / this.resolution, Math.floor(o$frame.y) / this.resolution, Math.floor(o$frame.h) / this.resolution, Math.floor(o$frame.w) / this.resolution) : new ct(Math.floor(o$frame.x) / this.resolution, Math.floor(o$frame.y) / this.resolution, Math.floor(o$frame.w) / this.resolution, Math.floor(o$frame.h) / this.resolution)
        if (false !== o.trimmed && o.spriteSourceSize) {
          c = new ct(Math.floor(o.spriteSourceSize.x) / this.resolution, Math.floor(o.spriteSourceSize.y) / this.resolution, Math.floor(o$frame.w) / this.resolution, Math.floor(o$frame.h) / this.resolution)
        }
        this.textures[i] = new An(this.baseTexture, s, l, c, o.rotated ? 2 : 0, o.anchor)
        An.addToCache(this.textures[i], i)
      }
      n++
    }
  }
  e.prototype._processAnimations = function () {
    var e = this.data.animations || {}
    for (var t in e) {
      this.animations[t] = []
      for (var n = 0; n < e[t].length; n++) {
        var r = e[t][n]
        this.animations[t].push(this.textures[r])
      }
    }
  }
  e.prototype._parseComplete = function () {
    var /* [auto-meaningful-name] */this$_callback = this._callback
    this._callback = null
    this._batchIndex = 0
    this$_callback.call(this, this.textures)
  }
  e.prototype._nextBatch = function () {
    var t = this
    this._processFrames(this._batchIndex * e.BATCH_SIZE)
    this._batchIndex++
    setTimeout(function () {
      if (t._batchIndex * e.BATCH_SIZE < t._frameKeys.length) {
        t._nextBatch()
      } else {
        t._processAnimations()
        t._parseComplete()
      }
    }, 0)
  }
  e.prototype.destroy = function (e) {
    var /* [auto-meaningful-name] */this$_texture
    for (var n in undefined === e && (e = false), this.textures) this.textures[n].destroy()
    this._frames = null
    this._frameKeys = null
    this.data = null
    this.textures = null
    if (e) {
      if (!(null === (this$_texture = this._texture) || undefined === this$_texture)) {
        this$_texture.destroy()
      }
      this.baseTexture.destroy()
    }
    this._texture = null
    this.baseTexture = null
  }
  e.BATCH_SIZE = 1e3
  return e
}()
var Fi = function () {
  function e() {}
  e.use = function (t, n) {
    var /* [auto-meaningful-name] */t$data
    var i
    var o = this
    var a = t.name + "_image"
    if (t.data && t.type === Ii.TYPE.JSON && t.data.frames && !o.resources[a]) {
      var s = null === (i = null === (t$data = t.data) || undefined === t$data ? undefined : t$data.meta) || undefined === i ? undefined : i.related_multi_packs
      if (Array.isArray(s)) {
        for (var c = function (e) {
            if ("string" !== typeof e) {
              return "continue"
            }
            var n = e.replace(".json", "")
            var r = ge.resolve(t.url.replace(o.baseUrl, ""), e)
            if (o.resources[n] || Object.values(o.resources).some(function (e) {
              return ge.format(ge.parse(e.url)) === r
            })) {
              return "continue"
            }
            var i = {
              crossOrigin: t.crossOrigin,
              loadType: Ii.LOAD_TYPE.XHR,
              xhrType: Ii.XHR_RESPONSE_TYPE.JSON,
              parentResource: t
            }
            o.add(n, r, i)
          }, u = 0, l = s; u < l.length; u++) {
          c(l[u])
        }
      }
      var f = {
        crossOrigin: t.crossOrigin,
        metadata: t.metadata.imageMetadata,
        parentResource: t
      }
      var d = e.getResourcePath(t, o.baseUrl)
      o.add(a, d, f, function (e) {
        if (e.error) {
          n(e.error)
        } else {
          var r = new Ri(e.texture, t.data, t.url)
          r.parse(function () {
            t.spritesheet = r
            t.textures = r.textures
            n()
          })
        }
      })
    } else {
      n()
    }
  }
  e.getResourcePath = function (e, t) {
    return e.isDataUrl ? e.data.meta.image : ge.resolve(e.url.replace(t, ""), e.data.meta.image)
  }
  return e
}()
var Pi = function (e, t) {
  return (Pi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Ni = new ht()
var Mi = new Uint16Array([0, 1, 2, 0, 2, 3])
var Li = function (e) {
  function t(t) {
    var n = e.call(this) || this
    n._anchor = new pt(n._onAnchorUpdate, n, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0)
    n._texture = null
    n._width = 0
    n._height = 0
    n._tint = null
    n._tintRGB = null
    n.tint = 16777215
    n.blendMode = q.NORMAL
    n._cachedTint = 16777215
    n.uvs = null
    n.texture = t || An.EMPTY
    n.vertexData = new Float32Array(8)
    n.vertexTrimmedData = null
    n._transformID = -1
    n._textureID = -1
    n._transformTrimmedID = -1
    n._textureTrimmedID = -1
    n.indices = Mi
    n.pluginName = "batch"
    n.isSprite = true
    n._roundPixels = fe.ROUND_PIXELS
    return n
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Pi(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype._onTextureUpdate = function () {
    this._textureID = -1
    this._textureTrimmedID = -1
    this._cachedTint = 16777215
    if (this._width) {
      this.scale.x = He(this.scale.x) * this._width / this._texture.orig.width
    }
    if (this._height) {
      this.scale.y = He(this.scale.y) * this._height / this._texture.orig.height
    }
  }
  t.prototype._onAnchorUpdate = function () {
    this._transformID = -1
    this._transformTrimmedID = -1
  }
  t.prototype.calculateVertices = function () {
    var /* [auto-meaningful-name] */this$_texture = this._texture
    if (this._transformID !== this.transform._worldID || this._textureID !== this$_texture._updateID) {
      if (this._textureID !== this$_texture._updateID) {
        this.uvs = this._texture._uvs.uvsFloat32
      }
      this._transformID = this.transform._worldID
      this._textureID = this$_texture._updateID
      var /* [auto-meaningful-name] */this$transform$worldTransform = this.transform.worldTransform
      var /* [auto-meaningful-name] */this$transform$worldTransform$a = this$transform$worldTransform.a
      var /* [auto-meaningful-name] */this$transform$worldTransform$b = this$transform$worldTransform.b
      var /* [auto-meaningful-name] */this$transform$worldTransform$c = this$transform$worldTransform.c
      var /* [auto-meaningful-name] */this$transform$worldTransform$d = this$transform$worldTransform.d
      var /* [auto-meaningful-name] */this$transform$worldTransform$tx = this$transform$worldTransform.tx
      var /* [auto-meaningful-name] */this$transform$worldTransform$ty = this$transform$worldTransform.ty
      var /* [auto-meaningful-name] */this$vertexData = this.vertexData
      var /* [auto-meaningful-name] */this$_texture$trim = this$_texture.trim
      var /* [auto-meaningful-name] */this$_texture$orig = this$_texture.orig
      var /* [auto-meaningful-name] */this$_anchor = this._anchor
      var d = 0
      var h = 0
      var p = 0
      var _ = 0
      if (this$_texture$trim) {
        d = (h = this$_texture$trim.x - this$_anchor._x * this$_texture$orig.width) + this$_texture$trim.width
        p = (_ = this$_texture$trim.y - this$_anchor._y * this$_texture$orig.height) + this$_texture$trim.height
      } else {
        d = (h = -this$_anchor._x * this$_texture$orig.width) + this$_texture$orig.width
        p = (_ = -this$_anchor._y * this$_texture$orig.height) + this$_texture$orig.height
      }
      this$vertexData[0] = this$transform$worldTransform$a * h + this$transform$worldTransform$c * _ + this$transform$worldTransform$tx
      this$vertexData[1] = this$transform$worldTransform$d * _ + this$transform$worldTransform$b * h + this$transform$worldTransform$ty
      this$vertexData[2] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * _ + this$transform$worldTransform$tx
      this$vertexData[3] = this$transform$worldTransform$d * _ + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
      this$vertexData[4] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
      this$vertexData[5] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
      this$vertexData[6] = this$transform$worldTransform$a * h + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
      this$vertexData[7] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * h + this$transform$worldTransform$ty
      if (this._roundPixels) {
        for (var /* [auto-meaningful-name] */fe$RESOLUTION = fe.RESOLUTION, g = 0; g < this$vertexData.length; ++g) {
          this$vertexData[g] = Math.round((this$vertexData[g] * fe$RESOLUTION | 0) / fe$RESOLUTION)
        }
      }
    }
  }
  t.prototype.calculateTrimmedVertices = function () {
    if (this.vertexTrimmedData) {
      if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
        return
      }
    } else {
      this.vertexTrimmedData = new Float32Array(8)
    }
    this._transformTrimmedID = this.transform._worldID
    this._textureTrimmedID = this._texture._updateID
    var /* [auto-meaningful-name] */this$_texture = this._texture
    var /* [auto-meaningful-name] */this$vertexTrimmedData = this.vertexTrimmedData
    var /* [auto-meaningful-name] */this$_texture$orig = this$_texture.orig
    var /* [auto-meaningful-name] */this$_anchor = this._anchor
    var /* [auto-meaningful-name] */this$transform$worldTransform = this.transform.worldTransform
    var /* [auto-meaningful-name] */this$transform$worldTransform$a = this$transform$worldTransform.a
    var /* [auto-meaningful-name] */this$transform$worldTransform$b = this$transform$worldTransform.b
    var /* [auto-meaningful-name] */this$transform$worldTransform$c = this$transform$worldTransform.c
    var /* [auto-meaningful-name] */this$transform$worldTransform$d = this$transform$worldTransform.d
    var /* [auto-meaningful-name] */this$transform$worldTransform$tx = this$transform$worldTransform.tx
    var /* [auto-meaningful-name] */this$transform$worldTransform$ty = this$transform$worldTransform.ty
    var f = -this$_anchor._x * this$_texture$orig.width
    var d = f + this$_texture$orig.width
    var h = -this$_anchor._y * this$_texture$orig.height
    var p = h + this$_texture$orig.height
    this$vertexTrimmedData[0] = this$transform$worldTransform$a * f + this$transform$worldTransform$c * h + this$transform$worldTransform$tx
    this$vertexTrimmedData[1] = this$transform$worldTransform$d * h + this$transform$worldTransform$b * f + this$transform$worldTransform$ty
    this$vertexTrimmedData[2] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * h + this$transform$worldTransform$tx
    this$vertexTrimmedData[3] = this$transform$worldTransform$d * h + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
    this$vertexTrimmedData[4] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
    this$vertexTrimmedData[5] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
    this$vertexTrimmedData[6] = this$transform$worldTransform$a * f + this$transform$worldTransform$c * p + this$transform$worldTransform$tx
    this$vertexTrimmedData[7] = this$transform$worldTransform$d * p + this$transform$worldTransform$b * f + this$transform$worldTransform$ty
  }
  t.prototype._render = function (e) {
    this.calculateVertices()
    e.batch.setObjectRenderer(e.plugins[this.pluginName])
    e.plugins[this.pluginName].render(this)
  }
  t.prototype._calculateBounds = function () {
    var /* [auto-meaningful-name] */this$_texture$trim = this._texture.trim
    var /* [auto-meaningful-name] */this$_texture$orig = this._texture.orig
    if (!this$_texture$trim || this$_texture$trim.width === this$_texture$orig.width && this$_texture$trim.height === this$_texture$orig.height) {
      this.calculateVertices()
      this._bounds.addQuad(this.vertexData)
    } else {
      this.calculateTrimmedVertices()
      this._bounds.addQuad(this.vertexTrimmedData)
    }
  }
  t.prototype.getLocalBounds = function (t) {
    return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new ct()), t = this._localBoundsRect), this._bounds.getRectangle(t)) : e.prototype.getLocalBounds.call(this, t)
  }
  t.prototype.containsPoint = function (e) {
    this.worldTransform.applyInverse(e, Ni)
    var /* [auto-meaningful-name] */this$_texture$orig$width = this._texture.orig.width
    var /* [auto-meaningful-name] */this$_texture$orig$height = this._texture.orig.height
    var r = -this$_texture$orig$width * this.anchor.x
    var i = 0
    return Ni.x >= r && Ni.x < r + this$_texture$orig$width && (i = -this$_texture$orig$height * this.anchor.y, Ni.y >= i && Ni.y < i + this$_texture$orig$height)
  }
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this, t)
    this._texture.off("update", this._onTextureUpdate, this)
    this._anchor = null
    if ("boolean" === typeof t ? t : t && t.texture) {
      var n = "boolean" === typeof t ? t : t && t.baseTexture
      this._texture.destroy(!!n)
    }
    this._texture = null
  }
  t.from = function (e, n) {
    return new t(e instanceof An ? e : An.from(e, n))
  }
  Object.defineProperty(t.prototype, "roundPixels", {
    get: function () {
      return this._roundPixels
    },
    set: function (e) {
      if (this._roundPixels !== e) {
        this._transformID = -1
      }
      this._roundPixels = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return Math.abs(this.scale.x) * this._texture.orig.width
    },
    set: function (e) {
      var t = He(this.scale.x) || 1
      this.scale.x = t * e / this._texture.orig.width
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return Math.abs(this.scale.y) * this._texture.orig.height
    },
    set: function (e) {
      var t = He(this.scale.y) || 1
      this.scale.y = t * e / this._texture.orig.height
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "anchor", {
    get: function () {
      return this._anchor
    },
    set: function (e) {
      this._anchor.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tint", {
    get: function () {
      return this._tint
    },
    set: function (e) {
      this._tint = e
      this._tintRGB = (e >> 16) + (65280 & e) + ((255 & e) << 16)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "texture", {
    get: function () {
      return this._texture
    },
    set: function (e) {
      if (this._texture !== e) {
        if (this._texture) {
          this._texture.off("update", this._onTextureUpdate, this)
        }
        this._texture = e || An.EMPTY
        this._cachedTint = 16777215
        this._textureID = -1
        this._textureTrimmedID = -1
        if (e) {
          if (e.baseTexture.valid) {
            this._onTextureUpdate()
          } else {
            e.once("update", this._onTextureUpdate, this)
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  return t
}(Pt)
var ji = function (e, t) {
  return (ji = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function Ui(e, t) {
  function n() {
    this.constructor = e
  }
  ji(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var Hi = new ht()
var Vi = function (e) {
  function t(t, n, r) {
    if (undefined === n) {
      n = 100
    }
    if (undefined === r) {
      r = 100
    }
    var i = e.call(this, t) || this
    i.tileTransform = new Ct()
    i._width = n
    i._height = r
    i.uvMatrix = i.texture.uvMatrix || new br(t)
    i.pluginName = "tilingSprite"
    i.uvRespectAnchor = false
    return i
  }
  Ui(t, e)
  Object.defineProperty(t.prototype, "clampMargin", {
    get: function () {
      return this.uvMatrix.clampMargin
    },
    set: function (e) {
      this.uvMatrix.clampMargin = e
      this.uvMatrix.update(true)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tileScale", {
    get: function () {
      return this.tileTransform.scale
    },
    set: function (e) {
      this.tileTransform.scale.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tilePosition", {
    get: function () {
      return this.tileTransform.position
    },
    set: function (e) {
      this.tileTransform.position.copyFrom(e)
    },
    enumerable: false,
    configurable: true
  })
  t.prototype._onTextureUpdate = function () {
    if (this.uvMatrix) {
      this.uvMatrix.texture = this._texture
    }
    this._cachedTint = 16777215
  }
  t.prototype._render = function (e) {
    var /* [auto-meaningful-name] */this$_texture = this._texture
    if (this$_texture && this$_texture.valid) {
      this.tileTransform.updateLocalTransform()
      this.uvMatrix.update()
      e.batch.setObjectRenderer(e.plugins[this.pluginName])
      e.plugins[this.pluginName].render(this)
    }
  }
  t.prototype._calculateBounds = function () {
    var e = this._width * -this._anchor._x
    var t = this._height * -this._anchor._y
    var n = this._width * (1 - this._anchor._x)
    var r = this._height * (1 - this._anchor._y)
    this._bounds.addFrame(this.transform, e, t, n, r)
  }
  t.prototype.getLocalBounds = function (t) {
    return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new ct()), t = this._localBoundsRect), this._bounds.getRectangle(t)) : e.prototype.getLocalBounds.call(this, t)
  }
  t.prototype.containsPoint = function (e) {
    this.worldTransform.applyInverse(e, Hi)
    var /* [auto-meaningful-name] */this$_width = this._width
    var /* [auto-meaningful-name] */this$_height = this._height
    var r = -this$_width * this.anchor._x
    if (Hi.x >= r && Hi.x < r + this$_width) {
      var i = -this$_height * this.anchor._y
      if (Hi.y >= i && Hi.y < i + this$_height) {
        return true
      }
    }
    return false
  }
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this, t)
    this.tileTransform = null
    this.uvMatrix = null
  }
  t.from = function (e, n) {
    return new t(e instanceof An ? e : An.from(e, n), n.width, n.height)
  }
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      return this._width
    },
    set: function (e) {
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      return this._height
    },
    set: function (e) {
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(Li)
var /* [auto-meaningful-name] */AttributeVec2AVertexPosition_nattributeVec2ATextureCoord_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformMat3UTransform_n_nvaryingVec2VTextureCoord_n_nvoidMainVoid_n_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordUTransformVec3ATextureCoord1$0$xy_n_n = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n"
var zi = new _t()
var Qi = function (e) {
  function t(t) {
    var n = e.call(this, t) || this
    var r = {
      globals: n.renderer.globalUniforms
    }
    n.shader = gr.from(AttributeVec2AVertexPosition_nattributeVec2ATextureCoord_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformMat3UTransform_n_nvaryingVec2VTextureCoord_n_nvoidMainVoid_n_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordUTransformVec3ATextureCoord1$0$xy_n_n, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n", r)
    n.simpleShader = gr.from(AttributeVec2AVertexPosition_nattributeVec2ATextureCoord_n_nuniformMat3ProjectionMatrix_nuniformMat3TranslationMatrix_nuniformMat3UTransform_n_nvaryingVec2VTextureCoord_n_nvoidMainVoid_n_nGl_PositionVec4ProjectionMatrixTranslationMatrixVec3AVertexPosition1$0$xy0$01$0_n_nVTextureCoordUTransformVec3ATextureCoord1$0$xy_n_n, "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n", r)
    n.quad = new Bn()
    n.state = vr.for2d()
    return n
  }
  Ui(t, e)
  t.prototype.render = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$quad = this.quad
    var /* [auto-meaningful-name] */this$quad$vertices = this$quad.vertices
    this$quad$vertices[0] = this$quad$vertices[6] = e._width * -e.anchor.x
    this$quad$vertices[1] = this$quad$vertices[3] = e._height * -e.anchor.y
    this$quad$vertices[2] = this$quad$vertices[4] = e._width * (1 - e.anchor.x)
    this$quad$vertices[5] = this$quad$vertices[7] = e._height * (1 - e.anchor.y)
    var i = e.uvRespectAnchor ? e.anchor.x : 0
    var o = e.uvRespectAnchor ? e.anchor.y : 0;
    (this$quad$vertices = this$quad.uvs)[0] = this$quad$vertices[6] = -i
    this$quad$vertices[1] = this$quad$vertices[3] = -o
    this$quad$vertices[2] = this$quad$vertices[4] = 1 - i
    this$quad$vertices[5] = this$quad$vertices[7] = 1 - o
    this$quad.invalidate()
    var /* [auto-meaningful-name] */e$_texture = e._texture
    var /* [auto-meaningful-name] */e$_texture$baseTexture = e$_texture.baseTexture
    var /* [auto-meaningful-name] */e$tileTransform$localTransform = e.tileTransform.localTransform
    var /* [auto-meaningful-name] */e$uvMatrix = e.uvMatrix
    var l = e$_texture$baseTexture.isPowerOfTwo && e$_texture.frame.width === e$_texture$baseTexture.width && e$_texture.frame.height === e$_texture$baseTexture.height
    if (l) {
      if (e$_texture$baseTexture._glTextures[this$renderer.CONTEXT_UID]) {
        l = e$_texture$baseTexture.wrapMode !== re.CLAMP
      } else {
        if (e$_texture$baseTexture.wrapMode === re.CLAMP) {
          e$_texture$baseTexture.wrapMode = re.REPEAT
        }
      }
    }
    var f = l ? this.simpleShader : this.shader
    var /* [auto-meaningful-name] */e$_texture$width = e$_texture.width
    var /* [auto-meaningful-name] */e$_texture$height = e$_texture.height
    var /* [auto-meaningful-name] */e$_width = e._width
    var /* [auto-meaningful-name] */e$_height = e._height
    zi.set(e$tileTransform$localTransform.a * e$_texture$width / e$_width, e$tileTransform$localTransform.b * e$_texture$width / e$_height, e$tileTransform$localTransform.c * e$_texture$height / e$_width, e$tileTransform$localTransform.d * e$_texture$height / e$_height, e$tileTransform$localTransform.tx / e$_width, e$tileTransform$localTransform.ty / e$_height)
    zi.invert()
    if (l) {
      zi.prepend(e$uvMatrix.mapCoord)
    } else {
      f.uniforms.uMapCoord = e$uvMatrix.mapCoord.toArray(true)
      f.uniforms.uClampFrame = e$uvMatrix.uClampFrame
      f.uniforms.uClampOffset = e$uvMatrix.uClampOffset
    }
    f.uniforms.uTransform = zi.toArray(true)
    f.uniforms.uColor = Ie(e.tint, e.worldAlpha, f.uniforms.uColor, e$_texture$baseTexture.alphaMode)
    f.uniforms.translationMatrix = e.transform.worldTransform.toArray(true)
    f.uniforms.uSampler = e$_texture
    this$renderer.shader.bind(f)
    this$renderer.geometry.bind(this$quad)
    this.state.blendMode = Te(e.blendMode, e$_texture$baseTexture.alphaMode)
    this$renderer.state.set(this.state)
    this$renderer.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
  }
  return t
}(Mn)
var Wi = new _t()
It.prototype._cacheAsBitmap = false
It.prototype._cacheData = null
It.prototype._cacheAsBitmapResolution = null
var Ki = function () {
  this.textureCacheId = null
  this.originalRender = null
  this.originalRenderCanvas = null
  this.originalCalculateBounds = null
  this.originalGetLocalBounds = null
  this.originalUpdateTransform = null
  this.originalDestroy = null
  this.originalMask = null
  this.originalFilterArea = null
  this.originalContainsPoint = null
  this.sprite = null
}
Object.defineProperties(It.prototype, {
  cacheAsBitmapResolution: {
    get: function () {
      return this._cacheAsBitmapResolution
    },
    set: function (e) {
      if (e !== this._cacheAsBitmapResolution) {
        this._cacheAsBitmapResolution = e
        if (this.cacheAsBitmap) {
          this.cacheAsBitmap = false
          this.cacheAsBitmap = true
        }
      }
    }
  },
  cacheAsBitmap: {
    get: function () {
      return this._cacheAsBitmap
    },
    set: function (e) {
      var t
      if (this._cacheAsBitmap !== e) {
        this._cacheAsBitmap = e
        if (e) {
          if (!this._cacheData) {
            this._cacheData = new Ki()
          }
          (t = this._cacheData).originalRender = this.render
          t.originalRenderCanvas = this.renderCanvas
          t.originalUpdateTransform = this.updateTransform
          t.originalCalculateBounds = this.calculateBounds
          t.originalGetLocalBounds = this.getLocalBounds
          t.originalDestroy = this.destroy
          t.originalContainsPoint = this.containsPoint
          t.originalMask = this._mask
          t.originalFilterArea = this.filterArea
          this.render = this._renderCached
          this.renderCanvas = this._renderCachedCanvas
          this.destroy = this._cacheAsBitmapDestroy
        } else {
          if ((t = this._cacheData).sprite) {
            this._destroyCachedDisplayObject()
          }
          this.render = t.originalRender
          this.renderCanvas = t.originalRenderCanvas
          this.calculateBounds = t.originalCalculateBounds
          this.getLocalBounds = t.originalGetLocalBounds
          this.destroy = t.originalDestroy
          this.updateTransform = t.originalUpdateTransform
          this.containsPoint = t.originalContainsPoint
          this._mask = t.originalMask
          this.filterArea = t.originalFilterArea
        }
      }
    }
  }
})
It.prototype._renderCached = function (e) {
  if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
    this._initCachedDisplayObject(e)
    this._cacheData.sprite.transform._worldID = this.transform._worldID
    this._cacheData.sprite.worldAlpha = this.worldAlpha
    this._cacheData.sprite._render(e)
  }
}
It.prototype._initCachedDisplayObject = function (e) {
  if (!this._cacheData || !this._cacheData.sprite) {
    var /* [auto-meaningful-name] */this$alpha = this.alpha
    this.alpha = 1
    e.batch.flush()
    var n = this.getLocalBounds(null, true).clone()
    if (this.filters) {
      var /* [auto-meaningful-name] */this$filters0$padding = this.filters[0].padding
      n.pad(this$filters0$padding)
    }
    n.ceil(fe.RESOLUTION)
    var /* [auto-meaningful-name] */e$renderTexture$current = e.renderTexture.current
    var o = e.renderTexture.sourceFrame.clone()
    var a = e.renderTexture.destinationFrame.clone()
    var /* [auto-meaningful-name] */e$projection$transform = e.projection.transform
    var c = vn.create({
      width: n.width,
      height: n.height,
      resolution: this.cacheAsBitmapResolution || e.resolution
    })
    var u = "cacheAsBitmap_" + Ge()
    this._cacheData.textureCacheId = u
    Jt.addToCache(c.baseTexture, u)
    An.addToCache(c, u)
    var l = this.transform.localTransform.copyTo(Wi).invert().translate(-n.x, -n.y)
    this.render = this._cacheData.originalRender
    e.render(this, {
      renderTexture: c,
      clear: true,
      transform: l,
      skipUpdateTransform: false
    })
    e.projection.transform = e$projection$transform
    e.renderTexture.bind(e$renderTexture$current, o, a)
    this.render = this._renderCached
    this.updateTransform = this.displayObjectUpdateTransform
    this.calculateBounds = this._calculateCachedBounds
    this.getLocalBounds = this._getCachedLocalBounds
    this._mask = null
    this.filterArea = null
    this.alpha = this$alpha
    var f = new Li(c)
    f.transform.worldTransform = this.transform.worldTransform
    f.anchor.x = -n.x / n.width
    f.anchor.y = -n.y / n.height
    f.alpha = this$alpha
    f._bounds = this._bounds
    this._cacheData.sprite = f
    this.transform._parentID = -1
    if (this.parent) {
      this.updateTransform()
    } else {
      this.enableTempParent()
      this.updateTransform()
      this.disableTempParent(null)
    }
    this.containsPoint = f.containsPoint.bind(f)
  }
}
It.prototype._renderCachedCanvas = function (e) {
  if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
    this._initCachedDisplayObjectCanvas(e)
    this._cacheData.sprite.worldAlpha = this.worldAlpha
    this._cacheData.sprite._renderCanvas(e)
  }
}
It.prototype._initCachedDisplayObjectCanvas = function (e) {
  if (!this._cacheData || !this._cacheData.sprite) {
    var t = this.getLocalBounds(null, true)
    var /* [auto-meaningful-name] */this$alpha = this.alpha
    this.alpha = 1
    var /* [auto-meaningful-name] */e$context = e.context
    var /* [auto-meaningful-name] */e$_projTransform = e._projTransform
    t.ceil(fe.RESOLUTION)
    var o = vn.create({
      width: t.width,
      height: t.height
    })
    var a = "cacheAsBitmap_" + Ge()
    this._cacheData.textureCacheId = a
    Jt.addToCache(o.baseTexture, a)
    An.addToCache(o, a)
    var s = Wi
    this.transform.localTransform.copyTo(s)
    s.invert()
    s.tx -= t.x
    s.ty -= t.y
    this.renderCanvas = this._cacheData.originalRenderCanvas
    e.render(this, {
      renderTexture: o,
      clear: true,
      transform: s,
      skipUpdateTransform: false
    })
    e.context = e$context
    e._projTransform = e$_projTransform
    this.renderCanvas = this._renderCachedCanvas
    this.updateTransform = this.displayObjectUpdateTransform
    this.calculateBounds = this._calculateCachedBounds
    this.getLocalBounds = this._getCachedLocalBounds
    this._mask = null
    this.filterArea = null
    this.alpha = this$alpha
    var c = new Li(o)
    c.transform.worldTransform = this.transform.worldTransform
    c.anchor.x = -t.x / t.width
    c.anchor.y = -t.y / t.height
    c.alpha = this$alpha
    c._bounds = this._bounds
    this._cacheData.sprite = c
    this.transform._parentID = -1
    if (this.parent) {
      this.updateTransform()
    } else {
      this.parent = e._tempDisplayObjectParent
      this.updateTransform()
      this.parent = null
    }
    this.containsPoint = c.containsPoint.bind(c)
  }
}
It.prototype._calculateCachedBounds = function () {
  this._bounds.clear()
  this._cacheData.sprite.transform._worldID = this.transform._worldID
  this._cacheData.sprite._calculateBounds()
  this._bounds.updateID = this._boundsID
}
It.prototype._getCachedLocalBounds = function () {
  return this._cacheData.sprite.getLocalBounds(null)
}
It.prototype._destroyCachedDisplayObject = function () {
  this._cacheData.sprite._texture.destroy(true)
  this._cacheData.sprite = null
  Jt.removeFromCache(this._cacheData.textureCacheId)
  An.removeFromCache(this._cacheData.textureCacheId)
  this._cacheData.textureCacheId = null
}
It.prototype._cacheAsBitmapDestroy = function (e) {
  this.cacheAsBitmap = false
  this.destroy(e)
}
It.prototype.name = null
Pt.prototype.getChildByName = function (e, t) {
  for (var n = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; n < this$children$length; n++) {
    if (this.children[n].name === e) {
      return this.children[n]
    }
  }
  if (t) {
    for (n = 0, this$children$length = this.children.length; n < this$children$length; n++) {
      if (this.children[n].getChildByName) {
        var i = this.children[n].getChildByName(e, true)
        if (i) {
          return i
        }
      }
    }
  }
  return null
}
It.prototype.getGlobalPosition = function (e, t) {
  if (undefined === e) {
    e = new ht()
  }
  if (undefined === t) {
    t = false
  }
  if (this.parent) {
    this.parent.toGlobal(this.position, e, t)
  } else {
    e.x = this.position.x
    e.y = this.position.y
  }
  return e
}
var Xi = function (e, t) {
  return (Xi = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var Yi = function () {
  function e(e) {
    this.renderer = e
    this._foundShapes = []
  }
  e.prototype.pushMask = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var n = e.maskObject || e
    this$renderer.context.save()
    var /* [auto-meaningful-name] */this$_foundShapes = this._foundShapes
    this.recursiveFindShapes(n, this$_foundShapes)
    if (this$_foundShapes.length > 0) {
      var /* [auto-meaningful-name] */this$renderer$context = this$renderer.context
      this$renderer$context.beginPath()
      for (var o = 0; o < this$_foundShapes.length; o++) {
        var a = this$_foundShapes[o]
        var /* [auto-meaningful-name] */a$transform$worldTransform = a.transform.worldTransform
        this.renderer.setContextTransform(a$transform$worldTransform)
        this.renderGraphicsShape(a)
      }
      this$_foundShapes.length = 0
      this$renderer$context.clip()
    }
  }
  e.prototype.recursiveFindShapes = function (e, t) {
    if (e.geometry && e.geometry.graphicsData) {
      t.push(e)
    }
    var /* [auto-meaningful-name] */e$children = e.children
    if (e$children) {
      for (var r = 0; r < e$children.length; r++) {
        this.recursiveFindShapes(e$children[r], t)
      }
    }
  }
  e.prototype.renderGraphicsShape = function (e) {
    e.finishPoly()
    var /* [auto-meaningful-name] */this$renderer$context = this.renderer.context
    var /* [auto-meaningful-name] */e$geometry$graphicsData = e.geometry.graphicsData
    var /* [auto-meaningful-name] */e$geometry$graphicsData$length = e$geometry$graphicsData.length
    if (0 !== e$geometry$graphicsData$length) {
      for (var i = 0; i < e$geometry$graphicsData$length; i++) {
        var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape = e$geometry$graphicsData[i].shape
        if (e$geometry$graphicsDataI$shape.type === it.POLY) {
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$points = e$geometry$graphicsDataI$shape.points
          this$renderer$context.moveTo(e$geometry$graphicsDataI$shape$points[0], e$geometry$graphicsDataI$shape$points[1])
          for (var s = 1; s < e$geometry$graphicsDataI$shape$points.length / 2; s++) {
            this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$points[2 * s], e$geometry$graphicsDataI$shape$points[2 * s + 1])
          }
          if (e$geometry$graphicsDataI$shape$points[0] === e$geometry$graphicsDataI$shape$points[e$geometry$graphicsDataI$shape$points.length - 2] && e$geometry$graphicsDataI$shape$points[1] === e$geometry$graphicsDataI$shape$points[e$geometry$graphicsDataI$shape$points.length - 1]) {
            this$renderer$context.closePath()
          }
        } else if (e$geometry$graphicsDataI$shape.type === it.RECT) {
          this$renderer$context.rect(e$geometry$graphicsDataI$shape.x, e$geometry$graphicsDataI$shape.y, e$geometry$graphicsDataI$shape.width, e$geometry$graphicsDataI$shape.height)
          this$renderer$context.closePath()
        } else if (e$geometry$graphicsDataI$shape.type === it.CIRC) {
          this$renderer$context.arc(e$geometry$graphicsDataI$shape.x, e$geometry$graphicsDataI$shape.y, e$geometry$graphicsDataI$shape.radius, 0, 2 * Math.PI)
          this$renderer$context.closePath()
        } else if (e$geometry$graphicsDataI$shape.type === it.ELIP) {
          var c = 2 * e$geometry$graphicsDataI$shape.width
          var u = 2 * e$geometry$graphicsDataI$shape.height
          var l = e$geometry$graphicsDataI$shape.x - c / 2
          var f = e$geometry$graphicsDataI$shape.y - u / 2
          var d = c / 2 * .5522848
          var h = u / 2 * .5522848
          var p = l + c
          var _ = f + u
          var A = l + c / 2
          var g = f + u / 2
          this$renderer$context.moveTo(l, g)
          this$renderer$context.bezierCurveTo(l, g - h, A - d, f, A, f)
          this$renderer$context.bezierCurveTo(A + d, f, p, g - h, p, g)
          this$renderer$context.bezierCurveTo(p, g + h, A + d, _, A, _)
          this$renderer$context.bezierCurveTo(A - d, _, l, g + h, l, g)
          this$renderer$context.closePath()
        } else if (e$geometry$graphicsDataI$shape.type === it.RREC) {
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$x = e$geometry$graphicsDataI$shape.x
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$y = e$geometry$graphicsDataI$shape.y
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$width = e$geometry$graphicsDataI$shape.width
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$height = e$geometry$graphicsDataI$shape.height
          var /* [auto-meaningful-name] */e$geometry$graphicsDataI$shape$radius = e$geometry$graphicsDataI$shape.radius
          var E = Math.min(e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$height) / 2 | 0
          e$geometry$graphicsDataI$shape$radius = e$geometry$graphicsDataI$shape$radius > E ? E : e$geometry$graphicsDataI$shape$radius
          this$renderer$context.moveTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height - e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height, e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width - e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height, e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$height - e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width, e$geometry$graphicsDataI$shape$y, e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$width - e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y)
          this$renderer$context.lineTo(e$geometry$graphicsDataI$shape$x + e$geometry$graphicsDataI$shape$radius, e$geometry$graphicsDataI$shape$y)
          this$renderer$context.quadraticCurveTo(e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y, e$geometry$graphicsDataI$shape$x, e$geometry$graphicsDataI$shape$y + e$geometry$graphicsDataI$shape$radius)
          this$renderer$context.closePath()
        }
      }
    }
  }
  e.prototype.popMask = function (e) {
    e.context.restore()
    e.invalidateBlendMode()
  }
  e.prototype.destroy = function () {}
  return e
}()
function qi(e) {
  var t = document.createElement("canvas")
  t.width = 6
  t.height = 1
  var n = t.getContext("2d")
  n.fillStyle = e
  n.fillRect(0, 0, 6, 1)
  return t
}
function $i() {
  if ("undefined" === typeof document) {
    return false
  }
  var e = qi("#ff00ff")
  var t = qi("#ffff00")
  var n = document.createElement("canvas")
  n.width = 6
  n.height = 1
  var r = n.getContext("2d")
  r.globalCompositeOperation = "multiply"
  r.drawImage(e, 0, 0)
  r.drawImage(t, 2, 0)
  var i = r.getImageData(2, 0, 1, 1)
  if (!i) {
    return false
  }
  var /* [auto-meaningful-name] */i$data = i.data
  return 255 === i$data[0] && 0 === i$data[1] && 0 === i$data[2]
}
var Ji = new _t()
var Zi = function (e) {
  function t(n) {
    var r
    var i = e.call(this, X.CANVAS, n) || this
    i.rootContext = i.view.getContext("2d", {
      alpha: i.useContextAlpha
    })
    i.context = i.rootContext
    i.refresh = true
    i.maskManager = new Yi(i)
    i.smoothProperty = "imageSmoothingEnabled"
    if (!i.rootContext.imageSmoothingEnabled) {
      var /* [auto-meaningful-name] */i$rootContext = i.rootContext
      if (i$rootContext.webkitImageSmoothingEnabled) {
        i.smoothProperty = "webkitImageSmoothingEnabled"
      } else {
        if (i$rootContext.mozImageSmoothingEnabled) {
          i.smoothProperty = "mozImageSmoothingEnabled"
        } else {
          if (i$rootContext.oImageSmoothingEnabled) {
            i.smoothProperty = "oImageSmoothingEnabled"
          } else {
            if (i$rootContext.msImageSmoothingEnabled) {
              i.smoothProperty = "msImageSmoothingEnabled"
            }
          }
        }
      }
    }
    i.initPlugins(t.__plugins)
    i.blendModes = (undefined === r && (r = []), $i() ? (r[q.NORMAL] = "source-over", r[q.ADD] = "lighter", r[q.MULTIPLY] = "multiply", r[q.SCREEN] = "screen", r[q.OVERLAY] = "overlay", r[q.DARKEN] = "darken", r[q.LIGHTEN] = "lighten", r[q.COLOR_DODGE] = "color-dodge", r[q.COLOR_BURN] = "color-burn", r[q.HARD_LIGHT] = "hard-light", r[q.SOFT_LIGHT] = "soft-light", r[q.DIFFERENCE] = "difference", r[q.EXCLUSION] = "exclusion", r[q.HUE] = "hue", r[q.SATURATION] = "saturate", r[q.COLOR] = "color", r[q.LUMINOSITY] = "luminosity") : (r[q.NORMAL] = "source-over", r[q.ADD] = "lighter", r[q.MULTIPLY] = "source-over", r[q.SCREEN] = "source-over", r[q.OVERLAY] = "source-over", r[q.DARKEN] = "source-over", r[q.LIGHTEN] = "source-over", r[q.COLOR_DODGE] = "source-over", r[q.COLOR_BURN] = "source-over", r[q.HARD_LIGHT] = "source-over", r[q.SOFT_LIGHT] = "source-over", r[q.DIFFERENCE] = "source-over", r[q.EXCLUSION] = "source-over", r[q.HUE] = "source-over", r[q.SATURATION] = "source-over", r[q.COLOR] = "source-over", r[q.LUMINOSITY] = "source-over"), r[q.NORMAL_NPM] = r[q.NORMAL], r[q.ADD_NPM] = r[q.ADD], r[q.SCREEN_NPM] = r[q.SCREEN], r[q.SRC_IN] = "source-in", r[q.SRC_OUT] = "source-out", r[q.SRC_ATOP] = "source-atop", r[q.DST_OVER] = "destination-over", r[q.DST_IN] = "destination-in", r[q.DST_OUT] = "destination-out", r[q.DST_ATOP] = "destination-atop", r[q.XOR] = "xor", r[q.SUBTRACT] = "source-over", r)
    i._activeBlendMode = null
    i._outerBlend = false
    i._projTransform = null
    i.renderingToScreen = false
    be("Canvas")
    i.resize(i.options.width, i.options.height)
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Xi(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.render = function (e, t) {
    if (this.view) {
      var n
      var r
      var i
      var o
      if (t) {
        if (t instanceof vn || t instanceof hn) {
          Qe("6.0.0", "CanvasRenderer#render arguments changed, use options instead.")
          n = t
          r = arguments[2]
          i = arguments[3]
          o = arguments[4]
        } else {
          n = t.renderTexture
          r = t.clear
          i = t.transform
          o = t.skipUpdateTransform
        }
      }
      this.renderingToScreen = !n
      this.emit("prerender")
      var /* [auto-meaningful-name] */this$resolution = this.resolution
      if (n) {
        if (!(n = n.castToBaseTexture())._canvasRenderTarget) {
          n._canvasRenderTarget = new $e(n.width, n.height, n.resolution)
          n.resource = new nn(n._canvasRenderTarget.canvas)
          n.valid = true
        }
        this.context = n._canvasRenderTarget.context
        this.resolution = n._canvasRenderTarget.resolution
      } else {
        this.context = this.rootContext
      }
      var /* [auto-meaningful-name] */this$context = this.context
      this._projTransform = i || null
      if (!n) {
        this._lastObjectRendered = e
      }
      if (!o) {
        var c = e.enableTempParent()
        e.updateTransform()
        e.disableTempParent(c)
      }
      this$context.save()
      this$context.setTransform(1, 0, 0, 1, 0, 0)
      this$context.globalAlpha = 1
      this._activeBlendMode = q.NORMAL
      this._outerBlend = false
      this$context.globalCompositeOperation = this.blendModes[q.NORMAL]
      if (undefined !== r ? r : this.clearBeforeRender) {
        if (this.renderingToScreen) {
          this$context.clearRect(0, 0, this.width, this.height)
          if (this.backgroundAlpha > 0) {
            this$context.globalAlpha = this.useContextAlpha ? this.backgroundAlpha : 1
            this$context.fillStyle = this._backgroundColorString
            this$context.fillRect(0, 0, this.width, this.height)
            this$context.globalAlpha = 1
          }
        } else {
          (n = n)._canvasRenderTarget.clear()
          var /* [auto-meaningful-name] */n$clearColor = n.clearColor
          if (n$clearColor[3] > 0) {
            this$context.globalAlpha = this.useContextAlpha ? n$clearColor[3] : 1
            this$context.fillStyle = Ce(ke(n$clearColor))
            this$context.fillRect(0, 0, n.realWidth, n.realHeight)
            this$context.globalAlpha = 1
          }
        }
      }
      var /* [auto-meaningful-name] */this$context1 = this.context
      this.context = this$context
      e.renderCanvas(this)
      this.context = this$context1
      this$context.restore()
      this.resolution = this$resolution
      this._projTransform = null
      this.emit("postrender")
    }
  }
  t.prototype.setContextTransform = function (e, t, n) {
    var r = e
    var /* [auto-meaningful-name] */this$_projTransform = this._projTransform
    var /* [auto-meaningful-name] */this$resolution = this.resolution
    n = n || this$resolution
    if (this$_projTransform) {
      (r = Ji).copyFrom(e)
      r.prepend(this$_projTransform)
    }
    if (t) {
      this.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * this$resolution | 0, r.ty * this$resolution | 0)
    } else {
      this.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * this$resolution, r.ty * this$resolution)
    }
  }
  t.prototype.clear = function (e, t) {
    if (undefined === e) {
      e = this._backgroundColorString
    }
    if (undefined === t) {
      t = this.backgroundAlpha
    }
    var /* [auto-meaningful-name] */this$context = this.context
    this$context.clearRect(0, 0, this.width, this.height)
    if (e) {
      this$context.globalAlpha = this.useContextAlpha ? t : 1
      this$context.fillStyle = e
      this$context.fillRect(0, 0, this.width, this.height)
      this$context.globalAlpha = 1
    }
  }
  t.prototype.setBlendMode = function (e, t) {
    var n = e === q.SRC_IN || e === q.SRC_OUT || e === q.DST_IN || e === q.DST_ATOP
    if (!t && n) {
      e = q.NORMAL
    }
    if (this._activeBlendMode !== e) {
      this._activeBlendMode = e
      this._outerBlend = n
      this.context.globalCompositeOperation = this.blendModes[e]
    }
  }
  t.prototype.destroy = function (t) {
    e.prototype.destroy.call(this, t)
    this.context = null
    this.refresh = true
    this.maskManager.destroy()
    this.maskManager = null
    this.smoothProperty = null
  }
  t.prototype.resize = function (t, n) {
    e.prototype.resize.call(this, t, n)
    if (this.smoothProperty) {
      this.rootContext[this.smoothProperty] = fe.SCALE_MODE === ne.LINEAR
    }
  }
  t.prototype.invalidateBlendMode = function () {
    this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
  }
  t.registerPlugin = function (e, n) {
    t.__plugins = t.__plugins || {}
    t.__plugins[e] = n
  }
  return t
}(Hr)
var eo = {
  canvas: null,
  getTintedCanvas: function (e, t) {
    var /* [auto-meaningful-name] */e$texture = e.texture
    var r = "#" + ("00000" + (0 | (t = eo.roundColor(t))).toString(16)).substr(-6)
    e$texture.tintCache = e$texture.tintCache || {}
    var i
    var o = e$texture.tintCache[r]
    if (o) {
      if (o.tintId === e$texture._updateID) {
        return e$texture.tintCache[r]
      }
      i = e$texture.tintCache[r]
    } else {
      i = document.createElement("canvas")
    }
    eo.tintMethod(e$texture, t, i)
    i.tintId = e$texture._updateID
    if (eo.convertTintToImage) {
      var a = new Image()
      a.src = i.toDataURL()
      e$texture.tintCache[r] = a
    } else {
      e$texture.tintCache[r] = i
    }
    return i
  },
  getTintedPattern: function (e, t) {
    var n = "#" + ("00000" + (0 | (t = eo.roundColor(t))).toString(16)).substr(-6)
    e.patternCache = e.patternCache || {}
    var r = e.patternCache[n]
    if (!(r && r.tintId === e._updateID)) {
      if (!eo.canvas) {
        eo.canvas = document.createElement("canvas")
      }
      eo.tintMethod(e, t, eo.canvas);
      (r = eo.canvas.getContext("2d").createPattern(eo.canvas, "repeat")).tintId = e._updateID
      e.patternCache[n] = r
    }
    return r
  },
  tintWithMultiply: function (e, t, n) {
    var r = n.getContext("2d")
    var i = e._frame.clone()
    var /* [auto-meaningful-name] */e$baseTexture$resolution = e.baseTexture.resolution
    i.x *= e$baseTexture$resolution
    i.y *= e$baseTexture$resolution
    i.width *= e$baseTexture$resolution
    i.height *= e$baseTexture$resolution
    n.width = Math.ceil(i.width)
    n.height = Math.ceil(i.height)
    r.save()
    r.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6)
    r.fillRect(0, 0, i.width, i.height)
    r.globalCompositeOperation = "multiply"
    var a = e.baseTexture.getDrawableSource()
    r.drawImage(a, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.globalCompositeOperation = "destination-atop"
    r.drawImage(a, i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.restore()
  },
  tintWithOverlay: function (e, t, n) {
    var r = n.getContext("2d")
    var i = e._frame.clone()
    var /* [auto-meaningful-name] */e$baseTexture$resolution = e.baseTexture.resolution
    i.x *= e$baseTexture$resolution
    i.y *= e$baseTexture$resolution
    i.width *= e$baseTexture$resolution
    i.height *= e$baseTexture$resolution
    n.width = Math.ceil(i.width)
    n.height = Math.ceil(i.height)
    r.save()
    r.globalCompositeOperation = "copy"
    r.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6)
    r.fillRect(0, 0, i.width, i.height)
    r.globalCompositeOperation = "destination-atop"
    r.drawImage(e.baseTexture.getDrawableSource(), i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.restore()
  },
  tintWithPerPixel: function (e, t, n) {
    var r = n.getContext("2d")
    var i = e._frame.clone()
    var /* [auto-meaningful-name] */e$baseTexture$resolution = e.baseTexture.resolution
    i.x *= e$baseTexture$resolution
    i.y *= e$baseTexture$resolution
    i.width *= e$baseTexture$resolution
    i.height *= e$baseTexture$resolution
    n.width = Math.ceil(i.width)
    n.height = Math.ceil(i.height)
    r.save()
    r.globalCompositeOperation = "copy"
    r.drawImage(e.baseTexture.getDrawableSource(), i.x, i.y, i.width, i.height, 0, 0, i.width, i.height)
    r.restore()
    for (var a = xe(t), s = a[0], c = a[1], u = a[2], l = r.getImageData(0, 0, i.width, i.height), /* [auto-meaningful-name] */l$data = l.data, d = 0; d < l$data.length; d += 4) {
      l$data[d + 0] *= s
      l$data[d + 1] *= c
      l$data[d + 2] *= u
    }
    r.putImageData(l, 0, 0)
  },
  roundColor: function (e) {
    var /* [auto-meaningful-name] */eo$cacheStepsPerColorChannel = eo.cacheStepsPerColorChannel
    var n = xe(e)
    n[0] = Math.min(255, n[0] / eo$cacheStepsPerColorChannel * eo$cacheStepsPerColorChannel)
    n[1] = Math.min(255, n[1] / eo$cacheStepsPerColorChannel * eo$cacheStepsPerColorChannel)
    n[2] = Math.min(255, n[2] / eo$cacheStepsPerColorChannel * eo$cacheStepsPerColorChannel)
    return ke(n)
  },
  cacheStepsPerColorChannel: 8,
  convertTintToImage: false,
  canUseMultiply: $i(),
  tintMethod: null
}
eo.tintMethod = eo.canUseMultiply ? eo.tintWithMultiply : eo.tintWithPerPixel
var to
var no
var /* [auto-meaningful-name] */Vr$create = Vr.create
Vr.create = function (e) {
  if (!(e && e.forceCanvas)) {
    try {
      return Vr$create(e)
    } catch (t) {}
  }
  return new Zi(e)
}
Jt.prototype.getDrawableSource = function () {
  var /* [auto-meaningful-name] */this$resource = this.resource
  return this$resource ? this$resource.bitmap || this$resource.source : null
}
hn.prototype._canvasRenderTarget = null
An.prototype.patternCache = null
An.prototype.tintCache = null;
(function (e) {
  e.MITER = "miter"
  e.BEVEL = "bevel"
  e.ROUND = "round"
})(to || (to = {}));
(function (e) {
  e.BUTT = "butt"
  e.ROUND = "round"
  e.SQUARE = "square"
})(no || (no = {}))
var io = {
  adaptive: true,
  maxLength: 10,
  minSegments: 8,
  maxSegments: 2048,
  epsilon: 1e-4,
  _segmentsCount: function (e, t) {
    if (undefined === t) {
      t = 20
    }
    if (!this.adaptive || !e || isNaN(e)) {
      return t
    }
    var n = Math.ceil(e / this.maxLength)
    if (n < this.minSegments) {
      n = this.minSegments
    } else {
      if (n > this.maxSegments) {
        n = this.maxSegments
      }
    }
    return n
  }
}
var oo = function () {
  function e() {
    this.color = 16777215
    this.alpha = 1
    this.texture = An.WHITE
    this.matrix = null
    this.visible = false
    this.reset()
  }
  e.prototype.clone = function () {
    var t = new e()
    t.color = this.color
    t.alpha = this.alpha
    t.texture = this.texture
    t.matrix = this.matrix
    t.visible = this.visible
    return t
  }
  e.prototype.reset = function () {
    this.color = 16777215
    this.alpha = 1
    this.texture = An.WHITE
    this.matrix = null
    this.visible = false
  }
  e.prototype.destroy = function () {
    this.texture = null
    this.matrix = null
  }
  return e
}()
var ao = function (e, t) {
  return (ao = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
function so(e, t) {
  function n() {
    this.constructor = e
  }
  ao(e, t)
  e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
}
var co = {
  build: function (e) {
    e.points = e.shape.points.slice()
  },
  triangulate: function (e, t) {
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */e$holes = e.holes
    var /* [auto-meaningful-name] */t$points = t.points
    var /* [auto-meaningful-name] */t$indices = t.indices
    if (e$points.length >= 6) {
      for (var a = [], s = 0; s < e$holes.length; s++) {
        var c = e$holes[s]
        a.push(e$points.length / 2)
        e$points = e$points.concat(c.points)
      }
      var u = $_1338(e$points, a, 2)
      if (!u) {
        return
      }
      var l = t$points.length / 2
      for (s = 0; s < u.length; s += 3) {
        t$indices.push(u[s] + l)
        t$indices.push(u[s + 1] + l)
        t$indices.push(u[s + 2] + l)
      }
      for (s = 0; s < e$points.length; s++) {
        t$points.push(e$points[s])
      }
    }
  }
}
var uo = {
  build: function (e) {
    var t
    var n
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    e$points.length = 0
    if (e.type === it.CIRC) {
      t = e$shape.radius
      n = e$shape.radius
    } else {
      var /* [auto-meaningful-name] */e$shape1 = e.shape
      t = e$shape1.width
      n = e$shape1.height
    }
    if (0 !== t && 0 !== n) {
      var c = Math.floor(30 * Math.sqrt(e$shape.radius)) || Math.floor(15 * Math.sqrt(t + n))
      c /= 2.3
      for (var u = 2 * Math.PI / c, l = 0; l < c - .5; l++) {
        e$points.push(e$shape$x + Math.sin(-u * l) * t, e$shape$y + Math.cos(-u * l) * n)
      }
      e$points.push(e$points[0], e$points[1])
    }
  },
  triangulate: function (e, t) {
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */t$points = t.points
    var /* [auto-meaningful-name] */t$indices = t.indices
    var o = t$points.length / 2
    var a = o
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$matrix = e.matrix
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    t$points.push(e.matrix ? e$matrix.a * e$shape$x + e$matrix.c * e$shape$y + e$matrix.tx : e$shape$x, e.matrix ? e$matrix.b * e$shape$x + e$matrix.d * e$shape$y + e$matrix.ty : e$shape$y)
    for (var f = 0; f < e$points.length; f += 2) {
      t$points.push(e$points[f], e$points[f + 1])
      t$indices.push(o++, a, o)
    }
  }
}
var lo = {
  build: function (e) {
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    var /* [auto-meaningful-name] */e$shape$width = e$shape.width
    var /* [auto-meaningful-name] */e$shape$height = e$shape.height
    var /* [auto-meaningful-name] */e$points = e.points
    e$points.length = 0
    e$points.push(e$shape$x, e$shape$y, e$shape$x + e$shape$width, e$shape$y, e$shape$x + e$shape$width, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height)
  },
  triangulate: function (e, t) {
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */t$points = t.points
    var i = t$points.length / 2
    t$points.push(e$points[0], e$points[1], e$points[2], e$points[3], e$points[6], e$points[7], e$points[4], e$points[5])
    t.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3)
  }
}
function fo(e, t, n) {
  return e + (t - e) * n
}
function ho(e, t, n, r, i, o, a) {
  if (undefined === a) {
    a = []
  }
  for (var s = a, c = 0, u = 0, l = 0, f = 0, d = 0, h = 0, p = 0, _ = 0; p <= 20; ++p) {
    c = fo(e, n, _ = p / 20)
    u = fo(t, r, _)
    l = fo(n, i, _)
    f = fo(r, o, _)
    d = fo(c, l, _)
    h = fo(u, f, _)
    s.push(d, h)
  }
  return s
}
var po = {
  build: function (e) {
    var /* [auto-meaningful-name] */e$shape = e.shape
    var /* [auto-meaningful-name] */e$points = e.points
    var /* [auto-meaningful-name] */e$shape$x = e$shape.x
    var /* [auto-meaningful-name] */e$shape$y = e$shape.y
    var /* [auto-meaningful-name] */e$shape$width = e$shape.width
    var /* [auto-meaningful-name] */e$shape$height = e$shape.height
    var s = Math.max(0, Math.min(e$shape.radius, Math.min(e$shape$width, e$shape$height) / 2))
    e$points.length = 0
    if (s) {
      ho(e$shape$x, e$shape$y + s, e$shape$x, e$shape$y, e$shape$x + s, e$shape$y, e$points)
      ho(e$shape$x + e$shape$width - s, e$shape$y, e$shape$x + e$shape$width, e$shape$y, e$shape$x + e$shape$width, e$shape$y + s, e$points)
      ho(e$shape$x + e$shape$width, e$shape$y + e$shape$height - s, e$shape$x + e$shape$width, e$shape$y + e$shape$height, e$shape$x + e$shape$width - s, e$shape$y + e$shape$height, e$points)
      ho(e$shape$x + s, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height - s, e$points)
    } else {
      e$points.push(e$shape$x, e$shape$y, e$shape$x + e$shape$width, e$shape$y, e$shape$x + e$shape$width, e$shape$y + e$shape$height, e$shape$x, e$shape$y + e$shape$height)
    }
  },
  triangulate: function (e, t) {
    for (var /* [auto-meaningful-name] */e$points = e.points, /* [auto-meaningful-name] */t$points = t.points, /* [auto-meaningful-name] */t$indices = t.indices, o = t$points.length / 2, a = $_1338(e$points, null, 2), s = 0, /* [auto-meaningful-name] */a$length = a.length; s < a$length; s += 3) {
      t$indices.push(a[s] + o)
      t$indices.push(a[s + 1] + o)
      t$indices.push(a[s + 2] + o)
    }
    for (s = 0, a$length = e$points.length; s < a$length; s++) {
      t$points.push(e$points[s], e$points[++s])
    }
  }
}
function _o(e, t, n, r, i, o, a, s) {
  var c
  var u
  if (a) {
    c = r
    u = -n
  } else {
    c = -r
    u = n
  }
  var l = e - n * i + c
  var f = t - r * i + u
  var d = e + n * o + c
  var h = t + r * o + u
  s.push(l, f)
  s.push(d, h)
  return 2
}
function Ao(e, t, n, r, i, o, a, s) {
  var c = n - e
  var u = r - t
  var l = Math.atan2(c, u)
  var f = Math.atan2(i - e, o - t)
  if (s && l < f) {
    l += 2 * Math.PI
  } else {
    if (!s && l > f) {
      f += 2 * Math.PI
    }
  }
  var d = l
  var h = f - l
  var p = Math.abs(h)
  var _ = Math.sqrt(c * c + u * u)
  var A = 1 + (15 * p * Math.sqrt(_) / Math.PI >> 0)
  var g = h / A
  d += g
  if (s) {
    a.push(e, t)
    a.push(n, r)
    for (var v = 1, m = d; v < A; v++, m += g) {
      a.push(e, t)
      a.push(e + Math.sin(m) * _, t + Math.cos(m) * _)
    }
    a.push(e, t)
    a.push(i, o)
  } else {
    a.push(n, r)
    a.push(e, t)
    for (v = 1, m = d; v < A; v++, m += g) {
      a.push(e + Math.sin(m) * _, t + Math.cos(m) * _)
      a.push(e, t)
    }
    a.push(i, o)
    a.push(e, t)
  }
  return 2 * A
}
function go(e, t) {
  if (e.lineStyle.native) {
    (function (e, t) {
      var n = 0
      var /* [auto-meaningful-name] */e$shape = e.shape
      var i = e.points || e$shape.points
      var o = e$shape.type !== it.POLY || e$shape.closeStroke
      if (0 !== i.length) {
        var /* [auto-meaningful-name] */t$points = t.points
        var /* [auto-meaningful-name] */t$indices = t.indices
        var c = i.length / 2
        var u = t$points.length / 2
        var l = u
        for (t$points.push(i[0], i[1]), n = 1; n < c; n++) {
          t$points.push(i[2 * n], i[2 * n + 1])
          t$indices.push(l, l + 1)
          l++
        }
        if (o) {
          t$indices.push(l, u)
        }
      }
    })(e, t)
  } else {
    (function (e, t) {
      var /* [auto-meaningful-name] */e$shape = e.shape
      var r = e.points || e$shape.points.slice()
      var /* [auto-meaningful-name] */t$closePointEps = t.closePointEps
      if (0 !== r.length) {
        var /* [auto-meaningful-name] */e$lineStyle = e.lineStyle
        var a = new ht(r[0], r[1])
        var s = new ht(r[r.length - 2], r[r.length - 1])
        var c = e$shape.type !== it.POLY || e$shape.closeStroke
        var u = Math.abs(a.x - s.x) < t$closePointEps && Math.abs(a.y - s.y) < t$closePointEps
        if (c) {
          r = r.slice()
          if (u) {
            r.pop()
            r.pop()
            s.set(r[r.length - 2], r[r.length - 1])
          }
          var l = .5 * (a.x + s.x)
          var f = .5 * (s.y + a.y)
          r.unshift(l, f)
          r.push(l, f)
        }
        var /* [auto-meaningful-name] */t$points = t.points
        var h = r.length / 2
        var /* [auto-meaningful-name] */r$length = r.length
        var _ = t$points.length / 2
        var A = e$lineStyle.width / 2
        var g = A * A
        var v = e$lineStyle.miterLimit * e$lineStyle.miterLimit
        var m = r[0]
        var y = r[1]
        var b = r[2]
        var w = r[3]
        var E = 0
        var x = 0
        var C = -(y - w)
        var O = m - b
        var k = 0
        var S = 0
        var T = Math.sqrt(C * C + O * O)
        C /= T
        O /= T
        C *= A
        O *= A
        var /* [auto-meaningful-name] */e$lineStyle$alignment = e$lineStyle.alignment
        var D = 2 * (1 - e$lineStyle$alignment)
        var I = 2 * e$lineStyle$alignment
        if (!c) {
          if (e$lineStyle.cap === no.ROUND) {
            r$length += Ao(m - C * (D - I) * .5, y - O * (D - I) * .5, m - C * D, y - O * D, m + C * I, y + O * I, t$points, true) + 2
          } else {
            if (e$lineStyle.cap === no.SQUARE) {
              r$length += _o(m, y, C, O, D, I, true, t$points)
            }
          }
        }
        t$points.push(m - C * D, y - O * D)
        t$points.push(m + C * I, y + O * I)
        for (var R = 1; R < h - 1; ++R) {
          m = r[2 * (R - 1)]
          y = r[2 * (R - 1) + 1]
          b = r[2 * R]
          w = r[2 * R + 1]
          E = r[2 * (R + 1)]
          x = r[2 * (R + 1) + 1]
          C = -(y - w)
          O = m - b
          C /= T = Math.sqrt(C * C + O * O)
          O /= T
          C *= A
          O *= A
          k = -(w - x)
          S = b - E
          k /= T = Math.sqrt(k * k + S * S)
          S /= T
          k *= A
          S *= A
          var F = b - m
          var P = y - w
          var N = b - E
          var M = x - w
          var L = P * N - M * F
          var j = L < 0
          if (Math.abs(L) < .1) {
            t$points.push(b - C * D, w - O * D)
            t$points.push(b + C * I, w + O * I)
          } else {
            var U = (-C + m) * (-O + w) - (-C + b) * (-O + y)
            var H = (-k + E) * (-S + w) - (-k + b) * (-S + x)
            var V = (F * H - N * U) / L
            var G = (M * U - P * H) / L
            var z = (V - b) * (V - b) + (G - w) * (G - w)
            var Q = b + (V - b) * D
            var W = w + (G - w) * D
            var K = b - (V - b) * I
            var X = w - (G - w) * I
            var Y = j ? D : I
            if (z <= Math.min(F * F + P * P, N * N + M * M) + Y * Y * g) {
              if (e$lineStyle.join === to.BEVEL || z / g > v) {
                if (j) {
                  t$points.push(Q, W)
                  t$points.push(b + C * I, w + O * I)
                  t$points.push(Q, W)
                  t$points.push(b + k * I, w + S * I)
                } else {
                  t$points.push(b - C * D, w - O * D)
                  t$points.push(K, X)
                  t$points.push(b - k * D, w - S * D)
                  t$points.push(K, X)
                }
                r$length += 2
              } else {
                if (e$lineStyle.join === to.ROUND) {
                  if (j) {
                    t$points.push(Q, W)
                    t$points.push(b + C * I, w + O * I)
                    r$length += Ao(b, w, b + C * I, w + O * I, b + k * I, w + S * I, t$points, true) + 4
                    t$points.push(Q, W)
                    t$points.push(b + k * I, w + S * I)
                  } else {
                    t$points.push(b - C * D, w - O * D)
                    t$points.push(K, X)
                    r$length += Ao(b, w, b - C * D, w - O * D, b - k * D, w - S * D, t$points, false) + 4
                    t$points.push(b - k * D, w - S * D)
                    t$points.push(K, X)
                  }
                } else {
                  t$points.push(Q, W)
                  t$points.push(K, X)
                }
              }
            } else {
              t$points.push(b - C * D, w - O * D)
              t$points.push(b + C * I, w + O * I)
              if (!(e$lineStyle.join === to.BEVEL || z / g > v)) {
                if (e$lineStyle.join === to.ROUND) {
                  r$length += j ? Ao(b, w, b + C * I, w + O * I, b + k * I, w + S * I, t$points, true) + 2 : Ao(b, w, b - C * D, w - O * D, b - k * D, w - S * D, t$points, false) + 2
                } else {
                  if (j) {
                    t$points.push(K, X)
                    t$points.push(K, X)
                  } else {
                    t$points.push(Q, W)
                    t$points.push(Q, W)
                  }
                  r$length += 2
                }
              }
              t$points.push(b - k * D, w - S * D)
              t$points.push(b + k * I, w + S * I)
              r$length += 2
            }
          }
        }
        m = r[2 * (h - 2)]
        y = r[2 * (h - 2) + 1]
        b = r[2 * (h - 1)]
        C = -(y - (w = r[2 * (h - 1) + 1]))
        O = m - b
        C /= T = Math.sqrt(C * C + O * O)
        O /= T
        C *= A
        O *= A
        t$points.push(b - C * D, w - O * D)
        t$points.push(b + C * I, w + O * I)
        if (!c) {
          if (e$lineStyle.cap === no.ROUND) {
            r$length += Ao(b - C * (D - I) * .5, w - O * (D - I) * .5, b - C * D, w - O * D, b + C * I, w + O * I, t$points, false) + 2
          } else {
            if (e$lineStyle.cap === no.SQUARE) {
              r$length += _o(b, w, C, O, D, I, false, t$points)
            }
          }
        }
        var /* [auto-meaningful-name] */t$indices = t.indices
        var $ = io.epsilon * io.epsilon
        for (R = _; R < r$length + _ - 2; ++R) {
          m = t$points[2 * R]
          y = t$points[2 * R + 1]
          b = t$points[2 * (R + 1)]
          w = t$points[2 * (R + 1) + 1]
          E = t$points[2 * (R + 2)]
          x = t$points[2 * (R + 2) + 1]
          if (!(Math.abs(m * (w - x) + b * (x - y) + E * (y - w)) < $)) {
            t$indices.push(R, R + 1, R + 2)
          }
        }
      }
    })(e, t)
  }
}
var vo
var mo
var yo = function () {
  function e() {}
  e.curveTo = function (e, t, n, r, i, o) {
    var a = o[o.length - 2]
    var s = o[o.length - 1] - t
    var c = a - e
    var u = r - t
    var l = n - e
    var f = Math.abs(s * l - c * u)
    if (f < 1e-8 || 0 === i) {
      if (!(o[o.length - 2] === e && o[o.length - 1] === t)) {
        o.push(e, t)
      }
      return null
    }
    var d = s * s + c * c
    var h = u * u + l * l
    var p = s * u + c * l
    var _ = i * Math.sqrt(d) / f
    var A = i * Math.sqrt(h) / f
    var g = _ * p / d
    var v = A * p / h
    var m = _ * l + A * c
    var y = _ * u + A * s
    var b = c * (A + g)
    var w = s * (A + g)
    var E = l * (_ + v)
    var x = u * (_ + v)
    return {
      cx: m + e,
      cy: y + t,
      radius: i,
      startAngle: Math.atan2(w - y, b - m),
      endAngle: Math.atan2(x - y, E - m),
      anticlockwise: c * u > l * s
    }
  }
  e.arc = function (e, t, n, r, i, o, a, s, c) {
    for (var u = a - o, l = io._segmentsCount(Math.abs(u) * i, 40 * Math.ceil(Math.abs(u) / ot)), f = u / (2 * l), d = 2 * f, h = Math.cos(f), p = Math.sin(f), _ = l - 1, A = _ % 1 / _, g = 0; g <= _; ++g) {
      var v = f + o + d * (g + A * g)
      var m = Math.cos(v)
      var y = -Math.sin(v)
      c.push((h * m + p * y) * i + n, (h * -y + p * m) * i + r)
    }
  }
  return e
}()
var bo = function () {
  function e() {}
  e.curveLength = function (e, t, n, r, i, o, a, s) {
    for (var c = 0, u = 0, l = 0, f = 0, d = 0, h = 0, p = 0, _ = 0, A = 0, g = 0, v = 0, m = e, y = t, b = 1; b <= 10; ++b) {
      g = m - (_ = (p = (h = (d = 1 - (u = b / 10)) * d) * d) * e + 3 * h * u * n + 3 * d * (l = u * u) * i + (f = l * u) * a)
      v = y - (A = p * t + 3 * h * u * r + 3 * d * l * o + f * s)
      m = _
      y = A
      c += Math.sqrt(g * g + v * v)
    }
    return c
  }
  e.curveTo = function (t, n, r, i, o, a, s) {
    var c = s[s.length - 2]
    var u = s[s.length - 1]
    s.length -= 2
    var l = io._segmentsCount(e.curveLength(c, u, t, n, r, i, o, a))
    var f = 0
    var d = 0
    var h = 0
    var p = 0
    var _ = 0
    s.push(c, u)
    for (var A = 1, g = 0; A <= l; ++A) {
      h = (d = (f = 1 - (g = A / l)) * f) * f
      _ = (p = g * g) * g
      s.push(h * c + 3 * d * g * t + 3 * f * p * r + _ * o, h * u + 3 * d * g * n + 3 * f * p * i + _ * a)
    }
  }
  return e
}()
var wo = function () {
  function e() {}
  e.curveLength = function (e, t, n, r, i, o) {
    var a = e - 2 * n + i
    var s = t - 2 * r + o
    var c = 2 * n - 2 * e
    var u = 2 * r - 2 * t
    var l = 4 * (a * a + s * s)
    var f = 4 * (a * c + s * u)
    var d = c * c + u * u
    var h = 2 * Math.sqrt(l + f + d)
    var p = Math.sqrt(l)
    var _ = 2 * l * p
    var A = 2 * Math.sqrt(d)
    var g = f / p
    return (_ * h + p * f * (h - A) + (4 * d * l - f * f) * Math.log((2 * p + g + h) / (g + A))) / (4 * _)
  }
  e.curveTo = function (t, n, r, i, o) {
    for (var a = o[o.length - 2], s = o[o.length - 1], c = io._segmentsCount(e.curveLength(a, s, t, n, r, i)), u = 0, l = 0, f = 1; f <= c; ++f) {
      var d = f / c
      u = a + (t - a) * d
      l = s + (n - s) * d
      o.push(u + (t + (r - t) * d - u) * d, l + (n + (i - n) * d - l) * d)
    }
  }
  return e
}()
var Eo = function () {
  function e() {
    this.reset()
  }
  e.prototype.begin = function (e, t, n) {
    this.reset()
    this.style = e
    this.start = t
    this.attribStart = n
  }
  e.prototype.end = function (e, t) {
    this.attribSize = t - this.attribStart
    this.size = e - this.start
  }
  e.prototype.reset = function () {
    this.style = null
    this.size = 0
    this.start = 0
    this.attribStart = 0
    this.attribSize = 0
  }
  return e
}();
(vo = {})[it.POLY] = co
vo[it.CIRC] = uo
vo[it.ELIP] = uo
vo[it.RECT] = lo
vo[it.RREC] = po
var xo = vo
var Co = []
var Oo = []
var ko = function () {
  function e(e, t, n, r) {
    if (undefined === t) {
      t = null
    }
    if (undefined === n) {
      n = null
    }
    if (undefined === r) {
      r = null
    }
    this.shape = e
    this.lineStyle = n
    this.fillStyle = t
    this.matrix = r
    this.type = e.type
    this.points = []
    this.holes = []
  }
  e.prototype.clone = function () {
    return new e(this.shape, this.fillStyle, this.lineStyle, this.matrix)
  }
  e.prototype.destroy = function () {
    this.shape = null
    this.holes.length = 0
    this.holes = null
    this.points.length = 0
    this.points = null
    this.lineStyle = null
    this.fillStyle = null
  }
  return e
}()
var So = new ht()
var To = new Tt()
var Bo = function (e) {
  function t() {
    var t = e.call(this) || this
    t.uvsFloat32 = null
    t.indicesUint16 = null
    t.points = []
    t.colors = []
    t.uvs = []
    t.indices = []
    t.textureIds = []
    t.graphicsData = []
    t.dirty = 0
    t.batchDirty = -1
    t.cacheDirty = -1
    t.clearDirty = 0
    t.drawCalls = []
    t.batches = []
    t.shapeIndex = 0
    t._bounds = new Tt()
    t.boundsDirty = -1
    t.boundsPadding = 0
    t.batchable = false
    t.indicesUint16 = null
    t.uvsFloat32 = null
    t.closePointEps = 1e-4
    return t
  }
  so(t, e)
  Object.defineProperty(t.prototype, "bounds", {
    get: function () {
      if (this.boundsDirty !== this.dirty) {
        this.boundsDirty = this.dirty
        this.calculateBounds()
      }
      return this._bounds
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.invalidate = function () {
    this.boundsDirty = -1
    this.dirty++
    this.batchDirty++
    this.shapeIndex = 0
    this.points.length = 0
    this.colors.length = 0
    this.uvs.length = 0
    this.indices.length = 0
    this.textureIds.length = 0
    for (var e = 0; e < this.drawCalls.length; e++) {
      this.drawCalls[e].texArray.clear()
      Oo.push(this.drawCalls[e])
    }
    this.drawCalls.length = 0
    for (e = 0; e < this.batches.length; e++) {
      var t = this.batches[e]
      t.reset()
      Co.push(t)
    }
    this.batches.length = 0
  }
  t.prototype.clear = function () {
    if (this.graphicsData.length > 0) {
      this.invalidate()
      this.clearDirty++
      this.graphicsData.length = 0
    }
    return this
  }
  t.prototype.drawShape = function (e, t, n, r) {
    if (undefined === t) {
      t = null
    }
    if (undefined === n) {
      n = null
    }
    if (undefined === r) {
      r = null
    }
    var i = new ko(e, t, n, r)
    this.graphicsData.push(i)
    this.dirty++
    return this
  }
  t.prototype.drawHole = function (e, t) {
    if (undefined === t) {
      t = null
    }
    if (!this.graphicsData.length) {
      return null
    }
    var n = new ko(e, null, null, t)
    var r = this.graphicsData[this.graphicsData.length - 1]
    n.lineStyle = r.lineStyle
    r.holes.push(n)
    this.dirty++
    return this
  }
  t.prototype.destroy = function () {
    e.prototype.destroy.call(this)
    for (var t = 0; t < this.graphicsData.length; ++t) {
      this.graphicsData[t].destroy()
    }
    this.points.length = 0
    this.points = null
    this.colors.length = 0
    this.colors = null
    this.uvs.length = 0
    this.uvs = null
    this.indices.length = 0
    this.indices = null
    this.indexBuffer.destroy()
    this.indexBuffer = null
    this.graphicsData.length = 0
    this.graphicsData = null
    this.drawCalls.length = 0
    this.drawCalls = null
    this.batches.length = 0
    this.batches = null
    this._bounds = null
  }
  t.prototype.containsPoint = function (e) {
    for (var /* [auto-meaningful-name] */this$graphicsData = this.graphicsData, n = 0; n < this$graphicsData.length; ++n) {
      var r = this$graphicsData[n]
      if (r.fillStyle.visible && r.shape && (r.matrix ? r.matrix.applyInverse(e, So) : So.copyFrom(e), r.shape.contains(So.x, So.y))) {
        var i = false
        if (r.holes) {
          for (var o = 0; o < r.holes.length; o++) {
            if (r.holes[o].shape.contains(So.x, So.y)) {
              i = true
              break
            }
          }
        }
        if (!i) {
          return true
        }
      }
    }
    return false
  }
  t.prototype.updateBatches = function (e) {
    if (this.graphicsData.length) {
      if (this.validateBatching()) {
        this.cacheDirty = this.dirty
        var /* [auto-meaningful-name] */this$uvs = this.uvs
        var /* [auto-meaningful-name] */this$graphicsData = this.graphicsData
        var r = null
        var i = null
        if (this.batches.length > 0) {
          i = (r = this.batches[this.batches.length - 1]).style
        }
        for (var /* [auto-meaningful-name] */this$shapeIndex = this.shapeIndex; this$shapeIndex < this$graphicsData.length; this$shapeIndex++) {
          this.shapeIndex++
          var a = this$graphicsData[this$shapeIndex]
          var /* [auto-meaningful-name] */a$fillStyle = a.fillStyle
          var /* [auto-meaningful-name] */a$lineStyle = a.lineStyle
          xo[a.type].build(a)
          if (a.matrix) {
            this.transformPoints(a.points, a.matrix)
          }
          for (var u = 0; u < 2; u++) {
            var l = 0 === u ? a$fillStyle : a$lineStyle
            if (l.visible) {
              var /* [auto-meaningful-name] */l$texture$baseTexture = l.texture.baseTexture
              var /* [auto-meaningful-name] */this$indices$length = this.indices.length
              var h = this.points.length / 2
              l$texture$baseTexture.wrapMode = re.REPEAT
              if (0 === u) {
                this.processFill(a)
              } else {
                this.processLine(a)
              }
              var p = this.points.length / 2 - h
              if (0 !== p) {
                if (r && !this._compareStyles(i, l)) {
                  r.end(this$indices$length, h)
                  r = null
                }
                if (!r) {
                  (r = Co.pop() || new Eo()).begin(l, this$indices$length, h)
                  this.batches.push(r)
                  i = l
                }
                this.addUvs(this.points, this$uvs, l.texture, h, p, l.matrix)
              }
            }
          }
        }
        var /* [auto-meaningful-name] */this$indices$length1 = this.indices.length
        var A = this.points.length / 2
        if (r) {
          r.end(this$indices$length1, A)
        }
        if (0 !== this.batches.length) {
          if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) {
            this.indicesUint16.set(this.indices)
          } else {
            var g = A > 65535 && e
            this.indicesUint16 = g ? new Uint32Array(this.indices) : new Uint16Array(this.indices)
          }
          this.batchable = this.isBatchable()
          if (this.batchable) {
            this.packBatches()
          } else {
            this.buildDrawCalls()
          }
        } else {
          this.batchable = true
        }
      }
    } else {
      this.batchable = true
    }
  }
  t.prototype._compareStyles = function (e, t) {
    return !(!e || !t) && e.texture.baseTexture === t.texture.baseTexture && e.color + e.alpha === t.color + t.alpha && !!e.native === !!t.native
  }
  t.prototype.validateBatching = function () {
    if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
      return false
    }
    for (var e = 0, /* [auto-meaningful-name] */this$graphicsData$length = this.graphicsData.length; e < this$graphicsData$length; e++) {
      var n = this.graphicsData[e]
      var /* [auto-meaningful-name] */n$fillStyle = n.fillStyle
      var /* [auto-meaningful-name] */n$lineStyle = n.lineStyle
      if (n$fillStyle && !n$fillStyle.texture.baseTexture.valid) {
        return false
      }
      if (n$lineStyle && !n$lineStyle.texture.baseTexture.valid) {
        return false
      }
    }
    return true
  }
  t.prototype.packBatches = function () {
    this.batchDirty++
    this.uvsFloat32 = new Float32Array(this.uvs)
    for (var /* [auto-meaningful-name] */this$batches = this.batches, t = 0, /* [auto-meaningful-name] */this$batches$length = this$batches.length; t < this$batches$length; t++) {
      for (var r = this$batches[t], i = 0; i < r.size; i++) {
        var o = r.start + i
        this.indicesUint16[o] = this.indicesUint16[o] - r.attribStart
      }
    }
  }
  t.prototype.isBatchable = function () {
    if (this.points.length > 131070) {
      return false
    }
    for (var /* [auto-meaningful-name] */this$batches = this.batches, n = 0; n < this$batches.length; n++) {
      if (this$batches[n].style.native) {
        return false
      }
    }
    return this.points.length < 2 * t.BATCHABLE_SIZE
  }
  t.prototype.buildDrawCalls = function () {
    for (var e = ++Jt._globalBatch, t = 0; t < this.drawCalls.length; t++) {
      this.drawCalls[t].texArray.clear()
      Oo.push(this.drawCalls[t])
    }
    this.drawCalls.length = 0
    var /* [auto-meaningful-name] */this$colors = this.colors
    var /* [auto-meaningful-name] */this$textureIds = this.textureIds
    var i = Oo.pop()
    if (!i) {
      (i = new Gr()).texArray = new zr()
    }
    i.texArray.count = 0
    i.start = 0
    i.size = 0
    i.type = $.TRIANGLES
    var o = 0
    var a = null
    var s = 0
    var c = false
    var /* [auto-meaningful-name] */$$TRIANGLES = $.TRIANGLES
    var l = 0
    this.drawCalls.push(i)
    for (t = 0; t < this.batches.length; t++) {
      var f = this.batches[t]
      var /* [auto-meaningful-name] */f$style = f.style
      var /* [auto-meaningful-name] */f$style$texture$baseTexture = f$style.texture.baseTexture
      if (c !== !!f$style.native) {
        $$TRIANGLES = (c = !!f$style.native) ? $.LINES : $.TRIANGLES
        a = null
        o = 8
        e++
      }
      if (a !== f$style$texture$baseTexture) {
        a = f$style$texture$baseTexture
        if (f$style$texture$baseTexture._batchEnabled !== e) {
          if (8 === o) {
            e++
            o = 0
            if (i.size > 0) {
              if (!(i = Oo.pop())) {
                (i = new Gr()).texArray = new zr()
              }
              this.drawCalls.push(i)
            }
            i.start = l
            i.size = 0
            i.texArray.count = 0
            i.type = $$TRIANGLES
          }
          f$style$texture$baseTexture.touched = 1
          f$style$texture$baseTexture._batchEnabled = e
          f$style$texture$baseTexture._batchLocation = o
          f$style$texture$baseTexture.wrapMode = re.REPEAT
          i.texArray.elements[i.texArray.count++] = f$style$texture$baseTexture
          o++
        }
      }
      i.size += f.size
      l += f.size
      s = f$style$texture$baseTexture._batchLocation
      this.addColors(this$colors, f$style.color, f$style.alpha, f.attribSize)
      this.addTextureIds(this$textureIds, s, f.attribSize)
    }
    Jt._globalBatch = e
    this.packAttributes()
  }
  t.prototype.packAttributes = function () {
    for (var /* [auto-meaningful-name] */this$points = this.points, /* [auto-meaningful-name] */this$uvs = this.uvs, /* [auto-meaningful-name] */this$colors = this.colors, /* [auto-meaningful-name] */this$textureIds = this.textureIds, i = new ArrayBuffer(3 * this$points.length * 4), o = new Float32Array(i), a = new Uint32Array(i), s = 0, c = 0; c < this$points.length / 2; c++) {
      o[s++] = this$points[2 * c]
      o[s++] = this$points[2 * c + 1]
      o[s++] = this$uvs[2 * c]
      o[s++] = this$uvs[2 * c + 1]
      a[s++] = this$colors[c]
      o[s++] = this$textureIds[c]
    }
    this._buffer.update(i)
    this._indexBuffer.update(this.indicesUint16)
  }
  t.prototype.processFill = function (e) {
    if (e.holes.length) {
      this.processHoles(e.holes)
      co.triangulate(e, this)
    } else {
      xo[e.type].triangulate(e, this)
    }
  }
  t.prototype.processLine = function (e) {
    go(e, this)
    for (var t = 0; t < e.holes.length; t++) {
      go(e.holes[t], this)
    }
  }
  t.prototype.processHoles = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t]
      xo[n.type].build(n)
      if (n.matrix) {
        this.transformPoints(n.points, n.matrix)
      }
    }
  }
  t.prototype.calculateBounds = function () {
    var /* [auto-meaningful-name] */this$_bounds = this._bounds
    var t = To
    var /* [auto-meaningful-name] */_t$IDENTITY = _t.IDENTITY
    this._bounds.clear()
    t.clear()
    for (var r = 0; r < this.graphicsData.length; r++) {
      var i = this.graphicsData[r]
      var /* [auto-meaningful-name] */i$shape = i.shape
      var /* [auto-meaningful-name] */i$type = i.type
      var /* [auto-meaningful-name] */i$lineStyle = i.lineStyle
      var c = i.matrix || _t.IDENTITY
      var u = 0
      if (i$lineStyle && i$lineStyle.visible) {
        var /* [auto-meaningful-name] */i$lineStyle$alignment = i$lineStyle.alignment
        u = i$lineStyle.width
        if (i$type === it.POLY) {
          u *= .5 + Math.abs(.5 - i$lineStyle$alignment)
        } else {
          u *= Math.max(0, i$lineStyle$alignment)
        }
      }
      if (_t$IDENTITY !== c) {
        if (!t.isEmpty()) {
          this$_bounds.addBoundsMatrix(t, _t$IDENTITY)
          t.clear()
        }
        _t$IDENTITY = c
      }
      if (i$type === it.RECT || i$type === it.RREC) {
        var f = i$shape
        t.addFramePad(f.x, f.y, f.x + f.width, f.y + f.height, u, u)
      } else if (i$type === it.CIRC) {
        var d = i$shape
        t.addFramePad(d.x, d.y, d.x, d.y, d.radius + u, d.radius + u)
      } else if (i$type === it.ELIP) {
        var h = i$shape
        t.addFramePad(h.x, h.y, h.x, h.y, h.width + u, h.height + u)
      } else {
        var p = i$shape
        this$_bounds.addVerticesMatrix(_t$IDENTITY, p.points, 0, p.points.length, u, u)
      }
    }
    if (!t.isEmpty()) {
      this$_bounds.addBoundsMatrix(t, _t$IDENTITY)
    }
    this$_bounds.pad(this.boundsPadding, this.boundsPadding)
  }
  t.prototype.transformPoints = function (e, t) {
    for (var n = 0; n < e.length / 2; n++) {
      var r = e[2 * n]
      var i = e[2 * n + 1]
      e[2 * n] = t.a * r + t.c * i + t.tx
      e[2 * n + 1] = t.b * r + t.d * i + t.ty
    }
  }
  t.prototype.addColors = function (e, t, n, r) {
    for (var i = De((t >> 16) + (65280 & t) + ((255 & t) << 16), n); r-- > 0;) {
      e.push(i)
    }
  }
  t.prototype.addTextureIds = function (e, t, n) {
    for (; n-- > 0;) {
      e.push(t)
    }
  }
  t.prototype.addUvs = function (e, t, n, r, i, o) {
    if (undefined === o) {
      o = null
    }
    for (var a = 0, /* [auto-meaningful-name] */t$length = t.length, /* [auto-meaningful-name] */n$frame = n.frame; a < i;) {
      var u = e[2 * (r + a)]
      var l = e[2 * (r + a) + 1]
      if (o) {
        var f = o.a * u + o.c * l + o.tx
        l = o.b * u + o.d * l + o.ty
        u = f
      }
      a++
      t.push(u / n$frame.width, l / n$frame.height)
    }
    var /* [auto-meaningful-name] */n$baseTexture = n.baseTexture
    if (n$frame.width < n$baseTexture.width || n$frame.height < n$baseTexture.height) {
      this.adjustUvs(t, n, t$length, i)
    }
  }
  t.prototype.adjustUvs = function (e, t, n, r) {
    for (var /* [auto-meaningful-name] */t$baseTexture = t.baseTexture, o = 1e-6, a = n + 2 * r, /* [auto-meaningful-name] */t$frame = t.frame, c = t$frame.width / t$baseTexture.width, u = t$frame.height / t$baseTexture.height, l = t$frame.x / t$frame.width, f = t$frame.y / t$frame.height, d = Math.floor(e[n] + o), h = Math.floor(e[n + 1] + o), p = n + 2; p < a; p += 2) {
      d = Math.min(d, Math.floor(e[p] + o))
      h = Math.min(h, Math.floor(e[p + 1] + o))
    }
    l -= d
    f -= h
    for (p = n; p < a; p += 2) {
      e[p] = (e[p] + l) * c
      e[p + 1] = (e[p + 1] + f) * u
    }
  }
  t.BATCHABLE_SIZE = 100
  return t
}(Xr)
var Do = function (e) {
  function t() {
    var t = null !== e && e.apply(this, arguments) || this
    t.width = 0
    t.alignment = .5
    t.native = false
    t.cap = no.BUTT
    t.join = to.MITER
    t.miterLimit = 10
    return t
  }
  so(t, e)
  t.prototype.clone = function () {
    var e = new t()
    e.color = this.color
    e.alpha = this.alpha
    e.texture = this.texture
    e.matrix = this.matrix
    e.visible = this.visible
    e.width = this.width
    e.alignment = this.alignment
    e.native = this.native
    e.cap = this.cap
    e.join = this.join
    e.miterLimit = this.miterLimit
    return e
  }
  t.prototype.reset = function () {
    e.prototype.reset.call(this)
    this.color = 0
    this.alignment = .5
    this.width = 0
    this.native = false
  }
  return t
}(oo)
var Io = new Float32Array(3)
var Ro = {}
var Fo = function (e) {
  function t(t) {
    if (undefined === t) {
      t = null
    }
    var n = e.call(this) || this
    n._geometry = t || new Bo()
    n._geometry.refCount++
    n.shader = null
    n.state = vr.for2d()
    n._fillStyle = new oo()
    n._lineStyle = new Do()
    n._matrix = null
    n._holeMode = false
    n.currentPath = null
    n.batches = []
    n.batchTint = -1
    n.batchDirty = -1
    n.vertexData = null
    n.pluginName = "batch"
    n._transformID = -1
    n.tint = 16777215
    n.blendMode = q.NORMAL
    return n
  }
  so(t, e)
  Object.defineProperty(t.prototype, "geometry", {
    get: function () {
      return this._geometry
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.clone = function () {
    this.finishPoly()
    return new t(this._geometry)
  }
  Object.defineProperty(t.prototype, "blendMode", {
    get: function () {
      return this.state.blendMode
    },
    set: function (e) {
      this.state.blendMode = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "tint", {
    get: function () {
      return this._tint
    },
    set: function (e) {
      this._tint = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "fill", {
    get: function () {
      return this._fillStyle
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "line", {
    get: function () {
      return this._lineStyle
    },
    enumerable: false,
    configurable: true
  })
  t.prototype.lineStyle = function (e, t, n, r, i) {
    if (undefined === e) {
      e = null
    }
    if (undefined === t) {
      t = 0
    }
    if (undefined === n) {
      n = 1
    }
    if (undefined === r) {
      r = .5
    }
    if (undefined === i) {
      i = false
    }
    if ("number" === typeof e) {
      e = {
        width: e,
        color: t,
        alpha: n,
        alignment: r,
        native: i
      }
    }
    return this.lineTextureStyle(e)
  }
  t.prototype.lineTextureStyle = function (e) {
    e = Object.assign({
      width: 0,
      texture: An.WHITE,
      color: e && e.texture ? 16777215 : 0,
      alpha: 1,
      matrix: null,
      alignment: .5,
      native: false,
      cap: no.BUTT,
      join: to.MITER,
      miterLimit: 10
    }, e)
    if (this.currentPath) {
      this.startPoly()
    }
    var t = e.width > 0 && e.alpha > 0
    if (t) {
      if (e.matrix) {
        e.matrix = e.matrix.clone()
        e.matrix.invert()
      }
      Object.assign(this._lineStyle, {
        visible: t
      }, e)
    } else {
      this._lineStyle.reset()
    }
    return this
  }
  t.prototype.startPoly = function () {
    if (this.currentPath) {
      var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
      var /* [auto-meaningful-name] */this$currentPath$points$length = this.currentPath.points.length
      if (this$currentPath$points$length > 2) {
        this.drawShape(this.currentPath)
        this.currentPath = new ft()
        this.currentPath.closeStroke = false
        this.currentPath.points.push(this$currentPath$points[this$currentPath$points$length - 2], this$currentPath$points[this$currentPath$points$length - 1])
      }
    } else {
      this.currentPath = new ft()
      this.currentPath.closeStroke = false
    }
  }
  t.prototype.finishPoly = function () {
    if (this.currentPath) {
      if (this.currentPath.points.length > 2) {
        this.drawShape(this.currentPath)
        this.currentPath = null
      } else {
        this.currentPath.points.length = 0
      }
    }
  }
  t.prototype.moveTo = function (e, t) {
    this.startPoly()
    this.currentPath.points[0] = e
    this.currentPath.points[1] = t
    return this
  }
  t.prototype.lineTo = function (e, t) {
    if (!this.currentPath) {
      this.moveTo(0, 0)
    }
    var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
    var r = this$currentPath$points[this$currentPath$points.length - 2]
    var i = this$currentPath$points[this$currentPath$points.length - 1]
    if (!(r === e && i === t)) {
      this$currentPath$points.push(e, t)
    }
    return this
  }
  t.prototype._initCurve = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 0
    }
    if (this.currentPath) {
      if (0 === this.currentPath.points.length) {
        this.currentPath.points = [e, t]
      }
    } else {
      this.moveTo(e, t)
    }
  }
  t.prototype.quadraticCurveTo = function (e, t, n, r) {
    this._initCurve()
    var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
    if (0 === this$currentPath$points.length) {
      this.moveTo(0, 0)
    }
    wo.curveTo(e, t, n, r, this$currentPath$points)
    return this
  }
  t.prototype.bezierCurveTo = function (e, t, n, r, i, o) {
    this._initCurve()
    bo.curveTo(e, t, n, r, i, o, this.currentPath.points)
    return this
  }
  t.prototype.arcTo = function (e, t, n, r, i) {
    this._initCurve(e, t)
    var /* [auto-meaningful-name] */this$currentPath$points = this.currentPath.points
    var a = yo.curveTo(e, t, n, r, i, this$currentPath$points)
    if (a) {
      var s = a.cx
      var c = a.cy
      var /* [auto-meaningful-name] */a$radius = a.radius
      var /* [auto-meaningful-name] */a$startAngle = a.startAngle
      var /* [auto-meaningful-name] */a$endAngle = a.endAngle
      var /* [auto-meaningful-name] */a$anticlockwise = a.anticlockwise
      this.arc(s, c, a$radius, a$startAngle, a$endAngle, a$anticlockwise)
    }
    return this
  }
  t.prototype.arc = function (e, t, n, r, i, o) {
    if (undefined === o) {
      o = false
    }
    if (r === i) {
      return this
    }
    if (!o && i <= r) {
      i += ot
    } else {
      if (o && r <= i) {
        r += ot
      }
    }
    if (0 === i - r) {
      return this
    }
    var a = e + Math.cos(r) * n
    var s = t + Math.sin(r) * n
    var /* [auto-meaningful-name] */this$_geometry$closePointEps = this._geometry.closePointEps
    var u = this.currentPath ? this.currentPath.points : null
    if (u) {
      var l = Math.abs(u[u.length - 2] - a)
      var f = Math.abs(u[u.length - 1] - s)
      if (!(l < this$_geometry$closePointEps && f < this$_geometry$closePointEps)) {
        u.push(a, s)
      }
    } else {
      this.moveTo(a, s)
      u = this.currentPath.points
    }
    yo.arc(a, s, e, t, n, r, i, o, u)
    return this
  }
  t.prototype.beginFill = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    if (undefined === t) {
      t = 1
    }
    return this.beginTextureFill({
      texture: An.WHITE,
      color: e,
      alpha: t
    })
  }
  t.prototype.beginTextureFill = function (e) {
    e = Object.assign({
      texture: An.WHITE,
      color: 16777215,
      alpha: 1,
      matrix: null
    }, e)
    if (this.currentPath) {
      this.startPoly()
    }
    var t = e.alpha > 0
    if (t) {
      if (e.matrix) {
        e.matrix = e.matrix.clone()
        e.matrix.invert()
      }
      Object.assign(this._fillStyle, {
        visible: t
      }, e)
    } else {
      this._fillStyle.reset()
    }
    return this
  }
  t.prototype.endFill = function () {
    this.finishPoly()
    this._fillStyle.reset()
    return this
  }
  t.prototype.drawRect = function (e, t, n, r) {
    return this.drawShape(new ct(e, t, n, r))
  }
  t.prototype.drawRoundedRect = function (e, t, n, r, i) {
    return this.drawShape(new dt(e, t, n, r, i))
  }
  t.prototype.drawCircle = function (e, t, n) {
    return this.drawShape(new ut(e, t, n))
  }
  t.prototype.drawEllipse = function (e, t, n, r) {
    return this.drawShape(new lt(e, t, n, r))
  }
  t.prototype.drawPolygon = function () {
    for (var e, t = arguments, n = [], r = 0; r < arguments.length; r++) {
      n[r] = t[r]
    }
    var i = true
    var o = n[0]
    if (o.points) {
      i = o.closeStroke
      e = o.points
    } else {
      e = Array.isArray(n[0]) ? n[0] : n
    }
    var a = new ft(e)
    a.closeStroke = i
    this.drawShape(a)
    return this
  }
  t.prototype.drawShape = function (e) {
    if (this._holeMode) {
      this._geometry.drawHole(e, this._matrix)
    } else {
      this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix)
    }
    return this
  }
  t.prototype.clear = function () {
    this._geometry.clear()
    this._lineStyle.reset()
    this._fillStyle.reset()
    this._boundsID++
    this._matrix = null
    this._holeMode = false
    this.currentPath = null
    return this
  }
  t.prototype.isFastRect = function () {
    var /* [auto-meaningful-name] */this$_geometry$graphicsData = this._geometry.graphicsData
    return 1 === this$_geometry$graphicsData.length && this$_geometry$graphicsData[0].shape.type === it.RECT && !this$_geometry$graphicsData[0].holes.length && !(this$_geometry$graphicsData[0].lineStyle.visible && this$_geometry$graphicsData[0].lineStyle.width)
  }
  t.prototype._render = function (e) {
    this.finishPoly()
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    var /* [auto-meaningful-name] */e$context$supports$uint32Indices = e.context.supports.uint32Indices
    this$_geometry.updateBatches(e$context$supports$uint32Indices)
    if (this$_geometry.batchable) {
      if (this.batchDirty !== this$_geometry.batchDirty) {
        this._populateBatches()
      }
      this._renderBatched(e)
    } else {
      e.batch.flush()
      this._renderDirect(e)
    }
  }
  t.prototype._populateBatches = function () {
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    var /* [auto-meaningful-name] */this$blendMode = this.blendMode
    var /* [auto-meaningful-name] */this$_geometry$batches$length = this$_geometry.batches.length
    this.batchTint = -1
    this._transformID = -1
    this.batchDirty = this$_geometry.batchDirty
    this.batches.length = this$_geometry$batches$length
    this.vertexData = new Float32Array(this$_geometry.points)
    for (var r = 0; r < this$_geometry$batches$length; r++) {
      var i = this$_geometry.batches[r]
      var /* [auto-meaningful-name] */i$style$color = i.style.color
      var a = new Float32Array(this.vertexData.buffer, 4 * i.attribStart * 2, 2 * i.attribSize)
      var s = new Float32Array(this$_geometry.uvsFloat32.buffer, 4 * i.attribStart * 2, 2 * i.attribSize)
      var c = {
        vertexData: a,
        blendMode: this$blendMode,
        indices: new Uint16Array(this$_geometry.indicesUint16.buffer, 2 * i.start, i.size),
        uvs: s,
        _batchRGB: xe(i$style$color),
        _tintRGB: i$style$color,
        _texture: i.style.texture,
        alpha: i.style.alpha,
        worldAlpha: 1
      }
      this.batches[r] = c
    }
  }
  t.prototype._renderBatched = function (e) {
    if (this.batches.length) {
      e.batch.setObjectRenderer(e.plugins[this.pluginName])
      this.calculateVertices()
      this.calculateTints()
      for (var t = 0, /* [auto-meaningful-name] */this$batches$length = this.batches.length; t < this$batches$length; t++) {
        var r = this.batches[t]
        r.worldAlpha = this.worldAlpha * r.alpha
        e.plugins[this.pluginName].render(r)
      }
    }
  }
  t.prototype._renderDirect = function (e) {
    var t = this._resolveDirectShader(e)
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    var /* [auto-meaningful-name] */this$tint = this.tint
    var /* [auto-meaningful-name] */this$worldAlpha = this.worldAlpha
    var /* [auto-meaningful-name] */t$uniforms = t.uniforms
    var /* [auto-meaningful-name] */this$_geometry$drawCalls = this$_geometry.drawCalls
    t$uniforms.translationMatrix = this.transform.worldTransform
    t$uniforms.tint[0] = (this$tint >> 16 & 255) / 255 * this$worldAlpha
    t$uniforms.tint[1] = (this$tint >> 8 & 255) / 255 * this$worldAlpha
    t$uniforms.tint[2] = (255 & this$tint) / 255 * this$worldAlpha
    t$uniforms.tint[3] = this$worldAlpha
    e.shader.bind(t)
    e.geometry.bind(this$_geometry, t)
    e.state.set(this.state)
    for (var s = 0, /* [auto-meaningful-name] */this$_geometry$drawCalls$length = this$_geometry$drawCalls.length; s < this$_geometry$drawCalls$length; s++) {
      this._renderDrawCallDirect(e, this$_geometry.drawCalls[s])
    }
  }
  t.prototype._renderDrawCallDirect = function (e, t) {
    for (var /* [auto-meaningful-name] */t$texArray = t.texArray, /* [auto-meaningful-name] */t$type = t.type, /* [auto-meaningful-name] */t$size = t.size, /* [auto-meaningful-name] */t$start = t.start, /* [auto-meaningful-name] */t$texArray$count = t$texArray.count, s = 0; s < t$texArray$count; s++) {
      e.texture.bind(t$texArray.elements[s], s)
    }
    e.geometry.draw(t$type, t$size, t$start)
  }
  t.prototype._resolveDirectShader = function (e) {
    var /* [auto-meaningful-name] */this$shader = this.shader
    var /* [auto-meaningful-name] */this$pluginName = this.pluginName
    if (!this$shader) {
      if (!Ro[this$pluginName]) {
        for (var /* [auto-meaningful-name] */e$plugins$batch$MAX_TEXTURES = e.plugins.batch.MAX_TEXTURES, i = new Int32Array(e$plugins$batch$MAX_TEXTURES), o = 0; o < e$plugins$batch$MAX_TEXTURES; o++) {
          i[o] = o
        }
        var a = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new _t(),
          default: In.from({
            uSamplers: i
          }, true)
        }
        var /* [auto-meaningful-name] */e$pluginsThis$pluginName$_shader$program = e.plugins[this$pluginName]._shader.program
        Ro[this$pluginName] = new gr(e$pluginsThis$pluginName$_shader$program, a)
      }
      this$shader = Ro[this$pluginName]
    }
    return this$shader
  }
  t.prototype._calculateBounds = function () {
    this.finishPoly()
    var /* [auto-meaningful-name] */this$_geometry = this._geometry
    if (this$_geometry.graphicsData.length) {
      var /* [auto-meaningful-name] */this$_geometry$bounds = this$_geometry.bounds
      var /* [auto-meaningful-name] */this$_geometry$bounds$minX = this$_geometry$bounds.minX
      var /* [auto-meaningful-name] */this$_geometry$bounds$minY = this$_geometry$bounds.minY
      var /* [auto-meaningful-name] */this$_geometry$bounds$maxX = this$_geometry$bounds.maxX
      var /* [auto-meaningful-name] */this$_geometry$bounds$maxY = this$_geometry$bounds.maxY
      this._bounds.addFrame(this.transform, this$_geometry$bounds$minX, this$_geometry$bounds$minY, this$_geometry$bounds$maxX, this$_geometry$bounds$maxY)
    }
  }
  t.prototype.containsPoint = function (e) {
    this.worldTransform.applyInverse(e, t._TEMP_POINT)
    return this._geometry.containsPoint(t._TEMP_POINT)
  }
  t.prototype.calculateTints = function () {
    if (this.batchTint !== this.tint) {
      this.batchTint = this.tint
      for (var e = xe(this.tint, Io), t = 0; t < this.batches.length; t++) {
        var n = this.batches[t]
        var /* [auto-meaningful-name] */n$_batchRGB = n._batchRGB
        var i = (e[0] * n$_batchRGB[0] * 255 << 16) + (e[1] * n$_batchRGB[1] * 255 << 8) + (0 | e[2] * n$_batchRGB[2] * 255)
        n._tintRGB = (i >> 16) + (65280 & i) + ((255 & i) << 16)
      }
    }
  }
  t.prototype.calculateVertices = function () {
    var /* [auto-meaningful-name] */this$transform$_worldID = this.transform._worldID
    if (this._transformID !== this$transform$_worldID) {
      this._transformID = this$transform$_worldID
      for (var /* [auto-meaningful-name] */this$transform$worldTransform = this.transform.worldTransform, /* [auto-meaningful-name] */this$transform$worldTransform$a = this$transform$worldTransform.a, /* [auto-meaningful-name] */this$transform$worldTransform$b = this$transform$worldTransform.b, /* [auto-meaningful-name] */this$transform$worldTransform$c = this$transform$worldTransform.c, /* [auto-meaningful-name] */this$transform$worldTransform$d = this$transform$worldTransform.d, /* [auto-meaningful-name] */this$transform$worldTransform$tx = this$transform$worldTransform.tx, /* [auto-meaningful-name] */this$transform$worldTransform$ty = this$transform$worldTransform.ty, /* [auto-meaningful-name] */this$_geometry$points = this._geometry.points, /* [auto-meaningful-name] */this$vertexData = this.vertexData, l = 0, f = 0; f < this$_geometry$points.length; f += 2) {
        var d = this$_geometry$points[f]
        var h = this$_geometry$points[f + 1]
        this$vertexData[l++] = this$transform$worldTransform$a * d + this$transform$worldTransform$c * h + this$transform$worldTransform$tx
        this$vertexData[l++] = this$transform$worldTransform$d * h + this$transform$worldTransform$b * d + this$transform$worldTransform$ty
      }
    }
  }
  t.prototype.closePath = function () {
    var /* [auto-meaningful-name] */this$currentPath = this.currentPath
    if (this$currentPath) {
      this$currentPath.closeStroke = true
    }
    return this
  }
  t.prototype.setMatrix = function (e) {
    this._matrix = e
    return this
  }
  t.prototype.beginHole = function () {
    this.finishPoly()
    this._holeMode = true
    return this
  }
  t.prototype.endHole = function () {
    this.finishPoly()
    this._holeMode = false
    return this
  }
  t.prototype.destroy = function (t) {
    this._geometry.refCount--
    if (0 === this._geometry.refCount) {
      this._geometry.dispose()
    }
    this._matrix = null
    this.currentPath = null
    this._lineStyle.destroy()
    this._lineStyle = null
    this._fillStyle.destroy()
    this._fillStyle = null
    this._geometry = null
    this.shader = null
    this.vertexData = null
    this.batches.length = 0
    this.batches = null
    e.prototype.destroy.call(this, t)
  }
  t._TEMP_POINT = new ht()
  return t
}(Pt)
var Po = function () {
  function e(e) {
    this.renderer = e
    this._svgMatrix = null
    this._tempMatrix = new _t()
  }
  e.prototype._calcCanvasStyle = function (e, t) {
    var n
    if (e.texture && e.texture.baseTexture !== An.WHITE.baseTexture) {
      if (e.texture.valid) {
        n = eo.getTintedPattern(e.texture, t)
        this.setPatternTransform(n, e.matrix || _t.IDENTITY)
      } else {
        n = "#808080"
      }
    } else {
      n = "#" + ("00000" + (0 | t).toString(16)).substr(-6)
    }
    return n
  }
  e.prototype.render = function (e) {
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$renderer$context = this$renderer.context
    var /* [auto-meaningful-name] */e$worldAlpha = e.worldAlpha
    var /* [auto-meaningful-name] */e$transform$worldTransform = e.transform.worldTransform
    this$renderer.setContextTransform(e$transform$worldTransform)
    this$renderer.setBlendMode(e.blendMode)
    for (var o, a, /* [auto-meaningful-name] */e$geometry$graphicsData = e.geometry.graphicsData, c = (e.tint >> 16 & 255) / 255, u = (e.tint >> 8 & 255) / 255, l = (255 & e.tint) / 255, f = 0; f < e$geometry$graphicsData.length; f++) {
      var d = e$geometry$graphicsData[f]
      var /* [auto-meaningful-name] */d$shape = d.shape
      var /* [auto-meaningful-name] */d$fillStyle = d.fillStyle
      var /* [auto-meaningful-name] */d$lineStyle = d.lineStyle
      var A = 0 | d.fillStyle.color
      var g = 0 | d.lineStyle.color
      if (d.matrix) {
        this$renderer.setContextTransform(e$transform$worldTransform.copyTo(this._tempMatrix).append(d.matrix))
      }
      if (d$fillStyle.visible) {
        var v = ((A >> 16 & 255) / 255 * c * 255 << 16) + ((A >> 8 & 255) / 255 * u * 255 << 8) + (255 & A) / 255 * l * 255
        o = this._calcCanvasStyle(d$fillStyle, v)
      }
      if (d$lineStyle.visible) {
        var m = ((g >> 16 & 255) / 255 * c * 255 << 16) + ((g >> 8 & 255) / 255 * u * 255 << 8) + (255 & g) / 255 * l * 255
        a = this._calcCanvasStyle(d$lineStyle, m)
      }
      this$renderer$context.lineWidth = d$lineStyle.width
      this$renderer$context.lineCap = d$lineStyle.cap
      this$renderer$context.lineJoin = d$lineStyle.join
      this$renderer$context.miterLimit = d$lineStyle.miterLimit
      if (d.type === it.POLY) {
        this$renderer$context.beginPath()
        var /* [auto-meaningful-name] */SD$shape$points = (S = d$shape).points
        var /* [auto-meaningful-name] */d$holes = d.holes
        var w = undefined
        var E = undefined
        var x = undefined
        var C = undefined
        this$renderer$context.moveTo(SD$shape$points[0], SD$shape$points[1])
        for (var O = 2; O < SD$shape$points.length; O += 2) {
          this$renderer$context.lineTo(SD$shape$points[O], SD$shape$points[O + 1])
        }
        if (S.closeStroke) {
          this$renderer$context.closePath()
        }
        if (d$holes.length > 0) {
          w = 0
          x = SD$shape$points[0]
          C = SD$shape$points[1]
          for (O = 2; O + 2 < SD$shape$points.length; O += 2) {
            w += (SD$shape$points[O] - x) * (SD$shape$points[O + 3] - C) - (SD$shape$points[O + 2] - x) * (SD$shape$points[O + 1] - C)
          }
          for (var k = 0; k < d$holes.length; k++) {
            if (SD$shape$points = d$holes[k].shape.points) {
              E = 0
              x = SD$shape$points[0]
              C = SD$shape$points[1]
              for (O = 2; O + 2 < SD$shape$points.length; O += 2) {
                E += (SD$shape$points[O] - x) * (SD$shape$points[O + 3] - C) - (SD$shape$points[O + 2] - x) * (SD$shape$points[O + 1] - C)
              }
              if (E * w < 0) {
                this$renderer$context.moveTo(SD$shape$points[0], SD$shape$points[1])
                for (O = 2; O < SD$shape$points.length; O += 2) {
                  this$renderer$context.lineTo(SD$shape$points[O], SD$shape$points[O + 1])
                }
              } else {
                this$renderer$context.moveTo(SD$shape$points[SD$shape$points.length - 2], SD$shape$points[SD$shape$points.length - 1])
                for (O = SD$shape$points.length - 4; O >= 0; O -= 2) {
                  this$renderer$context.lineTo(SD$shape$points[O], SD$shape$points[O + 1])
                }
              }
              if (d$holes[k].shape.closeStroke) {
                this$renderer$context.closePath()
              }
            }
          }
        }
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      } else if (d.type === it.RECT) {
        var S = d$shape
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fillRect(S.x, S.y, S.width, S.height)
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.strokeRect(S.x, S.y, S.width, S.height)
        }
      } else if (d.type === it.CIRC) {
        S = d$shape
        this$renderer$context.beginPath()
        this$renderer$context.arc(S.x, S.y, S.radius, 0, 2 * Math.PI)
        this$renderer$context.closePath()
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      } else if (d.type === it.ELIP) {
        var T = 2 * (S = d$shape).width
        var B = 2 * S.height
        var D = S.x - T / 2
        var I = S.y - B / 2
        this$renderer$context.beginPath()
        var R = T / 2 * .5522848
        var F = B / 2 * .5522848
        var P = D + T
        var N = I + B
        var M = D + T / 2
        var L = I + B / 2
        this$renderer$context.moveTo(D, L)
        this$renderer$context.bezierCurveTo(D, L - F, M - R, I, M, I)
        this$renderer$context.bezierCurveTo(M + R, I, P, L - F, P, L)
        this$renderer$context.bezierCurveTo(P, L + F, M + R, N, M, N)
        this$renderer$context.bezierCurveTo(M - R, N, D, L + F, D, L)
        this$renderer$context.closePath()
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      } else if (d.type === it.RREC) {
        var /* [auto-meaningful-name] */SD$shape$x = (S = d$shape).x
        var U = S.y
        var /* [auto-meaningful-name] */S$width = S.width
        var /* [auto-meaningful-name] */S$height = S.height
        var /* [auto-meaningful-name] */S$radius = S.radius
        var z = Math.min(S$width, S$height) / 2 | 0
        S$radius = S$radius > z ? z : S$radius
        this$renderer$context.beginPath()
        this$renderer$context.moveTo(SD$shape$x, U + S$radius)
        this$renderer$context.lineTo(SD$shape$x, U + S$height - S$radius)
        this$renderer$context.quadraticCurveTo(SD$shape$x, U + S$height, SD$shape$x + S$radius, U + S$height)
        this$renderer$context.lineTo(SD$shape$x + S$width - S$radius, U + S$height)
        this$renderer$context.quadraticCurveTo(SD$shape$x + S$width, U + S$height, SD$shape$x + S$width, U + S$height - S$radius)
        this$renderer$context.lineTo(SD$shape$x + S$width, U + S$radius)
        this$renderer$context.quadraticCurveTo(SD$shape$x + S$width, U, SD$shape$x + S$width - S$radius, U)
        this$renderer$context.lineTo(SD$shape$x + S$radius, U)
        this$renderer$context.quadraticCurveTo(SD$shape$x, U, SD$shape$x, U + S$radius)
        this$renderer$context.closePath()
        if (d$fillStyle.visible) {
          this$renderer$context.globalAlpha = d$fillStyle.alpha * e$worldAlpha
          this$renderer$context.fillStyle = o
          this$renderer$context.fill()
        }
        if (d$lineStyle.visible) {
          this$renderer$context.globalAlpha = d$lineStyle.alpha * e$worldAlpha
          this$renderer$context.strokeStyle = a
          this$renderer$context.stroke()
        }
      }
    }
  }
  e.prototype.setPatternTransform = function (e, t) {
    if (false !== this._svgMatrix) {
      if (!this._svgMatrix) {
        var n = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        if (n && n.createSVGMatrix) {
          this._svgMatrix = n.createSVGMatrix()
        }
        if (!this._svgMatrix || !e.setTransform) {
          return void (this._svgMatrix = false)
        }
      }
      this._svgMatrix.a = t.a
      this._svgMatrix.b = t.b
      this._svgMatrix.c = t.c
      this._svgMatrix.d = t.d
      this._svgMatrix.e = t.tx
      this._svgMatrix.f = t.ty
      e.setTransform(this._svgMatrix.inverse())
    }
  }
  e.prototype.destroy = function () {
    this.renderer = null
    this._svgMatrix = null
    this._tempMatrix = null
  }
  return e
}()
var No = new _t()
Fo.prototype.generateCanvasTexture = function (e, t) {
  if (undefined === t) {
    t = 1
  }
  var n = this.getLocalBounds()
  var r = vn.create({
    width: n.width,
    height: n.height,
    scaleMode: e,
    resolution: t
  })
  if (!mo) {
    mo = new Zi()
  }
  this.transform.updateLocalTransform()
  this.transform.localTransform.copyTo(No)
  No.invert()
  No.tx -= n.x
  No.ty -= n.y
  mo.render(this, {
    renderTexture: r,
    clear: true,
    transform: No
  })
  var i = An.from(r.baseTexture._canvasRenderTarget.canvas, {
    scaleMode: e
  })
  i.baseTexture.setResolution(t)
  return i
}
Fo.prototype.cachedGraphicsData = []
Fo.prototype._renderCanvas = function (e) {
  if (true !== this.isMask) {
    this.finishPoly()
    e.plugins.graphics.render(this)
  }
}
var Mo = new _t()
var Lo = function () {
  function e(e) {
    this.renderer = e
  }
  e.prototype.render = function (e) {
    var /* [auto-meaningful-name] */e$_texture = e._texture
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    var /* [auto-meaningful-name] */this$renderer$context = this$renderer.context
    var /* [auto-meaningful-name] */e$_texture$_frame$width = e$_texture._frame.width
    var /* [auto-meaningful-name] */e$_texture$_frame$height = e$_texture._frame.height
    var /* [auto-meaningful-name] */e$transform$worldTransform = e.transform.worldTransform
    var s = 0
    var c = 0
    var u = e$_texture.baseTexture.getDrawableSource()
    if (!(e$_texture.orig.width <= 0 || e$_texture.orig.height <= 0) && e$_texture.valid && u && e$_texture.valid) {
      this$renderer.setBlendMode(e.blendMode, true)
      this$renderer.context.globalAlpha = e.worldAlpha
      var l = e$_texture.baseTexture.scaleMode === ne.LINEAR
      if (this$renderer.smoothProperty && this$renderer.context[this$renderer.smoothProperty] !== l) {
        this$renderer$context[this$renderer.smoothProperty] = l
      }
      if (e$_texture.trim) {
        s = e$_texture.trim.width / 2 + e$_texture.trim.x - e.anchor.x * e$_texture.orig.width
        c = e$_texture.trim.height / 2 + e$_texture.trim.y - e.anchor.y * e$_texture.orig.height
      } else {
        s = (.5 - e.anchor.x) * e$_texture.orig.width
        c = (.5 - e.anchor.y) * e$_texture.orig.height
      }
      if (e$_texture.rotate) {
        e$transform$worldTransform.copyTo(Mo)
        e$transform$worldTransform = Mo
        xt.matrixAppendRotationInv(e$transform$worldTransform, e$_texture.rotate, s, c)
        s = 0
        c = 0
      }
      s -= e$_texture$_frame$width / 2
      c -= e$_texture$_frame$height / 2
      this$renderer.setContextTransform(e$transform$worldTransform, e.roundPixels, 1)
      if (e.roundPixels) {
        s |= 0
        c |= 0
      }
      var /* [auto-meaningful-name] */e$_texture$baseTexture$resolution = e$_texture.baseTexture.resolution
      var /* [auto-meaningful-name] */this$renderer$_outerBlend = this$renderer._outerBlend
      if (this$renderer$_outerBlend) {
        this$renderer$context.save()
        this$renderer$context.beginPath()
        this$renderer$context.rect(s * this$renderer.resolution, c * this$renderer.resolution, e$_texture$_frame$width * this$renderer.resolution, e$_texture$_frame$height * this$renderer.resolution)
        this$renderer$context.clip()
      }
      if (16777215 !== e.tint) {
        if (!(e._cachedTint === e.tint && e._tintedCanvas.tintId === e._texture._updateID)) {
          e._cachedTint = e.tint
          e._tintedCanvas = eo.getTintedCanvas(e, e.tint)
        }
        this$renderer$context.drawImage(e._tintedCanvas, 0, 0, Math.floor(e$_texture$_frame$width * e$_texture$baseTexture$resolution), Math.floor(e$_texture$_frame$height * e$_texture$baseTexture$resolution), Math.floor(s * this$renderer.resolution), Math.floor(c * this$renderer.resolution), Math.floor(e$_texture$_frame$width * this$renderer.resolution), Math.floor(e$_texture$_frame$height * this$renderer.resolution))
      } else {
        this$renderer$context.drawImage(u, e$_texture._frame.x * e$_texture$baseTexture$resolution, e$_texture._frame.y * e$_texture$baseTexture$resolution, Math.floor(e$_texture$_frame$width * e$_texture$baseTexture$resolution), Math.floor(e$_texture$_frame$height * e$_texture$baseTexture$resolution), Math.floor(s * this$renderer.resolution), Math.floor(c * this$renderer.resolution), Math.floor(e$_texture$_frame$width * this$renderer.resolution), Math.floor(e$_texture$_frame$height * this$renderer.resolution))
      }
      if (this$renderer$_outerBlend) {
        this$renderer$context.restore()
      }
      this$renderer.setBlendMode(q.NORMAL)
    }
  }
  e.prototype.destroy = function () {
    this.renderer = null
  }
  return e
}()
Li.prototype._tintedCanvas = null
Li.prototype._renderCanvas = function (e) {
  e.plugins.sprite.render(this)
}
var jo = new ct()
var Uo = function () {
  function e(e) {
    this.renderer = e
  }
  e.prototype.image = function (e, t, n) {
    var r = new Image()
    r.src = this.base64(e, t, n)
    return r
  }
  e.prototype.base64 = function (e, t, n) {
    return this.canvas(e).toDataURL(t, n)
  }
  e.prototype.canvas = function (e) {
    var t
    var n
    var r
    var i
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    if (e) {
      i = e instanceof vn ? e : this$renderer.generateTexture(e)
    }
    if (i) {
      t = i.baseTexture._canvasRenderTarget.context
      n = i.baseTexture._canvasRenderTarget.resolution
      r = i.frame
    } else {
      t = this$renderer.rootContext
      n = this$renderer.resolution;
      (r = jo).width = this.renderer.width
      r.height = this.renderer.height
    }
    var a = Math.floor(r.width * n + 1e-4)
    var s = Math.floor(r.height * n + 1e-4)
    var c = new $e(a, s, 1)
    var u = t.getImageData(r.x * n, r.y * n, a, s)
    c.context.putImageData(u, 0, 0)
    return c.canvas
  }
  e.prototype.pixels = function (e) {
    var t
    var /* [auto-meaningful-name] */i$baseTexture$_canvasRenderTarget$resolution
    var r
    var i
    var /* [auto-meaningful-name] */this$renderer = this.renderer
    if (e) {
      i = e instanceof vn ? e : this$renderer.generateTexture(e)
    }
    if (i) {
      t = i.baseTexture._canvasRenderTarget.context
      i$baseTexture$_canvasRenderTarget$resolution = i.baseTexture._canvasRenderTarget.resolution
      r = i.frame
    } else {
      t = this$renderer.rootContext;
      (r = jo).width = this$renderer.width
      r.height = this$renderer.height
    }
    var a = r.x * i$baseTexture$_canvasRenderTarget$resolution
    var s = r.y * i$baseTexture$_canvasRenderTarget$resolution
    var c = r.width * i$baseTexture$_canvasRenderTarget$resolution
    var u = r.height * i$baseTexture$_canvasRenderTarget$resolution
    return t.getImageData(a, s, c, u).data
  }
  e.prototype.destroy = function () {
    this.renderer = null
  }
  return e
}()
var Ho = new _t()
var Vo = new _t()
var Go = [new ht(), new ht(), new ht(), new ht()]
Vi.prototype._renderCanvas = function (e) {
  var /* [auto-meaningful-name] */this$_texture = this._texture
  if (this$_texture.baseTexture.valid) {
    var /* [auto-meaningful-name] */e$context = e.context
    var /* [auto-meaningful-name] */this$worldTransform = this.worldTransform
    var /* [auto-meaningful-name] */this$_texture$baseTexture = this$_texture.baseTexture
    var o = this$_texture$baseTexture.getDrawableSource()
    var /* [auto-meaningful-name] */this$_texture$baseTexture$resolution = this$_texture$baseTexture.resolution
    if (this._textureID !== this._texture._updateID || this._cachedTint !== this.tint) {
      this._textureID = this._texture._updateID
      var s = new $e(this$_texture._frame.width, this$_texture._frame.height, this$_texture$baseTexture$resolution)
      if (16777215 !== this.tint) {
        this._tintedCanvas = eo.getTintedCanvas(this, this.tint)
        s.context.drawImage(this._tintedCanvas, 0, 0)
      } else {
        s.context.drawImage(o, -this$_texture._frame.x * this$_texture$baseTexture$resolution, -this$_texture._frame.y * this$_texture$baseTexture$resolution)
      }
      this._cachedTint = this.tint
      this._canvasPattern = s.context.createPattern(s.canvas, "repeat")
    }
    e$context.globalAlpha = this.worldAlpha
    e.setBlendMode(this.blendMode)
    this.tileTransform.updateLocalTransform()
    var /* [auto-meaningful-name] */this$tileTransform$localTransform = this.tileTransform.localTransform
    var /* [auto-meaningful-name] */this$_width = this._width
    var /* [auto-meaningful-name] */this$_height = this._height
    Ho.identity()
    Vo.copyFrom(this$tileTransform$localTransform)
    if (!this.uvRespectAnchor) {
      Vo.translate(-this.anchor.x * this$_width, -this.anchor.y * this$_height)
    }
    Ho.prepend(Vo)
    Ho.prepend(this$worldTransform)
    e.setContextTransform(Ho)
    e$context.fillStyle = this._canvasPattern
    var f = this.anchor.x * -this$_width
    var d = this.anchor.y * -this$_height
    Go[0].set(f, d)
    Go[1].set(f + this$_width, d)
    Go[2].set(f + this$_width, d + this$_height)
    Go[3].set(f, d + this$_height)
    for (var h = 0; h < 4; h++) {
      Vo.applyInverse(Go[h], Go[h])
    }
    e$context.beginPath()
    e$context.moveTo(Go[0].x, Go[0].y)
    for (h = 1; h < 4; h++) {
      e$context.lineTo(Go[h].x, Go[h].y)
    }
    e$context.closePath()
    e$context.fill()
  }
}
Pt.prototype._renderCanvas = function (e) {}
Pt.prototype.renderCanvas = function (e) {
  if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
    if (this._mask) {
      e.maskManager.pushMask(this._mask)
    }
    this._renderCanvas(e)
    for (var t = 0, /* [auto-meaningful-name] */this$children$length = this.children.length; t < this$children$length; ++t) {
      this.children[t].renderCanvas(e)
    }
    if (this._mask) {
      e.maskManager.popMask(e)
    }
  }
}
It.prototype.renderCanvas = function (e) {}
var zo
var Qo = function (e, t) {
  return (Qo = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
!function (e) {
  e[e.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL"
  e[e.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL"
}(zo || (zo = {}))
var Wo = {
  align: "left",
  breakWords: false,
  dropShadow: false,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: "black",
  dropShadowDistance: 5,
  fill: "black",
  fillGradientType: zo.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: "Arial",
  fontSize: 26,
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "normal",
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: "miter",
  miterLimit: 10,
  padding: 0,
  stroke: "black",
  strokeThickness: 0,
  textBaseline: "alphabetic",
  trim: false,
  whiteSpace: "pre",
  wordWrap: false,
  wordWrapWidth: 100,
  leading: 0
}
var Ko = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
var Xo = function () {
  function e(e) {
    this.styleID = 0
    this.reset()
    $o(this, e, e)
  }
  e.prototype.clone = function () {
    var t = {}
    $o(t, this, Wo)
    return new e(t)
  }
  e.prototype.reset = function () {
    $o(this, Wo, Wo)
  }
  Object.defineProperty(e.prototype, "align", {
    get: function () {
      return this._align
    },
    set: function (e) {
      if (this._align !== e) {
        this._align = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "breakWords", {
    get: function () {
      return this._breakWords
    },
    set: function (e) {
      if (this._breakWords !== e) {
        this._breakWords = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadow", {
    get: function () {
      return this._dropShadow
    },
    set: function (e) {
      if (this._dropShadow !== e) {
        this._dropShadow = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowAlpha", {
    get: function () {
      return this._dropShadowAlpha
    },
    set: function (e) {
      if (this._dropShadowAlpha !== e) {
        this._dropShadowAlpha = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowAngle", {
    get: function () {
      return this._dropShadowAngle
    },
    set: function (e) {
      if (this._dropShadowAngle !== e) {
        this._dropShadowAngle = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowBlur", {
    get: function () {
      return this._dropShadowBlur
    },
    set: function (e) {
      if (this._dropShadowBlur !== e) {
        this._dropShadowBlur = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowColor", {
    get: function () {
      return this._dropShadowColor
    },
    set: function (e) {
      var t = qo(e)
      if (this._dropShadowColor !== t) {
        this._dropShadowColor = t
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "dropShadowDistance", {
    get: function () {
      return this._dropShadowDistance
    },
    set: function (e) {
      if (this._dropShadowDistance !== e) {
        this._dropShadowDistance = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fill", {
    get: function () {
      return this._fill
    },
    set: function (e) {
      var t = qo(e)
      if (this._fill !== t) {
        this._fill = t
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fillGradientType", {
    get: function () {
      return this._fillGradientType
    },
    set: function (e) {
      if (this._fillGradientType !== e) {
        this._fillGradientType = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fillGradientStops", {
    get: function () {
      return this._fillGradientStops
    },
    set: function (e) {
      if (!function (e, t) {
        if (!Array.isArray(e) || !Array.isArray(t)) {
          return false
        }
        if (e.length !== t.length) {
          return false
        }
        for (var n = 0; n < e.length; ++n) {
          if (e[n] !== t[n]) {
            return false
          }
        }
        return true
      }(this._fillGradientStops, e)) {
        this._fillGradientStops = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontFamily", {
    get: function () {
      return this._fontFamily
    },
    set: function (e) {
      if (this.fontFamily !== e) {
        this._fontFamily = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontSize", {
    get: function () {
      return this._fontSize
    },
    set: function (e) {
      if (this._fontSize !== e) {
        this._fontSize = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontStyle", {
    get: function () {
      return this._fontStyle
    },
    set: function (e) {
      if (this._fontStyle !== e) {
        this._fontStyle = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontVariant", {
    get: function () {
      return this._fontVariant
    },
    set: function (e) {
      if (this._fontVariant !== e) {
        this._fontVariant = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "fontWeight", {
    get: function () {
      return this._fontWeight
    },
    set: function (e) {
      if (this._fontWeight !== e) {
        this._fontWeight = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "letterSpacing", {
    get: function () {
      return this._letterSpacing
    },
    set: function (e) {
      if (this._letterSpacing !== e) {
        this._letterSpacing = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "lineHeight", {
    get: function () {
      return this._lineHeight
    },
    set: function (e) {
      if (this._lineHeight !== e) {
        this._lineHeight = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "leading", {
    get: function () {
      return this._leading
    },
    set: function (e) {
      if (this._leading !== e) {
        this._leading = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "lineJoin", {
    get: function () {
      return this._lineJoin
    },
    set: function (e) {
      if (this._lineJoin !== e) {
        this._lineJoin = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "miterLimit", {
    get: function () {
      return this._miterLimit
    },
    set: function (e) {
      if (this._miterLimit !== e) {
        this._miterLimit = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "padding", {
    get: function () {
      return this._padding
    },
    set: function (e) {
      if (this._padding !== e) {
        this._padding = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "stroke", {
    get: function () {
      return this._stroke
    },
    set: function (e) {
      var t = qo(e)
      if (this._stroke !== t) {
        this._stroke = t
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "strokeThickness", {
    get: function () {
      return this._strokeThickness
    },
    set: function (e) {
      if (this._strokeThickness !== e) {
        this._strokeThickness = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "textBaseline", {
    get: function () {
      return this._textBaseline
    },
    set: function (e) {
      if (this._textBaseline !== e) {
        this._textBaseline = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "trim", {
    get: function () {
      return this._trim
    },
    set: function (e) {
      if (this._trim !== e) {
        this._trim = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "whiteSpace", {
    get: function () {
      return this._whiteSpace
    },
    set: function (e) {
      if (this._whiteSpace !== e) {
        this._whiteSpace = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "wordWrap", {
    get: function () {
      return this._wordWrap
    },
    set: function (e) {
      if (this._wordWrap !== e) {
        this._wordWrap = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(e.prototype, "wordWrapWidth", {
    get: function () {
      return this._wordWrapWidth
    },
    set: function (e) {
      if (this._wordWrapWidth !== e) {
        this._wordWrapWidth = e
        this.styleID++
      }
    },
    enumerable: false,
    configurable: true
  })
  e.prototype.toFontString = function () {
    var e = "number" === typeof this.fontSize ? this.fontSize + "px" : this.fontSize
    var /* [auto-meaningful-name] */this$fontFamily = this.fontFamily
    if (!Array.isArray(this.fontFamily)) {
      this$fontFamily = this.fontFamily.split(",")
    }
    for (var n = this$fontFamily.length - 1; n >= 0; n--) {
      var r = this$fontFamily[n].trim()
      if (!/([\"\'])[^\'\"]+\1/.test(r) && Ko.indexOf(r) < 0) {
        r = "\"" + r + "\""
      }
      this$fontFamily[n] = r
    }
    return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + e + " " + this$fontFamily.join(",")
  }
  return e
}()
function Yo(e) {
  return "number" === typeof e ? Ce(e) : ("string" === typeof e && 0 === e.indexOf("0x") && (e = e.replace("0x", "#")), e)
}
function qo(e) {
  if (Array.isArray(e)) {
    for (var t = 0; t < e.length; ++t) {
      e[t] = Yo(e[t])
    }
    return e
  }
  return Yo(e)
}
function $o(e, t, n) {
  for (var r in n) if (Array.isArray(t[r])) {
    e[r] = t[r].slice()
  } else {
    e[r] = t[r]
  }
}
var Jo = function () {
  function e(e, t, n, r, i, o, a, s, c) {
    this.text = e
    this.style = t
    this.width = n
    this.height = r
    this.lines = i
    this.lineWidths = o
    this.lineHeight = a
    this.maxLineWidth = s
    this.fontProperties = c
  }
  e.measureText = function (t, n, r, i) {
    if (undefined === i) {
      i = e._canvas
    }
    r = undefined === r || null === r ? n.wordWrap : r
    var o = n.toFontString()
    var a = e.measureFont(o)
    if (0 === a.fontSize) {
      a.fontSize = n.fontSize
      a.ascent = n.fontSize
    }
    var s = i.getContext("2d")
    s.font = o
    for (var c = (r ? e.wordWrap(t, n, i) : t).split(/(?:\r\n|\r|\n)/), u = new Array(c.length), l = 0, f = 0; f < c.length; f++) {
      var d = s.measureText(c[f]).width + (c[f].length - 1) * n.letterSpacing
      u[f] = d
      l = Math.max(l, d)
    }
    var h = l + n.strokeThickness
    if (n.dropShadow) {
      h += n.dropShadowDistance
    }
    var p = n.lineHeight || a.fontSize + n.strokeThickness
    var _ = Math.max(p, a.fontSize + n.strokeThickness) + (c.length - 1) * (p + n.leading)
    if (n.dropShadow) {
      _ += n.dropShadowDistance
    }
    return new e(t, n, h, _, c, u, p + n.leading, l, a)
  }
  e.wordWrap = function (t, n, r) {
    if (undefined === r) {
      r = e._canvas
    }
    for (var i = r.getContext("2d"), o = 0, a = "", s = "", c = Object.create(null), /* [auto-meaningful-name] */n$letterSpacing = n.letterSpacing, /* [auto-meaningful-name] */n$whiteSpace = n.whiteSpace, f = e.collapseSpaces(n$whiteSpace), d = e.collapseNewlines(n$whiteSpace), h = !f, p = n.wordWrapWidth + n$letterSpacing, _ = e.tokenize(t), A = 0; A < _.length; A++) {
      var g = _[A]
      if (e.isNewline(g)) {
        if (!d) {
          s += e.addLine(a)
          h = !f
          a = ""
          o = 0
          continue
        }
        g = " "
      }
      if (f) {
        var v = e.isBreakingSpace(g)
        var m = e.isBreakingSpace(a[a.length - 1])
        if (v && m) {
          continue
        }
      }
      var y = e.getFromCache(g, n$letterSpacing, c, i)
      if (y > p) {
        if ("" !== a) {
          s += e.addLine(a)
          a = ""
          o = 0
        }
        if (e.canBreakWords(g, n.breakWords)) {
          for (var b = e.wordWrapSplit(g), w = 0; w < b.length; w++) {
            for (var E = b[w], x = 1; b[w + x];) {
              var C = b[w + x]
              var O = E[E.length - 1]
              if (e.canBreakChars(O, C, g, w, n.breakWords)) {
                break
              }
              E += C
              x++
            }
            w += E.length - 1
            var k = e.getFromCache(E, n$letterSpacing, c, i)
            if (k + o > p) {
              s += e.addLine(a)
              h = false
              a = ""
              o = 0
            }
            a += E
            o += k
          }
        } else {
          if (a.length > 0) {
            s += e.addLine(a)
            a = ""
            o = 0
          }
          var S = A === _.length - 1
          s += e.addLine(g, !S)
          h = false
          a = ""
          o = 0
        }
      } else {
        if (y + o > p) {
          h = false
          s += e.addLine(a)
          a = ""
          o = 0
        }
        if (a.length > 0 || !e.isBreakingSpace(g) || h) {
          a += g
          o += y
        }
      }
    }
    return s += e.addLine(a, false)
  }
  e.addLine = function (t, n) {
    if (undefined === n) {
      n = true
    }
    t = e.trimRight(t)
    return t = n ? t + "\n" : t
  }
  e.getFromCache = function (e, t, n, r) {
    var i = n[e]
    if ("number" !== typeof i) {
      var o = e.length * t
      i = r.measureText(e).width + o
      n[e] = i
    }
    return i
  }
  e.collapseSpaces = function (e) {
    return "normal" === e || "pre-line" === e
  }
  e.collapseNewlines = function (e) {
    return "normal" === e
  }
  e.trimRight = function (t) {
    if ("string" !== typeof t) {
      return ""
    }
    for (var n = t.length - 1; n >= 0; n--) {
      var r = t[n]
      if (!e.isBreakingSpace(r)) {
        break
      }
      t = t.slice(0, -1)
    }
    return t
  }
  e.isNewline = function (t) {
    return "string" === typeof t && e._newlines.indexOf(t.charCodeAt(0)) >= 0
  }
  e.isBreakingSpace = function (t, n) {
    return "string" === typeof t && e._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
  }
  e.tokenize = function (t) {
    var n = []
    var r = ""
    if ("string" !== typeof t) {
      return n
    }
    for (var i = 0; i < t.length; i++) {
      var o = t[i]
      var a = t[i + 1]
      if (e.isBreakingSpace(o, a) || e.isNewline(o)) {
        if ("" !== r) {
          n.push(r)
          r = ""
        }
        n.push(o)
      } else {
        r += o
      }
    }
    if ("" !== r) {
      n.push(r)
    }
    return n
  }
  e.canBreakWords = function (e, t) {
    return t
  }
  e.canBreakChars = function (e, t, n, r, i) {
    return true
  }
  e.wordWrapSplit = function (e) {
    return e.split("")
  }
  e.measureFont = function (t) {
    if (e._fonts[t]) {
      return e._fonts[t]
    }
    var n = {
      ascent: 0,
      descent: 0,
      fontSize: 0
    }
    var /* [auto-meaningful-name] */e$_canvas = e._canvas
    var /* [auto-meaningful-name] */e$_context = e._context
    e$_context.font = t
    var o = e.METRICS_STRING + e.BASELINE_SYMBOL
    var a = Math.ceil(e$_context.measureText(o).width)
    var s = Math.ceil(e$_context.measureText(e.BASELINE_SYMBOL).width)
    var c = Math.ceil(e.HEIGHT_MULTIPLIER * s)
    s = s * e.BASELINE_MULTIPLIER | 0
    e$_canvas.width = a
    e$_canvas.height = c
    e$_context.fillStyle = "#f00"
    e$_context.fillRect(0, 0, a, c)
    e$_context.font = t
    e$_context.textBaseline = "alphabetic"
    e$_context.fillStyle = "#000"
    e$_context.fillText(o, 0, s)
    var /* [auto-meaningful-name] */e$_context$getImageData00AC$data = e$_context.getImageData(0, 0, a, c).data
    var /* [auto-meaningful-name] */e$_context$getImageData00AC$data$length = e$_context$getImageData00AC$data.length
    var f = 4 * a
    var d = 0
    var h = 0
    var p = false
    for (d = 0; d < s; ++d) {
      for (var _ = 0; _ < f; _ += 4) {
        if (255 !== e$_context$getImageData00AC$data[h + _]) {
          p = true
          break
        }
      }
      if (p) {
        break
      }
      h += f
    }
    for (n.ascent = s - d, h = e$_context$getImageData00AC$data$length - f, p = false, d = c; d > s; --d) {
      for (_ = 0; _ < f; _ += 4) {
        if (255 !== e$_context$getImageData00AC$data[h + _]) {
          p = true
          break
        }
      }
      if (p) {
        break
      }
      h -= f
    }
    n.descent = d - s
    n.fontSize = n.ascent + n.descent
    e._fonts[t] = n
    return n
  }
  e.clearMetrics = function (t) {
    if (undefined === t) {
      t = ""
    }
    if (t) {
      delete e._fonts[t]
    } else {
      e._fonts = {}
    }
  }
  return e
}()
var Zo = function () {
  try {
    var e = new OffscreenCanvas(0, 0)
    var t = e.getContext("2d")
    return t && t.measureText ? e : document.createElement("canvas")
  } catch (n) {
    return document.createElement("canvas")
  }
}()
Zo.width = Zo.height = 10
Jo._canvas = Zo
Jo._context = Zo.getContext("2d")
Jo._fonts = {}
Jo.METRICS_STRING = "|ÉqÅ"
Jo.BASELINE_SYMBOL = "M"
Jo.BASELINE_MULTIPLIER = 1.4
Jo.HEIGHT_MULTIPLIER = 2
Jo._newlines = [10, 13]
Jo._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]
var ea = {
  texture: true,
  children: false,
  baseTexture: true
}
var ta = function (e) {
  function t(t, n, r) {
    var i = this
    var o = false
    if (!r) {
      r = document.createElement("canvas")
      o = true
    }
    r.width = 3
    r.height = 3
    var a = An.from(r)
    a.orig = new ct()
    a.trim = new ct();
    (i = e.call(this, a) || this)._ownCanvas = o
    i.canvas = r
    i.context = i.canvas.getContext("2d")
    i._resolution = fe.RESOLUTION
    i._autoResolution = true
    i._text = null
    i._style = null
    i._styleListener = null
    i._font = ""
    i.text = t
    i.style = n
    i.localStyleID = -1
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Qo(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.updateText = function (e) {
    var /* [auto-meaningful-name] */this$_style = this._style
    if (this.localStyleID !== this$_style.styleID) {
      this.dirty = true
      this.localStyleID = this$_style.styleID
    }
    if (this.dirty || !e) {
      this._font = this._style.toFontString()
      var r
      var i
      var /* [auto-meaningful-name] */this$context = this.context
      var a = Jo.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas)
      var /* [auto-meaningful-name] */a$width = a.width
      var /* [auto-meaningful-name] */a$height = a.height
      var /* [auto-meaningful-name] */a$lines = a.lines
      var /* [auto-meaningful-name] */a$lineHeight = a.lineHeight
      var /* [auto-meaningful-name] */a$lineWidths = a.lineWidths
      var /* [auto-meaningful-name] */a$maxLineWidth = a.maxLineWidth
      var /* [auto-meaningful-name] */a$fontProperties = a.fontProperties
      this.canvas.width = Math.ceil((Math.max(1, a$width) + 2 * this$_style.padding) * this._resolution)
      this.canvas.height = Math.ceil((Math.max(1, a$height) + 2 * this$_style.padding) * this._resolution)
      this$context.scale(this._resolution, this._resolution)
      this$context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this$context.font = this._font
      this$context.lineWidth = this$_style.strokeThickness
      this$context.textBaseline = this$_style.textBaseline
      this$context.lineJoin = this$_style.lineJoin
      this$context.miterLimit = this$_style.miterLimit
      for (var p = this$_style.dropShadow ? 2 : 1, _ = 0; _ < p; ++_) {
        var A = this$_style.dropShadow && 0 === _
        var g = A ? Math.ceil(Math.max(1, a$height) + 2 * this$_style.padding) : 0
        var v = g * this._resolution
        if (A) {
          this$context.fillStyle = "black"
          this$context.strokeStyle = "black"
          var /* [auto-meaningful-name] */this$_style$dropShadowColor = this$_style.dropShadowColor
          var y = xe("number" === typeof this$_style$dropShadowColor ? this$_style$dropShadowColor : Oe(this$_style$dropShadowColor))
          this$context.shadowColor = "rgba(" + 255 * y[0] + "," + 255 * y[1] + "," + 255 * y[2] + "," + this$_style.dropShadowAlpha + ")"
          this$context.shadowBlur = this$_style.dropShadowBlur
          this$context.shadowOffsetX = Math.cos(this$_style.dropShadowAngle) * this$_style.dropShadowDistance
          this$context.shadowOffsetY = Math.sin(this$_style.dropShadowAngle) * this$_style.dropShadowDistance + v
        } else {
          this$context.fillStyle = this._generateFillStyle(this$_style, a$lines, a)
          this$context.strokeStyle = this$_style.stroke
          this$context.shadowColor = "black"
          this$context.shadowBlur = 0
          this$context.shadowOffsetX = 0
          this$context.shadowOffsetY = 0
        }
        var b = (a$lineHeight - a$fontProperties.fontSize) / 2
        if (!t.nextLineHeightBehavior || a$lineHeight - a$fontProperties.fontSize < 0) {
          b = 0
        }
        for (var w = 0; w < a$lines.length; w++) {
          r = this$_style.strokeThickness / 2
          i = this$_style.strokeThickness / 2 + w * a$lineHeight + a$fontProperties.ascent + b
          if ("right" === this$_style.align) {
            r += a$maxLineWidth - a$lineWidths[w]
          } else {
            if ("center" === this$_style.align) {
              r += (a$maxLineWidth - a$lineWidths[w]) / 2
            }
          }
          if (this$_style.stroke && this$_style.strokeThickness) {
            this.drawLetterSpacing(a$lines[w], r + this$_style.padding, i + this$_style.padding - g, true)
          }
          if (this$_style.fill) {
            this.drawLetterSpacing(a$lines[w], r + this$_style.padding, i + this$_style.padding - g)
          }
        }
      }
      this.updateTexture()
    }
  }
  t.prototype.drawLetterSpacing = function (e, t, n, r) {
    if (undefined === r) {
      r = false
    }
    var /* [auto-meaningful-name] */this$_style$letterSpacing = this._style.letterSpacing
    if (0 !== this$_style$letterSpacing) {
      for (var o = t, a = Array.from ? Array.from(e) : e.split(""), /* [auto-meaningful-name] */this$context$measureTextE$width = this.context.measureText(e).width, c = 0, u = 0; u < a.length; ++u) {
        var l = a[u]
        if (r) {
          this.context.strokeText(l, o, n)
        } else {
          this.context.fillText(l, o, n)
        }
        o += this$context$measureTextE$width - (c = this.context.measureText(e.substring(u + 1)).width) + this$_style$letterSpacing
        this$context$measureTextE$width = c
      }
    } else if (r) {
      this.context.strokeText(e, t, n)
    } else {
      this.context.fillText(e, t, n)
    }
  }
  t.prototype.updateTexture = function () {
    var /* [auto-meaningful-name] */this$canvas = this.canvas
    if (this._style.trim) {
      var t = Je(this$canvas)
      if (t.data) {
        this$canvas.width = t.width
        this$canvas.height = t.height
        this.context.putImageData(t.data, 0, 0)
      }
    }
    var /* [auto-meaningful-name] */this$_texture = this._texture
    var /* [auto-meaningful-name] */this$_style = this._style
    var i = this$_style.trim ? 0 : this$_style.padding
    var /* [auto-meaningful-name] */this$_texture$baseTexture = this$_texture.baseTexture
    this$_texture.trim.width = this$_texture._frame.width = Math.ceil(this$canvas.width / this._resolution)
    this$_texture.trim.height = this$_texture._frame.height = Math.ceil(this$canvas.height / this._resolution)
    this$_texture.trim.x = -i
    this$_texture.trim.y = -i
    this$_texture.orig.width = this$_texture._frame.width - 2 * i
    this$_texture.orig.height = this$_texture._frame.height - 2 * i
    this._onTextureUpdate()
    this$_texture$baseTexture.setRealSize(this$canvas.width, this$canvas.height, this._resolution)
    this._recursivePostUpdateTransform()
    this.dirty = false
  }
  t.prototype._render = function (t) {
    if (this._autoResolution && this._resolution !== t.resolution) {
      this._resolution = t.resolution
      this.dirty = true
    }
    this.updateText(true)
    e.prototype._render.call(this, t)
  }
  t.prototype.getLocalBounds = function (t) {
    this.updateText(true)
    return e.prototype.getLocalBounds.call(this, t)
  }
  t.prototype._calculateBounds = function () {
    this.updateText(true)
    this.calculateVertices()
    this._bounds.addQuad(this.vertexData)
  }
  t.prototype._generateFillStyle = function (e, t, n) {
    var r
    var /* [auto-meaningful-name] */e$fill = e.fill
    if (!Array.isArray(e$fill)) {
      return e$fill
    }
    if (1 === e$fill.length) {
      return e$fill[0]
    }
    var o = e.dropShadow ? e.dropShadowDistance : 0
    var a = e.padding || 0
    var s = Math.ceil(this.canvas.width / this._resolution) - o - 2 * a
    var c = Math.ceil(this.canvas.height / this._resolution) - o - 2 * a
    var u = e$fill.slice()
    var l = e.fillGradientStops.slice()
    if (!l.length) {
      for (var f = u.length + 1, d = 1; d < f; ++d) {
        l.push(d / f)
      }
    }
    u.unshift(e$fill[0])
    l.unshift(0)
    u.push(e$fill[e$fill.length - 1])
    l.push(1)
    if (e.fillGradientType === zo.LINEAR_VERTICAL) {
      r = this.context.createLinearGradient(s / 2, a, s / 2, c + a)
      var h = (n.fontProperties.fontSize + e.strokeThickness) / c
      for (d = 0; d < t.length; d++) {
        for (var p = n.lineHeight * d, _ = 0; _ < u.length; _++) {
          var A = 0
          A = "number" === typeof l[_] ? l[_] : _ / u.length
          var g = Math.min(1, Math.max(0, p / c + A * h))
          g = Number(g.toFixed(5))
          r.addColorStop(g, u[_])
        }
      }
    } else {
      r = this.context.createLinearGradient(a, c / 2, s + a, c / 2)
      var v = u.length + 1
      var m = 1
      for (d = 0; d < u.length; d++) {
        var y = undefined
        y = "number" === typeof l[d] ? l[d] : m / v
        r.addColorStop(y, u[d])
        m++
      }
    }
    return r
  }
  t.prototype.destroy = function (t) {
    if ("boolean" === typeof t) {
      t = {
        children: t
      }
    }
    t = Object.assign({}, ea, t)
    e.prototype.destroy.call(this, t)
    if (this._ownCanvas) {
      this.canvas.height = this.canvas.width = 0
    }
    this.context = null
    this.canvas = null
    this._style = null
  }
  Object.defineProperty(t.prototype, "width", {
    get: function () {
      this.updateText(true)
      return Math.abs(this.scale.x) * this._texture.orig.width
    },
    set: function (e) {
      this.updateText(true)
      var t = He(this.scale.x) || 1
      this.scale.x = t * e / this._texture.orig.width
      this._width = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "height", {
    get: function () {
      this.updateText(true)
      return Math.abs(this.scale.y) * this._texture.orig.height
    },
    set: function (e) {
      this.updateText(true)
      var t = He(this.scale.y) || 1
      this.scale.y = t * e / this._texture.orig.height
      this._height = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "style", {
    get: function () {
      return this._style
    },
    set: function (e) {
      e = e || {}
      this._style = e instanceof Xo ? e : new Xo(e)
      this.localStyleID = -1
      this.dirty = true
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "text", {
    get: function () {
      return this._text
    },
    set: function (e) {
      e = String(null === e || undefined === e ? "" : e)
      if (this._text !== e) {
        this._text = e
        this.dirty = true
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "resolution", {
    get: function () {
      return this._resolution
    },
    set: function (e) {
      this._autoResolution = false
      if (this._resolution !== e) {
        this._resolution = e
        this.dirty = true
      }
    },
    enumerable: false,
    configurable: true
  })
  t.nextLineHeightBehavior = false
  return t
}(Li)
ta.prototype._renderCanvas = function (e) {
  if (this._autoResolution && this._resolution !== e.resolution) {
    this._resolution = e.resolution
    this.dirty = true
  }
  this.updateText(true)
  Li.prototype._renderCanvas.call(this, e)
}
var na = function (e, t) {
  return (na = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ra = function (e) {
  function t(t, n) {
    if (undefined === n) {
      n = true
    }
    var r = e.call(this, t[0] instanceof An ? t[0] : t[0].texture) || this
    r._textures = null
    r._durations = null
    r._autoUpdate = n
    r._isConnectedToTicker = false
    r.animationSpeed = 1
    r.loop = true
    r.updateAnchor = false
    r.onComplete = null
    r.onFrameChange = null
    r.onLoop = null
    r._currentTime = 0
    r._playing = false
    r._previousFrame = null
    r.textures = t
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    na(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.stop = function () {
    if (this._playing) {
      this._playing = false
      if (this._autoUpdate && this._isConnectedToTicker) {
        kt.shared.remove(this.update, this)
        this._isConnectedToTicker = false
      }
    }
  }
  t.prototype.play = function () {
    if (!this._playing) {
      this._playing = true
      if (this._autoUpdate && !this._isConnectedToTicker) {
        kt.shared.add(this.update, this, Et.HIGH)
        this._isConnectedToTicker = true
      }
    }
  }
  t.prototype.gotoAndStop = function (e) {
    this.stop()
    var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
    this._currentTime = e
    if (this$currentFrame !== this.currentFrame) {
      this.updateTexture()
    }
  }
  t.prototype.gotoAndPlay = function (e) {
    var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
    this._currentTime = e
    if (this$currentFrame !== this.currentFrame) {
      this.updateTexture()
    }
    this.play()
  }
  t.prototype.update = function (e) {
    if (this._playing) {
      var t = this.animationSpeed * e
      var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
      if (null !== this._durations) {
        var r = this._currentTime % 1 * this._durations[this.currentFrame]
        for (r += t / 60 * 1e3; r < 0;) {
          this._currentTime--
          r += this._durations[this.currentFrame]
        }
        var i = Math.sign(this.animationSpeed * e)
        for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) {
          r -= this._durations[this.currentFrame] * i
          this._currentTime += i
        }
        this._currentTime += r / this._durations[this.currentFrame]
      } else {
        this._currentTime += t
      }
      if (this._currentTime < 0 && !this.loop) {
        this.gotoAndStop(0)
        if (this.onComplete) {
          this.onComplete()
        }
      } else {
        if (this._currentTime >= this._textures.length && !this.loop) {
          this.gotoAndStop(this._textures.length - 1)
          if (this.onComplete) {
            this.onComplete()
          }
        } else {
          if (this$currentFrame !== this.currentFrame) {
            if (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < this$currentFrame || this.animationSpeed < 0 && this.currentFrame > this$currentFrame)) {
              this.onLoop()
            }
            this.updateTexture()
          }
        }
      }
    }
  }
  t.prototype.updateTexture = function () {
    var /* [auto-meaningful-name] */this$currentFrame = this.currentFrame
    if (this._previousFrame !== this$currentFrame) {
      this._previousFrame = this$currentFrame
      this._texture = this._textures[this$currentFrame]
      this._textureID = -1
      this._textureTrimmedID = -1
      this._cachedTint = 16777215
      this.uvs = this._texture._uvs.uvsFloat32
      if (this.updateAnchor) {
        this._anchor.copyFrom(this._texture.defaultAnchor)
      }
      if (this.onFrameChange) {
        this.onFrameChange(this.currentFrame)
      }
    }
  }
  t.prototype.destroy = function (t) {
    this.stop()
    e.prototype.destroy.call(this, t)
    this.onComplete = null
    this.onFrameChange = null
    this.onLoop = null
  }
  t.fromFrames = function (e) {
    for (var n = [], r = 0; r < e.length; ++r) {
      n.push(An.from(e[r]))
    }
    return new t(n)
  }
  t.fromImages = function (e) {
    for (var n = [], r = 0; r < e.length; ++r) {
      n.push(An.from(e[r]))
    }
    return new t(n)
  }
  Object.defineProperty(t.prototype, "totalFrames", {
    get: function () {
      return this._textures.length
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "textures", {
    get: function () {
      return this._textures
    },
    set: function (e) {
      if (e[0] instanceof An) {
        this._textures = e
        this._durations = null
      } else {
        this._textures = []
        this._durations = []
        for (var t = 0; t < e.length; t++) {
          this._textures.push(e[t].texture)
          this._durations.push(e[t].time)
        }
      }
      this._previousFrame = null
      this.gotoAndStop(0)
      this.updateTexture()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "currentFrame", {
    get: function () {
      var e = Math.floor(this._currentTime) % this._textures.length
      if (e < 0) {
        e += this._textures.length
      }
      return e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "playing", {
    get: function () {
      return this._playing
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "autoUpdate", {
    get: function () {
      return this._autoUpdate
    },
    set: function (e) {
      if (e !== this._autoUpdate) {
        this._autoUpdate = e
        if (!this._autoUpdate && this._isConnectedToTicker) {
          kt.shared.remove(this.update, this)
          this._isConnectedToTicker = false
        } else {
          if (this._autoUpdate && !this._isConnectedToTicker && this._playing) {
            kt.shared.add(this.update, this)
            this._isConnectedToTicker = true
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  return t
}(Li)
var ia = function (e, t) {
  return (ia = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var oa = function (e) {
  function t() {
    var t = this
    var n = {
      m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
      uAlpha: 1
    };
    (t = e.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n", n) || this).alpha = 1
    return t
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    ia(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype._loadMatrix = function (e, t) {
    if (undefined === t) {
      t = false
    }
    var n = e
    if (t) {
      this._multiply(n, this.uniforms.m, e)
      n = this._colorMatrix(n)
    }
    this.uniforms.m = n
  }
  t.prototype._multiply = function (e, t, n) {
    e[0] = t[0] * n[0] + t[1] * n[5] + t[2] * n[10] + t[3] * n[15]
    e[1] = t[0] * n[1] + t[1] * n[6] + t[2] * n[11] + t[3] * n[16]
    e[2] = t[0] * n[2] + t[1] * n[7] + t[2] * n[12] + t[3] * n[17]
    e[3] = t[0] * n[3] + t[1] * n[8] + t[2] * n[13] + t[3] * n[18]
    e[4] = t[0] * n[4] + t[1] * n[9] + t[2] * n[14] + t[3] * n[19] + t[4]
    e[5] = t[5] * n[0] + t[6] * n[5] + t[7] * n[10] + t[8] * n[15]
    e[6] = t[5] * n[1] + t[6] * n[6] + t[7] * n[11] + t[8] * n[16]
    e[7] = t[5] * n[2] + t[6] * n[7] + t[7] * n[12] + t[8] * n[17]
    e[8] = t[5] * n[3] + t[6] * n[8] + t[7] * n[13] + t[8] * n[18]
    e[9] = t[5] * n[4] + t[6] * n[9] + t[7] * n[14] + t[8] * n[19] + t[9]
    e[10] = t[10] * n[0] + t[11] * n[5] + t[12] * n[10] + t[13] * n[15]
    e[11] = t[10] * n[1] + t[11] * n[6] + t[12] * n[11] + t[13] * n[16]
    e[12] = t[10] * n[2] + t[11] * n[7] + t[12] * n[12] + t[13] * n[17]
    e[13] = t[10] * n[3] + t[11] * n[8] + t[12] * n[13] + t[13] * n[18]
    e[14] = t[10] * n[4] + t[11] * n[9] + t[12] * n[14] + t[13] * n[19] + t[14]
    e[15] = t[15] * n[0] + t[16] * n[5] + t[17] * n[10] + t[18] * n[15]
    e[16] = t[15] * n[1] + t[16] * n[6] + t[17] * n[11] + t[18] * n[16]
    e[17] = t[15] * n[2] + t[16] * n[7] + t[17] * n[12] + t[18] * n[17]
    e[18] = t[15] * n[3] + t[16] * n[8] + t[17] * n[13] + t[18] * n[18]
    e[19] = t[15] * n[4] + t[16] * n[9] + t[17] * n[14] + t[18] * n[19] + t[19]
    return e
  }
  t.prototype._colorMatrix = function (e) {
    var t = new Float32Array(e)
    t[4] /= 255
    t[9] /= 255
    t[14] /= 255
    t[19] /= 255
    return t
  }
  t.prototype.brightness = function (e, t) {
    var n = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.greyscale = function (e, t) {
    var n = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.blackAndWhite = function (e) {
    this._loadMatrix([.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.hue = function (e, t) {
    e = (e || 0) / 180 * Math.PI
    var n = Math.cos(e)
    var r = Math.sin(e)
    var i = 1 / 3
    var o = (0, Math.sqrt)(i)
    var a = [n + (1 - n) * i, i * (1 - n) - o * r, i * (1 - n) + o * r, 0, 0, i * (1 - n) + o * r, n + i * (1 - n), i * (1 - n) - o * r, 0, 0, i * (1 - n) - o * r, i * (1 - n) + o * r, n + i * (1 - n), 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(a, t)
  }
  t.prototype.contrast = function (e, t) {
    var n = (e || 0) + 1
    var r = -.5 * (n - 1)
    var i = [n, 0, 0, 0, r, 0, n, 0, 0, r, 0, 0, n, 0, r, 0, 0, 0, 1, 0]
    this._loadMatrix(i, t)
  }
  t.prototype.saturate = function (e, t) {
    if (undefined === e) {
      e = 0
    }
    var n = 2 * e / 3 + 1
    var r = -.5 * (n - 1)
    var i = [n, r, r, 0, 0, r, n, r, 0, 0, r, r, n, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(i, t)
  }
  t.prototype.desaturate = function () {
    this.saturate(-1)
  }
  t.prototype.negative = function (e) {
    this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.sepia = function (e) {
    this._loadMatrix([.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.technicolor = function (e) {
    this._loadMatrix([1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0], e)
  }
  t.prototype.polaroid = function (e) {
    this._loadMatrix([1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.toBGR = function (e) {
    this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.kodachrome = function (e) {
    this._loadMatrix([1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0], e)
  }
  t.prototype.browni = function (e) {
    this._loadMatrix([.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0], e)
  }
  t.prototype.vintage = function (e) {
    this._loadMatrix([.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0], e)
  }
  t.prototype.colorTone = function (e, t, n, r, i) {
    var o = ((n = n || 16770432) >> 16 & 255) / 255
    var a = (n >> 8 & 255) / 255
    var s = (255 & n) / 255
    var c = ((r = r || 3375104) >> 16 & 255) / 255
    var u = (r >> 8 & 255) / 255
    var l = (255 & r) / 255
    var f = [.3, .59, .11, 0, 0, o, a, s, e = e || .2, 0, c, u, l, t = t || .15, 0, o - c, a - u, s - l, 0, 0]
    this._loadMatrix(f, i)
  }
  t.prototype.night = function (e, t) {
    var n = [-2 * (e = e || .1), -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, 2 * e, 0, 0, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.predator = function (e, t) {
    var n = [11.224130630493164 * e, -4.794486999511719 * e, -2.8746118545532227 * e, 0 * e, .40342438220977783 * e, -3.6330697536468506 * e, 9.193157196044922 * e, -2.951810836791992 * e, 0 * e, -1.316135048866272 * e, -3.2184197902679443 * e, -4.2375030517578125 * e, 7.476448059082031 * e, 0 * e, .8044459223747253 * e, 0, 0, 0, 1, 0]
    this._loadMatrix(n, t)
  }
  t.prototype.lsd = function (e) {
    this._loadMatrix([2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0], e)
  }
  t.prototype.reset = function () {
    this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], false)
  }
  Object.defineProperty(t.prototype, "matrix", {
    get: function () {
      return this.uniforms.m
    },
    set: function (e) {
      this.uniforms.m = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "alpha", {
    get: function () {
      return this.uniforms.uAlpha
    },
    set: function (e) {
      this.uniforms.uAlpha = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
oa.prototype.grayscale = oa.prototype.greyscale
var aa = function (e, t) {
  return (aa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var sa = function (e) {
  function t(t, n) {
    var r = this
    var i = new _t()
    t.renderable = false;
    (r = e.call(this, "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n", {
      mapSampler: t._texture,
      filterMatrix: i,
      scale: {
        x: 1,
        y: 1
      },
      rotation: new Float32Array([1, 0, 0, 1])
    }) || this).maskSprite = t
    r.maskMatrix = i
    if (!(null !== n && undefined !== n)) {
      n = 20
    }
    r.scale = new ht(n, n)
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    aa(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.apply = function (e, t, n, r) {
    this.uniforms.filterMatrix = e.calculateSpriteMatrix(this.maskMatrix, this.maskSprite)
    this.uniforms.scale.x = this.scale.x
    this.uniforms.scale.y = this.scale.y
    var /* [auto-meaningful-name] */this$maskSprite$worldTransform = this.maskSprite.worldTransform
    var o = Math.sqrt(this$maskSprite$worldTransform.a * this$maskSprite$worldTransform.a + this$maskSprite$worldTransform.b * this$maskSprite$worldTransform.b)
    var a = Math.sqrt(this$maskSprite$worldTransform.c * this$maskSprite$worldTransform.c + this$maskSprite$worldTransform.d * this$maskSprite$worldTransform.d)
    if (0 !== o && 0 !== a) {
      this.uniforms.rotation[0] = this$maskSprite$worldTransform.a / o
      this.uniforms.rotation[1] = this$maskSprite$worldTransform.b / o
      this.uniforms.rotation[2] = this$maskSprite$worldTransform.c / a
      this.uniforms.rotation[3] = this$maskSprite$worldTransform.d / a
    }
    e.applyFilter(this, t, n, r)
  }
  Object.defineProperty(t.prototype, "map", {
    get: function () {
      return this.uniforms.mapSampler
    },
    set: function (e) {
      this.uniforms.mapSampler = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
var ca = function (e, t) {
  return (ca = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ua = function (e) {
  function t(t, n, r) {
    if (undefined === t) {
      t = 4
    }
    if (undefined === n) {
      n = 3
    }
    if (undefined === r) {
      r = false
    }
    var i = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", r ? "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n" : "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}") || this
    i._kernels = []
    i._blur = 4
    i._quality = 3
    i.uniforms.uOffset = new Float32Array(2)
    i._pixelSize = new ht()
    i.pixelSize = 1
    i._clamp = r
    if (Array.isArray(t)) {
      i.kernels = t
    } else {
      i._blur = t
      i.quality = n
    }
    return i
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    ca(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.apply = function (e, t, n, r) {
    var i
    var o = this._pixelSize.x / t._frame.width
    var a = this._pixelSize.y / t._frame.height
    if (1 === this._quality || 0 === this._blur) {
      i = this._kernels[0] + .5
      this.uniforms.uOffset[0] = i * o
      this.uniforms.uOffset[1] = i * a
      e.applyFilter(this, t, n, r)
    } else {
      for (var s = e.getFilterTexture(), c = t, u = s, l = undefined, f = this._quality - 1, d = 0; d < f; d++) {
        i = this._kernels[d] + .5
        this.uniforms.uOffset[0] = i * o
        this.uniforms.uOffset[1] = i * a
        e.applyFilter(this, c, u, 1)
        l = c
        c = u
        u = l
      }
      i = this._kernels[f] + .5
      this.uniforms.uOffset[0] = i * o
      this.uniforms.uOffset[1] = i * a
      e.applyFilter(this, c, n, r)
      e.returnFilterTexture(s)
    }
  }
  t.prototype._updatePadding = function () {
    this.padding = Math.ceil(this._kernels.reduce(function (e, t) {
      return e + t + .5
    }, 0))
  }
  t.prototype._generateKernels = function () {
    var /* [auto-meaningful-name] */this$_blur = this._blur
    var /* [auto-meaningful-name] */this$_quality = this._quality
    var n = [this$_blur]
    if (this$_blur > 0) {
      for (var r = this$_blur, i = this$_blur / this$_quality, o = 1; o < this$_quality; o++) {
        r -= i
        n.push(r)
      }
    }
    this._kernels = n
    this._updatePadding()
  }
  Object.defineProperty(t.prototype, "kernels", {
    get: function () {
      return this._kernels
    },
    set: function (e) {
      if (Array.isArray(e) && e.length > 0) {
        this._kernels = e
        this._quality = e.length
        this._blur = Math.max.apply(Math, e)
      } else {
        this._kernels = [0]
        this._quality = 1
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "clamp", {
    get: function () {
      return this._clamp
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "pixelSize", {
    get: function () {
      return this._pixelSize
    },
    set: function (e) {
      if ("number" === typeof e) {
        this._pixelSize.x = e
        this._pixelSize.y = e
      } else {
        if (Array.isArray(e)) {
          this._pixelSize.x = e[0]
          this._pixelSize.y = e[1]
        } else {
          if (e instanceof ht) {
            this._pixelSize.x = e.x
            this._pixelSize.y = e.y
          } else {
            this._pixelSize.x = 1
            this._pixelSize.y = 1
          }
        }
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "quality", {
    get: function () {
      return this._quality
    },
    set: function (e) {
      this._quality = Math.max(1, Math.round(e))
      this._generateKernels()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "blur", {
    get: function () {
      return this._blur
    },
    set: function (e) {
      this._blur = e
      this._generateKernels()
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
var la = function (e, t) {
  return (la = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var fa = function (e) {
  function t(n) {
    var r = e.call(this) || this
    r.angle = 45
    r._distance = 5
    r._resolution = fe.FILTER_RESOLUTION
    var i = Object.assign(t.defaults, n)
    var /* [auto-meaningful-name] */i$kernels = i.kernels
    var /* [auto-meaningful-name] */i$blur = i.blur
    var /* [auto-meaningful-name] */i$quality = i.quality
    var /* [auto-meaningful-name] */i$pixelSize = i.pixelSize
    var /* [auto-meaningful-name] */i$resolution = i.resolution
    r._tintFilter = new mr("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}")
    r._tintFilter.uniforms.color = new Float32Array(4)
    r._tintFilter.uniforms.shift = new ht()
    r._tintFilter.resolution = i$resolution
    r._blurFilter = i$kernels ? new ua(i$kernels) : new ua(i$blur, i$quality)
    r.pixelSize = i$pixelSize
    r.resolution = i$resolution
    var /* [auto-meaningful-name] */i$shadowOnly = i.shadowOnly
    var /* [auto-meaningful-name] */i$rotation = i.rotation
    var /* [auto-meaningful-name] */i$distance = i.distance
    var /* [auto-meaningful-name] */i$alpha = i.alpha
    var /* [auto-meaningful-name] */i$color = i.color
    r.shadowOnly = i$shadowOnly
    r.rotation = i$rotation
    r.distance = i$distance
    r.alpha = i$alpha
    r.color = i$color
    r._updatePadding()
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    la(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  t.prototype.apply = function (e, t, n, r) {
    var i = e.getFilterTexture()
    this._tintFilter.apply(e, t, i, 1)
    this._blurFilter.apply(e, i, n, r)
    if (true !== this.shadowOnly) {
      e.applyFilter(this, t, n, 0)
    }
    e.returnFilterTexture(i)
  }
  t.prototype._updatePadding = function () {
    this.padding = this.distance + 2 * this.blur
  }
  t.prototype._updateShift = function () {
    this._tintFilter.uniforms.shift.set(this.distance * Math.cos(this.angle), this.distance * Math.sin(this.angle))
  }
  Object.defineProperty(t.prototype, "resolution", {
    get: function () {
      return this._resolution
    },
    set: function (e) {
      this._resolution = e
      if (this._tintFilter) {
        this._tintFilter.resolution = e
      }
      if (this._blurFilter) {
        this._blurFilter.resolution = e
      }
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "distance", {
    get: function () {
      return this._distance
    },
    set: function (e) {
      this._distance = e
      this._updatePadding()
      this._updateShift()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "rotation", {
    get: function () {
      return this.angle / st
    },
    set: function (e) {
      this.angle = e * st
      this._updateShift()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "alpha", {
    get: function () {
      return this._tintFilter.uniforms.alpha
    },
    set: function (e) {
      this._tintFilter.uniforms.alpha = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "color", {
    get: function () {
      return ke(this._tintFilter.uniforms.color)
    },
    set: function (e) {
      xe(e, this._tintFilter.uniforms.color)
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "kernels", {
    get: function () {
      return this._blurFilter.kernels
    },
    set: function (e) {
      this._blurFilter.kernels = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "blur", {
    get: function () {
      return this._blurFilter.blur
    },
    set: function (e) {
      this._blurFilter.blur = e
      this._updatePadding()
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "quality", {
    get: function () {
      return this._blurFilter.quality
    },
    set: function (e) {
      this._blurFilter.quality = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "pixelSize", {
    get: function () {
      return this._blurFilter.pixelSize
    },
    set: function (e) {
      this._blurFilter.pixelSize = e
    },
    enumerable: false,
    configurable: true
  })
  t.defaults = {
    rotation: 45,
    distance: 5,
    color: 0,
    alpha: .5,
    shadowOnly: false,
    kernels: null,
    blur: 2,
    quality: 3,
    pixelSize: 1,
    resolution: fe.FILTER_RESOLUTION
  }
  return t
}(mr)
var da = function (e, t) {
  return (da = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ha = function (e) {
  function t(t) {
    if (undefined === t) {
      t = 10
    }
    var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n") || this
    n.size = t
    return n
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    da(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      return this.uniforms.size
    },
    set: function (e) {
      if ("number" === typeof e) {
        e = [e, e]
      }
      this.uniforms.size = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
var pa = function (e, t) {
  return (pa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var _a = function (e) {
  function t(n) {
    var r = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n") || this
    Object.assign(r, t.defaults, n)
    return r
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    pa(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "offset", {
    get: function () {
      return this.uniforms.offset
    },
    set: function (e) {
      this.uniforms.offset = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "radius", {
    get: function () {
      return this.uniforms.radius
    },
    set: function (e) {
      this.uniforms.radius = e
    },
    enumerable: false,
    configurable: true
  })
  Object.defineProperty(t.prototype, "angle", {
    get: function () {
      return this.uniforms.angle
    },
    set: function (e) {
      this.uniforms.angle = e
    },
    enumerable: false,
    configurable: true
  })
  t.defaults = {
    radius: 200,
    angle: 4,
    padding: 20,
    offset: new ht()
  }
  return t
}(mr)
var Aa = function (e, t) {
  return (Aa = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, t) {
    e.__proto__ = t
  } || function (e, t) {
    for (var n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
      e[n] = t[n]
    }
  })(e, t)
}
var ga = function (e) {
  function t(t) {
    if (undefined === t) {
      t = 8
    }
    var n = e.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n") || this
    n.size = t
    return n
  }
  (function (e, t) {
    function n() {
      this.constructor = e
    }
    Aa(e, t)
    e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n())
  })(t, e)
  Object.defineProperty(t.prototype, "size", {
    get: function () {
      return this.uniforms.pixelSize
    },
    set: function (e) {
      this.uniforms.pixelSize = e
    },
    enumerable: false,
    configurable: true
  })
  return t
}(mr)
export { Bi }
export { Di }
export { Ri }
export { Fi }
export { Li }
export { Vi }
export { Qi }
export { Zi }
export { Fo }
export { Po }
export { Lo }
export { Uo }
export { Xo }
export { Jo }
export { ta }
export { ra }
export { oa }
export { sa }
export { fa }
export { ha }
export { _a }
export { ga }
