/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-12
 */

"use strict"

import { Et, Ot } from "./index__part-10"
import { Tt, Ct } from "./index__part-11"
import /* [auto-meaningful-name] */Module_248 from /* 248 */"./248"
import * as /* [auto-meaningful-name] */Src_shared_ui_language from /* 23 */"../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */Module_81 from /* 81 */"./81/index"
import * as /* [auto-meaningful-name] */Module_20 from /* 20 */"../../../../shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */Module_48 from /* 48 */"../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */Module_28 from /* 28 */"../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../../../../shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_911 from /* 911 */"./911"
import /* [auto-meaningful-name] */Module_9111 from /* 911 */"./911"
import * as /* [auto-meaningful-name] */Module_912 from /* 912 */"./912"
import /* [auto-meaningful-name] */Module_9121 from /* 912 */"./912"
import * as /* [auto-meaningful-name] */Module_913 from /* 913 */"./913"
import /* [auto-meaningful-name] */Module_9131 from /* 913 */"./913"
import * as /* [auto-meaningful-name] */Module_617 from /* 617 */"./617"
import /* [auto-meaningful-name] */Module_6171 from /* 617 */"./617"
import * as /* [auto-meaningful-name] */Module_914 from /* 914 */"./914"
import /* [auto-meaningful-name] */Module_9141 from /* 914 */"./914"
import * as /* [auto-meaningful-name] */Module_915 from /* 915 */"./915"
import /* [auto-meaningful-name] */Module_9151 from /* 915 */"./915"
var Wt = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n() {
    var t
    Module_27.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (t = e.call.apply(e, [this].concat(i))).previewPage = undefined
    t.QRCodeReader = Et()
    t.QRCodeScanner = Ot()
    return t
  }
  Module_39.a(n, [
    {
      key: "showCameraPreview",
      value: function () {
        document.body.style.backgroundColor = "rgba(255, 255, 255, 0)"
        var t = document.getElementById("root")
        if (t) {
          t.style.opacity = "0"
        }
        var e = this.getPreviewPage()
        document.body.appendChild(e)
      }
    }, {
      key: "hideCameraPreview",
      value: function () {
        document.body.style.backgroundColor = ""
        var t = document.getElementById("root")
        if (t) {
          t.style.opacity = "1"
        }
        var e = document.getElementById("SCANNER_PREVIEW_CONTAINER_ID")
        if (e) {
          this.hideErrorMessage()
          document.body.removeChild(e)
        }
      }
    }, {
      key: "showErrorMessage",
      value: function () {
        if (this.previewPage) {
          var t = this.previewPage.children[0]
          t.classList.remove(Module_248.scanning)
          t.style.display = "none"
          this.previewPage.children[1].style.display = "none"
          this.previewPage.children[2].style.display = "block"
        }
      }
    }, {
      key: "hideErrorMessage",
      value: function () {
        if (this.previewPage) {
          var t = this.previewPage.children[0]
          t.className = Module_248.scanning
          t.style.display = "block"
          this.previewPage.children[1].style.display = "block"
          this.previewPage.children[2].style.display = "none"
          this.previewPage.children[5].src = Module_6171
        }
      }
    }, {
      key: "getPreviewPage",
      value: function () {
        var t = this
        if (!this.previewPage) {
          var e = function () {
            var e = Module_7.a(RegeneratorRuntime.mark(function e() {
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      e.next = 2
                      return Module_20.getCameraChoosePhoto(function () {
                        var e = Module_7.a(RegeneratorRuntime.mark(function e(n) {
                          return RegeneratorRuntime.wrap(function (e) {
                            for (;;) {
                              switch (e.prev = e.next) {
                                case 0:
                                  t.QRCodeScanner.disableLight()
                                  t.QRCodeScanner.destroy()
                                  t.hideCameraPreview()
                                  e.next = 5
                                  return t.decodeImage(n)
                                case 5:
                                case "end":
                                  return e.stop()
                              }
                            }
                          }, e)
                        }))
                        return function (t) {
                          return e.apply(this, arguments)
                        }
                      }(), "")
                    case 2:
                    case "end":
                      return e.stop()
                  }
                }
              }, e)
            }))
            return function () {
              return e.apply(this, arguments)
            }
          }()
          var n = "\n        <img class=".concat(Module_248.scanning, " src=").concat(Module_9111, " />\n        <p class=").concat(Module_248.text, ">\n          ").concat(Src_shared_ui_language.c(Src_shared_ui_language.b, "ScanQrCode.tip"), "\n        </p>\n        <div class=").concat(Module_248.error, " style=\"display:none;\">\n          <div>\n            <img src=").concat(Module_9131, " />\n            <p>网络不佳，二维码识别失败</p>\n          </div>\n        </div>\n        <div class=\"").concat(Module_248.largeBtn, " ").concat(Module_248.photoBtn, "\">\n          <img src=").concat(Module_9151, " />\n        </div>\n        <div class=\"").concat(Module_248.smallBtn, " ").concat(Module_248.returnBtn, "\">\n          <img src=").concat(Module_9121, " />\n        </div>\n        <div class=\"").concat(Module_248.largeBtn, " ").concat(Module_248.lightBtn, "\">\n          <img src=").concat(Module_6171, " />\n        </div>\n      ")
          var r = document.createElement("div")
          r.id = "SCANNER_PREVIEW_CONTAINER_ID"
          r.className = Module_248.container
          r.innerHTML = n
          this.previewPage = r
          this.previewPage.children[3].onclick = e
          this.previewPage.children[4].onclick = function () {
            t.QRCodeScanner.disableLight()
            t.QRCodeScanner.destroy()
            t.hideCameraPreview()
          }
          this.previewPage.children[5].onclick = function () {
            t.QRCodeScanner.getStatus(function (e) {
              if (e.lightEnabled) {
                t.QRCodeScanner.disableLight(function (e) {
                  if (e) {
                    t.emit("onScanError", Ct(e.code))
                  } else {
                    var n = document.getElementsByClassName(Module_248.lightBtn)[0]
                    if (n) {
                      n.innerHTML = "<img src=".concat(Module_6171, " />")
                    }
                  }
                })
              } else {
                t.QRCodeScanner.enableLight(function (e) {
                  if (e) {
                    t.emit("onScanError", Ct(e.code))
                  } else {
                    var n = document.getElementsByClassName(Module_248.lightBtn)[0]
                    if (n) {
                      n.innerHTML = "<img src=".concat(Module_9141, " />")
                    }
                  }
                })
              }
            })
          }
        }
        return this.previewPage
      }
    }, {
      key: "scan",
      value: function () {
        var t = this
        if (Module_28.d()) {
          this.QRCodeScanner.prepare(function (e, n) {
            if (e) {
              t.showErrorMessage()
              return void t.emit("onScanError", Ct(e.code))
            }
            t.QRCodeScanner.scan(function (e, n) {
              if (e) {
                t.showErrorMessage()
                return void t.emit("onScanError", Ct(e.code))
              }
              t.hideCameraPreview()
              t.emit("onScanSuccess", n)
            })
            t.QRCodeScanner.show()
            t.showCameraPreview()
          })
        } else {
          this.widgetError("PlatformNotSupport")
        }
      }
    }, {
      key: "decodeImage",
      value: function () {
        var t = Module_7.a(RegeneratorRuntime.mark(function t(e) {
          var n
          var /* [auto-meaningful-name] */t$sent
          return RegeneratorRuntime.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  (n = document.createElement("img")).src = e
                  n.crossOrigin = "Anonymous"
                  t.prev = 3
                  t.next = 6
                  return this.QRCodeReader.decodeFromImageElement(n)
                case 6:
                  t$sent = t.sent
                  this.emit("onScanSuccess", t$sent.getText())
                  t.next = 13
                  break
                case 10:
                  t.prev = 10
                  t.t0 = t.catch(3)
                  if (t.t0 instanceof Module_81.NotFoundException) {
                    this.emit("onScanError", Ct(Tt.NOT_FOUND))
                  } else {
                    this.emit("onScanError", Ct(Tt.UNEXPECTED_ERROR))
                  }
                case 13:
                case "end":
                  return t.stop()
              }
            }
          }, t, this, [[3, 10]])
        }))
        return function (e) {
          return t.apply(this, arguments)
        }
      }()
    }, {
      key: "scanImage",
      value: function () {
        var t = Module_7.a(RegeneratorRuntime.mark(function t(e) {
          var n
          var /* [auto-meaningful-name] */Module_48$a$getState$imageFileMap
          var i
          return RegeneratorRuntime.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  n = ""
                  if (Src_shared_tools_index.U(e)) {
                    n = e
                  } else {
                    Module_48$a$getState$imageFileMap = Module_48.a().getState().imageFileMap
                    i = Module_48$a$getState$imageFileMap.get(e)
                    n = (null === i || undefined === i ? undefined : i.cdnUrl) || ""
                  }
                  this.decodeImage(n)
                case 3:
                case "end":
                  return t.stop()
              }
            }
          }, t, this)
        }))
        return function (e) {
          return t.apply(this, arguments)
        }
      }()
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { Wt }
