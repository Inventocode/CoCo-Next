var n = [].indexOf;
module.exports = function (e, t) {
  if (n) {
    return e.indexOf(t);
  }
  for (var r = 0; r < e.length; ++r) {
    if (e[r] === t) {
      return r;
    }
  }
  return -1;
};