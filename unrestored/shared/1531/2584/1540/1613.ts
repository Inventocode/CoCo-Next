require("./1623/86")({
  target: "Number",
  stat: true
}, {
  isNaN: function (e) {
    return e != e;
  }
});