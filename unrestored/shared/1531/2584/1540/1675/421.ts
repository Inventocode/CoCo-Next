module.exports = function (e) {
  if (undefined == e) {
    throw TypeError("Can't call method on " + e);
  }
  return e;
};