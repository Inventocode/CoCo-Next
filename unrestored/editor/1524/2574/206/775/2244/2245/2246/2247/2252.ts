"use strict";

import * as r from "../../../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../../../3262/3188/2658/230";
import * as o from "../../../../../../../../3262/3188/2658/2679/703/index";
import * as a from "../../../../../../../../3262/3188/2658/2679/529";
import * as s from "../../../../../../../../3262/3188/2658/2679/356/index";
import * as c from "../../../../../../../../3262/3188/2658/2679/357/index";
import * as u from "./2253/1115";
module.exports = function (e) {
  s(n, e);
  var t = c(n);
  function n(e, i) {
    var o;
    r(this, n);
    (o = t.call(this, e)).count = i;
    return o;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      return this.count > 0 && (this.count -= 1, o(a(n.prototype), "moveNext", this).call(this));
    }
  }]);
  return n;
}(u);