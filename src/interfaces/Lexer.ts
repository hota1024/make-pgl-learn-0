import { Token } from '../abstracts'
import { LexerRuleInterface } from './LexerRule'

/*
 * Lexer interface.
 */
export interface LexerInterface {
  /**
   * Lexer rules.
   */
  readonly rules: LexerRuleInterface[]

  /**
   * Analyze source code and returns tokens.
   *
   * @param source Source code.
   */
  analyze(source: string): Token[]
}
