var r = require("../../1633/167");
var o = require("./941");
module.exports = function (e) {
  return r(function () {
    return !!o[e]() || "\u200b\x85\u180e" != "\u200b\x85\u180e"[e]() || o[e].name !== e;
  });
};