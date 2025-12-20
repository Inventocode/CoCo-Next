/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：5l4u
 */

"use strict"

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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
Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.createWxJsIframeApi = createWxJsIframeApi
exports.createWxJsParentApi = createWxJsParentApi
exports.autoCreateWxJsIframeApi = autoCreateWxJsIframeApi
var base_1 = require("./unnamed-S9_H")
var iframe_1 = require("./unnamed-IKhi")
var result_1 = require("./unnamed-rAiA")
var utils_1 = require("./utils/1-MMZc")
const iframeApiSpec = new base_1.ApiSpec("wxjs", {
  //
})
const parentApiSpec = new base_1.ApiSpec(iframeApiSpec.namespace, {
  captureImage: new base_1.MethodType(),
  startRecord: new base_1.MethodType(),
  stopRecord: new base_1.MethodType(),
  startRecordLimitedOneMin: new base_1.MethodType(),
  playVoice: new base_1.MethodType(),
  pauseVoice: new base_1.MethodType(),
  stopVoice: new base_1.MethodType(),
  uploadVoice: new base_1.MethodType(),
  downloadVoice: new base_1.MethodType(),
  checkJsApi: new base_1.MethodType()
})
function createWxJsIframeApi(handler, options) {
  return (0, iframe_1.createIframeApi)(iframeApiSpec, handler, options)
}
function createWxJsParentApi(handler, options) {
  return (0, iframe_1.createIframeApi)(parentApiSpec, handler, options)
}
function autoCreateWxJsIframeApi(wx, options) {
  const result = createWxJsIframeApi({
    captureImage: () => __awaiter(this, undefined, undefined, function* () {
      return new Promise(resolve => {
        wx.chooseImage({
          count: 1,
          sizeType: ["compressed"],
          sourceType: ["camera"],
          success: res => __awaiter(this, undefined, undefined, function* () {
            const localId = res.localIds[0]
            if (localId) {
              // FIXME: android 可能有问题 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#21
              wx.getLocalImgData({
                localId,
                success: ({
                  localData
                }) => {
                  resolve({
                    status: result_1.Status.Success,
                    body: {
                      dataURL: localData.startsWith("data:image") ? localData : `data:image/jpeg;base64,${localData}`
                    }
                  })
                },
                fail: () => {
                  resolve({
                    status: result_1.Status.Failed,
                    body: {
                      message: "[JsSdkApi:getLocalImgData:Fail]获取本地图片失败"
                    }
                  })
                }
              })
              return
            }
            resolve({
              status: result_1.Status.Failed,
              body: {
                message: "[JsSdkApi:getLocalImgData:Fail]localId no value"
              }
            })
          }),
          cancel: () => {
            resolve({
              status: result_1.Status.Canceled,
              body: {
                message: "[JsSdkApi:chooseImage:Cancel]取消拍照"
              }
            })
          },
          fail: () => {
            resolve({
              status: result_1.Status.Failed,
              body: {
                message: "[JsSdkApi:chooseImage:Fail]拍照失败"
              }
            })
          }
        })
      })
    }),
    startRecord: () => new Promise(resolve => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      wx.startRecord({
        success: () => {
          resolve({
            status: result_1.Status.Success
          })
        },
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:startRecord:Fail]录音失败"
            }
          })
        }
      })
    }),
    stopRecord: () => new Promise(resolve => {
      wx.stopRecord({
        success: res => {
          resolve({
            status: result_1.Status.Success,
            body: {
              localId: res.localId
            }
          })
        },
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:StopRecord:Fail]获取录音资源失败"
            }
          })
        }
      })
    }),
    startRecordLimitedOneMin: () => new Promise(resolve => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      wx.startRecord({
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:startRecord:Fail]录音失败"
            }
          })
        }
      })
      wx.onVoiceRecordEnd({
        complete: res => {
          resolve({
            status: result_1.Status.Success,
            body: {
              localId: res.localId
            }
          })
        },
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:onVoiceRecordEnd:Fail]获取录音资源失败"
            }
          })
        }
      })
    }),
    playVoice: ({
      localId
    }) => new Promise(resolve => {
      wx.playVoice({
        localId,
        success: () => {
          wx.onVoicePlayEnd({
            success: res => {
              if (res.localId === localId) {
                resolve({
                  status: result_1.Status.Success,
                  body: {
                    isComplete: true
                  }
                })
              }
            },
            fail: () => {
              resolve({
                status: result_1.Status.Failed,
                body: {
                  message: "[JsSdkApi:onVoicePlayEnd:Fail]播放录音失败"
                }
              })
            }
          })
        },
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:playVoice:Fail]播放录音失败"
            }
          })
        }
      })
    }),
    pauseVoice: ({
      localId
    }) => {
      wx.pauseVoice({
        localId
      })
    },
    stopVoice: ({
      localId
    }) => {
      wx.stopVoice({
        localId
      })
    },
    uploadVoice: ({
      localId,
      isShowProgressTips = 1
    }) => new Promise(resolve => {
      wx.uploadVoice({
        localId,
        isShowProgressTips,
        success: res => __awaiter(this, undefined, undefined, function* () {
          var _a
          try {
            const response = yield (_a = options === null || options === undefined ? undefined : options.getTemporaryMaterials) === null || _a === undefined ? undefined : _a.call(options, {
              mediaId: res.serverId
            })
            let errMsg
            if ((response === null || response === undefined ? undefined : response.data) instanceof Blob) {
              if (response.data.type.startsWith("audio/")) {
                resolve({
                  status: result_1.Status.Success,
                  body: {
                    serverId: res.serverId,
                    blob: response.data
                  }
                })
                return
              }
              try {
                const resultJson = yield (0, utils_1.blobToJson)(response.data)
                errMsg = resultJson === null || resultJson === undefined ? undefined : resultJson.errmsg
              } catch (error) {
                errMsg = error.message
              }
            } else {
              errMsg = "返回数据类型错误"
            }
            resolve({
              status: result_1.Status.Failed,
              body: {
                message: `[JsSdkApi:uploadVoice:Fail]获取临时素材失败${errMsg ? `, ${errMsg}` : ""}`,
                content: `serverId::${res.serverId}`
              }
            })
          } catch (_b) {
            resolve({
              status: result_1.Status.Failed,
              body: {
                message: "[JsSdkApi:uploadVoice:Fail]获取临时素材失败",
                content: `serverId::${res.serverId}`
              }
            })
          }
        }),
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:uploadVoice:Fail]上传录音失败"
            }
          })
        }
      })
    }),
    downloadVoice: ({
      serverId,
      isShowProgressTips = 1
    }) => new Promise(resolve => {
      wx.downloadVoice({
        serverId,
        isShowProgressTips,
        success: res => {
          resolve({
            status: result_1.Status.Success,
            body: {
              localId: res.localId
            }
          })
        },
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:downloadVoice:Fail]下载录音失败"
            }
          })
        }
      })
    }),
    checkJsApi: ({
      jsApiList
    }) => new Promise(resolve => {
      wx.checkJsApi({
        jsApiList,
        success: res => {
          resolve({
            status: result_1.Status.Success,
            body: {
              checkResult: res.checkResult
            }
          })
        },
        fail: () => {
          resolve({
            status: result_1.Status.Failed,
            body: {
              message: "[JsSdkApi:checkJsApi:Fail]获取接口权限失败"
            }
          })
        }
      })
    })
  }, options)
  return result
}

/***/
