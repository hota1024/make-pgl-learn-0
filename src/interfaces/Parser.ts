import { Token, ASTNode } from '../abstracts'

/*
 * Parser interface.
 */
export interface ParserInterface {
  /**
   * Parse tokens and returns AST.
   *
   * @param tokens
   */
  parse(tokens: Token[]): ASTNode[]
}
