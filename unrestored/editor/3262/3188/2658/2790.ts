"use strict";

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.getEnv = function () {
  return Object({
    NODE_ENV: "production",
    PUBLIC_URL: "",
    WDS_SOCKET_HOST: void 0,
    WDS_SOCKET_PATH: void 0,
    WDS_SOCKET_PORT: void 0
  }).BABEL_ENV || "production";
};