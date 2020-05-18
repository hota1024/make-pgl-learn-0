import { Token } from './Token'
import { Pos } from '../../classes'

/*
 * Comment token class.
 */
export class CommentToken extends Token {
  /**
   * Comment content.
   */
  readonly content: string

  /**
   * COmmentToken constructor.
   *
   * @param content Comment content.
   * @param pos Token position.
   */
  constructor(content: string, pos: Pos) {
    super(pos)
    this.content = content
  }
}
