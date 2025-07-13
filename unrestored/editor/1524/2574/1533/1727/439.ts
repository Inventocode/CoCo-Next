module.exports = function (e) {
  if ("function" != typeof e) {
    throw TypeError(String(e) + " is not a function");
  }
  return e;
};