var r = require("../1738/194").isFinite;
module.exports = Number.isFinite || function (e) {
  return "number" == typeof e && r(e);
};