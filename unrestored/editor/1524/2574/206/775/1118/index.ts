import * as r from "../../../1/index";
import * as o from "../../../../../3262/3188/2658/220";
import * as i from "../../../../../3262/3188/2658/230";
import * as a from "./756/index";
var s = function () {
  "use strict";

  function e() {
    o(this, e);
    this._rules = Object.create(null);
  }
  i(e, [{
    key: "define",
    value: function (e, t) {
      var n;
      this._rules[e] = "function" === typeof (n = t) ? Object.assign({
        create: n
      }, n) : n;
    }
  }, {
    key: "get",
    value: function (e) {
      return this._rules[e] ? this._rules[e] : a.has(e) ? a.get(e) : null;
    }
  }, {
    key: Symbol.iterator,
    value: r.mark(function e() {
      var t;
      var n;
      var o;
      return r.wrap(function (e) {
        for (;;) {
          switch (e.prev = e.next) {
            case 0:
              return e.delegateYield(a, "t0", 1);
            case 1:
              t = 0;
              n = Object.keys(this._rules);
            case 2:
              if (!(t < n.length)) {
                e.next = 9;
                break;
              }
              o = n[t];
              e.next = 6;
              return [o, this.get(o)];
            case 6:
              t++;
              e.next = 2;
              break;
            case 9:
            case "end":
              return e.stop();
          }
        }
      }, e, this);
    })
  }]);
  return e;
}();
module.exports = s;