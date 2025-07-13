import * as r from "./2414/index";
import * as i from "./2458/index";
import * as o from "../../1139/1387/971";
import * as a from "../446";
import * as s from "./2468/index";
module.exports = function (e) {
  return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? i(e[0], e[1]) : r(e) : s(e);
};