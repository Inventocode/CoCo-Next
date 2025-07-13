import * as r from "./1862/index";
import * as i from "./1865";
module.exports = function (e) {
  return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e);
};