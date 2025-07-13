"use strict";

import * as r from "./1451";
var i = function () {
  return (i = Object.assign || function (e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i];
      }
    }
    return e;
  }).apply(this, arguments);
};
function o(e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e));
      } catch (t) {
        o(t);
      }
    }
    function s(e) {
      try {
        c(r.throw(e));
      } catch (t) {
        o(t);
      }
    }
    function c(e) {
      var t;
      if (e.done) {
        i(e.value);
      } else {
        (t = e.value, t instanceof n ? t : new n(function (e) {
          e(t);
        })).then(a, s);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function a(e, t) {
  var n;
  var r;
  var i;
  var o;
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1];
      }
      return i[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  };
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this;
    };
  }
  return o;
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.");
        }
        for (; a;) {
          try {
            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i;
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o;
                break;
              case 4:
                a.label++;
                return {
                  value: o[1],
                  done: !1
                };
              case 5:
                a.label++;
                r = o[1];
                o = [0];
                continue;
              case 7:
                o = a.ops.pop();
                a.trys.pop();
                continue;
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1];
                  i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2];
                  a.ops.push(o);
                  break;
                }
                if (i[2]) {
                  a.ops.pop();
                }
                a.trys.pop();
                continue;
            }
            o = t.call(e, a);
          } catch (s) {
            o = [6, s];
            r = 0;
          } finally {
            n = i = 0;
          }
        }
        if (5 & o[0]) {
          throw o[1];
        }
        return {
          value: o[0] ? o[1] : void 0,
          done: !0
        };
      }([o, s]);
    };
  }
}
var s = {
  env: "dev",
  api: "https://dev-open-service.codemao.cn",
  pid: "sysinfo_dev"
};
var c = {
  env: "staging",
  api: "https://staging-open-service.codemao.cn",
  pid: "sysinfo_dev"
};
var u = {
  env: "prod",
  api: "https://open-service.codemao.cn",
  pid: "sysinfo"
};
var l = {
  env: "dev",
  api: "https://test-open-service.codemao.cn",
  pid: "sysinfo_dev"
};
var f = function () {
  var e = u;
  return {
    init: function (t) {
      var n = t.env;
      var r = t.config;
      switch (n) {
        case "dev":
          e = s;
          break;
        case "staging":
          e = c;
          break;
        case "test":
          e = l;
          break;
        default:
          e = u;
      }
      if (r) {
        e = Object.assign({}, e, r);
      }
    },
    get: function () {
      return e;
    }
  };
}();
var h = function () {
  function e(e, t, n) {
    this._observer = Object(r.upload)(e, t.key, t.token);
    this._subObject = n;
  }
  e.prototype.start = function () {
    this._subscription = this._observer.subscribe(this._subObject);
  };
  e.prototype.cancel = function () {
    this._subscription.unsubscribe();
  };
  return e;
}();
function d(e, t) {
  return o(this, void 0, void 0, function () {
    return a(this, function (n) {
      return [2, new Promise(function (n, r) {
        var i = t.async;
        var o = void 0 === i || i;
        var a = t.data;
        var s = void 0 === a ? null : a;
        var c = t.headers;
        var u = void 0 === c ? {} : c;
        var l = t.method;
        var f = void 0 === l ? "get" : l;
        var h = t.timeout;
        var d = void 0 === h ? 0 : h;
        var p = t.onprogress;
        var _ = new XMLHttpRequest();
        if (t.withCredentials) {
          _.withCredentials = !0;
        }
        _.responseType = "json";
        _.timeout = d;
        _.ontimeout = function () {
          r(new Error("the request timeout " + d + "ms"));
        };
        _.onerror = function () {
          r(new Error("unknown error"));
        };
        if (_.upload && p) {
          _.upload.onprogress = p;
        }
        _.onreadystatechange = function () {
          if (4 === _.readyState) {
            if (_.status >= 200 && _.status < 300) {
              n(_.response);
            } else {
              var e = new Error("this request is error");
              r(e);
            }
          }
        };
        console.log("xhr type", f);
        _.open(f, e, o);
        Object.keys(u).forEach(function (e) {
          _.setRequestHeader(e, u[e]);
        });
        try {
          _.send(s);
        } catch (A) {
          r(A);
        }
      })];
    });
  });
}
var p = function () {
  function e() {}
  e.prototype.upload = function (e, t, n, r) {
    return o(this, void 0, void 0, function () {
      var i;
      var o;
      var s;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            i = r.onprogress;
            o = r.timeout;
            s = new FormData();
            Object.keys(n).forEach(function (e) {
              s.append(e, n[e]);
            });
            s.append("file", e);
            return [4, d(t, {
              method: "post",
              data: s,
              onprogress: i,
              timeout: o
            })];
          case 1:
            return [2, a.sent()];
        }
      });
    });
  };
  return e;
}();
var _ = function (e, t) {
  return o(void 0, void 0, void 0, function () {
    var n;
    var r;
    return a(this, function (i) {
      n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = new Date().getTime();
        var n = (t + 16 * Math.random()) % 16 | 0;
        t = Math.floor(t / 16);
        return ("x" === e ? n : 3 & n | 8).toString(16);
      });
      r = {
        data: {
          m: {
            d: 1,
            p: "sysinfo"
          },
          b: [{
            e: "cdn_upload",
            i: n,
            t: parseInt("" + new Date().getTime() / 1e3, 10),
            d: {
              data: e
            }
          }]
        },
        type: 0
      };
      return [2, d("https://collection.codemao.cn/report/" + f.get().pid, {
        method: "post",
        data: JSON.stringify(r),
        timeout: t || 2e4
      })];
    });
  });
};
var A = function (e, t) {
  return o(void 0, void 0, void 0, function () {
    var n;
    var r;
    var o;
    return a(this, function (a) {
      switch (a.label) {
        case 0:
          n = f.get().api + "/cdn/qi-niu/tokens/uploading";
          r = {};
          if (t) {
            r.Authorization = t;
          }
          return [4, d(g(n, i(i({}, e), {
            cdnName: "aliyun"
          })), {
            headers: r,
            withCredentials: !0
          })];
        case 1:
          return [2, {
            accessKey: (o = a.sent()).tokens[0].access_key,
            encodedPolicy: o.tokens[0].policy,
            bucketUrl: o.bucket_url,
            uploadUrl: o.upload_url,
            filename: o.tokens[0].file_path,
            token: o.tokens[0].token,
            bucket: o.bucket
          }];
      }
    });
  });
};
var g = function (e, t) {
  return e + "?" + Object.keys(t).filter(function (e) {
    return "undefined" !== typeof t[e];
  }).map(function (e) {
    return e + "=" + t[e];
  }).join("&");
};
var v = function () {
  function e(e) {
    this.ali = new p();
    this.region = "hd";
    this.projectName = e.projectName;
    if (e.region) {
      this.region = e.region;
    }
    f.init(e);
  }
  e.prototype.create = function (e, t) {
    return o(this, void 0, void 0, function () {
      var n;
      var r;
      var s;
      var c;
      var u;
      var l;
      var p;
      var v;
      var m;
      var y;
      var b;
      var w;
      var E;
      var x;
      var C;
      var O = this;
      return a(this, function (S) {
        switch (S.label) {
          case 0:
            if (n = t.onprogress, r = t.timeout, s = void 0 === r ? 2e5 : r, c = t.onsuccess, u = t.onerror, l = t.persistentOption, p = t.insertOnly, !e) {
              if (u) {
                u("\u6587\u4ef6\u4e0d\u5141\u8bb8\u4e3a\u7a7a\uff01");
              }
              return [2];
            }
            v = t.filename || e.name || Date.now() + "." + (e.type || "");
            m = {
              projectName: this.projectName,
              filePaths: v,
              filePath: v,
              tokensCount: 1,
              fileSign: "p1",
              insertOnly: "undefined" === typeof p || p,
              persistentOption: l
            };
            S.label = 1;
          case 1:
            S.trys.push([1, 3,, 4]);
            return [4, (k = t.type || "normal", T = m, B = t.authToken, o(void 0, void 0, void 0, function () {
              var e;
              var t;
              var n;
              var r;
              var o;
              var s;
              var c;
              var u;
              return a(this, function (a) {
                switch (a.label) {
                  case 0:
                    e = {
                      normal: f.get().api + "/cdn/qi-niu/tokens/uploading",
                      transcode: f.get().api + "/cdn/qi-niu/tokens/videos/transcoding",
                      slice: f.get().api + "/cdn/qi-niu/tokens/videos"
                    };
                    t = e[k];
                    n = {};
                    if (B) {
                      n.Authorization = B;
                    }
                    return [4, d(g(t, i(i({}, T), {
                      cdnName: "qiniu"
                    })), {
                      headers: n,
                      withCredentials: !0
                    })];
                  case 1:
                    r = a.sent();
                    return "normal" === k ? [2, {
                      filePath: r.tokens[0].file_path,
                      token: r.tokens[0].token,
                      bucketUrl: r.bucket_url,
                      bucket: r.bucket
                    }] : (o = r.file_path, s = r.token, c = r.bucket_url, u = r.bucket, "transcode" === k ? [2, {
                      filePath: o,
                      token: s,
                      bucketUrl: c,
                      bucket: u,
                      transcodePath: r.transcode_path
                    }] : [2, {
                      filePath: o,
                      token: s,
                      bucketUrl: c,
                      bucket: u,
                      m3u8Path: r.m3u8_file_path
                    }]);
                }
              });
            }))];
          case 2:
            y = S.sent();
            b = y.bucketUrl;
            w = y.token;
            E = y.filePath;
            x = y.bucket;
            this._subObject = {
              next: function (e) {
                if (n) {
                  n(e);
                }
              },
              error: function (r) {
                return o(O, void 0, void 0, function () {
                  var r;
                  var i;
                  var o;
                  var l;
                  var f;
                  var h;
                  var d;
                  var p;
                  var g;
                  var v;
                  return a(this, function (a) {
                    switch (a.label) {
                      case 0:
                        a.trys.push([0, 3,, 4]);
                        return [4, A(m, t.authToken)];
                      case 1:
                        r = a.sent();
                        i = r.bucketUrl;
                        o = r.accessKey;
                        l = r.encodedPolicy;
                        f = r.filename;
                        h = r.token;
                        d = r.uploadUrl;
                        p = r.bucket;
                        return [4, this.ali.upload(e, d, {
                          key: f,
                          policy: l,
                          OSSAccessKeyId: o,
                          success_action_status: 200,
                          signature: h,
                          bucket: p
                        }, {
                          onprogress: n,
                          timeout: s
                        })];
                      case 2:
                        a.sent();
                        _([{
                          cdn: "qiniu",
                          bucket: p,
                          file_path: f,
                          region: "hd",
                          source: "",
                          status: 0
                        }, {
                          cdn: "aliyun",
                          bucket: p,
                          file_path: f,
                          region: "hd",
                          source: g = "" + i + f,
                          status: 1
                        }]);
                        if (c) {
                          c({
                            url: g,
                            filename: f
                          });
                        }
                        return [3, 4];
                      case 3:
                        v = a.sent();
                        if (u) {
                          u(v);
                        }
                        return [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              },
              complete: function (e) {
                var n = b + E;
                _([{
                  cdn: "qiniu",
                  bucket: x,
                  file_path: E,
                  region: O.region,
                  source: n,
                  status: 1
                }]);
                var r = {
                  url: n,
                  filename: v,
                  hash: e.hash
                };
                if ("transcode" === t.type) {
                  var i = "" + b + y.transcodePath;
                  _([{
                    cdn: "qiniu",
                    bucket: b,
                    file_path: y.transcodePath,
                    region: "hd",
                    source: i,
                    status: 1
                  }]);
                  r.transcodeUrl = i;
                }
                if ("slice" === t.type) {
                  r.sliceUrl = "" + b + y.m3u8Path;
                }
                console.log("done", e);
                if (c) {
                  c(r);
                }
              }
            };
            return [2, new h(e, {
              key: E,
              token: w
            }, this._subObject)];
          case 3:
            C = S.sent();
            console.log(C);
            if (u) {
              u(C);
            }
            return [2];
          case 4:
            return [2];
        }
        var k;
        var T;
        var B;
      });
    });
  };
  return e;
}();
export { v as a };