import * as r from "./1260/index";
import * as i from "./1807/index";
import * as o from "../835/index";
module.exports = function (e) {
  return o(e) ? r(e) : i(e);
};