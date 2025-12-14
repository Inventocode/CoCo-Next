/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：389
 */

"use strict"

export { i as a }
import * as /* [auto-meaningful-name] */$$_$$_27 from "../../27"
import * as /* [auto-meaningful-name] */$$_$$_39 from "../../39"
var i = function () {
  function e() {
    $$_$$_27.a(this, e)
    this.listeners = {}
  }
  $$_$$_39.a(e, [
    {
      key: "addEventListener",
      value: function (e, t) {
        var n = this.listeners[e]
        if (n) {
          if (-1 === n.indexOf(t)) {
            n.push(t)
          }
        } else {
          this.listeners[e] = [t]
        }
      }
    }, {
      key: "removeEventListener",
      value: function (e, t) {
        if (t) {
          var n = this.listeners[e]
          if (n) {
            var r = n.indexOf(t)
            if (-1 === r) {
              return
            }
            n.splice(r, 1)
            if (!n.length) {
              delete this.listeners[e]
            }
          }
        } else {
          delete this.listeners[e]
        }
      }
    }, {
      key: "emit",
      value: function (e, t) {
        var n = this.listeners[e]
        if (n) {
          n.forEach(function (e) {
            return e(t)
          })
        }
      }
    }
  ])
  return e
}()
export default i
