/**
 * @fileoverview Disallow the usage of string literals in switch case statements.
 * @author Jordan Eldredge
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function isLiteralStringSwithCase(node) {
    return node.test &&
        node.test.type === 'Literal' &&
        typeof node.test.value === 'string';
}

module.exports = {
    meta: {
        docs: {
            description: "Disallow the usage of string literals in switch case statements.",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {
        return {
            SwitchCase: (node) => {
                if(isLiteralStringSwithCase(node)) {
                    context.report({
                        node: node.test,
                        message: "Do not use strings for switch cases"
                    });
                }
            }
        };
    }
};
