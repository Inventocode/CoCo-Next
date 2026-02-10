/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：57
 */

import isIp from "is-ip"

const hosts = {
  openServiceHost: "https://dev-open-service.codemao.cn",
  serverHost: "https://backend-dev.codemao.cn",
  backendHost: "https://backend-dev.codemao.cn",
  socketHost: "https://socket-cr.codemao.cn",
  oTServerHost: "https://socketcoll.codemao.cn",
  oTSocketHost: "wss://socketcoll.codemao.cn:8098",
  pid: "7KeVbBdw",
  productCode: "appcraft",
  env: "dev"
}

export function getEnvironment() {
  const environmentMetaElement = window.document.querySelector("meta[name=environment]")
  if (environmentMetaElement) {
    const environment = environmentMetaElement.getAttribute("content")
    if (environment && environment !== "__ENVIRONMENT__" && environment !== "undefined") {
      return environment
    }
  }
  const { hostname } = window.location
  return (
    hostname.startsWith("dev") || hostname === "localhost" || isIp(hostname) ? "development"
      : hostname.startsWith("test") ? "test"
        : hostname.startsWith("staging") ? "staging"
          : hostname.startsWith("press") ? "press"
            : "production"
  )
}
export { getEnvironment as b }

;(() => {
  let prefix
  let apiSubDomain
  let env
  switch (getEnvironment()) {
    case "press":
    case "pressure":
    case "test":
      prefix = "test-"
      apiSubDomain = "test-api"
      env = "test"
      break
    case "staging":
      prefix = "staging-"
      apiSubDomain = "backend-test"
      env = "staging"
      break
    case "dev":
    case "development":
      prefix = "dev-"
      apiSubDomain = "backend-dev"
      env = "dev"
      break
    case "prod":
    case "production":
    default:
      prefix = ""
      apiSubDomain = "api"
      env = "prod"
  }
  hosts.openServiceHost = `https://${prefix}open-service.codemao.cn`
  hosts.serverHost = `https://${prefix}api-creation.codemao.cn`
  hosts.backendHost = `https://${apiSubDomain}.codemao.cn`
  hosts.socketHost = `https://${prefix}socket-cr.codemao.cn`
  hosts.oTServerHost = `https://${prefix}socketcoll.codemao.cn`
  hosts.oTSocketHost = `wss://${prefix}socketcoll.codemao.cn:8098`
  hosts.env = env
})()

export { hosts as a }
