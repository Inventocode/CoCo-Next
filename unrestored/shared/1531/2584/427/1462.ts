(function (t) {
  var n = !!(t === t.window && t.URL && t.Blob && t.Worker);
  function r(e, r) {
    var i;
    var o = this;
    r = r || {};
    if (n) {
      i = e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
      return new t.Worker(t.URL.createObjectURL(new t.Blob([i], {
        type: "text/javascript"
      })));
    }
    this.self = r;
    this.self.postMessage = function (e) {
      setTimeout(function () {
        o.onmessage({
          data: e
        });
      }, 0);
    };
    setTimeout(e.bind(r, r), 0);
  }
  r.prototype.postMessage = function (e) {
    var t = this;
    setTimeout(function () {
      t.self.onmessage({
        data: e
      });
    }, 0);
  };
  module.exports = r;
}).call(this, require("../31/251"));