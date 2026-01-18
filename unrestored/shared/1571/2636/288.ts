/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：288
 */

"use strict"

export { s as c }
export { u as b }
export { p as a }
import * as /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import /* [auto-meaningful-name] */RegeneratorRuntime1 from "regenerator-runtime"
import * as i from "./7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_src_shared_widget_custom_shop from "../../../../src/shared/widget/custom/shop"
function s(e) {
  return c.apply(this, arguments)
}
function c() {
  return (c = i.a(RegeneratorRuntime1.mark(function e(t) {
    var /* [auto-meaningful-name] */t$unsafeExtensionWidgetList
    var /* [auto-meaningful-name] */t$extensionWidgetList
    var i
    var s
    var c
    var l
    var u
    var /* [auto-meaningful-name] */e$sent
    var p
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (i = JSON.stringify(t), s = true, !i.includes("UNSAFE_EXTENSION_") && !(null === t || undefined === t || null === (t$unsafeExtensionWidgetList = t.unsafeExtensionWidgetList) || undefined === t$unsafeExtensionWidgetList ? undefined : t$unsafeExtensionWidgetList.length)) {
              e.next = 7
              break
            }
            console.info("当前作品包含自定义控件")
            s = false
            e.next = 28
            break
          case 7:
            if (!((null === t || undefined === t || null === (t$extensionWidgetList = t.extensionWidgetList) || undefined === t$extensionWidgetList ? undefined : t$extensionWidgetList.length) > 0)) {
              e.next = 28
              break
            }
            c = []
            l = 1
            u = 100
            e.next = 13
            return $$_$$_$$_$$_src_shared_widget_custom_shop.e(l, u)
          case 13:
            if (e$sent = e.sent, c = c.concat(e$sent.items.map(function (e) {
              return e.resource_url
            })), !((p = Math.ceil(e$sent.total / u)) > 1)) {
              e.next = 26
              break
            }
            l += 1
          case 18:
            if (!(l <= p)) {
              e.next = 26
              break
            }
            e.next = 21
            return $$_$$_$$_$$_src_shared_widget_custom_shop.e(l, u)
          case 21:
            e$sent1 = e.sent
            c = c.concat(e$sent1.items.map(function (e) {
              return e.resource_url
            }))
          case 23:
            l++
            e.next = 18
            break
          case 26:
            if (t.extensionWidgetList.filter(function (e) {
              return !c.includes(e.cdnUrl)
            }).length > 0) {
              console.info("当前作品包含自定义控件")
              s = false
            }
          case 28:
            if (!s) {
              document.body.classList.add("intercepting")
              t.widgetMap = {}
              t.extensionWidgetList = []
              t.unsafeExtensionWidgetList = []
              t.blockCode = ""
            }
            return e.abrupt("return", t)
          case 30:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
var l = []
function u() {
  return d.apply(this, arguments)
}
function d() {
  return (d = i.a(RegeneratorRuntime1.mark(function e() {
    var /* [auto-meaningful-name] */e$sent
    var /* [auto-meaningful-name] */e$sent1
    return RegeneratorRuntime1.wrap(function (e) {
      for (;;) {
        switch (e.prev = e.next) {
          case 0:
            if (!(l.length > 0)) {
              e.next = 2
              break
            }
            return e.abrupt("return", l)
          case 2:
            e.next = 4
            return fetch("https://static.bcmcdn.com/coco/whitelist.json")
          case 4:
            e$sent = e.sent
            e.next = 7
            return e$sent.json()
          case 7:
            e$sent1 = e.sent
            l = e$sent1
            return e.abrupt("return", e$sent1)
          case 10:
          case "end":
            return e.stop()
        }
      }
    }, e)
  }))).apply(this, arguments)
}
function p(e) {
  var t = document.createElement("iframe")
  t.src = "".concat(window.location.origin, "/editor?playerBcmUrl=").concat(e)
  t.style.display = "none"
  t.id = "editor-iframe"
  document.body.appendChild(t)
}
export default p
