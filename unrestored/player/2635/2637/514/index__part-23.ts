/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：514__part-23
 */

"use strict"

import { D } from "./index__part-2"
import { P } from "./index__part-3"
import { G } from "./index__part-4"
import { lt } from "./index__part-7"
import { mt } from "./index__part-8"
import { vt } from "./index__part-9"
import { Wt } from "./index__part-12"
import { Vt } from "./index__part-13"
import { zt } from "./index__part-14"
import { qt } from "./index__part-15"
import { Jt } from "./index__part-16"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_externalModule from "../../../../../src/shared/widget/custom/external-module"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_681 from "../../../../shared/1571/2636/681"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_679 from "../../../../shared/1571/2636/679"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_682 from "../../../../shared/1571/2636/682"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_680 from "../../../../shared/1571/2636/680"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_688 from "../../../../shared/1571/2636/688"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_687 from "../../../../shared/1571/2636/687"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_678 from "../../../../shared/1571/2636/678"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_20_index from "../../../../shared/1571/2636/20/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_686 from "../../../../shared/1571/2636/686"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_685_index from "../../../../shared/1571/2636/685/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_684_index from "../../../../shared/1571/2636/684/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_37_219_index from "../../../../shared/1571/2636/37/219/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_48_index from "../../../../shared/1571/2636/48/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_28_index from "../../../../shared/1571/2636/28/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_59_index from "../../../../shared/1571/2636/59/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_58_index from "../../../../shared/1571/2636/58/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_39 from "../../../../shared/1571/2636/39"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_27 from "../../../../shared/1571/2636/27"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_683 from "../../../../shared/1571/2636/683"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_15 from "../../../../../src/shared/tools"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_storage from "../../../../../src/shared/widget/custom/storage"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_type from "../../../../../src/shared/widget/custom/type"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_$$_src_shared_widget_custom_load from "../../../../../src/shared/widget/custom/load"
import /* [auto-meaningful-name] */Axios from "axios"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_37_1412_index from "../../../../shared/1571/2636/37/1412/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_7 from "../../../../shared/1571/2636/7"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_6 from "../../../../shared/1571/2636/6"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_295 from "../../../../shared/1571/2636/295"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_25_index from "../../../../shared/1571/2636/25/index"
import * as /* [auto-meaningful-name] */$$_$$_$$_$$_shared_1571_2636_37_219_389 from "../../../../shared/1571/2636/37/219/389"
var Ne = {
  x: 0,
  y: 0,
  z: 0
}
$$_$$_$$_$$_shared_1571_2636_37_219_index.a.instance.addEventListener("accelerometerUpdate", function (t) {
  Ne = t
})
var xe = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n);
    (r = e.call(this)).options = t
    r.emitTimer = undefined
    r.emitReading = function () {
      r.emit("reading")
    }
    return r
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
    {
      key: "x",
      get: function () {
        return Ne.x
      }
    }, {
      key: "y",
      get: function () {
        return Ne.y
      }
    }, {
      key: "z",
      get: function () {
        return Ne.z
      }
    }, {
      key: "start",
      value: function () {
        var /* [auto-meaningful-name] */this$options
        if (this.emitTimer) {
          throw new Error("Already started")
        }
        this.emitTimer = setInterval(this.emitReading, (null === (this$options = this.options) || undefined === this$options ? undefined : this$options.frequency) || 60)
      }
    }, {
      key: "stop",
      value: function () {
        clearInterval(this.emitTimer)
        this.emitTimer = null
      }
    }
  ])
  return n
}($$_$$_$$_$$_shared_1571_2636_37_219_389.a)
var De = {
  x: 0,
  y: -50,
  z: 0
}
$$_$$_$$_$$_shared_1571_2636_37_219_index.a.instance.addEventListener("magnetometerUpdate", function (t) {
  De = t
})
var Le = function (t) {
  $$_$$_$$_$$_shared_1571_2636_58_index.a(n, t)
  var e = $$_$$_$$_$$_shared_1571_2636_59_index.a(n)
  function n(t) {
    var r
    $$_$$_$$_$$_shared_1571_2636_27.a(this, n);
    (r = e.call(this)).options = t
    r.emitTimer = undefined
    r.emitReading = function () {
      r.emit("reading")
    }
    return r
  }
  $$_$$_$$_$$_shared_1571_2636_39.a(n, [
    {
      key: "x",
      get: function () {
        return De.x
      }
    }, {
      key: "y",
      get: function () {
        return De.y
      }
    }, {
      key: "z",
      get: function () {
        return De.z
      }
    }, {
      key: "start",
      value: function () {
        var /* [auto-meaningful-name] */this$options
        if (this.emitTimer) {
          throw new Error("Already started")
        }
        this.emitTimer = setInterval(this.emitReading, (null === (this$options = this.options) || undefined === this$options ? undefined : this$options.frequency) || 60)
      }
    }, {
      key: "stop",
      value: function () {
        clearInterval(this.emitTimer)
        this.emitTimer = null
      }
    }
  ])
  return n
}($$_$$_$$_$$_shared_1571_2636_37_219_389.a)
function Be() {
  window.Accelerometer = xe
  window.Magnetometer = Le
  $$_$$_$$_$$_shared_1571_2636_37_219_index.a.instance.emitToParent("ready")
  $$_$$_$$_$$_shared_1571_2636_37_219_index.a.instance.addEventListener("shake", function () {
    $$_$$_$$_$$_shared_1571_2636_20_index.emitDeviceShake()
  })
}
var Pe = {
  PHONE_DIALER_WIDGET: D,
  CONTACT_PICKER_WIDGET: P,
  SMS_SERVICE_WIDGET: G,
  DIALOG_WIDGET: lt,
  QRCODE_WIDGET: mt,
  PEDOMETER_WIDGET: vt,
  QR_SCANNER_WIDGET: Wt,
  IMAGE_WIDGET: Vt,
  CANVAS_WIDGET: zt,
  NEW_BUTTON_WIDGET: qt,
  INPUT_WIDGET: Jt
}
function Ue() {
  var /* [auto-meaningful-name] */__device_id = "__device_id"
  var e = localStorage.getItem(__device_id)
  if (!e) {
    e = $$_$$_$$_$$_shared_1571_2636_37_1412_index.a()
    localStorage.setItem(__device_id, e)
  }
  return e
}
function Fe(t) {
  return We.apply(this, arguments)
}
function We() {
  return (We = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e) {
    var /* [auto-meaningful-name] */t$sent
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            t.next = 2
            return Promise.all(e.map(function () {
              var t = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e) {
                var /* [auto-meaningful-name] */t$sent1
                return RegeneratorRuntime.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2
                        return Axios.get("".concat(e.cdnUrl, "?t=").concat(Math.random()))
                      case 2:
                        t$sent1 = t.sent
                        return t.abrupt("return", $$_$$_$$_$$_shared_1571_2636_6.a($$_$$_$$_$$_shared_1571_2636_6.a({}, e), {}, {
                          code: t$sent1.data
                        }))
                      case 4:
                      case "end":
                        return t.stop()
                    }
                  }
                }, t)
              }))
              return function (e) {
                return t.apply(this, arguments)
              }
            }()))
          case 2:
            t$sent = t.sent
            return t.abrupt("return", t$sent)
          case 4:
          case "end":
            return t.stop()
        }
      }
    }, t)
  }))).apply(this, arguments)
}
function He(t, e) {
  return Ve.apply(this, arguments)
}
function Ve() {
  return (Ve = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e, n) {
    var r
    var i
    var o
    var a
    var s
    var /* [auto-meaningful-name] */s$type
    var f
    var h
    var p
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            o = function () {
              return (o = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e, n) {
                var /* [auto-meaningful-name] */t$sent
                var /* [auto-meaningful-name] */t$sent$types
                var /* [auto-meaningful-name] */t$sent$widget
                return RegeneratorRuntime.wrap(function (t) {
                  for (;;) {
                    switch (t.prev = t.next) {
                      case 0:
                        t.next = 2
                        return $$_$$_$$_$$_$$_src_shared_widget_custom_load.r(n, e.startsWith($$_$$_$$_$$_$$_src_shared_widget_custom_type.a), $$_$$_$$_$$_$$_src_shared_widget_custom_externalModule.require)
                      case 2:
                        t$sent = t.sent
                        t$sent$types = t$sent.types
                        t$sent$widget = t$sent.widget
                        r[e] = t$sent$widget
                        $$_$$_$$_$$_$$_src_shared_widget_custom_storage.a({
                          type: e,
                          types: t$sent$types,
                          code: n
                        })
                      case 7:
                      case "end":
                        return t.stop()
                    }
                  }
                }, t)
              }))).apply(this, arguments)
            }
            i = function (t, e) {
              return o.apply(this, arguments)
            }
            r = {}
            t.next = 5
            return Promise.all(e.map(function (t) {
              var /* [auto-meaningful-name] */t$type = t.type
              var /* [auto-meaningful-name] */t$code = t.code
              return i(t$type, t$code)
            }))
          case 5:
            for (a in n) {
              s = n[a]
              s$type = s.type
              if ($$_$$_$$_$$_$$_src_shared_widget_custom_load.q(s$type)) {
                f = $$_$$_$$_$$_shared_1571_2636_6.a($$_$$_$$_$$_shared_1571_2636_6.a({}, s.attributes), {}, {
                  __widgetId: s.id,
                  __widgetType: s.type,
                  __width: s.size.width,
                  __height: s.size.height
                })
                h = r[s$type]
                p = new h(f)
                $$_$$_$$_$$_shared_1571_2636_20_index.addWidgetInstance(s.id, p)
              }
            }
          case 6:
          case "end":
            return t.stop()
        }
      }
    }, t)
  }))).apply(this, arguments)
}
function Ge(t) {
  for (var e in t) {
    var n = t[e]
    var /* [auto-meaningful-name] */n$type = n.type
    if (Pe[n$type]) {
      var i = $$_$$_$$_$$_shared_1571_2636_6.a($$_$$_$$_$$_shared_1571_2636_6.a({}, n.attributes), {}, {
        __widgetId: n.id,
        __widgetType: n.type,
        __width: n.size.width,
        __height: n.size.height
      })
      var o = new (0, Pe[n$type])(i)
      $$_$$_$$_$$_shared_1571_2636_20_index.addWidgetInstance(n.id, o)
    }
  }
}
function ze(t) {
  return Ye.apply(this, arguments)
}
function Ye() {
  return (Ye = $$_$$_$$_$$_shared_1571_2636_7.a(RegeneratorRuntime.mark(function t(e) {
    var n
    var /* [auto-meaningful-name] */e$blockCode
    var /* [auto-meaningful-name] */e$shouldOpenEmulator
    var /* [auto-meaningful-name] */e$extensionWidgetList
    var /* [auto-meaningful-name] */e$unsafeExtensionWidgetList
    var /* [auto-meaningful-name] */e$fontFileMap
    var d
    var f
    var /* [auto-meaningful-name] */d$widgetMap
    var p
    var /* [auto-meaningful-name] */t$sent
    var b
    var g
    return RegeneratorRuntime.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            if (n = e.id, e$blockCode = e.blockCode, e$shouldOpenEmulator = e.shouldOpenEmulator, e$extensionWidgetList = e.extensionWidgetList, e$unsafeExtensionWidgetList = e.unsafeExtensionWidgetList, e$fontFileMap = e.fontFileMap, d = $$_$$_$$_$$_shared_1571_2636_295.a(e, ["id", "blockCode", "shouldOpenEmulator", "extensionWidgetList", "unsafeExtensionWidgetList", "fontFileMap"]), (f = e.apiToken || e["x-coconut-authorization"] || "") || console.warn("api token not set. some api call may fail."), Ge(d$widgetMap = d.widgetMap), p = [], !(null === e$extensionWidgetList || undefined === e$extensionWidgetList ? undefined : e$extensionWidgetList.length)) {
              t.next = 11
              break
            }
            t.next = 9
            return Fe(e$extensionWidgetList)
          case 9:
            t$sent = t.sent
            p.push.apply(p, $$_$$_$$_$$_shared_1571_2636_25_index.a(t$sent))
          case 11:
            if ((null === e$unsafeExtensionWidgetList || undefined === e$unsafeExtensionWidgetList ? undefined : e$unsafeExtensionWidgetList.length) && p.push.apply(p, $$_$$_$$_$$_shared_1571_2636_25_index.a(e$unsafeExtensionWidgetList)), !p.length) {
              t.next = 15
              break
            }
            t.next = 15
            return He(p, d$widgetMap)
          case 15:
            $$_$$_$$_$$_shared_1571_2636_48_index.b(d)
            if (e$shouldOpenEmulator) {
              Be()
            }
            $$_$$_$$_$$_shared_1571_2636_20_index.initializeRoom({
              workId: n,
              context: {
                authorization: f,
                device: {
                  groupId: Ue(),
                  platform: $$_$$_$$_$$_shared_1571_2636_28_index.l(),
                  origin: "coconut"
                }
              }
            })
            $$_$$_$$_$$_shared_1571_2636_20_index.initializeFontFamily(e$fontFileMap)
            $$_$$_$$_$$_shared_1571_2636_20_index.initializeLocalStorage(n, d.widgetMap)
            $$_$$_$$_$$_shared_1571_2636_20_index.initializeHttpClient(d.widgetMap)
            $$_$$_$$_$$_shared_1571_2636_20_index.initializeCloudDBWidget(d.widgetMap)
            $$_$$_$$_$$_shared_1571_2636_20_index.initializeCloudTableDataMap(d.widgetMap)
            t.next = 25
            return $$_$$_$$_$$_shared_1571_2636_20_index.initializeGridMap(d.widgetMap)
          case 25:
            if (b = Object.values(d.widgetMap), !b.some(function (t) {
              return "EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type || "UNSAFE_EXTENSION_QUILL_RICH_TEXT_WIDGET" === t.type
            })) {
              t.next = 30
              break
            }
            t.next = 30
            return $$_$$_$$_$$_shared_1571_2636_15.ab("https://static.bcmcdn.com/appcraft/modules/quilljs/1.3.7/quill.snow.css")
          case 30:
            window.eval = function () {}
            g = $$_$$_$$_$$_shared_1571_2636_20_index.generateAsyncScheduler()
            new Function("Coco", "CocoExtension", "asyncScheduler", "AsyncScheduler", e$blockCode)($$_$$_$$_$$_shared_1571_2636_20_index, $$_$$_$$_$$_$$_src_shared_widget_custom_externalModule, g, $$_$$_$$_$$_shared_1571_2636_20_index.AsyncScheduler)
            $$_$$_$$_$$_shared_1571_2636_20_index.subscribeSensor()
            window.addEventListener("message", function (t) {
              var /* [auto-meaningful-name] */t$data = t.data
              if ("deviceEvent" === t$data.type) {
                $$_$$_$$_$$_shared_1571_2636_20_index.emitEvent.apply($$_$$_$$_$$_shared_1571_2636_20_index, $$_$$_$$_$$_shared_1571_2636_25_index.a(t$data.args))
              }
            })
          case 35:
          case "end":
            return t.stop()
        }
      }
    }, t)
  }))).apply(this, arguments)
}
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_683)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_684_index)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_685_index)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_686)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_678)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_687)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_688)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_679)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_680)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_681)
$$_$$_$$_$$_$$_src_shared_widget_custom_load.s($$_$$_$$_$$_shared_1571_2636_682)
export { ze }
