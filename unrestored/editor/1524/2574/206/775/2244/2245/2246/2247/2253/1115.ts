"use strict";

import * as r from "../../../../../../../../../3262/3188/2658/220";
import * as i from "../../../../../../../../../3262/3188/2658/230";
import * as o from "../../../../../../../../../3262/3188/2658/2679/356/index";
import * as a from "../../../../../../../../../3262/3188/2658/2679/357/index";
import * as s from "../../1116/842";
module.exports = function (e) {
  o(n, e);
  var t = a(n);
  function n(e) {
    var i;
    r(this, n);
    (i = t.call(this)).cursor = e;
    return i;
  }
  i(n, [{
    key: "moveNext",
    value: function () {
      var e = this.cursor.moveNext();
      this.current = this.cursor.current;
      return e;
    }
  }]);
  return n;
}(s);