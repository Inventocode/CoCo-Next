var n = Object.prototype;
module.exports = function (e) {
  var t = e && e.constructor;
  return e === ("function" == typeof t && t.prototype || n);
};