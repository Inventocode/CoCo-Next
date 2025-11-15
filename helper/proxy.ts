interface Window {
    SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST?: boolean
    SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH?: boolean
    SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET?: boolean
}

function proxyXMLHttpRequest(): void {
    let originalOpen: typeof XMLHttpRequest.prototype.open = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function open(
        method: string,
        url: string | URL,
        async?: boolean,
        username?: string | null,
        password?: string | null
    ): void {
        if (!(url instanceof window.URL)) {
            url = new URL(url, location.href)
        }
        if (needsProxy(url)) {
            originalOpen.call(this, method, rewriteURL(url), async ?? true, username, password)
        } else {
            originalOpen.call(this, method, url, async ?? true, username, password)
        }
    }
    XMLHttpRequest.prototype.open.toString = originalOpen.toString.bind(originalOpen)
    window.SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST = true
}

function proxyFetch(): void {
    let originalFetch: typeof fetch = fetch
    window.fetch = function fetch(
        input: RequestInfo | URL,
        init: RequestInit | undefined
    ): Promise<Response> {
        if (input instanceof Request) {
            input = input.url
        }
        if (typeof input == "string") {
            input = new URL(input, location.href)
        }
        if (needsProxy(input)) {
            input = rewriteURL(input)
        }
        return originalFetch.call(this, input, init)
    }
    fetch.toString = originalFetch.toString.bind(originalFetch)
    window.SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH = true
}

function proxyWebSocket(): void {
    window.WebSocket = class WebSocket extends window.WebSocket {
        public constructor(url: string | URL, protocols?: string | string[]) {
            if (typeof url == "string") {
                url = new URL(url, location.href)
            }
            if (needsProxy(url)) {
                url = rewriteURL(url)
            }
            super(url, protocols)
        }
    }
    window.SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET = true
}

function needsProxy(url: URL): boolean {
    if (
        url.hostname == "static.codemao.cn" ||
        url.hostname == "creation.codemao.cn" ||
        url.hostname.endsWith("bcmcdn.com")
    ) {
        return false
    }
    return url.hostname.endsWith(".codemao.cn")
}

function rewriteURL(url: URL): URL {
    url.pathname = "/proxy/" + url.origin
        .replace(/(?<=^https?:\/\/)dev-/, "")
        .replace(/(?<=^https?:\/\/)backend-dev/, "api")
        + url.pathname
    if (location.protocol == "http:") {
        if (url.protocol == "https:") {
            url.protocol = "http:"
        }
        if (url.protocol == "wss:") {
            url.protocol = "ws:"
        }
    }
    url.host = location.host
    return url
}

function proxyOpen(): void {
    const originalOpen: typeof open = open
    window.open = function open(
        url?: string | URL,
        target?: string,
        features?: string
    ): WindowProxy | null {
        if (typeof url == "string") {
            url = new URL(url, location.href)
        }
        if (
            url?.hostname.endsWith("coco.codemao.cn") ||
            url?.hostname == location.hostname
        ) {
            url.protocol = location.protocol
            url.host = location.host
        }
        return originalOpen.call(this, url, target, features)
    }
    window.open.toString = originalOpen.toString.bind(originalOpen)
}

if (!location.hostname.endsWith(".codemao.cn")) {
    proxyXMLHttpRequest()
    proxyFetch()
    proxyWebSocket()
    proxyOpen()
}
