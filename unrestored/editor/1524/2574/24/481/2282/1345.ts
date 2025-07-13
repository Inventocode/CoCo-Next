var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
module.exports = function (e) {
  var t = e;
  var i = e.indexOf("[");
  var o = e.indexOf("]");
  if (-1 != i && -1 != o) {
    e = e.substring(0, i) + e.substring(i, o).replace(/:/g, ";") + e.substring(o, e.length);
  }
  for (var a = n.exec(e || ""), s = {}, c = 14; c--;) {
    s[r[c]] = a[c] || "";
  }
  if (-1 != i && -1 != o) {
    s.source = t;
    s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":");
    s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
    s.ipv6uri = !0;
  }
  s.pathNames = function (e, t) {
    var n = t.replace(/\/{2,9}/g, "/").split("/");
    if (!("/" != t.substr(0, 1) && 0 !== t.length)) {
      n.splice(0, 1);
    }
    if ("/" == t.substr(t.length - 1, 1)) {
      n.splice(n.length - 1, 1);
    }
    return n;
  }(0, s.path);
  s.queryKey = function (e, t) {
    var n = {};
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
      if (t) {
        n[t] = r;
      }
    });
    return n;
  }(0, s.query);
  return s;
};