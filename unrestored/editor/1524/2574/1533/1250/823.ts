var r = require("./824");
var o = require("../935/822");
var i = require("../1735/247/index")("iterator");
module.exports = function (e) {
  if (void 0 != e) {
    return e[i] || e["@@iterator"] || o[r(e)];
  }
};