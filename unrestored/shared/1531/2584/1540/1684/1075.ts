var r = require("../1667/1073");
module.exports = function (e) {
  if (r(e)) {
    throw TypeError("The method doesn't accept regular expressions");
  }
  return e;
};