import { LexerAnalyzeContext, Pos } from '..'

/*
 * LexerRuleAnalyzeError class.
 */
export class LexerRuleAnalyzeError extends Error {
  /**
   * Error position.
   */
  readonly pos: Pos

  /**
   * Lexer analyze context.
   */
  readonly context: LexerAnalyzeContext

  /**
   * Source string.
   */
  get source(): string {
    return this.context.source
  }

  /**
   * LexerRuleAnalyzeError constructor.
   *
   * @param message Error message.
   * @param pos Error position.
   * @param context Lexer analyze context.
   */
  constructor(message: string, pos: Pos, context: LexerAnalyzeContext) {
    super(message)
    this.pos = pos
    this.context = context
  }
}
