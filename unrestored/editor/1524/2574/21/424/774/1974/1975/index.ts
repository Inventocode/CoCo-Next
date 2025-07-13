import * as r from "./1976/index";
r.prototype.toPostfix = function () {
  "use strict";

  for (var e, t, n, i, o, a = [], s = [{
      value: "(",
      type: 4,
      pre: 0
    }], c = this.value, u = 1; u < c.length; u++) {
    if (1 === c[u].type || 3 === c[u].type || 13 === c[u].type) {
      if (1 === c[u].type) {
        c[u].value = Number(c[u].value);
      }
      a.push(c[u]);
    } else if (4 === c[u].type) {
      s.push(c[u]);
    } else if (5 === c[u].type) {
      for (; 4 !== (t = s.pop()).type;) {
        a.push(t);
      }
    } else if (11 === c[u].type) {
      for (; 4 !== (t = s.pop()).type;) {
        a.push(t);
      }
      s.push(t);
    } else {
      i = (e = c[u]).pre;
      n = (o = s[s.length - 1]).pre;
      var l = "Math.pow" == o.value && "Math.pow" == e.value;
      if (i > n) {
        s.push(e);
      } else {
        for (; n >= i && !l || l && i < n;) {
          t = s.pop();
          o = s[s.length - 1];
          a.push(t);
          n = o.pre;
          l = "Math.pow" == e.value && "Math.pow" == o.value;
        }
        s.push(e);
      }
    }
  }
  return new r(a);
};
module.exports = r;