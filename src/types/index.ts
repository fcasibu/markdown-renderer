// prettier-ignore
export enum TokenType {
  HASH, STAR, UNDERSCORE, TILDE, BACKTICK, TITLE,
  CODE_FENCE, CODE_TEXT, BANG, LBRACKET, RBRACKET, 
  LPAREN, RPAREN, NUMBER, DOT, DASH, GT, URL, IMAGE,
  HORIZONTAL_RULE, TEXT, WHITESPACE, INDENT, EOL, EOF
}

export interface Token {
  type: TokenType;
  value: string;
  line: number;
  col: number;
}

// prettier-ignore
export enum NodeType {
  DOCUMENT, PARAGRAPH, HEADING, LIST, LIST_ITEM, CODE_BLOCK,
  BLOCKQUOTE, HORIZONTAL_RULE, LINK, IMAGE, EMPHASIS, STRONG,
  INLINE_CODE, TEXT
}

export interface BaseNode {
  type: NodeType;
  children: AnyNode[];
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingNode extends BaseNode {
  type: NodeType.HEADING;
  level: HeadingLevel;
}

export interface ListNode extends BaseNode {
  type: NodeType.LIST;
  children: ListItemNode[];
}

export interface ListItemNode extends BaseNode {
  type: NodeType.LIST_ITEM;
}

export interface ParagprahNode extends BaseNode {
  type: NodeType.PARAGRAPH;
}

export interface TextNode extends BaseNode {
  type: NodeType.TEXT;
  value: string;
}

export interface LinkNode extends BaseNode {
  type: NodeType.LINK;
  href: string;
  title: string;
}

export interface ImageNode extends BaseNode {
  type: NodeType.IMAGE;
  src: string;
  title: string;
}

export interface CodeBlockNode extends BaseNode {
  type: NodeType.CODE_BLOCK;
  language: string;
}

export interface CodeInlineNode extends BaseNode {
  type: NodeType.INLINE_CODE;
}

export interface BlockQuoteNode extends BaseNode {
  type: NodeType.BLOCKQUOTE;
}

export interface StrongNode extends BaseNode {
  type: NodeType.STRONG;
}

export interface EmphasisNode extends BaseNode {
  type: NodeType.EMPHASIS;
}

export interface EmphasisNode extends BaseNode {
  type: NodeType.EMPHASIS;
}

export interface HorizontalRuleNode extends BaseNode {
  type: NodeType.HORIZONTAL_RULE;
}

export type AnyNode =
  | HeadingNode
  | ListNode
  | ListItemNode
  | ParagprahNode
  | TextNode
  | LinkNode
  | ImageNode
  | CodeBlockNode
  | CodeInlineNode
  | BlockQuoteNode
  | StrongNode
  | EmphasisNode
  | HorizontalRuleNode;
