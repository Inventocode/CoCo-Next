var r = require("./1297");
module.exports = function (e) {
  if (Array.isArray(e)) {
    return r(e);
  }
};