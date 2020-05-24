import { ASTNodeInterface } from '../..'
import { Pos } from '../../classes'

/*
 * ASTNode class.
 */
export class ASTNode implements ASTNodeInterface {
  /**
   * Node position.
   */
  readonly pos: Pos

  /**
   * ASTNode constructor.
   *
   * @param pos Node position.
   */
  constructor(pos: Pos) {
    this.pos = pos
  }
}
