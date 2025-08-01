var n = Date.now;
module.exports = function (e) {
  var t = 0;
  var r = 0;
  return function () {
    var i = n();
    var o = 16 - (i - r);
    r = i;
    if (o > 0) {
      if (++t >= 800) {
        return arguments[0];
      }
    } else {
      t = 0;
    }
    return e.apply(void 0, arguments);
  };
};