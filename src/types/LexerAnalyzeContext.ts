import { LexerInterface } from '../interfaces'

/**
 * Returns current char with offset.
 *
 * @param offset Offset.
 */
export type LexerCharFunction = (offset?: number) => string | undefined

/**
 * Forwarding current char and returns it.
 */
export type LexerNextFunction = () => string | undefined

/**
 * Returns whether current string matches patterns.
 *
 * @param patterns String and RegExp array.
 */
export type LexerMatchFunction = (...patterns: (string | RegExp)[]) => boolean

/*
 * LexerAnalyzeContext type.
 */
export type LexerAnalyzeContext = {
  /**
   * The lexer.
   */
  lexer: LexerInterface

  /**
   * Source string.
   */
  source: string

  char: LexerCharFunction

  next: LexerNextFunction

  match: LexerMatchFunction
}
