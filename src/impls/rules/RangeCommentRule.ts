import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext, LexerMatchFunction } from '../../types'
import { RangeCommentToken } from '..'
import { Pos, LexerRuleAnalyzeError } from '../../classes'

/*
 * RangeCommentCap type.
 */
export type RangeCommentCap = {
  /**
   * Start cap.
   */
  start: string

  /**
   * End cap.
   */
  end: string
}

/*
 * RangeComment rule class.
 */
export class RangeCommentRule implements LexerRuleInterface {
  /**
   * RangeComment caps.
   */
  readonly caps: RangeCommentCap[] = [
    {
      start: '/*',
      end: '*/',
    },
  ]

  validate({ match }: LexerAnalyzeContext): boolean {
    return !!this.getCap(match)
  }

  execute(context: LexerAnalyzeContext): RangeCommentToken {
    const { match, forward, current } = context
    const cap = this.getCap(match)
    const start = current()
    let content = ''

    forward(cap.start.length - 1)

    while (true as true) {
      const item = forward()

      if (typeof item === 'undefined') {
        throw new LexerRuleAnalyzeError(
          'Unterminated range comment.',
          this,
          new Pos(start, current()),
          context
        )
      } else if (match(cap.end)) {
        break
      } else {
        content += item
      }
    }

    forward(cap.end.length)

    return new RangeCommentToken(
      cap.start,
      cap.end,
      content,
      new Pos(start, current() - 1)
    )
  }

  /**
   * Returns cap.
   *
   * @param match Lexer match function.
   */
  private getCap(match: LexerMatchFunction): RangeCommentCap {
    return this.caps.find((cap) => match(cap.start))
  }
}
