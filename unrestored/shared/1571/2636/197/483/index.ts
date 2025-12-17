/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：483
 */

"use strict"

var r = require("./1499")
var i = function () {
  return (i = Object.assign || function (e) {
    for (var t, n = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; n < arguments$length; n++) {
      for (var i in t = arguments[n]) if (Object.prototype.hasOwnProperty.call(t, i)) {
        e[i] = t[i]
      }
    }
    return e
  }).apply(this, arguments)
}
function o(e, t, n, r) {
  return new (n || (n = Promise))(function (i, o) {
    function a(e) {
      try {
        c(r.next(e))
      } catch (t) {
        o(t)
      }
    }
    function s(e) {
      try {
        c(r.throw(e))
      } catch (t) {
        o(t)
      }
    }
    function c(e) {
      var /* [auto-meaningful-name] */e$value
      if (e.done) {
        i(e.value)
      } else {
        (e$value = e.value, e$value instanceof n ? e$value : new n(function (e) {
          e(e$value)
        })).then(a, s)
      }
    }
    c((r = r.apply(e, t || [])).next())
  })
}
function a(e, t) {
  var n
  var r
  var i
  var o
  var a = {
    label: 0,
    sent: function () {
      if (1 & i[0]) {
        throw i[1]
      }
      return i[1]
    },
    trys: [],
    ops: []
  }
  o = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }
  if ("function" === typeof Symbol) {
    o[Symbol.iterator] = function () {
      return this
    }
  }
  return o
  function s(o) {
    return function (s) {
      return function (o) {
        if (n) {
          throw new TypeError("Generator is already executing.")
        }
        for (; a;) {
          try {
            n = 1
            if (r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) {
              return i
            }
            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
              case 0:
              case 1:
                i = o
                break
              case 4:
                a.label++
                return {
                  value: o[1],
                  done: false
                }
              case 5:
                a.label++
                r = o[1]
                o = [0]
                continue
              case 7:
                o = a.ops.pop()
                a.trys.pop()
                continue
              default:
                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                  a = 0
                  continue
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1]
                  break
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1]
                  i = o
                  break
                }
                if (i && a.label < i[2]) {
                  a.label = i[2]
                  a.ops.push(o)
                  break
                }
                if (i[2]) {
                  a.ops.pop()
                }
                a.trys.pop()
                continue
            }
            o = t.call(e, a)
          } catch (s) {
            o = [6, s]
            r = 0
          } finally {
            n = i = 0
          }
        }
        if (5 & o[0]) {
          throw o[1]
        }
        return {
          value: o[0] ? o[1] : undefined,
          done: true
        }
      }([o, s])
    }
  }
}
var s = {
  env: "dev",
  api: "https://dev-open-service.codemao.cn",
  pid: "sysinfo_dev"
}
var c = {
  env: "staging",
  api: "https://staging-open-service.codemao.cn",
  pid: "sysinfo_dev"
}
var u = {
  env: "prod",
  api: "https://open-service.codemao.cn",
  pid: "sysinfo"
}
var l = {
  env: "dev",
  api: "https://test-open-service.codemao.cn",
  pid: "sysinfo_dev"
}
var f = function () {
  var e = u
  return {
    init: function (t) {
      var /* [auto-meaningful-name] */t$env = t.env
      var /* [auto-meaningful-name] */t$config = t.config
      switch (t$env) {
        case "dev":
          e = s
          break
        case "staging":
          e = c
          break
        case "test":
          e = l
          break
        default:
          e = u
      }
      if (t$config) {
        e = Object.assign({}, e, t$config)
      }
    },
    get: function () {
      return e
    }
  }
}()
var d = function () {
  function e(e, t, n) {
    this._observer = r.upload(e, t.key, t.token)
    this._subObject = n
  }
  e.prototype.start = function () {
    this._subscription = this._observer.subscribe(this._subObject)
  }
  e.prototype.cancel = function () {
    this._subscription.unsubscribe()
  }
  return e
}()
function h(e, t) {
  return o(this, undefined, undefined, function () {
    return a(this, function (n) {
      return [
        2, new Promise(function (n, r) {
          var /* [auto-meaningful-name] */t$async = t.async
          var o = undefined === t$async || t$async
          var /* [auto-meaningful-name] */t$data = t.data
          var s = undefined === t$data ? null : t$data
          var /* [auto-meaningful-name] */t$headers = t.headers
          var u = undefined === t$headers ? {} : t$headers
          var /* [auto-meaningful-name] */t$method = t.method
          var f = undefined === t$method ? "get" : t$method
          var /* [auto-meaningful-name] */t$timeout = t.timeout
          var h = undefined === t$timeout ? 0 : t$timeout
          var /* [auto-meaningful-name] */t$onprogress = t.onprogress
          var _ = new XMLHttpRequest()
          if (t.withCredentials) {
            _.withCredentials = true
          }
          _.responseType = "json"
          _.timeout = h
          _.ontimeout = function () {
            r(new Error("the request timeout " + h + "ms"))
          }
          _.onerror = function () {
            r(new Error("unknown error"))
          }
          if (_.upload && t$onprogress) {
            _.upload.onprogress = t$onprogress
          }
          _.onreadystatechange = function () {
            if (4 === _.readyState) {
              if (_.status >= 200 && _.status < 300) {
                n(_.response)
              } else {
                var e = new Error("this request is error")
                r(e)
              }
            }
          }
          console.log("xhr type", f)
          _.open(f, e, o)
          Object.keys(u).forEach(function (e) {
            _.setRequestHeader(e, u[e])
          })
          try {
            _.send(s)
          } catch (A) {
            r(A)
          }
        })
      ]
    })
  })
}
var p = function () {
  function e() {}
  e.prototype.upload = function (e, t, n, r) {
    return o(this, undefined, undefined, function () {
      var /* [auto-meaningful-name] */r$onprogress
      var /* [auto-meaningful-name] */r$timeout
      var s
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            r$onprogress = r.onprogress
            r$timeout = r.timeout
            s = new FormData()
            Object.keys(n).forEach(function (e) {
              s.append(e, n[e])
            })
            s.append("file", e)
            return [
              4, h(t, {
                method: "post",
                data: s,
                onprogress: r$onprogress,
                timeout: r$timeout
              })
            ]
          case 1:
            return [2, a.sent()]
        }
      })
    })
  }
  return e
}()
var _ = function (e, t) {
  return o(undefined, undefined, undefined, function () {
    var n
    var r
    return a(this, function (i) {
      n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = new Date().getTime()
        var n = (t + 16 * Math.random()) % 16 | 0
        t = Math.floor(t / 16)
        return ("x" === e ? n : 3 & n | 8).toString(16)
      })
      r = {
        data: {
          m: {
            d: 1,
            p: "sysinfo"
          },
          b: [
            {
              e: "cdn_upload",
              i: n,
              t: parseInt("" + new Date().getTime() / 1e3, 10),
              d: {
                data: e
              }
            }
          ]
        },
        type: 0
      }
      return [
        2, h("https://collection.codemao.cn/report/" + f.get().pid, {
          method: "post",
          data: JSON.stringify(r),
          timeout: t || 2e4
        })
      ]
    })
  })
}
var A = function (e, t) {
  return o(undefined, undefined, undefined, function () {
    var n
    var r
    var o
    return a(this, function (a) {
      switch (a.label) {
        case 0:
          n = f.get().api + "/cdn/qi-niu/tokens/uploading"
          r = {}
          if (t) {
            r.Authorization = t
          }
          return [
            4, h(g(n, i(i({}, e), {
              cdnName: "aliyun"
            })), {
              headers: r,
              withCredentials: true
            })
          ]
        case 1:
          return [
            2, {
              accessKey: (o = a.sent()).tokens[0].access_key,
              encodedPolicy: o.tokens[0].policy,
              bucketUrl: o.bucket_url,
              uploadUrl: o.upload_url,
              filename: o.tokens[0].file_path,
              token: o.tokens[0].token,
              bucket: o.bucket
            }
          ]
      }
    })
  })
}
var g = function (e, t) {
  return e + "?" + Object.keys(t).filter(function (e) {
    return "undefined" !== typeof t[e]
  }).map(function (e) {
    return e + "=" + t[e]
  }).join("&")
}
var v = function () {
  function e(e) {
    this.ali = new p()
    this.region = "hd"
    this.projectName = e.projectName
    if (e.region) {
      this.region = e.region
    }
    f.init(e)
  }
  e.prototype.create = function (e, t) {
    return o(this, undefined, undefined, function () {
      var /* [auto-meaningful-name] */t$onprogress
      var /* [auto-meaningful-name] */t$timeout
      var s
      var /* [auto-meaningful-name] */t$onsuccess
      var /* [auto-meaningful-name] */t$onerror
      var /* [auto-meaningful-name] */t$persistentOption
      var /* [auto-meaningful-name] */t$insertOnly
      var v
      var m
      var y
      var /* [auto-meaningful-name] */y$bucketUrl
      var /* [auto-meaningful-name] */y$token
      var /* [auto-meaningful-name] */y$filePath
      var /* [auto-meaningful-name] */y$bucket
      var C
      var O = this
      return a(this, function (k) {
        switch (k.label) {
          case 0:
            if (t$onprogress = t.onprogress, t$timeout = t.timeout, s = undefined === t$timeout ? 2e5 : t$timeout, t$onsuccess = t.onsuccess, t$onerror = t.onerror, t$persistentOption = t.persistentOption, t$insertOnly = t.insertOnly, !e) {
              if (t$onerror) {
                t$onerror("文件不允许为空！")
              }
              return [2]
            }
            v = t.filename || e.name || Date.now() + "." + (e.type || "")
            m = {
              projectName: this.projectName,
              filePaths: v,
              filePath: v,
              tokensCount: 1,
              fileSign: "p1",
              insertOnly: "undefined" === typeof t$insertOnly || t$insertOnly,
              persistentOption: t$persistentOption
            }
            k.label = 1
          case 1:
            k.trys.push([1, 3,, 4])
            return [
              4, (S = t.type || "normal", T = m, t$authToken = t.authToken, o(undefined, undefined, undefined, function () {
                var e
                var t
                var n
                var r
                var /* [auto-meaningful-name] */r$file_path
                var /* [auto-meaningful-name] */r$token
                var /* [auto-meaningful-name] */r$bucket_url
                var /* [auto-meaningful-name] */r$bucket
                return a(this, function (a) {
                  switch (a.label) {
                    case 0:
                      e = {
                        normal: f.get().api + "/cdn/qi-niu/tokens/uploading",
                        transcode: f.get().api + "/cdn/qi-niu/tokens/videos/transcoding",
                        slice: f.get().api + "/cdn/qi-niu/tokens/videos"
                      }
                      t = e[S]
                      n = {}
                      if (t$authToken) {
                        n.Authorization = t$authToken
                      }
                      return [
                        4, h(g(t, i(i({}, T), {
                          cdnName: "qiniu"
                        })), {
                          headers: n,
                          withCredentials: true
                        })
                      ]
                    case 1:
                      r = a.sent()
                      return "normal" === S ? [
                        2, {
                          filePath: r.tokens[0].file_path,
                          token: r.tokens[0].token,
                          bucketUrl: r.bucket_url,
                          bucket: r.bucket
                        }
                      ] : (r$file_path = r.file_path, r$token = r.token, r$bucket_url = r.bucket_url, r$bucket = r.bucket, "transcode" === S ? [
                        2, {
                          filePath: r$file_path,
                          token: r$token,
                          bucketUrl: r$bucket_url,
                          bucket: r$bucket,
                          transcodePath: r.transcode_path
                        }
                      ] : [
                        2, {
                          filePath: r$file_path,
                          token: r$token,
                          bucketUrl: r$bucket_url,
                          bucket: r$bucket,
                          m3u8Path: r.m3u8_file_path
                        }
                      ])
                  }
                })
              }))
            ]
          case 2:
            y = k.sent()
            y$bucketUrl = y.bucketUrl
            y$token = y.token
            y$filePath = y.filePath
            y$bucket = y.bucket
            this._subObject = {
              next: function (e) {
                if (t$onprogress) {
                  t$onprogress(e)
                }
              },
              error: function (r) {
                return o(O, undefined, undefined, function () {
                  var r
                  var /* [auto-meaningful-name] */r$bucketUrl
                  var /* [auto-meaningful-name] */r$accessKey
                  var /* [auto-meaningful-name] */r$encodedPolicy
                  var /* [auto-meaningful-name] */r$filename
                  var /* [auto-meaningful-name] */r$token
                  var /* [auto-meaningful-name] */r$uploadUrl
                  var /* [auto-meaningful-name] */r$bucket
                  var g
                  var v
                  return a(this, function (a) {
                    switch (a.label) {
                      case 0:
                        a.trys.push([0, 3,, 4])
                        return [4, A(m, t.authToken)]
                      case 1:
                        r = a.sent()
                        r$bucketUrl = r.bucketUrl
                        r$accessKey = r.accessKey
                        r$encodedPolicy = r.encodedPolicy
                        r$filename = r.filename
                        r$token = r.token
                        r$uploadUrl = r.uploadUrl
                        r$bucket = r.bucket
                        return [
                          4, this.ali.upload(e, r$uploadUrl, {
                            key: r$filename,
                            policy: r$encodedPolicy,
                            OSSAccessKeyId: r$accessKey,
                            success_action_status: 200,
                            signature: r$token,
                            bucket: r$bucket
                          }, {
                            onprogress: t$onprogress,
                            timeout: s
                          })
                        ]
                      case 2:
                        a.sent()
                        _([
                          {
                            cdn: "qiniu",
                            bucket: r$bucket,
                            file_path: r$filename,
                            region: "hd",
                            source: "",
                            status: 0
                          }, {
                            cdn: "aliyun",
                            bucket: r$bucket,
                            file_path: r$filename,
                            region: "hd",
                            source: g = "" + r$bucketUrl + r$filename,
                            status: 1
                          }
                        ])
                        if (t$onsuccess) {
                          t$onsuccess({
                            url: g,
                            filename: r$filename
                          })
                        }
                        return [3, 4]
                      case 3:
                        v = a.sent()
                        if (t$onerror) {
                          t$onerror(v)
                        }
                        return [3, 4]
                      case 4:
                        return [2]
                    }
                  })
                })
              },
              complete: function (e) {
                var n = y$bucketUrl + y$filePath
                _([
                  {
                    cdn: "qiniu",
                    bucket: y$bucket,
                    file_path: y$filePath,
                    region: O.region,
                    source: n,
                    status: 1
                  }
                ])
                var r = {
                  url: n,
                  filename: v,
                  hash: e.hash
                }
                if ("transcode" === t.type) {
                  var i = "" + y$bucketUrl + y.transcodePath
                  _([
                    {
                      cdn: "qiniu",
                      bucket: y$bucketUrl,
                      file_path: y.transcodePath,
                      region: "hd",
                      source: i,
                      status: 1
                    }
                  ])
                  r.transcodeUrl = i
                }
                if ("slice" === t.type) {
                  r.sliceUrl = "" + y$bucketUrl + y.m3u8Path
                }
                console.log("done", e)
                if (t$onsuccess) {
                  t$onsuccess(r)
                }
              }
            }
            return [
              2, new d(e, {
                key: y$filePath,
                token: y$token
              }, this._subObject)
            ]
          case 3:
            C = k.sent()
            console.log(C)
            if (t$onerror) {
              t$onerror(C)
            }
            return [2]
          case 4:
            return [2]
        }
        var S
        var T
        var /* [auto-meaningful-name] */t$authToken
      })
    })
  }
  return e
}()
exports.a = v
