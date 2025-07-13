import * as r from "./931";
import * as o from "./814";
var i = r("keys");
module.exports = function (e) {
  return i[e] || (i[e] = o(e));
};