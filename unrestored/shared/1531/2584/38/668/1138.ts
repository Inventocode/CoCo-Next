module.exports = function (e, t) {
  var n = 0;
  var r = {};
  e.addEventListener("message", function (t) {
    var n = t.data;
    if ("RPC" === n.type) {
      if (n.id) {
        var i = r[n.id];
        if (i) {
          delete r[n.id];
          if (n.error) {
            i[1](Object.assign(Error(n.error.message), n.error));
          } else {
            i[0](n.result);
          }
        }
      } else {
        var o = document.createEvent("Event");
        o.initEvent(n.method, false, false);
        o.data = n.params;
        e.dispatchEvent(o);
      }
    }
  });
  t.forEach(function (t) {
    e[t] = function () {
      var i = arguments;
      return new Promise(function (o, a) {
        var s = ++n;
        r[s] = [o, a];
        e.postMessage({
          type: "RPC",
          id: s,
          method: t,
          params: [].slice.call(i)
        });
      });
    };
  });
};