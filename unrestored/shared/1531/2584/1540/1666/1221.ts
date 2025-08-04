var r = require("../1738/231");
module.exports = function (e) {
  if (!r(e) && null !== e) {
    throw TypeError("Can't set " + String(e) + " as a prototype");
  }
  return e;
};