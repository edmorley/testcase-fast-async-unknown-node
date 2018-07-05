## STR:

1. Clone this repo
2. `yarn`
3. `yarn babel testcase.js`

## Expected:

Command completes successfully, or else if the testcase's syntax is invalid,
a helpful error message is output.

## Actual:

```
ReferenceError: testcase.js: unknown node of type "Literal" with constructor "Object"
    at Generator.print (...\node_modules\babel-generator\lib\printer.js:279:13)
    at Generator.MemberExpression (...\node_modules\babel-generator\lib\generators\expressions.js:229:10)
    at ...\node_modules\babel-generator\lib\printer.js:298:23
    at Buffer.withSource (...\node_modules\babel-generator\lib\buffer.js:159:28)
    at Generator.withSource (...\node_modules\babel-generator\lib\printer.js:189:15)
    at Generator.print (...\node_modules\babel-generator\lib\printer.js:297:10)
    at Generator.AssignmentExpression (...\node_modules\babel-generator\lib\generators\expressions.js:190:8)
    at ...\node_modules\babel-generator\lib\printer.js:298:23
    at Buffer.withSource (...\node_modules\babel-generator\lib\buffer.js:159:28)
    at Generator.withSource (...\node_modules\babel-generator\lib\printer.js:189:15)
```

The exception no longer occurs if [nodent-compiler](https://github.com/MatAtBread/nodent-compiler)
is rolled back to `v3.1.8` (eg using yarn's `resolutions` feature). The first version that
triggers the exception is `v3.2.0`.
