(this["webpackJsonpappcraft-download"] = this["webpackJsonpappcraft-download"] || []).push([[0], {
    182: function(t) {
        t.exports = JSON.parse('{"a":"0.1.0"}')
    },
    295: function(t, s, e) {},
    299: function(t, s, e) {
        "use strict";
        e.r(s);
        e(192);
        var i = e(307)
          , a = (e(28),
        e(185));
        function n() {
            const {hostname: t} = window.location;
            return t.startsWith("dev") || "localhost" === t ? "development" : t.startsWith("test") ? "test" : t.startsWith("staging") ? "staging" : "production"
        }
        var r = e(182);
        try {
            i.a({
                release: r.a,
                dsn: "https://8a0ee98a408240ecb75447c2fb5afcbf@sentry.codemao.cn/157",
                integrations: [new a.a.BrowserTracing],
                environment: n(),
                tracesSampleRate: 1
            })
        } catch (I) {
            console.error(I)
        }
        var o = e(17)
          , c = e(184)
          , C = e.n(c)
          , j = e(308);
        const p = "zh-CN"
          , l = {
            "zh-CN": {
                "package.download": "\u4e0b\u8f7d\u5b89\u88c5\u5305",
                "package.downloadNotAllowed": "\u5fae\u4fe1/QQ\u65e0\u6cd5\u4e0b\u8f7d\u5b89\u88c5\u5305",
                "package.downloadInBrowser": "\u8bf7\u70b9\u51fb\u53f3\u4e0a\u65b9 \u2026 \u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00"
            }
        };
        var m = e(306)
          , d = e(68)
          , h = e.n(d);
        const K = n();
        h.a.init({
            server_url: "development" === K || "test" === K ? "https://shence-data.codemao.cn/sa?project=default" : "https://shence-data.codemao.cn/sa?project=production",
            is_track_single_page: !0,
            use_client_time: !0,
            show_log: !0,
            send_type: "ajax",
            max_string_length: 5e3,
            heatmap: {
                clickmap: "default",
                scroll_notice_map: "default"
            }
        }),
        h.a.registerPage({
            $app_id: window.location.host,
            $app_name: "APP\u5de5\u5320",
            product_name: "APP\u5de5\u5320"
        }),
        h.a.quick("autoTrack", {
            page: "editor"
        });
        var v = e(32)
          , G = e.n(v)
          , A = (e(295),
        e.p + "static/media/bg.f57dc748.png")
          , E = e(15);
        function w(t) {
            const s = document.createElement("a");
            document.body.appendChild(s),
            s.style.display = "none",
            s.href = t,
            s.target = "_blank",
            s.click(),
            document.body.removeChild(s)
        }
        const g = () => {
            const {icon: t, name: s, url: e, projectId: i, version: a, expireTime: n, startTimeTamp: r} = (t => {
                const s = /(?:[&?])([^=]+)=([^&]*)/g
                  , e = {};
                for (; ; ) {
                    const i = s.exec(t);
                    if (!i)
                        break;
                    e[decodeURIComponent(i[1])] = decodeURIComponent(i[2])
                }
                return e
            }
            )(window.location.search);
            return {
                icon: t,
                name: s,
                url: e,
                projectId: i,
                version: a,
                expireTime: n,
                startTimeTamp: r
            }
        }
        ;
        const k = () => {
            const {formatMessage: t} = Object(m.a)();
            return Object(E.jsxs)("div", {
                className: G.a.browserTips,
                children: [Object(E.jsx)("img", {
                    className: G.a.arrow,
                    src: "data:image/png;base64,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",
                    alt: "arrow"
                }), Object(E.jsx)("img", {
                    src: A,
                    alt: "codemao"
                }), Object(E.jsx)("p", {
                    children: t({
                        id: "package.downloadNotAllowed"
                    })
                }), Object(E.jsx)("p", {
                    children: t({
                        id: "package.downloadInBrowser"
                    })
                })]
            })
        }
        ;
        let O;
        const x = t => {
            let {package: {icon: s, name: e, url: i, version: a, expireTime: n, startTimeTamp: r}} = t;
            const {formatMessage: c} = Object(m.a)()
              , [C,j] = Object(o.useState)(!1);
            Object(o.useEffect)(( () => {
                i && !function(t, s) {
                    const e = parseInt(t || "")
                      , i = parseInt(s || "");
                    return e > 0 && i > 0 && Date.now() - i > 1e3 * e
                }(n, r) && (i.startsWith("https://") || i.startsWith("http://")) && w(i)
            }
            ), [i, n, r]),
            Object(o.useEffect)(( () => {
                O && clearInterval(O);
                const t = parseInt(n || "")
                  , s = parseInt(r || "");
                t > 0 && s > 0 && (Date.now() - s > 1e3 * t ? (j(!0),
                O && clearInterval(O)) : O = setInterval(( () => {
                    Date.now() - s > 1e3 * t && (j(!0),
                    O && clearInterval(O))
                }
                ), 2e3))
            }
            ), [n, r]);
            return Object(E.jsxs)("div", {
                className: G.a.appInfo,
                children: [C ? Object(E.jsxs)(E.Fragment, {
                    children: [Object(E.jsx)("img", {
                        src: "data:image/png;base64,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",
                        className: G.a.expireImage,
                        alt: ""
                    }), Object(E.jsx)("div", {
                        className: G.a.expireTitle,
                        children: "\u94fe\u63a5\u5df2\u5931\u6548"
                    }), Object(E.jsx)("div", {
                        className: G.a.expireTips,
                        children: "\u8bf7\u5728\u7f51\u9875\u91cd\u65b0\u6253\u5305\u626b\u63cf\u4e8c\u7ef4\u7801\u4e0b\u8f7d"
                    })]
                }) : Object(E.jsxs)(E.Fragment, {
                    children: [s && Object(E.jsx)("img", {
                        className: G.a.icon,
                        src: s,
                        alt: "app icon"
                    }), e && Object(E.jsx)("div", {
                        className: G.a.name,
                        children: e
                    }), a && Object(E.jsxs)("div", {
                        className: G.a.version,
                        children: ["VersionCode\uff1a", a]
                    }), Object(E.jsx)("div", {
                        onClick: () => {
                            i && (i.startsWith("https://") || i.startsWith("http://")) && w(i)
                        }
                        ,
                        className: G.a.download,
                        children: c({
                            id: "package.download"
                        })
                    })]
                }), Object(E.jsx)("div", {
                    className: G.a.domain,
                    children: "coco.codemao.cn"
                })]
            })
        }
        ;
        var b = () => {
            const t = g()
              , s = function() {
                const {userAgent: t} = navigator;
                return /MicroMessenger/i.test(t) ? "Wechat" : /\sQQ\/\d/.test(t) ? "QQ" : "Other"
            }();
            switch (Object(o.useEffect)(( () => {
                var s, e;
                s = "InstallShareApk",
                e = {
                    workId: t.projectId || "",
                    apkName: t.name || "",
                    isScanCode: !0,
                    isCopyApkLink: !1,
                    isDownloadPackage: !1
                },
                "development" !== K && "test" !== K || h.a.track(s, function(t) {
                    if (!t)
                        return {};
                    const s = {};
                    for (const e in t)
                        s[e.replace(/([A-Z])/g, "_$1").toLowerCase()] = t[e];
                    return s
                }(e))
            }
            ), [t]),
            s) {
            case "Wechat":
            case "QQ":
                return Object(E.jsx)(k, {});
            default:
                return Object(E.jsx)(x, {
                    package: t
                })
            }
        }
        ;
        C.a.render(Object(E.jsx)(j.a, {
            locale: p,
            messages: l[p],
            children: Object(E.jsx)(b, {})
        }), document.getElementById("root"))
    },
    32: function(t, s, e) {
        t.exports = {
            appInfo: "App_appInfo__1wHek",
            icon: "App_icon__1T5rY",
            name: "App_name__3JCeM",
            version: "App_version__2NEyJ",
            download: "App_download__L5AlF",
            domain: "App_domain__1iqUj",
            expireImage: "App_expireImage__3MoNz",
            expireTitle: "App_expireTitle__jvfao",
            expireTips: "App_expireTips__1Y4az",
            browserTips: "App_browserTips__3ufx2",
            arrow: "App_arrow__1b_HR"
        }
    }
}, [[299, 1, 2]]]);
//# sourceMappingURL=main.3c8a7f1e.chunk.js.map
