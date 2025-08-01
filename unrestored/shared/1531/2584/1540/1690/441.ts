var r = require("../1633/167");
module.exports = function (e) {
  return r(function () {
    var t = ""[e]('"');
    return t !== t.toLowerCase() || t.split('"').length > 3;
  });
};