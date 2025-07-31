var r = require("./1974/index");
r.prototype.formulaEval = function () {
  "use strict";

  for (var e, t, n, r = [], i = this.value, o = 0; o < i.length; o++) {
    if (1 === i[o].type || 3 === i[o].type) {
      r.push({
        value: 3 === i[o].type ? i[o].show : i[o].value,
        type: 1
      });
    } else {
      if (13 === i[o].type) {
        r.push({
          value: i[o].show,
          type: 1
        });
      } else {
        if (0 === i[o].type) {
          r[r.length - 1] = {
            value: i[o].show + ("-" != i[o].show ? "(" : "") + r[r.length - 1].value + ("-" != i[o].show ? ")" : ""),
            type: 0
          };
        } else {
          if (7 === i[o].type) {
            r[r.length - 1] = {
              value: (1 != r[r.length - 1].type ? "(" : "") + r[r.length - 1].value + (1 != r[r.length - 1].type ? ")" : "") + i[o].show,
              type: 7
            };
          } else {
            if (10 === i[o].type) {
              e = r.pop();
              t = r.pop();
              if ("P" === i[o].show || "C" === i[o].show) {
                r.push({
                  value: "<sup>" + t.value + "</sup>" + i[o].show + "<sub>" + e.value + "</sub>",
                  type: 10
                });
              } else {
                r.push({
                  value: (1 != t.type ? "(" : "") + t.value + (1 != t.type ? ")" : "") + "<sup>" + e.value + "</sup>",
                  type: 1
                });
              }
            } else {
              if (2 === i[o].type || 9 === i[o].type) {
                e = r.pop();
                t = r.pop();
                r.push({
                  value: (1 != t.type ? "(" : "") + t.value + (1 != t.type ? ")" : "") + i[o].show + (1 != e.type ? "(" : "") + e.value + (1 != e.type ? ")" : ""),
                  type: i[o].type
                });
              } else {
                if (12 === i[o].type) {
                  e = r.pop();
                  t = r.pop();
                  n = r.pop();
                  r.push({
                    value: i[o].show + "(" + n.value + "," + t.value + "," + e.value + ")",
                    type: 12
                  });
                }
              }
            }
          }
        }
      }
    }
  }
  return r[0].value;
};
module.exports = r;