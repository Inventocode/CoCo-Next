/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1984
 */

var r = require("./1985/index")
r.prototype.postfixEval = function (e) {
  "use strict";

  (e = e || {}).PI = Math.PI
  e.E = Math.E
  for (var t, n, i, o = [], /* [auto-meaningful-name] */this$value = this.value, s = "undefined" !== typeof e.n, c = 0; c < this$value.length; c++) {
    if (1 === this$value[c].type) {
      o.push({
        value: this$value[c].value,
        type: 1
      })
    } else {
      if (3 === this$value[c].type) {
        o.push({
          value: e[this$value[c].value],
          type: 1
        })
      } else {
        if (0 === this$value[c].type || 7 === this$value[c].type) {
          if ("undefined" === typeof o[o.length - 1].type) {
            o[o.length - 1].value.push(this$value[c])
          } else {
            o[o.length - 1].value = this$value[c].value(o[o.length - 1].value)
          }
        } else {
          if (8 === this$value[c].type) {
            t = o.pop()
            n = o.pop()
            o.push({
              type: 1,
              value: this$value[c].value(n.value, t.value)
            })
          } else {
            if (10 === this$value[c].type) {
              t = o.pop()
              if ("undefined" === typeof (n = o.pop()).type) {
                n.value = n.concat(t)
                n.value.push(this$value[c])
                o.push(n)
              } else {
                if ("undefined" === typeof t.type) {
                  t.unshift(n)
                  t.push(this$value[c])
                  o.push(t)
                } else {
                  o.push({
                    type: 1,
                    value: this$value[c].value(n.value, t.value)
                  })
                }
              }
            } else {
              if (2 === this$value[c].type || 9 === this$value[c].type) {
                t = o.pop()
                if ("undefined" === typeof (n = o.pop()).type) {
                  (n = n.concat(t)).push(this$value[c])
                  o.push(n)
                } else {
                  if ("undefined" === typeof t.type) {
                    t.unshift(n)
                    t.push(this$value[c])
                    o.push(t)
                  } else {
                    o.push({
                      type: 1,
                      value: this$value[c].value(n.value, t.value)
                    })
                  }
                }
              } else {
                if (12 === this$value[c].type) {
                  if ("undefined" !== typeof (t = o.pop()).type) {
                    t = [t]
                  }
                  n = o.pop()
                  i = o.pop()
                  o.push({
                    type: 1,
                    value: this$value[c].value(i.value, n.value, new r(t))
                  })
                } else {
                  if (13 === this$value[c].type) {
                    if (s) {
                      o.push({
                        value: e[this$value[c].value],
                        type: 3
                      })
                    } else {
                      o.push([this$value[c]])
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (o.length > 1) {
    throw new r.Exception("Uncaught Syntax error")
  }
  return o[0].value > 1e15 ? "Infinity" : parseFloat(o[0].value.toFixed(15))
}
r.eval = function (e, t, n) {
  return "undefined" === typeof t ? this.lex(e).toPostfix().postfixEval() : "undefined" === typeof n ? "undefined" !== typeof t.length ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n)
}
module.exports = r
