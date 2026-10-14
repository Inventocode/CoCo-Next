import { defaultProps } from "./common/default-props"
import { ISandbox, ISandboxProps } from "./common/interface"
import { Sandbox as UnsafeSandbox } from "./unsafe-sandbox"

export * from "./utils"
export * from "./common/interface"
export * as UnsafeSandbox from "./unsafe-sandbox"
export * as SandboxJS from "./sandboxjs"

export function createSandbox(
    props: Partial<ISandboxProps> = {},
    sandbox: new (props: ISandboxProps) => ISandbox = UnsafeSandbox
) {
    return new sandbox(Object.assign({}, defaultProps, props))
}
