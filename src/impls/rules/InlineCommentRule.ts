import { LexerRuleInterface } from '../../interfaces'
import { LexerAnalyzeContext, LexerMatchFunction } from '../../types'
import { InlineCommentToken } from '../tokens'
import { Pos } from '../../classes'

/*
 * InlineComment rule class.
 */
export class InlineCommentRule implements LexerRuleInterface {
  /**
   * Inline comment prefixes.
   */
  readonly prefixes = ['//', '#']

  validate({ match }: LexerAnalyzeContext): boolean {
    return !!this.getPrefix(match)
  }

  execute({
    match,
    char,
    forward,
    current,
  }: LexerAnalyzeContext): InlineCommentToken {
    const prefix = this.getPrefix(match)
    const start = current()
    let content = ''

    forward(prefix.length)

    while (char() && char() !== '\n') {
      content += char()
      forward()
    }

    return new InlineCommentToken(
      prefix,
      content,
      new Pos(start, current() - 1)
    )
  }

  /**
   * Returns prefix string.
   *
   * @param match Lexer match function.
   */
  private getPrefix(match: LexerMatchFunction): string | undefined {
    return this.prefixes.find(match)
  }
}
