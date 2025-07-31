var r = require("./1255");
module.exports = function (e) {
  if (Array.isArray(e)) {
    return r(e);
  }
};