interface Window {
    SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST?: boolean
    SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH?: boolean
    SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET?: boolean
    COCO_SOURCE_CODE_PLAN_PROXY_OPEN?: boolean
    COCO_SOURCE_CODE_PLAN_PROXY_IFRAME?: boolean
}

function proxyAll(theWindow: typeof window = window) {
    proxyXMLHttpRequest(theWindow)
    proxyFetch(theWindow)
    proxyWebSocket(theWindow)
    proxyOpen(theWindow)
    proxyIFrame(theWindow)
}

function proxyXMLHttpRequest(theWindow: typeof window) {
    if (theWindow.SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST) {
        return
    }
    const { XMLHttpRequest } = theWindow
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
    defineFlag(theWindow, "SLIGHTNING_CODEMAO_ENVIRONMENT_XML_HTTP_REQUEST")
}

function proxyFetch(theWindow: typeof window) {
    if (theWindow.SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH) {
        return
    }
    const { fetch } = theWindow
    let originalFetch: typeof fetch = fetch
    theWindow.fetch = function fetch(
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
    defineFlag(theWindow, "SLIGHTNING_CODEMAO_ENVIRONMENT_FETCH")
}

function proxyWebSocket(theWindow: typeof window) {
    if (theWindow.SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET) {
        return
    }
    theWindow.WebSocket = class WebSocket extends window.WebSocket {
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
    defineFlag(theWindow, "SLIGHTNING_CODEMAO_ENVIRONMENT_WEB_SOCKET")
}

function needsProxy(url: URL): boolean {
    if (
        url.hostname == "static.codemao.cn" ||
        url.hostname == "creation.codemao.cn" ||
        url.hostname == "cdn-community.codemao.cn" ||
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

function proxyOpen(theWindow: typeof window) {
    if (theWindow.COCO_SOURCE_CODE_PLAN_PROXY_OPEN) {
        return
    }
    const { open } = theWindow
    const originalOpen: typeof open = open
    theWindow.open = function open(
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
    open.toString = originalOpen.toString.bind(originalOpen)
    defineFlag(theWindow, "COCO_SOURCE_CODE_PLAN_PROXY_OPEN")
}

function proxyIFrame(theWindow: typeof window) {
    if (theWindow.COCO_SOURCE_CODE_PLAN_PROXY_IFRAME) {
        return
    }
    const observer = new MutationObserver((mutationList) => {
        for (const mutation of mutationList) {
            for (const node of Array.from(mutation.addedNodes)) {
                if (node instanceof HTMLIFrameElement) {
                    changeIFrameSrc(theWindow, node)
                } if (node instanceof HTMLElement) {
                    for (const child of Array.from(node.querySelectorAll("*"))) {
                        if (child instanceof HTMLIFrameElement) {
                            changeIFrameSrc(theWindow, child)
                        }
                    }
                }
            }
        }
    })
    observer.observe(theWindow.document.documentElement, {
        subtree: true,
        childList: true
    })
    defineFlag(theWindow, "COCO_SOURCE_CODE_PLAN_PROXY_IFRAME")
}

function changeIFrameSrc(theWindow: typeof window, iFrame: HTMLIFrameElement) {
    const src = new URL(iFrame.src, theWindow.location.href)
    if (src.host == "shequ.codemao.cn" && src.pathname.startsWith("/codemao_login")) {
        if (location.protocol == "http:" && src.protocol == "https:") {
            src.protocol = "http:"
        }
        src.host = location.host
        iFrame.src = src.href
    }
}

function defineFlag(theWindow: typeof window, key: keyof Window) {
    Object.defineProperty(theWindow, key, {
        value: true,
        enumerable: false,
        writable: true,
        configurable: true
    })
}

if (!location.hostname.endsWith(".codemao.cn")) {
    proxyAll()
}
