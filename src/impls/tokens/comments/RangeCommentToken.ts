import { CommentToken } from '../../../abstracts'
import { Pos } from '../../../classes'

/*
 * RangeComment token class.
 */
export class RangeCommentToken extends CommentToken {
  /**
   * Range comment prefix.
   */
  readonly prefix: string

  /**
   * Range comment suffix.
   */
  readonly suffix: string

  /**
   * RangeCommentToken constructor.
   *
   * @param prefix Comment prefix.
   * @param suffix Comment suffix.
   * @param content Comment content.
   * @param pos Token position.
   */
  constructor(prefix: string, suffix: string, content: string, pos: Pos) {
    super(content, pos)
    this.prefix = prefix
    this.suffix = suffix
  }
}
