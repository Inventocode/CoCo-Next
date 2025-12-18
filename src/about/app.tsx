/**
 * 由 CoCo 源代码计划解包器解包
 *
 * 模块 ID：64__part-3
 */

import * as React from "react"
import { render } from "react-dom"

import { zh_CN, messages } from "./language"
import { a as ReactIntl } from "../../unrestored/about/64/73/index"
import * as /* [auto-meaningful-name] */$$_$$_unrestored_about_64_71_index from "../../unrestored/about/64/71/index"
import /* [auto-meaningful-name] */$$_$$_unrestored_about_64_30 from "../../unrestored/about/64/30"
import styles from "./styles.module.css"
import Logo from "./assets/images/logo.png"
import quotesLeft from "./assets/images/quotes/left.png"
import quotesRight from "./assets/images/quotes/right.png"

interface TeamItem {
  icon: string
  position: string
  member: string
}

const TEAM_ITEMS: TeamItem[] = [
  {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble6.png",
    position: "Next",
    member: "SLIGHTNING、Inventocode、耗子"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble1.png",
    position: "产品",
    member: "颢哥、coco鸭、momo、一凡、ss、prince、Joe、文伟、宝中健身狂"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble2.png",
    position: "开发",
    member: "锋哥、小李子、于勤Web、宇婷、最美的小鸟、乐天派GUM、gbao、ph、澄哥、cai_32、KK、格乌夜"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble3.png",
    position: "设计",
    member: "二十八度晴天、大田、桂芬、小白、楠哥、忠实干饭人、台风支柱、玲玲子"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble4.png",
    position: "测试",
    member: "乐乐鸭、神秘人、QQ、冰西瓜、老白"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble5.png",
    position: "运营",
    member: "雷电猴、活动猫、星能猫、蜘蛛侠"
  }, {
    icon: "https://static.codemao.cn/coco/image/about_page_pebble6.png",
    position: "特别鸣谢",
    member: "epeiuss、海藻酸钠、方橙"
  }
]

interface CourseItem {
  time: string
  desc: string
}

const COURSE_UP_ITEMS: CourseItem[] = [
  {
    time: "2021年春节后",
    desc: "第一次社区内测"
  }, {
    time: "2021年7月中旬",
    desc: "社区正式上线公测"
  }, {
    time: "2025年6月中旬",
    desc: "CoCo 源代码计划启动"
  }
]
const COURSE_DOWN_ITEMS: CourseItem[] = [
  {
    time: "2020年",
    desc: "项目启动"
  }, {
    time: "2021年6月",
    desc: "第二次社区内测"
  }, {
    time: "2021年7月29日",
    desc: "工具发布会上闪亮登场"
  }, {
    time: "2025年10月中旬",
    desc: "CoCo Next 立项"
  }
]

function App() {
  var formatMessage = $$_$$_unrestored_about_64_71_index.a().formatMessage
  return (
    <div className={styles.pageWrapper}>
      <div className={$$_$$_unrestored_about_64_30(styles.flexTC, styles.bannerBox)}>
        <img className={styles.bannerLeftBg} src="https://static.codemao.cn/coco/image/about_page_left_banner.png" alt="" />
        <img className={styles.bannerRightBg} src="https://static.codemao.cn/coco/image/about_page_right_banner.png" alt="" />
        <div className={styles.left} />
        <div className={styles.bannerContent}>
          <div className={styles.bannerLogoBox}>
            <img className={styles.bannerLogoImg} src={Logo} alt="logo" />
          </div>
          {/* [CoCo Next] 添加 SLIGHTNING 的话语 */}
          <div className={styles.bannerText}>
            <img className={styles.quotesLeft} src={quotesLeft} alt="" />
            <img className={styles.quotesRight} src={quotesRight} alt="" />
            <p>{formatMessage({ id: "next.about.remarks1" })}</p>
            <p>{formatMessage({ id: "next.about.remarks2" })}</p>
          </div>
          <div className={styles.bannerTexSpeech}>—— SLIGHTNING</div>
          <div className={styles.bannerText}>
            <img className={styles.quotesLeft} src={quotesLeft} alt="" />
            <img className={styles.quotesRight} src={quotesRight} alt="" />
            <p>{formatMessage({ id: "about.remarks1" })}</p>
            <p>{formatMessage({ id: "about.remarks2" })}</p>
          </div>
          <div className={styles.bannerTexSpeech}>—— prince</div>
        </div>
        <div className={styles.right} />
      </div>

      <div className={$$_$$_unrestored_about_64_30(styles.flexTC, styles.courseAndFamilyBox)}>
        <div className={styles.left} />
        <div className={styles.courseAndFamilyContent}>
          <h3 className={styles.courseTitle}>{formatMessage({ id: "about.toolCourse" })}</h3>
          <div className={styles.courseList}>
            <div className={styles.courseUpList}>{COURSE_UP_ITEMS.map((item, idx) =>
              <div key={idx} className={$$_$$_unrestored_about_64_30(styles.courseItem, styles.courseUpItem)}>
                <img className={styles.courseUpImg} src="https://static.codemao.cn/coco/image/about_page_timeline_up.png" alt="" />
                <div className={styles.courseText}>
                  <p className={styles.courseItemTitle}>{item.time}</p>
                  <p className={styles.courseItemDesc}>{item.desc}</p>
                </div>
              </div>)}</div>
            <div className={styles.courseTimeline}>
              <img className={styles.courseTimelineImg} src="https://static.codemao.cn/coco/image/about_page_timeline.png" alt="" />
            </div>
            <div className={styles.courseDownList}>{COURSE_DOWN_ITEMS.map((item, idx) =>
              <div key={idx} className={$$_$$_unrestored_about_64_30(styles.courseItem, styles.courseDownItem)}>
                <img className={styles.courseDownImg} src="https://static.codemao.cn/coco/image/about_page_timeline_down.png" alt="" />
                <div className={styles.courseText}>
                  <p className={styles.courseItemTitle}>{item.time}</p>
                  <p className={styles.courseItemDesc}>{item.desc}</p>
                </div>
              </div>)}</div>
          </div>

          <h3 className={styles.familyTitle}>{formatMessage({ id: "about.familyPhoto" })}</h3>
          <div className={styles.familyBox}>
            <div className={styles.familyImgBox}>
              <img className={styles.familyPhotoImg} src="https://static.codemao.cn/coco/image/about_page_family.png" alt="family" />
            </div>
            <div className={styles.familyIconBox}>
              <img className={styles.familyLikeImg} src="https://static.codemao.cn/coco/image/about_page_like.png" alt="like" />
            </div>
          </div>
        </div>
        <div className={styles.right} />
      </div>

      <div className={$$_$$_unrestored_about_64_30(styles.flexTC, styles.TeamBox)}>
        <div className={styles.left} />
        <div className={styles.teamContent}>
          <div className={styles.thanksText}>— Thanks —</div>
          {TEAM_ITEMS.map((item, idx) =>
            <div key={idx} className={styles.teamItem}>
              <img className={styles.teamIcon} src={item.icon} alt="" />
              <div className={styles.itemDetail}>
                <p className={styles.itemPosition}>{item.position}</p>
                <p className={styles.itemMember}>{item.member}</p>
              </div>
            </div>)}
        </div>
        <div className={styles.right} />
      </div>
    </div>
  )
}

render(
  <ReactIntl locale={zh_CN} messages={messages["zh-CN"]}>
    <App />
  </ReactIntl>,
  document.getElementById("root")
)
