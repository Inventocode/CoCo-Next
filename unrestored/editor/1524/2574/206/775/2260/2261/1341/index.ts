(function () {
  var t;
  var r;
  var i;
  t = require("./2269");
  r = require("./2270");
  i = function (e, n, i) {
    return r(t(e), n, i);
  };
  module.exports = {
    VERSION: "0.3.2",
    typeCheck: i,
    parsedTypeCheck: r,
    parseType: t
  };
}).call(this);