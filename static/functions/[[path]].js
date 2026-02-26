const ALLOWED_PROXY_DOMAINS = [
    "api-creation.codemao.cn",
    "api.codemao.cn",
    "socketcoll.codemao.cn",
    "open-service.codemao.cn",
    "shence-data.codemao.cn",
    "sentry.codemao.cn",
    "socketcv.codemao.cn",
    "shequ.codemao.cn"
]

const PROTECT_NAME = "适用于 CoCo Next 的编程猫账号保护器"

const PROXY_INTERCEPT_RESPONSE = {
    code: 403,
    msg: `该请求已被${PROTECT_NAME}拦截`,
    data: null,
    domain: [],
    error_code: 403,
    error_message: `该请求已被${PROTECT_NAME}拦截`,
    log_uuid: `blocked-by-codemao-account-protect-for-coco-next`
}

const PROXY_REJECT_RULES = [
    {
        test: /https?:\/\/eduzone.codemao.cn\/edu\/zone\/invite\/student\/message\/next/,
        function: "获取加入班级邀请列表",
        consequence: "账号被他人控制风险增加"
    }, {
        test: /https?:\/\/eduzone.codemao.cn\/edu\/zone\/invite\/student\/message\/.*\/accept/,
        function: "加入班级",
        consequence: "账号被他人控制"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/tokens\/convert/,
        function: "获取用户访问令牌",
        consequence: "账号被盗"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/privacy/,
        function: "获取用户敏感信息",
        consequence: "隐私泄露；账号被控制"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/username/,
        function: "设置用户名（用户名不是用户昵称）",
        consequence: "账号风险增加"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/password/,
        function: "通过旧密码验证更换账号密码",
        consequence: "账号被盗；账号密码泄露；账号密码被更改，失去账号访问权"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/captcha\/password\/update/,
        function: "发送更换账号密码的验证码",
        consequence: "账号被盗风险增加；账号密码被更改，失去账号访问权"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/password\/phone/,
        function: "通过验证码验证更换账号密码",
        consequence: "账号被盗；账号密码被更改，失去账号访问权"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/web\/users\/phone_number\/is_consistent/,
        function: "判断手机号是否为当前账号绑定的手机号",
        consequence: "账号绑定的手机号泄露，账号被盗风险增加"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/captcha\/phone\/change/,
        function: "发送更换手机号的验证码",
        consequence: "账号被盗风险增加；账号绑定的手机号被更换，失去账号访问权"
    }, {
        test: /https?:\/\/api\.codemao\.cn\/tiger\/v3\/web\/accounts\/phone\/change/,
        function: "通过验证码验证更换账号绑定的手机号",
        consequence: "账号被盗；账号绑定的手机号被更换，失去账号访问权"
    }
]

/**
 *
 * @param {EventContext<unknown, string, Record<string, unknown>>} context
 * @returns {Promise<Response>}
 */
export async function onRequest(context) {

    try {

        const { request, env } = context
        const url = new URL(request.url)

        const targetUrl = url.searchParams.get("__proxy_url__")

        if (targetUrl) { // 处理编程猫 API 代理

            for (const rule of PROXY_REJECT_RULES) {
                if (rule.test.test(targetUrl)) {
                    return new Response(JSON.stringify(Object.assign(
                        {}, PROXY_INTERCEPT_RESPONSE, {
                            explanation: `该 API 用作 ${rule.function}，为保护用户免于${rule.consequence}，${PROTECT_NAME}禁止访问该 API`
                        }
                    )), {
                        status: 403,
                        headers: new Headers([
                            ["content-type", "application/json"]
                        ])
                    })
                }
            }

            // 解码并验证目标 URL
            const decodedTargetUrl = decodeURIComponent(targetUrl)
            let parsedTarget
            try {
                parsedTarget = new URL(decodedTargetUrl, "https://coco.codemao.cn")
            } catch (error) {
                return new Response(`Invalid target URL: ${decodedTargetUrl}\n`, { status: 400 })
            }

            // 安全检查
            if (!ALLOWED_PROXY_DOMAINS.includes(parsedTarget.hostname)) {
                return new Response(`Domain ${parsedTarget.hostname} not allowed.\n\nAllowed Domains:\n${ALLOWED_PROXY_DOMAINS.join("\n")}\n`, { status: 403 })
            }

            let origin = new URL(request.headers.get("Origin") ?? "", "https://next.ccwidget.top")

            // 构建新请求
            const newHeaders = new Headers(request.headers)
            newHeaders.set("Origin", "https://coco.codemao.cn")
            newHeaders.set("Referer", "https://coco.codemao.cn/")
            newHeaders.delete("host")

            const newRequest = new Request(parsedTarget, {
                method: request.method,
                headers: newHeaders,
                body: request.body
            })

            const response = await fetch(newRequest)
            const newResponse = new Response(response.body, response)

            // 替换 Cookie 域名
            const setCookie = newResponse.headers.get("set-cookie")
            if (setCookie) {
                const modifiedCookie = setCookie.replace(/codemao\.cn/g, origin.origin.endsWith(".ccwidget.top") ? ".ccwidget.top" : origin.origin)
                newResponse.headers.set("set-cookie", modifiedCookie)
            }

            // 允许跨域请求
            newResponse.headers.set("access-control-allow-origin", origin.origin)

            if (/https?:\/\/api\.codemao\.cn\/web\/users\/details/.test(targetUrl)) {
                let data = newResponse.json();
                Object.assign(data, {
                    birthday: 0,
                    birthday_note: `birthday 字段已被${PROTECT_NAME}拦截`,
                    phone_number: `已被${PROTECT_NAME}拦截`,
                    qq: `已被${PROTECT_NAME}拦截`,
                    real_name: `已被${PROTECT_NAME}拦截`,
                    username: `已被${PROTECT_NAME}拦截`
                })
                return new Response(JSON.stringify(data), newResponse)
            } else if (/https?:\/\/api\.codemao\.cn\/api\/user\/info/.test(targetUrl)) {
                let data = newResponse.json();
                Object.assign(data, {
                    age: 0,
                    age_note: `age 字段已被${PROTECT_NAME}拦截`,
                    username: `已被${PROTECT_NAME}拦截`,
                    telephone: `已被${PROTECT_NAME}拦截`,
                    qq: `已被${PROTECT_NAME}拦截`,
                    email: `已被${PROTECT_NAME}拦截`,
                    real_name: `已被${PROTECT_NAME}拦截`
                })
                return new Response(JSON.stringify(data), newResponse)
            } else {
                return newResponse
            }
        } else if (url.pathname.startsWith("/http-widget-proxy/")) { // 处理 CoCo HTTP 客户端控件代理
            let parsedURL = url.pathname
                    .replace(/^\/http-widget-proxy\/https@SEP@/, "https://")
                    .replace(/^\/http-widget-proxy\/http@SEP@/, "http://")
                + url.search + url.hash
            let newHeaders = new Headers(request.headers)
            // 禁止携带 Cookie，以防止 Cookie 泄露
            newHeaders.delete("Cookie")
            newHeaders.delete("host")
            return fetch(parsedURL, {
                method: request.method,
                headers: newHeaders,
                body: request.body
            })
        }

        // 如果没有目标 URL 参数，返回静态资源
        return env.ASSETS.fetch(request)

    } catch (error) {
        const errorMessage = error instanceof Error ? error.stack ?? error.message : JSON.stringify(error)
        return new Response("An error occurred while processing the request:\n" + errorMessage, { status: 500 })
    }
}
