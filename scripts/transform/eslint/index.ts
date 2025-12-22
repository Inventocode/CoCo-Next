import { ESLint } from "eslint"

import { useMeaningfulVarNameRule } from "./use-meaningful-var-name"
import { noCreateElement } from "./no-create-element"

export const transform: ESLint.Plugin = {
    rules: {
        "use-meaningful-var-name": useMeaningfulVarNameRule,
        "no-create-element": noCreateElement
    }
}
