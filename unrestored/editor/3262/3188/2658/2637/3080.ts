"use strict";

import * as r from "../220";
import * as i from "../230";
var a = function () {
  function e() {
    r(this, e);
  }
  i(e, [{
    key: "getCode",
    value: function () {}
  }, {
    key: "getScope",
    value: function () {}
  }, {
    key: "addHelper",
    value: function () {
      throw new Error("Helpers are not supported by the default hub.");
    }
  }, {
    key: "buildError",
    value: function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TypeError;
      return new n(t);
    }
  }]);
  return e;
}();
export default a;