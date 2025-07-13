function n(e) {
  this.name = "BrowserslistError";
  this.message = e;
  this.browserslist = !0;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, n);
  }
}
n.prototype = Error.prototype;
module.exports = n;