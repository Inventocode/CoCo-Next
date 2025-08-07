require("./1623/86")({
  target: "Reflect",
  stat: true
}, {
  has: function (e, t) {
    return t in e;
  }
});