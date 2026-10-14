import * as SandboxJS from "@nyariv/sandboxjs"

import { IExecutable, ISandbox, ISandboxProps, IScope } from "../common/interface"
import { defaultProps } from "../common/default-props"

export class Sandbox implements ISandbox {

    public readonly globalThis: IScope

    private readonly inner: SandboxJS.Sandbox

    public constructor(public readonly props: ISandboxProps) {
        this.inner = new SandboxJS.Sandbox({
            globals: { ...SandboxJS.Sandbox.SAFE_GLOBALS }
        })
    }

    public async compile(this: this, code: string): Promise<IExecutable> {
        code = (await (await import("@babel/core")).transformAsync(code, {
            plugins: [
                (await import("@babel/plugin-transform-class-properties")).default,
                (await import("@babel/plugin-transform-class-static-block")).default,
                (await import("@babel/plugin-transform-classes")).default
            ]
        }))?.code ?? code
        return new Executable(this, this.inner.compile(code))
    }
}

export class Executable implements IExecutable {

    public constructor(
        public readonly sandbox: ISandbox,
        private readonly exec: (...scopes: SandboxJS.IScope[]) => {
            context: SandboxJS.IExecContext;
            run: () => unknown;
        }
    ) {
        this.sandbox = sandbox
    }

    public run<T = void>(this: this, ...scopes: {}[]): T {
        let localVariables = {}
        return this.exec(...scopes, localVariables).run() as T
    }
}
