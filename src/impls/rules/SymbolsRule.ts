import { LexerRuleInterface } from '../../interfaces'
import { SymbolToken } from '../../abstracts'
import {
  PlusToken,
  MinusToken,
  AsteriskToken,
  SlashToken,
  RightParenthesisToken,
  LeftParenthesisToken,
} from '..'
import { LexerMatchFunction, LexerAnalyzeContext } from '../../types'
import { Pos } from '../../classes'

/*
 * SymbolMatch type.
 */
export type SymbolMatch = {
  /**
   * Symbol string.
   */
  symbol: string

  /**
   * Symbol class.
   */
  class: typeof SymbolToken
}

/*
 * SymbolsRule class.
 */
export class SymbolsRule implements LexerRuleInterface {
  /**
   * Symbol matches.
   */
  readonly symbols: SymbolMatch[] = [
    {
      symbol: '+',
      class: PlusToken,
    },
    {
      symbol: '-',
      class: MinusToken,
    },
    {
      symbol: '*',
      class: AsteriskToken,
    },
    {
      symbol: '/',
      class: SlashToken,
    },
    {
      symbol: '(',
      class: LeftParenthesisToken,
    },
    {
      symbol: ')',
      class: RightParenthesisToken,
    },
  ]

  validate({ match }): boolean {
    return !!this.getSymbol(match)
  }

  execute({ match, forward, current }: LexerAnalyzeContext): SymbolToken {
    const symbol = this.getSymbol(match)
    const start = current()

    forward(symbol.symbol.length)

    return new symbol.class(new Pos(start, current()))
  }

  /**
   * Returns symbol.
   *
   * @param match Lexer match function.
   */
  private getSymbol(match: LexerMatchFunction): SymbolMatch {
    return this.symbols.find(({ symbol }) => match(symbol))
  }
}
