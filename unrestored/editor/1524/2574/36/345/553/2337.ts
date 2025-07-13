module.exports = function () {
  return "function" === typeof Promise && Promise.prototype && Promise.prototype.then;
};