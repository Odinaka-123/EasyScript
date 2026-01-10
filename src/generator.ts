import { Statement } from "./ast";

export function generate(statements: Statement[]): string {
  let output = "";

  for (const stmt of statements) {
    if (stmt.type === "Set") {
      output += `let ${stmt.name} = ${JSON.stringify(stmt.value)};\n`;
    }

    if (stmt.type === "Say") {
      output += `console.log(${JSON.stringify(stmt.value)});\n`;
    }
  }

  return output;
}
