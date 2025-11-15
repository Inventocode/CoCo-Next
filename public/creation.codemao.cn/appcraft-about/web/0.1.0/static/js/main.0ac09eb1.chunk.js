(this["webpackJsonpappcraft-about"] = this["webpackJsonpappcraft-about"] || []).push([[0], {
    4: function(e, a, s) {
        e.exports = {
            flexTC: "style_flexTC__1vmw0",
            pageWrapper: "style_pageWrapper__15HMO",
            left: "style_left__xtXu8",
            right: "style_right__3ly43",
            bannerBox: "style_bannerBox__12cfY",
            bannerLeftBg: "style_bannerLeftBg__9vihJ",
            bannerRightBg: "style_bannerRightBg__S_leT",
            bannerContent: "style_bannerContent__2c3Xo",
            bannerLogoBox: "style_bannerLogoBox__2uCQU",
            bannerLogoImg: "style_bannerLogoImg__1z90v",
            bannerText: "style_bannerText__1mT-J",
            quotesLeft: "style_quotesLeft__PPmik",
            quotesRight: "style_quotesRight__94PM4",
            bannerTexSpeech: "style_bannerTexSpeech__1iB3g",
            courseAndFamilyBox: "style_courseAndFamilyBox__3ooIE",
            courseAndFamilyContent: "style_courseAndFamilyContent__3DZMo",
            courseTitle: "style_courseTitle__oY0I8",
            courseList: "style_courseList__19a4z",
            courseTimelineImg: "style_courseTimelineImg__3MrKy",
            courseUpList: "style_courseUpList__1uocX",
            courseItem: "style_courseItem__2uSQI",
            courseDownList: "style_courseDownList__3UZQ6",
            courseText: "style_courseText__3sU7q",
            courseUpImg: "style_courseUpImg__2Buk0",
            courseDownImg: "style_courseDownImg__1deSF",
            courseItemTitle: "style_courseItemTitle__1NVhE",
            courseItemDesc: "style_courseItemDesc__WzIDF",
            familyTitle: "style_familyTitle__1ekBp",
            familyBox: "style_familyBox__1Yg06",
            familyImgBox: "style_familyImgBox__2lnPZ",
            familyPhotoImg: "style_familyPhotoImg__3D1ie",
            familyIconBox: "style_familyIconBox__1Y0qw",
            familyLikeImg: "style_familyLikeImg__2uLwD",
            TeamBox: "style_TeamBox__3yEcg",
            teamContent: "style_teamContent__2hMrB",
            thanksText: "style_thanksText__omGuQ",
            teamItem: "style_teamItem__2qdu5",
            teamIcon: "style_teamIcon__3Vz4a",
            itemPosition: "style_itemPosition__1qNKy",
            itemMember: "style_itemMember__17lqp"
        }
    },
    47: function(e) {
        e.exports = JSON.parse('{"a":"0.1.0"}')
    },
    64: function(e, a, s) {
        "use strict";
        s.r(a);
        var t = s(72)
          , c = (s(16),
        s(49));
        function o() {
            var e = window.location.hostname;
            return e.startsWith("dev") || "localhost" === e ? "development" : e.startsWith("test") ? "test" : e.startsWith("staging") ? "staging" : "production"
        }
        var i = s(47);
        try {
            t.a({
                release: i.a,
                dsn: "https://c4079412155e4db9ac09da746f6529c6@sentry.codemao.cn/156",
                integrations: [new c.a.BrowserTracing],
                environment: o(),
                tracesSampleRate: 1
            })
        } catch (A) {
            console.error(A)
        }
        s(13);
        var n = s(48)
          , m = s.n(n)
          , l = s(73)
          , r = "zh-CN"
          , b = {
            "zh-CN": {
                "about.remarks1": "\u6211\u4eec\u4ea7\u54c1\u91cc\u7684icon\uff0c\u56fe\u7247\uff0c\u4ee3\u7801\uff0c\u903b\u8f91\u7279\u6027\u4f1a\u65f6\u5e38\u4f1a\u63d0\u9192\u6211\u4eec\uff1a",
                "about.remarks2": "\u4f60\u4eec\u66fe\u7ecf\u5728\u8fd9\u91cc\u52aa\u529b\u601d\u8003\u8fc7\u3001\u4ed8\u51fa\u8fc7\uff0c\u4f60\u4eec\u4e00\u76f4\u5728CoCo\u7f16\u8f91\u5668\u3002",
                "about.toolCourse": "\u5de5\u5177\u5386\u7a0b",
                "about.familyPhoto": "\u4e8c\u4ee3\u56e2\u5168\u5bb6\u798f"
            }
        }
          , _ = s(71)
          , p = s(30)
          , g = s.n(p)
          , j = s(4)
          , d = s.n(j)
          , u = s(2)
          , x = [{
            icon: "https://static.codemao.cn/coco/image/about_page_pebble1.png",
            position: "\u4ea7\u54c1",
            member: "\u98a2\u54e5\u3001coco\u9e2d\u3001momo\u3001\u4e00\u51e1\u3001ss\u3001prince\u3001Joe\u3001\u6587\u4f1f\u3001\u5b9d\u4e2d\u5065\u8eab\u72c2"
        }, {
            icon: "https://static.codemao.cn/coco/image/about_page_pebble2.png",
            position: "\u5f00\u53d1",
            member: "\u950b\u54e5\u3001\u5c0f\u674e\u5b50\u3001\u4e8e\u52e4Web\u3001\u5b87\u5a77\u3001\u6700\u7f8e\u7684\u5c0f\u9e1f\u3001\u4e50\u5929\u6d3eGUM\u3001gbao\u3001ph\u3001\u6f84\u54e5\u3001cai_32\u3001KK\u3001\u683c\u4e4c\u591c"
        }, {
            icon: "https://static.codemao.cn/coco/image/about_page_pebble3.png",
            position: "\u8bbe\u8ba1",
            member: "\u4e8c\u5341\u516b\u5ea6\u6674\u5929\u3001\u5927\u7530\u3001\u6842\u82ac\u3001\u5c0f\u767d\u3001\u6960\u54e5\u3001\u5fe0\u5b9e\u5e72\u996d\u4eba\u3001\u53f0\u98ce\u652f\u67f1\u3001\u73b2\u73b2\u5b50"
        }, {
            icon: "https://static.codemao.cn/coco/image/about_page_pebble4.png",
            position: "\u6d4b\u8bd5",
            member: "\u4e50\u4e50\u9e2d\u3001\u795e\u79d8\u4eba\u3001QQ\u3001\u51b0\u897f\u74dc\u3001\u8001\u767d"
        }, {
            icon: "https://static.codemao.cn/coco/image/about_page_pebble5.png",
            position: "\u8fd0\u8425",
            member: "\u96f7\u7535\u7334\u3001\u6d3b\u52a8\u732b\u3001\u661f\u80fd\u732b\u3001\u8718\u86db\u4fa0"
        }, {
            icon: "https://static.codemao.cn/coco/image/about_page_pebble6.png",
            position: "\u7279\u522b\u9e23\u8c22",
            member: "epeiuss\u3001\u6d77\u85fb\u9178\u94a0\u3001\u65b9\u6a59"
        }]
          , h = [{
            time: "2021\u5e74\u6625\u8282\u540e",
            desc: "\u7b2c\u4e00\u6b21\u793e\u533a\u5185\u6d4b"
        }, {
            time: "2021\u5e747\u6708\u4e2d\u65ec",
            desc: "\u793e\u533a\u6b63\u5f0f\u4e0a\u7ebf\u516c\u6d4b"
        }]
          , f = [{
            time: "2020\u5e74",
            desc: "\u9879\u76ee\u542f\u52a8"
        }, {
            time: "2021\u5e746\u6708",
            desc: "\u7b2c\u4e8c\u6b21\u793e\u533a\u5185\u6d4b"
        }, {
            time: "2021\u5e747\u670829\u65e5",
            desc: "\u5de5\u5177\u53d1\u5e03\u4f1a\u4e0a\u95ea\u4eae\u767b\u573a"
        }]
          , y = function() {
            var e = Object(_.a)().formatMessage;
            return Object(u.jsxs)("div", {
                className: d.a.pageWrapper,
                children: [Object(u.jsxs)("div", {
                    className: g()(d.a.flexTC, d.a.bannerBox),
                    children: [Object(u.jsx)("img", {
                        className: d.a.bannerLeftBg,
                        src: "https://static.codemao.cn/coco/image/about_page_left_banner.png",
                        alt: ""
                    }), Object(u.jsx)("img", {
                        className: d.a.bannerRightBg,
                        src: "https://static.codemao.cn/coco/image/about_page_right_banner.png",
                        alt: ""
                    }), Object(u.jsx)("div", {
                        className: d.a.left
                    }), Object(u.jsxs)("div", {
                        className: d.a.bannerContent,
                        children: [Object(u.jsx)("div", {
                            className: d.a.bannerLogoBox,
                            children: Object(u.jsx)("img", {
                                className: d.a.bannerLogoImg,
                                src: "https://static.codemao.cn/coco/image/about_page_logo_new.png",
                                alt: "logo"
                            })
                        }), Object(u.jsxs)("div", {
                            className: d.a.bannerText,
                            children: [Object(u.jsx)("img", {
                                className: d.a.quotesLeft,
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAuCAMAAABOIvqXAAAArlBMVEUAAAD06P/46//37P/26f/26f/27P/16f/////57f/26//37P/26//16v/27P/26f/26v/16v/26//37P/27f/////16v/26//16f/26v//8P//7P/16P/27f/37P/16v/16v/05//26//16P/16f/27P/37f/37f/57f/16P/37f/16v/36//16//17f/16v/37v/37P/27f/37P/57v/77f/z5f/06P/16v/27P8iISitAAAANnRSTlMA0CRdmcno0wIm6GH85pH33da1OxsH7rCogRQN/N/Yy8K6op6NcFcyKvTqvXhqTUxB/MGFWUeMaG9zAAABi0lEQVRIx+3Ux3qCQBSGYYNRqnRF7F0Ta5oM939jEQfjfziYjdnFs3Dh+3w4wgyVvx5taXZ+c2WxKvs6sNf9tzTd36j02B84afrBfm03McR50nn5ZQdCzqQQblpCiCQbIWweLvpXfifyNZAgMSqGqxGyC9KNLnI8Zp9DGmq2Rdi5UugJCdlkaJCy6QNnLsIL6X0BkpnVxCXVipwcclrWpWAKT67jiSILM1+OWyiddhW3hF8oe+OtktMzlZeYbiWTlr2p/kMHi5RjpUImbJFSDeDuuaScaRU6Pin9LpBJaMM2rUBua2gjpDGAHBvZ7SIpFpATshNhYLonNkOa8j2P/ETNBUsClkbIc0JNXG9LY6kHnOiEggRsxEqth1emtiW3nqVLZI+aTbZgo9EwjPppXhXJVUydK3+ebAIkT7F8N+V/a36DzZNFzCTnaQyMnqVrMNBLOivnc1oDAxZKfh6Bsa6SlCKkbDDliCmfR/pI/306vCcF5Od1WsoybatPfFTVC2Uaq2oZq7vKPfMNyVRLK/yK2/QAAAAASUVORK5CYII=",
                                alt: ""
                            }), Object(u.jsx)("img", {
                                className: d.a.quotesRight,
                                src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAuCAMAAABOIvqXAAAAwFBMVEUAAAD06P/16v/16//36v/16v/27P/26//27P/06P/16f/37P/26//27P/26//27P/26f/17f/56//////16v/26//16//06P/05v/27P/16v/36//26v/16v//7//////16P/27P/16f/37P/26//16//26//57//37P/26v/26//16v/16f/27P/37P/26//47f/67f/47v//8v/26//06P/37P/15///8///7f/y5P/z5//y5f/06f/16v/27P8NqjbUAAAAOnRSTlMAz3KIO7np5vvm0r1zGvOMU00sBu7a1NHQkIWAODIKAvzLyq2pmmI9H/fPxLSwpWZZRCQSuXhdSRUO+NM0zgAAAclJREFUSMft02lT6jAYhuHA8UCBtkBZPLLKjvt2XNOk//9fmaSJPG8j6ox+9PkG19yhUybsO2vf3H3Em/Z2r/WyrDu7XD/v4UWWxf2LMHrPYmkWnL3PM8ung6RId1IKM8X/b/20al3lpxtKB0ZsfdKcFMppABwsI7S1EDyf0WqbprcSXcYh2NBQmjoNruj7z8s3lkc7u9SWmuUqh5iWPV5OnTWsOaUHs6bPjY616WbQ0/aiplXjNbRJOOccmR7dLmnUy7HyxHCjc2DlwQhwGsakvWB0rVqq3XGvgziukfa60EYljm2T4Ja0M1bY5IwDxxOCj9y22sS42G672F5RXGK7YsXdI8+pJXx3ruh2vEfGn5UJxTme22LFrZAH1AZoQy9t4VOd7ze+8NJIszu6R22E1mfejoGP9btYVNSqarUaT3d24i5lRc8wpubfa2RSTeTXFsy+4iPHAjjl4kanGqB0Ftlbt2OStkxqvjeCaeJSyu6p1jp1J2qC1N6sP8iQlpX91WQB7cClyH4K4KXIfkrJT4Fpyj9L09/0N/1qKn40TUnKfcab45GA1Ge8r3QcUmBwESpb9euHpX8lmPp0WK+P87S8hx/YN/YK6QFo0NXHJ6QAAAAASUVORK5CYII=",
                                alt: ""
                            }), Object(u.jsx)("p", {
                                children: e({
                                    id: "about.remarks1"
                                })
                            }), Object(u.jsx)("p", {
                                children: e({
                                    id: "about.remarks2"
                                })
                            })]
                        }), Object(u.jsx)("div", {
                            className: d.a.bannerTexSpeech,
                            children: "\u2014\u2014 prince"
                        })]
                    }), Object(u.jsx)("div", {
                        className: d.a.right
                    })]
                }), Object(u.jsxs)("div", {
                    className: g()(d.a.flexTC, d.a.courseAndFamilyBox),
                    children: [Object(u.jsx)("div", {
                        className: d.a.left
                    }), Object(u.jsxs)("div", {
                        className: d.a.courseAndFamilyContent,
                        children: [Object(u.jsx)("h3", {
                            className: d.a.courseTitle,
                            children: e({
                                id: "about.toolCourse"
                            })
                        }), Object(u.jsxs)("div", {
                            className: d.a.courseList,
                            children: [Object(u.jsx)("div", {
                                className: d.a.courseUpList,
                                children: h.map((function(e) {
                                    return Object(u.jsxs)("div", {
                                        className: g()(d.a.courseItem, d.a.courseUpItem),
                                        children: [Object(u.jsx)("img", {
                                            className: d.a.courseUpImg,
                                            src: "https://static.codemao.cn/coco/image/about_page_timeline_up.png",
                                            alt: ""
                                        }), Object(u.jsxs)("div", {
                                            className: d.a.courseText,
                                            children: [Object(u.jsx)("p", {
                                                className: d.a.courseItemTitle,
                                                children: e.time
                                            }), Object(u.jsx)("p", {
                                                className: d.a.courseItemDesc,
                                                children: e.desc
                                            })]
                                        })]
                                    })
                                }
                                ))
                            }), Object(u.jsx)("div", {
                                className: d.a.courseTimeline,
                                children: Object(u.jsx)("img", {
                                    className: d.a.courseTimelineImg,
                                    src: "https://static.codemao.cn/coco/image/about_page_timeline.png",
                                    alt: ""
                                })
                            }), Object(u.jsx)("div", {
                                className: d.a.courseDownList,
                                children: f.map((function(e) {
                                    return Object(u.jsxs)("div", {
                                        className: g()(d.a.courseItem, d.a.courseDownItem),
                                        children: [Object(u.jsx)("img", {
                                            className: d.a.courseDownImg,
                                            src: "https://static.codemao.cn/coco/image/about_page_timeline_down.png",
                                            alt: ""
                                        }), Object(u.jsxs)("div", {
                                            className: d.a.courseText,
                                            children: [Object(u.jsx)("p", {
                                                className: d.a.courseItemTitle,
                                                children: e.time
                                            }), Object(u.jsx)("p", {
                                                className: d.a.courseItemDesc,
                                                children: e.desc
                                            })]
                                        })]
                                    })
                                }
                                ))
                            })]
                        }), Object(u.jsx)("h3", {
                            className: d.a.familyTitle,
                            children: e({
                                id: "about.familyPhoto"
                            })
                        }), Object(u.jsxs)("div", {
                            className: d.a.familyBox,
                            children: [Object(u.jsx)("div", {
                                className: d.a.familyImgBox,
                                children: Object(u.jsx)("img", {
                                    className: d.a.familyPhotoImg,
                                    src: "https://static.codemao.cn/coco/image/about_page_family.png",
                                    alt: "family"
                                })
                            }), Object(u.jsx)("div", {
                                className: d.a.familyIconBox,
                                children: Object(u.jsx)("img", {
                                    className: d.a.familyLikeImg,
                                    src: "https://static.codemao.cn/coco/image/about_page_like.png",
                                    alt: "like"
                                })
                            })]
                        })]
                    }), Object(u.jsx)("div", {
                        className: d.a.right
                    })]
                }), Object(u.jsxs)("div", {
                    className: g()(d.a.flexTC, d.a.TeamBox),
                    children: [Object(u.jsx)("div", {
                        className: d.a.left
                    }), Object(u.jsxs)("div", {
                        className: d.a.teamContent,
                        children: [Object(u.jsx)("div", {
                            className: d.a.thanksText,
                            children: "\u2014 Thanks \u2014"
                        }), x.map((function(e) {
                            return Object(u.jsxs)("div", {
                                className: d.a.teamItem,
                                children: [Object(u.jsx)("img", {
                                    className: d.a.teamIcon,
                                    src: e.icon,
                                    alt: ""
                                }), Object(u.jsxs)("div", {
                                    className: d.a.itemDetail,
                                    children: [Object(u.jsx)("p", {
                                        className: d.a.itemPosition,
                                        children: e.position
                                    }), Object(u.jsx)("p", {
                                        className: d.a.itemMember,
                                        children: e.member
                                    })]
                                })]
                            })
                        }
                        ))]
                    }), Object(u.jsx)("div", {
                        className: d.a.right
                    })]
                })]
            })
        };
        m.a.render(Object(u.jsx)(l.a, {
            locale: r,
            messages: b["zh-CN"],
            children: Object(u.jsx)(y, {})
        }), document.getElementById("root"))
    }
}, [[64, 1, 2]]]);
//# sourceMappingURL=main.0ac09eb1.chunk.js.map
