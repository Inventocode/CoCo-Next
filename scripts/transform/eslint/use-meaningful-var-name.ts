import { Rule } from "eslint"
import * as ESTree from "estree"
import { isIdentifierName, isKeyword, isStrictBindOnlyReservedWord, isStrictReservedWord } from "@babel/helper-validator-identifier"
import globals from "globals"

const MARKING_COMMENT_CONTENT = " [auto-meaningful-name] "

export const useMeaningfulVarNameRule: Rule.RuleModule = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Use meaningful variable names based on import sources or assignments",
            category: "Best Practices",
        },
        fixable: "code",
        schema: [],
    },
    create(context) {
        function renameIfNeeds(node: ESTree.Identifier, newName: string, capitalize = false) {
            const oldName = node.name
            const { sourceCode } = context
            const hasMarkingComment = sourceCode.getCommentsBefore(node).some(comment =>
                comment.value === MARKING_COMMENT_CONTENT
            )
            if (oldName.length > 2 && !hasMarkingComment) {
                return
            }
            const nameParts = newName.match(/(_|\$|[0-9]|[a-z]|[A-Z]|\.|\\|\/)*/g)
            if (!nameParts) return
            let processedNewName = capitalize ? nameParts.map(upperFirst).join("") : nameParts.shift() + nameParts.map(upperFirst).join("")
            if (processedNewName.length <= 4) {
                return
            }
            processedNewName = processedNewName.replace(/\./g, "$").replace(/\\|\//g, "_")
            if (
                !isIdentifierName(processedNewName) ||
                isKeyword(processedNewName) ||
                isStrictReservedWord(processedNewName, true) ||
                isStrictBindOnlyReservedWord(processedNewName) ||
                Object.hasOwn(globals.builtin, processedNewName) ||
                Object.hasOwn(globals.browser, processedNewName)
            ) {
                processedNewName = "_" + processedNewName
            }
            if (oldName === processedNewName) return
            const scope = sourceCode.getScope(node)
            if (scope.set.has(processedNewName)) {
                let counter = 0
                let uniqueName = processedNewName
                while (scope.set.has(uniqueName)) {
                    counter++
                    uniqueName = processedNewName + counter
                    if (oldName === uniqueName) return
                }
                processedNewName = uniqueName
            }
            if (oldName === processedNewName) return
            scope.set.set(processedNewName, {
                name: processedNewName,
                scope,
                identifiers: [],
                references: [],
                defs: []
            })
            context.report({
                node,
                message:
                    hasMarkingComment ?
                    `"${oldName}" can update to "${processedNewName}"` :
                    `"${oldName}" can be renamed to "${processedNewName}"`,
                fix(fixer) {
                    const identifiers = new Set([
                        node,
                        ...scope.set.get(oldName)?.references.map(({identifier}) => identifier) ?? []
                    ])
                    return Array.from(identifiers).map(
                        identifier => fixer.replaceText(
                            identifier,
                            !hasMarkingComment && identifier == node ?
                            `/*${MARKING_COMMENT_CONTENT}*/` + processedNewName :
                            processedNewName
                        )
                    )
                }
            })
        }

        function upperFirst(text: string): string {
            return text.slice(0, 1).toUpperCase() + text.slice(1)
        }

        return {
            ImportDeclaration(node) {
                const importSourceName = node.source.value as string
                for (const specifier of node.specifiers) {
                    if (specifier.type === "ImportDefaultSpecifier" || specifier.type === "ImportNamespaceSpecifier") {
                        renameIfNeeds(specifier.local, importSourceName, true)
                    }
                }
            },
            TSImportEqualsDeclaration(node: any) {
                if (node.moduleReference.type !== "TSExternalModuleReference") {
                    return
                }
                const importSourceName = node.moduleReference.expression.value
                renameIfNeeds(node.id, importSourceName, true)
            },
            VariableDeclarator(node) {
                if (node.id.type !== "Identifier") return
                const { sourceCode } = context
                let assignValue: ESTree.Node | null = null
                if (node.init) {
                    assignValue = node.init
                } else {
                    const scope = sourceCode.getScope(node)
                    const variable = scope.set.get(sourceCode.getText(node.id))
                    if (variable == null) {
                        return
                    }
                    for (const { identifier } of variable.references) {
                        let assignment: ESTree.Node | null | undefined = identifier
                        while (assignment.type !== "AssignmentExpression") {
                            assignment = (assignment as ESTree.Node & Rule.NodeParentExtension).parent
                            if (assignment === null || assignment === undefined) {
                                return
                            }
                        }
                        if (
                            assignment.left.type !== "Identifier" ||
                            sourceCode.getText(assignment.left) !== sourceCode.getText(node.id)
                        ) {
                            continue
                        }
                        if (assignValue !== null) {
                            return
                        }
                        assignValue = assignment.right
                    }
                }
                if (assignValue === null) {
                    return
                }
                /** @type {string} */
                let valueStr = ""
                if (assignValue.type === "MemberExpression" && !assignValue.computed) {
                    valueStr = sourceCode.getText(assignValue)
                } else if (assignValue.type === "Literal" && typeof assignValue.value === "string") {
                    valueStr = assignValue.value
                } else {
                    return
                }
                renameIfNeeds(node.id, valueStr)
            }
        }
    }
}
