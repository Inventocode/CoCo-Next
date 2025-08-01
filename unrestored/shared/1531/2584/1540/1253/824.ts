var r = require("./825");
var o = require("../936/823");
var i = require("../1742/247/index")("iterator");
module.exports = function (e) {
  if (void 0 != e) {
    return e[i] || e["@@iterator"] || o[r(e)];
  }
};