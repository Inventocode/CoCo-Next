/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-8
 */

"use strict"

import * as /* [auto-meaningful-name] */Module_59 from /* 59 */"../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */Module_58 from /* 58 */"../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */Src_shared_widget_custom_load from /* 34 */"../../../../../src/shared/widget/custom/load"
import * as /* [auto-meaningful-name] */Module_678 from /* 678 */"../../../../shared/1571/2636/678"
import * as /* [auto-meaningful-name] */Qrcode from /* 556 */"qrcode"
import /* [auto-meaningful-name] */Qrcode1 from /* 556 */"qrcode"
var pt = {
  "7%": "L",
  "15%": "M",
  "25%": "Q",
  "30%": "H"
}
var mt = function (t) {
  Module_58.a(n, t)
  var e = Module_59.a(n)
  function n(t) {
    var r
    Module_27.a(this, n);
    (r = e.call(this, t)).image = ""
    r.width = 300
    r.dark = undefined
    r.light = undefined
    r.errorCorrectionLevel = undefined
    r.margin = undefined
    r.dark = t.dark
    r.light = t.light
    r.errorCorrectionLevel = t.errorCorrectionLevel
    r.margin = t.margin
    return r
  }
  Module_39.a(n, [
    {
      key: "textToDataUrl",
      value: function (t) {
        var /* [auto-meaningful-name] */this$errorCorrectionLevel
        var n = this
        if (t) {
          Qrcode1.toDataURL(t, {
            width: this.width,
            color: {
              dark: this.dark,
              light: this.light
            },
            margin: this.margin,
            errorCorrectionLevel: (this$errorCorrectionLevel = this.errorCorrectionLevel, pt[this$errorCorrectionLevel] || "M")
          }).then(function (t) {
            n.image = t
            n.emit("onDataUrlSuccess", t)
          }).catch(function (t) {
            n.image = ""
            if ("The amount of data is too big to be stored in a QR Code" === t.message) {
              n.widgetError("tooLongText")
            }
            console.error("QRCode.toDataURL error", t)
          })
        } else {
          this.widgetError("textIsEmpty")
        }
      }
    }, {
      key: "urlToDataUrl",
      value: function (t) {
        this.textToDataUrl(t)
      }
    }
  ])
  return n
}(Src_shared_widget_custom_load.c)
export { mt }
