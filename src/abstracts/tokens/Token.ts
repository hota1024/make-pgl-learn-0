import { TokenInterface } from '../../interfaces'
import { Pos } from '../../classes'

/*
 * Token class.
 */
export class Token implements TokenInterface {
  /**
   * Token position.
   */
  readonly pos: Pos

  /**
   * Token constructor.
   *
   * @param pos Token position.
   */
  constructor(pos: Pos) {
    this.pos = pos
  }
}
