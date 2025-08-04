"use strict";

function r(e) {
  for (var t = "https://material-ui.com/production-error/?code=" + e, n = 1; n < arguments.length; n += 1) {
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  }
  return "Minified Material-UI error #" + e + "; visit " + t + " for the full message.";
}
export { r as a };
export default r;