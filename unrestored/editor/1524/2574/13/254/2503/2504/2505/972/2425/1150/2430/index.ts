var r = require("./2431/index");
var i = require("../../../973/index");
var o = require("../../1149");
module.exports = function () {
  this.size = 0;
  this.__data__ = {
    hash: new r(),
    map: new (o || i)(),
    string: new r()
  };
};