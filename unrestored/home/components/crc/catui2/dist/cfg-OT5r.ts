/** 
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：OT5r
 */

"use strict"

/* harmony export (binding) */
/* harmony export (binding) */
export { setEnv }
export { getConfig }
var currentEnv = "production"
// 通用配置
var CONFIG = {
  thirdPartyLoginPrefix: "https://www.codemao.cn",
  wechatAppId: "wxeda82dc272f7fe92",
  qqAppId: "101253342"
} // 各环境配置
var ENV_CONFIG = {
  development: {
    api: {
      host: "https://backend-dev.codemao.cn"
    },
    overseaApi: {
      host: "https://dev-oversea-api.code.game"
    },
    iris: {
      host: {
        tiger: "https://backend-dev.codemao.cn",
        platform: "https://dev-open-service.codemao.cn"
      },
      overseaHost: {
        tiger: "https://intl-gateway.codingcat.com/platform-account-api",
        platform: "https://intl-gateway.codingcat.com/open-service"
      }
    },
    irisEnv: "dev",
    redirectUrl: "https://dev-shequ.codemao.cn"
  },
  test: {
    api: {
      host: "https://test-api.codemao.cn"
    },
    overseaApi: {
      host: "https://test-oversea-api.code.game"
    },
    iris: {
      host: {
        tiger: "https://test-api.codemao.cn",
        platform: "https://test-open-service.codemao.cn"
      },
      overseaHost: {
        tiger: "https://intl-gateway.codingcat.com/platform-account-api",
        platform: "https://intl-gateway.codingcat.com/open-service"
      }
    },
    irisEnv: "api-test",
    redirectUrl: "https://test-shequ.codemao.cn"
  },
  staging: {
    api: {
      host: "https://backend-test.codemao.cn"
    },
    overseaApi: {
      host: "https://staging-oversea-api.code.game"
    },
    iris: {
      host: {
        tiger: "https://backend-test.codemao.cn",
        platform: "https://staging-open-service.codemao.cn"
      },
      overseaHost: {
        tiger: "https://intl-gateway.codingcat.com/platform-account-api",
        platform: "https://intl-gateway.codingcat.com/open-service"
      }
    },
    irisEnv: "staging",
    redirectUrl: "https://staging-shequ.codemao.cn"
  },
  production: {
    api: {
      host: "https://api.codemao.cn"
    },
    overseaApi: {
      host: "https://oversea-api.code.game"
    },
    iris: {
      host: {
        tiger: "https://api.codemao.cn",
        platform: "https://open-service.codemao.cn"
      },
      overseaHost: {
        tiger: "https://intl-gateway.codingcat.com/platform-account-api",
        platform: "https://intl-gateway.codingcat.com/open-service"
      }
    },
    irisEnv: "prod",
    redirectUrl: "https://shequ.codemao.cn"
  }
}
/**
 * 设置环境值（将会影响应用组件中使用到的后端域名等）
 * @param env 'dev' | 'test' | 'staging' | 'production'
 */
var setEnv = function setEnv(env) {
  if (["development", "test", "staging", "production"].indexOf(env) < 0) {
    return
  }
  currentEnv = env
}
/**
 * 获取当前环境配置
 */
var getConfig = function getConfig() {
  return Object.assign({}, CONFIG, ENV_CONFIG[currentEnv])
}

/***/
