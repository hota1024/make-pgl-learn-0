import { LexerInterface, LexerRuleInterface } from '../interfaces'
import { Token } from '../abstracts'
import {
  LexerAnalyzeContext,
  LexerCharFunction,
  LexerForwardFunction,
  LexerMatchFunction,
} from '../types'

/*
 * Lexer class.
 */
export class Lexer implements LexerInterface {
  /**
   * Rules.
   */
  rules: LexerRuleInterface[]

  /**
   * Analyze source string and returns tokens.
   *
   * @param source Source string.
   */
  analyze(source: string): Token[] {
    const tokens: Token[] = []
    const context = this.makeAnalyzeContext(source)
    const { char } = context

    while (char()) {
      for (const rule of this.rules) {
        const result = rule.execute(context)
        if (result) {
          tokens.push(result)
          break
        }
      }
    }

    return tokens
  }

  /**
   * Returns analyzing context.
   *
   * @param source Souce string.
   */
  makeAnalyzeContext(source: string): LexerAnalyzeContext {
    let at = 0
    const length = source.length
    const char: LexerCharFunction = (offset = 0) => {
      return at + offset > length - 1 ? void 0 : source[at + offset]
    }
    const forward: LexerForwardFunction = () => {
      ++at
      return char()
    }
    const match: LexerMatchFunction = (pattern) => {
      for (let i = 0; i < pattern.length; ++i) {
        if (char(i) !== pattern[i]) return false
      }

      return true
    }

    const context: LexerAnalyzeContext = {
      lexer: this,
      source,
      char,
      forward,
      match,
      current: () => at,
    }

    return context
  }
}
