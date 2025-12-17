/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：24__part-3
 */

"use strict"

import { Z } from "./index__part-2"
import * as /* [auto-meaningful-name] */$$_49 from "../49"
import * as /* [auto-meaningful-name] */$$_15 from "../15"
import * as /* [auto-meaningful-name] */OtJson1 from "ot-json1"
import * as /* [auto-meaningful-name] */$$_39 from "../39"
import * as /* [auto-meaningful-name] */$$_27 from "../27"
import * as s from "../7"
import /* [auto-meaningful-name] */RegeneratorRuntime from "regenerator-runtime"
import * as /* [auto-meaningful-name] */$_377_index from "./377/index"
var $ = new (function () {
  function e() {
    $$_27.a(this, e)
    this.client = undefined
    this.workerId = undefined
    this.workerId = ""
  }
  $$_39.a(e, [
    {
      key: "init",
      value: function () {
        var e = s.a(RegeneratorRuntime.mark(function e(t) {
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
                  $$_49.oTHelper.init()
                  $_377_index.blinkOTAdapter.start()
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
        var e = s.a(RegeneratorRuntime.mark(function e() {
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  e.next = 2
                  return $$_15.lb(500)
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
        var e = s.a(RegeneratorRuntime.mark(function e() {
          var /* [auto-meaningful-name] */this$client
          return RegeneratorRuntime.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if (!(null === (this$client = this.client) || undefined === this$client)) {
                    this$client.disconnect()
                  }
                  this.client = undefined
                  $_377_index.blinkOTAdapter.stop()
                  $$_49.oTHelper.dispose()
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
