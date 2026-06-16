/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24__part-3
 */

"use strict"

import { Z } from "./index__part-2"
import * as /* [auto-meaningful-name] */Module_49 from /* 49 */"../49"
import * as /* [auto-meaningful-name] */Src_shared_tools_index from /* 15 */"../../../../../src/shared/tools/index"
import * as /* [auto-meaningful-name] */OtJson1 from /* 31 */"ot-json1"
import * as /* [auto-meaningful-name] */Module_39 from /* 39 */"../39"
import * as /* [auto-meaningful-name] */Module_27 from /* 27 */"../27"
import * as /* [auto-meaningful-name] */Module_7 from /* 7 */"../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from /* 1 */"regenerator-runtime"
import * as /* [auto-meaningful-name] */Module_377 from /* 377 */"./377/index"
var $ = new (function () {
  function e() {
    Module_27.a(this, e)
    this.client = undefined
    this.workerId = undefined
    this.workerId = ""
  }
  Module_39.a(e, [
    {
      key: "init",
      value: function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e(t) {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  this.disconnect()
                  this.workerId = t
                  this.client = new Z(t)
                  e.next = 5
                  return this.client.waitInitial()
                case 5:
                  if ("suc" !== e.sent.status) {
                    e.next = 11
                    break
                  }
                  Module_49.oTHelper.init()
                  Module_377.blinkOTAdapter.start()
                  e.next = 13
                  break
                case 11:
                  e.next = 13
                  return this.reconnect()
                case 13:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function (t) {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "reconnect",
      value: function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e() {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return Src_shared_tools_index.lb(500)
                case 2:
                  this.disconnect()
                  e.next = 5
                  return this.init(this.workerId)
                case 5:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "disconnect",
      value: function () {
        var e = Module_7.a(RegeneratorRuntime.mark(function e() {
          var /* [auto-meaningful-name] */this$client
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!(null === (this$client = this.client) || undefined === this$client)) {
                    this$client.disconnect()
                  }
                  this.client = undefined
                  Module_377.blinkOTAdapter.stop()
                  Module_49.oTHelper.dispose()
                case 4:
                case "end":
                  return e.stop()
              }
            }
          }, e, this)
        }))
        return function () {
          return e.apply(this, arguments)
        }
      }()
    }, {
      key: "applyClient",
      value: function (e) {
        var /* [auto-meaningful-name] */this$client
        if (!(null === (this$client = this.client) || undefined === this$client)) {
          this$client.applyClient(e)
        }
      }
    }, {
      key: "getDoc",
      value: function () {
        var /* [auto-meaningful-name] */this$client
        var /* [auto-meaningful-name] */this$client$adapter
        return null === (this$client = this.client) || undefined === this$client || null === (this$client$adapter = this$client.adapter) || undefined === this$client$adapter ? undefined : this$client$adapter.getDoc()
      }
    }, {
      key: "getPreviousDoc",
      value: function () {
        var /* [auto-meaningful-name] */this$client
        var /* [auto-meaningful-name] */this$client$adapter
        return null === (this$client = this.client) || undefined === this$client || null === (this$client$adapter = this$client.adapter) || undefined === this$client$adapter ? undefined : this$client$adapter.getPreviousDoc()
      }
    }
  ])
  return e
}())()
window.oT = $
window.json = OtJson1
export { $ }
