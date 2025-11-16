/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：550
 */

"use strict"

export { c as a }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */_RegeneratorRuntime from "regenerator-runtime"
import * as i from "../7"
import * as /* [auto-meaningful-name] */Html2canvas from "html2canvas"
import /* [auto-meaningful-name] */_Html2canvas from "html2canvas"
function c(e, t) {
  return l.apply(this, arguments)
}
function l() {
  return (l = i.a(_RegeneratorRuntime.mark(function e(t, n) {
    var /* [auto-meaningful-name] */e$sent
    return _RegeneratorRuntime.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            n = n || window.devicePixelRatio
            e.next = 3
            return new Promise(function (e) {
              return setTimeout(e, 0)
            })
          case 3:
            e.next = 5
            return _Html2canvas(t, {
              scale: n,
              useCORS: true,
              logging: false,
              ignoreElements: function (e) {
                return "iframe" === (null === e || undefined === e ? undefined : e.tagName.toLowerCase())
              },
              onclone: function (e) {
                try {
                  var t = e.getElementById("COCO_APP_ZONE")
                  if (t) {
                    t.style.transform = ""
                  }
                } catch (n) {
                  console.error("htmlToImage reset transform error", n)
                }
              }
            })
          case 5:
            e$sent = e.sent
            return e.abrupt("return", e$sent.toDataURL())
          case 7:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
export default c
