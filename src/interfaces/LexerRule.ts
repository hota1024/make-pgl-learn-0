import { Token } from '../abstracts'
import { LexerAnalyzeContext } from '../types'

/*
 * LexerRule interface.
 */
export interface LexerRuleInterface {
  /**
   * Execute rule.
   *
   * @param context Analyzing context.
   */
  execute(context: LexerAnalyzeContext): Token | void
}
