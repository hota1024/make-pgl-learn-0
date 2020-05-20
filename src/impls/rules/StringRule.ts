import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext } from '../../types'
import { StringToken } from '../tokens'
import { Pos } from '../../classes'

/*
 * String rule class.
 */
export class StringRule implements LexerRuleInterface {
  /**
   * String literal quote array.
   */
  readonly quotes = [`'`, `"`]

  /**
   * String literal escape array.
   */
  readonly escapes = ['\\']

  validate({ char }: LexerAnalyzeContext): boolean {
    return this.isQuote(char())
  }

  execute({ char, forward, current }: LexerAnalyzeContext): StringToken {
    const start = current()
    const quote = char()
    let value = ''
    let escape = false

    while (true as true) {
      const item = forward()

      if (typeof item === 'undefined') {
        throw new Error('Unterminated string literal.')
      } else if (item === quote && !escape) {
        // Closing quote
        break
      } else if (this.isEscape(item)) {
        escape = !escape
      } else {
        value += item
        escape = false
      }
    }

    forward()

    return new StringToken(value, new Pos(start, current() - 1))
  }

  /**
   * Returns whether string is quote.
   *
   * @param string String.
   */
  private isQuote(string: string): boolean {
    return !!this.quotes.find((quote) => quote === string)
  }

  /**
   * Returns whether string is escape.
   *
   * @param string String.
   */
  private isEscape(string: string): boolean {
    return !!this.escapes.find((escape) => escape === string)
  }
}
