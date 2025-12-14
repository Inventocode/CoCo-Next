/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：Slns
 */

"use strict"

/* harmony import */
import * as __WEBPACK_IMPORTED_MODULE_0_qiniu_js__ from "../../../../../../../qiniu-cpGA"
/* harmony import */
import __WEBPACK_IMPORTED_MODULE_0_qiniu_js___default from "../../../../../../../qiniu-cpGA"
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, /* [auto-meaningful-name] */arguments$length = arguments.length; i < arguments$length; i++) {
      s = arguments[i]
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) {
        t[p] = s[p]
      }
    }
    return t
  }
  return __assign.apply(this, arguments)
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value)
    })
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value))
      } catch (e) {
        reject(e)
      }
    }
    function step(result) {
      if (result.done) {
        resolve(result.value)
      } else {
        adopt(result.value).then(fulfilled, rejected)
      }
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) {
        throw t[1]
      }
      return t[1]
    },
    trys: [],
    ops: []
  }
  var f
  var y
  var t
  var g
  g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }
  if (typeof Symbol === "function") {
    g[Symbol.iterator] = function () {
      return this
    }
  }
  return g
  function verb(n) {
    return function (v) {
      return step([n, v])
    }
  }
  function step(op) {
    if (f) {
      throw new TypeError("Generator is already executing.")
    }
    while (_) {
      try {
        f = 1
        if (y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {
          return t
        }
        y = 0
        if (t) {
          op = [op[0] & 2, t.value]
        }
        switch (op[0]) {
          case 0:
          case 1:
            t = op
            break
          case 4:
            _.label++
            return {
              value: op[1],
              done: false
            }
          case 5:
            _.label++
            y = op[1]
            op = [0]
            continue
          case 7:
            op = _.ops.pop()
            _.trys.pop()
            continue
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0
              continue
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1]
              break
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1]
              t = op
              break
            }
            if (t && _.label < t[2]) {
              _.label = t[2]
              _.ops.push(op)
              break
            }
            if (t[2]) {
              _.ops.pop()
            }
            _.trys.pop()
            continue
        }
        op = body.call(thisArg, _)
      } catch (e) {
        op = [6, e]
        y = 0
      } finally {
        f = t = 0
      }
    }
    if (op[0] & 5) {
      throw op[1]
    }
    return {
      value: op[0] ? op[1] : undefined,
      done: true
    }
  }
}
var env = "dev"
var api = "https://dev-open-service.codemao.cn"
var pid = "sysinfo_dev"
var devConfig = {
  env: env,
  api: api,
  pid: pid
}
var env$1 = "staging"
var api$1 = "https://staging-open-service.codemao.cn"
var pid$1 = "sysinfo_dev"
var stagingConfig = {
  env: env$1,
  api: api$1,
  pid: pid$1
}
var env$2 = "prod"
var api$2 = "https://open-service.codemao.cn"
var pid$2 = "sysinfo"
var prodConfig = {
  env: env$2,
  api: api$2,
  pid: pid$2
}
var env$3 = "dev"
var api$3 = "https://test-open-service.codemao.cn"
var pid$3 = "sysinfo_dev"
var testConfig = {
  env: env$3,
  api: api$3,
  pid: pid$3
}
var config = function () {
  var _config = prodConfig
  return {
    init: function (spec) {
      var env$$1 = spec.env
      var customConfig = spec.config
      switch (env$$1) {
        case "dev":
          _config = devConfig
          break
        case "staging":
          _config = stagingConfig
          break
        case "test":
          _config = testConfig
          break
        default:
          _config = prodConfig
          break
      }
      if (customConfig) {
        _config = Object.assign({}, _config, customConfig)
      }
    },
    get: function () {
      return _config
    }
  }
}
var configs = config()
var QiniuUploader = function () {
  function QiniuUploader(file, uploadParams, subObject) {
    this._observer = __WEBPACK_IMPORTED_MODULE_0_qiniu_js__.upload(file, uploadParams.key, uploadParams.token)
    this._subObject = subObject
  }
  QiniuUploader.prototype.start = function () {
    this._subscription = this._observer.subscribe(this._subObject)
  }
  QiniuUploader.prototype.cancel = function () {
    this._subscription.unsubscribe()
  }
  return QiniuUploader
}()
function ajax(url, options) {
  return __awaiter(this, undefined, undefined, function () {
    return __generator(this, function (_a) {
      return [
        2, new Promise(function (resolve, reject) {
          var /* [auto-meaningful-name] */options$async = options.async
          var async = options$async === undefined ? true : options$async
          var /* [auto-meaningful-name] */options$data = options.data
          var data = options$data === undefined ? null : options$data
          var /* [auto-meaningful-name] */options$headers = options.headers
          var headers = options$headers === undefined ? {} : options$headers
          var /* [auto-meaningful-name] */options$method = options.method
          var method = options$method === undefined ? "get" : options$method
          var /* [auto-meaningful-name] */options$timeout = options.timeout
          var timeout = options$timeout === undefined ? 0 : options$timeout
          var onprogress = options.onprogress
          var xhr = new XMLHttpRequest()
          if (options.withCredentials) {
            xhr.withCredentials = true
          }
          xhr.responseType = "json"
          xhr.timeout = timeout
          xhr.ontimeout = function () {
            reject(new Error("the request timeout " + timeout + "ms"))
          }
          xhr.onerror = function () {
            reject(new Error("unknown error"))
          }
          if (xhr.upload && onprogress) {
            xhr.upload.onprogress = onprogress
          }
          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
              } else {
                var err = new Error("this request is error")
                reject(err)
              }
            }
          }
          console.log("xhr type", method)
          xhr.open(method, url, async)
          Object.keys(headers).forEach(function (key) {
            xhr.setRequestHeader(key, headers[key])
          })
          try {
            xhr.send(data)
          } catch (err) {
            reject(err)
          }
        })
      ]
    })
  })
}
var AliUploader = function () {
  function AliUploader() {}
  AliUploader.prototype.upload = function (file, url, aliUploadParams, uploadConfig) {
    return __awaiter(this, undefined, undefined, function () {
      var onprogress
      var timeout
      var formData
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            onprogress = uploadConfig.onprogress
            timeout = uploadConfig.timeout
            formData = new FormData()
            Object.keys(aliUploadParams).forEach(function (key) {
              formData.append(key, aliUploadParams[key])
            })
            formData.append("file", file)
            return [
              4, ajax(url, {
                method: "post",
                data: formData,
                onprogress: onprogress,
                timeout: timeout
              })
            ]
          case 1:
            return [2, _a.sent()]
        }
      })
    })
  }
  return AliUploader
}()
var postLog = function (data, timeout) {
  return __awaiter(undefined, undefined, undefined, function () {
    var uuid
    var logData
    return __generator(this, function (_a) {
      uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var d = new Date().getTime()
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === "x" ? r : r & 0x3 | 0x8).toString(16)
      })
      logData = {
        data: {
          m: {
            d: 1,
            p: "sysinfo"
          },
          b: [
            {
              e: "cdn_upload",
              i: uuid,
              t: parseInt("" + new Date().getTime() / 1000, 10),
              d: {
                data: data
              }
            }
          ]
        },
        type: 0
      }
      return [
        2, ajax("https://collection.codemao.cn/report/" + configs.get().pid, {
          method: "post",
          data: JSON.stringify(logData),
          timeout: timeout || 20000
        })
      ]
    })
  })
}
var fetchAliToken = function (query, authToken) {
  return __awaiter(undefined, undefined, undefined, function () {
    var tokenUrl
    var headers
    var res
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          tokenUrl = configs.get().api + "/cdn/qi-niu/tokens/uploading"
          headers = {}
          if (authToken) {
            headers["Authorization"] = authToken
          }
          return [
            4, ajax(parseQueryString(tokenUrl, __assign(__assign({}, query), {
              cdnName: "aliyun"
            })), {
              headers: headers,
              withCredentials: true
            })
          ]
        case 1:
          res = _a.sent()
          return [
            2, {
              accessKey: res.tokens[0].access_key,
              encodedPolicy: res.tokens[0].policy,
              bucketUrl: res.bucket_url,
              uploadUrl: res.upload_url,
              filename: res.tokens[0].file_path,
              token: res.tokens[0].token,
              bucket: res.bucket
            }
          ]
      }
    })
  })
}
var fetchQiniuToken = function (type, query, authToken) {
  return __awaiter(undefined, undefined, undefined, function () {
    var urlList
    var tokenUrl
    var headers
    var res
    var file_path
    var token
    var bucket_url
    var bucket
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          urlList = {
            normal: configs.get().api + "/cdn/qi-niu/tokens/uploading",
            transcode: configs.get().api + "/cdn/qi-niu/tokens/videos/transcoding",
            slice: configs.get().api + "/cdn/qi-niu/tokens/videos"
          }
          tokenUrl = urlList[type]
          headers = {}
          if (authToken) {
            headers["Authorization"] = authToken
          }
          return [
            4, ajax(parseQueryString(tokenUrl, __assign(__assign({}, query), {
              cdnName: "qiniu"
            })), {
              headers: headers,
              withCredentials: true
            })
          ]
        case 1:
          res = _a.sent()
          if (type === "normal") {
            return [
              2, {
                filePath: res.tokens[0].file_path,
                token: res.tokens[0].token,
                bucketUrl: res.bucket_url,
                bucket: res.bucket
              }
            ]
          }
          file_path = res.file_path
          token = res.token
          bucket_url = res.bucket_url
          bucket = res.bucket
          if (type === "transcode") {
            return [
              2, {
                filePath: file_path,
                token: token,
                bucketUrl: bucket_url,
                bucket: bucket,
                transcodePath: res.transcode_path
              }
            ]
          }
          return [
            2, {
              filePath: file_path,
              token: token,
              bucketUrl: bucket_url,
              bucket: bucket,
              m3u8Path: res.m3u8_file_path
            }
          ]
      }
    })
  })
}
var parseQueryString = function (url, query) {
  var queryStr = Object.keys(query).filter(function (key) {
    return typeof query[key] !== "undefined"
  }).map(function (key) {
    return key + "=" + query[key]
  }).join("&")
  return url + "?" + queryStr
}
var CDNClient = function () {
  function CDNClient(spec) {
    this.ali = new AliUploader()
    this.region = "hd"
    this.projectName = spec.projectName
    if (spec.region) {
      this.region = spec.region
    }
    configs.init(spec)
  }
  CDNClient.prototype.create = function (file, options) {
    return __awaiter(this, undefined, undefined, function () {
      var onprogress
      var /* [auto-meaningful-name] */options$timeout
      var timeout
      var onsuccess
      var onerror
      var persistentOption
      var insertOnly
      var filename
      var tokenQuery
      var tokenData_1
      var bucketUrl_1
      var token
      var filePath_1
      var bucket_1
      var error_1
      var _this = this
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            onprogress = options.onprogress
            options$timeout = options.timeout
            timeout = options$timeout === undefined ? 200000 : options$timeout
            onsuccess = options.onsuccess
            onerror = options.onerror
            persistentOption = options.persistentOption
            insertOnly = options.insertOnly
            if (!file) {
              if (onerror) {
                onerror("文件不允许为空！")
              }
              return [2]
            }
            filename = options.filename || file.name || Date.now() + "." + (file.type || "")
            tokenQuery = {
              projectName: this.projectName,
              filePaths: filename,
              filePath: filename,
              tokensCount: 1,
              fileSign: "p1",
              insertOnly: typeof insertOnly === "undefined" ? true : insertOnly,
              persistentOption: persistentOption
            }
            _b.label = 1
          case 1:
            _b.trys.push([1, 3,, 4])
            return [4, fetchQiniuToken(options.type || "normal", tokenQuery, options.authToken)]
          case 2:
            tokenData_1 = _b.sent()
            bucketUrl_1 = tokenData_1.bucketUrl
            token = tokenData_1.token
            filePath_1 = tokenData_1.filePath
            bucket_1 = tokenData_1.bucket
            this._subObject = {
              next: function (progress) {
                if (onprogress) {
                  onprogress(progress)
                }
              },
              error: function (err) {
                return __awaiter(_this, undefined, undefined, function () {
                  var res
                  var bucketUrl_2
                  var accessKey
                  var encodedPolicy
                  var filename_1
                  var token_1
                  var uploadUrl
                  var bucket_2
                  var fileUrl
                  var error_2
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        _a.trys.push([0, 3,, 4])
                        return [4, fetchAliToken(tokenQuery, options.authToken)]
                      case 1:
                        res = _a.sent()
                        bucketUrl_2 = res.bucketUrl
                        accessKey = res.accessKey
                        encodedPolicy = res.encodedPolicy
                        filename_1 = res.filename
                        token_1 = res.token
                        uploadUrl = res.uploadUrl
                        bucket_2 = res.bucket
                        return [
                          4, this.ali.upload(file, uploadUrl, {
                            key: filename_1,
                            policy: encodedPolicy,
                            OSSAccessKeyId: accessKey,
                            success_action_status: 200,
                            signature: token_1,
                            bucket: bucket_2
                          }, {
                            onprogress: onprogress,
                            timeout: timeout
                          })
                        ]
                      case 2:
                        _a.sent()
                        fileUrl = "" + bucketUrl_2 + filename_1
                        postLog([
                          {
                            cdn: "qiniu",
                            bucket: bucket_2,
                            file_path: filename_1,
                            region: "hd",
                            source: "",
                            status: 0
                          }, {
                            cdn: "aliyun",
                            bucket: bucket_2,
                            file_path: filename_1,
                            region: "hd",
                            source: fileUrl,
                            status: 1
                          }
                        ])
                        if (onsuccess) {
                          onsuccess({
                            url: fileUrl,
                            filename: filename_1
                          })
                        }
                        return [3, 4]
                      case 3:
                        error_2 = _a.sent()
                        if (onerror) {
                          onerror(error_2)
                        }
                        return [3, 4]
                      case 4:
                        return [2]
                    }
                  })
                })
              },
              complete: function (res) {
                var fileUrl = bucketUrl_1 + filePath_1
                postLog([
                  {
                    cdn: "qiniu",
                    bucket: bucket_1,
                    file_path: filePath_1,
                    region: _this.region,
                    source: fileUrl,
                    status: 1
                  }
                ])
                var returnData = {
                  url: fileUrl,
                  filename: filename,
                  hash: res.hash
                }
                if (options.type === "transcode") {
                  var transcodeUrl = "" + bucketUrl_1 + tokenData_1.transcodePath
                  postLog([
                    {
                      cdn: "qiniu",
                      bucket: bucketUrl_1,
                      file_path: tokenData_1.transcodePath,
                      region: "hd",
                      source: transcodeUrl,
                      status: 1
                    }
                  ])
                  returnData["transcodeUrl"] = transcodeUrl
                }
                if (options.type === "slice") {
                  returnData["sliceUrl"] = "" + bucketUrl_1 + tokenData_1.m3u8Path
                }
                console.log("done", res)
                if (onsuccess) {
                  onsuccess(returnData)
                }
              }
            }
            return [
              2, new QiniuUploader(file, {
                key: filePath_1,
                token: token
              }, this._subObject)
            ]
          case 3:
            error_1 = _b.sent()
            console.log(error_1)
            if (onerror) {
              onerror(error_1)
            }
            return [2]
          case 4:
            return [2]
        }
      })
    })
  }
  return CDNClient
}()

/* harmony default export */
export default CDNClient
/***/
