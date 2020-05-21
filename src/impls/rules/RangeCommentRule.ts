import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext, LexerMatchFunction } from '../../types'
import { RangeCommentToken } from '..'
import { Pos } from '../../classes'

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

  execute({ match, forward, current }: LexerAnalyzeContext): RangeCommentToken {
    const cap = this.getCap(match)
    const start = current()
    let content = ''

    forward(cap.start.length - 1)

    while (true as true) {
      const item = forward()

      if (typeof item === 'undefined') {
        throw new Error('Unterminated comment')
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
