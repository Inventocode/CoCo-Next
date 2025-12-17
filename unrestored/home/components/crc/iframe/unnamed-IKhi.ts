/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：IKhi
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
exports.createIframeApi = createIframeApi
var uuid_1 = require("./uuid/1-DlMc")
var result_1 = require("./unnamed-rAiA")
const _iframeRequest = "_iframe_request"
const _iframeResponse = "_iframe_response"
function createIframeApi(spec, handler, options) {
  const {
    getWindow,
    targetOrigin = "*"
  } = options
  const map = new Map()
  const listener = e => __awaiter(this, undefined, undefined, function* () {
    const {
      data,
      source
    } = e
    const target = getWindow()
    if (!target || !data.signal || !data.id || !data.content) {
      return
    }
    if (data.signal === `${spec.namespace}.${_iframeResponse}`) {
      const promise = map.get(data.id)
      if (promise === null || promise === undefined) {
        undefined
      } else {
        promise.resolve(data.content)
      }
      map.delete(data.id)
      return
    }
    if (data.signal === `${spec.namespace}.${_iframeRequest}` && target === source) {
      const {
        type = "",
        payload = {}
      } = data.content
      const key = type.startsWith(spec.namespace) ? type.slice(spec.namespace.length + 1) : ""
      if (handler[key] instanceof Function) {
        let content
        try {
          content = yield handler[key](payload)
        } catch (error) {
          content = error
        }
        target.postMessage({
          id: data.id,
          signal: `${spec.namespace}.${_iframeResponse}`,
          content
        }, targetOrigin)
      } else {
        target.postMessage({
          id: data.id,
          signal: `${spec.namespace}.${_iframeResponse}`,
          content: {
            status: result_1.Status.Failed,
            message: "Not Implemented"
          }
        }, targetOrigin)
      }
    }
  })
  const api = {}
  for (const key in spec.methods) {
    api[key] = payload => new Promise(resolve => {
      var _a
      const id = (0, uuid_1.v4)()
      if ((_a = getWindow()) === null || _a === undefined) {
        undefined
      } else {
        _a.postMessage({
          id,
          signal: `${spec.namespace}.${_iframeRequest}`,
          content: {
            type: `${spec.namespace}.${key}`,
            payload
          }
        }, targetOrigin)
      }
      map.set(id, {
        resolve
      })
    })
  }
  window.addEventListener("message", listener)
  return {
    api: api,
    dispose: () => {
      map.clear()
      window.removeEventListener("message", listener)
    }
  }
}

/***/
