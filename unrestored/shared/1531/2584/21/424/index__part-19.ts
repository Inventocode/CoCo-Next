/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：424__part-19
 */

"use strict"

import { "424__part-7__hr" as hr } from "./index__part-7"
import { "424__part-9__jo" as jo } from "./index__part-9"
import * as /* [auto-meaningful-name] */$$_$$_48_72 from "../../48/72"
import * as /* [auto-meaningful-name] */$$_$$_55 from "../../55"
import * as /* [auto-meaningful-name] */$$_$$_48_index from "../../48/index"
import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_233_324 from "../../233/324"
function Nu(e, t) {
  $$_$$_14.a.condition(false, {
    type: e,
    messageId: t
  })
}
function Ru(e, t, n) {
  var r
  var o = (null === n || undefined === n ? undefined : n.width) || 700
  var i = (null === n || undefined === n ? undefined : n.height) || 520
  var a = document.createElement("div")
  var s = document.createElement("video")
  var c = document.createElement("div")
  var l = document.createElement("div")
  a.className = "cameraWidgetCapture"
  c.className = "cameraWidgetButtonBox"
  l.className = "cameraButton"
  c.appendChild(l)
  a.appendChild(s)
  a.appendChild(c)
  s.width = o
  s.height = i
  c.onclick = function () {
    var t
    var /* [auto-meaningful-name] */a$parentNode
    var c = document.createElement("canvas")
    c.width = 360
    c.height = i
    if (!(null === (t = c.getContext("2d")) || undefined === t)) {
      t.drawImage(s, (o - 360) / 2, 0, 360, i - 22, 0, 0, 360, i + 22)
    }
    var l = c.toDataURL("image/jpeg")
    if (r.stop) {
      r.stop()
    } else {
      r.getTracks().forEach(function (e) {
        e.stop()
      })
    }
    if (!(null === a || undefined === a || null === (a$parentNode = a.parentNode) || undefined === a$parentNode)) {
      a$parentNode.removeChild(a)
    }
    return e(l)
  }
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
  if (navigator.getUserMedia) {
    navigator.getUserMedia({
      video: true,
      audio: false
    }, function (e) {
      var t
      r = e
      localStorage.setItem("cameraPermission", "true")
      if ("srcObject" in s) {
        s.srcObject = r
      } else {
        s.src = window.URL.createObjectURL(r)
      }
      s.play()
      if (!(null === (t = document.getElementById($$_$$_233_324.a)) || undefined === t)) {
        t.appendChild(a)
      }
    }, t)
  } else {
    t()
  }
}
function ku(e, t, n) {
  var r = document.createElement("input")
  r.style.position = "absolute"
  r.style.top = "0"
  r.style.width = "76px"
  r.style.overflow = "hidden"
  r.style.display = "none"
  r.className = "coco-camera-select"
  r.type = "file"
  r.accept = n
  r.name = "files[]"
  r.onchange = function (n) {
    var /* [auto-meaningful-name] */r$parentNode
    var i
    var a = r.files && r.files[0]
    if (undefined !== window.createObjectURL) {
      i = window.createObjectURL(a)
    } else {
      if (undefined !== window.URL) {
        i = window.URL.createObjectURL(a)
      } else {
        if (undefined !== window.webkitURL) {
          i = window.webkitURL.createObjectURL(a)
        } else {
          t()
        }
      }
    }
    e(i)
    if (!(null === (r$parentNode = r.parentNode) || undefined === r$parentNode)) {
      r$parentNode.removeChild(r)
    }
  }
  document.body.appendChild(r)
  document.body.appendChild(r)
  r.click()
}
function xu(e) {
  $$_$$_48_index.a().dispatch($$_$$_48_72.r("FRONT" === e ? 1 : 0))
}
function Du(e, t) {
  return Mu.apply(this, arguments)
}
function Mu() {
  return (Mu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return new Promise(function (e, n) {
              if ($$_$$_28_index.d()) {
                try {
                  navigator.camera.getPicture(function () {
                    var n = $$_$$_7.a(RegeneratorRuntime.mark(function n(r) {
                      return RegeneratorRuntime.wrap(function (n) {
                        for (;;) {
                          switch (n.prev = n.next) {
                            case 0:
                              n.next = 2
                              return t(r)
                            case 2:
                              e(true)
                            case 3:
                            case "end":
                              return n.stop()
                          }
                        }
                      }, n)
                    }))
                    return function (e) {
                      return n.apply(this, arguments)
                    }
                  }(), function (t) {
                    function n() {}
                    e(true)
                    console.error("getPicture fail:", t)
                    if ("number" === typeof t) {
                      Nu("error", "cameraTakePhotoFail")
                      window.plugins.toast.showShortTop("相机没有权限拍照", n, n)
                    }
                  }, {
                    quality: 50,
                    cameraDirection: $$_$$_48_index.a().getState().mediaMap.cameraDirection,
                    destinationType: 1,
                    saveToPhotoAlbum: true
                  })
                } catch (o) {
                  n()
                  console.error("getPicture error:", o)
                  Nu("error", "cameraNotSupportError")
                }
              } else if ($$_$$_28_index.f()) {
                var r = document.getElementById("appcraft-camera-input")
                if (r) {
                  r.onchange = function (e) {
                    var /* [auto-meaningful-name] */e$target$files
                    var r = null === (e$target$files = e.target.files) || undefined === e$target$files ? undefined : e$target$files[0]
                    if (r) {
                      var o = URL.createObjectURL(r)
                      t(o)
                    }
                  }
                  r.click()
                }
              } else {
                hr("camera").then(function (n) {
                  if (n) {
                    navigator.mediaDevices.enumerateDevices().then(function (n) {
                      if (!n.some(function (e) {
                        return "videoinput" === e.kind
                      })) {
                        return Nu("error", "cameraNotSupportError")
                      }
                      Ru(function () {
                        var n = $$_$$_7.a(RegeneratorRuntime.mark(function n(r) {
                          return RegeneratorRuntime.wrap(function (n) {
                            for (;;) {
                              switch (n.prev = n.next) {
                                case 0:
                                  n.next = 2
                                  return t(r)
                                case 2:
                                  e(true)
                                case 3:
                                case "end":
                                  return n.stop()
                              }
                            }
                          }, n)
                        }))
                        return function (e) {
                          return n.apply(this, arguments)
                        }
                      }(), function () {
                        e(true)
                      })
                    }).catch(function () {
                      Nu("error", "cameraNotSupportError")
                    })
                  } else {
                    Nu("error", "cameraTakePhotoFail")
                  }
                })
              }
            })
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Lu(e, t) {
  return Pu.apply(this, arguments)
}
function Pu() {
  return (Pu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return new Promise(function (e, n) {
              if ($$_$$_28_index.d()) {
                try {
                  navigator.device.capture.captureVideo(function () {
                    var n = $$_$$_7.a(RegeneratorRuntime.mark(function n(r) {
                      var o
                      return RegeneratorRuntime.wrap(function (n) {
                        for (;;) {
                          switch (n.prev = n.next) {
                            case 0:
                              n.next = 2
                              return t(null === (o = r[0]) || undefined === o ? undefined : o.fullPath)
                            case 2:
                              e(true)
                            case 3:
                            case "end":
                              return n.stop()
                          }
                        }
                      }, n)
                    }))
                    return function (e) {
                      return n.apply(this, arguments)
                    }
                  }(), function (t) {
                    e(true)
                    Nu("error", "cameraTakeVideoFail")
                  }, {
                    limit: 1
                  })
                } catch (r) {
                  n()
                  Nu("error", "cameraNotSupportError")
                }
              } else {
                ku(function (n) {
                  e(true)
                  t(n)
                }, function () {
                  n()
                }, "video/*")
                $$_$$_55.b.log("videoNotSupportTips")
              }
            })
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Bu(e, t) {
  return Fu.apply(this, arguments)
}
function Fu() {
  return (Fu = $$_$$_7.a(RegeneratorRuntime.mark(function e(t, n) {
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return new Promise(function (e, n) {
              if ($$_$$_28_index.d()) {
                try {
                  navigator.camera.getPicture(function () {
                    var n = $$_$$_7.a(RegeneratorRuntime.mark(function n(r) {
                      return RegeneratorRuntime.wrap(function (n) {
                        for (;;) {
                          switch (n.prev = n.next) {
                            case 0:
                              n.next = 2
                              return t(r)
                            case 2:
                              e(true)
                            case 3:
                            case "end":
                              return n.stop()
                          }
                        }
                      }, n)
                    }))
                    return function (e) {
                      return n.apply(this, arguments)
                    }
                  }(), function (t) {
                    e(true)
                    Nu("error", "cameraPhotoFailChoose")
                  }, {
                    sourceType: 0,
                    destinationType: 1,
                    mediaType: 0
                  })
                } catch (r) {
                  n()
                  Nu("warning", "cameraPhotoFailChoose")
                }
              } else {
                ku(function () {
                  var n = $$_$$_7.a(RegeneratorRuntime.mark(function n(r) {
                    return RegeneratorRuntime.wrap(function (n) {
                      for (;;) {
                        switch (n.prev = n.next) {
                          case 0:
                            n.next = 2
                            return t(r)
                          case 2:
                            e(true)
                          case 3:
                          case "end":
                            return n.stop()
                        }
                      }
                    }, n)
                  }))
                  return function (e) {
                    return n.apply(this, arguments)
                  }
                }(), function () {
                  n()
                }, "image/*")
              }
            })
          case 2:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var Gu = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
var Uu = /^[1-9]\d{3}[-/](0[1-9]|1[0-2])[-/](0[1-9]|[1-2][0-9]|3[0-1])$/
var Wu = /^[1-9]\d{3}[-/](0[1-9]|1[0-2])[-/](0[1-9]|[1-2][0-9]|3[0-1])\s(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/
function Hu(e) {
  var t = e ? new Date(e) : new Date()
  var n = t.getFullYear()
  var r = t.getMonth() + 1
  var o = t.getDate()
  var i = t.getHours()
  var a = t.getMinutes()
  var s = t.getSeconds()
  var c = "".concat(n, "-").concat(r < 10 ? "0" + r : r, "-").concat(o < 10 ? "0" + o : o)
  var l = "".concat(i < 10 ? "0" + i : i, ":").concat(a < 10 ? "0" + a : a, ":").concat(s < 10 ? "0" + s : s)
  return {
    dateTime: "".concat(c, " ").concat(l),
    date: c,
    time: l,
    y: n,
    m: r,
    d: o,
    h: i,
    min: a,
    s: s
  }
}
function Vu(e, t) {
  if ((Wu.test(e) || Uu.test(e) || Gu.test(e)) && (Wu.test(t) || Uu.test(t) || Gu.test(t))) {
    if (Wu.test(e) && Wu.test(t) || Uu.test(e) && Uu.test(t) || Gu.test(e) && Gu.test(t)) {
      return e === t
    }
    if (Wu.test(e)) {
      var n = Hu(e.replace(/-/g, "/"))
      return Uu.test(t) ? n.date === t : !!Gu.test(t) && n.time === t
    }
    if (Wu.test(t)) {
      var r = Hu(t.replace(/-/g, "/"))
      return Uu.test(e) ? r.date === e : !!Gu.test(e) && r.time === e
    }
  }
  return ""
}
function zu(e, t, n) {
  if ((Wu.test(e) || Uu.test(e) || Gu.test(e)) && (Wu.test(t) || Uu.test(t) || Gu.test(t))) {
    var r = 0
    var o = 0
    var i = Hu()
    if (Wu.test(e)) {
      r = new Date(e.replace(/-/g, "/")).getTime()
    } else {
      if (Gu.test(e)) {
        r = new Date(i.date.replace(/-/g, "/") + " " + e).getTime()
      } else {
        if (Uu.test(e)) {
          r = new Date(e.replace(/-/g, "/") + " 00:00:00").getTime()
        }
      }
    }
    if (Wu.test(t)) {
      o = new Date(t.replace(/-/g, "/")).getTime()
    } else {
      if (Gu.test(t)) {
        o = new Date(i.date.replace(/-/g, "/") + " " + t).getTime()
      } else {
        if (Uu.test(t)) {
          o = new Date(t.replace(/-/g, "/") + " 00:00:00").getTime()
        }
      }
    }
    var a = r - o
    switch (n) {
      case "year":
        return Math.round(a / 1e3 / 60 / 60 / 24 / 30 / 12 * 100) / 100
      case "month":
        return Math.round(a / 1e3 / 60 / 60 / 24 / 30 * 100) / 100
      case "days":
        return Math.round(a / 1e3 / 60 / 60 / 24 * 100) / 100
      case "hour":
        return Math.round(a / 1e3 / 60 / 60 * 100) / 100
      case "minute":
        return Math.round(a / 1e3 / 60 * 100) / 100
      case "second":
        return a / 1e3
      default:
        return ""
    }
  }
}
function Yu(e) {
  var t
  if (!(null === (t = document.getElementById("date-picker-".concat(e))) || undefined === t)) {
    t.click()
  }
}
function Ku(e) {
  var t
  if (!(null === (t = document.getElementById("time-picker-".concat(e))) || undefined === t)) {
    t.click()
  }
}
function qu(e, t) {
  var n = jo(e, "timeStamp")
  if (!n) {
    return 0
  }
  var r = new Date(n)
  switch (t) {
    case "year":
      return r.getFullYear()
    case "month":
      return r.getMonth() + 1
    case "date":
      return r.getDate()
    default:
      return 0
  }
}
function Xu(e) {
  var t = jo(e, "timeStamp")
  return t ? Hu(t).date : ""
}
function Qu(e, t) {
  var n = jo(e, "timeStamp")
  if (!n) {
    return 0
  }
  var r = new Date(n)
  switch (t) {
    case "hour":
      return r.getHours()
    case "minute":
      return r.getMinutes()
    case "second":
      return r.getSeconds()
    default:
      return 0
  }
}
function Zu(e) {
  var t = jo(e, "timeStamp")
  return t ? Hu(t).time : ""
}
export { xu as "424__part-19__xu" }
export { Du as "424__part-19__Du" }
export { Lu as "424__part-19__Lu" }
export { Bu as "424__part-19__Bu" }
export { Vu as "424__part-19__Vu" }
export { zu as "424__part-19__zu" }
export { Yu as "424__part-19__Yu" }
export { Ku as "424__part-19__Ku" }
export { qu as "424__part-19__qu" }
export { Xu as "424__part-19__Xu" }
export { Qu as "424__part-19__Qu" }
export { Zu as "424__part-19__Zu" }
