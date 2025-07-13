import * as r from "./1626/86/index";
var o = Math.ceil;
var i = Math.floor;
r({
  target: "Math",
  stat: !0
}, {
  trunc: function (e) {
    return (e > 0 ? i : o)(e);
  }
});