/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：511__part-12
 */

"use strict"

import { "511__part-10__Et" as Et, "511__part-10__Ot" as Ot } from "./index__part-10"
import { "511__part-11__Tt" as Tt, "511__part-11__Ct" as Ct } from "./index__part-11"
import /* [auto-meaningful-name] */$_249 from "./249"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_ui_language from "../../../../../src/shared/ui/language"
import * as /* [auto-meaningful-name] */$_81_index from "./81/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_21_index from "../../../../shared/1531/2584/21/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index from "../../../../shared/1531/2584/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_28_index from "../../../../shared/1531/2584/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_58_index from "../../../../shared/1531/2584/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_57_index from "../../../../shared/1531/2584/57/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_40 from "../../../../shared/1531/2584/40"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_27 from "../../../../shared/1531/2584/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_15 from "../../../../shared/1531/2584/15"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_7 from "../../../../shared/1531/2584/7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_898 from "./898"
import /* [auto-meaningful-name] */_$_ from "./898"
import * as /* [auto-meaningful-name] */$_899 from "./899"
import /* [auto-meaningful-name] */_$_2 from "./899"
import * as /* [auto-meaningful-name] */$_900 from "./900"
import /* [auto-meaningful-name] */_$_3 from "./900"
import * as /* [auto-meaningful-name] */$_613 from "./613"
import /* [auto-meaningful-name] */_$_4 from "./613"
import * as /* [auto-meaningful-name] */$_901 from "./901"
import /* [auto-meaningful-name] */_$_5 from "./901"
import * as /* [auto-meaningful-name] */$_902 from "./902"
import /* [auto-meaningful-name] */_$_6 from "./902"
var Wt = function (t) {
  $$_$$_$$_$$_shared_1531_2584_57_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1531_2584_58_index.a(n)
  function n() {
    var t
    $$_$$_$$_$$_shared_1531_2584_27.a(this, n)
    for (var /* [auto-meaningful-name] */arguments$length = arguments.length, i = new Array(arguments$length), o = 0; o < arguments$length; o++) {
      i[o] = arguments[o]
    }
    (t = e.call.apply(e, [this].concat(i))).previewPage = undefined
    t.QRCodeReader = Et()
    t.QRCodeScanner = Ot()
    return t
  }
  $$_$$_$$_$$_shared_1531_2584_40.a(n, [{
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
        t.classList.remove($_249.scanning)
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
        t.className = $_249.scanning
        t.style.display = "block"
        this.previewPage.children[1].style.display = "block"
        this.previewPage.children[2].style.display = "none"
        this.previewPage.children[5].src = _$_4
      }
    }
  }, {
    key: "getPreviewPage",
    value: function () {
      var t = this
      if (!this.previewPage) {
        var e = function () {
          var e = $$_$$_$$_$$_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e() {
            return RegeneratorRuntime.wrap(function (e) {
              for (;;) {
                switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return $$_$$_$$_$$_shared_1531_2584_21_index.getCameraChoosePhoto(function () {
                      var e = $$_$$_$$_$$_shared_1531_2584_7.a(RegeneratorRuntime.mark(function e(n) {
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
        var n = "\n        <img class=".concat($_249.scanning, " src=").concat(_$_, " />\n        <p class=").concat($_249.text, ">\n          ").concat($$_$$_$$_$$_$$_src_shared_ui_language.c($$_$$_$$_$$_$$_src_shared_ui_language.b, "ScanQrCode.tip"), "\n        </p>\n        <div class=").concat($_249.error, " style=\"display:none;\">\n          <div>\n            <img src=").concat(_$_3, " />\n            <p>网络不佳，二维码识别失败</p>\n          </div>\n        </div>\n        <div class=\"").concat($_249.largeBtn, " ").concat($_249.photoBtn, "\">\n          <img src=").concat(_$_6, " />\n        </div>\n        <div class=\"").concat($_249.smallBtn, " ").concat($_249.returnBtn, "\">\n          <img src=").concat(_$_2, " />\n        </div>\n        <div class=\"").concat($_249.largeBtn, " ").concat($_249.lightBtn, "\">\n          <img src=").concat(_$_4, " />\n        </div>\n      ")
        var r = document.createElement("div")
        r.id = "SCANNER_PREVIEW_CONTAINER_ID"
        r.className = $_249.container
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
                  var n = document.getElementsByClassName($_249.lightBtn)[0]
                  if (n) {
                    n.innerHTML = "<img src=".concat(_$_4, " />")
                  }
                }
              })
            } else {
              t.QRCodeScanner.enableLight(function (e) {
                if (e) {
                  t.emit("onScanError", Ct(e.code))
                } else {
                  var n = document.getElementsByClassName($_249.lightBtn)[0]
                  if (n) {
                    n.innerHTML = "<img src=".concat(_$_5, " />")
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
      if ($$_$$_$$_$$_shared_1531_2584_28_index.d()) {
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
      var t = $$_$$_$$_$$_shared_1531_2584_7.a(RegeneratorRuntime.mark(function t(e) {
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
      var t = $$_$$_$$_$$_shared_1531_2584_7.a(RegeneratorRuntime.mark(function t(e) {
        var n
        var /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1531_2584_48_index$a$getState$imageFileMap
        var i
        return RegeneratorRuntime.wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                n = ""
                if ($$_$$_$$_$$_shared_1531_2584_15.U(e)) {
                  n = e
                } else {
                  $$_$$_$$_$$_shared_1531_2584_48_index$a$getState$imageFileMap = $$_$$_$$_$$_shared_1531_2584_48_index.a().getState().imageFileMap
                  i = $$_$$_$$_$$_shared_1531_2584_48_index$a$getState$imageFileMap.get(e)
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
  }])
  return n
}($$_$$_$$_$$_$$_src_shared_widget_custom_load.c)
export { Wt as "511__part-12__Wt" }
