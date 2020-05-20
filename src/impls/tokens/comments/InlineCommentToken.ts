import { CommentToken } from '../../../abstracts'
import { Pos } from '../../../classes'

/*
 * InlineComment token class.
 */
export class InlineCommentToken extends CommentToken {
  /**
   * Inline comment prefix.
   */
  readonly prefix: string

  /**
   * InlineCommentToken constructor.
   *
   * @param prefix Comment prefix.
   * @param content Comment content.
   * @param pos Token position.
   */
  constructor(prefix: string, content: string, pos: Pos) {
    super(content, pos)
    this.prefix = prefix
  }
}
