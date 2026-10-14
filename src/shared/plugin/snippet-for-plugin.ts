/**
 * 直接让插件生成可执行的代码是不安全的。为了保证安全性，插件必须通过该生成器生成有限制的的代码。
 *
 * 目前仅支持标识符（用于回调函数的参数）和调用控件加载器中的方法。
 *
 * 暂时没有其他更好的方案。考虑过的方案有：
 *
 * 1. 将插件生成的代码放到沙箱中运行
 *
 * 该方案的问题在于难以区分“插件生成的代码”。
 *
 * 例如：插件生成了一段函数调用代码，该函数调用的参数可能来自其他积木，但仅根据插件返回的结果，无法判断这些参数是由插件自身生成的还是来自其他积木。
 */

import * as Type from "../widget/custom/type"
import { BlockSnippetManager } from "../../editor/block/declare/manager/snippet"

export type IGenerateInfo = IParam | IMethodCall

export interface IParam {
    type: "param"
    name: string
}

export interface IMethodCall {
    type: "method"
    /**
     * 要调用的位于加载器中的方法。
     */
    key: string
    args: IMethodArgument[] | (() => Generator<IMethodArgument, void, boolean>)
}

export type IMethodArgument = IMethodJSONArgument | IMethodFieldArgument | IMethodValueArgument | IMethodStatementArgument

export interface IBaseMethodArgument {
    type: string
}

export interface IMethodJSONArgument extends IBaseMethodArgument {
    type: "json"
    value: unknown
}

export interface IMethodFieldArgument extends IBaseMethodArgument {
    type: "field"
    id: string
    special?: "variable"
}

export interface IMethodValueArgument extends IBaseMethodArgument {
    type: "value"
    id: string
}

export interface IMethodStatementArgument extends IBaseMethodArgument {
    type: "statement"
    id: string
    params: string[] | (() => Generator<string, void, boolean>)
}

export const blockSnippetSettersForPlugin = new Set<(manager: BlockSnippetManager) => void>()

export function createBlockSnippetSetter(type: string, infos: Record<string, IGenerateInfo>) {
    type = Type.standardize(type, false)
    blockSnippetSettersForPlugin.add(setBlockGroupSnippet)
    return setBlockGroupSnippet
    function setBlockGroupSnippet(manager: BlockSnippetManager) {
        for (const [key, info] of Object.entries(infos)) {
            manager.insertBlockSnippetGenerator(key, (workspaceJson, id): [string, number] => {
                switch (info.type) {
                    case "param":
                        return ["_" + info.name.match(/[\d,a-z,A-Z,_,\$]/g)?.join(""), manager.ORDER_ATOMIC]
                    case "method":
                        const args = [
                            JSON.stringify(type),
                            JSON.stringify(info.key)
                        ]
                        const block = workspaceJson.blocks[id]!
                        const argsInfo: Generator<IMethodArgument, void, boolean> =
                            Array.isArray(info.args) ?
                            function *(args) { for (const argument of args) { yield argument } }(info.args) :
                            info.args()
                        let lastExist = false
                        let result
                        while (!(result = argsInfo.next(lastExist)).done) {
                            const argument = result.value
                            switch (argument.type) {
                                case "json":
                                    args.push(JSON.stringify(argument.value))
                                    break
                                case "field":
                                    const value = manager.getFieldValue(block, argument.id)
                                    if (value === undefined) {
                                        lastExist = false
                                        continue
                                    }
                                    args.push(argument.special === "variable" ? `Coco.getVariableValue(${JSON.stringify(value)})` : JSON.stringify(value))
                                    break
                                case "value":
                                    const code = manager.valueToCode(workspaceJson, id, argument.id, manager.ORDER_ATOMIC)
                                    if (!code) {
                                        lastExist = false
                                        continue
                                    }
                                    args.push(code)
                                    break
                                case "statement":
                                    const statement = manager.statementToCode(workspaceJson, id, argument.id)
                                    if (!statement) {
                                        lastExist = false
                                        continue
                                    }
                                    const paramsInfo: Generator<string, void, boolean> =
                                        Array.isArray(argument.params) ?
                                        function *(params) { for (const param of params) { yield param } }(argument.params) :
                                        argument.params()
                                    const params: string[] = []
                                    lastExist = false
                                    let result
                                    while (!(result = paramsInfo.next(lastExist)).done) {
                                        const paramID = result.value
                                        const param = manager.valueToCode(workspaceJson, id, paramID, manager.ORDER_ATOMIC)
                                        if (!param) {
                                            lastExist = false
                                            continue
                                        }
                                        params.push(param)
                                        lastExist = true
                                    }
                                    args.push(`(${params.join(",")}) => {\n${statement}\n}`)
                                    break
                            }
                            lastExist = true
                        }
                        return [`CocoExtension.callInternalLoadersMethod(${args.join(",")})`, manager.ORDER_FUNCTION_CALL]
                }
            })
        }
    }
}
