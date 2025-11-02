/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：1986
 */

"use strict"

var r = require("./1987")
function i(e, t) {
  for (var n = 0; n < e.length; n++) {
    e[n] += t
  }
  return e
}
var o = ["sin", "cos", "tan", "pi", "(", ")", "P", "C", " ", "asin", "acos", "atan", "7", "8", "9", "int", "cosh", "acosh", "ln", "^", "root", "4", "5", "6", "/", "!", "tanh", "atanh", "Mod", "1", "2", "3", "*", "sinh", "asinh", "e", "log", "0", ".", "+", "-", ",", "Sigma", "n", "Pi", "pow"]
var a = ["sin", "cos", "tan", "&pi;", "(", ")", "P", "C", " ", "asin", "acos", "atan", "7", "8", "9", "Int", "cosh", "acosh", " ln", "^", "root", "4", "5", "6", "&divide;", "!", "tanh", "atanh", " Mod ", "1", "2", "3", "&times;", "sinh", "asinh", "e", " log", "0", ".", "+", "-", ",", "&Sigma;", "n", "&Pi;", "pow"]
var s = [r.math.sin, r.math.cos, r.math.tan, "PI", "(", ")", r.math.P, r.math.C, " ".anchor, r.math.asin, r.math.acos, r.math.atan, "7", "8", "9", Math.floor, r.math.cosh, r.math.acosh, Math.log, Math.pow, Math.sqrt, "4", "5", "6", r.math.div, r.math.fact, r.math.tanh, r.math.atanh, r.math.mod, "1", "2", "3", r.math.mul, r.math.sinh, r.math.asinh, "E", r.math.log, "0", ".", r.math.add, r.math.sub, ",", r.math.sigma, "n", r.math.Pi, Math.pow]
var c = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1
}
var u = [0, 0, 0, 3, 4, 5, 10, 10, 14, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 10, 0, 1, 1, 1, 2, 7, 0, 0, 2, 1, 1, 1, 2, 0, 0, 3, 0, 1, 6, 9, 9, 11, 12, 13, 12, 8]
var l = {
  0: true,
  1: true,
  3: true,
  4: true,
  6: true,
  8: true,
  9: true,
  12: true,
  13: true,
  14: true
}
var f = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: true,
  11: true,
  12: true,
  13: true
}
var d = {
  0: true,
  3: true,
  4: true,
  8: true,
  12: true,
  13: true
}
var h = {}
var p = {
  0: true,
  1: true,
  3: true,
  4: true,
  6: true,
  8: true,
  12: true,
  13: true
}
var _ = {
  1: true
}
var A = [[], ["1", "2", "3", "7", "8", "9", "4", "5", "6", "+", "-", "*", "/", "(", ")", "^", "!", "P", "C", "e", "0", ".", ",", "n", " "], ["pi", "ln", "Pi"], ["sin", "cos", "tan", "Del", "int", "Mod", "log", "pow"], ["asin", "acos", "atan", "cosh", "root", "tanh", "sinh"], ["acosh", "atanh", "asinh", "Sigma"]]
function g(e, t, n, r) {
  for (var i = 0; i < r; i++) {
    if (e[n + i] !== t[i]) {
      return false
    }
  }
  return true
}
r.addToken = function (e) {
  for (var t = 0; t < e.length; t++) {
    var eT$token$length = e[t].token.length
    var r = -1
    A[eT$token$length] = A[eT$token$length] || []
    for (var i = 0; i < A[eT$token$length].length; i++) {
      if (e[t].token === A[eT$token$length][i]) {
        r = o.indexOf(A[eT$token$length][i])
        break
      }
    }
    if (-1 === r) {
      o.push(e[t].token)
      u.push(e[t].type)
      if (A.length <= e[t].token.length) {
        A[e[t].token.length] = []
      }
      A[e[t].token.length].push(e[t].token)
      s.push(e[t].value)
      a.push(e[t].show)
    } else {
      o[r] = e[t].token
      u[r] = e[t].type
      s[r] = e[t].value
      a[r] = e[t].show
    }
  }
}
r.lex = function (e, t) {
  var n
  var v = {
    value: r.math.changeSign,
    type: 0,
    pre: 21,
    show: "-"
  }
  var m = {
    value: ")",
    show: ")",
    type: 5,
    pre: 0
  }
  var y = {
    value: "(",
    type: 4,
    pre: 0,
    show: "("
  }
  var b = [y]
  var w = []
  var E = e
  var x = l
  var C = 0
  var O = h
  var k = ""
  if ("undefined" !== typeof t) {
    r.addToken(t)
  }
  var S = {}
  var T = function (e) {
    for (var t, n, i, l = [], e$length = e.length, d = 0; d < e$length; d++) {
      if (!(d < e$length - 1 && " " === e[d] && " " === e[d + 1])) {
        for (t = "", n = e.length - d > A.length - 2 ? A.length - 1 : e.length - d; n > 0; n--) {
          if (undefined !== A[n]) {
            for (i = 0; i < A[n].length; i++) {
              if (g(e, A[n][i], d, n)) {
                t = A[n][i]
                i = A[n].length
                n = 0
              }
            }
          }
        }
        d += t.length - 1
        if ("" === t) {
          throw new r.Exception("Can't understand after " + e.slice(d))
        }
        var h = o.indexOf(t)
        l.push({
          index: h,
          token: t,
          type: u[h],
          eval: s[h],
          precedence: c[u[h]],
          show: a[h]
        })
      }
    }
    return l
  }(E)
  for (n = 0; n < T.length; n++) {
    var B = T[n]
    if (14 !== B.type) {
      B.index
      var D
      var b$token = B.token
      var b$type = B.type
      var b$eval = B.eval
      var b$precedence = B.precedence
      var b$show = B.show
      var M = b[b.length - 1]
      for (D = w.length; D-- && 0 === w[D];) {
        if (-1 !== [0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(b$type)) {
          if (true !== x[b$type]) {
            console.log(e, B, T, x)
            throw new r.Exception(b$token + " is not allowed after " + k)
          }
          b.push(m)
          x = f
          O = p
          i(w, -1).pop()
        }
      }
      if (true !== x[b$type]) {
        throw new r.Exception(b$token + " is not allowed after " + k)
      }
      if (true === O[b$type]) {
        b$type = 2
        b$eval = r.math.mul
        b$show = "&times;"
        b$precedence = 3
        n -= b$token.length
      }
      S = {
        value: b$eval,
        type: b$type,
        pre: b$precedence,
        show: b$show
      }
      if (0 === b$type) {
        x = l
        O = h
        i(w, 2).push(2)
        b.push(S)
        b.push(y)
      } else if (1 === b$type) {
        if (1 === M.type) {
          M.value += b$eval
          i(w, 1)
        } else {
          b.push(S)
        }
        x = f
        O = d
      } else if (2 === b$type) {
        x = l
        O = h
        i(w, 2)
        b.push(S)
      } else if (3 === b$type) {
        b.push(S)
        x = f
        O = p
      } else if (4 === b$type) {
        i(w, 1)
        C++
        x = l
        O = h
        b.push(S)
      } else if (5 === b$type) {
        if (!C) {
          throw new r.Exception("Closing parenthesis are more than opening one, wait What!!!")
        }
        C--
        x = f
        O = p
        b.push(S)
        i(w, 1)
      } else if (6 === b$type) {
        if (M.hasDec) {
          throw new r.Exception("Two decimals are not allowed in one number")
        }
        if (1 !== M.type) {
          M = {
            value: 0,
            type: 1,
            pre: 0
          }
          b.push(M)
          i(w, -1)
        }
        x = _
        i(w, 1)
        O = h
        M.value += b$eval
        M.hasDec = true
      } else if (7 === b$type) {
        x = f
        O = p
        i(w, 1)
        b.push(S)
      }
      if (8 === b$type) {
        x = l
        O = h
        i(w, 4).push(4)
        b.push(S)
        b.push(y)
      } else {
        if (9 === b$type) {
          if (9 === M.type) {
            if (M.value === r.math.add) {
              M.value = b$eval
              M.show = b$show
              i(w, 1)
            } else {
              if (M.value === r.math.sub && "-" === b$show) {
                M.value = r.math.add
                M.show = "+"
                i(w, 1)
              }
            }
          } else {
            if (5 !== M.type && 7 !== M.type && 1 !== M.type && 3 !== M.type && 13 !== M.type) {
              if ("-" === b$token) {
                x = l
                O = h
                i(w, 2).push(2)
                b.push(v)
                b.push(y)
              }
            } else {
              b.push(S)
              i(w, 2)
            }
          }
          x = l
          O = h
        } else {
          if (10 === b$type) {
            x = l
            O = h
            i(w, 2)
            b.push(S)
          } else {
            if (11 === b$type) {
              x = l
              O = h
              b.push(S)
            } else {
              if (12 === b$type) {
                x = l
                O = h
                i(w, 6).push(6)
                b.push(S)
                b.push(y)
              } else {
                if (13 === b$type) {
                  x = f
                  O = p
                  b.push(S)
                }
              }
            }
          }
        }
      }
      i(w, -1)
      k = b$token
    } else if (n > 0 && n < T.length - 1 && 1 === T[n + 1].type && (1 === T[n - 1].type || 6 === T[n - 1].type)) {
      throw new r.Exception("Unexpected Space")
    }
  }
  for (D = w.length; D-- && 0 === w[D];) {
    b.push(m)
    i(w, -1).pop()
  }
  if (true !== x[5]) {
    throw new r.Exception("complete the expression")
  }
  for (; C--;) {
    b.push(m)
  }
  b.push(m)
  return new r(b)
}
module.exports = r
