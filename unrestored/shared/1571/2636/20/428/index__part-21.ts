/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：428__part-21
 */

"use strict"

import * as /* [auto-meaningful-name] */$$_$$_14 from "../../14"
import * as /* [auto-meaningful-name] */$$_$$_7 from "../../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_28_index from "../../28/index"
import * as /* [auto-meaningful-name] */$$_$$_34_347_346 from "../../34/347/346"
var Ad = {
  getBrightness: $$_$$_34_347_346.getBrightness,
  setBrightness: function (e) {
    if ("number" === typeof e) {
      if (e > 100) {
        $$_$$_14.a.condition(false, {
          type: "error",
          messageId: "brightnessLessThan"
        })
      } else if (e < 0) {
        $$_$$_14.a.condition(false, {
          type: "error",
          messageId: "brightnessGreaterThan"
        })
      } else {
        if (!$$_$$_28_index.d()) {
          var t = e / 100
          var n = document.getElementById("cocoScreenMask")
          if (n) {
            var r = .6 * (1 - t)
            n.style.opacity = String(r)
          }
        }
        $$_$$_34_347_346.setBrightness(e)
      }
    } else {
      $$_$$_14.a.condition(false, {
        type: "error",
        messageId: "brightnessTypeError"
      })
    }
  },
  setKeepScreenOn: function (e) {
    if ($$_$$_28_index.d()) {
      $$_$$_34_347_346.setKeepScreenOn(e)
    } else {
      $$_$$_14.a.condition(false, {
        type: "warning",
        messageId: "brightnessKeepScreenOnNotSupported"
      })
    }
  }
}
function Id() {
  return jd.apply(this, arguments)
}
function jd() {
  return (jd = $$_$$_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var n
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (console.log("getBatteryInfo"), !$$_$$_28_index.d()) {
              e.next = 5
              break
            }
            return e.abrupt("return", new Promise(function (e) {
              window.addEventListener("batterystatus", function t(n) {
                var r = {
                  charging: n.isPlugged,
                  level: n.level
                }
                e(r)
                window.removeEventListener("batterystatus", t, false)
              }, false)
            }))
          case 5:
            if (!navigator.getBattery) {
              e.next = 13
              break
            }
            e.next = 8
            return navigator.getBattery()
          case 8:
            e$sent = e.sent
            n = {
              level: 100 * e$sent.level,
              charging: e$sent.charging
            }
            return e.abrupt("return", Promise.resolve(n))
          case 13:
            console.error("无法获取电量值，返回 -1")
            return e.abrupt("return", Promise.resolve({
              level: -1,
              charging: false
            }))
          case 15:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function Nd() {
  return Rd.apply(this, arguments)
}
function Rd() {
  return (Rd = $$_$$_7.a(RegeneratorRuntime.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent$level
    return RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            e.next = 2
            return Id()
          case 2:
            e$sent = e.sent
            e$sent$level = e$sent.level
            return e.abrupt("return", e$sent$level)
          case 5:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var xd = {
  getBatteryLevel: Nd
}
export { Ad }
export { Nd }
export { xd }
