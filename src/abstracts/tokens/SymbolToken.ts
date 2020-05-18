import { Token } from './Token'
import { Pos } from '../../classes'

/*
 * Symbol token class.
 */
export class SymbolToken extends Token {
  /**
   * Symbol string.
   */
  readonly symbol: string

  /**
   * SymbolToken constructor.
   *
   * @param symbol Symbol string.
   * @param pos Token position.
   */
  constructor(symbol: string, pos: Pos) {
    super(pos)
    this.symbol = symbol
  }
}
