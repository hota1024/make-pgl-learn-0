import { Token } from '../abstracts'

/*
 * Lexer interface.
 */
export interface LexerInterface {
  /**
   * Analyze source code and returns tokens.
   *
   * @param source Source code.
   */
  analyze(source: string): Token[]
}
