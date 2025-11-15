/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：593
 */

"use strict"

var r = function () {
  function t() {
    this.segmentCount = -1
    this.fileSize = -1
    this.timestamp = -1
    this.checksum = -1
  }
  t.prototype.getSegmentIndex = function () {
    return this.segmentIndex
  }
  t.prototype.setSegmentIndex = function (t) {
    this.segmentIndex = t
  }
  t.prototype.getFileId = function () {
    return this.fileId
  }
  t.prototype.setFileId = function (t) {
    this.fileId = t
  }
  t.prototype.getOptionalData = function () {
    return this.optionalData
  }
  t.prototype.setOptionalData = function (t) {
    this.optionalData = t
  }
  t.prototype.isLastSegment = function () {
    return this.lastSegment
  }
  t.prototype.setLastSegment = function (t) {
    this.lastSegment = t
  }
  t.prototype.getSegmentCount = function () {
    return this.segmentCount
  }
  t.prototype.setSegmentCount = function (t) {
    this.segmentCount = t
  }
  t.prototype.getSender = function () {
    return this.sender || null
  }
  t.prototype.setSender = function (t) {
    this.sender = t
  }
  t.prototype.getAddressee = function () {
    return this.addressee || null
  }
  t.prototype.setAddressee = function (t) {
    this.addressee = t
  }
  t.prototype.getFileName = function () {
    return this.fileName
  }
  t.prototype.setFileName = function (t) {
    this.fileName = t
  }
  t.prototype.getFileSize = function () {
    return this.fileSize
  }
  t.prototype.setFileSize = function (t) {
    this.fileSize = t
  }
  t.prototype.getChecksum = function () {
    return this.checksum
  }
  t.prototype.setChecksum = function (t) {
    this.checksum = t
  }
  t.prototype.getTimestamp = function () {
    return this.timestamp
  }
  t.prototype.setTimestamp = function (t) {
    this.timestamp = t
  }
  return t
}()
exports.a = r
