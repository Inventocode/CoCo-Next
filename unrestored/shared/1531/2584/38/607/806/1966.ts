module.exports = function (e) {
  if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
    return Array.from(e);
  }
};