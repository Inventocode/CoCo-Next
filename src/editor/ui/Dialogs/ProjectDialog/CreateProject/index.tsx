import * as /* [auto-meaningful-name] */Module_141 from /* 141 */"../../../../../../unrestored/shared/1571/2636/141/index"
import * as /* [auto-meaningful-name] */Module_18 from /* 18 */"../../../../../../unrestored/shared/1571/2636/18"
import { closeProjectDialogAction } from "../../../../redux/common/actions"
import { IconFont } from "../../../../../shared/ui/components/index"
import classNames from "classnames"
import { useDispatch, useSelector } from "react-redux"
import React, { memo } from "react"
import axios from "axios"
import styles from "./styles.module.css"

export interface  ICreateProjectProps {
  visible: boolean
  importProjectJson
}

export const CreateProject = memo(({ visible, importProjectJson }: ICreateProjectProps) => {

  const dispatch = useDispatch()

  const templateList = useSelector((state) =>  state.common.templateList)

  async function openTemplate(bcmUrl: string, name: string) {
    const response= await axios.get(bcmUrl)
    if (response.data) {
      const { data } = response
      importProjectJson({
        json: data,
        jsonFrom: Module_18.d.TEMPLATE,
        sourceTag: Module_18.g.TEMPLATE,
        sourceId: name
      })
    }
    dispatch(closeProjectDialogAction())
    Module_141.a("TemplateClick", { templateName: name })
  }

  return visible ? <div className={styles.container}>
    <div
      className={styles.itemContainer}
      onClick={() => {
        importProjectJson()
        dispatch(closeProjectDialogAction())
      }}
    >
      <div className={classNames(styles.emptyItem, styles.item)}>
        <div className={styles.emptyContent}>
          <span className={styles.iconContainer}>
            <IconFont type="icon-add" className={styles.icon} />
          </span>
          <p className={styles.text}>创建空白作品</p>
        </div>
      </div>
    </div>
    {templateList.length > 0 && templateList.map((template) => <div
      className={styles.itemContainer}
      key={template.id}
      onClick={() => { openTemplate(template.bcmUrl, template.name) }}
    >
      <div
        className={classNames(styles.item)}
        style={{ backgroundImage: `url(${template.image})` }}
      >
        <img src={template.gif} alt={template.name} className={styles.gif} />
      </div>
    </div>)}
  </div> : null
})
