import { NodePath, PluginObj, types } from "@babel/core"
import { isIdentifierName, isKeyword, isStrictBindOnlyReservedWord, isStrictReservedWord } from "@babel/helper-validator-identifier"
import globals from "globals"

const MARKING_COMMENT_CONTENT = " [auto-meaningful-name] "

export function useMeaningfulVarName(): PluginObj {
    return { visitor: {
        ImportDeclaration(path) {
            const { node: importDeclaration } = path
            const importSourceName = importDeclaration.source.value
            for (const specifier of path.get("specifiers")) {
                if (specifier.isImportDefaultSpecifier()) {
                    renameIfNeeds(specifier.get("local"), importSourceName, true)
                }
                if (specifier.isImportNamespaceSpecifier()) {
                    renameIfNeeds(specifier.get("local"), importSourceName, true)
                }
            }
        },
        TSImportEqualsDeclaration(path) {
            const { node: importDeclaration } = path
            const { moduleReference } = importDeclaration
            if (!types.isTSExternalModuleReference(moduleReference)) {
                return
            }
            const importSourceName = moduleReference.expression.value
            renameIfNeeds(path.get("id"), importSourceName, true)
        },
        VariableDeclarator(path) {
            const id = path.get("id")
            if (!id.isIdentifier()) {
                return
            }
            const { name } = id.node
            const binding = path.scope.getBinding(name)
            if (binding == null) {
                return
            }
            let assignValue = null
            const init = path.get("init")
            if (init.node != null) {
                assignValue = init
            } else if (binding.constantViolations.length == 1) {
                const assign = binding.constantViolations[0]
                if (!assign?.isAssignmentExpression()) {
                    return
                }
                assignValue = assign.get("right")
            }
            if (
                !assignValue?.isMemberExpression({ computed: false }) &&
                !assignValue?.isStringLiteral()
            ) {
                return
            }
            renameIfNeeds(id, assignValue.toString())
        }
    } }
}

function renameIfNeeds(
    path: NodePath<types.Identifier>,
    newName: string,
    capitalize: boolean = false
) {
    const { node } = path
    const oldName = node.name
    const hasMarkingComment = node.leadingComments?.some((comment) =>
        comment.value == MARKING_COMMENT_CONTENT
    ) || path.parent.leadingComments?.some((comment) =>
        comment.value == MARKING_COMMENT_CONTENT
    )
    if (oldName.length > 2 && !hasMarkingComment) {
        return
    }
    const nameParts = newName.match(/(_|\$|[0-9]|[a-z]|[A-Z]|\.|\\|\/)*/g)
    if (nameParts == null) {
        return
    }
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
    if (oldName == processedNewName) {
        return
    }
    const { scope } = path
    if (scope.getBinding(processedNewName) != null) {
        let counter = 0
        let uniqueName = processedNewName
        while (scope.getBinding(uniqueName) != null) {
            counter++
            uniqueName = processedNewName + counter
            if (oldName == uniqueName) {
                return
            }
        }
        processedNewName = uniqueName
    }
    if (!hasMarkingComment) {
        path.addComment("leading", MARKING_COMMENT_CONTENT)
    }
}

function upperFirst(text: string) {
    return text.slice(0, 1).toUpperCase() + text.slice(1)
}
