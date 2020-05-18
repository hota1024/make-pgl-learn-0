import { Token } from '../abstracts'
import { LexerAnalyzeContext } from '../types'

/*
 * LexerRule interface.
 */
export interface LexerRuleInterface {
  /**
   * Validate context for this rule.
   *
   * @param context Analyzing context.
   */
  validate(context: LexerAnalyzeContext): boolean

  /**
   * Execute rule.
   *
   * @param context Analyzing context.
   */
  execute(context: LexerAnalyzeContext): Token
}
