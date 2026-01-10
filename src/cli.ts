import fs = require("fs");
const { lex } = require("./lexar");
const { parse } = require("./parser");
const { generate } = require("./generator");

const input = fs.readFileSync(process.argv[2], "utf8");
const tokens = lex(input);
const ast = parse(tokens);
const js = generate(ast);

console.log(js);
