import * as r from "../../1738/272";
import * as o from "../../1626/167";
import * as i from "../../1736/1071/1056";
module.exports = !r && !o(function () {
  return 7 != Object.defineProperty(i("div"), "a", {
    get: function () {
      return 7;
    }
  }).a;
});