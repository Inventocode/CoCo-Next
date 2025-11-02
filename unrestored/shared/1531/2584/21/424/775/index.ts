/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：775
 */

var r = require("./1984/index")
r.prototype.formulaEval = function () {
  "use strict"

  for (var e, t, n, r = [], this$value = this.value, o = 0; o < this$value.length; o++) {
    if (1 === this$value[o].type || 3 === this$value[o].type) {
      r.push({
        value: 3 === this$value[o].type ? this$value[o].show : this$value[o].value,
        type: 1
      })
    } else {
      if (13 === this$value[o].type) {
        r.push({
          value: this$value[o].show,
          type: 1
        })
      } else {
        if (0 === this$value[o].type) {
          r[r.length - 1] = {
            value: this$value[o].show + ("-" != this$value[o].show ? "(" : "") + r[r.length - 1].value + ("-" != this$value[o].show ? ")" : ""),
            type: 0
          }
        } else {
          if (7 === this$value[o].type) {
            r[r.length - 1] = {
              value: (1 != r[r.length - 1].type ? "(" : "") + r[r.length - 1].value + (1 != r[r.length - 1].type ? ")" : "") + this$value[o].show,
              type: 7
            }
          } else {
            if (10 === this$value[o].type) {
              e = r.pop()
              t = r.pop()
              if ("P" === this$value[o].show || "C" === this$value[o].show) {
                r.push({
                  value: "<sup>" + t.value + "</sup>" + this$value[o].show + "<sub>" + e.value + "</sub>",
                  type: 10
                })
              } else {
                r.push({
                  value: (1 != t.type ? "(" : "") + t.value + (1 != t.type ? ")" : "") + "<sup>" + e.value + "</sup>",
                  type: 1
                })
              }
            } else {
              if (2 === this$value[o].type || 9 === this$value[o].type) {
                e = r.pop()
                t = r.pop()
                r.push({
                  value: (1 != t.type ? "(" : "") + t.value + (1 != t.type ? ")" : "") + this$value[o].show + (1 != e.type ? "(" : "") + e.value + (1 != e.type ? ")" : ""),
                  type: this$value[o].type
                })
              } else {
                if (12 === this$value[o].type) {
                  e = r.pop()
                  t = r.pop()
                  n = r.pop()
                  r.push({
                    value: this$value[o].show + "(" + n.value + "," + t.value + "," + e.value + ")",
                    type: 12
                  })
                }
              }
            }
          }
        }
      }
    }
  }
  return r[0].value
}
module.exports = r
