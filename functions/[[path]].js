// functions/[[path]].js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // 从查询参数获取目标 URL
  const targetUrl = url.searchParams.get('__proxy_url__');

  if (targetUrl) {
    try {
      // 解码并验证目标 URL
      const decodedTargetUrl = decodeURIComponent(targetUrl);
      const parsedTarget = new URL(decodedTargetUrl);

      // 允许的目标域名白名单（可选，为了安全）
      const allowedDomains = [
        'api-creation.codemao.cn',
        'api.codemao.cn',
        'socketcoll.codemao.cn',
        'open-service.codemao.cn',
        'shence-data.codemao.cn',
        'sentry.codemao.cn',
        'socketcv.codemao.cn',
        'shequ.codemao.cn'
      ];

      // 安全检查（可选）
      if (!allowedDomains.includes(parsedTarget.hostname)) {
        return new Response('Domain not allowed', { status: 403 });
      }

      // 构建新请求
      const newHeaders = new Headers(request.headers);
      newHeaders.set('Origin', 'https://coco.codemao.cn');
      newHeaders.set('Referer', 'https://coco.codemao.cn/');
      newHeaders.delete('host');

      // 复制原始请求的路径和查询参数到目标 URL
      parsedTarget.pathname = url.pathname;
      parsedTarget.search = url.search;

      const newRequest = new Request(parsedTarget, {
        method: request.method,
        headers: newHeaders,
        body: request.body
      });

      const response = await fetch(newRequest);
      const newResponse = new Response(response.body, response);

      // 处理 cookie 域名
      const setCookie = newResponse.headers.get('set-cookie');
      if (setCookie) {
        const modifiedCookie = setCookie.replace(/codemao\.cn/g, url.hostname);
        newResponse.headers.set('set-cookie', modifiedCookie);
      }

      return newResponse;

    } catch (error) {
      return new Response('Invalid target URL', { status: 400 });
    }
  }

  // 如果没有目标 URL 参数，返回静态资源
  return env.ASSETS.fetch(request);
}
