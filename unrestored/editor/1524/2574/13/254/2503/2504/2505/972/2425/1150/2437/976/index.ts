import * as r from "./2438";
module.exports = function (e, t) {
  var n = e.__data__;
  return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
};