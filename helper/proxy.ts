interface Window {
    SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST?: boolean
    SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH?: boolean
    SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET?: boolean
    COCO_SOURCE_CODE_PLAN_PROXY_OPEN?: boolean
    COCO_SOURCE_CODE_PLAN_PROXY_IFRAME?: boolean
}

function proxyAll() {
    proxyXMLHttpRequest()
    proxyFetch()
    proxyWebSocket()
    proxyOpen()
    proxyIFrame()
}

function proxyXMLHttpRequest() {
    if (flag("SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST")) {
        return
    }
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
}

function proxyFetch() {
    if (flag("SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH")) {
        return
    }
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
}

function proxyWebSocket() {
    if (flag("SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET")) {
        return
    }
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
}

function needsProxy(url: URL): boolean {
    if (
        !url.hostname.endsWith(".codemao.cn") ||
        url.hostname == "static.codemao.cn" ||
        url.hostname == "creation.codemao.cn" ||
        url.hostname == "cdn-community.codemao.cn" ||
        url.hostname.endsWith("bcmcdn.com") ||
        (location.hostname != "coco-next.localhost" && url.hostname.startsWith("socket"))
    ) {
        return false
    }
    return true
}

function rewriteURL(url: URL): URL {
    if (location.hostname.endsWith(".ccwidget.top")) {
        const newURL = new URL(url.protocol + "//next.ccwidget.top/proxy/")
        newURL.searchParams.set("__proxy_url__", url.href)
        return newURL
    }
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

function proxyOpen() {
    if (flag("COCO_SOURCE_CODE_PLAN_PROXY_OPEN")) {
        return
    }
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
            url?.host == "www.codemao.cn" &&
            (url.pathname == "/get-qq-code.html" || url.pathname == "/get-weixin-code.html")
        ) {
            if (location.protocol == "http:" && url.protocol == "https:") {
                url.protocol = "http:"
            }
            url.host = location.host
        } else if (
            url?.hostname.endsWith("coco.codemao.cn") ||
            url?.hostname == location.hostname
        ) {
            url.protocol = location.protocol
            url.host = location.host
        }
        return originalOpen.call(this, url, target, features)
    }
    open.toString = originalOpen.toString.bind(originalOpen)
}

function proxyIFrame() {
    if (flag("COCO_SOURCE_CODE_PLAN_PROXY_IFRAME")) {
        return
    }
    const observer = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            for (const node of Array.from(mutation.addedNodes)) {
                if (node instanceof HTMLIFrameElement) {
                    changeIFrameSrc(node)
                } if (node instanceof HTMLElement) {
                    for (const child of Array.from(node.querySelectorAll("*"))) {
                        if (child instanceof HTMLIFrameElement) {
                            changeIFrameSrc(child)
                        }
                    }
                }
            }
        }
    })
    observer.observe(document.documentElement, {
        subtree: true,
        childList: true
    })
}

function changeIFrameSrc(iFrame: HTMLIFrameElement) {
    const src = new URL(iFrame.src, location.href)
    if (src.host == "shequ.codemao.cn" && src.pathname.startsWith("/codemao_login")) {
        if (location.protocol == "http:" && src.protocol == "https:") {
            src.protocol = "http:"
        }
        src.host = location.hostname.endsWith(".ccwidget.top") ? "next.ccwidget.top" : location.host
        iFrame.src = src.href
    }
}

function flag(key: keyof Window): boolean {
    if (window[key]) {
        return true
    }
    Object.defineProperty(window, key, {
        value: true,
        enumerable: false,
        writable: true,
        configurable: true
    })
    return false
}

if (!location.hostname.endsWith(".codemao.cn")) {
    proxyAll()
}
