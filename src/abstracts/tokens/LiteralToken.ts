import { Token } from './Token'
import { Pos } from '../../classes'

/*
 * Literal token class.
 */
export class LiteralToken<T> extends Token {
  /**
   * Literal value.
   */
  readonly value: T

  /**
   * LiteralToken constructor.
   *
   * @param value Literal value.
   * @param pos Token position.
   */
  constructor(value: T, pos: Pos) {
    super(pos)
    this.value = value
  }
}
