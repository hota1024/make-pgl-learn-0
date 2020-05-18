import { Token } from './Token'
import { Pos } from '../../classes'

/*
 * Identifier token class.
 */
export class IdentifierToken extends Token {
  /**
   * Identifier string.
   */
  readonly identifier: string

  /**
   * IdentifierToken constructor.
   *
   * @param identifier Identifier string.
   * @param pos Token position.
   */
  constructor(identifier: string, pos: Pos) {
    super(pos)
    this.identifier = identifier
  }
}
