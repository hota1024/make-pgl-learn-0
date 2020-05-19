import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext } from '../../types'
import { NumberToken } from '../tokens'
import { Pos } from '../../classes'

/*
 * Number rule class.
 */
export class NumberRule implements LexerRuleInterface {
  validate({ char }: LexerAnalyzeContext): boolean {
    return this.isNumber(char())
  }

  execute({ char, forward, current }: LexerAnalyzeContext): NumberToken {
    let value = ''
    const start = current()

    while (this.isNumber(char())) {
      value += char()
      forward()
    }

    return new NumberToken(Number(value), new Pos(start, current() - 1))
  }

  /**
   * Returns whether string is a number string.
   *
   * @param string String.
   */
  isNumber(string: string): boolean {
    return typeof string === 'string' && /[0-9]+/.test(string)
  }
}
