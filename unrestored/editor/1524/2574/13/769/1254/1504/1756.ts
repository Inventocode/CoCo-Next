import * as r from "./1754/1255";
module.exports = function (e, t) {
  if (e) {
    if ("string" === typeof e) {
      return r(e, t);
    }
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if ("Object" === n && e.constructor) {
      n = e.constructor.name;
    }
    return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
  }
};