var r = require("./1975/index");
r.prototype.postfixEval = function (e) {
  "use strict";

  (e = e || {}).PI = Math.PI;
  e.E = Math.E;
  for (var t, n, i, o = [], a = this.value, s = "undefined" !== typeof e.n, c = 0; c < a.length; c++) {
    if (1 === a[c].type) {
      o.push({
        value: a[c].value,
        type: 1
      });
    } else {
      if (3 === a[c].type) {
        o.push({
          value: e[a[c].value],
          type: 1
        });
      } else {
        if (0 === a[c].type || 7 === a[c].type) {
          if ("undefined" === typeof o[o.length - 1].type) {
            o[o.length - 1].value.push(a[c]);
          } else {
            o[o.length - 1].value = a[c].value(o[o.length - 1].value);
          }
        } else {
          if (8 === a[c].type) {
            t = o.pop();
            n = o.pop();
            o.push({
              type: 1,
              value: a[c].value(n.value, t.value)
            });
          } else {
            if (10 === a[c].type) {
              t = o.pop();
              if ("undefined" === typeof (n = o.pop()).type) {
                n.value = n.concat(t);
                n.value.push(a[c]);
                o.push(n);
              } else {
                if ("undefined" === typeof t.type) {
                  t.unshift(n);
                  t.push(a[c]);
                  o.push(t);
                } else {
                  o.push({
                    type: 1,
                    value: a[c].value(n.value, t.value)
                  });
                }
              }
            } else {
              if (2 === a[c].type || 9 === a[c].type) {
                t = o.pop();
                if ("undefined" === typeof (n = o.pop()).type) {
                  (n = n.concat(t)).push(a[c]);
                  o.push(n);
                } else {
                  if ("undefined" === typeof t.type) {
                    t.unshift(n);
                    t.push(a[c]);
                    o.push(t);
                  } else {
                    o.push({
                      type: 1,
                      value: a[c].value(n.value, t.value)
                    });
                  }
                }
              } else {
                if (12 === a[c].type) {
                  if ("undefined" !== typeof (t = o.pop()).type) {
                    t = [t];
                  }
                  n = o.pop();
                  i = o.pop();
                  o.push({
                    type: 1,
                    value: a[c].value(i.value, n.value, new r(t))
                  });
                } else {
                  if (13 === a[c].type) {
                    if (s) {
                      o.push({
                        value: e[a[c].value],
                        type: 3
                      });
                    } else {
                      o.push([a[c]]);
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
    throw new r.Exception("Uncaught Syntax error");
  }
  return o[0].value > 1e15 ? "Infinity" : parseFloat(o[0].value.toFixed(15));
};
r.eval = function (e, t, n) {
  return "undefined" === typeof t ? this.lex(e).toPostfix().postfixEval() : "undefined" === typeof n ? "undefined" !== typeof t.length ? this.lex(e, t).toPostfix().postfixEval() : this.lex(e).toPostfix().postfixEval(t) : this.lex(e, t).toPostfix().postfixEval(n);
};
module.exports = r;