import * as React from "react"

import styles from "./styles.module.css"
import quotesLeft from "../../assets/images/quotes/left.png"
import quotesRight from "../../assets/images/quotes/right.png"

export function Speech(props: {
    children?: string | JSX.Element | Iterable<JSX.Element>
    tex?: string
}) {
    return <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
            <div className={styles.quotesLeftWrapper}>
                <img className={styles.quotes} src={quotesLeft} alt="“" />
            </div>
            <div className={styles.content}>{props.children}</div>
            <div className={styles.quotesRightWrapper}>
                <img className={styles.quotes} src={quotesRight} alt="”" />
            </div>
        </div>
        {props.tex && <div className={styles.tex}>—— {props.tex}</div>}
    </div>
}
