import { loadPage } from "./load-page"

switch (location.pathname) {
    case "/codemao_login":
    case "/codemao_login/":
    case "/codemao_login/index.html":
        loadPage("https://shequ.codemao.cn/codemao_login")
        break
    case "/get-qq-code.html":
        loadPage("https://www.codemao.cn/get-qq-code.html")
        break
    case "/get-weixin-code.html":
        loadPage("https://www.codemao.cn/get-weixin-code.html")
        break
}
