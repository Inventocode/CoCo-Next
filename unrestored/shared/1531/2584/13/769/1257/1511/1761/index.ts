var r = require("./1258");
module.exports = function (e) {
  if (Array.isArray(e)) {
    return r(e);
  }
};