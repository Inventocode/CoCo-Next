module.exports = function (e, t, n) {
  if (!(e instanceof t)) {
    throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
  }
  return e;
};