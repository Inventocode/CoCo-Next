module.exports = function (e) {
  if (undefined === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
};