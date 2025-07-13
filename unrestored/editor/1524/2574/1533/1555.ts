"use strict";

import * as r from "./1626/86/index";
var o = require("./1707/399").findIndex;
import * as i from "./935/633";
var a = !0;
if ("findIndex" in []) {
  Array(1).findIndex(function () {
    a = !1;
  });
}
r({
  target: "Array",
  proto: !0,
  forced: a
}, {
  findIndex: function (e) {
    return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
i("findIndex");