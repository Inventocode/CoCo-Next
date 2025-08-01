var r = require("./1543");
module.exports = function (e, t) {
  return new (r(e))(0 === t ? 0 : t);
};