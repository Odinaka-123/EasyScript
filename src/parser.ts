import { TokenType, Token, Statement } from "./ast";

export function parse(tokens: Token[]): Statement[] {
  const statements: Statement[] = [];
  let i = 0;

  while (tokens[i].type !== TokenType.EOF) {
    const token = tokens[i];

    if (token.type === TokenType.SET) {
      const name = tokens[i + 1].value!;
      const value = tokens[i + 3].value!;
      statements.push({
        type: "Set",
        name,
        value: isNaN(Number(value)) ? value : Number(value)
      });
      i += 4;
      continue;
    }

    if (token.type === TokenType.SAY) {
      const value = tokens[i + 1].value!;
      statements.push({ type: "Say", value });
      i += 2;
      continue;
    }

    i++;
  }

  return statements;
}
