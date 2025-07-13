import * as r from "../1626/231";
var o = Math.floor;
module.exports = function (e) {
  return !r(e) && isFinite(e) && o(e) === e;
};