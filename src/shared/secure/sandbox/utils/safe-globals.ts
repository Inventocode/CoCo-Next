import globals from "globals"

import { IScope } from "../common/interface"

export const SAFE_GLOBALS: IScope = {}


for (const name of Object.keys(globals.builtin)) {
    if (["eval", "globalThis", "Function"].includes(name)) {
        continue
    }
    SAFE_GLOBALS[name] = (globalThis as IScope)[name]
}
