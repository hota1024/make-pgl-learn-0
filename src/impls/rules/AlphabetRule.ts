import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext } from '../../types'
import { PrintToken } from '../tokens'
import { Pos } from '../../classes'
import { IdentifierToken, Token } from '../../abstracts'

/*
 * Alphabet rule.
 */
export class AlphabetRule implements LexerRuleInterface {
  validate({ char }: LexerAnalyzeContext): boolean {
    return this.isAlphabet(char())
  }

  execute({ char, forward, current }: LexerAnalyzeContext): Token {
    let value = ''
    const start = current()

    while (this.isAlphabet(char()) || this.isNumber(char())) {
      value += char()
      forward()
    }

    const pos = new Pos(start, current())

    if (value === 'print') {
      return new PrintToken(pos)
    }

    return new IdentifierToken(value, pos)
  }

  /**
   * Returns whether string is a alphabet.
   *
   * @param string String.
   */
  isAlphabet(string: string): boolean {
    return typeof string === 'string' && /[a-zA-Z]/.test(string)
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
