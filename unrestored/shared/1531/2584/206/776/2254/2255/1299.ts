module.exports = function (e) {
  if (void 0 === e) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return e;
};