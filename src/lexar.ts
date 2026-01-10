import { TokenType, Token } from "./ast";

const KEYWORDS: Record<string, TokenType> = {
  set: TokenType.SET,
  say: TokenType.SAY,
  if: TokenType.IF,
  repeat: TokenType.REPEAT,
  to: TokenType.TO,
  is: TokenType.IS,
  greater: TokenType.GREATER,
  than: TokenType.THAN,
  equal: TokenType.EQUAL,
  times: TokenType.TIMES,
};

export function lex(input: string): Token[] {
  const tokens: Token[] = [];
  const lines = input.split("\n");

  for (const line of lines) {
    const words = line.trim().split(/\s+/);

    for (const word of words) {
      if (KEYWORDS[word]) {
        tokens.push({ type: KEYWORDS[word] });
      } else if (!isNaN(Number(word))) {
        tokens.push({ type: TokenType.NUMBER, value: word });
      } else if (word.startsWith('"')) {
        tokens.push({ type: TokenType.STRING, value: word.replace(/"/g, "") });
      } else if (word.length > 0) {
        tokens.push({ type: TokenType.IDENTIFIER, value: word });
      }
    }

    tokens.push({ type: TokenType.NEWLINE });
  }

  tokens.push({ type: TokenType.EOF });
  return tokens;
}
