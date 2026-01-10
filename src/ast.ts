export enum TokenType {
  SET,
  SAY,
  IF,
  REPEAT,
  TO,
  IS,
  GREATER,
  THAN,
  EQUAL,
  TIMES,
  NUMBER,
  STRING,
  IDENTIFIER,
  NEWLINE,
  INDENT,
  DEDENT,
  EOF
}

export type Statement =
  | SetStatement
  | SayStatement
  | IfStatement
  | RepeatStatement;

export interface SetStatement {
  type: "Set";
  name: string;
  value: string | number;
}

export interface SayStatement {
  type: "Say";
  value: string;
}

export interface IfStatement {
  type: "If";
  left: string;
  operator: ">" | "==";
  right: number;
  body: Statement[];
}

export interface RepeatStatement {
  type: "Repeat";
  times: number;
  body: Statement[];
}

export interface Token {
  type: TokenType;
  value?: string;
}
