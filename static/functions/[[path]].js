export async function onRequest(context) {

    try {

        const { request, env } = context
        const url = new URL(request.url)

        const targetUrl = url.searchParams.get('__proxy_url__')

        if (targetUrl) { // 处理编程猫 API 代理

            // 解码并验证目标 URL
            const decodedTargetUrl = decodeURIComponent(targetUrl)
            let parsedTarget
            try {
                parsedTarget = new URL(decodedTargetUrl, "https://coco.codemao.cn")
            } catch (error) {
                return new Response(`Invalid target URL: ${decodedTargetUrl}\n`, { status: 400 })
            }

            // 允许的目标域名白名单
            const allowedDomains = [
                'api-creation.codemao.cn',
                'api.codemao.cn',
                'socketcoll.codemao.cn',
                'open-service.codemao.cn',
                'shence-data.codemao.cn',
                'sentry.codemao.cn',
                'socketcv.codemao.cn',
                'shequ.codemao.cn'
            ]

            // 安全检查（可选）
            if (!allowedDomains.includes(parsedTarget.hostname)) {
                return new Response(`Domain ${parsedTarget.hostname} not allowed.\n\nAllowed Domains:\n${allowedDomains.join("\n")}\n`, { status: 403 })
            }

            // 构建新请求
            const newHeaders = new Headers(request.headers)
            newHeaders.set('Origin', 'https://coco.codemao.cn')
            newHeaders.set('Referer', 'https://coco.codemao.cn/')
            newHeaders.delete('host')

            // 复制原始请求的路径和查询参数到目标 URL
            parsedTarget.pathname = url.pathname
            parsedTarget.search = url.search

            const newRequest = new Request(parsedTarget, {
                method: request.method,
                headers: newHeaders,
                body: request.body
            })

            const response = await fetch(newRequest)
            const newResponse = new Response(response.body, response)

            // 替换 Cookie 域名
            const setCookie = newResponse.headers.get('set-cookie')
            if (setCookie) {
                const modifiedCookie = setCookie.replace(/codemao\.cn/g, ".ccwidget.top")
                newResponse.headers.set('set-cookie', modifiedCookie)
            }

            // 允许跨域请求
            newResponse.headers.set("access-control-allow-origin", url.origin)

            return newResponse
        } else if (url.pathname.startsWith("/http-widget-proxy/")) { // 处理 CoCo HTTP 客户端控件代理
            return fetch(url.pathname
                .replace(/^\/http-widget-proxy\/https@SEP@/, "https://")
                .replace(/^\/http-widget-proxy\/http@SEP@/, "http://"))
        }

        // 如果没有目标 URL 参数，返回静态资源
        return env.ASSETS.fetch(request)

    } catch (error) {
        const errorMessage = error instanceof Error ? error.stack ?? error.message : JSON.stringify(error)
        return new Response("An error occurred while processing the request:\n" + errorMessage, { status: 500 })
    }
}
