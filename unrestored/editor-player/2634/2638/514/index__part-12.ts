/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-12
 */

"use strict"

import { wt, Et } from "./index__part-10"
import { Tt, kt } from "./index__part-11"
import /* [auto-meaningful-name] */$_248 from "./248"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$_81_index from "./81/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_20_index from "../../../../shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_index from "../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_28_index from "../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_tools_index from "../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_7 from "../../../../shared/1571/2636/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_911 from "./911"
import /* [auto-meaningful-name] */$_9111 from "./911"
import * as /* [auto-meaningful-name] */$_912 from "./912"
import /* [auto-meaningful-name] */$_9121 from "./912"
import * as /* [auto-meaningful-name] */$_913 from "./913"
import /* [auto-meaningful-name] */$_9131 from "./913"
import * as /* [auto-meaningful-name] */$_617 from "./617"
import /* [auto-meaningful-name] */$_6171 from "./617"
import * as /* [auto-meaningful-name] */$_914 from "./914"
import /* [auto-meaningful-name] */$_9141 from "./914"
import * as /* [auto-meaningful-name] */$_915 from "./915"
import /* [auto-meaningful-name] */$_9151 from "./915"
var Ht = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n() {
    var t
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (t = e.call.apply(e, [this].concat(i))).previewPage = undefined
    t.QRCodeReader = wt()
    t.QRCodeScanner = Et()
    return t
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
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
          t.classList.remove($_248.scanning)
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
          t.className = $_248.scanning
          t.style.display = "block"
          this.previewPage.children[1].style.display = "block"
          this.previewPage.children[2].style.display = "none"
          this.previewPage.children[5].src = $_6171
        }
      }
    }, {
      key: "getPreviewPage",
      value: function () {
        var t = this
        if (!this.previewPage) {
          var e = function () {
            var e = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e() {
              return RegeneratorRuntime.wrap(function (e) {
                for (;;) {
                  switch (e.prev = e.next) {
                    case 0:
                      e.next = 2
                      return $$_$$_$$_$$_shared_1571_2636_20_index.getCameraChoosePhoto(function () {
                        var e = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function e(n) {
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
          var n = "\n        <img class=".concat($_248.scanning, " src=").concat($_9111, " />\n        <p class=").concat($_248.text, ">\n          ").concat($$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.tip"), "\n        </p>\n        <div class=").concat($_248.error, " style=\"display:none;\">\n          <div>\n            <img src=").concat($_9131, " />\n            <p>网络不佳，二维码识别失败</p>\n          </div>\n        </div>\n        <div class=\"").concat($_248.largeBtn, " ").concat($_248.photoBtn, "\">\n          <img src=").concat($_9151, " />\n        </div>\n        <div class=\"").concat($_248.smallBtn, " ").concat($_248.returnBtn, "\">\n          <img src=").concat($_9121, " />\n        </div>\n        <div class=\"").concat($_248.largeBtn, " ").concat($_248.lightBtn, "\">\n          <img src=").concat($_6171, " />\n        </div>\n      ")
          var r = document.createElement("div")
          r.id = "SCANNER_PREVIEW_CONTAINER_ID"
          r.className = $_248.container
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
                    t.emit("onScanError", kt(e.code))
                  } else {
                    var n = document.getElementsByClassName($_248.lightBtn)[0]
                    if (n) {
                      n.innerHTML = "<img src=".concat($_6171, " />")
                    }
                  }
                })
              } else {
                t.QRCodeScanner.enableLight(function (e) {
                  if (e) {
                    t.emit("onScanError", kt(e.code))
                  } else {
                    var n = document.getElementsByClassName($_248.lightBtn)[0]
                    if (n) {
                      n.innerHTML = "<img src=".concat($_9141, " />")
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
        if ($$_$$_$$_$$_shared_1571_2636_28_index.d()) {
          this.QRCodeScanner.prepare(function (e, n) {
            if (e) {
              t.showErrorMessage()
              return void t.emit("onScanError", kt(e.code))
            }
            t.QRCodeScanner.scan(function (e, n) {
              if (e) {
                t.showErrorMessage()
                return void t.emit("onScanError", kt(e.code))
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
        var t = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e) {
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
                  if (t.t0 instanceof $_81_index.NotFoundException) {
                    this.emit("onScanError", kt(Tt.NOT_FOUND))
                  } else {
                    this.emit("onScanError", kt(Tt.UNEXPECTED_ERROR))
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
        var t = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e) {
          var n
          var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_index$a$getState$imageFileMap
          var i
          return RegeneratorRuntime.wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  n = ""
                  if ($$_$$_$$_$$_$$_src_shared_tools_index.U(e)) {
                    n = e
                  } else {
                    $$_$$_$$_$$_shared_1571_2636_48_index$a$getState$imageFileMap = $$_$$_$$_$$_shared_1571_2636_48_index.a().getState().imageFileMap
                    i = $$_$$_$$_$$_shared_1571_2636_48_index$a$getState$imageFileMap.get(e)
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
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { Ht }
