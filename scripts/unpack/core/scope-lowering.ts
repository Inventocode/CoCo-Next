import * as t from "@babel/types"
import traverse from "@babel/traverse"
import cliProgress from "cli-progress"

import { Module, ModuleMap } from "./types"
import { getModuleByKey } from "./utils"

interface ModulePart extends Module {
    importsMap: Map<ModulePart, Set<string>>
    exports: Set<string>
    count: number
}

export function scopeLowering(modules: ModuleMap) {
    console.log("scope lowering")
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
    bar.start(Object.keys(modules).length, 0)
    for (const module of Object.values(modules)) {
        const { AST: { program } } = module
        if (module.external != null && program.sourceType != "module") {
            bar.increment()
            continue
        }
        const indexModule: ModulePart = {
            ...module,
            AST: t.file(t.program([], [], "module")),
            dependency: new Set(module.dependency),
            importsMap: new Map(),
            exports: new Set(),
            count: Infinity
        }
        const moduleParts: ModulePart[] = []
        const statementToModuleMap = new Map<t.Statement, ModulePart>()
        function addStatementToModulePart(module: ModulePart, statement: t.Statement, method: "push" | "unshift" = "push") {
            statementToModuleMap.set(statement, module)
            module.AST.program.body[method](statement)
        }
        function removeStatementFromModulePart(module: ModulePart, statement: t.Statement) {
            statementToModuleMap.delete(statement)
            const index = module.AST.program.body.indexOf(statement)
            index != -1 && module.AST.program.body.splice(index, 1)
        }
        let lastStatement = null
        for (const statement of program.body) {
            if (t.isExportDeclaration(statement)) {
                addStatementToModulePart(indexModule, statement)
                continue
            }
            if (
                (t.isImportDeclaration(statement) && !t.isImportDeclaration(lastStatement)) ||
                moduleParts.length == 0
            ) {
                moduleParts.push({
                    key: `${module.key}__part-${moduleParts.length}`,
                    path: [...module.path.slice(0, -1), `${module.path.slice(-1)[0]}__part-${moduleParts.length}`],
                    args: module.args,
                    AST: t.file(t.program([], program.directives, "module")),
                    isEntry: false,
                    dependency: new Set(),
                    reference: new Set(),
                    importsNameMap: {},
                    importsNameToModuleMap: {},
                    exportsNameMap: {},
                    importsMap: new Map(),
                    exports: new Set(),
                    count: moduleParts.length
                })
            }
            addStatementToModulePart(moduleParts.slice(-1)[0]!, statement)
            lastStatement = statement
        }
        if (moduleParts.length <= 1) {
            bar.increment()
            continue
        }
        modules[indexModule.key] = indexModule
        for (const modulePart of moduleParts) {
            modules[modulePart.key] = modulePart
        }
        traverse(module.AST, {
            Program(path) {
                const { scope } = path
                scope.crawl()
                for (const binding of Object.values(scope.bindings)) {
                    const { name } = binding.identifier
                    const declarationStatement = binding.path.getStatementParent()!
                    if (!declarationStatement.parentPath.isProgram()) {
                        continue
                    }
                    let declarationModule = statementToModuleMap.get(declarationStatement.node)!
                    for (const constantViolation of binding.constantViolations) {
                        const constantViolationStatement = constantViolation.find(path => path.parentPath?.isProgram() ?? false)!.node as t.Statement
                        const constantViolationModule = statementToModuleMap.get(constantViolationStatement)!
                        if (constantViolationModule != declarationModule) {
                            removeStatementFromModulePart(declarationModule, declarationStatement.node)
                            addStatementToModulePart(constantViolationModule, declarationStatement.node, "unshift")
                            declarationModule = constantViolationModule
                            break
                        }
                    }
                    for (const referencePath of binding.referencePaths) {
                        const referenceModule = statementToModuleMap.get(
                            referencePath.find(path => path.parentPath?.isProgram() ?? false)!.node as t.Statement
                        )!
                        if (referenceModule == declarationModule) {
                            continue
                        }
                        if (declarationStatement.isImportDeclaration()) {
                            if (!Object.hasOwn(referenceModule.importsNameToModuleMap, name)) {
                                referenceModule.AST.program.body.unshift(declarationStatement.node)
                                referenceModule.importsNameToModuleMap[name] = module.importsNameToModuleMap[name]!
                            }
                        } else {
                            let importSet = referenceModule.importsMap.get(declarationModule)
                            if (importSet == null) {
                                importSet = new Set()
                                referenceModule.importsMap.set(declarationModule, importSet)
                            }
                            importSet.add(name)
                            declarationModule.exports.add(name)
                            referenceModule.dependency.add(declarationModule)
                            declarationModule.reference.add(referenceModule)
                        }
                    }
                }
                for (const modulePart of moduleParts) {
                    if (modulePart.reference.size == 0) {
                        indexModule.importsMap.set(modulePart, new Set())
                    }
                }
                for (const modulePart of [indexModule, ...moduleParts]) {
                    const imports = Array.from(modulePart.importsMap.entries())
                    imports.sort(([module1], [module2]) => (module2.count - module1.count))
                    for (const [sourceModule, names] of imports) {
                        modulePart.AST.program.body.unshift(t.importDeclaration(
                            Array.from(names).map(name => t.importSpecifier(t.identifier(name), t.stringLiteral(`${sourceModule.key}__${name}`))),
                            t.stringLiteral(`./${getModuleByKey(modules, sourceModule.key).path.slice(-1)[0]}`)
                        ))
                    }
                    for (const name of modulePart.exports) {
                        modulePart.AST.program.body.push(t.exportNamedDeclaration(
                            null,
                            [t.exportSpecifier(t.identifier(name), t.stringLiteral(`${modulePart.key}__${name}`))]
                        ))
                    }
                }
            }
        })
        bar.increment()
    }
    bar.stop()
}
