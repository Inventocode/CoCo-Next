/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：dpNx
 */

"use strict";

/* harmony export (immutable) */
/* harmony export (immutable) */
export { getEnvironment };
export { config };
function getEnvironment() {
  var hostname = window.location.hostname;
  if (hostname.startsWith("dev") || hostname === "localhost") {
    return "dev";
  } else if (hostname.startsWith("test")) {
    return "test";
  } else if (hostname.startsWith("staging")) {
    return "staging";
  } else {
    return "prod";
  }
}
/**
 * Function for retrieving the runtime configuration. If the configuration
 * file hasn't been downloaded yet, show a loader and wait until it has.
 *
 * @return {IConfig} the loaded configuration
 */
function config() {
  var env = getEnvironment();
  var prefix = undefined;
  switch (env) {
    case "test":
      prefix = "test-";
      break;
    case "staging":
      prefix = "staging-";
      break;
    case "dev":
      prefix = "dev-";
      break;
    case "prod":
    default:
      prefix = "";
      break;
  }
  return {
    env: env,
    pid: "7KeVbBdw",
    productCode: "appcraft",
    cocoEditorUrl: "https://" + prefix + "coco.codemao.cn/editor",
    discoverUrl: "https://shequ.codemao.cn/gallery/14700",
    backendHost: "https://" + prefix + "api-creation.codemao.cn",
    oTServerHost: "https://" + prefix + "socketcoll.codemao.cn",
    openServiceHost: "https://" + prefix + "open-service.codemao.cn"
  };
}

/***/