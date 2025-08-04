function n(t) {
  module.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
    return e.__proto__ || Object.getPrototypeOf(e);
  };
  return n(t);
}
module.exports = n;