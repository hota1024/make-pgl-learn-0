import { LexerAnalyzeContext, Pos, LexerRuleInterface } from '..'

/*
 * LexerRuleAnalyzeError class.
 */
export class LexerRuleAnalyzeError extends Error {
  /**
   * Name.
   */
  readonly name = 'AnalyzeError'

  /**
   * Rule instance.
   */
  readonly rule?: LexerRuleInterface

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
   * LexerRuleAnalyzeError constructor with rule.
   *
   * @param message Error message.
   * @param rule Rule instance.
   * @param pos Error position.
   * @param context Lexer analyze context.
   */
  constructor(
    message: string,
    rule: LexerRuleInterface,
    pos: Pos,
    context: LexerAnalyzeContext
  )

  /**
   * LexerRuleAnalyzeError constructor.
   *
   * @param message Error message.
   * @param pos Error position.
   * @param context Lexer analyze context.
   */
  constructor(message: string, pos: Pos, context: LexerAnalyzeContext)

  constructor(message: string, ...args: unknown[]) {
    super(message)

    if (args[0] instanceof Pos) {
      this.pos = args[0]
      this.context = args[1] as LexerAnalyzeContext
    } else {
      this.rule = args[0] as LexerRuleInterface
      this.pos = args[1] as Pos
      this.context = args[2] as LexerAnalyzeContext
    }
  }
}
