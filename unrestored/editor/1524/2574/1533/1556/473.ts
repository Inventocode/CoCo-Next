var n = Math.ceil;
var r = Math.floor;
module.exports = function (e) {
  return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e);
};