/**
 * @param {EventContext<unknown, string, Record<string, unknown>>} context
 * @returns {Promise<Response>}
 */
export async function onRequest(context) {

    try {

        const { request, env } = context
        const url = new URL(request.url)

        // 处理 CoCo HTTP 客户端控件代理
        if (url.pathname.startsWith("/http-widget-proxy/")) {
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
        return new Response("An error occurred while proxy the request:\n" + errorMessage, { status: 500 })
    }
}
