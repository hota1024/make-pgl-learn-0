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
   * Lexer rules.
   */
  readonly rules: LexerRuleInterface[]

  /**
   * Lexer constructor.
   *
   * @param rules Lexer rules.
   */
  constructor(rules: LexerRuleInterface[]) {
    this.rules = rules
  }

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
      const rule = this.rules.find((rule) => rule.validate(context))
      if (rule) {
        const token = rule.execute(context)
        tokens.push(token)
      } else {
        throw new Error(`Unexpected token '${char()}':${context.current()}`)
        // context.forward()
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
    const forward: LexerForwardFunction = (steps = 1) => {
      at += steps
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
