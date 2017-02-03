/**
 * @fileoverview Disallow the usage of string literals in switch case statements.
 * @author Jordan Eldredge
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-switch-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-switch-literal", rule, {

    valid: [
        "switch (foo) { case BAR: break;}",
        "switch (foo) { case 'BAR' + BAR: break;}",
        "switch (foo) { case BAR + 'BAR': break;}",
        "switch (foo) { default: break;}",
        "switch (foo) { case 0: break;}",
    ],

    invalid: [
        {
            code: "switch (foo) { case 'BAR': break;}",
            errors: [{
                message: "Do not use strings for switch cases",
                type: "Literal"
            }]
        },
        {
            code: 'switch (foo) { case "BAR": break;}',
            errors: [{
                message: "Do not use strings for switch cases",
                type: "Literal"
            }]
        },
        {
            code: 'switch (foo) { case ("BAR"): break;}',
            errors: [{
                message: "Do not use strings for switch cases",
                type: "Literal"
            }]
        }
    ]
});
