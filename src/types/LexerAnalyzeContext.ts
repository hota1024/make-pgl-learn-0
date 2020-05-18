import { LexerInterface } from '../interfaces'

/**
 * Returns current char with offset.
 *
 * @param offset Offset.
 */
export type LexerCharFunction = (offset?: number) => string | undefined

/**
 * Forward current char and returns it.
 */
export type LexerForwardFunction = () => string | undefined

/*
 * Returns current position in the source string.
 */
export type LexerCurrentFunction = () => number

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

  forward: LexerForwardFunction

  current: LexerCurrentFunction

  match: LexerMatchFunction
}
