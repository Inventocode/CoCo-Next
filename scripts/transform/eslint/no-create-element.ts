import { Rule } from "eslint"

export const noCreateElement: Rule.RuleModule = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow React.createElement, prefer JSX",
      category: "Best Practices",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          /React\d*/.test(node.callee.object.name) &&
          !node.callee.computed &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "createElement" &&
          node.arguments.length >= 1
        ) {
          const [typeArg, propsArg, ...childrenArgs] = node.arguments
          if (typeArg === undefined) {
            return
          }
          const { sourceCode } = context
          context.report({
            node,
            message: "Do not use React.createElement, use JSX instead.",
            fix(fixer) {
              let type
              if (typeArg.type === "Literal" && typeof typeArg.value === "string") {
                type = typeArg.value
              } else if (typeArg.type === "Identifier") {
                if (typeArg.name.charAt(0) !== typeArg.name.charAt(0).toUpperCase()) {
                  return null
                }
                type = typeArg.name
              } else if (typeArg.type === "MemberExpression") {
                if (
                  !typeArg.computed &&
                  typeArg.object.type === "Identifier" &&
                  /React\d*/.test(typeArg.object.name) &&
                  typeArg.property.type === "Identifier" &&
                  typeArg.property.name === "Fragment"
                ) {
                  type = ""
                } else {
                  type = sourceCode.getText(typeArg)
                }
              } else {
                return null
              }
              let propsStr = ""
              if (propsArg && propsArg.type === "ObjectExpression") {
                for (const prop of propsArg.properties) {
                  if (prop.type !== "Property") {
                    return null
                  }
                  let propName
                  if (prop.key.type === "Identifier") {
                    propName = prop.key.name
                  } else if (prop.key.type === "Literal" && typeof prop.key.value === "string") {
                    propName = prop.key.value
                  }
                  if (!propName || !/^([a-z]|[A-Z]|-|_|$)([a-z]|[A-Z]|[0-9]|-|_|$)*$/.test(propName)) {
                    return null
                  }
                  const value = sourceCode.getText(prop.value)
                  propsStr += `\n${propName}=${prop.value.type === "Literal" && typeof prop.value === "string" ? value : `{${value}}`}`
                }
                propsStr && (propsStr += "\n")
              } else if (propsArg?.type == "Literal" && propsArg.value === null) {
                propsStr = ""
              } else {
                return null
              }
              let childrenStr = childrenArgs.map(child => {
                if (child.type === "Literal") {
                  return child.value
                }
                return `{${sourceCode.getText(child)}}`
              }).join("\n")
              childrenStr && (childrenStr = `\n${childrenStr}\n`)
              const jsx = type != "" && childrenStr == "" ? `<${type}${propsStr}/>` : `<${type}${propsStr}>${childrenStr}</${type}>`
              return fixer.replaceText(node, jsx)
            }
          })
        }
      }
    }
  }
}
