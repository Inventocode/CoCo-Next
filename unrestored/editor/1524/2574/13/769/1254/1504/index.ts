import * as r from "./1754/index";
import * as i from "./1755";
import * as o from "./1756";
import * as a from "./1757";
module.exports = function (e) {
  return r(e) || i(e) || o(e) || a();
};