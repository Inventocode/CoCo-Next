try {
  module.exports = "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (n) {
  module.exports = !1;
}