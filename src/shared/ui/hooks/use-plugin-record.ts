import { useEffect, useState } from "react"
import _ from "lodash"

import { IPluginRegistration } from "../../plugin/registration"

export function usePluginRecord<T>(registration: IPluginRegistration<T, any>): Record<string, T> {
    const [record, setRecord] = useState<Record<string, T>>({})
    useEffect(() => {
        const set = _.debounce(async () => {
            // 为了触发重渲染，必须复制一遍保证每次更新时的状态都是不同的
            setRecord({ ...await registration.getRecord() })
        }, 0)
        set()
        registration.changed.on(set)
        return () => { registration.changed.off(set) }
    }, [])
    return record
}
