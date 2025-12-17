/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：S9/H
 */

"use strict"

Object.defineProperty(exports, "__esModule", {
  value: true
})
exports.ApiSpec = exports.MethodType = undefined
class MethodType {
  constructor() {
    this.params = MethodType.placeholder
    this.result = MethodType.placeholder
  }
}
exports.MethodType = MethodType
class ApiSpec {
  constructor(namespace, methods) {
    this.namespace = namespace
    this.methods = methods
  }
}
exports.ApiSpec = ApiSpec

/***/
